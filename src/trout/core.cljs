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
  (s/and #(not= % :?)
   (s/or :named-value ::named-value
         :named-any ::named-any
         :static ::static)))

(s/def ::route-definition
  (s/spec (s/cat :required (s/* ::route-part)
                 :? (s/? (eq :?))
                 :optional (s/* ::route-part)
                 :meta (s/? map?))))

(s/def ::route-name keyword?)

(s/def ::routes (s/* (s/cat :route-name ::route-name
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

(defn compile
  [& routes]
  (let [conformed-routes (s/conform ::routes routes)
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
       ::meta (or meta {})})))

(defn path-for
  ([routes path]
   (path-for routes path {}))
  ([routes path opts]
   (let [paths (::paths routes)
         current-path (or (get-in paths [path ::path])
                          (throw (ex-info "Path doesn't exist" {:path path})))
         rendered-path (current-path opts)]
     rendered-path)))
