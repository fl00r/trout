goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__20418 = arguments.length;
switch (G__20418) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20421 = (function (f,blockable,meta20422){
this.f = f;
this.blockable = blockable;
this.meta20422 = meta20422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20423,meta20422__$1){
var self__ = this;
var _20423__$1 = this;
return (new cljs.core.async.t_cljs$core$async20421(self__.f,self__.blockable,meta20422__$1));
});

cljs.core.async.t_cljs$core$async20421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20423){
var self__ = this;
var _20423__$1 = this;
return self__.meta20422;
});

cljs.core.async.t_cljs$core$async20421.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20422","meta20422",1251038117,null)], null);
});

cljs.core.async.t_cljs$core$async20421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20421";

cljs.core.async.t_cljs$core$async20421.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async20421");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20421.
 */
cljs.core.async.__GT_t_cljs$core$async20421 = (function cljs$core$async$__GT_t_cljs$core$async20421(f__$1,blockable__$1,meta20422){
return (new cljs.core.async.t_cljs$core$async20421(f__$1,blockable__$1,meta20422));
});

}

return (new cljs.core.async.t_cljs$core$async20421(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__20448 = arguments.length;
switch (G__20448) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__20455 = arguments.length;
switch (G__20455) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__20458 = arguments.length;
switch (G__20458) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20475 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20475) : fn1.call(null,val_20475));
} else {
cljs.core.async.impl.dispatch.run(((function (val_20475,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20475) : fn1.call(null,val_20475));
});})(val_20475,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__20495 = arguments.length;
switch (G__20495) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___20544 = n;
var x_20548 = (0);
while(true){
if((x_20548 < n__4408__auto___20544)){
(a[x_20548] = (0));

var G__20549 = (x_20548 + (1));
x_20548 = G__20549;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__20553 = (i + (1));
i = G__20553;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20556 = (function (flag,meta20557){
this.flag = flag;
this.meta20557 = meta20557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20558,meta20557__$1){
var self__ = this;
var _20558__$1 = this;
return (new cljs.core.async.t_cljs$core$async20556(self__.flag,meta20557__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20558){
var self__ = this;
var _20558__$1 = this;
return self__.meta20557;
});})(flag))
;

cljs.core.async.t_cljs$core$async20556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20556.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20557","meta20557",-515568165,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20556";

cljs.core.async.t_cljs$core$async20556.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async20556");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20556.
 */
cljs.core.async.__GT_t_cljs$core$async20556 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20556(flag__$1,meta20557){
return (new cljs.core.async.t_cljs$core$async20556(flag__$1,meta20557));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20556(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20601 = (function (flag,cb,meta20602){
this.flag = flag;
this.cb = cb;
this.meta20602 = meta20602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20603,meta20602__$1){
var self__ = this;
var _20603__$1 = this;
return (new cljs.core.async.t_cljs$core$async20601(self__.flag,self__.cb,meta20602__$1));
});

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20603){
var self__ = this;
var _20603__$1 = this;
return self__.meta20602;
});

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20602","meta20602",-1751938630,null)], null);
});

cljs.core.async.t_cljs$core$async20601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20601";

cljs.core.async.t_cljs$core$async20601.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async20601");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20601.
 */
cljs.core.async.__GT_t_cljs$core$async20601 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20601(flag__$1,cb__$1,meta20602){
return (new cljs.core.async.t_cljs$core$async20601(flag__$1,cb__$1,meta20602));
});

}

