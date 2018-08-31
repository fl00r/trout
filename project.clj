(defproject org.clojars.fl00r/trout "0.1.1-SNAPSHOT"
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
  :profiles {:dev {:dependencies []
                   :plugins [[lein-cljsbuild "1.1.7"]]
                   :repl-options {}}})
