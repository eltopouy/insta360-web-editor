(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Rm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var au={exports:{}},Ro={},lu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function pv(){if(_p)return ht;_p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(U,K,Ce){this.props=U,this.context=K,this.refs=T,this.updater=Ce||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,K){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,K,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function D(U,K,Ce){this.props=U,this.context=K,this.refs=T,this.updater=Ce||S}var N=D.prototype=new v;N.constructor=D,E(N,y.prototype),N.isPureReactComponent=!0;var R=Array.isArray,q=Object.prototype.hasOwnProperty,k={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function H(U,K,Ce){var $,de={},ye=null,ge=null;if(K!=null)for($ in K.ref!==void 0&&(ge=K.ref),K.key!==void 0&&(ye=""+K.key),K)q.call(K,$)&&!O.hasOwnProperty($)&&(de[$]=K[$]);var Te=arguments.length-2;if(Te===1)de.children=Ce;else if(1<Te){for(var Re=Array(Te),qe=0;qe<Te;qe++)Re[qe]=arguments[qe+2];de.children=Re}if(U&&U.defaultProps)for($ in Te=U.defaultProps,Te)de[$]===void 0&&(de[$]=Te[$]);return{$$typeof:s,type:U,key:ye,ref:ge,props:de,_owner:k.current}}function b(U,K){return{$$typeof:s,type:U.type,key:K,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function B(U){var K={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ce){return K[Ce]})}var ce=/\/+/g;function Q(U,K){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):K.toString(36)}function fe(U,K,Ce,$,de){var ye=typeof U;(ye==="undefined"||ye==="boolean")&&(U=null);var ge=!1;if(U===null)ge=!0;else switch(ye){case"string":case"number":ge=!0;break;case"object":switch(U.$$typeof){case s:case e:ge=!0}}if(ge)return ge=U,de=de(ge),U=$===""?"."+Q(ge,0):$,R(de)?(Ce="",U!=null&&(Ce=U.replace(ce,"$&/")+"/"),fe(de,K,Ce,"",function(qe){return qe})):de!=null&&(C(de)&&(de=b(de,Ce+(!de.key||ge&&ge.key===de.key?"":(""+de.key).replace(ce,"$&/")+"/")+U)),K.push(de)),1;if(ge=0,$=$===""?".":$+":",R(U))for(var Te=0;Te<U.length;Te++){ye=U[Te];var Re=$+Q(ye,Te);ge+=fe(ye,K,Ce,Re,de)}else if(Re=x(U),typeof Re=="function")for(U=Re.call(U),Te=0;!(ye=U.next()).done;)ye=ye.value,Re=$+Q(ye,Te++),ge+=fe(ye,K,Ce,Re,de);else if(ye==="object")throw K=String(U),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ge}function le(U,K,Ce){if(U==null)return U;var $=[],de=0;return fe(U,$,"","",function(ye){return K.call(Ce,ye,de++)}),$}function se(U){if(U._status===-1){var K=U._result;K=K(),K.then(function(Ce){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ce)},function(Ce){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ce)}),U._status===-1&&(U._status=0,U._result=K)}if(U._status===1)return U._result.default;throw U._result}var oe={current:null},F={transition:null},te={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:F,ReactCurrentOwner:k};function ee(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:le,forEach:function(U,K,Ce){le(U,function(){K.apply(this,arguments)},Ce)},count:function(U){var K=0;return le(U,function(){K++}),K},toArray:function(U){return le(U,function(K){return K})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ht.Component=y,ht.Fragment=n,ht.Profiler=a,ht.PureComponent=D,ht.StrictMode=r,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ht.act=ee,ht.cloneElement=function(U,K,Ce){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var $=E({},U.props),de=U.key,ye=U.ref,ge=U._owner;if(K!=null){if(K.ref!==void 0&&(ye=K.ref,ge=k.current),K.key!==void 0&&(de=""+K.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Re in K)q.call(K,Re)&&!O.hasOwnProperty(Re)&&($[Re]=K[Re]===void 0&&Te!==void 0?Te[Re]:K[Re])}var Re=arguments.length-2;if(Re===1)$.children=Ce;else if(1<Re){Te=Array(Re);for(var qe=0;qe<Re;qe++)Te[qe]=arguments[qe+2];$.children=Te}return{$$typeof:s,type:U.type,key:de,ref:ye,props:$,_owner:ge}},ht.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},ht.createElement=H,ht.createFactory=function(U){var K=H.bind(null,U);return K.type=U,K},ht.createRef=function(){return{current:null}},ht.forwardRef=function(U){return{$$typeof:f,render:U}},ht.isValidElement=C,ht.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:se}},ht.memo=function(U,K){return{$$typeof:m,type:U,compare:K===void 0?null:K}},ht.startTransition=function(U){var K=F.transition;F.transition={};try{U()}finally{F.transition=K}},ht.unstable_act=ee,ht.useCallback=function(U,K){return oe.current.useCallback(U,K)},ht.useContext=function(U){return oe.current.useContext(U)},ht.useDebugValue=function(){},ht.useDeferredValue=function(U){return oe.current.useDeferredValue(U)},ht.useEffect=function(U,K){return oe.current.useEffect(U,K)},ht.useId=function(){return oe.current.useId()},ht.useImperativeHandle=function(U,K,Ce){return oe.current.useImperativeHandle(U,K,Ce)},ht.useInsertionEffect=function(U,K){return oe.current.useInsertionEffect(U,K)},ht.useLayoutEffect=function(U,K){return oe.current.useLayoutEffect(U,K)},ht.useMemo=function(U,K){return oe.current.useMemo(U,K)},ht.useReducer=function(U,K,Ce){return oe.current.useReducer(U,K,Ce)},ht.useRef=function(U){return oe.current.useRef(U)},ht.useState=function(U){return oe.current.useState(U)},ht.useSyncExternalStore=function(U,K,Ce){return oe.current.useSyncExternalStore(U,K,Ce)},ht.useTransition=function(){return oe.current.useTransition()},ht.version="18.3.1",ht}var xp;function Ld(){return xp||(xp=1,lu.exports=pv()),lu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function mv(){if(yp)return Ro;yp=1;var s=Ld(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var g,_={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!c.hasOwnProperty(g)&&(_[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:S,props:_,_owner:a.current}}return Ro.Fragment=n,Ro.jsx=u,Ro.jsxs=u,Ro}var Sp;function gv(){return Sp||(Sp=1,au.exports=mv()),au.exports}var P=gv(),Fe=Ld();const vv=Rm(Fe);var $a={},cu={exports:{}},Rn={},uu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function _v(){return Mp||(Mp=1,(function(s){function e(F,te){var ee=F.length;F.push(te);e:for(;0<ee;){var U=ee-1>>>1,K=F[U];if(0<a(K,te))F[U]=te,F[ee]=K,ee=U;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var te=F[0],ee=F.pop();if(ee!==te){F[0]=ee;e:for(var U=0,K=F.length,Ce=K>>>1;U<Ce;){var $=2*(U+1)-1,de=F[$],ye=$+1,ge=F[ye];if(0>a(de,ee))ye<K&&0>a(ge,de)?(F[U]=ge,F[ye]=ee,U=ye):(F[U]=de,F[$]=ee,U=$);else if(ye<K&&0>a(ge,ee))F[U]=ge,F[ye]=ee,U=ye;else break e}}return te}function a(F,te){var ee=F.sortIndex-te.sortIndex;return ee!==0?ee:F.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],g=1,_=null,x=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(F){for(var te=n(m);te!==null;){if(te.callback===null)r(m);else if(te.startTime<=F)r(m),te.sortIndex=te.expirationTime,e(h,te);else break;te=n(m)}}function R(F){if(T=!1,N(F),!E)if(n(h)!==null)E=!0,se(q);else{var te=n(m);te!==null&&oe(R,te.startTime-F)}}function q(F,te){E=!1,T&&(T=!1,v(H),H=-1),S=!0;var ee=x;try{for(N(te),_=n(h);_!==null&&(!(_.expirationTime>te)||F&&!B());){var U=_.callback;if(typeof U=="function"){_.callback=null,x=_.priorityLevel;var K=U(_.expirationTime<=te);te=s.unstable_now(),typeof K=="function"?_.callback=K:_===n(h)&&r(h),N(te)}else r(h);_=n(h)}if(_!==null)var Ce=!0;else{var $=n(m);$!==null&&oe(R,$.startTime-te),Ce=!1}return Ce}finally{_=null,x=ee,S=!1}}var k=!1,O=null,H=-1,b=5,C=-1;function B(){return!(s.unstable_now()-C<b)}function ce(){if(O!==null){var F=s.unstable_now();C=F;var te=!0;try{te=O(!0,F)}finally{te?Q():(k=!1,O=null)}}else k=!1}var Q;if(typeof D=="function")Q=function(){D(ce)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,le=fe.port2;fe.port1.onmessage=ce,Q=function(){le.postMessage(null)}}else Q=function(){y(ce,0)};function se(F){O=F,k||(k=!0,Q())}function oe(F,te){H=y(function(){F(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,se(q))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(F){switch(x){case 1:case 2:case 3:var te=3;break;default:te=x}var ee=x;x=te;try{return F()}finally{x=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,te){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ee=x;x=F;try{return te()}finally{x=ee}},s.unstable_scheduleCallback=function(F,te,ee){var U=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?U+ee:U):ee=U,F){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ee+K,F={id:g++,callback:te,priorityLevel:F,startTime:ee,expirationTime:K,sortIndex:-1},ee>U?(F.sortIndex=ee,e(m,F),n(h)===null&&F===n(m)&&(T?(v(H),H=-1):T=!0,oe(R,ee-U))):(F.sortIndex=K,e(h,F),E||S||(E=!0,se(q))),F},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(F){var te=x;return function(){var ee=x;x=te;try{return F.apply(this,arguments)}finally{x=ee}}}})(du)),du}var Ep;function xv(){return Ep||(Ep=1,uu.exports=_v()),uu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function yv(){if(wp)return Rn;wp=1;var s=Ld(),e=xv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(t){return h.call(_,t)?!0:h.call(g,t)?!1:m.test(t)?_[t]=!0:(g[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,D);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,o,l){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,l)&&(o=null),l||d===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,l=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),F=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,U;function K(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ce=!1;function $(t,i){if(!t||Ce)return"";Ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var l=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){l=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){l=ne}t()}}catch(ne){if(ne&&l&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),p=l.stack.split(`
`),M=d.length-1,I=p.length-1;1<=M&&0<=I&&d[M]!==p[I];)I--;for(;1<=M&&0<=I;M--,I--)if(d[M]!==p[I]){if(M!==1||I!==1)do if(M--,I--,0>I||d[M]!==p[I]){var z=`
`+d[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=I);break}}}finally{Ce=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?K(t):""}function de(t){switch(t.tag){case 5:return K(t.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return t=$(t.type,!1),t;case 11:return t=$(t.type.render,!1),t;case 1:return t=$(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case k:return"Portal";case b:return"Profiler";case H:return"StrictMode";case Q:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ce:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case le:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function ge(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function gt(t){t._valueTracker||(t._valueTracker=qe(t))}function ut(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Re(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Rt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X(t,i){var o=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function hn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function dt(t,i){pt(t,i);var o=Te(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?At(t,i.type,o):i.hasOwnProperty("defaultValue")&&At(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ke(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function At(t,i,o){(i!=="number"||Rt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var $e=Array.isArray;function L(t,i,o,l){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function J(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if($e(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Te(o)}}function me(t,i){var o=Te(i.value),l=Te(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var be,Ie=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ct(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){ke.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,d=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,d):t[o]=d}}var ze=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(t,i){if(i){if(ze[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,ue=null,pe=null;function De(t){if(t=ho(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ua(i),Pe(t.stateNode,t.type,i))}}function Le(t){ue?pe?pe.push(t):pe=[t]:ue=t}function st(){if(ue){var t=ue,i=pe;if(pe=ue=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function Dt(t,i){return t(i)}function Xt(){}var _t=!1;function Sn(t,i,o){if(_t)return t(i,o);_t=!0;try{return Dt(t,i,o)}finally{_t=!1,(ue!==null||pe!==null)&&(Xt(),st())}}function pn(t,i){var o=t.stateNode;if(o===null)return null;var l=ua(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qr=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Qr=!1}function Ei(t,i,o,l,d,p,M,I,z){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(xe){this.onError(xe)}}var wi=!1,wr=null,Tr=!1,Xi=null,Wo={onError:function(t){wi=!0,wr=t}};function Jr(t,i,o,l,d,p,M,I,z){wi=!1,wr=null,Ei.apply(Wo,arguments)}function jo(t,i,o,l,d,p,M,I,z){if(Jr.apply(this,arguments),wi){if(wi){var ne=wr;wi=!1,wr=null}else throw Error(n(198));Tr||(Tr=!0,Xi=ne)}}function fi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Xo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qo(t){if(fi(t)!==t)throw Error(n(188))}function bl(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return qo(d),t;if(p===l)return qo(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=d,l=p;else{for(var M=!1,I=d.child;I;){if(I===o){M=!0,o=d,l=p;break}if(I===l){M=!0,l=d,o=p;break}I=I.sibling}if(!M){for(I=p.child;I;){if(I===o){M=!0,o=p,l=d;break}if(I===l){M=!0,l=p,o=d;break}I=I.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function A(t){return t=bl(t),t!==null?W(t):null}function W(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=W(t);if(i!==null)return i;t=t.sibling}return null}var ie=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,j=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Ee=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,je=e.unstable_LowPriority,vt=e.unstable_IdlePriority,wt=null,mt=null;function sn(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(wt,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Mt,Ye=Math.log,Zn=Math.LN2;function Mt(t){return t>>>=0,t===0?32:31-(Ye(t)/Zn|0)|0}var on=64,Qn=4194304;function qt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var I=M&~d;I!==0?l=qt(I):(p&=M,p!==0&&(l=qt(p)))}else M=o&~d,M!==0?l=qt(M):p!==0&&(l=qt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ot(i),d=1<<o,l|=t[o],i&=~d;return l}function Pt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-ot(p),I=1<<M,z=d[M];z===-1?((I&o)===0||(I&l)!==0)&&(d[M]=Pt(I,i)):z<=i&&(t.expiredLanes|=I),p&=~I}}function Ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mn(){var t=on;return on<<=1,(on&4194240)===0&&(on=64),t}function Bn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Mn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ot(i),t[i]=o}function Yo(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-ot(o),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,o&=~p}}function Pl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ot(o),d=1<<l;d&i|t[l]&i&&(t[l]|=i),o&=~d}}var Ct=0;function $d(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Kd,Nl,Zd,Qd,Jd,Ll=!1,$o=[],qi=null,Yi=null,$i=null,Ks=new Map,Zs=new Map,Ki=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ef(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,o,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ho(i),i!==null&&Nl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Og(t,i,o,l,d){switch(i){case"focusin":return qi=Qs(qi,t,i,o,l,d),!0;case"dragenter":return Yi=Qs(Yi,t,i,o,l,d),!0;case"mouseover":return $i=Qs($i,t,i,o,l,d),!0;case"pointerover":var p=d.pointerId;return Ks.set(p,Qs(Ks.get(p)||null,t,i,o,l,d)),!0;case"gotpointercapture":return p=d.pointerId,Zs.set(p,Qs(Zs.get(p)||null,t,i,o,l,d)),!0}return!1}function tf(t){var i=Ar(t.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=Xo(o),i!==null){t.blockedOn=i,Jd(t.priority,function(){Zd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ul(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Tt=l,o.target.dispatchEvent(l),Tt=null}else return i=ho(o),i!==null&&Nl(i),t.blockedOn=o,!1;i.shift()}return!0}function nf(t,i,o){Ko(t)&&o.delete(i)}function kg(){Ll=!1,qi!==null&&Ko(qi)&&(qi=null),Yi!==null&&Ko(Yi)&&(Yi=null),$i!==null&&Ko($i)&&($i=null),Ks.forEach(nf),Zs.forEach(nf)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Ll||(Ll=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kg)))}function eo(t){function i(d){return Js(d,t)}if(0<$o.length){Js($o[0],t);for(var o=1;o<$o.length;o++){var l=$o[o];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&Js(qi,t),Yi!==null&&Js(Yi,t),$i!==null&&Js($i,t),Ks.forEach(i),Zs.forEach(i),o=0;o<Ki.length;o++)l=Ki[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)tf(o),o.blockedOn===null&&Ki.shift()}var es=R.ReactCurrentBatchConfig,Zo=!0;function zg(t,i,o,l){var d=Ct,p=es.transition;es.transition=null;try{Ct=1,Dl(t,i,o,l)}finally{Ct=d,es.transition=p}}function Bg(t,i,o,l){var d=Ct,p=es.transition;es.transition=null;try{Ct=4,Dl(t,i,o,l)}finally{Ct=d,es.transition=p}}function Dl(t,i,o,l){if(Zo){var d=Ul(t,i,o,l);if(d===null)Zl(t,i,l,Qo,o),ef(t,l);else if(Og(d,t,i,o,l))l.stopPropagation();else if(ef(t,l),i&4&&-1<Fg.indexOf(t)){for(;d!==null;){var p=ho(d);if(p!==null&&Kd(p),p=Ul(t,i,o,l),p===null&&Zl(t,i,l,Qo,o),p===d)break;d=p}d!==null&&l.stopPropagation()}else Zl(t,i,l,null,o)}}var Qo=null;function Ul(t,i,o,l){if(Qo=null,t=G(l),t=Ar(t),t!==null)if(i=fi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Xo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Qo=t,null}function rf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case He:return 1;case tt:return 4;case it:case je:return 16;case vt:return 536870912;default:return 16}default:return 16}}var Zi=null,Il=null,Jo=null;function sf(){if(Jo)return Jo;var t,i=Il,o=i.length,l,d="value"in Zi?Zi.value:Zi.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===d[p-l];l++);return Jo=d.slice(t,1<l?1-l:void 0)}function ea(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function of(){return!1}function Ln(t){function i(o,l,d,p,M){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ta:of,this.isPropagationStopped=of,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Ln(ts),to=ee({},ts,{view:0,detail:0}),Hg=Ln(to),Ol,kl,no,na=ee({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Ol=t.screenX-no.screenX,kl=t.screenY-no.screenY):kl=Ol=0,no=t),Ol)},movementY:function(t){return"movementY"in t?t.movementY:kl}}),af=Ln(na),Vg=ee({},na,{dataTransfer:0}),Gg=Ln(Vg),Wg=ee({},to,{relatedTarget:0}),zl=Ln(Wg),jg=ee({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Xg=Ln(jg),qg=ee({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yg=Ln(qg),$g=ee({},ts,{data:0}),lf=Ln($g),Kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Qg[t])?!!i[t]:!1}function Bl(){return Jg}var e0=ee({},to,{key:function(t){if(t.key){var i=Kg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),t0=Ln(e0),n0=ee({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=Ln(n0),i0=ee({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),r0=Ln(i0),s0=ee({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=Ln(s0),a0=ee({},na,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),l0=Ln(a0),c0=[9,13,27,32],Hl=f&&"CompositionEvent"in window,io=null;f&&"documentMode"in document&&(io=document.documentMode);var u0=f&&"TextEvent"in window&&!io,uf=f&&(!Hl||io&&8<io&&11>=io),df=" ",ff=!1;function hf(t,i){switch(t){case"keyup":return c0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function d0(t,i){switch(t){case"compositionend":return pf(i);case"keypress":return i.which!==32?null:(ff=!0,df);case"textInput":return t=i.data,t===df&&ff?null:t;default:return null}}function f0(t,i){if(ns)return t==="compositionend"||!Hl&&hf(t,i)?(t=sf(),Jo=Il=Zi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return uf&&i.locale!=="ko"?null:i.data;default:return null}}var h0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!h0[t.type]:i==="textarea"}function gf(t,i,o,l){Le(l),i=aa(i,"onChange"),0<i.length&&(o=new Fl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var ro=null,so=null;function p0(t){Uf(t,0)}function ia(t){var i=as(t);if(ut(i))return t}function m0(t,i){if(t==="change")return i}var vf=!1;if(f){var Vl;if(f){var Gl="oninput"in document;if(!Gl){var _f=document.createElement("div");_f.setAttribute("oninput","return;"),Gl=typeof _f.oninput=="function"}Vl=Gl}else Vl=!1;vf=Vl&&(!document.documentMode||9<document.documentMode)}function xf(){ro&&(ro.detachEvent("onpropertychange",yf),so=ro=null)}function yf(t){if(t.propertyName==="value"&&ia(so)){var i=[];gf(i,so,t,G(t)),Sn(p0,i)}}function g0(t,i,o){t==="focusin"?(xf(),ro=i,so=o,ro.attachEvent("onpropertychange",yf)):t==="focusout"&&xf()}function v0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ia(so)}function _0(t,i){if(t==="click")return ia(i)}function x0(t,i){if(t==="input"||t==="change")return ia(i)}function y0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:y0;function oo(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!h.call(i,d)||!Jn(t[d],i[d]))return!1}return!0}function Sf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mf(t,i){var o=Sf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Sf(o)}}function Ef(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ef(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function wf(){for(var t=window,i=Rt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Rt(t.document)}return i}function Wl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function S0(t){var i=wf(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ef(o.ownerDocument.documentElement,o)){if(l!==null&&Wl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=Mf(o,p);var M=Mf(o,l);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var M0=f&&"documentMode"in document&&11>=document.documentMode,is=null,jl=null,ao=null,Xl=!1;function Tf(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Xl||is==null||is!==Rt(l)||(l=is,"selectionStart"in l&&Wl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ao&&oo(ao,l)||(ao=l,l=aa(jl,"onSelect"),0<l.length&&(i=new Fl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function ra(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},ql={},Af={};f&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function sa(t){if(ql[t])return ql[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Af)return ql[t]=i[o];return t}var Cf=sa("animationend"),Rf=sa("animationiteration"),bf=sa("animationstart"),Pf=sa("transitionend"),Nf=new Map,Lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Nf.set(t,i),c(i,[t])}for(var Yl=0;Yl<Lf.length;Yl++){var $l=Lf[Yl],E0=$l.toLowerCase(),w0=$l[0].toUpperCase()+$l.slice(1);Qi(E0,"on"+w0)}Qi(Cf,"onAnimationEnd"),Qi(Rf,"onAnimationIteration"),Qi(bf,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Pf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T0=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Df(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,jo(l,i,void 0,t),t.currentTarget=null}function Uf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var I=l[M],z=I.instance,ne=I.currentTarget;if(I=I.listener,z!==p&&d.isPropagationStopped())break e;Df(d,I,ne),p=z}else for(M=0;M<l.length;M++){if(I=l[M],z=I.instance,ne=I.currentTarget,I=I.listener,z!==p&&d.isPropagationStopped())break e;Df(d,I,ne),p=z}}}if(Tr)throw t=Xi,Tr=!1,Xi=null,t}function Ut(t,i){var o=i[ic];o===void 0&&(o=i[ic]=new Set);var l=t+"__bubble";o.has(l)||(If(i,t,2,!1),o.add(l))}function Kl(t,i,o){var l=0;i&&(l|=4),If(o,t,l,i)}var oa="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[oa]){t[oa]=!0,r.forEach(function(o){o!=="selectionchange"&&(T0.has(o)||Kl(o,!1,t),Kl(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[oa]||(i[oa]=!0,Kl("selectionchange",!1,i))}}function If(t,i,o,l){switch(rf(i)){case 1:var d=zg;break;case 4:d=Bg;break;default:d=Dl}o=d.bind(null,i,o,t),d=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Zl(t,i,o,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var I=l.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(M===4)for(M=l.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;M=M.return}for(;I!==null;){if(M=Ar(I),M===null)return;if(z=M.tag,z===5||z===6){l=p=M;continue e}I=I.parentNode}}l=l.return}Sn(function(){var ne=p,xe=G(o),Se=[];e:{var ve=Nf.get(t);if(ve!==void 0){var Ue=Fl,Be=t;switch(t){case"keypress":if(ea(o)===0)break e;case"keydown":case"keyup":Ue=t0;break;case"focusin":Be="focus",Ue=zl;break;case"focusout":Be="blur",Ue=zl;break;case"beforeblur":case"afterblur":Ue=zl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=r0;break;case Cf:case Rf:case bf:Ue=Xg;break;case Pf:Ue=o0;break;case"scroll":Ue=Hg;break;case"wheel":Ue=l0;break;case"copy":case"cut":case"paste":Ue=Yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=cf}var Ve=(i&4)!==0,Bt=!Ve&&t==="scroll",Y=Ve?ve!==null?ve+"Capture":null:ve;Ve=[];for(var V=ne,Z;V!==null;){Z=V;var we=Z.stateNode;if(Z.tag===5&&we!==null&&(Z=we,Y!==null&&(we=pn(V,Y),we!=null&&Ve.push(uo(V,we,Z)))),Bt)break;V=V.return}0<Ve.length&&(ve=new Ue(ve,Be,null,o,xe),Se.push({event:ve,listeners:Ve}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",ve&&o!==Tt&&(Be=o.relatedTarget||o.fromElement)&&(Ar(Be)||Be[Ai]))break e;if((Ue||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(Be=o.relatedTarget||o.toElement,Ue=ne,Be=Be?Ar(Be):null,Be!==null&&(Bt=fi(Be),Be!==Bt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ue=null,Be=ne),Ue!==Be)){if(Ve=af,we="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=cf,we="onPointerLeave",Y="onPointerEnter",V="pointer"),Bt=Ue==null?ve:as(Ue),Z=Be==null?ve:as(Be),ve=new Ve(we,V+"leave",Ue,o,xe),ve.target=Bt,ve.relatedTarget=Z,we=null,Ar(xe)===ne&&(Ve=new Ve(Y,V+"enter",Be,o,xe),Ve.target=Z,Ve.relatedTarget=Bt,we=Ve),Bt=we,Ue&&Be)t:{for(Ve=Ue,Y=Be,V=0,Z=Ve;Z;Z=ss(Z))V++;for(Z=0,we=Y;we;we=ss(we))Z++;for(;0<V-Z;)Ve=ss(Ve),V--;for(;0<Z-V;)Y=ss(Y),Z--;for(;V--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=ss(Ve),Y=ss(Y)}Ve=null}else Ve=null;Ue!==null&&Ff(Se,ve,Ue,Ve,!1),Be!==null&&Bt!==null&&Ff(Se,Bt,Be,Ve,!0)}}e:{if(ve=ne?as(ne):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var Xe=m0;else if(mf(ve))if(vf)Xe=x0;else{Xe=v0;var Ze=g0}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=_0);if(Xe&&(Xe=Xe(t,ne))){gf(Se,Xe,o,xe);break e}Ze&&Ze(t,ve,ne),t==="focusout"&&(Ze=ve._wrapperState)&&Ze.controlled&&ve.type==="number"&&At(ve,"number",ve.value)}switch(Ze=ne?as(ne):window,t){case"focusin":(mf(Ze)||Ze.contentEditable==="true")&&(is=Ze,jl=ne,ao=null);break;case"focusout":ao=jl=is=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,Tf(Se,o,xe);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":Tf(Se,o,xe)}var Qe;if(Hl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ns?hf(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(uf&&o.locale!=="ko"&&(ns||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ns&&(Qe=sf()):(Zi=xe,Il="value"in Zi?Zi.value:Zi.textContent,ns=!0)),Ze=aa(ne,nt),0<Ze.length&&(nt=new lf(nt,t,null,o,xe),Se.push({event:nt,listeners:Ze}),Qe?nt.data=Qe:(Qe=pf(o),Qe!==null&&(nt.data=Qe)))),(Qe=u0?d0(t,o):f0(t,o))&&(ne=aa(ne,"onBeforeInput"),0<ne.length&&(xe=new lf("onBeforeInput","beforeinput",null,o,xe),Se.push({event:xe,listeners:ne}),xe.data=Qe))}Uf(Se,i)})}function uo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function aa(t,i){for(var o=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=pn(t,o),p!=null&&l.unshift(uo(t,p,d)),p=pn(t,i),p!=null&&l.push(uo(t,p,d))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ff(t,i,o,l,d){for(var p=i._reactName,M=[];o!==null&&o!==l;){var I=o,z=I.alternate,ne=I.stateNode;if(z!==null&&z===l)break;I.tag===5&&ne!==null&&(I=ne,d?(z=pn(o,p),z!=null&&M.unshift(uo(o,z,I))):d||(z=pn(o,p),z!=null&&M.push(uo(o,z,I)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var A0=/\r\n?/g,C0=/\u0000|\uFFFD/g;function Of(t){return(typeof t=="string"?t:""+t).replace(A0,`
`).replace(C0,"")}function la(t,i,o){if(i=Of(i),Of(t)!==i&&o)throw Error(n(425))}function ca(){}var Ql=null,Jl=null;function ec(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tc=typeof setTimeout=="function"?setTimeout:void 0,R0=typeof clearTimeout=="function"?clearTimeout:void 0,kf=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof kf<"u"?function(t){return kf.resolve(null).then(t).catch(P0)}:tc;function P0(t){setTimeout(function(){throw t})}function nc(t,i){var o=i,l=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(l===0){t.removeChild(d),eo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=d}while(o);eo(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function zf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),pi="__reactFiber$"+os,fo="__reactProps$"+os,Ai="__reactContainer$"+os,ic="__reactEvents$"+os,N0="__reactListeners$"+os,L0="__reactHandles$"+os;function Ar(t){var i=t[pi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ai]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=zf(t);t!==null;){if(o=t[pi])return o;t=zf(t)}return i}t=o,o=t.parentNode}return null}function ho(t){return t=t[pi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ua(t){return t[fo]||null}var rc=[],ls=-1;function er(t){return{current:t}}function It(t){0>ls||(t.current=rc[ls],rc[ls]=null,ls--)}function Lt(t,i){ls++,rc[ls]=t.current,t.current=i}var tr={},an=er(tr),En=er(!1),Cr=tr;function cs(t,i){var o=t.type.contextTypes;if(!o)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function wn(t){return t=t.childContextTypes,t!=null}function da(){It(En),It(an)}function Bf(t,i,o){if(an.current!==tr)throw Error(n(168));Lt(an,i),Lt(En,o)}function Hf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,ge(t)||"Unknown",d));return ee({},o,l)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Cr=an.current,Lt(an,t),Lt(En,En.current),!0}function Vf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Hf(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,It(En),It(an),Lt(an,t)):It(En),Lt(En,o)}var Ci=null,ha=!1,sc=!1;function Gf(t){Ci===null?Ci=[t]:Ci.push(t)}function D0(t){ha=!0,Gf(t)}function nr(){if(!sc&&Ci!==null){sc=!0;var t=0,i=Ct;try{var o=Ci;for(Ct=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ci=null,ha=!1}catch(d){throw Ci!==null&&(Ci=Ci.slice(t+1)),ie(He,nr),d}finally{Ct=i,sc=!1}}return null}var us=[],ds=0,pa=null,ma=0,Hn=[],Vn=0,Rr=null,Ri=1,bi="";function br(t,i){us[ds++]=ma,us[ds++]=pa,pa=t,ma=i}function Wf(t,i,o){Hn[Vn++]=Ri,Hn[Vn++]=bi,Hn[Vn++]=Rr,Rr=t;var l=Ri;t=bi;var d=32-ot(l)-1;l&=~(1<<d),o+=1;var p=32-ot(i)+d;if(30<p){var M=d-d%5;p=(l&(1<<M)-1).toString(32),l>>=M,d-=M,Ri=1<<32-ot(i)+d|o<<d|l,bi=p+t}else Ri=1<<p|o<<d|l,bi=t}function oc(t){t.return!==null&&(br(t,1),Wf(t,1,0))}function ac(t){for(;t===pa;)pa=us[--ds],us[ds]=null,ma=us[--ds],us[ds]=null;for(;t===Rr;)Rr=Hn[--Vn],Hn[Vn]=null,bi=Hn[--Vn],Hn[Vn]=null,Ri=Hn[--Vn],Hn[Vn]=null}var Dn=null,Un=null,Ft=!1,ei=null;function jf(t,i){var o=Xn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Xf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,Un=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Rr!==null?{id:Ri,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Xn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Dn=t,Un=null,!0):!1;default:return!1}}function lc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cc(t){if(Ft){var i=Un;if(i){var o=i;if(!Xf(t,i)){if(lc(t))throw Error(n(418));i=Ji(o.nextSibling);var l=Dn;i&&Xf(t,i)?jf(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Dn=t)}}else{if(lc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Dn=t}}}function qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function ga(t){if(t!==Dn)return!1;if(!Ft)return qf(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ec(t.type,t.memoizedProps)),i&&(i=Un)){if(lc(t))throw Yf(),Error(n(418));for(;i;)jf(t,i),i=Ji(i.nextSibling)}if(qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Un=Ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=Dn?Ji(t.stateNode.nextSibling):null;return!0}function Yf(){for(var t=Un;t;)t=Ji(t.nextSibling)}function fs(){Un=Dn=null,Ft=!1}function uc(t){ei===null?ei=[t]:ei.push(t)}var U0=R.ReactCurrentBatchConfig;function po(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var I=d.refs;M===null?delete I[p]:I[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function va(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function $f(t){var i=t._init;return i(t._payload)}function Kf(t){function i(Y,V){if(t){var Z=Y.deletions;Z===null?(Y.deletions=[V],Y.flags|=16):Z.push(V)}}function o(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function d(Y,V){return Y=ur(Y,V),Y.index=0,Y.sibling=null,Y}function p(Y,V,Z){return Y.index=Z,t?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<V?(Y.flags|=2,V):Z):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,V,Z,we){return V===null||V.tag!==6?(V=tu(Z,Y.mode,we),V.return=Y,V):(V=d(V,Z),V.return=Y,V)}function z(Y,V,Z,we){var Xe=Z.type;return Xe===O?xe(Y,V,Z.props.children,we,Z.key):V!==null&&(V.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&$f(Xe)===V.type)?(we=d(V,Z.props),we.ref=po(Y,V,Z),we.return=Y,we):(we=Ha(Z.type,Z.key,Z.props,null,Y.mode,we),we.ref=po(Y,V,Z),we.return=Y,we)}function ne(Y,V,Z,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=nu(Z,Y.mode,we),V.return=Y,V):(V=d(V,Z.children||[]),V.return=Y,V)}function xe(Y,V,Z,we,Xe){return V===null||V.tag!==7?(V=Or(Z,Y.mode,we,Xe),V.return=Y,V):(V=d(V,Z),V.return=Y,V)}function Se(Y,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number")return V=tu(""+V,Y.mode,Z),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case q:return Z=Ha(V.type,V.key,V.props,null,Y.mode,Z),Z.ref=po(Y,null,V),Z.return=Y,Z;case k:return V=nu(V,Y.mode,Z),V.return=Y,V;case se:var we=V._init;return Se(Y,we(V._payload),Z)}if($e(V)||te(V))return V=Or(V,Y.mode,Z,null),V.return=Y,V;va(Y,V)}return null}function ve(Y,V,Z,we){var Xe=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Xe!==null?null:I(Y,V,""+Z,we);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case q:return Z.key===Xe?z(Y,V,Z,we):null;case k:return Z.key===Xe?ne(Y,V,Z,we):null;case se:return Xe=Z._init,ve(Y,V,Xe(Z._payload),we)}if($e(Z)||te(Z))return Xe!==null?null:xe(Y,V,Z,we,null);va(Y,Z)}return null}function Ue(Y,V,Z,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get(Z)||null,I(V,Y,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case q:return Y=Y.get(we.key===null?Z:we.key)||null,z(V,Y,we,Xe);case k:return Y=Y.get(we.key===null?Z:we.key)||null,ne(V,Y,we,Xe);case se:var Ze=we._init;return Ue(Y,V,Z,Ze(we._payload),Xe)}if($e(we)||te(we))return Y=Y.get(Z)||null,xe(V,Y,we,Xe,null);va(V,we)}return null}function Be(Y,V,Z,we){for(var Xe=null,Ze=null,Qe=V,nt=V=0,en=null;Qe!==null&&nt<Z.length;nt++){Qe.index>nt?(en=Qe,Qe=null):en=Qe.sibling;var Et=ve(Y,Qe,Z[nt],we);if(Et===null){Qe===null&&(Qe=en);break}t&&Qe&&Et.alternate===null&&i(Y,Qe),V=p(Et,V,nt),Ze===null?Xe=Et:Ze.sibling=Et,Ze=Et,Qe=en}if(nt===Z.length)return o(Y,Qe),Ft&&br(Y,nt),Xe;if(Qe===null){for(;nt<Z.length;nt++)Qe=Se(Y,Z[nt],we),Qe!==null&&(V=p(Qe,V,nt),Ze===null?Xe=Qe:Ze.sibling=Qe,Ze=Qe);return Ft&&br(Y,nt),Xe}for(Qe=l(Y,Qe);nt<Z.length;nt++)en=Ue(Qe,Y,nt,Z[nt],we),en!==null&&(t&&en.alternate!==null&&Qe.delete(en.key===null?nt:en.key),V=p(en,V,nt),Ze===null?Xe=en:Ze.sibling=en,Ze=en);return t&&Qe.forEach(function(dr){return i(Y,dr)}),Ft&&br(Y,nt),Xe}function Ve(Y,V,Z,we){var Xe=te(Z);if(typeof Xe!="function")throw Error(n(150));if(Z=Xe.call(Z),Z==null)throw Error(n(151));for(var Ze=Xe=null,Qe=V,nt=V=0,en=null,Et=Z.next();Qe!==null&&!Et.done;nt++,Et=Z.next()){Qe.index>nt?(en=Qe,Qe=null):en=Qe.sibling;var dr=ve(Y,Qe,Et.value,we);if(dr===null){Qe===null&&(Qe=en);break}t&&Qe&&dr.alternate===null&&i(Y,Qe),V=p(dr,V,nt),Ze===null?Xe=dr:Ze.sibling=dr,Ze=dr,Qe=en}if(Et.done)return o(Y,Qe),Ft&&br(Y,nt),Xe;if(Qe===null){for(;!Et.done;nt++,Et=Z.next())Et=Se(Y,Et.value,we),Et!==null&&(V=p(Et,V,nt),Ze===null?Xe=Et:Ze.sibling=Et,Ze=Et);return Ft&&br(Y,nt),Xe}for(Qe=l(Y,Qe);!Et.done;nt++,Et=Z.next())Et=Ue(Qe,Y,nt,Et.value,we),Et!==null&&(t&&Et.alternate!==null&&Qe.delete(Et.key===null?nt:Et.key),V=p(Et,V,nt),Ze===null?Xe=Et:Ze.sibling=Et,Ze=Et);return t&&Qe.forEach(function(hv){return i(Y,hv)}),Ft&&br(Y,nt),Xe}function Bt(Y,V,Z,we){if(typeof Z=="object"&&Z!==null&&Z.type===O&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case q:e:{for(var Xe=Z.key,Ze=V;Ze!==null;){if(Ze.key===Xe){if(Xe=Z.type,Xe===O){if(Ze.tag===7){o(Y,Ze.sibling),V=d(Ze,Z.props.children),V.return=Y,Y=V;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&$f(Xe)===Ze.type){o(Y,Ze.sibling),V=d(Ze,Z.props),V.ref=po(Y,Ze,Z),V.return=Y,Y=V;break e}o(Y,Ze);break}else i(Y,Ze);Ze=Ze.sibling}Z.type===O?(V=Or(Z.props.children,Y.mode,we,Z.key),V.return=Y,Y=V):(we=Ha(Z.type,Z.key,Z.props,null,Y.mode,we),we.ref=po(Y,V,Z),we.return=Y,Y=we)}return M(Y);case k:e:{for(Ze=Z.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){o(Y,V.sibling),V=d(V,Z.children||[]),V.return=Y,Y=V;break e}else{o(Y,V);break}else i(Y,V);V=V.sibling}V=nu(Z,Y.mode,we),V.return=Y,Y=V}return M(Y);case se:return Ze=Z._init,Bt(Y,V,Ze(Z._payload),we)}if($e(Z))return Be(Y,V,Z,we);if(te(Z))return Ve(Y,V,Z,we);va(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,V!==null&&V.tag===6?(o(Y,V.sibling),V=d(V,Z),V.return=Y,Y=V):(o(Y,V),V=tu(Z,Y.mode,we),V.return=Y,Y=V),M(Y)):o(Y,V)}return Bt}var hs=Kf(!0),Zf=Kf(!1),_a=er(null),xa=null,ps=null,dc=null;function fc(){dc=ps=xa=null}function hc(t){var i=_a.current;It(_a),t._currentValue=i}function pc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){xa=t,dc=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Tn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(dc!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(xa===null)throw Error(n(308));ps=t,xa.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Pr=null;function mc(t){Pr===null?Pr=[t]:Pr.push(t)}function Qf(t,i,o,l){var d=i.interleaved;return d===null?(o.next=o,mc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Pi(t,l)}function Pi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ir=!1;function gc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Pi(t,o)}return d=l.interleaved,d===null?(i.next=i,mc(l)):(i.next=d.next,d.next=i),l.interleaved=i,Pi(t,o)}function ya(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Pl(t,o)}}function eh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Sa(t,i,o,l){var d=t.updateQueue;ir=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var z=I,ne=z.next;z.next=null,M===null?p=ne:M.next=ne,M=z;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==M&&(I===null?xe.firstBaseUpdate=ne:I.next=ne,xe.lastBaseUpdate=z))}if(p!==null){var Se=d.baseState;M=0,xe=ne=z=null,I=p;do{var ve=I.lane,Ue=I.eventTime;if((l&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Ue,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Be=t,Ve=I;switch(ve=i,Ue=o,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){Se=Be.call(Ue,Se,ve);break e}Se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,ve=typeof Be=="function"?Be.call(Ue,Se,ve):Be,ve==null)break e;Se=ee({},Se,ve);break e;case 2:ir=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ve=d.effects,ve===null?d.effects=[I]:ve.push(I))}else Ue={eventTime:Ue,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(ne=xe=Ue,z=Se):xe=xe.next=Ue,M|=ve;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(z=Se),d.baseState=z,d.firstBaseUpdate=ne,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Dr|=M,t.lanes=M,t.memoizedState=Se}}function th(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=o,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var mo={},mi=er(mo),go=er(mo),vo=er(mo);function Nr(t){if(t===mo)throw Error(n(174));return t}function vc(t,i){switch(Lt(vo,i),Lt(go,t),Lt(mi,mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ge(i,t)}It(mi),Lt(mi,i)}function gs(){It(mi),It(go),It(vo)}function nh(t){Nr(vo.current);var i=Nr(mi.current),o=Ge(i,t.type);i!==o&&(Lt(go,t),Lt(mi,o))}function _c(t){go.current===t&&(It(mi),It(go))}var Ot=er(0);function Ma(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xc=[];function yc(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var Ea=R.ReactCurrentDispatcher,Sc=R.ReactCurrentBatchConfig,Lr=0,kt=null,Yt=null,Qt=null,wa=!1,_o=!1,xo=0,I0=0;function ln(){throw Error(n(321))}function Mc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Jn(t[o],i[o]))return!1;return!0}function Ec(t,i,o,l,d,p){if(Lr=p,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ea.current=t===null||t.memoizedState===null?z0:B0,t=o(l,d),_o){p=0;do{if(_o=!1,xo=0,25<=p)throw Error(n(301));p+=1,Qt=Yt=null,i.updateQueue=null,Ea.current=H0,t=o(l,d)}while(_o)}if(Ea.current=Ca,i=Yt!==null&&Yt.next!==null,Lr=0,Qt=Yt=kt=null,wa=!1,i)throw Error(n(300));return t}function wc(){var t=xo!==0;return xo=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?kt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Wn(){if(Yt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Qt===null?kt.memoizedState:Qt.next;if(i!==null)Qt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Qt===null?kt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function yo(t,i){return typeof i=="function"?i(t):i}function Tc(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Yt,d=l.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}l.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,l=l.baseState;var I=M=null,z=null,ne=p;do{var xe=ne.lane;if((Lr&xe)===xe)z!==null&&(z=z.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),l=ne.hasEagerState?ne.eagerState:t(l,ne.action);else{var Se={lane:xe,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};z===null?(I=z=Se,M=l):z=z.next=Se,kt.lanes|=xe,Dr|=xe}ne=ne.next}while(ne!==null&&ne!==p);z===null?M=l:z.next=I,Jn(l,i.memoizedState)||(Tn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=z,o.lastRenderedState=l}if(t=o.interleaved,t!==null){d=t;do p=d.lane,kt.lanes|=p,Dr|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ac(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=t(p,M.action),M=M.next;while(M!==d);Jn(p,i.memoizedState)||(Tn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function ih(){}function rh(t,i){var o=kt,l=Wn(),d=i(),p=!Jn(l.memoizedState,d);if(p&&(l.memoizedState=d,Tn=!0),l=l.queue,Cc(ah.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||Qt!==null&&Qt.memoizedState.tag&1){if(o.flags|=2048,So(9,oh.bind(null,o,l,d,i),void 0,null),Jt===null)throw Error(n(349));(Lr&30)!==0||sh(o,i,d)}return d}function sh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function oh(t,i,o,l){i.value=o,i.getSnapshot=l,lh(i)&&ch(t)}function ah(t,i,o){return o(function(){lh(i)&&ch(t)})}function lh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Jn(t,o)}catch{return!0}}function ch(t){var i=Pi(t,1);i!==null&&ri(i,t,1,-1)}function uh(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},i.queue=t,t=t.dispatch=k0.bind(null,kt,t),[i.memoizedState,t]}function So(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function dh(){return Wn().memoizedState}function Ta(t,i,o,l){var d=gi();kt.flags|=t,d.memoizedState=So(1|i,o,void 0,l===void 0?null:l)}function Aa(t,i,o,l){var d=Wn();l=l===void 0?null:l;var p=void 0;if(Yt!==null){var M=Yt.memoizedState;if(p=M.destroy,l!==null&&Mc(l,M.deps)){d.memoizedState=So(i,o,p,l);return}}kt.flags|=t,d.memoizedState=So(1|i,o,p,l)}function fh(t,i){return Ta(8390656,8,t,i)}function Cc(t,i){return Aa(2048,8,t,i)}function hh(t,i){return Aa(4,2,t,i)}function ph(t,i){return Aa(4,4,t,i)}function mh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function gh(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4,4,mh.bind(null,i,t),o)}function Rc(){}function vh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Mc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function _h(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Mc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function xh(t,i,o){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=o):(Jn(o,i)||(o=mn(),kt.lanes|=o,Dr|=o,t.baseState=!0),i)}function F0(t,i){var o=Ct;Ct=o!==0&&4>o?o:4,t(!0);var l=Sc.transition;Sc.transition={};try{t(!1),i()}finally{Ct=o,Sc.transition=l}}function yh(){return Wn().memoizedState}function O0(t,i,o){var l=lr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Sh(t))Mh(i,o);else if(o=Qf(t,i,o,l),o!==null){var d=vn();ri(o,t,l,d),Eh(o,i,l)}}function k0(t,i,o){var l=lr(t),d={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Sh(t))Mh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,I=p(M,o);if(d.hasEagerState=!0,d.eagerState=I,Jn(I,M)){var z=i.interleaved;z===null?(d.next=d,mc(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}o=Qf(t,i,d,l),o!==null&&(d=vn(),ri(o,t,l,d),Eh(o,i,l))}}function Sh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function Mh(t,i){_o=wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Eh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Pl(t,o)}}var Ca={readContext:Gn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},z0={readContext:Gn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:fh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ta(4194308,4,mh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ta(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ta(4,2,t,i)},useMemo:function(t,i){var o=gi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=gi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=O0.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:uh,useDebugValue:Rc,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=uh(!1),i=t[0];return t=F0.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,d=gi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Jt===null)throw Error(n(349));(Lr&30)!==0||sh(l,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,fh(ah.bind(null,l,p,t),[t]),l.flags|=2048,So(9,oh.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=gi(),i=Jt.identifierPrefix;if(Ft){var o=bi,l=Ri;o=(l&~(1<<32-ot(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=xo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=I0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},B0={readContext:Gn,useCallback:vh,useContext:Gn,useEffect:Cc,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:_h,useReducer:Tc,useRef:dh,useState:function(){return Tc(yo)},useDebugValue:Rc,useDeferredValue:function(t){var i=Wn();return xh(i,Yt.memoizedState,t)},useTransition:function(){var t=Tc(yo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:yh,unstable_isNewReconciler:!1},H0={readContext:Gn,useCallback:vh,useContext:Gn,useEffect:Cc,useImperativeHandle:gh,useInsertionEffect:hh,useLayoutEffect:ph,useMemo:_h,useReducer:Ac,useRef:dh,useState:function(){return Ac(yo)},useDebugValue:Rc,useDeferredValue:function(t){var i=Wn();return Yt===null?i.memoizedState=t:xh(i,Yt.memoizedState,t)},useTransition:function(){var t=Ac(yo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:ih,useSyncExternalStore:rh,useId:yh,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=ee({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function bc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:ee({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ra={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),d=lr(t),p=Ni(l,d);p.payload=i,o!=null&&(p.callback=o),i=rr(t,p,d),i!==null&&(ri(i,t,d,l),ya(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),d=lr(t),p=Ni(l,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=rr(t,p,d),i!==null&&(ri(i,t,d,l),ya(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=lr(t),d=Ni(o,l);d.tag=2,i!=null&&(d.callback=i),i=rr(t,d,l),i!==null&&(ri(i,t,l,o),ya(i,t,l))}};function wh(t,i,o,l,d,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!oo(o,l)||!oo(d,p):!0}function Th(t,i,o){var l=!1,d=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=Gn(p):(d=wn(i)?Cr:an.current,l=i.contextTypes,p=(l=l!=null)?cs(t,d):tr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ra,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Ah(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ra.enqueueReplaceState(i,i.state,null)}function Pc(t,i,o,l){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},gc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Gn(p):(p=wn(i)?Cr:an.current,d.context=cs(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(bc(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ra.enqueueReplaceState(d,d.state,null),Sa(t,o,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,i){try{var o="",l=i;do o+=de(l),l=l.return;while(l);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Nc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Lc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function Ch(t,i,o){o=Ni(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ia||(Ia=!0,qc=l),Lc(t,i)},o}function Rh(t,i,o){o=Ni(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;o.payload=function(){return l(d)},o.callback=function(){Lc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Lc(t,i),typeof l!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function bh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new V0;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(d.add(o),t=nv.bind(null,t,i,o),i.then(t,t))}function Ph(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Nh(t,i,o,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ni(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var G0=R.ReactCurrentOwner,Tn=!1;function gn(t,i,o,l){i.child=t===null?Zf(i,null,o,l):hs(i,t.child,o,l)}function Lh(t,i,o,l,d){o=o.render;var p=i.ref;return ms(i,d),l=Ec(t,i,o,l,p,d),o=wc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Li(t,i,d)):(Ft&&o&&oc(i),i.flags|=1,gn(t,i,l,d),i.child)}function Dh(t,i,o,l,d){if(t===null){var p=o.type;return typeof p=="function"&&!eu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Uh(t,i,p,l,d)):(t=Ha(o.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:oo,o(M,l)&&t.ref===i.ref)return Li(t,i,d)}return i.flags|=1,t=ur(p,l),t.ref=i.ref,t.return=i,i.child=t}function Uh(t,i,o,l,d){if(t!==null){var p=t.memoizedProps;if(oo(p,l)&&t.ref===i.ref)if(Tn=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Tn=!0);else return i.lanes=t.lanes,Li(t,i,d)}return Dc(t,i,o,l,d)}function Ih(t,i,o){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(xs,In),In|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(xs,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Lt(xs,In),In|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Lt(xs,In),In|=l;return gn(t,i,d,o),i.child}function Fh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Dc(t,i,o,l,d){var p=wn(o)?Cr:an.current;return p=cs(i,p),ms(i,d),o=Ec(t,i,o,l,p,d),l=wc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Li(t,i,d)):(Ft&&l&&oc(i),i.flags|=1,gn(t,i,o,d),i.child)}function Oh(t,i,o,l,d){if(wn(o)){var p=!0;fa(i)}else p=!1;if(ms(i,d),i.stateNode===null)Pa(t,i),Th(i,o,l),Pc(i,o,l,d),l=!0;else if(t===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var z=M.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Gn(ne):(ne=wn(o)?Cr:an.current,ne=cs(i,ne));var xe=o.getDerivedStateFromProps,Se=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==l||z!==ne)&&Ah(i,M,l,ne),ir=!1;var ve=i.memoizedState;M.state=ve,Sa(i,l,M,d),z=i.memoizedState,I!==l||ve!==z||En.current||ir?(typeof xe=="function"&&(bc(i,o,xe,l),z=i.memoizedState),(I=ir||wh(i,o,I,l,ve,z,ne))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),M.props=l,M.state=z,M.context=ne,l=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Jf(t,i),I=i.memoizedProps,ne=i.type===i.elementType?I:ti(i.type,I),M.props=ne,Se=i.pendingProps,ve=M.context,z=o.contextType,typeof z=="object"&&z!==null?z=Gn(z):(z=wn(o)?Cr:an.current,z=cs(i,z));var Ue=o.getDerivedStateFromProps;(xe=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==Se||ve!==z)&&Ah(i,M,l,z),ir=!1,ve=i.memoizedState,M.state=ve,Sa(i,l,M,d);var Be=i.memoizedState;I!==Se||ve!==Be||En.current||ir?(typeof Ue=="function"&&(bc(i,o,Ue,l),Be=i.memoizedState),(ne=ir||wh(i,o,ne,l,ve,Be,z)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=z,l=ne):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),l=!1)}return Uc(t,i,o,l,p,d)}function Uc(t,i,o,l,d,p){Fh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return d&&Vf(i,o,!1),Li(t,i,p);l=i.stateNode,G0.current=i;var I=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=hs(i,t.child,null,p),i.child=hs(i,null,I,p)):gn(t,i,I,p),i.memoizedState=l.state,d&&Vf(i,o,!0),i.child}function kh(t){var i=t.stateNode;i.pendingContext?Bf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Bf(t,i.context,!1),vc(t,i.containerInfo)}function zh(t,i,o,l,d){return fs(),uc(d),i.flags|=256,gn(t,i,o,l),i.child}var Ic={dehydrated:null,treeContext:null,retryLane:0};function Fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bh(t,i,o){var l=i.pendingProps,d=Ot.current,p=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Lt(Ot,d&1),t===null)return cc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Va(M,l,0,null),t=Or(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Fc(o),i.memoizedState=Ic,t):Oc(i,M));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return W0(t,i,M,l,I,d,o);if(p){p=l.fallback,M=i.mode,d=t.child,I=d.sibling;var z={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=ur(d,z),l.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=ur(I,p):(p=Or(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?Fc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=Ic,l}return p=t.child,t=p.sibling,l=ur(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Oc(t,i){return i=Va({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ba(t,i,o,l){return l!==null&&uc(l),hs(i,t.child,null,o),t=Oc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function W0(t,i,o,l,d,p,M){if(o)return i.flags&256?(i.flags&=-257,l=Nc(Error(n(422))),ba(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=Va({mode:"visible",children:l.children},d,0,null),p=Or(p,d,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,M),i.child.memoizedState=Fc(M),i.memoizedState=Ic,p);if((i.mode&1)===0)return ba(t,i,M,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var I=l.dgst;return l=I,p=Error(n(419)),l=Nc(p,l,void 0),ba(t,i,M,l)}if(I=(M&t.childLanes)!==0,Tn||I){if(l=Jt,l!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Pi(t,d),ri(l,t,d,-1))}return Jc(),l=Nc(Error(n(421))),ba(t,i,M,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=iv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Un=Ji(d.nextSibling),Dn=i,Ft=!0,ei=null,t!==null&&(Hn[Vn++]=Ri,Hn[Vn++]=bi,Hn[Vn++]=Rr,Ri=t.id,bi=t.overflow,Rr=i),i=Oc(i,l.children),i.flags|=4096,i)}function Hh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),pc(t.return,i,o)}function kc(t,i,o,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=d)}function Vh(t,i,o){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(gn(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hh(t,o,i);else if(t.tag===19)Hh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Ma(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),kc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ma(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}kc(i,!0,o,null,p);break;case"together":kc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Dr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ur(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ur(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function j0(t,i,o){switch(i.tag){case 3:kh(i),fs();break;case 5:nh(i);break;case 1:wn(i.type)&&fa(i);break;case 4:vc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Lt(_a,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Bh(t,i,o):(Lt(Ot,Ot.current&1),t=Li(t,i,o),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Vh(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Ih(t,i,o)}return Li(t,i,o)}var Gh,zc,Wh,jh;Gh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},zc=function(){},Wh=function(t,i,o,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Nr(mi.current);var p=null;switch(o){case"input":d=X(t,d),l=X(t,l),p=[];break;case"select":d=ee({},d,{value:void 0}),l=ee({},l,{value:void 0}),p=[];break;case"textarea":d=w(t,d),l=w(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ca)}ft(o,l);var M;o=null;for(ne in d)if(!l.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var I=d[ne];for(M in I)I.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in l){var z=l[ne];if(I=d!=null?d[ne]:void 0,l.hasOwnProperty(ne)&&z!==I&&(z!=null||I!=null))if(ne==="style")if(I){for(M in I)!I.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in z)z.hasOwnProperty(M)&&I[M]!==z[M]&&(o||(o={}),o[M]=z[M])}else o||(p||(p=[]),p.push(ne,o)),o=z;else ne==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(p=p||[]).push(ne,z)):ne==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(ne,""+z):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(z!=null&&ne==="onScroll"&&Ut("scroll",t),p||I===z||(p=[])):(p=p||[]).push(ne,z))}o&&(p=p||[]).push("style",o);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},jh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Mo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function X0(t,i,o){var l=i.pendingProps;switch(ac(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return wn(i.type)&&da(),cn(i),null;case 3:return l=i.stateNode,gs(),It(En),It(an),yc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ga(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(Kc(ei),ei=null))),zc(t,i),cn(i),null;case 5:_c(i);var d=Nr(vo.current);if(o=i.type,t!==null&&i.stateNode!=null)Wh(t,i,o,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Nr(mi.current),ga(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[pi]=i,l[fo]=p,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(d=0;d<lo.length;d++)Ut(lo[d],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":hn(l,p),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ut("invalid",l);break;case"textarea":J(l,p),Ut("invalid",l)}ft(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var I=p[M];M==="children"?typeof I=="string"?l.textContent!==I&&(p.suppressHydrationWarning!==!0&&la(l.textContent,I,t),d=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&la(l.textContent,I,t),d=["children",""+I]):a.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Ut("scroll",l)}switch(o){case"input":gt(l),Ke(l,p,!0);break;case"textarea":gt(l),_e(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ca)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[pi]=i,t[fo]=l,Gh(t,i,!1,!1),i.stateNode=t;e:{switch(M=rt(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),d=l;break;case"iframe":case"object":case"embed":Ut("load",t),d=l;break;case"video":case"audio":for(d=0;d<lo.length;d++)Ut(lo[d],t);d=l;break;case"source":Ut("error",t),d=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),d=l;break;case"details":Ut("toggle",t),d=l;break;case"input":hn(t,l),d=X(t,l),Ut("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=ee({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":J(t,l),d=w(t,l),Ut("invalid",t);break;default:d=l}ft(o,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var z=I[p];p==="style"?et(t,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ie(t,z)):p==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&ct(t,z):typeof z=="number"&&ct(t,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?z!=null&&p==="onScroll"&&Ut("scroll",t):z!=null&&N(t,p,z,M))}switch(o){case"input":gt(t),Ke(t,l,!1);break;case"textarea":gt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?L(t,!!l.multiple,p,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ca)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)jh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Nr(vo.current),Nr(mi.current),ga(i)){if(l=i.stateNode,o=i.memoizedProps,l[pi]=i,(p=l.nodeValue!==o)&&(t=Dn,t!==null))switch(t.tag){case 3:la(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[pi]=i,i.stateNode=l}return cn(i),null;case 13:if(It(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Yf(),fs(),i.flags|=98560,p=!1;else if(p=ga(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),p=!1}else ei!==null&&(Kc(ei),ei=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?$t===0&&($t=3):Jc())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return gs(),zc(t,i),t===null&&co(i.stateNode.containerInfo),cn(i),null;case 10:return hc(i.type._context),cn(i),null;case 17:return wn(i.type)&&da(),cn(i),null;case 19:if(It(Ot),p=i.memoizedState,p===null)return cn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Mo(p,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ma(t),M!==null){for(i.flags|=128,Mo(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}p.tail!==null&&Ee()>ys&&(i.flags|=128,l=!0,Mo(p,!1),i.lanes=4194304)}else{if(!l)if(t=Ma(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Mo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ft)return cn(i),null}else 2*Ee()-p.renderingStartTime>ys&&o!==1073741824&&(i.flags|=128,l=!0,Mo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ee(),i.sibling=null,o=Ot.current,Lt(Ot,l?o&1|2:o&1),i):(cn(i),null);case 22:case 23:return Qc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function q0(t,i){switch(ac(i),i.tag){case 1:return wn(i.type)&&da(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),It(En),It(an),yc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return _c(i),null;case 13:if(It(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ot),null;case 4:return gs(),null;case 10:return hc(i.type._context),null;case 22:case 23:return Qc(),null;case 24:return null;default:return null}}var Na=!1,un=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function _s(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){zt(t,i,l)}else o.current=null}function Bc(t,i,o){try{o()}catch(l){zt(t,i,l)}}var Xh=!1;function $0(t,i){if(Ql=Zo,t=wf(),Wl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,I=-1,z=-1,ne=0,xe=0,Se=t,ve=null;t:for(;;){for(var Ue;Se!==o||d!==0&&Se.nodeType!==3||(I=M+d),Se!==p||l!==0&&Se.nodeType!==3||(z=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)ve=Se,Se=Ue;for(;;){if(Se===t)break t;if(ve===o&&++ne===d&&(I=M),ve===p&&++xe===l&&(z=M),(Ue=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ue}o=I===-1||z===-1?null:{start:I,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(Jl={focusedElem:t,selectionRange:o},Zo=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Bt=Be.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ti(i.type,Ve),Bt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){zt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return Be=Xh,Xh=!1,Be}function Eo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&Bc(i,o,p)}d=d.next}while(d!==l)}}function La(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Hc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function qh(t){var i=t.alternate;i!==null&&(t.alternate=null,qh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[fo],delete i[ic],delete i[N0],delete i[L0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yh(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(t=t.child,t!==null))for(Vc(t,i,o),t=t.sibling;t!==null;)Vc(t,i,o),t=t.sibling}function Gc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Gc(t,i,o),t=t.sibling;t!==null;)Gc(t,i,o),t=t.sibling}var nn=null,ni=!1;function sr(t,i,o){for(o=o.child;o!==null;)Kh(t,i,o),o=o.sibling}function Kh(t,i,o){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(wt,o)}catch{}switch(o.tag){case 5:un||_s(o,i);case 6:var l=nn,d=ni;nn=null,sr(t,i,o),nn=l,ni=d,nn!==null&&(ni?(t=nn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):nn.removeChild(o.stateNode));break;case 18:nn!==null&&(ni?(t=nn,o=o.stateNode,t.nodeType===8?nc(t.parentNode,o):t.nodeType===1&&nc(t,o),eo(t)):nc(nn,o.stateNode));break;case 4:l=nn,d=ni,nn=o.stateNode.containerInfo,ni=!0,sr(t,i,o),nn=l,ni=d;break;case 0:case 11:case 14:case 15:if(!un&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Bc(o,i,M),d=d.next}while(d!==l)}sr(t,i,o);break;case 1:if(!un&&(_s(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(I){zt(o,i,I)}sr(t,i,o);break;case 21:sr(t,i,o);break;case 22:o.mode&1?(un=(l=un)||o.memoizedState!==null,sr(t,i,o),un=l):sr(t,i,o);break;default:sr(t,i,o)}}function Zh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Y0),i.forEach(function(l){var d=rv.bind(null,t,l);o.has(l)||(o.add(l),l.then(d,d))})}}function ii(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l];try{var p=t,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:nn=I.stateNode,ni=!1;break e;case 3:nn=I.stateNode.containerInfo,ni=!0;break e;case 4:nn=I.stateNode.containerInfo,ni=!0;break e}I=I.return}if(nn===null)throw Error(n(160));Kh(p,M,d),nn=null,ni=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ne){zt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Qh(i,t),i=i.sibling}function Qh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),vi(t),l&4){try{Eo(3,t,t.return),La(3,t)}catch(Ve){zt(t,t.return,Ve)}try{Eo(5,t,t.return)}catch(Ve){zt(t,t.return,Ve)}}break;case 1:ii(i,t),vi(t),l&512&&o!==null&&_s(o,o.return);break;case 5:if(ii(i,t),vi(t),l&512&&o!==null&&_s(o,o.return),t.flags&32){var d=t.stateNode;try{ct(d,"")}catch(Ve){zt(t,t.return,Ve)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,I=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&pt(d,p),rt(I,M);var ne=rt(I,p);for(M=0;M<z.length;M+=2){var xe=z[M],Se=z[M+1];xe==="style"?et(d,Se):xe==="dangerouslySetInnerHTML"?Ie(d,Se):xe==="children"?ct(d,Se):N(d,xe,Se,ne)}switch(I){case"input":dt(d,p);break;case"textarea":me(d,p);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ue=p.value;Ue!=null?L(d,!!p.multiple,Ue,!1):ve!==!!p.multiple&&(p.defaultValue!=null?L(d,!!p.multiple,p.defaultValue,!0):L(d,!!p.multiple,p.multiple?[]:"",!1))}d[fo]=p}catch(Ve){zt(t,t.return,Ve)}}break;case 6:if(ii(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Ve){zt(t,t.return,Ve)}}break;case 3:if(ii(i,t),vi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{eo(i.containerInfo)}catch(Ve){zt(t,t.return,Ve)}break;case 4:ii(i,t),vi(t);break;case 13:ii(i,t),vi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Xc=Ee())),l&4&&Zh(t);break;case 22:if(xe=o!==null&&o.memoizedState!==null,t.mode&1?(un=(ne=un)||xe,ii(i,t),un=ne):ii(i,t),vi(t),l&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!xe&&(t.mode&1)!==0)for(Oe=t,xe=t.child;xe!==null;){for(Se=Oe=xe;Oe!==null;){switch(ve=Oe,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Eo(4,ve,ve.return);break;case 1:_s(ve,ve.return);var Be=ve.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ve,o=ve.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){zt(l,o,Ve)}}break;case 5:_s(ve,ve.return);break;case 22:if(ve.memoizedState!==null){tp(Se);continue}}Ue!==null?(Ue.return=ve,Oe=Ue):tp(Se)}xe=xe.sibling}e:for(xe=null,Se=t;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,ne?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Se.stateNode,z=Se.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=Je("display",M))}catch(Ve){zt(t,t.return,Ve)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch(Ve){zt(t,t.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ii(i,t),vi(t),l&4&&Zh(t);break;case 21:break;default:ii(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Yh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(ct(d,""),l.flags&=-33);var p=$h(t);Gc(t,p,d);break;case 3:case 4:var M=l.stateNode.containerInfo,I=$h(t);Vc(t,I,M);break;default:throw Error(n(161))}}catch(z){zt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function K0(t,i,o){Oe=t,Jh(t)}function Jh(t,i,o){for(var l=(t.mode&1)!==0;Oe!==null;){var d=Oe,p=d.child;if(d.tag===22&&l){var M=d.memoizedState!==null||Na;if(!M){var I=d.alternate,z=I!==null&&I.memoizedState!==null||un;I=Na;var ne=un;if(Na=M,(un=z)&&!ne)for(Oe=d;Oe!==null;)M=Oe,z=M.child,M.tag===22&&M.memoizedState!==null?np(d):z!==null?(z.return=M,Oe=z):np(d);for(;p!==null;)Oe=p,Jh(p),p=p.sibling;Oe=d,Na=I,un=ne}ep(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Oe=p):ep(t)}}function ep(t){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||La(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(o===null)l.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);l.componentDidUpdate(d,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&th(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}th(i,M,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var xe=ne.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&eo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Hc(i)}catch(ve){zt(i,i.return,ve)}}if(i===t){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function tp(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function np(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{La(4,i)}catch(z){zt(i,o,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(z){zt(i,d,z)}}var p=i.return;try{Hc(i)}catch(z){zt(i,p,z)}break;case 5:var M=i.return;try{Hc(i)}catch(z){zt(i,M,z)}}}catch(z){zt(i,i.return,z)}if(i===t){Oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Oe=I;break}Oe=i.return}}var Z0=Math.ceil,Da=R.ReactCurrentDispatcher,Wc=R.ReactCurrentOwner,jn=R.ReactCurrentBatchConfig,xt=0,Jt=null,Gt=null,rn=0,In=0,xs=er(0),$t=0,wo=null,Dr=0,Ua=0,jc=0,To=null,An=null,Xc=0,ys=1/0,Di=null,Ia=!1,qc=null,or=null,Fa=!1,ar=null,Oa=0,Ao=0,Yc=null,ka=-1,za=0;function vn(){return(xt&6)!==0?Ee():ka!==-1?ka:ka=Ee()}function lr(t){return(t.mode&1)===0?1:(xt&2)!==0&&rn!==0?rn&-rn:U0.transition!==null?(za===0&&(za=mn()),za):(t=Ct,t!==0||(t=window.event,t=t===void 0?16:rf(t.type)),t)}function ri(t,i,o,l){if(50<Ao)throw Ao=0,Yc=null,Error(n(185));Mn(t,o,l),((xt&2)===0||t!==Jt)&&(t===Jt&&((xt&2)===0&&(Ua|=o),$t===4&&cr(t,rn)),Cn(t,l),o===1&&xt===0&&(i.mode&1)===0&&(ys=Ee()+500,ha&&nr()))}function Cn(t,i){var o=t.callbackNode;zn(t,i);var l=hi(t,t===Jt?rn:0);if(l===0)o!==null&&re(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&re(o),i===1)t.tag===0?D0(rp.bind(null,t)):Gf(rp.bind(null,t)),b0(function(){(xt&6)===0&&nr()}),o=null;else{switch($d(l)){case 1:o=He;break;case 4:o=tt;break;case 16:o=it;break;case 536870912:o=vt;break;default:o=it}o=fp(o,ip.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ip(t,i){if(ka=-1,za=0,(xt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=hi(t,t===Jt?rn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ba(t,l);else{i=l;var d=xt;xt|=2;var p=op();(Jt!==t||rn!==i)&&(Di=null,ys=Ee()+500,Ir(t,i));do try{ev();break}catch(I){sp(t,I)}while(!0);fc(),Da.current=p,xt=d,Gt!==null?i=0:(Jt=null,rn=0,i=$t)}if(i!==0){if(i===2&&(d=Ti(t),d!==0&&(l=d,i=$c(t,d))),i===1)throw o=wo,Ir(t,0),cr(t,l),Cn(t,Ee()),o;if(i===6)cr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!Q0(d)&&(i=Ba(t,l),i===2&&(p=Ti(t),p!==0&&(l=p,i=$c(t,p))),i===1))throw o=wo,Ir(t,0),cr(t,l),Cn(t,Ee()),o;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,An,Di);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=Xc+500-Ee(),10<i)){if(hi(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=tc(Fr.bind(null,t,An,Di),i);break}Fr(t,An,Di);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var M=31-ot(l);p=1<<M,M=i[M],M>d&&(d=M),l&=~p}if(l=d,l=Ee()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Z0(l/1960))-l,10<l){t.timeoutHandle=tc(Fr.bind(null,t,An,Di),l);break}Fr(t,An,Di);break;case 5:Fr(t,An,Di);break;default:throw Error(n(329))}}}return Cn(t,Ee()),t.callbackNode===o?ip.bind(null,t):null}function $c(t,i){var o=To;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=Ba(t,i),t!==2&&(i=An,An=o,i!==null&&Kc(i)),t}function Kc(t){An===null?An=t:An.push.apply(An,t)}function Q0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var d=o[l],p=d.getSnapshot;d=d.value;try{if(!Jn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~jc,i&=~Ua,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ot(i),l=1<<o;t[o]=-1,i&=~l}}function rp(t){if((xt&6)!==0)throw Error(n(327));Ss();var i=hi(t,0);if((i&1)===0)return Cn(t,Ee()),null;var o=Ba(t,i);if(t.tag!==0&&o===2){var l=Ti(t);l!==0&&(i=l,o=$c(t,l))}if(o===1)throw o=wo,Ir(t,0),cr(t,i),Cn(t,Ee()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,An,Di),Cn(t,Ee()),null}function Zc(t,i){var o=xt;xt|=1;try{return t(i)}finally{xt=o,xt===0&&(ys=Ee()+500,ha&&nr())}}function Ur(t){ar!==null&&ar.tag===0&&(xt&6)===0&&Ss();var i=xt;xt|=1;var o=jn.transition,l=Ct;try{if(jn.transition=null,Ct=1,t)return t()}finally{Ct=l,jn.transition=o,xt=i,(xt&6)===0&&nr()}}function Qc(){In=xs.current,It(xs)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,R0(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(ac(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&da();break;case 3:gs(),It(En),It(an),yc();break;case 5:_c(l);break;case 4:gs();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:hc(l.type._context);break;case 22:case 23:Qc()}o=o.return}if(Jt=t,Gt=t=ur(t.current,null),rn=In=i,$t=0,wo=null,jc=Ua=Dr=0,An=To=null,Pr!==null){for(i=0;i<Pr.length;i++)if(o=Pr[i],l=o.interleaved,l!==null){o.interleaved=null;var d=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,l.next=M}o.pending=l}Pr=null}return t}function sp(t,i){do{var o=Gt;try{if(fc(),Ea.current=Ca,wa){for(var l=kt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}wa=!1}if(Lr=0,Qt=Yt=kt=null,_o=!1,xo=0,Wc.current=null,o===null||o.return===null){$t=1,wo=i,Gt=null;break}e:{var p=t,M=o.return,I=o,z=i;if(i=rn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ne=z,xe=I,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ue=Ph(M);if(Ue!==null){Ue.flags&=-257,Nh(Ue,M,I,p,i),Ue.mode&1&&bh(p,ne,i),i=Ue,z=ne;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(z),i.updateQueue=Ve}else Be.add(z);break e}else{if((i&1)===0){bh(p,ne,i),Jc();break e}z=Error(n(426))}}else if(Ft&&I.mode&1){var Bt=Ph(M);if(Bt!==null){(Bt.flags&65536)===0&&(Bt.flags|=256),Nh(Bt,M,I,p,i),uc(vs(z,I));break e}}p=z=vs(z,I),$t!==4&&($t=2),To===null?To=[p]:To.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=Ch(p,z,i);eh(p,Y);break e;case 1:I=z;var V=p.type,Z=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(or===null||!or.has(Z)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=Rh(p,I,i);eh(p,we);break e}}p=p.return}while(p!==null)}lp(o)}catch(Xe){i=Xe,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function op(){var t=Da.current;return Da.current=Ca,t===null?Ca:t}function Jc(){($t===0||$t===3||$t===2)&&($t=4),Jt===null||(Dr&268435455)===0&&(Ua&268435455)===0||cr(Jt,rn)}function Ba(t,i){var o=xt;xt|=2;var l=op();(Jt!==t||rn!==i)&&(Di=null,Ir(t,i));do try{J0();break}catch(d){sp(t,d)}while(!0);if(fc(),xt=o,Da.current=l,Gt!==null)throw Error(n(261));return Jt=null,rn=0,$t}function J0(){for(;Gt!==null;)ap(Gt)}function ev(){for(;Gt!==null&&!j();)ap(Gt)}function ap(t){var i=dp(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?lp(t):Gt=i,Wc.current=null}function lp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=X0(o,i,In),o!==null){Gt=o;return}}else{if(o=q0(o,i),o!==null){o.flags&=32767,Gt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);$t===0&&($t=5)}function Fr(t,i,o){var l=Ct,d=jn.transition;try{jn.transition=null,Ct=1,tv(t,i,o,l)}finally{jn.transition=d,Ct=l}return null}function tv(t,i,o,l){do Ss();while(ar!==null);if((xt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Yo(t,p),t===Jt&&(Gt=Jt=null,rn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Fa||(Fa=!0,fp(it,function(){return Ss(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=jn.transition,jn.transition=null;var M=Ct;Ct=1;var I=xt;xt|=4,Wc.current=null,$0(t,o),Qh(o,t),S0(Jl),Zo=!!Ql,Jl=Ql=null,t.current=o,K0(o),Ae(),xt=I,Ct=M,jn.transition=p}else t.current=o;if(Fa&&(Fa=!1,ar=t,Oa=d),p=t.pendingLanes,p===0&&(or=null),sn(o.stateNode),Cn(t,Ee()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],l(d.value,{componentStack:d.stack,digest:d.digest});if(Ia)throw Ia=!1,t=qc,qc=null,t;return(Oa&1)!==0&&t.tag!==0&&Ss(),p=t.pendingLanes,(p&1)!==0?t===Yc?Ao++:(Ao=0,Yc=t):Ao=0,nr(),null}function Ss(){if(ar!==null){var t=$d(Oa),i=jn.transition,o=Ct;try{if(jn.transition=null,Ct=16>t?16:t,ar===null)var l=!1;else{if(t=ar,ar=null,Oa=0,(xt&6)!==0)throw Error(n(331));var d=xt;for(xt|=4,Oe=t.current;Oe!==null;){var p=Oe,M=p.child;if((Oe.flags&16)!==0){var I=p.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ne=I[z];for(Oe=ne;Oe!==null;){var xe=Oe;switch(xe.tag){case 0:case 11:case 15:Eo(8,xe,p)}var Se=xe.child;if(Se!==null)Se.return=xe,Oe=Se;else for(;Oe!==null;){xe=Oe;var ve=xe.sibling,Ue=xe.return;if(qh(xe),xe===ne){Oe=null;break}if(ve!==null){ve.return=Ue,Oe=ve;break}Oe=Ue}}}var Be=p.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Bt=Ve.sibling;Ve.sibling=null,Ve=Bt}while(Ve!==null)}}Oe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Oe=M;else e:for(;Oe!==null;){if(p=Oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Eo(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,Oe=Y;break e}Oe=p.return}}var V=t.current;for(Oe=V;Oe!==null;){M=Oe;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Oe=Z;else e:for(M=V;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:La(9,I)}}catch(Xe){zt(I,I.return,Xe)}if(I===M){Oe=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Oe=we;break e}Oe=I.return}}if(xt=d,nr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(wt,t)}catch{}l=!0}return l}finally{Ct=o,jn.transition=i}}return!1}function cp(t,i,o){i=vs(o,i),i=Ch(t,i,1),t=rr(t,i,1),i=vn(),t!==null&&(Mn(t,1,i),Cn(t,i))}function zt(t,i,o){if(t.tag===3)cp(t,t,o);else for(;i!==null;){if(i.tag===3){cp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=vs(o,t),t=Rh(i,t,1),i=rr(i,t,1),t=vn(),i!==null&&(Mn(i,1,t),Cn(i,t));break}}i=i.return}}function nv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,Jt===t&&(rn&o)===o&&($t===4||$t===3&&(rn&130023424)===rn&&500>Ee()-Xc?Ir(t,0):jc|=o),Cn(t,i)}function up(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qn,Qn<<=1,(Qn&130023424)===0&&(Qn=4194304)));var o=vn();t=Pi(t,i),t!==null&&(Mn(t,i,o),Cn(t,o))}function iv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),up(t,o)}function rv(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),up(t,o)}var dp;dp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)Tn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Tn=!1,j0(t,i,o);Tn=(t.flags&131072)!==0}else Tn=!1,Ft&&(i.flags&1048576)!==0&&Wf(i,ma,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Pa(t,i),t=i.pendingProps;var d=cs(i,an.current);ms(i,o),d=Ec(null,i,l,t,d,o);var p=wc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(p=!0,fa(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,gc(i),d.updater=Ra,i.stateNode=d,d._reactInternals=i,Pc(i,l,t,o),i=Uc(null,i,l,!0,p,o)):(i.tag=0,Ft&&p&&oc(i),gn(null,i,d,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Pa(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=ov(l),t=ti(l,t),d){case 0:i=Dc(null,i,l,t,o);break e;case 1:i=Oh(null,i,l,t,o);break e;case 11:i=Lh(null,i,l,t,o);break e;case 14:i=Dh(null,i,l,ti(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ti(l,d),Dc(t,i,l,d,o);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ti(l,d),Oh(t,i,l,d,o);case 3:e:{if(kh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,Jf(t,i),Sa(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=vs(Error(n(423)),i),i=zh(t,i,l,o,d);break e}else if(l!==d){d=vs(Error(n(424)),i),i=zh(t,i,l,o,d);break e}else for(Un=Ji(i.stateNode.containerInfo.firstChild),Dn=i,Ft=!0,ei=null,o=Zf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fs(),l===d){i=Li(t,i,o);break e}gn(t,i,l,o)}i=i.child}return i;case 5:return nh(i),t===null&&cc(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,M=d.children,ec(l,d)?M=null:p!==null&&ec(l,p)&&(i.flags|=32),Fh(t,i),gn(t,i,M,o),i.child;case 6:return t===null&&cc(i),null;case 13:return Bh(t,i,o);case 4:return vc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):gn(t,i,l,o),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ti(l,d),Lh(t,i,l,d,o);case 7:return gn(t,i,i.pendingProps,o),i.child;case 8:return gn(t,i,i.pendingProps.children,o),i.child;case 12:return gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Lt(_a,l._currentValue),l._currentValue=M,p!==null)if(Jn(p.value,M)){if(p.children===d.children&&!En.current){i=Li(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){M=p.child;for(var z=I.firstContext;z!==null;){if(z.context===l){if(p.tag===1){z=Ni(-1,o&-o),z.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var xe=ne.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),ne.pending=z}}p.lanes|=o,z=p.alternate,z!==null&&(z.lanes|=o),pc(p.return,o,i),I.lanes|=o;break}z=z.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,I=M.alternate,I!==null&&(I.lanes|=o),pc(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}gn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,ms(i,o),d=Gn(d),l=l(d),i.flags|=1,gn(t,i,l,o),i.child;case 14:return l=i.type,d=ti(l,i.pendingProps),d=ti(l.type,d),Dh(t,i,l,d,o);case 15:return Uh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ti(l,d),Pa(t,i),i.tag=1,wn(l)?(t=!0,fa(i)):t=!1,ms(i,o),Th(i,l,d),Pc(i,l,d,o),Uc(null,i,l,!0,t,o);case 19:return Vh(t,i,o);case 22:return Ih(t,i,o)}throw Error(n(156,i.tag))};function fp(t,i){return ie(t,i)}function sv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,o,l){return new sv(t,i,o,l)}function eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ov(t){if(typeof t=="function")return eu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ce)return 11;if(t===le)return 14}return 2}function ur(t,i){var o=t.alternate;return o===null?(o=Xn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ha(t,i,o,l,d,p){var M=2;if(l=t,typeof t=="function")eu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case O:return Or(o.children,d,p,i);case H:M=8,d|=8;break;case b:return t=Xn(12,o,i,d|2),t.elementType=b,t.lanes=p,t;case Q:return t=Xn(13,o,i,d),t.elementType=Q,t.lanes=p,t;case fe:return t=Xn(19,o,i,d),t.elementType=fe,t.lanes=p,t;case oe:return Va(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case B:M=9;break e;case ce:M=11;break e;case le:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(M,o,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Or(t,i,o,l){return t=Xn(7,t,l,i),t.lanes=o,t}function Va(t,i,o,l){return t=Xn(22,t,l,i),t.elementType=oe,t.lanes=o,t.stateNode={isHidden:!1},t}function tu(t,i,o){return t=Xn(6,t,null,i),t.lanes=o,t}function nu(t,i,o){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function av(t,i,o,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bn(0),this.expirationTimes=Bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function iu(t,i,o,l,d,p,M,I,z){return t=new av(t,i,o,I,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Xn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(p),t}function lv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function hp(t){if(!t)return tr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(wn(o))return Hf(t,o,i)}return i}function pp(t,i,o,l,d,p,M,I,z){return t=iu(o,l,!0,t,d,p,M,I,z),t.context=hp(null),o=t.current,l=vn(),d=lr(o),p=Ni(l,d),p.callback=i??null,rr(o,p,d),t.current.lanes=d,Mn(t,d,l),Cn(t,l),t}function Ga(t,i,o,l){var d=i.current,p=vn(),M=lr(d);return o=hp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ni(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(d,i,M),t!==null&&(ri(t,d,M,p),ya(t,d,M)),M}function Wa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function ru(t,i){mp(t,i),(t=t.alternate)&&mp(t,i)}function cv(){return null}var gp=typeof reportError=="function"?reportError:function(t){console.error(t)};function su(t){this._internalRoot=t}ja.prototype.render=su.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ga(t,i,null,null)},ja.prototype.unmount=su.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){Ga(null,t,null,null)}),i[Ai]=null}};function ja(t){this._internalRoot=t}ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=Qd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,t),o===0&&tf(t)}};function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function uv(t,i,o,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var ne=Wa(M);p.call(ne)}}var M=pp(i,l,t,0,null,!1,!1,"",vp);return t._reactRootContainer=M,t[Ai]=M.current,co(t.nodeType===8?t.parentNode:t),Ur(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var I=l;l=function(){var ne=Wa(z);I.call(ne)}}var z=iu(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=z,t[Ai]=z.current,co(t.nodeType===8?t.parentNode:t),Ur(function(){Ga(i,z,o,l)}),z}function qa(t,i,o,l,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var I=d;d=function(){var z=Wa(M);I.call(z)}}Ga(i,M,t,d)}else M=uv(o,i,t,d,l);return Wa(M)}Kd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=qt(i.pendingLanes);o!==0&&(Pl(i,o|1),Cn(i,Ee()),(xt&6)===0&&(ys=Ee()+500,nr()))}break;case 13:Ur(function(){var l=Pi(t,1);if(l!==null){var d=vn();ri(l,t,1,d)}}),ru(t,1)}},Nl=function(t){if(t.tag===13){var i=Pi(t,134217728);if(i!==null){var o=vn();ri(i,t,134217728,o)}ru(t,134217728)}},Zd=function(t){if(t.tag===13){var i=lr(t),o=Pi(t,i);if(o!==null){var l=vn();ri(o,t,i,l)}ru(t,i)}},Qd=function(){return Ct},Jd=function(t,i){var o=Ct;try{return Ct=t,i()}finally{Ct=o}},Pe=function(t,i,o){switch(i){case"input":if(dt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var d=ua(l);if(!d)throw Error(n(90));ut(l),dt(l,d)}}}break;case"textarea":me(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},Dt=Zc,Xt=Ur;var dv={usingClientEntryPoint:!1,Events:[ho,as,ua,Le,st,Zc]},Co={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fv={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{wt=Ya.inject(fv),mt=Ya}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dv,Rn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(i))throw Error(n(200));return lv(t,i,null,o)},Rn.createRoot=function(t,i){if(!ou(t))throw Error(n(299));var o=!1,l="",d=gp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=iu(t,1,!1,null,null,o,!1,l,d),t[Ai]=i.current,co(t.nodeType===8?t.parentNode:t),new su(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=A(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Ur(t)},Rn.hydrate=function(t,i,o){if(!Xa(i))throw Error(n(200));return qa(null,t,i,!0,o)},Rn.hydrateRoot=function(t,i,o){if(!ou(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,d=!1,p="",M=gp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=pp(i,null,t,1,o??null,d,!1,p,M),t[Ai]=i.current,co(t),l)for(t=0;t<l.length;t++)o=l[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ja(i)},Rn.render=function(t,i,o){if(!Xa(i))throw Error(n(200));return qa(null,t,i,!1,o)},Rn.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){qa(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1},Rn.unstable_batchedUpdates=Zc,Rn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Xa(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return qa(t,i,o,!1,l)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var Tp;function Sv(){if(Tp)return cu.exports;Tp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),cu.exports=yv(),cu.exports}var Ap;function Mv(){if(Ap)return $a;Ap=1;var s=Sv();return $a.createRoot=s.createRoot,$a.hydrateRoot=s.hydrateRoot,$a}var Ev=Mv();const wv=Rm(Ev);function Cp(s=2048,e=1024){const n=document.createElement("canvas");n.width=s,n.height=e;const r=n.getContext("2d");if(!r)return"";const a=e/2,c=r.createLinearGradient(0,0,0,a);c.addColorStop(0,"#0b1d3a"),c.addColorStop(.5,"#1e4877"),c.addColorStop(.85,"#e0844f"),c.addColorStop(1,"#ffc371"),r.fillStyle=c,r.fillRect(0,0,s,a),r.fillStyle="#ffffff";for(let h=0;h<150;h++){const m=Math.random()*s,g=Math.random()*(a*.4),_=Math.random()*1.5;r.beginPath(),r.arc(m,g,_,0,Math.PI*2),r.fill()}r.fillStyle="#2c1e3d",r.beginPath(),r.moveTo(0,a);for(let h=0;h<=s;h+=30){const m=a-25-Math.sin(h*.015)*20-Math.cos(h*.035)*15;r.lineTo(h,m)}r.lineTo(s,a),r.closePath(),r.fill();const u=r.createLinearGradient(0,a,0,e);u.addColorStop(0,"#1a2a1f"),u.addColorStop(.3,"#142017"),u.addColorStop(.7,"#0d1510"),u.addColorStop(1,"#080d0a"),r.fillStyle=u,r.fillRect(0,a,s,a),r.strokeStyle="rgba(0, 210, 106, 0.15)",r.lineWidth=1;for(let h=1;h<=12;h++){const m=a+a*(h/13)**1.8;r.beginPath(),r.moveTo(0,m),r.lineTo(s,m),r.stroke()}for(let h=0;h<s;h+=s/24)r.beginPath(),r.moveTo(h,a),r.lineTo(h,e),r.stroke();r.strokeStyle="#00d26a",r.lineWidth=2,r.setLineDash([8,8]),r.beginPath(),r.moveTo(0,a),r.lineTo(s,a),r.stroke(),r.setLineDash([]);const f=[{label:"NORTE (0°)",x:s*.5,color:"#00d26a"},{label:"ESTE (90°)",x:s*.75,color:"#38bdf8"},{label:"SUR (180°)",x:s,color:"#f43f5e"},{label:"SUR (180°)",x:0,color:"#f43f5e"},{label:"OESTE (-90°)",x:s*.25,color:"#fbbf24"}];r.font="bold 24px monospace",r.textAlign="center",r.textBaseline="middle";for(const h of f)r.fillStyle=h.color,r.fillRect(h.x-70,a-60,140,36),r.fillStyle="#0d0f12",r.fillText(h.label,h.x,a-42),r.strokeStyle=h.color,r.lineWidth=2,r.beginPath(),r.moveTo(h.x,a-24),r.lineTo(h.x,a+20),r.stroke();r.fillStyle="#111111",r.beginPath(),r.arc(s/2,e-20,50,0,Math.PI*2),r.fill(),r.strokeStyle="#ff4d4f",r.lineWidth=3,r.stroke(),r.strokeStyle="#666666",r.lineWidth=4;for(let h=0;h<Math.PI*2;h+=Math.PI*2/3)r.beginPath(),r.moveTo(s/2,e-20),r.lineTo(s/2+Math.cos(h)*90,e-20+Math.sin(h)*40),r.stroke();return r.fillStyle="#ff4d4f",r.font="bold 14px sans-serif",r.fillText("TRÍPODE INSTA360 (NADIR)",s/2,e-75),n.toDataURL("image/jpeg",.95)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dd="170",Tv=0,Rp=1,Av=2,bm=1,Cv=2,zi=3,Sr=0,xn=1,Bi=2,xr=0,Os=1,bp=2,Pp=3,Np=4,Rv=5,qr=100,bv=101,Pv=102,Nv=103,Lv=104,Dv=200,Uv=201,Iv=202,Fv=203,Gu=204,Wu=205,Ov=206,kv=207,zv=208,Bv=209,Hv=210,Vv=211,Gv=212,Wv=213,jv=214,ju=0,Xu=1,qu=2,Bs=3,Yu=4,$u=5,Ku=6,Zu=7,Pm=0,Xv=1,qv=2,yr=0,Yv=1,$v=2,Kv=3,Zv=4,Qv=5,Jv=6,e_=7,Nm=300,Hs=301,Vs=302,Qu=303,Ju=304,Tl=306,ed=1e3,$r=1001,td=1002,ui=1003,t_=1004,Ka=1005,xi=1006,fu=1007,Kr=1008,Wi=1009,Lm=1010,Dm=1011,Fo=1012,Ud=1013,Zr=1014,Hi=1015,zo=1016,Id=1017,Fd=1018,Gs=1020,Um=35902,Im=1021,Fm=1022,ci=1023,Om=1024,km=1025,ks=1026,Ws=1027,zm=1028,Od=1029,Bm=1030,kd=1031,zd=1033,_l=33776,xl=33777,yl=33778,Sl=33779,nd=35840,id=35841,rd=35842,sd=35843,od=36196,ad=37492,ld=37496,cd=37808,ud=37809,dd=37810,fd=37811,hd=37812,pd=37813,md=37814,gd=37815,vd=37816,_d=37817,xd=37818,yd=37819,Sd=37820,Md=37821,Ml=36492,Ed=36494,wd=36495,Hm=36283,Td=36284,Ad=36285,Cd=36286,n_=3200,i_=3201,r_=0,s_=1,_r="",Yn="srgb",Xs="srgb-linear",Al="linear",bt="srgb",Ms=7680,Lp=519,o_=512,a_=513,l_=514,Vm=515,c_=516,u_=517,d_=518,f_=519,Dp=35044,Up="300 es",Vi=2e3,wl=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hu=Math.PI/180,Rd=180/Math.PI;function Bo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function Nn(s,e,n){return Math.max(e,Math.min(n,s))}function h_(s,e){return(s%e+e)%e}function pu(s,e,n){return(1-n)*s+n*e}function bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(e=0,n=0){Nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,a,c,u,f,h,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,f,h,m)}set(e,n,r,a,c,u,f,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=n,g[4]=c,g[5]=h,g[6]=r,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],g=r[4],_=r[7],x=r[2],S=r[5],E=r[8],T=a[0],y=a[3],v=a[6],D=a[1],N=a[4],R=a[7],q=a[2],k=a[5],O=a[8];return c[0]=u*T+f*D+h*q,c[3]=u*y+f*N+h*k,c[6]=u*v+f*R+h*O,c[1]=m*T+g*D+_*q,c[4]=m*y+g*N+_*k,c[7]=m*v+g*R+_*O,c[2]=x*T+S*D+E*q,c[5]=x*y+S*N+E*k,c[8]=x*v+S*R+E*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return n*u*g-n*f*m-r*c*g+r*f*h+a*c*m-a*u*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],_=g*u-f*m,x=f*h-g*c,S=m*c-u*h,E=n*_+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(a*m-g*r)*T,e[2]=(f*r-a*u)*T,e[3]=x*T,e[4]=(g*n-a*h)*T,e[5]=(a*c-f*n)*T,e[6]=S*T,e[7]=(r*h-m*n)*T,e[8]=(u*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-a*m,a*h,-a*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(mu.makeScale(e,n)),this}rotate(e){return this.premultiply(mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mu=new at;function Gm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Oo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function p_(){const s=Oo("canvas");return s.style.display="block",s}const Ip={};function Uo(s){s in Ip||(Ip[s]=!0,console.warn(s))}function m_(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function g_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function v_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===bt&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===bt&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_r?Al:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Fp=[.64,.33,.3,.6,.15,.06],Op=[.2126,.7152,.0722],kp=[.3127,.329],zp=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bp=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[Xs]:{primaries:Fp,whitePoint:kp,transfer:Al,toXYZ:zp,fromXYZ:Bp,luminanceCoefficients:Op,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:Fp,whitePoint:kp,transfer:bt,toXYZ:zp,fromXYZ:Bp,luminanceCoefficients:Op,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}});let Es;class __{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Oo("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=Gi(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let x_=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?c.push(gu(a[u].image)):c.push(gu(a[u]))}else c=gu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function gu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?__.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let y_=0;class yn extends qs{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,r=$r,a=$r,c=xi,u=Kr,f=ci,h=Wi,m=yn.DEFAULT_ANISOTROPY,g=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Bo(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Nm;yn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const h=e.elements,m=h[0],g=h[4],_=h[8],x=h[1],S=h[5],E=h[9],T=h[2],y=h[6],v=h[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,R=(S+1)/2,q=(v+1)/2,k=(g+x)/4,O=(_+T)/4,H=(E+y)/4;return N>R&&N>q?N<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(N),a=k/r,c=O/r):R>q?R<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(R),r=k/a,c=H/a):q<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(q),r=O/c,a=H/c),this.set(r,a,c,n),this}let D=Math.sqrt((y-E)*(y-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(_-T)/D,this.z=(x-g)/D,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class S_ extends qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new yn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends S_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class jm extends yn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class M_ extends yn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,f){let h=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];const x=c[u+0],S=c[u+1],E=c[u+2],T=c[u+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=T;return}if(_!==T||h!==x||m!==S||g!==E){let y=1-f;const v=h*x+m*S+g*E+_*T,D=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const q=Math.sqrt(N),k=Math.atan2(q,v*D);y=Math.sin(y*k)/q,f=Math.sin(f*k)/q}const R=f*D;if(h=h*y+x*R,m=m*y+S*R,g=g*y+E*R,_=_*y+T*R,y===1-f){const q=1/Math.sqrt(h*h+m*m+g*g+_*_);h*=q,m*=q,g*=q,_*=q}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,c,u){const f=r[a],h=r[a+1],m=r[a+2],g=r[a+3],_=c[u],x=c[u+1],S=c[u+2],E=c[u+3];return e[n]=f*E+g*_+h*S-m*x,e[n+1]=h*E+g*x+m*_-f*S,e[n+2]=m*E+g*S+f*x-h*_,e[n+3]=g*E-f*_-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),g=f(a/2),_=f(c/2),x=h(r/2),S=h(a/2),E=h(c/2);switch(u){case"XYZ":this._x=x*g*_+m*S*E,this._y=m*S*_-x*g*E,this._z=m*g*E+x*S*_,this._w=m*g*_-x*S*E;break;case"YXZ":this._x=x*g*_+m*S*E,this._y=m*S*_-x*g*E,this._z=m*g*E-x*S*_,this._w=m*g*_+x*S*E;break;case"ZXY":this._x=x*g*_-m*S*E,this._y=m*S*_+x*g*E,this._z=m*g*E+x*S*_,this._w=m*g*_-x*S*E;break;case"ZYX":this._x=x*g*_-m*S*E,this._y=m*S*_+x*g*E,this._z=m*g*E-x*S*_,this._w=m*g*_+x*S*E;break;case"YZX":this._x=x*g*_+m*S*E,this._y=m*S*_+x*g*E,this._z=m*g*E-x*S*_,this._w=m*g*_-x*S*E;break;case"XZY":this._x=x*g*_-m*S*E,this._y=m*S*_-x*g*E,this._z=m*g*E+x*S*_,this._w=m*g*_+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],f=n[5],h=n[9],m=n[2],g=n[6],_=n[10],x=r+f+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(c-m)*S,this._z=(u-a)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(c+m)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(c-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-a)/S,this._x=(c+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,f=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+u*f+a*m-c*h,this._y=a*g+u*h+c*f-r*m,this._z=c*g+u*m+r*h-a*f,this._w=u*g-r*f-a*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=a,this._z=c,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),_=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=u*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,n=0,r=0){ae.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*a-f*r),g=2*(f*n-c*a),_=2*(c*r-u*n);return this.x=n+h*m+u*_-f*g,this.y=r+h*g+f*m-c*_,this.z=a+h*_+c*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,f=n.y,h=n.z;return this.x=a*h-c*f,this.y=c*u-r*h,this.z=r*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vu=new ae,Hp=new Ho;class Vo{constructor(e=new ae(1/0,1/0,1/0),n=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,si):si.fromBufferAttribute(c,u),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Za.copy(r.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Qa.subVectors(this.max,Po),ws.subVectors(e.a,Po),Ts.subVectors(e.b,Po),As.subVectors(e.c,Po),fr.subVectors(Ts,ws),hr.subVectors(As,Ts),kr.subVectors(ws,As);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-kr.z,kr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,kr.z,0,-kr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-kr.y,kr.x,0];return!_u(n,ws,Ts,As,Qa)||(n=[1,0,0,0,1,0,0,0,1],!_u(n,ws,Ts,As,Qa))?!1:(Ja.crossVectors(fr,hr),n=[Ja.x,Ja.y,Ja.z],_u(n,ws,Ts,As,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],si=new ae,Za=new Vo,ws=new ae,Ts=new ae,As=new ae,fr=new ae,hr=new ae,kr=new ae,Po=new ae,Qa=new ae,Ja=new ae,zr=new ae;function _u(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){zr.fromArray(s,c);const f=a.x*Math.abs(zr.x)+a.y*Math.abs(zr.y)+a.z*Math.abs(zr.z),h=e.dot(zr),m=n.dot(zr),g=r.dot(zr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const E_=new Vo,No=new ae,xu=new ae;class Bd{constructor(e=new ae,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):E_.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(No,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(xu)),this.expandByPoint(No.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new ae,yu=new ae,el=new ae,pr=new ae,Su=new ae,tl=new ae,Mu=new ae;class w_{constructor(e=new ae,n=new ae(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){yu.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(yu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(el),f=pr.dot(this.direction),h=-pr.dot(el),m=pr.lengthSq(),g=Math.abs(1-u*u);let _,x,S,E;if(g>0)if(_=u*h-f,x=u*f-h,E=c*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,S=_*(_+u*x+2*f)+x*(u*_+x+2*h)+m}else x=c,_=Math.max(0,-(u*x+f)),S=-_*_+x*(x+2*h)+m;else x=-c,_=Math.max(0,-(u*x+f)),S=-_*_+x*(x+2*h)+m;else x<=-E?(_=Math.max(0,-(-u*c+f)),x=_>0?-c:Math.min(Math.max(-c,-h),c),S=-_*_+x*(x+2*h)+m):x<=E?(_=0,x=Math.min(Math.max(-c,-h),c),S=x*(x+2*h)+m):(_=Math.max(0,-(u*c+f)),x=_>0?c:Math.min(Math.max(-c,-h),c),S=-_*_+x*(x+2*h)+m);else x=u>0?-c:c,_=Math.max(0,-(u*x+f)),S=-_*_+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(yu).addScaledVector(el,x),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,f,h;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),_>=0?(f=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,c){Su.subVectors(n,e),tl.subVectors(r,e),Mu.crossVectors(Su,tl);let u=this.direction.dot(Mu),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(tl.crossVectors(pr,tl));if(h<0)return null;const m=f*this.direction.dot(Su.cross(pr));if(m<0||h+m>u)return null;const g=-f*pr.dot(Mu);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,a,c,u,f,h,m,g,_,x,S,E,T,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,f,h,m,g,_,x,S,E,T,y)}set(e,n,r,a,c,u,f,h,m,g,_,x,S,E,T,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=c,v[5]=u,v[9]=f,v[13]=h,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=E,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Cs.setFromMatrixColumn(e,0).length(),c=1/Cs.setFromMatrixColumn(e,1).length(),u=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=u*g,S=u*_,E=f*g,T=f*_;n[0]=h*g,n[4]=-h*_,n[8]=m,n[1]=S+E*m,n[5]=x-T*m,n[9]=-f*h,n[2]=T-x*m,n[6]=E+S*m,n[10]=u*h}else if(e.order==="YXZ"){const x=h*g,S=h*_,E=m*g,T=m*_;n[0]=x+T*f,n[4]=E*f-S,n[8]=u*m,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=S*f-E,n[6]=T+x*f,n[10]=u*h}else if(e.order==="ZXY"){const x=h*g,S=h*_,E=m*g,T=m*_;n[0]=x-T*f,n[4]=-u*_,n[8]=E+S*f,n[1]=S+E*f,n[5]=u*g,n[9]=T-x*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const x=u*g,S=u*_,E=f*g,T=f*_;n[0]=h*g,n[4]=E*m-S,n[8]=x*m+T,n[1]=h*_,n[5]=T*m+x,n[9]=S*m-E,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const x=u*h,S=u*m,E=f*h,T=f*m;n[0]=h*g,n[4]=T-x*_,n[8]=E*_+S,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-m*g,n[6]=S*_+E,n[10]=x-T*_}else if(e.order==="XZY"){const x=u*h,S=u*m,E=f*h,T=f*m;n[0]=h*g,n[4]=-_,n[8]=m*g,n[1]=x*_+T,n[5]=u*g,n[9]=S*_-E,n[2]=E*_-S,n[6]=f*g,n[10]=T*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T_,e,A_)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),mr.crossVectors(r,Fn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),mr.crossVectors(r,Fn)),mr.normalize(),nl.crossVectors(Fn,mr),a[0]=mr.x,a[4]=nl.x,a[8]=Fn.x,a[1]=mr.y,a[5]=nl.y,a[9]=Fn.y,a[2]=mr.z,a[6]=nl.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],g=r[1],_=r[5],x=r[9],S=r[13],E=r[2],T=r[6],y=r[10],v=r[14],D=r[3],N=r[7],R=r[11],q=r[15],k=a[0],O=a[4],H=a[8],b=a[12],C=a[1],B=a[5],ce=a[9],Q=a[13],fe=a[2],le=a[6],se=a[10],oe=a[14],F=a[3],te=a[7],ee=a[11],U=a[15];return c[0]=u*k+f*C+h*fe+m*F,c[4]=u*O+f*B+h*le+m*te,c[8]=u*H+f*ce+h*se+m*ee,c[12]=u*b+f*Q+h*oe+m*U,c[1]=g*k+_*C+x*fe+S*F,c[5]=g*O+_*B+x*le+S*te,c[9]=g*H+_*ce+x*se+S*ee,c[13]=g*b+_*Q+x*oe+S*U,c[2]=E*k+T*C+y*fe+v*F,c[6]=E*O+T*B+y*le+v*te,c[10]=E*H+T*ce+y*se+v*ee,c[14]=E*b+T*Q+y*oe+v*U,c[3]=D*k+N*C+R*fe+q*F,c[7]=D*O+N*B+R*le+q*te,c[11]=D*H+N*ce+R*se+q*ee,c[15]=D*b+N*Q+R*oe+q*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],f=e[5],h=e[9],m=e[13],g=e[2],_=e[6],x=e[10],S=e[14],E=e[3],T=e[7],y=e[11],v=e[15];return E*(+c*h*_-a*m*_-c*f*x+r*m*x+a*f*S-r*h*S)+T*(+n*h*S-n*m*x+c*u*x-a*u*S+a*m*g-c*h*g)+y*(+n*m*_-n*f*S-c*u*_+r*u*S+c*f*g-r*m*g)+v*(-a*f*g-n*h*_+n*f*x+a*u*_-r*u*x+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],_=e[9],x=e[10],S=e[11],E=e[12],T=e[13],y=e[14],v=e[15],D=_*y*m-T*x*m+T*h*S-f*y*S-_*h*v+f*x*v,N=E*x*m-g*y*m-E*h*S+u*y*S+g*h*v-u*x*v,R=g*T*m-E*_*m+E*f*S-u*T*S-g*f*v+u*_*v,q=E*_*h-g*T*h-E*f*x+u*T*x+g*f*y-u*_*y,k=n*D+r*N+a*R+c*q;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return e[0]=D*O,e[1]=(T*x*c-_*y*c-T*a*S+r*y*S+_*a*v-r*x*v)*O,e[2]=(f*y*c-T*h*c+T*a*m-r*y*m-f*a*v+r*h*v)*O,e[3]=(_*h*c-f*x*c-_*a*m+r*x*m+f*a*S-r*h*S)*O,e[4]=N*O,e[5]=(g*y*c-E*x*c+E*a*S-n*y*S-g*a*v+n*x*v)*O,e[6]=(E*h*c-u*y*c-E*a*m+n*y*m+u*a*v-n*h*v)*O,e[7]=(u*x*c-g*h*c+g*a*m-n*x*m-u*a*S+n*h*S)*O,e[8]=R*O,e[9]=(E*_*c-g*T*c-E*r*S+n*T*S+g*r*v-n*_*v)*O,e[10]=(u*T*c-E*f*c+E*r*m-n*T*m-u*r*v+n*f*v)*O,e[11]=(g*f*c-u*_*c-g*r*m+n*_*m+u*r*S-n*f*S)*O,e[12]=q*O,e[13]=(g*T*a-E*_*a+E*r*x-n*T*x-g*r*y+n*_*y)*O,e[14]=(E*f*a-u*T*a-E*r*h+n*T*h+u*r*y-n*f*y)*O,e[15]=(u*_*a-g*f*a+g*r*h-n*_*h-u*r*x+n*f*x)*O,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,f=e.y,h=e.z,m=c*u,g=c*f;return this.set(m*u+r,m*f-a*h,m*h+a*f,0,m*f+a*h,g*f+r,g*h-a*u,0,m*h-a*f,g*h+a*u,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,f=n._z,h=n._w,m=c+c,g=u+u,_=f+f,x=c*m,S=c*g,E=c*_,T=u*g,y=u*_,v=f*_,D=h*m,N=h*g,R=h*_,q=r.x,k=r.y,O=r.z;return a[0]=(1-(T+v))*q,a[1]=(S+R)*q,a[2]=(E-N)*q,a[3]=0,a[4]=(S-R)*k,a[5]=(1-(x+v))*k,a[6]=(y+D)*k,a[7]=0,a[8]=(E+N)*O,a[9]=(y-D)*O,a[10]=(1-(x+T))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Cs.set(a[0],a[1],a[2]).length();const u=Cs.set(a[4],a[5],a[6]).length(),f=Cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const m=1/c,g=1/u,_=1/f;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=g,oi.elements[5]*=g,oi.elements[6]*=g,oi.elements[8]*=_,oi.elements[9]*=_,oi.elements[10]*=_,n.setFromRotationMatrix(oi),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,a,c,u,f=Vi){const h=this.elements,m=2*c/(n-e),g=2*c/(r-a),_=(n+e)/(n-e),x=(r+a)/(r-a);let S,E;if(f===Vi)S=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(f===wl)S=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,c,u,f=Vi){const h=this.elements,m=1/(n-e),g=1/(r-a),_=1/(u-c),x=(n+e)*m,S=(r+a)*g;let E,T;if(f===Vi)E=(u+c)*_,T=-2*_;else if(f===wl)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new ae,oi=new Vt,T_=new ae(0,0,0),A_=new ae(1,1,1),mr=new ae,nl=new ae,Fn=new ae,Vp=new Vt,Gp=new Ho;class Mi{constructor(e=0,n=0,r=0,a=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],f=a[8],h=a[1],m=a[5],g=a[9],_=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Nn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Xm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C_=0;const Wp=new ae,Rs=new Ho,Fi=new Vt,il=new ae,Lo=new ae,R_=new ae,b_=new Ho,jp=new ae(1,0,0),Xp=new ae(0,1,0),qp=new ae(0,0,1),Yp={type:"added"},P_={type:"removed"},bs={type:"childadded",child:null},Eu={type:"childremoved",child:null};class kn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ae,n=new Mi,r=new Ho,a=new ae(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new at}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(jp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,n){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?il.copy(e):il.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Lo,il,this.up):Fi.lookAt(il,Lo,this.up),this.quaternion.setFromRotationMatrix(Fi),a&&(Fi.extractRotation(a.matrixWorld),Rs.setFromRotationMatrix(Fi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(P_),Eu.child=e,this.dispatchEvent(Eu),Eu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,R_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,b_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const _=h[m];c(e.shapes,_)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(c(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),g=u(e.images),_=u(e.shapes),x=u(e.skeletons),S=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}kn.DEFAULT_UP=new ae(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new ae,Oi=new ae,wu=new ae,ki=new ae,Ps=new ae,Ns=new ae,$p=new ae,Tu=new ae,Au=new ae,Cu=new ae,Ru=new Ht,bu=new Ht,Pu=new Ht;class li{constructor(e=new ae,n=new ae,r=new ae){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ai.subVectors(a,n),Oi.subVectors(r,n),wu.subVectors(e,n);const u=ai.dot(ai),f=ai.dot(Oi),h=ai.dot(wu),m=Oi.dot(Oi),g=Oi.dot(wu),_=u*m-f*f;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(m*h-f*g)*x,E=(u*g-f*h)*x;return c.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,r,a,c,u,f,h){return this.getBarycoord(e,n,r,a,ki)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,ki.x),h.addScaledVector(u,ki.y),h.addScaledVector(f,ki.z),h)}static getInterpolatedAttribute(e,n,r,a,c,u){return Ru.setScalar(0),bu.setScalar(0),Pu.setScalar(0),Ru.fromBufferAttribute(e,n),bu.fromBufferAttribute(e,r),Pu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ru,c.x),u.addScaledVector(bu,c.y),u.addScaledVector(Pu,c.z),u}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Oi.subVectors(e,n),ai.cross(Oi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ai.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return li.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,f;Ps.subVectors(a,r),Ns.subVectors(c,r),Tu.subVectors(e,r);const h=Ps.dot(Tu),m=Ns.dot(Tu);if(h<=0&&m<=0)return n.copy(r);Au.subVectors(e,a);const g=Ps.dot(Au),_=Ns.dot(Au);if(g>=0&&_<=g)return n.copy(a);const x=h*_-g*m;if(x<=0&&h>=0&&g<=0)return u=h/(h-g),n.copy(r).addScaledVector(Ps,u);Cu.subVectors(e,c);const S=Ps.dot(Cu),E=Ns.dot(Cu);if(E>=0&&S<=E)return n.copy(c);const T=S*m-h*E;if(T<=0&&m>=0&&E<=0)return f=m/(m-E),n.copy(r).addScaledVector(Ns,f);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return $p.subVectors(c,a),f=(_-g)/(_-g+(S-E)),n.copy(a).addScaledVector($p,f);const v=1/(y+T+x);return u=T*v,f=x*v,n.copy(r).addScaledVector(Ps,u).addScaledVector(Ns,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Nu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class St{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=yt.workingColorSpace){return this.r=e,this.g=n,this.b=r,yt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=yt.workingColorSpace){if(e=h_(e,1),n=Nn(n,0,1),r=Nn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Nu(u,c,e+1/3),this.g=Nu(u,c,e),this.b=Nu(u,c,e-1/3)}return yt.toWorkingColorSpace(this,a),this}setStyle(e,n=Yn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const r=qm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return yt.fromWorkingColorSpace(fn.copy(this),e),Math.round(Nn(fn.r*255,0,255))*65536+Math.round(Nn(fn.g*255,0,255))*256+Math.round(Nn(fn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yt.workingColorSpace){yt.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,a=fn.g,c=fn.b,u=Math.max(r,a,c),f=Math.min(r,a,c);let h,m;const g=(f+u)/2;if(f===u)h=0,m=0;else{const _=u-f;switch(m=g<=.5?_/(u+f):_/(2-u-f),u){case r:h=(a-c)/_+(a<c?6:0);break;case a:h=(c-r)/_+2;break;case c:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=yt.workingColorSpace){return yt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Yn){yt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,a=fn.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(rl);const r=pu(gr.h,rl.h,n),a=pu(gr.s,rl.s,n),c=pu(gr.l,rl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new St;St.NAMES=qm;let N_=0;class Cl extends qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Bo(),this.name="",this.blending=Os,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gu&&(r.blendSrc=this.blendSrc),this.blendDst!==Wu&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const f in c){const h=c[f];delete h.metadata,u.push(h)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ym extends Cl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ae,sl=new Nt;class yi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Dp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),a=bn(a,this.array),c=bn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}}class $m extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Km extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Si extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let L_=0;const qn=new Vt,Lu=new kn,Ls=new ae,On=new Vo,Do=new Vo,tn=new ae;class Er extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?Km:$m)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new at().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Si(r,3))}else{for(let r=0,a=n.count;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];On.setFromBufferAttribute(c),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Do.setFromBufferAttribute(f),this.morphTargetsRelative?(tn.addVectors(On.min,Do.min),On.expandByPoint(tn),tn.addVectors(On.max,Do.max),On.expandByPoint(tn)):(On.expandByPoint(Do.min),On.expandByPoint(Do.max))}On.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)tn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(tn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)tn.fromBufferAttribute(f,m),h&&(Ls.fromBufferAttribute(e,m),tn.add(Ls)),a=Math.max(a,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let H=0;H<r.count;H++)f[H]=new ae,h[H]=new ae;const m=new ae,g=new ae,_=new ae,x=new Nt,S=new Nt,E=new Nt,T=new ae,y=new ae;function v(H,b,C){m.fromBufferAttribute(r,H),g.fromBufferAttribute(r,b),_.fromBufferAttribute(r,C),x.fromBufferAttribute(c,H),S.fromBufferAttribute(c,b),E.fromBufferAttribute(c,C),g.sub(m),_.sub(m),S.sub(x),E.sub(x);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(B),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(B),f[H].add(T),f[b].add(T),f[C].add(T),h[H].add(y),h[b].add(y),h[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let H=0,b=D.length;H<b;++H){const C=D[H],B=C.start,ce=C.count;for(let Q=B,fe=B+ce;Q<fe;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const N=new ae,R=new ae,q=new ae,k=new ae;function O(H){q.fromBufferAttribute(a,H),k.copy(q);const b=f[H];N.copy(b),N.sub(q.multiplyScalar(q.dot(b))).normalize(),R.crossVectors(k,b);const B=R.dot(h[H])<0?-1:1;u.setXYZW(H,N.x,N.y,N.z,B)}for(let H=0,b=D.length;H<b;++H){const C=D[H],B=C.start,ce=C.count;for(let Q=B,fe=B+ce;Q<fe;Q+=3)O(e.getX(Q+0)),O(e.getX(Q+1)),O(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new ae,c=new ae,u=new ae,f=new ae,h=new ae,m=new ae,g=new ae,_=new ae;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),g.subVectors(u,c),_.subVectors(a,c),g.cross(_),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),f.add(g),h.add(g),m.add(g),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),g.subVectors(u,c),_.subVectors(a,c),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,_=f.normalized,x=new m.constructor(h.length*g);let S=0,E=0;for(let T=0,y=h.length;T<y;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*g;for(let v=0;v<g;v++)x[E++]=m[S++]}return new yi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Er,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let g=0,_=m.length;g<_;g++){const x=m[g],S=e(x,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let _=0,x=m.length;_<x;_++){const S=m[_];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const c=e.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const _=u[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new Vt,Br=new w_,ol=new Bd,Zp=new ae,al=new ae,ll=new ae,cl=new ae,Du=new ae,ul=new ae,Qp=new ae,dl=new ae;class Kn extends kn{constructor(e=new Er,n=new Ym){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){ul.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const g=f[h],_=c[h];g!==0&&(Du.fromBufferAttribute(_,e),u?ul.addScaledVector(Du,g):ul.addScaledVector(Du.sub(n),g))}n.add(ul)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ol.copy(r.boundingSphere),ol.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(ol.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ol,Zp)===null||Br.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Kp.copy(c).invert(),Br.copy(e.ray).applyMatrix4(Kp),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const y=x[E],v=u[y.materialIndex],D=Math.max(y.start,S.start),N=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,q=N;R<q;R+=3){const k=f.getX(R),O=f.getX(R+1),H=f.getX(R+2);a=fl(this,v,e,r,m,g,_,k,O,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=E,v=T;y<v;y+=3){const D=f.getX(y),N=f.getX(y+1),R=f.getX(y+2);a=fl(this,u,e,r,m,g,_,D,N,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const y=x[E],v=u[y.materialIndex],D=Math.max(y.start,S.start),N=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,q=N;R<q;R+=3){const k=R,O=R+1,H=R+2;a=fl(this,v,e,r,m,g,_,k,O,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,v=T;y<v;y+=3){const D=y,N=y+1,R=y+2;a=fl(this,u,e,r,m,g,_,D,N,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function D_(s,e,n,r,a,c,u,f){let h;if(e.side===xn?h=r.intersectTriangle(u,c,a,!0,f):h=r.intersectTriangle(a,c,u,e.side===Sr,f),h===null)return null;dl.copy(f),dl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(dl);return m<n.near||m>n.far?null:{distance:m,point:dl.clone(),object:s}}function fl(s,e,n,r,a,c,u,f,h,m){s.getVertexPosition(f,al),s.getVertexPosition(h,ll),s.getVertexPosition(m,cl);const g=D_(s,e,n,r,al,ll,cl,Qp);if(g){const _=new ae;li.getBarycoord(Qp,al,ll,cl,_),a&&(g.uv=li.getInterpolatedAttribute(a,f,h,m,_,new Nt)),c&&(g.uv1=li.getInterpolatedAttribute(c,f,h,m,_,new Nt)),u&&(g.normal=li.getInterpolatedAttribute(u,f,h,m,_,new ae),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new ae,materialIndex:0};li.getNormal(al,ll,cl,x.normal),g.face=x,g.barycoord=_}return g}class Go extends Er{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const f=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],g=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,u,c,0),E("z","y","x",1,-1,r,n,-e,u,c,1),E("x","z","y",1,1,e,r,n,a,u,2),E("x","z","y",1,-1,e,r,-n,a,u,3),E("x","y","z",1,-1,e,n,r,a,c,4),E("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(h),this.setAttribute("position",new Si(m,3)),this.setAttribute("normal",new Si(g,3)),this.setAttribute("uv",new Si(_,2));function E(T,y,v,D,N,R,q,k,O,H,b){const C=R/O,B=q/H,ce=R/2,Q=q/2,fe=k/2,le=O+1,se=H+1;let oe=0,F=0;const te=new ae;for(let ee=0;ee<se;ee++){const U=ee*B-Q;for(let K=0;K<le;K++){const Ce=K*C-ce;te[T]=Ce*D,te[y]=U*N,te[v]=fe,m.push(te.x,te.y,te.z),te[T]=0,te[y]=0,te[v]=k>0?1:-1,g.push(te.x,te.y,te.z),_.push(K/O),_.push(1-ee/H),oe+=1}}for(let ee=0;ee<H;ee++)for(let U=0;U<O;U++){const K=x+U+le*ee,Ce=x+U+le*(ee+1),$=x+(U+1)+le*(ee+1),de=x+(U+1)+le*ee;h.push(K,Ce,de),h.push(Ce,$,de),F+=6}f.addGroup(S,F,b),S+=F,x+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const a in r)e[a]=r[a]}return e}function U_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Zm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const I_={clone:js,merge:_n};var F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Cl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=U_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}let Qm=class extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const vr=new ae,Jp=new Nt,em=new Nt;class $n extends Qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,Jp,em),n.subVectors(em,Jp)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/h,n-=u.offsetY*r/m,a*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Us=1;class k_ extends kn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Ds,Us,e,n);a.layers=this.layers,this.add(a);const c=new $n(Ds,Us,e,n);c.layers=this.layers,this.add(c);const u=new $n(Ds,Us,e,n);u.layers=this.layers,this.add(u);const f=new $n(Ds,Us,e,n);f.layers=this.layers,this.add(f);const h=new $n(Ds,Us,e,n);h.layers=this.layers,this.add(h);const m=new $n(Ds,Us,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,f,h]=n;for(const m of n)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,h,m,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(_,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Jm extends yn{constructor(e,n,r,a,c,u,f,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,r,a,c,u,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z_ extends Mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Jm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Go(5,5,5),c=new di({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:xn,blending:xr});c.uniforms.tEquirect.value=n;const u=new Kn(a,c),f=n.minFilter;return n.minFilter===Kr&&(n.minFilter=xi),new k_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}const Uu=new ae,B_=new ae,H_=new at;class jr{constructor(e=new ae(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Uu.subVectors(r,n).cross(B_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Uu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||H_.getNormalMatrix(e),a=this.coplanarPoint(Uu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Bd,hl=new ae;class eg{constructor(e=new jr,n=new jr,r=new jr,a=new jr,c=new jr,u=new jr){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],h=a[3],m=a[4],g=a[5],_=a[6],x=a[7],S=a[8],E=a[9],T=a[10],y=a[11],v=a[12],D=a[13],N=a[14],R=a[15];if(r[0].setComponents(h-c,x-m,y-S,R-v).normalize(),r[1].setComponents(h+c,x+m,y+S,R+v).normalize(),r[2].setComponents(h+u,x+g,y+E,R+D).normalize(),r[3].setComponents(h-u,x-g,y-E,R-D).normalize(),r[4].setComponents(h-f,x-_,y-T,R-N).normalize(),n===Vi)r[5].setComponents(h+f,x+_,y+T,R+N).normalize();else if(n===wl)r[5].setComponents(f,_,T,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(hl.x=a.normal.x>0?e.max.x:e.min.x,hl.y=a.normal.y>0?e.max.y:e.min.y,hl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tg(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function V_(s){const e=new WeakMap;function n(f,h){const m=f.array,g=f.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,m){const g=h.array,_=h.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,g);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],T=_[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const T=_[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:c,update:u}}class Ys extends Er{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,g=h+1,_=e/f,x=n/h,S=[],E=[],T=[],y=[];for(let v=0;v<g;v++){const D=v*x-u;for(let N=0;N<m;N++){const R=N*_-c;E.push(R,-D,0),T.push(0,0,1),y.push(N/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let D=0;D<f;D++){const N=D+m*v,R=D+m*(v+1),q=D+1+m*(v+1),k=D+1+m*v;S.push(N,R,k),S.push(R,q,k)}this.setIndex(S),this.setAttribute("position",new Si(E,3)),this.setAttribute("normal",new Si(T,3)),this.setAttribute("uv",new Si(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var G_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Q_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",yx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ix=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,My=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,by=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Oy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$y=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_S=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:G_,alphahash_pars_fragment:W_,alphamap_fragment:j_,alphamap_pars_fragment:X_,alphatest_fragment:q_,alphatest_pars_fragment:Y_,aomap_fragment:$_,aomap_pars_fragment:K_,batching_pars_vertex:Z_,batching_vertex:Q_,begin_vertex:J_,beginnormal_vertex:ex,bsdfs:tx,iridescence_fragment:nx,bumpmap_pars_fragment:ix,clipping_planes_fragment:rx,clipping_planes_pars_fragment:sx,clipping_planes_pars_vertex:ox,clipping_planes_vertex:ax,color_fragment:lx,color_pars_fragment:cx,color_pars_vertex:ux,color_vertex:dx,common:fx,cube_uv_reflection_fragment:hx,defaultnormal_vertex:px,displacementmap_pars_vertex:mx,displacementmap_vertex:gx,emissivemap_fragment:vx,emissivemap_pars_fragment:_x,colorspace_fragment:xx,colorspace_pars_fragment:yx,envmap_fragment:Sx,envmap_common_pars_fragment:Mx,envmap_pars_fragment:Ex,envmap_pars_vertex:wx,envmap_physical_pars_fragment:Ix,envmap_vertex:Tx,fog_vertex:Ax,fog_pars_vertex:Cx,fog_fragment:Rx,fog_pars_fragment:bx,gradientmap_pars_fragment:Px,lightmap_pars_fragment:Nx,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Dx,lights_pars_begin:Ux,lights_toon_fragment:Fx,lights_toon_pars_fragment:Ox,lights_phong_fragment:kx,lights_phong_pars_fragment:zx,lights_physical_fragment:Bx,lights_physical_pars_fragment:Hx,lights_fragment_begin:Vx,lights_fragment_maps:Gx,lights_fragment_end:Wx,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:Yx,map_fragment:$x,map_pars_fragment:Kx,map_particle_fragment:Zx,map_particle_pars_fragment:Qx,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:ey,morphinstance_vertex:ty,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:ry,morphtarget_vertex:sy,normal_fragment_begin:oy,normal_fragment_maps:ay,normal_pars_fragment:ly,normal_pars_vertex:cy,normal_vertex:uy,normalmap_pars_fragment:dy,clearcoat_normal_fragment_begin:fy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:py,iridescence_pars_fragment:my,opaque_fragment:gy,packing:vy,premultiplied_alpha_fragment:_y,project_vertex:xy,dithering_fragment:yy,dithering_pars_fragment:Sy,roughnessmap_fragment:My,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:Ty,shadowmap_vertex:Ay,shadowmask_pars_fragment:Cy,skinbase_vertex:Ry,skinning_pars_vertex:by,skinning_vertex:Py,skinnormal_vertex:Ny,specularmap_fragment:Ly,specularmap_pars_fragment:Dy,tonemapping_fragment:Uy,tonemapping_pars_fragment:Iy,transmission_fragment:Fy,transmission_pars_fragment:Oy,uv_pars_fragment:ky,uv_pars_vertex:zy,uv_vertex:By,worldpos_vertex:Hy,background_vert:Vy,background_frag:Gy,backgroundCube_vert:Wy,backgroundCube_frag:jy,cube_vert:Xy,cube_frag:qy,depth_vert:Yy,depth_frag:$y,distanceRGBA_vert:Ky,distanceRGBA_frag:Zy,equirect_vert:Qy,equirect_frag:Jy,linedashed_vert:eS,linedashed_frag:tS,meshbasic_vert:nS,meshbasic_frag:iS,meshlambert_vert:rS,meshlambert_frag:sS,meshmatcap_vert:oS,meshmatcap_frag:aS,meshnormal_vert:lS,meshnormal_frag:cS,meshphong_vert:uS,meshphong_frag:dS,meshphysical_vert:fS,meshphysical_frag:hS,meshtoon_vert:pS,meshtoon_frag:mS,points_vert:gS,points_frag:vS,shadow_vert:_S,shadow_frag:xS,sprite_vert:yS,sprite_frag:SS},Ne={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},_i={basic:{uniforms:_n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:_n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:_n([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:_n([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:_n([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new St(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:_n([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:_n([Ne.points,Ne.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:_n([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:_n([Ne.common,Ne.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:_n([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:_n([Ne.sprite,Ne.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:_n([Ne.common,Ne.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:_n([Ne.lights,Ne.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};_i.physical={uniforms:_n([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const pl={r:0,b:0,g:0},Vr=new Mi,MS=new Vt;function ES(s,e,n,r,a,c,u){const f=new St(0);let h=c===!0?0:1,m,g,_=null,x=0,S=null;function E(D){let N=D.isScene===!0?D.background:null;return N&&N.isTexture&&(N=(D.backgroundBlurriness>0?n:e).get(N)),N}function T(D){let N=!1;const R=E(D);R===null?v(f,h):R&&R.isColor&&(v(R,1),N=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,u):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,N){const R=E(N);R&&(R.isCubeTexture||R.mapping===Tl)?(g===void 0&&(g=new Kn(new Go(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:js(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Vr.copy(N.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(MS.makeRotationFromEuler(Vr)),g.material.toneMapped=yt.getTransfer(R.colorSpace)!==bt,(_!==R||x!==R.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=R,x=R.version,S=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Kn(new Ys(2,2),new di({name:"BackgroundMaterial",uniforms:js(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=yt.getTransfer(R.colorSpace)!==bt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||x!==R.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=R,x=R.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function v(D,N){D.getRGB(pl,Zm(s)),r.buffers.color.setClear(pl.r,pl.g,pl.b,N,u)}return{getClearColor:function(){return f},setClearColor:function(D,N=1){f.set(D),h=N,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,v(f,h)},render:T,addToRenderList:y}}function wS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,u=!1;function f(C,B,ce,Q,fe){let le=!1;const se=_(Q,ce,B);c!==se&&(c=se,m(c.object)),le=S(C,Q,ce,fe),le&&E(C,Q,ce,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,R(C,B,ce,Q),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function _(C,B,ce){const Q=ce.wireframe===!0;let fe=r[C.id];fe===void 0&&(fe={},r[C.id]=fe);let le=fe[B.id];le===void 0&&(le={},fe[B.id]=le);let se=le[Q];return se===void 0&&(se=x(h()),le[Q]=se),se}function x(C){const B=[],ce=[],Q=[];for(let fe=0;fe<n;fe++)B[fe]=0,ce[fe]=0,Q[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ce,attributeDivisors:Q,object:C,attributes:{},index:null}}function S(C,B,ce,Q){const fe=c.attributes,le=B.attributes;let se=0;const oe=ce.getAttributes();for(const F in oe)if(oe[F].location>=0){const ee=fe[F];let U=le[F];if(U===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),ee===void 0||ee.attribute!==U||U&&ee.data!==U.data)return!0;se++}return c.attributesNum!==se||c.index!==Q}function E(C,B,ce,Q){const fe={},le=B.attributes;let se=0;const oe=ce.getAttributes();for(const F in oe)if(oe[F].location>=0){let ee=le[F];ee===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor));const U={};U.attribute=ee,ee&&ee.data&&(U.data=ee.data),fe[F]=U,se++}c.attributes=fe,c.attributesNum=se,c.index=Q}function T(){const C=c.newAttributes;for(let B=0,ce=C.length;B<ce;B++)C[B]=0}function y(C){v(C,0)}function v(C,B){const ce=c.newAttributes,Q=c.enabledAttributes,fe=c.attributeDivisors;ce[C]=1,Q[C]===0&&(s.enableVertexAttribArray(C),Q[C]=1),fe[C]!==B&&(s.vertexAttribDivisor(C,B),fe[C]=B)}function D(){const C=c.newAttributes,B=c.enabledAttributes;for(let ce=0,Q=B.length;ce<Q;ce++)B[ce]!==C[ce]&&(s.disableVertexAttribArray(ce),B[ce]=0)}function N(C,B,ce,Q,fe,le,se){se===!0?s.vertexAttribIPointer(C,B,ce,fe,le):s.vertexAttribPointer(C,B,ce,Q,fe,le)}function R(C,B,ce,Q){T();const fe=Q.attributes,le=ce.getAttributes(),se=B.defaultAttributeValues;for(const oe in le){const F=le[oe];if(F.location>=0){let te=fe[oe];if(te===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){const ee=te.normalized,U=te.itemSize,K=e.get(te);if(K===void 0)continue;const Ce=K.buffer,$=K.type,de=K.bytesPerElement,ye=$===s.INT||$===s.UNSIGNED_INT||te.gpuType===Ud;if(te.isInterleavedBufferAttribute){const ge=te.data,Te=ge.stride,Re=te.offset;if(ge.isInstancedInterleavedBuffer){for(let qe=0;qe<F.locationSize;qe++)v(F.location+qe,ge.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let qe=0;qe<F.locationSize;qe++)y(F.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let qe=0;qe<F.locationSize;qe++)N(F.location+qe,U/F.locationSize,$,ee,Te*de,(Re+U/F.locationSize*qe)*de,ye)}else{if(te.isInstancedBufferAttribute){for(let ge=0;ge<F.locationSize;ge++)v(F.location+ge,te.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ge=0;ge<F.locationSize;ge++)y(F.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let ge=0;ge<F.locationSize;ge++)N(F.location+ge,U/F.locationSize,$,ee,U*de,U/F.locationSize*ge*de,ye)}}else if(se!==void 0){const ee=se[oe];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(F.location,ee);break;case 3:s.vertexAttrib3fv(F.location,ee);break;case 4:s.vertexAttrib4fv(F.location,ee);break;default:s.vertexAttrib1fv(F.location,ee)}}}}D()}function q(){H();for(const C in r){const B=r[C];for(const ce in B){const Q=B[ce];for(const fe in Q)g(Q[fe].object),delete Q[fe];delete B[ce]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ce in B){const Q=B[ce];for(const fe in Q)g(Q[fe].object),delete Q[fe];delete B[ce]}delete r[C.id]}function O(C){for(const B in r){const ce=r[B];if(ce[C.id]===void 0)continue;const Q=ce[C.id];for(const fe in Q)g(Q[fe].object),delete Q[fe];delete ce[C.id]}}function H(){b(),u=!0,c!==a&&(c=a,m(c.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:H,resetDefaultState:b,dispose:q,releaseStatesOfGeometry:k,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function TS(s,e,n){let r;function a(m){r=m}function c(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function u(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),n.update(g,r,_))}function f(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];n.update(S,r,1)}function h(m,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)u(m[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function AS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==ci&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const H=O===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Wi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Hi&&!H)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:R,vertexTextures:q,maxSamples:k}}function CS(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new jr,f=new at,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||a;return a=x,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!a||E===null||E.length===0||c&&!y)c?g(null):m();else{const D=c?0:r,N=D*4;let R=v.clippingState||null;h.value=R,R=g(E,x,N,S);for(let q=0;q!==N;++q)R[q]=n[q];v.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,S,E){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const v=S+T*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,R=S;N!==T;++N,R+=4)u.copy(_[N]).applyMatrix4(D,f),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function RS(s){let e=new WeakMap;function n(u,f){return f===Qu?u.mapping=Hs:f===Ju&&(u.mapping=Vs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Qu||f===Ju)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new z_(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Hd extends Qm{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,tm=[.125,.215,.35,.446,.526,.582],Yr=20,Iu=new Hd,nm=new St;let Fu=null,Ou=0,ku=0,zu=!1;const Xr=(1+Math.sqrt(5))/2,Is=1/Xr,im=[new ae(-Xr,Is,0),new ae(Xr,Is,0),new ae(-Is,0,Xr),new ae(Is,0,Xr),new ae(0,Xr,-Is),new ae(0,Xr,Is),new ae(-1,1,-1),new ae(1,1,-1),new ae(-1,1,1),new ae(1,1,1)];class rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Fu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,Ou,ku),this._renderer.xr.enabled=zu,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:zo,format:ci,colorSpace:Xs,depthBuffer:!1},a=sm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bS(c)),this._blurMaterial=PS(c,e,n)}return a}_compileMaterial(e){const n=new Kn(this._lodPlanes[0],e);this._renderer.compile(n,Iu)}_sceneToCubeUV(e,n,r,a){const f=new $n(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(nm),g.toneMapping=yr,g.autoClear=!1;const S=new Ym({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),E=new Kn(new Go,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(nm),T=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(f.up.set(0,h[v],0),f.lookAt(m[v],0,0)):D===1?(f.up.set(0,0,h[v]),f.lookAt(0,m[v],0)):(f.up.set(0,h[v],0),f.lookAt(0,0,m[v]));const N=this._cubeSize;ml(a,D*N,v>2?N:0,N,N),g.setRenderTarget(a),T&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=_,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Hs||e.mapping===Vs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new Kn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;ml(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Iu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=im[(a-c-1)%im.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Kn(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Yr-1),T=c/E,y=isFinite(c)?1+Math.floor(g*T):Yr;y>Yr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Yr}`);const v=[];let D=0;for(let O=0;O<Yr;++O){const H=O/T,b=Math.exp(-H*H/2);v.push(b),O===0?D+=b:O<y&&(D+=2*b)}for(let O=0;O<v.length;O++)v[O]=v[O]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-r;const R=this._sizeLods[a],q=3*R*(a>N-Fs?a-N+Fs:0),k=4*(this._cubeSize-R);ml(n,q,k,3*R,2*R),h.setRenderTarget(n),h.render(_,Iu)}}function bS(s){const e=[],n=[],r=[];let a=s;const c=s-Fs+1+tm.length;for(let u=0;u<c;u++){const f=Math.pow(2,a);n.push(f);let h=1/f;u>s-Fs?h=tm[u-s+Fs-1]:u===0&&(h=0),r.push(h);const m=1/(f-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,T=3,y=2,v=1,D=new Float32Array(T*E*S),N=new Float32Array(y*E*S),R=new Float32Array(v*E*S);for(let k=0;k<S;k++){const O=k%3*2/3-1,H=k>2?0:-1,b=[O,H,0,O+2/3,H,0,O+2/3,H+1,0,O,H,0,O+2/3,H+1,0,O,H+1,0];D.set(b,T*E*k),N.set(x,y*E*k);const C=[k,k,k,k,k,k];R.set(C,v*E*k)}const q=new Er;q.setAttribute("position",new yi(D,T)),q.setAttribute("uv",new yi(N,y)),q.setAttribute("faceIndex",new yi(R,v)),e.push(q),a>Fs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function sm(s,e,n){const r=new Mr(s,e,n);return r.texture.mapping=Tl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ml(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function PS(s,e,n){const r=new Float32Array(Yr),a=new ae(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function om(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function am(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===Qu||h===Ju,g=h===Hs||h===Vs;if(m||g){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new rm(s)),_=m?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&a(S)?(n===null&&(n=new rm(s)),_=m?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function a(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function LS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Uo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function DS(s,e,n,r){const a={},c=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let y=0,v=T.length;y<v;y++)e.remove(T[y])}x.removeEventListener("dispose",u),delete a[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(_,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,n.memory.geometries++),x}function h(_){const x=_.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const S=_.morphAttributes;for(const E in S){const T=S[E];for(let y=0,v=T.length;y<v;y++)e.update(T[y],s.ARRAY_BUFFER)}}function m(_){const x=[],S=_.index,E=_.attributes.position;let T=0;if(S!==null){const D=S.array;T=S.version;for(let N=0,R=D.length;N<R;N+=3){const q=D[N+0],k=D[N+1],O=D[N+2];x.push(q,k,k,O,O,q)}}else if(E!==void 0){const D=E.array;T=E.version;for(let N=0,R=D.length/3-1;N<R;N+=3){const q=N+0,k=N+1,O=N+2;x.push(q,k,k,O,O,q)}}else return;const y=new(Gm(x)?Km:$m)(x,1);y.version=T;const v=c.get(_);v&&e.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:f,update:h,getWireframeAttribute:g}}function US(s,e,n){let r;function a(x){r=x}let c,u;function f(x){c=x.type,u=x.bytesPerElement}function h(x,S){s.drawElements(r,S,c,x*u),n.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,x*u,E),n.update(S,r,E))}function g(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];n.update(y,r,1)}function _(x,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)m(x[v]/u,S[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,T,0,E);let v=0;for(let D=0;D<E;D++)v+=S[D]*T[D];n.update(v,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function IS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function FS(s,e,n){const r=new WeakMap,a=new Ht;function c(u,f,h){const m=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let C=function(){H.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let q=f.attributes.position.count*R,k=1;q>e.maxTextureSize&&(k=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const O=new Float32Array(q*k*4*_),H=new jm(O,q,k,_);H.type=Hi,H.needsUpdate=!0;const b=R*4;for(let B=0;B<_;B++){const ce=v[B],Q=D[B],fe=N[B],le=q*k*4*B;for(let se=0;se<ce.count;se++){const oe=se*b;E===!0&&(a.fromBufferAttribute(ce,se),O[le+oe+0]=a.x,O[le+oe+1]=a.y,O[le+oe+2]=a.z,O[le+oe+3]=0),T===!0&&(a.fromBufferAttribute(Q,se),O[le+oe+4]=a.x,O[le+oe+5]=a.y,O[le+oe+6]=a.z,O[le+oe+7]=0),y===!0&&(a.fromBufferAttribute(fe,se),O[le+oe+8]=a.x,O[le+oe+9]=a.y,O[le+oe+10]=a.z,O[le+oe+11]=fe.itemSize===4?a.w:1)}}x={count:_,texture:H,size:new Nt(q,k)},r.set(f,x),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function OS(s,e,n,r){let a=new WeakMap;function c(h){const m=r.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return _}function u(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class ng extends yn{constructor(e,n,r,a,c,u,f,h,m,g=ks){if(g!==ks&&g!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===ks&&(r=Zr),r===void 0&&g===Ws&&(r=Gs),super(null,a,c,u,f,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:ui,this.minFilter=h!==void 0?h:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ig=new yn,lm=new ng(1,1),rg=new jm,sg=new M_,og=new Jm,cm=[],um=[],dm=new Float32Array(16),fm=new Float32Array(9),hm=new Float32Array(4);function $s(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=cm[a];if(c===void 0&&(c=new Float32Array(a),cm[a]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Rl(s,e){let n=um[e];n===void 0&&(n=new Int32Array(e),um[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function kS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function zS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function BS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function HS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function VS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;hm.set(r),s.uniformMatrix2fv(this.addr,!1,hm),Zt(n,r)}}function GS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;fm.set(r),s.uniformMatrix3fv(this.addr,!1,fm),Zt(n,r)}}function WS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;dm.set(r),s.uniformMatrix4fv(this.addr,!1,dm),Zt(n,r)}}function jS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function XS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function qS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function YS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function $S(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function KS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function ZS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function QS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function JS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(lm.compareFunction=Vm,c=lm):c=ig,n.setTexture2D(e||c,a)}function eM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||sg,a)}function tM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||og,a)}function nM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||rg,a)}function iM(s){switch(s){case 5126:return kS;case 35664:return zS;case 35665:return BS;case 35666:return HS;case 35674:return VS;case 35675:return GS;case 35676:return WS;case 5124:case 35670:return jS;case 35667:case 35671:return XS;case 35668:case 35672:return qS;case 35669:case 35673:return YS;case 5125:return $S;case 36294:return KS;case 36295:return ZS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}function rM(s,e){s.uniform1fv(this.addr,e)}function sM(s,e){const n=$s(e,this.size,2);s.uniform2fv(this.addr,n)}function oM(s,e){const n=$s(e,this.size,3);s.uniform3fv(this.addr,n)}function aM(s,e){const n=$s(e,this.size,4);s.uniform4fv(this.addr,n)}function lM(s,e){const n=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function cM(s,e){const n=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function uM(s,e){const n=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function dM(s,e){s.uniform1iv(this.addr,e)}function fM(s,e){s.uniform2iv(this.addr,e)}function hM(s,e){s.uniform3iv(this.addr,e)}function pM(s,e){s.uniform4iv(this.addr,e)}function mM(s,e){s.uniform1uiv(this.addr,e)}function gM(s,e){s.uniform2uiv(this.addr,e)}function vM(s,e){s.uniform3uiv(this.addr,e)}function _M(s,e){s.uniform4uiv(this.addr,e)}function xM(s,e,n){const r=this.cache,a=e.length,c=Rl(n,a);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||ig,c[u])}function yM(s,e,n){const r=this.cache,a=e.length,c=Rl(n,a);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||sg,c[u])}function SM(s,e,n){const r=this.cache,a=e.length,c=Rl(n,a);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||og,c[u])}function MM(s,e,n){const r=this.cache,a=e.length,c=Rl(n,a);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||rg,c[u])}function EM(s){switch(s){case 5126:return rM;case 35664:return sM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return dM;case 35667:case 35671:return fM;case 35668:case 35672:return hM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return vM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return MM}}class wM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=iM(n.type)}}class TM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EM(n.type)}}class AM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const Bu=/(\w+)(\])?(\[|\.)?/g;function pm(s,e){s.seq.push(e),s.map[e.id]=e}function CM(s,e,n){const r=s.name,a=r.length;for(Bu.lastIndex=0;;){const c=Bu.exec(r),u=Bu.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===a){pm(n,m===void 0?new wM(f,s,e):new TM(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new AM(f),pm(n,_)),n=_}}}class El{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);CM(c,u,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function mm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const RM=37297;let bM=0;function PM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const gm=new at;function NM(s){yt._getMatrix(gm,yt.workingColorSpace,s);const e=`mat3( ${gm.elements.map(n=>n.toFixed(4))} )`;switch(yt.getTransfer(s)){case Al:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function vm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+PM(s.getShaderSource(e),u)}else return a}function LM(s,e){const n=NM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function DM(s,e){let n;switch(e){case Yv:n="Linear";break;case $v:n="Reinhard";break;case Kv:n="Cineon";break;case Zv:n="ACESFilmic";break;case Jv:n="AgX";break;case e_:n="Neutral";break;case Qv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gl=new ae;function UM(){yt.getLuminanceCoefficients(gl);const s=gl.x.toFixed(4),e=gl.y.toFixed(4),n=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function FM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function OM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Io(s){return s!==""}function _m(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(s){return s.replace(kM,BM)}const zM=new Map;function BM(s,e){let n=lt[e];if(n===void 0){const r=zM.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bd(n)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(s){return s.replace(HM,VM)}function VM(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Sm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function WM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function XM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pm:e="ENVMAP_BLENDING_MULTIPLY";break;case Xv:e="ENVMAP_BLENDING_MIX";break;case qv:e="ENVMAP_BLENDING_ADD";break}return e}function qM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function YM(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=GM(n),m=WM(n),g=jM(n),_=XM(n),x=qM(n),S=IM(n),E=FM(c),T=a.createProgram();let y,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Io).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Io).join(`
`),v.length>0&&(v+=`
`)):(y=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),v=[Sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?lt.tonemapping_pars_fragment:"",n.toneMapping!==yr?DM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,LM("linearToOutputTexel",n.outputColorSpace),UM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),u=bd(u),u=_m(u,n),u=xm(u,n),f=bd(f),f=_m(f,n),f=xm(f,n),u=ym(u),f=ym(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===Up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=D+y+u,R=D+v+f,q=mm(a,a.VERTEX_SHADER,N),k=mm(a,a.FRAGMENT_SHADER,R);a.attachShader(T,q),a.attachShader(T,k),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function O(B){if(s.debug.checkShaderErrors){const ce=a.getProgramInfoLog(T).trim(),Q=a.getShaderInfoLog(q).trim(),fe=a.getShaderInfoLog(k).trim();let le=!0,se=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,q,k);else{const oe=vm(a,q,"vertex"),F=vm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ce+`
`+oe+`
`+F)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(Q===""||fe==="")&&(se=!1);se&&(B.diagnostics={runnable:le,programLog:ce,vertexShader:{log:Q,prefix:y},fragmentShader:{log:fe,prefix:v}})}a.deleteShader(q),a.deleteShader(k),H=new El(a,T),b=OM(a,T)}let H;this.getUniforms=function(){return H===void 0&&O(this),H};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,RM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=q,this.fragmentShader=k,this}let $M=0;class KM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new ZM(e),n.set(e,r)),r}}class ZM{constructor(e){this.id=$M++,this.code=e,this.usedTimes=0}}function QM(s,e,n,r,a,c,u){const f=new Xm,h=new KM,m=new Set,g=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,C,B,ce,Q){const fe=ce.fog,le=Q.geometry,se=b.isMeshStandardMaterial?ce.environment:null,oe=(b.isMeshStandardMaterial?n:e).get(b.envMap||se),F=oe&&oe.mapping===Tl?oe.image.height:null,te=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const ee=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,U=ee!==void 0?ee.length:0;let K=0;le.morphAttributes.position!==void 0&&(K=1),le.morphAttributes.normal!==void 0&&(K=2),le.morphAttributes.color!==void 0&&(K=3);let Ce,$,de,ye;if(te){const _t=_i[te];Ce=_t.vertexShader,$=_t.fragmentShader}else Ce=b.vertexShader,$=b.fragmentShader,h.update(b),de=h.getVertexShaderID(b),ye=h.getFragmentShaderID(b);const ge=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Re=Q.isInstancedMesh===!0,qe=Q.isBatchedMesh===!0,gt=!!b.map,ut=!!b.matcap,Rt=!!oe,X=!!b.aoMap,hn=!!b.lightMap,pt=!!b.bumpMap,dt=!!b.normalMap,Ke=!!b.displacementMap,At=!!b.emissiveMap,$e=!!b.metalnessMap,L=!!b.roughnessMap,w=b.anisotropy>0,J=b.clearcoat>0,me=b.dispersion>0,_e=b.iridescence>0,he=b.sheen>0,Ge=b.transmission>0,be=w&&!!b.anisotropyMap,Ie=J&&!!b.clearcoatMap,ct=J&&!!b.clearcoatNormalMap,Me=J&&!!b.clearcoatRoughnessMap,ke=_e&&!!b.iridescenceMap,Je=_e&&!!b.iridescenceThicknessMap,et=he&&!!b.sheenColorMap,ze=he&&!!b.sheenRoughnessMap,ft=!!b.specularMap,rt=!!b.specularColorMap,Tt=!!b.specularIntensityMap,G=Ge&&!!b.transmissionMap,Pe=Ge&&!!b.thicknessMap,ue=!!b.gradientMap,pe=!!b.alphaMap,De=b.alphaTest>0,Le=!!b.alphaHash,st=!!b.extensions;let Dt=yr;b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Xt={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:$,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:qe,batchingColor:qe&&Q._colorsTexture!==null,instancing:Re,instancingColor:Re&&Q.instanceColor!==null,instancingMorph:Re&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Xs,alphaToCoverage:!!b.alphaToCoverage,map:gt,matcap:ut,envMap:Rt,envMapMode:Rt&&oe.mapping,envMapCubeUVHeight:F,aoMap:X,lightMap:hn,bumpMap:pt,normalMap:dt,displacementMap:x&&Ke,emissiveMap:At,normalMapObjectSpace:dt&&b.normalMapType===s_,normalMapTangentSpace:dt&&b.normalMapType===r_,metalnessMap:$e,roughnessMap:L,anisotropy:w,anisotropyMap:be,clearcoat:J,clearcoatMap:Ie,clearcoatNormalMap:ct,clearcoatRoughnessMap:Me,dispersion:me,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:Je,sheen:he,sheenColorMap:et,sheenRoughnessMap:ze,specularMap:ft,specularColorMap:rt,specularIntensityMap:Tt,transmission:Ge,transmissionMap:G,thicknessMap:Pe,gradientMap:ue,opaque:b.transparent===!1&&b.blending===Os&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Le,combine:b.combine,mapUv:gt&&T(b.map.channel),aoMapUv:X&&T(b.aoMap.channel),lightMapUv:hn&&T(b.lightMap.channel),bumpMapUv:pt&&T(b.bumpMap.channel),normalMapUv:dt&&T(b.normalMap.channel),displacementMapUv:Ke&&T(b.displacementMap.channel),emissiveMapUv:At&&T(b.emissiveMap.channel),metalnessMapUv:$e&&T(b.metalnessMap.channel),roughnessMapUv:L&&T(b.roughnessMap.channel),anisotropyMapUv:be&&T(b.anisotropyMap.channel),clearcoatMapUv:Ie&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(b.sheenRoughnessMap.channel),specularMapUv:ft&&T(b.specularMap.channel),specularColorMapUv:rt&&T(b.specularColorMap.channel),specularIntensityMapUv:Tt&&T(b.specularIntensityMap.channel),transmissionMapUv:G&&T(b.transmissionMap.channel),thicknessMapUv:Pe&&T(b.thicknessMap.channel),alphaMapUv:pe&&T(b.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(dt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!le.attributes.uv&&(gt||pe),fog:!!fe,useFog:b.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Te,skinning:Q.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:K,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:gt&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===bt,decodeVideoTextureEmissive:At&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bi,flipSided:b.side===xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function v(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)C.push(B),C.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(D(C,b),N(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function D(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function N(b,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const C=E[b.type];let B;if(C){const ce=_i[C];B=I_.clone(ce.uniforms)}else B=b.uniforms;return B}function q(b,C){let B;for(let ce=0,Q=g.length;ce<Q;ce++){const fe=g[ce];if(fe.cacheKey===C){B=fe,++B.usedTimes;break}}return B===void 0&&(B=new YM(s,C,b,c),g.push(B)),B}function k(b){if(--b.usedTimes===0){const C=g.indexOf(b);g[C]=g[g.length-1],g.pop(),b.destroy()}}function O(b){h.remove(b)}function H(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:q,releaseProgram:k,releaseShaderCache:O,programs:g,dispose:H}}function JM(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,h){s.get(u)[f]=h}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function eE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Em(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(_,x,S,E,T,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:T,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=y),e++,v}function f(_,x,S,E,T,y){const v=u(_,x,S,E,T,y);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function h(_,x,S,E,T,y){const v=u(_,x,S,E,T,y);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function m(_,x){n.length>1&&n.sort(_||eE),r.length>1&&r.sort(x||Mm),a.length>1&&a.sort(x||Mm)}function g(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:h,finish:g,sort:m}}function tE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new Em,s.set(r,[u])):a>=c.length?(u=new Em,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function nE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ae,color:new St};break;case"SpotLight":n={position:new ae,direction:new ae,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ae,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ae,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return s[e.id]=n,n}}}function iE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let rE=0;function sE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function oE(s){const e=new nE,n=iE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ae);const a=new ae,c=new Vt,u=new Vt;function f(m){let g=0,_=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,E=0,T=0,y=0,v=0,D=0,N=0,R=0,q=0,k=0,O=0;m.sort(sE);for(let b=0,C=m.length;b<C;b++){const B=m[b],ce=B.color,Q=B.intensity,fe=B.distance,le=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ce.r*Q,_+=ce.g*Q,x+=ce.b*Q;else if(B.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(B.sh.coefficients[se],Q);O++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const oe=B.shadow,F=n.get(B);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,r.directionalShadow[S]=F,r.directionalShadowMap[S]=le,r.directionalShadowMatrix[S]=B.shadow.matrix,D++}r.directional[S]=se,S++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(ce).multiplyScalar(Q),se.distance=fe,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,r.spot[T]=se;const oe=B.shadow;if(B.map&&(r.spotLightMap[q]=B.map,q++,oe.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[T]=oe.matrix,B.castShadow){const F=n.get(B);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,r.spotShadow[T]=F,r.spotShadowMap[T]=le,R++}T++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(ce).multiplyScalar(Q),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=se,y++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const oe=B.shadow,F=n.get(B);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,F.shadowCameraNear=oe.camera.near,F.shadowCameraFar=oe.camera.far,r.pointShadow[E]=F,r.pointShadowMap[E]=le,r.pointShadowMatrix[E]=B.shadow.matrix,N++}r.point[E]=se,E++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(Q),se.groundColor.copy(B.groundColor).multiplyScalar(Q),r.hemi[v]=se,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const H=r.hash;(H.directionalLength!==S||H.pointLength!==E||H.spotLength!==T||H.rectAreaLength!==y||H.hemiLength!==v||H.numDirectionalShadows!==D||H.numPointShadows!==N||H.numSpotShadows!==R||H.numSpotMaps!==q||H.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=R+q-k,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=O,H.directionalLength=S,H.pointLength=E,H.spotLength=T,H.rectAreaLength=y,H.hemiLength=v,H.numDirectionalShadows=D,H.numPointShadows=N,H.numSpotShadows=R,H.numSpotMaps=q,H.numLightProbes=O,r.version=rE++)}function h(m,g){let _=0,x=0,S=0,E=0,T=0;const y=g.matrixWorldInverse;for(let v=0,D=m.length;v<D;v++){const N=m[v];if(N.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),_++}else if(N.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(N.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:f,setupView:h,state:r}}function wm(s){const e=new oE(s),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function u(g){r.push(g)}function f(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function aE(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let f;return u===void 0?(f=new wm(s),e.set(a,[f])):c>=u.length?(f=new wm(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class lE extends Cl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=n_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cE extends Cl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fE(s,e,n){let r=new eg;const a=new Nt,c=new Nt,u=new Ht,f=new lE({depthPacking:i_}),h=new cE,m={},g=n.maxTextureSize,_={[Sr]:xn,[xn]:Sr,[Bi]:Bi},x=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:uE,fragmentShader:dE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Er;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Kn(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bm;let v=this.type;this.render=function(k,O,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const b=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ce=s.state;ce.setBlending(xr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const Q=v!==zi&&this.type===zi,fe=v===zi&&this.type!==zi;for(let le=0,se=k.length;le<se;le++){const oe=k[le],F=oe.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);const te=F.getFrameExtents();if(a.multiply(te),c.copy(F.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(c.x=Math.floor(g/te.x),a.x=c.x*te.x,F.mapSize.x=c.x),a.y>g&&(c.y=Math.floor(g/te.y),a.y=c.y*te.y,F.mapSize.y=c.y)),F.map===null||Q===!0||fe===!0){const U=this.type!==zi?{minFilter:ui,magFilter:ui}:{};F.map!==null&&F.map.dispose(),F.map=new Mr(a.x,a.y,U),F.map.texture.name=oe.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const ee=F.getViewportCount();for(let U=0;U<ee;U++){const K=F.getViewport(U);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),ce.viewport(u),F.updateMatrices(oe,U),r=F.getFrustum(),R(O,H,F.camera,oe,this.type)}F.isPointLightShadow!==!0&&this.type===zi&&D(F,H),F.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(b,C,B)};function D(k,O){const H=e.update(T);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Mr(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(O,null,H,x,T,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(O,null,H,S,T,null)}function N(k,O,H,b){let C=null;const B=H.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)C=B;else if(C=H.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ce=C.uuid,Q=O.uuid;let fe=m[ce];fe===void 0&&(fe={},m[ce]=fe);let le=fe[Q];le===void 0&&(le=C.clone(),fe[Q]=le,O.addEventListener("dispose",q)),C=le}if(C.visible=O.visible,C.wireframe=O.wireframe,b===zi?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:_[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=s.properties.get(C);ce.light=H}return C}function R(k,O,H,b,C){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===zi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,k.matrixWorld);const Q=e.update(k),fe=k.material;if(Array.isArray(fe)){const le=Q.groups;for(let se=0,oe=le.length;se<oe;se++){const F=le[se],te=fe[F.materialIndex];if(te&&te.visible){const ee=N(k,te,b,C);k.onBeforeShadow(s,k,O,H,Q,ee,F),s.renderBufferDirect(H,null,Q,ee,k,F),k.onAfterShadow(s,k,O,H,Q,ee,F)}}}else if(fe.visible){const le=N(k,fe,b,C);k.onBeforeShadow(s,k,O,H,Q,le,null),s.renderBufferDirect(H,null,Q,le,k,null),k.onAfterShadow(s,k,O,H,Q,le,null)}}const ce=k.children;for(let Q=0,fe=ce.length;Q<fe;Q++)R(ce[Q],O,H,b,C)}function q(k){k.target.removeEventListener("dispose",q);for(const H in m){const b=m[H],C=k.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const hE={[ju]:Xu,[qu]:Ku,[Yu]:Zu,[Bs]:$u,[Xu]:ju,[Ku]:qu,[Zu]:Yu,[$u]:Bs};function pE(s,e){function n(){let G=!1;const Pe=new Ht;let ue=null;const pe=new Ht(0,0,0,0);return{setMask:function(De){ue!==De&&!G&&(s.colorMask(De,De,De,De),ue=De)},setLocked:function(De){G=De},setClear:function(De,Le,st,Dt,Xt){Xt===!0&&(De*=Dt,Le*=Dt,st*=Dt),Pe.set(De,Le,st,Dt),pe.equals(Pe)===!1&&(s.clearColor(De,Le,st,Dt),pe.copy(Pe))},reset:function(){G=!1,ue=null,pe.set(-1,0,0,0)}}}function r(){let G=!1,Pe=!1,ue=null,pe=null,De=null;return{setReversed:function(Le){if(Pe!==Le){const st=e.get("EXT_clip_control");Pe?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Dt=De;De=null,this.setClear(Dt)}Pe=Le},getReversed:function(){return Pe},setTest:function(Le){Le?ge(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Le){ue!==Le&&!G&&(s.depthMask(Le),ue=Le)},setFunc:function(Le){if(Pe&&(Le=hE[Le]),pe!==Le){switch(Le){case ju:s.depthFunc(s.NEVER);break;case Xu:s.depthFunc(s.ALWAYS);break;case qu:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case Yu:s.depthFunc(s.EQUAL);break;case $u:s.depthFunc(s.GEQUAL);break;case Ku:s.depthFunc(s.GREATER);break;case Zu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Le}},setLocked:function(Le){G=Le},setClear:function(Le){De!==Le&&(Pe&&(Le=1-Le),s.clearDepth(Le),De=Le)},reset:function(){G=!1,ue=null,pe=null,De=null,Pe=!1}}}function a(){let G=!1,Pe=null,ue=null,pe=null,De=null,Le=null,st=null,Dt=null,Xt=null;return{setTest:function(_t){G||(_t?ge(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(_t){Pe!==_t&&!G&&(s.stencilMask(_t),Pe=_t)},setFunc:function(_t,Sn,pn){(ue!==_t||pe!==Sn||De!==pn)&&(s.stencilFunc(_t,Sn,pn),ue=_t,pe=Sn,De=pn)},setOp:function(_t,Sn,pn){(Le!==_t||st!==Sn||Dt!==pn)&&(s.stencilOp(_t,Sn,pn),Le=_t,st=Sn,Dt=pn)},setLocked:function(_t){G=_t},setClear:function(_t){Xt!==_t&&(s.clearStencil(_t),Xt=_t)},reset:function(){G=!1,Pe=null,ue=null,pe=null,De=null,Le=null,st=null,Dt=null,Xt=null}}}const c=new n,u=new r,f=new a,h=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,S=[],E=null,T=!1,y=null,v=null,D=null,N=null,R=null,q=null,k=null,O=new St(0,0,0),H=0,b=!1,C=null,B=null,ce=null,Q=null,fe=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,oe=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(F)[1]),se=oe>=1):F.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),se=oe>=2);let te=null,ee={};const U=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),Ce=new Ht().fromArray(U),$=new Ht().fromArray(K);function de(G,Pe,ue,pe){const De=new Uint8Array(4),Le=s.createTexture();s.bindTexture(G,Le),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<ue;st++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Pe+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Le}const ye={};ye[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(s.DEPTH_TEST),u.setFunc(Bs),pt(!1),dt(Rp),ge(s.CULL_FACE),X(xr);function ge(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function Te(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function Re(G,Pe){return _[G]!==Pe?(s.bindFramebuffer(G,Pe),_[G]=Pe,G===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Pe),G===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function qe(G,Pe){let ue=S,pe=!1;if(G){ue=x.get(Pe),ue===void 0&&(ue=[],x.set(Pe,ue));const De=G.textures;if(ue.length!==De.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,st=De.length;Le<st;Le++)ue[Le]=s.COLOR_ATTACHMENT0+Le;ue.length=De.length,pe=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ue)}function gt(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const ut={[qr]:s.FUNC_ADD,[bv]:s.FUNC_SUBTRACT,[Pv]:s.FUNC_REVERSE_SUBTRACT};ut[Nv]=s.MIN,ut[Lv]=s.MAX;const Rt={[Dv]:s.ZERO,[Uv]:s.ONE,[Iv]:s.SRC_COLOR,[Gu]:s.SRC_ALPHA,[Hv]:s.SRC_ALPHA_SATURATE,[zv]:s.DST_COLOR,[Ov]:s.DST_ALPHA,[Fv]:s.ONE_MINUS_SRC_COLOR,[Wu]:s.ONE_MINUS_SRC_ALPHA,[Bv]:s.ONE_MINUS_DST_COLOR,[kv]:s.ONE_MINUS_DST_ALPHA,[Vv]:s.CONSTANT_COLOR,[Gv]:s.ONE_MINUS_CONSTANT_COLOR,[Wv]:s.CONSTANT_ALPHA,[jv]:s.ONE_MINUS_CONSTANT_ALPHA};function X(G,Pe,ue,pe,De,Le,st,Dt,Xt,_t){if(G===xr){T===!0&&(Te(s.BLEND),T=!1);return}if(T===!1&&(ge(s.BLEND),T=!0),G!==Rv){if(G!==y||_t!==b){if((v!==qr||R!==qr)&&(s.blendEquation(s.FUNC_ADD),v=qr,R=qr),_t)switch(G){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bp:s.blendFunc(s.ONE,s.ONE);break;case Pp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Np:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Np:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,N=null,q=null,k=null,O.set(0,0,0),H=0,y=G,b=_t}return}De=De||Pe,Le=Le||ue,st=st||pe,(Pe!==v||De!==R)&&(s.blendEquationSeparate(ut[Pe],ut[De]),v=Pe,R=De),(ue!==D||pe!==N||Le!==q||st!==k)&&(s.blendFuncSeparate(Rt[ue],Rt[pe],Rt[Le],Rt[st]),D=ue,N=pe,q=Le,k=st),(Dt.equals(O)===!1||Xt!==H)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Xt),O.copy(Dt),H=Xt),y=G,b=!1}function hn(G,Pe){G.side===Bi?Te(s.CULL_FACE):ge(s.CULL_FACE);let ue=G.side===xn;Pe&&(ue=!ue),pt(ue),G.blending===Os&&G.transparent===!1?X(xr):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),c.setMask(G.colorWrite);const pe=G.stencilWrite;f.setTest(pe),pe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),At(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function dt(G){G!==Tv?(ge(s.CULL_FACE),G!==B&&(G===Rp?s.cullFace(s.BACK):G===Av?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),B=G}function Ke(G){G!==ce&&(se&&s.lineWidth(G),ce=G)}function At(G,Pe,ue){G?(ge(s.POLYGON_OFFSET_FILL),(Q!==Pe||fe!==ue)&&(s.polygonOffset(Pe,ue),Q=Pe,fe=ue)):Te(s.POLYGON_OFFSET_FILL)}function $e(G){G?ge(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function L(G){G===void 0&&(G=s.TEXTURE0+le-1),te!==G&&(s.activeTexture(G),te=G)}function w(G,Pe,ue){ue===void 0&&(te===null?ue=s.TEXTURE0+le-1:ue=te);let pe=ee[ue];pe===void 0&&(pe={type:void 0,texture:void 0},ee[ue]=pe),(pe.type!==G||pe.texture!==Pe)&&(te!==ue&&(s.activeTexture(ue),te=ue),s.bindTexture(G,Pe||ye[G]),pe.type=G,pe.texture=Pe)}function J(){const G=ee[te];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(G){Ce.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ce.copy(G))}function ze(G){$.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),$.copy(G))}function ft(G,Pe){let ue=m.get(Pe);ue===void 0&&(ue=new WeakMap,m.set(Pe,ue));let pe=ue.get(G);pe===void 0&&(pe=s.getUniformBlockIndex(Pe,G.name),ue.set(G,pe))}function rt(G,Pe){const pe=m.get(Pe).get(G);h.get(Pe)!==pe&&(s.uniformBlockBinding(Pe,pe,G.__bindingPointIndex),h.set(Pe,pe))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},te=null,ee={},_={},x=new WeakMap,S=[],E=null,T=!1,y=null,v=null,D=null,N=null,R=null,q=null,k=null,O=new St(0,0,0),H=0,b=!1,C=null,B=null,ce=null,Q=null,fe=null,Ce.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ge,disable:Te,bindFramebuffer:Re,drawBuffers:qe,useProgram:gt,setBlending:X,setMaterial:hn,setFlipSided:pt,setCullFace:dt,setLineWidth:Ke,setPolygonOffset:At,setScissorTest:$e,activeTexture:L,bindTexture:w,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:ke,texImage3D:Je,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:ct,texStorage3D:Me,texSubImage2D:he,texSubImage3D:Ge,compressedTexSubImage2D:be,compressedTexSubImage3D:Ie,scissor:et,viewport:ze,reset:Tt}}function Tm(s,e,n,r){const a=mE(r);switch(n){case Im:return s*e;case Om:return s*e;case km:return s*e*2;case zm:return s*e/a.components*a.byteLength;case Od:return s*e/a.components*a.byteLength;case Bm:return s*e*2/a.components*a.byteLength;case kd:return s*e*2/a.components*a.byteLength;case Fm:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case zd:return s*e*4/a.components*a.byteLength;case _l:case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yl:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case id:case sd:return Math.max(s,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(s,8)*Math.max(e,8)/2;case od:case ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Ed:case wd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hm:case Td:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ad:case Cd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mE(s){switch(s){case Wi:case Lm:return{byteLength:1,components:1};case Fo:case Dm:case zo:return{byteLength:2,components:1};case Id:case Fd:return{byteLength:2,components:4};case Zr:case Ud:case Hi:return{byteLength:4,components:1};case Um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function gE(s,e,n,r,a,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Nt,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,w){return S?new OffscreenCanvas(L,w):Oo("canvas")}function T(L,w,J){let me=1;const _e=$e(L);if((_e.width>J||_e.height>J)&&(me=J/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(me*_e.width),Ge=Math.floor(me*_e.height);_===void 0&&(_=E(he,Ge));const be=w?E(he,Ge):_;return be.width=he,be.height=Ge,be.getContext("2d").drawImage(L,0,0,he,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ge+")."),be}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,w,J,me,_e=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=w;if(w===s.RED&&(J===s.FLOAT&&(he=s.R32F),J===s.HALF_FLOAT&&(he=s.R16F),J===s.UNSIGNED_BYTE&&(he=s.R8)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.R8UI),J===s.UNSIGNED_SHORT&&(he=s.R16UI),J===s.UNSIGNED_INT&&(he=s.R32UI),J===s.BYTE&&(he=s.R8I),J===s.SHORT&&(he=s.R16I),J===s.INT&&(he=s.R32I)),w===s.RG&&(J===s.FLOAT&&(he=s.RG32F),J===s.HALF_FLOAT&&(he=s.RG16F),J===s.UNSIGNED_BYTE&&(he=s.RG8)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RG8UI),J===s.UNSIGNED_SHORT&&(he=s.RG16UI),J===s.UNSIGNED_INT&&(he=s.RG32UI),J===s.BYTE&&(he=s.RG8I),J===s.SHORT&&(he=s.RG16I),J===s.INT&&(he=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RGB8UI),J===s.UNSIGNED_SHORT&&(he=s.RGB16UI),J===s.UNSIGNED_INT&&(he=s.RGB32UI),J===s.BYTE&&(he=s.RGB8I),J===s.SHORT&&(he=s.RGB16I),J===s.INT&&(he=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),J===s.UNSIGNED_INT&&(he=s.RGBA32UI),J===s.BYTE&&(he=s.RGBA8I),J===s.SHORT&&(he=s.RGBA16I),J===s.INT&&(he=s.RGBA32I)),w===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),w===s.RGBA){const Ge=_e?Al:yt.getTransfer(me);J===s.FLOAT&&(he=s.RGBA32F),J===s.HALF_FLOAT&&(he=s.RGBA16F),J===s.UNSIGNED_BYTE&&(he=Ge===bt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(L,w){let J;return L?w===null||w===Zr||w===Gs?J=s.DEPTH24_STENCIL8:w===Hi?J=s.DEPTH32F_STENCIL8:w===Fo&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zr||w===Gs?J=s.DEPTH_COMPONENT24:w===Hi?J=s.DEPTH_COMPONENT32F:w===Fo&&(J=s.DEPTH_COMPONENT16),J}function q(L,w){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==ui&&L.minFilter!==xi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function k(L){const w=L.target;w.removeEventListener("dispose",k),H(w),w.isVideoTexture&&g.delete(w)}function O(L){const w=L.target;w.removeEventListener("dispose",O),C(w)}function H(L){const w=r.get(L);if(w.__webglInit===void 0)return;const J=L.source,me=x.get(J);if(me){const _e=me[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(L),Object.keys(me).length===0&&x.delete(J)}r.remove(L)}function b(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const J=L.source,me=x.get(J);delete me[w.__cacheKey],u.memory.textures--}function C(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let _e=0;_e<w.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(w.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=L.textures;for(let me=0,_e=J.length;me<_e;me++){const he=r.get(J[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),u.memory.textures--),r.remove(J[me])}r.remove(L)}let B=0;function ce(){B=0}function Q(){const L=B;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),B+=1,L}function fe(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function le(L,w){const J=r.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(J,L,w);return}}n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function se(L,w){const J=r.get(L);if(L.version>0&&J.__version!==L.version){$(J,L,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function oe(L,w){const J=r.get(L);if(L.version>0&&J.__version!==L.version){$(J,L,w);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function F(L,w){const J=r.get(L);if(L.version>0&&J.__version!==L.version){de(J,L,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const te={[ed]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[td]:s.MIRRORED_REPEAT},ee={[ui]:s.NEAREST,[t_]:s.NEAREST_MIPMAP_NEAREST,[Ka]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[fu]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},U={[o_]:s.NEVER,[f_]:s.ALWAYS,[a_]:s.LESS,[Vm]:s.LEQUAL,[l_]:s.EQUAL,[d_]:s.GEQUAL,[c_]:s.GREATER,[u_]:s.NOTEQUAL};function K(L,w){if(w.type===Hi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xi||w.magFilter===fu||w.magFilter===Ka||w.magFilter===Kr||w.minFilter===xi||w.minFilter===fu||w.minFilter===Ka||w.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,te[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,te[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,te[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ee[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ee[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ui||w.minFilter!==Ka&&w.minFilter!==Kr||w.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ce(L,w){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",k));const me=w.source;let _e=x.get(me);_e===void 0&&(_e={},x.set(me,_e));const he=fe(w);if(he!==L.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),_e[he].usedTimes++;const Ge=_e[L.__cacheKey];Ge!==void 0&&(_e[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&b(w)),L.__cacheKey=he,L.__webglTexture=_e[he].texture}return J}function $(L,w,J){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Ce(L,w),he=w.source;n.bindTexture(me,L.__webglTexture,s.TEXTURE0+J);const Ge=r.get(he);if(he.version!==Ge.__version||_e===!0){n.activeTexture(s.TEXTURE0+J);const be=yt.getPrimaries(yt.workingColorSpace),Ie=w.colorSpace===_r?null:yt.getPrimaries(w.colorSpace),ct=w.colorSpace===_r||be===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Me=T(w.image,!1,a.maxTextureSize);Me=At(w,Me);const ke=c.convert(w.format,w.colorSpace),Je=c.convert(w.type);let et=N(w.internalFormat,ke,Je,w.colorSpace,w.isVideoTexture);K(me,w);let ze;const ft=w.mipmaps,rt=w.isVideoTexture!==!0,Tt=Ge.__version===void 0||_e===!0,G=he.dataReady,Pe=q(w,Me);if(w.isDepthTexture)et=R(w.format===Ws,w.type),Tt&&(rt?n.texStorage2D(s.TEXTURE_2D,1,et,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,ke,Je,null));else if(w.isDataTexture)if(ft.length>0){rt&&Tt&&n.texStorage2D(s.TEXTURE_2D,Pe,et,ft[0].width,ft[0].height);for(let ue=0,pe=ft.length;ue<pe;ue++)ze=ft[ue],rt?G&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,ke,Je,ze.data):n.texImage2D(s.TEXTURE_2D,ue,et,ze.width,ze.height,0,ke,Je,ze.data);w.generateMipmaps=!1}else rt?(Tt&&n.texStorage2D(s.TEXTURE_2D,Pe,et,Me.width,Me.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,Je,Me.data)):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,ke,Je,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,et,ft[0].width,ft[0].height,Me.depth);for(let ue=0,pe=ft.length;ue<pe;ue++)if(ze=ft[ue],w.format!==ci)if(ke!==null)if(rt){if(G)if(w.layerUpdates.size>0){const De=Tm(ze.width,ze.height,w.format,w.type);for(const Le of w.layerUpdates){const st=ze.data.subarray(Le*De/ze.data.BYTES_PER_ELEMENT,(Le+1)*De/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Le,ze.width,ze.height,1,ke,st)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Me.depth,ke,ze.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,et,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Me.depth,ke,Je,ze.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ue,et,ze.width,ze.height,Me.depth,0,ke,Je,ze.data)}else{rt&&Tt&&n.texStorage2D(s.TEXTURE_2D,Pe,et,ft[0].width,ft[0].height);for(let ue=0,pe=ft.length;ue<pe;ue++)ze=ft[ue],w.format!==ci?ke!==null?rt?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,ke,ze.data):n.compressedTexImage2D(s.TEXTURE_2D,ue,et,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?G&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,ke,Je,ze.data):n.texImage2D(s.TEXTURE_2D,ue,et,ze.width,ze.height,0,ke,Je,ze.data)}else if(w.isDataArrayTexture)if(rt){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,et,Me.width,Me.height,Me.depth),G)if(w.layerUpdates.size>0){const ue=Tm(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const De=Me.data.subarray(pe*ue/Me.data.BYTES_PER_ELEMENT,(pe+1)*ue/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,ke,Je,De)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,Je,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,ke,Je,Me.data);else if(w.isData3DTexture)rt?(Tt&&n.texStorage3D(s.TEXTURE_3D,Pe,et,Me.width,Me.height,Me.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,Je,Me.data)):n.texImage3D(s.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,ke,Je,Me.data);else if(w.isFramebufferTexture){if(Tt)if(rt)n.texStorage2D(s.TEXTURE_2D,Pe,et,Me.width,Me.height);else{let ue=Me.width,pe=Me.height;for(let De=0;De<Pe;De++)n.texImage2D(s.TEXTURE_2D,De,et,ue,pe,0,ke,Je,null),ue>>=1,pe>>=1}}else if(ft.length>0){if(rt&&Tt){const ue=$e(ft[0]);n.texStorage2D(s.TEXTURE_2D,Pe,et,ue.width,ue.height)}for(let ue=0,pe=ft.length;ue<pe;ue++)ze=ft[ue],rt?G&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,ke,Je,ze):n.texImage2D(s.TEXTURE_2D,ue,et,ke,Je,ze);w.generateMipmaps=!1}else if(rt){if(Tt){const ue=$e(Me);n.texStorage2D(s.TEXTURE_2D,Pe,et,ue.width,ue.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Je,Me)}else n.texImage2D(s.TEXTURE_2D,0,et,ke,Je,Me);y(w)&&v(me),Ge.__version=he.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function de(L,w,J){if(w.image.length!==6)return;const me=Ce(L,w),_e=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const he=r.get(_e);if(_e.version!==he.__version||me===!0){n.activeTexture(s.TEXTURE0+J);const Ge=yt.getPrimaries(yt.workingColorSpace),be=w.colorSpace===_r?null:yt.getPrimaries(w.colorSpace),Ie=w.colorSpace===_r||Ge===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!ct&&!Me?ke[pe]=T(w.image[pe],!0,a.maxCubemapSize):ke[pe]=Me?w.image[pe].image:w.image[pe],ke[pe]=At(w,ke[pe]);const Je=ke[0],et=c.convert(w.format,w.colorSpace),ze=c.convert(w.type),ft=N(w.internalFormat,et,ze,w.colorSpace),rt=w.isVideoTexture!==!0,Tt=he.__version===void 0||me===!0,G=_e.dataReady;let Pe=q(w,Je);K(s.TEXTURE_CUBE_MAP,w);let ue;if(ct){rt&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ft,Je.width,Je.height);for(let pe=0;pe<6;pe++){ue=ke[pe].mipmaps;for(let De=0;De<ue.length;De++){const Le=ue[De];w.format!==ci?et!==null?rt?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,et,Le.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ft,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,et,ze,Le.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ft,Le.width,Le.height,0,et,ze,Le.data)}}}else{if(ue=w.mipmaps,rt&&Tt){ue.length>0&&Pe++;const pe=$e(ke[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,et,ze,ke[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,ke[pe].width,ke[pe].height,0,et,ze,ke[pe].data);for(let De=0;De<ue.length;De++){const st=ue[De].image[pe].image;rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,st.width,st.height,et,ze,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ft,st.width,st.height,0,et,ze,st.data)}}else{rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,ze,ke[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,et,ze,ke[pe]);for(let De=0;De<ue.length;De++){const Le=ue[De];rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,et,ze,Le.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ft,et,ze,Le.image[pe])}}}y(w)&&v(s.TEXTURE_CUBE_MAP),he.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ye(L,w,J,me,_e,he){const Ge=c.convert(J.format,J.colorSpace),be=c.convert(J.type),Ie=N(J.internalFormat,Ge,be,J.colorSpace),ct=r.get(w),Me=r.get(J);if(Me.__renderTarget=w,!ct.__hasExternalTextures){const ke=Math.max(1,w.width>>he),Je=Math.max(1,w.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,he,Ie,ke,Je,w.depth,0,Ge,be,null):n.texImage2D(_e,he,Ie,ke,Je,0,Ge,be,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Me.__webglTexture,0,pt(w)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Me.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(L,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const me=w.depthTexture,_e=me&&me.isDepthTexture?me.type:null,he=R(w.stencilBuffer,_e),Ge=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=pt(w);dt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,he,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,he,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,he,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,L)}else{const me=w.textures;for(let _e=0;_e<me.length;_e++){const he=me[_e],Ge=c.convert(he.format,he.colorSpace),be=c.convert(he.type),Ie=N(he.internalFormat,Ge,be,he.colorSpace),ct=pt(w);J&&dt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ie,w.width,w.height):dt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Ie,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le(w.depthTexture,0);const _e=me.__webglTexture,he=pt(w);if(w.depthTexture.format===ks)dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(w.depthTexture.format===Ws)dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Re(L){const w=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=me}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,L)}else if(J){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),ge(w.__webglDepthbuffer[me],L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ge(w.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(L,w,J){const me=r.get(L);w!==void 0&&ye(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Re(L)}function gt(L){const w=L.texture,J=r.get(L),me=r.get(w);L.addEventListener("dispose",O);const _e=L.textures,he=L.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,u.memory.textures++),he){J.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[be]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)J.__webglFramebuffer[be][Ie]=s.createFramebuffer()}else J.__webglFramebuffer[be]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)J.__webglFramebuffer[be]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let be=0,Ie=_e.length;be<Ie;be++){const ct=r.get(_e[be]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&dt(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let be=0;be<_e.length;be++){const Ie=_e[be];J.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[be]);const ct=c.convert(Ie.format,Ie.colorSpace),Me=c.convert(Ie.type),ke=N(Ie.internalFormat,ct,Me,Ie.colorSpace,L.isXRRenderTarget===!0),Je=pt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,ke,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,J.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),K(s.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)ye(J.__webglFramebuffer[be][Ie],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie);else ye(J.__webglFramebuffer[be],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(w)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let be=0,Ie=_e.length;be<Ie;be++){const ct=_e[be],Me=r.get(ct);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),K(s.TEXTURE_2D,ct),ye(J.__webglFramebuffer,L,ct,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),y(ct)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let be=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,me.__webglTexture),K(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)ye(J.__webglFramebuffer[Ie],L,w,s.COLOR_ATTACHMENT0,be,Ie);else ye(J.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,be,0);y(w)&&v(be),n.unbindTexture()}L.depthBuffer&&Re(L)}function ut(L){const w=L.textures;for(let J=0,me=w.length;J<me;J++){const _e=w[J];if(y(_e)){const he=D(L),Ge=r.get(_e).__webglTexture;n.bindTexture(he,Ge),v(he),n.unbindTexture()}}}const Rt=[],X=[];function hn(L){if(L.samples>0){if(dt(L)===!1){const w=L.textures,J=L.width,me=L.height;let _e=s.COLOR_BUFFER_BIT;const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(L),be=w.length>1;if(be)for(let Ie=0;Ie<w.length;Ie++)n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ie]);const ct=r.get(w[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,J,me,0,0,J,me,_e,s.NEAREST),h===!0&&(Rt.length=0,X.length=0,Rt.push(s.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Rt.push(he),X.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ie=0;Ie<w.length;Ie++){n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ie]);const ct=r.get(w[Ie]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,ct,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function pt(L){return Math.min(a.maxSamples,L.samples)}function dt(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(L){const w=u.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function At(L,w){const J=L.colorSpace,me=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Xs&&J!==_r&&(yt.getTransfer(J)===bt?(me!==ci||_e!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function $e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=ce,this.setTexture2D=le,this.setTexture2DArray=se,this.setTexture3D=oe,this.setTextureCube=F,this.rebindTextures=qe,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=dt}function vE(s,e){function n(r,a=_r){let c;const u=yt.getTransfer(a);if(r===Wi)return s.UNSIGNED_BYTE;if(r===Id)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Fd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Um)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Lm)return s.BYTE;if(r===Dm)return s.SHORT;if(r===Fo)return s.UNSIGNED_SHORT;if(r===Ud)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===Im)return s.ALPHA;if(r===Fm)return s.RGB;if(r===ci)return s.RGBA;if(r===Om)return s.LUMINANCE;if(r===km)return s.LUMINANCE_ALPHA;if(r===ks)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===zm)return s.RED;if(r===Od)return s.RED_INTEGER;if(r===Bm)return s.RG;if(r===kd)return s.RG_INTEGER;if(r===zd)return s.RGBA_INTEGER;if(r===_l||r===xl||r===yl||r===Sl)if(u===bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===_l)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===_l)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nd||r===id||r===rd||r===sd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===nd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===id)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===od||r===ad||r===ld)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===od||r===ad)return u===bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ld)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cd||r===ud||r===dd||r===fd||r===hd||r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===cd)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ud)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dd)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pd)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===md)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gd)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vd)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_d)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xd)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yd)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sd)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Md)return u===bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ml||r===Ed||r===wd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ml)return u===bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ed)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hm||r===Td||r===Ad||r===Cd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ml)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Td)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ad)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class _E extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vl extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xE={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),v=this._getHandJoint(m,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new vl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const yE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ME{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new yn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new di({vertexShader:yE,fragmentShader:SE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kn(new Ys(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EE extends qs{constructor(e,n){super();const r=this;let a=null,c=1,u=null,f="local-floor",h=1,m=null,g=null,_=null,x=null,S=null,E=null;const T=new ME,y=n.getContextAttributes();let v=null,D=null;const N=[],R=[],q=new Nt;let k=null;const O=new $n;O.viewport=new Ht;const H=new $n;H.viewport=new Ht;const b=[O,H],C=new _E;let B=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let de=N[$];return de===void 0&&(de=new Hu,N[$]=de),de.getTargetRaySpace()},this.getControllerGrip=function($){let de=N[$];return de===void 0&&(de=new Hu,N[$]=de),de.getGripSpace()},this.getHand=function($){let de=N[$];return de===void 0&&(de=new Hu,N[$]=de),de.getHandSpace()};function Q($){const de=R.indexOf($.inputSource);if(de===-1)return;const ye=N[de];ye!==void 0&&(ye.update($.inputSource,$.frame,m||u),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function fe(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",le);for(let $=0;$<N.length;$++){const de=R[$];de!==null&&(R[$]=null,N[$].disconnect(de))}B=null,ce=null,T.reset(),e.setRenderTarget(v),S=null,x=null,_=null,a=null,D=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",le),y.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(q),a.renderState.layers===void 0){const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,de),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Mr(S.framebufferWidth,S.framebufferHeight,{format:ci,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,ye=null,ge=null;y.depth&&(ge=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=y.stencil?Ws:ks,ye=y.stencil?Gs:Zr);const Te={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:c};_=new XRWebGLBinding(a,n),x=_.createProjectionLayer(Te),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Mr(x.textureWidth,x.textureHeight,{format:ci,type:Wi,depthTexture:new ng(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await a.requestReferenceSpace(f),Ce.setContext(a),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function le($){for(let de=0;de<$.removed.length;de++){const ye=$.removed[de],ge=R.indexOf(ye);ge>=0&&(R[ge]=null,N[ge].disconnect(ye))}for(let de=0;de<$.added.length;de++){const ye=$.added[de];let ge=R.indexOf(ye);if(ge===-1){for(let Re=0;Re<N.length;Re++)if(Re>=R.length){R.push(ye),ge=Re;break}else if(R[Re]===null){R[Re]=ye,ge=Re;break}if(ge===-1)break}const Te=N[ge];Te&&Te.connect(ye)}}const se=new ae,oe=new ae;function F($,de,ye){se.setFromMatrixPosition(de.matrixWorld),oe.setFromMatrixPosition(ye.matrixWorld);const ge=se.distanceTo(oe),Te=de.projectionMatrix.elements,Re=ye.projectionMatrix.elements,qe=Te[14]/(Te[10]-1),gt=Te[14]/(Te[10]+1),ut=(Te[9]+1)/Te[5],Rt=(Te[9]-1)/Te[5],X=(Te[8]-1)/Te[0],hn=(Re[8]+1)/Re[0],pt=qe*X,dt=qe*hn,Ke=ge/(-X+hn),At=Ke*-X;if(de.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(At),$.translateZ(Ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(de.projectionMatrix),$.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const $e=qe+Ke,L=gt+Ke,w=pt-At,J=dt+(ge-At),me=ut*gt/L*$e,_e=Rt*gt/L*$e;$.projectionMatrix.makePerspective(w,J,me,_e,$e,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,de){de===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(de.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let de=$.near,ye=$.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(ye=T.depthFar)),C.near=H.near=O.near=de,C.far=H.far=O.far=ye,(B!==C.near||ce!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ce=C.far),O.layers.mask=$.layers.mask|2,H.layers.mask=$.layers.mask|4,C.layers.mask=O.layers.mask|H.layers.mask;const ge=$.parent,Te=C.cameras;te(C,ge);for(let Re=0;Re<Te.length;Re++)te(Te[Re],ge);Te.length===2?F(C,O,H):C.projectionMatrix.copy(O.projectionMatrix),ee($,C,ge)};function ee($,de,ye){ye===null?$.matrix.copy(de.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(de.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(de.projectionMatrix),$.projectionMatrixInverse.copy(de.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Rd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function($){h=$,x!==null&&(x.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let U=null;function K($,de){if(g=de.getViewerPose(m||u),E=de,g!==null){const ye=g.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let ge=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,ge=!0);for(let Re=0;Re<ye.length;Re++){const qe=ye[Re];let gt=null;if(S!==null)gt=S.getViewport(qe);else{const Rt=_.getViewSubImage(x,qe);gt=Rt.viewport,Re===0&&(e.setRenderTargetTextures(D,Rt.colorTexture,x.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(D))}let ut=b[Re];ut===void 0&&(ut=new $n,ut.layers.enable(Re),ut.viewport=new Ht,b[Re]=ut),ut.matrix.fromArray(qe.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(qe.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(gt.x,gt.y,gt.width,gt.height),Re===0&&(C.matrix.copy(ut.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ge===!0&&C.cameras.push(ut)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Re=_.getDepthInformation(ye[0]);Re&&Re.isValid&&Re.texture&&T.init(e,Re,a.renderState)}}for(let ye=0;ye<N.length;ye++){const ge=R[ye],Te=N[ye];ge!==null&&Te!==void 0&&Te.update(ge,de,m||u)}U&&U($,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ce=new tg;Ce.setAnimationLoop(K),this.setAnimationLoop=function($){U=$},this.dispose=function(){}}}const Gr=new Mi,wE=new Vt;function TE(s,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Zm(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,D,N,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,R)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),T(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,D,N):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===xn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===xn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=e.get(v),N=D.envMap,R=D.envMapRotation;N&&(y.envMap.value=N,Gr.copy(R),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),y.envMapRotation.value.setFromMatrix4(wE.makeRotationFromEuler(Gr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,D,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=N*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===xn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const D=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function AE(s,e,n,r){let a={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,N){const R=N.program;r.uniformBlockBinding(D,R)}function m(D,N){let R=a[D.id];R===void 0&&(E(D),R=g(D),a[D.id]=R,D.addEventListener("dispose",y));const q=N.program;r.updateUBOMapping(D,q);const k=e.render.frame;c[D.id]!==k&&(x(D),c[D.id]=k)}function g(D){const N=_();D.__bindingPointIndex=N;const R=s.createBuffer(),q=D.__size,k=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,q,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,R),R}function _(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const N=a[D.id],R=D.uniforms,q=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let k=0,O=R.length;k<O;k++){const H=Array.isArray(R[k])?R[k]:[R[k]];for(let b=0,C=H.length;b<C;b++){const B=H[b];if(S(B,k,b,q)===!0){const ce=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let le=0;le<Q.length;le++){const se=Q[le],oe=T(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,ce+fe,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,fe),fe+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ce,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,N,R,q){const k=D.value,O=N+"_"+R;if(q[O]===void 0)return typeof k=="number"||typeof k=="boolean"?q[O]=k:q[O]=k.clone(),!0;{const H=q[O];if(typeof k=="number"||typeof k=="boolean"){if(H!==k)return q[O]=k,!0}else if(H.equals(k)===!1)return H.copy(k),!0}return!1}function E(D){const N=D.uniforms;let R=0;const q=16;for(let O=0,H=N.length;O<H;O++){const b=Array.isArray(N[O])?N[O]:[N[O]];for(let C=0,B=b.length;C<B;C++){const ce=b[C],Q=Array.isArray(ce.value)?ce.value:[ce.value];for(let fe=0,le=Q.length;fe<le;fe++){const se=Q[fe],oe=T(se),F=R%q,te=F%oe.boundary,ee=F+te;R+=te,ee!==0&&q-ee<oe.storage&&(R+=q-ee),ce.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=R,R+=oe.storage}}}const k=R%q;return k>0&&(R+=q-k),D.__size=R,D.__cache={},this}function T(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),N}function y(D){const N=D.target;N.removeEventListener("dispose",y);const R=u.indexOf(N.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete c[N.id]}function v(){for(const D in a)s.deleteBuffer(a[D]);u=[],a={},c={}}return{bind:h,update:m,dispose:v}}class Gd{constructor(e={}){const{canvas:n=p_(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,v=null;const D=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=yr,this.toneMappingExposure=1;const R=this;let q=!1,k=0,O=0,H=null,b=-1,C=null;const B=new Ht,ce=new Ht;let Q=null;const fe=new St(0);let le=0,se=n.width,oe=n.height,F=1,te=null,ee=null;const U=new Ht(0,0,se,oe),K=new Ht(0,0,se,oe);let Ce=!1;const $=new eg;let de=!1,ye=!1;const ge=new Vt,Te=new Vt,Re=new ae,qe=new Ht,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Rt(){return H===null?F:1}let X=r;function hn(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",Le,!1),X===null){const W="webgl2";if(X=hn(W,A),X===null)throw hn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,dt,Ke,At,$e,L,w,J,me,_e,he,Ge,be,Ie,ct,Me,ke,Je,et,ze,ft,rt,Tt,G;function Pe(){pt=new LS(X),pt.init(),rt=new vE(X,pt),dt=new AS(X,pt,e,rt),Ke=new pE(X,pt),dt.reverseDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),At=new IS(X),$e=new JM,L=new gE(X,pt,Ke,$e,dt,rt,At),w=new RS(R),J=new NS(R),me=new V_(X),Tt=new wS(X,me),_e=new DS(X,me,At,Tt),he=new OS(X,_e,me,At),et=new FS(X,dt,L),Me=new CS($e),Ge=new QM(R,w,J,pt,dt,Tt,Me),be=new TE(R,$e),Ie=new tE,ct=new aE(pt),Je=new ES(R,w,J,Ke,he,S,h),ke=new fE(R,he,dt),G=new AE(X,At,dt,Ke),ze=new TS(X,pt,At),ft=new US(X,pt,At),At.programs=Ge.programs,R.capabilities=dt,R.extensions=pt,R.properties=$e,R.renderLists=Ie,R.shadowMap=ke,R.state=Ke,R.info=At}Pe();const ue=new EE(R,X);this.xr=ue,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(se,oe,!1))},this.getSize=function(A){return A.set(se,oe)},this.setSize=function(A,W,ie=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,oe=W,n.width=Math.floor(A*F),n.height=Math.floor(W*F),ie===!0&&(n.style.width=A+"px",n.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(se*F,oe*F).floor()},this.setDrawingBufferSize=function(A,W,ie){se=A,oe=W,F=ie,n.width=Math.floor(A*ie),n.height=Math.floor(W*ie),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,W,ie,re){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,W,ie,re),Ke.viewport(B.copy(U).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,W,ie,re){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,W,ie,re),Ke.scissor(ce.copy(K).multiplyScalar(F).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){Ke.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){te=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(A=!0,W=!0,ie=!0){let re=0;if(A){let j=!1;if(H!==null){const Ae=H.texture.format;j=Ae===zd||Ae===kd||Ae===Od}if(j){const Ae=H.texture.type,Ee=Ae===Wi||Ae===Zr||Ae===Fo||Ae===Gs||Ae===Id||Ae===Fd,We=Je.getClearColor(),He=Je.getClearAlpha(),tt=We.r,it=We.g,je=We.b;Ee?(E[0]=tt,E[1]=it,E[2]=je,E[3]=He,X.clearBufferuiv(X.COLOR,0,E)):(T[0]=tt,T[1]=it,T[2]=je,T[3]=He,X.clearBufferiv(X.COLOR,0,T))}else re|=X.COLOR_BUFFER_BIT}W&&(re|=X.DEPTH_BUFFER_BIT),ie&&(re|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),Ie.dispose(),ct.dispose(),$e.dispose(),w.dispose(),J.dispose(),he.dispose(),Tt.dispose(),G.dispose(),Ge.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Qr),ue.removeEventListener("sessionend",ji),Ei.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const A=At.autoReset,W=ke.enabled,ie=ke.autoUpdate,re=ke.needsUpdate,j=ke.type;Pe(),At.autoReset=A,ke.enabled=W,ke.autoUpdate=ie,ke.needsUpdate=re,ke.type=j}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const W=A.target;W.removeEventListener("dispose",st),Dt(W)}function Dt(A){Xt(A),$e.remove(A)}function Xt(A){const W=$e.get(A).programs;W!==void 0&&(W.forEach(function(ie){Ge.releaseProgram(ie)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ie,re,j,Ae){W===null&&(W=gt);const Ee=j.isMesh&&j.matrixWorld.determinant()<0,We=Xo(A,W,ie,re,j);Ke.setMaterial(re,Ee);let He=ie.index,tt=1;if(re.wireframe===!0){if(He=_e.getWireframeAttribute(ie),He===void 0)return;tt=2}const it=ie.drawRange,je=ie.attributes.position;let vt=it.start*tt,wt=(it.start+it.count)*tt;Ae!==null&&(vt=Math.max(vt,Ae.start*tt),wt=Math.min(wt,(Ae.start+Ae.count)*tt)),He!==null?(vt=Math.max(vt,0),wt=Math.min(wt,He.count)):je!=null&&(vt=Math.max(vt,0),wt=Math.min(wt,je.count));const mt=wt-vt;if(mt<0||mt===1/0)return;Tt.setup(j,re,We,ie,He);let sn,ot=ze;if(He!==null&&(sn=me.get(He),ot=ft,ot.setIndex(sn)),j.isMesh)re.wireframe===!0?(Ke.setLineWidth(re.wireframeLinewidth*Rt()),ot.setMode(X.LINES)):ot.setMode(X.TRIANGLES);else if(j.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),Ke.setLineWidth(Ye*Rt()),j.isLineSegments?ot.setMode(X.LINES):j.isLineLoop?ot.setMode(X.LINE_LOOP):ot.setMode(X.LINE_STRIP)}else j.isPoints?ot.setMode(X.POINTS):j.isSprite&&ot.setMode(X.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ot.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))ot.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,Zn=j._multiDrawCounts,Mt=j._multiDrawCount,on=He?me.get(He).bytesPerElement:1,Qn=$e.get(re).currentProgram.getUniforms();for(let qt=0;qt<Mt;qt++)Qn.setValue(X,"_gl_DrawID",qt),ot.render(Ye[qt]/on,Zn[qt])}else if(j.isInstancedMesh)ot.renderInstances(vt,mt,j.count);else if(ie.isInstancedBufferGeometry){const Ye=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Zn=Math.min(ie.instanceCount,Ye);ot.renderInstances(vt,mt,Zn)}else ot.render(vt,mt)};function _t(A,W,ie){A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,Jr(A,W,ie),A.side=Sr,A.needsUpdate=!0,Jr(A,W,ie),A.side=Bi):Jr(A,W,ie)}this.compile=function(A,W,ie=null){ie===null&&(ie=A),v=ct.get(ie),v.init(W),N.push(v),ie.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),A!==ie&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const re=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ae=j.material;if(Ae)if(Array.isArray(Ae))for(let Ee=0;Ee<Ae.length;Ee++){const We=Ae[Ee];_t(We,ie,j),re.add(We)}else _t(Ae,ie,j),re.add(Ae)}),N.pop(),v=null,re},this.compileAsync=function(A,W,ie=null){const re=this.compile(A,W,ie);return new Promise(j=>{function Ae(){if(re.forEach(function(Ee){$e.get(Ee).currentProgram.isReady()&&re.delete(Ee)}),re.size===0){j(A);return}setTimeout(Ae,10)}pt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Sn=null;function pn(A){Sn&&Sn(A)}function Qr(){Ei.stop()}function ji(){Ei.start()}const Ei=new tg;Ei.setAnimationLoop(pn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){Sn=A,ue.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},ue.addEventListener("sessionstart",Qr),ue.addEventListener("sessionend",ji),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(W),W=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,W,H),v=ct.get(A,N.length),v.init(W),N.push(v),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,de=Me.init(this.clippingPlanes,ye),y=Ie.get(A,D.length),y.init(),D.push(y),ue.enabled===!0&&ue.isPresenting===!0){const Ae=R.xr.getDepthSensingMesh();Ae!==null&&wi(Ae,W,-1/0,R.sortObjects)}wi(A,W,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(te,ee),ut=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ut&&Je.addToRenderList(y,A),this.info.render.frame++,de===!0&&Me.beginShadows();const ie=v.state.shadowsArray;ke.render(ie,A,W),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,j=y.transmissive;if(v.setupLights(),W.isArrayCamera){const Ae=W.cameras;if(j.length>0)for(let Ee=0,We=Ae.length;Ee<We;Ee++){const He=Ae[Ee];Tr(re,j,A,He)}ut&&Je.render(A);for(let Ee=0,We=Ae.length;Ee<We;Ee++){const He=Ae[Ee];wr(y,A,He,He.viewport)}}else j.length>0&&Tr(re,j,A,W),ut&&Je.render(A),wr(y,A,W);H!==null&&(L.updateMultisampleRenderTarget(H),L.updateRenderTargetMipmap(H)),A.isScene===!0&&A.onAfterRender(R,A,W),Tt.resetDefaultState(),b=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],de===!0&&Me.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function wi(A,W,ie,re){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){re&&qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Ee=he.update(A),We=A.material;We.visible&&y.push(A,Ee,We,ie,qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const Ee=he.update(A),We=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qe.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),qe.copy(Ee.boundingSphere.center)),qe.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(We)){const He=Ee.groups;for(let tt=0,it=He.length;tt<it;tt++){const je=He[tt],vt=We[je.materialIndex];vt&&vt.visible&&y.push(A,Ee,vt,ie,qe.z,je)}}else We.visible&&y.push(A,Ee,We,ie,qe.z,null)}}const Ae=A.children;for(let Ee=0,We=Ae.length;Ee<We;Ee++)wi(Ae[Ee],W,ie,re)}function wr(A,W,ie,re){const j=A.opaque,Ae=A.transmissive,Ee=A.transparent;v.setupLightsView(ie),de===!0&&Me.setGlobalState(R.clippingPlanes,ie),re&&Ke.viewport(B.copy(re)),j.length>0&&Xi(j,W,ie),Ae.length>0&&Xi(Ae,W,ie),Ee.length>0&&Xi(Ee,W,ie),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Tr(A,W,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new Mr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?zo:Wi,minFilter:Kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const Ae=v.state.transmissionRenderTarget[re.id],Ee=re.viewport||B;Ae.setSize(Ee.z,Ee.w);const We=R.getRenderTarget();R.setRenderTarget(Ae),R.getClearColor(fe),le=R.getClearAlpha(),le<1&&R.setClearColor(16777215,.5),R.clear(),ut&&Je.render(ie);const He=R.toneMapping;R.toneMapping=yr;const tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),de===!0&&Me.setGlobalState(R.clippingPlanes,re),Xi(A,ie,re),L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae),pt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let je=0,vt=W.length;je<vt;je++){const wt=W[je],mt=wt.object,sn=wt.geometry,ot=wt.material,Ye=wt.group;if(ot.side===Bi&&mt.layers.test(re.layers)){const Zn=ot.side;ot.side=xn,ot.needsUpdate=!0,Wo(mt,ie,re,sn,ot,Ye),ot.side=Zn,ot.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae))}R.setRenderTarget(We),R.setClearColor(fe,le),tt!==void 0&&(re.viewport=tt),R.toneMapping=He}function Xi(A,W,ie){const re=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Ae=A.length;j<Ae;j++){const Ee=A[j],We=Ee.object,He=Ee.geometry,tt=re===null?Ee.material:re,it=Ee.group;We.layers.test(ie.layers)&&Wo(We,W,ie,He,tt,it)}}function Wo(A,W,ie,re,j,Ae){A.onBeforeRender(R,W,ie,re,j,Ae),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,W,ie,re,A,Ae),j.transparent===!0&&j.side===Bi&&j.forceSinglePass===!1?(j.side=xn,j.needsUpdate=!0,R.renderBufferDirect(ie,W,re,j,A,Ae),j.side=Sr,j.needsUpdate=!0,R.renderBufferDirect(ie,W,re,j,A,Ae),j.side=Bi):R.renderBufferDirect(ie,W,re,j,A,Ae),A.onAfterRender(R,W,ie,re,j,Ae)}function Jr(A,W,ie){W.isScene!==!0&&(W=gt);const re=$e.get(A),j=v.state.lights,Ae=v.state.shadowsArray,Ee=j.state.version,We=Ge.getParameters(A,j.state,Ae,W,ie),He=Ge.getProgramCacheKey(We);let tt=re.programs;re.environment=A.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(A.isMeshStandardMaterial?J:w).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",st),tt=new Map,re.programs=tt);let it=tt.get(He);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===Ee)return fi(A,We),it}else We.uniforms=Ge.getUniforms(A),A.onBeforeCompile(We,R),it=Ge.acquireProgram(We,He),tt.set(He,it),re.uniforms=We.uniforms;const je=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Me.uniform),fi(A,We),re.needsLights=bl(A),re.lightsStateVersion=Ee,re.needsLights&&(je.ambientLightColor.value=j.state.ambient,je.lightProbe.value=j.state.probe,je.directionalLights.value=j.state.directional,je.directionalLightShadows.value=j.state.directionalShadow,je.spotLights.value=j.state.spot,je.spotLightShadows.value=j.state.spotShadow,je.rectAreaLights.value=j.state.rectArea,je.ltc_1.value=j.state.rectAreaLTC1,je.ltc_2.value=j.state.rectAreaLTC2,je.pointLights.value=j.state.point,je.pointLightShadows.value=j.state.pointShadow,je.hemisphereLights.value=j.state.hemi,je.directionalShadowMap.value=j.state.directionalShadowMap,je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,je.spotShadowMap.value=j.state.spotShadowMap,je.spotLightMatrix.value=j.state.spotLightMatrix,je.spotLightMap.value=j.state.spotLightMap,je.pointShadowMap.value=j.state.pointShadowMap,je.pointShadowMatrix.value=j.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function jo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=El.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function fi(A,W){const ie=$e.get(A);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function Xo(A,W,ie,re,j){W.isScene!==!0&&(W=gt),L.resetTextureUnits();const Ae=W.fog,Ee=re.isMeshStandardMaterial?W.environment:null,We=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Xs,He=(re.isMeshStandardMaterial?J:w).get(re.envMap||Ee),tt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,it=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!ie.morphAttributes.position,vt=!!ie.morphAttributes.normal,wt=!!ie.morphAttributes.color;let mt=yr;re.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(mt=R.toneMapping);const sn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ot=sn!==void 0?sn.length:0,Ye=$e.get(re),Zn=v.state.lights;if(de===!0&&(ye===!0||A!==C)){const mn=A===C&&re.id===b;Me.setState(re,A,mn)}let Mt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Zn.state.version||Ye.outputColorSpace!==We||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==He||re.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==it||Ye.morphTargets!==je||Ye.morphNormals!==vt||Ye.morphColors!==wt||Ye.toneMapping!==mt||Ye.morphTargetsCount!==ot)&&(Mt=!0):(Mt=!0,Ye.__version=re.version);let on=Ye.currentProgram;Mt===!0&&(on=Jr(re,W,j));let Qn=!1,qt=!1,hi=!1;const Pt=on.getUniforms(),zn=Ye.uniforms;if(Ke.useProgram(on.program)&&(Qn=!0,qt=!0,hi=!0),re.id!==b&&(b=re.id,qt=!0),Qn||C!==A){Ke.buffers.depth.getReversed()?(ge.copy(A.projectionMatrix),g_(ge),v_(ge),Pt.setValue(X,"projectionMatrix",ge)):Pt.setValue(X,"projectionMatrix",A.projectionMatrix),Pt.setValue(X,"viewMatrix",A.matrixWorldInverse);const Bn=Pt.map.cameraPosition;Bn!==void 0&&Bn.setValue(X,Re.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,qt=!0,hi=!0)}if(j.isSkinnedMesh){Pt.setOptional(X,j,"bindMatrix"),Pt.setOptional(X,j,"bindMatrixInverse");const mn=j.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Pt.setValue(X,"boneTexture",mn.boneTexture,L))}j.isBatchedMesh&&(Pt.setOptional(X,j,"batchingTexture"),Pt.setValue(X,"batchingTexture",j._matricesTexture,L),Pt.setOptional(X,j,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",j._indirectTexture,L),Pt.setOptional(X,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",j._colorsTexture,L));const Ti=ie.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&et.update(j,ie,on),(qt||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,Pt.setValue(X,"receiveShadow",j.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(zn.envMap.value=He,zn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(zn.envMapIntensity.value=W.environmentIntensity),qt&&(Pt.setValue(X,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&qo(zn,hi),Ae&&re.fog===!0&&be.refreshFogUniforms(zn,Ae),be.refreshMaterialUniforms(zn,re,F,oe,v.state.transmissionRenderTarget[A.id]),El.upload(X,jo(Ye),zn,L)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(El.upload(X,jo(Ye),zn,L),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Pt.setValue(X,"center",j.center),Pt.setValue(X,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(X,"normalMatrix",j.normalMatrix),Pt.setValue(X,"modelMatrix",j.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const mn=re.uniformsGroups;for(let Bn=0,Mn=mn.length;Bn<Mn;Bn++){const Yo=mn[Bn];G.update(Yo,on),G.bind(Yo,on)}}return on}function qo(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function bl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,W,ie){$e.get(A.texture).__webglTexture=W,$e.get(A.depthTexture).__webglTexture=ie;const re=$e.get(A);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const ie=$e.get(A);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ie=0){H=A,k=W,O=ie;let re=!0,j=null,Ae=!1,Ee=!1;if(A){const He=$e.get(A);if(He.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(X.FRAMEBUFFER,null),re=!1;else if(He.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(He.__hasExternalTextures)L.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(He.__boundDepthTexture!==je){if(je!==null&&$e.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ee=!0);const it=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[W])?j=it[W][ie]:j=it[W],Ae=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?j=$e.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[ie]:j=it,B.copy(A.viewport),ce.copy(A.scissor),Q=A.scissorTest}else B.copy(U).multiplyScalar(F).floor(),ce.copy(K).multiplyScalar(F).floor(),Q=Ce;if(Ke.bindFramebuffer(X.FRAMEBUFFER,j)&&re&&Ke.drawBuffers(A,j),Ke.viewport(B),Ke.scissor(ce),Ke.setScissorTest(Q),Ae){const He=$e.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,ie)}else if(Ee){const He=$e.get(A.texture),tt=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,He.__webglTexture,ie||0,tt)}b=-1},this.readRenderTargetPixels=function(A,W,ie,re,j,Ae,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(We=We[Ee]),We){Ke.bindFramebuffer(X.FRAMEBUFFER,We);try{const He=A.texture,tt=He.format,it=He.type;if(!dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-re&&ie>=0&&ie<=A.height-j&&X.readPixels(W,ie,re,j,rt.convert(tt),rt.convert(it),Ae)}finally{const He=H!==null?$e.get(H).__webglFramebuffer:null;Ke.bindFramebuffer(X.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,W,ie,re,j,Ae,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(We=We[Ee]),We){const He=A.texture,tt=He.format,it=He.type;if(!dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-re&&ie>=0&&ie<=A.height-j){Ke.bindFramebuffer(X.FRAMEBUFFER,We);const je=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,je),X.bufferData(X.PIXEL_PACK_BUFFER,Ae.byteLength,X.STREAM_READ),X.readPixels(W,ie,re,j,rt.convert(tt),rt.convert(it),0);const vt=H!==null?$e.get(H).__webglFramebuffer:null;Ke.bindFramebuffer(X.FRAMEBUFFER,vt);const wt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await m_(X,wt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,je),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ae),X.deleteBuffer(je),X.deleteSync(wt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,ie=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const re=Math.pow(2,-ie),j=Math.floor(A.image.width*re),Ae=Math.floor(A.image.height*re),Ee=W!==null?W.x:0,We=W!==null?W.y:0;L.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,ie,0,0,Ee,We,j,Ae),Ke.unbindTexture()},this.copyTextureToTexture=function(A,W,ie=null,re=null,j=0){A.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,A=arguments[1],W=arguments[2],j=arguments[3]||0,ie=null);let Ae,Ee,We,He,tt,it,je,vt,wt;const mt=A.isCompressedTexture?A.mipmaps[j]:A.image;ie!==null?(Ae=ie.max.x-ie.min.x,Ee=ie.max.y-ie.min.y,We=ie.isBox3?ie.max.z-ie.min.z:1,He=ie.min.x,tt=ie.min.y,it=ie.isBox3?ie.min.z:0):(Ae=mt.width,Ee=mt.height,We=mt.depth||1,He=0,tt=0,it=0),re!==null?(je=re.x,vt=re.y,wt=re.z):(je=0,vt=0,wt=0);const sn=rt.convert(W.format),ot=rt.convert(W.type);let Ye;W.isData3DTexture?(L.setTexture3D(W,0),Ye=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),Ye=X.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),Ye=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const Zn=X.getParameter(X.UNPACK_ROW_LENGTH),Mt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),on=X.getParameter(X.UNPACK_SKIP_PIXELS),Qn=X.getParameter(X.UNPACK_SKIP_ROWS),qt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,mt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,He),X.pixelStorei(X.UNPACK_SKIP_ROWS,tt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,it);const hi=A.isDataArrayTexture||A.isData3DTexture,Pt=W.isDataArrayTexture||W.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const zn=$e.get(A),Ti=$e.get(W),mn=$e.get(zn.__renderTarget),Bn=$e.get(Ti.__renderTarget);Ke.bindFramebuffer(X.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ke.bindFramebuffer(X.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Mn=0;Mn<We;Mn++)hi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$e.get(A).__webglTexture,j,it+Mn),A.isDepthTexture?(Pt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$e.get(W).__webglTexture,j,wt+Mn),X.blitFramebuffer(He,tt,Ae,Ee,je,vt,Ae,Ee,X.DEPTH_BUFFER_BIT,X.NEAREST)):Pt?X.copyTexSubImage3D(Ye,j,je,vt,wt+Mn,He,tt,Ae,Ee):X.copyTexSubImage2D(Ye,j,je,vt,wt+Mn,He,tt,Ae,Ee);Ke.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ye,j,je,vt,wt,Ae,Ee,We,sn,ot,mt.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Ye,j,je,vt,wt,Ae,Ee,We,sn,mt.data):X.texSubImage3D(Ye,j,je,vt,wt,Ae,Ee,We,sn,ot,mt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,j,je,vt,Ae,Ee,sn,ot,mt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,j,je,vt,mt.width,mt.height,sn,mt.data):X.texSubImage2D(X.TEXTURE_2D,j,je,vt,Ae,Ee,sn,ot,mt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Zn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Mt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,on),X.pixelStorei(X.UNPACK_SKIP_ROWS,Qn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,qt),j===0&&W.generateMipmaps&&X.generateMipmap(Ye),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ie=null,re=null,j=0){return A.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,A=arguments[2],W=arguments[3],j=arguments[4]||0),Uo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ie,re,j)},this.initRenderTarget=function(A){$e.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){k=0,O=0,H=null,Ke.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=yt._getUnpackColorSpace()}}class Wd extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jd extends Er{constructor(e=1,n=32,r=16,a=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const g=[],_=new ae,x=new ae,S=[],E=[],T=[],y=[];for(let v=0;v<=r;v++){const D=[],N=v/r;let R=0;v===0&&u===0?R=.5/n:v===r&&h===Math.PI&&(R=-.5/n);for(let q=0;q<=n;q++){const k=q/n;_.x=-e*Math.cos(a+k*c)*Math.sin(u+N*f),_.y=e*Math.cos(u+N*f),_.z=e*Math.sin(a+k*c)*Math.sin(u+N*f),E.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),y.push(k+R,1-N),D.push(m++)}g.push(D)}for(let v=0;v<r;v++)for(let D=0;D<n;D++){const N=g[v][D+1],R=g[v][D],q=g[v+1][D],k=g[v+1][D+1];(v!==0||u>0)&&S.push(N,R,k),(v!==r-1||h<Math.PI)&&S.push(R,q,k)}this.setIndex(S),this.setAttribute("position",new Si(E,3)),this.setAttribute("normal",new Si(T,3)),this.setAttribute("uv",new Si(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Am={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class CE{constructor(e,n,r){const a=this;let c=!1,u=0,f=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){f++,c===!1&&a.onStart!==void 0&&a.onStart(g,u,f),c=!0},this.itemEnd=function(g){u++,a.onProgress!==void 0&&a.onProgress(g,u,f),u===f&&(c=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,_){return m.push(g,_),this},this.removeHandler=function(g){const _=m.indexOf(g);return _!==-1&&m.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=m.length;_<x;_+=2){const S=m[_],E=m[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const RE=new CE;class Xd{constructor(e){this.manager=e!==void 0?e:RE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,c){r.load(e,a,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xd.DEFAULT_MATERIAL_NAME="__DEFAULT";class bE extends Xd{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Am.get(e);if(u!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u;const f=Oo("img");function h(){g(),Am.add(e,this),n&&n(this),c.manager.itemEnd(e)}function m(_){g(),a&&a(_),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),c.manager.itemStart(e),f.src=e,f}}class ko extends Xd{constructor(e){super(e)}load(e,n,r,a){const c=new yn,u=new bE(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},r,a),c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);const Pn=s=>s*Math.PI/180;/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function NE(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:PE(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=s=>{const e=LE(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Vu(s){return s!=null}function UE(s,e={}){var x,S;const n=e.attributeNames??{},r=E=>n[E]??E,a=s.size??s.width??Wr.width,c=s.size??s.height??Wr.height,u=((x=s.aliases)==null?void 0:x.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],h=((S=e.className)==null?void 0:S.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?Pd(...h):Pd("lucide",...f,...h),g=e.absoluteStrokeWidth?Number(e.strokeWidth??Wr["stroke-width"])*Number(s.size??s.width??Wr.width)/Number(e.size??e.width??Wr.width):e.strokeWidth??Wr["stroke-width"];return["svg",{...Object.entries(Wr).reduce((E,[T,y])=>(E[r(T)]=y,E),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Vu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Vu(e.width)&&{[r("width")]:e.width},..."height"in e&&Vu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:g,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${a} ${c}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(E=>{const[T,y,v]=E,D=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return v?[T,D,v]:[T,D]})]}/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function IE(s,e={}){return UE(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},OE=Fe.createContext({}),kE=()=>Fe.useContext(OE),zE=Fe.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:a,absoluteStrokeWidth:c,nonScalingStroke:u,className:f="",children:h,iconNode:m=[],icon:g={node:m,aliases:[],size:24},..._},x)=>{const{size:S=24,strokeWidth:E=2,absoluteStrokeWidth:T=!1,nonScalingStroke:y=!1,color:v="currentColor",className:D=""}=kE()??{},N=!!h||FE(_),[R,q,k=[]]=IE(g,{color:s??v,width:n??e??S,height:r??e??S,strokeWidth:a??E,absoluteStrokeWidth:c??T,nonScalingStroke:u??y,className:Pd(D,f),hasA11yProp:N,attributes:_});return Fe.createElement(R,{ref:x,...q},[...k.map(([O,H])=>Fe.createElement(O,H)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function jt(s,e=[],n=[]){const r=typeof s=="string"?NE(s,e,n):s,a=Fe.forwardRef(({className:c,...u},f)=>Fe.createElement(zE,{ref:f,icon:r,className:c,...u}));return r.name&&(a.displayName=DE(r.name)),a}/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};ag.node;const BE=jt(ag);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};lg.node;const cg=jt(lg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};ug.node;const HE=jt(ug);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"circle-dot",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};dg.node;const fg=jt(dg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};hg.node;const Cm=jt(hg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"columns-2",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],aliases:["columns"]};pg.node;const VE=jt(pg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};mg.node;const gg=jt(mg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};vg.node;const GE=jt(vg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};_g.node;const qd=jt(_g);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"earth",size:24,node:[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["globe-2"]};xg.node;const WE=jt(xg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};yg.node;const Sg=jt(yg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};Mg.node;const jE=jt(Mg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"map",size:24,node:[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]};Eg.node;const XE=jt(Eg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"rotate-3d",size:24,node:[["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796",key:"1245p8"}],["path",{d:"M21.79796 11 A 10 5 0 1 0 19 15.57071",key:"1i40ks"}]],aliases:["rotate-3-d"]};wg.node;const Tg=jt(wg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Ag.node;const Yd=jt(Ag);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Cg.node;const qE=jt(Cg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Rg.node;const bg=jt(Rg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Pg.node;const Ng=jt(Pg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};Lg.node;const YE=jt(Lg);/**
 * @license lucide-react v1.55.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Dg.node;const $E=jt(Dg),KE=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,ZE=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D tSource;

  uniform float uExposure;
  uniform float uBrightness;
  uniform float uContrast;
  uniform float uSaturation;
  uniform float uWarmth;

  uniform bool uNadirEnabled;
  uniform float uNadirHeight; // fraction of UV height from 0 (south pole)
  uniform float uNadirFeather;
  uniform int uNadirMode;
  uniform vec3 uNadirColor;

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    // Flip X so panorama is not mirrored when viewed from inside
    vec2 uv = vec2(1.0 - vUv.x, vUv.y);
    vec4 color = texture2D(tSource, uv);

    // Nadir Patch (South Pole: vUv.y near 0.0)
    if (uNadirEnabled) {
      if (uv.y < uNadirHeight) {
        float featherDist = uNadirHeight * max(0.01, uNadirFeather);
        float t = smoothstep(uNadirHeight - featherDist, uNadirHeight, uv.y);

        vec3 patchColor = uNadirColor;
        if (uNadirMode == 1) { // Blur (sample ring at border)
          patchColor = texture2D(tSource, vec2(uv.x, uNadirHeight)).rgb;
        } else if (uNadirMode == 2) { // Mirror
          float mirroredY = uNadirHeight + (uNadirHeight - uv.y);
          patchColor = texture2D(tSource, vec2(uv.x, clamp(mirroredY, 0.0, 1.0))).rgb;
        }
        color.rgb = mix(patchColor, color.rgb, t);
      }
    }

    // Color Adjustments
    color.rgb *= pow(2.0, uExposure * 2.0);
    color.rgb += uBrightness * 0.5;
    color.rgb = (color.rgb - 0.5) * (1.0 + uContrast) + 0.5;
    color.r += uWarmth * 0.08;
    color.b -= uWarmth * 0.08;

    vec3 hsv = rgb2hsv(color.rgb);
    hsv.y = clamp(hsv.y * (1.0 + uSaturation), 0.0, 1.0);
    color.rgb = hsv2rgb(hsv);

    gl_FragColor = vec4(clamp(color.rgb, 0.0, 1.0), 1.0);
  }
`,QE=({imageSrc:s,orientation:e,colorAdjustments:n,nadirPatch:r,onSetCurrentViewAsCenter:a,viewerRef:c})=>{const u=Fe.useRef(null),f=Fe.useRef(null),h=Fe.useRef(null),m=Fe.useRef(null),g=Fe.useRef(null),_=Fe.useRef(null),[x,S]=Fe.useState(0),[E,T]=Fe.useState(0),[y,v]=Fe.useState(75),[D,N]=Fe.useState(!0),R=Fe.useRef(!1),q=Fe.useRef(0),k=Fe.useRef(0),O=Fe.useRef(0),H=Fe.useRef(0);Fe.useEffect(()=>{c&&(c.current={captureSnapshot:(le,se)=>{if(!f.current||!h.current||!m.current)return"";const[oe,F]=le.split(":").map(Number),te=m.current.aspect,ee=m.current.fov,U=2560,K=Math.round(U/(oe/F)),Ce=new Mr(U,K);m.current.aspect=oe/F,m.current.fov=se,m.current.updateProjectionMatrix(),f.current.setRenderTarget(Ce),f.current.render(h.current,m.current),f.current.setRenderTarget(null);const $=new Uint8Array(U*K*4);f.current.readRenderTargetPixels(Ce,0,0,U,K,$),Ce.dispose(),m.current.aspect=te,m.current.fov=ee,m.current.updateProjectionMatrix();const de=document.createElement("canvas");de.width=U,de.height=K;const ye=de.getContext("2d");if(!ye)return"";const ge=ye.createImageData(U,K);for(let Te=0;Te<K;Te++)for(let Re=0;Re<U;Re++){const qe=((K-1-Te)*U+Re)*4,gt=(Te*U+Re)*4;ge.data[gt]=$[qe],ge.data[gt+1]=$[qe+1],ge.data[gt+2]=$[qe+2],ge.data[gt+3]=$[qe+3]}return ye.putImageData(ge,0,0),de.toDataURL("image/jpeg",.95)}})},[c]),Fe.useEffect(()=>{if(!u.current)return;const le=u.current.clientWidth,se=u.current.clientHeight,oe=new Wd;h.current=oe;const F=new $n(y,le/se,1,1100);m.current=F;const te=new Gd({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});te.setPixelRatio(Math.min(window.devicePixelRatio,2)),te.setSize(le,se),f.current=te,u.current.innerHTML="",u.current.appendChild(te.domElement);const ee=new jd(500,64,32),K=new ko().load(s,()=>{te.render(oe,F)}),Ce=new di({vertexShader:KE,fragmentShader:ZE,uniforms:{tSource:{value:K},uExposure:{value:n.exposure/100},uBrightness:{value:n.brightness/100},uContrast:{value:n.contrast/100},uSaturation:{value:n.saturation/100},uWarmth:{value:n.warmth/100},uNadirEnabled:{value:r.enabled},uNadirHeight:{value:r.radius/180},uNadirFeather:{value:r.feather/100},uNadirMode:{value:r.mode==="color"?0:r.mode==="blur"?1:2},uNadirColor:{value:new St(r.color)}},side:xn});_.current=Ce;const $=new Kn(ee,Ce);$.rotation.set(Pn(e.pitch),Pn(-e.yaw),Pn(e.roll),"YXZ"),oe.add($),g.current=$;let de;const ye=()=>{de=requestAnimationFrame(ye);const Te=Math.max(-85,Math.min(85,E)),Re=Pn(90-Te),qe=Pn(x),gt=500*Math.sin(Re)*Math.cos(qe),ut=500*Math.cos(Re),Rt=500*Math.sin(Re)*Math.sin(qe);F.lookAt(gt,ut,Rt),te.render(oe,F)};ye();const ge=()=>{if(!u.current)return;const Te=u.current.clientWidth,Re=u.current.clientHeight;F.aspect=Te/Re,F.updateProjectionMatrix(),te.setSize(Te,Re)};return window.addEventListener("resize",ge),()=>{window.removeEventListener("resize",ge),cancelAnimationFrame(de),ee.dispose(),Ce.dispose(),te.dispose()}},[]),Fe.useEffect(()=>{if(!_.current)return;new ko().load(s,se=>{_.current&&(_.current.uniforms.tSource.value=se)})},[s]),Fe.useEffect(()=>{g.current&&g.current.rotation.set(Pn(e.pitch),Pn(-e.yaw),Pn(e.roll),"YXZ")},[e]),Fe.useEffect(()=>{_.current&&(_.current.uniforms.uExposure.value=n.exposure/100,_.current.uniforms.uBrightness.value=n.brightness/100,_.current.uniforms.uContrast.value=n.contrast/100,_.current.uniforms.uSaturation.value=n.saturation/100,_.current.uniforms.uWarmth.value=n.warmth/100,_.current.uniforms.uNadirEnabled.value=r.enabled,_.current.uniforms.uNadirHeight.value=r.radius/180,_.current.uniforms.uNadirFeather.value=r.feather/100,_.current.uniforms.uNadirMode.value=r.mode==="color"?0:r.mode==="blur"?1:2,_.current.uniforms.uNadirColor.value=new St(r.color))},[n,r]);const b=le=>{R.current=!0,q.current=le.clientX,k.current=le.clientY,O.current=x,H.current=E},C=le=>{if(!R.current)return;const se=le.clientX-q.current,oe=le.clientY-k.current,F=y/75*.15;S((O.current-se*F+360)%360),T(Math.max(-85,Math.min(85,H.current+oe*F)))},B=()=>{R.current=!1},ce=le=>{const se=le.deltaY*.05,oe=Math.max(30,Math.min(120,y+se));v(oe),m.current&&(m.current.fov=oe,m.current.updateProjectionMatrix())},Q=()=>{let le=x>180?x-360:x,se=E;a(-le,-se),S(0),T(0)},fe=()=>{S(0),T(0),v(75),m.current&&(m.current.fov=75,m.current.updateProjectionMatrix())};return P.jsxs("div",{className:"relative w-full h-full bg-black overflow-hidden select-none",children:[P.jsx("div",{ref:u,className:"w-full h-full cursor-grab active:cursor-grabbing",onPointerDown:b,onPointerMove:C,onPointerUp:B,onWheel:ce}),D&&P.jsxs("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:[P.jsxs("div",{className:"relative w-12 h-12 opacity-40",children:[P.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-white"}),P.jsx("div",{className:"absolute left-1/2 top-0 bottom-0 w-px bg-white"}),P.jsx("div",{className:"absolute inset-2 border border-white rounded-full"})]}),P.jsxs("div",{className:"absolute left-6 right-6 top-1/2 h-px border-t border-dashed border-studio-accent/40 flex justify-between items-center",children:[P.jsx("span",{className:"text-[10px] font-mono text-studio-accent/70 bg-studio-900/80 px-1 rounded -translate-y-1/2",children:"HORIZONTE 0°"}),P.jsx("span",{className:"text-[10px] font-mono text-studio-accent/70 bg-studio-900/80 px-1 rounded -translate-y-1/2",children:"NIVEL"})]})]}),P.jsxs("div",{className:"absolute top-4 left-4 z-10 flex items-center gap-3 bg-studio-900/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md text-xs font-mono text-gray-300 shadow-lg",children:[P.jsxs("div",{className:"flex items-center gap-1.5 text-studio-accent font-semibold",children:[P.jsx(gg,{className:"w-4 h-4"}),P.jsxs("span",{children:["DIR: ",Math.round(x),"°"]})]}),P.jsx("div",{className:"h-3 w-px bg-white/20"}),P.jsxs("span",{children:["ELEV: ",Math.round(E),"°"]}),P.jsx("div",{className:"h-3 w-px bg-white/20"}),P.jsxs("span",{children:["FOV: ",Math.round(y),"°"]})]}),P.jsxs("div",{className:"absolute top-4 right-4 z-10 flex items-center gap-2",children:[P.jsxs("button",{onClick:Q,title:"Fijar esta dirección como el nuevo centro del panorama 360",className:"flex items-center gap-1.5 bg-studio-accent/20 hover:bg-studio-accent/30 text-studio-accent border border-studio-accent/40 px-3 py-1.5 rounded-md text-xs font-medium transition-all shadow-md active:scale-95",children:[P.jsx(GE,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"Fijar como Frente"})]}),P.jsx("button",{onClick:()=>N(!D),title:"Mostrar/Ocultar guías de horizonte y cruz central",className:`p-2 rounded-md border text-xs transition-colors backdrop-blur-md ${D?"bg-white/15 border-white/30 text-white":"bg-studio-900/80 border-white/10 text-gray-400 hover:text-white"}`,children:P.jsx(Sg,{className:"w-4 h-4"})}),P.jsx("button",{onClick:fe,title:"Restablecer posición de cámara",className:"p-2 rounded-md border border-white/10 bg-studio-900/80 hover:bg-white/10 text-gray-400 hover:text-white transition-colors backdrop-blur-md",children:P.jsx(Yd,{className:"w-4 h-4"})})]}),P.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center bg-studio-900/70 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[11px] text-gray-400",children:"Arrastra con el ratón para mirar en 360° • Rueda para zoom"})]})},Ug=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,Ig=`
  precision highp float;
  varying vec2 vUv;

  uniform sampler2D tSource;
  uniform mat3 uRotationMatrix; // Rotation matrix for Yaw, Pitch, Roll
  
  // Color adjustments
  uniform float uExposure;   // -1.0 to 1.0
  uniform float uBrightness; // -1.0 to 1.0
  uniform float uContrast;   // -1.0 to 1.0
  uniform float uSaturation; // -1.0 to 1.0
  uniform float uWarmth;     // -1.0 to 1.0

  // Nadir patch
  uniform bool uNadirEnabled;
  uniform float uNadirRadius; // in radians from south pole
  uniform float uNadirFeather;
  uniform int uNadirMode; // 0 = color, 1 = blur, 2 = mirror
  uniform vec3 uNadirColor;

  const float PI = 3.14159265358979323846;
  const float TWO_PI = 6.28318530717958647692;

  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  void main() {
    // 1. Convert output UV (0..1) to Spherical Coordinates (lon, lat)
    float lon = (vUv.x - 0.5) * TWO_PI;
    float lat = (vUv.y - 0.5) * PI;

    // 2. Spherical to 3D unit direction vector
    // Standard Three.js coordinates: Y is up, -Z is forward, X is right
    float cosLat = cos(lat);
    vec3 dir = vec3(
      cosLat * sin(lon),
      sin(lat),
      -cosLat * cos(lon)
    );

    // 3. Apply inverse rotation matrix to sample the original unrotated sphere
    vec3 srcDir = uRotationMatrix * dir;
    srcDir = normalize(srcDir);

    // 4. Convert rotated 3D vector back to source UV
    float srcLat = asin(clamp(srcDir.y, -1.0, 1.0));
    float srcLon = atan(srcDir.x, -srcDir.z);

    vec2 srcUv = vec2(
      srcLon / TWO_PI + 0.5,
      srcLat / PI + 0.5
    );

    // Wrap horizontally seamlessly
    srcUv.x = fract(srcUv.x);
    srcUv.y = clamp(srcUv.y, 0.0001, 0.9999);

    // 5. Sample texture
    vec4 color = texture2D(tSource, srcUv);

    // 6. Nadir Patch (Bottom Pole trip-pod removal)
    if (uNadirEnabled) {
      // Angle from South pole (where lat = -PI/2)
      float southAngle = srcLat - (-PI * 0.5); // 0 at exact nadir pole, increases as we go up
      if (southAngle < uNadirRadius) {
        float featherDist = uNadirRadius * max(0.01, uNadirFeather);
        float t = smoothstep(uNadirRadius - featherDist, uNadirRadius, southAngle);

        vec3 patchColor = uNadirColor;
        if (uNadirMode == 1) { // Blur mode (samples nearby ring)
          vec2 ringUv = vec2(srcUv.x, (-PI * 0.5 + uNadirRadius) / PI + 0.5);
          patchColor = texture2D(tSource, ringUv).rgb;
        } else if (uNadirMode == 2) { // Mirror mode
          float mirroredLat = -PI * 0.5 + (uNadirRadius - southAngle) + uNadirRadius;
          vec2 mirrorUv = vec2(srcUv.x, mirroredLat / PI + 0.5);
          patchColor = texture2D(tSource, mirrorUv).rgb;
        }
        color.rgb = mix(patchColor, color.rgb, t);
      }
    }

    // 7. Color Adjustments
    // Exposure
    color.rgb *= pow(2.0, uExposure * 2.0);

    // Brightness
    color.rgb += uBrightness * 0.5;

    // Contrast
    color.rgb = (color.rgb - 0.5) * (1.0 + uContrast) + 0.5;

    // Warmth / Temperature
    color.r += uWarmth * 0.08;
    color.b -= uWarmth * 0.08;

    // Saturation
    vec3 hsv = rgb2hsv(color.rgb);
    hsv.y = clamp(hsv.y * (1.0 + uSaturation), 0.0, 1.0);
    color.rgb = hsv2rgb(hsv);

    gl_FragColor = vec4(clamp(color.rgb, 0.0, 1.0), 1.0);
  }
`;function Nd(s){const e=new Mi(Pn(s.pitch),Pn(s.yaw),Pn(s.roll),"YXZ"),r=new Vt().makeRotationFromEuler(e).clone().invert(),a=new at;return a.setFromMatrix4(r),a}const JE=({imageSrc:s,orientation:e,colorAdjustments:n,nadirPatch:r,onYawChange:a,onPitchChange:c})=>{const u=Fe.useRef(null),f=Fe.useRef(null),h=Fe.useRef(null),m=Fe.useRef(null),g=Fe.useRef(null),_=Fe.useRef(!1),x=Fe.useRef(0),S=Fe.useRef(0),E=Fe.useRef(0),T=Fe.useRef(0);Fe.useEffect(()=>{if(!u.current)return;const N=u.current.clientWidth,R=u.current.clientHeight,q=new Wd;h.current=q;const k=new Hd(-1,1,1,-1,0,1);m.current=k;const O=new Gd({antialias:!0,alpha:!1});O.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.setSize(N,R),f.current=O,u.current.innerHTML="",u.current.appendChild(O.domElement);const H=new Ys(2,2),C=new ko().load(s),B=Nd(e),ce=new di({vertexShader:Ug,fragmentShader:Ig,uniforms:{tSource:{value:C},uRotationMatrix:{value:B},uExposure:{value:n.exposure/100},uBrightness:{value:n.brightness/100},uContrast:{value:n.contrast/100},uSaturation:{value:n.saturation/100},uWarmth:{value:n.warmth/100},uNadirEnabled:{value:r.enabled},uNadirRadius:{value:Pn(r.radius)},uNadirFeather:{value:r.feather/100},uNadirMode:{value:r.mode==="color"?0:r.mode==="blur"?1:2},uNadirColor:{value:new St(r.color)}}});g.current=ce;const Q=new Kn(H,ce);q.add(Q);const fe=()=>{O.render(q,k)};fe();const le=new ResizeObserver(()=>{if(!u.current)return;const se=u.current.clientWidth,oe=u.current.clientHeight;O.setSize(se,oe),fe()});return le.observe(u.current),()=>{le.disconnect(),H.dispose(),ce.dispose(),O.dispose()}},[]),Fe.useEffect(()=>{if(!g.current)return;new ko().load(s,R=>{var q;g.current&&(g.current.uniforms.tSource.value=R,(q=f.current)==null||q.render(h.current,m.current))})},[s]),Fe.useEffect(()=>{if(!g.current||!f.current||!h.current||!m.current)return;const N=Nd(e);g.current.uniforms.uRotationMatrix.value=N,g.current.uniforms.uExposure.value=n.exposure/100,g.current.uniforms.uBrightness.value=n.brightness/100,g.current.uniforms.uContrast.value=n.contrast/100,g.current.uniforms.uSaturation.value=n.saturation/100,g.current.uniforms.uWarmth.value=n.warmth/100,g.current.uniforms.uNadirEnabled.value=r.enabled,g.current.uniforms.uNadirRadius.value=Pn(r.radius),g.current.uniforms.uNadirFeather.value=r.feather/100,g.current.uniforms.uNadirMode.value=r.mode==="color"?0:r.mode==="blur"?1:2,g.current.uniforms.uNadirColor.value=new St(r.color),f.current.render(h.current,m.current)},[e,n,r]);const y=N=>{_.current=!0,x.current=N.clientX,S.current=N.clientY,E.current=e.yaw,T.current=e.pitch},v=N=>{if(!_.current||!u.current)return;const R=N.clientX-x.current,q=N.clientY-S.current,k=u.current.clientWidth,O=u.current.clientHeight;let H=E.current+R/k*360;for(;H>180;)H-=360;for(;H<-180;)H+=360;let b=T.current-q/O*180;b=Math.max(-90,Math.min(90,b)),a(Math.round(H*10)/10),c(Math.round(b*10)/10)},D=()=>{_.current=!1};return P.jsx("div",{className:"relative w-full h-full flex flex-col items-center justify-center p-4 bg-studio-900",children:P.jsxs("div",{className:"relative w-full max-w-5xl aspect-[2/1] border border-white/10 rounded-lg overflow-hidden shadow-2xl bg-black",children:[P.jsx("div",{ref:u,className:"w-full h-full cursor-ew-resize active:cursor-grabbing",onPointerDown:y,onPointerMove:v,onPointerUp:D}),P.jsx("div",{className:"pointer-events-none absolute inset-0 flex justify-center",children:P.jsx("div",{className:"w-px h-full bg-studio-accent/60 shadow-[0_0_8px_rgba(0,210,106,0.6)]"})}),P.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center",children:P.jsx("div",{className:"w-full h-px border-t border-dashed border-studio-accent/40"})}),P.jsxs("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:[P.jsx("div",{className:"w-6 h-6 border-2 border-studio-accent rounded-full flex items-center justify-center",children:P.jsx("div",{className:"w-1.5 h-1.5 bg-studio-accent rounded-full"})}),P.jsx("span",{className:"absolute -translate-y-6 text-[10px] font-mono text-studio-accent bg-studio-900/80 px-1 rounded border border-studio-accent/30",children:"CENTRO (FRENTE)"})]}),P.jsxs("div",{className:"pointer-events-none absolute top-2 left-0 right-0 flex justify-between px-4 text-[10px] font-mono text-gray-400",children:[P.jsx("span",{children:"SUR (-180°)"}),P.jsx("span",{className:"text-yellow-400",children:"OESTE (-90°)"}),P.jsx("span",{className:"text-studio-accent font-bold",children:"NORTE (0°)"}),P.jsx("span",{className:"text-cyan-400",children:"ESTE (+90°)"}),P.jsx("span",{children:"SUR (+180°)"})]}),P.jsx("div",{className:"pointer-events-none absolute bottom-2 right-2 bg-studio-900/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-[11px] font-mono text-gray-300",children:"Arrastra para desplazar el centro"})]})})},e1=({viewMode:s,onViewModeChange:e,onFileUpload:n,onLoadDemo:r,onOpenExport:a,fileName:c,isMcpConnected:u=!1})=>{const f=Fe.useRef(null),h=m=>{m.target.files&&m.target.files[0]&&n(m.target.files[0])};return P.jsxs("header",{className:"h-14 bg-studio-800 border-b border-white/10 px-4 flex items-center justify-between shrink-0 select-none z-30",children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("div",{className:"w-8 h-8 rounded-lg bg-studio-accent/20 border border-studio-accent/40 flex items-center justify-center text-studio-accent shadow-[0_0_12px_rgba(0,210,106,0.3)]",children:P.jsx(WE,{className:"w-4 h-4"})}),P.jsxs("div",{children:[P.jsxs("div",{className:"flex items-center gap-1.5",children:[P.jsx("span",{className:"font-bold text-sm tracking-tight text-white",children:"360 Studio Web"}),P.jsx("span",{className:"text-[10px] font-mono font-semibold px-1.5 py-0.2 bg-studio-accent/20 text-studio-accent rounded border border-studio-accent/30",children:"INSTA360"})]}),P.jsx("div",{className:"text-[11px] text-gray-400 font-mono truncate max-w-[200px]",title:c,children:c})]})]}),P.jsxs("div",{className:`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border transition-all ${u?"bg-emerald-950/60 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]":"bg-studio-900/40 border-white/5 text-gray-400"}`,title:u?"Conector MCP IA Activo: Tu asistente IA puede controlar la vista 360 en vivo (ws://127.0.0.1:5174)":"Conector MCP IA en espera de conexión local (ws://127.0.0.1:5174)",children:[P.jsx(BE,{className:`w-3.5 h-3.5 ${u?"text-emerald-400":"text-gray-500"}`}),P.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${u?"bg-emerald-400 animate-pulse":"bg-gray-600"}`}),P.jsxs("span",{className:"font-semibold",children:["MCP IA: ",u?"CONECTADO":"OFFLINE"]})]})]}),P.jsxs("div",{className:"flex items-center bg-studio-900/90 p-1 rounded-lg border border-white/10",children:[P.jsxs("button",{onClick:()=>e("3d"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${s==="3d"?"bg-studio-700 text-white shadow-sm font-semibold":"text-gray-400 hover:text-white"}`,title:"Vista 3D Interactiva (Esfera)",children:[P.jsx(Sg,{className:"w-3.5 h-3.5 text-studio-accent"}),P.jsx("span",{children:"3D Esfera"})]}),P.jsxs("button",{onClick:()=>e("equirectangular"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${s==="equirectangular"?"bg-studio-700 text-white shadow-sm font-semibold":"text-gray-400 hover:text-white"}`,title:"Vista Equirrectangular Plana (2:1)",children:[P.jsx(XE,{className:"w-3.5 h-3.5 text-cyan-400"}),P.jsx("span",{children:"Plano 2:1"})]}),P.jsxs("button",{onClick:()=>e("split"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${s==="split"?"bg-studio-700 text-white shadow-sm font-semibold":"text-gray-400 hover:text-white"}`,title:"Vista Dividida (Ambas pantallas)",children:[P.jsx(VE,{className:"w-3.5 h-3.5 text-amber-400"}),P.jsx("span",{children:"Dividida"})]})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("input",{id:"file-upload-input",name:"file-upload-input","aria-label":"Subir foto 360",ref:f,type:"file",accept:"image/*,.insp",onChange:h,className:"hidden"}),P.jsxs("button",{onClick:()=>{var m;return(m=f.current)==null?void 0:m.click()},className:"flex items-center gap-1.5 bg-studio-700 hover:bg-studio-600 text-gray-200 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",children:[P.jsx(YE,{className:"w-3.5 h-3.5 text-studio-accent"}),P.jsx("span",{children:"Subir Foto 360"})]}),P.jsxs("button",{onClick:r,className:"flex items-center gap-1.5 bg-studio-700/60 hover:bg-studio-700 text-gray-300 hover:text-white border border-white/5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",title:"Cargar panorama de prueba",children:[P.jsx(Ng,{className:"w-3.5 h-3.5 text-yellow-400"}),P.jsx("span",{children:"Demo"})]}),P.jsxs("button",{onClick:a,className:"flex items-center gap-1.5 bg-studio-accent hover:bg-studio-accent/90 text-studio-900 px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md shadow-studio-accent/20 active:scale-95",children:[P.jsx(qd,{className:"w-3.5 h-3.5"}),P.jsx("span",{children:"Exportar 360"})]})]})]})},t1=({orientation:s,onChange:e,onReset:n,onAutoLevel:r})=>P.jsxs("div",{className:"space-y-6",children:[P.jsxs("div",{className:"flex items-center justify-between",children:[P.jsxs("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-studio-accent flex items-center gap-1.5",children:[P.jsx(Tg,{className:"w-4 h-4"}),"Punto de Vista & Orientación"]}),P.jsxs("button",{onClick:n,className:"text-[11px] text-gray-400 hover:text-white flex items-center gap-1 transition-colors",title:"Restablecer rotación a 0°",children:[P.jsx(Yd,{className:"w-3 h-3"}),"Restablecer"]})]}),P.jsxs("div",{className:"space-y-2 bg-studio-800/60 p-3 rounded-lg border border-white/5",children:[P.jsxs("div",{className:"flex items-center justify-between text-xs",children:[P.jsxs("label",{htmlFor:"yaw-number",className:"font-semibold text-gray-200 flex items-center gap-1.5",children:[P.jsx(gg,{className:"w-3.5 h-3.5 text-studio-accent"}),P.jsx("span",{children:"Yaw (Centro Principal)"})]}),P.jsxs("div",{className:"flex items-center gap-1",children:[P.jsx("input",{id:"yaw-number",name:"yaw",type:"number",min:-180,max:180,step:"any",value:s.yaw,onChange:a=>e({yaw:Number(a.target.value)}),className:"w-14 bg-studio-900 border border-white/10 rounded px-1.5 py-0.5 text-right font-mono text-xs text-studio-accent"}),P.jsx("span",{className:"text-gray-400 font-mono text-xs",children:"°"})]})]}),P.jsx("input",{id:"yaw-range",name:"yaw-range",type:"range",min:-180,max:180,step:.5,value:s.yaw,onChange:a=>e({yaw:Number(a.target.value)}),className:"w-full"}),P.jsxs("div",{className:"flex justify-between text-[10px] text-gray-400 font-mono pt-0.5",children:[P.jsx("span",{children:"-180° (Sur)"}),P.jsx("span",{className:"text-studio-accent",children:"0° (Norte)"}),P.jsx("span",{children:"+180° (Sur)"})]}),P.jsx("div",{className:"flex gap-1.5 pt-1",children:[-90,0,90,180].map(a=>P.jsxs("button",{onClick:()=>e({yaw:a}),className:`flex-1 py-1 rounded text-[10px] font-mono border transition-colors ${Math.round(s.yaw)===a?"bg-studio-accent text-studio-900 font-bold border-studio-accent":"bg-studio-900/80 border-white/10 text-gray-400 hover:text-white"}`,children:[a,"°"]},a))})]}),P.jsxs("div",{className:"space-y-2 bg-studio-800/60 p-3 rounded-lg border border-white/5",children:[P.jsxs("div",{className:"flex items-center justify-between text-xs",children:[P.jsx("label",{htmlFor:"pitch-number",className:"font-semibold text-gray-200",children:P.jsx("span",{children:"Pitch (Inclinación vertical)"})}),P.jsxs("div",{className:"flex items-center gap-1",children:[P.jsx("input",{id:"pitch-number",name:"pitch",type:"number",min:-90,max:90,step:"any",value:s.pitch,onChange:a=>e({pitch:Number(a.target.value)}),className:"w-14 bg-studio-900 border border-white/10 rounded px-1.5 py-0.5 text-right font-mono text-xs text-studio-accent"}),P.jsx("span",{className:"text-gray-400 font-mono text-xs",children:"°"})]})]}),P.jsx("input",{id:"pitch-range",name:"pitch-range",type:"range",min:-90,max:90,step:.5,value:s.pitch,onChange:a=>e({pitch:Number(a.target.value)}),className:"w-full"}),P.jsxs("div",{className:"flex justify-between text-[10px] text-gray-400 font-mono pt-0.5",children:[P.jsx("span",{children:"-90° (Suelo)"}),P.jsx("span",{children:"0° (Nivel)"}),P.jsx("span",{children:"+90° (Cenit)"})]})]}),P.jsxs("div",{className:"space-y-2 bg-studio-800/60 p-3 rounded-lg border border-white/5",children:[P.jsxs("div",{className:"flex items-center justify-between text-xs",children:[P.jsx("label",{htmlFor:"roll-number",className:"font-semibold text-gray-200",children:P.jsx("span",{children:"Roll (Nivelar horizonte)"})}),P.jsxs("div",{className:"flex items-center gap-1",children:[P.jsx("input",{id:"roll-number",name:"roll",type:"number",min:-45,max:45,step:"any",value:s.roll,onChange:a=>e({roll:Number(a.target.value)}),className:"w-14 bg-studio-900 border border-white/10 rounded px-1.5 py-0.5 text-right font-mono text-xs text-studio-accent"}),P.jsx("span",{className:"text-gray-400 font-mono text-xs",children:"°"})]})]}),P.jsx("input",{id:"roll-range",name:"roll-range",type:"range",min:-45,max:45,step:.2,value:s.roll,onChange:a=>e({roll:Number(a.target.value)}),className:"w-full"}),P.jsxs("div",{className:"flex justify-between text-[10px] text-gray-400 font-mono pt-0.5",children:[P.jsx("span",{children:"-45°"}),P.jsx("span",{className:"text-studio-accent",children:"0° (Recto)"}),P.jsx("span",{children:"+45°"})]})]}),P.jsxs("button",{onClick:r,className:"w-full py-2 bg-studio-700 hover:bg-studio-600 border border-white/10 rounded-lg text-xs font-medium text-gray-200 hover:text-white transition-all flex items-center justify-center gap-2",children:[P.jsx(qE,{className:"w-4 h-4 text-studio-accent"}),"Nivelar Horizonte (Pitch = 0, Roll = 0)"]})]}),n1=({config:s,onChange:e})=>P.jsxs("div",{className:"space-y-6",children:[P.jsxs("div",{className:"flex items-center justify-between",children:[P.jsxs("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-studio-accent flex items-center gap-1.5",children:[P.jsx(fg,{className:"w-4 h-4"}),"Parche de Nadir (Ocultar Trípode)"]}),P.jsxs("label",{htmlFor:"nadir-toggle",className:"relative inline-flex items-center cursor-pointer",children:[P.jsx("input",{id:"nadir-toggle",name:"nadir-toggle",type:"checkbox",checked:s.enabled,onChange:n=>e({enabled:n.target.checked}),className:"sr-only peer","aria-label":"Activar parche de nadir"}),P.jsx("div",{className:"w-9 h-5 bg-studio-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-studio-accent"})]})]}),P.jsx("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:"Elimina o difumina automáticamente el trípode, palo selfie o sombras visibles en el polo inferior (-90°)."}),s.enabled&&P.jsxs("div",{className:"space-y-4 bg-studio-800/60 p-3 rounded-lg border border-white/5 animate-fadeIn",children:[P.jsxs("div",{className:"space-y-1.5",children:[P.jsx("label",{className:"text-xs font-semibold text-gray-300",children:"Modo de Cobertura"}),P.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"blur",label:"Difuminar"},{id:"mirror",label:"Espejo"},{id:"color",label:"Color"}].map(n=>P.jsx("button",{onClick:()=>e({mode:n.id}),className:`py-1.5 text-xs font-medium rounded border transition-colors ${s.mode===n.id?"bg-studio-accent text-studio-900 font-bold border-studio-accent":"bg-studio-900 border-white/10 text-gray-400 hover:text-white"}`,children:n.label},n.id))})]}),P.jsxs("div",{className:"space-y-1.5",children:[P.jsxs("div",{className:"flex justify-between text-xs",children:[P.jsx("label",{htmlFor:"nadir-radius",className:"text-gray-300",children:"Radio del Parche"}),P.jsxs("span",{className:"font-mono text-studio-accent",children:[s.radius,"°"]})]}),P.jsx("input",{id:"nadir-radius",name:"nadir-radius",type:"range",min:5,max:35,step:1,value:s.radius,onChange:n=>e({radius:Number(n.target.value)}),className:"w-full"})]}),P.jsxs("div",{className:"space-y-1.5",children:[P.jsxs("div",{className:"flex justify-between text-xs",children:[P.jsx("label",{htmlFor:"nadir-feather",className:"text-gray-300",children:"Suavizado de Bordes (Feather)"}),P.jsxs("span",{className:"font-mono text-studio-accent",children:[s.feather,"%"]})]}),P.jsx("input",{id:"nadir-feather",name:"nadir-feather",type:"range",min:0,max:100,step:5,value:s.feather,onChange:n=>e({feather:Number(n.target.value)}),className:"w-full"})]}),s.mode==="color"&&P.jsxs("div",{className:"flex items-center justify-between text-xs pt-2 border-t border-white/10",children:[P.jsx("label",{htmlFor:"nadir-color",className:"text-gray-300",children:"Color de relleno"}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("input",{id:"nadir-color",name:"nadir-color",type:"color",value:s.color,onChange:n=>e({color:n.target.value}),className:"w-8 h-8 rounded border border-white/20 bg-transparent cursor-pointer"}),P.jsx("span",{className:"font-mono text-xs text-gray-400",children:s.color})]})]})]})]}),i1=({adjustments:s,onChange:e,onReset:n})=>{const r=[{id:"exposure",label:"Exposición",min:-100,max:100},{id:"brightness",label:"Brillo",min:-100,max:100},{id:"contrast",label:"Contraste",min:-100,max:100},{id:"saturation",label:"Saturación",min:-100,max:100},{id:"warmth",label:"Calidez / Temperatura",min:-100,max:100}];return P.jsxs("div",{className:"space-y-6",children:[P.jsxs("div",{className:"flex items-center justify-between",children:[P.jsxs("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-studio-accent flex items-center gap-1.5",children:[P.jsx(bg,{className:"w-4 h-4"}),"Ajustes de Color & Imagen"]}),P.jsxs("button",{onClick:n,className:"text-[11px] text-gray-400 hover:text-white flex items-center gap-1 transition-colors",title:"Restablecer ajustes de color",children:[P.jsx(Yd,{className:"w-3 h-3"}),"Restablecer"]})]}),P.jsx("div",{className:"space-y-4 bg-studio-800/60 p-3 rounded-lg border border-white/5",children:r.map(({id:a,label:c,min:u,max:f})=>{const h=s[a];return P.jsxs("div",{className:"space-y-1.5",children:[P.jsxs("div",{className:"flex justify-between text-xs",children:[P.jsx("label",{htmlFor:`color-${a}`,className:"text-gray-300 font-medium",children:c}),P.jsx("span",{className:"font-mono text-studio-accent",children:h>0?`+${h}`:h})]}),P.jsx("input",{id:`color-${a}`,name:`color-${a}`,type:"range",min:u,max:f,value:h,onChange:m=>e({[a]:Number(m.target.value)}),className:"w-full"})]},a)})})]})},r1=({onCapture:s,is3dViewActive:e,onSwitchTo3dView:n})=>{const[r,a]=Fe.useState("16:9"),[c,u]=Fe.useState(75),f=[{label:"Tiny Planet",fov:150,desc:"Efecto planeta esférico"},{label:"Gran Angular",fov:110,desc:"Amplio campo de visión"},{label:"Natural / 50mm",fov:65,desc:"Perspectiva del ojo humano"},{label:"Teleobjetivo",fov:40,desc:"Acercamiento sin distorsión"}];return P.jsxs("div",{className:"space-y-6",children:[P.jsx("div",{className:"flex items-center justify-between",children:P.jsxs("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-studio-accent flex items-center gap-1.5",children:[P.jsx(cg,{className:"w-4 h-4"}),"Reencuadre 2D (Foto Plana)"]})}),P.jsx("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:"Extrae fotografías tradicionales de alta resolución desde la foto 360 con la dirección y campo de visión que desees."}),!e&&P.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-lg flex items-center justify-between",children:[P.jsx("span",{className:"text-xs text-amber-300",children:"Se recomienda usar la vista 3D Esfera para encuadrar"}),P.jsx("button",{onClick:n,className:"text-xs bg-amber-500 hover:bg-amber-400 text-black font-semibold px-2 py-1 rounded",children:"Activar 3D"})]}),P.jsxs("div",{className:"space-y-2 bg-studio-800/60 p-3 rounded-lg border border-white/5",children:[P.jsx("label",{className:"text-xs font-semibold text-gray-200",children:"Formato / Relación de Aspecto"}),P.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:["16:9","9:16","1:1","4:3"].map(h=>P.jsxs("button",{onClick:()=>a(h),className:`py-2 text-xs font-mono font-medium rounded border transition-colors flex flex-col items-center gap-0.5 ${r===h?"bg-studio-accent text-studio-900 font-bold border-studio-accent":"bg-studio-900 border-white/10 text-gray-400 hover:text-white"}`,children:[P.jsx("span",{children:h}),P.jsx("span",{className:"text-[9px] opacity-70",children:h==="16:9"?"YouTube":h==="9:16"?"Reels":h==="1:1"?"Post":"Foto"})]},h))})]}),P.jsxs("div",{className:"space-y-3 bg-studio-800/60 p-3 rounded-lg border border-white/5",children:[P.jsxs("div",{className:"flex justify-between text-xs",children:[P.jsx("span",{className:"text-gray-200 font-semibold",children:"Campo de Visión (FOV / Zoom)"}),P.jsxs("span",{className:"font-mono text-studio-accent",children:[c,"°"]})]}),P.jsx("input",{type:"range",min:30,max:150,step:1,value:c,onChange:h=>u(Number(h.target.value)),className:"w-full"}),P.jsx("div",{className:"grid grid-cols-2 gap-1.5 pt-1",children:f.map(h=>P.jsxs("button",{onClick:()=>u(h.fov),className:`p-1.5 text-left rounded border transition-colors ${c===h.fov?"bg-studio-accent/20 border-studio-accent text-studio-accent":"bg-studio-900 border-white/10 text-gray-300 hover:border-white/30"}`,children:[P.jsx("div",{className:"text-[11px] font-semibold",children:h.label}),P.jsxs("div",{className:"text-[9px] text-gray-400",children:[h.fov,"° • ",h.desc]})]},h.label))})]}),P.jsxs("button",{onClick:()=>s(r,c),className:"w-full py-3 bg-studio-accent hover:bg-studio-accent/90 active:scale-[0.99] text-studio-900 font-bold rounded-lg text-xs transition-all shadow-lg shadow-studio-accent/20 flex items-center justify-center gap-2",children:[P.jsx(qd,{className:"w-4 h-4"}),P.jsxs("span",{children:["Capturar y Descargar Foto 2D (",r,")"]})]})]})},s1=({orientation:s,onOrientationChange:e,onResetOrientation:n,onAutoLevel:r,colorAdjustments:a,onColorChange:c,onResetColors:u,nadirPatch:f,onNadirChange:h,onCaptureReframe:m,is3dViewActive:g,onSwitchTo3dView:_})=>{const[x,S]=Fe.useState("orient"),E=[{id:"orient",label:"Orientación",icon:Tg},{id:"nadir",label:"Trípode",icon:fg},{id:"color",label:"Color",icon:bg},{id:"reframe",label:"Reencuadre",icon:cg}];return P.jsxs("aside",{className:"w-80 bg-studio-800 border-l border-white/10 flex flex-col shrink-0 select-none overflow-hidden z-20",children:[P.jsx("div",{className:"flex border-b border-white/10 bg-studio-900/60 p-1 gap-1",children:E.map(({id:T,label:y,icon:v})=>P.jsxs("button",{onClick:()=>S(T),className:`flex-1 py-2 rounded-md flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-all ${x===T?"bg-studio-700 text-studio-accent font-bold shadow-sm":"text-gray-400 hover:text-gray-200 hover:bg-white/5"}`,children:[P.jsx(v,{className:"w-4 h-4"}),P.jsx("span",{children:y})]},T))}),P.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[x==="orient"&&P.jsx(t1,{orientation:s,onChange:e,onReset:n,onAutoLevel:r}),x==="nadir"&&P.jsx(n1,{config:f,onChange:h}),x==="color"&&P.jsx(i1,{adjustments:a,onChange:c,onReset:u}),x==="reframe"&&P.jsx(r1,{onCapture:m,is3dViewActive:g,onSwitchTo3dView:_})]}),P.jsxs("div",{className:"p-3 bg-studio-900/80 border-t border-white/10 text-[10px] font-mono text-gray-400 flex items-center justify-between",children:[P.jsxs("span",{children:["Y: ",s.yaw,"° • P: ",s.pitch,"° • R: ",s.roll,"°"]}),P.jsx("span",{className:"text-studio-accent font-semibold",children:"LISTO"})]})]})};function o1(s,e){return`<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.1.0-jc003">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about=""
      xmlns:GPano="http://ns.google.com/photos/1.0/panorama/">
      <GPano:UsePanoramaViewer>True</GPano:UsePanoramaViewer>
      <GPano:CaptureSoftware>360 Studio Web</GPano:CaptureSoftware>
      <GPano:StitchingSoftware>360 Studio Web</GPano:StitchingSoftware>
      <GPano:ProjectionType>Equirectangular</GPano:ProjectionType>
      <GPano:PoseHeadingDegrees>0.0</GPano:PoseHeadingDegrees>
      <GPano:PosePitchDegrees>0.0</GPano:PosePitchDegrees>
      <GPano:PoseRollDegrees>0.0</GPano:PoseRollDegrees>
      <GPano:InitialViewHeadingDegrees>0.0</GPano:InitialViewHeadingDegrees>
      <GPano:InitialViewPitchDegrees>0.0</GPano:InitialViewPitchDegrees>
      <GPano:CroppedAreaImageWidthPixels>${s}</GPano:CroppedAreaImageWidthPixels>
      <GPano:CroppedAreaImageHeightPixels>${e}</GPano:CroppedAreaImageHeightPixels>
      <GPano:FullPanoWidthPixels>${s}</GPano:FullPanoWidthPixels>
      <GPano:FullPanoHeightPixels>${e}</GPano:FullPanoHeightPixels>
      <GPano:CroppedAreaLeftPixels>0</GPano:CroppedAreaLeftPixels>
      <GPano:CroppedAreaTopPixels>0</GPano:CroppedAreaTopPixels>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>`}async function a1(s,e,n){const r=await s.arrayBuffer(),a=new Uint8Array(r);if(a.length<4||a[0]!==255||a[1]!==216)return console.warn("Input is not a standard JPEG, returning original blob"),s;const c=o1(e,n),u=new TextEncoder,f=u.encode(c),h=u.encode("http://ns.adobe.com/xap/1.0/\0"),m=2+h.length+f.length;if(m>65535)return console.error("XMP payload too large for a single APP1 marker"),s;const g=new Uint8Array(2+m);g[0]=255,g[1]=225,g[2]=m>>8&255,g[3]=m&255,g.set(h,4),g.set(f,4+h.length);let _=2,x=2;for(;_<a.length-1;)if(a[_]===255){const y=a[_+1];if(y===218||y===217)break;if(y===216||y>=208&&y<=215){_+=2;continue}if(_+3>=a.length)break;const v=a[_+2]<<8|a[_+3],D=_+2+v;if(y===224){x=D,_=D;continue}if(y===225&&v>=31){const N=a.subarray(_+4,_+4+28);if(new TextDecoder().decode(N).startsWith("http://ns.adobe.com/xap/1.0/")){_=D;continue}}_=D}else _++;const S=a.subarray(0,x),E=a.subarray(x),T=new Uint8Array(S.length+g.length+E.length);return T.set(S,0),T.set(g,S.length),T.set(E,S.length+g.length),new Blob([T],{type:"image/jpeg"})}const l1=({isOpen:s,onClose:e,imageSrc:n,sourceWidth:r,sourceHeight:a,orientation:c,colorAdjustments:u,nadirPatch:f})=>{const[h,m]=Fe.useState("orig"),[g,_]=Fe.useState("jpeg"),[x,S]=Fe.useState(.95),[E,T]=Fe.useState(!0),[y,v]=Fe.useState(!1),[D,N]=Fe.useState(0);if(!s)return null;const R=()=>{switch(h){case"8k":return{width:7680,height:3840};case"5.7k":return{width:5760,height:2880};case"4k":return{width:3840,height:1920};case"2k":return{width:2048,height:1024};case"orig":default:return{width:r||4096,height:a||2048}}},q=async()=>{v(!0),N(10);try{const{width:H,height:b}=R(),C=document.createElement("canvas");C.width=H,C.height=b;const B=new Gd({canvas:C,antialias:!0,preserveDrawingBuffer:!0});B.setSize(H,b);const ce=new Wd,Q=new Hd(-1,1,1,-1,0,1);N(30);const fe=new ko,le=await new Promise(($,de)=>{fe.load(n,$,void 0,de)});N(50);const se=Nd(c),oe=new di({vertexShader:Ug,fragmentShader:Ig,uniforms:{tSource:{value:le},uRotationMatrix:{value:se},uExposure:{value:u.exposure/100},uBrightness:{value:u.brightness/100},uContrast:{value:u.contrast/100},uSaturation:{value:u.saturation/100},uWarmth:{value:u.warmth/100},uNadirEnabled:{value:f.enabled},uNadirRadius:{value:Pn(f.radius)},uNadirFeather:{value:f.feather/100},uNadirMode:{value:f.mode==="color"?0:f.mode==="blur"?1:2},uNadirColor:{value:new St(f.color)}}}),F=new Kn(new Ys(2,2),oe);ce.add(F),B.render(ce,Q),N(70);const te=g==="jpeg"?"image/jpeg":"image/png",ee=await new Promise($=>{C.toBlob($,te,x)});if(!ee)throw new Error("No se pudo generar la imagen");let U=ee;g==="jpeg"&&E&&(N(85),U=await a1(ee,H,b)),N(100);const K=URL.createObjectURL(U),Ce=document.createElement("a");Ce.href=K,Ce.download=`insta360_360edit_${H}x${b}_${Date.now()}.${g==="jpeg"?"jpg":"png"}`,document.body.appendChild(Ce),Ce.click(),document.body.removeChild(Ce),URL.revokeObjectURL(K),B.dispose(),le.dispose(),oe.dispose(),setTimeout(()=>{v(!1),e()},500)}catch(H){console.error(H),alert("Error al exportar la imagen"),v(!1)}},{width:k,height:O}=R();return P.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn",children:P.jsxs("div",{className:"bg-studio-800 border border-white/10 rounded-xl w-full max-w-md overflow-hidden shadow-2xl",children:[P.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-white/10 bg-studio-900/50",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx(Ng,{className:"w-5 h-5 text-studio-accent"}),P.jsx("h2",{className:"text-sm font-bold uppercase tracking-wider text-white",children:"Exportar Foto 360"})]}),P.jsx("button",{onClick:e,disabled:y,className:"text-gray-400 hover:text-white p-1 rounded-md hover:bg-white/5 transition-colors",children:P.jsx($E,{className:"w-5 h-5"})})]}),P.jsxs("div",{className:"p-5 space-y-5",children:[P.jsxs("div",{className:"space-y-2",children:[P.jsx("label",{className:"text-xs font-semibold text-gray-300",children:"Resolución de Salida"}),P.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"orig",label:"Original",desc:`${r||4096}×${a||2048}`},{id:"5.7k",label:"5.7K Insta360",desc:"5760×2880 (Nativa)"},{id:"8k",label:"8K Ultra HD",desc:"7680×3840"},{id:"4k",label:"4K Standard",desc:"3840×1920"}].map(H=>P.jsxs("button",{onClick:()=>m(H.id),className:`p-2.5 rounded-lg border text-left transition-all ${h===H.id?"bg-studio-accent/20 border-studio-accent text-white":"bg-studio-900/60 border-white/10 text-gray-400 hover:border-white/30"}`,children:[P.jsx("div",{className:"text-xs font-bold text-gray-200",children:H.label}),P.jsx("div",{className:"text-[10px] font-mono text-gray-400",children:H.desc})]},H.id))})]}),P.jsxs("div",{className:"space-y-2",children:[P.jsx("label",{className:"text-xs font-semibold text-gray-300",children:"Formato de Archivo"}),P.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"jpeg",label:"JPEG (Recomendado)",desc:"Ligero con metadatos GPano"},{id:"png",label:"PNG Sin Pérdida",desc:"Máxima calidad sin compresión"}].map(H=>P.jsxs("button",{onClick:()=>_(H.id),className:`p-2.5 rounded-lg border text-left transition-all ${g===H.id?"bg-studio-accent/20 border-studio-accent text-white":"bg-studio-900/60 border-white/10 text-gray-400 hover:border-white/30"}`,children:[P.jsx("div",{className:"text-xs font-bold text-gray-200",children:H.label}),P.jsx("div",{className:"text-[10px] text-gray-400",children:H.desc})]},H.id))})]}),g==="jpeg"&&P.jsxs("label",{htmlFor:"embed-gpano-toggle",className:"flex items-start gap-3 bg-studio-900/70 p-3 rounded-lg border border-white/5 cursor-pointer",children:[P.jsx("input",{id:"embed-gpano-toggle",name:"embed-gpano-toggle",type:"checkbox",checked:E,onChange:H=>T(H.target.checked),className:"mt-0.5 rounded border-gray-700 text-studio-accent focus:ring-studio-accent"}),P.jsxs("div",{className:"space-y-0.5 text-left",children:[P.jsxs("span",{className:"text-xs font-semibold text-gray-200 flex items-center gap-1.5",children:["Incrustar Metadatos Google Photo Sphere (GPano XMP)",P.jsx(HE,{className:"w-3.5 h-3.5 text-studio-accent"})]}),P.jsx("p",{className:"text-[10px] text-gray-400 leading-tight",children:"Permite que Facebook, Google Fotos, visores VR y apps reconozcan el archivo automáticamente como foto 360 interactiva."})]})]}),y&&P.jsxs("div",{className:"space-y-1.5 pt-2",children:[P.jsxs("div",{className:"flex justify-between text-xs font-mono text-gray-400",children:[P.jsx("span",{children:"Procesando en GPU..."}),P.jsxs("span",{children:[D,"%"]})]}),P.jsx("div",{className:"w-full bg-studio-900 rounded-full h-2 overflow-hidden",children:P.jsx("div",{className:"bg-studio-accent h-full transition-all duration-300",style:{width:`${D}%`}})})]})]}),P.jsxs("div",{className:"px-5 py-4 bg-studio-900/80 border-t border-white/10 flex items-center justify-between",children:[P.jsxs("div",{className:"text-[11px] font-mono text-gray-400",children:["Salida: ",k," × ",O," px"]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("button",{onClick:e,disabled:y,className:"px-4 py-2 rounded-lg text-xs font-medium text-gray-400 hover:text-white transition-colors",children:"Cancelar"}),P.jsx("button",{onClick:q,disabled:y,className:"px-5 py-2 bg-studio-accent hover:bg-studio-accent/90 text-studio-900 font-bold rounded-lg text-xs transition-all flex items-center gap-2 shadow-lg shadow-studio-accent/20 disabled:opacity-50",children:y?P.jsxs(P.Fragment,{children:[P.jsx(jE,{className:"w-4 h-4 animate-spin"}),P.jsx("span",{children:"Renderizando..."})]}):P.jsxs(P.Fragment,{children:[P.jsx(qd,{className:"w-4 h-4"}),P.jsx("span",{children:"Descargar Foto 360"})]})})]})]})]})})};function c1({orientation:s,colorAdjustments:e,nadirPatch:n,viewMode:r,fileName:a,onUpdateOrientation:c,onUpdateColors:u,onUpdateNadir:f,onUpdateViewMode:h,onResetOrientation:m,onAutoLevel:g,onTriggerExport:_,onTriggerReframe:x}){const[S,E]=Fe.useState(!1),T=Fe.useRef(null);return Fe.useEffect(()=>{let y;const v=()=>{try{const D=new WebSocket("ws://127.0.0.1:5174");T.current=D,D.onopen=()=>{E(!0),D.send(JSON.stringify({type:"STATE_UPDATE",data:{orientation:s,colorAdjustments:e,nadirPatch:n,viewMode:r,fileName:a}}))},D.onmessage=N=>{try{const R=JSON.parse(N.data);switch(R.type){case"SET_ORIENTATION":c(R.data);break;case"AUTO_LEVEL":g();break;case"RESET_ORIENTATION":m();break;case"SET_COLORS":u(R.data);break;case"SET_NADIR":f(R.data);break;case"SET_VIEW_MODE":h(R.data);break;case"TRIGGER_EXPORT":_();break;case"TRIGGER_REFRAME":x(R.data.aspectRatio,R.data.fov);break;default:break}}catch(R){console.error("MCP Bridge message parse error:",R)}},D.onclose=()=>{E(!1),y=setTimeout(v,4e3)},D.onerror=()=>{E(!1)}}catch{E(!1),y=setTimeout(v,4e3)}};return v(),()=>{clearTimeout(y),T.current&&T.current.close()}},[]),Fe.useEffect(()=>{T.current&&T.current.readyState===WebSocket.OPEN&&T.current.send(JSON.stringify({type:"STATE_UPDATE",data:{orientation:s,colorAdjustments:e,nadirPatch:n,viewMode:r,fileName:a}}))},[s,e,n,r,a]),{isConnected:S}}const u1=()=>{const[s,e]=Fe.useState(""),[n,r]=Fe.useState("demo_insta360_panorama.jpg"),[a,c]=Fe.useState({width:2048,height:1024}),[u,f]=Fe.useState({yaw:0,pitch:0,roll:0}),[h,m]=Fe.useState({exposure:0,brightness:0,contrast:0,saturation:0,warmth:0}),[g,_]=Fe.useState({enabled:!1,radius:18,feather:40,mode:"blur",color:"#15191e"}),[x,S]=Fe.useState("split"),[E,T]=Fe.useState(!1),[y,v]=Fe.useState(!1),D=Fe.useRef(null),N=Fe.useRef(null),R=()=>{N.current&&(URL.revokeObjectURL(N.current),N.current=null)};Fe.useEffect(()=>{const F=Cp(2048,1024);return e(F),()=>{R()}},[]);const q=F=>{R();const te=URL.createObjectURL(F);N.current=te,e(te),r(F.name);const ee=new Image;ee.onload=()=>{c({width:ee.width,height:ee.height})},ee.src=te,f({yaw:0,pitch:0,roll:0})},k=F=>{F.preventDefault(),v(!0)},O=()=>{v(!1)},H=F=>{F.preventDefault(),v(!1),F.dataTransfer.files&&F.dataTransfer.files[0]&&q(F.dataTransfer.files[0])},b=F=>{f(te=>({...te,...F}))},C=()=>{f({yaw:0,pitch:0,roll:0})},B=()=>{f(F=>({...F,pitch:0,roll:0}))},ce=(F,te)=>{f(ee=>{let U=ee.yaw+F;for(;U>180;)U-=360;for(;U<-180;)U+=360;let K=ee.pitch+te;return K=Math.max(-90,Math.min(90,K)),{...ee,yaw:Math.round(U*10)/10,pitch:Math.round(K*10)/10}})},Q=F=>{m(te=>({...te,...F}))},fe=()=>{m({exposure:0,brightness:0,contrast:0,saturation:0,warmth:0})},le=F=>{_(te=>({...te,...F}))},se=(F,te)=>{if(D.current){const ee=D.current.captureSnapshot(F,te);if(ee){const U=document.createElement("a");U.href=ee,U.download=`insta360_reframe_${F.replace(":","x")}_${Date.now()}.jpg`,document.body.appendChild(U),U.click(),document.body.removeChild(U)}}},{isConnected:oe}=c1({orientation:u,colorAdjustments:h,nadirPatch:g,viewMode:x,fileName:n,onUpdateOrientation:b,onUpdateColors:Q,onUpdateNadir:le,onUpdateViewMode:S,onResetOrientation:C,onAutoLevel:B,onTriggerExport:()=>T(!0),onTriggerReframe:(F,te)=>se(F,te)});return P.jsxs("div",{className:"flex flex-col h-screen w-screen overflow-hidden bg-studio-900 text-gray-100",onDragOver:k,onDragLeave:O,onDrop:H,children:[P.jsx(e1,{viewMode:x,onViewModeChange:S,onFileUpload:q,onLoadDemo:()=>{R();const F=Cp(2048,1024);e(F),r("demo_insta360_panorama.jpg"),c({width:2048,height:1024}),f({yaw:0,pitch:0,roll:0})},onOpenExport:()=>T(!0),fileName:n,isMcpConnected:oe}),P.jsxs("div",{className:"flex-1 flex overflow-hidden relative",children:[P.jsx("main",{className:"flex-1 relative overflow-hidden bg-black flex",children:s?P.jsxs(P.Fragment,{children:[(x==="3d"||x==="split")&&P.jsxs("div",{className:`relative h-full ${x==="split"?"w-1/2 border-r border-white/10":"w-full"}`,children:[x==="split"&&P.jsx("div",{className:"absolute top-2 left-2 z-20 bg-studio-900/80 px-2 py-0.5 rounded text-[10px] font-mono text-studio-accent border border-white/10",children:"VISTA 3D INTERACTIVA"}),P.jsx(QE,{imageSrc:s,orientation:u,colorAdjustments:h,nadirPatch:g,onSetCurrentViewAsCenter:ce,viewerRef:D})]}),(x==="equirectangular"||x==="split")&&P.jsxs("div",{className:`relative h-full ${x==="split"?"w-1/2":"w-full"}`,children:[x==="split"&&P.jsx("div",{className:"absolute top-2 left-2 z-20 bg-studio-900/80 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 border border-white/10",children:"PLANO EQUIRRECTANGULAR (2:1)"}),P.jsx(JE,{imageSrc:s,orientation:u,colorAdjustments:h,nadirPatch:g,onYawChange:F=>b({yaw:F}),onPitchChange:F=>b({pitch:F}),onRollChange:F=>b({roll:F})})]})]}):P.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center text-gray-500",children:[P.jsx(Cm,{className:"w-16 h-16 text-gray-600 mb-3"}),P.jsx("p",{className:"text-sm",children:"Arrastra y suelta tu foto 360 aquí"})]})}),P.jsx(s1,{orientation:u,onOrientationChange:b,onResetOrientation:C,onAutoLevel:B,colorAdjustments:h,onColorChange:Q,onResetColors:fe,nadirPatch:g,onNadirChange:le,onCaptureReframe:se,is3dViewActive:x==="3d"||x==="split",onSwitchTo3dView:()=>S("3d")})]}),y&&P.jsxs("div",{className:"absolute inset-0 z-50 bg-studio-900/90 backdrop-blur-md flex flex-col items-center justify-center border-4 border-dashed border-studio-accent m-4 rounded-2xl animate-pulse pointer-events-none",children:[P.jsx(Cm,{className:"w-20 h-20 text-studio-accent mb-4"}),P.jsx("h2",{className:"text-2xl font-bold text-white",children:"Suelta tu foto 360 aquí"}),P.jsx("p",{className:"text-sm text-gray-300 mt-2",children:"Compatible con fotos cosidas de Insta360 (JPG, PNG)"})]}),P.jsx(l1,{isOpen:E,onClose:()=>T(!1),imageSrc:s,sourceWidth:a.width,sourceHeight:a.height,orientation:u,colorAdjustments:h,nadirPatch:g})]})};wv.createRoot(document.getElementById("root")).render(P.jsx(vv.StrictMode,{children:P.jsx(u1,{})}));
