(ns trout.core
  (:require #?(:clj [clojure.spec.alpha :as s]
               :cljs [cljs.spec.alpha :as s])))



#_(s/fdef defroutes
        :args ::defroutes
        :ret any?)


#_(defmacro defroutes
  [name & routes]
  (let [conformation (s/conform ::routes routes)
          parse-specs
          (for [{:keys [route-name route-definition]} conformation
                :let [parts (for [[idx [part-type part-data]] (map-indexed vector route-definition)
                                  :let [auto-key (keyword (str "trout.core/arg-" idx))
                                        named-key (case part-type
                                                    :named-value (:name part-data)
                                                    :named-any part-data
                                                    :static auto-key)
                                        pred (case part-type
                                               :named-value `(eq (:value part-data))
                                               :named-any `string?
                                               :static `(eq part-data))]]
                              [named-key pred])]]
            [route-name (apply concat parts)])]
     `(def ~name
        {:parse-specs (s/spec (s/or ~@(apply concat
                                             (for [[rn sp] parse-specs]
                                               [rn `(s/cat ~@sp)]))))})))

(defmacro catv [args] #?(:cljs `(s/cat ~@args)))

(defmacro orv [args] #?(:cljs `(s/or ~@args)))
