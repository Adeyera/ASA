function ep(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(n,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function tp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ou={exports:{}},la={},au={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $n=Symbol.for("react.element"),rp=Symbol.for("react.portal"),np=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),sp=Symbol.for("react.context"),lp=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),up=Symbol.for("react.memo"),dp=Symbol.for("react.lazy"),bl=Symbol.iterator;function fp(e){return e===null||typeof e!="object"?null:(e=bl&&e[bl]||e["@@iterator"],typeof e=="function"?e:null)}var iu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},su=Object.assign,lu={};function qr(e,t,r){this.props=e,this.context=t,this.refs=lu,this.updater=r||iu}qr.prototype.isReactComponent={};qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cu(){}cu.prototype=qr.prototype;function hs(e,t,r){this.props=e,this.context=t,this.refs=lu,this.updater=r||iu}var gs=hs.prototype=new cu;gs.constructor=hs;su(gs,qr.prototype);gs.isPureReactComponent=!0;var kl=Array.isArray,uu=Object.prototype.hasOwnProperty,vs={current:null},du={key:!0,ref:!0,__self:!0,__source:!0};function fu(e,t,r){var n,o={},a=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)uu.call(t,n)&&!du.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(l===1)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)o[n]===void 0&&(o[n]=l[n]);return{$$typeof:$n,type:e,key:a,ref:s,props:o,_owner:vs.current}}function pp(e,t){return{$$typeof:$n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===$n}function mp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var jl=/\/+/g;function Ta(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mp(""+e.key):t.toString(36)}function wo(e,t,r,n,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case $n:case rp:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+Ta(s,0):n,kl(o)?(r="",e!=null&&(r=e.replace(jl,"$&/")+"/"),wo(o,t,r,"",function(u){return u})):o!=null&&(xs(o)&&(o=pp(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(jl,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",kl(e))for(var l=0;l<e.length;l++){a=e[l];var c=n+Ta(a,l);s+=wo(a,t,r,c,o)}else if(c=fp(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=n+Ta(a,l++),s+=wo(a,t,r,c,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function eo(e,t,r){if(e==null)return e;var n=[],o=0;return wo(e,n,"","",function(a){return t.call(r,a,o++)}),n}function hp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},bo={transition:null},gp={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:bo,ReactCurrentOwner:vs};function pu(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:eo,forEach:function(e,t,r){eo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=qr;M.Fragment=np;M.Profiler=ap;M.PureComponent=hs;M.StrictMode=op;M.Suspense=cp;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp;M.act=pu;M.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=su({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=vs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)uu.call(t,c)&&!du.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:$n,type:e.type,key:o,ref:a,props:n,_owner:s}};M.createContext=function(e){return e={$$typeof:sp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ip,_context:e},e.Consumer=e};M.createElement=fu;M.createFactory=function(e){var t=fu.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:lp,render:e}};M.isValidElement=xs;M.lazy=function(e){return{$$typeof:dp,_payload:{_status:-1,_result:e},_init:hp}};M.memo=function(e,t){return{$$typeof:up,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=bo.transition;bo.transition={};try{e()}finally{bo.transition=t}};M.unstable_act=pu;M.useCallback=function(e,t){return De.current.useCallback(e,t)};M.useContext=function(e){return De.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return De.current.useDeferredValue(e)};M.useEffect=function(e,t){return De.current.useEffect(e,t)};M.useId=function(){return De.current.useId()};M.useImperativeHandle=function(e,t,r){return De.current.useImperativeHandle(e,t,r)};M.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return De.current.useMemo(e,t)};M.useReducer=function(e,t,r){return De.current.useReducer(e,t,r)};M.useRef=function(e){return De.current.useRef(e)};M.useState=function(e){return De.current.useState(e)};M.useSyncExternalStore=function(e,t,r){return De.current.useSyncExternalStore(e,t,r)};M.useTransition=function(){return De.current.useTransition()};M.version="18.3.1";au.exports=M;var b=au.exports;const ys=tp(b),vp=ep({__proto__:null,default:ys},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp=b,yp=Symbol.for("react.element"),wp=Symbol.for("react.fragment"),bp=Object.prototype.hasOwnProperty,kp=xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jp={key:!0,ref:!0,__self:!0,__source:!0};function mu(e,t,r){var n,o={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)bp.call(t,n)&&!jp.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:yp,type:e,key:a,ref:s,props:o,_owner:kp.current}}la.Fragment=wp;la.jsx=mu;la.jsxs=mu;ou.exports=la;var i=ou.exports,fi={},hu={exports:{}},Ke={},gu={exports:{}},vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,T){var L=P.length;P.push(T);e:for(;0<L;){var $=L-1>>>1,K=P[$];if(0<o(K,T))P[$]=T,P[L]=K,L=$;else break e}}function r(P){return P.length===0?null:P[0]}function n(P){if(P.length===0)return null;var T=P[0],L=P.pop();if(L!==T){P[0]=L;e:for(var $=0,K=P.length,J=K>>>1;$<J;){var le=2*($+1)-1,pe=P[le],U=le+1,H=P[U];if(0>o(pe,L))U<K&&0>o(H,pe)?(P[$]=H,P[U]=L,$=U):(P[$]=pe,P[le]=L,$=le);else if(U<K&&0>o(H,L))P[$]=H,P[U]=L,$=U;else break e}}return T}function o(P,T){var L=P.sortIndex-T.sortIndex;return L!==0?L:P.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],f=1,p=null,m=3,y=!1,w=!1,g=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var T=r(u);T!==null;){if(T.callback===null)n(u);else if(T.startTime<=P)n(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=r(u)}}function j(P){if(g=!1,v(P),!w)if(r(c)!==null)w=!0,se(N);else{var T=r(u);T!==null&&V(j,T.startTime-P)}}function N(P,T){w=!1,g&&(g=!1,d(C),C=-1),y=!0;var L=m;try{for(v(T),p=r(c);p!==null&&(!(p.expirationTime>T)||P&&!B());){var $=p.callback;if(typeof $=="function"){p.callback=null,m=p.priorityLevel;var K=$(p.expirationTime<=T);T=e.unstable_now(),typeof K=="function"?p.callback=K:p===r(c)&&n(c),v(T)}else n(c);p=r(c)}if(p!==null)var J=!0;else{var le=r(u);le!==null&&V(j,le.startTime-T),J=!1}return J}finally{p=null,m=L,y=!1}}var E=!1,S=null,C=-1,D=5,_=-1;function B(){return!(e.unstable_now()-_<D)}function ee(){if(S!==null){var P=e.unstable_now();_=P;var T=!0;try{T=S(!0,P)}finally{T?ue():(E=!1,S=null)}}else E=!1}var ue;if(typeof h=="function")ue=function(){h(ee)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ge=Q.port2;Q.port1.onmessage=ee,ue=function(){ge.postMessage(null)}}else ue=function(){x(ee,0)};function se(P){S=P,E||(E=!0,ue())}function V(P,T){C=x(function(){P(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,se(N))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var L=m;m=T;try{return P()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,T){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=m;m=P;try{return T()}finally{m=L}},e.unstable_scheduleCallback=function(P,T,L){var $=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?$+L:$):L=$,P){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=L+K,P={id:f++,callback:T,priorityLevel:P,startTime:L,expirationTime:K,sortIndex:-1},L>$?(P.sortIndex=L,t(u,P),r(c)===null&&P===r(u)&&(g?(d(C),C=-1):g=!0,V(j,L-$))):(P.sortIndex=K,t(c,P),w||y||(w=!0,se(N))),P},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(P){var T=m;return function(){var L=m;m=T;try{return P.apply(this,arguments)}finally{m=L}}}})(vu);gu.exports=vu;var Sp=gu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np=b,Qe=Sp;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xu=new Set,jn={};function mr(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(jn[e]=t,e=0;e<t.length;e++)xu.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pi=Object.prototype.hasOwnProperty,Ep=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sl={},Nl={};function Cp(e){return pi.call(Nl,e)?!0:pi.call(Sl,e)?!1:Ep.test(e)?Nl[e]=!0:(Sl[e]=!0,!1)}function Rp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pp(e,t,r,n){if(t===null||typeof t>"u"||Rp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,r,n,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ws=/[\-:]([a-z])/g;function bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ws,bs);je[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ws,bs);je[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ws,bs);je[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ks(e,t,r,n){var o=je.hasOwnProperty(t)?je[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pp(t,r,o,n)&&(r=null),n||o===null?Cp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Rt=Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),br=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),js=Symbol.for("react.strict_mode"),mi=Symbol.for("react.profiler"),yu=Symbol.for("react.provider"),wu=Symbol.for("react.context"),Ss=Symbol.for("react.forward_ref"),hi=Symbol.for("react.suspense"),gi=Symbol.for("react.suspense_list"),Ns=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),bu=Symbol.for("react.offscreen"),El=Symbol.iterator;function en(e){return e===null||typeof e!="object"?null:(e=El&&e[El]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Da;function un(e){if(Da===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Da=t&&t[1]||""}return`
`+Da+e}var Ua=!1;function Ia(e,t){if(!e||Ua)return"";Ua=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=n.stack.split(`
`),s=o.length-1,l=a.length-1;1<=s&&0<=l&&o[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==a[l]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Ua=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?un(e):""}function _p(e){switch(e.tag){case 5:return un(e.type);case 16:return un("Lazy");case 13:return un("Suspense");case 19:return un("SuspenseList");case 0:case 2:case 15:return e=Ia(e.type,!1),e;case 11:return e=Ia(e.type.render,!1),e;case 1:return e=Ia(e.type,!0),e;default:return""}}function vi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case br:return"Portal";case mi:return"Profiler";case js:return"StrictMode";case hi:return"Suspense";case gi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wu:return(e.displayName||"Context")+".Consumer";case yu:return(e._context.displayName||"Context")+".Provider";case Ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ns:return t=e.displayName||null,t!==null?t:vi(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return vi(e(t))}catch{}}return null}function zp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vi(t);case 8:return t===js?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ap(e){var t=ku(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=Ap(e))}function ju(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ku(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Do(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xi(e,t){var r=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Cl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Yt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Su(e,t){t=t.checked,t!=null&&ks(e,"checked",t,!1)}function yi(e,t){Su(e,t);var r=Yt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wi(e,t.type,r):t.hasOwnProperty("defaultValue")&&wi(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function wi(e,t,r){(t!=="number"||Do(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var dn=Array.isArray;function Or(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Yt(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function bi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(R(92));if(dn(r)){if(1<r.length)throw Error(R(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Yt(r)}}function Nu(e,t){var r=Yt(t.value),n=Yt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function _l(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Eu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var no,Cu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=no.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Op=["Webkit","ms","Moz","O"];Object.keys(mn).forEach(function(e){Op.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mn[t]=mn[e]})});function Ru(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||mn.hasOwnProperty(e)&&mn[e]?(""+t).trim():t+"px"}function Pu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=Ru(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var Lp=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ji(e,t){if(t){if(Lp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function Es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ei=null,Lr=null,Tr=null;function zl(e){if(e=Vn(e)){if(typeof Ei!="function")throw Error(R(280));var t=e.stateNode;t&&(t=pa(t),Ei(e.stateNode,e.type,t))}}function _u(e){Lr?Tr?Tr.push(e):Tr=[e]:Lr=e}function zu(){if(Lr){var e=Lr,t=Tr;if(Tr=Lr=null,zl(e),t)for(e=0;e<t.length;e++)zl(t[e])}}function Au(e,t){return e(t)}function Ou(){}var Fa=!1;function Lu(e,t,r){if(Fa)return e(t,r);Fa=!0;try{return Au(e,t,r)}finally{Fa=!1,(Lr!==null||Tr!==null)&&(Ou(),zu())}}function Nn(e,t){var r=e.stateNode;if(r===null)return null;var n=pa(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(R(231,t,typeof r));return r}var Ci=!1;if(St)try{var tn={};Object.defineProperty(tn,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",tn,tn),window.removeEventListener("test",tn,tn)}catch{Ci=!1}function Tp(e,t,r,n,o,a,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var hn=!1,Uo=null,Io=!1,Ri=null,Dp={onError:function(e){hn=!0,Uo=e}};function Up(e,t,r,n,o,a,s,l,c){hn=!1,Uo=null,Tp.apply(Dp,arguments)}function Ip(e,t,r,n,o,a,s,l,c){if(Up.apply(this,arguments),hn){if(hn){var u=Uo;hn=!1,Uo=null}else throw Error(R(198));Io||(Io=!0,Ri=u)}}function hr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Al(e){if(hr(e)!==e)throw Error(R(188))}function Fp(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var a=o.alternate;if(a===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return Al(o),e;if(a===n)return Al(o),t;a=a.sibling}throw Error(R(188))}if(r.return!==n.return)r=o,n=a;else{for(var s=!1,l=o.child;l;){if(l===r){s=!0,r=o,n=a;break}if(l===n){s=!0,n=o,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,n=o;break}if(l===n){s=!0,n=a,r=o;break}l=l.sibling}if(!s)throw Error(R(189))}}if(r.alternate!==n)throw Error(R(190))}if(r.tag!==3)throw Error(R(188));return r.stateNode.current===r?e:t}function Du(e){return e=Fp(e),e!==null?Uu(e):null}function Uu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uu(e);if(t!==null)return t;e=e.sibling}return null}var Iu=Qe.unstable_scheduleCallback,Ol=Qe.unstable_cancelCallback,Mp=Qe.unstable_shouldYield,Bp=Qe.unstable_requestPaint,de=Qe.unstable_now,$p=Qe.unstable_getCurrentPriorityLevel,Cs=Qe.unstable_ImmediatePriority,Fu=Qe.unstable_UserBlockingPriority,Fo=Qe.unstable_NormalPriority,Hp=Qe.unstable_LowPriority,Mu=Qe.unstable_IdlePriority,ca=null,vt=null;function Wp(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ca,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:qp,Vp=Math.log,Yp=Math.LN2;function qp(e){return e>>>=0,e===0?32:31-(Vp(e)/Yp|0)|0}var oo=64,ao=4194304;function fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~o;l!==0?n=fn(l):(a&=s,a!==0&&(n=fn(a)))}else s=r&~o,s!==0?n=fn(s):a!==0&&(n=fn(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ut(t),o=1<<r,n|=e[r],t&=~o;return n}function Qp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-ut(a),l=1<<s,c=o[s];c===-1?(!(l&r)||l&n)&&(o[s]=Qp(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function Pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bu(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function Ma(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Hn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=r}function Jp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-ut(r),a=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~a}}function Rs(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ut(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var Y=0;function $u(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hu,Ps,Wu,Vu,Yu,_i=!1,io=[],Ut=null,It=null,Ft=null,En=new Map,Cn=new Map,At=[],Gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ll(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":En.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(t.pointerId)}}function rn(e,t,r,n,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Vn(t),t!==null&&Ps(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Xp(e,t,r,n,o){switch(t){case"focusin":return Ut=rn(Ut,e,t,r,n,o),!0;case"dragenter":return It=rn(It,e,t,r,n,o),!0;case"mouseover":return Ft=rn(Ft,e,t,r,n,o),!0;case"pointerover":var a=o.pointerId;return En.set(a,rn(En.get(a)||null,e,t,r,n,o)),!0;case"gotpointercapture":return a=o.pointerId,Cn.set(a,rn(Cn.get(a)||null,e,t,r,n,o)),!0}return!1}function qu(e){var t=er(e.target);if(t!==null){var r=hr(t);if(r!==null){if(t=r.tag,t===13){if(t=Tu(r),t!==null){e.blockedOn=t,Yu(e.priority,function(){Wu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ni=n,r.target.dispatchEvent(n),Ni=null}else return t=Vn(r),t!==null&&Ps(t),e.blockedOn=r,!1;t.shift()}return!0}function Tl(e,t,r){ko(e)&&r.delete(t)}function Zp(){_i=!1,Ut!==null&&ko(Ut)&&(Ut=null),It!==null&&ko(It)&&(It=null),Ft!==null&&ko(Ft)&&(Ft=null),En.forEach(Tl),Cn.forEach(Tl)}function nn(e,t){e.blockedOn===t&&(e.blockedOn=null,_i||(_i=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Zp)))}function Rn(e){function t(o){return nn(o,e)}if(0<io.length){nn(io[0],e);for(var r=1;r<io.length;r++){var n=io[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Ut!==null&&nn(Ut,e),It!==null&&nn(It,e),Ft!==null&&nn(Ft,e),En.forEach(t),Cn.forEach(t),r=0;r<At.length;r++)n=At[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<At.length&&(r=At[0],r.blockedOn===null);)qu(r),r.blockedOn===null&&At.shift()}var Dr=Rt.ReactCurrentBatchConfig,Bo=!0;function em(e,t,r,n){var o=Y,a=Dr.transition;Dr.transition=null;try{Y=1,_s(e,t,r,n)}finally{Y=o,Dr.transition=a}}function tm(e,t,r,n){var o=Y,a=Dr.transition;Dr.transition=null;try{Y=4,_s(e,t,r,n)}finally{Y=o,Dr.transition=a}}function _s(e,t,r,n){if(Bo){var o=zi(e,t,r,n);if(o===null)Ja(e,t,n,$o,r),Ll(e,n);else if(Xp(o,e,t,r,n))n.stopPropagation();else if(Ll(e,n),t&4&&-1<Gp.indexOf(e)){for(;o!==null;){var a=Vn(o);if(a!==null&&Hu(a),a=zi(e,t,r,n),a===null&&Ja(e,t,n,$o,r),a===o)break;o=a}o!==null&&n.stopPropagation()}else Ja(e,t,n,null,r)}}var $o=null;function zi(e,t,r,n){if($o=null,e=Es(n),e=er(e),e!==null)if(t=hr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Tu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $o=e,null}function Qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($p()){case Cs:return 1;case Fu:return 4;case Fo:case Hp:return 16;case Mu:return 536870912;default:return 16}default:return 16}}var Lt=null,zs=null,jo=null;function Ku(){if(jo)return jo;var e,t=zs,r=t.length,n,o="value"in Lt?Lt.value:Lt.textContent,a=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[a-n];n++);return jo=o.slice(e,1<n?1-n:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function Dl(){return!1}function Je(e){function t(r,n,o,a,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?so:Dl,this.isPropagationStopped=Dl,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=Je(Qr),Wn=ie({},Qr,{view:0,detail:0}),rm=Je(Wn),Ba,$a,on,ua=ie({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==on&&(on&&e.type==="mousemove"?(Ba=e.screenX-on.screenX,$a=e.screenY-on.screenY):$a=Ba=0,on=e),Ba)},movementY:function(e){return"movementY"in e?e.movementY:$a}}),Ul=Je(ua),nm=ie({},ua,{dataTransfer:0}),om=Je(nm),am=ie({},Wn,{relatedTarget:0}),Ha=Je(am),im=ie({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),sm=Je(im),lm=ie({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=Je(lm),um=ie({},Qr,{data:0}),Il=Je(um),dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pm[e])?!!t[e]:!1}function Os(){return mm}var hm=ie({},Wn,{key:function(e){if(e.key){var t=dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gm=Je(hm),vm=ie({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fl=Je(vm),xm=ie({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),ym=Je(xm),wm=ie({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bm=Je(wm),km=ie({},ua,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jm=Je(km),Sm=[9,13,27,32],Ls=St&&"CompositionEvent"in window,gn=null;St&&"documentMode"in document&&(gn=document.documentMode);var Nm=St&&"TextEvent"in window&&!gn,Ju=St&&(!Ls||gn&&8<gn&&11>=gn),Ml=" ",Bl=!1;function Gu(e,t){switch(e){case"keyup":return Sm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function Em(e,t){switch(e){case"compositionend":return Xu(t);case"keypress":return t.which!==32?null:(Bl=!0,Ml);case"textInput":return e=t.data,e===Ml&&Bl?null:e;default:return null}}function Cm(e,t){if(jr)return e==="compositionend"||!Ls&&Gu(e,t)?(e=Ku(),jo=zs=Lt=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var Rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rm[e.type]:t==="textarea"}function Zu(e,t,r,n){_u(n),t=Ho(t,"onChange"),0<t.length&&(r=new As("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var vn=null,Pn=null;function Pm(e){ud(e,0)}function da(e){var t=Er(e);if(ju(t))return e}function _m(e,t){if(e==="change")return t}var ed=!1;if(St){var Wa;if(St){var Va="oninput"in document;if(!Va){var Hl=document.createElement("div");Hl.setAttribute("oninput","return;"),Va=typeof Hl.oninput=="function"}Wa=Va}else Wa=!1;ed=Wa&&(!document.documentMode||9<document.documentMode)}function Wl(){vn&&(vn.detachEvent("onpropertychange",td),Pn=vn=null)}function td(e){if(e.propertyName==="value"&&da(Pn)){var t=[];Zu(t,Pn,e,Es(e)),Lu(Pm,t)}}function zm(e,t,r){e==="focusin"?(Wl(),vn=t,Pn=r,vn.attachEvent("onpropertychange",td)):e==="focusout"&&Wl()}function Am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return da(Pn)}function Om(e,t){if(e==="click")return da(t)}function Lm(e,t){if(e==="input"||e==="change")return da(t)}function Tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Tm;function _n(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!pi.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function Vl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yl(e,t){var r=Vl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vl(r)}}function rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nd(){for(var e=window,t=Do();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Do(e.document)}return t}function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dm(e){var t=nd(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&rd(r.ownerDocument.documentElement,r)){if(n!==null&&Ts(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,a=Math.min(n.start,o);n=n.end===void 0?a:Math.min(n.end,o),!e.extend&&a>n&&(o=n,n=a,a=o),o=Yl(r,a);var s=Yl(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Um=St&&"documentMode"in document&&11>=document.documentMode,Sr=null,Ai=null,xn=null,Oi=!1;function ql(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Oi||Sr==null||Sr!==Do(n)||(n=Sr,"selectionStart"in n&&Ts(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),xn&&_n(xn,n)||(xn=n,n=Ho(Ai,"onSelect"),0<n.length&&(t=new As("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Sr)))}function lo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Nr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Ya={},od={};St&&(od=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function fa(e){if(Ya[e])return Ya[e];if(!Nr[e])return e;var t=Nr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in od)return Ya[e]=t[r];return e}var ad=fa("animationend"),id=fa("animationiteration"),sd=fa("animationstart"),ld=fa("transitionend"),cd=new Map,Ql="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){cd.set(e,t),mr(t,[e])}for(var qa=0;qa<Ql.length;qa++){var Qa=Ql[qa],Im=Qa.toLowerCase(),Fm=Qa[0].toUpperCase()+Qa.slice(1);Qt(Im,"on"+Fm)}Qt(ad,"onAnimationEnd");Qt(id,"onAnimationIteration");Qt(sd,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(ld,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mm=new Set("cancel close invalid load scroll toggle".split(" ").concat(pn));function Kl(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Ip(n,t,void 0,e),e.currentTarget=null}function ud(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&o.isPropagationStopped())break e;Kl(o,l,u),a=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&o.isPropagationStopped())break e;Kl(o,l,u),a=c}}}if(Io)throw e=Ri,Io=!1,Ri=null,e}function te(e,t){var r=t[Ii];r===void 0&&(r=t[Ii]=new Set);var n=e+"__bubble";r.has(n)||(dd(t,e,2,!1),r.add(n))}function Ka(e,t,r){var n=0;t&&(n|=4),dd(r,e,n,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function zn(e){if(!e[co]){e[co]=!0,xu.forEach(function(r){r!=="selectionchange"&&(Mm.has(r)||Ka(r,!1,e),Ka(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Ka("selectionchange",!1,t))}}function dd(e,t,r,n){switch(Qu(t)){case 1:var o=em;break;case 4:o=tm;break;default:o=_s}r=o.bind(null,t,r,e),o=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ja(e,t,r,n,o){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;l!==null;){if(s=er(l),s===null)return;if(c=s.tag,c===5||c===6){n=a=s;continue e}l=l.parentNode}}n=n.return}Lu(function(){var u=a,f=Es(r),p=[];e:{var m=cd.get(e);if(m!==void 0){var y=As,w=e;switch(e){case"keypress":if(So(r)===0)break e;case"keydown":case"keyup":y=gm;break;case"focusin":w="focus",y=Ha;break;case"focusout":w="blur",y=Ha;break;case"beforeblur":case"afterblur":y=Ha;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ul;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ym;break;case ad:case id:case sd:y=sm;break;case ld:y=bm;break;case"scroll":y=rm;break;case"wheel":y=jm;break;case"copy":case"cut":case"paste":y=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Fl}var g=(t&4)!==0,x=!g&&e==="scroll",d=g?m!==null?m+"Capture":null:m;g=[];for(var h=u,v;h!==null;){v=h;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,d!==null&&(j=Nn(h,d),j!=null&&g.push(An(h,j,v)))),x)break;h=h.return}0<g.length&&(m=new y(m,w,null,r,f),p.push({event:m,listeners:g}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&r!==Ni&&(w=r.relatedTarget||r.fromElement)&&(er(w)||w[Nt]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(w=r.relatedTarget||r.toElement,y=u,w=w?er(w):null,w!==null&&(x=hr(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(g=Ul,j="onMouseLeave",d="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(g=Fl,j="onPointerLeave",d="onPointerEnter",h="pointer"),x=y==null?m:Er(y),v=w==null?m:Er(w),m=new g(j,h+"leave",y,r,f),m.target=x,m.relatedTarget=v,j=null,er(f)===u&&(g=new g(d,h+"enter",w,r,f),g.target=v,g.relatedTarget=x,j=g),x=j,y&&w)t:{for(g=y,d=w,h=0,v=g;v;v=yr(v))h++;for(v=0,j=d;j;j=yr(j))v++;for(;0<h-v;)g=yr(g),h--;for(;0<v-h;)d=yr(d),v--;for(;h--;){if(g===d||d!==null&&g===d.alternate)break t;g=yr(g),d=yr(d)}g=null}else g=null;y!==null&&Jl(p,m,y,g,!1),w!==null&&x!==null&&Jl(p,x,w,g,!0)}}e:{if(m=u?Er(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var N=_m;else if($l(m))if(ed)N=Lm;else{N=Am;var E=zm}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Om);if(N&&(N=N(e,u))){Zu(p,N,r,f);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&wi(m,"number",m.value)}switch(E=u?Er(u):window,e){case"focusin":($l(E)||E.contentEditable==="true")&&(Sr=E,Ai=u,xn=null);break;case"focusout":xn=Ai=Sr=null;break;case"mousedown":Oi=!0;break;case"contextmenu":case"mouseup":case"dragend":Oi=!1,ql(p,r,f);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":ql(p,r,f)}var S;if(Ls)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else jr?Gu(e,r)&&(C="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(Ju&&r.locale!=="ko"&&(jr||C!=="onCompositionStart"?C==="onCompositionEnd"&&jr&&(S=Ku()):(Lt=f,zs="value"in Lt?Lt.value:Lt.textContent,jr=!0)),E=Ho(u,C),0<E.length&&(C=new Il(C,e,null,r,f),p.push({event:C,listeners:E}),S?C.data=S:(S=Xu(r),S!==null&&(C.data=S)))),(S=Nm?Em(e,r):Cm(e,r))&&(u=Ho(u,"onBeforeInput"),0<u.length&&(f=new Il("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:u}),f.data=S))}ud(p,t)})}function An(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ho(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Nn(e,r),a!=null&&n.unshift(An(e,a,o)),a=Nn(e,t),a!=null&&n.push(An(e,a,o))),e=e.return}return n}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jl(e,t,r,n,o){for(var a=t._reactName,s=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,o?(c=Nn(r,a),c!=null&&s.unshift(An(r,c,l))):o||(c=Nn(r,a),c!=null&&s.push(An(r,c,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var Bm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function Gl(e){return(typeof e=="string"?e:""+e).replace(Bm,`
`).replace($m,"")}function uo(e,t,r){if(t=Gl(t),Gl(e)!==t&&r)throw Error(R(425))}function Wo(){}var Li=null,Ti=null;function Di(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ui=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0,Xl=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof Xl<"u"?function(e){return Xl.resolve(null).then(e).catch(Vm)}:Ui;function Vm(e){setTimeout(function(){throw e})}function Ga(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Rn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Rn(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),gt="__reactFiber$"+Kr,On="__reactProps$"+Kr,Nt="__reactContainer$"+Kr,Ii="__reactEvents$"+Kr,Ym="__reactListeners$"+Kr,qm="__reactHandles$"+Kr;function er(e){var t=e[gt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Nt]||r[gt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Zl(e);e!==null;){if(r=e[gt])return r;e=Zl(e)}return t}e=r,r=e.parentNode}return null}function Vn(e){return e=e[gt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function pa(e){return e[On]||null}var Fi=[],Cr=-1;function Kt(e){return{current:e}}function re(e){0>Cr||(e.current=Fi[Cr],Fi[Cr]=null,Cr--)}function Z(e,t){Cr++,Fi[Cr]=e.current,e.current=t}var qt={},_e=Kt(qt),Be=Kt(!1),lr=qt;function Mr(e,t){var r=e.type.contextTypes;if(!r)return qt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in r)o[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $e(e){return e=e.childContextTypes,e!=null}function Vo(){re(Be),re(_e)}function ec(e,t,r){if(_e.current!==qt)throw Error(R(168));Z(_e,t),Z(Be,r)}function fd(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(R(108,zp(e)||"Unknown",o));return ie({},r,n)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,lr=_e.current,Z(_e,e),Z(Be,Be.current),!0}function tc(e,t,r){var n=e.stateNode;if(!n)throw Error(R(169));r?(e=fd(e,t,lr),n.__reactInternalMemoizedMergedChildContext=e,re(Be),re(_e),Z(_e,e)):re(Be),Z(Be,r)}var wt=null,ma=!1,Xa=!1;function pd(e){wt===null?wt=[e]:wt.push(e)}function Qm(e){ma=!0,pd(e)}function Jt(){if(!Xa&&wt!==null){Xa=!0;var e=0,t=Y;try{var r=wt;for(Y=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}wt=null,ma=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),Iu(Cs,Jt),o}finally{Y=t,Xa=!1}}return null}var Rr=[],Pr=0,qo=null,Qo=0,Xe=[],Ze=0,cr=null,bt=1,kt="";function Xt(e,t){Rr[Pr++]=Qo,Rr[Pr++]=qo,qo=e,Qo=t}function md(e,t,r){Xe[Ze++]=bt,Xe[Ze++]=kt,Xe[Ze++]=cr,cr=e;var n=bt;e=kt;var o=32-ut(n)-1;n&=~(1<<o),r+=1;var a=32-ut(t)+o;if(30<a){var s=o-o%5;a=(n&(1<<s)-1).toString(32),n>>=s,o-=s,bt=1<<32-ut(t)+o|r<<o|n,kt=a+e}else bt=1<<a|r<<o|n,kt=e}function Ds(e){e.return!==null&&(Xt(e,1),md(e,1,0))}function Us(e){for(;e===qo;)qo=Rr[--Pr],Rr[Pr]=null,Qo=Rr[--Pr],Rr[Pr]=null;for(;e===cr;)cr=Xe[--Ze],Xe[Ze]=null,kt=Xe[--Ze],Xe[Ze]=null,bt=Xe[--Ze],Xe[Ze]=null}var qe=null,Ye=null,ne=!1,ct=null;function hd(e,t){var r=et(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function rc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ye=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=cr!==null?{id:bt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=et(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Ye=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(ne){var t=Ye;if(t){var r=t;if(!rc(e,t)){if(Mi(e))throw Error(R(418));t=Mt(r.nextSibling);var n=qe;t&&rc(e,t)?hd(n,r):(e.flags=e.flags&-4097|2,ne=!1,qe=e)}}else{if(Mi(e))throw Error(R(418));e.flags=e.flags&-4097|2,ne=!1,qe=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function fo(e){if(e!==qe)return!1;if(!ne)return nc(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Di(e.type,e.memoizedProps)),t&&(t=Ye)){if(Mi(e))throw gd(),Error(R(418));for(;t;)hd(e,t),t=Mt(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ye=Mt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=qe?Mt(e.stateNode.nextSibling):null;return!0}function gd(){for(var e=Ye;e;)e=Mt(e.nextSibling)}function Br(){Ye=qe=null,ne=!1}function Is(e){ct===null?ct=[e]:ct.push(e)}var Km=Rt.ReactCurrentBatchConfig;function an(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(R(309));var n=r.stateNode}if(!n)throw Error(R(147,e));var o=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=o.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(R(284));if(!r._owner)throw Error(R(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oc(e){var t=e._init;return t(e._payload)}function vd(e){function t(d,h){if(e){var v=d.deletions;v===null?(d.deletions=[h],d.flags|=16):v.push(h)}}function r(d,h){if(!e)return null;for(;h!==null;)t(d,h),h=h.sibling;return null}function n(d,h){for(d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function o(d,h){return d=Wt(d,h),d.index=0,d.sibling=null,d}function a(d,h,v){return d.index=v,e?(v=d.alternate,v!==null?(v=v.index,v<h?(d.flags|=2,h):v):(d.flags|=2,h)):(d.flags|=1048576,h)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,h,v,j){return h===null||h.tag!==6?(h=ai(v,d.mode,j),h.return=d,h):(h=o(h,v),h.return=d,h)}function c(d,h,v,j){var N=v.type;return N===kr?f(d,h,v.props.children,j,v.key):h!==null&&(h.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===_t&&oc(N)===h.type)?(j=o(h,v.props),j.ref=an(d,h,v),j.return=d,j):(j=zo(v.type,v.key,v.props,null,d.mode,j),j.ref=an(d,h,v),j.return=d,j)}function u(d,h,v,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=ii(v,d.mode,j),h.return=d,h):(h=o(h,v.children||[]),h.return=d,h)}function f(d,h,v,j,N){return h===null||h.tag!==7?(h=ar(v,d.mode,j,N),h.return=d,h):(h=o(h,v),h.return=d,h)}function p(d,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ai(""+h,d.mode,v),h.return=d,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case to:return v=zo(h.type,h.key,h.props,null,d.mode,v),v.ref=an(d,null,h),v.return=d,v;case br:return h=ii(h,d.mode,v),h.return=d,h;case _t:var j=h._init;return p(d,j(h._payload),v)}if(dn(h)||en(h))return h=ar(h,d.mode,v,null),h.return=d,h;po(d,h)}return null}function m(d,h,v,j){var N=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:l(d,h,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case to:return v.key===N?c(d,h,v,j):null;case br:return v.key===N?u(d,h,v,j):null;case _t:return N=v._init,m(d,h,N(v._payload),j)}if(dn(v)||en(v))return N!==null?null:f(d,h,v,j,null);po(d,v)}return null}function y(d,h,v,j,N){if(typeof j=="string"&&j!==""||typeof j=="number")return d=d.get(v)||null,l(h,d,""+j,N);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case to:return d=d.get(j.key===null?v:j.key)||null,c(h,d,j,N);case br:return d=d.get(j.key===null?v:j.key)||null,u(h,d,j,N);case _t:var E=j._init;return y(d,h,v,E(j._payload),N)}if(dn(j)||en(j))return d=d.get(v)||null,f(h,d,j,N,null);po(h,j)}return null}function w(d,h,v,j){for(var N=null,E=null,S=h,C=h=0,D=null;S!==null&&C<v.length;C++){S.index>C?(D=S,S=null):D=S.sibling;var _=m(d,S,v[C],j);if(_===null){S===null&&(S=D);break}e&&S&&_.alternate===null&&t(d,S),h=a(_,h,C),E===null?N=_:E.sibling=_,E=_,S=D}if(C===v.length)return r(d,S),ne&&Xt(d,C),N;if(S===null){for(;C<v.length;C++)S=p(d,v[C],j),S!==null&&(h=a(S,h,C),E===null?N=S:E.sibling=S,E=S);return ne&&Xt(d,C),N}for(S=n(d,S);C<v.length;C++)D=y(S,d,C,v[C],j),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?C:D.key),h=a(D,h,C),E===null?N=D:E.sibling=D,E=D);return e&&S.forEach(function(B){return t(d,B)}),ne&&Xt(d,C),N}function g(d,h,v,j){var N=en(v);if(typeof N!="function")throw Error(R(150));if(v=N.call(v),v==null)throw Error(R(151));for(var E=N=null,S=h,C=h=0,D=null,_=v.next();S!==null&&!_.done;C++,_=v.next()){S.index>C?(D=S,S=null):D=S.sibling;var B=m(d,S,_.value,j);if(B===null){S===null&&(S=D);break}e&&S&&B.alternate===null&&t(d,S),h=a(B,h,C),E===null?N=B:E.sibling=B,E=B,S=D}if(_.done)return r(d,S),ne&&Xt(d,C),N;if(S===null){for(;!_.done;C++,_=v.next())_=p(d,_.value,j),_!==null&&(h=a(_,h,C),E===null?N=_:E.sibling=_,E=_);return ne&&Xt(d,C),N}for(S=n(d,S);!_.done;C++,_=v.next())_=y(S,d,C,_.value,j),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?C:_.key),h=a(_,h,C),E===null?N=_:E.sibling=_,E=_);return e&&S.forEach(function(ee){return t(d,ee)}),ne&&Xt(d,C),N}function x(d,h,v,j){if(typeof v=="object"&&v!==null&&v.type===kr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case to:e:{for(var N=v.key,E=h;E!==null;){if(E.key===N){if(N=v.type,N===kr){if(E.tag===7){r(d,E.sibling),h=o(E,v.props.children),h.return=d,d=h;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===_t&&oc(N)===E.type){r(d,E.sibling),h=o(E,v.props),h.ref=an(d,E,v),h.return=d,d=h;break e}r(d,E);break}else t(d,E);E=E.sibling}v.type===kr?(h=ar(v.props.children,d.mode,j,v.key),h.return=d,d=h):(j=zo(v.type,v.key,v.props,null,d.mode,j),j.ref=an(d,h,v),j.return=d,d=j)}return s(d);case br:e:{for(E=v.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){r(d,h.sibling),h=o(h,v.children||[]),h.return=d,d=h;break e}else{r(d,h);break}else t(d,h);h=h.sibling}h=ii(v,d.mode,j),h.return=d,d=h}return s(d);case _t:return E=v._init,x(d,h,E(v._payload),j)}if(dn(v))return w(d,h,v,j);if(en(v))return g(d,h,v,j);po(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(r(d,h.sibling),h=o(h,v),h.return=d,d=h):(r(d,h),h=ai(v,d.mode,j),h.return=d,d=h),s(d)):r(d,h)}return x}var $r=vd(!0),xd=vd(!1),Ko=Kt(null),Jo=null,_r=null,Fs=null;function Ms(){Fs=_r=Jo=null}function Bs(e){var t=Ko.current;re(Ko),e._currentValue=t}function $i(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ur(e,t){Jo=e,Fs=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(Fs!==e)if(e={context:e,memoizedValue:t,next:null},_r===null){if(Jo===null)throw Error(R(308));_r=e,Jo.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return t}var tr=null;function $s(e){tr===null?tr=[e]:tr.push(e)}function yd(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,$s(t)):(r.next=o.next,o.next=r),t.interleaved=r,Et(e,n)}function Et(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var zt=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,W&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Et(e,r)}return o=n.interleaved,o===null?(t.next=t,$s(n)):(t.next=o.next,o.next=t),n.interleaved=t,Et(e,r)}function No(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Rs(e,r)}}function ac(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?o=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?o=a=t:a=a.next=t}else o=a=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Go(e,t,r,n){var o=e.updateQueue;zt=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?a=u:s.next=u,s=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(a!==null){var p=o.baseState;s=0,f=u=c=null,l=a;do{var m=l.lane,y=l.eventTime;if((n&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,g=l;switch(m=t,y=r,g.tag){case 1:if(w=g.payload,typeof w=="function"){p=w.call(y,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,m=typeof w=="function"?w.call(y,p,m):w,m==null)break e;p=ie({},p,m);break e;case 2:zt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,c=p):f=f.next=y,s|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(f===null&&(c=p),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);dr|=s,e.lanes=s,e.memoizedState=p}}function ic(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(R(191,o));o.call(n)}}}var Yn={},xt=Kt(Yn),Ln=Kt(Yn),Tn=Kt(Yn);function rr(e){if(e===Yn)throw Error(R(174));return e}function Ws(e,t){switch(Z(Tn,t),Z(Ln,e),Z(xt,Yn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ki(t,e)}re(xt),Z(xt,t)}function Hr(){re(xt),re(Ln),re(Tn)}function bd(e){rr(Tn.current);var t=rr(xt.current),r=ki(t,e.type);t!==r&&(Z(Ln,e),Z(xt,r))}function Vs(e){Ln.current===e&&(re(xt),re(Ln))}var oe=Kt(0);function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Za=[];function Ys(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var Eo=Rt.ReactCurrentDispatcher,ei=Rt.ReactCurrentBatchConfig,ur=0,ae=null,ve=null,ye=null,Zo=!1,yn=!1,Dn=0,Jm=0;function Ee(){throw Error(R(321))}function qs(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ft(e[r],t[r]))return!1;return!0}function Qs(e,t,r,n,o,a){if(ur=a,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?eh:th,e=r(n,o),yn){a=0;do{if(yn=!1,Dn=0,25<=a)throw Error(R(301));a+=1,ye=ve=null,t.updateQueue=null,Eo.current=rh,e=r(n,o)}while(yn)}if(Eo.current=ea,t=ve!==null&&ve.next!==null,ur=0,ye=ve=ae=null,Zo=!1,t)throw Error(R(300));return e}function Ks(){var e=Dn!==0;return Dn=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=e:ye=ye.next=e,ye}function nt(){if(ve===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=ye===null?ae.memoizedState:ye.next;if(t!==null)ye=t,ve=e;else{if(e===null)throw Error(R(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ye===null?ae.memoizedState=ye=e:ye=ye.next=e}return ye}function Un(e,t){return typeof t=="function"?t(e):t}function ti(e){var t=nt(),r=t.queue;if(r===null)throw Error(R(311));r.lastRenderedReducer=e;var n=ve,o=n.baseQueue,a=r.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}n.baseQueue=o=a,r.pending=null}if(o!==null){a=o.next,n=n.baseState;var l=s=null,c=null,u=a;do{var f=u.lane;if((ur&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=n):c=c.next=p,ae.lanes|=f,dr|=f}u=u.next}while(u!==null&&u!==a);c===null?s=n:c.next=l,ft(n,t.memoizedState)||(Me=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do a=o.lane,ae.lanes|=a,dr|=a,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ri(e){var t=nt(),r=t.queue;if(r===null)throw Error(R(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,a=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);ft(a,t.memoizedState)||(Me=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function kd(){}function jd(e,t){var r=ae,n=nt(),o=t(),a=!ft(n.memoizedState,o);if(a&&(n.memoizedState=o,Me=!0),n=n.queue,Js(Ed.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||ye!==null&&ye.memoizedState.tag&1){if(r.flags|=2048,In(9,Nd.bind(null,r,n,o,t),void 0,null),we===null)throw Error(R(349));ur&30||Sd(r,t,o)}return o}function Sd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Nd(e,t,r,n){t.value=r,t.getSnapshot=n,Cd(t)&&Rd(e)}function Ed(e,t,r){return r(function(){Cd(t)&&Rd(e)})}function Cd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ft(e,r)}catch{return!0}}function Rd(e){var t=Et(e,1);t!==null&&dt(t,e,1,-1)}function sc(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:e},t.queue=e,e=e.dispatch=Zm.bind(null,ae,e),[t.memoizedState,e]}function In(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Pd(){return nt().memoizedState}function Co(e,t,r,n){var o=ht();ae.flags|=e,o.memoizedState=In(1|t,r,void 0,n===void 0?null:n)}function ha(e,t,r,n){var o=nt();n=n===void 0?null:n;var a=void 0;if(ve!==null){var s=ve.memoizedState;if(a=s.destroy,n!==null&&qs(n,s.deps)){o.memoizedState=In(t,r,a,n);return}}ae.flags|=e,o.memoizedState=In(1|t,r,a,n)}function lc(e,t){return Co(8390656,8,e,t)}function Js(e,t){return ha(2048,8,e,t)}function _d(e,t){return ha(4,2,e,t)}function zd(e,t){return ha(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Od(e,t,r){return r=r!=null?r.concat([e]):null,ha(4,4,Ad.bind(null,t,e),r)}function Gs(){}function Ld(e,t){var r=nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&qs(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Td(e,t){var r=nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&qs(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Dd(e,t,r){return ur&21?(ft(r,t)||(r=Bu(),ae.lanes|=r,dr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=r)}function Gm(e,t){var r=Y;Y=r!==0&&4>r?r:4,e(!0);var n=ei.transition;ei.transition={};try{e(!1),t()}finally{Y=r,ei.transition=n}}function Ud(){return nt().memoizedState}function Xm(e,t,r){var n=Ht(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Id(e))Fd(t,r);else if(r=yd(e,t,r,n),r!==null){var o=Oe();dt(r,e,n,o),Md(r,t,n)}}function Zm(e,t,r){var n=Ht(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Id(e))Fd(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,r);if(o.hasEagerState=!0,o.eagerState=l,ft(l,s)){var c=t.interleaved;c===null?(o.next=o,$s(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}r=yd(e,t,o,n),r!==null&&(o=Oe(),dt(r,e,n,o),Md(r,t,n))}}function Id(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Fd(e,t){yn=Zo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Md(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Rs(e,r)}}var ea={readContext:rt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},eh={readContext:rt,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:lc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Co(4194308,4,Ad.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){return Co(4,2,e,t)},useMemo:function(e,t){var r=ht();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ht();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Xm.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:sc,useDebugValue:Gs,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=sc(!1),t=e[0];return e=Gm.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ae,o=ht();if(ne){if(r===void 0)throw Error(R(407));r=r()}else{if(r=t(),we===null)throw Error(R(349));ur&30||Sd(n,t,r)}o.memoizedState=r;var a={value:r,getSnapshot:t};return o.queue=a,lc(Ed.bind(null,n,a,e),[e]),n.flags|=2048,In(9,Nd.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=ht(),t=we.identifierPrefix;if(ne){var r=kt,n=bt;r=(n&~(1<<32-ut(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Dn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Jm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},th={readContext:rt,useCallback:Ld,useContext:rt,useEffect:Js,useImperativeHandle:Od,useInsertionEffect:_d,useLayoutEffect:zd,useMemo:Td,useReducer:ti,useRef:Pd,useState:function(){return ti(Un)},useDebugValue:Gs,useDeferredValue:function(e){var t=nt();return Dd(t,ve.memoizedState,e)},useTransition:function(){var e=ti(Un)[0],t=nt().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:jd,useId:Ud,unstable_isNewReconciler:!1},rh={readContext:rt,useCallback:Ld,useContext:rt,useEffect:Js,useImperativeHandle:Od,useInsertionEffect:_d,useLayoutEffect:zd,useMemo:Td,useReducer:ri,useRef:Pd,useState:function(){return ri(Un)},useDebugValue:Gs,useDeferredValue:function(e){var t=nt();return ve===null?t.memoizedState=e:Dd(t,ve.memoizedState,e)},useTransition:function(){var e=ri(Un)[0],t=nt().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:jd,useId:Ud,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Hi(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ie({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ga={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Oe(),o=Ht(e),a=jt(n,o);a.payload=t,r!=null&&(a.callback=r),t=Bt(e,a,o),t!==null&&(dt(t,e,o,n),No(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Oe(),o=Ht(e),a=jt(n,o);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Bt(e,a,o),t!==null&&(dt(t,e,o,n),No(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Oe(),n=Ht(e),o=jt(r,n);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,n),t!==null&&(dt(t,e,n,r),No(t,e,n))}};function cc(e,t,r,n,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,s):t.prototype&&t.prototype.isPureReactComponent?!_n(r,n)||!_n(o,a):!0}function Bd(e,t,r){var n=!1,o=qt,a=t.contextType;return typeof a=="object"&&a!==null?a=rt(a):(o=$e(t)?lr:_e.current,n=t.contextTypes,a=(n=n!=null)?Mr(e,o):qt),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function uc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function Wi(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Hs(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=rt(a):(a=$e(t)?lr:_e.current,o.context=Mr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Hi(e,t,a,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ga.enqueueReplaceState(o,o.state,null),Go(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var r="",n=t;do r+=_p(n),n=n.return;while(n);var o=r}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function ni(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Vi(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var nh=typeof WeakMap=="function"?WeakMap:Map;function $d(e,t,r){r=jt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ra||(ra=!0,ts=n),Vi(e,t)},r}function Hd(e,t,r){r=jt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Vi(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Vi(e,t),typeof n!="function"&&($t===null?$t=new Set([this]):$t.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function dc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new nh;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=vh.bind(null,e,t,r),t.then(e,e))}function fc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pc(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=jt(-1,1),t.tag=2,Bt(r,t,1))),r.lanes|=1),e)}var oh=Rt.ReactCurrentOwner,Me=!1;function Ae(e,t,r,n){t.child=e===null?xd(t,null,r,n):$r(t,e.child,r,n)}function mc(e,t,r,n,o){r=r.render;var a=t.ref;return Ur(t,o),n=Qs(e,t,r,n,a,o),r=Ks(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(ne&&r&&Ds(t),t.flags|=1,Ae(e,t,n,o),t.child)}function hc(e,t,r,n,o){if(e===null){var a=r.type;return typeof a=="function"&&!al(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Wd(e,t,a,n,o)):(e=zo(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:_n,r(s,n)&&e.ref===t.ref)return Ct(e,t,o)}return t.flags|=1,e=Wt(a,n),e.ref=t.ref,e.return=t,t.child=e}function Wd(e,t,r,n,o){if(e!==null){var a=e.memoizedProps;if(_n(a,n)&&e.ref===t.ref)if(Me=!1,t.pendingProps=n=a,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Ct(e,t,o)}return Yi(e,t,r,n,o)}function Vd(e,t,r){var n=t.pendingProps,o=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Ar,Ve),Ve|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Ar,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,Z(Ar,Ve),Ve|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,Z(Ar,Ve),Ve|=n;return Ae(e,t,o,r),t.child}function Yd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Yi(e,t,r,n,o){var a=$e(r)?lr:_e.current;return a=Mr(t,a),Ur(t,o),r=Qs(e,t,r,n,a,o),n=Ks(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(ne&&n&&Ds(t),t.flags|=1,Ae(e,t,r,o),t.child)}function gc(e,t,r,n,o){if($e(r)){var a=!0;Yo(t)}else a=!1;if(Ur(t,o),t.stateNode===null)Ro(e,t),Bd(t,r,n),Wi(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=$e(r)?lr:_e.current,u=Mr(t,u));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==u)&&uc(t,s,n,u),zt=!1;var m=t.memoizedState;s.state=m,Go(t,n,s,o),c=t.memoizedState,l!==n||m!==c||Be.current||zt?(typeof f=="function"&&(Hi(t,r,f,n),c=t.memoizedState),(l=zt||cc(t,r,l,n,m,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),s.props=n,s.state=c,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,wd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),s.props=u,p=t.pendingProps,m=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=rt(c):(c=$e(r)?lr:_e.current,c=Mr(t,c));var y=r.getDerivedStateFromProps;(f=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==c)&&uc(t,s,n,c),zt=!1,m=t.memoizedState,s.state=m,Go(t,n,s,o);var w=t.memoizedState;l!==p||m!==w||Be.current||zt?(typeof y=="function"&&(Hi(t,r,y,n),w=t.memoizedState),(u=zt||cc(t,r,u,n,m,w,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,w,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,w,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=c,n=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return qi(e,t,r,n,a,o)}function qi(e,t,r,n,o,a){Yd(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&tc(t,r,!1),Ct(e,t,a);n=t.stateNode,oh.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=$r(t,e.child,null,a),t.child=$r(t,null,l,a)):Ae(e,t,l,a),t.memoizedState=n.state,o&&tc(t,r,!0),t.child}function qd(e){var t=e.stateNode;t.pendingContext?ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ec(e,t.context,!1),Ws(e,t.containerInfo)}function vc(e,t,r,n,o){return Br(),Is(o),t.flags|=256,Ae(e,t,r,n),t.child}var Qi={dehydrated:null,treeContext:null,retryLane:0};function Ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qd(e,t,r){var n=t.pendingProps,o=oe.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(oe,o&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,a?(n=t.mode,a=t.child,s={mode:"hidden",children:s},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=ya(s,n,0,null),e=ar(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ki(r),t.memoizedState=Qi,e):Xs(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return ah(e,t,s,n,l,o,r);if(a){a=n.fallback,s=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Wt(o,c),n.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=Wt(l,a):(a=ar(a,s,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,s=e.child.memoizedState,s=s===null?Ki(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=Qi,n}return a=e.child,e=a.sibling,n=Wt(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Xs(e,t){return t=ya({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,r,n){return n!==null&&Is(n),$r(t,e.child,null,r),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ah(e,t,r,n,o,a,s){if(r)return t.flags&256?(t.flags&=-257,n=ni(Error(R(422))),mo(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,o=t.mode,n=ya({mode:"visible",children:n.children},o,0,null),a=ar(a,o,s,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&$r(t,e.child,null,s),t.child.memoizedState=Ki(s),t.memoizedState=Qi,a);if(!(t.mode&1))return mo(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var l=n.dgst;return n=l,a=Error(R(419)),n=ni(a,n,void 0),mo(e,t,s,n)}if(l=(s&e.childLanes)!==0,Me||l){if(n=we,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Et(e,o),dt(n,e,o,-1))}return ol(),n=ni(Error(R(421))),mo(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=xh.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Ye=Mt(o.nextSibling),qe=t,ne=!0,ct=null,e!==null&&(Xe[Ze++]=bt,Xe[Ze++]=kt,Xe[Ze++]=cr,bt=e.id,kt=e.overflow,cr=t),t=Xs(t,n.children),t.flags|=4096,t)}function xc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),$i(e.return,t,r)}function oi(e,t,r,n,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=o)}function Kd(e,t,r){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(Ae(e,t,n.children,r),n=oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,r,t);else if(e.tag===19)xc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Z(oe,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Xo(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),oi(t,!1,o,r,a);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Xo(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}oi(t,!0,r,null,a);break;case"together":oi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,r=Wt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Wt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ih(e,t,r){switch(t.tag){case 3:qd(t),Br();break;case 5:bd(t);break;case 1:$e(t.type)&&Yo(t);break;case 4:Ws(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Z(Ko,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Z(oe,oe.current&1),t.flags|=128,null):r&t.child.childLanes?Qd(e,t,r):(Z(oe,oe.current&1),e=Ct(e,t,r),e!==null?e.sibling:null);Z(oe,oe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Kd(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(oe,oe.current),n)break;return null;case 22:case 23:return t.lanes=0,Vd(e,t,r)}return Ct(e,t,r)}var Jd,Ji,Gd,Xd;Jd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ji=function(){};Gd=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,rr(xt.current);var a=null;switch(r){case"input":o=xi(e,o),n=xi(e,n),a=[];break;case"select":o=ie({},o,{value:void 0}),n=ie({},n,{value:void 0}),a=[];break;case"textarea":o=bi(e,o),n=bi(e,n),a=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Wo)}ji(r,n);var s;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jn.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var c=n[u];if(l=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(a||(a=[]),a.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&te("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Xd=function(e,t,r,n){r!==n&&(t.flags|=4)};function sn(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function sh(e,t,r){var n=t.pendingProps;switch(Us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return $e(t.type)&&Vo(),Ce(t),null;case 3:return n=t.stateNode,Hr(),re(Be),re(_e),Ys(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(os(ct),ct=null))),Ji(e,t),Ce(t),null;case 5:Vs(t);var o=rr(Tn.current);if(r=t.type,e!==null&&t.stateNode!=null)Gd(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(R(166));return Ce(t),null}if(e=rr(xt.current),fo(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[gt]=t,n[On]=a,e=(t.mode&1)!==0,r){case"dialog":te("cancel",n),te("close",n);break;case"iframe":case"object":case"embed":te("load",n);break;case"video":case"audio":for(o=0;o<pn.length;o++)te(pn[o],n);break;case"source":te("error",n);break;case"img":case"image":case"link":te("error",n),te("load",n);break;case"details":te("toggle",n);break;case"input":Cl(n,a),te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},te("invalid",n);break;case"textarea":Pl(n,a),te("invalid",n)}ji(r,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?n.textContent!==l&&(a.suppressHydrationWarning!==!0&&uo(n.textContent,l,e),o=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&uo(n.textContent,l,e),o=["children",""+l]):jn.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&te("scroll",n)}switch(r){case"input":ro(n),Rl(n,a,!0);break;case"textarea":ro(n),_l(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Wo)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[gt]=t,e[On]=n,Jd(e,t,!1,!1),t.stateNode=e;e:{switch(s=Si(r,n),r){case"dialog":te("cancel",e),te("close",e),o=n;break;case"iframe":case"object":case"embed":te("load",e),o=n;break;case"video":case"audio":for(o=0;o<pn.length;o++)te(pn[o],e);o=n;break;case"source":te("error",e),o=n;break;case"img":case"image":case"link":te("error",e),te("load",e),o=n;break;case"details":te("toggle",e),o=n;break;case"input":Cl(e,n),o=xi(e,n),te("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=ie({},n,{value:void 0}),te("invalid",e);break;case"textarea":Pl(e,n),o=bi(e,n),te("invalid",e);break;default:o=n}ji(r,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Pu(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cu(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Sn(e,c):typeof c=="number"&&Sn(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(jn.hasOwnProperty(a)?c!=null&&a==="onScroll"&&te("scroll",e):c!=null&&ks(e,a,c,s))}switch(r){case"input":ro(e),Rl(e,n,!1);break;case"textarea":ro(e),_l(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Yt(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Or(e,!!n.multiple,a,!1):n.defaultValue!=null&&Or(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Wo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Xd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(R(166));if(r=rr(Tn.current),rr(xt.current),fo(t)){if(n=t.stateNode,r=t.memoizedProps,n[gt]=t,(a=n.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:uo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[gt]=t,t.stateNode=n}return Ce(t),null;case 13:if(re(oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ye!==null&&t.mode&1&&!(t.flags&128))gd(),Br(),t.flags|=98560,a=!1;else if(a=fo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(R(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(R(317));a[gt]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),a=!1}else ct!==null&&(os(ct),ct=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?xe===0&&(xe=3):ol())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Hr(),Ji(e,t),e===null&&zn(t.stateNode.containerInfo),Ce(t),null;case 10:return Bs(t.type._context),Ce(t),null;case 17:return $e(t.type)&&Vo(),Ce(t),null;case 19:if(re(oe),a=t.memoizedState,a===null)return Ce(t),null;if(n=(t.flags&128)!==0,s=a.rendering,s===null)if(n)sn(a,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Xo(e),s!==null){for(t.flags|=128,sn(a,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Z(oe,oe.current&1|2),t.child}e=e.sibling}a.tail!==null&&de()>Vr&&(t.flags|=128,n=!0,sn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Xo(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),sn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ne)return Ce(t),null}else 2*de()-a.renderingStartTime>Vr&&r!==1073741824&&(t.flags|=128,n=!0,sn(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=de(),t.sibling=null,r=oe.current,Z(oe,n?r&1|2:r&1),t):(Ce(t),null);case 22:case 23:return nl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ve&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function lh(e,t){switch(Us(t),t.tag){case 1:return $e(t.type)&&Vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),re(Be),re(_e),Ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vs(t),null;case 13:if(re(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(oe),null;case 4:return Hr(),null;case 10:return Bs(t.type._context),null;case 22:case 23:return nl(),null;case 24:return null;default:return null}}var ho=!1,Re=!1,ch=typeof WeakSet=="function"?WeakSet:Set,z=null;function zr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ce(e,t,n)}else r.current=null}function Gi(e,t,r){try{r()}catch(n){ce(e,t,n)}}var yc=!1;function uh(e,t){if(Li=Bo,e=nd(),Ts(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,u=0,f=0,p=e,m=null;t:for(;;){for(var y;p!==r||o!==0&&p.nodeType!==3||(l=s+o),p!==a||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===r&&++u===o&&(l=s),m===a&&++f===n&&(c=s),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ti={focusedElem:e,selectionRange:r},Bo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,x=w.memoizedState,d=t.stateNode,h=d.getSnapshotBeforeUpdate(t.elementType===t.type?g:st(t.type,g),x);d.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(j){ce(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return w=yc,yc=!1,w}function wn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Gi(t,r,a)}o=o.next}while(o!==n)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Xi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[On],delete t[Ii],delete t[Ym],delete t[qm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ef(e){return e.tag===5||e.tag===3||e.tag===4}function wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zi(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Wo));else if(n!==4&&(e=e.child,e!==null))for(Zi(e,t,r),e=e.sibling;e!==null;)Zi(e,t,r),e=e.sibling}function es(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(es(e,t,r),e=e.sibling;e!==null;)es(e,t,r),e=e.sibling}var be=null,lt=!1;function Pt(e,t,r){for(r=r.child;r!==null;)tf(e,t,r),r=r.sibling}function tf(e,t,r){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ca,r)}catch{}switch(r.tag){case 5:Re||zr(r,t);case 6:var n=be,o=lt;be=null,Pt(e,t,r),be=n,lt=o,be!==null&&(lt?(e=be,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):be.removeChild(r.stateNode));break;case 18:be!==null&&(lt?(e=be,r=r.stateNode,e.nodeType===8?Ga(e.parentNode,r):e.nodeType===1&&Ga(e,r),Rn(e)):Ga(be,r.stateNode));break;case 4:n=be,o=lt,be=r.stateNode.containerInfo,lt=!0,Pt(e,t,r),be=n,lt=o;break;case 0:case 11:case 14:case 15:if(!Re&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Gi(r,t,s),o=o.next}while(o!==n)}Pt(e,t,r);break;case 1:if(!Re&&(zr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){ce(r,t,l)}Pt(e,t,r);break;case 21:Pt(e,t,r);break;case 22:r.mode&1?(Re=(n=Re)||r.memoizedState!==null,Pt(e,t,r),Re=n):Pt(e,t,r);break;default:Pt(e,t,r)}}function bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new ch),t.forEach(function(n){var o=yh.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function it(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,lt=!1;break e;case 3:be=l.stateNode.containerInfo,lt=!0;break e;case 4:be=l.stateNode.containerInfo,lt=!0;break e}l=l.return}if(be===null)throw Error(R(160));tf(a,s,o),be=null,lt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ce(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rf(t,e),t=t.sibling}function rf(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),mt(e),n&4){try{wn(3,e,e.return),va(3,e)}catch(g){ce(e,e.return,g)}try{wn(5,e,e.return)}catch(g){ce(e,e.return,g)}}break;case 1:it(t,e),mt(e),n&512&&r!==null&&zr(r,r.return);break;case 5:if(it(t,e),mt(e),n&512&&r!==null&&zr(r,r.return),e.flags&32){var o=e.stateNode;try{Sn(o,"")}catch(g){ce(e,e.return,g)}}if(n&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Su(o,a),Si(l,s);var u=Si(l,a);for(s=0;s<c.length;s+=2){var f=c[s],p=c[s+1];f==="style"?Pu(o,p):f==="dangerouslySetInnerHTML"?Cu(o,p):f==="children"?Sn(o,p):ks(o,f,p,u)}switch(l){case"input":yi(o,a);break;case"textarea":Nu(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?Or(o,!!a.multiple,y,!1):m!==!!a.multiple&&(a.defaultValue!=null?Or(o,!!a.multiple,a.defaultValue,!0):Or(o,!!a.multiple,a.multiple?[]:"",!1))}o[On]=a}catch(g){ce(e,e.return,g)}}break;case 6:if(it(t,e),mt(e),n&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){ce(e,e.return,g)}}break;case 3:if(it(t,e),mt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Rn(t.containerInfo)}catch(g){ce(e,e.return,g)}break;case 4:it(t,e),mt(e);break;case 13:it(t,e),mt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(tl=de())),n&4&&bc(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(Re=(u=Re)||f,it(t,e),Re=u):it(t,e),mt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(z=e,f=e.child;f!==null;){for(p=z=f;z!==null;){switch(m=z,y=m.child,m.tag){case 0:case 11:case 14:case 15:wn(4,m,m.return);break;case 1:zr(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){ce(n,r,g)}}break;case 5:zr(m,m.return);break;case 22:if(m.memoizedState!==null){jc(p);continue}}y!==null?(y.return=m,z=y):jc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{o=p.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ru("display",s))}catch(g){ce(e,e.return,g)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){ce(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:it(t,e),mt(e),n&4&&bc(e);break;case 21:break;default:it(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ef(r)){var n=r;break e}r=r.return}throw Error(R(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Sn(o,""),n.flags&=-33);var a=wc(e);es(e,a,o);break;case 3:case 4:var s=n.stateNode.containerInfo,l=wc(e);Zi(e,l,s);break;default:throw Error(R(161))}}catch(c){ce(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dh(e,t,r){z=e,nf(e)}function nf(e,t,r){for(var n=(e.mode&1)!==0;z!==null;){var o=z,a=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||ho;if(!s){var l=o.alternate,c=l!==null&&l.memoizedState!==null||Re;l=ho;var u=Re;if(ho=s,(Re=c)&&!u)for(z=o;z!==null;)s=z,c=s.child,s.tag===22&&s.memoizedState!==null?Sc(o):c!==null?(c.return=s,z=c):Sc(o);for(;a!==null;)z=a,nf(a),a=a.sibling;z=o,ho=l,Re=u}kc(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,z=a):kc(e)}}function kc(e){for(;z!==null;){var t=z;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||va(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Re)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:st(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ic(t,a,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ic(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Rn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Re||t.flags&512&&Xi(t)}catch(m){ce(t,t.return,m)}}if(t===e){z=null;break}if(r=t.sibling,r!==null){r.return=t.return,z=r;break}z=t.return}}function jc(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,z=r;break}z=t.return}}function Sc(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{va(4,t)}catch(c){ce(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(c){ce(t,o,c)}}var a=t.return;try{Xi(t)}catch(c){ce(t,a,c)}break;case 5:var s=t.return;try{Xi(t)}catch(c){ce(t,s,c)}}}catch(c){ce(t,t.return,c)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var fh=Math.ceil,ta=Rt.ReactCurrentDispatcher,Zs=Rt.ReactCurrentOwner,tt=Rt.ReactCurrentBatchConfig,W=0,we=null,me=null,ke=0,Ve=0,Ar=Kt(0),xe=0,Fn=null,dr=0,xa=0,el=0,bn=null,Fe=null,tl=0,Vr=1/0,yt=null,ra=!1,ts=null,$t=null,go=!1,Tt=null,na=0,kn=0,rs=null,Po=-1,_o=0;function Oe(){return W&6?de():Po!==-1?Po:Po=de()}function Ht(e){return e.mode&1?W&2&&ke!==0?ke&-ke:Km.transition!==null?(_o===0&&(_o=Bu()),_o):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Qu(e.type)),e):1}function dt(e,t,r,n){if(50<kn)throw kn=0,rs=null,Error(R(185));Hn(e,r,n),(!(W&2)||e!==we)&&(e===we&&(!(W&2)&&(xa|=r),xe===4&&Ot(e,ke)),He(e,n),r===1&&W===0&&!(t.mode&1)&&(Vr=de()+500,ma&&Jt()))}function He(e,t){var r=e.callbackNode;Kp(e,t);var n=Mo(e,e===we?ke:0);if(n===0)r!==null&&Ol(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ol(r),t===1)e.tag===0?Qm(Nc.bind(null,e)):pd(Nc.bind(null,e)),Wm(function(){!(W&6)&&Jt()}),r=null;else{switch($u(n)){case 1:r=Cs;break;case 4:r=Fu;break;case 16:r=Fo;break;case 536870912:r=Mu;break;default:r=Fo}r=ff(r,of.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function of(e,t){if(Po=-1,_o=0,W&6)throw Error(R(327));var r=e.callbackNode;if(Ir()&&e.callbackNode!==r)return null;var n=Mo(e,e===we?ke:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=oa(e,n);else{t=n;var o=W;W|=2;var a=sf();(we!==e||ke!==t)&&(yt=null,Vr=de()+500,or(e,t));do try{hh();break}catch(l){af(e,l)}while(!0);Ms(),ta.current=a,W=o,me!==null?t=0:(we=null,ke=0,t=xe)}if(t!==0){if(t===2&&(o=Pi(e),o!==0&&(n=o,t=ns(e,o))),t===1)throw r=Fn,or(e,0),Ot(e,n),He(e,de()),r;if(t===6)Ot(e,n);else{if(o=e.current.alternate,!(n&30)&&!ph(o)&&(t=oa(e,n),t===2&&(a=Pi(e),a!==0&&(n=a,t=ns(e,a))),t===1))throw r=Fn,or(e,0),Ot(e,n),He(e,de()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(R(345));case 2:Zt(e,Fe,yt);break;case 3:if(Ot(e,n),(n&130023424)===n&&(t=tl+500-de(),10<t)){if(Mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Oe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ui(Zt.bind(null,e,Fe,yt),t);break}Zt(e,Fe,yt);break;case 4:if(Ot(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-ut(n);a=1<<s,s=t[s],s>o&&(o=s),n&=~a}if(n=o,n=de()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*fh(n/1960))-n,10<n){e.timeoutHandle=Ui(Zt.bind(null,e,Fe,yt),n);break}Zt(e,Fe,yt);break;case 5:Zt(e,Fe,yt);break;default:throw Error(R(329))}}}return He(e,de()),e.callbackNode===r?of.bind(null,e):null}function ns(e,t){var r=bn;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=oa(e,t),e!==2&&(t=Fe,Fe=r,t!==null&&os(t)),e}function os(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function ph(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],a=o.getSnapshot;o=o.value;try{if(!ft(a(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~el,t&=~xa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ut(t),n=1<<r;e[r]=-1,t&=~n}}function Nc(e){if(W&6)throw Error(R(327));Ir();var t=Mo(e,0);if(!(t&1))return He(e,de()),null;var r=oa(e,t);if(e.tag!==0&&r===2){var n=Pi(e);n!==0&&(t=n,r=ns(e,n))}if(r===1)throw r=Fn,or(e,0),Ot(e,t),He(e,de()),r;if(r===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Fe,yt),He(e,de()),null}function rl(e,t){var r=W;W|=1;try{return e(t)}finally{W=r,W===0&&(Vr=de()+500,ma&&Jt())}}function fr(e){Tt!==null&&Tt.tag===0&&!(W&6)&&Ir();var t=W;W|=1;var r=tt.transition,n=Y;try{if(tt.transition=null,Y=1,e)return e()}finally{Y=n,tt.transition=r,W=t,!(W&6)&&Jt()}}function nl(){Ve=Ar.current,re(Ar)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Hm(r)),me!==null)for(r=me.return;r!==null;){var n=r;switch(Us(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Vo();break;case 3:Hr(),re(Be),re(_e),Ys();break;case 5:Vs(n);break;case 4:Hr();break;case 13:re(oe);break;case 19:re(oe);break;case 10:Bs(n.type._context);break;case 22:case 23:nl()}r=r.return}if(we=e,me=e=Wt(e.current,null),ke=Ve=t,xe=0,Fn=null,el=xa=dr=0,Fe=bn=null,tr!==null){for(t=0;t<tr.length;t++)if(r=tr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,a=r.pending;if(a!==null){var s=a.next;a.next=o,n.next=s}r.pending=n}tr=null}return e}function af(e,t){do{var r=me;try{if(Ms(),Eo.current=ea,Zo){for(var n=ae.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Zo=!1}if(ur=0,ye=ve=ae=null,yn=!1,Dn=0,Zs.current=null,r===null||r.return===null){xe=1,Fn=t,me=null;break}e:{var a=e,s=r.return,l=r,c=t;if(t=ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=fc(s);if(y!==null){y.flags&=-257,pc(y,s,l,a,t),y.mode&1&&dc(a,u,t),t=y,c=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(c),t.updateQueue=g}else w.add(c);break e}else{if(!(t&1)){dc(a,u,t),ol();break e}c=Error(R(426))}}else if(ne&&l.mode&1){var x=fc(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),pc(x,s,l,a,t),Is(Wr(c,l));break e}}a=c=Wr(c,l),xe!==4&&(xe=2),bn===null?bn=[a]:bn.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=$d(a,c,t);ac(a,d);break e;case 1:l=c;var h=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&($t===null||!$t.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var j=Hd(a,l,t);ac(a,j);break e}}a=a.return}while(a!==null)}cf(r)}catch(N){t=N,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function sf(){var e=ta.current;return ta.current=ea,e===null?ea:e}function ol(){(xe===0||xe===3||xe===2)&&(xe=4),we===null||!(dr&268435455)&&!(xa&268435455)||Ot(we,ke)}function oa(e,t){var r=W;W|=2;var n=sf();(we!==e||ke!==t)&&(yt=null,or(e,t));do try{mh();break}catch(o){af(e,o)}while(!0);if(Ms(),W=r,ta.current=n,me!==null)throw Error(R(261));return we=null,ke=0,xe}function mh(){for(;me!==null;)lf(me)}function hh(){for(;me!==null&&!Mp();)lf(me)}function lf(e){var t=df(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?cf(e):me=t,Zs.current=null}function cf(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=lh(r,t),r!==null){r.flags&=32767,me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,me=null;return}}else if(r=sh(r,t,Ve),r!==null){me=r;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);xe===0&&(xe=5)}function Zt(e,t,r){var n=Y,o=tt.transition;try{tt.transition=null,Y=1,gh(e,t,r,n)}finally{tt.transition=o,Y=n}return null}function gh(e,t,r,n){do Ir();while(Tt!==null);if(W&6)throw Error(R(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Jp(e,a),e===we&&(me=we=null,ke=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||go||(go=!0,ff(Fo,function(){return Ir(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=tt.transition,tt.transition=null;var s=Y;Y=1;var l=W;W|=4,Zs.current=null,uh(e,r),rf(r,e),Dm(Ti),Bo=!!Li,Ti=Li=null,e.current=r,dh(r),Bp(),W=l,Y=s,tt.transition=a}else e.current=r;if(go&&(go=!1,Tt=e,na=o),a=e.pendingLanes,a===0&&($t=null),Wp(r.stateNode),He(e,de()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(ra)throw ra=!1,e=ts,ts=null,e;return na&1&&e.tag!==0&&Ir(),a=e.pendingLanes,a&1?e===rs?kn++:(kn=0,rs=e):kn=0,Jt(),null}function Ir(){if(Tt!==null){var e=$u(na),t=tt.transition,r=Y;try{if(tt.transition=null,Y=16>e?16:e,Tt===null)var n=!1;else{if(e=Tt,Tt=null,na=0,W&6)throw Error(R(331));var o=W;for(W|=4,z=e.current;z!==null;){var a=z,s=a.child;if(z.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(z=u;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:wn(8,f,a)}var p=f.child;if(p!==null)p.return=f,z=p;else for(;z!==null;){f=z;var m=f.sibling,y=f.return;if(Zd(f),f===u){z=null;break}if(m!==null){m.return=y,z=m;break}z=y}}}var w=a.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(g!==null)}}z=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,z=s;else e:for(;z!==null;){if(a=z,a.flags&2048)switch(a.tag){case 0:case 11:case 15:wn(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,z=d;break e}z=a.return}}var h=e.current;for(z=h;z!==null;){s=z;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,z=v;else e:for(s=h;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:va(9,l)}}catch(N){ce(l,l.return,N)}if(l===s){z=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,z=j;break e}z=l.return}}if(W=o,Jt(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ca,e)}catch{}n=!0}return n}finally{Y=r,tt.transition=t}}return!1}function Ec(e,t,r){t=Wr(r,t),t=$d(e,t,1),e=Bt(e,t,1),t=Oe(),e!==null&&(Hn(e,1,t),He(e,t))}function ce(e,t,r){if(e.tag===3)Ec(e,e,r);else for(;t!==null;){if(t.tag===3){Ec(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($t===null||!$t.has(n))){e=Wr(r,e),e=Hd(t,e,1),t=Bt(t,e,1),e=Oe(),t!==null&&(Hn(t,1,e),He(t,e));break}}t=t.return}}function vh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&r,we===e&&(ke&r)===r&&(xe===4||xe===3&&(ke&130023424)===ke&&500>de()-tl?or(e,0):el|=r),He(e,t)}function uf(e,t){t===0&&(e.mode&1?(t=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):t=1);var r=Oe();e=Et(e,t),e!==null&&(Hn(e,t,r),He(e,r))}function xh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),uf(e,r)}function yh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(R(314))}n!==null&&n.delete(t),uf(e,r)}var df;df=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Me=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Me=!1,ih(e,t,r);Me=!!(e.flags&131072)}else Me=!1,ne&&t.flags&1048576&&md(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ro(e,t),e=t.pendingProps;var o=Mr(t,_e.current);Ur(t,r),o=Qs(null,t,n,e,o,r);var a=Ks();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(n)?(a=!0,Yo(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Hs(t),o.updater=ga,t.stateNode=o,o._reactInternals=t,Wi(t,n,e,r),t=qi(null,t,n,!0,a,r)):(t.tag=0,ne&&a&&Ds(t),Ae(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=bh(n),e=st(n,e),o){case 0:t=Yi(null,t,n,e,r);break e;case 1:t=gc(null,t,n,e,r);break e;case 11:t=mc(null,t,n,e,r);break e;case 14:t=hc(null,t,n,st(n.type,e),r);break e}throw Error(R(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:st(n,o),Yi(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:st(n,o),gc(e,t,n,o,r);case 3:e:{if(qd(t),e===null)throw Error(R(387));n=t.pendingProps,a=t.memoizedState,o=a.element,wd(e,t),Go(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Wr(Error(R(423)),t),t=vc(e,t,n,r,o);break e}else if(n!==o){o=Wr(Error(R(424)),t),t=vc(e,t,n,r,o);break e}else for(Ye=Mt(t.stateNode.containerInfo.firstChild),qe=t,ne=!0,ct=null,r=xd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Br(),n===o){t=Ct(e,t,r);break e}Ae(e,t,n,r)}t=t.child}return t;case 5:return bd(t),e===null&&Bi(t),n=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,Di(n,o)?s=null:a!==null&&Di(n,a)&&(t.flags|=32),Yd(e,t),Ae(e,t,s,r),t.child;case 6:return e===null&&Bi(t),null;case 13:return Qd(e,t,r);case 4:return Ws(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=$r(t,null,n,r):Ae(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:st(n,o),mc(e,t,n,o,r);case 7:return Ae(e,t,t.pendingProps,r),t.child;case 8:return Ae(e,t,t.pendingProps.children,r),t.child;case 12:return Ae(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,Z(Ko,n._currentValue),n._currentValue=s,a!==null)if(ft(a.value,s)){if(a.children===o.children&&!Be.current){t=Ct(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(a.tag===1){c=jt(-1,r&-r),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),$i(a.return,r,t),l.lanes|=r;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(R(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),$i(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Ae(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Ur(t,r),o=rt(o),n=n(o),t.flags|=1,Ae(e,t,n,r),t.child;case 14:return n=t.type,o=st(n,t.pendingProps),o=st(n.type,o),hc(e,t,n,o,r);case 15:return Wd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:st(n,o),Ro(e,t),t.tag=1,$e(n)?(e=!0,Yo(t)):e=!1,Ur(t,r),Bd(t,n,o),Wi(t,n,o,r),qi(null,t,n,!0,e,r);case 19:return Kd(e,t,r);case 22:return Vd(e,t,r)}throw Error(R(156,t.tag))};function ff(e,t){return Iu(e,t)}function wh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,r,n){return new wh(e,t,r,n)}function al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bh(e){if(typeof e=="function")return al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ss)return 11;if(e===Ns)return 14}return 2}function Wt(e,t){var r=e.alternate;return r===null?(r=et(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function zo(e,t,r,n,o,a){var s=2;if(n=e,typeof e=="function")al(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case kr:return ar(r.children,o,a,t);case js:s=8,o|=8;break;case mi:return e=et(12,r,t,o|2),e.elementType=mi,e.lanes=a,e;case hi:return e=et(13,r,t,o),e.elementType=hi,e.lanes=a,e;case gi:return e=et(19,r,t,o),e.elementType=gi,e.lanes=a,e;case bu:return ya(r,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yu:s=10;break e;case wu:s=9;break e;case Ss:s=11;break e;case Ns:s=14;break e;case _t:s=16,n=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=et(s,r,t,o),t.elementType=e,t.type=n,t.lanes=a,t}function ar(e,t,r,n){return e=et(7,e,n,t),e.lanes=r,e}function ya(e,t,r,n){return e=et(22,e,n,t),e.elementType=bu,e.lanes=r,e.stateNode={isHidden:!1},e}function ai(e,t,r){return e=et(6,e,null,t),e.lanes=r,e}function ii(e,t,r){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kh(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ma(0),this.expirationTimes=Ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ma(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function il(e,t,r,n,o,a,s,l,c){return e=new kh(e,t,r,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=et(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hs(a),e}function jh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function pf(e){if(!e)return qt;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var r=e.type;if($e(r))return fd(e,r,t)}return t}function mf(e,t,r,n,o,a,s,l,c){return e=il(r,n,!0,e,o,a,s,l,c),e.context=pf(null),r=e.current,n=Oe(),o=Ht(r),a=jt(n,o),a.callback=t??null,Bt(r,a,o),e.current.lanes=o,Hn(e,o,n),He(e,n),e}function wa(e,t,r,n){var o=t.current,a=Oe(),s=Ht(o);return r=pf(r),t.context===null?t.context=r:t.pendingContext=r,t=jt(a,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Bt(o,t,s),e!==null&&(dt(e,o,s,a),No(e,o,s)),s}function aa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function sl(e,t){Cc(e,t),(e=e.alternate)&&Cc(e,t)}function Sh(){return null}var hf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ll(e){this._internalRoot=e}ba.prototype.render=ll.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));wa(e,t,null,null)};ba.prototype.unmount=ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fr(function(){wa(null,e,null,null)}),t[Nt]=null}};function ba(e){this._internalRoot=e}ba.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<At.length&&t!==0&&t<At[r].priority;r++);At.splice(r,0,e),r===0&&qu(e)}};function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rc(){}function Nh(e,t,r,n,o){if(o){if(typeof n=="function"){var a=n;n=function(){var u=aa(s);a.call(u)}}var s=mf(t,n,e,0,null,!1,!1,"",Rc);return e._reactRootContainer=s,e[Nt]=s.current,zn(e.nodeType===8?e.parentNode:e),fr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var l=n;n=function(){var u=aa(c);l.call(u)}}var c=il(e,0,!1,null,null,!1,!1,"",Rc);return e._reactRootContainer=c,e[Nt]=c.current,zn(e.nodeType===8?e.parentNode:e),fr(function(){wa(t,c,r,n)}),c}function ja(e,t,r,n,o){var a=r._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var l=o;o=function(){var c=aa(s);l.call(c)}}wa(t,s,e,o)}else s=Nh(r,t,e,o,n);return aa(s)}Hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=fn(t.pendingLanes);r!==0&&(Rs(t,r|1),He(t,de()),!(W&6)&&(Vr=de()+500,Jt()))}break;case 13:fr(function(){var n=Et(e,1);if(n!==null){var o=Oe();dt(n,e,1,o)}}),sl(e,1)}};Ps=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var r=Oe();dt(t,e,134217728,r)}sl(e,134217728)}};Wu=function(e){if(e.tag===13){var t=Ht(e),r=Et(e,t);if(r!==null){var n=Oe();dt(r,e,t,n)}sl(e,t)}};Vu=function(){return Y};Yu=function(e,t){var r=Y;try{return Y=e,t()}finally{Y=r}};Ei=function(e,t,r){switch(t){case"input":if(yi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=pa(n);if(!o)throw Error(R(90));ju(n),yi(n,o)}}}break;case"textarea":Nu(e,r);break;case"select":t=r.value,t!=null&&Or(e,!!r.multiple,t,!1)}};Au=rl;Ou=fr;var Eh={usingClientEntryPoint:!1,Events:[Vn,Er,pa,_u,zu,rl]},ln={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ch={bundleType:ln.bundleType,version:ln.version,rendererPackageName:ln.rendererPackageName,rendererConfig:ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Du(e),e===null?null:e.stateNode},findFiberByHostInstance:ln.findFiberByHostInstance||Sh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{ca=vo.inject(Ch),vt=vo}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eh;Ke.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cl(t))throw Error(R(200));return jh(e,t,null,r)};Ke.createRoot=function(e,t){if(!cl(e))throw Error(R(299));var r=!1,n="",o=hf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=il(e,1,!1,null,null,r,!1,n,o),e[Nt]=t.current,zn(e.nodeType===8?e.parentNode:e),new ll(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Du(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return fr(e)};Ke.hydrate=function(e,t,r){if(!ka(t))throw Error(R(200));return ja(null,e,t,!0,r)};Ke.hydrateRoot=function(e,t,r){if(!cl(e))throw Error(R(405));var n=r!=null&&r.hydratedSources||null,o=!1,a="",s=hf;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=mf(t,null,e,1,r??null,o,!1,a,s),e[Nt]=t.current,zn(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new ba(t)};Ke.render=function(e,t,r){if(!ka(t))throw Error(R(200));return ja(null,e,t,!1,r)};Ke.unmountComponentAtNode=function(e){if(!ka(e))throw Error(R(40));return e._reactRootContainer?(fr(function(){ja(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Ke.unstable_batchedUpdates=rl;Ke.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ka(r))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return ja(e,t,r,!1,n)};Ke.version="18.3.1-next-f1338f8080-20240426";function gf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gf)}catch(e){console.error(e)}}gf(),hu.exports=Ke;var Rh=hu.exports,Pc=Rh;fi.createRoot=Pc.createRoot,fi.hydrateRoot=Pc.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Mn.apply(null,arguments)}var Dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dt||(Dt={}));const _c="popstate";function Ph(e){e===void 0&&(e={});function t(n,o){let{pathname:a,search:s,hash:l}=n.location;return as("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:ia(o)}return zh(t,r,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ul(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _h(){return Math.random().toString(36).substr(2,8)}function zc(e,t){return{usr:e.state,key:e.key,idx:t}}function as(e,t,r,n){return r===void 0&&(r=null),Mn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jr(t):t,{state:r,key:t&&t.key||n||_h()})}function ia(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Jr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function zh(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:a=!1}=n,s=o.history,l=Dt.Pop,c=null,u=f();u==null&&(u=0,s.replaceState(Mn({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function p(){l=Dt.Pop;let x=f(),d=x==null?null:x-u;u=x,c&&c({action:l,location:g.location,delta:d})}function m(x,d){l=Dt.Push;let h=as(g.location,x,d);u=f()+1;let v=zc(h,u),j=g.createHref(h);try{s.pushState(v,"",j)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(j)}a&&c&&c({action:l,location:g.location,delta:1})}function y(x,d){l=Dt.Replace;let h=as(g.location,x,d);u=f();let v=zc(h,u),j=g.createHref(h);s.replaceState(v,"",j),a&&c&&c({action:l,location:g.location,delta:0})}function w(x){let d=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof x=="string"?x:ia(x);return h=h.replace(/ $/,"%20"),he(d,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,d)}let g={get action(){return l},get location(){return e(o,s)},listen(x){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(_c,p),c=x,()=>{o.removeEventListener(_c,p),c=null}},createHref(x){return t(o,x)},createURL:w,encodeLocation(x){let d=w(x);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:y,go(x){return s.go(x)}};return g}var Ac;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ac||(Ac={}));function Ah(e,t,r){return r===void 0&&(r="/"),Oh(e,t,r)}function Oh(e,t,r,n){let o=typeof t=="string"?Jr(t):t,a=dl(o.pathname||"/",r);if(a==null)return null;let s=vf(e);Lh(s);let l=null,c=Yh(a);for(let u=0;l==null&&u<s.length;++u)l=Hh(s[u],c);return l}function vf(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(a,s,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=Vt([n,c.relativePath]),f=r.concat(c);a.children&&a.children.length>0&&(he(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vf(a.children,t,f,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Bh(u,a.index),routesMeta:f})};return e.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))o(a,s);else for(let c of xf(a.path))o(a,s,c)}),t}function xf(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return o?[a,""]:[a];let s=xf(n.join("/")),l=[];return l.push(...s.map(c=>c===""?a:[a,c].join("/"))),o&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Lh(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:$h(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Th=/^:[\w-]+$/,Dh=3,Uh=2,Ih=1,Fh=10,Mh=-2,Oc=e=>e==="*";function Bh(e,t){let r=e.split("/"),n=r.length;return r.some(Oc)&&(n+=Mh),t&&(n+=Uh),r.filter(o=>!Oc(o)).reduce((o,a)=>o+(Th.test(a)?Dh:a===""?Ih:Fh),n)}function $h(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Hh(e,t,r){let{routesMeta:n}=e,o={},a="/",s=[];for(let l=0;l<n.length;++l){let c=n[l],u=l===n.length-1,f=a==="/"?t:t.slice(a.length)||"/",p=Wh({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),m=c.route;if(!p)return null;Object.assign(o,p.params),s.push({params:o,pathname:Vt([a,p.pathname]),pathnameBase:Gh(Vt([a,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(a=Vt([a,p.pathnameBase]))}return s}function Wh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Vh(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((u,f,p)=>{let{paramName:m,isOptional:y}=f;if(m==="*"){let g=l[p]||"";s=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}const w=l[p];return y&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:e}}function Vh(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ul(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Yh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ul(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const qh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qh=e=>qh.test(e);function Kh(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Jr(e):e,a;if(r)if(Qh(r))a=r;else{if(r.includes("//")){let s=r;r=bf(r),ul(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?a=Lc(r.substring(1),"/"):a=Lc(r,t)}else a=t;return{pathname:a,search:Xh(n),hash:Zh(o)}}function Lc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function si(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jh(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function yf(e,t){let r=Jh(e);return t?r.map((n,o)=>o===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function wf(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=Jr(e):(o=Mn({},e),he(!o.pathname||!o.pathname.includes("?"),si("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),si("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),si("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,l;if(s==null)l=r;else{let p=t.length-1;if(!n&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;o.pathname=m.join("/")}l=p>=0?t[p]:"/"}let c=Kh(o,l),u=s&&s!=="/"&&s.endsWith("/"),f=(a||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const bf=e=>e.replace(/\/\/+/g,"/"),Vt=e=>bf(e.join("/")),Gh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function eg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kf=["post","put","patch","delete"];new Set(kf);const tg=["get",...kf];new Set(tg);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bn(){return Bn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Bn.apply(null,arguments)}const fl=b.createContext(null),rg=b.createContext(null),gr=b.createContext(null),Sa=b.createContext(null),Gt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),jf=b.createContext(null);function ng(e,t){let{relative:r}=t===void 0?{}:t;qn()||he(!1);let{basename:n,navigator:o}=b.useContext(gr),{hash:a,pathname:s,search:l}=Nf(e,{relative:r}),c=s;return n!=="/"&&(c=s==="/"?n:Vt([n,s])),o.createHref({pathname:c,search:l,hash:a})}function qn(){return b.useContext(Sa)!=null}function Gr(){return qn()||he(!1),b.useContext(Sa).location}function Sf(e){b.useContext(gr).static||b.useLayoutEffect(e)}function ot(){let{isDataRoute:e}=b.useContext(Gt);return e?gg():og()}function og(){qn()||he(!1);let e=b.useContext(fl),{basename:t,future:r,navigator:n}=b.useContext(gr),{matches:o}=b.useContext(Gt),{pathname:a}=Gr(),s=JSON.stringify(yf(o,r.v7_relativeSplatPath)),l=b.useRef(!1);return Sf(()=>{l.current=!0}),b.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=wf(u,JSON.parse(s),a,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Vt([t,p.pathname])),(f.replace?n.replace:n.push)(p,f.state,f)},[t,n,s,a,e])}function Na(){let{matches:e}=b.useContext(Gt),t=e[e.length-1];return t?t.params:{}}function Nf(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=b.useContext(gr),{matches:o}=b.useContext(Gt),{pathname:a}=Gr(),s=JSON.stringify(yf(o,n.v7_relativeSplatPath));return b.useMemo(()=>wf(e,JSON.parse(s),a,r==="path"),[e,s,a,r])}function ag(e,t){return ig(e,t)}function ig(e,t,r,n){qn()||he(!1);let{navigator:o}=b.useContext(gr),{matches:a}=b.useContext(Gt),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Gr(),f;if(t){var p;let x=typeof t=="string"?Jr(t):t;c==="/"||(p=x.pathname)!=null&&p.startsWith(c)||he(!1),f=x}else f=u;let m=f.pathname||"/",y=m;if(c!=="/"){let x=c.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=Ah(e,{pathname:y}),g=dg(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Vt([c,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:Vt([c,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,r,n);return t&&g?b.createElement(Sa.Provider,{value:{location:Bn({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Dt.Pop}},g):g}function sg(){let e=hg(),t=eg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:o},r):null,null)}const lg=b.createElement(sg,null);class cg extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?b.createElement(Gt.Provider,{value:this.props.routeContext},b.createElement(jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ug(e){let{routeContext:t,match:r,children:n}=e,o=b.useContext(fl);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(Gt.Provider,{value:t},n)}function dg(e,t,r,n){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=n)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=(o=r)==null?void 0:o.errors;if(l!=null){let f=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||he(!1),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=f),p.route.id){let{loaderData:m,errors:y}=r,w=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,p,m)=>{let y,w=!1,g=null,x=null;r&&(y=l&&p.route.id?l[p.route.id]:void 0,g=p.route.errorElement||lg,c&&(u<0&&m===0?(vg("route-fallback"),w=!0,x=null):u===m&&(w=!0,x=p.route.hydrateFallbackElement||null)));let d=t.concat(s.slice(0,m+1)),h=()=>{let v;return y?v=g:w?v=x:p.route.Component?v=b.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=f,b.createElement(ug,{match:p,routeContext:{outlet:f,matches:d,isDataRoute:r!=null},children:v})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?b.createElement(cg,{location:r.location,revalidation:r.revalidation,component:g,error:y,children:h(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):h()},null)}var Ef=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ef||{}),Cf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cf||{});function fg(e){let t=b.useContext(fl);return t||he(!1),t}function pg(e){let t=b.useContext(rg);return t||he(!1),t}function mg(e){let t=b.useContext(Gt);return t||he(!1),t}function Rf(e){let t=mg(),r=t.matches[t.matches.length-1];return r.route.id||he(!1),r.route.id}function hg(){var e;let t=b.useContext(jf),r=pg(),n=Rf();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function gg(){let{router:e}=fg(Ef.UseNavigateStable),t=Rf(Cf.UseNavigateStable),r=b.useRef(!1);return Sf(()=>{r.current=!0}),b.useCallback(function(o,a){a===void 0&&(a={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Bn({fromRouteId:t},a)))},[e,t])}const Tc={};function vg(e,t,r){Tc[e]||(Tc[e]=!0)}function xg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ie(e){he(!1)}function yg(e){let{basename:t="/",children:r=null,location:n,navigationType:o=Dt.Pop,navigator:a,static:s=!1,future:l}=e;qn()&&he(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:a,static:s,future:Bn({v7_relativeSplatPath:!1},l)}),[c,l,a,s]);typeof n=="string"&&(n=Jr(n));let{pathname:f="/",search:p="",hash:m="",state:y=null,key:w="default"}=n,g=b.useMemo(()=>{let x=dl(f,c);return x==null?null:{location:{pathname:x,search:p,hash:m,state:y,key:w},navigationType:o}},[c,f,p,m,y,w,o]);return g==null?null:b.createElement(gr.Provider,{value:u},b.createElement(Sa.Provider,{children:r,value:g}))}function wg(e){let{children:t,location:r}=e;return ag(is(t),r)}new Promise(()=>{});function is(e,t){t===void 0&&(t=[]);let r=[];return b.Children.forEach(e,(n,o)=>{if(!b.isValidElement(n))return;let a=[...t,o];if(n.type===b.Fragment){r.push.apply(r,is(n.props.children,a));return}n.type!==Ie&&he(!1),!n.props.index||!n.props.children||he(!1);let s={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=is(n.props.children,a)),r.push(s)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ss.apply(null,arguments)}function bg(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function kg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jg(e,t){return e.button===0&&(!t||t==="_self")&&!kg(e)}function ls(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function Sg(e,t){let r=ls(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(a=>{r.append(o,a)})}),r}const Ng=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Eg="6";try{window.__reactRouterVersion=Eg}catch{}const Cg="startTransition",Dc=vp[Cg];function Rg(e){let{basename:t,children:r,future:n,window:o}=e,a=b.useRef();a.current==null&&(a.current=Ph({window:o,v5Compat:!0}));let s=a.current,[l,c]=b.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},f=b.useCallback(p=>{u&&Dc?Dc(()=>c(p)):c(p)},[c,u]);return b.useLayoutEffect(()=>s.listen(f),[s,f]),b.useEffect(()=>xg(n),[n]),b.createElement(yg,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:s,future:n})}const Pg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_g=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q=b.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:a,replace:s,state:l,target:c,to:u,preventScrollReset:f,viewTransition:p}=t,m=bg(t,Ng),{basename:y}=b.useContext(gr),w,g=!1;if(typeof u=="string"&&_g.test(u)&&(w=u,Pg))try{let v=new URL(window.location.href),j=u.startsWith("//")?new URL(v.protocol+u):new URL(u),N=dl(j.pathname,y);j.origin===v.origin&&N!=null?u=N+j.search+j.hash:g=!0}catch{}let x=ng(u,{relative:o}),d=zg(u,{replace:s,state:l,target:c,preventScrollReset:f,relative:o,viewTransition:p});function h(v){n&&n(v),v.defaultPrevented||d(v)}return b.createElement("a",ss({},m,{href:w||x,onClick:g||a?n:h,ref:r,target:c}))});var Uc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uc||(Uc={}));var Ic;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ic||(Ic={}));function zg(e,t){let{target:r,replace:n,state:o,preventScrollReset:a,relative:s,viewTransition:l}=t===void 0?{}:t,c=ot(),u=Gr(),f=Nf(e,{relative:s});return b.useCallback(p=>{if(jg(p,r)){p.preventDefault();let m=n!==void 0?n:ia(u)===ia(f);c(e,{replace:m,state:o,preventScrollReset:a,relative:s,viewTransition:l})}},[u,c,f,n,o,r,e,a,s,l])}function Ag(e){let t=b.useRef(ls(e)),r=b.useRef(!1),n=Gr(),o=b.useMemo(()=>Sg(n.search,r.current?null:t.current),[n.search]),a=ot(),s=b.useCallback((l,c)=>{const u=ls(typeof l=="function"?l(o):l);r.current=!0,a("?"+u,c)},[a,o]);return[o,s]}const Pf=b.createContext();function Og({children:e}){const[t,r]=b.useState([]),[n,o]=b.useState(!1);b.useEffect(()=>{try{const f=localStorage.getItem("cart");f&&r(JSON.parse(f))}catch{}},[]),b.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(t))},[t]);const a=f=>{r(p=>{var m,y,w,g;return p.find(x=>x.id===f._id)?p:[...p,{id:f._id,title:f.title,price:f.price,image:((y=(m=f.images)==null?void 0:m[0])==null?void 0:y.url)||f.thumbnail||"",artist:((w=f.artist)==null?void 0:w.name)||"Unknown",artistId:(g=f.artist)==null?void 0:g._id,dimensions:f.dimensions}]}),o(!0)},s=f=>{r(p=>p.filter(m=>m.id!==f))},l=()=>r([]),c=t.reduce((f,p)=>{var m;return f+(((m=p.price)==null?void 0:m.ngn)||0)},0),u=t.reduce((f,p)=>{var m;return f+(((m=p.price)==null?void 0:m.usd)||0)},0);return i.jsx(Pf.Provider,{value:{items:t,addItem:a,removeItem:s,clearCart:l,totalNgn:c,totalUsd:u,showCart:n,setShowCart:o,count:t.length},children:e})}const Qn=()=>b.useContext(Pf);function Lg(){const{count:e,setShowCart:t}=Qn(),[r,n]=b.useState(!1),[o,a]=b.useState(!1),s=Gr(),[l,c]=b.useState(()=>JSON.parse(localStorage.getItem("user")||"null"));b.useEffect(()=>{c(JSON.parse(localStorage.getItem("user")||"null"))},[s]),b.useEffect(()=>{const f=()=>{c(JSON.parse(localStorage.getItem("user")||"null"))};return window.addEventListener("storage",f),()=>window.removeEventListener("storage",f)},[]),b.useEffect(()=>{const f=()=>n(window.scrollY>20);return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]),b.useEffect(()=>{a(!1)},[s]);const u=f=>s.pathname===f;return i.jsxs("nav",{className:`glass-navbar ${r?"scrolled":""}`,children:[i.jsxs("div",{className:"navbar-pill",children:[i.jsx(q,{to:"/",className:"navbar-brand",children:"Àṣà"}),i.jsxs("div",{className:`navbar-links ${o?"open":""}`,children:[i.jsx(q,{to:"/discover",className:u("/discover")?"active":"",children:"Discover Artworks"}),i.jsx(q,{to:"/artists",className:u("/artists")?"active":"",children:"Explore Artists"}),(l==null?void 0:l.role)==="artist"&&i.jsx(q,{to:"/dashboard",className:u("/dashboard")?"active":"",children:"Dashboard"}),l?i.jsxs("div",{className:"navbar-user",children:[i.jsx(q,{to:"/profile",className:"user-name",children:l.name}),i.jsx("button",{className:"btn-logout",onClick:()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.href="/"},children:"Logout"})]}):i.jsx(q,{to:"/login",className:"btn-nav-cta",children:"Become a Collector"})]}),i.jsxs("button",{className:"cart-btn",onClick:()=>t(!0),"aria-label":"Cart",children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"9",cy:"21",r:"1"}),i.jsx("circle",{cx:"20",cy:"21",r:"1"}),i.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),e>0&&i.jsx("span",{className:"cart-badge",children:e})]}),i.jsxs("button",{className:`hamburger ${o?"open":""}`,onClick:()=>a(!o),"aria-label":"Toggle menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]}),i.jsx("style",{children:`
        .glass-navbar {
          position: fixed;
          top: 16px;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: center;
          padding: 0 16px;
          transition: top var(--transition-base);
        }
        .glass-navbar.scrolled { top: 8px; }

        .navbar-pill {
          width: 100%;
          max-width: 980px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px 10px 24px;
          background: #1a140f;
          border-radius: 999px;
          box-shadow: 0 8px 30px rgba(26, 20, 15, 0.22);
        }

        .navbar-brand {
          font-family: 'Bodoni Moda', Georgia, serif;
          font-size: 1.65rem;
          font-weight: 700;
          color: #f2e9da;
          letter-spacing: 0.5px;
          line-height: 1;
          white-space: nowrap;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-left: auto;
        }
        .navbar-links a {
          color: rgba(242, 233, 218, 0.7);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color var(--transition-fast);
          white-space: nowrap;
        }
        .navbar-links a:hover,
        .navbar-links a.active { color: #f2e9da; }

        .navbar-user { display: flex; align-items: center; gap: 14px; }
        .user-name { color: #f2e9da !important; font-weight: 600; }
        .btn-logout {
          background: transparent;
          color: rgba(242, 233, 218, 0.6);
          font-size: 0.82rem;
          padding: 6px 14px;
          border: 1px solid rgba(242, 233, 218, 0.2);
          border-radius: 999px;
          transition: all var(--transition-fast);
        }
        .btn-logout:hover { border-color: var(--color-accent); color: var(--color-accent); }

        .btn-nav-cta {
          background: var(--color-accent);
          color: #f2e9da !important;
          padding: 10px 22px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.88rem;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }
        .btn-nav-cta:hover { background: var(--color-accent-dark); transform: translateY(-1px); }

        .cart-btn {
          position: relative;
          background: rgba(242, 233, 218, 0.1);
          width: 40px; height: 40px;
          border-radius: 50%;
          color: #f2e9da;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background var(--transition-fast);
        }
        .cart-btn:hover { background: rgba(242, 233, 218, 0.2); }
        .cart-badge {
          position: absolute; top: -2px; right: -2px;
          min-width: 18px; height: 18px;
          background: var(--color-accent);
          color: #f2e9da;
          font-size: 0.7rem; font-weight: 700;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          padding: 0 4px;
        }

        .hamburger {
          display: none;
          flex-direction: column; gap: 5px;
          background: transparent; padding: 8px;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: #f2e9da; border-radius: 2px;
          transition: all var(--transition-fast);
        }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        @media (max-width: 820px) {
          .hamburger { display: flex; order: 3; }
          .cart-btn { order: 2; margin-left: auto; }
          .navbar-links {
            position: fixed;
            top: 0; right: -100%;
            width: 280px; height: 100vh;
            background: #1a140f;
            flex-direction: column;
            align-items: flex-start;
            padding: 90px 32px 32px;
            gap: 24px; margin-left: 0;
            transition: right var(--transition-base);
            z-index: 101;
          }
          .navbar-links.open { right: 0; }
          .navbar-user { flex-direction: column; align-items: flex-start; }
        }
      `})]})}const Fc="https://asa-3mdd.onrender.com";function ze(e){if(!e||typeof e!="string")return"";if(e.startsWith("data:")||e.startsWith("blob:"))return e;if(e.startsWith("/uploads/"))return`${Fc}${e}`;const t=e.match(/^https?:\/\/(localhost|127\.0\.0\.1|\d+\.\d+\.\d+\.\d+)(:\d+)?(\/uploads\/.*)$/);return t?`${Fc}${t[3]}`:e}function Tg(){const{items:e,removeItem:t,clearCart:r,totalNgn:n,totalUsd:o,showCart:a,setShowCart:s,count:l}=Qn(),c=ot();return a?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"cart-overlay",onClick:()=>s(!1)}),i.jsxs("div",{className:"cart-drawer",children:[i.jsxs("div",{className:"cart-header",children:[i.jsxs("h2",{children:["Cart (",l,")"]}),i.jsx("button",{className:"cart-close",onClick:()=>s(!1),children:"×"})]}),e.length===0?i.jsx("div",{className:"cart-empty",children:i.jsx("p",{children:"Your cart is empty"})}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"cart-items",children:e.map(u=>{var f,p;return i.jsxs("div",{className:"cart-item",children:[i.jsx("div",{className:"cart-item-img",children:i.jsx("img",{src:ze(u.image),alt:u.title,referrerPolicy:"no-referrer"})}),i.jsxs("div",{className:"cart-item-info",children:[i.jsx("strong",{children:u.title}),i.jsx("span",{className:"cart-item-artist",children:u.artist}),i.jsxs("span",{className:"cart-item-price",children:["$",(p=(f=u.price)==null?void 0:f.usd)==null?void 0:p.toLocaleString()]})]}),i.jsx("button",{className:"cart-item-remove",onClick:()=>t(u.id),children:"×"})]},u.id)})}),i.jsxs("div",{className:"cart-footer",children:[i.jsxs("div",{className:"cart-total",children:[i.jsx("span",{children:"Total"}),i.jsxs("div",{children:[i.jsxs("strong",{children:["$",o.toLocaleString()]}),i.jsxs("small",{children:["₦",n.toLocaleString()]})]})]}),i.jsx("button",{className:"cart-checkout",onClick:()=>{s(!1),c("/checkout")},children:"Checkout"}),i.jsx("button",{className:"cart-clear",onClick:r,children:"Clear Cart"})]})]})]}),i.jsx("style",{children:`
        .cart-overlay {
          position: fixed; inset: 0; background: rgba(6, 9, 22, 0.55);
          backdrop-filter: blur(4px);
          z-index: 200; animation: asaFade 0.2s ease;
        }
        .cart-drawer {
          position: fixed; top: 0; right: 0; bottom: 0; width: 380px;
          background: #fbf6ec;
          border-left: 1px solid var(--color-border);
          z-index: 201; display: flex; flex-direction: column;
          animation: asaDrawer 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          max-width: 100vw;
        }
        .cart-header {
          display: flex; justify-content: space-between; align-items: center;
          padding: 24px 24px 20px; border-bottom: 1px solid var(--color-border);
        }
        .cart-header h2 {
          font-family: var(--font-display); font-size: 1.6rem; font-weight: 400;
          letter-spacing: 0.01em;
        }
        .cart-close {
          font-size: 1.5rem; background: none; color: var(--color-text-secondary);
          padding: 4px 8px;
        }
        .cart-close:hover { color: var(--color-text-primary); }
        .cart-empty {
          flex: 1; display: flex; align-items: center; justify-content: center;
          color: var(--color-text-muted);
        }
        .cart-items {
          flex: 1; overflow-y: auto; padding: 16px;
          display: flex; flex-direction: column; gap: 12px;
        }
        .cart-item {
          display: flex; gap: 12px; padding: 12px;
          background: var(--glass-bg); border-radius: var(--radius-md);
          border: 1px solid var(--glass-border);
          position: relative;
        }
        .cart-item-img {
          width: 64px; height: 64px; border-radius: var(--radius-sm);
          overflow: hidden; background: var(--color-surface); flex-shrink: 0;
        }
        .cart-item-img img { width: 100%; height: 100%; object-fit: cover; }
        .cart-item-info {
          flex: 1; display: flex; flex-direction: column; gap: 2px;
        }
        .cart-item-info strong { font-size: 0.9rem; }
        .cart-item-artist { color: var(--color-text-muted); font-size: 0.8rem; }
        .cart-item-price { color: var(--color-accent); font-weight: 700; font-size: 0.9rem; margin-top: auto; }
        .cart-item-remove {
          position: absolute; top: 8px; right: 8px;
          background: none; color: var(--color-text-muted); font-size: 1.2rem;
          padding: 2px 6px;
        }
        .cart-item-remove:hover { color: var(--color-error); }
        .cart-footer {
          padding: 20px 24px; border-top: 1px solid var(--color-border);
          display: flex; flex-direction: column; gap: 12px;
        }
        .cart-total {
          display: flex; justify-content: space-between; align-items: center;
        }
        .cart-total small {
          display: block; color: var(--color-text-muted); font-size: 0.8rem;
          text-align: right;
        }
        .cart-total strong { font-size: 1.3rem; font-family: var(--font-display); font-weight: 400; }
        .cart-checkout {
          padding: 15px; background: var(--color-accent); color: #f2e9da;
          border-radius: 999px; font-weight: 700; font-size: 1rem;
          transition: all var(--transition-fast);
        }
        .cart-checkout:hover { background: var(--color-accent-dark); transform: translateY(-1px); }
        .cart-clear {
          padding: 8px; background: none; color: var(--color-text-muted);
          font-size: 0.85rem;
        }
        .cart-clear:hover { color: var(--color-error); }
      `})]}):null}function Dg(){const e=ot(),t=JSON.parse(localStorage.getItem("user")||"null"),r=n=>{n.preventDefault(),e(t?"/create":"/login?mode=signup&role=artist")};return i.jsxs("footer",{className:"site-footer",children:[i.jsxs("div",{className:"footer-inner",children:[i.jsxs("div",{className:"footer-top",children:[i.jsxs("div",{className:"footer-brand",children:[i.jsx("div",{className:"footer-logo",children:"Àṣà"}),i.jsx("p",{children:"A marketplace for original contemporary art, made across Africa and collected everywhere."})]}),i.jsxs("div",{className:"footer-cols",children:[i.jsxs("div",{className:"footer-col",children:[i.jsx("span",{className:"footer-col-title",children:"Explore"}),i.jsx(q,{to:"/discover",children:"Artworks"}),i.jsx(q,{to:"/artists",children:"Artists"}),i.jsx("a",{href:"/create",onClick:r,children:"Sell your art"})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("span",{className:"footer-col-title",children:"Company"}),i.jsx(q,{to:"/",children:"About"}),i.jsx(q,{to:"/",children:"Journal"}),i.jsx(q,{to:"/",children:"Contact"})]})]})]}),i.jsxs("div",{className:"footer-bottom",children:[i.jsx("span",{children:"© 2026 Àṣà. All rights reserved."}),i.jsx("span",{children:"Pan-African · est. 2026"})]})]}),i.jsx("style",{children:`
        .site-footer {
          background: #161210;
          color: #f2e9da;
          padding: 64px 24px 36px;
        }
        .footer-inner { max-width: 1200px; margin: 0 auto; }
        .footer-top {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
          padding-bottom: 42px;
          border-bottom: 1px solid rgba(242, 233, 218, 0.12);
        }
        .footer-brand { max-width: 300px; }
        .footer-logo {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 30px;
          margin-bottom: 14px;
        }
        .footer-brand p {
          font-size: 0.9rem;
          line-height: 1.55;
          color: rgba(242, 233, 218, 0.6);
          margin: 0;
        }
        .footer-cols { display: flex; gap: 64px; flex-wrap: wrap; }
        .footer-col { display: flex; flex-direction: column; gap: 11px; }
        .footer-col-title {
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(242, 233, 218, 0.4);
          margin-bottom: 4px;
        }
        .footer-col a {
          color: rgba(242, 233, 218, 0.78);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }
        .footer-col a:hover { color: #f2e9da; }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 24px;
          font-size: 0.8rem;
          color: rgba(242, 233, 218, 0.45);
        }
      `})]})}function _f(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ug}=Object.prototype,{getPrototypeOf:Ea}=Object,{iterator:Ca,toStringTag:zf}=Symbol,Ra=(e=>t=>{const r=Ug.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),pt=e=>(e=e.toLowerCase(),t=>Ra(t)===e),Pa=e=>t=>typeof t===e,{isArray:Xr}=Array,Yr=Pa("undefined");function Kn(e){return e!==null&&!Yr(e)&&e.constructor!==null&&!Yr(e.constructor)&&We(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Af=pt("ArrayBuffer");function Ig(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Af(e.buffer),t}const Fg=Pa("string"),We=Pa("function"),Of=Pa("number"),Jn=e=>e!==null&&typeof e=="object",Mg=e=>e===!0||e===!1,Ao=e=>{if(Ra(e)!=="object")return!1;const t=Ea(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(zf in e)&&!(Ca in e)},Bg=e=>{if(!Jn(e)||Kn(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},$g=pt("Date"),Hg=pt("File"),Wg=e=>!!(e&&typeof e.uri<"u"),Vg=e=>e&&typeof e.getParts<"u",Yg=pt("Blob"),qg=pt("FileList"),Qg=e=>Jn(e)&&We(e.pipe);function Kg(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Mc=Kg(),Bc=typeof Mc.FormData<"u"?Mc.FormData:void 0,Jg=e=>{if(!e)return!1;if(Bc&&e instanceof Bc)return!0;const t=Ea(e);if(!t||t===Object.prototype||!We(e.append))return!1;const r=Ra(e);return r==="formdata"||r==="object"&&We(e.toString)&&e.toString()==="[object FormData]"},Gg=pt("URLSearchParams"),[Xg,Zg,ev,tv]=["ReadableStream","Request","Response","Headers"].map(pt),rv=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Gn(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),Xr(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{if(Kn(e))return;const a=r?Object.getOwnPropertyNames(e):Object.keys(e),s=a.length;let l;for(n=0;n<s;n++)l=a[n],t.call(null,e[l],l,e)}}function Lf(e,t){if(Kn(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const nr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Tf=e=>!Yr(e)&&e!==nr;function cs(...e){const{caseless:t,skipUndefined:r}=Tf(this)&&this||{},n={},o=(a,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const l=t&&Lf(n,s)||s,c=us(n,l)?n[l]:void 0;Ao(c)&&Ao(a)?n[l]=cs(c,a):Ao(a)?n[l]=cs({},a):Xr(a)?n[l]=a.slice():(!r||!Yr(a))&&(n[l]=a)};for(let a=0,s=e.length;a<s;a++)e[a]&&Gn(e[a],o);return n}const nv=(e,t,r,{allOwnKeys:n}={})=>(Gn(t,(o,a)=>{r&&We(o)?Object.defineProperty(e,a,{__proto__:null,value:_f(o,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,a,{__proto__:null,value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),e),ov=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),av=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),r&&Object.assign(e.prototype,r)},iv=(e,t,r,n)=>{let o,a,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)s=o[a],(!n||n(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=r!==!1&&Ea(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},sv=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},lv=e=>{if(!e)return null;if(Xr(e))return e;let t=e.length;if(!Of(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},cv=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ea(Uint8Array)),uv=(e,t)=>{const n=(e&&e[Ca]).call(e);let o;for(;(o=n.next())&&!o.done;){const a=o.value;t.call(e,a[0],a[1])}},dv=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},fv=pt("HTMLFormElement"),pv=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),us=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),mv=pt("RegExp"),Df=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Gn(r,(o,a)=>{let s;(s=t(o,a,e))!==!1&&(n[a]=s||o)}),Object.defineProperties(e,n)},hv=e=>{Df(e,(t,r)=>{if(We(e)&&["arguments","caller","callee"].includes(r))return!1;const n=e[r];if(We(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},gv=(e,t)=>{const r={},n=o=>{o.forEach(a=>{r[a]=!0})};return Xr(e)?n(e):n(String(e).split(t)),r},vv=()=>{},xv=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function yv(e){return!!(e&&We(e.append)&&e[zf]==="FormData"&&e[Ca])}const wv=e=>{const t=new WeakSet,r=n=>{if(Jn(n)){if(t.has(n))return;if(Kn(n))return n;if(!("toJSON"in n)){t.add(n);const o=Xr(n)?[]:{};return Gn(n,(a,s)=>{const l=r(a);!Yr(l)&&(o[s]=l)}),t.delete(n),o}}return n};return r(e)},bv=pt("AsyncFunction"),kv=e=>e&&(Jn(e)||We(e))&&We(e.then)&&We(e.catch),Uf=((e,t)=>e?setImmediate:t?((r,n)=>(nr.addEventListener("message",({source:o,data:a})=>{o===nr&&a===r&&n.length&&n.shift()()},!1),o=>{n.push(o),nr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",We(nr.postMessage)),jv=typeof queueMicrotask<"u"?queueMicrotask.bind(nr):typeof process<"u"&&process.nextTick||Uf,Sv=e=>e!=null&&We(e[Ca]),k={isArray:Xr,isArrayBuffer:Af,isBuffer:Kn,isFormData:Jg,isArrayBufferView:Ig,isString:Fg,isNumber:Of,isBoolean:Mg,isObject:Jn,isPlainObject:Ao,isEmptyObject:Bg,isReadableStream:Xg,isRequest:Zg,isResponse:ev,isHeaders:tv,isUndefined:Yr,isDate:$g,isFile:Hg,isReactNativeBlob:Wg,isReactNative:Vg,isBlob:Yg,isRegExp:mv,isFunction:We,isStream:Qg,isURLSearchParams:Gg,isTypedArray:cv,isFileList:qg,forEach:Gn,merge:cs,extend:nv,trim:rv,stripBOM:ov,inherits:av,toFlatObject:iv,kindOf:Ra,kindOfTest:pt,endsWith:sv,toArray:lv,forEachEntry:uv,matchAll:dv,isHTMLForm:fv,hasOwnProperty:us,hasOwnProp:us,reduceDescriptors:Df,freezeMethods:hv,toObjectSet:gv,toCamelCase:pv,noop:vv,toFiniteNumber:xv,findKey:Lf,global:nr,isContextDefined:Tf,isSpecCompliantForm:yv,toJSONObject:wv,isAsyncFn:bv,isThenable:kv,setImmediate:Uf,asap:jv,isIterable:Sv},Nv=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ev=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),r=s.substring(0,o).trim().toLowerCase(),n=s.substring(o+1).trim(),!(!r||t[r]&&Nv[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};function Cv(e){let t=0,r=e.length;for(;t<r;){const n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;r>t;){const n=e.charCodeAt(r-1);if(n!==9&&n!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}const Rv=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Pv=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function pl(e,t){return k.isArray(e)?e.map(r=>pl(r,t)):Cv(String(e).replace(t,""))}const _v=e=>pl(e,Rv),zv=e=>pl(e,Pv);function If(e){const t=Object.create(null);return k.forEach(e.toJSON(),(r,n)=>{t[n]=zv(r)}),t}const $c=Symbol("internals");function cn(e){return e&&String(e).trim().toLowerCase()}function Oo(e){return e===!1||e==null?e:k.isArray(e)?e.map(Oo):_v(String(e))}function Av(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Ov=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function li(e,t,r,n,o){if(k.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!k.isString(t)){if(k.isString(n))return t.indexOf(n)!==-1;if(k.isRegExp(n))return n.test(t)}}function Lv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Tv(e,t){const r=k.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{__proto__:null,value:function(o,a,s){return this[n].call(this,t,o,a,s)},configurable:!0})})}let Le=class{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function a(l,c,u){const f=cn(c);if(!f)throw new Error("header name must be a non-empty string");const p=k.findKey(o,f);(!p||o[p]===void 0||u===!0||u===void 0&&o[p]!==!1)&&(o[p||c]=Oo(l))}const s=(l,c)=>k.forEach(l,(u,f)=>a(u,f,c));if(k.isPlainObject(t)||t instanceof this.constructor)s(t,r);else if(k.isString(t)&&(t=t.trim())&&!Ov(t))s(Ev(t),r);else if(k.isObject(t)&&k.isIterable(t)){let l={},c,u;for(const f of t){if(!k.isArray(f))throw TypeError("Object iterator must return a key-value pair");l[u=f[0]]=(c=l[u])?k.isArray(c)?[...c,f[1]]:[c,f[1]]:f[1]}s(l,r)}else t!=null&&a(r,t,n);return this}get(t,r){if(t=cn(t),t){const n=k.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return Av(o);if(k.isFunction(r))return r.call(this,o,n);if(k.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=cn(t),t){const n=k.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||li(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function a(s){if(s=cn(s),s){const l=k.findKey(n,s);l&&(!r||li(n,n[l],l,r))&&(delete n[l],o=!0)}}return k.isArray(t)?t.forEach(a):a(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const a=r[n];(!t||li(this,this[a],a,t,!0))&&(delete this[a],o=!0)}return o}normalize(t){const r=this,n={};return k.forEach(this,(o,a)=>{const s=k.findKey(n,a);if(s){r[s]=Oo(o),delete r[a];return}const l=t?Lv(a):String(a).trim();l!==a&&delete r[a],r[l]=Oo(o),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return k.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&k.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[$c]=this[$c]={accessors:{}}).accessors,o=this.prototype;function a(s){const l=cn(s);n[l]||(Tv(o,s),n[l]=!0)}return k.isArray(t)?t.forEach(a):a(t),this}};Le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Le.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});k.freezeMethods(Le);const Dv="[REDACTED ****]";function Uv(e){if(k.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(k.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function Iv(e,t){const r=new Set(t.map(a=>String(a).toLowerCase())),n=[],o=a=>{if(a===null||typeof a!="object"||k.isBuffer(a))return a;if(n.indexOf(a)!==-1)return;a instanceof Le&&(a=a.toJSON()),n.push(a);let s;if(k.isArray(a))s=[],a.forEach((l,c)=>{const u=o(l);k.isUndefined(u)||(s[c]=u)});else{if(!k.isPlainObject(a)&&Uv(a))return n.pop(),a;s=Object.create(null);for(const[l,c]of Object.entries(a)){const u=r.has(l.toLowerCase())?Dv:o(c);k.isUndefined(u)||(s[l]=u)}}return n.pop(),s};return o(e)}let A=class Ff extends Error{static from(t,r,n,o,a,s){const l=new Ff(t.message,r||t.code,n,o,a);return l.cause=t,l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),s&&Object.assign(l,s),l}constructor(t,r,n,o,a){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),n&&(this.config=n),o&&(this.request=o),a&&(this.response=a,this.status=a.status)}toJSON(){const t=this.config,r=t&&k.hasOwnProp(t,"redact")?t.redact:void 0,n=k.isArray(r)&&r.length>0?Iv(t,r):k.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};A.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";A.ERR_BAD_OPTION="ERR_BAD_OPTION";A.ECONNABORTED="ECONNABORTED";A.ETIMEDOUT="ETIMEDOUT";A.ECONNREFUSED="ECONNREFUSED";A.ERR_NETWORK="ERR_NETWORK";A.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";A.ERR_DEPRECATED="ERR_DEPRECATED";A.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";A.ERR_BAD_REQUEST="ERR_BAD_REQUEST";A.ERR_CANCELED="ERR_CANCELED";A.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";A.ERR_INVALID_URL="ERR_INVALID_URL";A.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Fv=null;function ds(e){return k.isPlainObject(e)||k.isArray(e)}function Mf(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function ci(e,t,r){return e?e.concat(t).map(function(o,a){return o=Mf(o),!r&&a?"["+o+"]":o}).join(r?".":""):t}function Mv(e){return k.isArray(e)&&!e.some(ds)}const Bv=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function _a(e,t,r){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=k.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,d){return!k.isUndefined(d[x])});const n=r.metaTokens,o=r.visitor||p,a=r.dots,s=r.indexes,l=r.Blob||typeof Blob<"u"&&Blob,c=r.maxDepth===void 0?100:r.maxDepth,u=l&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function f(g){if(g===null)return"";if(k.isDate(g))return g.toISOString();if(k.isBoolean(g))return g.toString();if(!u&&k.isBlob(g))throw new A("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(g)||k.isTypedArray(g)?u&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function p(g,x,d){let h=g;if(k.isReactNative(t)&&k.isReactNativeBlob(g))return t.append(ci(d,x,a),f(g)),!1;if(g&&!d&&typeof g=="object"){if(k.endsWith(x,"{}"))x=n?x:x.slice(0,-2),g=JSON.stringify(g);else if(k.isArray(g)&&Mv(g)||(k.isFileList(g)||k.endsWith(x,"[]"))&&(h=k.toArray(g)))return x=Mf(x),h.forEach(function(j,N){!(k.isUndefined(j)||j===null)&&t.append(s===!0?ci([x],N,a):s===null?x:x+"[]",f(j))}),!1}return ds(g)?!0:(t.append(ci(d,x,a),f(g)),!1)}const m=[],y=Object.assign(Bv,{defaultVisitor:p,convertValue:f,isVisitable:ds});function w(g,x,d=0){if(!k.isUndefined(g)){if(d>c)throw new A("Object is too deeply nested ("+d+" levels). Max depth: "+c,A.ERR_FORM_DATA_DEPTH_EXCEEDED);if(m.indexOf(g)!==-1)throw Error("Circular reference detected in "+x.join("."));m.push(g),k.forEach(g,function(v,j){(!(k.isUndefined(v)||v===null)&&o.call(t,v,k.isString(j)?j.trim():j,x,y))===!0&&w(v,x?x.concat(j):[j],d+1)}),m.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Hc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(n){return t[n]})}function ml(e,t){this._pairs=[],e&&_a(e,this,t)}const Bf=ml.prototype;Bf.append=function(t,r){this._pairs.push([t,r])};Bf.toString=function(t){const r=t?function(n){return t.call(this,n,Hc)}:Hc;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function $v(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function $f(e,t,r){if(!t)return e;const n=r&&r.encode||$v,o=k.isFunction(r)?{serialize:r}:r,a=o&&o.serialize;let s;if(a?s=a(t,o):s=k.isURLSearchParams(t)?t.toString():new ml(t,o).toString(n),s){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Wc{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(n){n!==null&&t(n)})}}const hl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Hv=typeof URLSearchParams<"u"?URLSearchParams:ml,Wv=typeof FormData<"u"?FormData:null,Vv=typeof Blob<"u"?Blob:null,Yv={isBrowser:!0,classes:{URLSearchParams:Hv,FormData:Wv,Blob:Vv},protocols:["http","https","file","blob","url","data"]},gl=typeof window<"u"&&typeof document<"u",fs=typeof navigator=="object"&&navigator||void 0,qv=gl&&(!fs||["ReactNative","NativeScript","NS"].indexOf(fs.product)<0),Qv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Kv=gl&&window.location.href||"http://localhost",Jv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gl,hasStandardBrowserEnv:qv,hasStandardBrowserWebWorkerEnv:Qv,navigator:fs,origin:Kv},Symbol.toStringTag,{value:"Module"})),Pe={...Jv,...Yv};function Gv(e,t){return _a(e,new Pe.classes.URLSearchParams,{visitor:function(r,n,o,a){return Pe.isNode&&k.isBuffer(r)?(this.append(n,r.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}function Xv(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Zv(e){const t={},r=Object.keys(e);let n;const o=r.length;let a;for(n=0;n<o;n++)a=r[n],t[a]=e[a];return t}function Hf(e){function t(r,n,o,a){let s=r[a++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=a>=r.length;return s=!s&&k.isArray(o)?o.length:s,c?(k.hasOwnProp(o,s)?o[s]=k.isArray(o[s])?o[s].concat(n):[o[s],n]:o[s]=n,!l):((!k.hasOwnProp(o,s)||!k.isObject(o[s]))&&(o[s]=[]),t(r,n,o[s],a)&&k.isArray(o[s])&&(o[s]=Zv(o[s])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const r={};return k.forEachEntry(e,(n,o)=>{t(Xv(n),o,r,0)}),r}return null}const wr=(e,t)=>e!=null&&k.hasOwnProp(e,t)?e[t]:void 0;function ex(e,t,r){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Xn={transitional:hl,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,a=k.isObject(t);if(a&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return o?JSON.stringify(Hf(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){const c=wr(this,"formSerializer");if(n.indexOf("application/x-www-form-urlencoded")>-1)return Gv(t,c).toString();if((l=k.isFileList(t))||n.indexOf("multipart/form-data")>-1){const u=wr(this,"env"),f=u&&u.FormData;return _a(l?{"files[]":t}:t,f&&new f,c)}}return a||o?(r.setContentType("application/json",!1),ex(t)):t}],transformResponse:[function(t){const r=wr(this,"transitional")||Xn.transitional,n=r&&r.forcedJSONParsing,o=wr(this,"responseType"),a=o==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(n&&!o||a)){const l=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t,wr(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?A.from(c,A.ERR_BAD_RESPONSE,this,null,wr(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pe.classes.FormData,Blob:Pe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch","query"],e=>{Xn.headers[e]={}});function ui(e,t){const r=this||Xn,n=t||r,o=Le.from(n.headers);let a=n.data;return k.forEach(e,function(l){a=l.call(r,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function Wf(e){return!!(e&&e.__CANCEL__)}let Zn=class extends A{constructor(t,r,n){super(t??"canceled",A.ERR_CANCELED,r,n),this.name="CanceledError",this.__CANCEL__=!0}};function Vf(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new A("Request failed with status code "+r.status,r.status>=400&&r.status<500?A.ERR_BAD_REQUEST:A.ERR_BAD_RESPONSE,r.config,r.request,r))}function tx(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function rx(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,a=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),f=n[a];s||(s=u),r[o]=c,n[o]=u;let p=a,m=0;for(;p!==o;)m+=r[p++],p=p%e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),u-s<t)return;const y=f&&u-f;return y?Math.round(m*1e3/y):void 0}}function nx(e,t){let r=0,n=1e3/t,o,a;const s=(u,f=Date.now())=>{r=f,o=null,a&&(clearTimeout(a),a=null),e(...u)};return[(...u)=>{const f=Date.now(),p=f-r;p>=n?s(u,f):(o=u,a||(a=setTimeout(()=>{a=null,s(o)},n-p)))},()=>o&&s(o)]}const sa=(e,t,r=3)=>{let n=0;const o=rx(50,250);return nx(a=>{if(!a||typeof a.loaded!="number")return;const s=a.loaded,l=a.lengthComputable?a.total:void 0,c=l!=null?Math.min(s,l):s,u=Math.max(0,c-n),f=o(u);n=Math.max(n,c);const p={loaded:c,total:l,progress:l?c/l:void 0,bytes:u,rate:f||void 0,estimated:f&&l?(l-c)/f:void 0,event:a,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(p)},r)},Vc=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Yc=e=>(...t)=>k.asap(()=>e(...t)),ox=Pe.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Pe.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Pe.origin),Pe.navigator&&/(msie|trident)/i.test(Pe.navigator.userAgent)):()=>!0,ax=Pe.hasStandardBrowserEnv?{write(e,t,r,n,o,a,s){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];k.isNumber(r)&&l.push(`expires=${new Date(r).toUTCString()}`),k.isString(n)&&l.push(`path=${n}`),k.isString(o)&&l.push(`domain=${o}`),a===!0&&l.push("secure"),k.isString(s)&&l.push(`SameSite=${s}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const n=t[r].replace(/^\s+/,""),o=n.indexOf("=");if(o!==-1&&n.slice(0,o)===e)return decodeURIComponent(n.slice(o+1))}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ix(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function sx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Yf(e,t,r){let n=!ix(t);return e&&(n||r===!1)?sx(e,t):t}const qc=e=>e instanceof Le?{...e}:e;function pr(e,t){t=t||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function n(u,f,p,m){return k.isPlainObject(u)&&k.isPlainObject(f)?k.merge.call({caseless:m},u,f):k.isPlainObject(f)?k.merge({},f):k.isArray(f)?f.slice():f}function o(u,f,p,m){if(k.isUndefined(f)){if(!k.isUndefined(u))return n(void 0,u,p,m)}else return n(u,f,p,m)}function a(u,f){if(!k.isUndefined(f))return n(void 0,f)}function s(u,f){if(k.isUndefined(f)){if(!k.isUndefined(u))return n(void 0,u)}else return n(void 0,f)}function l(u,f,p){if(k.hasOwnProp(t,p))return n(u,f);if(k.hasOwnProp(e,p))return n(void 0,u)}const c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,allowedSocketPaths:s,responseEncoding:s,validateStatus:l,headers:(u,f,p)=>o(qc(u),qc(f),p,!0)};return k.forEach(Object.keys({...e,...t}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const p=k.hasOwnProp(c,f)?c[f]:o,m=k.hasOwnProp(e,f)?e[f]:void 0,y=k.hasOwnProp(t,f)?t[f]:void 0,w=p(m,y,f);k.isUndefined(w)&&p!==l||(r[f]=w)}),r}const lx=["content-type","content-length"];function cx(e,t,r){if(r!=="content-only"){e.set(t);return}Object.entries(t).forEach(([n,o])=>{lx.includes(n.toLowerCase())&&e.set(n,o)})}const ux=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16))),qf=e=>{const t=pr({},e),r=m=>k.hasOwnProp(t,m)?t[m]:void 0,n=r("data");let o=r("withXSRFToken");const a=r("xsrfHeaderName"),s=r("xsrfCookieName");let l=r("headers");const c=r("auth"),u=r("baseURL"),f=r("allowAbsoluteUrls"),p=r("url");if(t.headers=l=Le.from(l),t.url=$f(Yf(u,p,f),e.params,e.paramsSerializer),c&&l.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?ux(c.password):""))),k.isFormData(n)&&(Pe.hasStandardBrowserEnv||Pe.hasStandardBrowserWebWorkerEnv?l.setContentType(void 0):k.isFunction(n.getHeaders)&&cx(l,n.getHeaders(),r("formDataHeaderPolicy"))),Pe.hasStandardBrowserEnv&&(k.isFunction(o)&&(o=o(t)),o===!0||o==null&&ox(t.url))){const y=a&&s&&ax.read(s);y&&l.set(a,y)}return t},dx=typeof XMLHttpRequest<"u",fx=dx&&function(e){return new Promise(function(r,n){const o=qf(e);let a=o.data;const s=Le.from(o.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=o,f,p,m,y,w;function g(){y&&y(),w&&w(),o.cancelToken&&o.cancelToken.unsubscribe(f),o.signal&&o.signal.removeEventListener("abort",f)}let x=new XMLHttpRequest;x.open(o.method.toUpperCase(),o.url,!0),x.timeout=o.timeout;function d(){if(!x)return;const v=Le.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),N={data:!l||l==="text"||l==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:v,config:e,request:x};Vf(function(S){r(S),g()},function(S){n(S),g()},N),x=null}"onloadend"in x?x.onloadend=d:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.startsWith("file:"))||setTimeout(d)},x.onabort=function(){x&&(n(new A("Request aborted",A.ECONNABORTED,e,x)),g(),x=null)},x.onerror=function(j){const N=j&&j.message?j.message:"Network Error",E=new A(N,A.ERR_NETWORK,e,x);E.event=j||null,n(E),g(),x=null},x.ontimeout=function(){let j=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const N=o.transitional||hl;o.timeoutErrorMessage&&(j=o.timeoutErrorMessage),n(new A(j,N.clarifyTimeoutError?A.ETIMEDOUT:A.ECONNABORTED,e,x)),g(),x=null},a===void 0&&s.setContentType(null),"setRequestHeader"in x&&k.forEach(If(s),function(j,N){x.setRequestHeader(N,j)}),k.isUndefined(o.withCredentials)||(x.withCredentials=!!o.withCredentials),l&&l!=="json"&&(x.responseType=o.responseType),u&&([m,w]=sa(u,!0),x.addEventListener("progress",m)),c&&x.upload&&([p,y]=sa(c),x.upload.addEventListener("progress",p),x.upload.addEventListener("loadend",y)),(o.cancelToken||o.signal)&&(f=v=>{x&&(n(!v||v.type?new Zn(null,e,x):v),x.abort(),g(),x=null)},o.cancelToken&&o.cancelToken.subscribe(f),o.signal&&(o.signal.aborted?f():o.signal.addEventListener("abort",f)));const h=tx(o.url);if(h&&!Pe.protocols.includes(h)){n(new A("Unsupported protocol "+h+":",A.ERR_BAD_REQUEST,e));return}x.send(a||null)})},px=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const r=new AbortController;let n=!1;const o=function(c){if(!n){n=!0,s();const u=c instanceof Error?c:this.reason;r.abort(u instanceof A?u:new Zn(u instanceof Error?u.message:u))}};let a=t&&setTimeout(()=>{a=null,o(new A(`timeout of ${t}ms exceeded`,A.ETIMEDOUT))},t);const s=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(o):c.removeEventListener("abort",o)}),e=null)};e.forEach(c=>c.addEventListener("abort",o));const{signal:l}=r;return l.unsubscribe=()=>k.asap(s),l},mx=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},hx=async function*(e,t){for await(const r of gx(e))yield*mx(r,t)},gx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Qc=(e,t,r,n)=>{const o=hx(e,t);let a=0,s,l=c=>{s||(s=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:u,value:f}=await o.next();if(u){l(),c.close();return}let p=f.byteLength;if(r){let m=a+=p;r(m)}c.enqueue(new Uint8Array(f))}catch(u){throw l(u),u}},cancel(c){return l(c),o.return()}},{highWaterMark:2})};function vx(e){if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const t=e.indexOf(",");if(t<0)return 0;const r=e.slice(5,t),n=e.slice(t+1);if(/;base64/i.test(r)){let s=n.length;const l=n.length;for(let y=0;y<l;y++)if(n.charCodeAt(y)===37&&y+2<l){const w=n.charCodeAt(y+1),g=n.charCodeAt(y+2);(w>=48&&w<=57||w>=65&&w<=70||w>=97&&w<=102)&&(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102)&&(s-=2,y+=2)}let c=0,u=l-1;const f=y=>y>=2&&n.charCodeAt(y-2)===37&&n.charCodeAt(y-1)===51&&(n.charCodeAt(y)===68||n.charCodeAt(y)===100);u>=0&&(n.charCodeAt(u)===61?(c++,u--):f(u)&&(c++,u-=3)),c===1&&u>=0&&(n.charCodeAt(u)===61||f(u))&&c++;const m=Math.floor(s/4)*3-(c||0);return m>0?m:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(n,"utf8");let a=0;for(let s=0,l=n.length;s<l;s++){const c=n.charCodeAt(s);if(c<128)a+=1;else if(c<2048)a+=2;else if(c>=55296&&c<=56319&&s+1<l){const u=n.charCodeAt(s+1);u>=56320&&u<=57343?(a+=4,s++):a+=3}else a+=3}return a}const vl="1.16.1",Kc=64*1024,{isFunction:xo}=k,Jc=(e,...t)=>{try{return!!e(...t)}catch{return!1}},xx=e=>{const t=k.global!==void 0&&k.global!==null?k.global:globalThis,{ReadableStream:r,TextEncoder:n}=t;e=k.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:o,Request:a,Response:s}=e,l=o?xo(o):typeof fetch=="function",c=xo(a),u=xo(s);if(!l)return!1;const f=l&&xo(r),p=l&&(typeof n=="function"?(d=>h=>d.encode(h))(new n):async d=>new Uint8Array(await new a(d).arrayBuffer())),m=c&&f&&Jc(()=>{let d=!1;const h=new a(Pe.origin,{body:new r,method:"POST",get duplex(){return d=!0,"half"}}),v=h.headers.has("Content-Type");return h.body!=null&&h.body.cancel(),d&&!v}),y=u&&f&&Jc(()=>k.isReadableStream(new s("").body)),w={stream:y&&(d=>d.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!w[d]&&(w[d]=(h,v)=>{let j=h&&h[d];if(j)return j.call(h);throw new A(`Response type '${d}' is not supported`,A.ERR_NOT_SUPPORT,v)})});const g=async d=>{if(d==null)return 0;if(k.isBlob(d))return d.size;if(k.isSpecCompliantForm(d))return(await new a(Pe.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(k.isArrayBufferView(d)||k.isArrayBuffer(d))return d.byteLength;if(k.isURLSearchParams(d)&&(d=d+""),k.isString(d))return(await p(d)).byteLength},x=async(d,h)=>{const v=k.toFiniteNumber(d.getContentLength());return v??g(h)};return async d=>{let{url:h,method:v,data:j,signal:N,cancelToken:E,timeout:S,onDownloadProgress:C,onUploadProgress:D,responseType:_,headers:B,withCredentials:ee="same-origin",fetchOptions:ue,maxContentLength:Q,maxBodyLength:ge}=qf(d);const se=k.isNumber(Q)&&Q>-1,V=k.isNumber(ge)&&ge>-1;let P=o||fetch;_=_?(_+"").toLowerCase():"text";let T=px([N,E&&E.toAbortSignal()],S),L=null;const $=T&&T.unsubscribe&&(()=>{T.unsubscribe()});let K;try{if(se&&typeof h=="string"&&h.startsWith("data:")&&vx(h)>Q)throw new A("maxContentLength size of "+Q+" exceeded",A.ERR_BAD_RESPONSE,d,L);if(V&&v!=="get"&&v!=="head"){const O=await x(B,j);if(typeof O=="number"&&isFinite(O)&&O>ge)throw new A("Request body larger than maxBodyLength limit",A.ERR_BAD_REQUEST,d,L)}if(D&&m&&v!=="get"&&v!=="head"&&(K=await x(B,j))!==0){let O=new a(h,{method:"POST",body:j,duplex:"half"}),I;if(k.isFormData(j)&&(I=O.headers.get("content-type"))&&B.setContentType(I),O.body){const[F,G]=Vc(K,sa(Yc(D)));j=Qc(O.body,Kc,F,G)}}k.isString(ee)||(ee=ee?"include":"omit");const J=c&&"credentials"in a.prototype;if(k.isFormData(j)){const O=B.getContentType();O&&/^multipart\/form-data/i.test(O)&&!/boundary=/i.test(O)&&B.delete("content-type")}B.set("User-Agent","axios/"+vl,!1);const le={...ue,signal:T,method:v.toUpperCase(),headers:If(B.normalize()),body:j,duplex:"half",credentials:J?ee:void 0};L=c&&new a(h,le);let pe=await(c?P(L,ue):P(h,le));if(se){const O=k.toFiniteNumber(pe.headers.get("content-length"));if(O!=null&&O>Q)throw new A("maxContentLength size of "+Q+" exceeded",A.ERR_BAD_RESPONSE,d,L)}const U=y&&(_==="stream"||_==="response");if(y&&pe.body&&(C||se||U&&$)){const O={};["status","statusText","headers"].forEach(at=>{O[at]=pe[at]});const I=k.toFiniteNumber(pe.headers.get("content-length")),[F,G]=C&&Vc(I,sa(Yc(C),!0))||[];let Se=0;const Ne=at=>{if(se&&(Se=at,Se>Q))throw new A("maxContentLength size of "+Q+" exceeded",A.ERR_BAD_RESPONSE,d,L);F&&F(at)};pe=new s(Qc(pe.body,Kc,Ne,()=>{G&&G(),$&&$()}),O)}_=_||"text";let H=await w[k.findKey(w,_)||"text"](pe,d);if(se&&!y&&!U){let O;if(H!=null&&(typeof H.byteLength=="number"?O=H.byteLength:typeof H.size=="number"?O=H.size:typeof H=="string"&&(O=typeof n=="function"?new n().encode(H).byteLength:H.length)),typeof O=="number"&&O>Q)throw new A("maxContentLength size of "+Q+" exceeded",A.ERR_BAD_RESPONSE,d,L)}return!U&&$&&$(),await new Promise((O,I)=>{Vf(O,I,{data:H,headers:Le.from(pe.headers),status:pe.status,statusText:pe.statusText,config:d,request:L})})}catch(J){if($&&$(),T&&T.aborted&&T.reason instanceof A){const le=T.reason;throw le.config=d,L&&(le.request=L),J!==le&&(le.cause=J),le}throw J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)?Object.assign(new A("Network Error",A.ERR_NETWORK,d,L,J&&J.response),{cause:J.cause||J}):A.from(J,J&&J.code,d,L,J&&J.response)}}},yx=new Map,Qf=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:o}=t,a=[n,o,r];let s=a.length,l=s,c,u,f=yx;for(;l--;)c=a[l],u=f.get(c),u===void 0&&f.set(c,u=l?new Map:xx(t)),f=u;return u};Qf();const xl={http:Fv,xhr:fx,fetch:{get:Qf}};k.forEach(xl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const Gc=e=>`- ${e}`,wx=e=>k.isFunction(e)||e===null||e===!1;function bx(e,t){e=k.isArray(e)?e:[e];const{length:r}=e;let n,o;const a={};for(let s=0;s<r;s++){n=e[s];let l;if(o=n,!wx(n)&&(o=xl[(l=String(n)).toLowerCase()],o===void 0))throw new A(`Unknown adapter '${l}'`);if(o&&(k.isFunction(o)||(o=o.get(t))))break;a[l||"#"+s]=o}if(!o){const s=Object.entries(a).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=r?s.length>1?`since :
`+s.map(Gc).join(`
`):" "+Gc(s[0]):"as no adapter specified";throw new A("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return o}const Kf={getAdapter:bx,adapters:xl};function di(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Zn(null,e)}function Xc(e){return di(e),e.headers=Le.from(e.headers),e.data=ui.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Kf.getAdapter(e.adapter||Xn.adapter,e)(e).then(function(n){di(e),e.response=n;try{n.data=ui.call(e,e.transformResponse,n)}finally{delete e.response}return n.headers=Le.from(n.headers),n},function(n){if(!Wf(n)&&(di(e),n&&n.response)){e.response=n.response;try{n.response.data=ui.call(e,e.transformResponse,n.response)}finally{delete e.response}n.response.headers=Le.from(n.response.headers)}return Promise.reject(n)})}const za={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{za[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Zc={};za.transitional=function(t,r,n){function o(a,s){return"[Axios v"+vl+"] Transitional option '"+a+"'"+s+(n?". "+n:"")}return(a,s,l)=>{if(t===!1)throw new A(o(s," has been removed"+(r?" in "+r:"")),A.ERR_DEPRECATED);return r&&!Zc[s]&&(Zc[s]=!0,console.warn(o(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(a,s,l):!0}};za.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function kx(e,t,r){if(typeof e!="object")throw new A("options must be an object",A.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const a=n[o],s=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(s){const l=e[a],c=l===void 0||s(l,a,e);if(c!==!0)throw new A("option "+a+" must be "+c,A.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new A("Unknown option "+a,A.ERR_BAD_OPTION)}}const Lo={assertOptions:kx,validators:za},Ge=Lo.validators;let ir=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Wc,response:new Wc}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const a=(()=>{if(!o.stack)return"";const s=o.stack.indexOf(`
`);return s===-1?"":o.stack.slice(s+1)})();try{if(!n.stack)n.stack=a;else if(a){const s=a.indexOf(`
`),l=s===-1?-1:a.indexOf(`
`,s+1),c=l===-1?"":a.slice(l+1);String(n.stack).endsWith(c)||(n.stack+=`
`+a)}}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=pr(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:a}=r;n!==void 0&&Lo.assertOptions(n,{silentJSONParsing:Ge.transitional(Ge.boolean),forcedJSONParsing:Ge.transitional(Ge.boolean),clarifyTimeoutError:Ge.transitional(Ge.boolean),legacyInterceptorReqResOrdering:Ge.transitional(Ge.boolean)},!1),o!=null&&(k.isFunction(o)?r.paramsSerializer={serialize:o}:Lo.assertOptions(o,{encode:Ge.function,serialize:Ge.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Lo.assertOptions(r,{baseUrl:Ge.spelling("baseURL"),withXsrfToken:Ge.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=a&&k.merge(a.common,a[r.method]);a&&k.forEach(["delete","get","head","post","put","patch","query","common"],w=>{delete a[w]}),r.headers=Le.concat(s,a);const l=[];let c=!0;this.interceptors.request.forEach(function(g){if(typeof g.runWhen=="function"&&g.runWhen(r)===!1)return;c=c&&g.synchronous;const x=r.transitional||hl;x&&x.legacyInterceptorReqResOrdering?l.unshift(g.fulfilled,g.rejected):l.push(g.fulfilled,g.rejected)});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let f,p=0,m;if(!c){const w=[Xc.bind(this),void 0];for(w.unshift(...l),w.push(...u),m=w.length,f=Promise.resolve(r);p<m;)f=f.then(w[p++],w[p++]);return f}m=l.length;let y=r;for(;p<m;){const w=l[p++],g=l[p++];try{y=w(y)}catch(x){g.call(this,x);break}}try{f=Xc.call(this,y)}catch(w){return Promise.reject(w)}for(p=0,m=u.length;p<m;)f=f.then(u[p++],u[p++]);return f}getUri(t){t=pr(this.defaults,t);const r=Yf(t.baseURL,t.url,t.allowAbsoluteUrls);return $f(r,t.params,t.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(t){ir.prototype[t]=function(r,n){return this.request(pr(n||{},{method:t,url:r,data:(n||{}).data}))}});k.forEach(["post","put","patch","query"],function(t){function r(n){return function(a,s,l){return this.request(pr(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}ir.prototype[t]=r(),t!=="query"&&(ir.prototype[t+"Form"]=r(!0))});let jx=class Jf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(a){r=a});const n=this;this.promise.then(o=>{if(!n._listeners)return;let a=n._listeners.length;for(;a-- >0;)n._listeners[a](o);n._listeners=null}),this.promise.then=o=>{let a;const s=new Promise(l=>{n.subscribe(l),a=l}).then(o);return s.cancel=function(){n.unsubscribe(a)},s},t(function(a,s,l){n.reason||(n.reason=new Zn(a,s,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Jf(function(o){t=o}),cancel:t}}};function Sx(e){return function(r){return e.apply(null,r)}}function Nx(e){return k.isObject(e)&&e.isAxiosError===!0}const ps={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ps).forEach(([e,t])=>{ps[t]=e});function Gf(e){const t=new ir(e),r=_f(ir.prototype.request,t);return k.extend(r,ir.prototype,t,{allOwnKeys:!0}),k.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Gf(pr(e,o))},r}const fe=Gf(Xn);fe.Axios=ir;fe.CanceledError=Zn;fe.CancelToken=jx;fe.isCancel=Wf;fe.VERSION=vl;fe.toFormData=_a;fe.AxiosError=A;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=Sx;fe.isAxiosError=Nx;fe.mergeConfig=pr;fe.AxiosHeaders=Le;fe.formToJSON=e=>Hf(k.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=Kf.getAdapter;fe.HttpStatusCode=ps;fe.default=fe;const{Axios:e0,AxiosError:t0,CanceledError:r0,isCancel:n0,CancelToken:o0,VERSION:a0,all:i0,Cancel:s0,isAxiosError:l0,spread:c0,toFormData:u0,AxiosHeaders:d0,HttpStatusCode:f0,formToJSON:p0,getAdapter:m0,mergeConfig:h0,create:g0}=fe,ms="https://asa-3mdd.onrender.com/api",X=fe.create({baseURL:ms,headers:{"Content-Type":"application/json"}});X.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});X.interceptors.response.use(e=>e,e=>{var t;return((t=e.response)==null?void 0:t.status)===401&&(localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.pathname!=="/login"&&(window.location.href="/login")),Promise.reject(e)});const sr={signup:e=>X.post("/auth/signup",e),login:e=>X.post("/auth/login",e),getMe:()=>X.get("/auth/me"),getUserById:e=>X.get(`/auth/users/${e}`),updateProfile:e=>X.put("/auth/profile",e),becomeArtist:()=>X.put("/auth/become-artist")},Te={getAll:e=>X.get("/artworks",{params:e}),getById:e=>X.get(`/artworks/${e}`),create:e=>X.post("/artworks",e),update:(e,t)=>X.put(`/artworks/${e}`,t),delete:e=>X.delete(`/artworks/${e}`),getMy:()=>X.get("/artworks/my"),getStyles:()=>X.get("/artworks/styles"),getMediums:()=>X.get("/artworks/mediums")},To={create:e=>X.post("/orders",e),getAll:()=>X.get("/orders"),getById:e=>X.get(`/orders/${e}`),updateStatus:(e,t)=>X.put(`/orders/${e}`,t),verifyPayment:e=>X.get(`/orders/verify/${e}`),getSalesOverview:()=>X.get("/orders/sales-overview")},Ex={create:e=>X.post("/reviews",e),getByArtwork:(e,t)=>X.get(`/reviews/artwork/${e}`,{params:t}),delete:e=>X.delete(`/reviews/${e}`)},Cx={image:e=>X.post("/upload",e,{headers:{"Content-Type":"multipart/form-data"}})};function Aa({artwork:e,index:t,total:r,onClose:n,onPrev:o,onNext:a}){var u,f,p,m,y,w,g,x,d,h,v,j;const{addItem:s}=Qn();if(b.useEffect(()=>{const N=E=>{E.key==="Escape"&&n(),E.key==="ArrowLeft"&&o(),E.key==="ArrowRight"&&a()};return document.addEventListener("keydown",N),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",N),document.body.style.overflow=""}},[n,o,a]),!e)return null;const l=((f=(u=e.images)==null?void 0:u[0])==null?void 0:f.url)||e.thumbnail||"",c=ze(l);return i.jsxs("div",{className:"awm-backdrop",onClick:n,children:[i.jsxs("div",{className:"awm-dialog",onClick:N=>N.stopPropagation(),children:[i.jsx("button",{className:"awm-close",onClick:n,"aria-label":"Close",children:"✕"}),i.jsxs("div",{className:"awm-stage",children:[i.jsx("button",{className:"awm-nav prev",onClick:o,"aria-label":"Previous",children:"←"}),i.jsx("div",{className:"awm-image",children:i.jsx("img",{src:c,alt:e.title,referrerPolicy:"no-referrer"})}),i.jsx("button",{className:"awm-nav next",onClick:a,"aria-label":"Next",children:"→"})]}),i.jsxs("aside",{className:"awm-panel",children:[i.jsxs("div",{className:"awm-topline",children:[i.jsx("span",{className:"awm-ref",children:e.title}),i.jsxs("span",{className:"awm-count",children:[t+1," / ",r]})]}),i.jsx("h2",{className:"awm-title",children:e.title}),i.jsxs("p",{className:"awm-artist",children:["by"," ",(p=e.artist)!=null&&p._id?i.jsx(q,{to:`/artist/${e.artist._id}`,onClick:n,children:((m=e.artist)==null?void 0:m.name)||"Unknown Artist"}):i.jsx("span",{children:((y=e.artist)==null?void 0:y.name)||"Unknown Artist"})]}),e.description&&i.jsx("p",{className:"awm-desc",children:e.description}),i.jsxs("dl",{className:"awm-meta",children:[i.jsxs("div",{children:[i.jsx("dt",{children:"Medium"}),i.jsx("dd",{children:e.medium||"—"})]}),i.jsxs("div",{children:[i.jsx("dt",{children:"Style"}),i.jsx("dd",{children:e.style||"—"})]}),i.jsxs("div",{children:[i.jsx("dt",{children:"Size"}),i.jsxs("dd",{children:[(w=e.dimensions)==null?void 0:w.width," × ",(g=e.dimensions)==null?void 0:g.height," ",(x=e.dimensions)==null?void 0:x.unit]})]})]}),i.jsxs("div",{className:"awm-price",children:[i.jsxs("span",{className:"awm-usd",children:["$",(h=(d=e.price)==null?void 0:d.usd)==null?void 0:h.toLocaleString()]}),i.jsxs("span",{className:"awm-ngn",children:["₦",(j=(v=e.price)==null?void 0:v.ngn)==null?void 0:j.toLocaleString()]})]}),i.jsxs("div",{className:"awm-actions",children:[i.jsx("button",{className:"awm-buy",disabled:e.status==="Sold",onClick:()=>{s(e),n()},children:e.status==="Sold"?"Sold":"Buy Original"}),i.jsx(q,{to:`/artwork/${e._id}`,className:"awm-detail",onClick:n,children:"View in your room (AR)"})]})]})]}),i.jsx("style",{children:`
        .awm-backdrop {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(6, 9, 22, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: asaFade 0.25s ease;
        }
        .awm-dialog {
          position: relative;
          width: 100%;
          max-width: 1080px;
          max-height: 90vh;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          background: #0c1430;
          color: #f2e9da;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(6, 9, 22, 0.6);
          animation: asaUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .awm-dialog::before,
        .awm-dialog::after {
          content: '';
          position: absolute;
          width: 26px;
          height: 26px;
          border: 2px solid rgba(242, 233, 218, 0.45);
          z-index: 4;
          pointer-events: none;
        }
        .awm-dialog::before {
          top: 16px; left: 16px;
          border-right: none; border-bottom: none;
        }
        .awm-dialog::after {
          bottom: 16px; right: 16px;
          border-left: none; border-top: none;
        }
        .awm-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(242, 233, 218, 0.12);
          color: #f2e9da;
          font-size: 0.95rem;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .awm-close:hover { background: var(--color-accent); transform: rotate(90deg); }

        .awm-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #080d22;
          padding: 32px;
        }
        .awm-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .awm-image img {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          box-shadow: 0 20px 50px rgba(6, 9, 22, 0.5);
          border-radius: 4px;
        }
        .awm-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(242, 233, 218, 0.14);
          color: #f2e9da;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          z-index: 3;
        }
        .awm-nav:hover { background: var(--color-accent); color: #f2e9da; }
        .awm-nav.prev { left: 16px; }
        .awm-nav.next { right: 16px; }

        .awm-panel {
          padding: 48px 40px 40px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        .awm-topline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-display);
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          color: rgba(242, 233, 218, 0.55);
          margin-bottom: 18px;
        }
        .awm-title {
          font-family: var(--font-display);
          font-size: 2.1rem;
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #f2e9da;
        }
        .awm-artist {
          color: rgba(242, 233, 218, 0.7);
          font-style: italic;
          margin-top: 6px;
        }
        .awm-desc {
          color: rgba(242, 233, 218, 0.7);
          font-size: 0.92rem;
          line-height: 1.7;
          margin-top: 18px;
        }
        .awm-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
          padding: 20px 0;
          border-top: 1px solid rgba(242, 233, 218, 0.16);
          border-bottom: 1px solid rgba(242, 233, 218, 0.16);
        }
        .awm-meta dt {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(242, 233, 218, 0.5);
        }
        .awm-meta dd {
          font-size: 0.9rem;
          color: #f2e9da;
          margin-top: 4px;
        }
        .awm-price {
          display: flex;
          align-items: baseline;
          gap: 14px;
          margin-top: 24px;
        }
        .awm-usd {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 400;
          color: #f2e9da;
        }
        .awm-ngn { color: rgba(242, 233, 218, 0.5); font-size: 0.95rem; }
        .awm-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
          padding-top: 28px;
        }
        .awm-buy {
          background: var(--color-accent);
          color: #f2e9da;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 15px;
          border-radius: 999px;
          transition: all var(--transition-fast);
        }
        .awm-buy:hover:not(:disabled) {
          background: var(--color-accent-light);
          transform: translateY(-1px);
        }
        .awm-buy:disabled { opacity: 0.5; cursor: not-allowed; }
        .awm-detail {
          text-align: center;
          color: rgba(242, 233, 218, 0.7);
          font-size: 0.88rem;
          font-weight: 600;
          padding: 12px;
          border: 1px solid rgba(242, 233, 218, 0.22);
          border-radius: 999px;
          transition: all var(--transition-fast);
        }
        .awm-detail:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        @media (max-width: 820px) {
          .awm-dialog {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            max-height: 92vh;
          }
          .awm-stage { padding: 20px; }
          .awm-image img { max-height: 40vh; }
          .awm-panel { padding: 28px 24px 24px; }
          .awm-title { font-size: 1.5rem; }
        }
      `})]})}function Rx({onClose:e}){const t=ot();return b.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),b.useEffect(()=>{const r=n=>{n.key==="Escape"&&e()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[e]),i.jsxs("div",{className:"auth-gate-overlay",onClick:e,children:[i.jsxs("div",{className:"auth-gate-card",onClick:r=>r.stopPropagation(),children:[i.jsx("button",{className:"auth-gate-close",onClick:e,"aria-label":"Close",children:i.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),i.jsx("div",{className:"auth-gate-icon",children:i.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",children:[i.jsx("circle",{cx:"24",cy:"24",r:"23",stroke:"var(--color-accent)",strokeWidth:"1.5",strokeDasharray:"4 4"}),i.jsx("path",{d:"M24 14v10l6 4",stroke:"var(--color-accent)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"24",cy:"24",r:"3",fill:"var(--color-accent)",opacity:"0.3"})]})}),i.jsx("h2",{className:"auth-gate-title",children:"Explore the Full Collection"}),i.jsx("p",{className:"auth-gate-desc",children:"Sign in or create an account to discover all artworks, save your favourites, and start collecting."}),i.jsxs("div",{className:"auth-gate-actions",children:[i.jsx("button",{className:"auth-gate-btn primary",onClick:()=>t("/login"),children:"Sign In"}),i.jsx("button",{className:"auth-gate-btn secondary",onClick:()=>t("/login?mode=signup"),children:"Create Account"})]}),i.jsx("p",{className:"auth-gate-hint",children:"Join a community of collectors and African artists."})]}),i.jsx("style",{children:`
        .auth-gate-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(12, 12, 14, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: authGateFadeIn 0.25s ease;
        }
        .auth-gate-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: rgba(251, 246, 236, 0.92);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(26, 20, 15, 0.1);
          border-radius: var(--radius-xl);
          padding: 48px 36px 40px;
          text-align: center;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
          animation: authGateSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .auth-gate-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(26, 20, 15, 0.06);
          color: var(--color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .auth-gate-close:hover {
          background: rgba(26, 20, 15, 0.12);
          color: var(--color-text-primary);
        }
        .auth-gate-icon {
          margin-bottom: 20px;
          animation: authGatePulse 3s ease-in-out infinite;
        }
        .auth-gate-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 10px;
        }
        .auth-gate-desc {
          color: var(--color-text-secondary);
          font-size: 0.92rem;
          line-height: 1.6;
          max-width: 320px;
          margin: 0 auto 28px;
        }
        .auth-gate-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .auth-gate-btn {
          padding: 14px 24px;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 700;
          transition: all var(--transition-fast);
          letter-spacing: 0.01em;
        }
        .auth-gate-btn.primary {
          background: var(--color-accent);
          color: #f2e9da;
        }
        .auth-gate-btn.primary:hover {
          background: var(--color-accent-dark);
          transform: translateY(-1px);
        }
        .auth-gate-btn.secondary {
          background: transparent;
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-hover);
        }
        .auth-gate-btn.secondary:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        .auth-gate-hint {
          margin-top: 20px;
          font-size: 0.78rem;
          color: var(--color-text-muted);
          letter-spacing: 0.02em;
        }
        @keyframes authGateFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes authGateSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes authGatePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `})]})}const Px=[32,26,38,24,30],_x=[-3,-14,-7,-19,-10],eu=["3 / 4","4 / 5","2 / 3","5 / 7","3 / 4","4 / 5"],zx=[{src:"/hero/art-1.png",alt:"African artwork 1",rotate:-8,x:0,y:0},{src:"/hero/art-2.png",alt:"African artwork 2",rotate:-4,x:0,y:10},{src:"/hero/art-3.png",alt:"African artwork 3",rotate:0,x:0,y:-5},{src:"/hero/art-4.png",alt:"African artwork 4",rotate:4,x:0,y:8},{src:"/hero/art-5.png",alt:"African artwork 5",rotate:8,x:0,y:0},{src:"/hero/art-6.png",alt:"African artwork 6",rotate:-6,x:0,y:14},{src:"/hero/art-7.png",alt:"African artwork 7",rotate:6,x:0,y:4}];function Ax(){const e=ot(),[t,r]=b.useState([]),[n,o]=b.useState(!0),[a,s]=b.useState("All"),[l,c]=b.useState("-createdAt"),[u,f]=b.useState(""),[p,m]=b.useState({page:1,totalPages:1,total:0}),[y,w]=b.useState(null),[g,x]=b.useState(!1),d=b.useRef(null),h=JSON.parse(localStorage.getItem("user")||"null"),v=()=>{e(h?"/create":"/login?mode=signup&role=artist")},j=b.useCallback(async(E=1)=>{o(!0);try{const S={page:E,limit:12,sort:l,search:u||void 0,style:a!=="All"?a:void 0},{data:C}=await Te.getAll(S);r(C.artworks),m({page:C.currentPage,totalPages:C.totalPages,total:C.total})}catch(S){console.error("Failed to fetch artworks:",S)}finally{o(!1)}},[l,u,a]);b.useEffect(()=>{j(1)},[j]),b.useEffect(()=>{var C;const E=((C=d.current)==null?void 0:C.querySelectorAll(".reveal-up"))||[],S=new IntersectionObserver(D=>{D.forEach(_=>{_.isIntersecting&&(_.target.classList.add("in-view"),S.unobserve(_.target))})},{threshold:.12});return E.forEach(D=>S.observe(D)),()=>S.disconnect()},[t]);const N=()=>{JSON.parse(localStorage.getItem("user")||"null")?e("/discover"):x(!0)};return i.jsxs("div",{className:"catalog-page",children:[i.jsxs("section",{className:"hero",children:[i.jsxs("span",{className:"hero-eyebrow",children:[i.jsx("span",{className:"hero-eyebrow-dot"}),"African Artists"]}),i.jsxs("h1",{className:"hero-title",children:["A living space for the ",i.jsx("em",{children:"boldest"})," African",i.jsx("br",{}),"artists & collectors"]}),i.jsx("p",{className:"hero-sub",children:"Discover original works, meet the makers, and preview every piece on your own wall with augmented reality."}),i.jsxs("div",{className:"hero-cta",children:[i.jsx("a",{href:"#collection",className:"hero-btn primary",children:"Explore the collection"}),i.jsx("button",{onClick:v,className:"hero-btn ghost",children:"Sell your art"})]}),i.jsx("div",{className:"hero-frames-group",children:zx.map((E,S)=>i.jsx("div",{className:"hero-frame",style:{"--frame-rotate":`${E.rotate}deg`,"--frame-y":`${E.y}px`,animationDelay:`${S*80}ms`},children:i.jsx("img",{src:E.src,alt:E.alt,loading:"eager"})},S))})]}),i.jsxs("section",{className:"works",id:"collection",ref:d,children:[i.jsxs("div",{className:"works-header-row",children:[i.jsxs("div",{children:[i.jsx("div",{className:"works-eyebrow-wrap",children:i.jsx("span",{className:"works-eyebrow",children:"Àṣà Collection"})}),i.jsx("h2",{className:"works-title",children:"Artworks"})]}),i.jsxs("button",{className:"works-view-all-top",onClick:N,children:["View All",i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),n?i.jsx("div",{className:"works-empty",children:i.jsx("h3",{children:"Loading…"})}):t.length===0?i.jsxs("div",{className:"works-empty",children:[i.jsx("h3",{children:"No works found"}),i.jsx("p",{children:"Check back soon for new pieces."})]}):i.jsx("div",{className:"works-stage",children:i.jsx("div",{className:"works-cols",children:Px.map((E,S)=>{const C=t.filter((_,B)=>B%5===S),D=[...C,...C];return i.jsx("div",{className:"works-col",children:i.jsx("div",{className:"works-track",style:{animationDuration:`${E}s`,animationDelay:`${_x[S]}s`},children:D.map((_,B)=>{var Q,ge;const ee=t.findIndex(se=>se._id===_._id),ue=ze(((ge=(Q=_.images)==null?void 0:Q[0])==null?void 0:ge.url)||_.thumbnail||"");return i.jsxs("button",{className:"works-tile",style:{aspectRatio:eu[ee%eu.length]},onClick:()=>w({artwork:_,index:ee}),children:[i.jsx("img",{src:ue,alt:_.title,loading:"lazy",referrerPolicy:"no-referrer"}),i.jsx("span",{className:"works-tile-label",children:_.title})]},_._id+"-"+B)})})},S)})})}),i.jsx("div",{className:"works-view-all-bottom-wrap",children:i.jsxs("button",{className:"works-view-all-bottom",onClick:N,children:["View All Artworks",i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]}),y&&i.jsx(Aa,{artwork:y.artwork,index:y.index,total:t.length,onClose:()=>w(null),onPrev:()=>w(E=>{const S=(E.index-1+t.length)%t.length;return{artwork:t[S],index:S}}),onNext:()=>w(E=>{const S=(E.index+1)%t.length;return{artwork:t[S],index:S}})}),g&&i.jsx(Rx,{onClose:()=>x(!1)}),i.jsx("style",{children:`
        .catalog-page { padding-top: 96px; }

        /* HERO */
        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 24px 0;
          text-align: center;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px 7px 12px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-text-secondary);
          animation: asaUp 0.6s ease both;
        }
        .hero-eyebrow-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--color-accent);
          animation: asaFloat 3s ease-in-out infinite;
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 6.4vw, 5.4rem);
          font-weight: 400;
          line-height: 1.04;
          color: var(--color-text-primary);
          letter-spacing: -0.01em;
          margin-top: 22px;
          animation: asaUp 0.7s ease both;
          animation-delay: 80ms;
        }
        .hero-title em {
          font-style: italic;
          color: var(--color-accent);
        }
        .hero-sub {
          max-width: 520px;
          margin: 22px auto 0;
          color: var(--color-text-secondary);
          font-size: 1.02rem;
          line-height: 1.7;
          animation: asaUp 0.7s ease both;
          animation-delay: 160ms;
        }
        .hero-cta {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
          flex-wrap: wrap;
          animation: asaUp 0.7s ease both;
          animation-delay: 240ms;
        }
        .hero-btn {
          padding: 14px 30px;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .hero-btn.primary {
          background: var(--color-ink);
          color: var(--color-cream);
        }
        .hero-btn.primary:hover { background: #2a211a; transform: translateY(-1px); }
        .hero-btn.ghost {
          background: transparent;
          border: 1px solid var(--color-border-hover);
          color: var(--color-text-primary);
        }
        .hero-btn.ghost:hover { border-color: var(--color-accent); color: var(--color-accent); }

        /* HERO FRAMES — animated group */
        .hero-frames-group {
          margin: 54px auto 0;
          width: 100%;
          max-width: 900px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 0;
          padding: 20px 0 40px;
          animation: asaUp 0.8s ease both;
          animation-delay: 300ms;
          perspective: 800px;
        }
        .hero-frame {
          flex: 0 0 auto;
          width: clamp(90px, 12vw, 145px);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 12px 40px -10px rgba(0, 0, 0, 0.35);
          transform: rotate(var(--frame-rotate)) translateY(var(--frame-y));
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s ease;
          cursor: default;
          margin: 0 -6px;
          position: relative;
          z-index: 1;
          animation: heroFrameIn 0.6s ease both;
        }
        .hero-frame:hover {
          transform: rotate(var(--frame-rotate)) translateY(calc(var(--frame-y) - 18px)) scale(1.06);
          box-shadow: 0 22px 50px -8px rgba(0, 0, 0, 0.45);
          z-index: 10;
        }
        .hero-frame img {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 3 / 4;
          object-fit: cover;
        }
        @keyframes heroFrameIn {
          from {
            opacity: 0;
            transform: rotate(var(--frame-rotate)) translateY(calc(var(--frame-y) + 30px)) scale(0.92);
          }
          to {
            opacity: 1;
            transform: rotate(var(--frame-rotate)) translateY(var(--frame-y)) scale(1);
          }
        }

        /* WORKS — dark ÀṢÀ band */
        .works {
          background: #0c0c0e;
          color: #f2e9da;
          padding: 64px 24px 48px;
          margin-top: 40px;
        }
        .works-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          padding: 0 6px;
          position: relative;
          z-index: 3;
        }
        .works-eyebrow-wrap {
          display: flex;
          justify-content: flex-start;
        }
        .works-eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 9px 16px;
          border: 1px solid rgba(242, 233, 218, 0.28);
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f2e9da;
        }
        .works-title {
          font-family: var(--font-display);
          font-size: clamp(4rem, 15.5vw, 15rem);
          font-weight: 700;
          line-height: 0.82;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #f2e9da;
          margin: 2px 0 -1.5vw;
          padding-left: 2px;
          position: relative;
          z-index: 2;
          pointer-events: none;
        }
        .works-view-all-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid rgba(242, 233, 218, 0.25);
          color: rgba(242, 233, 218, 0.75);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all var(--transition-fast);
          white-space: nowrap;
          flex-shrink: 0;
          margin-bottom: 12px;
        }
        .works-view-all-top:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        /* infinite scroll columns */
        .works-stage {
          position: relative;
          z-index: 1;
          height: 82vh;
          min-height: 640px;
          overflow: hidden;
          padding: 0 6px;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 8%, #000 86%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0, #000 8%, #000 86%, transparent 100%);
        }
        .works-cols {
          display: flex;
          gap: 26px;
          align-items: flex-start;
          height: 100%;
        }
        .works-col { flex: 1; min-width: 0; height: 100%; }
        .works-track {
          display: flex;
          flex-direction: column;
          will-change: transform;
          animation-name: asaRise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .works-col:hover .works-track { animation-play-state: paused; }
        .works-tile {
          position: relative;
          width: 100%;
          margin-bottom: 30px;
          border-radius: 5px;
          overflow: hidden;
          padding: 0;
          border: none;
          cursor: pointer;
          background: #161210;
          box-shadow: 0 20px 44px -22px rgba(0, 0, 0, 0.6);
          transition: transform 0.3s ease;
        }
        .works-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .works-tile:hover { transform: scale(1.02); }
        .works-tile-label {
          position: absolute;
          left: 10px;
          bottom: 9px;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #f2e9da;
          background: rgba(12, 12, 14, 0.55);
          backdrop-filter: blur(4px);
          padding: 4px 9px;
          border-radius: 999px;
        }
        .works-empty {
          text-align: center;
          padding: 80px 20px;
        }
        .works-empty h3 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: #f2e9da;
        }
        .works-empty p { color: rgba(242, 233, 218, 0.55); margin-top: 8px; }

        /* Bottom View All */
        .works-view-all-bottom-wrap {
          display: flex;
          justify-content: center;
          padding: 40px 0 0;
          position: relative;
          z-index: 3;
        }
        .works-view-all-bottom {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 999px;
          background: var(--color-accent);
          color: #f2e9da;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          transition: all var(--transition-fast);
          box-shadow: 0 6px 24px rgba(203, 75, 30, 0.35);
        }
        .works-view-all-bottom:hover {
          background: var(--color-accent-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(203, 75, 30, 0.45);
        }

        @media (max-width: 760px) {
          .works-stage { height: 70vh; min-height: 520px; }
          .works-col:nth-child(n+4) { display: none; }
          .hero-frames-group { gap: 0; padding: 16px 0 30px; }
          .hero-frame { width: clamp(70px, 14vw, 110px); }
        }
        @media (max-width: 520px) {
          .catalog-page { padding-top: 84px; }
          .hero { padding: 24px 18px 8px; }
          .works { padding: 44px 14px 36px; }
          .works-cols { gap: 16px; }
          .works-col:nth-child(n+3) { display: none; }
          .works-header-row { flex-direction: column; align-items: flex-start; }
          .works-view-all-top { align-self: flex-start; margin-bottom: 0; }
          .hero-frame { width: clamp(60px, 18vw, 90px); margin: 0 -4px; }
        }
      `})]})}const yo="All";function Ox(){const[e,t]=b.useState([]),[r,n]=b.useState(!0),[o,a]=b.useState([]),[s,l]=b.useState(yo),[c,u]=b.useState("-createdAt"),[f,p]=b.useState(""),[m,y]=b.useState(""),[w,g]=b.useState({page:1,totalPages:1,total:0}),[x,d]=b.useState(null),h=b.useRef(null),v=b.useRef(null);b.useEffect(()=>{Te.getStyles().then(({data:S})=>{a([yo,...S.styles||S||[]])}).catch(()=>{a([yo,"Contemporary","Traditional","Tribal","Abstract","Impressionist"])})},[]);const j=b.useCallback(async(S=1)=>{n(!0);try{const C={page:S,limit:12,sort:c,search:f||void 0,style:s!==yo?s:void 0},{data:D}=await Te.getAll(C);t(D.artworks),g({page:D.currentPage,totalPages:D.totalPages,total:D.total})}catch(C){console.error("Failed to fetch artworks:",C)}finally{n(!1)}},[c,f,s]);b.useEffect(()=>{j(1)},[j]),b.useEffect(()=>{var D;const S=((D=h.current)==null?void 0:D.querySelectorAll(".discover-card"))||[],C=new IntersectionObserver(_=>{_.forEach(B=>{B.isIntersecting&&(B.target.classList.add("in-view"),C.unobserve(B.target))})},{threshold:.08});return S.forEach(_=>C.observe(_)),()=>C.disconnect()},[e]);const N=S=>{const C=S.target.value;y(C),clearTimeout(v.current),v.current=setTimeout(()=>{p(C)},400)},E=S=>{l(S)};return i.jsxs("div",{className:"discover-page",children:[i.jsxs("section",{className:"discover-header",children:[i.jsxs("span",{className:"discover-eyebrow",children:[i.jsx("span",{className:"discover-dot"}),"Full Collection"]}),i.jsx("h1",{className:"discover-title",children:"Discover Artworks"}),i.jsx("p",{className:"discover-sub",children:"Browse, search, and filter the complete Àṣà collection of original African art."})]}),i.jsxs("section",{className:"discover-toolbar",children:[i.jsxs("div",{className:"discover-search-wrap",children:[i.jsxs("svg",{className:"discover-search-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"11",cy:"11",r:"8"}),i.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),i.jsx("input",{type:"text",className:"discover-search",placeholder:"Search by title, artist, or tag…",value:m,onChange:N}),m&&i.jsx("button",{className:"discover-search-clear",onClick:()=>{y(""),p("")},children:"×"})]}),i.jsxs("div",{className:"discover-filters",children:[i.jsx("div",{className:"discover-styles",children:o.map(S=>i.jsx("button",{className:`discover-chip ${s===S?"active":""}`,onClick:()=>E(S),children:S},S))}),i.jsxs("select",{className:"discover-sort",value:c,onChange:S=>u(S.target.value),children:[i.jsx("option",{value:"-createdAt",children:"Newest First"}),i.jsx("option",{value:"createdAt",children:"Oldest First"}),i.jsx("option",{value:"price.usd",children:"Price: Low → High"}),i.jsx("option",{value:"-price.usd",children:"Price: High → Low"})]})]})]}),!r&&i.jsx("div",{className:"discover-meta",children:i.jsxs("span",{children:[w.total," artwork",w.total!==1?"s":""," found"]})}),i.jsx("section",{className:"discover-grid-wrap",ref:h,children:r?i.jsx("div",{className:"discover-loading",children:Array.from({length:8}).map((S,C)=>i.jsxs("div",{className:"discover-skeleton",children:[i.jsx("div",{className:"skeleton discover-skel-img"}),i.jsx("div",{className:"skeleton discover-skel-title"}),i.jsx("div",{className:"skeleton discover-skel-row"})]},C))}):e.length===0?i.jsxs("div",{className:"discover-empty",children:[i.jsx("h3",{children:"No artworks found"}),i.jsx("p",{children:"Try adjusting your search or filters."})]}):i.jsx("div",{className:"discover-grid",children:e.map((S,C)=>{var ee,ue,Q,ge,se;const D=((ue=(ee=S.images)==null?void 0:ee[0])==null?void 0:ue.url)||S.thumbnail||"",_=ze(D),B=JSON.parse(localStorage.getItem("liked")||"[]").includes(S._id);return i.jsxs("article",{className:"discover-card",style:{animationDelay:`${C*50}ms`},onClick:()=>d({artwork:S,index:C}),children:[i.jsxs("div",{className:"discover-card-img",children:[i.jsx("img",{src:_,alt:S.title,loading:"lazy",referrerPolicy:"no-referrer"}),i.jsx("div",{className:"discover-card-overlay",children:i.jsx("span",{className:"discover-card-cta",children:"View Artwork"})}),B&&i.jsx("span",{className:"discover-card-heart",children:"♥"})]}),i.jsxs("div",{className:"discover-card-body",children:[i.jsx("h3",{children:S.title}),i.jsxs("div",{className:"discover-card-meta",children:[i.jsx("span",{className:"discover-card-artist",children:((Q=S.artist)==null?void 0:Q.name)||"Unknown"}),i.jsxs("span",{className:"discover-card-price",children:["$",(se=(ge=S.price)==null?void 0:ge.usd)==null?void 0:se.toLocaleString()]})]}),S.style&&i.jsx("span",{className:"discover-card-style",children:S.style})]})]},S._id)})})}),!r&&w.totalPages>1&&i.jsxs("div",{className:"discover-pagination",children:[i.jsx("button",{className:"discover-page-btn",disabled:w.page<=1,onClick:()=>j(w.page-1),children:"← Previous"}),i.jsxs("span",{className:"discover-page-info",children:["Page ",w.page," of ",w.totalPages]}),i.jsx("button",{className:"discover-page-btn",disabled:w.page>=w.totalPages,onClick:()=>j(w.page+1),children:"Next →"})]}),x&&i.jsx(Aa,{artwork:x.artwork,index:x.index,total:e.length,onClose:()=>d(null),onPrev:()=>d(S=>{const C=(S.index-1+e.length)%e.length;return{artwork:e[C],index:C}}),onNext:()=>d(S=>{const C=(S.index+1)%e.length;return{artwork:e[C],index:C}})}),i.jsx("style",{children:`
        .discover-page {
          padding: 120px 24px 80px;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Header */
        .discover-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .discover-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px 7px 12px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-text-secondary);
          animation: asaUp 0.6s ease both;
        }
        .discover-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--color-accent);
          animation: asaFloat 3s ease-in-out infinite;
        }
        .discover-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-weight: 400;
          line-height: 1.08;
          color: var(--color-text-primary);
          margin-top: 20px;
          animation: asaUp 0.7s ease both;
          animation-delay: 80ms;
        }
        .discover-sub {
          max-width: 480px;
          margin: 14px auto 0;
          color: var(--color-text-secondary);
          font-size: 1rem;
          line-height: 1.7;
          animation: asaUp 0.7s ease both;
          animation-delay: 160ms;
        }

        /* Toolbar */
        .discover-toolbar {
          margin-bottom: 16px;
          animation: asaUp 0.7s ease both;
          animation-delay: 200ms;
        }
        .discover-search-wrap {
          position: relative;
          max-width: 480px;
          margin: 0 auto 20px;
        }
        .discover-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
          pointer-events: none;
        }
        .discover-search {
          width: 100%;
          padding: 14px 44px 14px 46px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          font-size: 0.95rem;
          color: var(--color-text-primary);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .discover-search:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(203, 75, 30, 0.1);
        }
        .discover-search-clear {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 28px; height: 28px;
          border-radius: 50%;
          background: var(--color-surface);
          color: var(--color-text-secondary);
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .discover-search-clear:hover {
          background: var(--color-border-hover);
        }
        .discover-filters {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .discover-styles {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          flex: 1;
        }
        .discover-chip {
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 600;
          background: var(--color-bg-card);
          color: var(--color-text-secondary);
          border: 1px solid var(--color-border);
          transition: all var(--transition-fast);
          white-space: nowrap;
        }
        .discover-chip:hover {
          border-color: var(--color-border-hover);
          color: var(--color-text-primary);
        }
        .discover-chip.active {
          background: var(--color-ink);
          color: var(--color-cream);
          border-color: var(--color-ink);
        }
        .discover-sort {
          padding: 10px 16px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--color-text-primary);
          cursor: pointer;
          flex-shrink: 0;
        }
        .discover-sort:focus {
          outline: none;
          border-color: var(--color-accent);
        }

        /* Meta */
        .discover-meta {
          padding: 8px 4px 20px;
          font-size: 0.82rem;
          color: var(--color-text-muted);
        }

        /* Grid */
        .discover-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 28px;
        }

        /* Card */
        .discover-card {
          cursor: pointer;
          opacity: 0;
          transform: translateY(24px);
          animation: discoverCardIn 0.5s ease forwards;
        }
        .discover-card-img {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: var(--color-surface);
          border-radius: var(--radius-sm);
        }
        .discover-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }
        .discover-card:hover .discover-card-img img {
          transform: scale(1.05);
          filter: brightness(0.9);
        }
        .discover-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .discover-card:hover .discover-card-overlay { opacity: 1; }
        .discover-card-cta {
          background: var(--color-bg);
          color: var(--color-text-primary);
          font-size: 0.82rem;
          font-weight: 600;
          padding: 9px 22px;
          border-radius: 999px;
          box-shadow: var(--glass-shadow);
          transform: translateY(8px);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .discover-card:hover .discover-card-cta { transform: translateY(0); }
        .discover-card-heart {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px; height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          color: var(--color-error);
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .discover-card-body { padding: 14px 2px 4px; }
        .discover-card-body h3 {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--color-text-primary);
          line-height: 1.25;
        }
        .discover-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: 6px;
          gap: 12px;
        }
        .discover-card-artist {
          color: var(--color-text-secondary);
          font-size: 0.84rem;
          font-style: italic;
        }
        .discover-card-price {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }
        .discover-card-style {
          display: inline-block;
          margin-top: 6px;
          padding: 3px 10px;
          background: var(--color-surface);
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-text-muted);
        }

        /* Loading skeletons */
        .discover-loading {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 28px;
        }
        .discover-skeleton { display: flex; flex-direction: column; gap: 10px; }
        .discover-skel-img { aspect-ratio: 3 / 4; border-radius: var(--radius-sm); }
        .discover-skel-title { height: 18px; width: 70%; border-radius: 4px; }
        .discover-skel-row { height: 14px; width: 50%; border-radius: 4px; }

        /* Empty state */
        .discover-empty {
          text-align: center;
          padding: 80px 20px;
          grid-column: 1 / -1;
        }
        .discover-empty h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--color-text-primary);
        }
        .discover-empty p {
          color: var(--color-text-secondary);
          margin-top: 8px;
        }

        /* Pagination */
        .discover-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 48px 0 16px;
        }
        .discover-page-btn {
          padding: 10px 22px;
          border-radius: 999px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .discover-page-btn:hover:not(:disabled) {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        .discover-page-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .discover-page-info {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        @keyframes discoverCardIn {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .discover-page { padding: 100px 16px 60px; }
          .discover-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .discover-filters { flex-direction: column; align-items: stretch; }
          .discover-styles { overflow-x: auto; flex-wrap: nowrap; padding-bottom: 4px; }
        }
        @media (max-width: 400px) {
          .discover-grid { grid-template-columns: 1fr; }
        }
      `})]})}function Xf({artwork:e,index:t=0,onSelect:r}){var c,u,f,p,m;const n=((u=(c=e.images)==null?void 0:c[0])==null?void 0:u.url)||e.thumbnail||"",o=ze(n),[a,s]=b.useState(!1);b.useEffect(()=>{const y=JSON.parse(localStorage.getItem("liked")||"[]");s(y.includes(e._id))},[e._id]);const l=y=>{y.preventDefault(),y.stopPropagation();const w=JSON.parse(localStorage.getItem("liked")||"[]"),g=a?w.filter(x=>x!==e._id):[...w,e._id];localStorage.setItem("liked",JSON.stringify(g)),s(!a)};return i.jsxs("article",{className:"art-card",onClick:()=>r==null?void 0:r(e,t),role:"button",tabIndex:0,onKeyDown:y=>{y.key==="Enter"&&(r==null||r(e,t))},children:[i.jsxs("div",{className:"art-card-image",children:[i.jsx("img",{src:o,alt:e.title,loading:"lazy",referrerPolicy:"no-referrer"}),i.jsx("span",{className:"art-card-ref",children:e.title}),e.status==="Sold"&&i.jsx("span",{className:"art-card-badge sold",children:"Sold"}),i.jsx("button",{className:`like-btn ${a?"liked":""}`,onClick:l,"aria-label":"Save",children:a?"♥":"♡"}),i.jsx("div",{className:"art-card-caption",children:i.jsx("span",{className:"art-card-cta",children:"View Artwork"})})]}),i.jsxs("div",{className:"art-card-body",children:[i.jsx("h3",{className:"art-card-title",children:e.title}),i.jsxs("div",{className:"art-card-row",children:[i.jsx("span",{className:"art-card-artist",onClick:y=>{var w;(w=e.artist)!=null&&w._id&&(y.stopPropagation(),window.location.href=`/artist/${e.artist._id}`)},children:((f=e.artist)==null?void 0:f.name)||"Unknown Artist"}),i.jsxs("span",{className:"art-card-price",children:["$",(m=(p=e.price)==null?void 0:p.usd)==null?void 0:m.toLocaleString()]})]})]}),i.jsx("style",{children:`
        .art-card {
          display: flex;
          flex-direction: column;
          background: transparent;
          cursor: pointer;
          text-align: left;
          width: 100%;
        }
        .art-card-image {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: var(--color-surface);
          border-radius: var(--radius-sm);
        }
        .art-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.4s ease;
        }
        .art-card:hover .art-card-image img {
          transform: scale(1.06);
          filter: brightness(0.92);
        }
        .art-card-ref {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: var(--font-display);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: #fff;
          mix-blend-mode: difference;
          opacity: 0.9;
        }
        .art-card-badge {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          padding: 4px 14px;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .art-card-badge.sold { background: var(--color-error); color: #fff; }
        .like-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          color: var(--color-text-primary);
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          z-index: 2;
          opacity: 0;
        }
        .art-card:hover .like-btn { opacity: 1; }
        .like-btn.liked {
          color: var(--color-error);
          background: #fff;
          opacity: 1;
        }
        .like-btn:hover { transform: scale(1.12); }
        .art-card-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 14px;
          display: flex;
          justify-content: center;
          transform: translateY(120%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .art-card:hover .art-card-caption { transform: translateY(0); }
        .art-card-cta {
          background: var(--color-bg);
          color: var(--color-text-primary);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 9px 22px;
          border-radius: 999px;
          box-shadow: var(--glass-shadow);
        }
        .art-card-body { padding: 14px 2px 4px; }
        .art-card-title {
          font-family: var(--font-display);
          font-size: 1.18rem;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: 0.01em;
          color: var(--color-text-primary);
        }
        .art-card-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: 6px;
          gap: 12px;
        }
        .art-card-artist {
          color: var(--color-text-secondary);
          font-size: 0.85rem;
          font-style: italic;
        }
        .art-card-price {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }
      `})]})}function Lx(){const[e,t]=b.useState([]),[r,n]=b.useState(!0),[o,a]=b.useState(null),[s,l]=b.useState(null);b.useEffect(()=>{Te.getAll({limit:100,sort:"-createdAt"}).then(({data:p})=>t(p.artworks||[])).catch(p=>console.error("Failed to load artists:",p)).finally(()=>n(!1))},[]);const c=b.useMemo(()=>{const p=new Map;return e.forEach(m=>{const y=m.artist;y!=null&&y._id&&(p.has(y._id)||p.set(y._id,{id:y._id,name:y.name||"Unknown Artist",avatar:y.avatar||"",works:[]}),p.get(y._id).works.push(m))}),Array.from(p.values()).sort((m,y)=>y.works.length-m.works.length)},[e]),u=c.find(p=>p.id===o),f=p=>p.split(" ").map(m=>m[0]).join("").slice(0,2).toUpperCase();return i.jsxs("div",{className:"artists-page",children:[i.jsxs("header",{className:"artists-hero",children:[i.jsx("p",{className:"artists-eyebrow",children:"The Makers"}),i.jsx("h1",{className:"artists-title",children:"Explore Artists"}),i.jsx("p",{className:"artists-sub",children:"Meet the painters, sculptors and storytellers behind the collection."})]}),r?i.jsx("div",{className:"artists-grid",children:Array.from({length:6}).map((p,m)=>i.jsx("div",{className:"skeleton",style:{height:220,borderRadius:16}},m))}):c.length===0?i.jsxs("div",{className:"artists-empty",children:[i.jsx("h3",{children:"No artists yet"}),i.jsx("p",{children:"Artists appear here once works are published."})]}):i.jsx("div",{className:"artists-grid",children:c.map(p=>i.jsxs("div",{className:`artist-card ${o===p.id?"active":""}`,children:[i.jsx("div",{className:"artist-thumbs",onClick:()=>a(o===p.id?null:p.id),children:p.works.slice(0,3).map(m=>{var y,w;return i.jsx("img",{src:ze(((w=(y=m.images)==null?void 0:y[0])==null?void 0:w.url)||m.thumbnail||""),alt:"",referrerPolicy:"no-referrer"},m._id)})}),i.jsxs("div",{className:"artist-info",children:[p.avatar?i.jsx("img",{src:ze(p.avatar),alt:p.name,className:"artist-avatar-img",referrerPolicy:"no-referrer"}):i.jsx("span",{className:"artist-avatar",children:f(p.name)}),i.jsxs("div",{className:"artist-text",children:[i.jsx("h3",{className:"artist-name",children:p.name}),i.jsxs("p",{className:"artist-count",children:[p.works.length," works"]})]}),i.jsx(q,{to:`/artist/${p.id}`,className:"btn-artist-profile-link",children:"Profile →"})]})]},p.id))}),u&&i.jsxs("section",{className:"artist-works",children:[i.jsxs("h2",{className:"artist-works-title",children:["Works by ",i.jsx("span",{children:u.name})]}),i.jsx("div",{className:"works-grid",children:u.works.map((p,m)=>i.jsx(Xf,{artwork:p,index:m,onSelect:(y,w)=>l({artwork:y,index:w})},p._id))})]}),s&&u&&i.jsx(Aa,{artwork:s.artwork,index:s.index,total:u.works.length,onClose:()=>l(null),onPrev:()=>l(p=>{const m=u.works.length,y=(p.index-1+m)%m;return{artwork:u.works[y],index:y}}),onNext:()=>l(p=>{const m=u.works.length,y=(p.index+1)%m;return{artwork:u.works[y],index:y}})}),i.jsx("style",{children:`
        .artists-page { max-width: 1280px; margin: 0 auto; padding: 130px 24px 80px; }
        .artists-hero { text-align: center; margin-bottom: 48px; }
        .artists-eyebrow {
          font-family: var(--font-display);
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-accent);
        }
        .artists-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          margin-top: 10px;
          color: var(--color-text-primary);
        }
        .artists-sub {
          color: var(--color-text-secondary);
          max-width: 460px;
          margin: 14px auto 0;
          line-height: 1.7;
        }
        .artists-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        .artist-card {
          text-align: left;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-base);
        }
        .artist-card:hover { transform: translateY(-4px); box-shadow: var(--glass-shadow); }
        .artist-card.active { border-color: var(--color-accent); }
        .artist-thumbs {
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 2px;
          height: 170px;
          background: var(--color-surface);
        }
        .artist-thumbs img { width: 100%; height: 100%; object-fit: cover; }
        .artist-thumbs img:first-child { grid-row: 1 / 3; }
        .artist-info {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
        }
        .artist-text {
          flex: 1;
        }
        .artist-avatar-img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }
        .artist-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-terracotta));
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .artist-name {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .artist-count { color: var(--color-text-muted); font-size: 0.82rem; }
        .btn-artist-profile-link {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-accent);
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(203, 75, 30, 0.08);
          transition: all var(--transition-fast);
          white-space: nowrap;
        }
        .btn-artist-profile-link:hover {
          background: var(--color-accent);
          color: #f2e9da;
        }


        .artist-works {
          margin-top: 64px;
          padding-top: 40px;
          border-top: 1px solid var(--color-border);
        }
        .artist-works-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 28px;
          color: var(--color-text-primary);
        }
        .artist-works-title span { color: var(--color-accent); font-style: italic; }
        .works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 32px 24px;
        }
        .artists-empty { text-align: center; padding: 80px 20px; }
        .artists-empty h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--color-text-primary);
        }
        .artists-empty p { color: var(--color-text-muted); margin-top: 8px; }
      `})]})}function tu(){var p,m;const{id:e}=Na(),[t,r]=b.useState(null),[n,o]=b.useState([]),[a,s]=b.useState(!0),[l,c]=b.useState(null);b.useEffect(()=>{e&&(async()=>{var w,g;s(!0);try{const x=await sr.getUserById(e).catch(()=>null);(w=x==null?void 0:x.data)!=null&&w.user&&r(x.data.user);const h=(await Te.getAll({artist:e,limit:100,sort:"-createdAt"})).data.artworks||[];o(h),!((g=x==null?void 0:x.data)!=null&&g.user)&&h.length>0&&h[0].artist&&r(h[0].artist)}catch(x){console.error("Failed to load artist profile:",x)}finally{s(!1)}})()},[e]);const u=y=>(y||"Artist").split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase(),f=n.filter(y=>y.status==="Active").length;return i.jsxs("div",{className:"artist-profile-page",children:[i.jsx("div",{className:"artist-profile-back",children:i.jsx(q,{to:"/artists",children:"← Explore All Artists"})}),a?i.jsxs("div",{className:"artist-profile-loading",children:[i.jsx("div",{className:"skeleton",style:{height:260,borderRadius:20,marginBottom:40}}),i.jsx("div",{className:"artist-works-grid",children:Array.from({length:6}).map((y,w)=>i.jsx("div",{className:"skeleton",style:{aspectRatio:"3/4",borderRadius:12}},w))})]}):!t&&n.length===0?i.jsxs("div",{className:"artist-not-found",children:[i.jsx("h2",{children:"Artist Not Found"}),i.jsx("p",{children:"We couldn't find the artist you were looking for."}),i.jsx(q,{to:"/artists",className:"btn-explore",children:"Browse Artists"})]}):i.jsxs(i.Fragment,{children:[i.jsxs("header",{className:"artist-header-card",children:[i.jsxs("div",{className:"artist-header-left",children:[t!=null&&t.avatar?i.jsx("img",{src:ze(t.avatar),alt:t.name,className:"artist-hero-avatar",referrerPolicy:"no-referrer"}):i.jsx("div",{className:"artist-hero-initials",children:u(t==null?void 0:t.name)}),i.jsxs("div",{className:"artist-header-meta",children:[i.jsx("span",{className:"artist-badge",children:"African Artist"}),i.jsx("h1",{className:"artist-hero-name",children:(t==null?void 0:t.name)||"African Artist"}),(p=t==null?void 0:t.location)!=null&&p.city||(m=t==null?void 0:t.location)!=null&&m.country?i.jsxs("p",{className:"artist-hero-location",children:["📍 ",[t.location.city,t.location.country].filter(Boolean).join(", ")]}):null,(t==null?void 0:t.bio)&&i.jsx("p",{className:"artist-hero-bio",children:t.bio})]})]}),i.jsxs("div",{className:"artist-stats-block",children:[i.jsxs("div",{className:"astat",children:[i.jsx("span",{className:"astat-val",children:n.length}),i.jsx("span",{className:"astat-lbl",children:"Total Pieces"})]}),i.jsxs("div",{className:"astat",children:[i.jsx("span",{className:"astat-val",children:f}),i.jsx("span",{className:"astat-lbl",children:"Available"})]})]})]}),i.jsxs("section",{className:"artist-portfolio-section",children:[i.jsxs("div",{className:"section-heading-row",children:[i.jsxs("h2",{className:"section-title",children:["Artworks by ",i.jsx("em",{children:(t==null?void 0:t.name)||"Artist"})]}),i.jsxs("span",{className:"works-count-pill",children:[n.length," works"]})]}),n.length===0?i.jsx("div",{className:"artist-no-works",children:i.jsx("p",{children:"No artworks currently published by this artist."})}):i.jsx("div",{className:"artist-works-grid",children:n.map((y,w)=>i.jsx(Xf,{artwork:y,index:w,onSelect:(g,x)=>c({artwork:g,index:x})},y._id))})]}),l&&i.jsx(Aa,{artwork:l.artwork,index:l.index,total:n.length,onClose:()=>c(null),onPrev:()=>c(y=>{const w=n.length,g=(y.index-1+w)%w;return{artwork:n[g],index:g}}),onNext:()=>c(y=>{const w=n.length,g=(y.index+1)%w;return{artwork:n[g],index:g}})})]}),i.jsx("style",{children:`
        .artist-profile-page {
          max-width: 1280px;
          margin: 0 auto;
          padding: 110px 24px 80px;
          animation: fadeIn 0.4s ease;
        }

        .artist-profile-back {
          margin-bottom: 24px;
        }

        .artist-profile-back a {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color var(--transition-fast);
        }

        .artist-profile-back a:hover {
          color: var(--color-accent);
        }

        .artist-header-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-xl);
          padding: 40px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          backdrop-filter: blur(20px);
          margin-bottom: 48px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .artist-header-left {
          display: flex;
          align-items: flex-start;
          gap: 28px;
          max-width: 800px;
        }

        .artist-hero-avatar {
          width: 108px;
          height: 108px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--color-accent);
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(203, 75, 30, 0.25);
        }

        .artist-hero-initials {
          width: 108px;
          height: 108px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-terracotta, #b85d38));
          color: #fff;
          font-size: 2.2rem;
          font-weight: 700;
          font-family: var(--font-display);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(203, 75, 30, 0.25);
        }

        .artist-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          background: rgba(203, 75, 30, 0.1);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 8px;
        }

        .artist-hero-name {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 700;
          color: var(--color-text-primary);
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .artist-hero-location {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          margin-bottom: 14px;
        }

        .artist-hero-bio {
          color: var(--color-text-secondary);
          font-size: 1rem;
          line-height: 1.7;
          margin-top: 8px;
        }

        .artist-stats-block {
          display: flex;
          gap: 24px;
          background: var(--color-bg-card);
          padding: 18px 28px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          flex-shrink: 0;
        }

        .astat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .astat-val {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .astat-lbl {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-muted);
        }

        .artist-portfolio-section {
          margin-top: 24px;
        }

        .section-heading-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 28px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .section-title em {
          color: var(--color-accent);
          font-style: italic;
        }

        .works-count-pill {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .artist-works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 32px 24px;
        }

        .artist-not-found {
          text-align: center;
          padding: 100px 24px;
        }

        .artist-not-found h2 {
          font-family: var(--font-display);
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .artist-not-found p {
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        .btn-explore {
          display: inline-block;
          padding: 12px 28px;
          background: var(--color-accent);
          color: #f2e9da;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .artist-no-works {
          text-align: center;
          padding: 60px 24px;
          color: var(--color-text-muted);
          font-size: 1.05rem;
        }

        @media (max-width: 860px) {
          .artist-header-card {
            flex-direction: column;
            padding: 28px;
            gap: 24px;
          }
          .artist-header-left {
            flex-direction: column;
            gap: 20px;
          }
          .artist-stats-block {
            width: 100%;
            justify-content: space-around;
          }
        }
      `})]})}const Tx="modulepreload",Dx=function(e){return"/"+e},ru={},Zf=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(r.map(c=>{if(c=Dx(c),c in ru)return;ru[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Tx,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})},Ux=b.lazy(()=>Zf(()=>import("./ARView-dF4H-mYa.js"),[]));async function Ix(){var e;if(!((e=navigator.xr)!=null&&e.isSessionSupported))return!1;try{return await navigator.xr.isSessionSupported("immersive-ar")}catch{return!1}}function Fx(){var ue,Q,ge,se,V,P,T,L,$,K,J,le,pe;const{addItem:e,items:t}=Qn(),{id:r}=Na(),[n,o]=b.useState(null),[a,s]=b.useState(!0),[l,c]=b.useState(0),u=t.some(U=>U.id===r),[f,p]=b.useState(!1),[m,y]=b.useState(null),[w,g]=b.useState(""),x=b.useRef(null),[d,h]=b.useState({rating:5,title:"",comment:""}),[v,j]=b.useState(!1),[N,E]=b.useState(""),[S,C]=b.useState(""),D=JSON.parse(localStorage.getItem("user")||"null"),_=async U=>{var H,O;if(U.preventDefault(),!D){E("Sign in to leave a review");return}j(!0),E(""),C("");try{await Ex.create({artworkId:r,rating:d.rating,title:d.title,comment:d.comment}),C("Review submitted!"),h({rating:5,title:"",comment:""});const{data:I}=await Te.getById(r);o(I.artwork)}catch(I){E(((O=(H=I.response)==null?void 0:H.data)==null?void 0:O.message)||"Failed to submit review")}finally{j(!1)}};b.useEffect(()=>{Ix().then(p)},[]),b.useEffect(()=>{f&&Zf(()=>import("./ARView-dF4H-mYa.js"),[])},[f]),b.useEffect(()=>{if(m)return()=>{m.end().catch(()=>{})}},[m]);const B=async()=>{g(""),console.log("[AR] launch tapped, requesting session...");try{const U=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","anchors","light-estimation"],domOverlay:x.current?{root:x.current}:void 0});console.log("[AR] session granted"),y(U)}catch(U){console.error("[AR] requestSession failed:",U),g(`Could not start AR (${U.name||"error"}: ${U.message||""}). Make sure "Google Play Services for AR" is installed and you opened this page over HTTPS in Chrome.`)}};if(b.useEffect(()=>{(async()=>{try{const{data:H}=await Te.getById(r);o(H.artwork)}catch(H){console.error("Failed to fetch artwork:",H)}finally{s(!1)}})()},[r]),a)return i.jsx("div",{className:"detail-loading",children:i.jsx("div",{className:"skeleton",style:{width:"100%",height:500}})});if(!n)return i.jsxs("div",{className:"detail-not-found",children:[i.jsx("h2",{children:"Artwork not found"}),i.jsx(q,{to:"/",children:"Back to Catalog"})]});const ee=n.images||[];return i.jsxs("div",{className:"artwork-detail",children:[i.jsx("div",{className:"detail-back",children:i.jsx(q,{to:"/",children:"← Back to Catalog"})}),i.jsxs("div",{className:"detail-layout",children:[i.jsxs("div",{className:"detail-gallery",children:[i.jsx("div",{className:"detail-main-image",children:i.jsx("img",{src:ze(((ue=ee[l])==null?void 0:ue.url)||n.thumbnail),alt:n.title,referrerPolicy:"no-referrer"})}),i.jsxs("div",{className:"preview-actions",children:[f&&i.jsxs("button",{className:"preview-btn preview-btn-ar",onClick:B,children:["◉ Place in AR",i.jsx("small",{children:"See it on your wall at real size"})]}),i.jsxs(q,{to:`/artwork/${r}/render`,className:"preview-btn preview-btn-render",children:["✦ Photorealistic Preview",i.jsx("small",{children:"AI render in a photo of your room"})]})]}),w&&i.jsx("div",{className:"ar-error-msg",children:w}),ee.length>1&&i.jsx("div",{className:"detail-thumbnails",children:ee.map((U,H)=>i.jsx("button",{className:`thumb ${l===H?"active":""}`,onClick:()=>c(H),children:i.jsx("img",{src:ze(U.url),alt:`${n.title} ${H+1}`,referrerPolicy:"no-referrer"})},H))})]}),i.jsxs("div",{className:"detail-info",children:[i.jsxs("div",{className:"detail-header",children:[i.jsx("h1",{className:"detail-title",children:n.title}),i.jsxs("p",{className:"detail-artist",children:["by"," ",i.jsx(q,{to:`/artist/${(Q=n.artist)==null?void 0:Q._id}`,children:((ge=n.artist)==null?void 0:ge.name)||"Unknown"})]}),((se=n.artist)==null?void 0:se.location)&&i.jsxs("p",{className:"detail-location",children:[n.artist.location.city,", ",n.artist.location.country]})]}),i.jsxs("div",{className:"detail-price-section",children:[i.jsxs("span",{className:"detail-price-usd",children:["$",(P=(V=n.price)==null?void 0:V.usd)==null?void 0:P.toLocaleString()]}),i.jsxs("span",{className:"detail-price-ngn",children:["₦",(L=(T=n.price)==null?void 0:T.ngn)==null?void 0:L.toLocaleString()]}),n.status==="Active"&&i.jsx("button",{className:`btn-purchase ${u?"in-cart":""}`,onClick:()=>e(n),children:u?"In Cart ✓":"Add to Cart"}),n.status==="Sold"&&i.jsx("span",{className:"status-sold",children:"Sold"})]}),i.jsxs("div",{className:"detail-specs",children:[i.jsx("h3",{children:"Specifications"}),i.jsxs("div",{className:"specs-grid",children:[i.jsxs("div",{className:"spec",children:[i.jsx("span",{className:"spec-label",children:"Medium"}),i.jsx("span",{className:"spec-value",children:n.medium})]}),i.jsxs("div",{className:"spec",children:[i.jsx("span",{className:"spec-label",children:"Style"}),i.jsx("span",{className:"spec-value",children:n.style})]}),i.jsxs("div",{className:"spec",children:[i.jsx("span",{className:"spec-label",children:"Dimensions"}),i.jsxs("span",{className:"spec-value",children:[($=n.dimensions)==null?void 0:$.width," × ",(K=n.dimensions)==null?void 0:K.height," ",(J=n.dimensions)==null?void 0:J.unit]})]}),i.jsxs("div",{className:"spec",children:[i.jsx("span",{className:"spec-label",children:"Year"}),i.jsx("span",{className:"spec-value",children:n.yearCreated||"N/A"})]})]})]}),i.jsxs("div",{className:"detail-description",children:[i.jsx("h3",{children:"About"}),i.jsx("p",{children:n.description})]}),((le=n.tags)==null?void 0:le.length)>0&&i.jsx("div",{className:"detail-tags",children:n.tags.map((U,H)=>i.jsx("span",{className:"tag",children:U},H))}),n.culturalOrigin&&i.jsxs("div",{className:"detail-origin",children:[i.jsx("h3",{children:"Cultural Origin"}),i.jsx("p",{children:[n.culturalOrigin.country,n.culturalOrigin.region,n.culturalOrigin.tribe].filter(Boolean).join(" · ")})]})]})]}),i.jsx("div",{ref:x,className:"ar-overlay-root"}),m&&i.jsx(b.Suspense,{fallback:null,children:i.jsx(Ux,{artwork:n,session:m,overlayRoot:x.current,onClose:()=>y(null)})}),i.jsxs("section",{className:"detail-reviews",children:[i.jsx("h2",{className:"reviews-title",children:"Reviews"}),i.jsxs("form",{onSubmit:_,className:"review-form",children:[i.jsx("h3",{children:"Leave a Review"}),i.jsx("div",{className:"review-star-select",children:[1,2,3,4,5].map(U=>i.jsx("button",{type:"button",className:`star-btn ${U<=d.rating?"active":""}`,onClick:()=>h({...d,rating:U}),children:"★"},U))}),i.jsx("input",{type:"text",placeholder:"Review title (optional)",value:d.title,onChange:U=>h({...d,title:U.target.value})}),i.jsx("textarea",{placeholder:"Share your thoughts about this artwork...",rows:3,value:d.comment,onChange:U=>h({...d,comment:U.target.value})}),N&&i.jsx("div",{className:"form-error",children:N}),S&&i.jsx("div",{className:"form-success",children:S}),i.jsx("button",{type:"submit",className:"btn-submit-review",disabled:v,children:v?"Submitting...":"Submit Review"})]}),((pe=n.reviews)==null?void 0:pe.length)>0?i.jsx("div",{className:"reviews-list",children:n.reviews.map(U=>{var H;return i.jsxs("div",{className:"review-card",children:[i.jsxs("div",{className:"review-header",children:[i.jsx("strong",{children:((H=U.buyer)==null?void 0:H.name)||"Anonymous"}),i.jsx("div",{className:"review-stars",children:Array.from({length:5}).map((O,I)=>i.jsx("span",{className:`star ${I<U.rating?"filled":""}`,children:"★"},I))})]}),U.title&&i.jsx("p",{className:"review-title",children:U.title}),U.comment&&i.jsx("p",{className:"review-comment",children:U.comment}),i.jsx("span",{className:"review-date",children:new Date(U.createdAt).toLocaleDateString()})]},U._id)})}):i.jsx("p",{className:"reviews-empty",children:"No reviews yet. Purchase and receive this artwork to leave a review."})]}),i.jsx("style",{children:`
        .artwork-detail {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          animation: fadeIn 0.4s ease;
        }

        .detail-back {
          margin-bottom: 24px;
        }

        .detail-back a {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }

        .detail-back a:hover {
          color: var(--color-accent);
        }

        .detail-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .detail-main-image {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-surface);
          aspect-ratio: 4 / 3;
        }

        .detail-main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .preview-actions {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }

        .preview-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 700;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          border: 1px solid var(--color-border);
          background: var(--glass-bg);
          color: var(--color-text-primary);
        }

        .preview-btn small {
          font-size: 0.72rem;
          font-weight: 400;
          color: var(--color-text-muted);
        }

        .preview-btn-ar {
          background: var(--color-accent);
          border-color: var(--color-accent);
          color: var(--color-bg);
        }

        .preview-btn-ar small {
          color: var(--color-bg);
          opacity: 0.75;
        }

        .preview-btn-ar:hover {
          filter: brightness(1.1);
        }

        .preview-btn-render:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .ar-error-msg {
          margin-top: 10px;
          padding: 10px 14px;
          border: 1px solid rgba(232, 90, 90, 0.3);
          background: rgba(232, 90, 90, 0.1);
          border-radius: var(--radius-sm);
          color: var(--color-error, #e85a5a);
          font-size: 0.82rem;
          line-height: 1.5;
        }

        .ar-overlay-root {
          position: fixed;
          inset: 0;
          z-index: 10000;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .preview-actions {
            flex-direction: column;
          }
        }

        .detail-thumbnails {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }

        .thumb {
          width: 72px;
          height: 60px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 2px solid transparent;
          background: var(--color-surface);
          transition: border-color var(--transition-fast);
          padding: 0;
        }

        .thumb.active,
        .thumb:hover {
          border-color: var(--color-accent);
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .detail-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .detail-artist {
          color: var(--color-text-secondary);
          font-size: 1rem;
          margin-top: 8px;
        }

        .detail-artist a {
          color: var(--color-accent);
        }

        .detail-location {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          margin-top: 4px;
        }

        .detail-price-section {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 24px;
          padding: 20px 0;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }

        .detail-price-usd {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .detail-price-ngn {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        .btn-purchase {
          margin-left: auto;
          padding: 12px 32px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .btn-purchase:hover {
          background: var(--color-accent-light);
          transform: translateY(-2px);
        }

        .status-sold {
          margin-left: auto;
          padding: 8px 20px;
          background: rgba(232, 90, 90, 0.15);
          color: var(--color-error);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .detail-specs {
          margin-top: 24px;
        }

        .detail-specs h3,
        .detail-description h3,
        .detail-origin h3 {
          font-family: var(--font-display);
          font-size: 1rem;
          margin-bottom: 12px;
          color: var(--color-text-secondary);
        }

        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .spec {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .spec-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .spec-value {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .detail-description {
          margin-top: 24px;
        }

        .detail-description p {
          color: var(--color-text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .detail-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }

        .tag {
          padding: 4px 14px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        .detail-origin {
          margin-top: 20px;
        }

        .detail-origin p {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
        }

        .detail-reviews {
          margin-top: 48px;
          padding-top: 48px;
          border-top: 1px solid var(--color-border);
        }

        .reviews-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 20px;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .review-stars .star {
          color: var(--color-text-muted);
          font-size: 1rem;
        }

        .review-stars .star.filled {
          color: var(--color-accent);
        }

        .review-title {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .review-comment {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .review-date {
          display: block;
          color: var(--color-text-muted);
          font-size: 0.8rem;
          margin-top: 8px;
        }

        .reviews-empty {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          padding: 32px 0;
        }

        .review-form {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 20px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .review-form h3 {
          font-family: var(--font-display);
          font-size: 1rem;
        }

        .review-star-select {
          display: flex;
          gap: 4px;
        }

        .star-btn {
          background: none;
          font-size: 1.5rem;
          color: var(--color-text-muted);
          padding: 2px 4px;
          transition: color var(--transition-fast);
        }

        .star-btn.active {
          color: var(--color-accent);
        }

        .star-btn:hover {
          color: var(--color-accent-light);
        }

        .review-form input,
        .review-form textarea {
          padding: 10px 14px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.9rem;
        }

        .review-form input:focus,
        .review-form textarea:focus {
          border-color: var(--color-accent);
          outline: none;
        }

        .btn-submit-review {
          padding: 10px 24px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          align-self: flex-start;
        }

        .btn-submit-review:hover:not(:disabled) {
          background: var(--color-accent-light);
        }

        .form-success {
          padding: 10px 14px;
          background: rgba(58,196,106,0.1);
          border: 1px solid rgba(58,196,106,0.3);
          border-radius: var(--radius-sm);
          color: var(--color-success);
          font-size: 0.85rem;
        }

        .btn-purchase.in-cart {
          background: var(--color-success);
        }

        @media (max-width: 900px) {
          .detail-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .detail-title {
            font-size: 1.6rem;
          }
        }

        .detail-loading {
          padding: 100px 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .detail-not-found {
          padding: 150px 24px;
          text-align: center;
        }

        .detail-not-found h2 {
          font-family: var(--font-display);
          margin-bottom: 16px;
        }
      `})]})}function Mx(){const e=ot(),[t,r]=b.useState([]),[n,o]=b.useState([]),[a,s]=b.useState(null),[l,c]=b.useState("artworks"),[u,f]=b.useState(!0),[p,m]=b.useState(null);b.useEffect(()=>{(async()=>{try{const[x,d,h]=await Promise.all([Te.getMy(),To.getAll(),To.getSalesOverview().catch(()=>null)]);r(x.data.artworks),o(d.data.orders),h&&s(h.data)}catch(x){console.error("Dashboard fetch error:",x)}finally{f(!1)}})()},[]);const y=async(g,x)=>{m(g);try{await To.updateStatus(g,{status:x}),o(d=>d.map(h=>h._id===g?{...h,status:x}:h))}catch{alert("Failed to update order")}m(null)};if(u)return i.jsx("div",{className:"dash-loading",children:Array.from({length:4}).map((g,x)=>i.jsx("div",{className:"skeleton",style:{height:120,marginBottom:16}},x))});const w=[{label:"Total Artworks",value:t.length},{label:"Active Listings",value:t.filter(g=>g.status==="Active").length},{label:"Total Orders",value:n.length},{label:"Revenue (NGN)",value:`₦${((a==null?void 0:a.totalRevenue)||0).toLocaleString()}`}];return i.jsxs("div",{className:"dashboard",children:[i.jsxs("div",{className:"dash-header",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"dash-title",children:"Artist Dashboard"}),i.jsx("p",{className:"dash-subtitle",children:"Manage your artworks and orders"})]}),i.jsx("button",{className:"btn-create",onClick:()=>e("/create"),children:"+ Create Artwork"})]}),i.jsx("div",{className:"dash-stats",children:w.map((g,x)=>i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-card-value",children:g.value}),i.jsx("span",{className:"stat-card-label",children:g.label})]},x))}),i.jsxs("div",{className:"dash-tabs",children:[i.jsx("button",{className:`tab ${l==="artworks"?"active":""}`,onClick:()=>c("artworks"),children:"My Artworks"}),i.jsxs("button",{className:`tab ${l==="orders"?"active":""}`,onClick:()=>c("orders"),children:["Orders (",n.length,")"]})]}),l==="artworks"&&i.jsx("div",{className:"dash-artworks",children:t.length===0?i.jsx("div",{className:"dash-empty",children:i.jsx("p",{children:"No artworks yet. Create your first listing!"})}):i.jsxs("div",{className:"artwork-table",children:[i.jsxs("div",{className:"table-header",children:[i.jsx("span",{children:"Artwork"}),i.jsx("span",{children:"Status"}),i.jsx("span",{children:"Price"}),i.jsx("span",{children:"Views"}),i.jsx("span",{children:"Created"}),i.jsx("span",{children:"Action"})]}),t.map(g=>{var x,d,h,v;return i.jsxs("div",{className:"table-row",children:[i.jsxs("div",{className:"row-title",children:[i.jsx("div",{className:"row-thumb",children:i.jsx("img",{src:ze(((d=(x=g.images)==null?void 0:x[0])==null?void 0:d.url)||g.thumbnail),alt:"",referrerPolicy:"no-referrer"})}),i.jsx("span",{children:g.title})]}),i.jsx("span",{className:`status-badge ${g.status.toLowerCase()}`,children:g.status}),i.jsxs("span",{children:["$",(v=(h=g.price)==null?void 0:h.usd)==null?void 0:v.toLocaleString()]}),i.jsx("span",{children:g.viewCount||0}),i.jsx("span",{children:new Date(g.createdAt).toLocaleDateString()}),i.jsx("span",{children:i.jsx("button",{className:"btn-edit-art",onClick:()=>e(`/edit/${g._id}`),children:"Edit"})})]},g._id)})]})}),l==="orders"&&i.jsx("div",{className:"dash-orders",children:n.length===0?i.jsx("div",{className:"dash-empty",children:i.jsx("p",{children:"No orders yet."})}):i.jsxs("div",{className:"order-table",children:[i.jsxs("div",{className:"table-header",children:[i.jsx("span",{children:"Order ID"}),i.jsx("span",{children:"Status"}),i.jsx("span",{children:"Amount"}),i.jsx("span",{children:"Date"}),i.jsx("span",{children:"Action"})]}),n.map(g=>{var x,d;return i.jsxs("div",{className:"table-row",children:[i.jsxs("span",{className:"row-id",children:["#",g._id.slice(-8)]}),i.jsx("span",{className:`status-badge ${g.status.toLowerCase()}`,children:g.status}),i.jsxs("span",{children:["₦",(d=(x=g.totalAmount)==null?void 0:x.ngn)==null?void 0:d.toLocaleString()]}),i.jsx("span",{children:new Date(g.createdAt).toLocaleDateString()}),i.jsxs("span",{children:[(g.status==="Confirmed"||g.status==="Processing")&&i.jsx("button",{className:"btn-update-status",disabled:p===g._id,onClick:()=>y(g._id,g.status==="Confirmed"?"Processing":"Shipped"),children:p===g._id?"...":g.status==="Confirmed"?"Process":"Ship"}),g.status==="Shipped"&&i.jsx("span",{className:"status-badge shipped",children:"In Transit"})]})]},g._id)})]})}),i.jsx("style",{children:`
        .dashboard {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          animation: fadeIn 0.4s ease;
        }

        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }

        .dash-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
        }

        .dash-subtitle {
          color: var(--color-text-secondary);
          margin-top: 8px;
        }

        .btn-create {
          padding: 10px 24px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .btn-create:hover {
          background: var(--color-accent-light);
          transform: translateY(-1px);
        }

        .dash-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stat-card-value {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .stat-card-label {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .dash-tabs {
          display: flex;
          gap: 4px;
          background: var(--color-bg-card);
          border-radius: var(--radius-md);
          padding: 4px;
          margin-bottom: 24px;
        }

        .tab {
          flex: 1;
          padding: 10px 20px;
          background: transparent;
          color: var(--color-text-secondary);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .tab.active {
          background: var(--color-accent);
          color: var(--color-bg);
        }

        .tab:hover:not(.active) {
          color: var(--color-text-primary);
        }

        .artwork-table,
        .order-table {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          padding: 14px 20px;
          background: var(--color-surface);
          color: var(--color-text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .artwork-table .table-header,
        .artwork-table .table-row {
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr 0.5fr;
        }

        .order-table .table-header {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          padding: 14px 20px;
          align-items: center;
          border-top: 1px solid var(--color-border);
          font-size: 0.9rem;
          transition: background var(--transition-fast);
        }

        .order-table .table-row {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }

        .table-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .row-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .row-thumb {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: var(--color-surface);
          flex-shrink: 0;
        }

        .row-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .row-id {
          font-family: monospace;
          color: var(--color-text-muted);
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: capitalize;
          justify-self: start;
        }

        .status-badge.active {
          background: rgba(58, 196, 106, 0.15);
          color: var(--color-success);
        }

        .status-badge.draft {
          background: rgba(136, 136, 160, 0.15);
          color: var(--color-text-secondary);
        }

        .status-badge.sold {
          background: rgba(232, 90, 90, 0.15);
          color: var(--color-error);
        }

        .status-badge.pending,
        .status-badge.processing {
          background: rgba(232, 184, 58, 0.15);
          color: var(--color-warning);
        }

        .status-badge.confirmed {
          background: rgba(58, 196, 106, 0.15);
          color: var(--color-success);
        }

        .status-badge.shipped,
        .status-badge.delivered {
          background: rgba(58, 196, 106, 0.15);
          color: var(--color-success);
        }

        .status-badge.cancelled {
          background: rgba(232, 90, 90, 0.15);
          color: var(--color-error);
        }

        .btn-update-status {
          padding: 6px 16px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-update-status:hover:not(:disabled) {
          background: var(--color-accent-light);
        }

        .btn-update-status:disabled {
          opacity: 0.5;
        }

        .btn-edit-art {
          padding: 6px 14px;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-secondary);
          font-size: 0.8rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .btn-edit-art:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .dash-empty {
          text-align: center;
          padding: 48px 20px;
          color: var(--color-text-muted);
        }

        @media (max-width: 768px) {
          .table-header,
          .table-row {
            grid-template-columns: 2fr 1fr 1fr;
          }
          .table-header span:nth-child(4),
          .table-header span:nth-child(5),
          .table-row span:nth-child(4),
          .table-row span:nth-child(5) {
            display: none;
          }
        }

        .dash-loading {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px;
        }
      `})]})}function yl({onUpload:e,currentUrl:t}){const[r,n]=b.useState(t||""),[o,a]=b.useState(!1),[s,l]=b.useState(!1),c=b.useRef(null);b.useEffect(()=>{n(t||"")},[t]);const u=async m=>{var w,g;if(!m)return;if(!["image/jpeg","image/png","image/webp","image/avif"].includes(m.type)){alert("Only JPEG, PNG, WebP, and AVIF images are allowed");return}if(m.size>10*1024*1024){alert("File too large — max 10MB");return}n(URL.createObjectURL(m)),a(!0);try{const x=new FormData;x.append("image",m);const{data:d}=await Cx.image(x);e(d.url)}catch(x){alert(((g=(w=x.response)==null?void 0:w.data)==null?void 0:g.message)||"Upload failed. Please check network connection."),n(t||"")}finally{a(!1)}},f=m=>{m.preventDefault(),l(!1),u(m.dataTransfer.files[0])},p=m=>{u(m.target.files[0])};return i.jsxs("div",{className:`image-upload ${s?"drag-over":""}`,onDragOver:m=>{m.preventDefault(),l(!0)},onDragLeave:()=>l(!1),onDrop:f,onClick:()=>{var m;return(m=c.current)==null?void 0:m.click()},children:[i.jsx("input",{ref:c,type:"file",accept:"image/jpeg,image/png,image/webp,image/avif",onChange:p,hidden:!0}),o?i.jsxs("div",{className:"upload-status",children:[i.jsx("span",{className:"upload-spinner"}),i.jsx("p",{children:"Uploading..."})]}):r?i.jsxs("div",{className:"upload-preview",children:[i.jsx("img",{src:ze(r),alt:"Preview",referrerPolicy:"no-referrer"}),i.jsx("button",{className:"upload-change",onClick:m=>{m.stopPropagation(),n(""),e("")},children:"Remove"})]}):i.jsxs("div",{className:"upload-placeholder",children:[i.jsx("span",{className:"upload-icon",children:"+"}),i.jsx("p",{children:"Click or drag an image here"}),i.jsx("span",{className:"upload-hint",children:"JPEG, PNG, WebP, AVIF — max 10MB"})]}),i.jsx("style",{children:`
        .image-upload {
          border: 2px dashed var(--color-border);
          border-radius: var(--radius-md);
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          min-height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-upload:hover,
        .image-upload.drag-over {
          border-color: var(--color-accent);
          background: rgba(212, 168, 83, 0.05);
        }

        .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--color-text-muted);
        }

        .upload-icon {
          font-size: 2.5rem;
          color: var(--color-accent);
          font-weight: 300;
          line-height: 1;
        }

        .upload-hint {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        .upload-preview {
          position: relative;
          width: 100%;
        }

        .upload-preview img {
          width: 100%;
          max-height: 300px;
          object-fit: contain;
          border-radius: var(--radius-sm);
        }

        .upload-change {
          position: absolute;
          top: 8px;
          right: 8px;
          padding: 6px 14px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          transition: background var(--transition-fast);
        }

        .upload-change:hover {
          background: var(--color-error);
        }

        .upload-status {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: var(--color-text-secondary);
        }

        .upload-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--color-border);
          border-top-color: var(--color-accent);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `})]})}function Bx(){const e=ot(),[t,r]=b.useState({title:"",description:"",medium:"",style:"",priceNgn:"",priceUsd:"",height:"",width:"",imageUrl:"",status:"Active"}),[n,o]=b.useState(!1),[a,s]=b.useState("");b.useEffect(()=>{localStorage.getItem("token")||e("/login?mode=signup&role=artist")},[e]);const l=f=>{r({...t,[f.target.name]:f.target.value})},c=()=>t.imageUrl?t.title.trim()?t.description.trim()?t.medium.trim()?t.style.trim()?!t.priceNgn||Number(t.priceNgn)<=0?"Enter a valid NGN price":!t.priceUsd||Number(t.priceUsd)<=0?"Enter a valid USD price":!t.height||Number(t.height)<=0?"Enter a valid height":!t.width||Number(t.width)<=0?"Enter a valid width":"":"Style is required":"Medium is required":"Description is required":"Title is required":"Upload an image of your artwork",u=async f=>{var m,y;f.preventDefault();const p=c();if(p){s(p);return}o(!0),s("");try{if(JSON.parse(localStorage.getItem("user")||"{}").role!=="artist")try{const{data:g}=await sr.becomeArtist();localStorage.setItem("user",JSON.stringify(g.user))}catch{}await Te.create({status:t.status,title:t.title,description:t.description,medium:t.medium,style:t.style,price:{ngn:Number(t.priceNgn),usd:Number(t.priceUsd)},dimensions:{height:Number(t.height),width:Number(t.width),depth:0,unit:"cm"},images:[{url:t.imageUrl,alt:t.title}]}),e("/dashboard")}catch(w){s(((y=(m=w.response)==null?void 0:m.data)==null?void 0:y.message)||"Failed to create artwork")}finally{o(!1)}};return i.jsxs("div",{className:"create-artwork-page",children:[i.jsxs("div",{className:"create-header",children:[i.jsx("button",{className:"btn-back",onClick:()=>e("/dashboard"),children:"← Back to Dashboard"}),i.jsx("h1",{className:"create-title",children:"List New Artwork"})]}),i.jsxs("form",{onSubmit:u,className:"create-form",children:[i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{className:"section-title",children:"Artwork"}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group full",children:[i.jsx("label",{children:"Image *"}),i.jsx(yl,{currentUrl:t.imageUrl,onUpload:f=>r({...t,imageUrl:f})})]}),i.jsxs("div",{className:"form-group full",children:[i.jsx("label",{children:"Title *"}),i.jsx("input",{name:"title",value:t.title,onChange:l,placeholder:"e.g. African Sunset"})]}),i.jsxs("div",{className:"form-group full",children:[i.jsx("label",{children:"Description *"}),i.jsx("textarea",{name:"description",value:t.description,onChange:l,rows:4,placeholder:"Describe the artwork, its inspiration, and significance..."})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Medium *"}),i.jsx("input",{name:"medium",value:t.medium,onChange:l,placeholder:"e.g. Oil on Canvas"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Style *"}),i.jsx("input",{name:"style",value:t.style,onChange:l,placeholder:"e.g. Contemporary"})]})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{className:"section-title",children:"Pricing & Size"}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Price (NGN) *"}),i.jsx("input",{name:"priceNgn",type:"number",value:t.priceNgn,onChange:l,min:"0",placeholder:"e.g. 150000"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Price (USD) *"}),i.jsx("input",{name:"priceUsd",type:"number",value:t.priceUsd,onChange:l,min:"0",placeholder:"e.g. 350"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Width (cm) *"}),i.jsx("input",{name:"width",type:"number",value:t.width,onChange:l,min:"1",placeholder:"e.g. 100"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Height (cm) *"}),i.jsx("input",{name:"height",type:"number",value:t.height,onChange:l,min:"1",placeholder:"e.g. 80"})]})]}),i.jsx("p",{className:"form-hint",children:"Accurate dimensions power the AR preview at real-world size."})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{className:"section-title",children:"Listing Status"}),i.jsxs("div",{className:"status-toggle",children:[i.jsxs("button",{type:"button",className:`toggle-btn ${t.status==="Active"?"active":""}`,onClick:()=>r({...t,status:"Active"}),children:[i.jsx("span",{className:"toggle-icon",children:"✓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Active"}),i.jsx("small",{children:"Visible in catalogue immediately"})]})]}),i.jsxs("button",{type:"button",className:`toggle-btn ${t.status==="Draft"?"draft":""}`,onClick:()=>r({...t,status:"Draft"}),children:[i.jsx("span",{className:"toggle-icon",children:"✎"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Draft"}),i.jsx("small",{children:"Save as draft, publish later"})]})]})]})]}),a&&i.jsx("div",{className:"form-error",children:a}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"button",className:"btn-cancel",onClick:()=>e("/dashboard"),children:"Cancel"}),i.jsx("button",{type:"submit",className:"btn-submit-artwork",disabled:n,children:n?"Creating...":t.status==="Draft"?"Save Draft":"Publish Artwork"})]})]}),i.jsx("style",{children:`
        .create-artwork-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          animation: fadeIn 0.4s ease;
        }

        .create-header {
          margin-bottom: 24px;
        }

        .btn-back {
          background: none;
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          padding: 0;
          margin-bottom: 16px;
          transition: color var(--transition-fast);
        }

        .btn-back:hover {
          color: var(--color-accent);
        }

        .create-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
        }

        .create-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .form-section {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 24px;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-border);
          color: var(--color-accent);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .form-group input,
        .form-group textarea {
          padding: 10px 14px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.95rem;
          transition: border-color var(--transition-fast);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--color-accent);
          outline: none;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-hint {
          margin-top: 16px;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        .form-error {
          padding: 12px 16px;
          background: rgba(232, 90, 90, 0.1);
          border: 1px solid rgba(232, 90, 90, 0.3);
          border-radius: var(--radius-sm);
          color: var(--color-error);
          font-size: 0.9rem;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          justify-content: space-between;
        }

        .btn-cancel {
          padding: 12px 28px;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .btn-cancel:hover {
          border-color: var(--color-text-muted);
          color: var(--color-text-primary);
        }

        .btn-submit-artwork {
          padding: 12px 32px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .btn-submit-artwork:hover:not(:disabled) {
          background: var(--color-accent-light);
          transform: translateY(-1px);
        }

        .btn-submit-artwork:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .status-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .toggle-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: var(--color-bg-card);
          border: 2px solid var(--color-border);
          border-radius: var(--radius-md);
          text-align: left;
          transition: all var(--transition-fast);
        }

        .toggle-btn:hover {
          border-color: var(--color-text-muted);
        }

        .toggle-btn.active {
          border-color: var(--color-accent);
          background: rgba(212, 168, 83, 0.08);
        }

        .toggle-btn.draft {
          border-color: var(--color-text-muted);
          background: rgba(136, 136, 160, 0.08);
        }

        .toggle-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .toggle-btn.active .toggle-icon {
          background: var(--color-accent);
          color: var(--color-bg);
        }

        .toggle-btn strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-text-primary);
        }

        .toggle-btn small {
          display: block;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .create-title {
            font-size: 1.5rem;
          }
          .status-toggle {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function $x(){const{id:e}=Na(),t=ot(),[r,n]=b.useState({title:"",description:"",medium:"",style:"",subject:"",priceNgn:"",priceUsd:"",height:"",width:"",depth:"0",imageUrl:"",status:"Active",tags:"",yearCreated:"",country:"",region:"",tribe:"",materials:""}),[o,a]=b.useState(!0),[s,l]=b.useState(!1),[c,u]=b.useState(""),[f,p]=b.useState("update");b.useEffect(()=>{(async()=>{var x,d,h,v,j,N,E,S,C,D,_,B,ee,ue,Q,ge;try{const{data:se}=await Te.getById(e),V=se.artwork;n({title:V.title||"",description:V.description||"",medium:V.medium||"",style:V.style||"",subject:V.subject||"",priceNgn:((d=(x=V.price)==null?void 0:x.ngn)==null?void 0:d.toString())||"",priceUsd:((v=(h=V.price)==null?void 0:h.usd)==null?void 0:v.toString())||"",height:((N=(j=V.dimensions)==null?void 0:j.height)==null?void 0:N.toString())||"",width:((S=(E=V.dimensions)==null?void 0:E.width)==null?void 0:S.toString())||"",depth:((D=(C=V.dimensions)==null?void 0:C.depth)==null?void 0:D.toString())||"0",imageUrl:((B=(_=V.images)==null?void 0:_[0])==null?void 0:B.url)||"",status:V.status||"Active",tags:(V.tags||[]).join(", "),yearCreated:((ee=V.yearCreated)==null?void 0:ee.toString())||"",country:((ue=V.culturalOrigin)==null?void 0:ue.country)||"",region:((Q=V.culturalOrigin)==null?void 0:Q.region)||"",tribe:((ge=V.culturalOrigin)==null?void 0:ge.tribe)||"",materials:(V.materials||[]).join(", ")})}catch{u("Failed to load artwork")}finally{a(!1)}})()},[e]);const m=g=>n({...r,[g.target.name]:g.target.value}),y=async g=>{var x,d;g.preventDefault(),l(!0),u("");try{const h={status:f==="unpublish"?"Draft":r.status,title:r.title,description:r.description,medium:r.medium,style:r.style,subject:r.subject||void 0,price:{ngn:Number(r.priceNgn),usd:Number(r.priceUsd)},dimensions:{height:Number(r.height),width:Number(r.width),depth:Number(r.depth)||0,unit:"cm"},images:r.imageUrl?[{url:r.imageUrl,alt:r.title}]:void 0,tags:r.tags.split(",").map(v=>v.trim()).filter(Boolean),yearCreated:r.yearCreated?Number(r.yearCreated):void 0,culturalOrigin:{country:r.country||"",region:r.region||"",tribe:r.tribe||""},materials:r.materials.split(",").map(v=>v.trim()).filter(Boolean)};f==="unpublish"&&(h.status="Draft"),await Te.update(e,h),t("/dashboard")}catch(h){u(((d=(x=h.response)==null?void 0:x.data)==null?void 0:d.message)||"Failed to update artwork")}finally{l(!1)}},w=async()=>{if(window.confirm("Delete this artwork permanently?")){l(!0);try{await Te.delete(e),t("/dashboard")}catch{u("Failed to delete")}finally{l(!1)}}};return o?i.jsx("div",{className:"create-artwork-page",children:i.jsx("div",{className:"skeleton",style:{height:400}})}):i.jsxs("div",{className:"create-artwork-page",children:[i.jsxs("div",{className:"create-header",children:[i.jsx("button",{className:"btn-back",onClick:()=>t("/dashboard"),children:"← Back to Dashboard"}),i.jsx("h1",{className:"create-title",children:"Edit Artwork"})]}),i.jsxs("form",{onSubmit:y,className:"create-form",children:[i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{className:"section-title",children:"Basic Information"}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group full",children:[i.jsx("label",{children:"Title *"}),i.jsx("input",{name:"title",value:r.title,onChange:m,required:!0})]}),i.jsxs("div",{className:"form-group full",children:[i.jsx("label",{children:"Description *"}),i.jsx("textarea",{name:"description",value:r.description,onChange:m,required:!0,rows:4})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Medium *"}),i.jsx("input",{name:"medium",value:r.medium,onChange:m,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Style *"}),i.jsx("input",{name:"style",value:r.style,onChange:m,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Subject"}),i.jsx("input",{name:"subject",value:r.subject,onChange:m})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Year Created"}),i.jsx("input",{name:"yearCreated",type:"number",value:r.yearCreated,onChange:m})]})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{className:"section-title",children:"Listing Status"}),i.jsxs("div",{className:"status-toggle",children:[i.jsxs("button",{type:"button",className:`toggle-btn ${r.status==="Active"?"active":""}`,onClick:()=>n({...r,status:"Active"}),children:[i.jsx("span",{className:"toggle-icon",children:"✓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Active"}),i.jsx("small",{children:"Visible in catalogue"})]})]}),i.jsxs("button",{type:"button",className:`toggle-btn ${r.status==="Draft"?"draft":""}`,onClick:()=>n({...r,status:"Draft"}),children:[i.jsx("span",{className:"toggle-icon",children:"✎"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Draft"}),i.jsx("small",{children:"Hidden from catalogue"})]})]})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{className:"section-title",children:"Pricing"}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Price (NGN) *"}),i.jsx("input",{name:"priceNgn",type:"number",value:r.priceNgn,onChange:m,required:!0,min:"0"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Price (USD) *"}),i.jsx("input",{name:"priceUsd",type:"number",value:r.priceUsd,onChange:m,required:!0,min:"0"})]})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{className:"section-title",children:"Dimensions (cm)"}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Height *"}),i.jsx("input",{name:"height",type:"number",value:r.height,onChange:m,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Width *"}),i.jsx("input",{name:"width",type:"number",value:r.width,onChange:m,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Depth"}),i.jsx("input",{name:"depth",type:"number",value:r.depth,onChange:m})]})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{className:"section-title",children:"Image"}),i.jsx(yl,{currentUrl:r.imageUrl,onUpload:g=>n({...r,imageUrl:g})})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{className:"section-title",children:"Cultural Origin"}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Country"}),i.jsx("input",{name:"country",value:r.country,onChange:m})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Region"}),i.jsx("input",{name:"region",value:r.region,onChange:m})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Tribe"}),i.jsx("input",{name:"tribe",value:r.tribe,onChange:m})]})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{className:"section-title",children:"Additional Info"}),i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group full",children:[i.jsx("label",{children:"Tags"}),i.jsx("input",{name:"tags",value:r.tags,onChange:m,placeholder:"comma separated"})]}),i.jsxs("div",{className:"form-group full",children:[i.jsx("label",{children:"Materials"}),i.jsx("input",{name:"materials",value:r.materials,onChange:m,placeholder:"comma separated"})]})]})]}),c&&i.jsx("div",{className:"form-error",children:c}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"button",className:"btn-cancel",onClick:()=>t("/dashboard"),children:"Cancel"}),i.jsx("button",{type:"button",className:"btn-delete",onClick:w,disabled:s,children:"Delete"}),i.jsx("button",{type:"submit",className:"btn-submit-artwork",disabled:s,onClick:()=>p("update"),children:s?"Saving...":"Save Changes"})]})]}),i.jsx("style",{children:Hx})]})}const Hx=`
  .create-artwork-page { max-width: 800px; margin: 0 auto; padding: 100px 24px 60px; animation: fadeIn 0.4s ease; }
  .create-header { margin-bottom: 32px; }
  .btn-back { background: none; color: var(--color-text-secondary); font-size: 0.9rem; padding: 0; margin-bottom: 16px; }
  .btn-back:hover { color: var(--color-accent); }
  .create-title { font-family: var(--font-display); font-size: 2rem; font-weight: 700; }
  .create-form { display: flex; flex-direction: column; gap: 28px; }
  .form-section { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--radius-lg); padding: 24px; }
  .section-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 600; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--color-border); color: var(--color-accent); }
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .form-group { display: flex; flex-direction: column; gap: 6px; }
  .form-group.full { grid-column: 1 / -1; }
  .form-group label { font-size: 0.85rem; font-weight: 500; color: var(--color-text-secondary); }
  .form-group input, .form-group textarea { padding: 10px 14px; background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-sm); color: var(--color-text-primary); font-size: 0.95rem; transition: border-color var(--transition-fast); }
  .form-group input:focus, .form-group textarea:focus { border-color: var(--color-accent); outline: none; }
  .form-error { padding: 12px 16px; background: rgba(232,90,90,0.1); border: 1px solid rgba(232,90,90,0.3); border-radius: var(--radius-sm); color: var(--color-error); font-size: 0.9rem; }
  .form-actions { display: flex; gap: 12px; justify-content: flex-end; }
  .btn-cancel { padding: 12px 28px; background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-sm); color: var(--color-text-secondary); font-size: 0.95rem; font-weight: 500; }
  .btn-cancel:hover { border-color: var(--color-text-muted); color: var(--color-text-primary); }
  .btn-delete { padding: 12px 28px; background: transparent; border: 1px solid var(--color-error); border-radius: var(--radius-sm); color: var(--color-error); font-size: 0.95rem; font-weight: 500; margin-right: auto; }
  .btn-delete:hover { background: rgba(232,90,90,0.1); }
  .btn-submit-artwork { padding: 12px 32px; background: var(--color-accent); color: var(--color-bg); border-radius: var(--radius-sm); font-weight: 700; font-size: 0.95rem; }
  .btn-submit-artwork:hover:not(:disabled) { background: var(--color-accent-light); transform: translateY(-1px); }
  .btn-submit-artwork:disabled { opacity: 0.6; cursor: not-allowed; }
  .status-toggle { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .toggle-btn { display: flex; align-items: center; gap: 12px; padding: 16px; background: var(--color-bg-card); border: 2px solid var(--color-border); border-radius: var(--radius-md); text-align: left; transition: all var(--transition-fast); cursor: pointer; }
  .toggle-btn:hover { border-color: var(--color-text-muted); }
  .toggle-btn.active { border-color: var(--color-accent); background: rgba(212,168,83,0.08); }
  .toggle-btn.draft { border-color: var(--color-text-muted); background: rgba(136,136,160,0.08); }
  .toggle-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--color-surface); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
  .toggle-btn.active .toggle-icon { background: var(--color-accent); color: var(--color-bg); }
  .toggle-btn strong { display: block; font-size: 0.95rem; color: var(--color-text-primary); }
  .toggle-btn small { display: block; font-size: 0.8rem; color: var(--color-text-muted); margin-top: 2px; }
  @media (max-width: 640px) { .form-grid { grid-template-columns: 1fr; } .status-toggle { grid-template-columns: 1fr; } }
