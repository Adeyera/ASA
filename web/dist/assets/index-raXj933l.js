function Hf(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Wf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vu={exports:{}},ri={},qu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var An=Symbol.for("react.element"),Vf=Symbol.for("react.portal"),qf=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),Kf=Symbol.for("react.profiler"),Yf=Symbol.for("react.provider"),Jf=Symbol.for("react.context"),Xf=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Zf=Symbol.for("react.memo"),ep=Symbol.for("react.lazy"),ds=Symbol.iterator;function tp(e){return e===null||typeof e!="object"?null:(e=ds&&e[ds]||e["@@iterator"],typeof e=="function"?e:null)}var Qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ku=Object.assign,Yu={};function $r(e,t,r){this.props=e,this.context=t,this.refs=Yu,this.updater=r||Qu}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ju(){}Ju.prototype=$r.prototype;function oa(e,t,r){this.props=e,this.context=t,this.refs=Yu,this.updater=r||Qu}var ia=oa.prototype=new Ju;ia.constructor=oa;Ku(ia,$r.prototype);ia.isPureReactComponent=!0;var fs=Array.isArray,Xu=Object.prototype.hasOwnProperty,la={current:null},Gu={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,t,r){var n,o={},i=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Xu.call(t,n)&&!Gu.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:An,type:e,key:i,ref:l,props:o,_owner:la.current}}function rp(e,t){return{$$typeof:An,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===An}function np(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var ps=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?np(""+e.key):t.toString(36)}function po(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case An:case Vf:l=!0}}if(l)return l=e,o=o(l),e=n===""?"."+Ei(l,0):n,fs(o)?(r="",e!=null&&(r=e.replace(ps,"$&/")+"/"),po(o,t,r,"",function(c){return c})):o!=null&&(aa(o)&&(o=rp(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ps,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=n===""?".":n+":",fs(e))for(var s=0;s<e.length;s++){i=e[s];var u=n+Ei(i,s);l+=po(i,t,r,u,o)}else if(u=tp(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=n+Ei(i,s++),l+=po(i,t,r,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Kn(e,t,r){if(e==null)return e;var n=[],o=0;return po(e,n,"","",function(i){return t.call(r,i,o++)}),n}function op(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},mo={transition:null},ip={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:mo,ReactCurrentOwner:la};function ec(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Kn,forEach:function(e,t,r){Kn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Kn(e,function(){t++}),t},toArray:function(e){return Kn(e,function(t){return t})||[]},only:function(e){if(!aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=$r;I.Fragment=qf;I.Profiler=Kf;I.PureComponent=oa;I.StrictMode=Qf;I.Suspense=Gf;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ip;I.act=ec;I.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Ku({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=la.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Xu.call(t,u)&&!Gu.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];n.children=s}return{$$typeof:An,type:e.type,key:o,ref:i,props:n,_owner:l}};I.createContext=function(e){return e={$$typeof:Jf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yf,_context:e},e.Consumer=e};I.createElement=Zu;I.createFactory=function(e){var t=Zu.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Xf,render:e}};I.isValidElement=aa;I.lazy=function(e){return{$$typeof:ep,_payload:{_status:-1,_result:e},_init:op}};I.memo=function(e,t){return{$$typeof:Zf,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=mo.transition;mo.transition={};try{e()}finally{mo.transition=t}};I.unstable_act=ec;I.useCallback=function(e,t){return Oe.current.useCallback(e,t)};I.useContext=function(e){return Oe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};I.useEffect=function(e,t){return Oe.current.useEffect(e,t)};I.useId=function(){return Oe.current.useId()};I.useImperativeHandle=function(e,t,r){return Oe.current.useImperativeHandle(e,t,r)};I.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Oe.current.useMemo(e,t)};I.useReducer=function(e,t,r){return Oe.current.useReducer(e,t,r)};I.useRef=function(e){return Oe.current.useRef(e)};I.useState=function(e){return Oe.current.useState(e)};I.useSyncExternalStore=function(e,t,r){return Oe.current.useSyncExternalStore(e,t,r)};I.useTransition=function(){return Oe.current.useTransition()};I.version="18.3.1";qu.exports=I;var S=qu.exports;const sa=Wf(S),lp=Hf({__proto__:null,default:sa},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=S,sp=Symbol.for("react.element"),up=Symbol.for("react.fragment"),cp=Object.prototype.hasOwnProperty,dp=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fp={key:!0,ref:!0,__self:!0,__source:!0};function tc(e,t,r){var n,o={},i=null,l=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)cp.call(t,n)&&!fp.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:sp,type:e,key:i,ref:l,props:o,_owner:dp.current}}ri.Fragment=up;ri.jsx=tc;ri.jsxs=tc;Vu.exports=ri;var a=Vu.exports,nl={},rc={exports:{}},We={},nc={exports:{}},oc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,A){var L=R.length;R.push(A);e:for(;0<L;){var F=L-1>>>1,W=R[F];if(0<o(W,A))R[F]=A,R[L]=W,L=F;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var A=R[0],L=R.pop();if(L!==A){R[0]=L;e:for(var F=0,W=R.length,V=W>>>1;F<V;){var re=2*(F+1)-1,ae=R[re],ge=re+1,C=R[ge];if(0>o(ae,L))ge<W&&0>o(C,ae)?(R[F]=C,R[ge]=L,F=ge):(R[F]=ae,R[re]=L,F=re);else if(ge<W&&0>o(C,L))R[F]=C,R[ge]=L,F=ge;else break e}}return A}function o(R,A){var L=R.sortIndex-A.sortIndex;return L!==0?L:R.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,m=null,p=3,x=!1,w=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var A=r(c);A!==null;){if(A.callback===null)n(c);else if(A.startTime<=R)n(c),A.sortIndex=A.expirationTime,t(u,A);else break;A=r(c)}}function b(R){if(v=!1,g(R),!w)if(r(u)!==null)w=!0,he(j);else{var A=r(c);A!==null&&$(b,A.startTime-R)}}function j(R,A){w=!1,v&&(v=!1,f(O),O=-1),x=!0;var L=p;try{for(g(A),m=r(u);m!==null&&(!(m.expirationTime>A)||R&&!q());){var F=m.callback;if(typeof F=="function"){m.callback=null,p=m.priorityLevel;var W=F(m.expirationTime<=A);A=e.unstable_now(),typeof W=="function"?m.callback=W:m===r(u)&&n(u),g(A)}else n(u);m=r(u)}if(m!==null)var V=!0;else{var re=r(c);re!==null&&$(b,re.startTime-A),V=!1}return V}finally{m=null,p=L,x=!1}}var E=!1,_=null,O=-1,B=5,D=-1;function q(){return!(e.unstable_now()-D<B)}function ce(){if(_!==null){var R=e.unstable_now();D=R;var A=!0;try{A=_(!0,R)}finally{A?ke():(E=!1,_=null)}}else E=!1}var ke;if(typeof h=="function")ke=function(){h(ce)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Fe=ie.port2;ie.port1.onmessage=ce,ke=function(){Fe.postMessage(null)}}else ke=function(){y(ce,0)};function he(R){_=R,E||(E=!0,ke())}function $(R,A){O=y(function(){R(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,he(j))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var L=p;p=A;try{return R()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,A){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=p;p=R;try{return A()}finally{p=L}},e.unstable_scheduleCallback=function(R,A,L){var F=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?F+L:F):L=F,R){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=L+W,R={id:d++,callback:A,priorityLevel:R,startTime:L,expirationTime:W,sortIndex:-1},L>F?(R.sortIndex=L,t(c,R),r(u)===null&&R===r(c)&&(v?(f(O),O=-1):v=!0,$(b,L-F))):(R.sortIndex=W,t(u,R),w||x||(w=!0,he(j))),R},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(R){var A=p;return function(){var L=p;p=A;try{return R.apply(this,arguments)}finally{p=L}}}})(oc);nc.exports=oc;var pp=nc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=S,He=pp;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ic=new Set,gn={};function dr(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(gn[e]=t,e=0;e<t.length;e++)ic.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,hp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ms={},hs={};function gp(e){return ol.call(hs,e)?!0:ol.call(ms,e)?!1:hp.test(e)?hs[e]=!0:(ms[e]=!0,!1)}function vp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xp(e,t,r,n){if(t===null||typeof t>"u"||vp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,r,n,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var ua=/[\-:]([a-z])/g;function ca(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ua,ca);we[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ua,ca);we[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ua,ca);we[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function da(e,t,r,n){var o=we.hasOwnProperty(t)?we[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xp(t,r,o,n)&&(r=null),n||o===null?gp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Nt=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yn=Symbol.for("react.element"),gr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),fa=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),lc=Symbol.for("react.provider"),ac=Symbol.for("react.context"),pa=Symbol.for("react.forward_ref"),ll=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),ma=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),sc=Symbol.for("react.offscreen"),gs=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=gs&&e[gs]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Ci;function rn(e){if(Ci===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ci=t&&t[1]||""}return`
`+Ci+e}var Ri=!1;function _i(e,t){if(!e||Ri)return"";Ri=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=n.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Ri=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?rn(e):""}function yp(e){switch(e.tag){case 5:return rn(e.type);case 16:return rn("Lazy");case 13:return rn("Suspense");case 19:return rn("SuspenseList");case 0:case 2:case 15:return e=_i(e.type,!1),e;case 11:return e=_i(e.type.render,!1),e;case 1:return e=_i(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case gr:return"Portal";case il:return"Profiler";case fa:return"StrictMode";case ll:return"Suspense";case al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ac:return(e.displayName||"Context")+".Consumer";case lc:return(e._context.displayName||"Context")+".Provider";case pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ma:return t=e.displayName||null,t!==null?t:sl(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return sl(e(t))}catch{}}return null}function wp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(t);case 8:return t===fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kp(e){var t=uc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jn(e){e._valueTracker||(e._valueTracker=kp(e))}function cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=uc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ul(e,t){var r=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function vs(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ht(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dc(e,t){t=t.checked,t!=null&&da(e,"checked",t,!1)}function cl(e,t){dc(e,t);var r=Ht(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,r):t.hasOwnProperty("defaultValue")&&dl(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xs(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function dl(e,t,r){(t!=="number"||_o(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var nn=Array.isArray;function Rr(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ht(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ys(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(nn(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ht(r)}}function fc(e,t){var r=Ht(t.value),n=Ht(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xn,mc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xn=Xn||document.createElement("div"),Xn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var an={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bp=["Webkit","ms","Moz","O"];Object.keys(an).forEach(function(e){bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),an[t]=an[e]})});function hc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||an.hasOwnProperty(e)&&an[e]?(""+t).trim():t+"px"}function gc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=hc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var Sp=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Sp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,_r=null,Pr=null;function ks(e){if(e=In(e)){if(typeof vl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ai(t),vl(e.stateNode,e.type,t))}}function vc(e){_r?Pr?Pr.push(e):Pr=[e]:_r=e}function xc(){if(_r){var e=_r,t=Pr;if(Pr=_r=null,ks(e),t)for(e=0;e<t.length;e++)ks(t[e])}}function yc(e,t){return e(t)}function wc(){}var Pi=!1;function kc(e,t,r){if(Pi)return e(t,r);Pi=!0;try{return yc(e,t,r)}finally{Pi=!1,(_r!==null||Pr!==null)&&(wc(),xc())}}function xn(e,t){var r=e.stateNode;if(r===null)return null;var n=ai(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var xl=!1;if(kt)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){xl=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{xl=!1}function jp(e,t,r,n,o,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(d){this.onError(d)}}var sn=!1,Po=null,Oo=!1,yl=null,Np={onError:function(e){sn=!0,Po=e}};function Ep(e,t,r,n,o,i,l,s,u){sn=!1,Po=null,jp.apply(Np,arguments)}function Cp(e,t,r,n,o,i,l,s,u){if(Ep.apply(this,arguments),sn){if(sn){var c=Po;sn=!1,Po=null}else throw Error(N(198));Oo||(Oo=!0,yl=c)}}function fr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function bc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bs(e){if(fr(e)!==e)throw Error(N(188))}function Rp(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return bs(o),e;if(i===n)return bs(o),t;i=i.sibling}throw Error(N(188))}if(r.return!==n.return)r=o,n=i;else{for(var l=!1,s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function Sc(e){return e=Rp(e),e!==null?jc(e):null}function jc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jc(e);if(t!==null)return t;e=e.sibling}return null}var Nc=He.unstable_scheduleCallback,Ss=He.unstable_cancelCallback,_p=He.unstable_shouldYield,Pp=He.unstable_requestPaint,le=He.unstable_now,Op=He.unstable_getCurrentPriorityLevel,ga=He.unstable_ImmediatePriority,Ec=He.unstable_UserBlockingPriority,zo=He.unstable_NormalPriority,zp=He.unstable_LowPriority,Cc=He.unstable_IdlePriority,ni=null,mt=null;function Tp(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:Dp,Lp=Math.log,Ap=Math.LN2;function Dp(e){return e>>>=0,e===0?32:31-(Lp(e)/Ap|0)|0}var Gn=64,Zn=4194304;function on(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function To(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var s=l&~o;s!==0?n=on(s):(i&=l,i!==0&&(n=on(i)))}else l=r&~o,l!==0?n=on(l):i!==0&&(n=on(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-it(t),o=1<<r,n|=e[r],t&=~o;return n}function Up(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ip(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-it(i),s=1<<l,u=o[l];u===-1?(!(s&r)||s&n)&&(o[l]=Up(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rc(){var e=Gn;return Gn<<=1,!(Gn&4194240)&&(Gn=64),e}function Oi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Dn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=r}function Fp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-it(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function va(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-it(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var H=0;function _c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pc,xa,Oc,zc,Tc,kl=!1,eo=[],Lt=null,At=null,Dt=null,yn=new Map,wn=new Map,_t=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(t.pointerId)}}function Yr(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=In(t),t!==null&&xa(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Bp(e,t,r,n,o){switch(t){case"focusin":return Lt=Yr(Lt,e,t,r,n,o),!0;case"dragenter":return At=Yr(At,e,t,r,n,o),!0;case"mouseover":return Dt=Yr(Dt,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return yn.set(i,Yr(yn.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,wn.set(i,Yr(wn.get(i)||null,e,t,r,n,o)),!0}return!1}function Lc(e){var t=Gt(e.target);if(t!==null){var r=fr(t);if(r!==null){if(t=r.tag,t===13){if(t=bc(r),t!==null){e.blockedOn=t,Tc(e.priority,function(){Oc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);gl=n,r.target.dispatchEvent(n),gl=null}else return t=In(r),t!==null&&xa(t),e.blockedOn=r,!1;t.shift()}return!0}function Ns(e,t,r){ho(e)&&r.delete(t)}function $p(){kl=!1,Lt!==null&&ho(Lt)&&(Lt=null),At!==null&&ho(At)&&(At=null),Dt!==null&&ho(Dt)&&(Dt=null),yn.forEach(Ns),wn.forEach(Ns)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,$p)))}function kn(e){function t(o){return Jr(o,e)}if(0<eo.length){Jr(eo[0],e);for(var r=1;r<eo.length;r++){var n=eo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Lt!==null&&Jr(Lt,e),At!==null&&Jr(At,e),Dt!==null&&Jr(Dt,e),yn.forEach(t),wn.forEach(t),r=0;r<_t.length;r++)n=_t[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<_t.length&&(r=_t[0],r.blockedOn===null);)Lc(r),r.blockedOn===null&&_t.shift()}var Or=Nt.ReactCurrentBatchConfig,Lo=!0;function Hp(e,t,r,n){var o=H,i=Or.transition;Or.transition=null;try{H=1,ya(e,t,r,n)}finally{H=o,Or.transition=i}}function Wp(e,t,r,n){var o=H,i=Or.transition;Or.transition=null;try{H=4,ya(e,t,r,n)}finally{H=o,Or.transition=i}}function ya(e,t,r,n){if(Lo){var o=bl(e,t,r,n);if(o===null)Bi(e,t,n,Ao,r),js(e,n);else if(Bp(o,e,t,r,n))n.stopPropagation();else if(js(e,n),t&4&&-1<Mp.indexOf(e)){for(;o!==null;){var i=In(o);if(i!==null&&Pc(i),i=bl(e,t,r,n),i===null&&Bi(e,t,n,Ao,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Bi(e,t,n,null,r)}}var Ao=null;function bl(e,t,r,n){if(Ao=null,e=ha(n),e=Gt(e),e!==null)if(t=fr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=bc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ao=e,null}function Ac(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Op()){case ga:return 1;case Ec:return 4;case zo:case zp:return 16;case Cc:return 536870912;default:return 16}default:return 16}}var Ot=null,wa=null,go=null;function Dc(){if(go)return go;var e,t=wa,r=t.length,n,o="value"in Ot?Ot.value:Ot.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===o[i-n];n++);return go=o.slice(e,1<n?1-n:void 0)}function vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function Es(){return!1}function Ve(e){function t(r,n,o,i,l){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?to:Es,this.isPropagationStopped=Es,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Ve(Hr),Un=te({},Hr,{view:0,detail:0}),Vp=Ve(Un),zi,Ti,Xr,oi=te({},Un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(zi=e.screenX-Xr.screenX,Ti=e.screenY-Xr.screenY):Ti=zi=0,Xr=e),zi)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),Cs=Ve(oi),qp=te({},oi,{dataTransfer:0}),Qp=Ve(qp),Kp=te({},Un,{relatedTarget:0}),Li=Ve(Kp),Yp=te({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jp=Ve(Yp),Xp=te({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gp=Ve(Xp),Zp=te({},Hr,{data:0}),Rs=Ve(Zp),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rm[e])?!!t[e]:!1}function ba(){return nm}var om=te({},Un,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=Ve(om),lm=te({},oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_s=Ve(lm),am=te({},Un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),sm=Ve(am),um=te({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=Ve(um),dm=te({},oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=Ve(dm),pm=[9,13,27,32],Sa=kt&&"CompositionEvent"in window,un=null;kt&&"documentMode"in document&&(un=document.documentMode);var mm=kt&&"TextEvent"in window&&!un,Uc=kt&&(!Sa||un&&8<un&&11>=un),Ps=" ",Os=!1;function Ic(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function hm(e,t){switch(e){case"compositionend":return Fc(t);case"keypress":return t.which!==32?null:(Os=!0,Ps);case"textInput":return e=t.data,e===Ps&&Os?null:e;default:return null}}function gm(e,t){if(xr)return e==="compositionend"||!Sa&&Ic(e,t)?(e=Dc(),go=wa=Ot=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uc&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function Mc(e,t,r,n){vc(n),t=Do(t,"onChange"),0<t.length&&(r=new ka("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var cn=null,bn=null;function xm(e){Xc(e,0)}function ii(e){var t=kr(e);if(cc(t))return e}function ym(e,t){if(e==="change")return t}var Bc=!1;if(kt){var Ai;if(kt){var Di="oninput"in document;if(!Di){var Ts=document.createElement("div");Ts.setAttribute("oninput","return;"),Di=typeof Ts.oninput=="function"}Ai=Di}else Ai=!1;Bc=Ai&&(!document.documentMode||9<document.documentMode)}function Ls(){cn&&(cn.detachEvent("onpropertychange",$c),bn=cn=null)}function $c(e){if(e.propertyName==="value"&&ii(bn)){var t=[];Mc(t,bn,e,ha(e)),kc(xm,t)}}function wm(e,t,r){e==="focusin"?(Ls(),cn=t,bn=r,cn.attachEvent("onpropertychange",$c)):e==="focusout"&&Ls()}function km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(bn)}function bm(e,t){if(e==="click")return ii(t)}function Sm(e,t){if(e==="input"||e==="change")return ii(t)}function jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:jm;function Sn(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!ol.call(t,o)||!st(e[o],t[o]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ds(e,t){var r=As(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=As(r)}}function Hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wc(){for(var e=window,t=_o();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=_o(e.document)}return t}function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nm(e){var t=Wc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Hc(r.ownerDocument.documentElement,r)){if(n!==null&&ja(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Ds(r,i);var l=Ds(r,n);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Em=kt&&"documentMode"in document&&11>=document.documentMode,yr=null,Sl=null,dn=null,jl=!1;function Us(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;jl||yr==null||yr!==_o(n)||(n=yr,"selectionStart"in n&&ja(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),dn&&Sn(dn,n)||(dn=n,n=Do(Sl,"onSelect"),0<n.length&&(t=new ka("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=yr)))}function ro(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var wr={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Ui={},Vc={};kt&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function li(e){if(Ui[e])return Ui[e];if(!wr[e])return e;var t=wr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Vc)return Ui[e]=t[r];return e}var qc=li("animationend"),Qc=li("animationiteration"),Kc=li("animationstart"),Yc=li("transitionend"),Jc=new Map,Is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Jc.set(e,t),dr(t,[e])}for(var Ii=0;Ii<Is.length;Ii++){var Fi=Is[Ii],Cm=Fi.toLowerCase(),Rm=Fi[0].toUpperCase()+Fi.slice(1);Vt(Cm,"on"+Rm)}Vt(qc,"onAnimationEnd");Vt(Qc,"onAnimationIteration");Vt(Kc,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Yc,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_m=new Set("cancel close invalid load scroll toggle".split(" ").concat(ln));function Fs(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Cp(n,t,void 0,e),e.currentTarget=null}function Xc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var l=n.length-1;0<=l;l--){var s=n[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Fs(o,s,c),i=u}else for(l=0;l<n.length;l++){if(s=n[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Fs(o,s,c),i=u}}}if(Oo)throw e=yl,Oo=!1,yl=null,e}function K(e,t){var r=t[_l];r===void 0&&(r=t[_l]=new Set);var n=e+"__bubble";r.has(n)||(Gc(t,e,2,!1),r.add(n))}function Mi(e,t,r){var n=0;t&&(n|=4),Gc(r,e,n,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function jn(e){if(!e[no]){e[no]=!0,ic.forEach(function(r){r!=="selectionchange"&&(_m.has(r)||Mi(r,!1,e),Mi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,Mi("selectionchange",!1,t))}}function Gc(e,t,r,n){switch(Ac(t)){case 1:var o=Hp;break;case 4:o=Wp;break;default:o=ya}r=o.bind(null,t,r,e),o=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Bi(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Gt(s),l===null)return;if(u=l.tag,u===5||u===6){n=i=l;continue e}s=s.parentNode}}n=n.return}kc(function(){var c=i,d=ha(r),m=[];e:{var p=Jc.get(e);if(p!==void 0){var x=ka,w=e;switch(e){case"keypress":if(vo(r)===0)break e;case"keydown":case"keyup":x=im;break;case"focusin":w="focus",x=Li;break;case"focusout":w="blur",x=Li;break;case"beforeblur":case"afterblur":x=Li;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=sm;break;case qc:case Qc:case Kc:x=Jp;break;case Yc:x=cm;break;case"scroll":x=Vp;break;case"wheel":x=fm;break;case"copy":case"cut":case"paste":x=Gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=_s}var v=(t&4)!==0,y=!v&&e==="scroll",f=v?p!==null?p+"Capture":null:p;v=[];for(var h=c,g;h!==null;){g=h;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,f!==null&&(b=xn(h,f),b!=null&&v.push(Nn(h,b,g)))),y)break;h=h.return}0<v.length&&(p=new x(p,w,null,r,d),m.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&r!==gl&&(w=r.relatedTarget||r.fromElement)&&(Gt(w)||w[bt]))break e;if((x||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,x?(w=r.relatedTarget||r.toElement,x=c,w=w?Gt(w):null,w!==null&&(y=fr(w),w!==y||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=c),x!==w)){if(v=Cs,b="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=_s,b="onPointerLeave",f="onPointerEnter",h="pointer"),y=x==null?p:kr(x),g=w==null?p:kr(w),p=new v(b,h+"leave",x,r,d),p.target=y,p.relatedTarget=g,b=null,Gt(d)===c&&(v=new v(f,h+"enter",w,r,d),v.target=g,v.relatedTarget=y,b=v),y=b,x&&w)t:{for(v=x,f=w,h=0,g=v;g;g=mr(g))h++;for(g=0,b=f;b;b=mr(b))g++;for(;0<h-g;)v=mr(v),h--;for(;0<g-h;)f=mr(f),g--;for(;h--;){if(v===f||f!==null&&v===f.alternate)break t;v=mr(v),f=mr(f)}v=null}else v=null;x!==null&&Ms(m,p,x,v,!1),w!==null&&y!==null&&Ms(m,y,w,v,!0)}}e:{if(p=c?kr(c):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var j=ym;else if(zs(p))if(Bc)j=Sm;else{j=km;var E=wm}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=bm);if(j&&(j=j(e,c))){Mc(m,j,r,d);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&dl(p,"number",p.value)}switch(E=c?kr(c):window,e){case"focusin":(zs(E)||E.contentEditable==="true")&&(yr=E,Sl=c,dn=null);break;case"focusout":dn=Sl=yr=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,Us(m,r,d);break;case"selectionchange":if(Em)break;case"keydown":case"keyup":Us(m,r,d)}var _;if(Sa)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else xr?Ic(e,r)&&(O="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(O="onCompositionStart");O&&(Uc&&r.locale!=="ko"&&(xr||O!=="onCompositionStart"?O==="onCompositionEnd"&&xr&&(_=Dc()):(Ot=d,wa="value"in Ot?Ot.value:Ot.textContent,xr=!0)),E=Do(c,O),0<E.length&&(O=new Rs(O,e,null,r,d),m.push({event:O,listeners:E}),_?O.data=_:(_=Fc(r),_!==null&&(O.data=_)))),(_=mm?hm(e,r):gm(e,r))&&(c=Do(c,"onBeforeInput"),0<c.length&&(d=new Rs("onBeforeInput","beforeinput",null,r,d),m.push({event:d,listeners:c}),d.data=_))}Xc(m,t)})}function Nn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Do(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=xn(e,r),i!=null&&n.unshift(Nn(e,i,o)),i=xn(e,t),i!=null&&n.push(Nn(e,i,o))),e=e.return}return n}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ms(e,t,r,n,o){for(var i=t._reactName,l=[];r!==null&&r!==n;){var s=r,u=s.alternate,c=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&c!==null&&(s=c,o?(u=xn(r,i),u!=null&&l.unshift(Nn(r,u,s))):o||(u=xn(r,i),u!=null&&l.push(Nn(r,u,s)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Pm=/\r\n?/g,Om=/\u0000|\uFFFD/g;function Bs(e){return(typeof e=="string"?e:""+e).replace(Pm,`
`).replace(Om,"")}function oo(e,t,r){if(t=Bs(t),Bs(e)!==t&&r)throw Error(N(425))}function Uo(){}var Nl=null,El=null;function Cl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,zm=typeof clearTimeout=="function"?clearTimeout:void 0,$s=typeof Promise=="function"?Promise:void 0,Tm=typeof queueMicrotask=="function"?queueMicrotask:typeof $s<"u"?function(e){return $s.resolve(null).then(e).catch(Lm)}:Rl;function Lm(e){setTimeout(function(){throw e})}function $i(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),kn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);kn(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),pt="__reactFiber$"+Wr,En="__reactProps$"+Wr,bt="__reactContainer$"+Wr,_l="__reactEvents$"+Wr,Am="__reactListeners$"+Wr,Dm="__reactHandles$"+Wr;function Gt(e){var t=e[pt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[bt]||r[pt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Hs(e);e!==null;){if(r=e[pt])return r;e=Hs(e)}return t}e=r,r=e.parentNode}return null}function In(e){return e=e[pt]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ai(e){return e[En]||null}var Pl=[],br=-1;function qt(e){return{current:e}}function Y(e){0>br||(e.current=Pl[br],Pl[br]=null,br--)}function Q(e,t){br++,Pl[br]=e.current,e.current=t}var Wt={},Ce=qt(Wt),Ae=qt(!1),ir=Wt;function Ar(e,t){var r=e.type.contextTypes;if(!r)return Wt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function De(e){return e=e.childContextTypes,e!=null}function Io(){Y(Ae),Y(Ce)}function Ws(e,t,r){if(Ce.current!==Wt)throw Error(N(168));Q(Ce,t),Q(Ae,r)}function Zc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(N(108,wp(e)||"Unknown",o));return te({},r,n)}function Fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,ir=Ce.current,Q(Ce,e),Q(Ae,Ae.current),!0}function Vs(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=Zc(e,t,ir),n.__reactInternalMemoizedMergedChildContext=e,Y(Ae),Y(Ce),Q(Ce,e)):Y(Ae),Q(Ae,r)}var vt=null,si=!1,Hi=!1;function ed(e){vt===null?vt=[e]:vt.push(e)}function Um(e){si=!0,ed(e)}function Qt(){if(!Hi&&vt!==null){Hi=!0;var e=0,t=H;try{var r=vt;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}vt=null,si=!1}catch(o){throw vt!==null&&(vt=vt.slice(e+1)),Nc(ga,Qt),o}finally{H=t,Hi=!1}}return null}var Sr=[],jr=0,Mo=null,Bo=0,Qe=[],Ke=0,lr=null,xt=1,yt="";function Jt(e,t){Sr[jr++]=Bo,Sr[jr++]=Mo,Mo=e,Bo=t}function td(e,t,r){Qe[Ke++]=xt,Qe[Ke++]=yt,Qe[Ke++]=lr,lr=e;var n=xt;e=yt;var o=32-it(n)-1;n&=~(1<<o),r+=1;var i=32-it(t)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,xt=1<<32-it(t)+o|r<<o|n,yt=i+e}else xt=1<<i|r<<o|n,yt=e}function Na(e){e.return!==null&&(Jt(e,1),td(e,1,0))}function Ea(e){for(;e===Mo;)Mo=Sr[--jr],Sr[jr]=null,Bo=Sr[--jr],Sr[jr]=null;for(;e===lr;)lr=Qe[--Ke],Qe[Ke]=null,yt=Qe[--Ke],Qe[Ke]=null,xt=Qe[--Ke],Qe[Ke]=null}var $e=null,Be=null,G=!1,ot=null;function rd(e,t){var r=Je(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function qs(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Be=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=lr!==null?{id:xt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Je(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,$e=e,Be=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zl(e){if(G){var t=Be;if(t){var r=t;if(!qs(e,t)){if(Ol(e))throw Error(N(418));t=Ut(r.nextSibling);var n=$e;t&&qs(e,t)?rd(n,r):(e.flags=e.flags&-4097|2,G=!1,$e=e)}}else{if(Ol(e))throw Error(N(418));e.flags=e.flags&-4097|2,G=!1,$e=e}}}function Qs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function io(e){if(e!==$e)return!1;if(!G)return Qs(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cl(e.type,e.memoizedProps)),t&&(t=Be)){if(Ol(e))throw nd(),Error(N(418));for(;t;)rd(e,t),t=Ut(t.nextSibling)}if(Qs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Be=Ut(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=$e?Ut(e.stateNode.nextSibling):null;return!0}function nd(){for(var e=Be;e;)e=Ut(e.nextSibling)}function Dr(){Be=$e=null,G=!1}function Ca(e){ot===null?ot=[e]:ot.push(e)}var Im=Nt.ReactCurrentBatchConfig;function Gr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ks(e){var t=e._init;return t(e._payload)}function od(e){function t(f,h){if(e){var g=f.deletions;g===null?(f.deletions=[h],f.flags|=16):g.push(h)}}function r(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function n(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function o(f,h){return f=Bt(f,h),f.index=0,f.sibling=null,f}function i(f,h,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<h?(f.flags|=2,h):g):(f.flags|=2,h)):(f.flags|=1048576,h)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,h,g,b){return h===null||h.tag!==6?(h=Ji(g,f.mode,b),h.return=f,h):(h=o(h,g),h.return=f,h)}function u(f,h,g,b){var j=g.type;return j===vr?d(f,h,g.props.children,b,g.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ct&&Ks(j)===h.type)?(b=o(h,g.props),b.ref=Gr(f,h,g),b.return=f,b):(b=jo(g.type,g.key,g.props,null,f.mode,b),b.ref=Gr(f,h,g),b.return=f,b)}function c(f,h,g,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Xi(g,f.mode,b),h.return=f,h):(h=o(h,g.children||[]),h.return=f,h)}function d(f,h,g,b,j){return h===null||h.tag!==7?(h=nr(g,f.mode,b,j),h.return=f,h):(h=o(h,g),h.return=f,h)}function m(f,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ji(""+h,f.mode,g),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yn:return g=jo(h.type,h.key,h.props,null,f.mode,g),g.ref=Gr(f,null,h),g.return=f,g;case gr:return h=Xi(h,f.mode,g),h.return=f,h;case Ct:var b=h._init;return m(f,b(h._payload),g)}if(nn(h)||Qr(h))return h=nr(h,f.mode,g,null),h.return=f,h;lo(f,h)}return null}function p(f,h,g,b){var j=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return j!==null?null:s(f,h,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yn:return g.key===j?u(f,h,g,b):null;case gr:return g.key===j?c(f,h,g,b):null;case Ct:return j=g._init,p(f,h,j(g._payload),b)}if(nn(g)||Qr(g))return j!==null?null:d(f,h,g,b,null);lo(f,g)}return null}function x(f,h,g,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(g)||null,s(h,f,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Yn:return f=f.get(b.key===null?g:b.key)||null,u(h,f,b,j);case gr:return f=f.get(b.key===null?g:b.key)||null,c(h,f,b,j);case Ct:var E=b._init;return x(f,h,g,E(b._payload),j)}if(nn(b)||Qr(b))return f=f.get(g)||null,d(h,f,b,j,null);lo(h,b)}return null}function w(f,h,g,b){for(var j=null,E=null,_=h,O=h=0,B=null;_!==null&&O<g.length;O++){_.index>O?(B=_,_=null):B=_.sibling;var D=p(f,_,g[O],b);if(D===null){_===null&&(_=B);break}e&&_&&D.alternate===null&&t(f,_),h=i(D,h,O),E===null?j=D:E.sibling=D,E=D,_=B}if(O===g.length)return r(f,_),G&&Jt(f,O),j;if(_===null){for(;O<g.length;O++)_=m(f,g[O],b),_!==null&&(h=i(_,h,O),E===null?j=_:E.sibling=_,E=_);return G&&Jt(f,O),j}for(_=n(f,_);O<g.length;O++)B=x(_,f,O,g[O],b),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?O:B.key),h=i(B,h,O),E===null?j=B:E.sibling=B,E=B);return e&&_.forEach(function(q){return t(f,q)}),G&&Jt(f,O),j}function v(f,h,g,b){var j=Qr(g);if(typeof j!="function")throw Error(N(150));if(g=j.call(g),g==null)throw Error(N(151));for(var E=j=null,_=h,O=h=0,B=null,D=g.next();_!==null&&!D.done;O++,D=g.next()){_.index>O?(B=_,_=null):B=_.sibling;var q=p(f,_,D.value,b);if(q===null){_===null&&(_=B);break}e&&_&&q.alternate===null&&t(f,_),h=i(q,h,O),E===null?j=q:E.sibling=q,E=q,_=B}if(D.done)return r(f,_),G&&Jt(f,O),j;if(_===null){for(;!D.done;O++,D=g.next())D=m(f,D.value,b),D!==null&&(h=i(D,h,O),E===null?j=D:E.sibling=D,E=D);return G&&Jt(f,O),j}for(_=n(f,_);!D.done;O++,D=g.next())D=x(_,f,O,D.value,b),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?O:D.key),h=i(D,h,O),E===null?j=D:E.sibling=D,E=D);return e&&_.forEach(function(ce){return t(f,ce)}),G&&Jt(f,O),j}function y(f,h,g,b){if(typeof g=="object"&&g!==null&&g.type===vr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yn:e:{for(var j=g.key,E=h;E!==null;){if(E.key===j){if(j=g.type,j===vr){if(E.tag===7){r(f,E.sibling),h=o(E,g.props.children),h.return=f,f=h;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ct&&Ks(j)===E.type){r(f,E.sibling),h=o(E,g.props),h.ref=Gr(f,E,g),h.return=f,f=h;break e}r(f,E);break}else t(f,E);E=E.sibling}g.type===vr?(h=nr(g.props.children,f.mode,b,g.key),h.return=f,f=h):(b=jo(g.type,g.key,g.props,null,f.mode,b),b.ref=Gr(f,h,g),b.return=f,f=b)}return l(f);case gr:e:{for(E=g.key;h!==null;){if(h.key===E)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(f,h.sibling),h=o(h,g.children||[]),h.return=f,f=h;break e}else{r(f,h);break}else t(f,h);h=h.sibling}h=Xi(g,f.mode,b),h.return=f,f=h}return l(f);case Ct:return E=g._init,y(f,h,E(g._payload),b)}if(nn(g))return w(f,h,g,b);if(Qr(g))return v(f,h,g,b);lo(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(r(f,h.sibling),h=o(h,g),h.return=f,f=h):(r(f,h),h=Ji(g,f.mode,b),h.return=f,f=h),l(f)):r(f,h)}return y}var Ur=od(!0),id=od(!1),$o=qt(null),Ho=null,Nr=null,Ra=null;function _a(){Ra=Nr=Ho=null}function Pa(e){var t=$o.current;Y($o),e._currentValue=t}function Tl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function zr(e,t){Ho=e,Ra=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Ra!==e)if(e={context:e,memoizedValue:t,next:null},Nr===null){if(Ho===null)throw Error(N(308));Nr=e,Ho.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return t}var Zt=null;function Oa(e){Zt===null?Zt=[e]:Zt.push(e)}function ld(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Oa(t)):(r.next=o.next,o.next=r),t.interleaved=r,St(e,n)}function St(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Rt=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ad(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,M&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,St(e,r)}return o=n.interleaved,o===null?(t.next=t,Oa(n)):(t.next=o.next,o.next=t),n.interleaved=t,St(e,r)}function xo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,va(e,r)}}function Ys(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Wo(e,t,r,n){var o=e.updateQueue;Rt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(i!==null){var m=o.baseState;l=0,d=c=u=null,s=i;do{var p=s.lane,x=s.eventTime;if((n&p)===p){d!==null&&(d=d.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,v=s;switch(p=t,x=r,v.tag){case 1:if(w=v.payload,typeof w=="function"){m=w.call(x,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,p=typeof w=="function"?w.call(x,m,p):w,p==null)break e;m=te({},m,p);break e;case 2:Rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else x={eventTime:x,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=x,u=m):d=d.next=x,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(u=m),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);sr|=l,e.lanes=l,e.memoizedState=m}}function Js(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(N(191,o));o.call(n)}}}var Fn={},ht=qt(Fn),Cn=qt(Fn),Rn=qt(Fn);function er(e){if(e===Fn)throw Error(N(174));return e}function Ta(e,t){switch(Q(Rn,t),Q(Cn,e),Q(ht,Fn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pl(t,e)}Y(ht),Q(ht,t)}function Ir(){Y(ht),Y(Cn),Y(Rn)}function sd(e){er(Rn.current);var t=er(ht.current),r=pl(t,e.type);t!==r&&(Q(Cn,e),Q(ht,r))}function La(e){Cn.current===e&&(Y(ht),Y(Cn))}var Z=qt(0);function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function Aa(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var yo=Nt.ReactCurrentDispatcher,Vi=Nt.ReactCurrentBatchConfig,ar=0,ee=null,de=null,pe=null,qo=!1,fn=!1,_n=0,Fm=0;function Se(){throw Error(N(321))}function Da(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!st(e[r],t[r]))return!1;return!0}function Ua(e,t,r,n,o,i){if(ar=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yo.current=e===null||e.memoizedState===null?Hm:Wm,e=r(n,o),fn){i=0;do{if(fn=!1,_n=0,25<=i)throw Error(N(301));i+=1,pe=de=null,t.updateQueue=null,yo.current=Vm,e=r(n,o)}while(fn)}if(yo.current=Qo,t=de!==null&&de.next!==null,ar=0,pe=de=ee=null,qo=!1,t)throw Error(N(300));return e}function Ia(){var e=_n!==0;return _n=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ee.memoizedState=pe=e:pe=pe.next=e,pe}function Ze(){if(de===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=pe===null?ee.memoizedState:pe.next;if(t!==null)pe=t,de=e;else{if(e===null)throw Error(N(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},pe===null?ee.memoizedState=pe=e:pe=pe.next=e}return pe}function Pn(e,t){return typeof t=="function"?t(e):t}function qi(e){var t=Ze(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=de,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ar&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,l=n):u=u.next=m,ee.lanes|=d,sr|=d}c=c.next}while(c!==null&&c!==i);u===null?l=n:u.next=s,st(n,t.memoizedState)||(Le=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,sr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Qi(e){var t=Ze(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);st(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function ud(){}function cd(e,t){var r=ee,n=Ze(),o=t(),i=!st(n.memoizedState,o);if(i&&(n.memoizedState=o,Le=!0),n=n.queue,Fa(pd.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(r.flags|=2048,On(9,fd.bind(null,r,n,o,t),void 0,null),me===null)throw Error(N(349));ar&30||dd(r,t,o)}return o}function dd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function fd(e,t,r,n){t.value=r,t.getSnapshot=n,md(t)&&hd(e)}function pd(e,t,r){return r(function(){md(t)&&hd(e)})}function md(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!st(e,r)}catch{return!0}}function hd(e){var t=St(e,1);t!==null&&lt(t,e,1,-1)}function Xs(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:e},t.queue=e,e=e.dispatch=$m.bind(null,ee,e),[t.memoizedState,e]}function On(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function gd(){return Ze().memoizedState}function wo(e,t,r,n){var o=ft();ee.flags|=e,o.memoizedState=On(1|t,r,void 0,n===void 0?null:n)}function ui(e,t,r,n){var o=Ze();n=n===void 0?null:n;var i=void 0;if(de!==null){var l=de.memoizedState;if(i=l.destroy,n!==null&&Da(n,l.deps)){o.memoizedState=On(t,r,i,n);return}}ee.flags|=e,o.memoizedState=On(1|t,r,i,n)}function Gs(e,t){return wo(8390656,8,e,t)}function Fa(e,t){return ui(2048,8,e,t)}function vd(e,t){return ui(4,2,e,t)}function xd(e,t){return ui(4,4,e,t)}function yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wd(e,t,r){return r=r!=null?r.concat([e]):null,ui(4,4,yd.bind(null,t,e),r)}function Ma(){}function kd(e,t){var r=Ze();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Da(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function bd(e,t){var r=Ze();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Da(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Sd(e,t,r){return ar&21?(st(r,t)||(r=Rc(),ee.lanes|=r,sr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=r)}function Mm(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=Vi.transition;Vi.transition={};try{e(!1),t()}finally{H=r,Vi.transition=n}}function jd(){return Ze().memoizedState}function Bm(e,t,r){var n=Mt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Nd(e))Ed(t,r);else if(r=ld(e,t,r,n),r!==null){var o=_e();lt(r,e,n,o),Cd(r,t,n)}}function $m(e,t,r){var n=Mt(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Nd(e))Ed(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,r);if(o.hasEagerState=!0,o.eagerState=s,st(s,l)){var u=t.interleaved;u===null?(o.next=o,Oa(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}r=ld(e,t,o,n),r!==null&&(o=_e(),lt(r,e,n,o),Cd(r,t,n))}}function Nd(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Ed(e,t){fn=qo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Cd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,va(e,r)}}var Qo={readContext:Ge,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Hm={readContext:Ge,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Gs,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,wo(4194308,4,yd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var r=ft();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ft();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Bm.bind(null,ee,e),[n.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Xs,useDebugValue:Ma,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Xs(!1),t=e[0];return e=Mm.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ee,o=ft();if(G){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),me===null)throw Error(N(349));ar&30||dd(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Gs(pd.bind(null,n,i,e),[e]),n.flags|=2048,On(9,fd.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=ft(),t=me.identifierPrefix;if(G){var r=yt,n=xt;r=(n&~(1<<32-it(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=_n++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Fm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wm={readContext:Ge,useCallback:kd,useContext:Ge,useEffect:Fa,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:bd,useReducer:qi,useRef:gd,useState:function(){return qi(Pn)},useDebugValue:Ma,useDeferredValue:function(e){var t=Ze();return Sd(t,de.memoizedState,e)},useTransition:function(){var e=qi(Pn)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:cd,useId:jd,unstable_isNewReconciler:!1},Vm={readContext:Ge,useCallback:kd,useContext:Ge,useEffect:Fa,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:bd,useReducer:Qi,useRef:gd,useState:function(){return Qi(Pn)},useDebugValue:Ma,useDeferredValue:function(e){var t=Ze();return de===null?t.memoizedState=e:Sd(t,de.memoizedState,e)},useTransition:function(){var e=Qi(Pn)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:cd,useId:jd,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ll(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:te({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ci={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=_e(),o=Mt(e),i=wt(n,o);i.payload=t,r!=null&&(i.callback=r),t=It(e,i,o),t!==null&&(lt(t,e,o,n),xo(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=_e(),o=Mt(e),i=wt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=It(e,i,o),t!==null&&(lt(t,e,o,n),xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=_e(),n=Mt(e),o=wt(r,n);o.tag=2,t!=null&&(o.callback=t),t=It(e,o,n),t!==null&&(lt(t,e,n,r),xo(t,e,n))}};function Zs(e,t,r,n,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):t.prototype&&t.prototype.isPureReactComponent?!Sn(r,n)||!Sn(o,i):!0}function Rd(e,t,r){var n=!1,o=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(o=De(t)?ir:Ce.current,n=t.contextTypes,i=(n=n!=null)?Ar(e,o):Wt),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function eu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Al(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},za(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ge(i):(i=De(t)?ir:Ce.current,o.context=Ar(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ll(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ci.enqueueReplaceState(o,o.state,null),Wo(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t){try{var r="",n=t;do r+=yp(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ki(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Dl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var qm=typeof WeakMap=="function"?WeakMap:Map;function _d(e,t,r){r=wt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Yo||(Yo=!0,ql=n),Dl(e,t)},r}function Pd(e,t,r){r=wt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Dl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Dl(e,t),typeof n!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function tu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new qm;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=lh.bind(null,e,t,r),t.then(e,e))}function ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nu(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=wt(-1,1),t.tag=2,It(r,t,1))),r.lanes|=1),e)}var Qm=Nt.ReactCurrentOwner,Le=!1;function Re(e,t,r,n){t.child=e===null?id(t,null,r,n):Ur(t,e.child,r,n)}function ou(e,t,r,n,o){r=r.render;var i=t.ref;return zr(t,o),n=Ua(e,t,r,n,i,o),r=Ia(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(G&&r&&Na(t),t.flags|=1,Re(e,t,n,o),t.child)}function iu(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Ka(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Od(e,t,i,n,o)):(e=jo(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Sn,r(l,n)&&e.ref===t.ref)return jt(e,t,o)}return t.flags|=1,e=Bt(i,n),e.ref=t.ref,e.return=t,t.child=e}function Od(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Sn(i,n)&&e.ref===t.ref)if(Le=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,jt(e,t,o)}return Ul(e,t,r,n,o)}function zd(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Cr,Me),Me|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Cr,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Q(Cr,Me),Me|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Q(Cr,Me),Me|=n;return Re(e,t,o,r),t.child}function Td(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ul(e,t,r,n,o){var i=De(r)?ir:Ce.current;return i=Ar(t,i),zr(t,o),r=Ua(e,t,r,n,i,o),n=Ia(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(G&&n&&Na(t),t.flags|=1,Re(e,t,r,o),t.child)}function lu(e,t,r,n,o){if(De(r)){var i=!0;Fo(t)}else i=!1;if(zr(t,o),t.stateNode===null)ko(e,t),Rd(t,r,n),Al(t,r,n,o),n=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=r.contextType;typeof c=="object"&&c!==null?c=Ge(c):(c=De(r)?ir:Ce.current,c=Ar(t,c));var d=r.getDerivedStateFromProps,m=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||u!==c)&&eu(t,l,n,c),Rt=!1;var p=t.memoizedState;l.state=p,Wo(t,n,l,o),u=t.memoizedState,s!==n||p!==u||Ae.current||Rt?(typeof d=="function"&&(Ll(t,r,d,n),u=t.memoizedState),(s=Rt||Zs(t,r,s,n,p,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),l.props=n,l.state=u,l.context=c,n=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,ad(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:rt(t.type,s),l.props=c,m=t.pendingProps,p=l.context,u=r.contextType,typeof u=="object"&&u!==null?u=Ge(u):(u=De(r)?ir:Ce.current,u=Ar(t,u));var x=r.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||p!==u)&&eu(t,l,n,u),Rt=!1,p=t.memoizedState,l.state=p,Wo(t,n,l,o);var w=t.memoizedState;s!==m||p!==w||Ae.current||Rt?(typeof x=="function"&&(Ll(t,r,x,n),w=t.memoizedState),(c=Rt||Zs(t,r,c,n,p,w,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,w,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,w,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),l.props=n,l.state=w,l.context=u,n=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Il(e,t,r,n,i,o)}function Il(e,t,r,n,o,i){Td(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return o&&Vs(t,r,!1),jt(e,t,i);n=t.stateNode,Qm.current=t;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=Ur(t,e.child,null,i),t.child=Ur(t,null,s,i)):Re(e,t,s,i),t.memoizedState=n.state,o&&Vs(t,r,!0),t.child}function Ld(e){var t=e.stateNode;t.pendingContext?Ws(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ws(e,t.context,!1),Ta(e,t.containerInfo)}function au(e,t,r,n,o){return Dr(),Ca(o),t.flags|=256,Re(e,t,r,n),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ad(e,t,r){var n=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(Z,o&1),e===null)return zl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,i?(n=t.mode,i=t.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=pi(l,n,0,null),e=nr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ml(r),t.memoizedState=Fl,e):Ba(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Km(e,t,l,n,s,o,r);if(i){i=n.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:n.children};return!(l&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Bt(o,u),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Bt(s,i):(i=nr(i,l,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,l=e.child.memoizedState,l=l===null?Ml(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=Fl,n}return i=e.child,e=i.sibling,n=Bt(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ba(e,t){return t=pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,r,n){return n!==null&&Ca(n),Ur(t,e.child,null,r),e=Ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Km(e,t,r,n,o,i,l){if(r)return t.flags&256?(t.flags&=-257,n=Ki(Error(N(422))),ao(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=pi({mode:"visible",children:n.children},o,0,null),i=nr(i,o,l,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Ur(t,e.child,null,l),t.child.memoizedState=Ml(l),t.memoizedState=Fl,i);if(!(t.mode&1))return ao(e,t,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(N(419)),n=Ki(i,n,void 0),ao(e,t,l,n)}if(s=(l&e.childLanes)!==0,Le||s){if(n=me,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,St(e,o),lt(n,e,o,-1))}return Qa(),n=Ki(Error(N(421))),ao(e,t,l,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ah.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Be=Ut(o.nextSibling),$e=t,G=!0,ot=null,e!==null&&(Qe[Ke++]=xt,Qe[Ke++]=yt,Qe[Ke++]=lr,xt=e.id,yt=e.overflow,lr=t),t=Ba(t,n.children),t.flags|=4096,t)}function su(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Tl(e.return,t,r)}function Yi(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Dd(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Re(e,t,n.children,r),n=Z.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&su(e,r,t);else if(e.tag===19)su(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Q(Z,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Vo(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Yi(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Vo(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Yi(t,!0,r,null,i);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=Bt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Bt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ym(e,t,r){switch(t.tag){case 3:Ld(t),Dr();break;case 5:sd(t);break;case 1:De(t.type)&&Fo(t);break;case 4:Ta(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Q($o,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Q(Z,Z.current&1),t.flags|=128,null):r&t.child.childLanes?Ad(e,t,r):(Q(Z,Z.current&1),e=jt(e,t,r),e!==null?e.sibling:null);Q(Z,Z.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Dd(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(Z,Z.current),n)break;return null;case 22:case 23:return t.lanes=0,zd(e,t,r)}return jt(e,t,r)}var Ud,Bl,Id,Fd;Ud=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Bl=function(){};Id=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,er(ht.current);var i=null;switch(r){case"input":o=ul(e,o),n=ul(e,n),i=[];break;case"select":o=te({},o,{value:void 0}),n=te({},n,{value:void 0}),i=[];break;case"textarea":o=fl(e,o),n=fl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Uo)}ml(r,n);var l;r=null;for(c in o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in n){var u=n[c];if(s=o!=null?o[c]:void 0,n.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(r||(r={}),r[l]=u[l])}else r||(i||(i=[]),i.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&K("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Fd=function(e,t,r,n){r!==n&&(t.flags|=4)};function Zr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Jm(e,t,r){var n=t.pendingProps;switch(Ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return De(t.type)&&Io(),je(t),null;case 3:return n=t.stateNode,Ir(),Y(Ae),Y(Ce),Aa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Yl(ot),ot=null))),Bl(e,t),je(t),null;case 5:La(t);var o=er(Rn.current);if(r=t.type,e!==null&&t.stateNode!=null)Id(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return je(t),null}if(e=er(ht.current),io(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[pt]=t,n[En]=i,e=(t.mode&1)!==0,r){case"dialog":K("cancel",n),K("close",n);break;case"iframe":case"object":case"embed":K("load",n);break;case"video":case"audio":for(o=0;o<ln.length;o++)K(ln[o],n);break;case"source":K("error",n);break;case"img":case"image":case"link":K("error",n),K("load",n);break;case"details":K("toggle",n);break;case"input":vs(n,i),K("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},K("invalid",n);break;case"textarea":ys(n,i),K("invalid",n)}ml(r,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&oo(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&oo(n.textContent,s,e),o=["children",""+s]):gn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&K("scroll",n)}switch(r){case"input":Jn(n),xs(n,i,!0);break;case"textarea":Jn(n),ws(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Uo)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[pt]=t,e[En]=n,Ud(e,t,!1,!1),t.stateNode=e;e:{switch(l=hl(r,n),r){case"dialog":K("cancel",e),K("close",e),o=n;break;case"iframe":case"object":case"embed":K("load",e),o=n;break;case"video":case"audio":for(o=0;o<ln.length;o++)K(ln[o],e);o=n;break;case"source":K("error",e),o=n;break;case"img":case"image":case"link":K("error",e),K("load",e),o=n;break;case"details":K("toggle",e),o=n;break;case"input":vs(e,n),o=ul(e,n),K("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=te({},n,{value:void 0}),K("invalid",e);break;case"textarea":ys(e,n),o=fl(e,n),K("invalid",e);break;default:o=n}ml(r,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?gc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&mc(e,u)):i==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&vn(e,u):typeof u=="number"&&vn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(gn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&K("scroll",e):u!=null&&da(e,i,u,l))}switch(r){case"input":Jn(e),xs(e,n,!1);break;case"textarea":Jn(e),ws(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ht(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Rr(e,!!n.multiple,i,!1):n.defaultValue!=null&&Rr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Uo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)Fd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=er(Rn.current),er(ht.current),io(t)){if(n=t.stateNode,r=t.memoizedProps,n[pt]=t,(i=n.nodeValue!==r)&&(e=$e,e!==null))switch(e.tag){case 3:oo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[pt]=t,t.stateNode=n}return je(t),null;case 13:if(Y(Z),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Be!==null&&t.mode&1&&!(t.flags&128))nd(),Dr(),t.flags|=98560,i=!1;else if(i=io(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[pt]=t}else Dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),i=!1}else ot!==null&&(Yl(ot),ot=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?fe===0&&(fe=3):Qa())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Ir(),Bl(e,t),e===null&&jn(t.stateNode.containerInfo),je(t),null;case 10:return Pa(t.type._context),je(t),null;case 17:return De(t.type)&&Io(),je(t),null;case 19:if(Y(Z),i=t.memoizedState,i===null)return je(t),null;if(n=(t.flags&128)!==0,l=i.rendering,l===null)if(n)Zr(i,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Vo(e),l!==null){for(t.flags|=128,Zr(i,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Q(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&le()>Mr&&(t.flags|=128,n=!0,Zr(i,!1),t.lanes=4194304)}else{if(!n)if(e=Vo(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!G)return je(t),null}else 2*le()-i.renderingStartTime>Mr&&r!==1073741824&&(t.flags|=128,n=!0,Zr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,r=Z.current,Q(Z,n?r&1|2:r&1),t):(je(t),null);case 22:case 23:return qa(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Me&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Xm(e,t){switch(Ea(t),t.tag){case 1:return De(t.type)&&Io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),Y(Ae),Y(Ce),Aa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return La(t),null;case 13:if(Y(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Z),null;case 4:return Ir(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return qa(),null;case 24:return null;default:return null}}var so=!1,Ne=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,P=null;function Er(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ne(e,t,n)}else r.current=null}function $l(e,t,r){try{r()}catch(n){ne(e,t,n)}}var uu=!1;function Zm(e,t){if(Nl=Lo,e=Wc(),ja(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,s=-1,u=-1,c=0,d=0,m=e,p=null;t:for(;;){for(var x;m!==r||o!==0&&m.nodeType!==3||(s=l+o),m!==i||n!==0&&m.nodeType!==3||(u=l+n),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)p=m,m=x;for(;;){if(m===e)break t;if(p===r&&++c===o&&(s=l),p===i&&++d===n&&(u=l),(x=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=x}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(El={focusedElem:e,selectionRange:r},Lo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,y=w.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:rt(t.type,v),y);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(b){ne(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=uu,uu=!1,w}function pn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&$l(t,r,i)}o=o.next}while(o!==n)}}function di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Hl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Md(e){var t=e.alternate;t!==null&&(e.alternate=null,Md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[En],delete t[_l],delete t[Am],delete t[Dm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bd(e){return e.tag===5||e.tag===3||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Uo));else if(n!==4&&(e=e.child,e!==null))for(Wl(e,t,r),e=e.sibling;e!==null;)Wl(e,t,r),e=e.sibling}function Vl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Vl(e,t,r),e=e.sibling;e!==null;)Vl(e,t,r),e=e.sibling}var xe=null,nt=!1;function Et(e,t,r){for(r=r.child;r!==null;)$d(e,t,r),r=r.sibling}function $d(e,t,r){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ni,r)}catch{}switch(r.tag){case 5:Ne||Er(r,t);case 6:var n=xe,o=nt;xe=null,Et(e,t,r),xe=n,nt=o,xe!==null&&(nt?(e=xe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):xe.removeChild(r.stateNode));break;case 18:xe!==null&&(nt?(e=xe,r=r.stateNode,e.nodeType===8?$i(e.parentNode,r):e.nodeType===1&&$i(e,r),kn(e)):$i(xe,r.stateNode));break;case 4:n=xe,o=nt,xe=r.stateNode.containerInfo,nt=!0,Et(e,t,r),xe=n,nt=o;break;case 0:case 11:case 14:case 15:if(!Ne&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&$l(r,t,l),o=o.next}while(o!==n)}Et(e,t,r);break;case 1:if(!Ne&&(Er(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){ne(r,t,s)}Et(e,t,r);break;case 21:Et(e,t,r);break;case 22:r.mode&1?(Ne=(n=Ne)||r.memoizedState!==null,Et(e,t,r),Ne=n):Et(e,t,r);break;default:Et(e,t,r)}}function du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Gm),t.forEach(function(n){var o=sh.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function et(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,nt=!1;break e;case 3:xe=s.stateNode.containerInfo,nt=!0;break e;case 4:xe=s.stateNode.containerInfo,nt=!0;break e}s=s.return}if(xe===null)throw Error(N(160));$d(i,l,o),xe=null,nt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){ne(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hd(t,e),t=t.sibling}function Hd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),dt(e),n&4){try{pn(3,e,e.return),di(3,e)}catch(v){ne(e,e.return,v)}try{pn(5,e,e.return)}catch(v){ne(e,e.return,v)}}break;case 1:et(t,e),dt(e),n&512&&r!==null&&Er(r,r.return);break;case 5:if(et(t,e),dt(e),n&512&&r!==null&&Er(r,r.return),e.flags&32){var o=e.stateNode;try{vn(o,"")}catch(v){ne(e,e.return,v)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&dc(o,i),hl(s,l);var c=hl(s,i);for(l=0;l<u.length;l+=2){var d=u[l],m=u[l+1];d==="style"?gc(o,m):d==="dangerouslySetInnerHTML"?mc(o,m):d==="children"?vn(o,m):da(o,d,m,c)}switch(s){case"input":cl(o,i);break;case"textarea":fc(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Rr(o,!!i.multiple,x,!1):p!==!!i.multiple&&(i.defaultValue!=null?Rr(o,!!i.multiple,i.defaultValue,!0):Rr(o,!!i.multiple,i.multiple?[]:"",!1))}o[En]=i}catch(v){ne(e,e.return,v)}}break;case 6:if(et(t,e),dt(e),n&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){ne(e,e.return,v)}}break;case 3:if(et(t,e),dt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{kn(t.containerInfo)}catch(v){ne(e,e.return,v)}break;case 4:et(t,e),dt(e);break;case 13:et(t,e),dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Wa=le())),n&4&&du(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Ne=(c=Ne)||d,et(t,e),Ne=c):et(t,e),dt(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(m=P=d;P!==null;){switch(p=P,x=p.child,p.tag){case 0:case 11:case 14:case 15:pn(4,p,p.return);break;case 1:Er(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){ne(n,r,v)}}break;case 5:Er(p,p.return);break;case 22:if(p.memoizedState!==null){pu(m);continue}}x!==null?(x.return=p,P=x):pu(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=hc("display",l))}catch(v){ne(e,e.return,v)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){ne(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:et(t,e),dt(e),n&4&&du(e);break;case 21:break;default:et(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Bd(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(vn(o,""),n.flags&=-33);var i=cu(e);Vl(e,i,o);break;case 3:case 4:var l=n.stateNode.containerInfo,s=cu(e);Wl(e,s,l);break;default:throw Error(N(161))}}catch(u){ne(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eh(e,t,r){P=e,Wd(e)}function Wd(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||so;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Ne;s=so;var c=Ne;if(so=l,(Ne=u)&&!c)for(P=o;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?mu(o):u!==null?(u.return=l,P=u):mu(o);for(;i!==null;)P=i,Wd(i),i=i.sibling;P=o,so=s,Ne=c}fu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):fu(e)}}function fu(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||di(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ne)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:rt(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Js(t,i,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Js(t,l,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&kn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ne||t.flags&512&&Hl(t)}catch(p){ne(t,t.return,p)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function pu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function mu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{di(4,t)}catch(u){ne(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(u){ne(t,o,u)}}var i=t.return;try{Hl(t)}catch(u){ne(t,i,u)}break;case 5:var l=t.return;try{Hl(t)}catch(u){ne(t,l,u)}}}catch(u){ne(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var th=Math.ceil,Ko=Nt.ReactCurrentDispatcher,$a=Nt.ReactCurrentOwner,Xe=Nt.ReactCurrentBatchConfig,M=0,me=null,se=null,ye=0,Me=0,Cr=qt(0),fe=0,zn=null,sr=0,fi=0,Ha=0,mn=null,Te=null,Wa=0,Mr=1/0,gt=null,Yo=!1,ql=null,Ft=null,uo=!1,zt=null,Jo=0,hn=0,Ql=null,bo=-1,So=0;function _e(){return M&6?le():bo!==-1?bo:bo=le()}function Mt(e){return e.mode&1?M&2&&ye!==0?ye&-ye:Im.transition!==null?(So===0&&(So=Rc()),So):(e=H,e!==0||(e=window.event,e=e===void 0?16:Ac(e.type)),e):1}function lt(e,t,r,n){if(50<hn)throw hn=0,Ql=null,Error(N(185));Dn(e,r,n),(!(M&2)||e!==me)&&(e===me&&(!(M&2)&&(fi|=r),fe===4&&Pt(e,ye)),Ue(e,n),r===1&&M===0&&!(t.mode&1)&&(Mr=le()+500,si&&Qt()))}function Ue(e,t){var r=e.callbackNode;Ip(e,t);var n=To(e,e===me?ye:0);if(n===0)r!==null&&Ss(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ss(r),t===1)e.tag===0?Um(hu.bind(null,e)):ed(hu.bind(null,e)),Tm(function(){!(M&6)&&Qt()}),r=null;else{switch(_c(n)){case 1:r=ga;break;case 4:r=Ec;break;case 16:r=zo;break;case 536870912:r=Cc;break;default:r=zo}r=Gd(r,Vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Vd(e,t){if(bo=-1,So=0,M&6)throw Error(N(327));var r=e.callbackNode;if(Tr()&&e.callbackNode!==r)return null;var n=To(e,e===me?ye:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Xo(e,n);else{t=n;var o=M;M|=2;var i=Qd();(me!==e||ye!==t)&&(gt=null,Mr=le()+500,rr(e,t));do try{oh();break}catch(s){qd(e,s)}while(!0);_a(),Ko.current=i,M=o,se!==null?t=0:(me=null,ye=0,t=fe)}if(t!==0){if(t===2&&(o=wl(e),o!==0&&(n=o,t=Kl(e,o))),t===1)throw r=zn,rr(e,0),Pt(e,n),Ue(e,le()),r;if(t===6)Pt(e,n);else{if(o=e.current.alternate,!(n&30)&&!rh(o)&&(t=Xo(e,n),t===2&&(i=wl(e),i!==0&&(n=i,t=Kl(e,i))),t===1))throw r=zn,rr(e,0),Pt(e,n),Ue(e,le()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:Xt(e,Te,gt);break;case 3:if(Pt(e,n),(n&130023424)===n&&(t=Wa+500-le(),10<t)){if(To(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){_e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(Xt.bind(null,e,Te,gt),t);break}Xt(e,Te,gt);break;case 4:if(Pt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var l=31-it(n);i=1<<l,l=t[l],l>o&&(o=l),n&=~i}if(n=o,n=le()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*th(n/1960))-n,10<n){e.timeoutHandle=Rl(Xt.bind(null,e,Te,gt),n);break}Xt(e,Te,gt);break;case 5:Xt(e,Te,gt);break;default:throw Error(N(329))}}}return Ue(e,le()),e.callbackNode===r?Vd.bind(null,e):null}function Kl(e,t){var r=mn;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Xo(e,t),e!==2&&(t=Te,Te=r,t!==null&&Yl(t)),e}function Yl(e){Te===null?Te=e:Te.push.apply(Te,e)}function rh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!st(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~Ha,t&=~fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-it(t),n=1<<r;e[r]=-1,t&=~n}}function hu(e){if(M&6)throw Error(N(327));Tr();var t=To(e,0);if(!(t&1))return Ue(e,le()),null;var r=Xo(e,t);if(e.tag!==0&&r===2){var n=wl(e);n!==0&&(t=n,r=Kl(e,n))}if(r===1)throw r=zn,rr(e,0),Pt(e,t),Ue(e,le()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,Te,gt),Ue(e,le()),null}function Va(e,t){var r=M;M|=1;try{return e(t)}finally{M=r,M===0&&(Mr=le()+500,si&&Qt())}}function ur(e){zt!==null&&zt.tag===0&&!(M&6)&&Tr();var t=M;M|=1;var r=Xe.transition,n=H;try{if(Xe.transition=null,H=1,e)return e()}finally{H=n,Xe.transition=r,M=t,!(M&6)&&Qt()}}function qa(){Me=Cr.current,Y(Cr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,zm(r)),se!==null)for(r=se.return;r!==null;){var n=r;switch(Ea(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Io();break;case 3:Ir(),Y(Ae),Y(Ce),Aa();break;case 5:La(n);break;case 4:Ir();break;case 13:Y(Z);break;case 19:Y(Z);break;case 10:Pa(n.type._context);break;case 22:case 23:qa()}r=r.return}if(me=e,se=e=Bt(e.current,null),ye=Me=t,fe=0,zn=null,Ha=fi=sr=0,Te=mn=null,Zt!==null){for(t=0;t<Zt.length;t++)if(r=Zt[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var l=i.next;i.next=o,n.next=l}r.pending=n}Zt=null}return e}function qd(e,t){do{var r=se;try{if(_a(),yo.current=Qo,qo){for(var n=ee.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}qo=!1}if(ar=0,pe=de=ee=null,fn=!1,_n=0,$a.current=null,r===null||r.return===null){fe=1,zn=t,se=null;break}e:{var i=e,l=r.return,s=r,u=t;if(t=ye,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=ru(l);if(x!==null){x.flags&=-257,nu(x,l,s,i,t),x.mode&1&&tu(i,c,t),t=x,u=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(u),t.updateQueue=v}else w.add(u);break e}else{if(!(t&1)){tu(i,c,t),Qa();break e}u=Error(N(426))}}else if(G&&s.mode&1){var y=ru(l);if(y!==null){!(y.flags&65536)&&(y.flags|=256),nu(y,l,s,i,t),Ca(Fr(u,s));break e}}i=u=Fr(u,s),fe!==4&&(fe=2),mn===null?mn=[i]:mn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=_d(i,u,t);Ys(i,f);break e;case 1:s=u;var h=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ft===null||!Ft.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=Pd(i,s,t);Ys(i,b);break e}}i=i.return}while(i!==null)}Yd(r)}catch(j){t=j,se===r&&r!==null&&(se=r=r.return);continue}break}while(!0)}function Qd(){var e=Ko.current;return Ko.current=Qo,e===null?Qo:e}function Qa(){(fe===0||fe===3||fe===2)&&(fe=4),me===null||!(sr&268435455)&&!(fi&268435455)||Pt(me,ye)}function Xo(e,t){var r=M;M|=2;var n=Qd();(me!==e||ye!==t)&&(gt=null,rr(e,t));do try{nh();break}catch(o){qd(e,o)}while(!0);if(_a(),M=r,Ko.current=n,se!==null)throw Error(N(261));return me=null,ye=0,fe}function nh(){for(;se!==null;)Kd(se)}function oh(){for(;se!==null&&!_p();)Kd(se)}function Kd(e){var t=Xd(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Yd(e):se=t,$a.current=null}function Yd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Xm(r,t),r!==null){r.flags&=32767,se=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,se=null;return}}else if(r=Jm(r,t,Me),r!==null){se=r;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);fe===0&&(fe=5)}function Xt(e,t,r){var n=H,o=Xe.transition;try{Xe.transition=null,H=1,ih(e,t,r,n)}finally{Xe.transition=o,H=n}return null}function ih(e,t,r,n){do Tr();while(zt!==null);if(M&6)throw Error(N(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Fp(e,i),e===me&&(se=me=null,ye=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||uo||(uo=!0,Gd(zo,function(){return Tr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Xe.transition,Xe.transition=null;var l=H;H=1;var s=M;M|=4,$a.current=null,Zm(e,r),Hd(r,e),Nm(El),Lo=!!Nl,El=Nl=null,e.current=r,eh(r),Pp(),M=s,H=l,Xe.transition=i}else e.current=r;if(uo&&(uo=!1,zt=e,Jo=o),i=e.pendingLanes,i===0&&(Ft=null),Tp(r.stateNode),Ue(e,le()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Yo)throw Yo=!1,e=ql,ql=null,e;return Jo&1&&e.tag!==0&&Tr(),i=e.pendingLanes,i&1?e===Ql?hn++:(hn=0,Ql=e):hn=0,Qt(),null}function Tr(){if(zt!==null){var e=_c(Jo),t=Xe.transition,r=H;try{if(Xe.transition=null,H=16>e?16:e,zt===null)var n=!1;else{if(e=zt,zt=null,Jo=0,M&6)throw Error(N(331));var o=M;for(M|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:pn(8,d,i)}var m=d.child;if(m!==null)m.return=d,P=m;else for(;P!==null;){d=P;var p=d.sibling,x=d.return;if(Md(d),d===c){P=null;break}if(p!==null){p.return=x,P=p;break}P=x}}}var w=i.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var h=e.current;for(P=h;P!==null;){l=P;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,P=g;else e:for(l=h;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:di(9,s)}}catch(j){ne(s,s.return,j)}if(s===l){P=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,P=b;break e}P=s.return}}if(M=o,Qt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ni,e)}catch{}n=!0}return n}finally{H=r,Xe.transition=t}}return!1}function gu(e,t,r){t=Fr(r,t),t=_d(e,t,1),e=It(e,t,1),t=_e(),e!==null&&(Dn(e,1,t),Ue(e,t))}function ne(e,t,r){if(e.tag===3)gu(e,e,r);else for(;t!==null;){if(t.tag===3){gu(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ft===null||!Ft.has(n))){e=Fr(r,e),e=Pd(t,e,1),t=It(t,e,1),e=_e(),t!==null&&(Dn(t,1,e),Ue(t,e));break}}t=t.return}}function lh(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&r,me===e&&(ye&r)===r&&(fe===4||fe===3&&(ye&130023424)===ye&&500>le()-Wa?rr(e,0):Ha|=r),Ue(e,t)}function Jd(e,t){t===0&&(e.mode&1?(t=Zn,Zn<<=1,!(Zn&130023424)&&(Zn=4194304)):t=1);var r=_e();e=St(e,t),e!==null&&(Dn(e,t,r),Ue(e,r))}function ah(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Jd(e,r)}function sh(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),Jd(e,r)}var Xd;Xd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Le=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Le=!1,Ym(e,t,r);Le=!!(e.flags&131072)}else Le=!1,G&&t.flags&1048576&&td(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ko(e,t),e=t.pendingProps;var o=Ar(t,Ce.current);zr(t,r),o=Ua(null,t,n,e,o,r);var i=Ia();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(n)?(i=!0,Fo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,za(t),o.updater=ci,t.stateNode=o,o._reactInternals=t,Al(t,n,e,r),t=Il(null,t,n,!0,i,r)):(t.tag=0,G&&i&&Na(t),Re(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ko(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=ch(n),e=rt(n,e),o){case 0:t=Ul(null,t,n,e,r);break e;case 1:t=lu(null,t,n,e,r);break e;case 11:t=ou(null,t,n,e,r);break e;case 14:t=iu(null,t,n,rt(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:rt(n,o),Ul(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:rt(n,o),lu(e,t,n,o,r);case 3:e:{if(Ld(t),e===null)throw Error(N(387));n=t.pendingProps,i=t.memoizedState,o=i.element,ad(e,t),Wo(t,n,null,r);var l=t.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Fr(Error(N(423)),t),t=au(e,t,n,r,o);break e}else if(n!==o){o=Fr(Error(N(424)),t),t=au(e,t,n,r,o);break e}else for(Be=Ut(t.stateNode.containerInfo.firstChild),$e=t,G=!0,ot=null,r=id(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Dr(),n===o){t=jt(e,t,r);break e}Re(e,t,n,r)}t=t.child}return t;case 5:return sd(t),e===null&&zl(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Cl(n,o)?l=null:i!==null&&Cl(n,i)&&(t.flags|=32),Td(e,t),Re(e,t,l,r),t.child;case 6:return e===null&&zl(t),null;case 13:return Ad(e,t,r);case 4:return Ta(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ur(t,null,n,r):Re(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:rt(n,o),ou(e,t,n,o,r);case 7:return Re(e,t,t.pendingProps,r),t.child;case 8:return Re(e,t,t.pendingProps.children,r),t.child;case 12:return Re(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Q($o,n._currentValue),n._currentValue=l,i!==null)if(st(i.value,l)){if(i.children===o.children&&!Ae.current){t=jt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(i.tag===1){u=wt(-1,r&-r),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=r,u=i.alternate,u!==null&&(u.lanes|=r),Tl(i.return,r,t),s.lanes|=r;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(N(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),Tl(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Re(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,zr(t,r),o=Ge(o),n=n(o),t.flags|=1,Re(e,t,n,r),t.child;case 14:return n=t.type,o=rt(n,t.pendingProps),o=rt(n.type,o),iu(e,t,n,o,r);case 15:return Od(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:rt(n,o),ko(e,t),t.tag=1,De(n)?(e=!0,Fo(t)):e=!1,zr(t,r),Rd(t,n,o),Al(t,n,o,r),Il(null,t,n,!0,e,r);case 19:return Dd(e,t,r);case 22:return zd(e,t,r)}throw Error(N(156,t.tag))};function Gd(e,t){return Nc(e,t)}function uh(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,r,n){return new uh(e,t,r,n)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ch(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pa)return 11;if(e===ma)return 14}return 2}function Bt(e,t){var r=e.alternate;return r===null?(r=Je(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function jo(e,t,r,n,o,i){var l=2;if(n=e,typeof e=="function")Ka(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case vr:return nr(r.children,o,i,t);case fa:l=8,o|=8;break;case il:return e=Je(12,r,t,o|2),e.elementType=il,e.lanes=i,e;case ll:return e=Je(13,r,t,o),e.elementType=ll,e.lanes=i,e;case al:return e=Je(19,r,t,o),e.elementType=al,e.lanes=i,e;case sc:return pi(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lc:l=10;break e;case ac:l=9;break e;case pa:l=11;break e;case ma:l=14;break e;case Ct:l=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Je(l,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function nr(e,t,r,n){return e=Je(7,e,n,t),e.lanes=r,e}function pi(e,t,r,n){return e=Je(22,e,n,t),e.elementType=sc,e.lanes=r,e.stateNode={isHidden:!1},e}function Ji(e,t,r){return e=Je(6,e,null,t),e.lanes=r,e}function Xi(e,t,r){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dh(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ya(e,t,r,n,o,i,l,s,u){return e=new dh(e,t,r,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(i),e}function fh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Zd(e){if(!e)return Wt;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(De(r))return Zc(e,r,t)}return t}function ef(e,t,r,n,o,i,l,s,u){return e=Ya(r,n,!0,e,o,i,l,s,u),e.context=Zd(null),r=e.current,n=_e(),o=Mt(r),i=wt(n,o),i.callback=t??null,It(r,i,o),e.current.lanes=o,Dn(e,o,n),Ue(e,n),e}function mi(e,t,r,n){var o=t.current,i=_e(),l=Mt(o);return r=Zd(r),t.context===null?t.context=r:t.pendingContext=r,t=wt(i,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=It(o,t,l),e!==null&&(lt(e,o,l,i),xo(e,o,l)),l}function Go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ja(e,t){vu(e,t),(e=e.alternate)&&vu(e,t)}function ph(){return null}var tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}hi.prototype.render=Xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));mi(e,t,null,null)};hi.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){mi(null,e,null,null)}),t[bt]=null}};function hi(e){this._internalRoot=e}hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=zc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<_t.length&&t!==0&&t<_t[r].priority;r++);_t.splice(r,0,e),r===0&&Lc(e)}};function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xu(){}function mh(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var c=Go(l);i.call(c)}}var l=ef(t,n,e,0,null,!1,!1,"",xu);return e._reactRootContainer=l,e[bt]=l.current,jn(e.nodeType===8?e.parentNode:e),ur(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var c=Go(u);s.call(c)}}var u=Ya(e,0,!1,null,null,!1,!1,"",xu);return e._reactRootContainer=u,e[bt]=u.current,jn(e.nodeType===8?e.parentNode:e),ur(function(){mi(t,u,r,n)}),u}function vi(e,t,r,n,o){var i=r._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=Go(l);s.call(u)}}mi(t,l,e,o)}else l=mh(r,t,e,o,n);return Go(l)}Pc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=on(t.pendingLanes);r!==0&&(va(t,r|1),Ue(t,le()),!(M&6)&&(Mr=le()+500,Qt()))}break;case 13:ur(function(){var n=St(e,1);if(n!==null){var o=_e();lt(n,e,1,o)}}),Ja(e,1)}};xa=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var r=_e();lt(t,e,134217728,r)}Ja(e,134217728)}};Oc=function(e){if(e.tag===13){var t=Mt(e),r=St(e,t);if(r!==null){var n=_e();lt(r,e,t,n)}Ja(e,t)}};zc=function(){return H};Tc=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};vl=function(e,t,r){switch(t){case"input":if(cl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ai(n);if(!o)throw Error(N(90));cc(n),cl(n,o)}}}break;case"textarea":fc(e,r);break;case"select":t=r.value,t!=null&&Rr(e,!!r.multiple,t,!1)}};yc=Va;wc=ur;var hh={usingClientEntryPoint:!1,Events:[In,kr,ai,vc,xc,Va]},en={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gh={bundleType:en.bundleType,version:en.version,rendererPackageName:en.rendererPackageName,rendererConfig:en.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sc(e),e===null?null:e.stateNode},findFiberByHostInstance:en.findFiberByHostInstance||ph,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{ni=co.inject(gh),mt=co}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hh;We.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ga(t))throw Error(N(200));return fh(e,t,null,r)};We.createRoot=function(e,t){if(!Ga(e))throw Error(N(299));var r=!1,n="",o=tf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ya(e,1,!1,null,null,r,!1,n,o),e[bt]=t.current,jn(e.nodeType===8?e.parentNode:e),new Xa(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Sc(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return ur(e)};We.hydrate=function(e,t,r){if(!gi(t))throw Error(N(200));return vi(null,e,t,!0,r)};We.hydrateRoot=function(e,t,r){if(!Ga(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",l=tf;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=ef(t,null,e,1,r??null,o,!1,i,l),e[bt]=t.current,jn(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new hi(t)};We.render=function(e,t,r){if(!gi(t))throw Error(N(200));return vi(null,e,t,!1,r)};We.unmountComponentAtNode=function(e){if(!gi(e))throw Error(N(40));return e._reactRootContainer?(ur(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};We.unstable_batchedUpdates=Va;We.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!gi(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return vi(e,t,r,!1,n)};We.version="18.3.1-next-f1338f8080-20240426";function rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf)}catch(e){console.error(e)}}rf(),rc.exports=We;var vh=rc.exports,yu=vh;nl.createRoot=yu.createRoot,nl.hydrateRoot=yu.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tn(){return Tn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Tn.apply(null,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const wu="popstate";function xh(e){e===void 0&&(e={});function t(n,o){let{pathname:i,search:l,hash:s}=n.location;return Jl("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Zo(o)}return wh(t,r,null,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Za(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yh(){return Math.random().toString(36).substr(2,8)}function ku(e,t){return{usr:e.state,key:e.key,idx:t}}function Jl(e,t,r,n){return r===void 0&&(r=null),Tn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vr(t):t,{state:r,key:t&&t.key||n||yh()})}function Zo(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Vr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function wh(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,l=o.history,s=Tt.Pop,u=null,c=d();c==null&&(c=0,l.replaceState(Tn({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function m(){s=Tt.Pop;let y=d(),f=y==null?null:y-c;c=y,u&&u({action:s,location:v.location,delta:f})}function p(y,f){s=Tt.Push;let h=Jl(v.location,y,f);c=d()+1;let g=ku(h,c),b=v.createHref(h);try{l.pushState(g,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(b)}i&&u&&u({action:s,location:v.location,delta:1})}function x(y,f){s=Tt.Replace;let h=Jl(v.location,y,f);c=d();let g=ku(h,c),b=v.createHref(h);l.replaceState(g,"",b),i&&u&&u({action:s,location:v.location,delta:0})}function w(y){let f=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof y=="string"?y:Zo(y);return h=h.replace(/ $/,"%20"),ue(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let v={get action(){return s},get location(){return e(o,l)},listen(y){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(wu,m),u=y,()=>{o.removeEventListener(wu,m),u=null}},createHref(y){return t(o,y)},createURL:w,encodeLocation(y){let f=w(y);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:x,go(y){return l.go(y)}};return v}var bu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bu||(bu={}));function kh(e,t,r){return r===void 0&&(r="/"),bh(e,t,r)}function bh(e,t,r,n){let o=typeof t=="string"?Vr(t):t,i=es(o.pathname||"/",r);if(i==null)return null;let l=nf(e);Sh(l);let s=null,u=Ah(i);for(let c=0;s==null&&c<l.length;++c)s=zh(l[c],u);return s}function nf(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,l,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(ue(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let c=$t([n,u.relativePath]),d=r.concat(u);i.children&&i.children.length>0&&(ue(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nf(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Ph(c,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let u of of(i.path))o(i,l,u)}),t}function of(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let l=of(n.join("/")),s=[];return s.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Sh(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Oh(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const jh=/^:[\w-]+$/,Nh=3,Eh=2,Ch=1,Rh=10,_h=-2,Su=e=>e==="*";function Ph(e,t){let r=e.split("/"),n=r.length;return r.some(Su)&&(n+=_h),t&&(n+=Eh),r.filter(o=>!Su(o)).reduce((o,i)=>o+(jh.test(i)?Nh:i===""?Ch:Rh),n)}function Oh(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function zh(e,t,r){let{routesMeta:n}=e,o={},i="/",l=[];for(let s=0;s<n.length;++s){let u=n[s],c=s===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",m=Th({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!m)return null;Object.assign(o,m.params),l.push({params:o,pathname:$t([i,m.pathname]),pathnameBase:Mh($t([i,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(i=$t([i,m.pathnameBase]))}return l}function Th(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Lh(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((c,d,m)=>{let{paramName:p,isOptional:x}=d;if(p==="*"){let v=s[m]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const w=s[m];return x&&!w?c[p]=void 0:c[p]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function Lh(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Za(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(n.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Ah(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Za(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function es(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Dh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Uh=e=>Dh.test(e);function Ih(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Vr(e):e,i;if(r)if(Uh(r))i=r;else{if(r.includes("//")){let l=r;r=sf(r),Za(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?i=ju(r.substring(1),"/"):i=ju(r,t)}else i=t;return{pathname:i,search:Bh(n),hash:$h(o)}}function ju(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Gi(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fh(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function lf(e,t){let r=Fh(e);return t?r.map((n,o)=>o===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function af(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=Vr(e):(o=Tn({},e),ue(!o.pathname||!o.pathname.includes("?"),Gi("?","pathname","search",o)),ue(!o.pathname||!o.pathname.includes("#"),Gi("#","pathname","hash",o)),ue(!o.search||!o.search.includes("#"),Gi("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=r;else{let m=t.length-1;if(!n&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),m-=1;o.pathname=p.join("/")}s=m>=0?t[m]:"/"}let u=Ih(o,s),c=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const sf=e=>e.replace(/\/\/+/g,"/"),$t=e=>sf(e.join("/")),Mh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$h=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uf=["post","put","patch","delete"];new Set(uf);const Wh=["get",...uf];new Set(Wh);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ln(){return Ln=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ln.apply(null,arguments)}const ts=S.createContext(null),Vh=S.createContext(null),pr=S.createContext(null),xi=S.createContext(null),Kt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),cf=S.createContext(null);function qh(e,t){let{relative:r}=t===void 0?{}:t;Mn()||ue(!1);let{basename:n,navigator:o}=S.useContext(pr),{hash:i,pathname:l,search:s}=ff(e,{relative:r}),u=l;return n!=="/"&&(u=l==="/"?n:$t([n,l])),o.createHref({pathname:u,search:s,hash:i})}function Mn(){return S.useContext(xi)!=null}function Bn(){return Mn()||ue(!1),S.useContext(xi).location}function df(e){S.useContext(pr).static||S.useLayoutEffect(e)}function Yt(){let{isDataRoute:e}=S.useContext(Kt);return e?ig():Qh()}function Qh(){Mn()||ue(!1);let e=S.useContext(ts),{basename:t,future:r,navigator:n}=S.useContext(pr),{matches:o}=S.useContext(Kt),{pathname:i}=Bn(),l=JSON.stringify(lf(o,r.v7_relativeSplatPath)),s=S.useRef(!1);return df(()=>{s.current=!0}),S.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let m=af(c,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:$t([t,m.pathname])),(d.replace?n.replace:n.push)(m,d.state,d)},[t,n,l,i,e])}function rs(){let{matches:e}=S.useContext(Kt),t=e[e.length-1];return t?t.params:{}}function ff(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=S.useContext(pr),{matches:o}=S.useContext(Kt),{pathname:i}=Bn(),l=JSON.stringify(lf(o,n.v7_relativeSplatPath));return S.useMemo(()=>af(e,JSON.parse(l),i,r==="path"),[e,l,i,r])}function Kh(e,t){return Yh(e,t)}function Yh(e,t,r,n){Mn()||ue(!1);let{navigator:o}=S.useContext(pr),{matches:i}=S.useContext(Kt),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=Bn(),d;if(t){var m;let y=typeof t=="string"?Vr(t):t;u==="/"||(m=y.pathname)!=null&&m.startsWith(u)||ue(!1),d=y}else d=c;let p=d.pathname||"/",x=p;if(u!=="/"){let y=u.replace(/^\//,"").split("/");x="/"+p.replace(/^\//,"").split("/").slice(y.length).join("/")}let w=kh(e,{pathname:x}),v=eg(w&&w.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:$t([u,o.encodeLocation?o.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?u:$t([u,o.encodeLocation?o.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r,n);return t&&v?S.createElement(xi.Provider,{value:{location:Ln({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Tt.Pop}},v):v}function Jh(){let e=og(),t=Hh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),r?S.createElement("pre",{style:o},r):null,null)}const Xh=S.createElement(Jh,null);class Gh extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?S.createElement(Kt.Provider,{value:this.props.routeContext},S.createElement(cf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zh(e){let{routeContext:t,match:r,children:n}=e,o=S.useContext(ts);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),S.createElement(Kt.Provider,{value:t},n)}function eg(e,t,r,n){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,s=(o=r)==null?void 0:o.errors;if(s!=null){let d=l.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);d>=0||ue(!1),l=l.slice(0,Math.min(l.length,d+1))}let u=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<l.length;d++){let m=l[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=d),m.route.id){let{loaderData:p,errors:x}=r,w=m.route.loader&&p[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||w){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,m,p)=>{let x,w=!1,v=null,y=null;r&&(x=s&&m.route.id?s[m.route.id]:void 0,v=m.route.errorElement||Xh,u&&(c<0&&p===0?(lg("route-fallback"),w=!0,y=null):c===p&&(w=!0,y=m.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,p+1)),h=()=>{let g;return x?g=v:w?g=y:m.route.Component?g=S.createElement(m.route.Component,null):m.route.element?g=m.route.element:g=d,S.createElement(Zh,{match:m,routeContext:{outlet:d,matches:f,isDataRoute:r!=null},children:g})};return r&&(m.route.ErrorBoundary||m.route.errorElement||p===0)?S.createElement(Gh,{location:r.location,revalidation:r.revalidation,component:v,error:x,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var pf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pf||{}),mf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mf||{});function tg(e){let t=S.useContext(ts);return t||ue(!1),t}function rg(e){let t=S.useContext(Vh);return t||ue(!1),t}function ng(e){let t=S.useContext(Kt);return t||ue(!1),t}function hf(e){let t=ng(),r=t.matches[t.matches.length-1];return r.route.id||ue(!1),r.route.id}function og(){var e;let t=S.useContext(cf),r=rg(),n=hf();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function ig(){let{router:e}=tg(pf.UseNavigateStable),t=hf(mf.UseNavigateStable),r=S.useRef(!1);return df(()=>{r.current=!0}),S.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ln({fromRouteId:t},i)))},[e,t])}const Nu={};function lg(e,t,r){Nu[e]||(Nu[e]=!0)}function ag(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function tt(e){ue(!1)}function sg(e){let{basename:t="/",children:r=null,location:n,navigationType:o=Tt.Pop,navigator:i,static:l=!1,future:s}=e;Mn()&&ue(!1);let u=t.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:u,navigator:i,static:l,future:Ln({v7_relativeSplatPath:!1},s)}),[u,s,i,l]);typeof n=="string"&&(n=Vr(n));let{pathname:d="/",search:m="",hash:p="",state:x=null,key:w="default"}=n,v=S.useMemo(()=>{let y=es(d,u);return y==null?null:{location:{pathname:y,search:m,hash:p,state:x,key:w},navigationType:o}},[u,d,m,p,x,w,o]);return v==null?null:S.createElement(pr.Provider,{value:c},S.createElement(xi.Provider,{children:r,value:v}))}function ug(e){let{children:t,location:r}=e;return Kh(Xl(t),r)}new Promise(()=>{});function Xl(e,t){t===void 0&&(t=[]);let r=[];return S.Children.forEach(e,(n,o)=>{if(!S.isValidElement(n))return;let i=[...t,o];if(n.type===S.Fragment){r.push.apply(r,Xl(n.props.children,i));return}n.type!==tt&&ue(!1),!n.props.index||!n.props.children||ue(!1);let l={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Xl(n.props.children,i)),r.push(l)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gl(){return Gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Gl.apply(null,arguments)}function cg(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function dg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fg(e,t){return e.button===0&&(!t||t==="_self")&&!dg(e)}const pg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mg="6";try{window.__reactRouterVersion=mg}catch{}const hg="startTransition",Eu=lp[hg];function gg(e){let{basename:t,children:r,future:n,window:o}=e,i=S.useRef();i.current==null&&(i.current=xh({window:o,v5Compat:!0}));let l=i.current,[s,u]=S.useState({action:l.action,location:l.location}),{v7_startTransition:c}=n||{},d=S.useCallback(m=>{c&&Eu?Eu(()=>u(m)):u(m)},[u,c]);return S.useLayoutEffect(()=>l.listen(d),[l,d]),S.useEffect(()=>ag(n),[n]),S.createElement(sg,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:l,future:n})}const vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=S.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:l,state:s,target:u,to:c,preventScrollReset:d,viewTransition:m}=t,p=cg(t,pg),{basename:x}=S.useContext(pr),w,v=!1;if(typeof c=="string"&&xg.test(c)&&(w=c,vg))try{let g=new URL(window.location.href),b=c.startsWith("//")?new URL(g.protocol+c):new URL(c),j=es(b.pathname,x);b.origin===g.origin&&j!=null?c=j+b.search+b.hash:v=!0}catch{}let y=qh(c,{relative:o}),f=yg(c,{replace:l,state:s,target:u,preventScrollReset:d,relative:o,viewTransition:m});function h(g){n&&n(g),g.defaultPrevented||f(g)}return S.createElement("a",Gl({},p,{href:w||y,onClick:v||i?n:h,ref:r,target:u}))});var Cu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cu||(Cu={}));var Ru;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ru||(Ru={}));function yg(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,u=Yt(),c=Bn(),d=ff(e,{relative:l});return S.useCallback(m=>{if(fg(m,r)){m.preventDefault();let p=n!==void 0?n:Zo(c)===Zo(d);u(e,{replace:p,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[c,u,d,n,o,r,e,i,l,s])}const gf=S.createContext();function wg({children:e}){const[t,r]=S.useState([]),[n,o]=S.useState(!1);S.useEffect(()=>{try{const d=localStorage.getItem("cart");d&&r(JSON.parse(d))}catch{}},[]),S.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(t))},[t]);const i=d=>{r(m=>{var p,x,w,v;return m.find(y=>y.id===d._id)?m:[...m,{id:d._id,title:d.title,price:d.price,image:((x=(p=d.images)==null?void 0:p[0])==null?void 0:x.url)||d.thumbnail||"",artist:((w=d.artist)==null?void 0:w.name)||"Unknown",artistId:(v=d.artist)==null?void 0:v._id,dimensions:d.dimensions}]}),o(!0)},l=d=>{r(m=>m.filter(p=>p.id!==d))},s=()=>r([]),u=t.reduce((d,m)=>{var p;return d+(((p=m.price)==null?void 0:p.ngn)||0)},0),c=t.reduce((d,m)=>{var p;return d+(((p=m.price)==null?void 0:p.usd)||0)},0);return a.jsx(gf.Provider,{value:{items:t,addItem:i,removeItem:l,clearCart:s,totalNgn:u,totalUsd:c,showCart:n,setShowCart:o,count:t.length},children:e})}const $n=()=>S.useContext(gf);function kg(){const{count:e,setShowCart:t}=$n(),[r,n]=S.useState(!1),[o,i]=S.useState(!1),l=Bn(),s=JSON.parse(localStorage.getItem("user")||"null");S.useEffect(()=>{const c=()=>n(window.scrollY>20);return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),S.useEffect(()=>{i(!1)},[l]);const u=c=>l.pathname===c;return a.jsxs("nav",{className:`glass-navbar ${r?"scrolled":""}`,children:[a.jsxs("div",{className:"navbar-pill",children:[a.jsxs(Ye,{to:"/",className:"navbar-brand",children:["Heritage",a.jsx("span",{className:"brand-mark",children:"AR"})]}),a.jsxs("div",{className:`navbar-links ${o?"open":""}`,children:[a.jsx(Ye,{to:"/",className:u("/")?"active":"",children:"Discover Artworks"}),a.jsx(Ye,{to:"/artists",className:u("/artists")?"active":"",children:"Explore Artists"}),(s==null?void 0:s.role)==="artist"&&a.jsx(Ye,{to:"/dashboard",className:u("/dashboard")?"active":"",children:"Dashboard"}),s?a.jsxs("div",{className:"navbar-user",children:[a.jsx(Ye,{to:"/profile",className:"user-name",children:s.name}),a.jsx("button",{className:"btn-logout",onClick:()=>{localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.href="/"},children:"Logout"})]}):a.jsx(Ye,{to:"/login",className:"btn-nav-cta",children:"Become a Collector"})]}),a.jsxs("button",{className:"cart-btn",onClick:()=>t(!0),"aria-label":"Cart",children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"9",cy:"21",r:"1"}),a.jsx("circle",{cx:"20",cy:"21",r:"1"}),a.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),e>0&&a.jsx("span",{className:"cart-badge",children:e})]}),a.jsxs("button",{className:`hamburger ${o?"open":""}`,onClick:()=>i(!o),"aria-label":"Toggle menu",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]}),a.jsx("style",{children:`
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
          background: #1d1813;
          border-radius: 999px;
          box-shadow: 0 8px 30px rgba(40, 30, 20, 0.18);
        }

        .navbar-brand {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: #faf7f2;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }
        .brand-mark { color: var(--color-accent); margin-left: 2px; }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-left: auto;
        }
        .navbar-links a {
          color: rgba(250, 247, 242, 0.7);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color var(--transition-fast);
          white-space: nowrap;
        }
        .navbar-links a:hover,
        .navbar-links a.active { color: #faf7f2; }

        .navbar-user { display: flex; align-items: center; gap: 14px; }
        .user-name { color: #faf7f2 !important; font-weight: 600; }
        .btn-logout {
          background: transparent;
          color: rgba(250, 247, 242, 0.6);
          font-size: 0.82rem;
          padding: 6px 14px;
          border: 1px solid rgba(250, 247, 242, 0.2);
          border-radius: 999px;
          transition: all var(--transition-fast);
        }
        .btn-logout:hover { border-color: var(--color-accent); color: var(--color-accent); }

        .btn-nav-cta {
          background: var(--color-accent);
          color: #1d1813 !important;
          padding: 10px 22px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.88rem;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }
        .btn-nav-cta:hover { background: var(--color-accent-light); transform: translateY(-1px); }

        .cart-btn {
          position: relative;
          background: rgba(250, 247, 242, 0.1);
          width: 40px; height: 40px;
          border-radius: 50%;
          color: #faf7f2;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background var(--transition-fast);
        }
        .cart-btn:hover { background: rgba(250, 247, 242, 0.2); }
        .cart-badge {
          position: absolute; top: -2px; right: -2px;
          min-width: 18px; height: 18px;
          background: var(--color-accent);
          color: #1d1813;
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
          background: #faf7f2; border-radius: 2px;
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
            background: #1d1813;
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
      `})]})}function bg(){const{items:e,removeItem:t,clearCart:r,totalNgn:n,totalUsd:o,showCart:i,setShowCart:l,count:s}=$n(),u=Yt();return i?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"cart-overlay",onClick:()=>l(!1)}),a.jsxs("div",{className:"cart-drawer",children:[a.jsxs("div",{className:"cart-header",children:[a.jsxs("h2",{children:["Cart (",s,")"]}),a.jsx("button",{className:"cart-close",onClick:()=>l(!1),children:"×"})]}),e.length===0?a.jsx("div",{className:"cart-empty",children:a.jsx("p",{children:"Your cart is empty"})}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"cart-items",children:e.map(c=>{var d,m;return a.jsxs("div",{className:"cart-item",children:[a.jsx("div",{className:"cart-item-img",children:a.jsx("img",{src:c.image,alt:c.title})}),a.jsxs("div",{className:"cart-item-info",children:[a.jsx("strong",{children:c.title}),a.jsx("span",{className:"cart-item-artist",children:c.artist}),a.jsxs("span",{className:"cart-item-price",children:["$",(m=(d=c.price)==null?void 0:d.usd)==null?void 0:m.toLocaleString()]})]}),a.jsx("button",{className:"cart-item-remove",onClick:()=>t(c.id),children:"×"})]},c.id)})}),a.jsxs("div",{className:"cart-footer",children:[a.jsxs("div",{className:"cart-total",children:[a.jsx("span",{children:"Total"}),a.jsxs("div",{children:[a.jsxs("strong",{children:["$",o.toLocaleString()]}),a.jsxs("small",{children:["₦",n.toLocaleString()]})]})]}),a.jsx("button",{className:"cart-checkout",onClick:()=>{l(!1),u("/checkout")},children:"Checkout"}),a.jsx("button",{className:"cart-clear",onClick:r,children:"Clear Cart"})]})]})]}),a.jsx("style",{children:`
        .cart-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.6);
          z-index: 200; animation: fadeIn 0.2s ease;
        }
        .cart-drawer {
          position: fixed; top: 0; right: 0; bottom: 0; width: 380px;
          background: var(--color-bg-secondary);
          border-left: 1px solid var(--color-border);
          z-index: 201; display: flex; flex-direction: column;
          animation: fadeIn 0.3s ease;
          max-width: 100vw;
        }
        .cart-header {
          display: flex; justify-content: space-between; align-items: center;
          padding: 20px 24px; border-bottom: 1px solid var(--color-border);
        }
        .cart-header h2 {
          font-family: var(--font-display); font-size: 1.2rem;
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
        .cart-total strong { font-size: 1.2rem; }
        .cart-checkout {
          padding: 14px; background: var(--color-accent); color: var(--color-bg);
          border-radius: var(--radius-sm); font-weight: 700; font-size: 1rem;
        }
        .cart-checkout:hover { background: var(--color-accent-light); }
        .cart-clear {
          padding: 8px; background: none; color: var(--color-text-muted);
          font-size: 0.85rem;
        }
        .cart-clear:hover { color: var(--color-error); }
      `})]}):null}function vf(e,t){return function(){return e.apply(t,arguments)}}const{toString:Sg}=Object.prototype,{getPrototypeOf:yi}=Object,{iterator:wi,toStringTag:xf}=Symbol,ki=(e=>t=>{const r=Sg.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ut=e=>(e=e.toLowerCase(),t=>ki(t)===e),bi=e=>t=>typeof t===e,{isArray:qr}=Array,Br=bi("undefined");function Hn(e){return e!==null&&!Br(e)&&e.constructor!==null&&!Br(e.constructor)&&Ie(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const yf=ut("ArrayBuffer");function jg(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&yf(e.buffer),t}const Ng=bi("string"),Ie=bi("function"),wf=bi("number"),Wn=e=>e!==null&&typeof e=="object",Eg=e=>e===!0||e===!1,No=e=>{if(ki(e)!=="object")return!1;const t=yi(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(xf in e)&&!(wi in e)},Cg=e=>{if(!Wn(e)||Hn(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Rg=ut("Date"),_g=ut("File"),Pg=e=>!!(e&&typeof e.uri<"u"),Og=e=>e&&typeof e.getParts<"u",zg=ut("Blob"),Tg=ut("FileList"),Lg=e=>Wn(e)&&Ie(e.pipe);function Ag(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const _u=Ag(),Pu=typeof _u.FormData<"u"?_u.FormData:void 0,Dg=e=>{if(!e)return!1;if(Pu&&e instanceof Pu)return!0;const t=yi(e);if(!t||t===Object.prototype||!Ie(e.append))return!1;const r=ki(e);return r==="formdata"||r==="object"&&Ie(e.toString)&&e.toString()==="[object FormData]"},Ug=ut("URLSearchParams"),[Ig,Fg,Mg,Bg]=["ReadableStream","Request","Response","Headers"].map(ut),$g=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vn(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),qr(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{if(Hn(e))return;const i=r?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let s;for(n=0;n<l;n++)s=i[n],t.call(null,e[s],s,e)}}function kf(e,t){if(Hn(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const tr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,bf=e=>!Br(e)&&e!==tr;function Zl(...e){const{caseless:t,skipUndefined:r}=bf(this)&&this||{},n={},o=(i,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const s=t&&kf(n,l)||l,u=ea(n,s)?n[s]:void 0;No(u)&&No(i)?n[s]=Zl(u,i):No(i)?n[s]=Zl({},i):qr(i)?n[s]=i.slice():(!r||!Br(i))&&(n[s]=i)};for(let i=0,l=e.length;i<l;i++)e[i]&&Vn(e[i],o);return n}const Hg=(e,t,r,{allOwnKeys:n}={})=>(Vn(t,(o,i)=>{r&&Ie(o)?Object.defineProperty(e,i,{__proto__:null,value:vf(o,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{__proto__:null,value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),e),Wg=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Vg=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),r&&Object.assign(e.prototype,r)},qg=(e,t,r,n)=>{let o,i,l;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!n||n(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=r!==!1&&yi(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Qg=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Kg=e=>{if(!e)return null;if(qr(e))return e;let t=e.length;if(!wf(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Yg=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&yi(Uint8Array)),Jg=(e,t)=>{const n=(e&&e[wi]).call(e);let o;for(;(o=n.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Xg=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Gg=ut("HTMLFormElement"),Zg=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),ea=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),ev=ut("RegExp"),Sf=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Vn(r,(o,i)=>{let l;(l=t(o,i,e))!==!1&&(n[i]=l||o)}),Object.defineProperties(e,n)},tv=e=>{Sf(e,(t,r)=>{if(Ie(e)&&["arguments","caller","callee"].includes(r))return!1;const n=e[r];if(Ie(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},rv=(e,t)=>{const r={},n=o=>{o.forEach(i=>{r[i]=!0})};return qr(e)?n(e):n(String(e).split(t)),r},nv=()=>{},ov=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function iv(e){return!!(e&&Ie(e.append)&&e[xf]==="FormData"&&e[wi])}const lv=e=>{const t=new WeakSet,r=n=>{if(Wn(n)){if(t.has(n))return;if(Hn(n))return n;if(!("toJSON"in n)){t.add(n);const o=qr(n)?[]:{};return Vn(n,(i,l)=>{const s=r(i);!Br(s)&&(o[l]=s)}),t.delete(n),o}}return n};return r(e)},av=ut("AsyncFunction"),sv=e=>e&&(Wn(e)||Ie(e))&&Ie(e.then)&&Ie(e.catch),jf=((e,t)=>e?setImmediate:t?((r,n)=>(tr.addEventListener("message",({source:o,data:i})=>{o===tr&&i===r&&n.length&&n.shift()()},!1),o=>{n.push(o),tr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Ie(tr.postMessage)),uv=typeof queueMicrotask<"u"?queueMicrotask.bind(tr):typeof process<"u"&&process.nextTick||jf,cv=e=>e!=null&&Ie(e[wi]),k={isArray:qr,isArrayBuffer:yf,isBuffer:Hn,isFormData:Dg,isArrayBufferView:jg,isString:Ng,isNumber:wf,isBoolean:Eg,isObject:Wn,isPlainObject:No,isEmptyObject:Cg,isReadableStream:Ig,isRequest:Fg,isResponse:Mg,isHeaders:Bg,isUndefined:Br,isDate:Rg,isFile:_g,isReactNativeBlob:Pg,isReactNative:Og,isBlob:zg,isRegExp:ev,isFunction:Ie,isStream:Lg,isURLSearchParams:Ug,isTypedArray:Yg,isFileList:Tg,forEach:Vn,merge:Zl,extend:Hg,trim:$g,stripBOM:Wg,inherits:Vg,toFlatObject:qg,kindOf:ki,kindOfTest:ut,endsWith:Qg,toArray:Kg,forEachEntry:Jg,matchAll:Xg,isHTMLForm:Gg,hasOwnProperty:ea,hasOwnProp:ea,reduceDescriptors:Sf,freezeMethods:tv,toObjectSet:rv,toCamelCase:Zg,noop:nv,toFiniteNumber:ov,findKey:kf,global:tr,isContextDefined:bf,isSpecCompliantForm:iv,toJSONObject:lv,isAsyncFn:av,isThenable:sv,setImmediate:jf,asap:uv,isIterable:cv},dv=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fv=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),r=l.substring(0,o).trim().toLowerCase(),n=l.substring(o+1).trim(),!(!r||t[r]&&dv[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};function pv(e){let t=0,r=e.length;for(;t<r;){const n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;r>t;){const n=e.charCodeAt(r-1);if(n!==9&&n!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}const mv=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),hv=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function ns(e,t){return k.isArray(e)?e.map(r=>ns(r,t)):pv(String(e).replace(t,""))}const gv=e=>ns(e,mv),vv=e=>ns(e,hv);function Nf(e){const t=Object.create(null);return k.forEach(e.toJSON(),(r,n)=>{t[n]=vv(r)}),t}const Ou=Symbol("internals");function tn(e){return e&&String(e).trim().toLowerCase()}function Eo(e){return e===!1||e==null?e:k.isArray(e)?e.map(Eo):gv(String(e))}function xv(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const yv=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Zi(e,t,r,n,o){if(k.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!k.isString(t)){if(k.isString(n))return t.indexOf(n)!==-1;if(k.isRegExp(n))return n.test(t)}}function wv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function kv(e,t){const r=k.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{__proto__:null,value:function(o,i,l){return this[n].call(this,t,o,i,l)},configurable:!0})})}let Pe=class{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function i(s,u,c){const d=tn(u);if(!d)throw new Error("header name must be a non-empty string");const m=k.findKey(o,d);(!m||o[m]===void 0||c===!0||c===void 0&&o[m]!==!1)&&(o[m||u]=Eo(s))}const l=(s,u)=>k.forEach(s,(c,d)=>i(c,d,u));if(k.isPlainObject(t)||t instanceof this.constructor)l(t,r);else if(k.isString(t)&&(t=t.trim())&&!yv(t))l(fv(t),r);else if(k.isObject(t)&&k.isIterable(t)){let s={},u,c;for(const d of t){if(!k.isArray(d))throw TypeError("Object iterator must return a key-value pair");s[c=d[0]]=(u=s[c])?k.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}l(s,r)}else t!=null&&i(r,t,n);return this}get(t,r){if(t=tn(t),t){const n=k.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return xv(o);if(k.isFunction(r))return r.call(this,o,n);if(k.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=tn(t),t){const n=k.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Zi(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function i(l){if(l=tn(l),l){const s=k.findKey(n,l);s&&(!r||Zi(n,n[s],s,r))&&(delete n[s],o=!0)}}return k.isArray(t)?t.forEach(i):i(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const i=r[n];(!t||Zi(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const r=this,n={};return k.forEach(this,(o,i)=>{const l=k.findKey(n,i);if(l){r[l]=Eo(o),delete r[i];return}const s=t?wv(i):String(i).trim();s!==i&&delete r[i],r[s]=Eo(o),n[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return k.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&k.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[Ou]=this[Ou]={accessors:{}}).accessors,o=this.prototype;function i(l){const s=tn(l);n[s]||(kv(o,l),n[s]=!0)}return k.isArray(t)?t.forEach(i):i(t),this}};Pe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Pe.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});k.freezeMethods(Pe);const bv="[REDACTED ****]";function Sv(e){if(k.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(k.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function jv(e,t){const r=new Set(t.map(i=>String(i).toLowerCase())),n=[],o=i=>{if(i===null||typeof i!="object"||k.isBuffer(i))return i;if(n.indexOf(i)!==-1)return;i instanceof Pe&&(i=i.toJSON()),n.push(i);let l;if(k.isArray(i))l=[],i.forEach((s,u)=>{const c=o(s);k.isUndefined(c)||(l[u]=c)});else{if(!k.isPlainObject(i)&&Sv(i))return n.pop(),i;l=Object.create(null);for(const[s,u]of Object.entries(i)){const c=r.has(s.toLowerCase())?bv:o(u);k.isUndefined(c)||(l[s]=c)}}return n.pop(),l};return o(e)}let T=class Ef extends Error{static from(t,r,n,o,i,l){const s=new Ef(t.message,r||t.code,n,o,i);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),l&&Object.assign(s,l),s}constructor(t,r,n,o,i){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),n&&(this.config=n),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){const t=this.config,r=t&&k.hasOwnProp(t,"redact")?t.redact:void 0,n=k.isArray(r)&&r.length>0?jv(t,r):k.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};T.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";T.ERR_BAD_OPTION="ERR_BAD_OPTION";T.ECONNABORTED="ECONNABORTED";T.ETIMEDOUT="ETIMEDOUT";T.ECONNREFUSED="ECONNREFUSED";T.ERR_NETWORK="ERR_NETWORK";T.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";T.ERR_DEPRECATED="ERR_DEPRECATED";T.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";T.ERR_BAD_REQUEST="ERR_BAD_REQUEST";T.ERR_CANCELED="ERR_CANCELED";T.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";T.ERR_INVALID_URL="ERR_INVALID_URL";T.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Nv=null;function ta(e){return k.isPlainObject(e)||k.isArray(e)}function Cf(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function el(e,t,r){return e?e.concat(t).map(function(o,i){return o=Cf(o),!r&&i?"["+o+"]":o}).join(r?".":""):t}function Ev(e){return k.isArray(e)&&!e.some(ta)}const Cv=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Si(e,t,r){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=k.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,f){return!k.isUndefined(f[y])});const n=r.metaTokens,o=r.visitor||m,i=r.dots,l=r.indexes,s=r.Blob||typeof Blob<"u"&&Blob,u=r.maxDepth===void 0?100:r.maxDepth,c=s&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(k.isDate(v))return v.toISOString();if(k.isBoolean(v))return v.toString();if(!c&&k.isBlob(v))throw new T("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(v)||k.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function m(v,y,f){let h=v;if(k.isReactNative(t)&&k.isReactNativeBlob(v))return t.append(el(f,y,i),d(v)),!1;if(v&&!f&&typeof v=="object"){if(k.endsWith(y,"{}"))y=n?y:y.slice(0,-2),v=JSON.stringify(v);else if(k.isArray(v)&&Ev(v)||(k.isFileList(v)||k.endsWith(y,"[]"))&&(h=k.toArray(v)))return y=Cf(y),h.forEach(function(b,j){!(k.isUndefined(b)||b===null)&&t.append(l===!0?el([y],j,i):l===null?y:y+"[]",d(b))}),!1}return ta(v)?!0:(t.append(el(f,y,i),d(v)),!1)}const p=[],x=Object.assign(Cv,{defaultVisitor:m,convertValue:d,isVisitable:ta});function w(v,y,f=0){if(!k.isUndefined(v)){if(f>u)throw new T("Object is too deeply nested ("+f+" levels). Max depth: "+u,T.ERR_FORM_DATA_DEPTH_EXCEEDED);if(p.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(v),k.forEach(v,function(g,b){(!(k.isUndefined(g)||g===null)&&o.call(t,g,k.isString(b)?b.trim():b,y,x))===!0&&w(g,y?y.concat(b):[b],f+1)}),p.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return w(e),t}function zu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(n){return t[n]})}function os(e,t){this._pairs=[],e&&Si(e,this,t)}const Rf=os.prototype;Rf.append=function(t,r){this._pairs.push([t,r])};Rf.toString=function(t){const r=t?function(n){return t.call(this,n,zu)}:zu;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function Rv(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function _f(e,t,r){if(!t)return e;const n=r&&r.encode||Rv,o=k.isFunction(r)?{serialize:r}:r,i=o&&o.serialize;let l;if(i?l=i(t,o):l=k.isURLSearchParams(t)?t.toString():new os(t,o).toString(n),l){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class Tu{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(n){n!==null&&t(n)})}}const is={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},_v=typeof URLSearchParams<"u"?URLSearchParams:os,Pv=typeof FormData<"u"?FormData:null,Ov=typeof Blob<"u"?Blob:null,zv={isBrowser:!0,classes:{URLSearchParams:_v,FormData:Pv,Blob:Ov},protocols:["http","https","file","blob","url","data"]},ls=typeof window<"u"&&typeof document<"u",ra=typeof navigator=="object"&&navigator||void 0,Tv=ls&&(!ra||["ReactNative","NativeScript","NS"].indexOf(ra.product)<0),Lv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Av=ls&&window.location.href||"http://localhost",Dv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ls,hasStandardBrowserEnv:Tv,hasStandardBrowserWebWorkerEnv:Lv,navigator:ra,origin:Av},Symbol.toStringTag,{value:"Module"})),Ee={...Dv,...zv};function Uv(e,t){return Si(e,new Ee.classes.URLSearchParams,{visitor:function(r,n,o,i){return Ee.isNode&&k.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function Iv(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Fv(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function Pf(e){function t(r,n,o,i){let l=r[i++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),u=i>=r.length;return l=!l&&k.isArray(o)?o.length:l,u?(k.hasOwnProp(o,l)?o[l]=k.isArray(o[l])?o[l].concat(n):[o[l],n]:o[l]=n,!s):((!k.hasOwnProp(o,l)||!k.isObject(o[l]))&&(o[l]=[]),t(r,n,o[l],i)&&k.isArray(o[l])&&(o[l]=Fv(o[l])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const r={};return k.forEachEntry(e,(n,o)=>{t(Iv(n),o,r,0)}),r}return null}const hr=(e,t)=>e!=null&&k.hasOwnProp(e,t)?e[t]:void 0;function Mv(e,t,r){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const qn={transitional:is,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=k.isObject(t);if(i&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return o?JSON.stringify(Pf(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){const u=hr(this,"formSerializer");if(n.indexOf("application/x-www-form-urlencoded")>-1)return Uv(t,u).toString();if((s=k.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=hr(this,"env"),d=c&&c.FormData;return Si(s?{"files[]":t}:t,d&&new d,u)}}return i||o?(r.setContentType("application/json",!1),Mv(t)):t}],transformResponse:[function(t){const r=hr(this,"transitional")||qn.transitional,n=r&&r.forcedJSONParsing,o=hr(this,"responseType"),i=o==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(n&&!o||i)){const s=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t,hr(this,"parseReviver"))}catch(u){if(s)throw u.name==="SyntaxError"?T.from(u,T.ERR_BAD_RESPONSE,this,null,hr(this,"response")):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ee.classes.FormData,Blob:Ee.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch","query"],e=>{qn.headers[e]={}});function tl(e,t){const r=this||qn,n=t||r,o=Pe.from(n.headers);let i=n.data;return k.forEach(e,function(s){i=s.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Of(e){return!!(e&&e.__CANCEL__)}let Qn=class extends T{constructor(t,r,n){super(t??"canceled",T.ERR_CANCELED,r,n),this.name="CanceledError",this.__CANCEL__=!0}};function zf(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new T("Request failed with status code "+r.status,r.status>=400&&r.status<500?T.ERR_BAD_REQUEST:T.ERR_BAD_RESPONSE,r.config,r.request,r))}function Bv(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function $v(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=n[i];l||(l=c),r[o]=u,n[o]=c;let m=i,p=0;for(;m!==o;)p+=r[m++],m=m%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-l<t)return;const x=d&&c-d;return x?Math.round(p*1e3/x):void 0}}function Hv(e,t){let r=0,n=1e3/t,o,i;const l=(c,d=Date.now())=>{r=d,o=null,i&&(clearTimeout(i),i=null),e(...c)};return[(...c)=>{const d=Date.now(),m=d-r;m>=n?l(c,d):(o=c,i||(i=setTimeout(()=>{i=null,l(o)},n-m)))},()=>o&&l(o)]}const ei=(e,t,r=3)=>{let n=0;const o=$v(50,250);return Hv(i=>{if(!i||typeof i.loaded!="number")return;const l=i.loaded,s=i.lengthComputable?i.total:void 0,u=s!=null?Math.min(l,s):l,c=Math.max(0,u-n),d=o(c);n=Math.max(n,u);const m={loaded:u,total:s,progress:s?u/s:void 0,bytes:c,rate:d||void 0,estimated:d&&s?(s-u)/d:void 0,event:i,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(m)},r)},Lu=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Au=e=>(...t)=>k.asap(()=>e(...t)),Wv=Ee.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Ee.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Ee.origin),Ee.navigator&&/(msie|trident)/i.test(Ee.navigator.userAgent)):()=>!0,Vv=Ee.hasStandardBrowserEnv?{write(e,t,r,n,o,i,l){if(typeof document>"u")return;const s=[`${e}=${encodeURIComponent(t)}`];k.isNumber(r)&&s.push(`expires=${new Date(r).toUTCString()}`),k.isString(n)&&s.push(`path=${n}`),k.isString(o)&&s.push(`domain=${o}`),i===!0&&s.push("secure"),k.isString(l)&&s.push(`SameSite=${l}`),document.cookie=s.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const n=t[r].replace(/^\s+/,""),o=n.indexOf("=");if(o!==-1&&n.slice(0,o)===e)return decodeURIComponent(n.slice(o+1))}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function qv(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Qv(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Tf(e,t,r){let n=!qv(t);return e&&(n||r===!1)?Qv(e,t):t}const Du=e=>e instanceof Pe?{...e}:e;function cr(e,t){t=t||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function n(c,d,m,p){return k.isPlainObject(c)&&k.isPlainObject(d)?k.merge.call({caseless:p},c,d):k.isPlainObject(d)?k.merge({},d):k.isArray(d)?d.slice():d}function o(c,d,m,p){if(k.isUndefined(d)){if(!k.isUndefined(c))return n(void 0,c,m,p)}else return n(c,d,m,p)}function i(c,d){if(!k.isUndefined(d))return n(void 0,d)}function l(c,d){if(k.isUndefined(d)){if(!k.isUndefined(c))return n(void 0,c)}else return n(void 0,d)}function s(c,d,m){if(k.hasOwnProp(t,m))return n(c,d);if(k.hasOwnProp(e,m))return n(void 0,c)}const u={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,allowedSocketPaths:l,responseEncoding:l,validateStatus:s,headers:(c,d,m)=>o(Du(c),Du(d),m,!0)};return k.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const m=k.hasOwnProp(u,d)?u[d]:o,p=k.hasOwnProp(e,d)?e[d]:void 0,x=k.hasOwnProp(t,d)?t[d]:void 0,w=m(p,x,d);k.isUndefined(w)&&m!==s||(r[d]=w)}),r}const Kv=["content-type","content-length"];function Yv(e,t,r){if(r!=="content-only"){e.set(t);return}Object.entries(t).forEach(([n,o])=>{Kv.includes(n.toLowerCase())&&e.set(n,o)})}const Jv=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16))),Lf=e=>{const t=cr({},e),r=p=>k.hasOwnProp(t,p)?t[p]:void 0,n=r("data");let o=r("withXSRFToken");const i=r("xsrfHeaderName"),l=r("xsrfCookieName");let s=r("headers");const u=r("auth"),c=r("baseURL"),d=r("allowAbsoluteUrls"),m=r("url");if(t.headers=s=Pe.from(s),t.url=_f(Tf(c,m,d),e.params,e.paramsSerializer),u&&s.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?Jv(u.password):""))),k.isFormData(n)&&(Ee.hasStandardBrowserEnv||Ee.hasStandardBrowserWebWorkerEnv?s.setContentType(void 0):k.isFunction(n.getHeaders)&&Yv(s,n.getHeaders(),r("formDataHeaderPolicy"))),Ee.hasStandardBrowserEnv&&(k.isFunction(o)&&(o=o(t)),o===!0||o==null&&Wv(t.url))){const x=i&&l&&Vv.read(l);x&&s.set(i,x)}return t},Xv=typeof XMLHttpRequest<"u",Gv=Xv&&function(e){return new Promise(function(r,n){const o=Lf(e);let i=o.data;const l=Pe.from(o.headers).normalize();let{responseType:s,onUploadProgress:u,onDownloadProgress:c}=o,d,m,p,x,w;function v(){x&&x(),w&&w(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function f(){if(!y)return;const g=Pe.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),j={data:!s||s==="text"||s==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:g,config:e,request:y};zf(function(_){r(_),v()},function(_){n(_),v()},j),y=null}"onloadend"in y?y.onloadend=f:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.startsWith("file:"))||setTimeout(f)},y.onabort=function(){y&&(n(new T("Request aborted",T.ECONNABORTED,e,y)),v(),y=null)},y.onerror=function(b){const j=b&&b.message?b.message:"Network Error",E=new T(j,T.ERR_NETWORK,e,y);E.event=b||null,n(E),v(),y=null},y.ontimeout=function(){let b=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const j=o.transitional||is;o.timeoutErrorMessage&&(b=o.timeoutErrorMessage),n(new T(b,j.clarifyTimeoutError?T.ETIMEDOUT:T.ECONNABORTED,e,y)),v(),y=null},i===void 0&&l.setContentType(null),"setRequestHeader"in y&&k.forEach(Nf(l),function(b,j){y.setRequestHeader(j,b)}),k.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),s&&s!=="json"&&(y.responseType=o.responseType),c&&([p,w]=ei(c,!0),y.addEventListener("progress",p)),u&&y.upload&&([m,x]=ei(u),y.upload.addEventListener("progress",m),y.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(d=g=>{y&&(n(!g||g.type?new Qn(null,e,y):g),y.abort(),v(),y=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const h=Bv(o.url);if(h&&!Ee.protocols.includes(h)){n(new T("Unsupported protocol "+h+":",T.ERR_BAD_REQUEST,e));return}y.send(i||null)})},Zv=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const r=new AbortController;let n=!1;const o=function(u){if(!n){n=!0,l();const c=u instanceof Error?u:this.reason;r.abort(c instanceof T?c:new Qn(c instanceof Error?c.message:c))}};let i=t&&setTimeout(()=>{i=null,o(new T(`timeout of ${t}ms exceeded`,T.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:s}=r;return s.unsubscribe=()=>k.asap(l),s},ex=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},tx=async function*(e,t){for await(const r of rx(e))yield*ex(r,t)},rx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Uu=(e,t,r,n)=>{const o=tx(e,t);let i=0,l,s=u=>{l||(l=!0,n&&n(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){s(),u.close();return}let m=d.byteLength;if(r){let p=i+=m;r(p)}u.enqueue(new Uint8Array(d))}catch(c){throw s(c),c}},cancel(u){return s(u),o.return()}},{highWaterMark:2})};function nx(e){if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const t=e.indexOf(",");if(t<0)return 0;const r=e.slice(5,t),n=e.slice(t+1);if(/;base64/i.test(r)){let l=n.length;const s=n.length;for(let x=0;x<s;x++)if(n.charCodeAt(x)===37&&x+2<s){const w=n.charCodeAt(x+1),v=n.charCodeAt(x+2);(w>=48&&w<=57||w>=65&&w<=70||w>=97&&w<=102)&&(v>=48&&v<=57||v>=65&&v<=70||v>=97&&v<=102)&&(l-=2,x+=2)}let u=0,c=s-1;const d=x=>x>=2&&n.charCodeAt(x-2)===37&&n.charCodeAt(x-1)===51&&(n.charCodeAt(x)===68||n.charCodeAt(x)===100);c>=0&&(n.charCodeAt(c)===61?(u++,c--):d(c)&&(u++,c-=3)),u===1&&c>=0&&(n.charCodeAt(c)===61||d(c))&&u++;const p=Math.floor(l/4)*3-(u||0);return p>0?p:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(n,"utf8");let i=0;for(let l=0,s=n.length;l<s;l++){const u=n.charCodeAt(l);if(u<128)i+=1;else if(u<2048)i+=2;else if(u>=55296&&u<=56319&&l+1<s){const c=n.charCodeAt(l+1);c>=56320&&c<=57343?(i+=4,l++):i+=3}else i+=3}return i}const as="1.16.1",Iu=64*1024,{isFunction:fo}=k,Fu=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ox=e=>{const t=k.global!==void 0&&k.global!==null?k.global:globalThis,{ReadableStream:r,TextEncoder:n}=t;e=k.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:o,Request:i,Response:l}=e,s=o?fo(o):typeof fetch=="function",u=fo(i),c=fo(l);if(!s)return!1;const d=s&&fo(r),m=s&&(typeof n=="function"?(f=>h=>f.encode(h))(new n):async f=>new Uint8Array(await new i(f).arrayBuffer())),p=u&&d&&Fu(()=>{let f=!1;const h=new i(Ee.origin,{body:new r,method:"POST",get duplex(){return f=!0,"half"}}),g=h.headers.has("Content-Type");return h.body!=null&&h.body.cancel(),f&&!g}),x=c&&d&&Fu(()=>k.isReadableStream(new l("").body)),w={stream:x&&(f=>f.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!w[f]&&(w[f]=(h,g)=>{let b=h&&h[f];if(b)return b.call(h);throw new T(`Response type '${f}' is not supported`,T.ERR_NOT_SUPPORT,g)})});const v=async f=>{if(f==null)return 0;if(k.isBlob(f))return f.size;if(k.isSpecCompliantForm(f))return(await new i(Ee.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(k.isArrayBufferView(f)||k.isArrayBuffer(f))return f.byteLength;if(k.isURLSearchParams(f)&&(f=f+""),k.isString(f))return(await m(f)).byteLength},y=async(f,h)=>{const g=k.toFiniteNumber(f.getContentLength());return g??v(h)};return async f=>{let{url:h,method:g,data:b,signal:j,cancelToken:E,timeout:_,onDownloadProgress:O,onUploadProgress:B,responseType:D,headers:q,withCredentials:ce="same-origin",fetchOptions:ke,maxContentLength:ie,maxBodyLength:Fe}=Lf(f);const he=k.isNumber(ie)&&ie>-1,$=k.isNumber(Fe)&&Fe>-1;let R=o||fetch;D=D?(D+"").toLowerCase():"text";let A=Zv([j,E&&E.toAbortSignal()],_),L=null;const F=A&&A.unsubscribe&&(()=>{A.unsubscribe()});let W;try{if(he&&typeof h=="string"&&h.startsWith("data:")&&nx(h)>ie)throw new T("maxContentLength size of "+ie+" exceeded",T.ERR_BAD_RESPONSE,f,L);if($&&g!=="get"&&g!=="head"){const z=await y(q,b);if(typeof z=="number"&&isFinite(z)&&z>Fe)throw new T("Request body larger than maxBodyLength limit",T.ERR_BAD_REQUEST,f,L)}if(B&&p&&g!=="get"&&g!=="head"&&(W=await y(q,b))!==0){let z=new i(h,{method:"POST",body:b,duplex:"half"}),U;if(k.isFormData(b)&&(U=z.headers.get("content-type"))&&q.setContentType(U),z.body){const[J,be]=Lu(W,ei(Au(B)));b=Uu(z.body,Iu,J,be)}}k.isString(ce)||(ce=ce?"include":"omit");const V=u&&"credentials"in i.prototype;if(k.isFormData(b)){const z=q.getContentType();z&&/^multipart\/form-data/i.test(z)&&!/boundary=/i.test(z)&&q.delete("content-type")}q.set("User-Agent","axios/"+as,!1);const re={...ke,signal:A,method:g.toUpperCase(),headers:Nf(q.normalize()),body:b,duplex:"half",credentials:V?ce:void 0};L=u&&new i(h,re);let ae=await(u?R(L,ke):R(h,re));if(he){const z=k.toFiniteNumber(ae.headers.get("content-length"));if(z!=null&&z>ie)throw new T("maxContentLength size of "+ie+" exceeded",T.ERR_BAD_RESPONSE,f,L)}const ge=x&&(D==="stream"||D==="response");if(x&&ae.body&&(O||he||ge&&F)){const z={};["status","statusText","headers"].forEach(ct=>{z[ct]=ae[ct]});const U=k.toFiniteNumber(ae.headers.get("content-length")),[J,be]=O&&Lu(U,ei(Au(O),!0))||[];let ve=0;const Ni=ct=>{if(he&&(ve=ct,ve>ie))throw new T("maxContentLength size of "+ie+" exceeded",T.ERR_BAD_RESPONSE,f,L);J&&J(ct)};ae=new l(Uu(ae.body,Iu,Ni,()=>{be&&be(),F&&F()}),z)}D=D||"text";let C=await w[k.findKey(w,D)||"text"](ae,f);if(he&&!x&&!ge){let z;if(C!=null&&(typeof C.byteLength=="number"?z=C.byteLength:typeof C.size=="number"?z=C.size:typeof C=="string"&&(z=typeof n=="function"?new n().encode(C).byteLength:C.length)),typeof z=="number"&&z>ie)throw new T("maxContentLength size of "+ie+" exceeded",T.ERR_BAD_RESPONSE,f,L)}return!ge&&F&&F(),await new Promise((z,U)=>{zf(z,U,{data:C,headers:Pe.from(ae.headers),status:ae.status,statusText:ae.statusText,config:f,request:L})})}catch(V){if(F&&F(),A&&A.aborted&&A.reason instanceof T){const re=A.reason;throw re.config=f,L&&(re.request=L),V!==re&&(re.cause=V),re}throw V&&V.name==="TypeError"&&/Load failed|fetch/i.test(V.message)?Object.assign(new T("Network Error",T.ERR_NETWORK,f,L,V&&V.response),{cause:V.cause||V}):T.from(V,V&&V.code,f,L,V&&V.response)}}},ix=new Map,Af=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:o}=t,i=[n,o,r];let l=i.length,s=l,u,c,d=ix;for(;s--;)u=i[s],c=d.get(u),c===void 0&&d.set(u,c=s?new Map:ox(t)),d=c;return c};Af();const ss={http:Nv,xhr:Gv,fetch:{get:Af}};k.forEach(ss,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const Mu=e=>`- ${e}`,lx=e=>k.isFunction(e)||e===null||e===!1;function ax(e,t){e=k.isArray(e)?e:[e];const{length:r}=e;let n,o;const i={};for(let l=0;l<r;l++){n=e[l];let s;if(o=n,!lx(n)&&(o=ss[(s=String(n)).toLowerCase()],o===void 0))throw new T(`Unknown adapter '${s}'`);if(o&&(k.isFunction(o)||(o=o.get(t))))break;i[s||"#"+l]=o}if(!o){const l=Object.entries(i).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=r?l.length>1?`since :
`+l.map(Mu).join(`
`):" "+Mu(l[0]):"as no adapter specified";throw new T("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return o}const Df={getAdapter:ax,adapters:ss};function rl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Qn(null,e)}function Bu(e){return rl(e),e.headers=Pe.from(e.headers),e.data=tl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Df.getAdapter(e.adapter||qn.adapter,e)(e).then(function(n){rl(e),e.response=n;try{n.data=tl.call(e,e.transformResponse,n)}finally{delete e.response}return n.headers=Pe.from(n.headers),n},function(n){if(!Of(n)&&(rl(e),n&&n.response)){e.response=n.response;try{n.response.data=tl.call(e,e.transformResponse,n.response)}finally{delete e.response}n.response.headers=Pe.from(n.response.headers)}return Promise.reject(n)})}const ji={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ji[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const $u={};ji.transitional=function(t,r,n){function o(i,l){return"[Axios v"+as+"] Transitional option '"+i+"'"+l+(n?". "+n:"")}return(i,l,s)=>{if(t===!1)throw new T(o(l," has been removed"+(r?" in "+r:"")),T.ERR_DEPRECATED);return r&&!$u[l]&&($u[l]=!0,console.warn(o(l," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,l,s):!0}};ji.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function sx(e,t,r){if(typeof e!="object")throw new T("options must be an object",T.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],l=Object.prototype.hasOwnProperty.call(t,i)?t[i]:void 0;if(l){const s=e[i],u=s===void 0||l(s,i,e);if(u!==!0)throw new T("option "+i+" must be "+u,T.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new T("Unknown option "+i,T.ERR_BAD_OPTION)}}const Co={assertOptions:sx,validators:ji},qe=Co.validators;let or=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Tu,response:new Tu}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=(()=>{if(!o.stack)return"";const l=o.stack.indexOf(`
`);return l===-1?"":o.stack.slice(l+1)})();try{if(!n.stack)n.stack=i;else if(i){const l=i.indexOf(`
`),s=l===-1?-1:i.indexOf(`
`,l+1),u=s===-1?"":i.slice(s+1);String(n.stack).endsWith(u)||(n.stack+=`
`+i)}}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=cr(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:i}=r;n!==void 0&&Co.assertOptions(n,{silentJSONParsing:qe.transitional(qe.boolean),forcedJSONParsing:qe.transitional(qe.boolean),clarifyTimeoutError:qe.transitional(qe.boolean),legacyInterceptorReqResOrdering:qe.transitional(qe.boolean)},!1),o!=null&&(k.isFunction(o)?r.paramsSerializer={serialize:o}:Co.assertOptions(o,{encode:qe.function,serialize:qe.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Co.assertOptions(r,{baseUrl:qe.spelling("baseURL"),withXsrfToken:qe.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let l=i&&k.merge(i.common,i[r.method]);i&&k.forEach(["delete","get","head","post","put","patch","query","common"],w=>{delete i[w]}),r.headers=Pe.concat(l,i);const s=[];let u=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(r)===!1)return;u=u&&v.synchronous;const y=r.transitional||is;y&&y.legacyInterceptorReqResOrdering?s.unshift(v.fulfilled,v.rejected):s.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let d,m=0,p;if(!u){const w=[Bu.bind(this),void 0];for(w.unshift(...s),w.push(...c),p=w.length,d=Promise.resolve(r);m<p;)d=d.then(w[m++],w[m++]);return d}p=s.length;let x=r;for(;m<p;){const w=s[m++],v=s[m++];try{x=w(x)}catch(y){v.call(this,y);break}}try{d=Bu.call(this,x)}catch(w){return Promise.reject(w)}for(m=0,p=c.length;m<p;)d=d.then(c[m++],c[m++]);return d}getUri(t){t=cr(this.defaults,t);const r=Tf(t.baseURL,t.url,t.allowAbsoluteUrls);return _f(r,t.params,t.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(t){or.prototype[t]=function(r,n){return this.request(cr(n||{},{method:t,url:r,data:(n||{}).data}))}});k.forEach(["post","put","patch","query"],function(t){function r(n){return function(i,l,s){return this.request(cr(s||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}or.prototype[t]=r(),t!=="query"&&(or.prototype[t+"Form"]=r(!0))});let ux=class Uf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(s=>{n.subscribe(s),i=s}).then(o);return l.cancel=function(){n.unsubscribe(i)},l},t(function(i,l,s){n.reason||(n.reason=new Qn(i,l,s),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Uf(function(o){t=o}),cancel:t}}};function cx(e){return function(r){return e.apply(null,r)}}function dx(e){return k.isObject(e)&&e.isAxiosError===!0}const na={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(na).forEach(([e,t])=>{na[t]=e});function If(e){const t=new or(e),r=vf(or.prototype.request,t);return k.extend(r,or.prototype,t,{allOwnKeys:!0}),k.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return If(cr(e,o))},r}const oe=If(qn);oe.Axios=or;oe.CanceledError=Qn;oe.CancelToken=ux;oe.isCancel=Of;oe.VERSION=as;oe.toFormData=Si;oe.AxiosError=T;oe.Cancel=oe.CanceledError;oe.all=function(t){return Promise.all(t)};oe.spread=cx;oe.isAxiosError=dx;oe.mergeConfig=cr;oe.AxiosHeaders=Pe;oe.formToJSON=e=>Pf(k.isHTMLForm(e)?new FormData(e):e);oe.getAdapter=Df.getAdapter;oe.HttpStatusCode=na;oe.default=oe;const{Axios:Ux,AxiosError:Ix,CanceledError:Fx,isCancel:Mx,CancelToken:Bx,VERSION:$x,all:Hx,Cancel:Wx,isAxiosError:Vx,spread:qx,toFormData:Qx,AxiosHeaders:Kx,HttpStatusCode:Yx,formToJSON:Jx,getAdapter:Xx,mergeConfig:Gx,create:Zx}=oe,X=oe.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});X.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});X.interceptors.response.use(e=>e,e=>{var t;return((t=e.response)==null?void 0:t.status)===401&&(localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.pathname!=="/login"&&(window.location.href="/login")),Promise.reject(e)});const ti={signup:e=>X.post("/auth/signup",e),login:e=>X.post("/auth/login",e),getMe:()=>X.get("/auth/me"),updateProfile:e=>X.put("/auth/profile",e),becomeArtist:()=>X.put("/auth/become-artist")},at={getAll:e=>X.get("/artworks",{params:e}),getById:e=>X.get(`/artworks/${e}`),create:e=>X.post("/artworks",e),update:(e,t)=>X.put(`/artworks/${e}`,t),delete:e=>X.delete(`/artworks/${e}`),getMy:()=>X.get("/artworks/my"),getStyles:()=>X.get("/artworks/styles"),getMediums:()=>X.get("/artworks/mediums")},Ro={create:e=>X.post("/orders",e),getAll:()=>X.get("/orders"),getById:e=>X.get(`/orders/${e}`),updateStatus:(e,t)=>X.put(`/orders/${e}`,t),verifyPayment:e=>X.get(`/orders/verify/${e}`),getSalesOverview:()=>X.get("/orders/sales-overview")},fx={create:e=>X.post("/reviews",e),getByArtwork:(e,t)=>X.get(`/reviews/artwork/${e}`,{params:t}),delete:e=>X.delete(`/reviews/${e}`)};function Ff({artwork:e,index:t=0,onSelect:r}){var u,c,d,m,p;const n=((c=(u=e.images)==null?void 0:u[0])==null?void 0:c.url)||e.thumbnail||"",[o,i]=S.useState(!1);S.useEffect(()=>{const x=JSON.parse(localStorage.getItem("liked")||"[]");i(x.includes(e._id))},[e._id]);const l=x=>{x.preventDefault(),x.stopPropagation();const w=JSON.parse(localStorage.getItem("liked")||"[]"),v=o?w.filter(y=>y!==e._id):[...w,e._id];localStorage.setItem("liked",JSON.stringify(v)),i(!o)},s=`REF.${String(t+1).padStart(3,"0")}`;return a.jsxs("article",{className:"art-card",onClick:()=>r==null?void 0:r(e,t),role:"button",tabIndex:0,onKeyDown:x=>{x.key==="Enter"&&(r==null||r(e,t))},children:[a.jsxs("div",{className:"art-card-image",children:[a.jsx("img",{src:n,alt:e.title,loading:"lazy"}),a.jsx("span",{className:"art-card-ref",children:s}),e.status==="Sold"&&a.jsx("span",{className:"art-card-badge sold",children:"Sold"}),a.jsx("button",{className:`like-btn ${o?"liked":""}`,onClick:l,"aria-label":"Save",children:o?"♥":"♡"}),a.jsx("div",{className:"art-card-caption",children:a.jsx("span",{className:"art-card-cta",children:"View Artwork"})})]}),a.jsxs("div",{className:"art-card-body",children:[a.jsx("h3",{className:"art-card-title",children:e.title}),a.jsxs("div",{className:"art-card-row",children:[a.jsx("span",{className:"art-card-artist",children:((d=e.artist)==null?void 0:d.name)||"Unknown Artist"}),a.jsxs("span",{className:"art-card-price",children:["$",(p=(m=e.price)==null?void 0:m.usd)==null?void 0:p.toLocaleString()]})]})]}),a.jsx("style",{children:`
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
          border-radius: var(--radius-md);
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
          font-size: 1.15rem;
          font-weight: 600;
          line-height: 1.25;
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
      `})]})}function Mf({artwork:e,index:t,total:r,onClose:n,onPrev:o,onNext:i}){var c,d,m,p,x,w,v,y,f,h;const{addItem:l}=$n();if(S.useEffect(()=>{const g=b=>{b.key==="Escape"&&n(),b.key==="ArrowLeft"&&o(),b.key==="ArrowRight"&&i()};return document.addEventListener("keydown",g),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",g),document.body.style.overflow=""}},[n,o,i]),!e)return null;const s=((d=(c=e.images)==null?void 0:c[0])==null?void 0:d.url)||e.thumbnail||"",u=`REF.${String(t+1).padStart(3,"0")}`;return a.jsxs("div",{className:"awm-backdrop",onClick:n,children:[a.jsxs("div",{className:"awm-dialog",onClick:g=>g.stopPropagation(),children:[a.jsx("button",{className:"awm-close",onClick:n,"aria-label":"Close",children:"✕"}),a.jsxs("div",{className:"awm-stage",children:[a.jsx("button",{className:"awm-nav prev",onClick:o,"aria-label":"Previous",children:"←"}),a.jsx("div",{className:"awm-image",children:a.jsx("img",{src:s,alt:e.title})}),a.jsx("button",{className:"awm-nav next",onClick:i,"aria-label":"Next",children:"→"})]}),a.jsxs("aside",{className:"awm-panel",children:[a.jsxs("div",{className:"awm-topline",children:[a.jsx("span",{className:"awm-ref",children:u}),a.jsxs("span",{className:"awm-count",children:[t+1," / ",r]})]}),a.jsx("h2",{className:"awm-title",children:e.title}),a.jsxs("p",{className:"awm-artist",children:["by ",((m=e.artist)==null?void 0:m.name)||"Unknown Artist"]}),e.description&&a.jsx("p",{className:"awm-desc",children:e.description}),a.jsxs("dl",{className:"awm-meta",children:[a.jsxs("div",{children:[a.jsx("dt",{children:"Medium"}),a.jsx("dd",{children:e.medium||"—"})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"Style"}),a.jsx("dd",{children:e.style||"—"})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"Size"}),a.jsxs("dd",{children:[(p=e.dimensions)==null?void 0:p.width," × ",(x=e.dimensions)==null?void 0:x.height," ",(w=e.dimensions)==null?void 0:w.unit]})]})]}),a.jsxs("div",{className:"awm-price",children:[a.jsxs("span",{className:"awm-usd",children:["$",(y=(v=e.price)==null?void 0:v.usd)==null?void 0:y.toLocaleString()]}),a.jsxs("span",{className:"awm-ngn",children:["₦",(h=(f=e.price)==null?void 0:f.ngn)==null?void 0:h.toLocaleString()]})]}),a.jsxs("div",{className:"awm-actions",children:[a.jsx("button",{className:"awm-buy",disabled:e.status==="Sold",onClick:()=>{l(e),n()},children:e.status==="Sold"?"Sold":"Buy Original"}),a.jsx(Ye,{to:`/artwork/${e._id}`,className:"awm-detail",onClick:n,children:"View in your room (AR)"})]})]})]}),a.jsx("style",{children:`
        .awm-backdrop {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(29, 24, 19, 0.55);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.25s ease;
        }
        .awm-dialog {
          position: relative;
          width: 100%;
          max-width: 1080px;
          max-height: 90vh;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          background: var(--color-bg);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(29, 24, 19, 0.35);
          animation: riseIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .awm-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: var(--color-text-primary);
          font-size: 0.95rem;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .awm-close:hover { background: #fff; transform: rotate(90deg); }

        .awm-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-surface);
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
          box-shadow: 0 20px 50px rgba(29, 24, 19, 0.25);
          border-radius: 4px;
        }
        .awm-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
          color: var(--color-text-primary);
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          z-index: 3;
        }
        .awm-nav:hover { background: var(--color-accent); color: #fff; }
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
          color: var(--color-text-muted);
          margin-bottom: 18px;
        }
        .awm-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.1;
          color: var(--color-text-primary);
        }
        .awm-artist {
          color: var(--color-text-secondary);
          font-style: italic;
          margin-top: 6px;
        }
        .awm-desc {
          color: var(--color-text-secondary);
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
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .awm-meta dt {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-text-muted);
        }
        .awm-meta dd {
          font-size: 0.9rem;
          color: var(--color-text-primary);
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
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }
        .awm-ngn { color: var(--color-text-muted); font-size: 0.95rem; }
        .awm-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
          padding-top: 28px;
        }
        .awm-buy {
          background: var(--color-accent);
          color: #1d1813;
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
          color: var(--color-text-secondary);
          font-size: 0.88rem;
          font-weight: 600;
          padding: 12px;
          border: 1px solid var(--color-border);
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
      `})]})}function px(){return a.jsxs("div",{className:"adire-band","aria-hidden":"true",children:[a.jsxs("svg",{className:"adire-svg",viewBox:"0 0 240 64",preserveAspectRatio:"xMidYMid slice",children:[a.jsx("defs",{children:a.jsxs("g",{id:"adire-tile",children:[a.jsx("circle",{cx:"20",cy:"32",r:"13"}),a.jsx("circle",{cx:"20",cy:"32",r:"8"}),a.jsx("circle",{cx:"20",cy:"32",r:"3.2"}),a.jsx("path",{d:"M40 14 L52 32 L40 50 L28 32 Z"}),a.jsx("path",{d:"M40 24 L46 32 L40 40 L34 32 Z"}),a.jsx("circle",{cx:"64",cy:"14",r:"2.2"}),a.jsx("circle",{cx:"64",cy:"32",r:"2.2"}),a.jsx("circle",{cx:"64",cy:"50",r:"2.2"}),a.jsx("path",{d:"M6 6 Q20 2 34 6"}),a.jsx("path",{d:"M6 58 Q20 62 34 58"}),a.jsx("path",{d:"M54 8 q10 24 0 48"}),a.jsx("path",{d:"M74 8 q-10 24 0 48"})]})}),a.jsxs("g",{className:"adire-scroll",fill:"none",stroke:"var(--color-indigo)",strokeWidth:"1.6",strokeLinecap:"round",children:[Array.from({length:4}).map((e,t)=>a.jsx("use",{href:"#adire-tile",x:t*80},t)),Array.from({length:4}).map((e,t)=>a.jsx("use",{href:"#adire-tile",x:320+t*80},`d${t}`))]})]}),a.jsx("style",{children:`
        .adire-band {
          width: 100%;
          height: 64px;
          background: var(--color-bg);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          overflow: hidden;
          position: relative;
        }
        .adire-svg {
          width: 200%;
          height: 100%;
          opacity: 0.5;
        }
        /* horizontal glide = "moving" */
        .adire-scroll {
          animation: adireGlide 18s linear infinite;
        }
        /* dash draw = "reconstructing" */
        .adire-scroll path,
        .adire-scroll circle {
          stroke-dasharray: 90;
          animation: adireDraw 6s ease-in-out infinite alternate;
        }
        @keyframes adireGlide {
          from { transform: translateX(0); }
          to { transform: translateX(-320px); }
        }
        @keyframes adireDraw {
          0% { stroke-dashoffset: 90; }
          55%, 100% { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .adire-scroll,
          .adire-scroll path,
          .adire-scroll circle { animation: none; }
          .adire-scroll path, .adire-scroll circle { stroke-dashoffset: 0; }
        }
      `})]})}const mx=["All","Abstract","Contemporary","Traditional","Tribal","Modern","Impressionist","Figurative","Minimalist"],hx=[{value:"-createdAt",label:"Newest"},{value:"createdAt",label:"Oldest"},{value:"-price.usd",label:"Price: High to Low"},{value:"price.usd",label:"Price: Low to High"},{value:"-viewCount",label:"Most Viewed"}];function gx(){const[e,t]=S.useState([]),[r,n]=S.useState(!0),[o,i]=S.useState("All"),[l,s]=S.useState("-createdAt"),[u,c]=S.useState(""),[d,m]=S.useState({page:1,totalPages:1,total:0}),[p,x]=S.useState(null),w=S.useRef(null),v=S.useCallback(async(f=1)=>{n(!0);try{const h={page:f,limit:12,sort:l,search:u||void 0,style:o!=="All"?o:void 0},{data:g}=await at.getAll(h);t(g.artworks),m({page:g.currentPage,totalPages:g.totalPages,total:g.total})}catch(h){console.error("Failed to fetch artworks:",h)}finally{n(!1)}},[l,u,o]);S.useEffect(()=>{v(1)},[v]),S.useEffect(()=>{var g;const f=((g=w.current)==null?void 0:g.querySelectorAll(".reveal-up"))||[],h=new IntersectionObserver(b=>{b.forEach(j=>{j.isIntersecting&&(j.target.classList.add("in-view"),h.unobserve(j.target))})},{threshold:.12});return f.forEach(b=>h.observe(b)),()=>h.disconnect()},[e]);const y=e.slice(0,4);return a.jsxs("div",{className:"catalog-page",children:[a.jsxs("section",{className:"hero",children:[a.jsxs("h1",{className:"hero-title",children:["A Living Space For African Artists & Collectors",a.jsx("br",{}),"To Celebrate Heritage, Form & Story"]}),a.jsx("p",{className:"hero-sub",children:"Discover original works, meet the makers, and preview every piece on your own wall with augmented reality."}),a.jsx("div",{className:"hero-gallery",children:y.length>0?y.map((f,h)=>{var b,j,E;const g=((j=(b=f.images)==null?void 0:b[0])==null?void 0:j.url)||f.thumbnail||"";return a.jsxs("button",{className:`hero-card pos-${h}`,onClick:()=>x({artwork:f,index:h}),children:[a.jsx("img",{src:g,alt:f.title}),a.jsxs("span",{className:"hero-pill",children:[a.jsx("span",{className:"hero-pill-dot"}),((E=f.artist)==null?void 0:E.name)||"Artist"]})]},f._id)}):Array.from({length:4}).map((f,h)=>a.jsx("div",{className:`hero-card pos-${h} skeleton`},h))})]}),a.jsx(px,{}),a.jsxs("section",{className:"works",ref:w,children:[a.jsxs("div",{className:"works-head",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"works-title",children:"The Collection"}),a.jsxs("p",{className:"works-count",children:[d.total," works"]})]}),a.jsxs("div",{className:"works-tools",children:[a.jsx("input",{type:"text",placeholder:"Search works or artists…",value:u,onChange:f=>c(f.target.value),className:"works-search"}),a.jsx("select",{className:"works-sort",value:l,onChange:f=>s(f.target.value),children:hx.map(f=>a.jsx("option",{value:f.value,children:f.label},f.value))})]})]}),a.jsx("div",{className:"works-chips",children:mx.map(f=>a.jsx("button",{className:`chip ${o===f?"active":""}`,onClick:()=>i(f),children:f},f))}),a.jsx("div",{className:"works-grid",children:r?Array.from({length:8}).map((f,h)=>a.jsx("div",{className:"skeleton",style:{aspectRatio:"3/4",borderRadius:12}},h)):e.length===0?a.jsxs("div",{className:"works-empty",children:[a.jsx("h3",{children:"No works found"}),a.jsx("p",{children:"Try a different search or style filter."})]}):e.map((f,h)=>a.jsx("div",{className:"reveal-up",style:{transitionDelay:`${h%4*80}ms`},children:a.jsx(Ff,{artwork:f,index:h,onSelect:(g,b)=>x({artwork:g,index:b})})},f._id))}),d.totalPages>1&&a.jsxs("div",{className:"works-pagination",children:[a.jsx("button",{disabled:d.page<=1,onClick:()=>v(d.page-1),children:"Previous"}),a.jsxs("span",{children:["Page ",d.page," of ",d.totalPages]}),a.jsx("button",{disabled:d.page>=d.totalPages,onClick:()=>v(d.page+1),children:"Next"})]})]}),p&&a.jsx(Mf,{artwork:p.artwork,index:p.index,total:e.length,onClose:()=>x(null),onPrev:()=>x(f=>{const h=(f.index-1+e.length)%e.length;return{artwork:e[h],index:h}}),onNext:()=>x(f=>{const h=(f.index+1)%e.length;return{artwork:e[h],index:h}})}),a.jsx("style",{children:`
        .catalog-page { padding-top: 96px; }

        /* HERO */
        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 24px 0;
          text-align: center;
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 4.4vw, 3.3rem);
          font-weight: 600;
          line-height: 1.12;
          color: var(--color-text-primary);
          letter-spacing: -0.01em;
        }
        .hero-sub {
          max-width: 520px;
          margin: 22px auto 0;
          color: var(--color-text-secondary);
          font-size: 1.02rem;
          line-height: 1.7;
        }
        .hero-gallery {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 18px;
          margin-top: 48px;
          padding-bottom: 24px;
        }
        .hero-card {
          position: relative;
          width: 210px;
          aspect-ratio: 3 / 4;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--color-surface);
          box-shadow: var(--glass-shadow);
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          animation: riseIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero-card img { width: 100%; height: 100%; object-fit: cover; }
        .hero-card:hover { transform: translateY(-8px) scale(1.02); }
        .hero-card.pos-0 { margin-top: 36px; animation-delay: 0ms; }
        .hero-card.pos-1 { margin-top: 0; animation-delay: 90ms; }
        .hero-card.pos-2 { margin-top: 54px; animation-delay: 180ms; }
        .hero-card.pos-3 { margin-top: 12px; animation-delay: 270ms; }
        .hero-pill {
          position: absolute;
          left: 12px;
          bottom: 12px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px 6px 10px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(6px);
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-primary);
          box-shadow: 0 4px 14px rgba(29, 24, 19, 0.15);
        }
        .hero-pill-dot {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-terracotta));
        }

        /* WORKS */
        .works { max-width: 1280px; margin: 0 auto; padding: 56px 24px 80px; }
        .works-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          flex-wrap: wrap;
        }
        .works-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .works-count {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          margin-top: 4px;
          letter-spacing: 0.04em;
        }
        .works-tools { display: flex; gap: 10px; align-items: center; }
        .works-search {
          width: 260px;
          max-width: 100%;
          padding: 10px 18px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          color: var(--color-text-primary);
          font-size: 0.9rem;
        }
        .works-search:focus { border-color: var(--color-accent); outline: none; }
        .works-sort {
          padding: 10px 14px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          color: var(--color-text-primary);
          font-size: 0.85rem;
        }
        .works-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin: 24px 0 32px;
        }
        .chip {
          padding: 7px 18px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }
        .chip:hover { border-color: var(--color-border-hover); }
        .chip.active {
          background: var(--color-text-primary);
          color: var(--color-bg);
          border-color: var(--color-text-primary);
        }
        .works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 32px 24px;
        }
        .works-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 20px;
        }
        .works-empty h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--color-text-primary);
        }
        .works-empty p { color: var(--color-text-muted); margin-top: 8px; }
        .works-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          margin-top: 56px;
        }
        .works-pagination button {
          padding: 10px 24px;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: 999px;
          color: var(--color-text-primary);
          font-size: 0.88rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }
        .works-pagination button:hover:not(:disabled) {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        .works-pagination button:disabled { opacity: 0.35; cursor: not-allowed; }
        .works-pagination span { color: var(--color-text-secondary); font-size: 0.88rem; }

        @media (max-width: 820px) {
          .hero-gallery { flex-wrap: wrap; gap: 12px; }
          .hero-card { width: 44%; }
          .hero-card.pos-0, .hero-card.pos-1,
          .hero-card.pos-2, .hero-card.pos-3 { margin-top: 0; }
          .works-tools { width: 100%; }
          .works-search { flex: 1; width: auto; }
        }
        @media (max-width: 520px) {
          .hero-card:nth-child(n+3) { display: none; }
        }
      `})]})}function vx(){const[e,t]=S.useState([]),[r,n]=S.useState(!0),[o,i]=S.useState(null),[l,s]=S.useState(null);S.useEffect(()=>{at.getAll({limit:100,sort:"-createdAt"}).then(({data:m})=>t(m.artworks||[])).catch(m=>console.error("Failed to load artists:",m)).finally(()=>n(!1))},[]);const u=S.useMemo(()=>{const m=new Map;return e.forEach(p=>{const x=p.artist;x!=null&&x._id&&(m.has(x._id)||m.set(x._id,{id:x._id,name:x.name||"Unknown Artist",works:[]}),m.get(x._id).works.push(p))}),Array.from(m.values()).sort((p,x)=>x.works.length-p.works.length)},[e]),c=u.find(m=>m.id===o),d=m=>m.split(" ").map(p=>p[0]).join("").slice(0,2).toUpperCase();return a.jsxs("div",{className:"artists-page",children:[a.jsxs("header",{className:"artists-hero",children:[a.jsx("p",{className:"artists-eyebrow",children:"The Makers"}),a.jsx("h1",{className:"artists-title",children:"Explore Artists"}),a.jsx("p",{className:"artists-sub",children:"Meet the painters, sculptors and storytellers behind the collection."})]}),r?a.jsx("div",{className:"artists-grid",children:Array.from({length:6}).map((m,p)=>a.jsx("div",{className:"skeleton",style:{height:220,borderRadius:16}},p))}):u.length===0?a.jsxs("div",{className:"artists-empty",children:[a.jsx("h3",{children:"No artists yet"}),a.jsx("p",{children:"Artists appear here once works are published."})]}):a.jsx("div",{className:"artists-grid",children:u.map(m=>a.jsxs("button",{className:`artist-card ${o===m.id?"active":""}`,onClick:()=>i(o===m.id?null:m.id),children:[a.jsx("div",{className:"artist-thumbs",children:m.works.slice(0,3).map(p=>{var x,w;return a.jsx("img",{src:((w=(x=p.images)==null?void 0:x[0])==null?void 0:w.url)||p.thumbnail||"",alt:""},p._id)})}),a.jsxs("div",{className:"artist-info",children:[a.jsx("span",{className:"artist-avatar",children:d(m.name)}),a.jsxs("div",{children:[a.jsx("h3",{className:"artist-name",children:m.name}),a.jsxs("p",{className:"artist-count",children:[m.works.length," works"]})]})]})]},m.id))}),c&&a.jsxs("section",{className:"artist-works",children:[a.jsxs("h2",{className:"artist-works-title",children:["Works by ",a.jsx("span",{children:c.name})]}),a.jsx("div",{className:"works-grid",children:c.works.map((m,p)=>a.jsx(Ff,{artwork:m,index:p,onSelect:(x,w)=>s({artwork:x,index:w})},m._id))})]}),l&&c&&a.jsx(Mf,{artwork:l.artwork,index:l.index,total:c.works.length,onClose:()=>s(null),onPrev:()=>s(m=>{const p=c.works.length,x=(m.index-1+p)%p;return{artwork:c.works[x],index:x}}),onNext:()=>s(m=>{const p=c.works.length,x=(m.index+1)%p;return{artwork:c.works[x],index:x}})}),a.jsx("style",{children:`
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
      `})]})}const xx="modulepreload",yx=function(e){return"/"+e},Hu={},Bf=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),s=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(r.map(u=>{if(u=yx(u),u in Hu)return;Hu[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":xx,c||(m.as="script"),m.crossOrigin="",m.href=u,s&&m.setAttribute("nonce",s),document.head.appendChild(m),c)return new Promise((p,x)=>{m.addEventListener("load",p),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},wx=S.lazy(()=>Bf(()=>import("./ARView-x4Nys9Q0.js"),[]));async function kx(){var e;if(!((e=navigator.xr)!=null&&e.isSessionSupported))return!1;try{return await navigator.xr.isSessionSupported("immersive-ar")}catch{return!1}}function bx(){var ie,Fe,he,$,R,A,L,F,W,V,re,ae,ge;const{addItem:e,items:t}=$n(),{id:r}=rs(),[n,o]=S.useState(null),[i,l]=S.useState(!0),[s,u]=S.useState(0),c=t.some(C=>C.id===r),[d,m]=S.useState(!1),[p,x]=S.useState(null),[w,v]=S.useState(""),y=S.useRef(null),[f,h]=S.useState({rating:5,title:"",comment:""}),[g,b]=S.useState(!1),[j,E]=S.useState(""),[_,O]=S.useState(""),B=JSON.parse(localStorage.getItem("user")||"null"),D=async C=>{var z,U;if(C.preventDefault(),!B){E("Sign in to leave a review");return}b(!0),E(""),O("");try{await fx.create({artworkId:r,rating:f.rating,title:f.title,comment:f.comment}),O("Review submitted!"),h({rating:5,title:"",comment:""});const{data:J}=await at.getById(r);o(J.artwork)}catch(J){E(((U=(z=J.response)==null?void 0:z.data)==null?void 0:U.message)||"Failed to submit review")}finally{b(!1)}};S.useEffect(()=>{kx().then(m)},[]),S.useEffect(()=>{d&&Bf(()=>import("./ARView-x4Nys9Q0.js"),[])},[d]),S.useEffect(()=>{if(p)return()=>{p.end().catch(()=>{})}},[p]);const q=async()=>{v(""),console.log("[AR] launch tapped, requesting session...");try{const C=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","anchors","light-estimation"],domOverlay:y.current?{root:y.current}:void 0});console.log("[AR] session granted"),x(C)}catch(C){console.error("[AR] requestSession failed:",C),v(`Could not start AR (${C.name||"error"}: ${C.message||""}). Make sure "Google Play Services for AR" is installed and you opened this page over HTTPS in Chrome.`)}};if(S.useEffect(()=>{(async()=>{try{const{data:z}=await at.getById(r);o(z.artwork)}catch(z){console.error("Failed to fetch artwork:",z)}finally{l(!1)}})()},[r]),i)return a.jsx("div",{className:"detail-loading",children:a.jsx("div",{className:"skeleton",style:{width:"100%",height:500}})});if(!n)return a.jsxs("div",{className:"detail-not-found",children:[a.jsx("h2",{children:"Artwork not found"}),a.jsx(Ye,{to:"/",children:"Back to Catalog"})]});const ce=n.images||[],ke=C=>(C||"").replace(/^https?:\/\/(localhost|127\.0\.0\.1|\d+\.\d+\.\d+\.\d+):\d+/,"");return a.jsxs("div",{className:"artwork-detail",children:[a.jsx("div",{className:"detail-back",children:a.jsx(Ye,{to:"/",children:"← Back to Catalog"})}),a.jsxs("div",{className:"detail-layout",children:[a.jsxs("div",{className:"detail-gallery",children:[a.jsx("div",{className:"detail-main-image",children:a.jsx("img",{src:ke(((ie=ce[s])==null?void 0:ie.url)||n.thumbnail),alt:n.title})}),a.jsxs("div",{className:"preview-actions",children:[d&&a.jsxs("button",{className:"preview-btn preview-btn-ar",onClick:q,children:["◉ Place in AR",a.jsx("small",{children:"See it on your wall at real size"})]}),a.jsxs(Ye,{to:`/artwork/${r}/render`,className:"preview-btn preview-btn-render",children:["✦ Photorealistic Preview",a.jsx("small",{children:"AI render in a photo of your room"})]})]}),w&&a.jsx("div",{className:"ar-error-msg",children:w}),ce.length>1&&a.jsx("div",{className:"detail-thumbnails",children:ce.map((C,z)=>a.jsx("button",{className:`thumb ${s===z?"active":""}`,onClick:()=>u(z),children:a.jsx("img",{src:ke(C.url),alt:`${n.title} ${z+1}`})},z))})]}),a.jsxs("div",{className:"detail-info",children:[a.jsxs("div",{className:"detail-header",children:[a.jsx("h1",{className:"detail-title",children:n.title}),a.jsxs("p",{className:"detail-artist",children:["by"," ",a.jsx(Ye,{to:`/artist/${(Fe=n.artist)==null?void 0:Fe._id}`,children:((he=n.artist)==null?void 0:he.name)||"Unknown"})]}),(($=n.artist)==null?void 0:$.location)&&a.jsxs("p",{className:"detail-location",children:[n.artist.location.city,", ",n.artist.location.country]})]}),a.jsxs("div",{className:"detail-price-section",children:[a.jsxs("span",{className:"detail-price-usd",children:["$",(A=(R=n.price)==null?void 0:R.usd)==null?void 0:A.toLocaleString()]}),a.jsxs("span",{className:"detail-price-ngn",children:["₦",(F=(L=n.price)==null?void 0:L.ngn)==null?void 0:F.toLocaleString()]}),n.status==="Active"&&a.jsx("button",{className:`btn-purchase ${c?"in-cart":""}`,onClick:()=>e(n),children:c?"In Cart ✓":"Add to Cart"}),n.status==="Sold"&&a.jsx("span",{className:"status-sold",children:"Sold"})]}),a.jsxs("div",{className:"detail-specs",children:[a.jsx("h3",{children:"Specifications"}),a.jsxs("div",{className:"specs-grid",children:[a.jsxs("div",{className:"spec",children:[a.jsx("span",{className:"spec-label",children:"Medium"}),a.jsx("span",{className:"spec-value",children:n.medium})]}),a.jsxs("div",{className:"spec",children:[a.jsx("span",{className:"spec-label",children:"Style"}),a.jsx("span",{className:"spec-value",children:n.style})]}),a.jsxs("div",{className:"spec",children:[a.jsx("span",{className:"spec-label",children:"Dimensions"}),a.jsxs("span",{className:"spec-value",children:[(W=n.dimensions)==null?void 0:W.width," × ",(V=n.dimensions)==null?void 0:V.height," ",(re=n.dimensions)==null?void 0:re.unit]})]}),a.jsxs("div",{className:"spec",children:[a.jsx("span",{className:"spec-label",children:"Year"}),a.jsx("span",{className:"spec-value",children:n.yearCreated||"N/A"})]})]})]}),a.jsxs("div",{className:"detail-description",children:[a.jsx("h3",{children:"About"}),a.jsx("p",{children:n.description})]}),((ae=n.tags)==null?void 0:ae.length)>0&&a.jsx("div",{className:"detail-tags",children:n.tags.map((C,z)=>a.jsx("span",{className:"tag",children:C},z))}),n.culturalOrigin&&a.jsxs("div",{className:"detail-origin",children:[a.jsx("h3",{children:"Cultural Origin"}),a.jsx("p",{children:[n.culturalOrigin.country,n.culturalOrigin.region,n.culturalOrigin.tribe].filter(Boolean).join(" · ")})]})]})]}),a.jsx("div",{ref:y,className:"ar-overlay-root"}),p&&a.jsx(S.Suspense,{fallback:null,children:a.jsx(wx,{artwork:n,session:p,overlayRoot:y.current,onClose:()=>x(null)})}),a.jsxs("section",{className:"detail-reviews",children:[a.jsx("h2",{className:"reviews-title",children:"Reviews"}),a.jsxs("form",{onSubmit:D,className:"review-form",children:[a.jsx("h3",{children:"Leave a Review"}),a.jsx("div",{className:"review-star-select",children:[1,2,3,4,5].map(C=>a.jsx("button",{type:"button",className:`star-btn ${C<=f.rating?"active":""}`,onClick:()=>h({...f,rating:C}),children:"★"},C))}),a.jsx("input",{type:"text",placeholder:"Review title (optional)",value:f.title,onChange:C=>h({...f,title:C.target.value})}),a.jsx("textarea",{placeholder:"Share your thoughts about this artwork...",rows:3,value:f.comment,onChange:C=>h({...f,comment:C.target.value})}),j&&a.jsx("div",{className:"form-error",children:j}),_&&a.jsx("div",{className:"form-success",children:_}),a.jsx("button",{type:"submit",className:"btn-submit-review",disabled:g,children:g?"Submitting...":"Submit Review"})]}),((ge=n.reviews)==null?void 0:ge.length)>0?a.jsx("div",{className:"reviews-list",children:n.reviews.map(C=>{var z;return a.jsxs("div",{className:"review-card",children:[a.jsxs("div",{className:"review-header",children:[a.jsx("strong",{children:((z=C.buyer)==null?void 0:z.name)||"Anonymous"}),a.jsx("div",{className:"review-stars",children:Array.from({length:5}).map((U,J)=>a.jsx("span",{className:`star ${J<C.rating?"filled":""}`,children:"★"},J))})]}),C.title&&a.jsx("p",{className:"review-title",children:C.title}),C.comment&&a.jsx("p",{className:"review-comment",children:C.comment}),a.jsx("span",{className:"review-date",children:new Date(C.createdAt).toLocaleDateString()})]},C._id)})}):a.jsx("p",{className:"reviews-empty",children:"No reviews yet. Purchase and receive this artwork to leave a review."})]}),a.jsx("style",{children:`
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
      `})]})}function Sx(){const e=Yt(),[t,r]=S.useState([]),[n,o]=S.useState([]),[i,l]=S.useState(null),[s,u]=S.useState("artworks"),[c,d]=S.useState(!0),[m,p]=S.useState(null);S.useEffect(()=>{(async()=>{try{const[y,f,h]=await Promise.all([at.getMy(),Ro.getAll(),Ro.getSalesOverview().catch(()=>null)]);r(y.data.artworks),o(f.data.orders),h&&l(h.data)}catch(y){console.error("Dashboard fetch error:",y)}finally{d(!1)}})()},[]);const x=async(v,y)=>{p(v);try{await Ro.updateStatus(v,{status:y}),o(f=>f.map(h=>h._id===v?{...h,status:y}:h))}catch{alert("Failed to update order")}p(null)};if(c)return a.jsx("div",{className:"dash-loading",children:Array.from({length:4}).map((v,y)=>a.jsx("div",{className:"skeleton",style:{height:120,marginBottom:16}},y))});const w=[{label:"Total Artworks",value:t.length},{label:"Active Listings",value:t.filter(v=>v.status==="Active").length},{label:"Total Orders",value:n.length},{label:"Revenue (NGN)",value:`₦${((i==null?void 0:i.totalRevenue)||0).toLocaleString()}`}];return a.jsxs("div",{className:"dashboard",children:[a.jsxs("div",{className:"dash-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"dash-title",children:"Artist Dashboard"}),a.jsx("p",{className:"dash-subtitle",children:"Manage your artworks and orders"})]}),a.jsx("button",{className:"btn-create",onClick:()=>e("/create"),children:"+ Create Artwork"})]}),a.jsx("div",{className:"dash-stats",children:w.map((v,y)=>a.jsxs("div",{className:"stat-card",children:[a.jsx("span",{className:"stat-card-value",children:v.value}),a.jsx("span",{className:"stat-card-label",children:v.label})]},y))}),a.jsxs("div",{className:"dash-tabs",children:[a.jsx("button",{className:`tab ${s==="artworks"?"active":""}`,onClick:()=>u("artworks"),children:"My Artworks"}),a.jsxs("button",{className:`tab ${s==="orders"?"active":""}`,onClick:()=>u("orders"),children:["Orders (",n.length,")"]})]}),s==="artworks"&&a.jsx("div",{className:"dash-artworks",children:t.length===0?a.jsx("div",{className:"dash-empty",children:a.jsx("p",{children:"No artworks yet. Create your first listing!"})}):a.jsxs("div",{className:"artwork-table",children:[a.jsxs("div",{className:"table-header",children:[a.jsx("span",{children:"Artwork"}),a.jsx("span",{children:"Status"}),a.jsx("span",{children:"Price"}),a.jsx("span",{children:"Views"}),a.jsx("span",{children:"Created"}),a.jsx("span",{children:"Action"})]}),t.map(v=>{var y,f,h,g;return a.jsxs("div",{className:"table-row",children:[a.jsxs("div",{className:"row-title",children:[a.jsx("div",{className:"row-thumb",children:a.jsx("img",{src:((f=(y=v.images)==null?void 0:y[0])==null?void 0:f.url)||v.thumbnail,alt:""})}),a.jsx("span",{children:v.title})]}),a.jsx("span",{className:`status-badge ${v.status.toLowerCase()}`,children:v.status}),a.jsxs("span",{children:["$",(g=(h=v.price)==null?void 0:h.usd)==null?void 0:g.toLocaleString()]}),a.jsx("span",{children:v.viewCount||0}),a.jsx("span",{children:new Date(v.createdAt).toLocaleDateString()}),a.jsx("span",{children:a.jsx("button",{className:"btn-edit-art",onClick:()=>e(`/edit/${v._id}`),children:"Edit"})})]},v._id)})]})}),s==="orders"&&a.jsx("div",{className:"dash-orders",children:n.length===0?a.jsx("div",{className:"dash-empty",children:a.jsx("p",{children:"No orders yet."})}):a.jsxs("div",{className:"order-table",children:[a.jsxs("div",{className:"table-header",children:[a.jsx("span",{children:"Order ID"}),a.jsx("span",{children:"Status"}),a.jsx("span",{children:"Amount"}),a.jsx("span",{children:"Date"}),a.jsx("span",{children:"Action"})]}),n.map(v=>{var y,f;return a.jsxs("div",{className:"table-row",children:[a.jsxs("span",{className:"row-id",children:["#",v._id.slice(-8)]}),a.jsx("span",{className:`status-badge ${v.status.toLowerCase()}`,children:v.status}),a.jsxs("span",{children:["₦",(f=(y=v.totalAmount)==null?void 0:y.ngn)==null?void 0:f.toLocaleString()]}),a.jsx("span",{children:new Date(v.createdAt).toLocaleDateString()}),a.jsxs("span",{children:[(v.status==="Confirmed"||v.status==="Processing")&&a.jsx("button",{className:"btn-update-status",disabled:m===v._id,onClick:()=>x(v._id,v.status==="Confirmed"?"Processing":"Shipped"),children:m===v._id?"...":v.status==="Confirmed"?"Process":"Ship"}),v.status==="Shipped"&&a.jsx("span",{className:"status-badge shipped",children:"In Transit"})]})]},v._id)})]})}),a.jsx("style",{children:`
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
      `})]})}function $f({onUpload:e,currentUrl:t}){const[r,n]=S.useState(t||""),[o,i]=S.useState(!1),[l,s]=S.useState(!1),u=S.useRef(null),c=async p=>{if(!p)return;if(!["image/jpeg","image/png","image/webp","image/avif"].includes(p.type)){alert("Only JPEG, PNG, WebP, and AVIF images are allowed");return}if(p.size>10*1024*1024){alert("File too large — max 10MB");return}n(URL.createObjectURL(p)),i(!0);try{const w=new FormData;w.append("image",p);const v=localStorage.getItem("token"),{data:y}=await oe.post("/api/upload",w,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${v}`}});e(y.url)}catch{alert("Upload failed"),n("")}finally{i(!1)}},d=p=>{p.preventDefault(),s(!1),c(p.dataTransfer.files[0])},m=p=>{c(p.target.files[0])};return a.jsxs("div",{className:`image-upload ${l?"drag-over":""}`,onDragOver:p=>{p.preventDefault(),s(!0)},onDragLeave:()=>s(!1),onDrop:d,onClick:()=>{var p;return(p=u.current)==null?void 0:p.click()},children:[a.jsx("input",{ref:u,type:"file",accept:"image/jpeg,image/png,image/webp,image/avif",onChange:m,hidden:!0}),o?a.jsxs("div",{className:"upload-status",children:[a.jsx("span",{className:"upload-spinner"}),a.jsx("p",{children:"Uploading..."})]}):r?a.jsxs("div",{className:"upload-preview",children:[a.jsx("img",{src:r,alt:"Preview"}),a.jsx("button",{className:"upload-change",onClick:p=>{p.stopPropagation(),n(""),e("")},children:"Remove"})]}):a.jsxs("div",{className:"upload-placeholder",children:[a.jsx("span",{className:"upload-icon",children:"+"}),a.jsx("p",{children:"Click or drag an image here"}),a.jsx("span",{className:"upload-hint",children:"JPEG, PNG, WebP, AVIF — max 10MB"})]}),a.jsx("style",{children:`
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
      `})]})}function jx(){const e=Yt(),[t,r]=S.useState({title:"",description:"",medium:"",style:"",priceNgn:"",priceUsd:"",height:"",width:"",imageUrl:"",status:"Active"}),[n,o]=S.useState(!1),[i,l]=S.useState(""),s=d=>{r({...t,[d.target.name]:d.target.value})},u=()=>t.imageUrl?t.title.trim()?t.description.trim()?t.medium.trim()?t.style.trim()?!t.priceNgn||Number(t.priceNgn)<=0?"Enter a valid NGN price":!t.priceUsd||Number(t.priceUsd)<=0?"Enter a valid USD price":!t.height||Number(t.height)<=0?"Enter a valid height":!t.width||Number(t.width)<=0?"Enter a valid width":"":"Style is required":"Medium is required":"Description is required":"Title is required":"Upload an image of your artwork",c=async d=>{var p,x;d.preventDefault();const m=u();if(m){l(m);return}o(!0),l("");try{await at.create({status:t.status,title:t.title,description:t.description,medium:t.medium,style:t.style,price:{ngn:Number(t.priceNgn),usd:Number(t.priceUsd)},dimensions:{height:Number(t.height),width:Number(t.width),depth:0,unit:"cm"},images:[{url:t.imageUrl,alt:t.title}]}),e("/dashboard")}catch(w){l(((x=(p=w.response)==null?void 0:p.data)==null?void 0:x.message)||"Failed to create artwork")}finally{o(!1)}};return a.jsxs("div",{className:"create-artwork-page",children:[a.jsxs("div",{className:"create-header",children:[a.jsx("button",{className:"btn-back",onClick:()=>e("/dashboard"),children:"← Back to Dashboard"}),a.jsx("h1",{className:"create-title",children:"List New Artwork"})]}),a.jsxs("form",{onSubmit:c,className:"create-form",children:[a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{className:"section-title",children:"Artwork"}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Image *"}),a.jsx($f,{currentUrl:t.imageUrl,onUpload:d=>r({...t,imageUrl:d})})]}),a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Title *"}),a.jsx("input",{name:"title",value:t.title,onChange:s,placeholder:"e.g. African Sunset"})]}),a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Description *"}),a.jsx("textarea",{name:"description",value:t.description,onChange:s,rows:4,placeholder:"Describe the artwork, its inspiration, and significance..."})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Medium *"}),a.jsx("input",{name:"medium",value:t.medium,onChange:s,placeholder:"e.g. Oil on Canvas"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Style *"}),a.jsx("input",{name:"style",value:t.style,onChange:s,placeholder:"e.g. Contemporary"})]})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{className:"section-title",children:"Pricing & Size"}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Price (NGN) *"}),a.jsx("input",{name:"priceNgn",type:"number",value:t.priceNgn,onChange:s,min:"0",placeholder:"e.g. 150000"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Price (USD) *"}),a.jsx("input",{name:"priceUsd",type:"number",value:t.priceUsd,onChange:s,min:"0",placeholder:"e.g. 350"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Width (cm) *"}),a.jsx("input",{name:"width",type:"number",value:t.width,onChange:s,min:"1",placeholder:"e.g. 100"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Height (cm) *"}),a.jsx("input",{name:"height",type:"number",value:t.height,onChange:s,min:"1",placeholder:"e.g. 80"})]})]}),a.jsx("p",{className:"form-hint",children:"Accurate dimensions power the AR preview at real-world size."})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{className:"section-title",children:"Listing Status"}),a.jsxs("div",{className:"status-toggle",children:[a.jsxs("button",{type:"button",className:`toggle-btn ${t.status==="Active"?"active":""}`,onClick:()=>r({...t,status:"Active"}),children:[a.jsx("span",{className:"toggle-icon",children:"✓"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Active"}),a.jsx("small",{children:"Visible in catalogue immediately"})]})]}),a.jsxs("button",{type:"button",className:`toggle-btn ${t.status==="Draft"?"draft":""}`,onClick:()=>r({...t,status:"Draft"}),children:[a.jsx("span",{className:"toggle-icon",children:"✎"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Draft"}),a.jsx("small",{children:"Save as draft, publish later"})]})]})]})]}),i&&a.jsx("div",{className:"form-error",children:i}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"button",className:"btn-cancel",onClick:()=>e("/dashboard"),children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn-submit-artwork",disabled:n,children:n?"Creating...":t.status==="Draft"?"Save Draft":"Publish Artwork"})]})]}),a.jsx("style",{children:`
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
      `})]})}function Nx(){const{id:e}=rs(),t=Yt(),[r,n]=S.useState({title:"",description:"",medium:"",style:"",subject:"",priceNgn:"",priceUsd:"",height:"",width:"",depth:"0",imageUrl:"",status:"Active",tags:"",yearCreated:"",country:"",region:"",tribe:"",materials:""}),[o,i]=S.useState(!0),[l,s]=S.useState(!1),[u,c]=S.useState(""),[d,m]=S.useState("update");S.useEffect(()=>{(async()=>{var y,f,h,g,b,j,E,_,O,B,D,q,ce,ke,ie,Fe;try{const{data:he}=await at.getById(e),$=he.artwork;n({title:$.title||"",description:$.description||"",medium:$.medium||"",style:$.style||"",subject:$.subject||"",priceNgn:((f=(y=$.price)==null?void 0:y.ngn)==null?void 0:f.toString())||"",priceUsd:((g=(h=$.price)==null?void 0:h.usd)==null?void 0:g.toString())||"",height:((j=(b=$.dimensions)==null?void 0:b.height)==null?void 0:j.toString())||"",width:((_=(E=$.dimensions)==null?void 0:E.width)==null?void 0:_.toString())||"",depth:((B=(O=$.dimensions)==null?void 0:O.depth)==null?void 0:B.toString())||"0",imageUrl:((q=(D=$.images)==null?void 0:D[0])==null?void 0:q.url)||"",status:$.status||"Active",tags:($.tags||[]).join(", "),yearCreated:((ce=$.yearCreated)==null?void 0:ce.toString())||"",country:((ke=$.culturalOrigin)==null?void 0:ke.country)||"",region:((ie=$.culturalOrigin)==null?void 0:ie.region)||"",tribe:((Fe=$.culturalOrigin)==null?void 0:Fe.tribe)||"",materials:($.materials||[]).join(", ")})}catch{c("Failed to load artwork")}finally{i(!1)}})()},[e]);const p=v=>n({...r,[v.target.name]:v.target.value}),x=async v=>{var y,f;v.preventDefault(),s(!0),c("");try{const h={status:d==="unpublish"?"Draft":r.status,title:r.title,description:r.description,medium:r.medium,style:r.style,subject:r.subject||void 0,price:{ngn:Number(r.priceNgn),usd:Number(r.priceUsd)},dimensions:{height:Number(r.height),width:Number(r.width),depth:Number(r.depth)||0,unit:"cm"},images:r.imageUrl?[{url:r.imageUrl,alt:r.title}]:void 0,tags:r.tags.split(",").map(g=>g.trim()).filter(Boolean),yearCreated:r.yearCreated?Number(r.yearCreated):void 0,culturalOrigin:{country:r.country||"",region:r.region||"",tribe:r.tribe||""},materials:r.materials.split(",").map(g=>g.trim()).filter(Boolean)};d==="unpublish"&&(h.status="Draft"),await at.update(e,h),t("/dashboard")}catch(h){c(((f=(y=h.response)==null?void 0:y.data)==null?void 0:f.message)||"Failed to update artwork")}finally{s(!1)}},w=async()=>{if(window.confirm("Delete this artwork permanently?")){s(!0);try{await at.delete(e),t("/dashboard")}catch{c("Failed to delete")}finally{s(!1)}}};return o?a.jsx("div",{className:"create-artwork-page",children:a.jsx("div",{className:"skeleton",style:{height:400}})}):a.jsxs("div",{className:"create-artwork-page",children:[a.jsxs("div",{className:"create-header",children:[a.jsx("button",{className:"btn-back",onClick:()=>t("/dashboard"),children:"← Back to Dashboard"}),a.jsx("h1",{className:"create-title",children:"Edit Artwork"})]}),a.jsxs("form",{onSubmit:x,className:"create-form",children:[a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{className:"section-title",children:"Basic Information"}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Title *"}),a.jsx("input",{name:"title",value:r.title,onChange:p,required:!0})]}),a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Description *"}),a.jsx("textarea",{name:"description",value:r.description,onChange:p,required:!0,rows:4})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Medium *"}),a.jsx("input",{name:"medium",value:r.medium,onChange:p,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Style *"}),a.jsx("input",{name:"style",value:r.style,onChange:p,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Subject"}),a.jsx("input",{name:"subject",value:r.subject,onChange:p})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Year Created"}),a.jsx("input",{name:"yearCreated",type:"number",value:r.yearCreated,onChange:p})]})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{className:"section-title",children:"Listing Status"}),a.jsxs("div",{className:"status-toggle",children:[a.jsxs("button",{type:"button",className:`toggle-btn ${r.status==="Active"?"active":""}`,onClick:()=>n({...r,status:"Active"}),children:[a.jsx("span",{className:"toggle-icon",children:"✓"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Active"}),a.jsx("small",{children:"Visible in catalogue"})]})]}),a.jsxs("button",{type:"button",className:`toggle-btn ${r.status==="Draft"?"draft":""}`,onClick:()=>n({...r,status:"Draft"}),children:[a.jsx("span",{className:"toggle-icon",children:"✎"}),a.jsxs("div",{children:[a.jsx("strong",{children:"Draft"}),a.jsx("small",{children:"Hidden from catalogue"})]})]})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{className:"section-title",children:"Pricing"}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Price (NGN) *"}),a.jsx("input",{name:"priceNgn",type:"number",value:r.priceNgn,onChange:p,required:!0,min:"0"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Price (USD) *"}),a.jsx("input",{name:"priceUsd",type:"number",value:r.priceUsd,onChange:p,required:!0,min:"0"})]})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{className:"section-title",children:"Dimensions (cm)"}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Height *"}),a.jsx("input",{name:"height",type:"number",value:r.height,onChange:p,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Width *"}),a.jsx("input",{name:"width",type:"number",value:r.width,onChange:p,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Depth"}),a.jsx("input",{name:"depth",type:"number",value:r.depth,onChange:p})]})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{className:"section-title",children:"Image"}),a.jsx($f,{currentUrl:r.imageUrl,onUpload:v=>n({...r,imageUrl:v})})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{className:"section-title",children:"Cultural Origin"}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Country"}),a.jsx("input",{name:"country",value:r.country,onChange:p})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Region"}),a.jsx("input",{name:"region",value:r.region,onChange:p})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Tribe"}),a.jsx("input",{name:"tribe",value:r.tribe,onChange:p})]})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{className:"section-title",children:"Additional Info"}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Tags"}),a.jsx("input",{name:"tags",value:r.tags,onChange:p,placeholder:"comma separated"})]}),a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Materials"}),a.jsx("input",{name:"materials",value:r.materials,onChange:p,placeholder:"comma separated"})]})]})]}),u&&a.jsx("div",{className:"form-error",children:u}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"button",className:"btn-cancel",onClick:()=>t("/dashboard"),children:"Cancel"}),a.jsx("button",{type:"button",className:"btn-delete",onClick:w,disabled:l,children:"Delete"}),a.jsx("button",{type:"submit",className:"btn-submit-artwork",disabled:l,onClick:()=>m("update"),children:l?"Saving...":"Save Changes"})]})]}),a.jsx("style",{children:Ex})]})}const Ex=`
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
`;function Cx(){const e=Yt(),[t,r]=S.useState(!0),[n,o]=S.useState({name:"",email:"",password:"",role:"buyer"}),[i,l]=S.useState(""),[s,u]=S.useState(!1),c=m=>{o({...n,[m.target.name]:m.target.value})},d=async m=>{var p,x;m.preventDefault(),l(""),u(!0);try{const w=t?ti.login:ti.signup,{data:v}=await w({email:n.email,password:n.password,...t?{}:{name:n.name,role:n.role}});localStorage.setItem("token",v.token),localStorage.setItem("user",JSON.stringify(v.user)),e("/")}catch(w){l(((x=(p=w.response)==null?void 0:p.data)==null?void 0:x.message)||"Something went wrong")}finally{u(!1)}};return a.jsxs("div",{className:"login-page",children:[a.jsxs("div",{className:"login-card",children:[a.jsxs("div",{className:"login-header",children:[a.jsx("span",{className:"login-icon",children:"✦"}),a.jsx("h1",{className:"login-title",children:t?"Welcome Back":"Join Heritage AR"}),a.jsx("p",{className:"login-subtitle",children:t?"Sign in to explore and collect African art.":"Create an account to start your collection."})]}),a.jsxs("form",{onSubmit:d,className:"login-form",children:[!t&&a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"name",children:"Full Name"}),a.jsx("input",{id:"name",name:"name",type:"text",value:n.name,onChange:c,required:!0,placeholder:"Your full name"})]}),!t&&a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"role",children:"I want to"}),a.jsxs("select",{id:"role",name:"role",value:n.role,onChange:c,children:[a.jsx("option",{value:"buyer",children:"Browse & Collect Art"}),a.jsx("option",{value:"artist",children:"Sell My Artwork"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"email",children:"Email"}),a.jsx("input",{id:"email",name:"email",type:"email",value:n.email,onChange:c,required:!0,placeholder:"you@example.com"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsx("input",{id:"password",name:"password",type:"password",value:n.password,onChange:c,required:!0,placeholder:"Any password (demo mode)"})]}),i&&a.jsx("div",{className:"form-error",children:i}),a.jsx("button",{type:"submit",className:"btn-submit",disabled:s,children:s?"Loading...":t?"Sign In":"Create Account"})]}),a.jsxs("div",{className:"login-toggle",children:[a.jsx("span",{children:t?"Don't have an account?":"Already have an account?"}),a.jsx("button",{onClick:()=>{r(!t),l("")},children:t?"Sign Up":"Sign In"})]})]}),a.jsx("style",{children:`
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
      `})]})}function Rx(){Yt();const[e,t]=S.useState({name:"",bio:"",phone:"",country:"",city:"",avatar:""}),[r,n]=S.useState([]),[o,i]=S.useState(!1),[l,s]=S.useState(!1);S.useEffect(()=>{(async()=>{var d,m;try{const{data:p}=await ti.getMe(),x=p.user;if(t({name:x.name||"",bio:x.bio||"",phone:x.phone||"",country:((d=x.location)==null?void 0:d.country)||"",city:((m=x.location)==null?void 0:m.city)||"",avatar:x.avatar||""}),x.role==="artist"){const w=await at.getMy();n(w.data.artworks)}}catch(p){console.error(p)}})()},[]);const u=async c=>{c.preventDefault(),i(!0),s(!1);try{await ti.updateProfile({name:e.name,bio:e.bio,phone:e.phone,location:{country:e.country,city:e.city},avatar:e.avatar});const d=JSON.parse(localStorage.getItem("user")||"{}");localStorage.setItem("user",JSON.stringify({...d,name:e.name})),s(!0),setTimeout(()=>s(!1),2e3)}catch(d){console.error(d)}i(!1)};return a.jsxs("div",{className:"profile-page",children:[a.jsxs("div",{className:"profile-layout",children:[a.jsxs("div",{className:"profile-card",children:[a.jsx("h1",{className:"profile-title",children:"Profile"}),a.jsxs("form",{onSubmit:u,className:"profile-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Display Name"}),a.jsx("input",{value:e.name,onChange:c=>t({...e,name:c.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Bio"}),a.jsx("textarea",{rows:3,value:e.bio,onChange:c=>t({...e,bio:c.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Phone"}),a.jsx("input",{value:e.phone,onChange:c=>t({...e,phone:c.target.value})})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Country"}),a.jsx("input",{value:e.country,onChange:c=>t({...e,country:c.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"City"}),a.jsx("input",{value:e.city,onChange:c=>t({...e,city:c.target.value})})]})]}),a.jsx("button",{type:"submit",className:"btn-save",disabled:o,children:o?"Saving...":l?"Saved ✓":"Save Profile"})]})]}),r.length>0&&a.jsxs("div",{className:"profile-stats-card",children:[a.jsx("h3",{children:"Artist Summary"}),a.jsxs("div",{className:"profile-stats",children:[a.jsxs("div",{className:"pstat",children:[a.jsx("span",{className:"pstat-val",children:r.length}),a.jsx("span",{className:"pstat-lbl",children:"Total Works"})]}),a.jsxs("div",{className:"pstat",children:[a.jsx("span",{className:"pstat-val",children:r.filter(c=>c.status==="Active").length}),a.jsx("span",{className:"pstat-lbl",children:"Active"})]}),a.jsxs("div",{className:"pstat",children:[a.jsx("span",{className:"pstat-val",children:r.filter(c=>c.status==="Sold").length}),a.jsx("span",{className:"pstat-lbl",children:"Sold"})]})]})]})]}),a.jsx("style",{children:`
        .profile-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 100px 24px 60px;
          animation: fadeIn 0.4s ease;
        }
        .profile-layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 32px;
        }
        .profile-card, .profile-stats-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 32px;
        }
        .profile-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .profile-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .profile-form label {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }
        .profile-form input, .profile-form textarea {
          padding: 10px 14px;
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
          padding: 12px;
          background: var(--color-accent);
          color: var(--color-bg);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
          margin-top: 8px;
        }
        .btn-save:hover:not(:disabled) {
          background: var(--color-accent-light);
        }
        .btn-save:disabled {
          opacity: 0.6;
        }
        .profile-stats {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 16px;
        }
        .profile-stats-card h3 {
          font-family: var(--font-display);
          font-size: 1.1rem;
        }
        .pstat {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid var(--color-border);
        }
        .pstat-val {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-accent);
        }
        .pstat-lbl {
          color: var(--color-text-muted);
          font-size: 0.85rem;
        }
        @media (max-width: 768px) {
          .profile-layout {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function _x(){const e=Yt(),{items:t,totalNgn:r,totalUsd:n,clearCart:o}=$n(),[i,l]=S.useState({fullName:"",phone:"",address:"",city:"",state:"",country:"Nigeria",zipCode:""}),[s,u]=S.useState(!1),[c,d]=S.useState(""),m=async p=>{var x,w;p.preventDefault(),u(!0),d("");try{const{data:v}=await Ro.create({items:t.map(y=>({artworkId:y.id,quantity:1})),shippingAddress:i,currency:"NGN"});o(),v.paymentUrl&&window.open(v.paymentUrl,"_blank"),e("/dashboard",{state:{orderCreated:!0}})}catch(v){d(((w=(x=v.response)==null?void 0:x.data)==null?void 0:w.message)||"Checkout failed")}finally{u(!1)}};return t.length===0?a.jsxs("div",{className:"checkout-page",children:[a.jsxs("div",{className:"checkout-empty",children:[a.jsx("h2",{children:"Your cart is empty"}),a.jsx("button",{onClick:()=>e("/"),children:"Browse Artworks"})]}),a.jsx("style",{children:Wu})]}):a.jsxs("div",{className:"checkout-page",children:[a.jsx("h1",{className:"checkout-title",children:"Checkout"}),a.jsxs("div",{className:"checkout-layout",children:[a.jsxs("form",{onSubmit:m,className:"checkout-form",children:[a.jsx("h3",{children:"Shipping Information"}),a.jsxs("div",{className:"checkout-grid",children:[a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{name:"fullName",value:i.fullName,onChange:p=>l({...i,fullName:p.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Phone"}),a.jsx("input",{name:"phone",value:i.phone,onChange:p=>l({...i,phone:p.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group full",children:[a.jsx("label",{children:"Address"}),a.jsx("input",{name:"address",value:i.address,onChange:p=>l({...i,address:p.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"City"}),a.jsx("input",{name:"city",value:i.city,onChange:p=>l({...i,city:p.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"State"}),a.jsx("input",{name:"state",value:i.state,onChange:p=>l({...i,state:p.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Country"}),a.jsx("input",{name:"country",value:i.country,onChange:p=>l({...i,country:p.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"ZIP Code"}),a.jsx("input",{name:"zipCode",value:i.zipCode,onChange:p=>l({...i,zipCode:p.target.value})})]})]}),c&&a.jsx("div",{className:"form-error",children:c}),a.jsx("button",{type:"submit",className:"btn-place-order",disabled:s,children:s?"Processing...":`Place Order — ₦${r.toLocaleString()}`})]}),a.jsxs("div",{className:"checkout-summary",children:[a.jsx("h3",{children:"Order Summary"}),t.map(p=>{var x,w;return a.jsxs("div",{className:"checkout-item",children:[a.jsx("div",{className:"checkout-item-img",children:a.jsx("img",{src:p.image,alt:p.title})}),a.jsxs("div",{children:[a.jsx("strong",{children:p.title}),a.jsxs("span",{className:"checkout-item-price",children:["$",(w=(x=p.price)==null?void 0:x.usd)==null?void 0:w.toLocaleString()]})]})]},p.id)}),a.jsxs("div",{className:"checkout-total",children:[a.jsx("span",{children:"Total"}),a.jsxs("strong",{children:["₦",r.toLocaleString()," ($",n.toLocaleString(),")"]})]})]})]}),a.jsx("style",{children:Wu})]})}const Wu=`
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
`,Px=60,Ox=78;function zx(){var $,R,A,L,F,W,V,re,ae,ge;const{id:e}=rs(),t=S.useRef(null),r=S.useRef(null),n=S.useRef(null),[o,i]=S.useState(null),[l,s]=S.useState(null),[u,c]=S.useState(null),[d,m]=S.useState(!1),[p,x]=S.useState("Upload a room photo to begin."),[w,v]=S.useState(""),[y,f]=S.useState(null),[h,g]=S.useState(1),[b,j]=S.useState(null);sa.useEffect(()=>{(async()=>{try{const{data:z}=await at.getById(e);i(z.artwork)}catch{x("Failed to load artwork"),v("warn")}})()},[e]);const E=((R=($=o==null?void 0:o.images)==null?void 0:$[0])==null?void 0:R.url)||(o==null?void 0:o.thumbnail)||"",_=S.useCallback(()=>new Promise((C,z)=>{const U=new Image;U.onload=()=>{const be=Math.min(1,1280/U.naturalWidth),ve=document.createElement("canvas");ve.width=U.naturalWidth*be,ve.height=U.naturalHeight*be,ve.getContext("2d").drawImage(U,0,0,ve.width,ve.height),C(ve.toDataURL("image/jpeg",.9).split(",")[1])},U.onerror=z,U.src=l}),[l]),O=S.useCallback(()=>new Promise((C,z)=>{const U=new Image;U.crossOrigin="anonymous",U.onload=()=>{const J=document.createElement("canvas"),be=18;J.width=U.naturalWidth+be*2,J.height=U.naturalHeight+be*2;const ve=J.getContext("2d");ve.fillStyle="#3a2c1c",ve.fillRect(0,0,J.width,J.height),ve.fillStyle="#1c140c",ve.fillRect(be-3,be-3,U.naturalWidth+6,U.naturalHeight+6),ve.drawImage(U,be,be,U.naturalWidth,U.naturalHeight),C(J.toDataURL("image/png").split(",")[1])},U.onerror=z,U.src=E}),[E]),B=C=>{var U;const z=(U=C.target.files)==null?void 0:U[0];z&&(s(URL.createObjectURL(z)),c(null),f(null),g(1),x("Drag the marker to where you would hang the piece, then render."),v("ok"))},D=C=>{if(!r.current)return;r.current.setPointerCapture(C.pointerId);const z=t.current.getBoundingClientRect(),U=(y==null?void 0:y.x)??z.width/2,J=(y==null?void 0:y.y)??z.height*.46;j({dx:C.clientX-z.left-U,dy:C.clientY-z.top-J,startX:U,startY:J})},q=C=>{if(!b||!t.current)return;const z=t.current.getBoundingClientRect();f({x:C.clientX-z.left-b.dx,y:C.clientY-z.top-b.dy})},ce=()=>{j(null)},ke=C=>{l&&(C.preventDefault(),g(z=>Math.max(.4,Math.min(2.5,z+(C.deltaY<0?.08:-.08)))))},ie=async()=>{if(l){m(!0),c(null);try{const C=await _(),z=await O(),U=t.current,J=(y==null?void 0:y.x)??U.clientWidth/2,be=(y==null?void 0:y.y)??U.clientHeight*.46,ve=+(J/U.clientWidth).toFixed(3),Ni=+(be/U.clientHeight).toFixed(3),ct=await fetch("/api/render/render-room",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomBase64:C,artBase64:z,position:{x:ve,y:Ni},dimensionsCm:{w:Math.round(Px*h),h:Math.round(Ox*h)},mimeType:"image/jpeg"})});if(!ct.ok){const cs=await ct.json().catch(()=>({}));throw new Error(cs.detail||cs.error||`HTTP ${ct.status}`)}const us=await ct.json();c(`data:${us.mimeType||"image/png"};base64,${us.imageBase64}`),x("Rendered — photorealistic composite from Gemini."),v("ok")}catch(C){x(`Render failed: ${C.message}. Is GEMINI_API_KEY set on the server?`),v("warn")}finally{m(!1)}}},Fe=()=>{c(null),x("Reposition the marker and render again."),v("ok")},he=()=>{const C=document.createElement("a");C.href=u,C.download=`${(o==null?void 0:o.title)||"artwork"}-on-my-wall.png`,C.click()};return a.jsxs("div",{className:"render-page",children:[a.jsxs("div",{className:"render-header",children:[a.jsx(Ye,{to:`/artwork/${e}`,className:"render-back",children:"← Back to artwork"}),a.jsxs("h1",{children:["View it on ",a.jsx("em",{children:"your wall"})]}),a.jsx("p",{className:"render-subtitle",children:"Photorealistic AI preview powered by Gemini"})]}),a.jsxs("div",{className:"render-layout",children:[a.jsx("div",{className:"render-stage-col",children:a.jsxs("div",{ref:t,className:"render-stage",onPointerDown:D,onPointerMove:q,onPointerUp:ce,onWheel:ke,style:{touchAction:"none"},children:[!l&&!u&&a.jsxs("div",{className:"render-placeholder",children:[a.jsx("div",{className:"render-placeholder-icon",children:"🖼️"}),a.jsx("p",{children:"Upload a photo of your room to see how this artwork would look on your wall."}),a.jsx("button",{className:"btn-upload",onClick:()=>{var C;return(C=n.current)==null?void 0:C.click()},children:"Choose a photo"})]}),l&&a.jsx("img",{src:l,alt:"Your room",className:"render-room-img",style:{display:u?"none":"block"}}),l&&!u&&a.jsx("div",{ref:r,className:"render-marker",style:{left:(y==null?void 0:y.x)??"50%",top:(y==null?void 0:y.y)??"46%",width:`${64*h}px`,height:`${84*h}px`}}),u&&a.jsxs(a.Fragment,{children:[a.jsx("img",{src:u,alt:"Rendered result",className:"render-result-img"}),a.jsx("div",{className:"render-badge",children:"✦ Gemini render"})]}),d&&a.jsxs("div",{className:"render-loader",children:[a.jsx("div",{className:"render-spinner"}),a.jsx("p",{children:"Hanging it on your wall..."})]})]})}),a.jsxs("div",{className:"render-panel",children:[a.jsxs("div",{className:"render-group",children:[a.jsx("h3",{children:"Your space"}),a.jsx("input",{ref:n,type:"file",accept:"image/*",onChange:B,style:{display:"none"}}),a.jsx("button",{className:"render-btn",onClick:()=>{var C;return(C=n.current)==null?void 0:C.click()},disabled:!!u,children:"↑ Choose a photo of your room"}),a.jsx("p",{className:"render-hint",children:"Drag the dashed marker to position the artwork. Scroll over it to resize."})]}),a.jsx("div",{className:"render-artwork-info",children:o&&a.jsxs(a.Fragment,{children:[a.jsx("img",{src:E,alt:o.title,className:"render-artwork-thumb"}),a.jsxs("div",{children:[a.jsx("div",{className:"render-artwork-title",children:o.title}),a.jsxs("div",{className:"render-artwork-meta",children:[(A=o.dimensions)==null?void 0:A.width," × ",(L=o.dimensions)==null?void 0:L.height," ",(F=o.dimensions)==null?void 0:F.unit]})]})]})}),u?a.jsxs("div",{className:"render-actions",children:[a.jsx("button",{className:"render-btn render-btn-primary",onClick:he,children:"↓ Save this preview"}),a.jsx("button",{className:"render-btn",onClick:Fe,children:"↻ Back to placement"})]}):a.jsx("button",{className:"render-btn render-btn-primary",onClick:ie,disabled:!l||d,children:d?"Rendering...":"✦ Render photorealistically"}),a.jsx("div",{className:`render-status ${w}`,children:p}),o&&a.jsxs("div",{className:"render-meta",children:[a.jsx("div",{className:"render-meta-title",children:o.title}),a.jsxs("div",{children:[((W=o.artist)==null?void 0:W.name)||"Unknown"," · ",o.medium]}),a.jsxs("div",{className:"render-meta-price",children:["$",(re=(V=o.price)==null?void 0:V.usd)==null?void 0:re.toLocaleString()," · ₦",(ge=(ae=o.price)==null?void 0:ae.ngn)==null?void 0:ge.toLocaleString()]})]})]})]}),a.jsx("style",{children:`
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
        }

        .render-stage-col {
          min-height: 0;
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
          .render-header h1 {
            font-size: 1.4rem;
          }
        }
      `})]})}function Tx(){return a.jsx(wg,{children:a.jsxs("div",{className:"app",children:[a.jsx(kg,{}),a.jsx(bg,{}),a.jsx("main",{className:"main-content",children:a.jsxs(ug,{children:[a.jsx(tt,{path:"/",element:a.jsx(gx,{})}),a.jsx(tt,{path:"/artists",element:a.jsx(vx,{})}),a.jsx(tt,{path:"/artwork/:id",element:a.jsx(bx,{})}),a.jsx(tt,{path:"/dashboard",element:a.jsx(Sx,{})}),a.jsx(tt,{path:"/create",element:a.jsx(jx,{})}),a.jsx(tt,{path:"/edit/:id",element:a.jsx(Nx,{})}),a.jsx(tt,{path:"/login",element:a.jsx(Cx,{})}),a.jsx(tt,{path:"/profile",element:a.jsx(Rx,{})}),a.jsx(tt,{path:"/checkout",element:a.jsx(_x,{})}),a.jsx(tt,{path:"/artwork/:id/render",element:a.jsx(zx,{})})]})})]})})}nl.createRoot(document.getElementById("root")).render(a.jsx(sa.StrictMode,{children:a.jsx(gg,{children:a.jsx(Tx,{})})}));export{S as a,a as j,vh as r};
