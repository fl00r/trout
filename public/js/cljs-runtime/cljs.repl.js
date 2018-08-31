goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20107){
var map__20108 = p__20107;
var map__20108__$1 = ((((!((map__20108 == null)))?(((((map__20108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20108):map__20108);
var m = map__20108__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20108__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20108__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20116_20166 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20117_20167 = null;
var count__20118_20168 = (0);
var i__20119_20169 = (0);
while(true){
if((i__20119_20169 < count__20118_20168)){
var f_20171 = chunk__20117_20167.cljs$core$IIndexed$_nth$arity$2(null,i__20119_20169);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20171], 0));


var G__20174 = seq__20116_20166;
var G__20175 = chunk__20117_20167;
var G__20176 = count__20118_20168;
var G__20177 = (i__20119_20169 + (1));
seq__20116_20166 = G__20174;
chunk__20117_20167 = G__20175;
count__20118_20168 = G__20176;
i__20119_20169 = G__20177;
continue;
} else {
var temp__5457__auto___20179 = cljs.core.seq(seq__20116_20166);
if(temp__5457__auto___20179){
var seq__20116_20180__$1 = temp__5457__auto___20179;
if(cljs.core.chunked_seq_QMARK_(seq__20116_20180__$1)){
var c__4351__auto___20181 = cljs.core.chunk_first(seq__20116_20180__$1);
var G__20182 = cljs.core.chunk_rest(seq__20116_20180__$1);
var G__20183 = c__4351__auto___20181;
var G__20184 = cljs.core.count(c__4351__auto___20181);
var G__20185 = (0);
seq__20116_20166 = G__20182;
chunk__20117_20167 = G__20183;
count__20118_20168 = G__20184;
i__20119_20169 = G__20185;
continue;
} else {
var f_20188 = cljs.core.first(seq__20116_20180__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20188], 0));


var G__20190 = cljs.core.next(seq__20116_20180__$1);
var G__20191 = null;
var G__20192 = (0);
var G__20193 = (0);
seq__20116_20166 = G__20190;
chunk__20117_20167 = G__20191;
count__20118_20168 = G__20192;
i__20119_20169 = G__20193;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20194 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20194], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20194)))?cljs.core.second(arglists_20194):arglists_20194)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20125_20205 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20126_20206 = null;
var count__20127_20207 = (0);
var i__20128_20208 = (0);
while(true){
if((i__20128_20208 < count__20127_20207)){
var vec__20135_20210 = chunk__20126_20206.cljs$core$IIndexed$_nth$arity$2(null,i__20128_20208);
var name_20211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135_20210,(0),null);
var map__20138_20212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135_20210,(1),null);
var map__20138_20213__$1 = ((((!((map__20138_20212 == null)))?(((((map__20138_20212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20138_20212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20138_20212):map__20138_20212);
var doc_20214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20138_20213__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20138_20213__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20211], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20215], 0));

if(cljs.core.truth_(doc_20214)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20214], 0));
} else {
}


var G__20220 = seq__20125_20205;
var G__20221 = chunk__20126_20206;
var G__20222 = count__20127_20207;
var G__20223 = (i__20128_20208 + (1));
seq__20125_20205 = G__20220;
chunk__20126_20206 = G__20221;
count__20127_20207 = G__20222;
i__20128_20208 = G__20223;
continue;
} else {
var temp__5457__auto___20224 = cljs.core.seq(seq__20125_20205);
if(temp__5457__auto___20224){
var seq__20125_20225__$1 = temp__5457__auto___20224;
if(cljs.core.chunked_seq_QMARK_(seq__20125_20225__$1)){
var c__4351__auto___20226 = cljs.core.chunk_first(seq__20125_20225__$1);
var G__20227 = cljs.core.chunk_rest(seq__20125_20225__$1);
var G__20228 = c__4351__auto___20226;
var G__20229 = cljs.core.count(c__4351__auto___20226);
var G__20230 = (0);
seq__20125_20205 = G__20227;
chunk__20126_20206 = G__20228;
count__20127_20207 = G__20229;
i__20128_20208 = G__20230;
continue;
} else {
var vec__20144_20231 = cljs.core.first(seq__20125_20225__$1);
var name_20232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20144_20231,(0),null);
var map__20147_20233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20144_20231,(1),null);
var map__20147_20234__$1 = ((((!((map__20147_20233 == null)))?(((((map__20147_20233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20147_20233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20147_20233):map__20147_20233);
var doc_20235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20147_20234__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20147_20234__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20232], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20236], 0));

if(cljs.core.truth_(doc_20235)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20235], 0));
} else {
}


var G__20241 = cljs.core.next(seq__20125_20225__$1);
var G__20242 = null;
var G__20243 = (0);
var G__20244 = (0);
seq__20125_20205 = G__20241;
chunk__20126_20206 = G__20242;
count__20127_20207 = G__20243;
i__20128_20208 = G__20244;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20156 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20157 = null;
var count__20158 = (0);
var i__20159 = (0);
while(true){
if((i__20159 < count__20158)){
var role = chunk__20157.cljs$core$IIndexed$_nth$arity$2(null,i__20159);
var temp__5457__auto___20245__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___20245__$1)){
var spec_20246 = temp__5457__auto___20245__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_20246)], 0));
} else {
}


var G__20247 = seq__20156;
var G__20248 = chunk__20157;
var G__20249 = count__20158;
var G__20250 = (i__20159 + (1));
seq__20156 = G__20247;
chunk__20157 = G__20248;
count__20158 = G__20249;
i__20159 = G__20250;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__20156);
if(temp__5457__auto____$1){
var seq__20156__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20156__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20156__$1);
var G__20251 = cljs.core.chunk_rest(seq__20156__$1);
var G__20252 = c__4351__auto__;
var G__20253 = cljs.core.count(c__4351__auto__);
var G__20254 = (0);
seq__20156 = G__20251;
chunk__20157 = G__20252;
count__20158 = G__20253;
i__20159 = G__20254;
continue;
} else {
var role = cljs.core.first(seq__20156__$1);
var temp__5457__auto___20256__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___20256__$2)){
var spec_20257 = temp__5457__auto___20256__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_20257)], 0));
} else {
}


var G__20258 = cljs.core.next(seq__20156__$1);
var G__20259 = null;
var G__20260 = (0);
var G__20261 = (0);
seq__20156 = G__20258;
chunk__20157 = G__20259;
count__20158 = G__20260;
i__20159 = G__20261;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
