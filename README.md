# trout


```clojurescript

(require '[trout.core :as t])

(def routes
  (t/compile
    ::new-post
    [[:resource "posts"]
     [:action "new"]]

    ::show-post
    [[:resource "posts"]
     :post-id]

    ::edit-post
    [[:resource "posts"]
     :post-id
     [:action "edit"]]))
     
(t/match routes "/posts/new")
#=> [:cljs.user/new-post {:resource "posts", :action "new"}]

(t/match routes "/posts/123/edit")
#=> [:cljs.user/edit-post {:resource "posts", :post-id "123", :action "edit"}]

(t/match routes "/posts/123/whatever")
#=> #error {:message "Path doesn't match any", :data {:path "/posts/123/whatever"}}



(t/path-for routes ::new-post)
#=> "/posts/new"

(t/path-for routes ::edit-post {:post-id 123})
#=> "/posts/123/edit"

(t/path-for routes ::edit-post)
#=> #error {:message "Key :post-id is missing", :data {:missing-key :post-id}}

(t/path-for routes ::delete-post {:post-id 123})
#=> #error {:message "Path doesn't exist", :data {:path :cljs.user/delete-post}}
```


## Usage

FIXME

## License

Copyright © 2018 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
