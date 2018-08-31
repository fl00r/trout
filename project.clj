(defproject trout "0.1.0-SNAPSHOT"
  :description "CLJS routing library"
  :url "https://github.com/fl00r/trout"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:main trout.core
                                   :optimizations :none
                                   :cache-analysis true
                                   :source-map true
                                   :asset-path "/js/out"
                                   :output-to "trout.js"
                                   :output-dir "resources/js/out"}}]}
  :profiles {:dev {:dependencies [[cider/piggieback "0.3.9"]
                                  ;[figwheel-sidecar "0.5.16"]
                                  ]
                   :plugins [[cider/cider-nrepl "0.18.0"]
                             [lein-cljsbuild "1.1.7"]
                             ]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl
                                                     ]}}})
