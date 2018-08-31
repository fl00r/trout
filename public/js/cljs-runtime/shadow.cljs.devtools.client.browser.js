goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24272 = arguments.length;
var i__4532__auto___24273 = (0);
while(true){
if((i__4532__auto___24273 < len__4531__auto___24272)){
args__4534__auto__.push((arguments[i__4532__auto___24273]));

var G__24274 = (i__4532__auto___24273 + (1));
i__4532__auto___24273 = G__24274;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq24270){
var G__24271 = cljs.core.first(seq24270);
var seq24270__$1 = cljs.core.next(seq24270);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24271,seq24270__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__24275){
var map__24276 = p__24275;
var map__24276__$1 = ((((!((map__24276 == null)))?(((((map__24276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24276):map__24276);
var src = map__24276__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24276__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24276__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__24278 = cljs.core.seq(sources);
var chunk__24279 = null;
var count__24280 = (0);
var i__24281 = (0);
while(true){
if((i__24281 < count__24280)){
var map__24282 = chunk__24279.cljs$core$IIndexed$_nth$arity$2(null,i__24281);
var map__24282__$1 = ((((!((map__24282 == null)))?(((((map__24282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24282):map__24282);
var src = map__24282__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24282__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24282__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24282__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__24286 = seq__24278;
var G__24287 = chunk__24279;
var G__24288 = count__24280;
var G__24289 = (i__24281 + (1));
seq__24278 = G__24286;
chunk__24279 = G__24287;
count__24280 = G__24288;
i__24281 = G__24289;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__24278);
if(temp__5457__auto__){
var seq__24278__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24278__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__24278__$1);
var G__24290 = cljs.core.chunk_rest(seq__24278__$1);
var G__24291 = c__4351__auto__;
var G__24292 = cljs.core.count(c__4351__auto__);
var G__24293 = (0);
seq__24278 = G__24290;
chunk__24279 = G__24291;
count__24280 = G__24292;
i__24281 = G__24293;
continue;
} else {
var map__24284 = cljs.core.first(seq__24278__$1);
var map__24284__$1 = ((((!((map__24284 == null)))?(((((map__24284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24284):map__24284);
var src = map__24284__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24284__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24284__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24284__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24284__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__24294 = cljs.core.next(seq__24278__$1);
var G__24295 = null;
var G__24296 = (0);
var G__24297 = (0);
seq__24278 = G__24294;
chunk__24279 = G__24295;
count__24280 = G__24296;
i__24281 = G__24297;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__24298 = cljs.core.seq(js_requires);
var chunk__24299 = null;
var count__24300 = (0);
var i__24301 = (0);
while(true){
if((i__24301 < count__24300)){
var js_ns = chunk__24299.cljs$core$IIndexed$_nth$arity$2(null,i__24301);
var require_str_24302 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24302);


var G__24303 = seq__24298;
var G__24304 = chunk__24299;
var G__24305 = count__24300;
var G__24306 = (i__24301 + (1));
seq__24298 = G__24303;
chunk__24299 = G__24304;
count__24300 = G__24305;
i__24301 = G__24306;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__24298);
if(temp__5457__auto__){
var seq__24298__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24298__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__24298__$1);
var G__24307 = cljs.core.chunk_rest(seq__24298__$1);
var G__24308 = c__4351__auto__;
var G__24309 = cljs.core.count(c__4351__auto__);
var G__24310 = (0);
seq__24298 = G__24307;
chunk__24299 = G__24308;
count__24300 = G__24309;
i__24301 = G__24310;
continue;
} else {
var js_ns = cljs.core.first(seq__24298__$1);
var require_str_24311 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24311);


var G__24312 = cljs.core.next(seq__24298__$1);
var G__24313 = null;
var G__24314 = (0);
var G__24315 = (0);
seq__24298 = G__24312;
chunk__24299 = G__24313;
count__24300 = G__24314;
i__24301 = G__24315;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__24316 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__24316) : callback.call(null,G__24316));
} else {
var G__24317 = shadow.cljs.devtools.client.env.files_url();
var G__24318 = ((function (G__24317){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__24317))
;
var G__24319 = "POST";
var G__24320 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__24321 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__24317,G__24318,G__24319,G__24320,G__24321);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__24323){
var map__24324 = p__24323;
var map__24324__$1 = ((((!((map__24324 == null)))?(((((map__24324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24324):map__24324);
var msg = map__24324__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24324__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24324__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__24326 = info;
var map__24326__$1 = ((((!((map__24326 == null)))?(((((map__24326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24326):map__24326);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24326__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24326__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__24326,map__24326__$1,sources,compiled,map__24324,map__24324__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24328(s__24329){
return (new cljs.core.LazySeq(null,((function (map__24326,map__24326__$1,sources,compiled,map__24324,map__24324__$1,msg,info,reload_info){
return (function (){
var s__24329__$1 = s__24329;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__24329__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__24334 = cljs.core.first(xs__6012__auto__);
var map__24334__$1 = ((((!((map__24334 == null)))?(((((map__24334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24334):map__24334);
var src = map__24334__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24334__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24334__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__24329__$1,map__24334,map__24334__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__24326,map__24326__$1,sources,compiled,map__24324,map__24324__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24328_$_iter__24330(s__24331){
return (new cljs.core.LazySeq(null,((function (s__24329__$1,map__24334,map__24334__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__24326,map__24326__$1,sources,compiled,map__24324,map__24324__$1,msg,info,reload_info){
return (function (){
var s__24331__$1 = s__24331;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__24331__$1);
if(temp__5457__auto____$1){
var s__24331__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24331__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24331__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24333 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24332 = (0);
while(true){
if((i__24332 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24332);
cljs.core.chunk_append(b__24333,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24353 = (i__24332 + (1));
i__24332 = G__24353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24333),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24328_$_iter__24330(cljs.core.chunk_rest(s__24331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24333),null);
}
} else {
var warning = cljs.core.first(s__24331__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24328_$_iter__24330(cljs.core.rest(s__24331__$2)));
}
} else {
return null;
}
break;
}
});})(s__24329__$1,map__24334,map__24334__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__24326,map__24326__$1,sources,compiled,map__24324,map__24324__$1,msg,info,reload_info))
,null,null));
});})(s__24329__$1,map__24334,map__24334__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__24326,map__24326__$1,sources,compiled,map__24324,map__24324__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24328(cljs.core.rest(s__24329__$1)));
} else {
var G__24354 = cljs.core.rest(s__24329__$1);
s__24329__$1 = G__24354;
continue;
}
} else {
var G__24355 = cljs.core.rest(s__24329__$1);
s__24329__$1 = G__24355;
continue;
}
} else {
return null;
}
break;
}
});})(map__24326,map__24326__$1,sources,compiled,map__24324,map__24324__$1,msg,info,reload_info))
,null,null));
});})(map__24326,map__24326__$1,sources,compiled,map__24324,map__24324__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
var seq__24336_24356 = cljs.core.seq(warnings);
var chunk__24337_24357 = null;
var count__24338_24358 = (0);
var i__24339_24359 = (0);
while(true){
if((i__24339_24359 < count__24338_24358)){
var map__24340_24360 = chunk__24337_24357.cljs$core$IIndexed$_nth$arity$2(null,i__24339_24359);
var map__24340_24361__$1 = ((((!((map__24340_24360 == null)))?(((((map__24340_24360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24340_24360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24340_24360):map__24340_24360);
var w_24362 = map__24340_24361__$1;
var msg_24363__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340_24361__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340_24361__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340_24361__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24340_24361__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24366)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24364),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24365),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24363__$1)].join(''));


var G__24367 = seq__24336_24356;
var G__24368 = chunk__24337_24357;
var G__24369 = count__24338_24358;
var G__24370 = (i__24339_24359 + (1));
seq__24336_24356 = G__24367;
chunk__24337_24357 = G__24368;
count__24338_24358 = G__24369;
i__24339_24359 = G__24370;
continue;
} else {
var temp__5457__auto___24371 = cljs.core.seq(seq__24336_24356);
if(temp__5457__auto___24371){
var seq__24336_24372__$1 = temp__5457__auto___24371;
if(cljs.core.chunked_seq_QMARK_(seq__24336_24372__$1)){
var c__4351__auto___24373 = cljs.core.chunk_first(seq__24336_24372__$1);
var G__24374 = cljs.core.chunk_rest(seq__24336_24372__$1);
var G__24375 = c__4351__auto___24373;
var G__24376 = cljs.core.count(c__4351__auto___24373);
var G__24377 = (0);
seq__24336_24356 = G__24374;
chunk__24337_24357 = G__24375;
count__24338_24358 = G__24376;
i__24339_24359 = G__24377;
continue;
} else {
var map__24342_24378 = cljs.core.first(seq__24336_24372__$1);
var map__24342_24379__$1 = ((((!((map__24342_24378 == null)))?(((((map__24342_24378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24342_24378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24342_24378):map__24342_24378);
var w_24380 = map__24342_24379__$1;
var msg_24381__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24342_24379__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24342_24379__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24342_24379__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24342_24379__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24384)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24382),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24383),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24381__$1)].join(''));


var G__24385 = cljs.core.next(seq__24336_24372__$1);
var G__24386 = null;
var G__24387 = (0);
var G__24388 = (0);
seq__24336_24356 = G__24385;
chunk__24337_24357 = G__24386;
count__24338_24358 = G__24387;
i__24339_24359 = G__24388;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__24326,map__24326__$1,sources,compiled,warnings,map__24324,map__24324__$1,msg,info,reload_info){
return (function (p__24344){
var map__24345 = p__24344;
var map__24345__$1 = ((((!((map__24345 == null)))?(((((map__24345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24345):map__24345);
var src = map__24345__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24345__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24345__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__24326,map__24326__$1,sources,compiled,warnings,map__24324,map__24324__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__24326,map__24326__$1,sources,compiled,warnings,map__24324,map__24324__$1,msg,info,reload_info){
return (function (p__24347){
var map__24348 = p__24347;
var map__24348__$1 = ((((!((map__24348 == null)))?(((((map__24348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24348):map__24348);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24348__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__24326,map__24326__$1,sources,compiled,warnings,map__24324,map__24324__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__24326,map__24326__$1,sources,compiled,warnings,map__24324,map__24324__$1,msg,info,reload_info){
return (function (p__24350){
var map__24351 = p__24350;
var map__24351__$1 = ((((!((map__24351 == null)))?(((((map__24351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24351):map__24351);
var rc = map__24351__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24351__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__24326,map__24326__$1,sources,compiled,warnings,map__24324,map__24324__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__24326,map__24326__$1,sources,compiled,warnings,map__24324,map__24324__$1,msg,info,reload_info){
return (function (p1__24322_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__24322_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__24326,map__24326__$1,sources,compiled,warnings,map__24324,map__24324__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__3938__auto__){
return rel_new;
} else {
return and__3938__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__3938__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__3938__auto____$1){
return new$;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__24389){
var map__24390 = p__24389;
var map__24390__$1 = ((((!((map__24390 == null)))?(((((map__24390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24390):map__24390);
var msg = map__24390__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24390__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__24392 = cljs.core.seq(updates);
var chunk__24394 = null;
var count__24395 = (0);
var i__24396 = (0);
while(true){
if((i__24396 < count__24395)){
var path = chunk__24394.cljs$core$IIndexed$_nth$arity$2(null,i__24396);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24398_24418 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24401_24419 = null;
var count__24402_24420 = (0);
var i__24403_24421 = (0);
while(true){
if((i__24403_24421 < count__24402_24420)){
var node_24422 = chunk__24401_24419.cljs$core$IIndexed$_nth$arity$2(null,i__24403_24421);
var path_match_24423 = shadow.cljs.devtools.client.browser.match_paths(node_24422.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24423)){
var new_link_24424 = (function (){var G__24406 = node_24422.cloneNode(true);
G__24406.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24423),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24406;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24423], 0));

goog.dom.insertSiblingAfter(new_link_24424,node_24422);

goog.dom.removeNode(node_24422);


var G__24425 = seq__24398_24418;
var G__24426 = chunk__24401_24419;
var G__24427 = count__24402_24420;
var G__24428 = (i__24403_24421 + (1));
seq__24398_24418 = G__24425;
chunk__24401_24419 = G__24426;
count__24402_24420 = G__24427;
i__24403_24421 = G__24428;
continue;
} else {
var G__24429 = seq__24398_24418;
var G__24430 = chunk__24401_24419;
var G__24431 = count__24402_24420;
var G__24432 = (i__24403_24421 + (1));
seq__24398_24418 = G__24429;
chunk__24401_24419 = G__24430;
count__24402_24420 = G__24431;
i__24403_24421 = G__24432;
continue;
}
} else {
var temp__5457__auto___24433 = cljs.core.seq(seq__24398_24418);
if(temp__5457__auto___24433){
var seq__24398_24434__$1 = temp__5457__auto___24433;
if(cljs.core.chunked_seq_QMARK_(seq__24398_24434__$1)){
var c__4351__auto___24435 = cljs.core.chunk_first(seq__24398_24434__$1);
var G__24436 = cljs.core.chunk_rest(seq__24398_24434__$1);
var G__24437 = c__4351__auto___24435;
var G__24438 = cljs.core.count(c__4351__auto___24435);
var G__24439 = (0);
seq__24398_24418 = G__24436;
chunk__24401_24419 = G__24437;
count__24402_24420 = G__24438;
i__24403_24421 = G__24439;
continue;
} else {
var node_24440 = cljs.core.first(seq__24398_24434__$1);
var path_match_24441 = shadow.cljs.devtools.client.browser.match_paths(node_24440.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24441)){
var new_link_24442 = (function (){var G__24407 = node_24440.cloneNode(true);
G__24407.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24441),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24407;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24441], 0));

goog.dom.insertSiblingAfter(new_link_24442,node_24440);

goog.dom.removeNode(node_24440);


var G__24443 = cljs.core.next(seq__24398_24434__$1);
var G__24444 = null;
var G__24445 = (0);
var G__24446 = (0);
seq__24398_24418 = G__24443;
chunk__24401_24419 = G__24444;
count__24402_24420 = G__24445;
i__24403_24421 = G__24446;
continue;
} else {
var G__24447 = cljs.core.next(seq__24398_24434__$1);
var G__24448 = null;
var G__24449 = (0);
var G__24450 = (0);
seq__24398_24418 = G__24447;
chunk__24401_24419 = G__24448;
count__24402_24420 = G__24449;
i__24403_24421 = G__24450;
continue;
}
}
} else {
}
}
break;
}


var G__24451 = seq__24392;
var G__24452 = chunk__24394;
var G__24453 = count__24395;
var G__24454 = (i__24396 + (1));
seq__24392 = G__24451;
chunk__24394 = G__24452;
count__24395 = G__24453;
i__24396 = G__24454;
continue;
} else {
var G__24455 = seq__24392;
var G__24456 = chunk__24394;
var G__24457 = count__24395;
var G__24458 = (i__24396 + (1));
seq__24392 = G__24455;
chunk__24394 = G__24456;
count__24395 = G__24457;
i__24396 = G__24458;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__24392);
if(temp__5457__auto__){
var seq__24392__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24392__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__24392__$1);
var G__24459 = cljs.core.chunk_rest(seq__24392__$1);
var G__24460 = c__4351__auto__;
var G__24461 = cljs.core.count(c__4351__auto__);
var G__24462 = (0);
seq__24392 = G__24459;
chunk__24394 = G__24460;
count__24395 = G__24461;
i__24396 = G__24462;
continue;
} else {
var path = cljs.core.first(seq__24392__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24408_24463 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24411_24464 = null;
var count__24412_24465 = (0);
var i__24413_24466 = (0);
while(true){
if((i__24413_24466 < count__24412_24465)){
var node_24467 = chunk__24411_24464.cljs$core$IIndexed$_nth$arity$2(null,i__24413_24466);
var path_match_24468 = shadow.cljs.devtools.client.browser.match_paths(node_24467.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24468)){
var new_link_24469 = (function (){var G__24416 = node_24467.cloneNode(true);
G__24416.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24468),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24416;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24468], 0));

goog.dom.insertSiblingAfter(new_link_24469,node_24467);

goog.dom.removeNode(node_24467);


var G__24470 = seq__24408_24463;
var G__24471 = chunk__24411_24464;
var G__24472 = count__24412_24465;
var G__24473 = (i__24413_24466 + (1));
seq__24408_24463 = G__24470;
chunk__24411_24464 = G__24471;
count__24412_24465 = G__24472;
i__24413_24466 = G__24473;
continue;
} else {
var G__24474 = seq__24408_24463;
var G__24475 = chunk__24411_24464;
var G__24476 = count__24412_24465;
var G__24477 = (i__24413_24466 + (1));
seq__24408_24463 = G__24474;
chunk__24411_24464 = G__24475;
count__24412_24465 = G__24476;
i__24413_24466 = G__24477;
continue;
}
} else {
var temp__5457__auto___24478__$1 = cljs.core.seq(seq__24408_24463);
if(temp__5457__auto___24478__$1){
var seq__24408_24479__$1 = temp__5457__auto___24478__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24408_24479__$1)){
var c__4351__auto___24480 = cljs.core.chunk_first(seq__24408_24479__$1);
var G__24481 = cljs.core.chunk_rest(seq__24408_24479__$1);
var G__24482 = c__4351__auto___24480;
var G__24483 = cljs.core.count(c__4351__auto___24480);
var G__24484 = (0);
seq__24408_24463 = G__24481;
chunk__24411_24464 = G__24482;
count__24412_24465 = G__24483;
i__24413_24466 = G__24484;
continue;
} else {
var node_24485 = cljs.core.first(seq__24408_24479__$1);
var path_match_24486 = shadow.cljs.devtools.client.browser.match_paths(node_24485.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24486)){
var new_link_24487 = (function (){var G__24417 = node_24485.cloneNode(true);
G__24417.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24486),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24417;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24486], 0));

goog.dom.insertSiblingAfter(new_link_24487,node_24485);

goog.dom.removeNode(node_24485);


var G__24488 = cljs.core.next(seq__24408_24479__$1);
var G__24489 = null;
var G__24490 = (0);
var G__24491 = (0);
seq__24408_24463 = G__24488;
chunk__24411_24464 = G__24489;
count__24412_24465 = G__24490;
i__24413_24466 = G__24491;
continue;
} else {
var G__24492 = cljs.core.next(seq__24408_24479__$1);
var G__24493 = null;
var G__24494 = (0);
var G__24495 = (0);
seq__24408_24463 = G__24492;
chunk__24411_24464 = G__24493;
count__24412_24465 = G__24494;
i__24413_24466 = G__24495;
continue;
}
}
} else {
}
}
break;
}


var G__24496 = cljs.core.next(seq__24392__$1);
var G__24497 = null;
var G__24498 = (0);
var G__24499 = (0);
seq__24392 = G__24496;
chunk__24394 = G__24497;
count__24395 = G__24498;
i__24396 = G__24499;
continue;
} else {
var G__24500 = cljs.core.next(seq__24392__$1);
var G__24501 = null;
var G__24502 = (0);
var G__24503 = (0);
seq__24392 = G__24500;
chunk__24394 = G__24501;
count__24395 = G__24502;
i__24396 = G__24503;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__24504){
var map__24505 = p__24504;
var map__24505__$1 = ((((!((map__24505 == null)))?(((((map__24505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24505):map__24505);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24505__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24505__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__24505,map__24505__$1,id,js){
return (function (){
return eval(js);
});})(map__24505,map__24505__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__24507){
var map__24508 = p__24507;
var map__24508__$1 = ((((!((map__24508 == null)))?(((((map__24508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24508):map__24508);
var msg = map__24508__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__24508,map__24508__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__24510){
var map__24511 = p__24510;
var map__24511__$1 = ((((!((map__24511 == null)))?(((((map__24511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24511):map__24511);
var src = map__24511__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24511__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3938__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3938__auto__;
}
});})(map__24508,map__24508__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__24508,map__24508__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__24508,map__24508__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__24513){
var map__24514 = p__24513;
var map__24514__$1 = ((((!((map__24514 == null)))?(((((map__24514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24514):map__24514);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24514__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24514__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__24514,map__24514__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__24514,map__24514__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__24516){
var map__24517 = p__24516;
var map__24517__$1 = ((((!((map__24517 == null)))?(((((map__24517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24517):map__24517);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24517__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24517__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__24519){
var map__24520 = p__24519;
var map__24520__$1 = ((((!((map__24520 == null)))?(((((map__24520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24520):map__24520);
var msg = map__24520__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24520__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__24522 = type;
var G__24522__$1 = (((G__24522 instanceof cljs.core.Keyword))?G__24522.fqn:null);
switch (G__24522__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__24524 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__24525 = ((function (G__24524){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__24524))
;
var G__24526 = "POST";
var G__24527 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__24528 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__24524,G__24525,G__24526,G__24527,G__24528);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3949__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e24529){var e = e24529;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___24530 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___24530)){
var s_24531 = temp__5457__auto___24530;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_24531.onclose = ((function (s_24531,temp__5457__auto___24530){
return (function (e){
return null;
});})(s_24531,temp__5457__auto___24530))
;

s_24531.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
