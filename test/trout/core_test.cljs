(ns trout.core-test
  (:require [trout.core :as sut]
            [cljs.test :as t :include-macros true]))

(def routes
  (sut/compile
   ::root []
   ::route-1 [[:resource "router"]
              [:route "1"]]
   ::route-2 [[:resource "router"]
              [:route "2"]]
   ::new-route [[:resource "router"]
                [:action "new"]]
   ::edit-route [[:resource "router"]
                 [:action "edit"]
                 :route-id]
   ::route-with-static [[:resource "router"]
                        "static"
                        :route-id]
   ::route-with-meta [[:resource "router"]
                      [:action "with-meta"]
                      {:auth :logged-in
                       :role :admin}]))

(t/deftest path-for-test
  (t/are [l r]
      (= (apply sut/path-for routes l) r)
    [::root] "/"
    [::root {}] "/"
    [::root {} {"foo" "bar"}] "/?foo=bar"
    [::route-1] "/router/1"
    [::route-2] "/router/2"
    [::new-route] "/router/new"
    [::edit-route {:route-id 10}] "/router/edit/10"
    [::route-with-static {:route-id 42}] "/router/static/42"
    [::route-with-meta] "/router/with-meta"))

(t/deftest match-test
  (t/are [l r]
      (= (sut/match routes l) r)
    "/" {::sut/name ::root
         ::sut/data {}
         ::sut/meta {}}
    "/router/1" {::sut/name ::route-1
                 ::sut/data {:resource "router"
                             :route "1"}
                 ::sut/meta {}}
    "/router/2" {::sut/name ::route-2
                 ::sut/data {:resource "router"
                             :route "2"}
                 ::sut/meta {}}
    "/router/new" {::sut/name ::new-route
                   ::sut/data {:resource "router"
                               :action "new"}
                   ::sut/meta {}}
    "/router/edit/4" {::sut/name ::edit-route
                      ::sut/data {:resource "router"
                                  :action "edit"
                                  :route-id "4"}
                      ::sut/meta {}}
    "/router/static/42" {::sut/name ::route-with-static
                         ::sut/data {:resource "router"
                                     :route-id "42"
                                     ::sut/arg-1 "static"}
                         ::sut/meta {}}
    "/router/with-meta" {::sut/name ::route-with-meta
                         ::sut/data {:resource "router"
                                     :action "with-meta"}
                         ::sut/meta {:auth :logged-in
                                     :role :admin}}))