`;function Wx(){const e=ot(),[t]=Ag(),r=t.get("mode"),n=t.get("role"),[o,a]=b.useState(r!=="signup"),[s,l]=b.useState({name:"",email:"",password:"",role:n==="artist"?"artist":"buyer"}),[c,u]=b.useState(""),[f,p]=b.useState(!1);b.useEffect(()=>{const w=JSON.parse(localStorage.getItem("user")||"null"),g=localStorage.getItem("token");w&&g&&(w.role==="artist"?e("/dashboard"):e("/"))},[e]),b.useEffect(()=>{r==="signup"&&a(!1),n==="artist"&&l(w=>({...w,role:"artist"}))},[r,n]);const m=w=>{l({...s,[w.target.name]:w.target.value})},y=async w=>{var g,x,d;w.preventDefault(),u(""),p(!0);try{const h=o?sr.login:sr.signup,{data:v}=await h({email:s.email,password:s.password,...o?{}:{name:s.name,role:s.role}});localStorage.setItem("token",v.token),localStorage.setItem("user",JSON.stringify(v.user)),((g=v.user)==null?void 0:g.role)==="artist"?e("/dashboard"):e("/")}catch(h){u(((d=(x=h.response)==null?void 0:x.data)==null?void 0:d.message)||"Something went wrong. Please check your credentials.")}finally{p(!1)}};return i.jsxs("div",{className:"login-page",children:[i.jsxs("div",{className:"login-card",children:[i.jsxs("div",{className:"login-header",children:[i.jsx("span",{className:"login-icon",children:"✦"}),i.jsx("h1",{className:"login-title",children:o?"Welcome Back":"Join Heritage AR"}),i.jsx("p",{className:"login-subtitle",children:o?"Sign in to explore and collect African art.":"Create an account to start your collection."})]}),i.jsxs("form",{onSubmit:y,className:"login-form",children:[!o&&i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Full Name"}),i.jsx("input",{id:"name",name:"name",type:"text",value:s.name,onChange:m,required:!0,placeholder:"Your full name"})]}),!o&&i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"role",children:"I want to"}),i.jsxs("select",{id:"role",name:"role",value:s.role,onChange:m,children:[i.jsx("option",{value:"buyer",children:"Browse & Collect Art"}),i.jsx("option",{value:"artist",children:"Sell My Artwork"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email"}),i.jsx("input",{id:"email",name:"email",type:"email",value:s.email,onChange:m,required:!0,placeholder:"you@example.com"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"password",children:"Password"}),i.jsx("input",{id:"password",name:"password",type:"password",value:s.password,onChange:m,required:!0,placeholder:"Any password (demo mode)"})]}),c&&i.jsx("div",{className:"form-error",children:c}),i.jsx("button",{type:"submit",className:"btn-submit",disabled:f,children:f?"Loading...":o?"Sign In":"Create Account"})]}),i.jsxs("div",{className:"login-toggle",children:[i.jsx("span",{children:o?"Don't have an account?":"Already have an account?"}),i.jsx("button",{onClick:()=>{a(!o),u("")},children:o?"Sign Up":"Sign In"})]})]}),i.jsx("style",{children:`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 24px;
        }

        .login-card {
          width: 100%;
          max-width: 440px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-xl);
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-icon {
          font-size: 2rem;
          color: var(--color-accent);
        }

        .login-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          margin-top: 12px;
        }

        .login-subtitle {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          margin-top: 8px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .form-group input,
        .form-group select {
          padding: 12px 16px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.95rem;
          transition: border-color var(--transition-fast);
        }

        .form-group input:focus,
        .form-group select:focus {
          border-color: var(--color-accent);
          outline: none;
        }

        .form-error {
          padding: 10px 16px;
          background: rgba(232, 90, 90, 0.1);
          border: 1px solid rgba(232, 90, 90, 0.3);
          border-radius: var(--radius-sm);
          color: var(--color-error);
          font-size: 0.85rem;
        }

        .btn-submit {
          padding: 14px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 1rem;
          transition: all var(--transition-fast);
        }

        .btn-submit:hover:not(:disabled) {
          background: var(--color-accent-light);
          transform: translateY(-1px);
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .login-toggle {
          text-align: center;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border);
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        .login-toggle button {
          background: none;
          color: var(--color-accent);
          font-weight: 600;
          margin-left: 6px;
          font-size: 0.9rem;
        }

        .login-toggle button:hover {
          color: var(--color-accent-light);
        }
      `})]})}function Vx(){ot();const[e,t]=b.useState(JSON.parse(localStorage.getItem("user")||"null")),[r,n]=b.useState({name:"",bio:"",phone:"",country:"",city:"",avatar:""}),[o,a]=b.useState([]),[s,l]=b.useState(!1),[c,u]=b.useState(!1),[f,p]=b.useState(!1),[m,y]=b.useState("portfolio");b.useEffect(()=>{(async()=>{var h,v;try{const{data:j}=await sr.getMe(),N=j.user;if(t(N),localStorage.setItem("user",JSON.stringify(N)),n({name:N.name||"",bio:N.bio||"",phone:N.phone||"",country:((h=N.location)==null?void 0:h.country)||"",city:((v=N.location)==null?void 0:v.city)||"",avatar:N.avatar||""}),N.role==="artist"){const E=await Te.getMy();a(E.data.artworks||[])}}catch(j){console.error(j)}})()},[]);const w=async d=>{d.preventDefault(),l(!0),u(!1);try{const{data:h}=await sr.updateProfile({name:r.name,bio:r.bio,phone:r.phone,location:{country:r.country,city:r.city},avatar:r.avatar}),v=h.user||{...e,...r};t(v),localStorage.setItem("user",JSON.stringify(v)),u(!0),setTimeout(()=>u(!1),2500)}catch(h){console.error(h),alert("Failed to update profile")}l(!1)},g=async()=>{p(!0);try{const{data:d}=await sr.becomeArtist(),h=d.user;t(h),localStorage.setItem("user",JSON.stringify(h));const v=await Te.getMy();a(v.data.artworks||[]),alert("Congratulations! Your account is now an Artist account.")}catch(d){console.error(d),alert("Failed to activate artist account.")}finally{p(!1)}},x=(e==null?void 0:e.role)==="artist";return i.jsxs("div",{className:"profile-page",children:[i.jsxs("div",{className:"profile-header-banner",children:[i.jsxs("div",{className:"profile-user-info",children:[r.avatar?i.jsx("img",{src:ze(r.avatar),alt:r.name,className:"profile-avatar-img",referrerPolicy:"no-referrer"}):i.jsx("div",{className:"profile-avatar-placeholder",children:(r.name||(e==null?void 0:e.name)||"A").split(" ").map(d=>d[0]).join("").slice(0,2).toUpperCase()}),i.jsxs("div",{children:[i.jsx("div",{className:"profile-role-pill",children:x?"✦ Artist Account":"Collector Account"}),i.jsx("h1",{className:"profile-display-name",children:r.name||(e==null?void 0:e.name)||"My Profile"}),i.jsx("p",{className:"profile-email-text",children:e==null?void 0:e.email}),r.city||r.country?i.jsxs("p",{className:"profile-location-text",children:["📍 ",[r.city,r.country].filter(Boolean).join(", ")]}):null]})]}),i.jsx("div",{className:"profile-header-actions",children:x?i.jsxs(i.Fragment,{children:[(e==null?void 0:e._id)&&i.jsx(q,{to:`/artist/${e._id}`,className:"btn-view-public",children:"View Public Profile ↗"}),i.jsx(q,{to:"/create",className:"btn-create-artwork",children:"+ List Artwork"}),i.jsx(q,{to:"/dashboard",className:"btn-dash-link",children:"Dashboard"})]}):i.jsx("button",{className:"btn-become-artist",onClick:g,disabled:f,children:f?"Activating...":"Sell Art on Àṣà"})})]}),x&&i.jsxs("div",{className:"profile-tabs",children:[i.jsxs("button",{className:`ptab ${m==="portfolio"?"active":""}`,onClick:()=>y("portfolio"),children:["My Artworks Portfolio (",o.length,")"]}),i.jsx("button",{className:`ptab ${m==="settings"?"active":""}`,onClick:()=>y("settings"),children:"Account Settings"})]}),x&&m==="portfolio"?i.jsxs("div",{className:"artist-works-section",children:[i.jsxs("div",{className:"artist-stats-row",children:[i.jsxs("div",{className:"stat-box",children:[i.jsx("span",{className:"stat-val",children:o.length}),i.jsx("span",{className:"stat-lbl",children:"Total Artworks"})]}),i.jsxs("div",{className:"stat-box",children:[i.jsx("span",{className:"stat-val",children:o.filter(d=>d.status==="Active").length}),i.jsx("span",{className:"stat-lbl",children:"Active in Catalog"})]}),i.jsxs("div",{className:"stat-box",children:[i.jsx("span",{className:"stat-val",children:o.filter(d=>d.status==="Sold").length}),i.jsx("span",{className:"stat-lbl",children:"Sold"})]}),i.jsxs("div",{className:"stat-box",children:[i.jsx("span",{className:"stat-val",children:o.filter(d=>d.status==="Draft").length}),i.jsx("span",{className:"stat-lbl",children:"Drafts"})]})]}),i.jsxs("div",{className:"works-header-bar",children:[i.jsx("h2",{children:"My Created Works"}),i.jsx(q,{to:"/create",className:"btn-list-new",children:"+ List New Artwork"})]}),o.length===0?i.jsxs("div",{className:"works-empty-state",children:[i.jsx("div",{className:"empty-icon",children:"🎨"}),i.jsx("h3",{children:"No artworks listed yet"}),i.jsx("p",{children:"Upload your first original piece to start selling on the marketplace."}),i.jsx(q,{to:"/create",className:"btn-create-first",children:"List Your First Artwork"})]}):i.jsx("div",{className:"works-portfolio-grid",children:o.map(d=>{var v,j,N,E,S,C;const h=ze(((j=(v=d.images)==null?void 0:v[0])==null?void 0:j.url)||d.thumbnail||"");return i.jsxs("div",{className:"portfolio-work-card",children:[i.jsxs("div",{className:"portfolio-work-thumb",children:[i.jsx("img",{src:h,alt:d.title,referrerPolicy:"no-referrer"}),i.jsx("span",{className:`status-tag ${d.status.toLowerCase()}`,children:d.status})]}),i.jsxs("div",{className:"portfolio-work-details",children:[i.jsx("h3",{className:"work-title",children:d.title}),i.jsxs("p",{className:"work-medium",children:[d.medium," · ",d.style]}),i.jsxs("div",{className:"work-price-row",children:[i.jsxs("span",{className:"work-price-usd",children:["$",(E=(N=d.price)==null?void 0:N.usd)==null?void 0:E.toLocaleString()]}),i.jsxs("span",{className:"work-price-ngn",children:["₦",(C=(S=d.price)==null?void 0:S.ngn)==null?void 0:C.toLocaleString()]})]}),i.jsxs("div",{className:"work-actions",children:[i.jsx(q,{to:`/artwork/${d._id}`,className:"btn-work-view",children:"View"}),i.jsx(q,{to:`/edit/${d._id}`,className:"btn-work-edit",children:"Edit"})]})]})]},d._id)})})]}):i.jsxs("div",{className:"profile-layout",children:[i.jsxs("div",{className:"profile-card",children:[i.jsx("h2",{className:"card-section-title",children:"Edit Profile Information"}),i.jsxs("form",{onSubmit:w,className:"profile-form",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Profile Picture / Avatar"}),i.jsx(yl,{currentUrl:r.avatar,onUpload:d=>n({...r,avatar:d})})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Full Display Name"}),i.jsx("input",{value:r.name,onChange:d=>n({...r,name:d.target.value}),placeholder:"Your Name or Studio Name",required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Artist Biography / About You"}),i.jsx("textarea",{rows:4,value:r.bio,onChange:d=>n({...r,bio:d.target.value}),placeholder:"Tell collectors about your artistic journey, traditions, and style..."})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Contact Phone Number"}),i.jsx("input",{value:r.phone,onChange:d=>n({...r,phone:d.target.value}),placeholder:"+234 800 000 0000"})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Country"}),i.jsx("input",{value:r.country,onChange:d=>n({...r,country:d.target.value}),placeholder:"e.g. Nigeria, Ghana, Kenya"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"City"}),i.jsx("input",{value:r.city,onChange:d=>n({...r,city:d.target.value}),placeholder:"e.g. Lagos, Accra, Nairobi"})]})]}),i.jsx("button",{type:"submit",className:"btn-save",disabled:s,children:s?"Saving...":c?"Saved Successfully ✓":"Save Changes"})]})]}),i.jsxs("div",{className:"profile-sidebar-col",children:[!x&&i.jsxs("div",{className:"become-artist-card",children:[i.jsx("h3",{children:"Sell Your Artwork"}),i.jsx("p",{children:"Join our curated community of contemporary African artists and sell your pieces directly to global collectors."}),i.jsx("button",{className:"btn-upgrade-role",onClick:g,disabled:f,children:f?"Upgrading...":"Activate Artist Account"})]}),i.jsxs("div",{className:"profile-summary-box",children:[i.jsx("h3",{children:"Account Details"}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Account Type"}),i.jsx("strong",{children:x?"Artist":"Collector"})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Email Address"}),i.jsx("span",{children:e==null?void 0:e.email})]}),x&&i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Published Pieces"}),i.jsx("strong",{children:o.length})]})]})]})]}),i.jsx("style",{children:`
        .profile-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 110px 24px 80px;
          animation: fadeIn 0.4s ease;
        }

        .profile-header-banner {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-xl);
          padding: 32px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          backdrop-filter: blur(20px);
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .profile-user-info {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .profile-avatar-img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-accent);
        }

        .profile-avatar-placeholder {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-terracotta, #b85d38));
          color: #fff;
          font-size: 1.8rem;
          font-weight: 700;
          font-family: var(--font-display);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .profile-role-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-accent);
          background: rgba(203, 75, 30, 0.1);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 6px;
        }

        .profile-display-name {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-text-primary);
          line-height: 1.1;
        }

        .profile-email-text {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          margin-top: 4px;
        }

        .profile-location-text {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          margin-top: 2px;
        }

        .profile-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-view-public {
          padding: 10px 20px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-view-public:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .btn-create-artwork, .btn-list-new {
          padding: 10px 22px;
          border-radius: 999px;
          background: var(--color-accent);
          color: #f2e9da;
          font-size: 0.88rem;
          font-weight: 700;
          transition: all var(--transition-fast);
        }

        .btn-create-artwork:hover, .btn-list-new:hover {
          background: var(--color-accent-dark, #b83d12);
          transform: translateY(-1px);
        }

        .btn-dash-link {
          padding: 10px 20px;
          border-radius: 999px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-dash-link:hover {
          color: var(--color-text-primary);
          border-color: var(--color-border-hover);
        }

        .btn-become-artist {
          padding: 12px 24px;
          background: var(--color-accent);
          color: #f2e9da;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .btn-become-artist:hover {
          background: var(--color-accent-dark, #b83d12);
        }

        .profile-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 28px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 12px;
        }

        .ptab {
          padding: 10px 24px;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 600;
          background: transparent;
          color: var(--color-text-secondary);
          border: 1px solid transparent;
          transition: all var(--transition-fast);
        }

        .ptab.active {
          background: var(--color-ink);
          color: var(--color-cream);
          border-color: var(--color-ink);
        }

        .ptab:hover:not(.active) {
          color: var(--color-text-primary);
          background: var(--color-bg-card);
        }

        .artist-stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .stat-box {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-align: center;
        }

        .stat-val {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .stat-lbl {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .works-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .works-header-bar h2 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 600;
        }

        .works-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }

        .portfolio-work-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast);
        }

        .portfolio-work-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--glass-shadow);
        }

        .portfolio-work-thumb {
          position: relative;
          aspect-ratio: 4 / 3;
          background: var(--color-surface);
        }

        .portfolio-work-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-tag {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .status-tag.active { background: rgba(58, 196, 106, 0.9); color: #fff; }
        .status-tag.draft { background: rgba(136, 136, 160, 0.9); color: #fff; }
        .status-tag.sold { background: rgba(232, 90, 90, 0.9); color: #fff; }

        .portfolio-work-details {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .work-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .work-medium {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
          margin-bottom: 12px;
        }

        .work-price-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 16px;
        }

        .work-price-usd {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .work-price-ngn {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .work-actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .btn-work-view, .btn-work-edit {
          flex: 1;
          text-align: center;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-work-view {
          background: var(--color-surface);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border);
        }

        .btn-work-view:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .btn-work-edit {
          background: var(--color-accent);
          color: #f2e9da;
        }

        .btn-work-edit:hover {
          background: var(--color-accent-dark, #b83d12);
        }

        .works-empty-state {
          text-align: center;
          padding: 60px 24px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 12px;
        }

        .works-empty-state h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          margin-bottom: 8px;
        }

        .works-empty-state p {
          color: var(--color-text-secondary);
          margin-bottom: 20px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-create-first {
          display: inline-block;
          padding: 12px 28px;
          background: var(--color-accent);
          color: #f2e9da;
          border-radius: 999px;
          font-weight: 700;
        }

        .profile-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 32px;
        }

        .profile-card, .become-artist-card, .profile-summary-box {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 32px;
        }

        .card-section-title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-border);
        }

        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .profile-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .profile-form label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-secondary);
        }

        .profile-form input, .profile-form textarea {
          padding: 12px 14px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.95rem;
        }

        .profile-form input:focus, .profile-form textarea:focus {
          border-color: var(--color-accent);
          outline: none;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .btn-save {
          padding: 14px;
          background: var(--color-accent);
          color: #f2e9da;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 1rem;
          transition: all var(--transition-fast);
          margin-top: 8px;
        }

        .btn-save:hover:not(:disabled) {
          background: var(--color-accent-dark, #b83d12);
        }

        .profile-sidebar-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .become-artist-card h3, .profile-summary-box h3 {
          font-family: var(--font-display);
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .become-artist-card p {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .btn-upgrade-role {
          width: 100%;
          padding: 12px;
          background: var(--color-accent);
          color: #f2e9da;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.92rem;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid var(--color-border);
          font-size: 0.88rem;
        }

        .summary-row span {
          color: var(--color-text-secondary);
        }

        @media (max-width: 860px) {
          .profile-layout { grid-template-columns: 1fr; }
          .profile-header-banner { flex-direction: column; align-items: flex-start; }
          .form-row { grid-template-columns: 1fr; }
        }
      `})]})}function Yx(){const e=ot(),{items:t,totalNgn:r,totalUsd:n,clearCart:o}=Qn(),[a,s]=b.useState({fullName:"",phone:"",address:"",city:"",state:"",country:"Nigeria",zipCode:""}),[l,c]=b.useState(!1),[u,f]=b.useState(""),p=async m=>{var y,w;m.preventDefault(),c(!0),f("");try{const{data:g}=await To.create({items:t.map(x=>({artworkId:x.id,quantity:1})),shippingAddress:a,currency:"NGN"});o(),g.paymentUrl&&window.open(g.paymentUrl,"_blank"),e("/dashboard",{state:{orderCreated:!0}})}catch(g){f(((w=(y=g.response)==null?void 0:y.data)==null?void 0:w.message)||"Checkout failed")}finally{c(!1)}};return t.length===0?i.jsxs("div",{className:"checkout-page",children:[i.jsxs("div",{className:"checkout-empty",children:[i.jsx("h2",{children:"Your cart is empty"}),i.jsx("button",{onClick:()=>e("/"),children:"Browse Artworks"})]}),i.jsx("style",{children:nu})]}):i.jsxs("div",{className:"checkout-page",children:[i.jsx("h1",{className:"checkout-title",children:"Checkout"}),i.jsxs("div",{className:"checkout-layout",children:[i.jsxs("form",{onSubmit:p,className:"checkout-form",children:[i.jsx("h3",{children:"Shipping Information"}),i.jsxs("div",{className:"checkout-grid",children:[i.jsxs("div",{className:"form-group full",children:[i.jsx("label",{children:"Full Name"}),i.jsx("input",{name:"fullName",value:a.fullName,onChange:m=>s({...a,fullName:m.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group full",children:[i.jsx("label",{children:"Phone"}),i.jsx("input",{name:"phone",value:a.phone,onChange:m=>s({...a,phone:m.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group full",children:[i.jsx("label",{children:"Address"}),i.jsx("input",{name:"address",value:a.address,onChange:m=>s({...a,address:m.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"City"}),i.jsx("input",{name:"city",value:a.city,onChange:m=>s({...a,city:m.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"State"}),i.jsx("input",{name:"state",value:a.state,onChange:m=>s({...a,state:m.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Country"}),i.jsx("input",{name:"country",value:a.country,onChange:m=>s({...a,country:m.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"ZIP Code"}),i.jsx("input",{name:"zipCode",value:a.zipCode,onChange:m=>s({...a,zipCode:m.target.value})})]})]}),u&&i.jsx("div",{className:"form-error",children:u}),i.jsx("button",{type:"submit",className:"btn-place-order",disabled:l,children:l?"Processing...":`Place Order — ₦${r.toLocaleString()}`})]}),i.jsxs("div",{className:"checkout-summary",children:[i.jsx("h3",{children:"Order Summary"}),t.map(m=>{var y,w;return i.jsxs("div",{className:"checkout-item",children:[i.jsx("div",{className:"checkout-item-img",children:i.jsx("img",{src:ze(m.image),alt:m.title,referrerPolicy:"no-referrer"})}),i.jsxs("div",{children:[i.jsx("strong",{children:m.title}),i.jsxs("span",{className:"checkout-item-price",children:["$",(w=(y=m.price)==null?void 0:y.usd)==null?void 0:w.toLocaleString()]})]})]},m.id)}),i.jsxs("div",{className:"checkout-total",children:[i.jsx("span",{children:"Total"}),i.jsxs("strong",{children:["₦",r.toLocaleString()," ($",n.toLocaleString(),")"]})]})]})]}),i.jsx("style",{children:nu})]})}const nu=`
  .checkout-page {
    max-width: 900px; margin: 0 auto; padding: 100px 24px 60px;
    animation: fadeIn 0.4s ease;
  }
  .checkout-title {
    font-family: var(--font-display); font-size: 1.8rem; font-weight: 700;
    margin-bottom: 32px;
  }
  .checkout-layout {
    display: grid; grid-template-columns: 1fr 320px; gap: 32px;
  }
  .checkout-form {
    background: var(--glass-bg); border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg); padding: 24px;
  }
  .checkout-form h3, .checkout-summary h3 {
    font-family: var(--font-display); font-size: 1.1rem;
    margin-bottom: 20px; padding-bottom: 12px;
    border-bottom: 1px solid var(--color-border);
  }
  .checkout-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
  }
  .checkout-grid .full { grid-column: 1 / -1; }
  .checkout-grid .form-group {
    display: flex; flex-direction: column; gap: 4px;
  }
  .checkout-grid label {
    font-size: 0.8rem; color: var(--color-text-secondary);
    font-weight: 500;
  }
  .checkout-grid input {
    padding: 10px 12px; background: var(--color-bg-card);
    border: 1px solid var(--color-border); border-radius: var(--radius-sm);
    color: var(--color-text-primary); font-size: 0.9rem;
  }
  .checkout-grid input:focus {
    border-color: var(--color-accent); outline: none;
  }
  .btn-place-order {
    width: 100%; margin-top: 20px; padding: 14px;
    background: var(--color-accent); color: var(--color-bg);
    border-radius: var(--radius-sm); font-weight: 700; font-size: 1rem;
  }
  .btn-place-order:hover:not(:disabled) { background: var(--color-accent-light); }
  .btn-place-order:disabled { opacity: 0.6; }
  .checkout-summary {
    background: var(--glass-bg); border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg); padding: 24px;
    height: fit-content;
  }
  .checkout-item {
    display: flex; gap: 12px; padding: 12px 0;
    border-bottom: 1px solid var(--color-border);
  }
  .checkout-item-img {
    width: 56px; height: 56px; border-radius: var(--radius-sm);
    overflow: hidden; background: var(--color-surface); flex-shrink: 0;
  }
  .checkout-item-img img { width: 100%; height: 100%; object-fit: cover; }
  .checkout-item strong { display: block; font-size: 0.9rem; }
  .checkout-item-price { color: var(--color-accent); font-weight: 600; font-size: 0.85rem; }
  .checkout-total {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 16px; margin-top: 8px;
  }
  .checkout-total strong { font-size: 1.1rem; color: var(--color-accent); }
  .form-error {
    margin-top: 12px; padding: 10px 14px;
    background: rgba(232,90,90,0.1); border: 1px solid rgba(232,90,90,0.3);
    border-radius: var(--radius-sm); color: var(--color-error); font-size: 0.85rem;
  }
  .checkout-empty {
    text-align: center; padding: 80px 20px;
  }
  .checkout-empty h2 { font-family: var(--font-display); margin-bottom: 16px; }
  .checkout-empty button {
    padding: 12px 32px; background: var(--color-accent); color: var(--color-bg);
    border-radius: var(--radius-sm); font-weight: 700;
  }
  @media (max-width: 768px) {
    .checkout-layout { grid-template-columns: 1fr; }
  }
`,qx=60,Qx=78;function Kx(){var P,T,L,$,K,J,le,pe,U,H;const{id:e}=Na(),t=b.useRef(null),r=b.useRef(null),n=b.useRef(null),[o,a]=b.useState(null),[s,l]=b.useState(null),[c,u]=b.useState(null),[f,p]=b.useState(!1),[m,y]=b.useState("Upload a room photo to begin."),[w,g]=b.useState(""),[x,d]=b.useState(null),[h,v]=b.useState(1),[j,N]=b.useState(null);ys.useEffect(()=>{(async()=>{try{const{data:I}=await Te.getById(e);a(I.artwork)}catch{y("Failed to load artwork"),g("warn")}})()},[e]);const E=((T=(P=o==null?void 0:o.images)==null?void 0:P[0])==null?void 0:T.url)||(o==null?void 0:o.thumbnail)||"",S=ze(E),C=b.useCallback(()=>new Promise((O,I)=>{const F=new Image;F.onload=()=>{const Se=Math.min(1,1280/F.naturalWidth),Ne=document.createElement("canvas");Ne.width=F.naturalWidth*Se,Ne.height=F.naturalHeight*Se,Ne.getContext("2d").drawImage(F,0,0,Ne.width,Ne.height),O(Ne.toDataURL("image/jpeg",.9).split(",")[1])},F.onerror=()=>I(new Error("Failed to load room photo")),F.src=s}),[s]),D=b.useCallback(()=>{const O=I=>{const F=document.createElement("canvas"),G=18;F.width=I.naturalWidth+G*2,F.height=I.naturalHeight+G*2;const Se=F.getContext("2d");return Se.fillStyle="#3a2c1c",Se.fillRect(0,0,F.width,F.height),Se.fillStyle="#1c140c",Se.fillRect(G-3,G-3,I.naturalWidth+6,I.naturalHeight+6),Se.drawImage(I,G,G,I.naturalWidth,I.naturalHeight),F.toDataURL("image/png").split(",")[1]};return new Promise((I,F)=>{const G=new Image;G.crossOrigin="anonymous",G.onload=()=>{try{I(O(G))}catch{F(new Error("Failed to process artwork image"))}},G.onerror=()=>{const Se=`${ms}/render/image-proxy?url=${encodeURIComponent(S)}`;fetch(Se).then(Ne=>{if(!Ne.ok)throw new Error(`HTTP ${Ne.status}`);return Ne.blob()}).then(Ne=>{const at=URL.createObjectURL(Ne),vr=new Image;vr.onload=()=>{try{I(O(vr))}catch{F(new Error("Failed to process artwork image"))}finally{URL.revokeObjectURL(at)}},vr.onerror=()=>{URL.revokeObjectURL(at),F(new Error("Artwork image could not be loaded"))},vr.src=at}).catch(()=>F(new Error("Artwork image could not be fetched — check the image URL")))},G.src=S})},[S]),_=O=>{var F;const I=(F=O.target.files)==null?void 0:F[0];I&&(l(URL.createObjectURL(I)),u(null),d(null),v(1),y("Drag the marker to where you would hang the piece, then render."),g("ok"))},B=O=>{if(!r.current)return;r.current.setPointerCapture(O.pointerId);const I=t.current.getBoundingClientRect(),F=(x==null?void 0:x.x)??I.width/2,G=(x==null?void 0:x.y)??I.height*.46;N({dx:O.clientX-I.left-F,dy:O.clientY-I.top-G,startX:F,startY:G})},ee=O=>{if(!j||!t.current)return;const I=t.current.getBoundingClientRect();d({x:O.clientX-I.left-j.dx,y:O.clientY-I.top-j.dy})},ue=()=>{N(null)},Q=O=>{s&&(O.preventDefault(),v(I=>Math.max(.4,Math.min(2.5,I+(O.deltaY<0?.08:-.08)))))},ge=async()=>{var O;if(s){p(!0),u(null);try{const I=await C(),F=await D(),G=t.current,Se=(x==null?void 0:x.x)??G.clientWidth/2,Ne=(x==null?void 0:x.y)??G.clientHeight*.46,at=+(Se/G.clientWidth).toFixed(3),vr=+(Ne/G.clientHeight).toFixed(3),Zr=await fetch(`${ms}/render/render-room`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomBase64:I,artBase64:F,position:{x:at,y:vr},dimensionsCm:{w:Math.round(qx*h),h:Math.round(Qx*h)},mimeType:"image/jpeg"})});if(!Zr.ok){const xr=await Zr.json().catch(()=>({}));let Oa=xr.detail||xr.error;if(xr.message)try{const La=JSON.parse(xr.message);Oa=((O=La==null?void 0:La.error)==null?void 0:O.message)||xr.message}catch{Oa=xr.message}throw new Error(Oa||`Server error (HTTP ${Zr.status})`)}const wl=await Zr.json();u(`data:${wl.mimeType||"image/png"};base64,${wl.imageBase64}`),y("Rendered — photorealistic composite from Gemini."),g("ok")}catch(I){const F=I.message||String(I)||"Unknown error";F==="Failed to fetch"||F.includes("NetworkError")?y("Cannot reach the server. Make sure the backend is running on port 5050."):F.includes("GEMINI_API_KEY not configured")?y("GEMINI_API_KEY is not set in the server's .env file."):y(`Render failed: ${F}`),g("warn")}finally{p(!1)}}},se=()=>{u(null),y("Reposition the marker and render again."),g("ok")},V=()=>{const O=document.createElement("a");O.href=c,O.download=`${(o==null?void 0:o.title)||"artwork"}-on-my-wall.png`,O.click()};return i.jsxs("div",{className:"render-page",children:[i.jsxs("div",{className:"render-header",children:[i.jsx(q,{to:`/artwork/${e}`,className:"render-back",children:"← Back to artwork"}),i.jsxs("h1",{children:["View it on ",i.jsx("em",{children:"your wall"})]}),i.jsx("p",{className:"render-subtitle",children:"Photorealistic AI preview powered by Gemini"})]}),i.jsxs("div",{className:"render-layout",children:[i.jsx("div",{className:"render-stage-col",children:i.jsxs("div",{ref:t,className:"render-stage",onPointerDown:B,onPointerMove:ee,onPointerUp:ue,onWheel:Q,style:{touchAction:"none"},children:[!s&&!c&&i.jsxs("div",{className:"render-placeholder",children:[i.jsx("div",{className:"render-placeholder-icon",children:"🖼️"}),i.jsx("p",{children:"Upload a photo of your room to see how this artwork would look on your wall."}),i.jsx("button",{className:"btn-upload",onClick:()=>{var O;return(O=n.current)==null?void 0:O.click()},children:"Choose a photo"})]}),s&&i.jsx("img",{src:s,alt:"Your room",className:"render-room-img",style:{display:c?"none":"block"}}),s&&!c&&i.jsx("div",{ref:r,className:"render-marker",style:{left:(x==null?void 0:x.x)??"50%",top:(x==null?void 0:x.y)??"46%",width:`${64*h}px`,height:`${84*h}px`}}),c&&i.jsxs(i.Fragment,{children:[i.jsx("img",{src:c,alt:"Rendered result",className:"render-result-img"}),i.jsx("div",{className:"render-badge",children:"✦ Gemini render"})]}),f&&i.jsxs("div",{className:"render-loader",children:[i.jsx("div",{className:"render-spinner"}),i.jsx("p",{children:"Hanging it on your wall..."})]})]})}),i.jsxs("div",{className:"render-panel",children:[i.jsxs("div",{className:"render-group",children:[i.jsx("h3",{children:"Your space"}),i.jsx("input",{ref:n,type:"file",accept:"image/*",onChange:_,style:{display:"none"}}),i.jsx("button",{className:"render-btn",onClick:()=>{var O;return(O=n.current)==null?void 0:O.click()},disabled:!!c,children:"↑ Choose a photo of your room"}),i.jsx("p",{className:"render-hint",children:"Drag the dashed marker to position the artwork. Scroll over it to resize."})]}),i.jsx("div",{className:"render-artwork-info",children:o&&i.jsxs(i.Fragment,{children:[i.jsx("img",{src:S,alt:o.title,className:"render-artwork-thumb"}),i.jsxs("div",{children:[i.jsx("div",{className:"render-artwork-title",children:o.title}),i.jsxs("div",{className:"render-artwork-meta",children:[(L=o.dimensions)==null?void 0:L.width," × ",($=o.dimensions)==null?void 0:$.height," ",(K=o.dimensions)==null?void 0:K.unit]})]})]})}),c?i.jsxs("div",{className:"render-actions",children:[i.jsx("button",{className:"render-btn render-btn-primary",onClick:V,children:"↓ Save this preview"}),i.jsx("button",{className:"render-btn",onClick:se,children:"↻ Back to placement"})]}):i.jsx("button",{className:"render-btn render-btn-primary",onClick:ge,disabled:!s||f,children:f?"Rendering...":"✦ Render photorealistically"}),i.jsx("div",{className:`render-status ${w}`,children:m}),o&&i.jsxs("div",{className:"render-meta",children:[i.jsx("div",{className:"render-meta-title",children:o.title}),i.jsxs("div",{children:[((J=o.artist)==null?void 0:J.name)||"Unknown"," · ",o.medium]}),i.jsxs("div",{className:"render-meta-price",children:["$",(pe=(le=o.price)==null?void 0:le.usd)==null?void 0:pe.toLocaleString()," · ₦",(H=(U=o.price)==null?void 0:U.ngn)==null?void 0:H.toLocaleString()]})]})]})]}),i.jsx("style",{children:`
        .render-page {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          animation: fadeIn 0.4s ease;
        }

        .render-header {
          margin-bottom: 24px;
        }

        .render-back {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }

        .render-back:hover {
          color: var(--color-accent);
        }

        .render-header h1 {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          margin-top: 12px;
        }

        .render-header h1 em {
          color: var(--color-accent);
          font-style: italic;
        }

        .render-subtitle {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin-top: 4px;
        }

        .render-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
          align-items: start;
        }

        .render-stage-col {
          min-height: 0;
        }

        .render-panel {
          position: sticky;
          top: 100px;
        }

        .render-stage {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .render-placeholder {
          text-align: center;
          color: var(--color-text-muted);
          padding: 40px;
          max-width: 380px;
        }

        .render-placeholder-icon {
          font-size: 3rem;
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .render-placeholder p {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .btn-upload {
          padding: 10px 24px;
          background: var(--glass-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-upload:hover {
          border-color: var(--color-accent);
        }

        .render-room-img,
        .render-result-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #0e0c0a;
        }

        .render-result-img {
          z-index: 5;
        }

        .render-marker {
          position: absolute;
          border: 2px dashed var(--color-accent);
          background: rgba(212, 180, 131, 0.12);
          border-radius: 2px;
          cursor: grab;
          z-index: 4;
          touch-action: none;
          transform: translate(-50%, -50%);
          pointer-events: auto;
        }

        .render-marker::after {
          content: '⤢';
          position: absolute;
          right: -2px;
          bottom: -6px;
          color: var(--color-accent);
          font-size: 14px;
        }

        .render-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 6;
          font-size: 0.75rem;
          letter-spacing: 1px;
          background: rgba(0, 0, 0, 0.6);
          color: var(--color-accent);
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid rgba(212, 180, 131, 0.4);
        }

        .render-loader {
          position: absolute;
          inset: 0;
          z-index: 7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 16px;
          background: rgba(14, 12, 10, 0.85);
          color: var(--color-accent);
        }

        .render-spinner {
          width: 42px;
          height: 42px;
          border: 3px solid rgba(212, 180, 131, 0.4);
          border-top-color: var(--color-accent);
          border-radius: 50%;
          animation: renderSpin 0.9s linear infinite;
        }

        @keyframes renderSpin {
          to { transform: rotate(360deg); }
        }

        .render-loader p {
          font-size: 0.85rem;
        }

        .render-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .render-group h3 {
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .render-btn {
          width: 100%;
          padding: 12px 14px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-primary);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: center;
        }

        .render-btn:hover:not(:disabled) {
          border-color: var(--color-accent);
          background: var(--glass-bg);
        }

        .render-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .render-btn-primary {
          background: var(--color-accent);
          color: var(--color-bg);
          border-color: var(--color-accent);
          font-weight: 600;
        }

        .render-btn-primary:hover:not(:disabled) {
          background: var(--color-accent-light);
          border-color: var(--color-accent-light);
        }

        .render-hint {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .render-artwork-info {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: var(--color-bg-card);
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }

        .render-artwork-thumb {
          width: 48px;
          height: 48px;
          border-radius: 4px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .render-artwork-title {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .render-artwork-meta {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        .render-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .render-status {
          font-size: 0.8rem;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          line-height: 1.5;
          border: 1px solid var(--color-border);
          background: var(--color-bg-card);
          color: var(--color-text-muted);
        }

        .render-status.ok {
          border-color: rgba(127, 174, 107, 0.4);
          color: var(--color-success, #7fae6b);
        }

        .render-status.warn {
          border-color: rgba(192, 101, 58, 0.45);
          color: #e09a72;
        }

        .render-meta {
          border-top: 1px solid var(--color-border);
          padding-top: 16px;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .render-meta-title {
          color: var(--color-text-primary);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .render-meta-price {
          color: var(--color-accent);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .render-layout {
            grid-template-columns: 1fr;
          }
          .render-panel {
            position: static;
            top: auto;
          }
          .render-header h1 {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 600px) {
          .render-page {
            padding: 84px 16px 48px;
          }
          .render-stage {
            aspect-ratio: 3 / 4;
            min-height: 320px;
          }
          .render-panel {
            padding: 18px;
          }
          .render-placeholder {
            padding: 24px;
          }
          .render-placeholder-icon {
            font-size: 2.4rem;
          }
        }
      `})]})}function Jx(){return i.jsx(Og,{children:i.jsxs("div",{className:"app",children:[i.jsx(Lg,{}),i.jsx(Tg,{}),i.jsx("main",{className:"main-content",children:i.jsxs(wg,{children:[i.jsx(Ie,{path:"/",element:i.jsx(Ax,{})}),i.jsx(Ie,{path:"/discover",element:i.jsx(Ox,{})}),i.jsx(Ie,{path:"/artists",element:i.jsx(Lx,{})}),i.jsx(Ie,{path:"/artist/:id",element:i.jsx(tu,{})}),i.jsx(Ie,{path:"/artists/:id",element:i.jsx(tu,{})}),i.jsx(Ie,{path:"/artwork/:id",element:i.jsx(Fx,{})}),i.jsx(Ie,{path:"/dashboard",element:i.jsx(Mx,{})}),i.jsx(Ie,{path:"/create",element:i.jsx(Bx,{})}),i.jsx(Ie,{path:"/edit/:id",element:i.jsx($x,{})}),i.jsx(Ie,{path:"/login",element:i.jsx(Wx,{})}),i.jsx(Ie,{path:"/profile",element:i.jsx(Vx,{})}),i.jsx(Ie,{path:"/checkout",element:i.jsx(Yx,{})}),i.jsx(Ie,{path:"/artwork/:id/render",element:i.jsx(Kx,{})})]})}),i.jsx(Dg,{})]})})}fi.createRoot(document.getElementById("root")).render(i.jsx(ys.StrictMode,{children:i.jsx(Rg,{children:i.jsx(Jx,{})})}));export{b as a,ze as b,i as j,Rh as r};
