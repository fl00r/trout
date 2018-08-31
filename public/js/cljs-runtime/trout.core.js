goog.provide('trout.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
trout.core.match = (function trout$core$match(compiled_routes,path){
return null;
});
trout.core.path_for = (function trout$core$path_for(var_args){
var G__22728 = arguments.length;
switch (G__22728) {
case 2:
return trout.core.path_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return trout.core.path_for.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

trout.core.path_for.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,route){
return trout.core.path_for.cljs$core$IFn$_invoke$arity$3(compiled_routes,route,cljs.core.PersistentArrayMap.EMPTY);
});

trout.core.path_for.cljs$core$IFn$_invoke$arity$3 = (function (compiled_routes,route,params){
return null;
});

trout.core.path_for.cljs$lang$maxFixedArity = 3;

trout.core.compile = (function trout$core$compile(routes){
return routes;
});
trout.core.primer = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("trout.core","new-post","trout.core/new-post",-595342028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resource","resource",251898836),"posts"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),"new"], null)], null),new cljs.core.Keyword("trout.core","show-post","trout.core/show-post",-205046325),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"module","module",1424618191),"post"], null),new cljs.core.Keyword(null,"post-id","post-id",1618659080)], null),new cljs.core.Keyword("trout.core","edit-post","trout.core/edit-post",686698746),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resource","resource",251898836),"posts"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),"edit"], null),new cljs.core.Keyword(null,"post-id","post-id",1618659080)], null),new cljs.core.Keyword("trout.core","all-posts","trout.core/all-posts",-249305978),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resource","resource",251898836),"posts"], null)], null),new cljs.core.Keyword("trout.core","post-all-comments","trout.core/post-all-comments",1621809466),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resource","resource",251898836),"posts"], null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subresource","subresource",1099202280),"comments"], null)], null),new cljs.core.Keyword("trout.core","post-new-comment","trout.core/post-new-comment",593968250),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resource","resource",251898836),"posts"], null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subresource","subresource",1099202280),"comments"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),"new"], null)], null),new cljs.core.Keyword("trout.core","post-all-shares","trout.core/post-all-shares",1298537686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resource","resource",251898836),"posts"], null),new cljs.core.Keyword(null,"post-id","post-id",1618659080),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subresource","subresource",1099202280),"shares"], null)], null)], null);
trout.core.compiled_routes = trout.core.compile(trout.core.primer);

//# sourceMappingURL=trout.core.js.map
