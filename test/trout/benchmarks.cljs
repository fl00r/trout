(ns trout.benchmarks
  (:require [bide.core :as bide]
            [bidi.bidi :as bidi]
            [trout.core :as trout]))

(enable-console-print!)

(def bidi-routes
  ["/" [["auth/login" :auth/login]
        [["auth/recovery/token/" :token] :auth/recovery]
        ["workspace/" [[[:project "/" :page] :workspace/page]]]]])

(def bide-routes
  (bide/router
   [["/auth/login" :auth/login]
    ["/auth/recovery/token/:token" :auth/recovery]
    ["/workspace/:project/:page" :workspace/page]]))

(def trout-routes
  (trout/compile
   :auth/login [[:resource "auth"]
                [:action "login"]]
   :auth/recovery [[:resource "auth"]
                   [:action "recovery"]
                   "token"
                   :token]
   :workspace/page [[:resource "workspace"]
                    :project :page]))

(defn benchmark-bidi-resolve
  [ops]
  ;; Warm Up
  (dotimes [i ops]
    (bidi/path-for bidi-routes :workspace/page :project 1 :page 1))

  (time
   (dotimes [i ops]
     (bidi/path-for bidi-routes :workspace/page :project 1 :page 1))))

(defn benchmark-bide-resolve
  [ops]
  ;; Warm Up
  (dotimes [i ops]
    (bide/resolve bide-routes :workspace/page {:project 1 :page 1}))

  (time
   (dotimes [i ops]
     (bide/resolve bide-routes :workspace/page {:project 1 :page 1}))))

(defn benchmark-trout-resolve
  [ops]
  ;; Warm Up
  (dotimes [i ops]
    (trout/path-for trout-routes :workspace/page {:project 1 :page 1}))

  (time
   (dotimes [i ops]
     (trout/path-for trout-routes :workspace/page {:project 1 :page 1}))))

(defn benchmark-bidi-match
  [ops]
  ;; Warn Up
  (dotimes [i ops]
    (bidi/match-route bidi-routes "/workspace/1/1"))

  (time
   (dotimes [i ops]
     (bidi/match-route bidi-routes "/workspace/1/1"))))

(defn benchmark-bide-match
  [ops]
  ;; Warm Up
  (dotimes [i ops]
    (bide/match bide-routes "/workspace/1/1"))

  (time
   (dotimes [i ops]
     (bide/match bide-routes "/workspace/1/1"))))

(defn benchmark-trout-match
  [ops]
  ;; Warm Up
  (dotimes [i ops]
    (trout/match trout-routes "/workspace/1/1"))

  (time
   (dotimes [i ops]
     (trout/match trout-routes "/workspace/1/1"))))

(defn main
  [& args]
  (do
    (println "op=resolve lib=bidi ops=10000")
    (benchmark-bidi-resolve 10000))

  (do
    (println "op=resolve lib=bide ops=10000")
    (benchmark-bide-resolve 10000))

  (do
    (println "op=resolve lib=trout ops=10000")
    (benchmark-trout-resolve 10000))

  (do
    (println "op=match lib=bidi ops=10000")
    (benchmark-bidi-match 10000))

  (do
    (println "op=match lib=bide ops=10000")
    (benchmark-bide-match 10000))

  (do
    (println "op=match lib=trout ops=10000")
    (benchmark-trout-match 10000)))

(set! *main-cli-fn* main)
