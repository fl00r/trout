(ns trout.patch
  (:refer-clojure :exclude [+ * and or cat def keys merge resolve assert])
  (:require [cljs.spec.alpha :as s]
            [clojure.walk :as walk]
            [cljs.analyzer.api :refer [resolve]]
            [clojure.string :as str]))

;;
;;
;; That's a copypaste of cljs.spec.alpha
;;
;; The rationale is following:
;; we can't generate specs dynamically
;; as far as we can't apply vectors to macros
;; in cljs anyway.
;;
;; So we are converting `cat` and `or` macros
;; into plain functions.
;;
;;

(defn- ->sym
  "Returns a symbol from a symbol or var"
  [x]
  (if (map? x)
    (:name x)
    x))

(defn- unfn [expr]
  (if (clojure.core/and (seq? expr)
                        (symbol? (first expr))
                        (= "fn*" (name (first expr))))
    (let [[[s] & form] (rest expr)]
      (conj (walk/postwalk-replace {s '%} form) '[%] 'cljs.core/fn))
    expr))

(defn- res [env form]
  (cond
    (keyword? form) form
    (symbol? form) (let [resolved (clojure.core/or (->> form (resolve env) ->sym) form)
                           ns-name (namespace resolved)]
                      (symbol
                       (if (clojure.core/and ns-name (str/ends-with? ns-name "$macros"))
                         (subs ns-name 0 (- (count ns-name) 7))
                         ns-name)
                       (name resolved)))
    (sequential? form) (walk/postwalk #(if (symbol? %) (res env %) %) (unfn form))
    :else form))


(defn cat
  [key-pred-forms]
  (let [pairs (partition 2 key-pred-forms)
        keys (mapv first pairs)
        pred-forms (mapv second pairs)
        pf (mapv #(res 'trout.core/cat %) pred-forms)]
    (clojure.core/assert (clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys)) "cat expects k1 p1 k2 p2..., where ks are keywords")
    (s/cat-impl keys pred-forms pf)))

(defn or
  [key-pred-forms]
  (let [pairs (partition 2 key-pred-forms)
        keys (mapv first pairs)
        pred-forms (mapv second pairs)
        pf (mapv #(res 'trout.core/or %) pred-forms)]
    (clojure.core/assert (clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys)) "spec/or expects k1 p1 k2 p2..., where ks are keywords")
   (s/or-spec-impl keys pf pred-forms nil)))
