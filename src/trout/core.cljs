(ns trout.core
  (:require [trout.patch :as patch]
            [cljs.spec.alpha :as s]
            [clojure.string :as string]))

(s/def ::named-value
  (s/cat :name keyword? :value string?))

(s/def ::named-any keyword?)

(s/def ::static string?)

(s/def ::route-part
  (s/or :named-value ::named-value
        :named-any ::named-any
        :static ::static))

(s/def ::route-definition
  (s/coll-of ::route-part))

(s/def ::route-name keyword?)

(s/def ::routes (s/* (s/cat :route-name ::route-name
                            :route-definition ::route-definition)))

(s/def ::defroutes (s/cat :name symbol? :routes ::routes))

(defn- eq
  [s]
  #(= % s))

(defn- part-specs
  [route-definition]
  (for [[idx [part-type part-data]] (map-indexed vector route-definition)
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
    [route-name (apply concat parts)]))

(defn- ors-specs
  [routes]
  (apply concat
         (for [[rn sp] routes]
           [rn (patch/cat sp)])))

(defn- get-from-opts
  [k]
  #(or (get % k)
       (throw (ex-info (str "Key " k " is missing") {:missing-key k}))))

(defn- get-path
  [route-definition]
  (let [parts (for [[part-type part-data] route-definition
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

#_(defn- get-path-spec
  [route-definition]
  (let [keys (for [[part-type part-data] route-definition
                   :when (= part-type :named-any)]
               part-data)]
    (patch/keys :req-un part-data)))

(defn- get-paths
  [conformed-routes]
  (let [paths (for [{:keys [route-name route-definition]} conformed-routes
                    :let [path (get-path route-definition)
                          ;path-spec (get-path-spec route-definition)
                          ]]
                [route-name {::path path
                             ;:spec path-spec
                             }])]
    (into {}  paths)))

(defn compile
  [& routes]
  (let [conformed-routes (s/conform ::routes routes)
        routes (route-specs conformed-routes)
        ors (ors-specs routes)
        paths (get-paths conformed-routes)]
    {::routes (s/spec (patch/or ors))
     ::paths paths}))

(defn match
  [routes path]
  (let [parts (rest (string/split path #"/"))
        specs (::routes routes)
        route (s/conform specs parts)]
    (if (= route ::s/invalid)
      (throw (ex-info "Path doesn't match any" {:path path}))
      route)))

(defn path-for
  ([routes path]
   (path-for routes path {}))
  ([routes path opts]
   (let [paths (::paths routes)
         current-path (or (get-in paths [path ::path])
                          (throw (ex-info "Path down't exist" {:path path})))
         rendered-path (current-path opts)]
     rendered-path)))