return (new cljs.core.async.t_cljs$core$async20601(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20623_SHARP_){
var G__20629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20623_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20629) : fret.call(null,G__20629));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20624_SHARP_){
var G__20631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20624_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20631) : fret.call(null,G__20631));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20644 = (i + (1));
i = G__20644;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20654 = arguments.length;
var i__4532__auto___20655 = (0);
while(true){
if((i__4532__auto___20655 < len__4531__auto___20654)){
args__4534__auto__.push((arguments[i__4532__auto___20655]));

var G__20656 = (i__4532__auto___20655 + (1));
i__4532__auto___20655 = G__20656;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20651){
var map__20652 = p__20651;
var map__20652__$1 = ((((!((map__20652 == null)))?(((((map__20652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20652):map__20652);
var opts = map__20652__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20646){
var G__20647 = cljs.core.first(seq20646);
var seq20646__$1 = cljs.core.next(seq20646);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20647,seq20646__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__20668 = arguments.length;
switch (G__20668) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20345__auto___20756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___20756){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___20756){
return (function (state_20708){
var state_val_20709 = (state_20708[(1)]);
if((state_val_20709 === (7))){
var inst_20702 = (state_20708[(2)]);
var state_20708__$1 = state_20708;
var statearr_20717_20757 = state_20708__$1;
(statearr_20717_20757[(2)] = inst_20702);

(statearr_20717_20757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20709 === (1))){
var state_20708__$1 = state_20708;
var statearr_20719_20759 = state_20708__$1;
(statearr_20719_20759[(2)] = null);

(statearr_20719_20759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20709 === (4))){
var inst_20684 = (state_20708[(7)]);
var inst_20684__$1 = (state_20708[(2)]);
var inst_20685 = (inst_20684__$1 == null);
var state_20708__$1 = (function (){var statearr_20723 = state_20708;
(statearr_20723[(7)] = inst_20684__$1);

return statearr_20723;
})();
if(cljs.core.truth_(inst_20685)){
var statearr_20724_20760 = state_20708__$1;
(statearr_20724_20760[(1)] = (5));

} else {
var statearr_20725_20761 = state_20708__$1;
(statearr_20725_20761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20709 === (13))){
var state_20708__$1 = state_20708;
var statearr_20726_20763 = state_20708__$1;
(statearr_20726_20763[(2)] = null);

(statearr_20726_20763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20709 === (6))){
var inst_20684 = (state_20708[(7)]);
var state_20708__$1 = state_20708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20708__$1,(11),to,inst_20684);
} else {
if((state_val_20709 === (3))){
var inst_20705 = (state_20708[(2)]);
var state_20708__$1 = state_20708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20708__$1,inst_20705);
} else {
if((state_val_20709 === (12))){
var state_20708__$1 = state_20708;
var statearr_20728_20765 = state_20708__$1;
(statearr_20728_20765[(2)] = null);

(statearr_20728_20765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20709 === (2))){
var state_20708__$1 = state_20708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20708__$1,(4),from);
} else {
if((state_val_20709 === (11))){
var inst_20694 = (state_20708[(2)]);
var state_20708__$1 = state_20708;
if(cljs.core.truth_(inst_20694)){
var statearr_20730_20766 = state_20708__$1;
(statearr_20730_20766[(1)] = (12));

} else {
var statearr_20733_20767 = state_20708__$1;
(statearr_20733_20767[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20709 === (9))){
var state_20708__$1 = state_20708;
var statearr_20734_20768 = state_20708__$1;
(statearr_20734_20768[(2)] = null);

(statearr_20734_20768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20709 === (5))){
var state_20708__$1 = state_20708;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20735_20769 = state_20708__$1;
(statearr_20735_20769[(1)] = (8));

} else {
var statearr_20736_20770 = state_20708__$1;
(statearr_20736_20770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20709 === (14))){
var inst_20700 = (state_20708[(2)]);
var state_20708__$1 = state_20708;
var statearr_20737_20771 = state_20708__$1;
(statearr_20737_20771[(2)] = inst_20700);

(statearr_20737_20771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20709 === (10))){
var inst_20691 = (state_20708[(2)]);
var state_20708__$1 = state_20708;
var statearr_20738_20772 = state_20708__$1;
(statearr_20738_20772[(2)] = inst_20691);

(statearr_20738_20772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20709 === (8))){
var inst_20688 = cljs.core.async.close_BANG_(to);
var state_20708__$1 = state_20708;
var statearr_20739_20773 = state_20708__$1;
(statearr_20739_20773[(2)] = inst_20688);

(statearr_20739_20773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___20756))
;
return ((function (switch__19885__auto__,c__20345__auto___20756){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_20740 = [null,null,null,null,null,null,null,null];
(statearr_20740[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_20740[(1)] = (1));

return statearr_20740;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_20708){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_20708);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e20741){if((e20741 instanceof Object)){
var ex__19889__auto__ = e20741;
var statearr_20742_20774 = state_20708;
(statearr_20742_20774[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20741;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20775 = state_20708;
state_20708 = G__20775;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_20708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_20708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___20756))
})();
var state__20347__auto__ = (function (){var statearr_20743 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_20743[(6)] = c__20345__auto___20756);

return statearr_20743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___20756))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__20780){
var vec__20781 = p__20780;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20781,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20781,(1),null);
var job = vec__20781;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__20345__auto___21010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___21010,res,vec__20781,v,p,job,jobs,results){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___21010,res,vec__20781,v,p,job,jobs,results){
return (function (state_20790){
var state_val_20791 = (state_20790[(1)]);
if((state_val_20791 === (1))){
var state_20790__$1 = state_20790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20790__$1,(2),res,v);
} else {
if((state_val_20791 === (2))){
var inst_20787 = (state_20790[(2)]);
var inst_20788 = cljs.core.async.close_BANG_(res);
var state_20790__$1 = (function (){var statearr_20793 = state_20790;
(statearr_20793[(7)] = inst_20787);

return statearr_20793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20790__$1,inst_20788);
} else {
return null;
}
}
});})(c__20345__auto___21010,res,vec__20781,v,p,job,jobs,results))
;
return ((function (switch__19885__auto__,c__20345__auto___21010,res,vec__20781,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0 = (function (){
var statearr_20795 = [null,null,null,null,null,null,null,null];
(statearr_20795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__);

(statearr_20795[(1)] = (1));

return statearr_20795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1 = (function (state_20790){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_20790);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e20797){if((e20797 instanceof Object)){
var ex__19889__auto__ = e20797;
var statearr_20799_21015 = state_20790;
(statearr_20799_21015[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21016 = state_20790;
state_20790 = G__21016;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__ = function(state_20790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1.call(this,state_20790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___21010,res,vec__20781,v,p,job,jobs,results))
})();
var state__20347__auto__ = (function (){var statearr_20800 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_20800[(6)] = c__20345__auto___21010);

return statearr_20800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___21010,res,vec__20781,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20802){
var vec__20803 = p__20802;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20803,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20803,(1),null);
var job = vec__20803;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___21024 = n;
var __21025 = (0);
while(true){
if((__21025 < n__4408__auto___21024)){
var G__20808_21026 = type;
var G__20808_21027__$1 = (((G__20808_21026 instanceof cljs.core.Keyword))?G__20808_21026.fqn:null);
switch (G__20808_21027__$1) {
case "compute":
var c__20345__auto___21029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21025,c__20345__auto___21029,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (__21025,c__20345__auto___21029,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async){
return (function (state_20822){
var state_val_20823 = (state_20822[(1)]);
if((state_val_20823 === (1))){
var state_20822__$1 = state_20822;
var statearr_20824_21032 = state_20822__$1;
(statearr_20824_21032[(2)] = null);

(statearr_20824_21032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20823 === (2))){
var state_20822__$1 = state_20822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20822__$1,(4),jobs);
} else {
if((state_val_20823 === (3))){
var inst_20820 = (state_20822[(2)]);
var state_20822__$1 = state_20822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20822__$1,inst_20820);
} else {
if((state_val_20823 === (4))){
var inst_20812 = (state_20822[(2)]);
var inst_20813 = process(inst_20812);
var state_20822__$1 = state_20822;
if(cljs.core.truth_(inst_20813)){
var statearr_20825_21033 = state_20822__$1;
(statearr_20825_21033[(1)] = (5));

} else {
var statearr_20826_21034 = state_20822__$1;
(statearr_20826_21034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20823 === (5))){
var state_20822__$1 = state_20822;
var statearr_20827_21037 = state_20822__$1;
(statearr_20827_21037[(2)] = null);

(statearr_20827_21037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20823 === (6))){
var state_20822__$1 = state_20822;
var statearr_20828_21038 = state_20822__$1;
(statearr_20828_21038[(2)] = null);

(statearr_20828_21038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20823 === (7))){
var inst_20818 = (state_20822[(2)]);
var state_20822__$1 = state_20822;
var statearr_20829_21039 = state_20822__$1;
(statearr_20829_21039[(2)] = inst_20818);

(statearr_20829_21039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21025,c__20345__auto___21029,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async))
;
return ((function (__21025,switch__19885__auto__,c__20345__auto___21029,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0 = (function (){
var statearr_20830 = [null,null,null,null,null,null,null];
(statearr_20830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__);

(statearr_20830[(1)] = (1));

return statearr_20830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1 = (function (state_20822){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_20822);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e20831){if((e20831 instanceof Object)){
var ex__19889__auto__ = e20831;
var statearr_20832_21041 = state_20822;
(statearr_20832_21041[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21042 = state_20822;
state_20822 = G__21042;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__ = function(state_20822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1.call(this,state_20822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__;
})()
;})(__21025,switch__19885__auto__,c__20345__auto___21029,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async))
})();
var state__20347__auto__ = (function (){var statearr_20833 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_20833[(6)] = c__20345__auto___21029);

return statearr_20833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(__21025,c__20345__auto___21029,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async))
);


break;
case "async":
var c__20345__auto___21044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21025,c__20345__auto___21044,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (__21025,c__20345__auto___21044,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async){
return (function (state_20846){
var state_val_20847 = (state_20846[(1)]);
if((state_val_20847 === (1))){
var state_20846__$1 = state_20846;
var statearr_20850_21045 = state_20846__$1;
(statearr_20850_21045[(2)] = null);

(statearr_20850_21045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (2))){
var state_20846__$1 = state_20846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20846__$1,(4),jobs);
} else {
if((state_val_20847 === (3))){
var inst_20844 = (state_20846[(2)]);
var state_20846__$1 = state_20846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20846__$1,inst_20844);
} else {
if((state_val_20847 === (4))){
var inst_20836 = (state_20846[(2)]);
var inst_20837 = async(inst_20836);
var state_20846__$1 = state_20846;
if(cljs.core.truth_(inst_20837)){
var statearr_20854_21046 = state_20846__$1;
(statearr_20854_21046[(1)] = (5));

} else {
var statearr_20855_21047 = state_20846__$1;
(statearr_20855_21047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (5))){
var state_20846__$1 = state_20846;
var statearr_20856_21048 = state_20846__$1;
(statearr_20856_21048[(2)] = null);

(statearr_20856_21048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (6))){
var state_20846__$1 = state_20846;
var statearr_20857_21049 = state_20846__$1;
(statearr_20857_21049[(2)] = null);

(statearr_20857_21049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20847 === (7))){
var inst_20842 = (state_20846[(2)]);
var state_20846__$1 = state_20846;
var statearr_20858_21051 = state_20846__$1;
(statearr_20858_21051[(2)] = inst_20842);

(statearr_20858_21051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21025,c__20345__auto___21044,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async))
;
return ((function (__21025,switch__19885__auto__,c__20345__auto___21044,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0 = (function (){
var statearr_20859 = [null,null,null,null,null,null,null];
(statearr_20859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__);

(statearr_20859[(1)] = (1));

return statearr_20859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1 = (function (state_20846){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_20846);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e20862){if((e20862 instanceof Object)){
var ex__19889__auto__ = e20862;
var statearr_20863_21054 = state_20846;
(statearr_20863_21054[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20862;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21055 = state_20846;
state_20846 = G__21055;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__ = function(state_20846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1.call(this,state_20846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__;
})()
;})(__21025,switch__19885__auto__,c__20345__auto___21044,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async))
})();
var state__20347__auto__ = (function (){var statearr_20866 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_20866[(6)] = c__20345__auto___21044);

return statearr_20866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(__21025,c__20345__auto___21044,G__20808_21026,G__20808_21027__$1,n__4408__auto___21024,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20808_21027__$1)].join('')));

}

var G__21058 = (__21025 + (1));
__21025 = G__21058;
continue;
} else {
}
break;
}

var c__20345__auto___21060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___21060,jobs,results,process,async){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___21060,jobs,results,process,async){
return (function (state_20892){
var state_val_20893 = (state_20892[(1)]);
if((state_val_20893 === (1))){
var state_20892__$1 = state_20892;
var statearr_20894_21061 = state_20892__$1;
(statearr_20894_21061[(2)] = null);

(statearr_20894_21061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (2))){
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20892__$1,(4),from);
} else {
if((state_val_20893 === (3))){
var inst_20890 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20892__$1,inst_20890);
} else {
if((state_val_20893 === (4))){
var inst_20871 = (state_20892[(7)]);
var inst_20871__$1 = (state_20892[(2)]);
var inst_20872 = (inst_20871__$1 == null);
var state_20892__$1 = (function (){var statearr_20898 = state_20892;
(statearr_20898[(7)] = inst_20871__$1);

return statearr_20898;
})();
if(cljs.core.truth_(inst_20872)){
var statearr_20899_21066 = state_20892__$1;
(statearr_20899_21066[(1)] = (5));

} else {
var statearr_20900_21067 = state_20892__$1;
(statearr_20900_21067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (5))){
var inst_20874 = cljs.core.async.close_BANG_(jobs);
var state_20892__$1 = state_20892;
var statearr_20901_21068 = state_20892__$1;
(statearr_20901_21068[(2)] = inst_20874);

(statearr_20901_21068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (6))){
var inst_20871 = (state_20892[(7)]);
var inst_20876 = (state_20892[(8)]);
var inst_20876__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20879 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20880 = [inst_20871,inst_20876__$1];
var inst_20881 = (new cljs.core.PersistentVector(null,2,(5),inst_20879,inst_20880,null));
var state_20892__$1 = (function (){var statearr_20904 = state_20892;
(statearr_20904[(8)] = inst_20876__$1);

return statearr_20904;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20892__$1,(8),jobs,inst_20881);
} else {
if((state_val_20893 === (7))){
var inst_20888 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20905_21071 = state_20892__$1;
(statearr_20905_21071[(2)] = inst_20888);

(statearr_20905_21071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (8))){
var inst_20876 = (state_20892[(8)]);
var inst_20883 = (state_20892[(2)]);
var state_20892__$1 = (function (){var statearr_20908 = state_20892;
(statearr_20908[(9)] = inst_20883);

return statearr_20908;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20892__$1,(9),results,inst_20876);
} else {
if((state_val_20893 === (9))){
var inst_20885 = (state_20892[(2)]);
var state_20892__$1 = (function (){var statearr_20910 = state_20892;
(statearr_20910[(10)] = inst_20885);

return statearr_20910;
})();
var statearr_20911_21076 = state_20892__$1;
(statearr_20911_21076[(2)] = null);

(statearr_20911_21076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___21060,jobs,results,process,async))
;
return ((function (switch__19885__auto__,c__20345__auto___21060,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0 = (function (){
var statearr_20915 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__);

(statearr_20915[(1)] = (1));

return statearr_20915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1 = (function (state_20892){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_20892);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e20916){if((e20916 instanceof Object)){
var ex__19889__auto__ = e20916;
var statearr_20919_21077 = state_20892;
(statearr_20919_21077[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21078 = state_20892;
state_20892 = G__21078;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__ = function(state_20892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1.call(this,state_20892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___21060,jobs,results,process,async))
})();
var state__20347__auto__ = (function (){var statearr_20920 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_20920[(6)] = c__20345__auto___21060);

return statearr_20920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___21060,jobs,results,process,async))
);


var c__20345__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto__,jobs,results,process,async){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto__,jobs,results,process,async){
return (function (state_20961){
var state_val_20962 = (state_20961[(1)]);
if((state_val_20962 === (7))){
var inst_20957 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
var statearr_20965_21079 = state_20961__$1;
(statearr_20965_21079[(2)] = inst_20957);

(statearr_20965_21079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (20))){
var state_20961__$1 = state_20961;
var statearr_20967_21081 = state_20961__$1;
(statearr_20967_21081[(2)] = null);

(statearr_20967_21081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (1))){
var state_20961__$1 = state_20961;
var statearr_20968_21082 = state_20961__$1;
(statearr_20968_21082[(2)] = null);

(statearr_20968_21082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (4))){
var inst_20926 = (state_20961[(7)]);
var inst_20926__$1 = (state_20961[(2)]);
var inst_20927 = (inst_20926__$1 == null);
var state_20961__$1 = (function (){var statearr_20969 = state_20961;
(statearr_20969[(7)] = inst_20926__$1);

return statearr_20969;
})();
if(cljs.core.truth_(inst_20927)){
var statearr_20970_21083 = state_20961__$1;
(statearr_20970_21083[(1)] = (5));

} else {
var statearr_20971_21084 = state_20961__$1;
(statearr_20971_21084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (15))){
var inst_20939 = (state_20961[(8)]);
var state_20961__$1 = state_20961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20961__$1,(18),to,inst_20939);
} else {
if((state_val_20962 === (21))){
var inst_20952 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
var statearr_20974_21086 = state_20961__$1;
(statearr_20974_21086[(2)] = inst_20952);

(statearr_20974_21086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (13))){
var inst_20954 = (state_20961[(2)]);
var state_20961__$1 = (function (){var statearr_20978 = state_20961;
(statearr_20978[(9)] = inst_20954);

return statearr_20978;
})();
var statearr_20979_21087 = state_20961__$1;
(statearr_20979_21087[(2)] = null);

(statearr_20979_21087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (6))){
var inst_20926 = (state_20961[(7)]);
var state_20961__$1 = state_20961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20961__$1,(11),inst_20926);
} else {
if((state_val_20962 === (17))){
var inst_20947 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
if(cljs.core.truth_(inst_20947)){
var statearr_20980_21091 = state_20961__$1;
(statearr_20980_21091[(1)] = (19));

} else {
var statearr_20981_21092 = state_20961__$1;
(statearr_20981_21092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (3))){
var inst_20959 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20961__$1,inst_20959);
} else {
if((state_val_20962 === (12))){
var inst_20936 = (state_20961[(10)]);
var state_20961__$1 = state_20961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20961__$1,(14),inst_20936);
} else {
if((state_val_20962 === (2))){
var state_20961__$1 = state_20961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20961__$1,(4),results);
} else {
if((state_val_20962 === (19))){
var state_20961__$1 = state_20961;
var statearr_20982_21093 = state_20961__$1;
(statearr_20982_21093[(2)] = null);

(statearr_20982_21093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (11))){
var inst_20936 = (state_20961[(2)]);
var state_20961__$1 = (function (){var statearr_20985 = state_20961;
(statearr_20985[(10)] = inst_20936);

return statearr_20985;
})();
var statearr_20986_21094 = state_20961__$1;
(statearr_20986_21094[(2)] = null);

(statearr_20986_21094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (9))){
var state_20961__$1 = state_20961;
var statearr_20987_21095 = state_20961__$1;
(statearr_20987_21095[(2)] = null);

(statearr_20987_21095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (5))){
var state_20961__$1 = state_20961;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20988_21096 = state_20961__$1;
(statearr_20988_21096[(1)] = (8));

} else {
var statearr_20989_21097 = state_20961__$1;
(statearr_20989_21097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (14))){
var inst_20941 = (state_20961[(11)]);
var inst_20939 = (state_20961[(8)]);
var inst_20939__$1 = (state_20961[(2)]);
var inst_20940 = (inst_20939__$1 == null);
var inst_20941__$1 = cljs.core.not(inst_20940);
var state_20961__$1 = (function (){var statearr_20992 = state_20961;
(statearr_20992[(11)] = inst_20941__$1);

(statearr_20992[(8)] = inst_20939__$1);

return statearr_20992;
})();
if(inst_20941__$1){
var statearr_20993_21098 = state_20961__$1;
(statearr_20993_21098[(1)] = (15));

} else {
var statearr_20996_21099 = state_20961__$1;
(statearr_20996_21099[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (16))){
var inst_20941 = (state_20961[(11)]);
var state_20961__$1 = state_20961;
var statearr_20997_21100 = state_20961__$1;
(statearr_20997_21100[(2)] = inst_20941);

(statearr_20997_21100[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (10))){
var inst_20933 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
var statearr_20998_21101 = state_20961__$1;
(statearr_20998_21101[(2)] = inst_20933);

(statearr_20998_21101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (18))){
var inst_20944 = (state_20961[(2)]);
var state_20961__$1 = state_20961;
var statearr_20999_21102 = state_20961__$1;
(statearr_20999_21102[(2)] = inst_20944);

(statearr_20999_21102[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20962 === (8))){
var inst_20930 = cljs.core.async.close_BANG_(to);
var state_20961__$1 = state_20961;
var statearr_21002_21103 = state_20961__$1;
(statearr_21002_21103[(2)] = inst_20930);

(statearr_21002_21103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto__,jobs,results,process,async))
;
return ((function (switch__19885__auto__,c__20345__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0 = (function (){
var statearr_21003 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__);

(statearr_21003[(1)] = (1));

return statearr_21003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1 = (function (state_20961){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_20961);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e21004){if((e21004 instanceof Object)){
var ex__19889__auto__ = e21004;
var statearr_21005_21105 = state_20961;
(statearr_21005_21105[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21106 = state_20961;
state_20961 = G__21106;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__ = function(state_20961){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1.call(this,state_20961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19886__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto__,jobs,results,process,async))
})();
var state__20347__auto__ = (function (){var statearr_21006 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_21006[(6)] = c__20345__auto__);

return statearr_21006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto__,jobs,results,process,async))
);

return c__20345__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21108 = arguments.length;
switch (G__21108) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21111 = arguments.length;
switch (G__21111) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21114 = arguments.length;
switch (G__21114) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__20345__auto___21184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___21184,tc,fc){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___21184,tc,fc){
return (function (state_21140){
var state_val_21141 = (state_21140[(1)]);
if((state_val_21141 === (7))){
var inst_21136 = (state_21140[(2)]);
var state_21140__$1 = state_21140;
var statearr_21142_21186 = state_21140__$1;
(statearr_21142_21186[(2)] = inst_21136);

(statearr_21142_21186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (1))){
var state_21140__$1 = state_21140;
var statearr_21143_21187 = state_21140__$1;
(statearr_21143_21187[(2)] = null);

(statearr_21143_21187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (4))){
var inst_21117 = (state_21140[(7)]);
var inst_21117__$1 = (state_21140[(2)]);
var inst_21118 = (inst_21117__$1 == null);
var state_21140__$1 = (function (){var statearr_21144 = state_21140;
(statearr_21144[(7)] = inst_21117__$1);

return statearr_21144;
})();
if(cljs.core.truth_(inst_21118)){
var statearr_21145_21188 = state_21140__$1;
(statearr_21145_21188[(1)] = (5));

} else {
var statearr_21147_21189 = state_21140__$1;
(statearr_21147_21189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (13))){
var state_21140__$1 = state_21140;
var statearr_21150_21194 = state_21140__$1;
(statearr_21150_21194[(2)] = null);

(statearr_21150_21194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (6))){
var inst_21117 = (state_21140[(7)]);
var inst_21123 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21117) : p.call(null,inst_21117));
var state_21140__$1 = state_21140;
if(cljs.core.truth_(inst_21123)){
var statearr_21152_21199 = state_21140__$1;
(statearr_21152_21199[(1)] = (9));

} else {
var statearr_21154_21200 = state_21140__$1;
(statearr_21154_21200[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (3))){
var inst_21138 = (state_21140[(2)]);
var state_21140__$1 = state_21140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21140__$1,inst_21138);
} else {
if((state_val_21141 === (12))){
var state_21140__$1 = state_21140;
var statearr_21155_21205 = state_21140__$1;
(statearr_21155_21205[(2)] = null);

(statearr_21155_21205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (2))){
var state_21140__$1 = state_21140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21140__$1,(4),ch);
} else {
if((state_val_21141 === (11))){
var inst_21117 = (state_21140[(7)]);
var inst_21127 = (state_21140[(2)]);
var state_21140__$1 = state_21140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21140__$1,(8),inst_21127,inst_21117);
} else {
if((state_val_21141 === (9))){
var state_21140__$1 = state_21140;
var statearr_21157_21206 = state_21140__$1;
(statearr_21157_21206[(2)] = tc);

(statearr_21157_21206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (5))){
var inst_21120 = cljs.core.async.close_BANG_(tc);
var inst_21121 = cljs.core.async.close_BANG_(fc);
var state_21140__$1 = (function (){var statearr_21158 = state_21140;
(statearr_21158[(8)] = inst_21120);

return statearr_21158;
})();
var statearr_21159_21207 = state_21140__$1;
(statearr_21159_21207[(2)] = inst_21121);

(statearr_21159_21207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (14))){
var inst_21134 = (state_21140[(2)]);
var state_21140__$1 = state_21140;
var statearr_21164_21208 = state_21140__$1;
(statearr_21164_21208[(2)] = inst_21134);

(statearr_21164_21208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (10))){
var state_21140__$1 = state_21140;
var statearr_21165_21209 = state_21140__$1;
(statearr_21165_21209[(2)] = fc);

(statearr_21165_21209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21141 === (8))){
var inst_21129 = (state_21140[(2)]);
var state_21140__$1 = state_21140;
if(cljs.core.truth_(inst_21129)){
var statearr_21166_21210 = state_21140__$1;
(statearr_21166_21210[(1)] = (12));

} else {
var statearr_21177_21211 = state_21140__$1;
(statearr_21177_21211[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___21184,tc,fc))
;
return ((function (switch__19885__auto__,c__20345__auto___21184,tc,fc){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_21179 = [null,null,null,null,null,null,null,null,null];
(statearr_21179[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_21179[(1)] = (1));

return statearr_21179;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_21140){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_21140);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e21180){if((e21180 instanceof Object)){
var ex__19889__auto__ = e21180;
var statearr_21181_21212 = state_21140;
(statearr_21181_21212[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21213 = state_21140;
state_21140 = G__21213;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_21140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_21140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___21184,tc,fc))
})();
var state__20347__auto__ = (function (){var statearr_21182 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_21182[(6)] = c__20345__auto___21184);

return statearr_21182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___21184,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20345__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto__){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto__){
return (function (state_21234){
var state_val_21235 = (state_21234[(1)]);
if((state_val_21235 === (7))){
var inst_21230 = (state_21234[(2)]);
var state_21234__$1 = state_21234;
var statearr_21236_21254 = state_21234__$1;
(statearr_21236_21254[(2)] = inst_21230);

(statearr_21236_21254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21235 === (1))){
var inst_21214 = init;
var state_21234__$1 = (function (){var statearr_21237 = state_21234;
(statearr_21237[(7)] = inst_21214);

return statearr_21237;
})();
var statearr_21238_21255 = state_21234__$1;
(statearr_21238_21255[(2)] = null);

(statearr_21238_21255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21235 === (4))){
var inst_21217 = (state_21234[(8)]);
var inst_21217__$1 = (state_21234[(2)]);
var inst_21218 = (inst_21217__$1 == null);
var state_21234__$1 = (function (){var statearr_21239 = state_21234;
(statearr_21239[(8)] = inst_21217__$1);

return statearr_21239;
})();
if(cljs.core.truth_(inst_21218)){
var statearr_21240_21258 = state_21234__$1;
(statearr_21240_21258[(1)] = (5));

} else {
var statearr_21241_21259 = state_21234__$1;
(statearr_21241_21259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21235 === (6))){
var inst_21214 = (state_21234[(7)]);
var inst_21217 = (state_21234[(8)]);
var inst_21221 = (state_21234[(9)]);
var inst_21221__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21214,inst_21217) : f.call(null,inst_21214,inst_21217));
var inst_21222 = cljs.core.reduced_QMARK_(inst_21221__$1);
var state_21234__$1 = (function (){var statearr_21242 = state_21234;
(statearr_21242[(9)] = inst_21221__$1);

return statearr_21242;
})();
if(inst_21222){
var statearr_21243_21262 = state_21234__$1;
(statearr_21243_21262[(1)] = (8));

} else {
var statearr_21244_21263 = state_21234__$1;
(statearr_21244_21263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21235 === (3))){
var inst_21232 = (state_21234[(2)]);
var state_21234__$1 = state_21234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21234__$1,inst_21232);
} else {
if((state_val_21235 === (2))){
var state_21234__$1 = state_21234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21234__$1,(4),ch);
} else {
if((state_val_21235 === (9))){
var inst_21221 = (state_21234[(9)]);
var inst_21214 = inst_21221;
var state_21234__$1 = (function (){var statearr_21245 = state_21234;
(statearr_21245[(7)] = inst_21214);

return statearr_21245;
})();
var statearr_21246_21265 = state_21234__$1;
(statearr_21246_21265[(2)] = null);

(statearr_21246_21265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21235 === (5))){
var inst_21214 = (state_21234[(7)]);
var state_21234__$1 = state_21234;
var statearr_21247_21266 = state_21234__$1;
(statearr_21247_21266[(2)] = inst_21214);

(statearr_21247_21266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21235 === (10))){
var inst_21228 = (state_21234[(2)]);
var state_21234__$1 = state_21234;
var statearr_21248_21267 = state_21234__$1;
(statearr_21248_21267[(2)] = inst_21228);

(statearr_21248_21267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21235 === (8))){
var inst_21221 = (state_21234[(9)]);
var inst_21224 = cljs.core.deref(inst_21221);
var state_21234__$1 = state_21234;
var statearr_21249_21269 = state_21234__$1;
(statearr_21249_21269[(2)] = inst_21224);

(statearr_21249_21269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto__))
;
return ((function (switch__19885__auto__,c__20345__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19886__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19886__auto____0 = (function (){
var statearr_21250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21250[(0)] = cljs$core$async$reduce_$_state_machine__19886__auto__);

(statearr_21250[(1)] = (1));

return statearr_21250;
});
var cljs$core$async$reduce_$_state_machine__19886__auto____1 = (function (state_21234){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_21234);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e21251){if((e21251 instanceof Object)){
var ex__19889__auto__ = e21251;
var statearr_21252_21271 = state_21234;
(statearr_21252_21271[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21272 = state_21234;
state_21234 = G__21272;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19886__auto__ = function(state_21234){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19886__auto____1.call(this,state_21234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19886__auto____0;
cljs$core$async$reduce_$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19886__auto____1;
return cljs$core$async$reduce_$_state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto__))
})();
var state__20347__auto__ = (function (){var statearr_21253 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_21253[(6)] = c__20345__auto__);

return statearr_21253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto__))
);

return c__20345__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__20345__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto__,f__$1){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto__,f__$1){
return (function (state_21278){
var state_val_21279 = (state_21278[(1)]);
if((state_val_21279 === (1))){
var inst_21273 = cljs.core.async.reduce(f__$1,init,ch);
var state_21278__$1 = state_21278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21278__$1,(2),inst_21273);
} else {
if((state_val_21279 === (2))){
var inst_21275 = (state_21278[(2)]);
var inst_21276 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_21275) : f__$1.call(null,inst_21275));
var state_21278__$1 = state_21278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21278__$1,inst_21276);
} else {
return null;
}
}
});})(c__20345__auto__,f__$1))
;
return ((function (switch__19885__auto__,c__20345__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__19886__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19886__auto____0 = (function (){
var statearr_21280 = [null,null,null,null,null,null,null];
(statearr_21280[(0)] = cljs$core$async$transduce_$_state_machine__19886__auto__);

(statearr_21280[(1)] = (1));

return statearr_21280;
});
var cljs$core$async$transduce_$_state_machine__19886__auto____1 = (function (state_21278){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_21278);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e21281){if((e21281 instanceof Object)){
var ex__19889__auto__ = e21281;
var statearr_21282_21292 = state_21278;
(statearr_21282_21292[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21281;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21293 = state_21278;
state_21278 = G__21293;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19886__auto__ = function(state_21278){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19886__auto____1.call(this,state_21278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19886__auto____0;
cljs$core$async$transduce_$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19886__auto____1;
return cljs$core$async$transduce_$_state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto__,f__$1))
})();
var state__20347__auto__ = (function (){var statearr_21284 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_21284[(6)] = c__20345__auto__);

return statearr_21284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto__,f__$1))
);

return c__20345__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__21296 = arguments.length;
switch (G__21296) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20345__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto__){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto__){
return (function (state_21322){
var state_val_21323 = (state_21322[(1)]);
if((state_val_21323 === (7))){
var inst_21304 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
var statearr_21329_21360 = state_21322__$1;
(statearr_21329_21360[(2)] = inst_21304);

(statearr_21329_21360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (1))){
var inst_21298 = cljs.core.seq(coll);
var inst_21299 = inst_21298;
var state_21322__$1 = (function (){var statearr_21331 = state_21322;
(statearr_21331[(7)] = inst_21299);

return statearr_21331;
})();
var statearr_21332_21362 = state_21322__$1;
(statearr_21332_21362[(2)] = null);

(statearr_21332_21362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (4))){
var inst_21299 = (state_21322[(7)]);
var inst_21302 = cljs.core.first(inst_21299);
var state_21322__$1 = state_21322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21322__$1,(7),ch,inst_21302);
} else {
if((state_val_21323 === (13))){
var inst_21316 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
var statearr_21334_21364 = state_21322__$1;
(statearr_21334_21364[(2)] = inst_21316);

(statearr_21334_21364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (6))){
var inst_21307 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
if(cljs.core.truth_(inst_21307)){
var statearr_21335_21366 = state_21322__$1;
(statearr_21335_21366[(1)] = (8));

} else {
var statearr_21336_21369 = state_21322__$1;
(statearr_21336_21369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (3))){
var inst_21320 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21322__$1,inst_21320);
} else {
if((state_val_21323 === (12))){
var state_21322__$1 = state_21322;
var statearr_21337_21370 = state_21322__$1;
(statearr_21337_21370[(2)] = null);

(statearr_21337_21370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (2))){
var inst_21299 = (state_21322[(7)]);
var state_21322__$1 = state_21322;
if(cljs.core.truth_(inst_21299)){
var statearr_21338_21371 = state_21322__$1;
(statearr_21338_21371[(1)] = (4));

} else {
var statearr_21339_21372 = state_21322__$1;
(statearr_21339_21372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (11))){
var inst_21313 = cljs.core.async.close_BANG_(ch);
var state_21322__$1 = state_21322;
var statearr_21340_21373 = state_21322__$1;
(statearr_21340_21373[(2)] = inst_21313);

(statearr_21340_21373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (9))){
var state_21322__$1 = state_21322;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21341_21375 = state_21322__$1;
(statearr_21341_21375[(1)] = (11));

} else {
var statearr_21342_21376 = state_21322__$1;
(statearr_21342_21376[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (5))){
var inst_21299 = (state_21322[(7)]);
var state_21322__$1 = state_21322;
var statearr_21343_21377 = state_21322__$1;
(statearr_21343_21377[(2)] = inst_21299);

(statearr_21343_21377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (10))){
var inst_21318 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
var statearr_21344_21378 = state_21322__$1;
(statearr_21344_21378[(2)] = inst_21318);

(statearr_21344_21378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (8))){
var inst_21299 = (state_21322[(7)]);
var inst_21309 = cljs.core.next(inst_21299);
var inst_21299__$1 = inst_21309;
var state_21322__$1 = (function (){var statearr_21345 = state_21322;
(statearr_21345[(7)] = inst_21299__$1);

return statearr_21345;
})();
var statearr_21346_21379 = state_21322__$1;
(statearr_21346_21379[(2)] = null);

(statearr_21346_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto__))
;
return ((function (switch__19885__auto__,c__20345__auto__){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_21348 = [null,null,null,null,null,null,null,null];
(statearr_21348[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_21348[(1)] = (1));

return statearr_21348;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_21322){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_21322);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e21353){if((e21353 instanceof Object)){
var ex__19889__auto__ = e21353;
var statearr_21355_21380 = state_21322;
(statearr_21355_21380[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21381 = state_21322;
state_21322 = G__21381;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_21322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_21322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto__))
})();
var state__20347__auto__ = (function (){var statearr_21356 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_21356[(6)] = c__20345__auto__);

return statearr_21356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto__))
);

return c__20345__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21401 = (function (ch,cs,meta21402){
this.ch = ch;
this.cs = cs;
this.meta21402 = meta21402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21403,meta21402__$1){
var self__ = this;
var _21403__$1 = this;
return (new cljs.core.async.t_cljs$core$async21401(self__.ch,self__.cs,meta21402__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21403){
var self__ = this;
var _21403__$1 = this;
return self__.meta21402;
});})(cs))
;

cljs.core.async.t_cljs$core$async21401.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21401.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21401.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21401.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21401.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21401.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21402","meta21402",71882149,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21401.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21401";

cljs.core.async.t_cljs$core$async21401.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async21401");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21401.
 */
cljs.core.async.__GT_t_cljs$core$async21401 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21401(ch__$1,cs__$1,meta21402){
return (new cljs.core.async.t_cljs$core$async21401(ch__$1,cs__$1,meta21402));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21401(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20345__auto___21623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___21623,cs,m,dchan,dctr,done){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___21623,cs,m,dchan,dctr,done){
return (function (state_21538){
var state_val_21539 = (state_21538[(1)]);
if((state_val_21539 === (7))){
var inst_21534 = (state_21538[(2)]);
var state_21538__$1 = state_21538;
var statearr_21540_21624 = state_21538__$1;
(statearr_21540_21624[(2)] = inst_21534);

(statearr_21540_21624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (20))){
var inst_21437 = (state_21538[(7)]);
var inst_21449 = cljs.core.first(inst_21437);
var inst_21450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21449,(0),null);
var inst_21451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21449,(1),null);
var state_21538__$1 = (function (){var statearr_21541 = state_21538;
(statearr_21541[(8)] = inst_21450);

return statearr_21541;
})();
if(cljs.core.truth_(inst_21451)){
var statearr_21542_21625 = state_21538__$1;
(statearr_21542_21625[(1)] = (22));

} else {
var statearr_21543_21626 = state_21538__$1;
(statearr_21543_21626[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (27))){
var inst_21406 = (state_21538[(9)]);
var inst_21479 = (state_21538[(10)]);
var inst_21481 = (state_21538[(11)]);
var inst_21486 = (state_21538[(12)]);
var inst_21486__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21479,inst_21481);
var inst_21487 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21486__$1,inst_21406,done);
var state_21538__$1 = (function (){var statearr_21544 = state_21538;
(statearr_21544[(12)] = inst_21486__$1);

return statearr_21544;
})();
if(cljs.core.truth_(inst_21487)){
var statearr_21545_21627 = state_21538__$1;
(statearr_21545_21627[(1)] = (30));

} else {
var statearr_21546_21628 = state_21538__$1;
(statearr_21546_21628[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (1))){
var state_21538__$1 = state_21538;
var statearr_21547_21629 = state_21538__$1;
(statearr_21547_21629[(2)] = null);

(statearr_21547_21629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (24))){
var inst_21437 = (state_21538[(7)]);
var inst_21456 = (state_21538[(2)]);
var inst_21457 = cljs.core.next(inst_21437);
var inst_21415 = inst_21457;
var inst_21416 = null;
var inst_21417 = (0);
var inst_21418 = (0);
var state_21538__$1 = (function (){var statearr_21548 = state_21538;
(statearr_21548[(13)] = inst_21418);

(statearr_21548[(14)] = inst_21456);

(statearr_21548[(15)] = inst_21415);

(statearr_21548[(16)] = inst_21417);

(statearr_21548[(17)] = inst_21416);

return statearr_21548;
})();
var statearr_21549_21630 = state_21538__$1;
(statearr_21549_21630[(2)] = null);

(statearr_21549_21630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (39))){
var state_21538__$1 = state_21538;
var statearr_21553_21631 = state_21538__$1;
(statearr_21553_21631[(2)] = null);

(statearr_21553_21631[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (4))){
var inst_21406 = (state_21538[(9)]);
var inst_21406__$1 = (state_21538[(2)]);
var inst_21407 = (inst_21406__$1 == null);
var state_21538__$1 = (function (){var statearr_21554 = state_21538;
(statearr_21554[(9)] = inst_21406__$1);

return statearr_21554;
})();
if(cljs.core.truth_(inst_21407)){
var statearr_21555_21632 = state_21538__$1;
(statearr_21555_21632[(1)] = (5));

} else {
var statearr_21556_21633 = state_21538__$1;
(statearr_21556_21633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (15))){
var inst_21418 = (state_21538[(13)]);
var inst_21415 = (state_21538[(15)]);
var inst_21417 = (state_21538[(16)]);
var inst_21416 = (state_21538[(17)]);
var inst_21433 = (state_21538[(2)]);
var inst_21434 = (inst_21418 + (1));
var tmp21550 = inst_21415;
var tmp21551 = inst_21417;
var tmp21552 = inst_21416;
var inst_21415__$1 = tmp21550;
var inst_21416__$1 = tmp21552;
var inst_21417__$1 = tmp21551;
var inst_21418__$1 = inst_21434;
var state_21538__$1 = (function (){var statearr_21557 = state_21538;
(statearr_21557[(13)] = inst_21418__$1);

(statearr_21557[(18)] = inst_21433);

(statearr_21557[(15)] = inst_21415__$1);

(statearr_21557[(16)] = inst_21417__$1);

(statearr_21557[(17)] = inst_21416__$1);

return statearr_21557;
})();
var statearr_21558_21634 = state_21538__$1;
(statearr_21558_21634[(2)] = null);

(statearr_21558_21634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (21))){
var inst_21460 = (state_21538[(2)]);
var state_21538__$1 = state_21538;
var statearr_21562_21635 = state_21538__$1;
(statearr_21562_21635[(2)] = inst_21460);

(statearr_21562_21635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (31))){
var inst_21486 = (state_21538[(12)]);
var inst_21490 = done(null);
var inst_21491 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21486);
var state_21538__$1 = (function (){var statearr_21563 = state_21538;
(statearr_21563[(19)] = inst_21490);

return statearr_21563;
})();
var statearr_21564_21636 = state_21538__$1;
(statearr_21564_21636[(2)] = inst_21491);

(statearr_21564_21636[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (32))){
var inst_21479 = (state_21538[(10)]);
var inst_21481 = (state_21538[(11)]);
var inst_21480 = (state_21538[(20)]);
var inst_21478 = (state_21538[(21)]);
var inst_21493 = (state_21538[(2)]);
var inst_21494 = (inst_21481 + (1));
var tmp21559 = inst_21479;
var tmp21560 = inst_21480;
var tmp21561 = inst_21478;
var inst_21478__$1 = tmp21561;
var inst_21479__$1 = tmp21559;
var inst_21480__$1 = tmp21560;
var inst_21481__$1 = inst_21494;
var state_21538__$1 = (function (){var statearr_21565 = state_21538;
(statearr_21565[(22)] = inst_21493);

(statearr_21565[(10)] = inst_21479__$1);

(statearr_21565[(11)] = inst_21481__$1);

(statearr_21565[(20)] = inst_21480__$1);

(statearr_21565[(21)] = inst_21478__$1);

return statearr_21565;
})();
var statearr_21566_21637 = state_21538__$1;
(statearr_21566_21637[(2)] = null);

(statearr_21566_21637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (40))){
var inst_21506 = (state_21538[(23)]);
var inst_21510 = done(null);
var inst_21511 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21506);
var state_21538__$1 = (function (){var statearr_21567 = state_21538;
(statearr_21567[(24)] = inst_21510);

return statearr_21567;
})();
var statearr_21568_21638 = state_21538__$1;
(statearr_21568_21638[(2)] = inst_21511);

(statearr_21568_21638[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (33))){
var inst_21497 = (state_21538[(25)]);
var inst_21499 = cljs.core.chunked_seq_QMARK_(inst_21497);
var state_21538__$1 = state_21538;
if(inst_21499){
var statearr_21569_21639 = state_21538__$1;
(statearr_21569_21639[(1)] = (36));

} else {
var statearr_21570_21640 = state_21538__$1;
(statearr_21570_21640[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (13))){
var inst_21427 = (state_21538[(26)]);
var inst_21430 = cljs.core.async.close_BANG_(inst_21427);
var state_21538__$1 = state_21538;
var statearr_21571_21641 = state_21538__$1;
(statearr_21571_21641[(2)] = inst_21430);

(statearr_21571_21641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (22))){
var inst_21450 = (state_21538[(8)]);
var inst_21453 = cljs.core.async.close_BANG_(inst_21450);
var state_21538__$1 = state_21538;
var statearr_21572_21642 = state_21538__$1;
(statearr_21572_21642[(2)] = inst_21453);

(statearr_21572_21642[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (36))){
var inst_21497 = (state_21538[(25)]);
var inst_21501 = cljs.core.chunk_first(inst_21497);
var inst_21502 = cljs.core.chunk_rest(inst_21497);
var inst_21503 = cljs.core.count(inst_21501);
var inst_21478 = inst_21502;
var inst_21479 = inst_21501;
var inst_21480 = inst_21503;
var inst_21481 = (0);
var state_21538__$1 = (function (){var statearr_21573 = state_21538;
(statearr_21573[(10)] = inst_21479);

(statearr_21573[(11)] = inst_21481);

(statearr_21573[(20)] = inst_21480);

(statearr_21573[(21)] = inst_21478);

return statearr_21573;
})();
var statearr_21574_21643 = state_21538__$1;
(statearr_21574_21643[(2)] = null);

(statearr_21574_21643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (41))){
var inst_21497 = (state_21538[(25)]);
var inst_21513 = (state_21538[(2)]);
var inst_21514 = cljs.core.next(inst_21497);
var inst_21478 = inst_21514;
var inst_21479 = null;
var inst_21480 = (0);
var inst_21481 = (0);
var state_21538__$1 = (function (){var statearr_21575 = state_21538;
(statearr_21575[(10)] = inst_21479);

(statearr_21575[(11)] = inst_21481);

(statearr_21575[(20)] = inst_21480);

(statearr_21575[(27)] = inst_21513);

(statearr_21575[(21)] = inst_21478);

return statearr_21575;
})();
var statearr_21576_21644 = state_21538__$1;
(statearr_21576_21644[(2)] = null);

(statearr_21576_21644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (43))){
var state_21538__$1 = state_21538;
var statearr_21577_21645 = state_21538__$1;
(statearr_21577_21645[(2)] = null);

(statearr_21577_21645[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (29))){
var inst_21522 = (state_21538[(2)]);
var state_21538__$1 = state_21538;
var statearr_21578_21646 = state_21538__$1;
(statearr_21578_21646[(2)] = inst_21522);

(statearr_21578_21646[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (44))){
var inst_21531 = (state_21538[(2)]);
var state_21538__$1 = (function (){var statearr_21579 = state_21538;
(statearr_21579[(28)] = inst_21531);

return statearr_21579;
})();
var statearr_21580_21647 = state_21538__$1;
(statearr_21580_21647[(2)] = null);

(statearr_21580_21647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (6))){
var inst_21470 = (state_21538[(29)]);
var inst_21469 = cljs.core.deref(cs);
var inst_21470__$1 = cljs.core.keys(inst_21469);
var inst_21471 = cljs.core.count(inst_21470__$1);
var inst_21472 = cljs.core.reset_BANG_(dctr,inst_21471);
var inst_21477 = cljs.core.seq(inst_21470__$1);
var inst_21478 = inst_21477;
var inst_21479 = null;
var inst_21480 = (0);
var inst_21481 = (0);
var state_21538__$1 = (function (){var statearr_21581 = state_21538;
(statearr_21581[(10)] = inst_21479);

(statearr_21581[(11)] = inst_21481);

(statearr_21581[(29)] = inst_21470__$1);

(statearr_21581[(20)] = inst_21480);

(statearr_21581[(21)] = inst_21478);

(statearr_21581[(30)] = inst_21472);

return statearr_21581;
})();
var statearr_21582_21648 = state_21538__$1;
(statearr_21582_21648[(2)] = null);

(statearr_21582_21648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (28))){
var inst_21497 = (state_21538[(25)]);
var inst_21478 = (state_21538[(21)]);
var inst_21497__$1 = cljs.core.seq(inst_21478);
var state_21538__$1 = (function (){var statearr_21583 = state_21538;
(statearr_21583[(25)] = inst_21497__$1);

return statearr_21583;
})();
if(inst_21497__$1){
var statearr_21584_21649 = state_21538__$1;
(statearr_21584_21649[(1)] = (33));

} else {
var statearr_21585_21650 = state_21538__$1;
(statearr_21585_21650[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (25))){
var inst_21481 = (state_21538[(11)]);
var inst_21480 = (state_21538[(20)]);
var inst_21483 = (inst_21481 < inst_21480);
var inst_21484 = inst_21483;
var state_21538__$1 = state_21538;
if(cljs.core.truth_(inst_21484)){
var statearr_21586_21651 = state_21538__$1;
(statearr_21586_21651[(1)] = (27));

} else {
var statearr_21587_21652 = state_21538__$1;
(statearr_21587_21652[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (34))){
var state_21538__$1 = state_21538;
var statearr_21588_21653 = state_21538__$1;
(statearr_21588_21653[(2)] = null);

(statearr_21588_21653[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (17))){
var state_21538__$1 = state_21538;
var statearr_21589_21654 = state_21538__$1;
(statearr_21589_21654[(2)] = null);

(statearr_21589_21654[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (3))){
var inst_21536 = (state_21538[(2)]);
var state_21538__$1 = state_21538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21538__$1,inst_21536);
} else {
if((state_val_21539 === (12))){
var inst_21465 = (state_21538[(2)]);
var state_21538__$1 = state_21538;
var statearr_21590_21655 = state_21538__$1;
(statearr_21590_21655[(2)] = inst_21465);

(statearr_21590_21655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (2))){
var state_21538__$1 = state_21538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21538__$1,(4),ch);
} else {
if((state_val_21539 === (23))){
var state_21538__$1 = state_21538;
var statearr_21591_21656 = state_21538__$1;
(statearr_21591_21656[(2)] = null);

(statearr_21591_21656[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (35))){
var inst_21520 = (state_21538[(2)]);
var state_21538__$1 = state_21538;
var statearr_21592_21657 = state_21538__$1;
(statearr_21592_21657[(2)] = inst_21520);

(statearr_21592_21657[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (19))){
var inst_21437 = (state_21538[(7)]);
var inst_21441 = cljs.core.chunk_first(inst_21437);
var inst_21442 = cljs.core.chunk_rest(inst_21437);
var inst_21443 = cljs.core.count(inst_21441);
var inst_21415 = inst_21442;
var inst_21416 = inst_21441;
var inst_21417 = inst_21443;
var inst_21418 = (0);
var state_21538__$1 = (function (){var statearr_21593 = state_21538;
(statearr_21593[(13)] = inst_21418);

(statearr_21593[(15)] = inst_21415);

(statearr_21593[(16)] = inst_21417);

(statearr_21593[(17)] = inst_21416);

return statearr_21593;
})();
var statearr_21594_21658 = state_21538__$1;
(statearr_21594_21658[(2)] = null);

(statearr_21594_21658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (11))){
var inst_21437 = (state_21538[(7)]);
var inst_21415 = (state_21538[(15)]);
var inst_21437__$1 = cljs.core.seq(inst_21415);
var state_21538__$1 = (function (){var statearr_21595 = state_21538;
(statearr_21595[(7)] = inst_21437__$1);

return statearr_21595;
})();
if(inst_21437__$1){
var statearr_21596_21659 = state_21538__$1;
(statearr_21596_21659[(1)] = (16));

} else {
var statearr_21597_21660 = state_21538__$1;
(statearr_21597_21660[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (9))){
var inst_21467 = (state_21538[(2)]);
var state_21538__$1 = state_21538;
var statearr_21598_21661 = state_21538__$1;
(statearr_21598_21661[(2)] = inst_21467);

(statearr_21598_21661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (5))){
var inst_21413 = cljs.core.deref(cs);
var inst_21414 = cljs.core.seq(inst_21413);
var inst_21415 = inst_21414;
var inst_21416 = null;
var inst_21417 = (0);
var inst_21418 = (0);
var state_21538__$1 = (function (){var statearr_21599 = state_21538;
(statearr_21599[(13)] = inst_21418);

(statearr_21599[(15)] = inst_21415);

(statearr_21599[(16)] = inst_21417);

(statearr_21599[(17)] = inst_21416);

return statearr_21599;
})();
var statearr_21600_21662 = state_21538__$1;
(statearr_21600_21662[(2)] = null);

(statearr_21600_21662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (14))){
var state_21538__$1 = state_21538;
var statearr_21601_21663 = state_21538__$1;
(statearr_21601_21663[(2)] = null);

(statearr_21601_21663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (45))){
var inst_21528 = (state_21538[(2)]);
var state_21538__$1 = state_21538;
var statearr_21602_21664 = state_21538__$1;
(statearr_21602_21664[(2)] = inst_21528);

(statearr_21602_21664[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (26))){
var inst_21470 = (state_21538[(29)]);
var inst_21524 = (state_21538[(2)]);
var inst_21525 = cljs.core.seq(inst_21470);
var state_21538__$1 = (function (){var statearr_21603 = state_21538;
(statearr_21603[(31)] = inst_21524);

return statearr_21603;
})();
if(inst_21525){
var statearr_21604_21665 = state_21538__$1;
(statearr_21604_21665[(1)] = (42));

} else {
var statearr_21605_21666 = state_21538__$1;
(statearr_21605_21666[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (16))){
var inst_21437 = (state_21538[(7)]);
var inst_21439 = cljs.core.chunked_seq_QMARK_(inst_21437);
var state_21538__$1 = state_21538;
if(inst_21439){
var statearr_21606_21667 = state_21538__$1;
(statearr_21606_21667[(1)] = (19));

} else {
var statearr_21607_21668 = state_21538__$1;
(statearr_21607_21668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (38))){
var inst_21517 = (state_21538[(2)]);
var state_21538__$1 = state_21538;
var statearr_21608_21669 = state_21538__$1;
(statearr_21608_21669[(2)] = inst_21517);

(statearr_21608_21669[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (30))){
var state_21538__$1 = state_21538;
var statearr_21609_21670 = state_21538__$1;
(statearr_21609_21670[(2)] = null);

(statearr_21609_21670[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (10))){
var inst_21418 = (state_21538[(13)]);
var inst_21416 = (state_21538[(17)]);
var inst_21426 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21416,inst_21418);
var inst_21427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21426,(0),null);
var inst_21428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21426,(1),null);
var state_21538__$1 = (function (){var statearr_21610 = state_21538;
(statearr_21610[(26)] = inst_21427);

return statearr_21610;
})();
if(cljs.core.truth_(inst_21428)){
var statearr_21611_21671 = state_21538__$1;
(statearr_21611_21671[(1)] = (13));

} else {
var statearr_21612_21672 = state_21538__$1;
(statearr_21612_21672[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (18))){
var inst_21463 = (state_21538[(2)]);
var state_21538__$1 = state_21538;
var statearr_21613_21673 = state_21538__$1;
(statearr_21613_21673[(2)] = inst_21463);

(statearr_21613_21673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (42))){
var state_21538__$1 = state_21538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21538__$1,(45),dchan);
} else {
if((state_val_21539 === (37))){
var inst_21406 = (state_21538[(9)]);
var inst_21497 = (state_21538[(25)]);
var inst_21506 = (state_21538[(23)]);
var inst_21506__$1 = cljs.core.first(inst_21497);
var inst_21507 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21506__$1,inst_21406,done);
var state_21538__$1 = (function (){var statearr_21614 = state_21538;
(statearr_21614[(23)] = inst_21506__$1);

return statearr_21614;
})();
if(cljs.core.truth_(inst_21507)){
var statearr_21615_21674 = state_21538__$1;
(statearr_21615_21674[(1)] = (39));

} else {
var statearr_21616_21675 = state_21538__$1;
(statearr_21616_21675[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21539 === (8))){
var inst_21418 = (state_21538[(13)]);
var inst_21417 = (state_21538[(16)]);
var inst_21420 = (inst_21418 < inst_21417);
var inst_21421 = inst_21420;
var state_21538__$1 = state_21538;
if(cljs.core.truth_(inst_21421)){
var statearr_21617_21676 = state_21538__$1;
(statearr_21617_21676[(1)] = (10));

} else {
var statearr_21618_21677 = state_21538__$1;
(statearr_21618_21677[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___21623,cs,m,dchan,dctr,done))
;
return ((function (switch__19885__auto__,c__20345__auto___21623,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19886__auto__ = null;
var cljs$core$async$mult_$_state_machine__19886__auto____0 = (function (){
var statearr_21619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21619[(0)] = cljs$core$async$mult_$_state_machine__19886__auto__);

(statearr_21619[(1)] = (1));

return statearr_21619;
});
var cljs$core$async$mult_$_state_machine__19886__auto____1 = (function (state_21538){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_21538);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e21620){if((e21620 instanceof Object)){
var ex__19889__auto__ = e21620;
var statearr_21621_21678 = state_21538;
(statearr_21621_21678[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21620;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21679 = state_21538;
state_21538 = G__21679;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19886__auto__ = function(state_21538){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19886__auto____1.call(this,state_21538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19886__auto____0;
cljs$core$async$mult_$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19886__auto____1;
return cljs$core$async$mult_$_state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___21623,cs,m,dchan,dctr,done))
})();
var state__20347__auto__ = (function (){var statearr_21622 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_21622[(6)] = c__20345__auto___21623);

return statearr_21622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___21623,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__21681 = arguments.length;
switch (G__21681) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21693 = arguments.length;
var i__4532__auto___21694 = (0);
while(true){
if((i__4532__auto___21694 < len__4531__auto___21693)){
args__4534__auto__.push((arguments[i__4532__auto___21694]));

var G__21695 = (i__4532__auto___21694 + (1));
i__4532__auto___21694 = G__21695;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21687){
var map__21688 = p__21687;
var map__21688__$1 = ((((!((map__21688 == null)))?(((((map__21688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21688):map__21688);
var opts = map__21688__$1;
var statearr_21690_21696 = state;
(statearr_21690_21696[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__21688,map__21688__$1,opts){
return (function (val){
var statearr_21691_21697 = state;
(statearr_21691_21697[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__21688,map__21688__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_21692_21698 = state;
(statearr_21692_21698[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21683){
var G__21684 = cljs.core.first(seq21683);
var seq21683__$1 = cljs.core.next(seq21683);
var G__21685 = cljs.core.first(seq21683__$1);
var seq21683__$2 = cljs.core.next(seq21683__$1);
var G__21686 = cljs.core.first(seq21683__$2);
var seq21683__$3 = cljs.core.next(seq21683__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21684,G__21685,G__21686,seq21683__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21699 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21699 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta21700){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta21700 = meta21700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21701,meta21700__$1){
var self__ = this;
var _21701__$1 = this;
return (new cljs.core.async.t_cljs$core$async21699(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta21700__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21701){
var self__ = this;
var _21701__$1 = this;
return self__.meta21700;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21699.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21699.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta21700","meta21700",1554772503,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21699";

cljs.core.async.t_cljs$core$async21699.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async21699");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21699.
 */
cljs.core.async.__GT_t_cljs$core$async21699 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21699(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21700){
return (new cljs.core.async.t_cljs$core$async21699(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21700));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21699(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20345__auto___21863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___21863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___21863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21803){
var state_val_21804 = (state_21803[(1)]);
if((state_val_21804 === (7))){
var inst_21718 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
var statearr_21805_21864 = state_21803__$1;
(statearr_21805_21864[(2)] = inst_21718);

(statearr_21805_21864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (20))){
var inst_21730 = (state_21803[(7)]);
var state_21803__$1 = state_21803;
var statearr_21806_21865 = state_21803__$1;
(statearr_21806_21865[(2)] = inst_21730);

(statearr_21806_21865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (27))){
var state_21803__$1 = state_21803;
var statearr_21807_21866 = state_21803__$1;
(statearr_21807_21866[(2)] = null);

(statearr_21807_21866[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (1))){
var inst_21705 = (state_21803[(8)]);
var inst_21705__$1 = calc_state();
var inst_21707 = (inst_21705__$1 == null);
var inst_21708 = cljs.core.not(inst_21707);
var state_21803__$1 = (function (){var statearr_21808 = state_21803;
(statearr_21808[(8)] = inst_21705__$1);

return statearr_21808;
})();
if(inst_21708){
var statearr_21809_21867 = state_21803__$1;
(statearr_21809_21867[(1)] = (2));

} else {
var statearr_21810_21868 = state_21803__$1;
(statearr_21810_21868[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (24))){
var inst_21777 = (state_21803[(9)]);
var inst_21763 = (state_21803[(10)]);
var inst_21754 = (state_21803[(11)]);
var inst_21777__$1 = (inst_21754.cljs$core$IFn$_invoke$arity$1 ? inst_21754.cljs$core$IFn$_invoke$arity$1(inst_21763) : inst_21754.call(null,inst_21763));
var state_21803__$1 = (function (){var statearr_21811 = state_21803;
(statearr_21811[(9)] = inst_21777__$1);

return statearr_21811;
})();
if(cljs.core.truth_(inst_21777__$1)){
var statearr_21812_21869 = state_21803__$1;
(statearr_21812_21869[(1)] = (29));

} else {
var statearr_21813_21870 = state_21803__$1;
(statearr_21813_21870[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (4))){
var inst_21721 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
if(cljs.core.truth_(inst_21721)){
var statearr_21814_21871 = state_21803__$1;
(statearr_21814_21871[(1)] = (8));

} else {
var statearr_21815_21872 = state_21803__$1;
(statearr_21815_21872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (15))){
var inst_21748 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
if(cljs.core.truth_(inst_21748)){
var statearr_21816_21873 = state_21803__$1;
(statearr_21816_21873[(1)] = (19));

} else {
var statearr_21817_21874 = state_21803__$1;
(statearr_21817_21874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (21))){
var inst_21753 = (state_21803[(12)]);
var inst_21753__$1 = (state_21803[(2)]);
var inst_21754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21753__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21753__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21753__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21803__$1 = (function (){var statearr_21818 = state_21803;
(statearr_21818[(12)] = inst_21753__$1);

(statearr_21818[(13)] = inst_21755);

(statearr_21818[(11)] = inst_21754);

return statearr_21818;
})();
return cljs.core.async.ioc_alts_BANG_(state_21803__$1,(22),inst_21756);
} else {
if((state_val_21804 === (31))){
var inst_21785 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
if(cljs.core.truth_(inst_21785)){
var statearr_21819_21875 = state_21803__$1;
(statearr_21819_21875[(1)] = (32));

} else {
var statearr_21820_21876 = state_21803__$1;
(statearr_21820_21876[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (32))){
var inst_21762 = (state_21803[(14)]);
var state_21803__$1 = state_21803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21803__$1,(35),out,inst_21762);
} else {
if((state_val_21804 === (33))){
var inst_21753 = (state_21803[(12)]);
var inst_21730 = inst_21753;
var state_21803__$1 = (function (){var statearr_21821 = state_21803;
(statearr_21821[(7)] = inst_21730);

return statearr_21821;
})();
var statearr_21822_21877 = state_21803__$1;
(statearr_21822_21877[(2)] = null);

(statearr_21822_21877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (13))){
var inst_21730 = (state_21803[(7)]);
var inst_21737 = inst_21730.cljs$lang$protocol_mask$partition0$;
var inst_21738 = (inst_21737 & (64));
var inst_21739 = inst_21730.cljs$core$ISeq$;
var inst_21740 = (cljs.core.PROTOCOL_SENTINEL === inst_21739);
var inst_21741 = ((inst_21738) || (inst_21740));
var state_21803__$1 = state_21803;
if(cljs.core.truth_(inst_21741)){
var statearr_21823_21878 = state_21803__$1;
(statearr_21823_21878[(1)] = (16));

} else {
var statearr_21824_21879 = state_21803__$1;
(statearr_21824_21879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (22))){
var inst_21762 = (state_21803[(14)]);
var inst_21763 = (state_21803[(10)]);
var inst_21761 = (state_21803[(2)]);
var inst_21762__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21761,(0),null);
var inst_21763__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21761,(1),null);
var inst_21764 = (inst_21762__$1 == null);
var inst_21765 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21763__$1,change);
var inst_21766 = ((inst_21764) || (inst_21765));
var state_21803__$1 = (function (){var statearr_21825 = state_21803;
(statearr_21825[(14)] = inst_21762__$1);

(statearr_21825[(10)] = inst_21763__$1);

return statearr_21825;
})();
if(cljs.core.truth_(inst_21766)){
var statearr_21826_21880 = state_21803__$1;
(statearr_21826_21880[(1)] = (23));

} else {
var statearr_21827_21881 = state_21803__$1;
(statearr_21827_21881[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (36))){
var inst_21753 = (state_21803[(12)]);
var inst_21730 = inst_21753;
var state_21803__$1 = (function (){var statearr_21828 = state_21803;
(statearr_21828[(7)] = inst_21730);

return statearr_21828;
})();
var statearr_21829_21882 = state_21803__$1;
(statearr_21829_21882[(2)] = null);

(statearr_21829_21882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (29))){
var inst_21777 = (state_21803[(9)]);
var state_21803__$1 = state_21803;
var statearr_21830_21883 = state_21803__$1;
(statearr_21830_21883[(2)] = inst_21777);

(statearr_21830_21883[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (6))){
var state_21803__$1 = state_21803;
var statearr_21831_21884 = state_21803__$1;
(statearr_21831_21884[(2)] = false);

(statearr_21831_21884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (28))){
var inst_21773 = (state_21803[(2)]);
var inst_21774 = calc_state();
var inst_21730 = inst_21774;
var state_21803__$1 = (function (){var statearr_21832 = state_21803;
(statearr_21832[(7)] = inst_21730);

(statearr_21832[(15)] = inst_21773);

return statearr_21832;
})();
var statearr_21833_21885 = state_21803__$1;
(statearr_21833_21885[(2)] = null);

(statearr_21833_21885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (25))){
var inst_21799 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
var statearr_21834_21886 = state_21803__$1;
(statearr_21834_21886[(2)] = inst_21799);

(statearr_21834_21886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (34))){
var inst_21797 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
var statearr_21835_21887 = state_21803__$1;
(statearr_21835_21887[(2)] = inst_21797);

(statearr_21835_21887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (17))){
var state_21803__$1 = state_21803;
var statearr_21836_21888 = state_21803__$1;
(statearr_21836_21888[(2)] = false);

(statearr_21836_21888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (3))){
var state_21803__$1 = state_21803;
var statearr_21837_21889 = state_21803__$1;
(statearr_21837_21889[(2)] = false);

(statearr_21837_21889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (12))){
var inst_21801 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21803__$1,inst_21801);
} else {
if((state_val_21804 === (2))){
var inst_21705 = (state_21803[(8)]);
var inst_21710 = inst_21705.cljs$lang$protocol_mask$partition0$;
var inst_21711 = (inst_21710 & (64));
var inst_21712 = inst_21705.cljs$core$ISeq$;
var inst_21713 = (cljs.core.PROTOCOL_SENTINEL === inst_21712);
var inst_21714 = ((inst_21711) || (inst_21713));
var state_21803__$1 = state_21803;
if(cljs.core.truth_(inst_21714)){
var statearr_21838_21890 = state_21803__$1;
(statearr_21838_21890[(1)] = (5));

} else {
var statearr_21839_21891 = state_21803__$1;
(statearr_21839_21891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (23))){
var inst_21762 = (state_21803[(14)]);
var inst_21768 = (inst_21762 == null);
var state_21803__$1 = state_21803;
if(cljs.core.truth_(inst_21768)){
var statearr_21840_21892 = state_21803__$1;
(statearr_21840_21892[(1)] = (26));

} else {
var statearr_21841_21893 = state_21803__$1;
(statearr_21841_21893[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (35))){
var inst_21788 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
if(cljs.core.truth_(inst_21788)){
var statearr_21842_21894 = state_21803__$1;
(statearr_21842_21894[(1)] = (36));

} else {
var statearr_21843_21895 = state_21803__$1;
(statearr_21843_21895[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (19))){
var inst_21730 = (state_21803[(7)]);
var inst_21750 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21730);
var state_21803__$1 = state_21803;
var statearr_21844_21896 = state_21803__$1;
(statearr_21844_21896[(2)] = inst_21750);

(statearr_21844_21896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (11))){
var inst_21730 = (state_21803[(7)]);
var inst_21734 = (inst_21730 == null);
var inst_21735 = cljs.core.not(inst_21734);
var state_21803__$1 = state_21803;
if(inst_21735){
var statearr_21845_21897 = state_21803__$1;
(statearr_21845_21897[(1)] = (13));

} else {
var statearr_21846_21898 = state_21803__$1;
(statearr_21846_21898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (9))){
var inst_21705 = (state_21803[(8)]);
var state_21803__$1 = state_21803;
var statearr_21847_21899 = state_21803__$1;
(statearr_21847_21899[(2)] = inst_21705);

(statearr_21847_21899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (5))){
var state_21803__$1 = state_21803;
var statearr_21848_21900 = state_21803__$1;
(statearr_21848_21900[(2)] = true);

(statearr_21848_21900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (14))){
var state_21803__$1 = state_21803;
var statearr_21849_21901 = state_21803__$1;
(statearr_21849_21901[(2)] = false);

(statearr_21849_21901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (26))){
var inst_21763 = (state_21803[(10)]);
var inst_21770 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21763);
var state_21803__$1 = state_21803;
var statearr_21850_21902 = state_21803__$1;
(statearr_21850_21902[(2)] = inst_21770);

(statearr_21850_21902[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (16))){
var state_21803__$1 = state_21803;
var statearr_21851_21903 = state_21803__$1;
(statearr_21851_21903[(2)] = true);

(statearr_21851_21903[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (38))){
var inst_21793 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
var statearr_21852_21904 = state_21803__$1;
(statearr_21852_21904[(2)] = inst_21793);

(statearr_21852_21904[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (30))){
var inst_21763 = (state_21803[(10)]);
var inst_21755 = (state_21803[(13)]);
var inst_21754 = (state_21803[(11)]);
var inst_21780 = cljs.core.empty_QMARK_(inst_21754);
var inst_21781 = (inst_21755.cljs$core$IFn$_invoke$arity$1 ? inst_21755.cljs$core$IFn$_invoke$arity$1(inst_21763) : inst_21755.call(null,inst_21763));
var inst_21782 = cljs.core.not(inst_21781);
var inst_21783 = ((inst_21780) && (inst_21782));
var state_21803__$1 = state_21803;
var statearr_21853_21905 = state_21803__$1;
(statearr_21853_21905[(2)] = inst_21783);

(statearr_21853_21905[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (10))){
var inst_21705 = (state_21803[(8)]);
var inst_21726 = (state_21803[(2)]);
var inst_21727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21726,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21726,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21726,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21730 = inst_21705;
var state_21803__$1 = (function (){var statearr_21854 = state_21803;
(statearr_21854[(7)] = inst_21730);

(statearr_21854[(16)] = inst_21729);

(statearr_21854[(17)] = inst_21728);

(statearr_21854[(18)] = inst_21727);

return statearr_21854;
})();
var statearr_21855_21906 = state_21803__$1;
(statearr_21855_21906[(2)] = null);

(statearr_21855_21906[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (18))){
var inst_21745 = (state_21803[(2)]);
var state_21803__$1 = state_21803;
var statearr_21856_21907 = state_21803__$1;
(statearr_21856_21907[(2)] = inst_21745);

(statearr_21856_21907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (37))){
var state_21803__$1 = state_21803;
var statearr_21857_21908 = state_21803__$1;
(statearr_21857_21908[(2)] = null);

(statearr_21857_21908[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21804 === (8))){
var inst_21705 = (state_21803[(8)]);
var inst_21723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21705);
var state_21803__$1 = state_21803;
var statearr_21858_21909 = state_21803__$1;
(statearr_21858_21909[(2)] = inst_21723);

(statearr_21858_21909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___21863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19885__auto__,c__20345__auto___21863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19886__auto__ = null;
var cljs$core$async$mix_$_state_machine__19886__auto____0 = (function (){
var statearr_21859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21859[(0)] = cljs$core$async$mix_$_state_machine__19886__auto__);

(statearr_21859[(1)] = (1));

return statearr_21859;
});
var cljs$core$async$mix_$_state_machine__19886__auto____1 = (function (state_21803){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_21803);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e21860){if((e21860 instanceof Object)){
var ex__19889__auto__ = e21860;
var statearr_21861_21910 = state_21803;
(statearr_21861_21910[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21911 = state_21803;
state_21803 = G__21911;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19886__auto__ = function(state_21803){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19886__auto____1.call(this,state_21803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19886__auto____0;
cljs$core$async$mix_$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19886__auto____1;
return cljs$core$async$mix_$_state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___21863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20347__auto__ = (function (){var statearr_21862 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_21862[(6)] = c__20345__auto___21863);

return statearr_21862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___21863,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__21913 = arguments.length;
switch (G__21913) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__21917 = arguments.length;
switch (G__21917) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__21915_SHARP_){
if(cljs.core.truth_((p1__21915_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21915_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21915_SHARP_.call(null,topic)))){
return p1__21915_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21915_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21918 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21919){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21919 = meta21919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21920,meta21919__$1){
var self__ = this;
var _21920__$1 = this;
return (new cljs.core.async.t_cljs$core$async21918(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21919__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21920){
var self__ = this;
var _21920__$1 = this;
return self__.meta21919;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21918.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21918.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21918.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21918.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21918.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21918.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21918.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21918.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21919","meta21919",-2048534791,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21918";

cljs.core.async.t_cljs$core$async21918.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async21918");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21918.
 */
cljs.core.async.__GT_t_cljs$core$async21918 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21918(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21919){
return (new cljs.core.async.t_cljs$core$async21918(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21919));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21918(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20345__auto___22038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___22038,mults,ensure_mult,p){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___22038,mults,ensure_mult,p){
return (function (state_21992){
var state_val_21993 = (state_21992[(1)]);
if((state_val_21993 === (7))){
var inst_21988 = (state_21992[(2)]);
var state_21992__$1 = state_21992;
var statearr_21994_22039 = state_21992__$1;
(statearr_21994_22039[(2)] = inst_21988);

(statearr_21994_22039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (20))){
var state_21992__$1 = state_21992;
var statearr_21995_22040 = state_21992__$1;
(statearr_21995_22040[(2)] = null);

(statearr_21995_22040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (1))){
var state_21992__$1 = state_21992;
var statearr_21996_22041 = state_21992__$1;
(statearr_21996_22041[(2)] = null);

(statearr_21996_22041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (24))){
var inst_21971 = (state_21992[(7)]);
var inst_21980 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_21971);
var state_21992__$1 = state_21992;
var statearr_21997_22042 = state_21992__$1;
(statearr_21997_22042[(2)] = inst_21980);

(statearr_21997_22042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (4))){
var inst_21923 = (state_21992[(8)]);
var inst_21923__$1 = (state_21992[(2)]);
var inst_21924 = (inst_21923__$1 == null);
var state_21992__$1 = (function (){var statearr_21998 = state_21992;
(statearr_21998[(8)] = inst_21923__$1);

return statearr_21998;
})();
if(cljs.core.truth_(inst_21924)){
var statearr_21999_22043 = state_21992__$1;
(statearr_21999_22043[(1)] = (5));

} else {
var statearr_22000_22044 = state_21992__$1;
(statearr_22000_22044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (15))){
var inst_21965 = (state_21992[(2)]);
var state_21992__$1 = state_21992;
var statearr_22001_22045 = state_21992__$1;
(statearr_22001_22045[(2)] = inst_21965);

(statearr_22001_22045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (21))){
var inst_21985 = (state_21992[(2)]);
var state_21992__$1 = (function (){var statearr_22002 = state_21992;
(statearr_22002[(9)] = inst_21985);

return statearr_22002;
})();
var statearr_22003_22046 = state_21992__$1;
(statearr_22003_22046[(2)] = null);

(statearr_22003_22046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (13))){
var inst_21947 = (state_21992[(10)]);
var inst_21949 = cljs.core.chunked_seq_QMARK_(inst_21947);
var state_21992__$1 = state_21992;
if(inst_21949){
var statearr_22004_22047 = state_21992__$1;
(statearr_22004_22047[(1)] = (16));

} else {
var statearr_22005_22048 = state_21992__$1;
(statearr_22005_22048[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (22))){
var inst_21977 = (state_21992[(2)]);
var state_21992__$1 = state_21992;
if(cljs.core.truth_(inst_21977)){
var statearr_22006_22049 = state_21992__$1;
(statearr_22006_22049[(1)] = (23));

} else {
var statearr_22007_22050 = state_21992__$1;
(statearr_22007_22050[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (6))){
var inst_21923 = (state_21992[(8)]);
var inst_21973 = (state_21992[(11)]);
var inst_21971 = (state_21992[(7)]);
var inst_21971__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_21923) : topic_fn.call(null,inst_21923));
var inst_21972 = cljs.core.deref(mults);
var inst_21973__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21972,inst_21971__$1);
var state_21992__$1 = (function (){var statearr_22008 = state_21992;
(statearr_22008[(11)] = inst_21973__$1);

(statearr_22008[(7)] = inst_21971__$1);

return statearr_22008;
})();
if(cljs.core.truth_(inst_21973__$1)){
var statearr_22009_22051 = state_21992__$1;
(statearr_22009_22051[(1)] = (19));

} else {
var statearr_22010_22052 = state_21992__$1;
(statearr_22010_22052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (25))){
var inst_21982 = (state_21992[(2)]);
var state_21992__$1 = state_21992;
var statearr_22011_22053 = state_21992__$1;
(statearr_22011_22053[(2)] = inst_21982);

(statearr_22011_22053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (17))){
var inst_21947 = (state_21992[(10)]);
var inst_21956 = cljs.core.first(inst_21947);
var inst_21957 = cljs.core.async.muxch_STAR_(inst_21956);
var inst_21958 = cljs.core.async.close_BANG_(inst_21957);
var inst_21959 = cljs.core.next(inst_21947);
var inst_21933 = inst_21959;
var inst_21934 = null;
var inst_21935 = (0);
var inst_21936 = (0);
var state_21992__$1 = (function (){var statearr_22012 = state_21992;
(statearr_22012[(12)] = inst_21934);

(statearr_22012[(13)] = inst_21958);

(statearr_22012[(14)] = inst_21936);

(statearr_22012[(15)] = inst_21933);

(statearr_22012[(16)] = inst_21935);

return statearr_22012;
})();
var statearr_22013_22054 = state_21992__$1;
(statearr_22013_22054[(2)] = null);

(statearr_22013_22054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (3))){
var inst_21990 = (state_21992[(2)]);
var state_21992__$1 = state_21992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21992__$1,inst_21990);
} else {
if((state_val_21993 === (12))){
var inst_21967 = (state_21992[(2)]);
var state_21992__$1 = state_21992;
var statearr_22014_22055 = state_21992__$1;
(statearr_22014_22055[(2)] = inst_21967);

(statearr_22014_22055[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (2))){
var state_21992__$1 = state_21992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21992__$1,(4),ch);
} else {
if((state_val_21993 === (23))){
var state_21992__$1 = state_21992;
var statearr_22015_22056 = state_21992__$1;
(statearr_22015_22056[(2)] = null);

(statearr_22015_22056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (19))){
var inst_21923 = (state_21992[(8)]);
var inst_21973 = (state_21992[(11)]);
var inst_21975 = cljs.core.async.muxch_STAR_(inst_21973);
var state_21992__$1 = state_21992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21992__$1,(22),inst_21975,inst_21923);
} else {
if((state_val_21993 === (11))){
var inst_21933 = (state_21992[(15)]);
var inst_21947 = (state_21992[(10)]);
var inst_21947__$1 = cljs.core.seq(inst_21933);
var state_21992__$1 = (function (){var statearr_22016 = state_21992;
(statearr_22016[(10)] = inst_21947__$1);

return statearr_22016;
})();
if(inst_21947__$1){
var statearr_22017_22057 = state_21992__$1;
(statearr_22017_22057[(1)] = (13));

} else {
var statearr_22018_22058 = state_21992__$1;
(statearr_22018_22058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (9))){
var inst_21969 = (state_21992[(2)]);
var state_21992__$1 = state_21992;
var statearr_22019_22059 = state_21992__$1;
(statearr_22019_22059[(2)] = inst_21969);

(statearr_22019_22059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (5))){
var inst_21930 = cljs.core.deref(mults);
var inst_21931 = cljs.core.vals(inst_21930);
var inst_21932 = cljs.core.seq(inst_21931);
var inst_21933 = inst_21932;
var inst_21934 = null;
var inst_21935 = (0);
var inst_21936 = (0);
var state_21992__$1 = (function (){var statearr_22020 = state_21992;
(statearr_22020[(12)] = inst_21934);

(statearr_22020[(14)] = inst_21936);

(statearr_22020[(15)] = inst_21933);

(statearr_22020[(16)] = inst_21935);

return statearr_22020;
})();
var statearr_22021_22060 = state_21992__$1;
(statearr_22021_22060[(2)] = null);

(statearr_22021_22060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (14))){
var state_21992__$1 = state_21992;
var statearr_22025_22061 = state_21992__$1;
(statearr_22025_22061[(2)] = null);

(statearr_22025_22061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (16))){
var inst_21947 = (state_21992[(10)]);
var inst_21951 = cljs.core.chunk_first(inst_21947);
var inst_21952 = cljs.core.chunk_rest(inst_21947);
var inst_21953 = cljs.core.count(inst_21951);
var inst_21933 = inst_21952;
var inst_21934 = inst_21951;
var inst_21935 = inst_21953;
var inst_21936 = (0);
var state_21992__$1 = (function (){var statearr_22026 = state_21992;
(statearr_22026[(12)] = inst_21934);

(statearr_22026[(14)] = inst_21936);

(statearr_22026[(15)] = inst_21933);

(statearr_22026[(16)] = inst_21935);

return statearr_22026;
})();
var statearr_22027_22062 = state_21992__$1;
(statearr_22027_22062[(2)] = null);

(statearr_22027_22062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (10))){
var inst_21934 = (state_21992[(12)]);
var inst_21936 = (state_21992[(14)]);
var inst_21933 = (state_21992[(15)]);
var inst_21935 = (state_21992[(16)]);
var inst_21941 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21934,inst_21936);
var inst_21942 = cljs.core.async.muxch_STAR_(inst_21941);
var inst_21943 = cljs.core.async.close_BANG_(inst_21942);
var inst_21944 = (inst_21936 + (1));
var tmp22022 = inst_21934;
var tmp22023 = inst_21933;
var tmp22024 = inst_21935;
var inst_21933__$1 = tmp22023;
var inst_21934__$1 = tmp22022;
var inst_21935__$1 = tmp22024;
var inst_21936__$1 = inst_21944;
var state_21992__$1 = (function (){var statearr_22028 = state_21992;
(statearr_22028[(12)] = inst_21934__$1);

(statearr_22028[(14)] = inst_21936__$1);

(statearr_22028[(17)] = inst_21943);

(statearr_22028[(15)] = inst_21933__$1);

(statearr_22028[(16)] = inst_21935__$1);

return statearr_22028;
})();
var statearr_22029_22063 = state_21992__$1;
(statearr_22029_22063[(2)] = null);

(statearr_22029_22063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (18))){
var inst_21962 = (state_21992[(2)]);
var state_21992__$1 = state_21992;
var statearr_22030_22064 = state_21992__$1;
(statearr_22030_22064[(2)] = inst_21962);

(statearr_22030_22064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21993 === (8))){
var inst_21936 = (state_21992[(14)]);
var inst_21935 = (state_21992[(16)]);
var inst_21938 = (inst_21936 < inst_21935);
var inst_21939 = inst_21938;
var state_21992__$1 = state_21992;
if(cljs.core.truth_(inst_21939)){
var statearr_22031_22065 = state_21992__$1;
(statearr_22031_22065[(1)] = (10));

} else {
var statearr_22032_22066 = state_21992__$1;
(statearr_22032_22066[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___22038,mults,ensure_mult,p))
;
return ((function (switch__19885__auto__,c__20345__auto___22038,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_22033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22033[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_22033[(1)] = (1));

return statearr_22033;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_21992){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_21992);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e22034){if((e22034 instanceof Object)){
var ex__19889__auto__ = e22034;
var statearr_22035_22067 = state_21992;
(statearr_22035_22067[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22068 = state_21992;
state_21992 = G__22068;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_21992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_21992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___22038,mults,ensure_mult,p))
})();
var state__20347__auto__ = (function (){var statearr_22036 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_22036[(6)] = c__20345__auto___22038);

return statearr_22036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___22038,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22070 = arguments.length;
switch (G__22070) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22073 = arguments.length;
switch (G__22073) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22076 = arguments.length;
switch (G__22076) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__20345__auto___22143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___22143,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___22143,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22115){
var state_val_22116 = (state_22115[(1)]);
if((state_val_22116 === (7))){
var state_22115__$1 = state_22115;
var statearr_22117_22144 = state_22115__$1;
(statearr_22117_22144[(2)] = null);

(statearr_22117_22144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (1))){
var state_22115__$1 = state_22115;
var statearr_22118_22145 = state_22115__$1;
(statearr_22118_22145[(2)] = null);

(statearr_22118_22145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (4))){
var inst_22079 = (state_22115[(7)]);
var inst_22081 = (inst_22079 < cnt);
var state_22115__$1 = state_22115;
if(cljs.core.truth_(inst_22081)){
var statearr_22119_22146 = state_22115__$1;
(statearr_22119_22146[(1)] = (6));

} else {
var statearr_22120_22147 = state_22115__$1;
(statearr_22120_22147[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (15))){
var inst_22111 = (state_22115[(2)]);
var state_22115__$1 = state_22115;
var statearr_22121_22148 = state_22115__$1;
(statearr_22121_22148[(2)] = inst_22111);

(statearr_22121_22148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (13))){
var inst_22104 = cljs.core.async.close_BANG_(out);
var state_22115__$1 = state_22115;
var statearr_22122_22149 = state_22115__$1;
(statearr_22122_22149[(2)] = inst_22104);

(statearr_22122_22149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (6))){
var state_22115__$1 = state_22115;
var statearr_22123_22150 = state_22115__$1;
(statearr_22123_22150[(2)] = null);

(statearr_22123_22150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (3))){
var inst_22113 = (state_22115[(2)]);
var state_22115__$1 = state_22115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22115__$1,inst_22113);
} else {
if((state_val_22116 === (12))){
var inst_22101 = (state_22115[(8)]);
var inst_22101__$1 = (state_22115[(2)]);
var inst_22102 = cljs.core.some(cljs.core.nil_QMARK_,inst_22101__$1);
var state_22115__$1 = (function (){var statearr_22124 = state_22115;
(statearr_22124[(8)] = inst_22101__$1);

return statearr_22124;
})();
if(cljs.core.truth_(inst_22102)){
var statearr_22125_22151 = state_22115__$1;
(statearr_22125_22151[(1)] = (13));

} else {
var statearr_22126_22152 = state_22115__$1;
(statearr_22126_22152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (2))){
var inst_22078 = cljs.core.reset_BANG_(dctr,cnt);
var inst_22079 = (0);
var state_22115__$1 = (function (){var statearr_22127 = state_22115;
(statearr_22127[(9)] = inst_22078);

(statearr_22127[(7)] = inst_22079);

return statearr_22127;
})();
var statearr_22128_22153 = state_22115__$1;
(statearr_22128_22153[(2)] = null);

(statearr_22128_22153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (11))){
var inst_22079 = (state_22115[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22115,(10),Object,null,(9));
var inst_22088 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22079) : chs__$1.call(null,inst_22079));
var inst_22089 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22079) : done.call(null,inst_22079));
var inst_22090 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22088,inst_22089);
var state_22115__$1 = state_22115;
var statearr_22129_22154 = state_22115__$1;
(statearr_22129_22154[(2)] = inst_22090);


cljs.core.async.impl.ioc_helpers.process_exception(state_22115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (9))){
var inst_22079 = (state_22115[(7)]);
var inst_22092 = (state_22115[(2)]);
var inst_22093 = (inst_22079 + (1));
var inst_22079__$1 = inst_22093;
var state_22115__$1 = (function (){var statearr_22130 = state_22115;
(statearr_22130[(10)] = inst_22092);

(statearr_22130[(7)] = inst_22079__$1);

return statearr_22130;
})();
var statearr_22131_22155 = state_22115__$1;
(statearr_22131_22155[(2)] = null);

(statearr_22131_22155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (5))){
var inst_22099 = (state_22115[(2)]);
var state_22115__$1 = (function (){var statearr_22132 = state_22115;
(statearr_22132[(11)] = inst_22099);

return statearr_22132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22115__$1,(12),dchan);
} else {
if((state_val_22116 === (14))){
var inst_22101 = (state_22115[(8)]);
var inst_22106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22101);
var state_22115__$1 = state_22115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22115__$1,(16),out,inst_22106);
} else {
if((state_val_22116 === (16))){
var inst_22108 = (state_22115[(2)]);
var state_22115__$1 = (function (){var statearr_22133 = state_22115;
(statearr_22133[(12)] = inst_22108);

return statearr_22133;
})();
var statearr_22134_22156 = state_22115__$1;
(statearr_22134_22156[(2)] = null);

(statearr_22134_22156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (10))){
var inst_22083 = (state_22115[(2)]);
var inst_22084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22115__$1 = (function (){var statearr_22135 = state_22115;
(statearr_22135[(13)] = inst_22083);

return statearr_22135;
})();
var statearr_22136_22157 = state_22115__$1;
(statearr_22136_22157[(2)] = inst_22084);


cljs.core.async.impl.ioc_helpers.process_exception(state_22115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22116 === (8))){
var inst_22097 = (state_22115[(2)]);
var state_22115__$1 = state_22115;
var statearr_22137_22158 = state_22115__$1;
(statearr_22137_22158[(2)] = inst_22097);

(statearr_22137_22158[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___22143,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19885__auto__,c__20345__auto___22143,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_22138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22138[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_22138[(1)] = (1));

return statearr_22138;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_22115){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_22115);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e22139){if((e22139 instanceof Object)){
var ex__19889__auto__ = e22139;
var statearr_22140_22159 = state_22115;
(statearr_22140_22159[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22160 = state_22115;
state_22115 = G__22160;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_22115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_22115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___22143,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20347__auto__ = (function (){var statearr_22141 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_22141[(6)] = c__20345__auto___22143);

return statearr_22141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___22143,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22163 = arguments.length;
switch (G__22163) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20345__auto___22217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___22217,out){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___22217,out){
return (function (state_22195){
var state_val_22196 = (state_22195[(1)]);
if((state_val_22196 === (7))){
var inst_22175 = (state_22195[(7)]);
var inst_22174 = (state_22195[(8)]);
var inst_22174__$1 = (state_22195[(2)]);
var inst_22175__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22174__$1,(0),null);
var inst_22176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22174__$1,(1),null);
var inst_22177 = (inst_22175__$1 == null);
var state_22195__$1 = (function (){var statearr_22197 = state_22195;
(statearr_22197[(7)] = inst_22175__$1);

(statearr_22197[(9)] = inst_22176);

(statearr_22197[(8)] = inst_22174__$1);

return statearr_22197;
})();
if(cljs.core.truth_(inst_22177)){
var statearr_22198_22218 = state_22195__$1;
(statearr_22198_22218[(1)] = (8));

} else {
var statearr_22199_22219 = state_22195__$1;
(statearr_22199_22219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (1))){
var inst_22164 = cljs.core.vec(chs);
var inst_22165 = inst_22164;
var state_22195__$1 = (function (){var statearr_22200 = state_22195;
(statearr_22200[(10)] = inst_22165);

return statearr_22200;
})();
var statearr_22201_22220 = state_22195__$1;
(statearr_22201_22220[(2)] = null);

(statearr_22201_22220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (4))){
var inst_22165 = (state_22195[(10)]);
var state_22195__$1 = state_22195;
return cljs.core.async.ioc_alts_BANG_(state_22195__$1,(7),inst_22165);
} else {
if((state_val_22196 === (6))){
var inst_22191 = (state_22195[(2)]);
var state_22195__$1 = state_22195;
var statearr_22202_22221 = state_22195__$1;
(statearr_22202_22221[(2)] = inst_22191);

(statearr_22202_22221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (3))){
var inst_22193 = (state_22195[(2)]);
var state_22195__$1 = state_22195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22195__$1,inst_22193);
} else {
if((state_val_22196 === (2))){
var inst_22165 = (state_22195[(10)]);
var inst_22167 = cljs.core.count(inst_22165);
var inst_22168 = (inst_22167 > (0));
var state_22195__$1 = state_22195;
if(cljs.core.truth_(inst_22168)){
var statearr_22204_22222 = state_22195__$1;
(statearr_22204_22222[(1)] = (4));

} else {
var statearr_22205_22223 = state_22195__$1;
(statearr_22205_22223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (11))){
var inst_22165 = (state_22195[(10)]);
var inst_22184 = (state_22195[(2)]);
var tmp22203 = inst_22165;
var inst_22165__$1 = tmp22203;
var state_22195__$1 = (function (){var statearr_22206 = state_22195;
(statearr_22206[(11)] = inst_22184);

(statearr_22206[(10)] = inst_22165__$1);

return statearr_22206;
})();
var statearr_22207_22224 = state_22195__$1;
(statearr_22207_22224[(2)] = null);

(statearr_22207_22224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (9))){
var inst_22175 = (state_22195[(7)]);
var state_22195__$1 = state_22195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22195__$1,(11),out,inst_22175);
} else {
if((state_val_22196 === (5))){
var inst_22189 = cljs.core.async.close_BANG_(out);
var state_22195__$1 = state_22195;
var statearr_22208_22225 = state_22195__$1;
(statearr_22208_22225[(2)] = inst_22189);

(statearr_22208_22225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (10))){
var inst_22187 = (state_22195[(2)]);
var state_22195__$1 = state_22195;
var statearr_22209_22226 = state_22195__$1;
(statearr_22209_22226[(2)] = inst_22187);

(statearr_22209_22226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22196 === (8))){
var inst_22175 = (state_22195[(7)]);
var inst_22176 = (state_22195[(9)]);
var inst_22174 = (state_22195[(8)]);
var inst_22165 = (state_22195[(10)]);
var inst_22179 = (function (){var cs = inst_22165;
var vec__22170 = inst_22174;
var v = inst_22175;
var c = inst_22176;
return ((function (cs,vec__22170,v,c,inst_22175,inst_22176,inst_22174,inst_22165,state_val_22196,c__20345__auto___22217,out){
return (function (p1__22161_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22161_SHARP_);
});
;})(cs,vec__22170,v,c,inst_22175,inst_22176,inst_22174,inst_22165,state_val_22196,c__20345__auto___22217,out))
})();
var inst_22180 = cljs.core.filterv(inst_22179,inst_22165);
var inst_22165__$1 = inst_22180;
var state_22195__$1 = (function (){var statearr_22210 = state_22195;
(statearr_22210[(10)] = inst_22165__$1);

return statearr_22210;
})();
var statearr_22211_22227 = state_22195__$1;
(statearr_22211_22227[(2)] = null);

(statearr_22211_22227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___22217,out))
;
return ((function (switch__19885__auto__,c__20345__auto___22217,out){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_22212 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22212[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_22212[(1)] = (1));

return statearr_22212;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_22195){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_22195);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e22213){if((e22213 instanceof Object)){
var ex__19889__auto__ = e22213;
var statearr_22214_22228 = state_22195;
(statearr_22214_22228[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22229 = state_22195;
state_22195 = G__22229;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_22195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_22195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___22217,out))
})();
var state__20347__auto__ = (function (){var statearr_22215 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_22215[(6)] = c__20345__auto___22217);

return statearr_22215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___22217,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22231 = arguments.length;
switch (G__22231) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20345__auto___22276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___22276,out){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___22276,out){
return (function (state_22255){
var state_val_22256 = (state_22255[(1)]);
if((state_val_22256 === (7))){
var inst_22237 = (state_22255[(7)]);
var inst_22237__$1 = (state_22255[(2)]);
var inst_22238 = (inst_22237__$1 == null);
var inst_22239 = cljs.core.not(inst_22238);
var state_22255__$1 = (function (){var statearr_22257 = state_22255;
(statearr_22257[(7)] = inst_22237__$1);

return statearr_22257;
})();
if(inst_22239){
var statearr_22258_22277 = state_22255__$1;
(statearr_22258_22277[(1)] = (8));

} else {
var statearr_22259_22278 = state_22255__$1;
(statearr_22259_22278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22256 === (1))){
var inst_22232 = (0);
var state_22255__$1 = (function (){var statearr_22260 = state_22255;
(statearr_22260[(8)] = inst_22232);

return statearr_22260;
})();
var statearr_22261_22279 = state_22255__$1;
(statearr_22261_22279[(2)] = null);

(statearr_22261_22279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22256 === (4))){
var state_22255__$1 = state_22255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22255__$1,(7),ch);
} else {
if((state_val_22256 === (6))){
var inst_22250 = (state_22255[(2)]);
var state_22255__$1 = state_22255;
var statearr_22262_22280 = state_22255__$1;
(statearr_22262_22280[(2)] = inst_22250);

(statearr_22262_22280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22256 === (3))){
var inst_22252 = (state_22255[(2)]);
var inst_22253 = cljs.core.async.close_BANG_(out);
var state_22255__$1 = (function (){var statearr_22263 = state_22255;
(statearr_22263[(9)] = inst_22252);

return statearr_22263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22255__$1,inst_22253);
} else {
if((state_val_22256 === (2))){
var inst_22232 = (state_22255[(8)]);
var inst_22234 = (inst_22232 < n);
var state_22255__$1 = state_22255;
if(cljs.core.truth_(inst_22234)){
var statearr_22264_22281 = state_22255__$1;
(statearr_22264_22281[(1)] = (4));

} else {
var statearr_22265_22282 = state_22255__$1;
(statearr_22265_22282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22256 === (11))){
var inst_22232 = (state_22255[(8)]);
var inst_22242 = (state_22255[(2)]);
var inst_22243 = (inst_22232 + (1));
var inst_22232__$1 = inst_22243;
var state_22255__$1 = (function (){var statearr_22266 = state_22255;
(statearr_22266[(8)] = inst_22232__$1);

(statearr_22266[(10)] = inst_22242);

return statearr_22266;
})();
var statearr_22267_22283 = state_22255__$1;
(statearr_22267_22283[(2)] = null);

(statearr_22267_22283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22256 === (9))){
var state_22255__$1 = state_22255;
var statearr_22268_22284 = state_22255__$1;
(statearr_22268_22284[(2)] = null);

(statearr_22268_22284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22256 === (5))){
var state_22255__$1 = state_22255;
var statearr_22269_22285 = state_22255__$1;
(statearr_22269_22285[(2)] = null);

(statearr_22269_22285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22256 === (10))){
var inst_22247 = (state_22255[(2)]);
var state_22255__$1 = state_22255;
var statearr_22270_22286 = state_22255__$1;
(statearr_22270_22286[(2)] = inst_22247);

(statearr_22270_22286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22256 === (8))){
var inst_22237 = (state_22255[(7)]);
var state_22255__$1 = state_22255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22255__$1,(11),out,inst_22237);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___22276,out))
;
return ((function (switch__19885__auto__,c__20345__auto___22276,out){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_22271 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22271[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_22271[(1)] = (1));

return statearr_22271;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_22255){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_22255);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e22272){if((e22272 instanceof Object)){
var ex__19889__auto__ = e22272;
var statearr_22273_22287 = state_22255;
(statearr_22273_22287[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22288 = state_22255;
state_22255 = G__22288;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_22255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_22255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___22276,out))
})();
var state__20347__auto__ = (function (){var statearr_22274 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_22274[(6)] = c__20345__auto___22276);

return statearr_22274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___22276,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22290 = (function (f,ch,meta22291){
this.f = f;
this.ch = ch;
this.meta22291 = meta22291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22292,meta22291__$1){
var self__ = this;
var _22292__$1 = this;
return (new cljs.core.async.t_cljs$core$async22290(self__.f,self__.ch,meta22291__$1));
});

cljs.core.async.t_cljs$core$async22290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22292){
var self__ = this;
var _22292__$1 = this;
return self__.meta22291;
});

cljs.core.async.t_cljs$core$async22290.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22290.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async22290.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22293 = (function (f,ch,meta22291,_,fn1,meta22294){
this.f = f;
this.ch = ch;
this.meta22291 = meta22291;
this._ = _;
this.fn1 = fn1;
this.meta22294 = meta22294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22295,meta22294__$1){
var self__ = this;
var _22295__$1 = this;
return (new cljs.core.async.t_cljs$core$async22293(self__.f,self__.ch,self__.meta22291,self__._,self__.fn1,meta22294__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22295){
var self__ = this;
var _22295__$1 = this;
return self__.meta22294;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22293.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22293.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22289_SHARP_){
var G__22296 = (((p1__22289_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22289_SHARP_) : self__.f.call(null,p1__22289_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22296) : f1.call(null,G__22296));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22293.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22291","meta22291",-946050346,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22290","cljs.core.async/t_cljs$core$async22290",-1712076412,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22294","meta22294",-46420347,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22293";

cljs.core.async.t_cljs$core$async22293.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async22293");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22293.
 */
cljs.core.async.__GT_t_cljs$core$async22293 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22293(f__$1,ch__$1,meta22291__$1,___$2,fn1__$1,meta22294){
return (new cljs.core.async.t_cljs$core$async22293(f__$1,ch__$1,meta22291__$1,___$2,fn1__$1,meta22294));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22293(self__.f,self__.ch,self__.meta22291,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22297 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22297) : self__.f.call(null,G__22297));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22290.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22291","meta22291",-946050346,null)], null);
});

cljs.core.async.t_cljs$core$async22290.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22290";

cljs.core.async.t_cljs$core$async22290.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async22290");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22290.
 */
cljs.core.async.__GT_t_cljs$core$async22290 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22290(f__$1,ch__$1,meta22291){
return (new cljs.core.async.t_cljs$core$async22290(f__$1,ch__$1,meta22291));
});

}

return (new cljs.core.async.t_cljs$core$async22290(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22298 = (function (f,ch,meta22299){
this.f = f;
this.ch = ch;
this.meta22299 = meta22299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22300,meta22299__$1){
var self__ = this;
var _22300__$1 = this;
return (new cljs.core.async.t_cljs$core$async22298(self__.f,self__.ch,meta22299__$1));
});

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22300){
var self__ = this;
var _22300__$1 = this;
return self__.meta22299;
});

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async22298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22299","meta22299",1283863201,null)], null);
});

cljs.core.async.t_cljs$core$async22298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22298";

cljs.core.async.t_cljs$core$async22298.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async22298");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22298.
 */
cljs.core.async.__GT_t_cljs$core$async22298 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22298(f__$1,ch__$1,meta22299){
return (new cljs.core.async.t_cljs$core$async22298(f__$1,ch__$1,meta22299));
});

}

return (new cljs.core.async.t_cljs$core$async22298(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22301 = (function (p,ch,meta22302){
this.p = p;
this.ch = ch;
this.meta22302 = meta22302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22303,meta22302__$1){
var self__ = this;
var _22303__$1 = this;
return (new cljs.core.async.t_cljs$core$async22301(self__.p,self__.ch,meta22302__$1));
});

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22303){
var self__ = this;
var _22303__$1 = this;
return self__.meta22302;
});

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22302","meta22302",-1720204903,null)], null);
});

cljs.core.async.t_cljs$core$async22301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22301";

cljs.core.async.t_cljs$core$async22301.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async22301");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22301.
 */
cljs.core.async.__GT_t_cljs$core$async22301 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22301(p__$1,ch__$1,meta22302){
return (new cljs.core.async.t_cljs$core$async22301(p__$1,ch__$1,meta22302));
});

}

return (new cljs.core.async.t_cljs$core$async22301(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__22305 = arguments.length;
switch (G__22305) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20345__auto___22345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___22345,out){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___22345,out){
return (function (state_22326){
var state_val_22327 = (state_22326[(1)]);
if((state_val_22327 === (7))){
var inst_22322 = (state_22326[(2)]);
var state_22326__$1 = state_22326;
var statearr_22328_22346 = state_22326__$1;
(statearr_22328_22346[(2)] = inst_22322);

(statearr_22328_22346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (1))){
var state_22326__$1 = state_22326;
var statearr_22329_22347 = state_22326__$1;
(statearr_22329_22347[(2)] = null);

(statearr_22329_22347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (4))){
var inst_22308 = (state_22326[(7)]);
var inst_22308__$1 = (state_22326[(2)]);
var inst_22309 = (inst_22308__$1 == null);
var state_22326__$1 = (function (){var statearr_22330 = state_22326;
(statearr_22330[(7)] = inst_22308__$1);

return statearr_22330;
})();
if(cljs.core.truth_(inst_22309)){
var statearr_22331_22348 = state_22326__$1;
(statearr_22331_22348[(1)] = (5));

} else {
var statearr_22332_22349 = state_22326__$1;
(statearr_22332_22349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (6))){
var inst_22308 = (state_22326[(7)]);
var inst_22313 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22308) : p.call(null,inst_22308));
var state_22326__$1 = state_22326;
if(cljs.core.truth_(inst_22313)){
var statearr_22333_22350 = state_22326__$1;
(statearr_22333_22350[(1)] = (8));

} else {
var statearr_22334_22351 = state_22326__$1;
(statearr_22334_22351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (3))){
var inst_22324 = (state_22326[(2)]);
var state_22326__$1 = state_22326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22326__$1,inst_22324);
} else {
if((state_val_22327 === (2))){
var state_22326__$1 = state_22326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22326__$1,(4),ch);
} else {
if((state_val_22327 === (11))){
var inst_22316 = (state_22326[(2)]);
var state_22326__$1 = state_22326;
var statearr_22335_22352 = state_22326__$1;
(statearr_22335_22352[(2)] = inst_22316);

(statearr_22335_22352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (9))){
var state_22326__$1 = state_22326;
var statearr_22336_22353 = state_22326__$1;
(statearr_22336_22353[(2)] = null);

(statearr_22336_22353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (5))){
var inst_22311 = cljs.core.async.close_BANG_(out);
var state_22326__$1 = state_22326;
var statearr_22337_22354 = state_22326__$1;
(statearr_22337_22354[(2)] = inst_22311);

(statearr_22337_22354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (10))){
var inst_22319 = (state_22326[(2)]);
var state_22326__$1 = (function (){var statearr_22338 = state_22326;
(statearr_22338[(8)] = inst_22319);

return statearr_22338;
})();
var statearr_22339_22355 = state_22326__$1;
(statearr_22339_22355[(2)] = null);

(statearr_22339_22355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22327 === (8))){
var inst_22308 = (state_22326[(7)]);
var state_22326__$1 = state_22326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22326__$1,(11),out,inst_22308);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___22345,out))
;
return ((function (switch__19885__auto__,c__20345__auto___22345,out){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_22340 = [null,null,null,null,null,null,null,null,null];
(statearr_22340[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_22340[(1)] = (1));

return statearr_22340;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_22326){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_22326);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e22341){if((e22341 instanceof Object)){
var ex__19889__auto__ = e22341;
var statearr_22342_22356 = state_22326;
(statearr_22342_22356[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22341;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22357 = state_22326;
state_22326 = G__22357;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_22326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_22326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___22345,out))
})();
var state__20347__auto__ = (function (){var statearr_22343 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_22343[(6)] = c__20345__auto___22345);

return statearr_22343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___22345,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22359 = arguments.length;
switch (G__22359) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20345__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto__){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto__){
return (function (state_22422){
var state_val_22423 = (state_22422[(1)]);
if((state_val_22423 === (7))){
var inst_22418 = (state_22422[(2)]);
var state_22422__$1 = state_22422;
var statearr_22424_22462 = state_22422__$1;
(statearr_22424_22462[(2)] = inst_22418);

(statearr_22424_22462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (20))){
var inst_22388 = (state_22422[(7)]);
var inst_22399 = (state_22422[(2)]);
var inst_22400 = cljs.core.next(inst_22388);
var inst_22374 = inst_22400;
var inst_22375 = null;
var inst_22376 = (0);
var inst_22377 = (0);
var state_22422__$1 = (function (){var statearr_22425 = state_22422;
(statearr_22425[(8)] = inst_22377);

(statearr_22425[(9)] = inst_22374);

(statearr_22425[(10)] = inst_22375);

(statearr_22425[(11)] = inst_22376);

(statearr_22425[(12)] = inst_22399);

return statearr_22425;
})();
var statearr_22426_22463 = state_22422__$1;
(statearr_22426_22463[(2)] = null);

(statearr_22426_22463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (1))){
var state_22422__$1 = state_22422;
var statearr_22427_22464 = state_22422__$1;
(statearr_22427_22464[(2)] = null);

(statearr_22427_22464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (4))){
var inst_22363 = (state_22422[(13)]);
var inst_22363__$1 = (state_22422[(2)]);
var inst_22364 = (inst_22363__$1 == null);
var state_22422__$1 = (function (){var statearr_22428 = state_22422;
(statearr_22428[(13)] = inst_22363__$1);

return statearr_22428;
})();
if(cljs.core.truth_(inst_22364)){
var statearr_22429_22465 = state_22422__$1;
(statearr_22429_22465[(1)] = (5));

} else {
var statearr_22430_22466 = state_22422__$1;
(statearr_22430_22466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (15))){
var state_22422__$1 = state_22422;
var statearr_22434_22467 = state_22422__$1;
(statearr_22434_22467[(2)] = null);

(statearr_22434_22467[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (21))){
var state_22422__$1 = state_22422;
var statearr_22435_22468 = state_22422__$1;
(statearr_22435_22468[(2)] = null);

(statearr_22435_22468[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (13))){
var inst_22377 = (state_22422[(8)]);
var inst_22374 = (state_22422[(9)]);
var inst_22375 = (state_22422[(10)]);
var inst_22376 = (state_22422[(11)]);
var inst_22384 = (state_22422[(2)]);
var inst_22385 = (inst_22377 + (1));
var tmp22431 = inst_22374;
var tmp22432 = inst_22375;
var tmp22433 = inst_22376;
var inst_22374__$1 = tmp22431;
var inst_22375__$1 = tmp22432;
var inst_22376__$1 = tmp22433;
var inst_22377__$1 = inst_22385;
var state_22422__$1 = (function (){var statearr_22436 = state_22422;
(statearr_22436[(8)] = inst_22377__$1);

(statearr_22436[(14)] = inst_22384);

(statearr_22436[(9)] = inst_22374__$1);

(statearr_22436[(10)] = inst_22375__$1);

(statearr_22436[(11)] = inst_22376__$1);

return statearr_22436;
})();
var statearr_22437_22469 = state_22422__$1;
(statearr_22437_22469[(2)] = null);

(statearr_22437_22469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (22))){
var state_22422__$1 = state_22422;
var statearr_22438_22470 = state_22422__$1;
(statearr_22438_22470[(2)] = null);

(statearr_22438_22470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (6))){
var inst_22363 = (state_22422[(13)]);
var inst_22372 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22363) : f.call(null,inst_22363));
var inst_22373 = cljs.core.seq(inst_22372);
var inst_22374 = inst_22373;
var inst_22375 = null;
var inst_22376 = (0);
var inst_22377 = (0);
var state_22422__$1 = (function (){var statearr_22439 = state_22422;
(statearr_22439[(8)] = inst_22377);

(statearr_22439[(9)] = inst_22374);

(statearr_22439[(10)] = inst_22375);

(statearr_22439[(11)] = inst_22376);

return statearr_22439;
})();
var statearr_22440_22471 = state_22422__$1;
(statearr_22440_22471[(2)] = null);

(statearr_22440_22471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (17))){
var inst_22388 = (state_22422[(7)]);
var inst_22392 = cljs.core.chunk_first(inst_22388);
var inst_22393 = cljs.core.chunk_rest(inst_22388);
var inst_22394 = cljs.core.count(inst_22392);
var inst_22374 = inst_22393;
var inst_22375 = inst_22392;
var inst_22376 = inst_22394;
var inst_22377 = (0);
var state_22422__$1 = (function (){var statearr_22441 = state_22422;
(statearr_22441[(8)] = inst_22377);

(statearr_22441[(9)] = inst_22374);

(statearr_22441[(10)] = inst_22375);

(statearr_22441[(11)] = inst_22376);

return statearr_22441;
})();
var statearr_22442_22472 = state_22422__$1;
(statearr_22442_22472[(2)] = null);

(statearr_22442_22472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (3))){
var inst_22420 = (state_22422[(2)]);
var state_22422__$1 = state_22422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22422__$1,inst_22420);
} else {
if((state_val_22423 === (12))){
var inst_22408 = (state_22422[(2)]);
var state_22422__$1 = state_22422;
var statearr_22443_22473 = state_22422__$1;
(statearr_22443_22473[(2)] = inst_22408);

(statearr_22443_22473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (2))){
var state_22422__$1 = state_22422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22422__$1,(4),in$);
} else {
if((state_val_22423 === (23))){
var inst_22416 = (state_22422[(2)]);
var state_22422__$1 = state_22422;
var statearr_22444_22474 = state_22422__$1;
(statearr_22444_22474[(2)] = inst_22416);

(statearr_22444_22474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (19))){
var inst_22403 = (state_22422[(2)]);
var state_22422__$1 = state_22422;
var statearr_22445_22475 = state_22422__$1;
(statearr_22445_22475[(2)] = inst_22403);

(statearr_22445_22475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (11))){
var inst_22388 = (state_22422[(7)]);
var inst_22374 = (state_22422[(9)]);
var inst_22388__$1 = cljs.core.seq(inst_22374);
var state_22422__$1 = (function (){var statearr_22446 = state_22422;
(statearr_22446[(7)] = inst_22388__$1);

return statearr_22446;
})();
if(inst_22388__$1){
var statearr_22447_22476 = state_22422__$1;
(statearr_22447_22476[(1)] = (14));

} else {
var statearr_22448_22477 = state_22422__$1;
(statearr_22448_22477[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (9))){
var inst_22410 = (state_22422[(2)]);
var inst_22411 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22422__$1 = (function (){var statearr_22449 = state_22422;
(statearr_22449[(15)] = inst_22410);

return statearr_22449;
})();
if(cljs.core.truth_(inst_22411)){
var statearr_22450_22478 = state_22422__$1;
(statearr_22450_22478[(1)] = (21));

} else {
var statearr_22451_22479 = state_22422__$1;
(statearr_22451_22479[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (5))){
var inst_22366 = cljs.core.async.close_BANG_(out);
var state_22422__$1 = state_22422;
var statearr_22452_22480 = state_22422__$1;
(statearr_22452_22480[(2)] = inst_22366);

(statearr_22452_22480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (14))){
var inst_22388 = (state_22422[(7)]);
var inst_22390 = cljs.core.chunked_seq_QMARK_(inst_22388);
var state_22422__$1 = state_22422;
if(inst_22390){
var statearr_22453_22481 = state_22422__$1;
(statearr_22453_22481[(1)] = (17));

} else {
var statearr_22454_22482 = state_22422__$1;
(statearr_22454_22482[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (16))){
var inst_22406 = (state_22422[(2)]);
var state_22422__$1 = state_22422;
var statearr_22455_22483 = state_22422__$1;
(statearr_22455_22483[(2)] = inst_22406);

(statearr_22455_22483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22423 === (10))){
var inst_22377 = (state_22422[(8)]);
var inst_22375 = (state_22422[(10)]);
var inst_22382 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22375,inst_22377);
var state_22422__$1 = state_22422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22422__$1,(13),out,inst_22382);
} else {
if((state_val_22423 === (18))){
var inst_22388 = (state_22422[(7)]);
var inst_22397 = cljs.core.first(inst_22388);
var state_22422__$1 = state_22422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22422__$1,(20),out,inst_22397);
} else {
if((state_val_22423 === (8))){
var inst_22377 = (state_22422[(8)]);
var inst_22376 = (state_22422[(11)]);
var inst_22379 = (inst_22377 < inst_22376);
var inst_22380 = inst_22379;
var state_22422__$1 = state_22422;
if(cljs.core.truth_(inst_22380)){
var statearr_22456_22484 = state_22422__$1;
(statearr_22456_22484[(1)] = (10));

} else {
var statearr_22457_22485 = state_22422__$1;
(statearr_22457_22485[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto__))
;
return ((function (switch__19885__auto__,c__20345__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19886__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19886__auto____0 = (function (){
var statearr_22458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22458[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19886__auto__);

(statearr_22458[(1)] = (1));

return statearr_22458;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19886__auto____1 = (function (state_22422){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_22422);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e22459){if((e22459 instanceof Object)){
var ex__19889__auto__ = e22459;
var statearr_22460_22486 = state_22422;
(statearr_22460_22486[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22487 = state_22422;
state_22422 = G__22487;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19886__auto__ = function(state_22422){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19886__auto____1.call(this,state_22422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19886__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19886__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto__))
})();
var state__20347__auto__ = (function (){var statearr_22461 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_22461[(6)] = c__20345__auto__);

return statearr_22461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto__))
);

return c__20345__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22489 = arguments.length;
switch (G__22489) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__22492 = arguments.length;
switch (G__22492) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__22495 = arguments.length;
switch (G__22495) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20345__auto___22542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___22542,out){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___22542,out){
return (function (state_22519){
var state_val_22520 = (state_22519[(1)]);
if((state_val_22520 === (7))){
var inst_22514 = (state_22519[(2)]);
var state_22519__$1 = state_22519;
var statearr_22521_22543 = state_22519__$1;
(statearr_22521_22543[(2)] = inst_22514);

(statearr_22521_22543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (1))){
var inst_22496 = null;
var state_22519__$1 = (function (){var statearr_22522 = state_22519;
(statearr_22522[(7)] = inst_22496);

return statearr_22522;
})();
var statearr_22523_22544 = state_22519__$1;
(statearr_22523_22544[(2)] = null);

(statearr_22523_22544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (4))){
var inst_22499 = (state_22519[(8)]);
var inst_22499__$1 = (state_22519[(2)]);
var inst_22500 = (inst_22499__$1 == null);
var inst_22501 = cljs.core.not(inst_22500);
var state_22519__$1 = (function (){var statearr_22524 = state_22519;
(statearr_22524[(8)] = inst_22499__$1);

return statearr_22524;
})();
if(inst_22501){
var statearr_22525_22545 = state_22519__$1;
(statearr_22525_22545[(1)] = (5));

} else {
var statearr_22526_22546 = state_22519__$1;
(statearr_22526_22546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (6))){
var state_22519__$1 = state_22519;
var statearr_22527_22547 = state_22519__$1;
(statearr_22527_22547[(2)] = null);

(statearr_22527_22547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (3))){
var inst_22516 = (state_22519[(2)]);
var inst_22517 = cljs.core.async.close_BANG_(out);
var state_22519__$1 = (function (){var statearr_22528 = state_22519;
(statearr_22528[(9)] = inst_22516);

return statearr_22528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22519__$1,inst_22517);
} else {
if((state_val_22520 === (2))){
var state_22519__$1 = state_22519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22519__$1,(4),ch);
} else {
if((state_val_22520 === (11))){
var inst_22499 = (state_22519[(8)]);
var inst_22508 = (state_22519[(2)]);
var inst_22496 = inst_22499;
var state_22519__$1 = (function (){var statearr_22529 = state_22519;
(statearr_22529[(7)] = inst_22496);

(statearr_22529[(10)] = inst_22508);

return statearr_22529;
})();
var statearr_22530_22548 = state_22519__$1;
(statearr_22530_22548[(2)] = null);

(statearr_22530_22548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (9))){
var inst_22499 = (state_22519[(8)]);
var state_22519__$1 = state_22519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22519__$1,(11),out,inst_22499);
} else {
if((state_val_22520 === (5))){
var inst_22499 = (state_22519[(8)]);
var inst_22496 = (state_22519[(7)]);
var inst_22503 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22499,inst_22496);
var state_22519__$1 = state_22519;
if(inst_22503){
var statearr_22532_22549 = state_22519__$1;
(statearr_22532_22549[(1)] = (8));

} else {
var statearr_22533_22550 = state_22519__$1;
(statearr_22533_22550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (10))){
var inst_22511 = (state_22519[(2)]);
var state_22519__$1 = state_22519;
var statearr_22534_22551 = state_22519__$1;
(statearr_22534_22551[(2)] = inst_22511);

(statearr_22534_22551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22520 === (8))){
var inst_22496 = (state_22519[(7)]);
var tmp22531 = inst_22496;
var inst_22496__$1 = tmp22531;
var state_22519__$1 = (function (){var statearr_22535 = state_22519;
(statearr_22535[(7)] = inst_22496__$1);

return statearr_22535;
})();
var statearr_22536_22552 = state_22519__$1;
(statearr_22536_22552[(2)] = null);

(statearr_22536_22552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___22542,out))
;
return ((function (switch__19885__auto__,c__20345__auto___22542,out){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_22537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22537[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_22537[(1)] = (1));

return statearr_22537;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_22519){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_22519);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e22538){if((e22538 instanceof Object)){
var ex__19889__auto__ = e22538;
var statearr_22539_22553 = state_22519;
(statearr_22539_22553[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22554 = state_22519;
state_22519 = G__22554;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_22519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_22519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___22542,out))
})();
var state__20347__auto__ = (function (){var statearr_22540 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_22540[(6)] = c__20345__auto___22542);

return statearr_22540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___22542,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22556 = arguments.length;
switch (G__22556) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20345__auto___22622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___22622,out){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___22622,out){
return (function (state_22594){
var state_val_22595 = (state_22594[(1)]);
if((state_val_22595 === (7))){
var inst_22590 = (state_22594[(2)]);
var state_22594__$1 = state_22594;
var statearr_22596_22623 = state_22594__$1;
(statearr_22596_22623[(2)] = inst_22590);

(statearr_22596_22623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22595 === (1))){
var inst_22557 = (new Array(n));
var inst_22558 = inst_22557;
var inst_22559 = (0);
var state_22594__$1 = (function (){var statearr_22597 = state_22594;
(statearr_22597[(7)] = inst_22559);

(statearr_22597[(8)] = inst_22558);

return statearr_22597;
})();
var statearr_22598_22624 = state_22594__$1;
(statearr_22598_22624[(2)] = null);

(statearr_22598_22624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22595 === (4))){
var inst_22562 = (state_22594[(9)]);
var inst_22562__$1 = (state_22594[(2)]);
var inst_22563 = (inst_22562__$1 == null);
var inst_22564 = cljs.core.not(inst_22563);
var state_22594__$1 = (function (){var statearr_22599 = state_22594;
(statearr_22599[(9)] = inst_22562__$1);

return statearr_22599;
})();
if(inst_22564){
var statearr_22600_22625 = state_22594__$1;
(statearr_22600_22625[(1)] = (5));

} else {
var statearr_22601_22626 = state_22594__$1;
(statearr_22601_22626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22595 === (15))){
var inst_22584 = (state_22594[(2)]);
var state_22594__$1 = state_22594;
var statearr_22602_22627 = state_22594__$1;
(statearr_22602_22627[(2)] = inst_22584);

(statearr_22602_22627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22595 === (13))){
var state_22594__$1 = state_22594;
var statearr_22603_22628 = state_22594__$1;
(statearr_22603_22628[(2)] = null);

(statearr_22603_22628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22595 === (6))){
var inst_22559 = (state_22594[(7)]);
var inst_22580 = (inst_22559 > (0));
var state_22594__$1 = state_22594;
if(cljs.core.truth_(inst_22580)){
var statearr_22604_22629 = state_22594__$1;
(statearr_22604_22629[(1)] = (12));

} else {
var statearr_22605_22630 = state_22594__$1;
(statearr_22605_22630[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22595 === (3))){
var inst_22592 = (state_22594[(2)]);
var state_22594__$1 = state_22594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22594__$1,inst_22592);
} else {
if((state_val_22595 === (12))){
var inst_22558 = (state_22594[(8)]);
var inst_22582 = cljs.core.vec(inst_22558);
var state_22594__$1 = state_22594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22594__$1,(15),out,inst_22582);
} else {
if((state_val_22595 === (2))){
var state_22594__$1 = state_22594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22594__$1,(4),ch);
} else {
if((state_val_22595 === (11))){
var inst_22574 = (state_22594[(2)]);
var inst_22575 = (new Array(n));
var inst_22558 = inst_22575;
var inst_22559 = (0);
var state_22594__$1 = (function (){var statearr_22606 = state_22594;
(statearr_22606[(7)] = inst_22559);

(statearr_22606[(10)] = inst_22574);

(statearr_22606[(8)] = inst_22558);

return statearr_22606;
})();
var statearr_22607_22631 = state_22594__$1;
(statearr_22607_22631[(2)] = null);

(statearr_22607_22631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22595 === (9))){
var inst_22558 = (state_22594[(8)]);
var inst_22572 = cljs.core.vec(inst_22558);
var state_22594__$1 = state_22594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22594__$1,(11),out,inst_22572);
} else {
if((state_val_22595 === (5))){
var inst_22559 = (state_22594[(7)]);
var inst_22567 = (state_22594[(11)]);
var inst_22558 = (state_22594[(8)]);
var inst_22562 = (state_22594[(9)]);
var inst_22566 = (inst_22558[inst_22559] = inst_22562);
var inst_22567__$1 = (inst_22559 + (1));
var inst_22568 = (inst_22567__$1 < n);
var state_22594__$1 = (function (){var statearr_22608 = state_22594;
(statearr_22608[(11)] = inst_22567__$1);

(statearr_22608[(12)] = inst_22566);

return statearr_22608;
})();
if(cljs.core.truth_(inst_22568)){
var statearr_22609_22632 = state_22594__$1;
(statearr_22609_22632[(1)] = (8));

} else {
var statearr_22610_22633 = state_22594__$1;
(statearr_22610_22633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22595 === (14))){
var inst_22587 = (state_22594[(2)]);
var inst_22588 = cljs.core.async.close_BANG_(out);
var state_22594__$1 = (function (){var statearr_22612 = state_22594;
(statearr_22612[(13)] = inst_22587);

return statearr_22612;
})();
var statearr_22613_22634 = state_22594__$1;
(statearr_22613_22634[(2)] = inst_22588);

(statearr_22613_22634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22595 === (10))){
var inst_22578 = (state_22594[(2)]);
var state_22594__$1 = state_22594;
var statearr_22614_22635 = state_22594__$1;
(statearr_22614_22635[(2)] = inst_22578);

(statearr_22614_22635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22595 === (8))){
var inst_22567 = (state_22594[(11)]);
var inst_22558 = (state_22594[(8)]);
var tmp22611 = inst_22558;
var inst_22558__$1 = tmp22611;
var inst_22559 = inst_22567;
var state_22594__$1 = (function (){var statearr_22615 = state_22594;
(statearr_22615[(7)] = inst_22559);

(statearr_22615[(8)] = inst_22558__$1);

return statearr_22615;
})();
var statearr_22616_22636 = state_22594__$1;
(statearr_22616_22636[(2)] = null);

(statearr_22616_22636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___22622,out))
;
return ((function (switch__19885__auto__,c__20345__auto___22622,out){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_22617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22617[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_22617[(1)] = (1));

return statearr_22617;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_22594){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_22594);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e22618){if((e22618 instanceof Object)){
var ex__19889__auto__ = e22618;
var statearr_22619_22637 = state_22594;
(statearr_22619_22637[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22618;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22638 = state_22594;
state_22594 = G__22638;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_22594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_22594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___22622,out))
})();
var state__20347__auto__ = (function (){var statearr_22620 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_22620[(6)] = c__20345__auto___22622);

return statearr_22620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___22622,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22640 = arguments.length;
switch (G__22640) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20345__auto___22710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20345__auto___22710,out){
return (function (){
var f__20346__auto__ = (function (){var switch__19885__auto__ = ((function (c__20345__auto___22710,out){
return (function (state_22682){
var state_val_22683 = (state_22682[(1)]);
if((state_val_22683 === (7))){
var inst_22678 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
var statearr_22684_22711 = state_22682__$1;
(statearr_22684_22711[(2)] = inst_22678);

(statearr_22684_22711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (1))){
var inst_22641 = [];
var inst_22642 = inst_22641;
var inst_22643 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22682__$1 = (function (){var statearr_22685 = state_22682;
(statearr_22685[(7)] = inst_22643);

(statearr_22685[(8)] = inst_22642);

return statearr_22685;
})();
var statearr_22686_22712 = state_22682__$1;
(statearr_22686_22712[(2)] = null);

(statearr_22686_22712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (4))){
var inst_22646 = (state_22682[(9)]);
var inst_22646__$1 = (state_22682[(2)]);
var inst_22647 = (inst_22646__$1 == null);
var inst_22648 = cljs.core.not(inst_22647);
var state_22682__$1 = (function (){var statearr_22687 = state_22682;
(statearr_22687[(9)] = inst_22646__$1);

return statearr_22687;
})();
if(inst_22648){
var statearr_22688_22713 = state_22682__$1;
(statearr_22688_22713[(1)] = (5));

} else {
var statearr_22689_22714 = state_22682__$1;
(statearr_22689_22714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (15))){
var inst_22672 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
var statearr_22690_22715 = state_22682__$1;
(statearr_22690_22715[(2)] = inst_22672);

(statearr_22690_22715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (13))){
var state_22682__$1 = state_22682;
var statearr_22691_22716 = state_22682__$1;
(statearr_22691_22716[(2)] = null);

(statearr_22691_22716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (6))){
var inst_22642 = (state_22682[(8)]);
var inst_22667 = inst_22642.length;
var inst_22668 = (inst_22667 > (0));
var state_22682__$1 = state_22682;
if(cljs.core.truth_(inst_22668)){
var statearr_22692_22717 = state_22682__$1;
(statearr_22692_22717[(1)] = (12));

} else {
var statearr_22693_22718 = state_22682__$1;
(statearr_22693_22718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (3))){
var inst_22680 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22682__$1,inst_22680);
} else {
if((state_val_22683 === (12))){
var inst_22642 = (state_22682[(8)]);
var inst_22670 = cljs.core.vec(inst_22642);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22682__$1,(15),out,inst_22670);
} else {
if((state_val_22683 === (2))){
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22682__$1,(4),ch);
} else {
if((state_val_22683 === (11))){
var inst_22646 = (state_22682[(9)]);
var inst_22650 = (state_22682[(10)]);
var inst_22660 = (state_22682[(2)]);
var inst_22661 = [];
var inst_22662 = inst_22661.push(inst_22646);
var inst_22642 = inst_22661;
var inst_22643 = inst_22650;
var state_22682__$1 = (function (){var statearr_22694 = state_22682;
(statearr_22694[(7)] = inst_22643);

(statearr_22694[(8)] = inst_22642);

(statearr_22694[(11)] = inst_22660);

(statearr_22694[(12)] = inst_22662);

return statearr_22694;
})();
var statearr_22695_22719 = state_22682__$1;
(statearr_22695_22719[(2)] = null);

(statearr_22695_22719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (9))){
var inst_22642 = (state_22682[(8)]);
var inst_22658 = cljs.core.vec(inst_22642);
var state_22682__$1 = state_22682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22682__$1,(11),out,inst_22658);
} else {
if((state_val_22683 === (5))){
var inst_22643 = (state_22682[(7)]);
var inst_22646 = (state_22682[(9)]);
var inst_22650 = (state_22682[(10)]);
var inst_22650__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22646) : f.call(null,inst_22646));
var inst_22651 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22650__$1,inst_22643);
var inst_22652 = cljs.core.keyword_identical_QMARK_(inst_22643,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22653 = ((inst_22651) || (inst_22652));
var state_22682__$1 = (function (){var statearr_22696 = state_22682;
(statearr_22696[(10)] = inst_22650__$1);

return statearr_22696;
})();
if(cljs.core.truth_(inst_22653)){
var statearr_22697_22720 = state_22682__$1;
(statearr_22697_22720[(1)] = (8));

} else {
var statearr_22698_22721 = state_22682__$1;
(statearr_22698_22721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (14))){
var inst_22675 = (state_22682[(2)]);
var inst_22676 = cljs.core.async.close_BANG_(out);
var state_22682__$1 = (function (){var statearr_22700 = state_22682;
(statearr_22700[(13)] = inst_22675);

return statearr_22700;
})();
var statearr_22701_22722 = state_22682__$1;
(statearr_22701_22722[(2)] = inst_22676);

(statearr_22701_22722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (10))){
var inst_22665 = (state_22682[(2)]);
var state_22682__$1 = state_22682;
var statearr_22702_22723 = state_22682__$1;
(statearr_22702_22723[(2)] = inst_22665);

(statearr_22702_22723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22683 === (8))){
var inst_22646 = (state_22682[(9)]);
var inst_22642 = (state_22682[(8)]);
var inst_22650 = (state_22682[(10)]);
var inst_22655 = inst_22642.push(inst_22646);
var tmp22699 = inst_22642;
var inst_22642__$1 = tmp22699;
var inst_22643 = inst_22650;
var state_22682__$1 = (function (){var statearr_22703 = state_22682;
(statearr_22703[(14)] = inst_22655);

(statearr_22703[(7)] = inst_22643);

(statearr_22703[(8)] = inst_22642__$1);

return statearr_22703;
})();
var statearr_22704_22724 = state_22682__$1;
(statearr_22704_22724[(2)] = null);

(statearr_22704_22724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20345__auto___22710,out))
;
return ((function (switch__19885__auto__,c__20345__auto___22710,out){
return (function() {
var cljs$core$async$state_machine__19886__auto__ = null;
var cljs$core$async$state_machine__19886__auto____0 = (function (){
var statearr_22705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22705[(0)] = cljs$core$async$state_machine__19886__auto__);

(statearr_22705[(1)] = (1));

return statearr_22705;
});
var cljs$core$async$state_machine__19886__auto____1 = (function (state_22682){
while(true){
var ret_value__19887__auto__ = (function (){try{while(true){
var result__19888__auto__ = switch__19885__auto__(state_22682);
if(cljs.core.keyword_identical_QMARK_(result__19888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19888__auto__;
}
break;
}
}catch (e22706){if((e22706 instanceof Object)){
var ex__19889__auto__ = e22706;
var statearr_22707_22725 = state_22682;
(statearr_22707_22725[(5)] = ex__19889__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22726 = state_22682;
state_22682 = G__22726;
continue;
} else {
return ret_value__19887__auto__;
}
break;
}
});
cljs$core$async$state_machine__19886__auto__ = function(state_22682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19886__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19886__auto____1.call(this,state_22682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19886__auto____0;
cljs$core$async$state_machine__19886__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19886__auto____1;
return cljs$core$async$state_machine__19886__auto__;
})()
;})(switch__19885__auto__,c__20345__auto___22710,out))
})();
var state__20347__auto__ = (function (){var statearr_22708 = (f__20346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20346__auto__.cljs$core$IFn$_invoke$arity$0() : f__20346__auto__.call(null));
(statearr_22708[(6)] = c__20345__auto___22710);

return statearr_22708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20347__auto__);
});})(c__20345__auto___22710,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
