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

## Benchmark

```
op=resolve lib=bidi ops=10000
"Elapsed time: 140.707976 msecs"
op=resolve lib=bide ops=10000
"Elapsed time: 43.045317 msecs"
op=resolve lib=trout ops=10000
"Elapsed time: 49.862122 msecs"
op=match lib=bidi ops=10000
"Elapsed time: 1235.506547 msecs"
op=match lib=bide ops=10000
"Elapsed time: 34.076385 msecs"
op=match lib=trout ops=10000
"Elapsed time: 772.447998 msecs"
```

## Usage

FIXME

## License

Copyright © 2018 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
