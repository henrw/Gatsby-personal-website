(self.webpackChunkexample=self.webpackChunkexample||[]).push([[177],{30177:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return wt}});var r=e(41536),o=e.n(r),i=e(90382),u=e.n(i),c=e(27378),s=function(t,n){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},s(t,n)};function a(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}s(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function l(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(n){i(n)}}function c(t){try{s(r.throw(t))}catch(n){i(n)}}function s(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}s((r=r.apply(t,n||[])).next())}))}function f(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(e=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=n.call(t,u)}catch(s){c=[6,s],r=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}Object.create;function h(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function d(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function y(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=e.apply(t,n||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(t){o[t]&&(r[t]=function(n){return new Promise((function(e,r){i.push([t,n,e,r])>1||c(t,n)}))})}function c(t,n){try{(e=o[t](n)).value instanceof v?Promise.resolve(e.value.v).then(s,a):l(i[0][2],e)}catch(r){l(i[0][3],r)}var e}function s(t){c("next",t)}function a(t){c("throw",t)}function l(t,n){t(n),i.shift(),i.length&&c(i[0][0],i[0][1])}}function b(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,e=t[Symbol.asyncIterator];return e?e.call(t):(t=h(t),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(e){n[e]=t[e]&&function(n){return new Promise((function(r,o){(function(t,n,e,r){Promise.resolve(r).then((function(n){t({value:n,done:e})}),n)})(r,o,(n=t[e](n)).done,n.value)}))}}}Object.create;var m=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function w(t){return"function"==typeof t}var g,x=((g=function(t){return function(n){t(this),this.message=n?n.length+" errors occurred during unsubscription:\n"+n.map((function(t,n){return n+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=n}}((function(t){Error.call(t),t.stack=(new Error).stack}))).prototype=Object.create(Error.prototype),g.prototype.constructor=g,g);function S(t,n){if(t){var e=t.indexOf(n);0<=e&&t.splice(e,1)}}var _=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var n;return t.prototype.unsubscribe=function(){var t,n,e,r,o;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var u=h(i),c=u.next();!c.done;c=u.next()){c.value.remove(this)}}catch(y){t={error:y}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}else i.remove(this);var s=this.initialTeardown;if(w(s))try{s()}catch(b){o=b instanceof x?b.errors:[b]}var a=this._finalizers;if(a){this._finalizers=null;try{for(var l=h(a),f=l.next();!f.done;f=l.next()){var v=f.value;try{T(v)}catch(m){o=null!=o?o:[],m instanceof x?o=d(d([],p(o)),p(m.errors)):o.push(m)}}}catch(g){e={error:g}}finally{try{f&&!f.done&&(r=l.return)&&r.call(l)}finally{if(e)throw e.error}}}if(o)throw new x(o)}},t.prototype.add=function(n){var e;if(n&&n!==this)if(this.closed)T(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(n)}},t.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},t.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},t.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&S(n,t)},t.prototype.remove=function(n){var e=this._finalizers;e&&S(e,n),n instanceof t&&n._removeParent(this)},t.EMPTY=((n=new t).closed=!0,n),t}();_.EMPTY;function E(t){return t instanceof _||t&&"closed"in t&&w(t.remove)&&w(t.add)&&w(t.unsubscribe)}function T(t){w(t)?t():t.unsubscribe()}var I={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},k={setTimeout:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var o=k.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,d([t,n],p(e))):setTimeout.apply(void 0,d([t,n],p(e)))})),clearTimeout:function(t){function n(n){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t){var n=k.delegate;return((null==n?void 0:n.clearTimeout)||clearTimeout)(t)})),delegate:void 0};function A(t){k.setTimeout((function(){var n=I.onUnhandledError;if(!n)throw t;n(t)}))}function O(){}var P=C("C",void 0,void 0);function C(t,n,e){return{kind:t,value:n,error:e}}var j=null;var D=function(t){function n(n){var e=t.call(this)||this;return e.isStopped=!1,n?(e.destination=n,E(n)&&n.add(e)):e.destination=Y,e}return a(n,t),n.create=function(t,n,e){return new z(t,n,e)},n.prototype.next=function(t){this.isStopped?H(function(t){return C("N",t,void 0)}(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?H(C("E",void 0,t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?H(P,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(_),L=Function.prototype.bind;function N(t,n){return L.call(t,n)}var U=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(e){M(e)}},t.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(e){M(e)}else M(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){M(n)}},t}(),z=function(t){function n(n,e,r){var o,i,u=t.call(this)||this;w(n)||!n?o={next:null!=n?n:void 0,error:null!=e?e:void 0,complete:null!=r?r:void 0}:u&&I.useDeprecatedNextContext?((i=Object.create(n)).unsubscribe=function(){return u.unsubscribe()},o={next:n.next&&N(n.next,i),error:n.error&&N(n.error,i),complete:n.complete&&N(n.complete,i)}):o=n;return u.destination=new U(o),u}return a(n,t),n}(D);function M(t){var n;I.useDeprecatedSynchronousErrorHandling?(n=t,I.useDeprecatedSynchronousErrorHandling&&j&&(j.errorThrown=!0,j.error=n)):A(t)}function H(t,n){var e=I.onStoppedNotification;e&&k.setTimeout((function(){return e(t,n)}))}var Y={closed:!0,next:O,error:function(t){throw t},complete:O},F="function"==typeof Symbol&&Symbol.observable||"@@observable";function R(t){return t}function q(t){return 0===t.length?R:1===t.length?t[0]:function(n){return t.reduce((function(t,n){return n(t)}),n)}}var B=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(n){var e=new t;return e.source=this,e.operator=n,e},t.prototype.subscribe=function(t,n,e){var r,o=this,i=(r=t)&&r instanceof D||function(t){return t&&w(t.next)&&w(t.error)&&w(t.complete)}(r)&&E(r)?t:new z(t,n,e);return function(t){if(I.useDeprecatedSynchronousErrorHandling){var n=!j;if(n&&(j={errorThrown:!1,error:null}),t(),n){var e=j,r=e.errorThrown,o=e.error;if(j=null,r)throw o}}else t()}((function(){var t=o,n=t.operator,e=t.source;i.add(n?n.call(i,e):e?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},t.prototype.forEach=function(t,n){var e=this;return new(n=G(n))((function(n,r){var o=new z({next:function(n){try{t(n)}catch(e){r(e),o.unsubscribe()}},error:r,complete:n});e.subscribe(o)}))},t.prototype._subscribe=function(t){var n;return null===(n=this.source)||void 0===n?void 0:n.subscribe(t)},t.prototype[F]=function(){return this},t.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return q(t)(this)},t.prototype.toPromise=function(t){var n=this;return new(t=G(t))((function(t,e){var r;n.subscribe((function(t){return r=t}),(function(t){return e(t)}),(function(){return t(r)}))}))},t.create=function(n){return new t(n)},t}();function G(t){var n;return null!==(n=null!=t?t:I.Promise)&&void 0!==n?n:Promise}var Q="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function W(t){if(t instanceof B)return t;if(null!=t){if(function(t){return w(t[F])}(t))return i=t,new B((function(t){var n=i[F]();if(w(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(m(t))return o=t,new B((function(t){for(var n=0;n<o.length&&!t.closed;n++)t.next(o[n]);t.complete()}));if(w(null==(r=t)?void 0:r.then))return e=t,new B((function(t){e.then((function(n){t.closed||(t.next(n),t.complete())}),(function(n){return t.error(n)})).then(null,A)}));if(function(t){return Symbol.asyncIterator&&w(null==t?void 0:t[Symbol.asyncIterator])}(t))return $(t);if(function(t){return w(null==t?void 0:t[Q])}(t))return n=t,new B((function(t){var e,r;try{for(var o=h(n),i=o.next();!i.done;i=o.next()){var u=i.value;if(t.next(u),t.closed)return}}catch(c){e={error:c}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}t.complete()}));if(function(t){return w(null==t?void 0:t.getReader)}(t))return $(function(t){return y(this,arguments,(function(){var n,e,r;return f(this,(function(o){switch(o.label){case 0:n=t.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,v(n.read())];case 3:return e=o.sent(),r=e.value,e.done?[4,v(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,v(r)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}}))}))}(t))}var n,e,r,o,i;throw function(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(t)}function $(t){return new B((function(n){(function(t,n){var e,r,o,i;return l(this,void 0,void 0,(function(){var u,c;return f(this,(function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),e=b(t),s.label=1;case 1:return[4,e.next()];case 2:if((r=s.sent()).done)return[3,4];if(u=r.value,n.next(u),n.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=s.sent(),o={error:c},[3,11];case 6:return s.trys.push([6,,9,10]),r&&!r.done&&(i=e.return)?[4,i.call(e)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}}))}))})(t,n).catch((function(t){return n.error(t)}))}))}function J(t){return function(n){if(function(t){return w(null==t?void 0:t.lift)}(n))return n.lift((function(n){try{return t(n,this)}catch(e){this.error(e)}}));throw new TypeError("Unable to lift unknown Observable type")}}function K(t,n,e,r,o){return new V(t,n,e,r,o)}var V=function(t){function n(n,e,r,o,i,u){var c=t.call(this,n)||this;return c.onFinalize=i,c.shouldUnsubscribe=u,c._next=e?function(t){try{e(t)}catch(r){n.error(r)}}:t.prototype._next,c._error=o?function(t){try{o(t)}catch(t){n.error(t)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=r?function(){try{r()}catch(t){n.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,c}return a(n,t),n.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var e=this.closed;t.prototype.unsubscribe.call(this),!e&&(null===(n=this.onFinalize)||void 0===n||n.call(this))}},n}(D);function X(t,n){return J((function(e,r){var o=0;e.subscribe(K(r,(function(e){r.next(t.call(n,e,o++))})))}))}function Z(t,n,e){return void 0===e&&(e=1/0),w(n)?Z((function(e,r){return X((function(t,o){return n(e,t,r,o)}))(W(t(e,r)))}),e):("number"==typeof n&&(e=n),J((function(n,r){return function(t,n,e,r,o,i,u,c){var s=[],a=0,l=0,f=!1,h=function(){!f||s.length||a||n.complete()},p=function(t){return a<r?d(t):s.push(t)},d=function t(c){i&&n.next(c),a++;var f=!1;W(e(c,l++)).subscribe(K(n,(function(t){null==o||o(t),i?p(t):n.next(t)}),(function(){f=!0}),void 0,(function(){if(f)try{a--;for(var e=function(){var e=s.shift();u?function(t,n,e,r,o){void 0===r&&(r=0),void 0===o&&(o=!1);var i=n.schedule((function(){e(),o?t.add(this.schedule(null,r)):this.unsubscribe()}),r);t.add(i)}(n,u,(function(){return t(e)})):t(e)};s.length&&a<r;)e();h()}catch(o){n.error(o)}})))};return t.subscribe(K(n,p,(function(){f=!0,h()}))),function(){null==c||c()}}(n,r,t,e)})))}var tt=Array.isArray;function nt(t){return X((function(n){return function(t,n){return tt(n)?t.apply(void 0,d([],p(n))):t(n)}(t,n)}))}var et=["addListener","removeListener"],rt=["addEventListener","removeEventListener"],ot=["on","off"];function it(t,n,e,r){if(w(e)&&(r=e,e=void 0),r)return it(t,n,e).pipe(nt(r));var o=p(function(t){return w(t.addEventListener)&&w(t.removeEventListener)}(t)?rt.map((function(r){return function(o){return t[r](n,o,e)}})):function(t){return w(t.addListener)&&w(t.removeListener)}(t)?et.map(ut(t,n)):function(t){return w(t.on)&&w(t.off)}(t)?ot.map(ut(t,n)):[],2),i=o[0],u=o[1];if(!i&&m(t))return Z((function(t){return it(t,n,e)}))(W(t));if(!i)throw new TypeError("Invalid event target");return new B((function(t){var n=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.next(1<n.length?n:n[0])};return i(n),function(){return u(n)}}))}function ut(t,n){return function(e){return function(r){return t[e](n,r)}}}var ct=function(t){function n(n,e){return t.call(this)||this}return a(n,t),n.prototype.schedule=function(t,n){return void 0===n&&(n=0),this},n}(_),st={setInterval:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var o=st.delegate;return(null==o?void 0:o.setInterval)?o.setInterval.apply(o,d([t,n],p(e))):setInterval.apply(void 0,d([t,n],p(e)))})),clearInterval:function(t){function n(n){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t){var n=st.delegate;return((null==n?void 0:n.clearInterval)||clearInterval)(t)})),delegate:void 0},at=function(t){function n(n,e){var r=t.call(this,n,e)||this;return r.scheduler=n,r.work=e,r.pending=!1,r}return a(n,t),n.prototype.schedule=function(t,n){var e;if(void 0===n&&(n=0),this.closed)return this;this.state=t;var r=this.id,o=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(o,r,n)),this.pending=!0,this.delay=n,this.id=null!==(e=this.id)&&void 0!==e?e:this.requestAsyncId(o,this.id,n),this},n.prototype.requestAsyncId=function(t,n,e){return void 0===e&&(e=0),st.setInterval(t.flush.bind(t,this),e)},n.prototype.recycleAsyncId=function(t,n,e){if(void 0===e&&(e=0),null!=e&&this.delay===e&&!1===this.pending)return n;null!=n&&st.clearInterval(n)},n.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(t,n);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,n){var e,r=!1;try{this.work(t)}catch(o){r=!0,e=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),e},n.prototype.unsubscribe=function(){if(!this.closed){var n=this.id,e=this.scheduler,r=e.actions;this.work=this.state=this.scheduler=null,this.pending=!1,S(r,this),null!=n&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},n}(ct),lt={now:function(){return(lt.delegate||Date).now()},delegate:void 0},ft=function(){function t(n,e){void 0===e&&(e=t.now),this.schedulerActionCtor=n,this.now=e}return t.prototype.schedule=function(t,n,e){return void 0===n&&(n=0),new this.schedulerActionCtor(this,t).schedule(e,n)},t.now=lt.now,t}(),ht=new(function(t){function n(n,e){void 0===e&&(e=ft.now);var r=t.call(this,n,e)||this;return r.actions=[],r._active=!1,r}return a(n,t),n.prototype.flush=function(t){var n=this.actions;if(this._active)n.push(t);else{var e;this._active=!0;do{if(e=t.execute(t.state,t.delay))break}while(t=n.shift());if(this._active=!1,e){for(;t=n.shift();)t.unsubscribe();throw e}}},n}(ft))(at),pt=ht,dt={leading:!0,trailing:!1};function vt(t,n,e){void 0===t&&(t=0),void 0===e&&(e=pt);var r,o=-1;return null!=n&&((r=n)&&w(r.schedule)?e=n:o=n),new B((function(n){var r=function(t){return t instanceof Date&&!isNaN(t)}(t)?+t-e.now():t;r<0&&(r=0);var i=0;return e.schedule((function(){n.closed||(n.next(i++),0<=o?this.schedule(void 0,o):n.complete())}),r)}))}function yt(t,n,e){void 0===n&&(n=ht),void 0===e&&(e=dt);var r=vt(t,n);return function(t,n){return void 0===n&&(n=dt),J((function(e,r){var o=n.leading,i=n.trailing,u=!1,c=null,s=null,a=!1,l=function(){null==s||s.unsubscribe(),s=null,i&&(p(),a&&r.complete())},f=function(){s=null,a&&r.complete()},h=function(n){return s=W(t(n)).subscribe(K(r,l,f))},p=function(){if(u){u=!1;var t=c;c=null,r.next(t),!a&&h(t)}};e.subscribe(K(r,(function(t){u=!0,c=t,(!s||s.closed)&&(o?p():h(t))}),(function(){a=!0,(!(i&&u&&s)||s.closed)&&r.complete()})))}))}((function(){return r}),e)}var bt=e(68941),mt=function t(n){var e=n.data,r=e.items,o=e.title,i=e.url,s=n.activeUrls,a=n.setActiveTOC,l=n.depth,f=(0,bt.$W)().tocMaxDepth,h=[],p=[];s.length>0&&s[0]===i&&(h.push("toc-module--toc-active--i8PHG"),1===s.length?h.push("toc-module--toc-current--QChS7"):p=s.slice(1));return c.createElement(c.Fragment,null,c.createElement("li",{key:i,title:o},c.createElement("a",{style:{paddingLeft:l+1+"em"},href:i,className:u()(h),onClick:function(){a(i)}},o)),r&&l<f?r.map((function(n){return c.createElement(t,{key:n.url,data:n,activeUrls:p,setActiveTOC:a,depth:l+1})})):null)},wt=function(t){var n=t.tableOfContents,e=t.mainSidebar,r=n.items||[],i=e?e.current.clientHeight:0,u=function(){var t=[],n=function n(e,r){if(e.url){var o=window.document.getElementById(e.url.substring(1));if(o){var i=t.length;t.push({parent:r,offset:o.offsetTop,url:e.url}),e.items&&e.items.forEach((function(t){return n(t,i)}))}}};return r.forEach((function(t){return n(t,-1)})),t},s=(0,c.useState)(u),a=s[0],l=s[1],f=function(t){var n=o()(a,{offset:t},(function(t){return t.offset}));n>0&&--n;for(var e=[];n>=0&&n<a.length;)e.unshift(a[n].url),n=a[n].parent;return e},h=(0,c.useState)({urls:f(window.pageYOffset),clickTime:0}),p=h[0],d=h[1],v=function(t){var n=window.pageYOffset,e=window.document.getElementById(t.substring(1)).offsetTop,r=Math.abs(n-e)||0,o=Date.now()+500+r/5,i=f(e+1);d({urls:i,clickTime:o})},y=function(){return Math.max(200,window.innerHeight-i-175)},b=(0,c.useState)(y()),m=b[0],w=b[1];return(0,c.useEffect)((function(){var t=it(window.document,"scroll").pipe(yt(300)).subscribe((function(){if(Date.now()>p.clickTime){var t=f(window.pageYOffset);d({urls:t,clickTime:p.clickTime})}}));return function(){t.unsubscribe()}}),[p]),(0,c.useEffect)((function(){var t=it(window,"resize").pipe(yt(300)).subscribe((function(){w(y()),l(u())}));return function(){t.unsubscribe()}}),[a,m]),c.createElement("div",{className:"toc-module--toc-container--ixP4M",style:{height:m}},c.createElement("h3",null,"Table of Contents"),c.createElement("ul",{className:"toc-module--toc--f-F0M"},r.map((function(t){return c.createElement(mt,{key:t.url,data:t,activeUrls:p.urls,setActiveTOC:v,depth:0})}))))}},27389:function(t,n,e){var r=e(55193),o=Math.floor,i=Math.min;t.exports=function(t,n,e,u){var c=0,s=null==t?0:t.length;if(0===s)return 0;for(var a=(n=e(n))!=n,l=null===n,f=r(n),h=void 0===n;c<s;){var p=o((c+s)/2),d=e(t[p]),v=void 0!==d,y=null===d,b=d==d,m=r(d);if(a)var w=u||b;else w=h?b&&(u||v):l?b&&v&&(u||!y):f?b&&v&&!y&&(u||!m):!y&&!m&&(u?d<=n:d<n);w?c=p+1:s=p}return i(s,4294967294)}},41536:function(t,n,e){var r=e(89278),o=e(27389);t.exports=function(t,n,e){return o(t,n,r(e,2))}}}]);
//# sourceMappingURL=177-11dca08f757c1806811d.js.map