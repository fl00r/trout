goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__22822 = coll;
var G__22823 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__22822,G__22823) : shadow.dom.lazy_native_coll_seq.call(null,G__22822,G__22823));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__22833 = arguments.length;
switch (G__22833) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__22836 = arguments.length;
switch (G__22836) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__22839 = arguments.length;
switch (G__22839) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__22842 = arguments.length;
switch (G__22842) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__22845 = arguments.length;
switch (G__22845) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__22846 = document;
var G__22847 = shadow.dom.dom_node(el);
return goog.dom.contains(G__22846,G__22847);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__22848 = shadow.dom.dom_node(parent);
var G__22849 = shadow.dom.dom_node(el);
return goog.dom.contains(G__22848,G__22849);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__22851 = shadow.dom.dom_node(el);
var G__22852 = cls;
return goog.dom.classlist.add(G__22851,G__22852);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__22853 = shadow.dom.dom_node(el);
var G__22854 = cls;
return goog.dom.classlist.remove(G__22853,G__22854);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__22856 = arguments.length;
switch (G__22856) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__22857 = shadow.dom.dom_node(el);
var G__22858 = cls;
return goog.dom.classlist.toggle(G__22857,G__22858);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e22860){if((e22860 instanceof Object)){
var e = e22860;
return console.log("didnt support attachEvent",el,e);
} else {
throw e22860;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__22861 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__22862 = null;
var count__22863 = (0);
var i__22864 = (0);
while(true){
if((i__22864 < count__22863)){
var el = chunk__22862.cljs$core$IIndexed$_nth$arity$2(null,i__22864);
var handler_22871__$1 = ((function (seq__22861,chunk__22862,count__22863,i__22864,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__22861,chunk__22862,count__22863,i__22864,el))
;
var G__22865_22872 = el;
var G__22866_22873 = cljs.core.name(ev);
var G__22867_22874 = handler_22871__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__22865_22872,G__22866_22873,G__22867_22874) : shadow.dom.dom_listen.call(null,G__22865_22872,G__22866_22873,G__22867_22874));


var G__22875 = seq__22861;
var G__22876 = chunk__22862;
var G__22877 = count__22863;
var G__22878 = (i__22864 + (1));
seq__22861 = G__22875;
chunk__22862 = G__22876;
count__22863 = G__22877;
i__22864 = G__22878;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22861);
if(temp__5457__auto__){
var seq__22861__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22861__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22861__$1);
var G__22879 = cljs.core.chunk_rest(seq__22861__$1);
var G__22880 = c__4351__auto__;
var G__22881 = cljs.core.count(c__4351__auto__);
var G__22882 = (0);
seq__22861 = G__22879;
chunk__22862 = G__22880;
count__22863 = G__22881;
i__22864 = G__22882;
continue;
} else {
var el = cljs.core.first(seq__22861__$1);
var handler_22883__$1 = ((function (seq__22861,chunk__22862,count__22863,i__22864,el,seq__22861__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__22861,chunk__22862,count__22863,i__22864,el,seq__22861__$1,temp__5457__auto__))
;
var G__22868_22884 = el;
var G__22869_22885 = cljs.core.name(ev);
var G__22870_22886 = handler_22883__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__22868_22884,G__22869_22885,G__22870_22886) : shadow.dom.dom_listen.call(null,G__22868_22884,G__22869_22885,G__22870_22886));


var G__22887 = cljs.core.next(seq__22861__$1);
var G__22888 = null;
var G__22889 = (0);
var G__22890 = (0);
seq__22861 = G__22887;
chunk__22862 = G__22888;
count__22863 = G__22889;
i__22864 = G__22890;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__22892 = arguments.length;
switch (G__22892) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__22893 = shadow.dom.dom_node(el);
var G__22894 = cljs.core.name(ev);
var G__22895 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__22893,G__22894,G__22895) : shadow.dom.dom_listen.call(null,G__22893,G__22894,G__22895));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__22897 = shadow.dom.dom_node(el);
var G__22898 = cljs.core.name(ev);
var G__22899 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__22897,G__22898,G__22899) : shadow.dom.dom_listen_remove.call(null,G__22897,G__22898,G__22899));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__22900 = cljs.core.seq(events);
var chunk__22901 = null;
var count__22902 = (0);
var i__22903 = (0);
while(true){
if((i__22903 < count__22902)){
var vec__22904 = chunk__22901.cljs$core$IIndexed$_nth$arity$2(null,i__22903);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22904,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__22910 = seq__22900;
var G__22911 = chunk__22901;
var G__22912 = count__22902;
var G__22913 = (i__22903 + (1));
seq__22900 = G__22910;
chunk__22901 = G__22911;
count__22902 = G__22912;
i__22903 = G__22913;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22900);
if(temp__5457__auto__){
var seq__22900__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22900__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22900__$1);
var G__22914 = cljs.core.chunk_rest(seq__22900__$1);
var G__22915 = c__4351__auto__;
var G__22916 = cljs.core.count(c__4351__auto__);
var G__22917 = (0);
seq__22900 = G__22914;
chunk__22901 = G__22915;
count__22902 = G__22916;
i__22903 = G__22917;
continue;
} else {
var vec__22907 = cljs.core.first(seq__22900__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22907,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__22918 = cljs.core.next(seq__22900__$1);
var G__22919 = null;
var G__22920 = (0);
var G__22921 = (0);
seq__22900 = G__22918;
chunk__22901 = G__22919;
count__22902 = G__22920;
i__22903 = G__22921;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__22922 = cljs.core.seq(styles);
var chunk__22923 = null;
var count__22924 = (0);
var i__22925 = (0);
while(true){
if((i__22925 < count__22924)){
var vec__22926 = chunk__22923.cljs$core$IIndexed$_nth$arity$2(null,i__22925);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926,(1),null);
var G__22929_22938 = dom;
var G__22930_22939 = cljs.core.name(k);
var G__22931_22940 = (((v == null))?"":v);
goog.style.setStyle(G__22929_22938,G__22930_22939,G__22931_22940);


var G__22941 = seq__22922;
var G__22942 = chunk__22923;
var G__22943 = count__22924;
var G__22944 = (i__22925 + (1));
seq__22922 = G__22941;
chunk__22923 = G__22942;
count__22924 = G__22943;
i__22925 = G__22944;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22922);
if(temp__5457__auto__){
var seq__22922__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22922__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22922__$1);
var G__22945 = cljs.core.chunk_rest(seq__22922__$1);
var G__22946 = c__4351__auto__;
var G__22947 = cljs.core.count(c__4351__auto__);
var G__22948 = (0);
seq__22922 = G__22945;
chunk__22923 = G__22946;
count__22924 = G__22947;
i__22925 = G__22948;
continue;
} else {
var vec__22932 = cljs.core.first(seq__22922__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22932,(1),null);
var G__22935_22949 = dom;
var G__22936_22950 = cljs.core.name(k);
var G__22937_22951 = (((v == null))?"":v);
goog.style.setStyle(G__22935_22949,G__22936_22950,G__22937_22951);


var G__22952 = cljs.core.next(seq__22922__$1);
var G__22953 = null;
var G__22954 = (0);
var G__22955 = (0);
seq__22922 = G__22952;
chunk__22923 = G__22953;
count__22924 = G__22954;
i__22925 = G__22955;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__22956_22957 = key;
var G__22956_22958__$1 = (((G__22956_22957 instanceof cljs.core.Keyword))?G__22956_22957.fqn:null);
switch (G__22956_22958__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_22960 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(ks_22960,"data-");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.string.startsWith(ks_22960,"aria-");
}
})())){
el.setAttribute(ks_22960,value);
} else {
(el[ks_22960] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__22961 = shadow.dom.dom_node(el);
var G__22962 = cls;
return goog.dom.classlist.contains(G__22961,G__22962);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__22963){
var map__22964 = p__22963;
var map__22964__$1 = ((((!((map__22964 == null)))?(((((map__22964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22964):map__22964);
var props = map__22964__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__22966 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22966,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__22969 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__22969,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__22969;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__22971 = arguments.length;
switch (G__22971) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__22973){
var vec__22974 = p__22973;
var seq__22975 = cljs.core.seq(vec__22974);
var first__22976 = cljs.core.first(seq__22975);
var seq__22975__$1 = cljs.core.next(seq__22975);
var nn = first__22976;
var first__22976__$1 = cljs.core.first(seq__22975__$1);
var seq__22975__$2 = cljs.core.next(seq__22975__$1);
var np = first__22976__$1;
var nc = seq__22975__$2;
var node = vec__22974;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22977 = nn;
var G__22978 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__22977,G__22978) : create_fn.call(null,G__22977,G__22978));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22979 = nn;
var G__22980 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__22979,G__22980) : create_fn.call(null,G__22979,G__22980));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__22981 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22981,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22981,(1),null);
var seq__22984_23000 = cljs.core.seq(node_children);
var chunk__22985_23001 = null;
var count__22986_23002 = (0);
var i__22987_23003 = (0);
while(true){
if((i__22987_23003 < count__22986_23002)){
var child_struct_23004 = chunk__22985_23001.cljs$core$IIndexed$_nth$arity$2(null,i__22987_23003);
var children_23005 = shadow.dom.dom_node(child_struct_23004);
if(cljs.core.seq_QMARK_(children_23005)){
var seq__22988_23006 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_23005));
var chunk__22990_23007 = null;
var count__22991_23008 = (0);
var i__22992_23009 = (0);
while(true){
if((i__22992_23009 < count__22991_23008)){
var child_23010 = chunk__22990_23007.cljs$core$IIndexed$_nth$arity$2(null,i__22992_23009);
if(cljs.core.truth_(child_23010)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23010);


var G__23011 = seq__22988_23006;
var G__23012 = chunk__22990_23007;
var G__23013 = count__22991_23008;
var G__23014 = (i__22992_23009 + (1));
seq__22988_23006 = G__23011;
chunk__22990_23007 = G__23012;
count__22991_23008 = G__23013;
i__22992_23009 = G__23014;
continue;
} else {
var G__23015 = seq__22988_23006;
var G__23016 = chunk__22990_23007;
var G__23017 = count__22991_23008;
var G__23018 = (i__22992_23009 + (1));
seq__22988_23006 = G__23015;
chunk__22990_23007 = G__23016;
count__22991_23008 = G__23017;
i__22992_23009 = G__23018;
continue;
}
} else {
var temp__5457__auto___23019 = cljs.core.seq(seq__22988_23006);
if(temp__5457__auto___23019){
var seq__22988_23020__$1 = temp__5457__auto___23019;
if(cljs.core.chunked_seq_QMARK_(seq__22988_23020__$1)){
var c__4351__auto___23021 = cljs.core.chunk_first(seq__22988_23020__$1);
var G__23022 = cljs.core.chunk_rest(seq__22988_23020__$1);
var G__23023 = c__4351__auto___23021;
var G__23024 = cljs.core.count(c__4351__auto___23021);
var G__23025 = (0);
seq__22988_23006 = G__23022;
chunk__22990_23007 = G__23023;
count__22991_23008 = G__23024;
i__22992_23009 = G__23025;
continue;
} else {
var child_23026 = cljs.core.first(seq__22988_23020__$1);
if(cljs.core.truth_(child_23026)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23026);


var G__23027 = cljs.core.next(seq__22988_23020__$1);
var G__23028 = null;
var G__23029 = (0);
var G__23030 = (0);
seq__22988_23006 = G__23027;
chunk__22990_23007 = G__23028;
count__22991_23008 = G__23029;
i__22992_23009 = G__23030;
continue;
} else {
var G__23031 = cljs.core.next(seq__22988_23020__$1);
var G__23032 = null;
var G__23033 = (0);
var G__23034 = (0);
seq__22988_23006 = G__23031;
chunk__22990_23007 = G__23032;
count__22991_23008 = G__23033;
i__22992_23009 = G__23034;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_23005);
}


var G__23035 = seq__22984_23000;
var G__23036 = chunk__22985_23001;
var G__23037 = count__22986_23002;
var G__23038 = (i__22987_23003 + (1));
seq__22984_23000 = G__23035;
chunk__22985_23001 = G__23036;
count__22986_23002 = G__23037;
i__22987_23003 = G__23038;
continue;
} else {
var temp__5457__auto___23039 = cljs.core.seq(seq__22984_23000);
if(temp__5457__auto___23039){
var seq__22984_23040__$1 = temp__5457__auto___23039;
if(cljs.core.chunked_seq_QMARK_(seq__22984_23040__$1)){
var c__4351__auto___23041 = cljs.core.chunk_first(seq__22984_23040__$1);
var G__23042 = cljs.core.chunk_rest(seq__22984_23040__$1);
var G__23043 = c__4351__auto___23041;
var G__23044 = cljs.core.count(c__4351__auto___23041);
var G__23045 = (0);
seq__22984_23000 = G__23042;
chunk__22985_23001 = G__23043;
count__22986_23002 = G__23044;
i__22987_23003 = G__23045;
continue;
} else {
var child_struct_23046 = cljs.core.first(seq__22984_23040__$1);
var children_23047 = shadow.dom.dom_node(child_struct_23046);
if(cljs.core.seq_QMARK_(children_23047)){
var seq__22994_23048 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_23047));
var chunk__22996_23049 = null;
var count__22997_23050 = (0);
var i__22998_23051 = (0);
while(true){
if((i__22998_23051 < count__22997_23050)){
var child_23052 = chunk__22996_23049.cljs$core$IIndexed$_nth$arity$2(null,i__22998_23051);
if(cljs.core.truth_(child_23052)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23052);


var G__23053 = seq__22994_23048;
var G__23054 = chunk__22996_23049;
var G__23055 = count__22997_23050;
var G__23056 = (i__22998_23051 + (1));
seq__22994_23048 = G__23053;
chunk__22996_23049 = G__23054;
count__22997_23050 = G__23055;
i__22998_23051 = G__23056;
continue;
} else {
var G__23057 = seq__22994_23048;
var G__23058 = chunk__22996_23049;
var G__23059 = count__22997_23050;
var G__23060 = (i__22998_23051 + (1));
seq__22994_23048 = G__23057;
chunk__22996_23049 = G__23058;
count__22997_23050 = G__23059;
i__22998_23051 = G__23060;
continue;
}
} else {
var temp__5457__auto___23061__$1 = cljs.core.seq(seq__22994_23048);
if(temp__5457__auto___23061__$1){
var seq__22994_23062__$1 = temp__5457__auto___23061__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22994_23062__$1)){
var c__4351__auto___23063 = cljs.core.chunk_first(seq__22994_23062__$1);
var G__23064 = cljs.core.chunk_rest(seq__22994_23062__$1);
var G__23065 = c__4351__auto___23063;
var G__23066 = cljs.core.count(c__4351__auto___23063);
var G__23067 = (0);
seq__22994_23048 = G__23064;
chunk__22996_23049 = G__23065;
count__22997_23050 = G__23066;
i__22998_23051 = G__23067;
continue;
} else {
var child_23068 = cljs.core.first(seq__22994_23062__$1);
if(cljs.core.truth_(child_23068)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23068);


var G__23069 = cljs.core.next(seq__22994_23062__$1);
var G__23070 = null;
var G__23071 = (0);
var G__23072 = (0);
seq__22994_23048 = G__23069;
chunk__22996_23049 = G__23070;
count__22997_23050 = G__23071;
i__22998_23051 = G__23072;
continue;
} else {
var G__23073 = cljs.core.next(seq__22994_23062__$1);
var G__23074 = null;
var G__23075 = (0);
var G__23076 = (0);
seq__22994_23048 = G__23073;
chunk__22996_23049 = G__23074;
count__22997_23050 = G__23075;
i__22998_23051 = G__23076;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_23047);
}


var G__23077 = cljs.core.next(seq__22984_23040__$1);
var G__23078 = null;
var G__23079 = (0);
var G__23080 = (0);
seq__22984_23000 = G__23077;
chunk__22985_23001 = G__23078;
count__22986_23002 = G__23079;
i__22987_23003 = G__23080;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__23081 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__23081);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__23083 = cljs.core.seq(node);
var chunk__23084 = null;
var count__23085 = (0);
var i__23086 = (0);
while(true){
if((i__23086 < count__23085)){
var n = chunk__23084.cljs$core$IIndexed$_nth$arity$2(null,i__23086);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__23087 = seq__23083;
var G__23088 = chunk__23084;
var G__23089 = count__23085;
var G__23090 = (i__23086 + (1));
seq__23083 = G__23087;
chunk__23084 = G__23088;
count__23085 = G__23089;
i__23086 = G__23090;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23083);
if(temp__5457__auto__){
var seq__23083__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23083__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23083__$1);
var G__23091 = cljs.core.chunk_rest(seq__23083__$1);
var G__23092 = c__4351__auto__;
var G__23093 = cljs.core.count(c__4351__auto__);
var G__23094 = (0);
seq__23083 = G__23091;
chunk__23084 = G__23092;
count__23085 = G__23093;
i__23086 = G__23094;
continue;
} else {
var n = cljs.core.first(seq__23083__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__23095 = cljs.core.next(seq__23083__$1);
var G__23096 = null;
var G__23097 = (0);
var G__23098 = (0);
seq__23083 = G__23095;
chunk__23084 = G__23096;
count__23085 = G__23097;
i__23086 = G__23098;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__23099 = shadow.dom.dom_node(new$);
var G__23100 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__23099,G__23100);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__23102 = arguments.length;
switch (G__23102) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__23105 = arguments.length;
switch (G__23105) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__23108 = arguments.length;
switch (G__23108) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3949__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23115 = arguments.length;
var i__4532__auto___23116 = (0);
while(true){
if((i__4532__auto___23116 < len__4531__auto___23115)){
args__4534__auto__.push((arguments[i__4532__auto___23116]));

var G__23117 = (i__4532__auto___23116 + (1));
i__4532__auto___23116 = G__23117;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__23111_23118 = cljs.core.seq(nodes);
var chunk__23112_23119 = null;
var count__23113_23120 = (0);
var i__23114_23121 = (0);
while(true){
if((i__23114_23121 < count__23113_23120)){
var node_23122 = chunk__23112_23119.cljs$core$IIndexed$_nth$arity$2(null,i__23114_23121);
fragment.appendChild(shadow.dom._to_dom(node_23122));


var G__23123 = seq__23111_23118;
var G__23124 = chunk__23112_23119;
var G__23125 = count__23113_23120;
var G__23126 = (i__23114_23121 + (1));
seq__23111_23118 = G__23123;
chunk__23112_23119 = G__23124;
count__23113_23120 = G__23125;
i__23114_23121 = G__23126;
continue;
} else {
var temp__5457__auto___23127 = cljs.core.seq(seq__23111_23118);
if(temp__5457__auto___23127){
var seq__23111_23128__$1 = temp__5457__auto___23127;
if(cljs.core.chunked_seq_QMARK_(seq__23111_23128__$1)){
var c__4351__auto___23129 = cljs.core.chunk_first(seq__23111_23128__$1);
var G__23130 = cljs.core.chunk_rest(seq__23111_23128__$1);
var G__23131 = c__4351__auto___23129;
var G__23132 = cljs.core.count(c__4351__auto___23129);
var G__23133 = (0);
seq__23111_23118 = G__23130;
chunk__23112_23119 = G__23131;
count__23113_23120 = G__23132;
i__23114_23121 = G__23133;
continue;
} else {
var node_23134 = cljs.core.first(seq__23111_23128__$1);
fragment.appendChild(shadow.dom._to_dom(node_23134));


var G__23135 = cljs.core.next(seq__23111_23128__$1);
var G__23136 = null;
var G__23137 = (0);
var G__23138 = (0);
seq__23111_23118 = G__23135;
chunk__23112_23119 = G__23136;
count__23113_23120 = G__23137;
i__23114_23121 = G__23138;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq23110){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23110));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__23139_23153 = cljs.core.seq(scripts);
var chunk__23140_23154 = null;
var count__23141_23155 = (0);
var i__23142_23156 = (0);
while(true){
if((i__23142_23156 < count__23141_23155)){
var vec__23143_23157 = chunk__23140_23154.cljs$core$IIndexed$_nth$arity$2(null,i__23142_23156);
var script_tag_23158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23143_23157,(0),null);
var script_body_23159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23143_23157,(1),null);
eval(script_body_23159);


var G__23160 = seq__23139_23153;
var G__23161 = chunk__23140_23154;
var G__23162 = count__23141_23155;
var G__23163 = (i__23142_23156 + (1));
seq__23139_23153 = G__23160;
chunk__23140_23154 = G__23161;
count__23141_23155 = G__23162;
i__23142_23156 = G__23163;
continue;
} else {
var temp__5457__auto___23164 = cljs.core.seq(seq__23139_23153);
if(temp__5457__auto___23164){
var seq__23139_23165__$1 = temp__5457__auto___23164;
if(cljs.core.chunked_seq_QMARK_(seq__23139_23165__$1)){
var c__4351__auto___23166 = cljs.core.chunk_first(seq__23139_23165__$1);
var G__23167 = cljs.core.chunk_rest(seq__23139_23165__$1);
var G__23168 = c__4351__auto___23166;
var G__23169 = cljs.core.count(c__4351__auto___23166);
var G__23170 = (0);
seq__23139_23153 = G__23167;
chunk__23140_23154 = G__23168;
count__23141_23155 = G__23169;
i__23142_23156 = G__23170;
continue;
} else {
var vec__23146_23171 = cljs.core.first(seq__23139_23165__$1);
var script_tag_23172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23146_23171,(0),null);
var script_body_23173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23146_23171,(1),null);
eval(script_body_23173);


var G__23174 = cljs.core.next(seq__23139_23165__$1);
var G__23175 = null;
var G__23176 = (0);
var G__23177 = (0);
seq__23139_23153 = G__23174;
chunk__23140_23154 = G__23175;
count__23141_23155 = G__23176;
i__23142_23156 = G__23177;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__23149){
var vec__23150 = p__23149;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23150,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23150,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__23178 = shadow.dom.dom_node(el);
var G__23179 = cls;
return goog.dom.getAncestorByClass(G__23178,G__23179);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__23181 = arguments.length;
switch (G__23181) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__23182 = shadow.dom.dom_node(el);
var G__23183 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__23182,G__23183);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__23184 = shadow.dom.dom_node(el);
var G__23185 = cljs.core.name(tag);
var G__23186 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__23184,G__23185,G__23186);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__23188 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__23188);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__23189 = shadow.dom.dom_node(dom);
var G__23190 = value;
return goog.dom.forms.setValue(G__23189,G__23190);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__23191 = cljs.core.seq(style_keys);
var chunk__23192 = null;
var count__23193 = (0);
var i__23194 = (0);
while(true){
if((i__23194 < count__23193)){
var it = chunk__23192.cljs$core$IIndexed$_nth$arity$2(null,i__23194);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__23195 = seq__23191;
var G__23196 = chunk__23192;
var G__23197 = count__23193;
var G__23198 = (i__23194 + (1));
seq__23191 = G__23195;
chunk__23192 = G__23196;
count__23193 = G__23197;
i__23194 = G__23198;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__23191);
if(temp__5457__auto__){
var seq__23191__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23191__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23191__$1);
var G__23199 = cljs.core.chunk_rest(seq__23191__$1);
var G__23200 = c__4351__auto__;
var G__23201 = cljs.core.count(c__4351__auto__);
var G__23202 = (0);
seq__23191 = G__23199;
chunk__23192 = G__23200;
count__23193 = G__23201;
i__23194 = G__23202;
continue;
} else {
var it = cljs.core.first(seq__23191__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__23203 = cljs.core.next(seq__23191__$1);
var G__23204 = null;
var G__23205 = (0);
var G__23206 = (0);
seq__23191 = G__23203;
chunk__23192 = G__23204;
count__23193 = G__23205;
i__23194 = G__23206;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23208,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23212 = k23208;
var G__23212__$1 = (((G__23212 instanceof cljs.core.Keyword))?G__23212.fqn:null);
switch (G__23212__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23208,else__4206__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23207){
var self__ = this;
var G__23207__$1 = this;
return (new cljs.core.RecordIter((0),G__23207__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23213 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23213(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23209,other23210){
var self__ = this;
var this23209__$1 = this;
return ((!((other23210 == null))) && ((this23209__$1.constructor === other23210.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23209__$1.x,other23210.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23209__$1.y,other23210.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23209__$1.__extmap,other23210.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23207){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23214 = cljs.core.keyword_identical_QMARK_;
var expr__23215 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23217 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__23218 = expr__23215;
return (pred__23214.cljs$core$IFn$_invoke$arity$2 ? pred__23214.cljs$core$IFn$_invoke$arity$2(G__23217,G__23218) : pred__23214.call(null,G__23217,G__23218));
})())){
return (new shadow.dom.Coordinate(G__23207,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23219 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__23220 = expr__23215;
return (pred__23214.cljs$core$IFn$_invoke$arity$2 ? pred__23214.cljs$core$IFn$_invoke$arity$2(G__23219,G__23220) : pred__23214.call(null,G__23219,G__23220));
})())){
return (new shadow.dom.Coordinate(self__.x,G__23207,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23207),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23207){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__23207,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__23211){
var extmap__4236__auto__ = (function (){var G__23221 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23211,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__23211)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23221);
} else {
return G__23221;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__23211),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__23211),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__23223 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__23223);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__23224 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__23224);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__23225 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__23225);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23227,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23231 = k23227;
var G__23231__$1 = (((G__23231 instanceof cljs.core.Keyword))?G__23231.fqn:null);
switch (G__23231__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23227,else__4206__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Size{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23226){
var self__ = this;
var G__23226__$1 = this;
return (new cljs.core.RecordIter((0),G__23226__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23232 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23232(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23228,other23229){
var self__ = this;
var this23228__$1 = this;
return ((!((other23229 == null))) && ((this23228__$1.constructor === other23229.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23228__$1.w,other23229.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23228__$1.h,other23229.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23228__$1.__extmap,other23229.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23226){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23233 = cljs.core.keyword_identical_QMARK_;
var expr__23234 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23236 = new cljs.core.Keyword(null,"w","w",354169001);
var G__23237 = expr__23234;
return (pred__23233.cljs$core$IFn$_invoke$arity$2 ? pred__23233.cljs$core$IFn$_invoke$arity$2(G__23236,G__23237) : pred__23233.call(null,G__23236,G__23237));
})())){
return (new shadow.dom.Size(G__23226,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23238 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__23239 = expr__23234;
return (pred__23233.cljs$core$IFn$_invoke$arity$2 ? pred__23233.cljs$core$IFn$_invoke$arity$2(G__23238,G__23239) : pred__23233.call(null,G__23238,G__23239));
})())){
return (new shadow.dom.Size(self__.w,G__23226,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23226),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23226){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__23226,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__23230){
var extmap__4236__auto__ = (function (){var G__23240 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23230,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__23230)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23240);
} else {
return G__23240;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__23230),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__23230),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__23242 = shadow.dom.dom_node(el);
return goog.style.getSize(G__23242);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4405__auto__ = opts;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__23243 = (i + (1));
var G__23244 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__23243;
ret = G__23244;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23245){
var vec__23246 = p__23245;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23246,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23246,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__23250 = arguments.length;
switch (G__23250) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__23252_23254 = new_node;
var G__23253_23255 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__23252_23254,G__23253_23255);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__23256_23258 = new_node;
var G__23257_23259 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__23256_23258,G__23257_23259);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__23260 = ps;
var G__23261 = (i + (1));
el__$1 = G__23260;
i = G__23261;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__23262 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__23262);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__23263 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__23263);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__23264 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__23264);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__23265 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23265,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23265,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23265,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__23268_23278 = cljs.core.seq(props);
var chunk__23269_23279 = null;
var count__23270_23280 = (0);
var i__23271_23281 = (0);
while(true){
if((i__23271_23281 < count__23270_23280)){
var vec__23272_23282 = chunk__23269_23279.cljs$core$IIndexed$_nth$arity$2(null,i__23271_23281);
var k_23283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23272_23282,(0),null);
var v_23284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23272_23282,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_23283);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23283),v_23284);


var G__23285 = seq__23268_23278;
var G__23286 = chunk__23269_23279;
var G__23287 = count__23270_23280;
var G__23288 = (i__23271_23281 + (1));
seq__23268_23278 = G__23285;
chunk__23269_23279 = G__23286;
count__23270_23280 = G__23287;
i__23271_23281 = G__23288;
continue;
} else {
var temp__5457__auto___23289 = cljs.core.seq(seq__23268_23278);
if(temp__5457__auto___23289){
var seq__23268_23290__$1 = temp__5457__auto___23289;
if(cljs.core.chunked_seq_QMARK_(seq__23268_23290__$1)){
var c__4351__auto___23291 = cljs.core.chunk_first(seq__23268_23290__$1);
var G__23292 = cljs.core.chunk_rest(seq__23268_23290__$1);
var G__23293 = c__4351__auto___23291;
var G__23294 = cljs.core.count(c__4351__auto___23291);
var G__23295 = (0);
seq__23268_23278 = G__23292;
chunk__23269_23279 = G__23293;
count__23270_23280 = G__23294;
i__23271_23281 = G__23295;
continue;
} else {
var vec__23275_23296 = cljs.core.first(seq__23268_23290__$1);
var k_23297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23275_23296,(0),null);
var v_23298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23275_23296,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_23297);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23297),v_23298);


var G__23299 = cljs.core.next(seq__23268_23290__$1);
var G__23300 = null;
var G__23301 = (0);
var G__23302 = (0);
seq__23268_23278 = G__23299;
chunk__23269_23279 = G__23300;
count__23270_23280 = G__23301;
i__23271_23281 = G__23302;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__23304 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23304,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23304,(1),null);
var seq__23307_23325 = cljs.core.seq(node_children);
var chunk__23309_23326 = null;
var count__23310_23327 = (0);
var i__23311_23328 = (0);
while(true){
if((i__23311_23328 < count__23310_23327)){
var child_struct_23329 = chunk__23309_23326.cljs$core$IIndexed$_nth$arity$2(null,i__23311_23328);
if(!((child_struct_23329 == null))){
if(typeof child_struct_23329 === 'string'){
var text_23330 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23330),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_23329)].join(''));
} else {
var children_23331 = shadow.dom.svg_node(child_struct_23329);
if(cljs.core.seq_QMARK_(children_23331)){
var seq__23313_23332 = cljs.core.seq(children_23331);
var chunk__23315_23333 = null;
var count__23316_23334 = (0);
var i__23317_23335 = (0);
while(true){
if((i__23317_23335 < count__23316_23334)){
var child_23336 = chunk__23315_23333.cljs$core$IIndexed$_nth$arity$2(null,i__23317_23335);
if(cljs.core.truth_(child_23336)){
node.appendChild(child_23336);


var G__23337 = seq__23313_23332;
var G__23338 = chunk__23315_23333;
var G__23339 = count__23316_23334;
var G__23340 = (i__23317_23335 + (1));
seq__23313_23332 = G__23337;
chunk__23315_23333 = G__23338;
count__23316_23334 = G__23339;
i__23317_23335 = G__23340;
continue;
} else {
var G__23341 = seq__23313_23332;
var G__23342 = chunk__23315_23333;
var G__23343 = count__23316_23334;
var G__23344 = (i__23317_23335 + (1));
seq__23313_23332 = G__23341;
chunk__23315_23333 = G__23342;
count__23316_23334 = G__23343;
i__23317_23335 = G__23344;
continue;
}
} else {
var temp__5457__auto___23345 = cljs.core.seq(seq__23313_23332);
if(temp__5457__auto___23345){
var seq__23313_23346__$1 = temp__5457__auto___23345;
if(cljs.core.chunked_seq_QMARK_(seq__23313_23346__$1)){
var c__4351__auto___23347 = cljs.core.chunk_first(seq__23313_23346__$1);
var G__23348 = cljs.core.chunk_rest(seq__23313_23346__$1);
var G__23349 = c__4351__auto___23347;
var G__23350 = cljs.core.count(c__4351__auto___23347);
var G__23351 = (0);
seq__23313_23332 = G__23348;
chunk__23315_23333 = G__23349;
count__23316_23334 = G__23350;
i__23317_23335 = G__23351;
continue;
} else {
var child_23352 = cljs.core.first(seq__23313_23346__$1);
if(cljs.core.truth_(child_23352)){
node.appendChild(child_23352);


var G__23353 = cljs.core.next(seq__23313_23346__$1);
var G__23354 = null;
var G__23355 = (0);
var G__23356 = (0);
seq__23313_23332 = G__23353;
chunk__23315_23333 = G__23354;
count__23316_23334 = G__23355;
i__23317_23335 = G__23356;
continue;
} else {
var G__23357 = cljs.core.next(seq__23313_23346__$1);
var G__23358 = null;
var G__23359 = (0);
var G__23360 = (0);
seq__23313_23332 = G__23357;
chunk__23315_23333 = G__23358;
count__23316_23334 = G__23359;
i__23317_23335 = G__23360;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23331);
}
}


var G__23361 = seq__23307_23325;
var G__23362 = chunk__23309_23326;
var G__23363 = count__23310_23327;
var G__23364 = (i__23311_23328 + (1));
seq__23307_23325 = G__23361;
chunk__23309_23326 = G__23362;
count__23310_23327 = G__23363;
i__23311_23328 = G__23364;
continue;
} else {
var G__23365 = seq__23307_23325;
var G__23366 = chunk__23309_23326;
var G__23367 = count__23310_23327;
var G__23368 = (i__23311_23328 + (1));
seq__23307_23325 = G__23365;
chunk__23309_23326 = G__23366;
count__23310_23327 = G__23367;
i__23311_23328 = G__23368;
continue;
}
} else {
var temp__5457__auto___23369 = cljs.core.seq(seq__23307_23325);
if(temp__5457__auto___23369){
var seq__23307_23370__$1 = temp__5457__auto___23369;
if(cljs.core.chunked_seq_QMARK_(seq__23307_23370__$1)){
var c__4351__auto___23371 = cljs.core.chunk_first(seq__23307_23370__$1);
var G__23372 = cljs.core.chunk_rest(seq__23307_23370__$1);
var G__23373 = c__4351__auto___23371;
var G__23374 = cljs.core.count(c__4351__auto___23371);
var G__23375 = (0);
seq__23307_23325 = G__23372;
chunk__23309_23326 = G__23373;
count__23310_23327 = G__23374;
i__23311_23328 = G__23375;
continue;
} else {
var child_struct_23376 = cljs.core.first(seq__23307_23370__$1);
if(!((child_struct_23376 == null))){
if(typeof child_struct_23376 === 'string'){
var text_23377 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_23376)].join(''));
} else {
var children_23378 = shadow.dom.svg_node(child_struct_23376);
if(cljs.core.seq_QMARK_(children_23378)){
var seq__23319_23379 = cljs.core.seq(children_23378);
var chunk__23321_23380 = null;
var count__23322_23381 = (0);
var i__23323_23382 = (0);
while(true){
if((i__23323_23382 < count__23322_23381)){
var child_23383 = chunk__23321_23380.cljs$core$IIndexed$_nth$arity$2(null,i__23323_23382);
if(cljs.core.truth_(child_23383)){
node.appendChild(child_23383);


var G__23384 = seq__23319_23379;
var G__23385 = chunk__23321_23380;
var G__23386 = count__23322_23381;
var G__23387 = (i__23323_23382 + (1));
seq__23319_23379 = G__23384;
chunk__23321_23380 = G__23385;
count__23322_23381 = G__23386;
i__23323_23382 = G__23387;
continue;
} else {
var G__23388 = seq__23319_23379;
var G__23389 = chunk__23321_23380;
var G__23390 = count__23322_23381;
var G__23391 = (i__23323_23382 + (1));
seq__23319_23379 = G__23388;
chunk__23321_23380 = G__23389;
count__23322_23381 = G__23390;
i__23323_23382 = G__23391;
continue;
}
} else {
var temp__5457__auto___23392__$1 = cljs.core.seq(seq__23319_23379);
if(temp__5457__auto___23392__$1){
var seq__23319_23393__$1 = temp__5457__auto___23392__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23319_23393__$1)){
var c__4351__auto___23394 = cljs.core.chunk_first(seq__23319_23393__$1);
var G__23395 = cljs.core.chunk_rest(seq__23319_23393__$1);
var G__23396 = c__4351__auto___23394;
var G__23397 = cljs.core.count(c__4351__auto___23394);
var G__23398 = (0);
seq__23319_23379 = G__23395;
chunk__23321_23380 = G__23396;
count__23322_23381 = G__23397;
i__23323_23382 = G__23398;
continue;
} else {
var child_23399 = cljs.core.first(seq__23319_23393__$1);
if(cljs.core.truth_(child_23399)){
node.appendChild(child_23399);


var G__23400 = cljs.core.next(seq__23319_23393__$1);
var G__23401 = null;
var G__23402 = (0);
var G__23403 = (0);
seq__23319_23379 = G__23400;
chunk__23321_23380 = G__23401;
count__23322_23381 = G__23402;
i__23323_23382 = G__23403;
continue;
} else {
var G__23404 = cljs.core.next(seq__23319_23393__$1);
var G__23405 = null;
var G__23406 = (0);
var G__23407 = (0);
seq__23319_23379 = G__23404;
chunk__23321_23380 = G__23405;
count__23322_23381 = G__23406;
i__23323_23382 = G__23407;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23378);
}
}


var G__23408 = cljs.core.next(seq__23307_23370__$1);
var G__23409 = null;
var G__23410 = (0);
var G__23411 = (0);
seq__23307_23325 = G__23408;
chunk__23309_23326 = G__23409;
count__23310_23327 = G__23410;
i__23311_23328 = G__23411;
continue;
} else {
var G__23412 = cljs.core.next(seq__23307_23370__$1);
var G__23413 = null;
var G__23414 = (0);
var G__23415 = (0);
seq__23307_23325 = G__23412;
chunk__23309_23326 = G__23413;
count__23310_23327 = G__23414;
i__23311_23328 = G__23415;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__23416_23422 = shadow.dom._to_svg;
var G__23417_23423 = "string";
var G__23418_23424 = ((function (G__23416_23422,G__23417_23423){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__23416_23422,G__23417_23423))
;
goog.object.set(G__23416_23422,G__23417_23423,G__23418_23424);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__23419_23425 = shadow.dom._to_svg;
var G__23420_23426 = "null";
var G__23421_23427 = ((function (G__23419_23425,G__23420_23426){
return (function (_){
return null;
});})(G__23419_23425,G__23420_23426))
;
goog.object.set(G__23419_23425,G__23420_23426,G__23421_23427);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23430 = arguments.length;
var i__4532__auto___23431 = (0);
while(true){
if((i__4532__auto___23431 < len__4531__auto___23430)){
args__4534__auto__.push((arguments[i__4532__auto___23431]));

var G__23432 = (i__4532__auto___23431 + (1));
i__4532__auto___23431 = G__23432;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq23428){
var G__23429 = cljs.core.first(seq23428);
var seq23428__$1 = cljs.core.next(seq23428);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23429,seq23428__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__23434 = arguments.length;
switch (G__23434) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__23435_23450 = shadow.dom.dom_node(el);
var G__23436_23451 = cljs.core.name(event);
var G__23437_23452 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__23435_23450,G__23436_23451,G__23437_23452) : shadow.dom.dom_listen.call(null,G__23435_23450,G__23436_23451,G__23437_23452));

if(cljs.core.truth_((function (){var and__3938__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3938__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3938__auto__;
}
})())){
var c__20345__auto___23453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___23453,buf,chan,event_fn){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___23453,buf,chan,event_fn){
return (function (state_23442){
var state_val_23443 = (state_23442[(1)]);
if((state_val_23443 === (1))){
var state_23442__$1 = state_23442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23442__$1,(2),once_or_cleanup);
} else {
if((state_val_23443 === (2))){
var inst_23439 = (state_23442[(2)]);
var inst_23440 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_23442__$1 = (function (){var statearr_23444 = state_23442;
(statearr_23444[(7)] = inst_23439);

return statearr_23444;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23442__$1,inst_23440);
} else {
return null;
}
}
});})(c__20345__auto___23453,buf,chan,event_fn))
;
return ((function (switch__19885__auto__,c__20345__auto___23453,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__19886__auto__ = null;
var shadow$dom$state_machine__19886__auto____0 = (function (){
var statearr_23445 = [null,null,null,null,null,null,null,null];
(statearr_23445[(0)] = shadow$dom$state_machine__19886__auto__);

(statearr_23445[(1)] = (1));

return statearr_23445;
});
var shadow$dom$state_machine__19886__auto____1 = (function (state_23442){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_23442);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e23446){if((e23446 instanceof Object)){
var ex__19889__auto__ = e23446;
var statearr_23447_23454 = state_23442;
(statearr_23447_23454[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23455 = state_23442;
state_23442 = G__23455;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
shadow$dom$state_machine__19886__auto__ = function(state_23442){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__19886__auto____0.call(this);
case 1:
return shadow$dom$state_machine__19886__auto____1.call(this,state_23442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__19886__auto____0;
shadow$dom$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__19886__auto____1;
return shadow$dom$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___23453,buf,chan,event_fn))
})();
var state__20347__auto__ = (function (){var statearr_23448 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_23448[(6)] = c__20345__auto___23453);

return statearr_23448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___23453,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
