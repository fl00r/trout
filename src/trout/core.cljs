(ns trout.core
  (:require [trout.patch :as patch]
            [cljs.spec.alpha :as s]
            [clojure.string :as string]))

(defn- eq
  [s]
  #(= % s))

(s/def ::named-value
  (s/cat :name keyword? :value string?))

(s/def ::named-any keyword?)

(s/def ::static string?)

(s/def ::route-part
  (s/or :named-value ::named-value
        :named-any ::named-any
        :static ::static))

(s/def ::route-definition
  ;(s/coll-of ::route-part)
  (s/cat :required (s/coll-of ::route-part)
         :optional (s/? (s/coll-of ::route-name))
         :meta (s/? map?)))

(s/def ::route-name keyword?)

(s/def ::routes (s/coll-of (s/cat :route-name ::route-name
                            :route-definition ::route-definition)))

(defn- part-specs
  [route-definition]
  (for [[idx [part-type part-data]] (map-indexed vector (:required route-definition))
        :let [auto-key (keyword (str "trout.core/arg-" idx))
              named-key (case part-type
                          :named-value (:name part-data)
                          :named-any part-data
                          :static auto-key)
              pred (case part-type
                     :named-value (eq (:value part-data))
                     :named-any string?
                     :static (eq part-data))]]
    [named-key pred]))

(defn- route-specs
  [conformed-routes]
  (for [{:keys [route-name route-definition]} conformed-routes
        :let [parts (part-specs route-definition)]]
    [route-name (apply concat parts) (:meta route-definition)]))

(defn- ors-specs
  [routes]
  (apply concat
         (for [[rn sp meta] routes]
           [rn (patch/cat sp)])))

(defn- get-from-opts
  [k]
  #(or (get % k)
       (throw (ex-info (str "Key " k " is missing") {:missing-key k}))))

(defn- get-path
  [route-definition]
  (let [parts (for [[part-type part-data] (:required route-definition)
                    :let [part (case part-type
                                 :named-value (constantly (:value part-data))
                                 :named-any (get-from-opts part-data)
                                 :static (constantly part-data))]]
                part)]
    (fn [opts]
      (->> parts
           (map #(% opts))
           (string/join "/")
           (str "/")))))

(defn- get-paths
  [conformed-routes]
  (let [paths (for [{:keys [route-name route-definition]} conformed-routes
                    :let [path (get-path route-definition)]]
                [route-name {::path path}])]
    (into {}  paths)))

(defn- transform
  [routes]
  (for [[route-name route-data] (partition 2 routes)
        :let [[head _ tail] (partition-by (partial = :?) route-data)
              [required optional meta]
              (if tail
                (let [[optional [meta]] (partition-by map? rest)]
                  [head optional meta])
                (let [[required [meta]] (partition-by map? head)]
                  [required [] (or meta {})]))]]
    [route-name required optional meta]))

(defn compile
  [& routes]
  (let [transformed-routes (transform routes)
        conformed-routes (s/conform ::routes transformed-routes)
        all-routes (route-specs conformed-routes)
        ors (ors-specs all-routes)
        metas (->> all-routes
                   (map (juxt first last))
                   (into {}))
        paths (get-paths conformed-routes)]
    {::routes (s/spec (patch/or ors))
     ::paths paths
     ::metas metas}))

(defn match
  [routes path]
  (let [parts (rest (string/split path #"/"))
        specs (::routes routes)
        metas (::metas routes)
        route (s/conform specs parts)
        [route-name route-data] route
        meta (get metas route-name)]
    (if (= route ::s/invalid)
      (throw (ex-info "Path doesn't match any" {:path path}))
      {::name route-name
       ::data route-data
       ::meta meta})))

(defn path-for
  ([routes path]
   (path-for routes path {}))
  ([routes path opts]
   (let [paths (::paths routes)
         current-path (or (get-in paths [path ::path])
                          (throw (ex-info "Path doesn't exist" {:path path})))
         rendered-path (current-path opts)]
     rendered-path)))
