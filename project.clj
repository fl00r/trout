(defproject org.clojars.fl00r/trout "0.1.3-SNAPSHOT"
  :description "CLJS routing library"
  :url "https://github.com/fl00r/trout"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]]
  :source-paths ["src"]
  :test-paths ["test"]
  :profiles {:dev {:dependencies [[bidi "2.1.4"]
                                  [funcool/bide "1.6.0"]
                                  [org.clojure/test.check "0.10.0-alpha3"]]}})
