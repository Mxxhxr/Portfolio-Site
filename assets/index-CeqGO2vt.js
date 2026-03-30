(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ZS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ef={exports:{}},aa={},Tf={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function QS(){if(rg)return ht;rg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(N,G,q){this.props=N,this.context=G,this.refs=T,this.updater=q||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,G){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,G,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=y.prototype;function b(N,G,q){this.props=N,this.context=G,this.refs=T,this.updater=q||S}var w=b.prototype=new x;w.constructor=b,E(w,y.prototype),w.isPureReactComponent=!0;var L=Array.isArray,O=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function re(N,G,q){var le,de={},Se=null,Ee=null;if(G!=null)for(le in G.ref!==void 0&&(Ee=G.ref),G.key!==void 0&&(Se=""+G.key),G)O.call(G,le)&&!I.hasOwnProperty(le)&&(de[le]=G[le]);var be=arguments.length-2;if(be===1)de.children=q;else if(1<be){for(var Ue=Array(be),Be=0;Be<be;Be++)Ue[Be]=arguments[Be+2];de.children=Ue}if(N&&N.defaultProps)for(le in be=N.defaultProps,be)de[le]===void 0&&(de[le]=be[le]);return{$$typeof:n,type:N,key:Se,ref:Ee,props:de,_owner:F.current}}function C(N,G){return{$$typeof:n,type:N.type,key:G,ref:N.ref,props:N.props,_owner:N._owner}}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function ue(N){var G={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(q){return G[q]})}var ce=/\/+/g;function ve(N,G){return typeof N=="object"&&N!==null&&N.key!=null?ue(""+N.key):G.toString(36)}function H(N,G,q,le,de){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var Ee=!1;if(N===null)Ee=!0;else switch(Se){case"string":case"number":Ee=!0;break;case"object":switch(N.$$typeof){case n:case e:Ee=!0}}if(Ee)return Ee=N,de=de(Ee),N=le===""?"."+ve(Ee,0):le,L(de)?(q="",N!=null&&(q=N.replace(ce,"$&/")+"/"),H(de,G,q,"",function(Be){return Be})):de!=null&&(D(de)&&(de=C(de,q+(!de.key||Ee&&Ee.key===de.key?"":(""+de.key).replace(ce,"$&/")+"/")+N)),G.push(de)),1;if(Ee=0,le=le===""?".":le+":",L(N))for(var be=0;be<N.length;be++){Se=N[be];var Ue=le+ve(Se,be);Ee+=H(Se,G,q,Ue,de)}else if(Ue=v(N),typeof Ue=="function")for(N=Ue.call(N),be=0;!(Se=N.next()).done;)Se=Se.value,Ue=le+ve(Se,be++),Ee+=H(Se,G,q,Ue,de);else if(Se==="object")throw G=String(N),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ee}function X(N,G,q){if(N==null)return N;var le=[],de=0;return H(N,le,"","",function(Se){return G.call(q,Se,de++)}),le}function te(N){if(N._status===-1){var G=N._result;G=G(),G.then(function(q){(N._status===0||N._status===-1)&&(N._status=1,N._result=q)},function(q){(N._status===0||N._status===-1)&&(N._status=2,N._result=q)}),N._status===-1&&(N._status=0,N._result=G)}if(N._status===1)return N._result.default;throw N._result}var Q={current:null},z={transition:null},K={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function j(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:X,forEach:function(N,G,q){X(N,function(){G.apply(this,arguments)},q)},count:function(N){var G=0;return X(N,function(){G++}),G},toArray:function(N){return X(N,function(G){return G})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ht.Component=y,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=b,ht.StrictMode=s,ht.Suspense=d,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,ht.act=j,ht.cloneElement=function(N,G,q){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var le=E({},N.props),de=N.key,Se=N.ref,Ee=N._owner;if(G!=null){if(G.ref!==void 0&&(Se=G.ref,Ee=F.current),G.key!==void 0&&(de=""+G.key),N.type&&N.type.defaultProps)var be=N.type.defaultProps;for(Ue in G)O.call(G,Ue)&&!I.hasOwnProperty(Ue)&&(le[Ue]=G[Ue]===void 0&&be!==void 0?be[Ue]:G[Ue])}var Ue=arguments.length-2;if(Ue===1)le.children=q;else if(1<Ue){be=Array(Ue);for(var Be=0;Be<Ue;Be++)be[Be]=arguments[Be+2];le.children=be}return{$$typeof:n,type:N.type,key:de,ref:Se,props:le,_owner:Ee}},ht.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},ht.createElement=re,ht.createFactory=function(N){var G=re.bind(null,N);return G.type=N,G},ht.createRef=function(){return{current:null}},ht.forwardRef=function(N){return{$$typeof:c,render:N}},ht.isValidElement=D,ht.lazy=function(N){return{$$typeof:p,_payload:{_status:-1,_result:N},_init:te}},ht.memo=function(N,G){return{$$typeof:h,type:N,compare:G===void 0?null:G}},ht.startTransition=function(N){var G=z.transition;z.transition={};try{N()}finally{z.transition=G}},ht.unstable_act=j,ht.useCallback=function(N,G){return Q.current.useCallback(N,G)},ht.useContext=function(N){return Q.current.useContext(N)},ht.useDebugValue=function(){},ht.useDeferredValue=function(N){return Q.current.useDeferredValue(N)},ht.useEffect=function(N,G){return Q.current.useEffect(N,G)},ht.useId=function(){return Q.current.useId()},ht.useImperativeHandle=function(N,G,q){return Q.current.useImperativeHandle(N,G,q)},ht.useInsertionEffect=function(N,G){return Q.current.useInsertionEffect(N,G)},ht.useLayoutEffect=function(N,G){return Q.current.useLayoutEffect(N,G)},ht.useMemo=function(N,G){return Q.current.useMemo(N,G)},ht.useReducer=function(N,G,q){return Q.current.useReducer(N,G,q)},ht.useRef=function(N){return Q.current.useRef(N)},ht.useState=function(N){return Q.current.useState(N)},ht.useSyncExternalStore=function(N,G,q){return Q.current.useSyncExternalStore(N,G,q)},ht.useTransition=function(){return Q.current.useTransition()},ht.version="18.3.1",ht}var sg;function Zd(){return sg||(sg=1,Tf.exports=QS()),Tf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function JS(){if(og)return aa;og=1;var n=Zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},v=null,S=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)s.call(d,p)&&!l.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:v,ref:S,props:g,_owner:o.current}}return aa.Fragment=t,aa.jsx=u,aa.jsxs=u,aa}var ag;function eM(){return ag||(ag=1,Ef.exports=JS()),Ef.exports}var W=eM(),Ae=Zd();const tM=ZS(Ae);var jl={},wf={exports:{}},On={},Af={exports:{}},Cf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function nM(){return lg||(lg=1,(function(n){function e(z,K){var j=z.length;z.push(K);e:for(;0<j;){var N=j-1>>>1,G=z[N];if(0<o(G,K))z[N]=K,z[j]=G,j=N;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],j=z.pop();if(j!==K){z[0]=j;e:for(var N=0,G=z.length,q=G>>>1;N<q;){var le=2*(N+1)-1,de=z[le],Se=le+1,Ee=z[Se];if(0>o(de,j))Se<G&&0>o(Ee,de)?(z[N]=Ee,z[Se]=j,N=Se):(z[N]=de,z[le]=j,N=le);else if(Se<G&&0>o(Ee,j))z[N]=Ee,z[Se]=j,N=Se;else break e}}return K}function o(z,K){var j=z.sortIndex-K.sortIndex;return j!==0?j:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,v=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var K=t(h);K!==null;){if(K.callback===null)s(h);else if(K.startTime<=z)s(h),K.sortIndex=K.expirationTime,e(d,K);else break;K=t(h)}}function L(z){if(T=!1,w(z),!E)if(t(d)!==null)E=!0,te(O);else{var K=t(h);K!==null&&Q(L,K.startTime-z)}}function O(z,K){E=!1,T&&(T=!1,x(re),re=-1),S=!0;var j=v;try{for(w(K),g=t(d);g!==null&&(!(g.expirationTime>K)||z&&!ue());){var N=g.callback;if(typeof N=="function"){g.callback=null,v=g.priorityLevel;var G=N(g.expirationTime<=K);K=n.unstable_now(),typeof G=="function"?g.callback=G:g===t(d)&&s(d),w(K)}else s(d);g=t(d)}if(g!==null)var q=!0;else{var le=t(h);le!==null&&Q(L,le.startTime-K),q=!1}return q}finally{g=null,v=j,S=!1}}var F=!1,I=null,re=-1,C=5,D=-1;function ue(){return!(n.unstable_now()-D<C)}function ce(){if(I!==null){var z=n.unstable_now();D=z;var K=!0;try{K=I(!0,z)}finally{K?ve():(F=!1,I=null)}}else F=!1}var ve;if(typeof b=="function")ve=function(){b(ce)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,X=H.port2;H.port1.onmessage=ce,ve=function(){X.postMessage(null)}}else ve=function(){y(ce,0)};function te(z){I=z,F||(F=!0,ve())}function Q(z,K){re=y(function(){z(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){E||S||(E=!0,te(O))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(z){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var j=v;v=K;try{return z()}finally{v=j}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=v;v=z;try{return K()}finally{v=j}},n.unstable_scheduleCallback=function(z,K,j){var N=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?N+j:N):j=N,z){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,z={id:p++,callback:K,priorityLevel:z,startTime:j,expirationTime:G,sortIndex:-1},j>N?(z.sortIndex=j,e(h,z),t(d)===null&&z===t(h)&&(T?(x(re),re=-1):T=!0,Q(L,j-N))):(z.sortIndex=G,e(d,z),E||S||(E=!0,te(O))),z},n.unstable_shouldYield=ue,n.unstable_wrapCallback=function(z){var K=v;return function(){var j=v;v=K;try{return z.apply(this,arguments)}finally{v=j}}}})(Cf)),Cf}var ug;function iM(){return ug||(ug=1,Af.exports=nM()),Af.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function rM(){if(cg)return On;cg=1;var n=Zd(),e=iM();function t(i){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(i,r){u(i,r),u(i+"Capture",r)}function u(i,r){for(o[i]=r,i=0;i<r.length;i++)s.add(r[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(i){return d.call(g,i)?!0:d.call(p,i)?!1:h.test(i)?g[i]=!0:(p[i]=!0,!1)}function S(i,r,a,f){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,r,a,f){if(r===null||typeof r>"u"||S(i,r,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(i,r,a,f,m,_,M){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=i,this.type=r,this.sanitizeURL=_,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var r=i[0];y[r]=new T(r,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var r=i.replace(x,b);y[r]=new T(r,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var r=i.replace(x,b);y[r]=new T(r,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var r=i.replace(x,b);y[r]=new T(r,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function w(i,r,a,f){var m=y.hasOwnProperty(r)?y[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,a,m,f)&&(a=null),f||m===null?v(r)&&(a===null?i.removeAttribute(r):i.setAttribute(r,""+a)):m.mustUseProperty?i[m.propertyName]=a===null?m.type===3?!1:"":a:(r=m.attributeName,f=m.attributeNamespace,a===null?i.removeAttribute(r):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,f?i.setAttributeNS(f,r,a):i.setAttribute(r,a))))}var L=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),ue=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),z=Symbol.iterator;function K(i){return i===null||typeof i!="object"?null:(i=z&&i[z]||i["@@iterator"],typeof i=="function"?i:null)}var j=Object.assign,N;function G(i){if(N===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+i}var q=!1;function le(i,r){if(!i||q)return"";q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ee){var f=ee}Reflect.construct(i,[],r)}else{try{r.call()}catch(ee){f=ee}i.call(r.prototype)}else{try{throw Error()}catch(ee){f=ee}i()}}catch(ee){if(ee&&f&&typeof ee.stack=="string"){for(var m=ee.stack.split(`
`),_=f.stack.split(`
`),M=m.length-1,U=_.length-1;1<=M&&0<=U&&m[M]!==_[U];)U--;for(;1<=M&&0<=U;M--,U--)if(m[M]!==_[U]){if(M!==1||U!==1)do if(M--,U--,0>U||m[M]!==_[U]){var k=`
`+m[M].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=M&&0<=U);break}}}finally{q=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?G(i):""}function de(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=le(i.type,!1),i;case 11:return i=le(i.type.render,!1),i;case 1:return i=le(i.type,!0),i;default:return""}}function Se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case F:return"Portal";case C:return"Profiler";case re:return"StrictMode";case ve:return"Suspense";case H:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case ue:return(i.displayName||"Context")+".Consumer";case D:return(i._context.displayName||"Context")+".Provider";case ce:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case X:return r=i.displayName||null,r!==null?r:Se(i.type)||"Memo";case te:r=i._payload,i=i._init;try{return Se(i(r))}catch{}}return null}function Ee(i){var r=i.type;switch(i.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=r.render,i=i.displayName||i.name||"",r.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function be(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Be(i){var r=Ue(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),f=""+i[r];if(!i.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,_=a.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return m.call(this)},set:function(M){f=""+M,_.call(this,M)}}),Object.defineProperty(i,r,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(M){f=""+M},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function dt(i){i._valueTracker||(i._valueTracker=Be(i))}function ne(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var a=r.getValue(),f="";return i&&(f=Ue(i)?i.checked?"true":"false":i.value),i=f,i!==a?(r.setValue(i),!0):!1}function Yt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function je(i,r){var a=r.checked;return j({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function nt(i,r){var a=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;a=be(r.value!=null?r.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ve(i,r){r=r.checked,r!=null&&w(i,"checked",r,!1)}function Ct(i,r){Ve(i,r);var a=be(r.value),f=r.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}r.hasOwnProperty("value")?P(i,r.type,a):r.hasOwnProperty("defaultValue")&&P(i,r.type,be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(i.defaultChecked=!!r.defaultChecked)}function st(i,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+i._wrapperState.initialValue,a||r===i.value||(i.value=r),i.defaultValue=r}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function P(i,r,a){(r!=="number"||Yt(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var A=Array.isArray;function J(i,r,a,f){if(i=i.options,r){r={};for(var m=0;m<a.length;m++)r["$"+a[m]]=!0;for(a=0;a<i.length;a++)m=r.hasOwnProperty("$"+i[a].value),i[a].selected!==m&&(i[a].selected=m),m&&f&&(i[a].defaultSelected=!0)}else{for(a=""+be(a),r=null,m=0;m<i.length;m++){if(i[m].value===a){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}r!==null||i[m].disabled||(r=i[m])}r!==null&&(r.selected=!0)}}function _e(i,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},r,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function me(i,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(A(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}i._wrapperState={initialValue:be(a)}}function xe(i,r){var a=be(r.value),f=be(r.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),r.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function He(i){var r=i.textContent;r===i._wrapperState.initialValue&&r!==""&&r!==null&&(i.value=r)}function Re(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(i,r){return i==null||i==="http://www.w3.org/1999/xhtml"?Re(r):i==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Xe,ot=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,f,m){MSApp.execUnsafeLocalFunction(function(){return i(r,a,f,m)})}:i})(function(i,r){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=r;else{for(Xe=Xe||document.createElement("div"),Xe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Xe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;r.firstChild;)i.appendChild(r.firstChild)}});function pe(i,r){if(r){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=r;return}}i.textContent=r}var mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];Object.keys(mt).forEach(function(i){ft.forEach(function(r){r=r+i.charAt(0).toUpperCase()+i.substring(1),mt[r]=mt[i]})});function et(i,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||mt.hasOwnProperty(i)&&mt[i]?(""+r).trim():r+"px"}function We(i,r){i=i.style;for(var a in r)if(r.hasOwnProperty(a)){var f=a.indexOf("--")===0,m=et(a,r[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,m):i[a]=m}}var Oe=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(i,r){if(r){if(Oe[i]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function vt(i,r){if(i.indexOf("-")===-1)return typeof r.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function at(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Me=null,B=null,Te=null;function Ce(i){if(i=Xo(i)){if(typeof Me!="function")throw Error(t(280));var r=i.stateNode;r&&(r=ol(r),Me(i.stateNode,i.type,r))}}function Ze(i){B?Te?Te.push(i):Te=[i]:B=i}function Ye(){if(B){var i=B,r=Te;if(Te=B=null,Ce(i),r)for(i=0;i<r.length;i++)Ce(r[i])}}function St(i,r){return i(r)}function Mt(){}var zt=!1;function nn(i,r,a){if(zt)return i(r,a);zt=!0;try{return St(i,r,a)}finally{zt=!1,(B!==null||Te!==null)&&(Mt(),Ye())}}function xt(i,r){var a=i.stateNode;if(a===null)return null;var f=ol(a);if(f===null)return null;a=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Zt=!1;if(c)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){Zt=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{Zt=!1}function Ba(i,r,a,f,m,_,M,U,k){var ee=Array.prototype.slice.call(arguments,3);try{r.apply(a,ee)}catch(he){this.onError(he)}}var zr=!1,Ni=null,Vr=!1,nr=null,za={onError:function(i){zr=!0,Ni=i}};function Va(i,r,a,f,m,_,M,U,k){zr=!1,Ni=null,Ba.apply(za,arguments)}function Wu(i,r,a,f,m,_,M,U,k){if(Va.apply(this,arguments),zr){if(zr){var ee=Ni;zr=!1,Ni=null}else throw Error(t(198));Vr||(Vr=!0,nr=ee)}}function Ui(i){var r=i,a=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(a=r.return),i=r.return;while(i)}return r.tag===3?a:null}function Ha(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function R(i){if(Ui(i)!==i)throw Error(t(188))}function $(i){var r=i.alternate;if(!r){if(r=Ui(i),r===null)throw Error(t(188));return r!==i?null:i}for(var a=i,f=r;;){var m=a.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){a=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===a)return R(m),i;if(_===f)return R(m),r;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=m,f=_;else{for(var M=!1,U=m.child;U;){if(U===a){M=!0,a=m,f=_;break}if(U===f){M=!0,f=m,a=_;break}U=U.sibling}if(!M){for(U=_.child;U;){if(U===a){M=!0,a=_,f=m;break}if(U===f){M=!0,f=_,a=m;break}U=U.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:r}function se(i){return i=$(i),i!==null?oe(i):null}function oe(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var r=oe(i);if(r!==null)return r;i=i.sibling}return null}var ie=e.unstable_scheduleCallback,Pe=e.unstable_cancelCallback,Ge=e.unstable_shouldYield,Ke=e.unstable_requestPaint,De=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,tt=e.unstable_ImmediatePriority,rt=e.unstable_UserBlockingPriority,bt=e.unstable_NormalPriority,Tn=e.unstable_LowPriority,Wt=e.unstable_IdlePriority,Pn=null,gt=null;function ut(i){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Pn,i,void 0,(i.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:Ga,Ut=Math.log,Ii=Math.LN2;function Ga(i){return i>>>=0,i===0?32:31-(Ut(i)/Ii|0)|0}var Ti=64,ir=4194304;function Vt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Kn(i,r){var a=i.pendingLanes;if(a===0)return 0;var f=0,m=i.suspendedLanes,_=i.pingedLanes,M=a&268435455;if(M!==0){var U=M&~m;U!==0?f=Vt(U):(_&=M,_!==0&&(f=Vt(_)))}else M=a&~m,M!==0?f=Vt(M):_!==0&&(f=Vt(_));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,_=r&-r,m>=_||m===16&&(_&4194240)!==0))return r;if((f&4)!==0&&(f|=a&16),r=i.entangledLanes,r!==0)for(i=i.entanglements,r&=f;0<r;)a=31-wn(r),m=1<<a,f|=i[a],r&=~m;return f}function Ro(i,r){switch(i){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ln(i,r){for(var a=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var M=31-wn(_),U=1<<M,k=m[M];k===-1?((U&a)===0||(U&f)!==0)&&(m[M]=Ro(U,r)):k<=r&&(i.expiredLanes|=U),_&=~U}}function Hr(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Wa(){var i=Ti;return Ti<<=1,(Ti&4194240)===0&&(Ti=64),i}function Ss(i){for(var r=[],a=0;31>a;a++)r.push(i);return r}function bo(i,r,a){i.pendingLanes|=r,r!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,r=31-wn(r),i[r]=a}function _y(i,r){var a=i.pendingLanes&~r;i.pendingLanes=r,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=r,i.mutableReadLanes&=r,i.entangledLanes&=r,r=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var m=31-wn(a),_=1<<m;r[m]=0,f[m]=-1,i[m]=-1,a&=~_}}function ju(i,r){var a=i.entangledLanes|=r;for(i=i.entanglements;a;){var f=31-wn(a),m=1<<f;m&r|i[f]&r&&(i[f]|=r),a&=~m}}var Et=0;function Fh(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Oh,Xu,kh,Bh,zh,Yu=!1,ja=[],rr=null,sr=null,or=null,Po=new Map,Lo=new Map,ar=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(i,r){switch(i){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Po.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(r.pointerId)}}function Do(i,r,a,f,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:r,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},r!==null&&(r=Xo(r),r!==null&&Xu(r)),i):(i.eventSystemFlags|=f,r=i.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),i)}function yy(i,r,a,f,m){switch(r){case"focusin":return rr=Do(rr,i,r,a,f,m),!0;case"dragenter":return sr=Do(sr,i,r,a,f,m),!0;case"mouseover":return or=Do(or,i,r,a,f,m),!0;case"pointerover":var _=m.pointerId;return Po.set(_,Do(Po.get(_)||null,i,r,a,f,m)),!0;case"gotpointercapture":return _=m.pointerId,Lo.set(_,Do(Lo.get(_)||null,i,r,a,f,m)),!0}return!1}function Hh(i){var r=Gr(i.target);if(r!==null){var a=Ui(r);if(a!==null){if(r=a.tag,r===13){if(r=Ha(a),r!==null){i.blockedOn=r,zh(i.priority,function(){kh(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Xa(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var a=$u(i.domEventName,i.eventSystemFlags,r[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);Rt=f,a.target.dispatchEvent(f),Rt=null}else return r=Xo(a),r!==null&&Xu(r),i.blockedOn=a,!1;r.shift()}return!0}function Gh(i,r,a){Xa(i)&&a.delete(r)}function Sy(){Yu=!1,rr!==null&&Xa(rr)&&(rr=null),sr!==null&&Xa(sr)&&(sr=null),or!==null&&Xa(or)&&(or=null),Po.forEach(Gh),Lo.forEach(Gh)}function No(i,r){i.blockedOn===r&&(i.blockedOn=null,Yu||(Yu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sy)))}function Uo(i){function r(m){return No(m,i)}if(0<ja.length){No(ja[0],i);for(var a=1;a<ja.length;a++){var f=ja[a];f.blockedOn===i&&(f.blockedOn=null)}}for(rr!==null&&No(rr,i),sr!==null&&No(sr,i),or!==null&&No(or,i),Po.forEach(r),Lo.forEach(r),a=0;a<ar.length;a++)f=ar[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)Hh(a),a.blockedOn===null&&ar.shift()}var Ms=L.ReactCurrentBatchConfig,Ya=!0;function My(i,r,a,f){var m=Et,_=Ms.transition;Ms.transition=null;try{Et=1,qu(i,r,a,f)}finally{Et=m,Ms.transition=_}}function Ey(i,r,a,f){var m=Et,_=Ms.transition;Ms.transition=null;try{Et=4,qu(i,r,a,f)}finally{Et=m,Ms.transition=_}}function qu(i,r,a,f){if(Ya){var m=$u(i,r,a,f);if(m===null)dc(i,r,f,qa,a),Vh(i,f);else if(yy(m,i,r,a,f))f.stopPropagation();else if(Vh(i,f),r&4&&-1<xy.indexOf(i)){for(;m!==null;){var _=Xo(m);if(_!==null&&Oh(_),_=$u(i,r,a,f),_===null&&dc(i,r,f,qa,a),_===m)break;m=_}m!==null&&f.stopPropagation()}else dc(i,r,f,null,a)}}var qa=null;function $u(i,r,a,f){if(qa=null,i=at(f),i=Gr(i),i!==null)if(r=Ui(i),r===null)i=null;else if(a=r.tag,a===13){if(i=Ha(r),i!==null)return i;i=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null);return qa=i,null}function Wh(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case tt:return 1;case rt:return 4;case bt:case Tn:return 16;case Wt:return 536870912;default:return 16}default:return 16}}var lr=null,Ku=null,$a=null;function jh(){if($a)return $a;var i,r=Ku,a=r.length,f,m="value"in lr?lr.value:lr.textContent,_=m.length;for(i=0;i<a&&r[i]===m[i];i++);var M=a-i;for(f=1;f<=M&&r[a-f]===m[_-f];f++);return $a=m.slice(i,1<f?1-f:void 0)}function Ka(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Za(){return!0}function Xh(){return!1}function Gn(i){function r(a,f,m,_,M){this._reactName=a,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=M,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(a=i[U],this[U]=a?a(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Za:Xh,this.isPropagationStopped=Xh,this}return j(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),r}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=Gn(Es),Io=j({},Es,{view:0,detail:0}),Ty=Gn(Io),Qu,Ju,Fo,Qa=j({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Fo&&(Fo&&i.type==="mousemove"?(Qu=i.screenX-Fo.screenX,Ju=i.screenY-Fo.screenY):Ju=Qu=0,Fo=i),Qu)},movementY:function(i){return"movementY"in i?i.movementY:Ju}}),Yh=Gn(Qa),wy=j({},Qa,{dataTransfer:0}),Ay=Gn(wy),Cy=j({},Io,{relatedTarget:0}),ec=Gn(Cy),Ry=j({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),by=Gn(Ry),Py=j({},Es,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Ly=Gn(Py),Dy=j({},Es,{data:0}),qh=Gn(Dy),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fy(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Iy[i])?!!r[i]:!1}function tc(){return Fy}var Oy=j({},Io,{key:function(i){if(i.key){var r=Ny[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Ka(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Uy[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(i){return i.type==="keypress"?Ka(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ka(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),ky=Gn(Oy),By=j({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Gn(By),zy=j({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),Vy=Gn(zy),Hy=j({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gy=Gn(Hy),Wy=j({},Qa,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=Gn(Wy),Xy=[9,13,27,32],nc=c&&"CompositionEvent"in window,Oo=null;c&&"documentMode"in document&&(Oo=document.documentMode);var Yy=c&&"TextEvent"in window&&!Oo,Kh=c&&(!nc||Oo&&8<Oo&&11>=Oo),Zh=" ",Qh=!1;function Jh(i,r){switch(i){case"keyup":return Xy.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ts=!1;function qy(i,r){switch(i){case"compositionend":return ep(r);case"keypress":return r.which!==32?null:(Qh=!0,Zh);case"textInput":return i=r.data,i===Zh&&Qh?null:i;default:return null}}function $y(i,r){if(Ts)return i==="compositionend"||!nc&&Jh(i,r)?(i=jh(),$a=Ku=lr=null,Ts=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Kh&&r.locale!=="ko"?null:r.data;default:return null}}var Ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Ky[i.type]:r==="textarea"}function np(i,r,a,f){Ze(f),r=il(r,"onChange"),0<r.length&&(a=new Zu("onChange","change",null,a,f),i.push({event:a,listeners:r}))}var ko=null,Bo=null;function Zy(i){yp(i,0)}function Ja(i){var r=bs(i);if(ne(r))return i}function Qy(i,r){if(i==="change")return r}var ip=!1;if(c){var ic;if(c){var rc="oninput"in document;if(!rc){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),rc=typeof rp.oninput=="function"}ic=rc}else ic=!1;ip=ic&&(!document.documentMode||9<document.documentMode)}function sp(){ko&&(ko.detachEvent("onpropertychange",op),Bo=ko=null)}function op(i){if(i.propertyName==="value"&&Ja(Bo)){var r=[];np(r,Bo,i,at(i)),nn(Zy,r)}}function Jy(i,r,a){i==="focusin"?(sp(),ko=r,Bo=a,ko.attachEvent("onpropertychange",op)):i==="focusout"&&sp()}function eS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ja(Bo)}function tS(i,r){if(i==="click")return Ja(r)}function nS(i,r){if(i==="input"||i==="change")return Ja(r)}function iS(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var fi=typeof Object.is=="function"?Object.is:iS;function zo(i,r){if(fi(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var a=Object.keys(i),f=Object.keys(r);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var m=a[f];if(!d.call(r,m)||!fi(i[m],r[m]))return!1}return!0}function ap(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function lp(i,r){var a=ap(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=r&&f>=r)return{node:a,offset:r-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ap(a)}}function up(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?up(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function cp(){for(var i=window,r=Yt();r instanceof i.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)i=r.contentWindow;else break;r=Yt(i.document)}return r}function sc(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}function rS(i){var r=cp(),a=i.focusedElem,f=i.selectionRange;if(r!==a&&a&&a.ownerDocument&&up(a.ownerDocument.documentElement,a)){if(f!==null&&sc(a)){if(r=f.start,i=f.end,i===void 0&&(i=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(i,a.value.length);else if(i=(r=a.ownerDocument||document)&&r.defaultView||window,i.getSelection){i=i.getSelection();var m=a.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!i.extend&&_>f&&(m=f,f=_,_=m),m=lp(a,_);var M=lp(a,f);m&&M&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==M.node||i.focusOffset!==M.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),i.removeAllRanges(),_>f?(i.addRange(r),i.extend(M.node,M.offset)):(r.setEnd(M.node,M.offset),i.addRange(r)))}}for(r=[],i=a;i=i.parentNode;)i.nodeType===1&&r.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)i=r[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var sS=c&&"documentMode"in document&&11>=document.documentMode,ws=null,oc=null,Vo=null,ac=!1;function fp(i,r,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||ws==null||ws!==Yt(f)||(f=ws,"selectionStart"in f&&sc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Vo&&zo(Vo,f)||(Vo=f,f=il(oc,"onSelect"),0<f.length&&(r=new Zu("onSelect","select",null,r,a),i.push({event:r,listeners:f}),r.target=ws)))}function el(i,r){var a={};return a[i.toLowerCase()]=r.toLowerCase(),a["Webkit"+i]="webkit"+r,a["Moz"+i]="moz"+r,a}var As={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},lc={},dp={};c&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function tl(i){if(lc[i])return lc[i];if(!As[i])return i;var r=As[i],a;for(a in r)if(r.hasOwnProperty(a)&&a in dp)return lc[i]=r[a];return i}var hp=tl("animationend"),pp=tl("animationiteration"),mp=tl("animationstart"),gp=tl("transitionend"),vp=new Map,_p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(i,r){vp.set(i,r),l(r,[i])}for(var uc=0;uc<_p.length;uc++){var cc=_p[uc],oS=cc.toLowerCase(),aS=cc[0].toUpperCase()+cc.slice(1);ur(oS,"on"+aS)}ur(hp,"onAnimationEnd"),ur(pp,"onAnimationIteration"),ur(mp,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(gp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function xp(i,r,a){var f=i.type||"unknown-event";i.currentTarget=a,Wu(f,r,void 0,i),i.currentTarget=null}function yp(i,r){r=(r&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],m=f.event;f=f.listeners;e:{var _=void 0;if(r)for(var M=f.length-1;0<=M;M--){var U=f[M],k=U.instance,ee=U.currentTarget;if(U=U.listener,k!==_&&m.isPropagationStopped())break e;xp(m,U,ee),_=k}else for(M=0;M<f.length;M++){if(U=f[M],k=U.instance,ee=U.currentTarget,U=U.listener,k!==_&&m.isPropagationStopped())break e;xp(m,U,ee),_=k}}}if(Vr)throw i=nr,Vr=!1,nr=null,i}function Lt(i,r){var a=r[_c];a===void 0&&(a=r[_c]=new Set);var f=i+"__bubble";a.has(f)||(Sp(r,i,2,!1),a.add(f))}function fc(i,r,a){var f=0;r&&(f|=4),Sp(a,i,f,r)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Go(i){if(!i[nl]){i[nl]=!0,s.forEach(function(a){a!=="selectionchange"&&(lS.has(a)||fc(a,!1,i),fc(a,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[nl]||(r[nl]=!0,fc("selectionchange",!1,r))}}function Sp(i,r,a,f){switch(Wh(r)){case 1:var m=My;break;case 4:m=Ey;break;default:m=qu}a=m.bind(null,r,a,i),m=void 0,!Zt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(r,a,{capture:!0,passive:m}):i.addEventListener(r,a,!0):m!==void 0?i.addEventListener(r,a,{passive:m}):i.addEventListener(r,a,!1)}function dc(i,r,a,f,m){var _=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var M=f.tag;if(M===3||M===4){var U=f.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(M===4)for(M=f.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===m||k.nodeType===8&&k.parentNode===m))return;M=M.return}for(;U!==null;){if(M=Gr(U),M===null)return;if(k=M.tag,k===5||k===6){f=_=M;continue e}U=U.parentNode}}f=f.return}nn(function(){var ee=_,he=at(a),ge=[];e:{var fe=vp.get(i);if(fe!==void 0){var Le=Zu,Fe=i;switch(i){case"keypress":if(Ka(a)===0)break e;case"keydown":case"keyup":Le=ky;break;case"focusin":Fe="focus",Le=ec;break;case"focusout":Fe="blur",Le=ec;break;case"beforeblur":case"afterblur":Le=ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Vy;break;case hp:case pp:case mp:Le=by;break;case gp:Le=Gy;break;case"scroll":Le=Ty;break;case"wheel":Le=jy;break;case"copy":case"cut":case"paste":Le=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=$h}var ke=(r&4)!==0,jt=!ke&&i==="scroll",Y=ke?fe!==null?fe+"Capture":null:fe;ke=[];for(var V=ee,Z;V!==null;){Z=V;var ye=Z.stateNode;if(Z.tag===5&&ye!==null&&(Z=ye,Y!==null&&(ye=xt(V,Y),ye!=null&&ke.push(Wo(V,ye,Z)))),jt)break;V=V.return}0<ke.length&&(fe=new Le(fe,Fe,null,a,he),ge.push({event:fe,listeners:ke}))}}if((r&7)===0){e:{if(fe=i==="mouseover"||i==="pointerover",Le=i==="mouseout"||i==="pointerout",fe&&a!==Rt&&(Fe=a.relatedTarget||a.fromElement)&&(Gr(Fe)||Fe[Fi]))break e;if((Le||fe)&&(fe=he.window===he?he:(fe=he.ownerDocument)?fe.defaultView||fe.parentWindow:window,Le?(Fe=a.relatedTarget||a.toElement,Le=ee,Fe=Fe?Gr(Fe):null,Fe!==null&&(jt=Ui(Fe),Fe!==jt||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(Le=null,Fe=ee),Le!==Fe)){if(ke=Yh,ye="onMouseLeave",Y="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(ke=$h,ye="onPointerLeave",Y="onPointerEnter",V="pointer"),jt=Le==null?fe:bs(Le),Z=Fe==null?fe:bs(Fe),fe=new ke(ye,V+"leave",Le,a,he),fe.target=jt,fe.relatedTarget=Z,ye=null,Gr(he)===ee&&(ke=new ke(Y,V+"enter",Fe,a,he),ke.target=Z,ke.relatedTarget=jt,ye=ke),jt=ye,Le&&Fe)t:{for(ke=Le,Y=Fe,V=0,Z=ke;Z;Z=Cs(Z))V++;for(Z=0,ye=Y;ye;ye=Cs(ye))Z++;for(;0<V-Z;)ke=Cs(ke),V--;for(;0<Z-V;)Y=Cs(Y),Z--;for(;V--;){if(ke===Y||Y!==null&&ke===Y.alternate)break t;ke=Cs(ke),Y=Cs(Y)}ke=null}else ke=null;Le!==null&&Mp(ge,fe,Le,ke,!1),Fe!==null&&jt!==null&&Mp(ge,jt,Fe,ke,!0)}}e:{if(fe=ee?bs(ee):window,Le=fe.nodeName&&fe.nodeName.toLowerCase(),Le==="select"||Le==="input"&&fe.type==="file")var ze=Qy;else if(tp(fe))if(ip)ze=nS;else{ze=eS;var qe=Jy}else(Le=fe.nodeName)&&Le.toLowerCase()==="input"&&(fe.type==="checkbox"||fe.type==="radio")&&(ze=tS);if(ze&&(ze=ze(i,ee))){np(ge,ze,a,he);break e}qe&&qe(i,fe,ee),i==="focusout"&&(qe=fe._wrapperState)&&qe.controlled&&fe.type==="number"&&P(fe,"number",fe.value)}switch(qe=ee?bs(ee):window,i){case"focusin":(tp(qe)||qe.contentEditable==="true")&&(ws=qe,oc=ee,Vo=null);break;case"focusout":Vo=oc=ws=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,fp(ge,a,he);break;case"selectionchange":if(sS)break;case"keydown":case"keyup":fp(ge,a,he)}var $e;if(nc)e:{switch(i){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else Ts?Jh(i,a)&&(Je="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(Je="onCompositionStart");Je&&(Kh&&a.locale!=="ko"&&(Ts||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&Ts&&($e=jh()):(lr=he,Ku="value"in lr?lr.value:lr.textContent,Ts=!0)),qe=il(ee,Je),0<qe.length&&(Je=new qh(Je,i,null,a,he),ge.push({event:Je,listeners:qe}),$e?Je.data=$e:($e=ep(a),$e!==null&&(Je.data=$e)))),($e=Yy?qy(i,a):$y(i,a))&&(ee=il(ee,"onBeforeInput"),0<ee.length&&(he=new qh("onBeforeInput","beforeinput",null,a,he),ge.push({event:he,listeners:ee}),he.data=$e))}yp(ge,r)})}function Wo(i,r,a){return{instance:i,listener:r,currentTarget:a}}function il(i,r){for(var a=r+"Capture",f=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=xt(i,a),_!=null&&f.unshift(Wo(i,_,m)),_=xt(i,r),_!=null&&f.push(Wo(i,_,m))),i=i.return}return f}function Cs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Mp(i,r,a,f,m){for(var _=r._reactName,M=[];a!==null&&a!==f;){var U=a,k=U.alternate,ee=U.stateNode;if(k!==null&&k===f)break;U.tag===5&&ee!==null&&(U=ee,m?(k=xt(a,_),k!=null&&M.unshift(Wo(a,k,U))):m||(k=xt(a,_),k!=null&&M.push(Wo(a,k,U)))),a=a.return}M.length!==0&&i.push({event:r,listeners:M})}var uS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function Ep(i){return(typeof i=="string"?i:""+i).replace(uS,`
`).replace(cS,"")}function rl(i,r,a){if(r=Ep(r),Ep(i)!==r&&a)throw Error(t(425))}function sl(){}var hc=null,pc=null;function mc(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,Tp=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof Tp<"u"?function(i){return Tp.resolve(null).then(i).catch(hS)}:gc;function hS(i){setTimeout(function(){throw i})}function vc(i,r){var a=r,f=0;do{var m=a.nextSibling;if(i.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(f===0){i.removeChild(m),Uo(r);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=m}while(a);Uo(r)}function cr(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return i}function wp(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return i;r--}else a==="/$"&&r++}i=i.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),wi="__reactFiber$"+Rs,jo="__reactProps$"+Rs,Fi="__reactContainer$"+Rs,_c="__reactEvents$"+Rs,pS="__reactListeners$"+Rs,mS="__reactHandles$"+Rs;function Gr(i){var r=i[wi];if(r)return r;for(var a=i.parentNode;a;){if(r=a[Fi]||a[wi]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(i=wp(i);i!==null;){if(a=i[wi])return a;i=wp(i)}return r}i=a,a=i.parentNode}return null}function Xo(i){return i=i[wi]||i[Fi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function bs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function ol(i){return i[jo]||null}var xc=[],Ps=-1;function fr(i){return{current:i}}function Dt(i){0>Ps||(i.current=xc[Ps],xc[Ps]=null,Ps--)}function Pt(i,r){Ps++,xc[Ps]=i.current,i.current=r}var dr={},gn=fr(dr),Dn=fr(!1),Wr=dr;function Ls(i,r){var a=i.type.contextTypes;if(!a)return dr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in a)m[_]=r[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=r,i.__reactInternalMemoizedMaskedChildContext=m),m}function Nn(i){return i=i.childContextTypes,i!=null}function al(){Dt(Dn),Dt(gn)}function Ap(i,r,a){if(gn.current!==dr)throw Error(t(168));Pt(gn,r),Pt(Dn,a)}function Cp(i,r,a){var f=i.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,Ee(i)||"Unknown",m));return j({},a,f)}function ll(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||dr,Wr=gn.current,Pt(gn,i),Pt(Dn,Dn.current),!0}function Rp(i,r,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=Cp(i,r,Wr),f.__reactInternalMemoizedMergedChildContext=i,Dt(Dn),Dt(gn),Pt(gn,i)):Dt(Dn),Pt(Dn,a)}var Oi=null,ul=!1,yc=!1;function bp(i){Oi===null?Oi=[i]:Oi.push(i)}function gS(i){ul=!0,bp(i)}function hr(){if(!yc&&Oi!==null){yc=!0;var i=0,r=Et;try{var a=Oi;for(Et=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}Oi=null,ul=!1}catch(m){throw Oi!==null&&(Oi=Oi.slice(i+1)),ie(tt,hr),m}finally{Et=r,yc=!1}}return null}var Ds=[],Ns=0,cl=null,fl=0,Zn=[],Qn=0,jr=null,ki=1,Bi="";function Xr(i,r){Ds[Ns++]=fl,Ds[Ns++]=cl,cl=i,fl=r}function Pp(i,r,a){Zn[Qn++]=ki,Zn[Qn++]=Bi,Zn[Qn++]=jr,jr=i;var f=ki;i=Bi;var m=32-wn(f)-1;f&=~(1<<m),a+=1;var _=32-wn(r)+m;if(30<_){var M=m-m%5;_=(f&(1<<M)-1).toString(32),f>>=M,m-=M,ki=1<<32-wn(r)+m|a<<m|f,Bi=_+i}else ki=1<<_|a<<m|f,Bi=i}function Sc(i){i.return!==null&&(Xr(i,1),Pp(i,1,0))}function Mc(i){for(;i===cl;)cl=Ds[--Ns],Ds[Ns]=null,fl=Ds[--Ns],Ds[Ns]=null;for(;i===jr;)jr=Zn[--Qn],Zn[Qn]=null,Bi=Zn[--Qn],Zn[Qn]=null,ki=Zn[--Qn],Zn[Qn]=null}var Wn=null,jn=null,It=!1,di=null;function Lp(i,r){var a=ni(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=i,r=i.deletions,r===null?(i.deletions=[a],i.flags|=16):r.push(a)}function Dp(i,r){switch(i.tag){case 5:var a=i.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(i.stateNode=r,Wn=i,jn=cr(r.firstChild),!0):!1;case 6:return r=i.pendingProps===""||r.nodeType!==3?null:r,r!==null?(i.stateNode=r,Wn=i,jn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=jr!==null?{id:ki,overflow:Bi}:null,i.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=ni(18,null,null,0),a.stateNode=r,a.return=i,i.child=a,Wn=i,jn=null,!0):!1;default:return!1}}function Ec(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Tc(i){if(It){var r=jn;if(r){var a=r;if(!Dp(i,r)){if(Ec(i))throw Error(t(418));r=cr(a.nextSibling);var f=Wn;r&&Dp(i,r)?Lp(f,a):(i.flags=i.flags&-4097|2,It=!1,Wn=i)}}else{if(Ec(i))throw Error(t(418));i.flags=i.flags&-4097|2,It=!1,Wn=i}}}function Np(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Wn=i}function dl(i){if(i!==Wn)return!1;if(!It)return Np(i),It=!0,!1;var r;if((r=i.tag!==3)&&!(r=i.tag!==5)&&(r=i.type,r=r!=="head"&&r!=="body"&&!mc(i.type,i.memoizedProps)),r&&(r=jn)){if(Ec(i))throw Up(),Error(t(418));for(;r;)Lp(i,r),r=cr(r.nextSibling)}if(Np(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(r===0){jn=cr(i.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}i=i.nextSibling}jn=null}}else jn=Wn?cr(i.stateNode.nextSibling):null;return!0}function Up(){for(var i=jn;i;)i=cr(i.nextSibling)}function Us(){jn=Wn=null,It=!1}function wc(i){di===null?di=[i]:di.push(i)}var vS=L.ReactCurrentBatchConfig;function Yo(i,r,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var m=f,_=""+i;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(M){var U=m.refs;M===null?delete U[_]:U[_]=M},r._stringRef=_,r)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function hl(i,r){throw i=Object.prototype.toString.call(r),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i))}function Ip(i){var r=i._init;return r(i._payload)}function Fp(i){function r(Y,V){if(i){var Z=Y.deletions;Z===null?(Y.deletions=[V],Y.flags|=16):Z.push(V)}}function a(Y,V){if(!i)return null;for(;V!==null;)r(Y,V),V=V.sibling;return null}function f(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function m(Y,V){return Y=Sr(Y,V),Y.index=0,Y.sibling=null,Y}function _(Y,V,Z){return Y.index=Z,i?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<V?(Y.flags|=2,V):Z):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function M(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,V,Z,ye){return V===null||V.tag!==6?(V=vf(Z,Y.mode,ye),V.return=Y,V):(V=m(V,Z),V.return=Y,V)}function k(Y,V,Z,ye){var ze=Z.type;return ze===I?he(Y,V,Z.props.children,ye,Z.key):V!==null&&(V.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===te&&Ip(ze)===V.type)?(ye=m(V,Z.props),ye.ref=Yo(Y,V,Z),ye.return=Y,ye):(ye=Ol(Z.type,Z.key,Z.props,null,Y.mode,ye),ye.ref=Yo(Y,V,Z),ye.return=Y,ye)}function ee(Y,V,Z,ye){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=_f(Z,Y.mode,ye),V.return=Y,V):(V=m(V,Z.children||[]),V.return=Y,V)}function he(Y,V,Z,ye,ze){return V===null||V.tag!==7?(V=es(Z,Y.mode,ye,ze),V.return=Y,V):(V=m(V,Z),V.return=Y,V)}function ge(Y,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number")return V=vf(""+V,Y.mode,Z),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case O:return Z=Ol(V.type,V.key,V.props,null,Y.mode,Z),Z.ref=Yo(Y,null,V),Z.return=Y,Z;case F:return V=_f(V,Y.mode,Z),V.return=Y,V;case te:var ye=V._init;return ge(Y,ye(V._payload),Z)}if(A(V)||K(V))return V=es(V,Y.mode,Z,null),V.return=Y,V;hl(Y,V)}return null}function fe(Y,V,Z,ye){var ze=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return ze!==null?null:U(Y,V,""+Z,ye);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case O:return Z.key===ze?k(Y,V,Z,ye):null;case F:return Z.key===ze?ee(Y,V,Z,ye):null;case te:return ze=Z._init,fe(Y,V,ze(Z._payload),ye)}if(A(Z)||K(Z))return ze!==null?null:he(Y,V,Z,ye,null);hl(Y,Z)}return null}function Le(Y,V,Z,ye,ze){if(typeof ye=="string"&&ye!==""||typeof ye=="number")return Y=Y.get(Z)||null,U(V,Y,""+ye,ze);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case O:return Y=Y.get(ye.key===null?Z:ye.key)||null,k(V,Y,ye,ze);case F:return Y=Y.get(ye.key===null?Z:ye.key)||null,ee(V,Y,ye,ze);case te:var qe=ye._init;return Le(Y,V,Z,qe(ye._payload),ze)}if(A(ye)||K(ye))return Y=Y.get(Z)||null,he(V,Y,ye,ze,null);hl(V,ye)}return null}function Fe(Y,V,Z,ye){for(var ze=null,qe=null,$e=V,Je=V=0,on=null;$e!==null&&Je<Z.length;Je++){$e.index>Je?(on=$e,$e=null):on=$e.sibling;var yt=fe(Y,$e,Z[Je],ye);if(yt===null){$e===null&&($e=on);break}i&&$e&&yt.alternate===null&&r(Y,$e),V=_(yt,V,Je),qe===null?ze=yt:qe.sibling=yt,qe=yt,$e=on}if(Je===Z.length)return a(Y,$e),It&&Xr(Y,Je),ze;if($e===null){for(;Je<Z.length;Je++)$e=ge(Y,Z[Je],ye),$e!==null&&(V=_($e,V,Je),qe===null?ze=$e:qe.sibling=$e,qe=$e);return It&&Xr(Y,Je),ze}for($e=f(Y,$e);Je<Z.length;Je++)on=Le($e,Y,Je,Z[Je],ye),on!==null&&(i&&on.alternate!==null&&$e.delete(on.key===null?Je:on.key),V=_(on,V,Je),qe===null?ze=on:qe.sibling=on,qe=on);return i&&$e.forEach(function(Mr){return r(Y,Mr)}),It&&Xr(Y,Je),ze}function ke(Y,V,Z,ye){var ze=K(Z);if(typeof ze!="function")throw Error(t(150));if(Z=ze.call(Z),Z==null)throw Error(t(151));for(var qe=ze=null,$e=V,Je=V=0,on=null,yt=Z.next();$e!==null&&!yt.done;Je++,yt=Z.next()){$e.index>Je?(on=$e,$e=null):on=$e.sibling;var Mr=fe(Y,$e,yt.value,ye);if(Mr===null){$e===null&&($e=on);break}i&&$e&&Mr.alternate===null&&r(Y,$e),V=_(Mr,V,Je),qe===null?ze=Mr:qe.sibling=Mr,qe=Mr,$e=on}if(yt.done)return a(Y,$e),It&&Xr(Y,Je),ze;if($e===null){for(;!yt.done;Je++,yt=Z.next())yt=ge(Y,yt.value,ye),yt!==null&&(V=_(yt,V,Je),qe===null?ze=yt:qe.sibling=yt,qe=yt);return It&&Xr(Y,Je),ze}for($e=f(Y,$e);!yt.done;Je++,yt=Z.next())yt=Le($e,Y,Je,yt.value,ye),yt!==null&&(i&&yt.alternate!==null&&$e.delete(yt.key===null?Je:yt.key),V=_(yt,V,Je),qe===null?ze=yt:qe.sibling=yt,qe=yt);return i&&$e.forEach(function(KS){return r(Y,KS)}),It&&Xr(Y,Je),ze}function jt(Y,V,Z,ye){if(typeof Z=="object"&&Z!==null&&Z.type===I&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case O:e:{for(var ze=Z.key,qe=V;qe!==null;){if(qe.key===ze){if(ze=Z.type,ze===I){if(qe.tag===7){a(Y,qe.sibling),V=m(qe,Z.props.children),V.return=Y,Y=V;break e}}else if(qe.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===te&&Ip(ze)===qe.type){a(Y,qe.sibling),V=m(qe,Z.props),V.ref=Yo(Y,qe,Z),V.return=Y,Y=V;break e}a(Y,qe);break}else r(Y,qe);qe=qe.sibling}Z.type===I?(V=es(Z.props.children,Y.mode,ye,Z.key),V.return=Y,Y=V):(ye=Ol(Z.type,Z.key,Z.props,null,Y.mode,ye),ye.ref=Yo(Y,V,Z),ye.return=Y,Y=ye)}return M(Y);case F:e:{for(qe=Z.key;V!==null;){if(V.key===qe)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){a(Y,V.sibling),V=m(V,Z.children||[]),V.return=Y,Y=V;break e}else{a(Y,V);break}else r(Y,V);V=V.sibling}V=_f(Z,Y.mode,ye),V.return=Y,Y=V}return M(Y);case te:return qe=Z._init,jt(Y,V,qe(Z._payload),ye)}if(A(Z))return Fe(Y,V,Z,ye);if(K(Z))return ke(Y,V,Z,ye);hl(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,V!==null&&V.tag===6?(a(Y,V.sibling),V=m(V,Z),V.return=Y,Y=V):(a(Y,V),V=vf(Z,Y.mode,ye),V.return=Y,Y=V),M(Y)):a(Y,V)}return jt}var Is=Fp(!0),Op=Fp(!1),pl=fr(null),ml=null,Fs=null,Ac=null;function Cc(){Ac=Fs=ml=null}function Rc(i){var r=pl.current;Dt(pl),i._currentValue=r}function bc(i,r,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),i===a)break;i=i.return}}function Os(i,r){ml=i,Ac=Fs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&r)!==0&&(Un=!0),i.firstContext=null)}function Jn(i){var r=i._currentValue;if(Ac!==i)if(i={context:i,memoizedValue:r,next:null},Fs===null){if(ml===null)throw Error(t(308));Fs=i,ml.dependencies={lanes:0,firstContext:i}}else Fs=Fs.next=i;return r}var Yr=null;function Pc(i){Yr===null?Yr=[i]:Yr.push(i)}function kp(i,r,a,f){var m=r.interleaved;return m===null?(a.next=a,Pc(r)):(a.next=m.next,m.next=a),r.interleaved=a,zi(i,f)}function zi(i,r){i.lanes|=r;var a=i.alternate;for(a!==null&&(a.lanes|=r),a=i,i=i.return;i!==null;)i.childLanes|=r,a=i.alternate,a!==null&&(a.childLanes|=r),a=i,i=i.return;return a.tag===3?a.stateNode:null}var pr=!1;function Lc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Vi(i,r){return{eventTime:i,lane:r,tag:0,payload:null,callback:null,next:null}}function mr(i,r,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(_t&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,zi(i,a)}return m=f.interleaved,m===null?(r.next=r,Pc(f)):(r.next=m.next,m.next=r),f.interleaved=r,zi(i,a)}function gl(i,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var f=r.lanes;f&=i.pendingLanes,a|=f,r.lanes=a,ju(i,a)}}function zp(i,r){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var m=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?m=_=M:_=_.next=M,a=a.next}while(a!==null);_===null?m=_=r:_=_.next=r}else m=_=r;a={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=r:i.next=r,a.lastBaseUpdate=r}function vl(i,r,a,f){var m=i.updateQueue;pr=!1;var _=m.firstBaseUpdate,M=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var k=U,ee=k.next;k.next=null,M===null?_=ee:M.next=ee,M=k;var he=i.alternate;he!==null&&(he=he.updateQueue,U=he.lastBaseUpdate,U!==M&&(U===null?he.firstBaseUpdate=ee:U.next=ee,he.lastBaseUpdate=k))}if(_!==null){var ge=m.baseState;M=0,he=ee=k=null,U=_;do{var fe=U.lane,Le=U.eventTime;if((f&fe)===fe){he!==null&&(he=he.next={eventTime:Le,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Fe=i,ke=U;switch(fe=r,Le=a,ke.tag){case 1:if(Fe=ke.payload,typeof Fe=="function"){ge=Fe.call(Le,ge,fe);break e}ge=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=ke.payload,fe=typeof Fe=="function"?Fe.call(Le,ge,fe):Fe,fe==null)break e;ge=j({},ge,fe);break e;case 2:pr=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,fe=m.effects,fe===null?m.effects=[U]:fe.push(U))}else Le={eventTime:Le,lane:fe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},he===null?(ee=he=Le,k=ge):he=he.next=Le,M|=fe;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;fe=U,U=fe.next,fe.next=null,m.lastBaseUpdate=fe,m.shared.pending=null}}while(!0);if(he===null&&(k=ge),m.baseState=k,m.firstBaseUpdate=ee,m.lastBaseUpdate=he,r=m.shared.interleaved,r!==null){m=r;do M|=m.lane,m=m.next;while(m!==r)}else _===null&&(m.shared.lanes=0);Kr|=M,i.lanes=M,i.memoizedState=ge}}function Vp(i,r,a){if(i=r.effects,r.effects=null,i!==null)for(r=0;r<i.length;r++){var f=i[r],m=f.callback;if(m!==null){if(f.callback=null,f=a,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var qo={},Ai=fr(qo),$o=fr(qo),Ko=fr(qo);function qr(i){if(i===qo)throw Error(t(174));return i}function Dc(i,r){switch(Pt(Ko,r),Pt($o,i),Pt(Ai,qo),i=r.nodeType,i){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ie(null,"");break;default:i=i===8?r.parentNode:r,r=i.namespaceURI||null,i=i.tagName,r=Ie(r,i)}Dt(Ai),Pt(Ai,r)}function ks(){Dt(Ai),Dt($o),Dt(Ko)}function Hp(i){qr(Ko.current);var r=qr(Ai.current),a=Ie(r,i.type);r!==a&&(Pt($o,i),Pt(Ai,a))}function Nc(i){$o.current===i&&(Dt(Ai),Dt($o))}var Ot=fr(0);function _l(i){for(var r=i;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Uc=[];function Ic(){for(var i=0;i<Uc.length;i++)Uc[i]._workInProgressVersionPrimary=null;Uc.length=0}var xl=L.ReactCurrentDispatcher,Fc=L.ReactCurrentBatchConfig,$r=0,kt=null,Qt=null,rn=null,yl=!1,Zo=!1,Qo=0,_S=0;function vn(){throw Error(t(321))}function Oc(i,r){if(r===null)return!1;for(var a=0;a<r.length&&a<i.length;a++)if(!fi(i[a],r[a]))return!1;return!0}function kc(i,r,a,f,m,_){if($r=_,kt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,xl.current=i===null||i.memoizedState===null?MS:ES,i=a(f,m),Zo){_=0;do{if(Zo=!1,Qo=0,25<=_)throw Error(t(301));_+=1,rn=Qt=null,r.updateQueue=null,xl.current=TS,i=a(f,m)}while(Zo)}if(xl.current=El,r=Qt!==null&&Qt.next!==null,$r=0,rn=Qt=kt=null,yl=!1,r)throw Error(t(300));return i}function Bc(){var i=Qo!==0;return Qo=0,i}function Ci(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?kt.memoizedState=rn=i:rn=rn.next=i,rn}function ei(){if(Qt===null){var i=kt.alternate;i=i!==null?i.memoizedState:null}else i=Qt.next;var r=rn===null?kt.memoizedState:rn.next;if(r!==null)rn=r,Qt=i;else{if(i===null)throw Error(t(310));Qt=i,i={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},rn===null?kt.memoizedState=rn=i:rn=rn.next=i}return rn}function Jo(i,r){return typeof r=="function"?r(i):r}function zc(i){var r=ei(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=Qt,m=f.baseQueue,_=a.pending;if(_!==null){if(m!==null){var M=m.next;m.next=_.next,_.next=M}f.baseQueue=m=_,a.pending=null}if(m!==null){_=m.next,f=f.baseState;var U=M=null,k=null,ee=_;do{var he=ee.lane;if(($r&he)===he)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),f=ee.hasEagerState?ee.eagerState:i(f,ee.action);else{var ge={lane:he,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(U=k=ge,M=f):k=k.next=ge,kt.lanes|=he,Kr|=he}ee=ee.next}while(ee!==null&&ee!==_);k===null?M=f:k.next=U,fi(f,r.memoizedState)||(Un=!0),r.memoizedState=f,r.baseState=M,r.baseQueue=k,a.lastRenderedState=f}if(i=a.interleaved,i!==null){m=i;do _=m.lane,kt.lanes|=_,Kr|=_,m=m.next;while(m!==i)}else m===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Vc(i){var r=ei(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,m=a.pending,_=r.memoizedState;if(m!==null){a.pending=null;var M=m=m.next;do _=i(_,M.action),M=M.next;while(M!==m);fi(_,r.memoizedState)||(Un=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),a.lastRenderedState=_}return[_,f]}function Gp(){}function Wp(i,r){var a=kt,f=ei(),m=r(),_=!fi(f.memoizedState,m);if(_&&(f.memoizedState=m,Un=!0),f=f.queue,Hc(Yp.bind(null,a,f,i),[i]),f.getSnapshot!==r||_||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,ea(9,Xp.bind(null,a,f,m,r),void 0,null),sn===null)throw Error(t(349));($r&30)!==0||jp(a,r,m)}return m}function jp(i,r,a){i.flags|=16384,i={getSnapshot:r,value:a},r=kt.updateQueue,r===null?(r={lastEffect:null,stores:null},kt.updateQueue=r,r.stores=[i]):(a=r.stores,a===null?r.stores=[i]:a.push(i))}function Xp(i,r,a,f){r.value=a,r.getSnapshot=f,qp(r)&&$p(i)}function Yp(i,r,a){return a(function(){qp(r)&&$p(i)})}function qp(i){var r=i.getSnapshot;i=i.value;try{var a=r();return!fi(i,a)}catch{return!0}}function $p(i){var r=zi(i,1);r!==null&&gi(r,i,1,-1)}function Kp(i){var r=Ci();return typeof i=="function"&&(i=i()),r.memoizedState=r.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:i},r.queue=i,i=i.dispatch=SS.bind(null,kt,i),[r.memoizedState,i]}function ea(i,r,a,f){return i={tag:i,create:r,destroy:a,deps:f,next:null},r=kt.updateQueue,r===null?(r={lastEffect:null,stores:null},kt.updateQueue=r,r.lastEffect=i.next=i):(a=r.lastEffect,a===null?r.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,r.lastEffect=i)),i}function Zp(){return ei().memoizedState}function Sl(i,r,a,f){var m=Ci();kt.flags|=i,m.memoizedState=ea(1|r,a,void 0,f===void 0?null:f)}function Ml(i,r,a,f){var m=ei();f=f===void 0?null:f;var _=void 0;if(Qt!==null){var M=Qt.memoizedState;if(_=M.destroy,f!==null&&Oc(f,M.deps)){m.memoizedState=ea(r,a,_,f);return}}kt.flags|=i,m.memoizedState=ea(1|r,a,_,f)}function Qp(i,r){return Sl(8390656,8,i,r)}function Hc(i,r){return Ml(2048,8,i,r)}function Jp(i,r){return Ml(4,2,i,r)}function em(i,r){return Ml(4,4,i,r)}function tm(i,r){if(typeof r=="function")return i=i(),r(i),function(){r(null)};if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function nm(i,r,a){return a=a!=null?a.concat([i]):null,Ml(4,4,tm.bind(null,r,i),a)}function Gc(){}function im(i,r){var a=ei();r=r===void 0?null:r;var f=a.memoizedState;return f!==null&&r!==null&&Oc(r,f[1])?f[0]:(a.memoizedState=[i,r],i)}function rm(i,r){var a=ei();r=r===void 0?null:r;var f=a.memoizedState;return f!==null&&r!==null&&Oc(r,f[1])?f[0]:(i=i(),a.memoizedState=[i,r],i)}function sm(i,r,a){return($r&21)===0?(i.baseState&&(i.baseState=!1,Un=!0),i.memoizedState=a):(fi(a,r)||(a=Wa(),kt.lanes|=a,Kr|=a,i.baseState=!0),r)}function xS(i,r){var a=Et;Et=a!==0&&4>a?a:4,i(!0);var f=Fc.transition;Fc.transition={};try{i(!1),r()}finally{Et=a,Fc.transition=f}}function om(){return ei().memoizedState}function yS(i,r,a){var f=xr(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},am(i))lm(r,a);else if(a=kp(i,r,a,f),a!==null){var m=Cn();gi(a,i,f,m),um(a,r,f)}}function SS(i,r,a){var f=xr(i),m={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(am(i))lm(r,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var M=r.lastRenderedState,U=_(M,a);if(m.hasEagerState=!0,m.eagerState=U,fi(U,M)){var k=r.interleaved;k===null?(m.next=m,Pc(r)):(m.next=k.next,k.next=m),r.interleaved=m;return}}catch{}finally{}a=kp(i,r,m,f),a!==null&&(m=Cn(),gi(a,i,f,m),um(a,r,f))}}function am(i){var r=i.alternate;return i===kt||r!==null&&r===kt}function lm(i,r){Zo=yl=!0;var a=i.pending;a===null?r.next=r:(r.next=a.next,a.next=r),i.pending=r}function um(i,r,a){if((a&4194240)!==0){var f=r.lanes;f&=i.pendingLanes,a|=f,r.lanes=a,ju(i,a)}}var El={readContext:Jn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},MS={readContext:Jn,useCallback:function(i,r){return Ci().memoizedState=[i,r===void 0?null:r],i},useContext:Jn,useEffect:Qp,useImperativeHandle:function(i,r,a){return a=a!=null?a.concat([i]):null,Sl(4194308,4,tm.bind(null,r,i),a)},useLayoutEffect:function(i,r){return Sl(4194308,4,i,r)},useInsertionEffect:function(i,r){return Sl(4,2,i,r)},useMemo:function(i,r){var a=Ci();return r=r===void 0?null:r,i=i(),a.memoizedState=[i,r],i},useReducer:function(i,r,a){var f=Ci();return r=a!==void 0?a(r):r,f.memoizedState=f.baseState=r,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:r},f.queue=i,i=i.dispatch=yS.bind(null,kt,i),[f.memoizedState,i]},useRef:function(i){var r=Ci();return i={current:i},r.memoizedState=i},useState:Kp,useDebugValue:Gc,useDeferredValue:function(i){return Ci().memoizedState=i},useTransition:function(){var i=Kp(!1),r=i[0];return i=xS.bind(null,i[1]),Ci().memoizedState=i,[r,i]},useMutableSource:function(){},useSyncExternalStore:function(i,r,a){var f=kt,m=Ci();if(It){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),sn===null)throw Error(t(349));($r&30)!==0||jp(f,r,a)}m.memoizedState=a;var _={value:a,getSnapshot:r};return m.queue=_,Qp(Yp.bind(null,f,_,i),[i]),f.flags|=2048,ea(9,Xp.bind(null,f,_,a,r),void 0,null),a},useId:function(){var i=Ci(),r=sn.identifierPrefix;if(It){var a=Bi,f=ki;a=(f&~(1<<32-wn(f)-1)).toString(32)+a,r=":"+r+"R"+a,a=Qo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=_S++,r=":"+r+"r"+a.toString(32)+":";return i.memoizedState=r},unstable_isNewReconciler:!1},ES={readContext:Jn,useCallback:im,useContext:Jn,useEffect:Hc,useImperativeHandle:nm,useInsertionEffect:Jp,useLayoutEffect:em,useMemo:rm,useReducer:zc,useRef:Zp,useState:function(){return zc(Jo)},useDebugValue:Gc,useDeferredValue:function(i){var r=ei();return sm(r,Qt.memoizedState,i)},useTransition:function(){var i=zc(Jo)[0],r=ei().memoizedState;return[i,r]},useMutableSource:Gp,useSyncExternalStore:Wp,useId:om,unstable_isNewReconciler:!1},TS={readContext:Jn,useCallback:im,useContext:Jn,useEffect:Hc,useImperativeHandle:nm,useInsertionEffect:Jp,useLayoutEffect:em,useMemo:rm,useReducer:Vc,useRef:Zp,useState:function(){return Vc(Jo)},useDebugValue:Gc,useDeferredValue:function(i){var r=ei();return Qt===null?r.memoizedState=i:sm(r,Qt.memoizedState,i)},useTransition:function(){var i=Vc(Jo)[0],r=ei().memoizedState;return[i,r]},useMutableSource:Gp,useSyncExternalStore:Wp,useId:om,unstable_isNewReconciler:!1};function hi(i,r){if(i&&i.defaultProps){r=j({},r),i=i.defaultProps;for(var a in i)r[a]===void 0&&(r[a]=i[a]);return r}return r}function Wc(i,r,a,f){r=i.memoizedState,a=a(f,r),a=a==null?r:j({},r,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Tl={isMounted:function(i){return(i=i._reactInternals)?Ui(i)===i:!1},enqueueSetState:function(i,r,a){i=i._reactInternals;var f=Cn(),m=xr(i),_=Vi(f,m);_.payload=r,a!=null&&(_.callback=a),r=mr(i,_,m),r!==null&&(gi(r,i,m,f),gl(r,i,m))},enqueueReplaceState:function(i,r,a){i=i._reactInternals;var f=Cn(),m=xr(i),_=Vi(f,m);_.tag=1,_.payload=r,a!=null&&(_.callback=a),r=mr(i,_,m),r!==null&&(gi(r,i,m,f),gl(r,i,m))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var a=Cn(),f=xr(i),m=Vi(a,f);m.tag=2,r!=null&&(m.callback=r),r=mr(i,m,f),r!==null&&(gi(r,i,f,a),gl(r,i,f))}};function cm(i,r,a,f,m,_,M){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,M):r.prototype&&r.prototype.isPureReactComponent?!zo(a,f)||!zo(m,_):!0}function fm(i,r,a){var f=!1,m=dr,_=r.contextType;return typeof _=="object"&&_!==null?_=Jn(_):(m=Nn(r)?Wr:gn.current,f=r.contextTypes,_=(f=f!=null)?Ls(i,m):dr),r=new r(a,_),i.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Tl,i.stateNode=r,r._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),r}function dm(i,r,a,f){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,f),r.state!==i&&Tl.enqueueReplaceState(r,r.state,null)}function jc(i,r,a,f){var m=i.stateNode;m.props=a,m.state=i.memoizedState,m.refs={},Lc(i);var _=r.contextType;typeof _=="object"&&_!==null?m.context=Jn(_):(_=Nn(r)?Wr:gn.current,m.context=Ls(i,_)),m.state=i.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(Wc(i,r,_,a),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Tl.enqueueReplaceState(m,m.state,null),vl(i,a,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Bs(i,r){try{var a="",f=r;do a+=de(f),f=f.return;while(f);var m=a}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:r,stack:m,digest:null}}function Xc(i,r,a){return{value:i,source:null,stack:a??null,digest:r??null}}function Yc(i,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var wS=typeof WeakMap=="function"?WeakMap:Map;function hm(i,r,a){a=Vi(-1,a),a.tag=3,a.payload={element:null};var f=r.value;return a.callback=function(){Ll||(Ll=!0,uf=f),Yc(i,r)},a}function pm(i,r,a){a=Vi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;a.payload=function(){return f(m)},a.callback=function(){Yc(i,r)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Yc(i,r),typeof f!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var M=r.stack;this.componentDidCatch(r.value,{componentStack:M!==null?M:""})}),a}function mm(i,r,a){var f=i.pingCache;if(f===null){f=i.pingCache=new wS;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(a)||(m.add(a),i=BS.bind(null,i,r,a),r.then(i,i))}function gm(i){do{var r;if((r=i.tag===13)&&(r=i.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return i;i=i.return}while(i!==null);return null}function vm(i,r,a,f,m){return(i.mode&1)===0?(i===r?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Vi(-1,1),r.tag=2,mr(a,r,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var AS=L.ReactCurrentOwner,Un=!1;function An(i,r,a,f){r.child=i===null?Op(r,null,a,f):Is(r,i.child,a,f)}function _m(i,r,a,f,m){a=a.render;var _=r.ref;return Os(r,m),f=kc(i,r,a,f,_,m),a=Bc(),i!==null&&!Un?(r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~m,Hi(i,r,m)):(It&&a&&Sc(r),r.flags|=1,An(i,r,f,m),r.child)}function xm(i,r,a,f,m){if(i===null){var _=a.type;return typeof _=="function"&&!gf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=_,ym(i,r,_,f,m)):(i=Ol(a.type,null,f,r,r.mode,m),i.ref=r.ref,i.return=r,r.child=i)}if(_=i.child,(i.lanes&m)===0){var M=_.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(M,f)&&i.ref===r.ref)return Hi(i,r,m)}return r.flags|=1,i=Sr(_,f),i.ref=r.ref,i.return=r,r.child=i}function ym(i,r,a,f,m){if(i!==null){var _=i.memoizedProps;if(zo(_,f)&&i.ref===r.ref)if(Un=!1,r.pendingProps=f=_,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Un=!0);else return r.lanes=i.lanes,Hi(i,r,m)}return qc(i,r,a,f,m)}function Sm(i,r,a){var f=r.pendingProps,m=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(Vs,Xn),Xn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:i,cachePool:null,transitions:null},r.updateQueue=null,Pt(Vs,Xn),Xn|=i,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Pt(Vs,Xn),Xn|=f}else _!==null?(f=_.baseLanes|a,r.memoizedState=null):f=a,Pt(Vs,Xn),Xn|=f;return An(i,r,m,a),r.child}function Mm(i,r){var a=r.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function qc(i,r,a,f,m){var _=Nn(a)?Wr:gn.current;return _=Ls(r,_),Os(r,m),a=kc(i,r,a,f,_,m),f=Bc(),i!==null&&!Un?(r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~m,Hi(i,r,m)):(It&&f&&Sc(r),r.flags|=1,An(i,r,a,m),r.child)}function Em(i,r,a,f,m){if(Nn(a)){var _=!0;ll(r)}else _=!1;if(Os(r,m),r.stateNode===null)Al(i,r),fm(r,a,f),jc(r,a,f,m),f=!0;else if(i===null){var M=r.stateNode,U=r.memoizedProps;M.props=U;var k=M.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Jn(ee):(ee=Nn(a)?Wr:gn.current,ee=Ls(r,ee));var he=a.getDerivedStateFromProps,ge=typeof he=="function"||typeof M.getSnapshotBeforeUpdate=="function";ge||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==f||k!==ee)&&dm(r,M,f,ee),pr=!1;var fe=r.memoizedState;M.state=fe,vl(r,f,M,m),k=r.memoizedState,U!==f||fe!==k||Dn.current||pr?(typeof he=="function"&&(Wc(r,a,he,f),k=r.memoizedState),(U=pr||cm(r,a,U,f,fe,k,ee))?(ge||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(r.flags|=4194308)):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=k),M.props=f,M.state=k,M.context=ee,f=U):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{M=r.stateNode,Bp(i,r),U=r.memoizedProps,ee=r.type===r.elementType?U:hi(r.type,U),M.props=ee,ge=r.pendingProps,fe=M.context,k=a.contextType,typeof k=="object"&&k!==null?k=Jn(k):(k=Nn(a)?Wr:gn.current,k=Ls(r,k));var Le=a.getDerivedStateFromProps;(he=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==ge||fe!==k)&&dm(r,M,f,k),pr=!1,fe=r.memoizedState,M.state=fe,vl(r,f,M,m);var Fe=r.memoizedState;U!==ge||fe!==Fe||Dn.current||pr?(typeof Le=="function"&&(Wc(r,a,Le,f),Fe=r.memoizedState),(ee=pr||cm(r,a,ee,f,fe,Fe,k)||!1)?(he||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(f,Fe,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(f,Fe,k)),typeof M.componentDidUpdate=="function"&&(r.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===i.memoizedProps&&fe===i.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&fe===i.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Fe),M.props=f,M.state=Fe,M.context=k,f=ee):(typeof M.componentDidUpdate!="function"||U===i.memoizedProps&&fe===i.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&fe===i.memoizedState||(r.flags|=1024),f=!1)}return $c(i,r,a,f,_,m)}function $c(i,r,a,f,m,_){Mm(i,r);var M=(r.flags&128)!==0;if(!f&&!M)return m&&Rp(r,a,!1),Hi(i,r,_);f=r.stateNode,AS.current=r;var U=M&&typeof a.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,i!==null&&M?(r.child=Is(r,i.child,null,_),r.child=Is(r,null,U,_)):An(i,r,U,_),r.memoizedState=f.state,m&&Rp(r,a,!0),r.child}function Tm(i){var r=i.stateNode;r.pendingContext?Ap(i,r.pendingContext,r.pendingContext!==r.context):r.context&&Ap(i,r.context,!1),Dc(i,r.containerInfo)}function wm(i,r,a,f,m){return Us(),wc(m),r.flags|=256,An(i,r,a,f),r.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Zc(i){return{baseLanes:i,cachePool:null,transitions:null}}function Am(i,r,a){var f=r.pendingProps,m=Ot.current,_=!1,M=(r.flags&128)!==0,U;if((U=M)||(U=i!==null&&i.memoizedState===null?!1:(m&2)!==0),U?(_=!0,r.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Pt(Ot,m&1),i===null)return Tc(r),i=r.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((r.mode&1)===0?r.lanes=1:i.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(M=f.children,i=f.fallback,_?(f=r.mode,_=r.child,M={mode:"hidden",children:M},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=M):_=kl(M,f,0,null),i=es(i,f,a,null),_.return=r,i.return=r,_.sibling=i,r.child=_,r.child.memoizedState=Zc(a),r.memoizedState=Kc,i):Qc(r,M));if(m=i.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return CS(i,r,M,f,U,m,a);if(_){_=f.fallback,M=r.mode,m=i.child,U=m.sibling;var k={mode:"hidden",children:f.children};return(M&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=k,r.deletions=null):(f=Sr(m,k),f.subtreeFlags=m.subtreeFlags&14680064),U!==null?_=Sr(U,_):(_=es(_,M,a,null),_.flags|=2),_.return=r,f.return=r,f.sibling=_,r.child=f,f=_,_=r.child,M=i.child.memoizedState,M=M===null?Zc(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},_.memoizedState=M,_.childLanes=i.childLanes&~a,r.memoizedState=Kc,f}return _=i.child,i=_.sibling,f=Sr(_,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=a),f.return=r,f.sibling=null,i!==null&&(a=r.deletions,a===null?(r.deletions=[i],r.flags|=16):a.push(i)),r.child=f,r.memoizedState=null,f}function Qc(i,r){return r=kl({mode:"visible",children:r},i.mode,0,null),r.return=i,i.child=r}function wl(i,r,a,f){return f!==null&&wc(f),Is(r,i.child,null,a),i=Qc(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function CS(i,r,a,f,m,_,M){if(a)return r.flags&256?(r.flags&=-257,f=Xc(Error(t(422))),wl(i,r,M,f)):r.memoizedState!==null?(r.child=i.child,r.flags|=128,null):(_=f.fallback,m=r.mode,f=kl({mode:"visible",children:f.children},m,0,null),_=es(_,m,M,null),_.flags|=2,f.return=r,_.return=r,f.sibling=_,r.child=f,(r.mode&1)!==0&&Is(r,i.child,null,M),r.child.memoizedState=Zc(M),r.memoizedState=Kc,_);if((r.mode&1)===0)return wl(i,r,M,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var U=f.dgst;return f=U,_=Error(t(419)),f=Xc(_,f,void 0),wl(i,r,M,f)}if(U=(M&i.childLanes)!==0,Un||U){if(f=sn,f!==null){switch(M&-M){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|M))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,zi(i,m),gi(f,i,m,-1))}return mf(),f=Xc(Error(t(421))),wl(i,r,M,f)}return m.data==="$?"?(r.flags|=128,r.child=i.child,r=zS.bind(null,i),m._reactRetry=r,null):(i=_.treeContext,jn=cr(m.nextSibling),Wn=r,It=!0,di=null,i!==null&&(Zn[Qn++]=ki,Zn[Qn++]=Bi,Zn[Qn++]=jr,ki=i.id,Bi=i.overflow,jr=r),r=Qc(r,f.children),r.flags|=4096,r)}function Cm(i,r,a){i.lanes|=r;var f=i.alternate;f!==null&&(f.lanes|=r),bc(i.return,r,a)}function Jc(i,r,a,f,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:m}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=m)}function Rm(i,r,a){var f=r.pendingProps,m=f.revealOrder,_=f.tail;if(An(i,r,f.children,a),f=Ot.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Cm(i,a,r);else if(i.tag===19)Cm(i,a,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Pt(Ot,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(a=r.child,m=null;a!==null;)i=a.alternate,i!==null&&_l(i)===null&&(m=a),a=a.sibling;a=m,a===null?(m=r.child,r.child=null):(m=a.sibling,a.sibling=null),Jc(r,!1,m,a,_);break;case"backwards":for(a=null,m=r.child,r.child=null;m!==null;){if(i=m.alternate,i!==null&&_l(i)===null){r.child=m;break}i=m.sibling,m.sibling=a,a=m,m=i}Jc(r,!0,a,null,_);break;case"together":Jc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Al(i,r){(r.mode&1)===0&&i!==null&&(i.alternate=null,r.alternate=null,r.flags|=2)}function Hi(i,r,a){if(i!==null&&(r.dependencies=i.dependencies),Kr|=r.lanes,(a&r.childLanes)===0)return null;if(i!==null&&r.child!==i.child)throw Error(t(153));if(r.child!==null){for(i=r.child,a=Sr(i,i.pendingProps),r.child=a,a.return=r;i.sibling!==null;)i=i.sibling,a=a.sibling=Sr(i,i.pendingProps),a.return=r;a.sibling=null}return r.child}function RS(i,r,a){switch(r.tag){case 3:Tm(r),Us();break;case 5:Hp(r);break;case 1:Nn(r.type)&&ll(r);break;case 4:Dc(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Pt(pl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Pt(Ot,Ot.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Am(i,r,a):(Pt(Ot,Ot.current&1),i=Hi(i,r,a),i!==null?i.sibling:null);Pt(Ot,Ot.current&1);break;case 19:if(f=(a&r.childLanes)!==0,(i.flags&128)!==0){if(f)return Rm(i,r,a);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Pt(Ot,Ot.current),f)break;return null;case 22:case 23:return r.lanes=0,Sm(i,r,a)}return Hi(i,r,a)}var bm,ef,Pm,Lm;bm=function(i,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ef=function(){},Pm=function(i,r,a,f){var m=i.memoizedProps;if(m!==f){i=r.stateNode,qr(Ai.current);var _=null;switch(a){case"input":m=je(i,m),f=je(i,f),_=[];break;case"select":m=j({},m,{value:void 0}),f=j({},f,{value:void 0}),_=[];break;case"textarea":m=_e(i,m),f=_e(i,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=sl)}it(a,f);var M;a=null;for(ee in m)if(!f.hasOwnProperty(ee)&&m.hasOwnProperty(ee)&&m[ee]!=null)if(ee==="style"){var U=m[ee];for(M in U)U.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?_||(_=[]):(_=_||[]).push(ee,null));for(ee in f){var k=f[ee];if(U=m?.[ee],f.hasOwnProperty(ee)&&k!==U&&(k!=null||U!=null))if(ee==="style")if(U){for(M in U)!U.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in k)k.hasOwnProperty(M)&&U[M]!==k[M]&&(a||(a={}),a[M]=k[M])}else a||(_||(_=[]),_.push(ee,a)),a=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(_=_||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(_=_||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&Lt("scroll",i),_||U===k||(_=[])):(_=_||[]).push(ee,k))}a&&(_=_||[]).push("style",a);var ee=_;(r.updateQueue=ee)&&(r.flags|=4)}},Lm=function(i,r,a,f){a!==f&&(r.flags|=4)};function ta(i,r){if(!It)switch(i.tailMode){case"hidden":r=i.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function _n(i){var r=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(r)for(var m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=a,r}function bS(i,r,a){var f=r.pendingProps;switch(Mc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(r),null;case 1:return Nn(r.type)&&al(),_n(r),null;case 3:return f=r.stateNode,ks(),Dt(Dn),Dt(gn),Ic(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(dl(r)?r.flags|=4:i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,di!==null&&(df(di),di=null))),ef(i,r),_n(r),null;case 5:Nc(r);var m=qr(Ko.current);if(a=r.type,i!==null&&r.stateNode!=null)Pm(i,r,a,f,m),i.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return _n(r),null}if(i=qr(Ai.current),dl(r)){f=r.stateNode,a=r.type;var _=r.memoizedProps;switch(f[wi]=r,f[jo]=_,i=(r.mode&1)!==0,a){case"dialog":Lt("cancel",f),Lt("close",f);break;case"iframe":case"object":case"embed":Lt("load",f);break;case"video":case"audio":for(m=0;m<Ho.length;m++)Lt(Ho[m],f);break;case"source":Lt("error",f);break;case"img":case"image":case"link":Lt("error",f),Lt("load",f);break;case"details":Lt("toggle",f);break;case"input":nt(f,_),Lt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Lt("invalid",f);break;case"textarea":me(f,_),Lt("invalid",f)}it(a,_),m=null;for(var M in _)if(_.hasOwnProperty(M)){var U=_[M];M==="children"?typeof U=="string"?f.textContent!==U&&(_.suppressHydrationWarning!==!0&&rl(f.textContent,U,i),m=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&rl(f.textContent,U,i),m=["children",""+U]):o.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Lt("scroll",f)}switch(a){case"input":dt(f),st(f,_,!0);break;case"textarea":dt(f),He(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=sl)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{M=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Re(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=M.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=M.createElement(a,{is:f.is}):(i=M.createElement(a),a==="select"&&(M=i,f.multiple?M.multiple=!0:f.size&&(M.size=f.size))):i=M.createElementNS(i,a),i[wi]=r,i[jo]=f,bm(i,r,!1,!1),r.stateNode=i;e:{switch(M=vt(a,f),a){case"dialog":Lt("cancel",i),Lt("close",i),m=f;break;case"iframe":case"object":case"embed":Lt("load",i),m=f;break;case"video":case"audio":for(m=0;m<Ho.length;m++)Lt(Ho[m],i);m=f;break;case"source":Lt("error",i),m=f;break;case"img":case"image":case"link":Lt("error",i),Lt("load",i),m=f;break;case"details":Lt("toggle",i),m=f;break;case"input":nt(i,f),m=je(i,f),Lt("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=j({},f,{value:void 0}),Lt("invalid",i);break;case"textarea":me(i,f),m=_e(i,f),Lt("invalid",i);break;default:m=f}it(a,m),U=m;for(_ in U)if(U.hasOwnProperty(_)){var k=U[_];_==="style"?We(i,k):_==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ot(i,k)):_==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&pe(i,k):typeof k=="number"&&pe(i,""+k):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?k!=null&&_==="onScroll"&&Lt("scroll",i):k!=null&&w(i,_,k,M))}switch(a){case"input":dt(i),st(i,f,!1);break;case"textarea":dt(i),He(i);break;case"option":f.value!=null&&i.setAttribute("value",""+be(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?J(i,!!f.multiple,_,!1):f.defaultValue!=null&&J(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=sl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _n(r),null;case 6:if(i&&r.stateNode!=null)Lm(i,r,i.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(a=qr(Ko.current),qr(Ai.current),dl(r)){if(f=r.stateNode,a=r.memoizedProps,f[wi]=r,(_=f.nodeValue!==a)&&(i=Wn,i!==null))switch(i.tag){case 3:rl(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&rl(f.nodeValue,a,(i.mode&1)!==0)}_&&(r.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[wi]=r,r.stateNode=f}return _n(r),null;case 13:if(Dt(Ot),f=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(It&&jn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Up(),Us(),r.flags|=98560,_=!1;else if(_=dl(r),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[wi]=r}else Us(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;_n(r),_=!1}else di!==null&&(df(di),di=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(i===null||(Ot.current&1)!==0?Jt===0&&(Jt=3):mf())),r.updateQueue!==null&&(r.flags|=4),_n(r),null);case 4:return ks(),ef(i,r),i===null&&Go(r.stateNode.containerInfo),_n(r),null;case 10:return Rc(r.type._context),_n(r),null;case 17:return Nn(r.type)&&al(),_n(r),null;case 19:if(Dt(Ot),_=r.memoizedState,_===null)return _n(r),null;if(f=(r.flags&128)!==0,M=_.rendering,M===null)if(f)ta(_,!1);else{if(Jt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(M=_l(i),M!==null){for(r.flags|=128,ta(_,!1),f=M.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=a,a=r.child;a!==null;)_=a,i=f,_.flags&=14680066,M=_.alternate,M===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=M.childLanes,_.lanes=M.lanes,_.child=M.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=M.memoizedProps,_.memoizedState=M.memoizedState,_.updateQueue=M.updateQueue,_.type=M.type,i=M.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Pt(Ot,Ot.current&1|2),r.child}i=i.sibling}_.tail!==null&&De()>Hs&&(r.flags|=128,f=!0,ta(_,!1),r.lanes=4194304)}else{if(!f)if(i=_l(M),i!==null){if(r.flags|=128,f=!0,a=i.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ta(_,!0),_.tail===null&&_.tailMode==="hidden"&&!M.alternate&&!It)return _n(r),null}else 2*De()-_.renderingStartTime>Hs&&a!==1073741824&&(r.flags|=128,f=!0,ta(_,!1),r.lanes=4194304);_.isBackwards?(M.sibling=r.child,r.child=M):(a=_.last,a!==null?a.sibling=M:r.child=M,_.last=M)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=De(),r.sibling=null,a=Ot.current,Pt(Ot,f?a&1|2:a&1),r):(_n(r),null);case 22:case 23:return pf(),f=r.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(Xn&1073741824)!==0&&(_n(r),r.subtreeFlags&6&&(r.flags|=8192)):_n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function PS(i,r){switch(Mc(r),r.tag){case 1:return Nn(r.type)&&al(),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return ks(),Dt(Dn),Dt(gn),Ic(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 5:return Nc(r),null;case 13:if(Dt(Ot),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Us()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return Dt(Ot),null;case 4:return ks(),null;case 10:return Rc(r.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var Cl=!1,xn=!1,LS=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function zs(i,r){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Ht(i,r,f)}else a.current=null}function tf(i,r,a){try{a()}catch(f){Ht(i,r,f)}}var Dm=!1;function DS(i,r){if(hc=Ya,i=cp(),sc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var M=0,U=-1,k=-1,ee=0,he=0,ge=i,fe=null;t:for(;;){for(var Le;ge!==a||m!==0&&ge.nodeType!==3||(U=M+m),ge!==_||f!==0&&ge.nodeType!==3||(k=M+f),ge.nodeType===3&&(M+=ge.nodeValue.length),(Le=ge.firstChild)!==null;)fe=ge,ge=Le;for(;;){if(ge===i)break t;if(fe===a&&++ee===m&&(U=M),fe===_&&++he===f&&(k=M),(Le=ge.nextSibling)!==null)break;ge=fe,fe=ge.parentNode}ge=Le}a=U===-1||k===-1?null:{start:U,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(pc={focusedElem:i,selectionRange:a},Ya=!1,Ne=r;Ne!==null;)if(r=Ne,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,Ne=i;else for(;Ne!==null;){r=Ne;try{var Fe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var ke=Fe.memoizedProps,jt=Fe.memoizedState,Y=r.stateNode,V=Y.getSnapshotBeforeUpdate(r.elementType===r.type?ke:hi(r.type,ke),jt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ye){Ht(r,r.return,ye)}if(i=r.sibling,i!==null){i.return=r.return,Ne=i;break}Ne=r.return}return Fe=Dm,Dm=!1,Fe}function na(i,r,a){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&tf(r,a,_)}m=m.next}while(m!==f)}}function Rl(i,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==r)}}function nf(i){var r=i.ref;if(r!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof r=="function"?r(i):r.current=i}}function Nm(i){var r=i.alternate;r!==null&&(i.alternate=null,Nm(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&(delete r[wi],delete r[jo],delete r[_c],delete r[pS],delete r[mS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Um(i){return i.tag===5||i.tag===3||i.tag===4}function Im(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Um(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function rf(i,r,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(i,r):a.insertBefore(i,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(i,a)):(r=a,r.appendChild(i)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=sl));else if(f!==4&&(i=i.child,i!==null))for(rf(i,r,a),i=i.sibling;i!==null;)rf(i,r,a),i=i.sibling}function sf(i,r,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,r?a.insertBefore(i,r):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(sf(i,r,a),i=i.sibling;i!==null;)sf(i,r,a),i=i.sibling}var ln=null,pi=!1;function gr(i,r,a){for(a=a.child;a!==null;)Fm(i,r,a),a=a.sibling}function Fm(i,r,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Pn,a)}catch{}switch(a.tag){case 5:xn||zs(a,r);case 6:var f=ln,m=pi;ln=null,gr(i,r,a),ln=f,pi=m,ln!==null&&(pi?(i=ln,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(pi?(i=ln,a=a.stateNode,i.nodeType===8?vc(i.parentNode,a):i.nodeType===1&&vc(i,a),Uo(i)):vc(ln,a.stateNode));break;case 4:f=ln,m=pi,ln=a.stateNode.containerInfo,pi=!0,gr(i,r,a),ln=f,pi=m;break;case 0:case 11:case 14:case 15:if(!xn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,M=_.destroy;_=_.tag,M!==void 0&&((_&2)!==0||(_&4)!==0)&&tf(a,r,M),m=m.next}while(m!==f)}gr(i,r,a);break;case 1:if(!xn&&(zs(a,r),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(U){Ht(a,r,U)}gr(i,r,a);break;case 21:gr(i,r,a);break;case 22:a.mode&1?(xn=(f=xn)||a.memoizedState!==null,gr(i,r,a),xn=f):gr(i,r,a);break;default:gr(i,r,a)}}function Om(i){var r=i.updateQueue;if(r!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new LS),r.forEach(function(f){var m=VS.bind(null,i,f);a.has(f)||(a.add(f),f.then(m,m))})}}function mi(i,r){var a=r.deletions;if(a!==null)for(var f=0;f<a.length;f++){var m=a[f];try{var _=i,M=r,U=M;e:for(;U!==null;){switch(U.tag){case 5:ln=U.stateNode,pi=!1;break e;case 3:ln=U.stateNode.containerInfo,pi=!0;break e;case 4:ln=U.stateNode.containerInfo,pi=!0;break e}U=U.return}if(ln===null)throw Error(t(160));Fm(_,M,m),ln=null,pi=!1;var k=m.alternate;k!==null&&(k.return=null),m.return=null}catch(ee){Ht(m,r,ee)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)km(r,i),r=r.sibling}function km(i,r){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(mi(r,i),Ri(i),f&4){try{na(3,i,i.return),Rl(3,i)}catch(ke){Ht(i,i.return,ke)}try{na(5,i,i.return)}catch(ke){Ht(i,i.return,ke)}}break;case 1:mi(r,i),Ri(i),f&512&&a!==null&&zs(a,a.return);break;case 5:if(mi(r,i),Ri(i),f&512&&a!==null&&zs(a,a.return),i.flags&32){var m=i.stateNode;try{pe(m,"")}catch(ke){Ht(i,i.return,ke)}}if(f&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,M=a!==null?a.memoizedProps:_,U=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&Ve(m,_),vt(U,M);var ee=vt(U,_);for(M=0;M<k.length;M+=2){var he=k[M],ge=k[M+1];he==="style"?We(m,ge):he==="dangerouslySetInnerHTML"?ot(m,ge):he==="children"?pe(m,ge):w(m,he,ge,ee)}switch(U){case"input":Ct(m,_);break;case"textarea":xe(m,_);break;case"select":var fe=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var Le=_.value;Le!=null?J(m,!!_.multiple,Le,!1):fe!==!!_.multiple&&(_.defaultValue!=null?J(m,!!_.multiple,_.defaultValue,!0):J(m,!!_.multiple,_.multiple?[]:"",!1))}m[jo]=_}catch(ke){Ht(i,i.return,ke)}}break;case 6:if(mi(r,i),Ri(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(ke){Ht(i,i.return,ke)}}break;case 3:if(mi(r,i),Ri(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(r.containerInfo)}catch(ke){Ht(i,i.return,ke)}break;case 4:mi(r,i),Ri(i);break;case 13:mi(r,i),Ri(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(lf=De())),f&4&&Om(i);break;case 22:if(he=a!==null&&a.memoizedState!==null,i.mode&1?(xn=(ee=xn)||he,mi(r,i),xn=ee):mi(r,i),Ri(i),f&8192){if(ee=i.memoizedState!==null,(i.stateNode.isHidden=ee)&&!he&&(i.mode&1)!==0)for(Ne=i,he=i.child;he!==null;){for(ge=Ne=he;Ne!==null;){switch(fe=Ne,Le=fe.child,fe.tag){case 0:case 11:case 14:case 15:na(4,fe,fe.return);break;case 1:zs(fe,fe.return);var Fe=fe.stateNode;if(typeof Fe.componentWillUnmount=="function"){f=fe,a=fe.return;try{r=f,Fe.props=r.memoizedProps,Fe.state=r.memoizedState,Fe.componentWillUnmount()}catch(ke){Ht(f,a,ke)}}break;case 5:zs(fe,fe.return);break;case 22:if(fe.memoizedState!==null){Vm(ge);continue}}Le!==null?(Le.return=fe,Ne=Le):Vm(ge)}he=he.sibling}e:for(he=null,ge=i;;){if(ge.tag===5){if(he===null){he=ge;try{m=ge.stateNode,ee?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=ge.stateNode,k=ge.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=et("display",M))}catch(ke){Ht(i,i.return,ke)}}}else if(ge.tag===6){if(he===null)try{ge.stateNode.nodeValue=ee?"":ge.memoizedProps}catch(ke){Ht(i,i.return,ke)}}else if((ge.tag!==22&&ge.tag!==23||ge.memoizedState===null||ge===i)&&ge.child!==null){ge.child.return=ge,ge=ge.child;continue}if(ge===i)break e;for(;ge.sibling===null;){if(ge.return===null||ge.return===i)break e;he===ge&&(he=null),ge=ge.return}he===ge&&(he=null),ge.sibling.return=ge.return,ge=ge.sibling}}break;case 19:mi(r,i),Ri(i),f&4&&Om(i);break;case 21:break;default:mi(r,i),Ri(i)}}function Ri(i){var r=i.flags;if(r&2){try{e:{for(var a=i.return;a!==null;){if(Um(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(pe(m,""),f.flags&=-33);var _=Im(i);sf(i,_,m);break;case 3:case 4:var M=f.stateNode.containerInfo,U=Im(i);rf(i,U,M);break;default:throw Error(t(161))}}catch(k){Ht(i,i.return,k)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function NS(i,r,a){Ne=i,Bm(i)}function Bm(i,r,a){for(var f=(i.mode&1)!==0;Ne!==null;){var m=Ne,_=m.child;if(m.tag===22&&f){var M=m.memoizedState!==null||Cl;if(!M){var U=m.alternate,k=U!==null&&U.memoizedState!==null||xn;U=Cl;var ee=xn;if(Cl=M,(xn=k)&&!ee)for(Ne=m;Ne!==null;)M=Ne,k=M.child,M.tag===22&&M.memoizedState!==null?Hm(m):k!==null?(k.return=M,Ne=k):Hm(m);for(;_!==null;)Ne=_,Bm(_),_=_.sibling;Ne=m,Cl=U,xn=ee}zm(i)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,Ne=_):zm(i)}}function zm(i){for(;Ne!==null;){var r=Ne;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:xn||Rl(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!xn)if(a===null)f.componentDidMount();else{var m=r.elementType===r.type?a.memoizedProps:hi(r.type,a.memoizedProps);f.componentDidUpdate(m,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&Vp(r,_,f);break;case 3:var M=r.updateQueue;if(M!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Vp(r,M,a)}break;case 5:var U=r.stateNode;if(a===null&&r.flags&4){a=U;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ee=r.alternate;if(ee!==null){var he=ee.memoizedState;if(he!==null){var ge=he.dehydrated;ge!==null&&Uo(ge)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||r.flags&512&&nf(r)}catch(fe){Ht(r,r.return,fe)}}if(r===i){Ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,Ne=a;break}Ne=r.return}}function Vm(i){for(;Ne!==null;){var r=Ne;if(r===i){Ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Ne=a;break}Ne=r.return}}function Hm(i){for(;Ne!==null;){var r=Ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Rl(4,r)}catch(k){Ht(r,a,k)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(k){Ht(r,m,k)}}var _=r.return;try{nf(r)}catch(k){Ht(r,_,k)}break;case 5:var M=r.return;try{nf(r)}catch(k){Ht(r,M,k)}}}catch(k){Ht(r,r.return,k)}if(r===i){Ne=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Ne=U;break}Ne=r.return}}var US=Math.ceil,bl=L.ReactCurrentDispatcher,of=L.ReactCurrentOwner,ti=L.ReactCurrentBatchConfig,_t=0,sn=null,qt=null,un=0,Xn=0,Vs=fr(0),Jt=0,ia=null,Kr=0,Pl=0,af=0,ra=null,In=null,lf=0,Hs=1/0,Gi=null,Ll=!1,uf=null,vr=null,Dl=!1,_r=null,Nl=0,sa=0,cf=null,Ul=-1,Il=0;function Cn(){return(_t&6)!==0?De():Ul!==-1?Ul:Ul=De()}function xr(i){return(i.mode&1)===0?1:(_t&2)!==0&&un!==0?un&-un:vS.transition!==null?(Il===0&&(Il=Wa()),Il):(i=Et,i!==0||(i=window.event,i=i===void 0?16:Wh(i.type)),i)}function gi(i,r,a,f){if(50<sa)throw sa=0,cf=null,Error(t(185));bo(i,a,f),((_t&2)===0||i!==sn)&&(i===sn&&((_t&2)===0&&(Pl|=a),Jt===4&&yr(i,un)),Fn(i,f),a===1&&_t===0&&(r.mode&1)===0&&(Hs=De()+500,ul&&hr()))}function Fn(i,r){var a=i.callbackNode;Ln(i,r);var f=Kn(i,i===sn?un:0);if(f===0)a!==null&&Pe(a),i.callbackNode=null,i.callbackPriority=0;else if(r=f&-f,i.callbackPriority!==r){if(a!=null&&Pe(a),r===1)i.tag===0?gS(Wm.bind(null,i)):bp(Wm.bind(null,i)),dS(function(){(_t&6)===0&&hr()}),a=null;else{switch(Fh(f)){case 1:a=tt;break;case 4:a=rt;break;case 16:a=bt;break;case 536870912:a=Wt;break;default:a=bt}a=Qm(a,Gm.bind(null,i))}i.callbackPriority=r,i.callbackNode=a}}function Gm(i,r){if(Ul=-1,Il=0,(_t&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Gs()&&i.callbackNode!==a)return null;var f=Kn(i,i===sn?un:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||r)r=Fl(i,f);else{r=f;var m=_t;_t|=2;var _=Xm();(sn!==i||un!==r)&&(Gi=null,Hs=De()+500,Qr(i,r));do try{OS();break}catch(U){jm(i,U)}while(!0);Cc(),bl.current=_,_t=m,qt!==null?r=0:(sn=null,un=0,r=Jt)}if(r!==0){if(r===2&&(m=Hr(i),m!==0&&(f=m,r=ff(i,m))),r===1)throw a=ia,Qr(i,0),yr(i,f),Fn(i,De()),a;if(r===6)yr(i,f);else{if(m=i.current.alternate,(f&30)===0&&!IS(m)&&(r=Fl(i,f),r===2&&(_=Hr(i),_!==0&&(f=_,r=ff(i,_))),r===1))throw a=ia,Qr(i,0),yr(i,f),Fn(i,De()),a;switch(i.finishedWork=m,i.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Jr(i,In,Gi);break;case 3:if(yr(i,f),(f&130023424)===f&&(r=lf+500-De(),10<r)){if(Kn(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){Cn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=gc(Jr.bind(null,i,In,Gi),r);break}Jr(i,In,Gi);break;case 4:if(yr(i,f),(f&4194240)===f)break;for(r=i.eventTimes,m=-1;0<f;){var M=31-wn(f);_=1<<M,M=r[M],M>m&&(m=M),f&=~_}if(f=m,f=De()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*US(f/1960))-f,10<f){i.timeoutHandle=gc(Jr.bind(null,i,In,Gi),f);break}Jr(i,In,Gi);break;case 5:Jr(i,In,Gi);break;default:throw Error(t(329))}}}return Fn(i,De()),i.callbackNode===a?Gm.bind(null,i):null}function ff(i,r){var a=ra;return i.current.memoizedState.isDehydrated&&(Qr(i,r).flags|=256),i=Fl(i,r),i!==2&&(r=In,In=a,r!==null&&df(r)),i}function df(i){In===null?In=i:In.push.apply(In,i)}function IS(i){for(var r=i;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var m=a[f],_=m.getSnapshot;m=m.value;try{if(!fi(_(),m))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function yr(i,r){for(r&=~af,r&=~Pl,i.suspendedLanes|=r,i.pingedLanes&=~r,i=i.expirationTimes;0<r;){var a=31-wn(r),f=1<<a;i[a]=-1,r&=~f}}function Wm(i){if((_t&6)!==0)throw Error(t(327));Gs();var r=Kn(i,0);if((r&1)===0)return Fn(i,De()),null;var a=Fl(i,r);if(i.tag!==0&&a===2){var f=Hr(i);f!==0&&(r=f,a=ff(i,f))}if(a===1)throw a=ia,Qr(i,0),yr(i,r),Fn(i,De()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=r,Jr(i,In,Gi),Fn(i,De()),null}function hf(i,r){var a=_t;_t|=1;try{return i(r)}finally{_t=a,_t===0&&(Hs=De()+500,ul&&hr())}}function Zr(i){_r!==null&&_r.tag===0&&(_t&6)===0&&Gs();var r=_t;_t|=1;var a=ti.transition,f=Et;try{if(ti.transition=null,Et=1,i)return i()}finally{Et=f,ti.transition=a,_t=r,(_t&6)===0&&hr()}}function pf(){Xn=Vs.current,Dt(Vs)}function Qr(i,r){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,fS(a)),qt!==null)for(a=qt.return;a!==null;){var f=a;switch(Mc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&al();break;case 3:ks(),Dt(Dn),Dt(gn),Ic();break;case 5:Nc(f);break;case 4:ks();break;case 13:Dt(Ot);break;case 19:Dt(Ot);break;case 10:Rc(f.type._context);break;case 22:case 23:pf()}a=a.return}if(sn=i,qt=i=Sr(i.current,null),un=Xn=r,Jt=0,ia=null,af=Pl=Kr=0,In=ra=null,Yr!==null){for(r=0;r<Yr.length;r++)if(a=Yr[r],f=a.interleaved,f!==null){a.interleaved=null;var m=f.next,_=a.pending;if(_!==null){var M=_.next;_.next=m,f.next=M}a.pending=f}Yr=null}return i}function jm(i,r){do{var a=qt;try{if(Cc(),xl.current=El,yl){for(var f=kt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}yl=!1}if($r=0,rn=Qt=kt=null,Zo=!1,Qo=0,of.current=null,a===null||a.return===null){Jt=1,ia=r,qt=null;break}e:{var _=i,M=a.return,U=a,k=r;if(r=un,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,he=U,ge=he.tag;if((he.mode&1)===0&&(ge===0||ge===11||ge===15)){var fe=he.alternate;fe?(he.updateQueue=fe.updateQueue,he.memoizedState=fe.memoizedState,he.lanes=fe.lanes):(he.updateQueue=null,he.memoizedState=null)}var Le=gm(M);if(Le!==null){Le.flags&=-257,vm(Le,M,U,_,r),Le.mode&1&&mm(_,ee,r),r=Le,k=ee;var Fe=r.updateQueue;if(Fe===null){var ke=new Set;ke.add(k),r.updateQueue=ke}else Fe.add(k);break e}else{if((r&1)===0){mm(_,ee,r),mf();break e}k=Error(t(426))}}else if(It&&U.mode&1){var jt=gm(M);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),vm(jt,M,U,_,r),wc(Bs(k,U));break e}}_=k=Bs(k,U),Jt!==4&&(Jt=2),ra===null?ra=[_]:ra.push(_),_=M;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var Y=hm(_,k,r);zp(_,Y);break e;case 1:U=k;var V=_.type,Z=_.stateNode;if((_.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(vr===null||!vr.has(Z)))){_.flags|=65536,r&=-r,_.lanes|=r;var ye=pm(_,U,r);zp(_,ye);break e}}_=_.return}while(_!==null)}qm(a)}catch(ze){r=ze,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function Xm(){var i=bl.current;return bl.current=El,i===null?El:i}function mf(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),sn===null||(Kr&268435455)===0&&(Pl&268435455)===0||yr(sn,un)}function Fl(i,r){var a=_t;_t|=2;var f=Xm();(sn!==i||un!==r)&&(Gi=null,Qr(i,r));do try{FS();break}catch(m){jm(i,m)}while(!0);if(Cc(),_t=a,bl.current=f,qt!==null)throw Error(t(261));return sn=null,un=0,Jt}function FS(){for(;qt!==null;)Ym(qt)}function OS(){for(;qt!==null&&!Ge();)Ym(qt)}function Ym(i){var r=Zm(i.alternate,i,Xn);i.memoizedProps=i.pendingProps,r===null?qm(i):qt=r,of.current=null}function qm(i){var r=i;do{var a=r.alternate;if(i=r.return,(r.flags&32768)===0){if(a=bS(a,r,Xn),a!==null){qt=a;return}}else{if(a=PS(a,r),a!==null){a.flags&=32767,qt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Jt=6,qt=null;return}}if(r=r.sibling,r!==null){qt=r;return}qt=r=i}while(r!==null);Jt===0&&(Jt=5)}function Jr(i,r,a){var f=Et,m=ti.transition;try{ti.transition=null,Et=1,kS(i,r,a,f)}finally{ti.transition=m,Et=f}return null}function kS(i,r,a,f){do Gs();while(_r!==null);if((_t&6)!==0)throw Error(t(327));a=i.finishedWork;var m=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(_y(i,_),i===sn&&(qt=sn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Dl||(Dl=!0,Qm(bt,function(){return Gs(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=ti.transition,ti.transition=null;var M=Et;Et=1;var U=_t;_t|=4,of.current=null,DS(i,a),km(a,i),rS(pc),Ya=!!hc,pc=hc=null,i.current=a,NS(a),Ke(),_t=U,Et=M,ti.transition=_}else i.current=a;if(Dl&&(Dl=!1,_r=i,Nl=m),_=i.pendingLanes,_===0&&(vr=null),ut(a.stateNode),Fn(i,De()),r!==null)for(f=i.onRecoverableError,a=0;a<r.length;a++)m=r[a],f(m.value,{componentStack:m.stack,digest:m.digest});if(Ll)throw Ll=!1,i=uf,uf=null,i;return(Nl&1)!==0&&i.tag!==0&&Gs(),_=i.pendingLanes,(_&1)!==0?i===cf?sa++:(sa=0,cf=i):sa=0,hr(),null}function Gs(){if(_r!==null){var i=Fh(Nl),r=ti.transition,a=Et;try{if(ti.transition=null,Et=16>i?16:i,_r===null)var f=!1;else{if(i=_r,_r=null,Nl=0,(_t&6)!==0)throw Error(t(331));var m=_t;for(_t|=4,Ne=i.current;Ne!==null;){var _=Ne,M=_.child;if((Ne.flags&16)!==0){var U=_.deletions;if(U!==null){for(var k=0;k<U.length;k++){var ee=U[k];for(Ne=ee;Ne!==null;){var he=Ne;switch(he.tag){case 0:case 11:case 15:na(8,he,_)}var ge=he.child;if(ge!==null)ge.return=he,Ne=ge;else for(;Ne!==null;){he=Ne;var fe=he.sibling,Le=he.return;if(Nm(he),he===ee){Ne=null;break}if(fe!==null){fe.return=Le,Ne=fe;break}Ne=Le}}}var Fe=_.alternate;if(Fe!==null){var ke=Fe.child;if(ke!==null){Fe.child=null;do{var jt=ke.sibling;ke.sibling=null,ke=jt}while(ke!==null)}}Ne=_}}if((_.subtreeFlags&2064)!==0&&M!==null)M.return=_,Ne=M;else e:for(;Ne!==null;){if(_=Ne,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:na(9,_,_.return)}var Y=_.sibling;if(Y!==null){Y.return=_.return,Ne=Y;break e}Ne=_.return}}var V=i.current;for(Ne=V;Ne!==null;){M=Ne;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Ne=Z;else e:for(M=V;Ne!==null;){if(U=Ne,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Rl(9,U)}}catch(ze){Ht(U,U.return,ze)}if(U===M){Ne=null;break e}var ye=U.sibling;if(ye!==null){ye.return=U.return,Ne=ye;break e}Ne=U.return}}if(_t=m,hr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Pn,i)}catch{}f=!0}return f}finally{Et=a,ti.transition=r}}return!1}function $m(i,r,a){r=Bs(a,r),r=hm(i,r,1),i=mr(i,r,1),r=Cn(),i!==null&&(bo(i,1,r),Fn(i,r))}function Ht(i,r,a){if(i.tag===3)$m(i,i,a);else for(;r!==null;){if(r.tag===3){$m(r,i,a);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(vr===null||!vr.has(f))){i=Bs(a,i),i=pm(r,i,1),r=mr(r,i,1),i=Cn(),r!==null&&(bo(r,1,i),Fn(r,i));break}}r=r.return}}function BS(i,r,a){var f=i.pingCache;f!==null&&f.delete(r),r=Cn(),i.pingedLanes|=i.suspendedLanes&a,sn===i&&(un&a)===a&&(Jt===4||Jt===3&&(un&130023424)===un&&500>De()-lf?Qr(i,0):af|=a),Fn(i,r)}function Km(i,r){r===0&&((i.mode&1)===0?r=1:(r=ir,ir<<=1,(ir&130023424)===0&&(ir=4194304)));var a=Cn();i=zi(i,r),i!==null&&(bo(i,r,a),Fn(i,a))}function zS(i){var r=i.memoizedState,a=0;r!==null&&(a=r.retryLane),Km(i,a)}function VS(i,r){var a=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(a=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),Km(i,a)}var Zm;Zm=function(i,r,a){if(i!==null)if(i.memoizedProps!==r.pendingProps||Dn.current)Un=!0;else{if((i.lanes&a)===0&&(r.flags&128)===0)return Un=!1,RS(i,r,a);Un=(i.flags&131072)!==0}else Un=!1,It&&(r.flags&1048576)!==0&&Pp(r,fl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Al(i,r),i=r.pendingProps;var m=Ls(r,gn.current);Os(r,a),m=kc(null,r,f,i,m,a);var _=Bc();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Nn(f)?(_=!0,ll(r)):_=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Lc(r),m.updater=Tl,r.stateNode=m,m._reactInternals=r,jc(r,f,i,a),r=$c(null,r,f,!0,_,a)):(r.tag=0,It&&_&&Sc(r),An(null,r,m,a),r=r.child),r;case 16:f=r.elementType;e:{switch(Al(i,r),i=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=GS(f),i=hi(f,i),m){case 0:r=qc(null,r,f,i,a);break e;case 1:r=Em(null,r,f,i,a);break e;case 11:r=_m(null,r,f,i,a);break e;case 14:r=xm(null,r,f,hi(f.type,i),a);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:hi(f,m),qc(i,r,f,m,a);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:hi(f,m),Em(i,r,f,m,a);case 3:e:{if(Tm(r),i===null)throw Error(t(387));f=r.pendingProps,_=r.memoizedState,m=_.element,Bp(i,r),vl(r,f,null,a);var M=r.memoizedState;if(f=M.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){m=Bs(Error(t(423)),r),r=wm(i,r,f,a,m);break e}else if(f!==m){m=Bs(Error(t(424)),r),r=wm(i,r,f,a,m);break e}else for(jn=cr(r.stateNode.containerInfo.firstChild),Wn=r,It=!0,di=null,a=Op(r,null,f,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Us(),f===m){r=Hi(i,r,a);break e}An(i,r,f,a)}r=r.child}return r;case 5:return Hp(r),i===null&&Tc(r),f=r.type,m=r.pendingProps,_=i!==null?i.memoizedProps:null,M=m.children,mc(f,m)?M=null:_!==null&&mc(f,_)&&(r.flags|=32),Mm(i,r),An(i,r,M,a),r.child;case 6:return i===null&&Tc(r),null;case 13:return Am(i,r,a);case 4:return Dc(r,r.stateNode.containerInfo),f=r.pendingProps,i===null?r.child=Is(r,null,f,a):An(i,r,f,a),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:hi(f,m),_m(i,r,f,m,a);case 7:return An(i,r,r.pendingProps,a),r.child;case 8:return An(i,r,r.pendingProps.children,a),r.child;case 12:return An(i,r,r.pendingProps.children,a),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,_=r.memoizedProps,M=m.value,Pt(pl,f._currentValue),f._currentValue=M,_!==null)if(fi(_.value,M)){if(_.children===m.children&&!Dn.current){r=Hi(i,r,a);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var U=_.dependencies;if(U!==null){M=_.child;for(var k=U.firstContext;k!==null;){if(k.context===f){if(_.tag===1){k=Vi(-1,a&-a),k.tag=2;var ee=_.updateQueue;if(ee!==null){ee=ee.shared;var he=ee.pending;he===null?k.next=k:(k.next=he.next,he.next=k),ee.pending=k}}_.lanes|=a,k=_.alternate,k!==null&&(k.lanes|=a),bc(_.return,a,r),U.lanes|=a;break}k=k.next}}else if(_.tag===10)M=_.type===r.type?null:_.child;else if(_.tag===18){if(M=_.return,M===null)throw Error(t(341));M.lanes|=a,U=M.alternate,U!==null&&(U.lanes|=a),bc(M,a,r),M=_.sibling}else M=_.child;if(M!==null)M.return=_;else for(M=_;M!==null;){if(M===r){M=null;break}if(_=M.sibling,_!==null){_.return=M.return,M=_;break}M=M.return}_=M}An(i,r,m.children,a),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,Os(r,a),m=Jn(m),f=f(m),r.flags|=1,An(i,r,f,a),r.child;case 14:return f=r.type,m=hi(f,r.pendingProps),m=hi(f.type,m),xm(i,r,f,m,a);case 15:return ym(i,r,r.type,r.pendingProps,a);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:hi(f,m),Al(i,r),r.tag=1,Nn(f)?(i=!0,ll(r)):i=!1,Os(r,a),fm(r,f,m),jc(r,f,m,a),$c(null,r,f,!0,i,a);case 19:return Rm(i,r,a);case 22:return Sm(i,r,a)}throw Error(t(156,r.tag))};function Qm(i,r){return ie(i,r)}function HS(i,r,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(i,r,a,f){return new HS(i,r,a,f)}function gf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function GS(i){if(typeof i=="function")return gf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ce)return 11;if(i===X)return 14}return 2}function Sr(i,r){var a=i.alternate;return a===null?(a=ni(i.tag,r,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=r,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,r=i.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Ol(i,r,a,f,m,_){var M=2;if(f=i,typeof i=="function")gf(i)&&(M=1);else if(typeof i=="string")M=5;else e:switch(i){case I:return es(a.children,m,_,r);case re:M=8,m|=8;break;case C:return i=ni(12,a,r,m|2),i.elementType=C,i.lanes=_,i;case ve:return i=ni(13,a,r,m),i.elementType=ve,i.lanes=_,i;case H:return i=ni(19,a,r,m),i.elementType=H,i.lanes=_,i;case Q:return kl(a,m,_,r);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case D:M=10;break e;case ue:M=9;break e;case ce:M=11;break e;case X:M=14;break e;case te:M=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return r=ni(M,a,r,m),r.elementType=i,r.type=f,r.lanes=_,r}function es(i,r,a,f){return i=ni(7,i,f,r),i.lanes=a,i}function kl(i,r,a,f){return i=ni(22,i,f,r),i.elementType=Q,i.lanes=a,i.stateNode={isHidden:!1},i}function vf(i,r,a){return i=ni(6,i,null,r),i.lanes=a,i}function _f(i,r,a){return r=ni(4,i.children!==null?i.children:[],i.key,r),r.lanes=a,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}function WS(i,r,a,f,m){this.tag=r,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ss(0),this.expirationTimes=Ss(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function xf(i,r,a,f,m,_,M,U,k){return i=new WS(i,r,a,U,k),r===1?(r=1,_===!0&&(r|=8)):r=0,_=ni(3,null,null,r),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(_),i}function jS(i,r,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:f==null?null:""+f,children:i,containerInfo:r,implementation:a}}function Jm(i){if(!i)return dr;i=i._reactInternals;e:{if(Ui(i)!==i||i.tag!==1)throw Error(t(170));var r=i;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Nn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Nn(a))return Cp(i,a,r)}return r}function eg(i,r,a,f,m,_,M,U,k){return i=xf(a,f,!0,i,m,_,M,U,k),i.context=Jm(null),a=i.current,f=Cn(),m=xr(a),_=Vi(f,m),_.callback=r??null,mr(a,_,m),i.current.lanes=m,bo(i,m,f),Fn(i,f),i}function Bl(i,r,a,f){var m=r.current,_=Cn(),M=xr(m);return a=Jm(a),r.context===null?r.context=a:r.pendingContext=a,r=Vi(_,M),r.payload={element:i},f=f===void 0?null:f,f!==null&&(r.callback=f),i=mr(m,r,M),i!==null&&(gi(i,m,M,_),gl(i,m,M)),M}function zl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function tg(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<r?a:r}}function yf(i,r){tg(i,r),(i=i.alternate)&&tg(i,r)}function XS(){return null}var ng=typeof reportError=="function"?reportError:function(i){console.error(i)};function Sf(i){this._internalRoot=i}Vl.prototype.render=Sf.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(t(409));Bl(i,r,null,null)},Vl.prototype.unmount=Sf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;Zr(function(){Bl(null,i,null,null)}),r[Fi]=null}};function Vl(i){this._internalRoot=i}Vl.prototype.unstable_scheduleHydration=function(i){if(i){var r=Bh();i={blockedOn:null,target:i,priority:r};for(var a=0;a<ar.length&&r!==0&&r<ar[a].priority;a++);ar.splice(a,0,i),a===0&&Hh(i)}};function Mf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Hl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function ig(){}function YS(i,r,a,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var ee=zl(M);_.call(ee)}}var M=eg(r,f,i,0,null,!1,!1,"",ig);return i._reactRootContainer=M,i[Fi]=M.current,Go(i.nodeType===8?i.parentNode:i),Zr(),M}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var U=f;f=function(){var ee=zl(k);U.call(ee)}}var k=xf(i,0,!1,null,null,!1,!1,"",ig);return i._reactRootContainer=k,i[Fi]=k.current,Go(i.nodeType===8?i.parentNode:i),Zr(function(){Bl(r,k,a,f)}),k}function Gl(i,r,a,f,m){var _=a._reactRootContainer;if(_){var M=_;if(typeof m=="function"){var U=m;m=function(){var k=zl(M);U.call(k)}}Bl(r,M,i,m)}else M=YS(a,r,i,m,f);return zl(M)}Oh=function(i){switch(i.tag){case 3:var r=i.stateNode;if(r.current.memoizedState.isDehydrated){var a=Vt(r.pendingLanes);a!==0&&(ju(r,a|1),Fn(r,De()),(_t&6)===0&&(Hs=De()+500,hr()))}break;case 13:Zr(function(){var f=zi(i,1);if(f!==null){var m=Cn();gi(f,i,1,m)}}),yf(i,1)}},Xu=function(i){if(i.tag===13){var r=zi(i,134217728);if(r!==null){var a=Cn();gi(r,i,134217728,a)}yf(i,134217728)}},kh=function(i){if(i.tag===13){var r=xr(i),a=zi(i,r);if(a!==null){var f=Cn();gi(a,i,r,f)}yf(i,r)}},Bh=function(){return Et},zh=function(i,r){var a=Et;try{return Et=i,r()}finally{Et=a}},Me=function(i,r,a){switch(r){case"input":if(Ct(i,a),r=a.name,a.type==="radio"&&r!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var f=a[r];if(f!==i&&f.form===i.form){var m=ol(f);if(!m)throw Error(t(90));ne(f),Ct(f,m)}}}break;case"textarea":xe(i,a);break;case"select":r=a.value,r!=null&&J(i,!!a.multiple,r,!1)}},St=hf,Mt=Zr;var qS={usingClientEntryPoint:!1,Events:[Xo,bs,ol,Ze,Ye,hf]},oa={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$S={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=se(i),i===null?null:i.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||XS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Pn=Wl.inject($S),gt=Wl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS,On.createPortal=function(i,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(r))throw Error(t(200));return jS(i,r,null,a)},On.createRoot=function(i,r){if(!Mf(i))throw Error(t(299));var a=!1,f="",m=ng;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=xf(i,1,!1,null,null,a,!1,f,m),i[Fi]=r.current,Go(i.nodeType===8?i.parentNode:i),new Sf(r)},On.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=se(r),i=i===null?null:i.stateNode,i},On.flushSync=function(i){return Zr(i)},On.hydrate=function(i,r,a){if(!Hl(r))throw Error(t(200));return Gl(null,i,r,!0,a)},On.hydrateRoot=function(i,r,a){if(!Mf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,m=!1,_="",M=ng;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),r=eg(r,null,i,1,a??null,m,!1,_,M),i[Fi]=r.current,Go(i),f)for(i=0;i<f.length;i++)a=f[i],m=a._getVersion,m=m(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,m]:r.mutableSourceEagerHydrationData.push(a,m);return new Vl(r)},On.render=function(i,r,a){if(!Hl(r))throw Error(t(200));return Gl(null,i,r,!1,a)},On.unmountComponentAtNode=function(i){if(!Hl(i))throw Error(t(40));return i._reactRootContainer?(Zr(function(){Gl(null,null,i,!1,function(){i._reactRootContainer=null,i[Fi]=null})}),!0):!1},On.unstable_batchedUpdates=hf,On.unstable_renderSubtreeIntoContainer=function(i,r,a,f){if(!Hl(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Gl(i,r,a,!1,f)},On.version="18.3.1-next-f1338f8080-20240426",On}var fg;function sM(){if(fg)return wf.exports;fg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),wf.exports=rM(),wf.exports}var dg;function oM(){if(dg)return jl;dg=1;var n=sM();return jl.createRoot=n.createRoot,jl.hydrateRoot=n.hydrateRoot,jl}var aM=oM();const lM=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}];function uM({items:n=lM,className:e=""}){const[t,s]=Ae.useState(n[0]?.href??"#");return W.jsxs("nav",{className:`glass-nav ${e}`,children:[W.jsx("div",{className:"glass-filter"}),W.jsx("div",{className:"glass-overlay"}),W.jsx("div",{className:"glass-specular"}),W.jsx("div",{className:"glass-content",children:W.jsx("ul",{className:"nav-list",children:n.map(o=>W.jsx("li",{children:W.jsx("a",{href:o.href,className:`nav-item ${t===o.href?"active":""}`,onClick:l=>{o.href.startsWith("#")&&l.preventDefault(),s(o.href),o.href.startsWith("#")&&(window.location.hash=o.href)},children:o.label})},o.href))})})]})}/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fM=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),hg=n=>{const e=fM(n);return e.charAt(0).toUpperCase()+e.slice(1)},K0=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),dM=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=Ae.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:u,...c},d)=>Ae.createElement("svg",{ref:d,...hM,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:K0("lucide",o),...!l&&!dM(c)&&{"aria-hidden":"true"},...c},[...u.map(([h,p])=>Ae.createElement(h,p)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=(n,e)=>{const t=Ae.forwardRef(({className:s,...o},l)=>Ae.createElement(pM,{ref:l,iconNode:e,className:K0(`lucide-${cM(hg(n))}`,`lucide-${n}`,s),...o}));return t.displayName=hg(n),t};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],gM=ba("briefcase",mM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],pg=ba("code-xml",vM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xM=ba("file-text",_M);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],SM=ba("github",yM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],EM=ba("linkedin",MM),TM=()=>W.jsxs("div",{className:"fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6",children:[W.jsx("a",{href:"https://github.com/Mxxhxr",target:"_blank",rel:"noopener noreferrer",className:"text-neutral-400 hover:text-white transition",children:W.jsx(SM,{size:22})}),W.jsx("a",{href:"https://www.linkedin.com/in/maahir-vohra-669914234/",target:"_blank",rel:"noopener noreferrer",className:"text-neutral-400 hover:text-white transition",children:W.jsx(EM,{size:22})}),W.jsx("a",{href:"/Maahir_Vohra_Resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"text-neutral-400 hover:text-white transition",children:W.jsx(xM,{size:22})}),W.jsx("div",{className:"w-px h-20 bg-neutral-700 mt-2"})]});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="160",wM=0,mg=1,AM=2,Z0=1,CM=2,$i=3,Ir=0,Vn=1,Ki=2,Dr=0,po=1,gg=2,vg=3,_g=4,RM=5,us=100,bM=101,PM=102,xg=103,yg=104,LM=200,DM=201,NM=202,UM=203,yd=204,Sd=205,IM=206,FM=207,OM=208,kM=209,BM=210,zM=211,VM=212,HM=213,GM=214,WM=0,jM=1,XM=2,Tu=3,YM=4,qM=5,$M=6,KM=7,Q0=0,ZM=1,QM=2,Nr=0,JM=1,eE=2,tE=3,nE=4,iE=5,rE=6,J0=300,vo=301,_o=302,Md=303,Ed=304,Iu=306,Td=1e3,Mi=1001,wd=1002,Mn=1003,Sg=1004,Rf=1005,oi=1006,sE=1007,Sa=1008,Ur=1009,oE=1010,aE=1011,Jd=1012,e_=1013,Pr=1014,Lr=1015,Ma=1016,t_=1017,n_=1018,hs=1020,lE=1021,Ei=1023,uE=1024,cE=1025,ps=1026,xo=1027,fE=1028,i_=1029,dE=1030,r_=1031,s_=1033,bf=33776,Pf=33777,Lf=33778,Df=33779,Mg=35840,Eg=35841,Tg=35842,wg=35843,o_=36196,Ag=37492,Cg=37496,Rg=37808,bg=37809,Pg=37810,Lg=37811,Dg=37812,Ng=37813,Ug=37814,Ig=37815,Fg=37816,Og=37817,kg=37818,Bg=37819,zg=37820,Vg=37821,Nf=36492,Hg=36494,Gg=36495,hE=36283,Wg=36284,jg=36285,Xg=36286,a_=3e3,ms=3001,pE=3200,mE=3201,gE=0,vE=1,li="",fn="srgb",Ji="srgb-linear",eh="display-p3",Fu="display-p3-linear",wu="linear",Nt="srgb",Au="rec709",Cu="p3",Ws=7680,Yg=519,_E=512,xE=513,yE=514,l_=515,SE=516,ME=517,EE=518,TE=519,qg=35044,$g="300 es",Ad=1035,Zi=2e3,Ru=2001;class Eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=Math.PI/180,Cd=180/Math.PI;function Pa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]).toLowerCase()}function Bn(n,e,t){return Math.max(e,Math.min(t,n))}function wE(n,e){return(n%e+e)%e}function If(n,e,t){return(1-t)*n+t*e}function Kg(n){return(n&n-1)===0&&n!==0}function Rd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function la(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Bn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,s,o,l,u,c,d,h){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,c,d,h)}set(e,t,s,o,l,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=l,p[5]=d,p[6]=s,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],c=s[3],d=s[6],h=s[1],p=s[4],g=s[7],v=s[2],S=s[5],E=s[8],T=o[0],y=o[3],x=o[6],b=o[1],w=o[4],L=o[7],O=o[2],F=o[5],I=o[8];return l[0]=u*T+c*b+d*O,l[3]=u*y+c*w+d*F,l[6]=u*x+c*L+d*I,l[1]=h*T+p*b+g*O,l[4]=h*y+p*w+g*F,l[7]=h*x+p*L+g*I,l[2]=v*T+S*b+E*O,l[5]=v*y+S*w+E*F,l[8]=v*x+S*L+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-s*l*p+s*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,v=c*d-p*l,S=h*l-u*d,E=t*g+s*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(o*h-p*s)*T,e[2]=(c*s-o*u)*T,e[3]=v*T,e[4]=(p*t-o*d)*T,e[5]=(o*l-c*t)*T,e[6]=S*T,e[7]=(s*d-h*t)*T,e[8]=(u*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(s*d,s*h,-s*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ff.makeScale(e,t)),this}rotate(e){return this.premultiply(Ff.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ff=new pt;function u_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function AE(){const n=bu("canvas");return n.style.display="block",n}const Zg={};function ma(n){n in Zg||(Zg[n]=!0,console.warn(n))}const Qg=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jg=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xl={[Ji]:{transfer:wu,primaries:Au,toReference:n=>n,fromReference:n=>n},[fn]:{transfer:Nt,primaries:Au,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Fu]:{transfer:wu,primaries:Cu,toReference:n=>n.applyMatrix3(Jg),fromReference:n=>n.applyMatrix3(Qg)},[eh]:{transfer:Nt,primaries:Cu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Jg),fromReference:n=>n.applyMatrix3(Qg).convertLinearToSRGB()}},CE=new Set([Ji,Fu]),Tt={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!CE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const s=Xl[e].toReference,o=Xl[t].fromReference;return o(s(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xl[n].primaries},getTransfer:function(n){return n===li?wu:Xl[n].transfer}};function mo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Of(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let js;class c_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=bu("canvas")),js.width=e.width,js.height=e.height;const s=js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=mo(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(mo(t[s]/255)*255):t[s]=mo(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RE=0;class f_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Pa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(kf(o[u].image)):l.push(kf(o[u]))}else l=kf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function kf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?c_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bE=0;class Hn extends Eo{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,s=Mi,o=Mi,l=oi,u=Sa,c=Ei,d=Ur,h=Hn.DEFAULT_ANISOTROPY,p=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Pa(),this.name="",this.source=new f_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===ms?fn:li),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fn?ms:a_}set encoding(e){ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ms?fn:li}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=J0;Hn.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,s=0,o=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const d=e.elements,h=d[0],p=d[4],g=d[8],v=d[1],S=d[5],E=d[9],T=d[2],y=d[6],x=d[10];if(Math.abs(p-v)<.01&&Math.abs(g-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+T)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,L=(S+1)/2,O=(x+1)/2,F=(p+v)/4,I=(g+T)/4,re=(E+y)/4;return w>L&&w>O?w<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(w),o=F/s,l=I/s):L>O?L<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),s=F/o,l=re/o):O<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),s=I/l,o=re/l),this.set(s,o,l,t),this}let b=Math.sqrt((y-E)*(y-E)+(g-T)*(g-T)+(v-p)*(v-p));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(g-T)/b,this.z=(v-p)/b,this.w=Math.acos((h+S+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PE extends Eo{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const o={width:e,height:t,depth:1};s.encoding!==void 0&&(ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===ms?fn:li),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Hn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new f_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends PE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class d_ extends Hn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LE extends Hn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,c){let d=s[o+0],h=s[o+1],p=s[o+2],g=s[o+3];const v=l[u+0],S=l[u+1],E=l[u+2],T=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=T;return}if(g!==T||d!==v||h!==S||p!==E){let y=1-c;const x=d*v+h*S+p*E+g*T,b=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const O=Math.sqrt(w),F=Math.atan2(O,x*b);y=Math.sin(y*F)/O,c=Math.sin(c*F)/O}const L=c*b;if(d=d*y+v*L,h=h*y+S*L,p=p*y+E*L,g=g*y+T*L,y===1-c){const O=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=O,h*=O,p*=O,g*=O}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,o,l,u){const c=s[o],d=s[o+1],h=s[o+2],p=s[o+3],g=l[u],v=l[u+1],S=l[u+2],E=l[u+3];return e[t]=c*E+p*g+d*S-h*v,e[t+1]=d*E+p*v+h*g-c*S,e[t+2]=h*E+p*S+c*v-d*g,e[t+3]=p*E-c*g-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(s/2),p=c(o/2),g=c(l/2),v=d(s/2),S=d(o/2),E=d(l/2);switch(u){case"XYZ":this._x=v*p*g+h*S*E,this._y=h*S*g-v*p*E,this._z=h*p*E+v*S*g,this._w=h*p*g-v*S*E;break;case"YXZ":this._x=v*p*g+h*S*E,this._y=h*S*g-v*p*E,this._z=h*p*E-v*S*g,this._w=h*p*g+v*S*E;break;case"ZXY":this._x=v*p*g-h*S*E,this._y=h*S*g+v*p*E,this._z=h*p*E+v*S*g,this._w=h*p*g-v*S*E;break;case"ZYX":this._x=v*p*g-h*S*E,this._y=h*S*g+v*p*E,this._z=h*p*E-v*S*g,this._w=h*p*g+v*S*E;break;case"YZX":this._x=v*p*g+h*S*E,this._y=h*S*g+v*p*E,this._z=h*p*E-v*S*g,this._w=h*p*g-v*S*E;break;case"XZY":this._x=v*p*g-h*S*E,this._y=h*S*g-v*p*E,this._z=h*p*E+v*S*g,this._w=h*p*g+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],v=s+c+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(p-d)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(s>c&&s>g){const S=2*Math.sqrt(1+s-c-g);this._w=(p-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-s-g);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+g-s-c);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=s*p+u*c+o*h-l*d,this._y=o*p+u*d+l*c-s*h,this._z=l*p+u*h+s*d-o*c,this._w=u*p-s*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+s*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=s,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*s+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,v=Math.sin(t*p)/h;return this._w=u*g+this._w*v,this._x=s*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(o),s*Math.sin(l),s*Math.cos(l),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,s=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ev.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ev.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*s),p=2*(c*t-l*o),g=2*(l*s-u*t);return this.x=t+d*h+u*g-c*p,this.y=s+d*p+c*h-l*g,this.z=o+d*g+l*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-s*d,this.z=s*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Bn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bf=new ae,ev=new La;class Da{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(l,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Yl.copy(s.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),ql.subVectors(this.max,ua),Xs.subVectors(e.a,ua),Ys.subVectors(e.b,ua),qs.subVectors(e.c,ua),Er.subVectors(Ys,Xs),Tr.subVectors(qs,Ys),ts.subVectors(Xs,qs);let t=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-ts.z,ts.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,ts.z,0,-ts.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-ts.y,ts.x,0];return!zf(t,Xs,Ys,qs,ql)||(t=[1,0,0,0,1,0,0,0,1],!zf(t,Xs,Ys,qs,ql))?!1:($l.crossVectors(Er,Tr),t=[$l.x,$l.y,$l.z],zf(t,Xs,Ys,qs,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],vi=new ae,Yl=new Da,Xs=new ae,Ys=new ae,qs=new ae,Er=new ae,Tr=new ae,ts=new ae,ua=new ae,ql=new ae,$l=new ae,ns=new ae;function zf(n,e,t,s,o){for(let l=0,u=n.length-3;l<=u;l+=3){ns.fromArray(n,l);const c=o.x*Math.abs(ns.x)+o.y*Math.abs(ns.y)+o.z*Math.abs(ns.z),d=e.dot(ns),h=t.dot(ns),p=s.dot(ns);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const DE=new Da,ca=new ae,Vf=new ae;class th{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):DE.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const t=ca.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(ca,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Vf)),this.expandByPoint(ca.copy(e.center).sub(Vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new ae,Hf=new ae,Kl=new ae,wr=new ae,Gf=new ae,Zl=new ae,Wf=new ae;class NE{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Hf.copy(e).add(t).multiplyScalar(.5),Kl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(Hf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Kl),c=wr.dot(this.direction),d=-wr.dot(Kl),h=wr.lengthSq(),p=Math.abs(1-u*u);let g,v,S,E;if(p>0)if(g=u*d-c,v=u*c-d,E=l*p,g>=0)if(v>=-E)if(v<=E){const T=1/p;g*=T,v*=T,S=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v<=-E?(g=Math.max(0,-(-u*l+c)),v=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h):v<=E?(g=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+h):(g=Math.max(0,-(u*l+c)),v=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Hf).addScaledVector(Kl,v),S}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const s=ji.dot(this.direction),o=ji.dot(ji)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=s-u,d=s+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(l=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(l=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),s>d||c>o)||((c>s||s!==s)&&(s=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,s,o,l){Gf.subVectors(t,e),Zl.subVectors(s,e),Wf.crossVectors(Gf,Zl);let u=this.direction.dot(Wf),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;wr.subVectors(this.origin,e);const d=c*this.direction.dot(Zl.crossVectors(wr,Zl));if(d<0)return null;const h=c*this.direction.dot(Gf.cross(wr));if(h<0||d+h>u)return null;const p=-c*wr.dot(Wf);return p<0?null:this.at(p/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,t,s,o,l,u,c,d,h,p,g,v,S,E,T,y){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,c,d,h,p,g,v,S,E,T,y)}set(e,t,s,o,l,u,c,d,h,p,g,v,S,E,T,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=u,x[9]=c,x[13]=d,x[2]=h,x[6]=p,x[10]=g,x[14]=v,x[3]=S,x[7]=E,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/$s.setFromMatrixColumn(e,0).length(),l=1/$s.setFromMatrixColumn(e,1).length(),u=1/$s.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),c=Math.sin(s),d=Math.cos(o),h=Math.sin(o),p=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*p,S=u*g,E=c*p,T=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=S+E*h,t[5]=v-T*h,t[9]=-c*d,t[2]=T-v*h,t[6]=E+S*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*p,S=d*g,E=h*p,T=h*g;t[0]=v+T*c,t[4]=E*c-S,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=S*c-E,t[6]=T+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*p,S=d*g,E=h*p,T=h*g;t[0]=v-T*c,t[4]=-u*g,t[8]=E+S*c,t[1]=S+E*c,t[5]=u*p,t[9]=T-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*p,S=u*g,E=c*p,T=c*g;t[0]=d*p,t[4]=E*h-S,t[8]=v*h+T,t[1]=d*g,t[5]=T*h+v,t[9]=S*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,S=u*h,E=c*d,T=c*h;t[0]=d*p,t[4]=T-v*g,t[8]=E*g+S,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*g+E,t[10]=v-T*g}else if(e.order==="XZY"){const v=u*d,S=u*h,E=c*d,T=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=v*g+T,t[5]=u*p,t[9]=S*g-E,t[2]=E*g-S,t[6]=c*p,t[10]=T*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UE,e,IE)}lookAt(e,t,s){const o=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ar.crossVectors(s,Yn),Ar.lengthSq()===0&&(Math.abs(s.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ar.crossVectors(s,Yn)),Ar.normalize(),Ql.crossVectors(Yn,Ar),o[0]=Ar.x,o[4]=Ql.x,o[8]=Yn.x,o[1]=Ar.y,o[5]=Ql.y,o[9]=Yn.y,o[2]=Ar.z,o[6]=Ql.z,o[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],c=s[4],d=s[8],h=s[12],p=s[1],g=s[5],v=s[9],S=s[13],E=s[2],T=s[6],y=s[10],x=s[14],b=s[3],w=s[7],L=s[11],O=s[15],F=o[0],I=o[4],re=o[8],C=o[12],D=o[1],ue=o[5],ce=o[9],ve=o[13],H=o[2],X=o[6],te=o[10],Q=o[14],z=o[3],K=o[7],j=o[11],N=o[15];return l[0]=u*F+c*D+d*H+h*z,l[4]=u*I+c*ue+d*X+h*K,l[8]=u*re+c*ce+d*te+h*j,l[12]=u*C+c*ve+d*Q+h*N,l[1]=p*F+g*D+v*H+S*z,l[5]=p*I+g*ue+v*X+S*K,l[9]=p*re+g*ce+v*te+S*j,l[13]=p*C+g*ve+v*Q+S*N,l[2]=E*F+T*D+y*H+x*z,l[6]=E*I+T*ue+y*X+x*K,l[10]=E*re+T*ce+y*te+x*j,l[14]=E*C+T*ve+y*Q+x*N,l[3]=b*F+w*D+L*H+O*z,l[7]=b*I+w*ue+L*X+O*K,l[11]=b*re+w*ce+L*te+O*j,l[15]=b*C+w*ve+L*Q+O*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],v=e[10],S=e[14],E=e[3],T=e[7],y=e[11],x=e[15];return E*(+l*d*g-o*h*g-l*c*v+s*h*v+o*c*S-s*d*S)+T*(+t*d*S-t*h*v+l*u*v-o*u*S+o*h*p-l*d*p)+y*(+t*h*g-t*c*S-l*u*g+s*u*S+l*c*p-s*h*p)+x*(-o*c*p-t*d*g+t*c*v+o*u*g-s*u*v+s*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],v=e[10],S=e[11],E=e[12],T=e[13],y=e[14],x=e[15],b=g*y*h-T*v*h+T*d*S-c*y*S-g*d*x+c*v*x,w=E*v*h-p*y*h-E*d*S+u*y*S+p*d*x-u*v*x,L=p*T*h-E*g*h+E*c*S-u*T*S-p*c*x+u*g*x,O=E*g*d-p*T*d-E*c*v+u*T*v+p*c*y-u*g*y,F=t*b+s*w+o*L+l*O;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=b*I,e[1]=(T*v*l-g*y*l-T*o*S+s*y*S+g*o*x-s*v*x)*I,e[2]=(c*y*l-T*d*l+T*o*h-s*y*h-c*o*x+s*d*x)*I,e[3]=(g*d*l-c*v*l-g*o*h+s*v*h+c*o*S-s*d*S)*I,e[4]=w*I,e[5]=(p*y*l-E*v*l+E*o*S-t*y*S-p*o*x+t*v*x)*I,e[6]=(E*d*l-u*y*l-E*o*h+t*y*h+u*o*x-t*d*x)*I,e[7]=(u*v*l-p*d*l+p*o*h-t*v*h-u*o*S+t*d*S)*I,e[8]=L*I,e[9]=(E*g*l-p*T*l-E*s*S+t*T*S+p*s*x-t*g*x)*I,e[10]=(u*T*l-E*c*l+E*s*h-t*T*h-u*s*x+t*c*x)*I,e[11]=(p*c*l-u*g*l-p*s*h+t*g*h+u*s*S-t*c*S)*I,e[12]=O*I,e[13]=(p*T*o-E*g*o+E*s*v-t*T*v-p*s*y+t*g*y)*I,e[14]=(E*c*o-u*T*o-E*s*d+t*T*d+u*s*y-t*c*y)*I,e[15]=(u*g*o-p*c*o+p*s*d-t*g*d-u*s*v+t*c*v)*I,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,c=e.y,d=e.z,h=l*u,p=l*c;return this.set(h*u+s,h*c-o*d,h*d+o*c,0,h*c+o*d,p*c+s,p*d-o*u,0,h*d-o*c,p*d+o*u,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,p=u+u,g=c+c,v=l*h,S=l*p,E=l*g,T=u*p,y=u*g,x=c*g,b=d*h,w=d*p,L=d*g,O=s.x,F=s.y,I=s.z;return o[0]=(1-(T+x))*O,o[1]=(S+L)*O,o[2]=(E-w)*O,o[3]=0,o[4]=(S-L)*F,o[5]=(1-(v+x))*F,o[6]=(y+b)*F,o[7]=0,o[8]=(E+w)*I,o[9]=(y-b)*I,o[10]=(1-(v+T))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=$s.set(o[0],o[1],o[2]).length();const u=$s.set(o[4],o[5],o[6]).length(),c=$s.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],_i.copy(this);const h=1/l,p=1/u,g=1/c;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=p,_i.elements[5]*=p,_i.elements[6]*=p,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,t.setFromRotationMatrix(_i),s.x=l,s.y=u,s.z=c,this}makePerspective(e,t,s,o,l,u,c=Zi){const d=this.elements,h=2*l/(t-e),p=2*l/(s-o),g=(t+e)/(t-e),v=(s+o)/(s-o);let S,E;if(c===Zi)S=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(c===Ru)S=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,o,l,u,c=Zi){const d=this.elements,h=1/(t-e),p=1/(s-o),g=1/(u-l),v=(t+e)*h,S=(s+o)*p;let E,T;if(c===Zi)E=(u+l)*g,T=-2*g;else if(c===Ru)E=l*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=T,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const $s=new ae,_i=new pn,UE=new ae(0,0,0),IE=new ae(1,1,1),Ar=new ae,Ql=new ae,Yn=new ae,tv=new pn,nv=new La;class Ou{constructor(e=0,t=0,s=0,o=Ou.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],p=o[9],g=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Bn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tv,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nv.setFromEuler(this),this.setFromQuaternion(nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ou.DEFAULT_ORDER="XYZ";class h_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FE=0;const iv=new ae,Ks=new La,Xi=new pn,Jl=new ae,fa=new ae,OE=new ae,kE=new La,rv=new ae(1,0,0),sv=new ae(0,1,0),ov=new ae(0,0,1),BE={type:"added"},zE={type:"removed"};class $n extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new ae,t=new Ou,s=new La,o=new ae(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new pt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(rv,e)}rotateY(e){return this.rotateOnAxis(sv,e)}rotateZ(e){return this.rotateOnAxis(ov,e)}translateOnAxis(e,t){return iv.copy(e).applyQuaternion(this.quaternion),this.position.add(iv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rv,e)}translateY(e){return this.translateOnAxis(sv,e)}translateZ(e){return this.translateOnAxis(ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Jl.copy(e):Jl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(fa,Jl,this.up):Xi.lookAt(Jl,fa,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Ks.setFromRotationMatrix(Xi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(BE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,OE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,kE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++){const c=o[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);c.length>0&&(s.geometries=c),d.length>0&&(s.materials=d),h.length>0&&(s.textures=h),p.length>0&&(s.images=p),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}$n.DEFAULT_UP=new ae(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new ae,Yi=new ae,jf=new ae,qi=new ae,Zs=new ae,Qs=new ae,av=new ae,Xf=new ae,Yf=new ae,qf=new ae;let eu=!1;class Si{constructor(e=new ae,t=new ae,s=new ae){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),xi.subVectors(e,t),o.cross(xi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){xi.subVectors(o,t),Yi.subVectors(s,t),jf.subVectors(e,t);const u=xi.dot(xi),c=xi.dot(Yi),d=xi.dot(jf),h=Yi.dot(Yi),p=Yi.dot(jf),g=u*h-c*c;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(h*d-c*p)*v,E=(u*p-c*d)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getUV(e,t,s,o,l,u,c,d){return eu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eu=!0),this.getInterpolation(e,t,s,o,l,u,c,d)}static getInterpolation(e,t,s,o,l,u,c,d){return this.getBarycoord(e,t,s,o,qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,qi.x),d.addScaledVector(u,qi.y),d.addScaledVector(c,qi.z),d)}static isFrontFacing(e,t,s,o){return xi.subVectors(s,t),Yi.subVectors(e,t),xi.cross(Yi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),xi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,s,o,l){return eu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eu=!0),Si.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}getInterpolation(e,t,s,o,l){return Si.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,c;Zs.subVectors(o,s),Qs.subVectors(l,s),Xf.subVectors(e,s);const d=Zs.dot(Xf),h=Qs.dot(Xf);if(d<=0&&h<=0)return t.copy(s);Yf.subVectors(e,o);const p=Zs.dot(Yf),g=Qs.dot(Yf);if(p>=0&&g<=p)return t.copy(o);const v=d*g-p*h;if(v<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(s).addScaledVector(Zs,u);qf.subVectors(e,l);const S=Zs.dot(qf),E=Qs.dot(qf);if(E>=0&&S<=E)return t.copy(l);const T=S*h-d*E;if(T<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(s).addScaledVector(Qs,c);const y=p*E-S*g;if(y<=0&&g-p>=0&&S-E>=0)return av.subVectors(l,o),c=(g-p)/(g-p+(S-E)),t.copy(o).addScaledVector(av,c);const x=1/(y+T+v);return u=T*x,c=v*x,t.copy(s).addScaledVector(Zs,u).addScaledVector(Qs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},tu={h:0,s:0,l:0};function $f(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class wt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Tt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Tt.workingColorSpace){if(e=wE(e,1),t=Bn(t,0,1),s=Bn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=$f(u,l,e+1/3),this.g=$f(u,l,e),this.b=$f(u,l,e-1/3)}return Tt.toWorkingColorSpace(this,o),this}setStyle(e,t=fn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const s=p_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}copyLinearToSRGB(e){return this.r=Of(e.r),this.g=Of(e.g),this.b=Of(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Tt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(Bn(Sn.r*255,0,255))*65536+Math.round(Bn(Sn.g*255,0,255))*256+Math.round(Bn(Sn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(Sn.copy(this),t);const s=Sn.r,o=Sn.g,l=Sn.b,u=Math.max(s,o,l),c=Math.min(s,o,l);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case s:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-s)/g+2;break;case l:d=(s-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=fn){Tt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,s=Sn.g,o=Sn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(tu);const s=If(Cr.h,tu.h,t),o=If(Cr.s,tu.s,t),l=If(Cr.l,tu.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new wt;wt.NAMES=p_;let VE=0;class ku extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=po,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=Sd,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Tu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(s.blending=this.blending),this.side!==Ir&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==yd&&(s.blendSrc=this.blendSrc),this.blendDst!==Sd&&(s.blendDst=this.blendDst),this.blendEquation!==us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Tu&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class m_ extends ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new ae,nu=new At;class Pi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=qg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Lr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)nu.fromBufferAttribute(this,t),nu.applyMatrix3(e),this.setXY(t,nu.x,nu.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=la(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=la(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=la(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=la(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=la(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),s=kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),s=kn(s,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),s=kn(s,this.array),o=kn(o,this.array),l=kn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qg&&(e.usage=this.usage),e}}class g_ extends Pi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class v_ extends Pi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class gs extends Pi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let HE=0;const ii=new pn,Kf=new $n,Js=new ae,qn=new Da,da=new Da,an=new ae;class ys extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u_(e)?v_:g_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new pt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,s){return ii.makeTranslation(e,t,s),this.applyMatrix4(ii),this}scale(e,t,s){return ii.makeScale(e,t,s),this.applyMatrix4(ii),this}lookAt(e){return Kf.lookAt(e),Kf.updateMatrix(),this.applyMatrix4(Kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new gs(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];qn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new th);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ae,1/0);return}if(e){const s=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];da.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors(qn.min,da.min),qn.expandByPoint(an),an.addVectors(qn.max,da.max),qn.expandByPoint(an)):(qn.expandByPoint(da.min),qn.expandByPoint(da.max))}qn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(an));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)an.fromBufferAttribute(c,h),d&&(Js.fromBufferAttribute(e,h),an.add(Js)),o=Math.max(o,s.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=t.position.array,l=t.normal.array,u=t.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*c),4));const d=this.getAttribute("tangent").array,h=[],p=[];for(let D=0;D<c;D++)h[D]=new ae,p[D]=new ae;const g=new ae,v=new ae,S=new ae,E=new At,T=new At,y=new At,x=new ae,b=new ae;function w(D,ue,ce){g.fromArray(o,D*3),v.fromArray(o,ue*3),S.fromArray(o,ce*3),E.fromArray(u,D*2),T.fromArray(u,ue*2),y.fromArray(u,ce*2),v.sub(g),S.sub(g),T.sub(E),y.sub(E);const ve=1/(T.x*y.y-y.x*T.y);isFinite(ve)&&(x.copy(v).multiplyScalar(y.y).addScaledVector(S,-T.y).multiplyScalar(ve),b.copy(S).multiplyScalar(T.x).addScaledVector(v,-y.x).multiplyScalar(ve),h[D].add(x),h[ue].add(x),h[ce].add(x),p[D].add(b),p[ue].add(b),p[ce].add(b))}let L=this.groups;L.length===0&&(L=[{start:0,count:s.length}]);for(let D=0,ue=L.length;D<ue;++D){const ce=L[D],ve=ce.start,H=ce.count;for(let X=ve,te=ve+H;X<te;X+=3)w(s[X+0],s[X+1],s[X+2])}const O=new ae,F=new ae,I=new ae,re=new ae;function C(D){I.fromArray(l,D*3),re.copy(I);const ue=h[D];O.copy(ue),O.sub(I.multiplyScalar(I.dot(ue))).normalize(),F.crossVectors(re,ue);const ve=F.dot(p[D])<0?-1:1;d[D*4]=O.x,d[D*4+1]=O.y,d[D*4+2]=O.z,d[D*4+3]=ve}for(let D=0,ue=L.length;D<ue;++D){const ce=L[D],ve=ce.start,H=ce.count;for(let X=ve,te=ve+H;X<te;X+=3)C(s[X+0]),C(s[X+1]),C(s[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const o=new ae,l=new ae,u=new ae,c=new ae,d=new ae,h=new ae,p=new ae,g=new ae;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,y),p.subVectors(u,l),g.subVectors(o,l),p.cross(g),c.fromBufferAttribute(s,E),d.fromBufferAttribute(s,T),h.fromBufferAttribute(s,y),c.add(p),d.add(p),h.add(p),s.setXYZ(E,c.x,c.y,c.z),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,l),g.subVectors(o,l),p.cross(g),s.setXYZ(v+0,p.x,p.y,p.z),s.setXYZ(v+1,p.x,p.y,p.z),s.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,v=new h.constructor(d.length*p);let S=0,E=0;for(let T=0,y=d.length;T<y;T++){c.isInterleavedBufferAttribute?S=d[T]*c.data.stride+c.offset:S=d[T]*p;for(let x=0;x<p;x++)v[E++]=h[S++]}return new Pi(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ys,s=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,s);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let p=0,g=h.length;p<g;p++){const v=h[p],S=e(v,s);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const h=s[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];p.push(S.toJSON(e.data))}p.length>0&&(o[d]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const l=e.morphAttributes;for(const h in l){const p=[],g=l[h];for(let v=0,S=g.length;v<S;v++)p.push(g[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lv=new pn,is=new NE,iu=new th,uv=new ae,eo=new ae,to=new ae,no=new ae,Zf=new ae,ru=new ae,su=new At,ou=new At,au=new At,cv=new ae,fv=new ae,dv=new ae,lu=new ae,uu=new ae;class Qi extends $n{constructor(e=new ys,t=new m_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){ru.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const p=c[d],g=l[d];p!==0&&(Zf.fromBufferAttribute(g,e),u?ru.addScaledVector(Zf,p):ru.addScaledVector(Zf.sub(t),p))}t.add(ru)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(iu.containsPoint(is.origin)===!1&&(is.intersectSphere(iu,uv)===null||is.origin.distanceToSquared(uv)>(e.far-e.near)**2))&&(lv.copy(l).invert(),is.copy(e.ray).applyMatrix4(lv),!(s.boundingBox!==null&&is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,p=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const y=v[E],x=u[y.materialIndex],b=Math.max(y.start,S.start),w=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let L=b,O=w;L<O;L+=3){const F=c.getX(L),I=c.getX(L+1),re=c.getX(L+2);o=cu(this,x,e,s,h,p,g,F,I,re),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(c.count,S.start+S.count);for(let y=E,x=T;y<x;y+=3){const b=c.getX(y),w=c.getX(y+1),L=c.getX(y+2);o=cu(this,u,e,s,h,p,g,b,w,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const y=v[E],x=u[y.materialIndex],b=Math.max(y.start,S.start),w=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let L=b,O=w;L<O;L+=3){const F=L,I=L+1,re=L+2;o=cu(this,x,e,s,h,p,g,F,I,re),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=E,x=T;y<x;y+=3){const b=y,w=y+1,L=y+2;o=cu(this,u,e,s,h,p,g,b,w,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function GE(n,e,t,s,o,l,u,c){let d;if(e.side===Vn?d=s.intersectTriangle(u,l,o,!0,c):d=s.intersectTriangle(o,l,u,e.side===Ir,c),d===null)return null;uu.copy(c),uu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(uu);return h<t.near||h>t.far?null:{distance:h,point:uu.clone(),object:n}}function cu(n,e,t,s,o,l,u,c,d,h){n.getVertexPosition(c,eo),n.getVertexPosition(d,to),n.getVertexPosition(h,no);const p=GE(n,e,t,s,eo,to,no,lu);if(p){o&&(su.fromBufferAttribute(o,c),ou.fromBufferAttribute(o,d),au.fromBufferAttribute(o,h),p.uv=Si.getInterpolation(lu,eo,to,no,su,ou,au,new At)),l&&(su.fromBufferAttribute(l,c),ou.fromBufferAttribute(l,d),au.fromBufferAttribute(l,h),p.uv1=Si.getInterpolation(lu,eo,to,no,su,ou,au,new At),p.uv2=p.uv1),u&&(cv.fromBufferAttribute(u,c),fv.fromBufferAttribute(u,d),dv.fromBufferAttribute(u,h),p.normal=Si.getInterpolation(lu,eo,to,no,cv,fv,dv,new ae),p.normal.dot(s.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new ae,materialIndex:0};Si.getNormal(eo,to,no,g.normal),p.face=g}return p}class Na extends ys{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],p=[],g=[];let v=0,S=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(d),this.setAttribute("position",new gs(h,3)),this.setAttribute("normal",new gs(p,3)),this.setAttribute("uv",new gs(g,2));function E(T,y,x,b,w,L,O,F,I,re,C){const D=L/I,ue=O/re,ce=L/2,ve=O/2,H=F/2,X=I+1,te=re+1;let Q=0,z=0;const K=new ae;for(let j=0;j<te;j++){const N=j*ue-ve;for(let G=0;G<X;G++){const q=G*D-ce;K[T]=q*b,K[y]=N*w,K[x]=H,h.push(K.x,K.y,K.z),K[T]=0,K[y]=0,K[x]=F>0?1:-1,p.push(K.x,K.y,K.z),g.push(G/I),g.push(1-j/re),Q+=1}}for(let j=0;j<re;j++)for(let N=0;N<I;N++){const G=v+N+X*j,q=v+N+X*(j+1),le=v+(N+1)+X*(j+1),de=v+(N+1)+X*j;d.push(G,q,de),d.push(q,le,de),z+=6}c.addGroup(S,z,C),S+=z,v+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(n){const e={};for(const t in n){e[t]={};for(const s in n[t]){const o=n[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Rn(n){const e={};for(let t=0;t<n.length;t++){const s=yo(n[t]);for(const o in s)e[o]=s[o]}return e}function WE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function __(n){return n.getRenderTarget()===null?n.outputColorSpace:Tt.workingColorSpace}const jE={clone:yo,merge:Rn};var XE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XE,this.fragmentShader=YE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=WE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class x_ extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ai extends x_{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cd*2*Math.atan(Math.tan(Uf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uf*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*s/h,o*=u.width/d,s*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const io=-90,ro=1;class qE extends $n{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai(io,ro,e,t);o.layers=this.layers,this.add(o);const l=new ai(io,ro,e,t);l.layers=this.layers,this.add(l);const u=new ai(io,ro,e,t);u.layers=this.layers,this.add(u);const c=new ai(io,ro,e,t);c.layers=this.layers,this.add(c);const d=new ai(io,ro,e,t);d.layers=this.layers,this.add(d);const h=new ai(io,ro,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ru)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,u),e.setRenderTarget(s,2,o),e.render(t,c),e.setRenderTarget(s,3,o),e.render(t,d),e.setRenderTarget(s,4,o),e.render(t,h),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,o),e.render(t,p),e.setRenderTarget(g,v,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class y_ extends Hn{constructor(e,t,s,o,l,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:vo,super(e,t,s,o,l,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $E extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];t.encoding!==void 0&&(ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ms?fn:li),this.texture=new y_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Na(5,5,5),l=new Fr({name:"CubemapFromEquirect",uniforms:yo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Dr});l.uniforms.tEquirect.value=t;const u=new Qi(o,l),c=t.minFilter;return t.minFilter===Sa&&(t.minFilter=oi),new qE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}const Qf=new ae,KE=new ae,ZE=new pt;class os{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Qf.subVectors(s,t).cross(KE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Qf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||ZE.getNormalMatrix(e),o=this.coplanarPoint(Qf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new th,fu=new ae;class S_{constructor(e=new os,t=new os,s=new os,o=new os,l=new os,u=new os){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(s),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Zi){const s=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],d=o[3],h=o[4],p=o[5],g=o[6],v=o[7],S=o[8],E=o[9],T=o[10],y=o[11],x=o[12],b=o[13],w=o[14],L=o[15];if(s[0].setComponents(d-l,v-h,y-S,L-x).normalize(),s[1].setComponents(d+l,v+h,y+S,L+x).normalize(),s[2].setComponents(d+u,v+p,y+E,L+b).normalize(),s[3].setComponents(d-u,v-p,y-E,L-b).normalize(),s[4].setComponents(d-c,v-g,y-T,L-w).normalize(),t===Zi)s[5].setComponents(d+c,v+g,y+T,L+w).normalize();else if(t===Ru)s[5].setComponents(c,g,T,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(fu.x=o.normal.x>0?e.max.x:e.min.x,fu.y=o.normal.y>0?e.max.y:e.min.y,fu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(fu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function M_(){let n=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function QE(n,e){const t=e.isWebGL2,s=new WeakMap;function o(h,p){const g=h.array,v=h.usage,S=g.byteLength,E=n.createBuffer();n.bindBuffer(p,E),n.bufferData(p,g,v),h.onUploadCallback();let T;if(g instanceof Float32Array)T=n.FLOAT;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)T=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=n.UNSIGNED_SHORT;else if(g instanceof Int16Array)T=n.SHORT;else if(g instanceof Uint32Array)T=n.UNSIGNED_INT;else if(g instanceof Int32Array)T=n.INT;else if(g instanceof Int8Array)T=n.BYTE;else if(g instanceof Uint8Array)T=n.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)T=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:T,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:S}}function l(h,p,g){const v=p.array,S=p._updateRange,E=p.updateRanges;if(n.bindBuffer(g,h),S.count===-1&&E.length===0&&n.bufferSubData(g,0,v),E.length!==0){for(let T=0,y=E.length;T<y;T++){const x=E[T];t?n.bufferSubData(g,x.start*v.BYTES_PER_ELEMENT,v,x.start,x.count):n.bufferSubData(g,x.start*v.BYTES_PER_ELEMENT,v.subarray(x.start,x.start+x.count))}p.clearUpdateRanges()}S.count!==-1&&(t?n.bufferSubData(g,S.offset*v.BYTES_PER_ELEMENT,v,S.offset,S.count):n.bufferSubData(g,S.offset*v.BYTES_PER_ELEMENT,v.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),s.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=s.get(h);p&&(n.deleteBuffer(p.buffer),s.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const v=s.get(h);(!v||v.version<h.version)&&s.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=s.get(h);if(g===void 0)s.set(h,o(h,p));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(g.buffer,h,p),g.version=h.version}}return{get:u,remove:c,update:d}}class Bu extends ys{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(s),d=Math.floor(o),h=c+1,p=d+1,g=e/c,v=t/d,S=[],E=[],T=[],y=[];for(let x=0;x<p;x++){const b=x*v-u;for(let w=0;w<h;w++){const L=w*g-l;E.push(L,-b,0),T.push(0,0,1),y.push(w/c),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let b=0;b<c;b++){const w=b+h*x,L=b+h*(x+1),O=b+1+h*(x+1),F=b+1+h*x;S.push(w,L,F),S.push(L,O,F)}this.setIndex(S),this.setAttribute("position",new gs(E,3)),this.setAttribute("normal",new gs(T,3)),this.setAttribute("uv",new gs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eT=`#ifdef USE_ALPHAHASH
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
#endif`,tT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sT=`#ifdef USE_AOMAP
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
#endif`,oT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,lT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dT=`#ifdef USE_IRIDESCENCE
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
#endif`,hT=`#ifdef USE_BUMPMAP
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
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,MT=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,ET=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TT=`vec3 transformedNormal = objectNormal;
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
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,LT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zT=`#ifdef USE_GRADIENTMAP
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
}`,VT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,HT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jT=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,XT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,YT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZT=`PhysicalMaterial material;
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
#endif`,QT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,JT=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ew=`#if defined( RE_IndirectDiffuse )
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
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ow=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uw=`#if defined( USE_POINTS_UV )
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
#endif`,cw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sw=`#ifdef USE_NORMALMAP
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
#endif`,Mw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ww=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Aw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Rw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ow=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bw=`#ifdef USE_SKINNING
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
#endif`,zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vw=`#ifdef USE_SKINNING
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
#endif`,Hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jw=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xw=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jw=`uniform sampler2D t2D;
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
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
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
}`,sA=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,oA=`#define DISTANCE
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
}`,aA=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`#include <common>
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
}`,hA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gA=`#define MATCAP
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
}`,vA=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_A=`#define NORMAL
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
}`,xA=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yA=`#define PHONG
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
}`,SA=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,MA=`#define STANDARD
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
}`,EA=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,TA=`#define TOON
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
}`,wA=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,AA=`uniform float size;
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
}`,CA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,RA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,bA=`uniform vec3 color;
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
}`,PA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,LA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ct={alphahash_fragment:JE,alphahash_pars_fragment:eT,alphamap_fragment:tT,alphamap_pars_fragment:nT,alphatest_fragment:iT,alphatest_pars_fragment:rT,aomap_fragment:sT,aomap_pars_fragment:oT,batching_pars_vertex:aT,batching_vertex:lT,begin_vertex:uT,beginnormal_vertex:cT,bsdfs:fT,iridescence_fragment:dT,bumpmap_pars_fragment:hT,clipping_planes_fragment:pT,clipping_planes_pars_fragment:mT,clipping_planes_pars_vertex:gT,clipping_planes_vertex:vT,color_fragment:_T,color_pars_fragment:xT,color_pars_vertex:yT,color_vertex:ST,common:MT,cube_uv_reflection_fragment:ET,defaultnormal_vertex:TT,displacementmap_pars_vertex:wT,displacementmap_vertex:AT,emissivemap_fragment:CT,emissivemap_pars_fragment:RT,colorspace_fragment:bT,colorspace_pars_fragment:PT,envmap_fragment:LT,envmap_common_pars_fragment:DT,envmap_pars_fragment:NT,envmap_pars_vertex:UT,envmap_physical_pars_fragment:XT,envmap_vertex:IT,fog_vertex:FT,fog_pars_vertex:OT,fog_fragment:kT,fog_pars_fragment:BT,gradientmap_pars_fragment:zT,lightmap_fragment:VT,lightmap_pars_fragment:HT,lights_lambert_fragment:GT,lights_lambert_pars_fragment:WT,lights_pars_begin:jT,lights_toon_fragment:YT,lights_toon_pars_fragment:qT,lights_phong_fragment:$T,lights_phong_pars_fragment:KT,lights_physical_fragment:ZT,lights_physical_pars_fragment:QT,lights_fragment_begin:JT,lights_fragment_maps:ew,lights_fragment_end:tw,logdepthbuf_fragment:nw,logdepthbuf_pars_fragment:iw,logdepthbuf_pars_vertex:rw,logdepthbuf_vertex:sw,map_fragment:ow,map_pars_fragment:aw,map_particle_fragment:lw,map_particle_pars_fragment:uw,metalnessmap_fragment:cw,metalnessmap_pars_fragment:fw,morphcolor_vertex:dw,morphnormal_vertex:hw,morphtarget_pars_vertex:pw,morphtarget_vertex:mw,normal_fragment_begin:gw,normal_fragment_maps:vw,normal_pars_fragment:_w,normal_pars_vertex:xw,normal_vertex:yw,normalmap_pars_fragment:Sw,clearcoat_normal_fragment_begin:Mw,clearcoat_normal_fragment_maps:Ew,clearcoat_pars_fragment:Tw,iridescence_pars_fragment:ww,opaque_fragment:Aw,packing:Cw,premultiplied_alpha_fragment:Rw,project_vertex:bw,dithering_fragment:Pw,dithering_pars_fragment:Lw,roughnessmap_fragment:Dw,roughnessmap_pars_fragment:Nw,shadowmap_pars_fragment:Uw,shadowmap_pars_vertex:Iw,shadowmap_vertex:Fw,shadowmask_pars_fragment:Ow,skinbase_vertex:kw,skinning_pars_vertex:Bw,skinning_vertex:zw,skinnormal_vertex:Vw,specularmap_fragment:Hw,specularmap_pars_fragment:Gw,tonemapping_fragment:Ww,tonemapping_pars_fragment:jw,transmission_fragment:Xw,transmission_pars_fragment:Yw,uv_pars_fragment:qw,uv_pars_vertex:$w,uv_vertex:Kw,worldpos_vertex:Zw,background_vert:Qw,background_frag:Jw,backgroundCube_vert:eA,backgroundCube_frag:tA,cube_vert:nA,cube_frag:iA,depth_vert:rA,depth_frag:sA,distanceRGBA_vert:oA,distanceRGBA_frag:aA,equirect_vert:lA,equirect_frag:uA,linedashed_vert:cA,linedashed_frag:fA,meshbasic_vert:dA,meshbasic_frag:hA,meshlambert_vert:pA,meshlambert_frag:mA,meshmatcap_vert:gA,meshmatcap_frag:vA,meshnormal_vert:_A,meshnormal_frag:xA,meshphong_vert:yA,meshphong_frag:SA,meshphysical_vert:MA,meshphysical_frag:EA,meshtoon_vert:TA,meshtoon_frag:wA,points_vert:AA,points_frag:CA,shadow_vert:RA,shadow_frag:bA,sprite_vert:PA,sprite_frag:LA},we={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},bi={basic:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Rn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Rn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Rn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Rn([we.points,we.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Rn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Rn([we.common,we.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Rn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Rn([we.sprite,we.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Rn([we.common,we.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Rn([we.lights,we.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};bi.physical={uniforms:Rn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const du={r:0,b:0,g:0};function DA(n,e,t,s,o,l,u){const c=new wt(0);let d=l===!0?0:1,h,p,g=null,v=0,S=null;function E(y,x){let b=!1,w=x.isScene===!0?x.background:null;w&&w.isTexture&&(w=(x.backgroundBlurriness>0?t:e).get(w)),w===null?T(c,d):w&&w.isColor&&(T(w,1),b=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Iu)?(p===void 0&&(p=new Qi(new Na(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:yo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(w.colorSpace)!==Nt,(g!==w||v!==w.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,g=w,v=w.version,S=n.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Qi(new Bu(2,2),new Fr({name:"BackgroundMaterial",uniforms:yo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(w.colorSpace)!==Nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,g=w,v=w.version,S=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function T(y,x){y.getRGB(du,__(n)),s.buffers.color.setClear(du.r,du.g,du.b,x,u)}return{getClearColor:function(){return c},setClearColor:function(y,x=1){c.set(y),d=x,T(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(y){d=y,T(c,d)},render:E}}function NA(n,e,t,s){const o=n.getParameter(n.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),u=s.isWebGL2||l!==null,c={},d=y(null);let h=d,p=!1;function g(H,X,te,Q,z){let K=!1;if(u){const j=T(Q,te,X);h!==j&&(h=j,S(h.object)),K=x(H,Q,te,z),K&&b(H,Q,te,z)}else{const j=X.wireframe===!0;(h.geometry!==Q.id||h.program!==te.id||h.wireframe!==j)&&(h.geometry=Q.id,h.program=te.id,h.wireframe=j,K=!0)}z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(K||p)&&(p=!1,re(H,X,te,Q),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function v(){return s.isWebGL2?n.createVertexArray():l.createVertexArrayOES()}function S(H){return s.isWebGL2?n.bindVertexArray(H):l.bindVertexArrayOES(H)}function E(H){return s.isWebGL2?n.deleteVertexArray(H):l.deleteVertexArrayOES(H)}function T(H,X,te){const Q=te.wireframe===!0;let z=c[H.id];z===void 0&&(z={},c[H.id]=z);let K=z[X.id];K===void 0&&(K={},z[X.id]=K);let j=K[Q];return j===void 0&&(j=y(v()),K[Q]=j),j}function y(H){const X=[],te=[],Q=[];for(let z=0;z<o;z++)X[z]=0,te[z]=0,Q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:te,attributeDivisors:Q,object:H,attributes:{},index:null}}function x(H,X,te,Q){const z=h.attributes,K=X.attributes;let j=0;const N=te.getAttributes();for(const G in N)if(N[G].location>=0){const le=z[G];let de=K[G];if(de===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(de=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(de=H.instanceColor)),le===void 0||le.attribute!==de||de&&le.data!==de.data)return!0;j++}return h.attributesNum!==j||h.index!==Q}function b(H,X,te,Q){const z={},K=X.attributes;let j=0;const N=te.getAttributes();for(const G in N)if(N[G].location>=0){let le=K[G];le===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(le=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(le=H.instanceColor));const de={};de.attribute=le,le&&le.data&&(de.data=le.data),z[G]=de,j++}h.attributes=z,h.attributesNum=j,h.index=Q}function w(){const H=h.newAttributes;for(let X=0,te=H.length;X<te;X++)H[X]=0}function L(H){O(H,0)}function O(H,X){const te=h.newAttributes,Q=h.enabledAttributes,z=h.attributeDivisors;te[H]=1,Q[H]===0&&(n.enableVertexAttribArray(H),Q[H]=1),z[H]!==X&&((s.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,X),z[H]=X)}function F(){const H=h.newAttributes,X=h.enabledAttributes;for(let te=0,Q=X.length;te<Q;te++)X[te]!==H[te]&&(n.disableVertexAttribArray(te),X[te]=0)}function I(H,X,te,Q,z,K,j){j===!0?n.vertexAttribIPointer(H,X,te,z,K):n.vertexAttribPointer(H,X,te,Q,z,K)}function re(H,X,te,Q){if(s.isWebGL2===!1&&(H.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const z=Q.attributes,K=te.getAttributes(),j=X.defaultAttributeValues;for(const N in K){const G=K[N];if(G.location>=0){let q=z[N];if(q===void 0&&(N==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),N==="instanceColor"&&H.instanceColor&&(q=H.instanceColor)),q!==void 0){const le=q.normalized,de=q.itemSize,Se=t.get(q);if(Se===void 0)continue;const Ee=Se.buffer,be=Se.type,Ue=Se.bytesPerElement,Be=s.isWebGL2===!0&&(be===n.INT||be===n.UNSIGNED_INT||q.gpuType===e_);if(q.isInterleavedBufferAttribute){const dt=q.data,ne=dt.stride,Yt=q.offset;if(dt.isInstancedInterleavedBuffer){for(let je=0;je<G.locationSize;je++)O(G.location+je,dt.meshPerAttribute);H.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let je=0;je<G.locationSize;je++)L(G.location+je);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let je=0;je<G.locationSize;je++)I(G.location+je,de/G.locationSize,be,le,ne*Ue,(Yt+de/G.locationSize*je)*Ue,Be)}else{if(q.isInstancedBufferAttribute){for(let dt=0;dt<G.locationSize;dt++)O(G.location+dt,q.meshPerAttribute);H.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let dt=0;dt<G.locationSize;dt++)L(G.location+dt);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let dt=0;dt<G.locationSize;dt++)I(G.location+dt,de/G.locationSize,be,le,de*Ue,de/G.locationSize*dt*Ue,Be)}}else if(j!==void 0){const le=j[N];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(G.location,le);break;case 3:n.vertexAttrib3fv(G.location,le);break;case 4:n.vertexAttrib4fv(G.location,le);break;default:n.vertexAttrib1fv(G.location,le)}}}}F()}function C(){ce();for(const H in c){const X=c[H];for(const te in X){const Q=X[te];for(const z in Q)E(Q[z].object),delete Q[z];delete X[te]}delete c[H]}}function D(H){if(c[H.id]===void 0)return;const X=c[H.id];for(const te in X){const Q=X[te];for(const z in Q)E(Q[z].object),delete Q[z];delete X[te]}delete c[H.id]}function ue(H){for(const X in c){const te=c[X];if(te[H.id]===void 0)continue;const Q=te[H.id];for(const z in Q)E(Q[z].object),delete Q[z];delete te[H.id]}}function ce(){ve(),p=!0,h!==d&&(h=d,S(h.object))}function ve(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:ce,resetDefaultState:ve,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:ue,initAttributes:w,enableAttribute:L,disableUnusedAttributes:F}}function UA(n,e,t,s){const o=s.isWebGL2;let l;function u(p){l=p}function c(p,g){n.drawArrays(l,p,g),t.update(g,l,1)}function d(p,g,v){if(v===0)return;let S,E;if(o)S=n,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](l,p,g,v),t.update(g,l,v)}function h(p,g,v){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<v;E++)this.render(p[E],g[E]);else{S.multiDrawArraysWEBGL(l,p,0,g,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T];t.update(E,l,1)}}this.setMode=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function IA(n,e,t){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),E=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),T=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,L=u||e.has("OES_texture_float"),O=w&&L,F=u?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:h,getMaxAnisotropy:o,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:E,maxAttributes:T,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:w,floatFragmentTextures:L,floatVertexTextures:O,maxSamples:F}}function FA(n){const e=this;let t=null,s=0,o=!1,l=!1;const u=new os,c=new pt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||o;return o=v,s=g.length,S},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,S){const E=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,x=n.get(g);if(!o||E===null||E.length===0||l&&!y)l?p(null):h();else{const b=l?0:s,w=b*4;let L=x.clippingState||null;d.value=L,L=p(E,v,w,S);for(let O=0;O!==w;++O)L[O]=t[O];x.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function p(g,v,S,E){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=d.value,E!==!0||y===null){const x=S+T*4,b=v.matrixWorldInverse;c.getNormalMatrix(b),(y===null||y.length<x)&&(y=new Float32Array(x));for(let w=0,L=S;w!==T;++w,L+=4)u.copy(g[w]).applyMatrix4(b,c),u.normal.toArray(y,L),y[L+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function OA(n){let e=new WeakMap;function t(u,c){return c===Md?u.mapping=vo:c===Ed&&(u.mapping=_o),u}function s(u){if(u&&u.isTexture){const c=u.mapping;if(c===Md||c===Ed)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new $E(d.height/2);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class kA extends x_{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oo=4,hv=[.125,.215,.35,.446,.526,.582],cs=20,Jf=new kA,pv=new wt;let ed=null,td=0,nd=0;const as=(1+Math.sqrt(5))/2,so=1/as,mv=[new ae(1,1,1),new ae(-1,1,1),new ae(1,1,-1),new ae(-1,1,-1),new ae(0,as,so),new ae(0,as,-so),new ae(so,0,as),new ae(-so,0,as),new ae(as,so,0),new ae(-as,so,0)];class gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),e.scissorTest=!1,hu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vo||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Ma,format:Ei,colorSpace:Ji,depthBuffer:!1},o=vv(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vv(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BA(l)),this._blurMaterial=zA(l,e,t)}return o}_compileMaterial(e){const t=new Qi(this._lodPlanes[0],e);this._renderer.compile(t,Jf)}_sceneToCubeUV(e,t,s,o){const c=new ai(90,1,t,s),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(pv),p.toneMapping=Nr,p.autoClear=!1;const S=new m_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),E=new Qi(new Na,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(pv),T=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(c.up.set(0,d[x],0),c.lookAt(h[x],0,0)):b===1?(c.up.set(0,0,d[x]),c.lookAt(0,h[x],0)):(c.up.set(0,d[x],0),c.lookAt(0,0,h[x]));const w=this._cubeSize;hu(o,b*w,x>2?w:0,w,w),p.setRenderTarget(o),T&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===vo||e.mapping===_o;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_v());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Qi(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;hu(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(u,Jf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=mv[(o-1)%mv.length];this._blur(e,o-1,o,l,u)}t.autoClear=s}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Qi(this._lodPlanes[o],h),v=h.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*cs-1),T=l/E,y=isFinite(l)?1+Math.floor(p*T):cs;y>cs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${cs}`);const x=[];let b=0;for(let I=0;I<cs;++I){const re=I/T,C=Math.exp(-re*re/2);x.push(C),I===0?b+=C:I<y&&(b+=2*C)}for(let I=0;I<x.length;I++)x[I]=x[I]/b;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:w}=this;v.dTheta.value=E,v.mipInt.value=w-s;const L=this._sizeLods[o],O=3*L*(o>w-oo?o-w+oo:0),F=4*(this._cubeSize-L);hu(t,O,F,3*L,2*L),d.setRenderTarget(t),d.render(g,Jf)}}function BA(n){const e=[],t=[],s=[];let o=n;const l=n-oo+1+hv.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-oo?d=hv[u-n+oo-1]:u===0&&(d=0),s.push(d);const h=1/(c-2),p=-h,g=1+h,v=[p,p,g,p,g,g,p,p,g,g,p,g],S=6,E=6,T=3,y=2,x=1,b=new Float32Array(T*E*S),w=new Float32Array(y*E*S),L=new Float32Array(x*E*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,re=F>2?0:-1,C=[I,re,0,I+2/3,re,0,I+2/3,re+1,0,I,re,0,I+2/3,re+1,0,I,re+1,0];b.set(C,T*E*F),w.set(v,y*E*F);const D=[F,F,F,F,F,F];L.set(D,x*E*F)}const O=new ys;O.setAttribute("position",new Pi(b,T)),O.setAttribute("uv",new Pi(w,y)),O.setAttribute("faceIndex",new Pi(L,x)),e.push(O),o>oo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function vv(n,e,t){const s=new xs(n,e,t);return s.texture.mapping=Iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function hu(n,e,t,s,o){n.viewport.set(e,t,s,o),n.scissor.set(e,t,s,o)}function zA(n,e,t){const s=new Float32Array(cs),o=new ae(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function _v(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function xv(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function VA(n){let e=new WeakMap,t=null;function s(c){if(c&&c.isTexture){const d=c.mapping,h=d===Md||d===Ed,p=d===vo||d===_o;if(h||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=e.get(c);return t===null&&(t=new gv(n)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),e.set(c,g),g.texture}else{if(e.has(c))return e.get(c).texture;{const g=c.image;if(h&&g&&g.height>0||p&&g&&o(g)){t===null&&(t=new gv(n));const v=h?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",l),v.texture}else return null}}}return c}function o(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function HA(n){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const o=t(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function GA(n,e,t,s){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const T=v.morphAttributes[E];for(let y=0,x=T.length;y<x;y++)e.remove(T[y])}v.removeEventListener("dispose",u),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const E in v)e.update(v[E],n.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const T=S[E];for(let y=0,x=T.length;y<x;y++)e.update(T[y],n.ARRAY_BUFFER)}}function h(g){const v=[],S=g.index,E=g.attributes.position;let T=0;if(S!==null){const b=S.array;T=S.version;for(let w=0,L=b.length;w<L;w+=3){const O=b[w+0],F=b[w+1],I=b[w+2];v.push(O,F,F,I,I,O)}}else if(E!==void 0){const b=E.array;T=E.version;for(let w=0,L=b.length/3-1;w<L;w+=3){const O=w+0,F=w+1,I=w+2;v.push(O,F,F,I,I,O)}}else return;const y=new(u_(v)?v_:g_)(v,1);y.version=T;const x=l.get(g);x&&e.remove(x),l.set(g,y)}function p(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function WA(n,e,t,s){const o=s.isWebGL2;let l;function u(S){l=S}let c,d;function h(S){c=S.type,d=S.bytesPerElement}function p(S,E){n.drawElements(l,E,c,S*d),t.update(E,l,1)}function g(S,E,T){if(T===0)return;let y,x;if(o)y=n,x="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](l,E,c,S*d,T),t.update(E,l,T)}function v(S,E,T){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<T;x++)this.render(S[x]/d,E[x]);else{y.multiDrawElementsWEBGL(l,E,0,c,S,0,T);let x=0;for(let b=0;b<T;b++)x+=E[b];t.update(x,l,1)}}this.setMode=u,this.setIndex=h,this.render=p,this.renderInstances=g,this.renderMultiDraw=v}function jA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function XA(n,e){return n[0]-e[0]}function YA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function qA(n,e,t){const s={},o=new Float32Array(8),l=new WeakMap,u=new hn,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function d(h,p,g){const v=h.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,T=E!==void 0?E.length:0;let y=l.get(p);if(y===void 0||y.count!==T){let X=function(){ve.dispose(),l.delete(p),p.removeEventListener("dispose",X)};var S=X;y!==void 0&&y.texture.dispose();const w=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,O=p.morphAttributes.color!==void 0,F=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],re=p.morphAttributes.color||[];let C=0;w===!0&&(C=1),L===!0&&(C=2),O===!0&&(C=3);let D=p.attributes.position.count*C,ue=1;D>e.maxTextureSize&&(ue=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const ce=new Float32Array(D*ue*4*T),ve=new d_(ce,D,ue,T);ve.type=Lr,ve.needsUpdate=!0;const H=C*4;for(let te=0;te<T;te++){const Q=F[te],z=I[te],K=re[te],j=D*ue*4*te;for(let N=0;N<Q.count;N++){const G=N*H;w===!0&&(u.fromBufferAttribute(Q,N),ce[j+G+0]=u.x,ce[j+G+1]=u.y,ce[j+G+2]=u.z,ce[j+G+3]=0),L===!0&&(u.fromBufferAttribute(z,N),ce[j+G+4]=u.x,ce[j+G+5]=u.y,ce[j+G+6]=u.z,ce[j+G+7]=0),O===!0&&(u.fromBufferAttribute(K,N),ce[j+G+8]=u.x,ce[j+G+9]=u.y,ce[j+G+10]=u.z,ce[j+G+11]=K.itemSize===4?u.w:1)}}y={count:T,texture:ve,size:new At(D,ue)},l.set(p,y),p.addEventListener("dispose",X)}let x=0;for(let w=0;w<v.length;w++)x+=v[w];const b=p.morphTargetsRelative?1:1-x;g.getUniforms().setValue(n,"morphTargetBaseInfluence",b),g.getUniforms().setValue(n,"morphTargetInfluences",v),g.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),g.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const E=v===void 0?0:v.length;let T=s[p.id];if(T===void 0||T.length!==E){T=[];for(let L=0;L<E;L++)T[L]=[L,0];s[p.id]=T}for(let L=0;L<E;L++){const O=T[L];O[0]=L,O[1]=v[L]}T.sort(YA);for(let L=0;L<8;L++)L<E&&T[L][1]?(c[L][0]=T[L][0],c[L][1]=T[L][1]):(c[L][0]=Number.MAX_SAFE_INTEGER,c[L][1]=0);c.sort(XA);const y=p.morphAttributes.position,x=p.morphAttributes.normal;let b=0;for(let L=0;L<8;L++){const O=c[L],F=O[0],I=O[1];F!==Number.MAX_SAFE_INTEGER&&I?(y&&p.getAttribute("morphTarget"+L)!==y[F]&&p.setAttribute("morphTarget"+L,y[F]),x&&p.getAttribute("morphNormal"+L)!==x[F]&&p.setAttribute("morphNormal"+L,x[F]),o[L]=I,b+=I):(y&&p.hasAttribute("morphTarget"+L)===!0&&p.deleteAttribute("morphTarget"+L),x&&p.hasAttribute("morphNormal"+L)===!0&&p.deleteAttribute("morphNormal"+L),o[L]=0)}const w=p.morphTargetsRelative?1:1-b;g.getUniforms().setValue(n,"morphTargetBaseInfluence",w),g.getUniforms().setValue(n,"morphTargetInfluences",o)}}return{update:d}}function $A(n,e,t,s){let o=new WeakMap;function l(d){const h=s.render.frame,p=d.geometry,g=e.get(d,p);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}class E_ extends Hn{constructor(e,t,s,o,l,u,c,d,h,p){if(p=p!==void 0?p:ps,p!==ps&&p!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&p===ps&&(s=Pr),s===void 0&&p===xo&&(s=hs),super(null,o,l,u,c,d,p,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Mn,this.minFilter=d!==void 0?d:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const T_=new Hn,w_=new E_(1,1);w_.compareFunction=l_;const A_=new d_,C_=new LE,R_=new y_,yv=[],Sv=[],Mv=new Float32Array(16),Ev=new Float32Array(9),Tv=new Float32Array(4);function To(n,e,t){const s=n[0];if(s<=0||s>0)return n;const o=e*t;let l=yv[o];if(l===void 0&&(l=new Float32Array(o),yv[o]=l),e!==0){s.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,s=n.length;t<s;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,s=e.length;t<s;t++)n[t]=e[t]}function zu(n,e){let t=Sv[e];t===void 0&&(t=new Int32Array(e),Sv[e]=t);for(let s=0;s!==e;++s)t[s]=n.allocateTextureUnit();return t}function KA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ZA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function QA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function JA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function e1(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Tv.set(s),n.uniformMatrix2fv(this.addr,!1,Tv),tn(t,s)}}function t1(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Ev.set(s),n.uniformMatrix3fv(this.addr,!1,Ev),tn(t,s)}}function n1(n,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Mv.set(s),n.uniformMatrix4fv(this.addr,!1,Mv),tn(t,s)}}function i1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function r1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function s1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function o1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function a1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function f1(n,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(n.uniform1i(this.addr,o),s[0]=o);const l=this.type===n.SAMPLER_2D_SHADOW?w_:T_;t.setTexture2D(e||l,o)}function d1(n,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(n.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||C_,o)}function h1(n,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(n.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||R_,o)}function p1(n,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(n.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||A_,o)}function m1(n){switch(n){case 5126:return KA;case 35664:return ZA;case 35665:return QA;case 35666:return JA;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return o1;case 5125:return a1;case 36294:return l1;case 36295:return u1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}function g1(n,e){n.uniform1fv(this.addr,e)}function v1(n,e){const t=To(e,this.size,2);n.uniform2fv(this.addr,t)}function _1(n,e){const t=To(e,this.size,3);n.uniform3fv(this.addr,t)}function x1(n,e){const t=To(e,this.size,4);n.uniform4fv(this.addr,t)}function y1(n,e){const t=To(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function S1(n,e){const t=To(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function M1(n,e){const t=To(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function E1(n,e){n.uniform1iv(this.addr,e)}function T1(n,e){n.uniform2iv(this.addr,e)}function w1(n,e){n.uniform3iv(this.addr,e)}function A1(n,e){n.uniform4iv(this.addr,e)}function C1(n,e){n.uniform1uiv(this.addr,e)}function R1(n,e){n.uniform2uiv(this.addr,e)}function b1(n,e){n.uniform3uiv(this.addr,e)}function P1(n,e){n.uniform4uiv(this.addr,e)}function L1(n,e,t){const s=this.cache,o=e.length,l=zu(t,o);en(s,l)||(n.uniform1iv(this.addr,l),tn(s,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||T_,l[u])}function D1(n,e,t){const s=this.cache,o=e.length,l=zu(t,o);en(s,l)||(n.uniform1iv(this.addr,l),tn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||C_,l[u])}function N1(n,e,t){const s=this.cache,o=e.length,l=zu(t,o);en(s,l)||(n.uniform1iv(this.addr,l),tn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||R_,l[u])}function U1(n,e,t){const s=this.cache,o=e.length,l=zu(t,o);en(s,l)||(n.uniform1iv(this.addr,l),tn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||A_,l[u])}function I1(n){switch(n){case 5126:return g1;case 35664:return v1;case 35665:return _1;case 35666:return x1;case 35674:return y1;case 35675:return S1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return T1;case 35668:case 35672:return w1;case 35669:case 35673:return A1;case 5125:return C1;case 36294:return R1;case 36295:return b1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return U1}}class F1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=m1(t.type)}}class O1{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I1(t.type)}}class k1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],s)}}}const id=/(\w+)(\])?(\[|\.)?/g;function wv(n,e){n.seq.push(e),n.map[e.id]=e}function B1(n,e,t){const s=n.name,o=s.length;for(id.lastIndex=0;;){const l=id.exec(s),u=id.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){wv(t,h===void 0?new F1(c,n,e):new O1(c,n,e));break}else{let g=t.map[c];g===void 0&&(g=new k1(c),wv(t,g)),t=g}}}class _u{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);B1(l,u,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=s[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function Av(n,e,t){const s=n.createShader(e);return n.shaderSource(s,t),n.compileShader(s),s}const z1=37297;let V1=0;function H1(n,e){const t=n.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;s.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return s.join(`
`)}function G1(n){const e=Tt.getPrimaries(Tt.workingColorSpace),t=Tt.getPrimaries(n);let s;switch(e===t?s="":e===Cu&&t===Au?s="LinearDisplayP3ToLinearSRGB":e===Au&&t===Cu&&(s="LinearSRGBToLinearDisplayP3"),n){case Ji:case Fu:return[s,"LinearTransferOETF"];case fn:case eh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[s,"LinearTransferOETF"]}}function Cv(n,e,t){const s=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+H1(n.getShaderSource(e),u)}else return o}function W1(n,e){const t=G1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function j1(n,e){let t;switch(e){case JM:t="Linear";break;case eE:t="Reinhard";break;case tE:t="OptimizedCineon";break;case nE:t="ACESFilmic";break;case rE:t="AgX";break;case iE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function X1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ao).join(`
`)}function Y1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ao).join(`
`)}function q1(n){const e=[];for(const t in n){const s=n[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function $1(n,e){const t={},s=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function ao(n){return n!==""}function Rv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(n){return n.replace(K1,Q1)}const Z1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Q1(n,e){let t=ct[e];if(t===void 0){const s=Z1.get(e);if(s!==void 0)t=ct[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return bd(t)}const J1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pv(n){return n.replace(J1,eC)}function eC(n,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Lv(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Z0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===CM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function nC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vo:case _o:e="ENVMAP_TYPE_CUBE";break;case Iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function rC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Q0:e="ENVMAP_BLENDING_MULTIPLY";break;case ZM:e="ENVMAP_BLENDING_MIX";break;case QM:e="ENVMAP_BLENDING_ADD";break}return e}function sC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function oC(n,e,t,s){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=tC(t),h=nC(t),p=iC(t),g=rC(t),v=sC(t),S=t.isWebGL2?"":X1(t),E=Y1(t),T=q1(l),y=o.createProgram();let x,b,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ao).join(`
`),x.length>0&&(x+=`
`),b=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ao).join(`
`),b.length>0&&(b+=`
`)):(x=[Lv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),b=[S,Lv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?ct.tonemapping_pars_fragment:"",t.toneMapping!==Nr?j1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,W1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),u=bd(u),u=Rv(u,t),u=bv(u,t),c=bd(c),c=Rv(c,t),c=bv(c,t),u=Pv(u),c=Pv(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const L=w+x+u,O=w+b+c,F=Av(o,o.VERTEX_SHADER,L),I=Av(o,o.FRAGMENT_SHADER,O);o.attachShader(y,F),o.attachShader(y,I),t.index0AttributeName!==void 0?o.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function re(ce){if(n.debug.checkShaderErrors){const ve=o.getProgramInfoLog(y).trim(),H=o.getShaderInfoLog(F).trim(),X=o.getShaderInfoLog(I).trim();let te=!0,Q=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,y,F,I);else{const z=Cv(o,F,"vertex"),K=Cv(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Program Info Log: `+ve+`
`+z+`
`+K)}else ve!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ve):(H===""||X==="")&&(Q=!1);Q&&(ce.diagnostics={runnable:te,programLog:ve,vertexShader:{log:H,prefix:x},fragmentShader:{log:X,prefix:b}})}o.deleteShader(F),o.deleteShader(I),C=new _u(o,y),D=$1(o,y)}let C;this.getUniforms=function(){return C===void 0&&re(this),C};let D;this.getAttributes=function(){return D===void 0&&re(this),D};let ue=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=o.getProgramParameter(y,z1)),ue},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=F,this.fragmentShader=I,this}let aC=0;class lC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new uC(e),t.set(e,s)),s}}class uC{constructor(e){this.id=aC++,this.code=e,this.usedTimes=0}}function cC(n,e,t,s,o,l,u){const c=new h_,d=new lC,h=[],p=o.isWebGL2,g=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return C===0?"uv":`uv${C}`}function y(C,D,ue,ce,ve){const H=ce.fog,X=ve.geometry,te=C.isMeshStandardMaterial?ce.environment:null,Q=(C.isMeshStandardMaterial?t:e).get(C.envMap||te),z=Q&&Q.mapping===Iu?Q.image.height:null,K=E[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const j=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,N=j!==void 0?j.length:0;let G=0;X.morphAttributes.position!==void 0&&(G=1),X.morphAttributes.normal!==void 0&&(G=2),X.morphAttributes.color!==void 0&&(G=3);let q,le,de,Se;if(K){const nn=bi[K];q=nn.vertexShader,le=nn.fragmentShader}else q=C.vertexShader,le=C.fragmentShader,d.update(C),de=d.getVertexShaderID(C),Se=d.getFragmentShaderID(C);const Ee=n.getRenderTarget(),be=ve.isInstancedMesh===!0,Ue=ve.isBatchedMesh===!0,Be=!!C.map,dt=!!C.matcap,ne=!!Q,Yt=!!C.aoMap,je=!!C.lightMap,nt=!!C.bumpMap,Ve=!!C.normalMap,Ct=!!C.displacementMap,st=!!C.emissiveMap,P=!!C.metalnessMap,A=!!C.roughnessMap,J=C.anisotropy>0,_e=C.clearcoat>0,me=C.iridescence>0,xe=C.sheen>0,He=C.transmission>0,Re=J&&!!C.anisotropyMap,Ie=_e&&!!C.clearcoatMap,Xe=_e&&!!C.clearcoatNormalMap,ot=_e&&!!C.clearcoatRoughnessMap,pe=me&&!!C.iridescenceMap,mt=me&&!!C.iridescenceThicknessMap,ft=xe&&!!C.sheenColorMap,et=xe&&!!C.sheenRoughnessMap,We=!!C.specularMap,Oe=!!C.specularColorMap,it=!!C.specularIntensityMap,vt=He&&!!C.transmissionMap,Rt=He&&!!C.thicknessMap,at=!!C.gradientMap,Me=!!C.alphaMap,B=C.alphaTest>0,Te=!!C.alphaHash,Ce=!!C.extensions,Ze=!!X.attributes.uv1,Ye=!!X.attributes.uv2,St=!!X.attributes.uv3;let Mt=Nr;return C.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Mt=n.toneMapping),{isWebGL2:p,shaderID:K,shaderType:C.type,shaderName:C.name,vertexShader:q,fragmentShader:le,defines:C.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Ue,instancing:be,instancingColor:be&&ve.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ji,map:Be,matcap:dt,envMap:ne,envMapMode:ne&&Q.mapping,envMapCubeUVHeight:z,aoMap:Yt,lightMap:je,bumpMap:nt,normalMap:Ve,displacementMap:v&&Ct,emissiveMap:st,normalMapObjectSpace:Ve&&C.normalMapType===vE,normalMapTangentSpace:Ve&&C.normalMapType===gE,metalnessMap:P,roughnessMap:A,anisotropy:J,anisotropyMap:Re,clearcoat:_e,clearcoatMap:Ie,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ot,iridescence:me,iridescenceMap:pe,iridescenceThicknessMap:mt,sheen:xe,sheenColorMap:ft,sheenRoughnessMap:et,specularMap:We,specularColorMap:Oe,specularIntensityMap:it,transmission:He,transmissionMap:vt,thicknessMap:Rt,gradientMap:at,opaque:C.transparent===!1&&C.blending===po,alphaMap:Me,alphaTest:B,alphaHash:Te,combine:C.combine,mapUv:Be&&T(C.map.channel),aoMapUv:Yt&&T(C.aoMap.channel),lightMapUv:je&&T(C.lightMap.channel),bumpMapUv:nt&&T(C.bumpMap.channel),normalMapUv:Ve&&T(C.normalMap.channel),displacementMapUv:Ct&&T(C.displacementMap.channel),emissiveMapUv:st&&T(C.emissiveMap.channel),metalnessMapUv:P&&T(C.metalnessMap.channel),roughnessMapUv:A&&T(C.roughnessMap.channel),anisotropyMapUv:Re&&T(C.anisotropyMap.channel),clearcoatMapUv:Ie&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:et&&T(C.sheenRoughnessMap.channel),specularMapUv:We&&T(C.specularMap.channel),specularColorMapUv:Oe&&T(C.specularColorMap.channel),specularIntensityMapUv:it&&T(C.specularIntensityMap.channel),transmissionMapUv:vt&&T(C.transmissionMap.channel),thicknessMapUv:Rt&&T(C.thicknessMap.channel),alphaMapUv:Me&&T(C.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ve||J),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Ze,vertexUv2s:Ye,vertexUv3s:St,pointsUvs:ve.isPoints===!0&&!!X.attributes.uv&&(Be||Me),fog:!!H,useFog:C.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:ve.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:G,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&ue.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Be&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===Nt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ki,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Ce&&C.extensions.derivatives===!0,extensionFragDepth:Ce&&C.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ce&&C.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function x(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const ue in C.defines)D.push(ue),D.push(C.defines[ue]);return C.isRawShaderMaterial===!1&&(b(D,C),w(D,C),D.push(n.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function b(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function w(C,D){c.disableAll(),D.isWebGL2&&c.enable(0),D.supportsVertexTextures&&c.enable(1),D.instancing&&c.enable(2),D.instancingColor&&c.enable(3),D.matcap&&c.enable(4),D.envMap&&c.enable(5),D.normalMapObjectSpace&&c.enable(6),D.normalMapTangentSpace&&c.enable(7),D.clearcoat&&c.enable(8),D.iridescence&&c.enable(9),D.alphaTest&&c.enable(10),D.vertexColors&&c.enable(11),D.vertexAlphas&&c.enable(12),D.vertexUv1s&&c.enable(13),D.vertexUv2s&&c.enable(14),D.vertexUv3s&&c.enable(15),D.vertexTangents&&c.enable(16),D.anisotropy&&c.enable(17),D.alphaHash&&c.enable(18),D.batching&&c.enable(19),C.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.skinning&&c.enable(4),D.morphTargets&&c.enable(5),D.morphNormals&&c.enable(6),D.morphColors&&c.enable(7),D.premultipliedAlpha&&c.enable(8),D.shadowMapEnabled&&c.enable(9),D.useLegacyLights&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),C.push(c.mask)}function L(C){const D=E[C.type];let ue;if(D){const ce=bi[D];ue=jE.clone(ce.uniforms)}else ue=C.uniforms;return ue}function O(C,D){let ue;for(let ce=0,ve=h.length;ce<ve;ce++){const H=h[ce];if(H.cacheKey===D){ue=H,++ue.usedTimes;break}}return ue===void 0&&(ue=new oC(n,D,C,l),h.push(ue)),ue}function F(C){if(--C.usedTimes===0){const D=h.indexOf(C);h[D]=h[h.length-1],h.pop(),C.destroy()}}function I(C){d.remove(C)}function re(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:O,releaseProgram:F,releaseShaderCache:I,programs:h,dispose:re}}function fC(){let n=new WeakMap;function e(l){let u=n.get(l);return u===void 0&&(u={},n.set(l,u)),u}function t(l){n.delete(l)}function s(l,u,c){n.get(l)[u]=c}function o(){n=new WeakMap}return{get:e,remove:t,update:s,dispose:o}}function dC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nv(){const n=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(g,v,S,E,T,y){let x=n[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:E,renderOrder:g.renderOrder,z:T,group:y},n[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=T,x.group=y),e++,x}function c(g,v,S,E,T,y){const x=u(g,v,S,E,T,y);S.transmission>0?s.push(x):S.transparent===!0?o.push(x):t.push(x)}function d(g,v,S,E,T,y){const x=u(g,v,S,E,T,y);S.transmission>0?s.unshift(x):S.transparent===!0?o.unshift(x):t.unshift(x)}function h(g,v){t.length>1&&t.sort(g||dC),s.length>1&&s.sort(v||Dv),o.length>1&&o.sort(v||Dv)}function p(){for(let g=e,v=n.length;g<v;g++){const S=n[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:c,unshift:d,finish:p,sort:h}}function hC(){let n=new WeakMap;function e(s,o){const l=n.get(s);let u;return l===void 0?(u=new Nv,n.set(s,[u])):o>=l.length?(u=new Nv,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function pC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new wt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return n[e.id]=t,t}}}function mC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gC=0;function vC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _C(n,e){const t=new pC,s=mC(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new ae);const l=new ae,u=new pn,c=new pn;function d(p,g){let v=0,S=0,E=0;for(let ce=0;ce<9;ce++)o.probe[ce].set(0,0,0);let T=0,y=0,x=0,b=0,w=0,L=0,O=0,F=0,I=0,re=0,C=0;p.sort(vC);const D=g===!0?Math.PI:1;for(let ce=0,ve=p.length;ce<ve;ce++){const H=p[ce],X=H.color,te=H.intensity,Q=H.distance,z=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=X.r*te*D,S+=X.g*te*D,E+=X.b*te*D;else if(H.isLightProbe){for(let K=0;K<9;K++)o.probe[K].addScaledVector(H.sh.coefficients[K],te);C++}else if(H.isDirectionalLight){const K=t.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity*D),H.castShadow){const j=H.shadow,N=s.get(H);N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,o.directionalShadow[T]=N,o.directionalShadowMap[T]=z,o.directionalShadowMatrix[T]=H.shadow.matrix,L++}o.directional[T]=K,T++}else if(H.isSpotLight){const K=t.get(H);K.position.setFromMatrixPosition(H.matrixWorld),K.color.copy(X).multiplyScalar(te*D),K.distance=Q,K.coneCos=Math.cos(H.angle),K.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),K.decay=H.decay,o.spot[x]=K;const j=H.shadow;if(H.map&&(o.spotLightMap[I]=H.map,I++,j.updateMatrices(H),H.castShadow&&re++),o.spotLightMatrix[x]=j.matrix,H.castShadow){const N=s.get(H);N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,o.spotShadow[x]=N,o.spotShadowMap[x]=z,F++}x++}else if(H.isRectAreaLight){const K=t.get(H);K.color.copy(X).multiplyScalar(te),K.halfWidth.set(H.width*.5,0,0),K.halfHeight.set(0,H.height*.5,0),o.rectArea[b]=K,b++}else if(H.isPointLight){const K=t.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity*D),K.distance=H.distance,K.decay=H.decay,H.castShadow){const j=H.shadow,N=s.get(H);N.shadowBias=j.bias,N.shadowNormalBias=j.normalBias,N.shadowRadius=j.radius,N.shadowMapSize=j.mapSize,N.shadowCameraNear=j.camera.near,N.shadowCameraFar=j.camera.far,o.pointShadow[y]=N,o.pointShadowMap[y]=z,o.pointShadowMatrix[y]=H.shadow.matrix,O++}o.point[y]=K,y++}else if(H.isHemisphereLight){const K=t.get(H);K.skyColor.copy(H.color).multiplyScalar(te*D),K.groundColor.copy(H.groundColor).multiplyScalar(te*D),o.hemi[w]=K,w++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=we.LTC_FLOAT_1,o.rectAreaLTC2=we.LTC_FLOAT_2):(o.rectAreaLTC1=we.LTC_HALF_1,o.rectAreaLTC2=we.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=we.LTC_FLOAT_1,o.rectAreaLTC2=we.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=we.LTC_HALF_1,o.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=S,o.ambient[2]=E;const ue=o.hash;(ue.directionalLength!==T||ue.pointLength!==y||ue.spotLength!==x||ue.rectAreaLength!==b||ue.hemiLength!==w||ue.numDirectionalShadows!==L||ue.numPointShadows!==O||ue.numSpotShadows!==F||ue.numSpotMaps!==I||ue.numLightProbes!==C)&&(o.directional.length=T,o.spot.length=x,o.rectArea.length=b,o.point.length=y,o.hemi.length=w,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=O,o.pointShadowMap.length=O,o.spotShadow.length=F,o.spotShadowMap.length=F,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=O,o.spotLightMatrix.length=F+I-re,o.spotLightMap.length=I,o.numSpotLightShadowsWithMaps=re,o.numLightProbes=C,ue.directionalLength=T,ue.pointLength=y,ue.spotLength=x,ue.rectAreaLength=b,ue.hemiLength=w,ue.numDirectionalShadows=L,ue.numPointShadows=O,ue.numSpotShadows=F,ue.numSpotMaps=I,ue.numLightProbes=C,o.version=gC++)}function h(p,g){let v=0,S=0,E=0,T=0,y=0;const x=g.matrixWorldInverse;for(let b=0,w=p.length;b<w;b++){const L=p[b];if(L.isDirectionalLight){const O=o.directional[v];O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(x),v++}else if(L.isSpotLight){const O=o.spot[E];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(x),E++}else if(L.isRectAreaLight){const O=o.rectArea[T];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(x),c.identity(),u.copy(L.matrixWorld),u.premultiply(x),c.extractRotation(u),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(c),O.halfHeight.applyMatrix4(c),T++}else if(L.isPointLight){const O=o.point[S];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(x),S++}else if(L.isHemisphereLight){const O=o.hemi[y];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(x),y++}}}return{setup:d,setupView:h,state:o}}function Uv(n,e){const t=new _C(n,e),s=[],o=[];function l(){s.length=0,o.length=0}function u(g){s.push(g)}function c(g){o.push(g)}function d(g){t.setup(s,g)}function h(g){t.setupView(s,g)}return{init:l,state:{lightsArray:s,shadowsArray:o,lights:t},setupLights:d,setupLightsView:h,pushLight:u,pushShadow:c}}function xC(n,e){let t=new WeakMap;function s(l,u=0){const c=t.get(l);let d;return c===void 0?(d=new Uv(n,e),t.set(l,[d])):u>=c.length?(d=new Uv(n,e),c.push(d)):d=c[u],d}function o(){t=new WeakMap}return{get:s,dispose:o}}class yC extends ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SC extends ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const MC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EC=`uniform sampler2D shadow_pass;
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
}`;function TC(n,e,t){let s=new S_;const o=new At,l=new At,u=new hn,c=new yC({depthPacking:mE}),d=new SC,h={},p=t.maxTextureSize,g={[Ir]:Vn,[Vn]:Ir,[Ki]:Ki},v=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:MC,fragmentShader:EC}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new ys;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Qi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z0;let x=this.type;this.render=function(F,I,re){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const C=n.getRenderTarget(),D=n.getActiveCubeFace(),ue=n.getActiveMipmapLevel(),ce=n.state;ce.setBlending(Dr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ve=x!==$i&&this.type===$i,H=x===$i&&this.type!==$i;for(let X=0,te=F.length;X<te;X++){const Q=F[X],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const K=z.getFrameExtents();if(o.multiply(K),l.copy(z.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/K.x),o.x=l.x*K.x,z.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/K.y),o.y=l.y*K.y,z.mapSize.y=l.y)),z.map===null||ve===!0||H===!0){const N=this.type!==$i?{minFilter:Mn,magFilter:Mn}:{};z.map!==null&&z.map.dispose(),z.map=new xs(o.x,o.y,N),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const j=z.getViewportCount();for(let N=0;N<j;N++){const G=z.getViewport(N);u.set(l.x*G.x,l.y*G.y,l.x*G.z,l.y*G.w),ce.viewport(u),z.updateMatrices(Q,N),s=z.getFrustum(),L(I,re,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===$i&&b(z,re),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,n.setRenderTarget(C,D,ue)};function b(F,I){const re=e.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new xs(o.x,o.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(I,null,re,v,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(I,null,re,S,T,null)}function w(F,I,re,C){let D=null;const ue=re.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(ue!==void 0)D=ue;else if(D=re.isPointLight===!0?d:c,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ce=D.uuid,ve=I.uuid;let H=h[ce];H===void 0&&(H={},h[ce]=H);let X=H[ve];X===void 0&&(X=D.clone(),H[ve]=X,I.addEventListener("dispose",O)),D=X}if(D.visible=I.visible,D.wireframe=I.wireframe,C===$i?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:g[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,re.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ce=n.properties.get(D);ce.light=re}return D}function L(F,I,re,C,D){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===$i)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,F.matrixWorld);const ve=e.update(F),H=F.material;if(Array.isArray(H)){const X=ve.groups;for(let te=0,Q=X.length;te<Q;te++){const z=X[te],K=H[z.materialIndex];if(K&&K.visible){const j=w(F,K,C,D);F.onBeforeShadow(n,F,I,re,ve,j,z),n.renderBufferDirect(re,null,ve,j,F,z),F.onAfterShadow(n,F,I,re,ve,j,z)}}}else if(H.visible){const X=w(F,H,C,D);F.onBeforeShadow(n,F,I,re,ve,X,null),n.renderBufferDirect(re,null,ve,X,F,null),F.onAfterShadow(n,F,I,re,ve,X,null)}}const ce=F.children;for(let ve=0,H=ce.length;ve<H;ve++)L(ce[ve],I,re,C,D)}function O(F){F.target.removeEventListener("dispose",O);for(const re in h){const C=h[re],D=F.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}function wC(n,e,t){const s=t.isWebGL2;function o(){let B=!1;const Te=new hn;let Ce=null;const Ze=new hn(0,0,0,0);return{setMask:function(Ye){Ce!==Ye&&!B&&(n.colorMask(Ye,Ye,Ye,Ye),Ce=Ye)},setLocked:function(Ye){B=Ye},setClear:function(Ye,St,Mt,zt,nn){nn===!0&&(Ye*=zt,St*=zt,Mt*=zt),Te.set(Ye,St,Mt,zt),Ze.equals(Te)===!1&&(n.clearColor(Ye,St,Mt,zt),Ze.copy(Te))},reset:function(){B=!1,Ce=null,Ze.set(-1,0,0,0)}}}function l(){let B=!1,Te=null,Ce=null,Ze=null;return{setTest:function(Ye){Ye?Ue(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(Ye){Te!==Ye&&!B&&(n.depthMask(Ye),Te=Ye)},setFunc:function(Ye){if(Ce!==Ye){switch(Ye){case WM:n.depthFunc(n.NEVER);break;case jM:n.depthFunc(n.ALWAYS);break;case XM:n.depthFunc(n.LESS);break;case Tu:n.depthFunc(n.LEQUAL);break;case YM:n.depthFunc(n.EQUAL);break;case qM:n.depthFunc(n.GEQUAL);break;case $M:n.depthFunc(n.GREATER);break;case KM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=Ye}},setLocked:function(Ye){B=Ye},setClear:function(Ye){Ze!==Ye&&(n.clearDepth(Ye),Ze=Ye)},reset:function(){B=!1,Te=null,Ce=null,Ze=null}}}function u(){let B=!1,Te=null,Ce=null,Ze=null,Ye=null,St=null,Mt=null,zt=null,nn=null;return{setTest:function(xt){B||(xt?Ue(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(xt){Te!==xt&&!B&&(n.stencilMask(xt),Te=xt)},setFunc:function(xt,Zt,mn){(Ce!==xt||Ze!==Zt||Ye!==mn)&&(n.stencilFunc(xt,Zt,mn),Ce=xt,Ze=Zt,Ye=mn)},setOp:function(xt,Zt,mn){(St!==xt||Mt!==Zt||zt!==mn)&&(n.stencilOp(xt,Zt,mn),St=xt,Mt=Zt,zt=mn)},setLocked:function(xt){B=xt},setClear:function(xt){nn!==xt&&(n.clearStencil(xt),nn=xt)},reset:function(){B=!1,Te=null,Ce=null,Ze=null,Ye=null,St=null,Mt=null,zt=null,nn=null}}}const c=new o,d=new l,h=new u,p=new WeakMap,g=new WeakMap;let v={},S={},E=new WeakMap,T=[],y=null,x=!1,b=null,w=null,L=null,O=null,F=null,I=null,re=null,C=new wt(0,0,0),D=0,ue=!1,ce=null,ve=null,H=null,X=null,te=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=K>=2);let N=null,G={};const q=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),de=new hn().fromArray(q),Se=new hn().fromArray(le);function Ee(B,Te,Ce,Ze){const Ye=new Uint8Array(4),St=n.createTexture();n.bindTexture(B,St),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<Ce;Mt++)s&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(Te,0,n.RGBA,1,1,Ze,0,n.RGBA,n.UNSIGNED_BYTE,Ye):n.texImage2D(Te+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ye);return St}const be={};be[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(be[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Ue(n.DEPTH_TEST),d.setFunc(Tu),st(!1),P(mg),Ue(n.CULL_FACE),Ve(Dr);function Ue(B){v[B]!==!0&&(n.enable(B),v[B]=!0)}function Be(B){v[B]!==!1&&(n.disable(B),v[B]=!1)}function dt(B,Te){return S[B]!==Te?(n.bindFramebuffer(B,Te),S[B]=Te,s&&(B===n.DRAW_FRAMEBUFFER&&(S[n.FRAMEBUFFER]=Te),B===n.FRAMEBUFFER&&(S[n.DRAW_FRAMEBUFFER]=Te)),!0):!1}function ne(B,Te){let Ce=T,Ze=!1;if(B)if(Ce=E.get(Te),Ce===void 0&&(Ce=[],E.set(Te,Ce)),B.isWebGLMultipleRenderTargets){const Ye=B.texture;if(Ce.length!==Ye.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let St=0,Mt=Ye.length;St<Mt;St++)Ce[St]=n.COLOR_ATTACHMENT0+St;Ce.length=Ye.length,Ze=!0}}else Ce[0]!==n.COLOR_ATTACHMENT0&&(Ce[0]=n.COLOR_ATTACHMENT0,Ze=!0);else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,Ze=!0);Ze&&(t.isWebGL2?n.drawBuffers(Ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ce))}function Yt(B){return y!==B?(n.useProgram(B),y=B,!0):!1}const je={[us]:n.FUNC_ADD,[bM]:n.FUNC_SUBTRACT,[PM]:n.FUNC_REVERSE_SUBTRACT};if(s)je[xg]=n.MIN,je[yg]=n.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(je[xg]=B.MIN_EXT,je[yg]=B.MAX_EXT)}const nt={[LM]:n.ZERO,[DM]:n.ONE,[NM]:n.SRC_COLOR,[yd]:n.SRC_ALPHA,[BM]:n.SRC_ALPHA_SATURATE,[OM]:n.DST_COLOR,[IM]:n.DST_ALPHA,[UM]:n.ONE_MINUS_SRC_COLOR,[Sd]:n.ONE_MINUS_SRC_ALPHA,[kM]:n.ONE_MINUS_DST_COLOR,[FM]:n.ONE_MINUS_DST_ALPHA,[zM]:n.CONSTANT_COLOR,[VM]:n.ONE_MINUS_CONSTANT_COLOR,[HM]:n.CONSTANT_ALPHA,[GM]:n.ONE_MINUS_CONSTANT_ALPHA};function Ve(B,Te,Ce,Ze,Ye,St,Mt,zt,nn,xt){if(B===Dr){x===!0&&(Be(n.BLEND),x=!1);return}if(x===!1&&(Ue(n.BLEND),x=!0),B!==RM){if(B!==b||xt!==ue){if((w!==us||F!==us)&&(n.blendEquation(n.FUNC_ADD),w=us,F=us),xt)switch(B){case po:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gg:n.blendFunc(n.ONE,n.ONE);break;case vg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _g:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gg:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _g:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}L=null,O=null,I=null,re=null,C.set(0,0,0),D=0,b=B,ue=xt}return}Ye=Ye||Te,St=St||Ce,Mt=Mt||Ze,(Te!==w||Ye!==F)&&(n.blendEquationSeparate(je[Te],je[Ye]),w=Te,F=Ye),(Ce!==L||Ze!==O||St!==I||Mt!==re)&&(n.blendFuncSeparate(nt[Ce],nt[Ze],nt[St],nt[Mt]),L=Ce,O=Ze,I=St,re=Mt),(zt.equals(C)===!1||nn!==D)&&(n.blendColor(zt.r,zt.g,zt.b,nn),C.copy(zt),D=nn),b=B,ue=!1}function Ct(B,Te){B.side===Ki?Be(n.CULL_FACE):Ue(n.CULL_FACE);let Ce=B.side===Vn;Te&&(Ce=!Ce),st(Ce),B.blending===po&&B.transparent===!1?Ve(Dr):Ve(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),d.setFunc(B.depthFunc),d.setTest(B.depthTest),d.setMask(B.depthWrite),c.setMask(B.colorWrite);const Ze=B.stencilWrite;h.setTest(Ze),Ze&&(h.setMask(B.stencilWriteMask),h.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),h.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),J(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(B){ce!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),ce=B)}function P(B){B!==wM?(Ue(n.CULL_FACE),B!==ve&&(B===mg?n.cullFace(n.BACK):B===AM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),ve=B}function A(B){B!==H&&(z&&n.lineWidth(B),H=B)}function J(B,Te,Ce){B?(Ue(n.POLYGON_OFFSET_FILL),(X!==Te||te!==Ce)&&(n.polygonOffset(Te,Ce),X=Te,te=Ce)):Be(n.POLYGON_OFFSET_FILL)}function _e(B){B?Ue(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function me(B){B===void 0&&(B=n.TEXTURE0+Q-1),N!==B&&(n.activeTexture(B),N=B)}function xe(B,Te,Ce){Ce===void 0&&(N===null?Ce=n.TEXTURE0+Q-1:Ce=N);let Ze=G[Ce];Ze===void 0&&(Ze={type:void 0,texture:void 0},G[Ce]=Ze),(Ze.type!==B||Ze.texture!==Te)&&(N!==Ce&&(n.activeTexture(Ce),N=Ce),n.bindTexture(B,Te||be[B]),Ze.type=B,Ze.texture=Te)}function He(){const B=G[N];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(B){de.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),de.copy(B))}function vt(B){Se.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Se.copy(B))}function Rt(B,Te){let Ce=g.get(Te);Ce===void 0&&(Ce=new WeakMap,g.set(Te,Ce));let Ze=Ce.get(B);Ze===void 0&&(Ze=n.getUniformBlockIndex(Te,B.name),Ce.set(B,Ze))}function at(B,Te){const Ze=g.get(Te).get(B);p.get(Te)!==Ze&&(n.uniformBlockBinding(Te,Ze,B.__bindingPointIndex),p.set(Te,Ze))}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),s===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),v={},N=null,G={},S={},E=new WeakMap,T=[],y=null,x=!1,b=null,w=null,L=null,O=null,F=null,I=null,re=null,C=new wt(0,0,0),D=0,ue=!1,ce=null,ve=null,H=null,X=null,te=null,de.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Ue,disable:Be,bindFramebuffer:dt,drawBuffers:ne,useProgram:Yt,setBlending:Ve,setMaterial:Ct,setFlipSided:st,setCullFace:P,setLineWidth:A,setPolygonOffset:J,setScissorTest:_e,activeTexture:me,bindTexture:xe,unbindTexture:He,compressedTexImage2D:Re,compressedTexImage3D:Ie,texImage2D:We,texImage3D:Oe,updateUBOMapping:Rt,uniformBlockBinding:at,texStorage2D:ft,texStorage3D:et,texSubImage2D:Xe,texSubImage3D:ot,compressedTexSubImage2D:pe,compressedTexSubImage3D:mt,scissor:it,viewport:vt,reset:Me}}function AC(n,e,t,s,o,l,u){const c=o.isWebGL2,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,A){return S?new OffscreenCanvas(P,A):bu("canvas")}function T(P,A,J,_e){let me=1;if((P.width>_e||P.height>_e)&&(me=_e/Math.max(P.width,P.height)),me<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const xe=A?Rd:Math.floor,He=xe(me*P.width),Re=xe(me*P.height);g===void 0&&(g=E(He,Re));const Ie=J?E(He,Re):g;return Ie.width=He,Ie.height=Re,Ie.getContext("2d").drawImage(P,0,0,He,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+He+"x"+Re+")."),Ie}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return Kg(P.width)&&Kg(P.height)}function x(P){return c?!1:P.wrapS!==Mi||P.wrapT!==Mi||P.minFilter!==Mn&&P.minFilter!==oi}function b(P,A){return P.generateMipmaps&&A&&P.minFilter!==Mn&&P.minFilter!==oi}function w(P){n.generateMipmap(P)}function L(P,A,J,_e,me=!1){if(c===!1)return A;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xe=A;if(A===n.RED&&(J===n.FLOAT&&(xe=n.R32F),J===n.HALF_FLOAT&&(xe=n.R16F),J===n.UNSIGNED_BYTE&&(xe=n.R8)),A===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(xe=n.R8UI),J===n.UNSIGNED_SHORT&&(xe=n.R16UI),J===n.UNSIGNED_INT&&(xe=n.R32UI),J===n.BYTE&&(xe=n.R8I),J===n.SHORT&&(xe=n.R16I),J===n.INT&&(xe=n.R32I)),A===n.RG&&(J===n.FLOAT&&(xe=n.RG32F),J===n.HALF_FLOAT&&(xe=n.RG16F),J===n.UNSIGNED_BYTE&&(xe=n.RG8)),A===n.RGBA){const He=me?wu:Tt.getTransfer(_e);J===n.FLOAT&&(xe=n.RGBA32F),J===n.HALF_FLOAT&&(xe=n.RGBA16F),J===n.UNSIGNED_BYTE&&(xe=He===Nt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(xe=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(xe=n.RGB5_A1)}return(xe===n.R16F||xe===n.R32F||xe===n.RG16F||xe===n.RG32F||xe===n.RGBA16F||xe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function O(P,A,J){return b(P,J)===!0||P.isFramebufferTexture&&P.minFilter!==Mn&&P.minFilter!==oi?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function F(P){return P===Mn||P===Sg||P===Rf?n.NEAREST:n.LINEAR}function I(P){const A=P.target;A.removeEventListener("dispose",I),C(A),A.isVideoTexture&&p.delete(A)}function re(P){const A=P.target;A.removeEventListener("dispose",re),ue(A)}function C(P){const A=s.get(P);if(A.__webglInit===void 0)return;const J=P.source,_e=v.get(J);if(_e){const me=_e[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&D(P),Object.keys(_e).length===0&&v.delete(J)}s.remove(P)}function D(P){const A=s.get(P);n.deleteTexture(A.__webglTexture);const J=P.source,_e=v.get(J);delete _e[A.__cacheKey],u.memory.textures--}function ue(P){const A=P.texture,J=s.get(P),_e=s.get(A);if(_e.__webglTexture!==void 0&&(n.deleteTexture(_e.__webglTexture),u.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(J.__webglFramebuffer[me]))for(let xe=0;xe<J.__webglFramebuffer[me].length;xe++)n.deleteFramebuffer(J.__webglFramebuffer[me][xe]);else n.deleteFramebuffer(J.__webglFramebuffer[me]);J.__webglDepthbuffer&&n.deleteRenderbuffer(J.__webglDepthbuffer[me])}else{if(Array.isArray(J.__webglFramebuffer))for(let me=0;me<J.__webglFramebuffer.length;me++)n.deleteFramebuffer(J.__webglFramebuffer[me]);else n.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&n.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&n.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let me=0;me<J.__webglColorRenderbuffer.length;me++)J.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(J.__webglColorRenderbuffer[me]);J.__webglDepthRenderbuffer&&n.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let me=0,xe=A.length;me<xe;me++){const He=s.get(A[me]);He.__webglTexture&&(n.deleteTexture(He.__webglTexture),u.memory.textures--),s.remove(A[me])}s.remove(A),s.remove(P)}let ce=0;function ve(){ce=0}function H(){const P=ce;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),ce+=1,P}function X(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function te(P,A){const J=s.get(P);if(P.isVideoTexture&&Ct(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const _e=P.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(J,P,A);return}}t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+A)}function Q(P,A){const J=s.get(P);if(P.version>0&&J.__version!==P.version){de(J,P,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+A)}function z(P,A){const J=s.get(P);if(P.version>0&&J.__version!==P.version){de(J,P,A);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+A)}function K(P,A){const J=s.get(P);if(P.version>0&&J.__version!==P.version){Se(J,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+A)}const j={[Td]:n.REPEAT,[Mi]:n.CLAMP_TO_EDGE,[wd]:n.MIRRORED_REPEAT},N={[Mn]:n.NEAREST,[Sg]:n.NEAREST_MIPMAP_NEAREST,[Rf]:n.NEAREST_MIPMAP_LINEAR,[oi]:n.LINEAR,[sE]:n.LINEAR_MIPMAP_NEAREST,[Sa]:n.LINEAR_MIPMAP_LINEAR},G={[_E]:n.NEVER,[TE]:n.ALWAYS,[xE]:n.LESS,[l_]:n.LEQUAL,[yE]:n.EQUAL,[EE]:n.GEQUAL,[SE]:n.GREATER,[ME]:n.NOTEQUAL};function q(P,A,J){if(J?(n.texParameteri(P,n.TEXTURE_WRAP_S,j[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,j[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,j[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,N[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,N[A.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Mi||A.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,F(A.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,F(A.minFilter)),A.minFilter!==Mn&&A.minFilter!==oi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,G[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Mn||A.minFilter!==Rf&&A.minFilter!==Sa||A.type===Lr&&e.has("OES_texture_float_linear")===!1||c===!1&&A.type===Ma&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||s.get(A).__currentAnisotropy)&&(n.texParameterf(P,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy)}}function le(P,A){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",I));const _e=A.source;let me=v.get(_e);me===void 0&&(me={},v.set(_e,me));const xe=X(A);if(xe!==P.__cacheKey){me[xe]===void 0&&(me[xe]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,J=!0),me[xe].usedTimes++;const He=me[P.__cacheKey];He!==void 0&&(me[P.__cacheKey].usedTimes--,He.usedTimes===0&&D(A)),P.__cacheKey=xe,P.__webglTexture=me[xe].texture}return J}function de(P,A,J){let _e=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=n.TEXTURE_3D);const me=le(P,A),xe=A.source;t.bindTexture(_e,P.__webglTexture,n.TEXTURE0+J);const He=s.get(xe);if(xe.version!==He.__version||me===!0){t.activeTexture(n.TEXTURE0+J);const Re=Tt.getPrimaries(Tt.workingColorSpace),Ie=A.colorSpace===li?null:Tt.getPrimaries(A.colorSpace),Xe=A.colorSpace===li||Re===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const ot=x(A)&&y(A.image)===!1;let pe=T(A.image,ot,!1,o.maxTextureSize);pe=st(A,pe);const mt=y(pe)||c,ft=l.convert(A.format,A.colorSpace);let et=l.convert(A.type),We=L(A.internalFormat,ft,et,A.colorSpace,A.isVideoTexture);q(_e,A,mt);let Oe;const it=A.mipmaps,vt=c&&A.isVideoTexture!==!0&&We!==o_,Rt=He.__version===void 0||me===!0,at=O(A,pe,mt);if(A.isDepthTexture)We=n.DEPTH_COMPONENT,c?A.type===Lr?We=n.DEPTH_COMPONENT32F:A.type===Pr?We=n.DEPTH_COMPONENT24:A.type===hs?We=n.DEPTH24_STENCIL8:We=n.DEPTH_COMPONENT16:A.type===Lr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ps&&We===n.DEPTH_COMPONENT&&A.type!==Jd&&A.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Pr,et=l.convert(A.type)),A.format===xo&&We===n.DEPTH_COMPONENT&&(We=n.DEPTH_STENCIL,A.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=hs,et=l.convert(A.type))),Rt&&(vt?t.texStorage2D(n.TEXTURE_2D,1,We,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,We,pe.width,pe.height,0,ft,et,null));else if(A.isDataTexture)if(it.length>0&&mt){vt&&Rt&&t.texStorage2D(n.TEXTURE_2D,at,We,it[0].width,it[0].height);for(let Me=0,B=it.length;Me<B;Me++)Oe=it[Me],vt?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,ft,et,Oe.data):t.texImage2D(n.TEXTURE_2D,Me,We,Oe.width,Oe.height,0,ft,et,Oe.data);A.generateMipmaps=!1}else vt?(Rt&&t.texStorage2D(n.TEXTURE_2D,at,We,pe.width,pe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,ft,et,pe.data)):t.texImage2D(n.TEXTURE_2D,0,We,pe.width,pe.height,0,ft,et,pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){vt&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,We,it[0].width,it[0].height,pe.depth);for(let Me=0,B=it.length;Me<B;Me++)Oe=it[Me],A.format!==Ei?ft!==null?vt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,pe.depth,ft,Oe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,We,Oe.width,Oe.height,pe.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,pe.depth,ft,et,Oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,We,Oe.width,Oe.height,pe.depth,0,ft,et,Oe.data)}else{vt&&Rt&&t.texStorage2D(n.TEXTURE_2D,at,We,it[0].width,it[0].height);for(let Me=0,B=it.length;Me<B;Me++)Oe=it[Me],A.format!==Ei?ft!==null?vt?t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,ft,Oe.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,We,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,ft,et,Oe.data):t.texImage2D(n.TEXTURE_2D,Me,We,Oe.width,Oe.height,0,ft,et,Oe.data)}else if(A.isDataArrayTexture)vt?(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,at,We,pe.width,pe.height,pe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ft,et,pe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,pe.width,pe.height,pe.depth,0,ft,et,pe.data);else if(A.isData3DTexture)vt?(Rt&&t.texStorage3D(n.TEXTURE_3D,at,We,pe.width,pe.height,pe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ft,et,pe.data)):t.texImage3D(n.TEXTURE_3D,0,We,pe.width,pe.height,pe.depth,0,ft,et,pe.data);else if(A.isFramebufferTexture){if(Rt)if(vt)t.texStorage2D(n.TEXTURE_2D,at,We,pe.width,pe.height);else{let Me=pe.width,B=pe.height;for(let Te=0;Te<at;Te++)t.texImage2D(n.TEXTURE_2D,Te,We,Me,B,0,ft,et,null),Me>>=1,B>>=1}}else if(it.length>0&&mt){vt&&Rt&&t.texStorage2D(n.TEXTURE_2D,at,We,it[0].width,it[0].height);for(let Me=0,B=it.length;Me<B;Me++)Oe=it[Me],vt?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,ft,et,Oe):t.texImage2D(n.TEXTURE_2D,Me,We,ft,et,Oe);A.generateMipmaps=!1}else vt?(Rt&&t.texStorage2D(n.TEXTURE_2D,at,We,pe.width,pe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,et,pe)):t.texImage2D(n.TEXTURE_2D,0,We,ft,et,pe);b(A,mt)&&w(_e),He.__version=xe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Se(P,A,J){if(A.image.length!==6)return;const _e=le(P,A),me=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+J);const xe=s.get(me);if(me.version!==xe.__version||_e===!0){t.activeTexture(n.TEXTURE0+J);const He=Tt.getPrimaries(Tt.workingColorSpace),Re=A.colorSpace===li?null:Tt.getPrimaries(A.colorSpace),Ie=A.colorSpace===li||He===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Xe=A.isCompressedTexture||A.image[0].isCompressedTexture,ot=A.image[0]&&A.image[0].isDataTexture,pe=[];for(let Me=0;Me<6;Me++)!Xe&&!ot?pe[Me]=T(A.image[Me],!1,!0,o.maxCubemapSize):pe[Me]=ot?A.image[Me].image:A.image[Me],pe[Me]=st(A,pe[Me]);const mt=pe[0],ft=y(mt)||c,et=l.convert(A.format,A.colorSpace),We=l.convert(A.type),Oe=L(A.internalFormat,et,We,A.colorSpace),it=c&&A.isVideoTexture!==!0,vt=xe.__version===void 0||_e===!0;let Rt=O(A,mt,ft);q(n.TEXTURE_CUBE_MAP,A,ft);let at;if(Xe){it&&vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Oe,mt.width,mt.height);for(let Me=0;Me<6;Me++){at=pe[Me].mipmaps;for(let B=0;B<at.length;B++){const Te=at[B];A.format!==Ei?et!==null?it?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B,0,0,Te.width,Te.height,et,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B,0,0,Te.width,Te.height,et,We,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B,Oe,Te.width,Te.height,0,et,We,Te.data)}}}else{at=A.mipmaps,it&&vt&&(at.length>0&&Rt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Oe,pe[0].width,pe[0].height));for(let Me=0;Me<6;Me++)if(ot){it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,pe[Me].width,pe[Me].height,et,We,pe[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Oe,pe[Me].width,pe[Me].height,0,et,We,pe[Me].data);for(let B=0;B<at.length;B++){const Ce=at[B].image[Me].image;it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B+1,0,0,Ce.width,Ce.height,et,We,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B+1,Oe,Ce.width,Ce.height,0,et,We,Ce.data)}}else{it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,et,We,pe[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Oe,et,We,pe[Me]);for(let B=0;B<at.length;B++){const Te=at[B];it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B+1,0,0,et,We,Te.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B+1,Oe,et,We,Te.image[Me])}}}b(A,ft)&&w(n.TEXTURE_CUBE_MAP),xe.__version=me.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Ee(P,A,J,_e,me,xe){const He=l.convert(J.format,J.colorSpace),Re=l.convert(J.type),Ie=L(J.internalFormat,He,Re,J.colorSpace);if(!s.get(A).__hasExternalTextures){const ot=Math.max(1,A.width>>xe),pe=Math.max(1,A.height>>xe);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,xe,Ie,ot,pe,A.depth,0,He,Re,null):t.texImage2D(me,xe,Ie,ot,pe,0,He,Re,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ve(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,me,s.get(J).__webglTexture,0,nt(A)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_e,me,s.get(J).__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(P,A,J){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let _e=c===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(J||Ve(A)){const me=A.depthTexture;me&&me.isDepthTexture&&(me.type===Lr?_e=n.DEPTH_COMPONENT32F:me.type===Pr&&(_e=n.DEPTH_COMPONENT24));const xe=nt(A);Ve(A)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,_e,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,_e,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,_e,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const _e=nt(A);J&&Ve(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,n.DEPTH24_STENCIL8,A.width,A.height):Ve(A)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const _e=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let me=0;me<_e.length;me++){const xe=_e[me],He=l.convert(xe.format,xe.colorSpace),Re=l.convert(xe.type),Ie=L(xe.internalFormat,He,Re,xe.colorSpace),Xe=nt(A);J&&Ve(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ie,A.width,A.height):Ve(A)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Ie,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),te(A.depthTexture,0);const _e=s.get(A.depthTexture).__webglTexture,me=nt(A);if(A.depthTexture.format===ps)Ve(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0);else if(A.depthTexture.format===xo)Ve(A)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Be(P){const A=s.get(P),J=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ue(A.__webglFramebuffer,P)}else if(J){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]=n.createRenderbuffer(),be(A.__webglDepthbuffer[_e],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),be(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(P,A,J){const _e=s.get(P);A!==void 0&&Ee(_e.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&Be(P)}function ne(P){const A=P.texture,J=s.get(P),_e=s.get(A);P.addEventListener("dispose",re),P.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture()),_e.__version=A.version,u.memory.textures++);const me=P.isWebGLCubeRenderTarget===!0,xe=P.isWebGLMultipleRenderTargets===!0,He=y(P)||c;if(me){J.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(c&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Re]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)J.__webglFramebuffer[Re][Ie]=n.createFramebuffer()}else J.__webglFramebuffer[Re]=n.createFramebuffer()}else{if(c&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)J.__webglFramebuffer[Re]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(xe)if(o.drawBuffers){const Re=P.texture;for(let Ie=0,Xe=Re.length;Ie<Xe;Ie++){const ot=s.get(Re[Ie]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&P.samples>0&&Ve(P)===!1){const Re=xe?A:[A];J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Re.length;Ie++){const Xe=Re[Ie];J.__webglColorRenderbuffer[Ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[Ie]);const ot=l.convert(Xe.format,Xe.colorSpace),pe=l.convert(Xe.type),mt=L(Xe.internalFormat,ot,pe,Xe.colorSpace,P.isXRRenderTarget===!0),ft=nt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,mt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,J.__webglColorRenderbuffer[Ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),be(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,_e.__webglTexture),q(n.TEXTURE_CUBE_MAP,A,He);for(let Re=0;Re<6;Re++)if(c&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)Ee(J.__webglFramebuffer[Re][Ie],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ie);else Ee(J.__webglFramebuffer[Re],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);b(A,He)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){const Re=P.texture;for(let Ie=0,Xe=Re.length;Ie<Xe;Ie++){const ot=Re[Ie],pe=s.get(ot);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),q(n.TEXTURE_2D,ot,He),Ee(J.__webglFramebuffer,P,ot,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,0),b(ot,He)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let Re=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(c?Re=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Re,_e.__webglTexture),q(Re,A,He),c&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)Ee(J.__webglFramebuffer[Ie],P,A,n.COLOR_ATTACHMENT0,Re,Ie);else Ee(J.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,Re,0);b(A,He)&&w(Re),t.unbindTexture()}P.depthBuffer&&Be(P)}function Yt(P){const A=y(P)||c,J=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let _e=0,me=J.length;_e<me;_e++){const xe=J[_e];if(b(xe,A)){const He=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=s.get(xe).__webglTexture;t.bindTexture(He,Re),w(He),t.unbindTexture()}}}function je(P){if(c&&P.samples>0&&Ve(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],J=P.width,_e=P.height;let me=n.COLOR_BUFFER_BIT;const xe=[],He=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=s.get(P),Ie=P.isWebGLMultipleRenderTargets===!0;if(Ie)for(let Xe=0;Xe<A.length;Xe++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Xe=0;Xe<A.length;Xe++){xe.push(n.COLOR_ATTACHMENT0+Xe),P.depthBuffer&&xe.push(He);const ot=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(ot===!1&&(P.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),Ie&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Xe]),ot===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[He]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[He])),Ie){const pe=s.get(A[Xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,J,_e,0,0,J,_e,me,n.NEAREST),h&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ie)for(let Xe=0;Xe<A.length;Xe++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Xe]);const ot=s.get(A[Xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,ot,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function nt(P){return Math.min(o.maxSamples,P.samples)}function Ve(P){const A=s.get(P);return c&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(P){const A=u.render.frame;p.get(P)!==A&&(p.set(P,A),P.update())}function st(P,A){const J=P.colorSpace,_e=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ad||J!==Ji&&J!==li&&(Tt.getTransfer(J)===Nt?c===!1?e.has("EXT_sRGB")===!0&&_e===Ei?(P.format=Ad,P.minFilter=oi,P.generateMipmaps=!1):A=c_.sRGBToLinear(A):(_e!==Ei||me!==Ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}this.allocateTextureUnit=H,this.resetTextureUnits=ve,this.setTexture2D=te,this.setTexture2DArray=Q,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=dt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ve}function CC(n,e,t){const s=t.isWebGL2;function o(l,u=li){let c;const d=Tt.getTransfer(u);if(l===Ur)return n.UNSIGNED_BYTE;if(l===t_)return n.UNSIGNED_SHORT_4_4_4_4;if(l===n_)return n.UNSIGNED_SHORT_5_5_5_1;if(l===oE)return n.BYTE;if(l===aE)return n.SHORT;if(l===Jd)return n.UNSIGNED_SHORT;if(l===e_)return n.INT;if(l===Pr)return n.UNSIGNED_INT;if(l===Lr)return n.FLOAT;if(l===Ma)return s?n.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===lE)return n.ALPHA;if(l===Ei)return n.RGBA;if(l===uE)return n.LUMINANCE;if(l===cE)return n.LUMINANCE_ALPHA;if(l===ps)return n.DEPTH_COMPONENT;if(l===xo)return n.DEPTH_STENCIL;if(l===Ad)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===fE)return n.RED;if(l===i_)return n.RED_INTEGER;if(l===dE)return n.RG;if(l===r_)return n.RG_INTEGER;if(l===s_)return n.RGBA_INTEGER;if(l===bf||l===Pf||l===Lf||l===Df)if(d===Nt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===bf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Pf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Lf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Df)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===bf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Pf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Lf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Df)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Mg||l===Eg||l===Tg||l===wg)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Mg)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Eg)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Tg)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===wg)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===o_)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Ag||l===Cg)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Ag)return d===Nt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Cg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Rg||l===bg||l===Pg||l===Lg||l===Dg||l===Ng||l===Ug||l===Ig||l===Fg||l===Og||l===kg||l===Bg||l===zg||l===Vg)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Rg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===bg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Pg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Lg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Dg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Ng)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Ug)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Ig)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Fg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Og)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===kg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Bg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===zg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Vg)return d===Nt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Nf||l===Hg||l===Gg)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===Nf)return d===Nt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Hg)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Gg)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===hE||l===Wg||l===jg||l===Xg)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===Nf)return c.COMPRESSED_RED_RGTC1_EXT;if(l===Wg)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===jg)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Xg)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===hs?s?n.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):n[l]!==void 0?n[l]:null}return{convert:o}}class RC extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pu extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bC={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,s),x=this._getHandJoint(h,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=p.position.distanceTo(g.position),S=.02,E=.005;h.inputState.pinching&&v>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(bC)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new pu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class PC extends Eo{constructor(e,t){super();const s=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,v=null,S=null,E=null;const T=t.getContextAttributes();let y=null,x=null;const b=[],w=[],L=new At;let O=null;const F=new ai;F.layers.enable(1),F.viewport=new hn;const I=new ai;I.layers.enable(2),I.viewport=new hn;const re=[F,I],C=new RC;C.layers.enable(1),C.layers.enable(2);let D=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=b[q];return le===void 0&&(le=new rd,b[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=b[q];return le===void 0&&(le=new rd,b[q]=le),le.getGripSpace()},this.getHand=function(q){let le=b[q];return le===void 0&&(le=new rd,b[q]=le),le.getHandSpace()};function ce(q){const le=w.indexOf(q.inputSource);if(le===-1)return;const de=b[le];de!==void 0&&(de.update(q.inputSource,q.frame,h||u),de.dispatchEvent({type:q.type,data:q.inputSource}))}function ve(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",ve),o.removeEventListener("inputsourceschange",H);for(let q=0;q<b.length;q++){const le=w[q];le!==null&&(w[q]=null,b[q].disconnect(le))}D=null,ue=null,e.setRenderTarget(y),S=null,v=null,g=null,o=null,x=null,G.stop(),s.isPresenting=!1,e.setPixelRatio(O),e.setSize(L.width,L.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){c=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",ve),o.addEventListener("inputsourceschange",H),T.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(L),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:o.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,le),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),x=new xs(S.framebufferWidth,S.framebufferHeight,{format:Ei,type:Ur,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let le=null,de=null,Se=null;T.depth&&(Se=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=T.stencil?xo:ps,de=T.stencil?hs:Pr);const Ee={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:l};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ee),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),x=new xs(v.textureWidth,v.textureHeight,{format:Ei,type:Ur,depthTexture:new E_(v.textureWidth,v.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const be=e.properties.get(x);be.__ignoreDepthValues=v.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),G.setContext(o),G.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function H(q){for(let le=0;le<q.removed.length;le++){const de=q.removed[le],Se=w.indexOf(de);Se>=0&&(w[Se]=null,b[Se].disconnect(de))}for(let le=0;le<q.added.length;le++){const de=q.added[le];let Se=w.indexOf(de);if(Se===-1){for(let be=0;be<b.length;be++)if(be>=w.length){w.push(de),Se=be;break}else if(w[be]===null){w[be]=de,Se=be;break}if(Se===-1)break}const Ee=b[Se];Ee&&Ee.connect(de)}}const X=new ae,te=new ae;function Q(q,le,de){X.setFromMatrixPosition(le.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const Se=X.distanceTo(te),Ee=le.projectionMatrix.elements,be=de.projectionMatrix.elements,Ue=Ee[14]/(Ee[10]-1),Be=Ee[14]/(Ee[10]+1),dt=(Ee[9]+1)/Ee[5],ne=(Ee[9]-1)/Ee[5],Yt=(Ee[8]-1)/Ee[0],je=(be[8]+1)/be[0],nt=Ue*Yt,Ve=Ue*je,Ct=Se/(-Yt+je),st=Ct*-Yt;le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ(Ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const P=Ue+Ct,A=Be+Ct,J=nt-st,_e=Ve+(Se-st),me=dt*Be/A*P,xe=ne*Be/A*P;q.projectionMatrix.makePerspective(J,_e,me,xe,P,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function z(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;C.near=I.near=F.near=q.near,C.far=I.far=F.far=q.far,(D!==C.near||ue!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,ue=C.far);const le=q.parent,de=C.cameras;z(C,le);for(let Se=0;Se<de.length;Se++)z(de[Se],le);de.length===2?Q(C,F,I):C.projectionMatrix.copy(F.projectionMatrix),K(q,C,le)};function K(q,le,de){de===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(q){d=q,v!==null&&(v.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)};let j=null;function N(q,le){if(p=le.getViewerPose(h||u),E=le,p!==null){const de=p.views;S!==null&&(e.setRenderTargetFramebuffer(x,S.framebuffer),e.setRenderTarget(x));let Se=!1;de.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Ee=0;Ee<de.length;Ee++){const be=de[Ee];let Ue=null;if(S!==null)Ue=S.getViewport(be);else{const dt=g.getViewSubImage(v,be);Ue=dt.viewport,Ee===0&&(e.setRenderTargetTextures(x,dt.colorTexture,v.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(x))}let Be=re[Ee];Be===void 0&&(Be=new ai,Be.layers.enable(Ee),Be.viewport=new hn,re[Ee]=Be),Be.matrix.fromArray(be.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(be.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ee===0&&(C.matrix.copy(Be.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(Be)}}for(let de=0;de<b.length;de++){const Se=w[de],Ee=b[de];Se!==null&&Ee!==void 0&&Ee.update(Se,le,h||u)}j&&j(q,le),le.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:le}),E=null}const G=new M_;G.setAnimationLoop(N),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}}function LC(n,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,__(n)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,b,w,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),g(y,x)):x.isMeshPhongMaterial?(l(y,x),p(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,L)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),T(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?d(y,x,b,w):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Vn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Vn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const b=e.get(x).envMap;if(b&&(y.envMap.value=b,y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap){y.lightMap.value=x.lightMap;const w=n._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=x.lightMapIntensity*w,t(x.lightMap,y.lightMapTransform)}x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,b,w){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*b,y.scale.value=w*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),e.get(x).envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,b){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vn&&y.clearcoatNormalScale.value.negate())),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const b=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function DC(n,e,t,s){let o={},l={},u=[];const c=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(b,w){const L=w.program;s.uniformBlockBinding(b,L)}function h(b,w){let L=o[b.id];L===void 0&&(E(b),L=p(b),o[b.id]=L,b.addEventListener("dispose",y));const O=w.program;s.updateUBOMapping(b,O);const F=e.render.frame;l[b.id]!==F&&(v(b),l[b.id]=F)}function p(b){const w=g();b.__bindingPointIndex=w;const L=n.createBuffer(),O=b.__size,F=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,O,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,L),L}function g(){for(let b=0;b<c;b++)if(u.indexOf(b)===-1)return u.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const w=o[b.id],L=b.uniforms,O=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let F=0,I=L.length;F<I;F++){const re=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,D=re.length;C<D;C++){const ue=re[C];if(S(ue,F,C,O)===!0){const ce=ue.__offset,ve=Array.isArray(ue.value)?ue.value:[ue.value];let H=0;for(let X=0;X<ve.length;X++){const te=ve[X],Q=T(te);typeof te=="number"||typeof te=="boolean"?(ue.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,ce+H,ue.__data)):te.isMatrix3?(ue.__data[0]=te.elements[0],ue.__data[1]=te.elements[1],ue.__data[2]=te.elements[2],ue.__data[3]=0,ue.__data[4]=te.elements[3],ue.__data[5]=te.elements[4],ue.__data[6]=te.elements[5],ue.__data[7]=0,ue.__data[8]=te.elements[6],ue.__data[9]=te.elements[7],ue.__data[10]=te.elements[8],ue.__data[11]=0):(te.toArray(ue.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ce,ue.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(b,w,L,O){const F=b.value,I=w+"_"+L;if(O[I]===void 0)return typeof F=="number"||typeof F=="boolean"?O[I]=F:O[I]=F.clone(),!0;{const re=O[I];if(typeof F=="number"||typeof F=="boolean"){if(re!==F)return O[I]=F,!0}else if(re.equals(F)===!1)return re.copy(F),!0}return!1}function E(b){const w=b.uniforms;let L=0;const O=16;for(let I=0,re=w.length;I<re;I++){const C=Array.isArray(w[I])?w[I]:[w[I]];for(let D=0,ue=C.length;D<ue;D++){const ce=C[D],ve=Array.isArray(ce.value)?ce.value:[ce.value];for(let H=0,X=ve.length;H<X;H++){const te=ve[H],Q=T(te),z=L%O;z!==0&&O-z<Q.boundary&&(L+=O-z),ce.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=L,L+=Q.storage}}}const F=L%O;return F>0&&(L+=O-F),b.__size=L,b.__cache={},this}function T(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function y(b){const w=b.target;w.removeEventListener("dispose",y);const L=u.indexOf(w.__bindingPointIndex);u.splice(L,1),n.deleteBuffer(o[w.id]),delete o[w.id],delete l[w.id]}function x(){for(const b in o)n.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:d,update:h,dispose:x}}class b_{constructor(e={}){const{canvas:t=AE(),context:s=null,depth:o=!0,stencil:l=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let v;s!==null?v=s.getContextAttributes().alpha:v=u;const S=new Uint32Array(4),E=new Int32Array(4);let T=null,y=null;const x=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this._useLegacyLights=!1,this.toneMapping=Nr,this.toneMappingExposure=1;const w=this;let L=!1,O=0,F=0,I=null,re=-1,C=null;const D=new hn,ue=new hn;let ce=null;const ve=new wt(0);let H=0,X=t.width,te=t.height,Q=1,z=null,K=null;const j=new hn(0,0,X,te),N=new hn(0,0,X,te);let G=!1;const q=new S_;let le=!1,de=!1,Se=null;const Ee=new pn,be=new At,Ue=new ae,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return I===null?Q:1}let ne=s;function Yt(R,$){for(let se=0;se<R.length;se++){const oe=R[se],ie=t.getContext(oe,$);if(ie!==null)return ie}return null}try{const R={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qd}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",Te,!1),ne===null){const $=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&$.shift(),ne=Yt($,R),ne===null)throw Yt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ne instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let je,nt,Ve,Ct,st,P,A,J,_e,me,xe,He,Re,Ie,Xe,ot,pe,mt,ft,et,We,Oe,it,vt;function Rt(){je=new HA(ne),nt=new IA(ne,je,e),je.init(nt),Oe=new CC(ne,je,nt),Ve=new wC(ne,je,nt),Ct=new jA(ne),st=new fC,P=new AC(ne,je,Ve,st,nt,Oe,Ct),A=new OA(w),J=new VA(w),_e=new QE(ne,nt),it=new NA(ne,je,_e,nt),me=new GA(ne,_e,Ct,it),xe=new $A(ne,me,_e,Ct),ft=new qA(ne,nt,P),ot=new FA(st),He=new cC(w,A,J,je,nt,it,ot),Re=new LC(w,st),Ie=new hC,Xe=new xC(je,nt),mt=new DA(w,A,J,Ve,xe,v,d),pe=new TC(w,xe,nt),vt=new DC(ne,Ct,nt,Ve),et=new UA(ne,je,Ct,nt),We=new WA(ne,je,Ct,nt),Ct.programs=He.programs,w.capabilities=nt,w.extensions=je,w.properties=st,w.renderLists=Ie,w.shadowMap=pe,w.state=Ve,w.info=Ct}Rt();const at=new PC(w,ne);this.xr=at,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const R=je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(X,te,!1))},this.getSize=function(R){return R.set(X,te)},this.setSize=function(R,$,se=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,te=$,t.width=Math.floor(R*Q),t.height=Math.floor($*Q),se===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(X*Q,te*Q).floor()},this.setDrawingBufferSize=function(R,$,se){X=R,te=$,Q=se,t.width=Math.floor(R*se),t.height=Math.floor($*se),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,$,se,oe){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,$,se,oe),Ve.viewport(D.copy(j).multiplyScalar(Q).floor())},this.getScissor=function(R){return R.copy(N)},this.setScissor=function(R,$,se,oe){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,$,se,oe),Ve.scissor(ue.copy(N).multiplyScalar(Q).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(R){Ve.setScissorTest(G=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(R=!0,$=!0,se=!0){let oe=0;if(R){let ie=!1;if(I!==null){const Pe=I.texture.format;ie=Pe===s_||Pe===r_||Pe===i_}if(ie){const Pe=I.texture.type,Ge=Pe===Ur||Pe===Pr||Pe===Jd||Pe===hs||Pe===t_||Pe===n_,Ke=mt.getClearColor(),De=mt.getClearAlpha(),lt=Ke.r,tt=Ke.g,rt=Ke.b;Ge?(S[0]=lt,S[1]=tt,S[2]=rt,S[3]=De,ne.clearBufferuiv(ne.COLOR,0,S)):(E[0]=lt,E[1]=tt,E[2]=rt,E[3]=De,ne.clearBufferiv(ne.COLOR,0,E))}else oe|=ne.COLOR_BUFFER_BIT}$&&(oe|=ne.DEPTH_BUFFER_BIT),se&&(oe|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ie.dispose(),Xe.dispose(),st.dispose(),A.dispose(),J.dispose(),xe.dispose(),it.dispose(),vt.dispose(),He.dispose(),at.dispose(),at.removeEventListener("sessionstart",nn),at.removeEventListener("sessionend",xt),Se&&(Se.dispose(),Se=null),Zt.stop()};function Me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=Ct.autoReset,$=pe.enabled,se=pe.autoUpdate,oe=pe.needsUpdate,ie=pe.type;Rt(),Ct.autoReset=R,pe.enabled=$,pe.autoUpdate=se,pe.needsUpdate=oe,pe.type=ie}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ce(R){const $=R.target;$.removeEventListener("dispose",Ce),Ze($)}function Ze(R){Ye(R),st.remove(R)}function Ye(R){const $=st.get(R).programs;$!==void 0&&($.forEach(function(se){He.releaseProgram(se)}),R.isShaderMaterial&&He.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,se,oe,ie,Pe){$===null&&($=Be);const Ge=ie.isMesh&&ie.matrixWorld.determinant()<0,Ke=Wu(R,$,se,oe,ie);Ve.setMaterial(oe,Ge);let De=se.index,lt=1;if(oe.wireframe===!0){if(De=me.getWireframeAttribute(se),De===void 0)return;lt=2}const tt=se.drawRange,rt=se.attributes.position;let bt=tt.start*lt,Tn=(tt.start+tt.count)*lt;Pe!==null&&(bt=Math.max(bt,Pe.start*lt),Tn=Math.min(Tn,(Pe.start+Pe.count)*lt)),De!==null?(bt=Math.max(bt,0),Tn=Math.min(Tn,De.count)):rt!=null&&(bt=Math.max(bt,0),Tn=Math.min(Tn,rt.count));const Wt=Tn-bt;if(Wt<0||Wt===1/0)return;it.setup(ie,oe,Ke,se,De);let Pn,gt=et;if(De!==null&&(Pn=_e.get(De),gt=We,gt.setIndex(Pn)),ie.isMesh)oe.wireframe===!0?(Ve.setLineWidth(oe.wireframeLinewidth*dt()),gt.setMode(ne.LINES)):gt.setMode(ne.TRIANGLES);else if(ie.isLine){let ut=oe.linewidth;ut===void 0&&(ut=1),Ve.setLineWidth(ut*dt()),ie.isLineSegments?gt.setMode(ne.LINES):ie.isLineLoop?gt.setMode(ne.LINE_LOOP):gt.setMode(ne.LINE_STRIP)}else ie.isPoints?gt.setMode(ne.POINTS):ie.isSprite&&gt.setMode(ne.TRIANGLES);if(ie.isBatchedMesh)gt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)gt.renderInstances(bt,Wt,ie.count);else if(se.isInstancedBufferGeometry){const ut=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,wn=Math.min(se.instanceCount,ut);gt.renderInstances(bt,Wt,wn)}else gt.render(bt,Wt)};function St(R,$,se){R.transparent===!0&&R.side===Ki&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,nr(R,$,se),R.side=Ir,R.needsUpdate=!0,nr(R,$,se),R.side=Ki):nr(R,$,se)}this.compile=function(R,$,se=null){se===null&&(se=R),y=Xe.get(se),y.init(),b.push(y),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(y.pushLight(ie),ie.castShadow&&y.pushShadow(ie))}),R!==se&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(y.pushLight(ie),ie.castShadow&&y.pushShadow(ie))}),y.setupLights(w._useLegacyLights);const oe=new Set;return R.traverse(function(ie){const Pe=ie.material;if(Pe)if(Array.isArray(Pe))for(let Ge=0;Ge<Pe.length;Ge++){const Ke=Pe[Ge];St(Ke,se,ie),oe.add(Ke)}else St(Pe,se,ie),oe.add(Pe)}),b.pop(),y=null,oe},this.compileAsync=function(R,$,se=null){const oe=this.compile(R,$,se);return new Promise(ie=>{function Pe(){if(oe.forEach(function(Ge){st.get(Ge).currentProgram.isReady()&&oe.delete(Ge)}),oe.size===0){ie(R);return}setTimeout(Pe,10)}je.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Mt=null;function zt(R){Mt&&Mt(R)}function nn(){Zt.stop()}function xt(){Zt.start()}const Zt=new M_;Zt.setAnimationLoop(zt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(R){Mt=R,at.setAnimationLoop(R),R===null?Zt.stop():Zt.start()},at.addEventListener("sessionstart",nn),at.addEventListener("sessionend",xt),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera($),$=at.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,$,I),y=Xe.get(R,b.length),y.init(),b.push(y),Ee.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),q.setFromProjectionMatrix(Ee),de=this.localClippingEnabled,le=ot.init(this.clippingPlanes,de),T=Ie.get(R,x.length),T.init(),x.push(T),mn(R,$,0,w.sortObjects),T.finish(),w.sortObjects===!0&&T.sort(z,K),this.info.render.frame++,le===!0&&ot.beginShadows();const se=y.state.shadowsArray;if(pe.render(se,R,$),le===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),mt.render(T,R),y.setupLights(w._useLegacyLights),$.isArrayCamera){const oe=$.cameras;for(let ie=0,Pe=oe.length;ie<Pe;ie++){const Ge=oe[ie];Ba(T,R,Ge,Ge.viewport)}}else Ba(T,R,$);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(w,R,$),it.resetDefaultState(),re=-1,C=null,b.pop(),b.length>0?y=b[b.length-1]:y=null,x.pop(),x.length>0?T=x[x.length-1]:T=null};function mn(R,$,se,oe){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){oe&&Ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);const Ge=xe.update(R),Ke=R.material;Ke.visible&&T.push(R,Ge,Ke,se,Ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const Ge=xe.update(R),Ke=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ue.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Ue.copy(Ge.boundingSphere.center)),Ue.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ke)){const De=Ge.groups;for(let lt=0,tt=De.length;lt<tt;lt++){const rt=De[lt],bt=Ke[rt.materialIndex];bt&&bt.visible&&T.push(R,Ge,bt,se,Ue.z,rt)}}else Ke.visible&&T.push(R,Ge,Ke,se,Ue.z,null)}}const Pe=R.children;for(let Ge=0,Ke=Pe.length;Ge<Ke;Ge++)mn(Pe[Ge],$,se,oe)}function Ba(R,$,se,oe){const ie=R.opaque,Pe=R.transmissive,Ge=R.transparent;y.setupLightsView(se),le===!0&&ot.setGlobalState(w.clippingPlanes,se),Pe.length>0&&zr(ie,Pe,$,se),oe&&Ve.viewport(D.copy(oe)),ie.length>0&&Ni(ie,$,se),Pe.length>0&&Ni(Pe,$,se),Ge.length>0&&Ni(Ge,$,se),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function zr(R,$,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Pe=nt.isWebGL2;Se===null&&(Se=new xs(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?Ma:Ur,minFilter:Sa,samples:Pe?4:0})),w.getDrawingBufferSize(be),Pe?Se.setSize(be.x,be.y):Se.setSize(Rd(be.x),Rd(be.y));const Ge=w.getRenderTarget();w.setRenderTarget(Se),w.getClearColor(ve),H=w.getClearAlpha(),H<1&&w.setClearColor(16777215,.5),w.clear();const Ke=w.toneMapping;w.toneMapping=Nr,Ni(R,se,oe),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se);let De=!1;for(let lt=0,tt=$.length;lt<tt;lt++){const rt=$[lt],bt=rt.object,Tn=rt.geometry,Wt=rt.material,Pn=rt.group;if(Wt.side===Ki&&bt.layers.test(oe.layers)){const gt=Wt.side;Wt.side=Vn,Wt.needsUpdate=!0,Vr(bt,se,oe,Tn,Wt,Pn),Wt.side=gt,Wt.needsUpdate=!0,De=!0}}De===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se)),w.setRenderTarget(Ge),w.setClearColor(ve,H),w.toneMapping=Ke}function Ni(R,$,se){const oe=$.isScene===!0?$.overrideMaterial:null;for(let ie=0,Pe=R.length;ie<Pe;ie++){const Ge=R[ie],Ke=Ge.object,De=Ge.geometry,lt=oe===null?Ge.material:oe,tt=Ge.group;Ke.layers.test(se.layers)&&Vr(Ke,$,se,De,lt,tt)}}function Vr(R,$,se,oe,ie,Pe){R.onBeforeRender(w,$,se,oe,ie,Pe),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(w,$,se,oe,R,Pe),ie.transparent===!0&&ie.side===Ki&&ie.forceSinglePass===!1?(ie.side=Vn,ie.needsUpdate=!0,w.renderBufferDirect(se,$,oe,ie,R,Pe),ie.side=Ir,ie.needsUpdate=!0,w.renderBufferDirect(se,$,oe,ie,R,Pe),ie.side=Ki):w.renderBufferDirect(se,$,oe,ie,R,Pe),R.onAfterRender(w,$,se,oe,ie,Pe)}function nr(R,$,se){$.isScene!==!0&&($=Be);const oe=st.get(R),ie=y.state.lights,Pe=y.state.shadowsArray,Ge=ie.state.version,Ke=He.getParameters(R,ie.state,Pe,$,se),De=He.getProgramCacheKey(Ke);let lt=oe.programs;oe.environment=R.isMeshStandardMaterial?$.environment:null,oe.fog=$.fog,oe.envMap=(R.isMeshStandardMaterial?J:A).get(R.envMap||oe.environment),lt===void 0&&(R.addEventListener("dispose",Ce),lt=new Map,oe.programs=lt);let tt=lt.get(De);if(tt!==void 0){if(oe.currentProgram===tt&&oe.lightsStateVersion===Ge)return Va(R,Ke),tt}else Ke.uniforms=He.getUniforms(R),R.onBuild(se,Ke,w),R.onBeforeCompile(Ke,w),tt=He.acquireProgram(Ke,De),lt.set(De,tt),oe.uniforms=Ke.uniforms;const rt=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(rt.clippingPlanes=ot.uniform),Va(R,Ke),oe.needsLights=Ha(R),oe.lightsStateVersion=Ge,oe.needsLights&&(rt.ambientLightColor.value=ie.state.ambient,rt.lightProbe.value=ie.state.probe,rt.directionalLights.value=ie.state.directional,rt.directionalLightShadows.value=ie.state.directionalShadow,rt.spotLights.value=ie.state.spot,rt.spotLightShadows.value=ie.state.spotShadow,rt.rectAreaLights.value=ie.state.rectArea,rt.ltc_1.value=ie.state.rectAreaLTC1,rt.ltc_2.value=ie.state.rectAreaLTC2,rt.pointLights.value=ie.state.point,rt.pointLightShadows.value=ie.state.pointShadow,rt.hemisphereLights.value=ie.state.hemi,rt.directionalShadowMap.value=ie.state.directionalShadowMap,rt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,rt.spotShadowMap.value=ie.state.spotShadowMap,rt.spotLightMatrix.value=ie.state.spotLightMatrix,rt.spotLightMap.value=ie.state.spotLightMap,rt.pointShadowMap.value=ie.state.pointShadowMap,rt.pointShadowMatrix.value=ie.state.pointShadowMatrix),oe.currentProgram=tt,oe.uniformsList=null,tt}function za(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=_u.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Va(R,$){const se=st.get(R);se.outputColorSpace=$.outputColorSpace,se.batching=$.batching,se.instancing=$.instancing,se.instancingColor=$.instancingColor,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function Wu(R,$,se,oe,ie){$.isScene!==!0&&($=Be),P.resetTextureUnits();const Pe=$.fog,Ge=oe.isMeshStandardMaterial?$.environment:null,Ke=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ji,De=(oe.isMeshStandardMaterial?J:A).get(oe.envMap||Ge),lt=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,tt=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),rt=!!se.morphAttributes.position,bt=!!se.morphAttributes.normal,Tn=!!se.morphAttributes.color;let Wt=Nr;oe.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Wt=w.toneMapping);const Pn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,gt=Pn!==void 0?Pn.length:0,ut=st.get(oe),wn=y.state.lights;if(le===!0&&(de===!0||R!==C)){const Ln=R===C&&oe.id===re;ot.setState(oe,R,Ln)}let Ut=!1;oe.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==wn.state.version||ut.outputColorSpace!==Ke||ie.isBatchedMesh&&ut.batching===!1||!ie.isBatchedMesh&&ut.batching===!0||ie.isInstancedMesh&&ut.instancing===!1||!ie.isInstancedMesh&&ut.instancing===!0||ie.isSkinnedMesh&&ut.skinning===!1||!ie.isSkinnedMesh&&ut.skinning===!0||ie.isInstancedMesh&&ut.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ut.instancingColor===!1&&ie.instanceColor!==null||ut.envMap!==De||oe.fog===!0&&ut.fog!==Pe||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==ot.numPlanes||ut.numIntersection!==ot.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==tt||ut.morphTargets!==rt||ut.morphNormals!==bt||ut.morphColors!==Tn||ut.toneMapping!==Wt||nt.isWebGL2===!0&&ut.morphTargetsCount!==gt)&&(Ut=!0):(Ut=!0,ut.__version=oe.version);let Ii=ut.currentProgram;Ut===!0&&(Ii=nr(oe,$,ie));let Ga=!1,Ti=!1,ir=!1;const Vt=Ii.getUniforms(),Kn=ut.uniforms;if(Ve.useProgram(Ii.program)&&(Ga=!0,Ti=!0,ir=!0),oe.id!==re&&(re=oe.id,Ti=!0),Ga||C!==R){Vt.setValue(ne,"projectionMatrix",R.projectionMatrix),Vt.setValue(ne,"viewMatrix",R.matrixWorldInverse);const Ln=Vt.map.cameraPosition;Ln!==void 0&&Ln.setValue(ne,Ue.setFromMatrixPosition(R.matrixWorld)),nt.logarithmicDepthBuffer&&Vt.setValue(ne,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Vt.setValue(ne,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Ti=!0,ir=!0)}if(ie.isSkinnedMesh){Vt.setOptional(ne,ie,"bindMatrix"),Vt.setOptional(ne,ie,"bindMatrixInverse");const Ln=ie.skeleton;Ln&&(nt.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),Vt.setValue(ne,"boneTexture",Ln.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(Vt.setOptional(ne,ie,"batchingTexture"),Vt.setValue(ne,"batchingTexture",ie._matricesTexture,P));const Ro=se.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&nt.isWebGL2===!0)&&ft.update(ie,se,Ii),(Ti||ut.receiveShadow!==ie.receiveShadow)&&(ut.receiveShadow=ie.receiveShadow,Vt.setValue(ne,"receiveShadow",ie.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Kn.envMap.value=De,Kn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ti&&(Vt.setValue(ne,"toneMappingExposure",w.toneMappingExposure),ut.needsLights&&Ui(Kn,ir),Pe&&oe.fog===!0&&Re.refreshFogUniforms(Kn,Pe),Re.refreshMaterialUniforms(Kn,oe,Q,te,Se),_u.upload(ne,za(ut),Kn,P)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(_u.upload(ne,za(ut),Kn,P),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Vt.setValue(ne,"center",ie.center),Vt.setValue(ne,"modelViewMatrix",ie.modelViewMatrix),Vt.setValue(ne,"normalMatrix",ie.normalMatrix),Vt.setValue(ne,"modelMatrix",ie.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Ln=oe.uniformsGroups;for(let Hr=0,Wa=Ln.length;Hr<Wa;Hr++)if(nt.isWebGL2){const Ss=Ln[Hr];vt.update(Ss,Ii),vt.bind(Ss,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function Ui(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Ha(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,$,se){st.get(R.texture).__webglTexture=$,st.get(R.depthTexture).__webglTexture=se;const oe=st.get(R);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,$){const se=st.get(R);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,se=0){I=R,O=$,F=se;let oe=!0,ie=null,Pe=!1,Ge=!1;if(R){const De=st.get(R);De.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(ne.FRAMEBUFFER,null),oe=!1):De.__webglFramebuffer===void 0?P.setupRenderTarget(R):De.__hasExternalTextures&&P.rebindTextures(R,st.get(R.texture).__webglTexture,st.get(R.depthTexture).__webglTexture);const lt=R.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ge=!0);const tt=st.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[$])?ie=tt[$][se]:ie=tt[$],Pe=!0):nt.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?ie=st.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?ie=tt[se]:ie=tt,D.copy(R.viewport),ue.copy(R.scissor),ce=R.scissorTest}else D.copy(j).multiplyScalar(Q).floor(),ue.copy(N).multiplyScalar(Q).floor(),ce=G;if(Ve.bindFramebuffer(ne.FRAMEBUFFER,ie)&&nt.drawBuffers&&oe&&Ve.drawBuffers(R,ie),Ve.viewport(D),Ve.scissor(ue),Ve.setScissorTest(ce),Pe){const De=st.get(R.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+$,De.__webglTexture,se)}else if(Ge){const De=st.get(R.texture),lt=$||0;ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,De.__webglTexture,se||0,lt)}re=-1},this.readRenderTargetPixels=function(R,$,se,oe,ie,Pe,Ge){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ke=Ke[Ge]),Ke){Ve.bindFramebuffer(ne.FRAMEBUFFER,Ke);try{const De=R.texture,lt=De.format,tt=De.type;if(lt!==Ei&&Oe.convert(lt)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=tt===Ma&&(je.has("EXT_color_buffer_half_float")||nt.isWebGL2&&je.has("EXT_color_buffer_float"));if(tt!==Ur&&Oe.convert(tt)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===Lr&&(nt.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-oe&&se>=0&&se<=R.height-ie&&ne.readPixels($,se,oe,ie,Oe.convert(lt),Oe.convert(tt),Pe)}finally{const De=I!==null?st.get(I).__webglFramebuffer:null;Ve.bindFramebuffer(ne.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(R,$,se=0){const oe=Math.pow(2,-se),ie=Math.floor($.image.width*oe),Pe=Math.floor($.image.height*oe);P.setTexture2D($,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,se,0,0,R.x,R.y,ie,Pe),Ve.unbindTexture()},this.copyTextureToTexture=function(R,$,se,oe=0){const ie=$.image.width,Pe=$.image.height,Ge=Oe.convert(se.format),Ke=Oe.convert(se.type);P.setTexture2D(se,0),ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,se.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,se.unpackAlignment),$.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,oe,R.x,R.y,ie,Pe,Ge,Ke,$.image.data):$.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,oe,R.x,R.y,$.mipmaps[0].width,$.mipmaps[0].height,Ge,$.mipmaps[0].data):ne.texSubImage2D(ne.TEXTURE_2D,oe,R.x,R.y,Ge,Ke,$.image),oe===0&&se.generateMipmaps&&ne.generateMipmap(ne.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(R,$,se,oe,ie=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=R.max.x-R.min.x+1,Ge=R.max.y-R.min.y+1,Ke=R.max.z-R.min.z+1,De=Oe.convert(oe.format),lt=Oe.convert(oe.type);let tt;if(oe.isData3DTexture)P.setTexture3D(oe,0),tt=ne.TEXTURE_3D;else if(oe.isDataArrayTexture||oe.isCompressedArrayTexture)P.setTexture2DArray(oe,0),tt=ne.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,oe.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,oe.unpackAlignment);const rt=ne.getParameter(ne.UNPACK_ROW_LENGTH),bt=ne.getParameter(ne.UNPACK_IMAGE_HEIGHT),Tn=ne.getParameter(ne.UNPACK_SKIP_PIXELS),Wt=ne.getParameter(ne.UNPACK_SKIP_ROWS),Pn=ne.getParameter(ne.UNPACK_SKIP_IMAGES),gt=se.isCompressedTexture?se.mipmaps[ie]:se.image;ne.pixelStorei(ne.UNPACK_ROW_LENGTH,gt.width),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,gt.height),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,R.min.x),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,R.min.y),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,R.min.z),se.isDataTexture||se.isData3DTexture?ne.texSubImage3D(tt,ie,$.x,$.y,$.z,Pe,Ge,Ke,De,lt,gt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(tt,ie,$.x,$.y,$.z,Pe,Ge,Ke,De,gt.data)):ne.texSubImage3D(tt,ie,$.x,$.y,$.z,Pe,Ge,Ke,De,lt,gt),ne.pixelStorei(ne.UNPACK_ROW_LENGTH,rt),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,bt),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,Tn),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,Wt),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,Pn),ie===0&&oe.generateMipmaps&&ne.generateMipmap(tt),Ve.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){O=0,F=0,I=null,Ve.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eh?"display-p3":"srgb",t.unpackColorSpace=Tt.workingColorSpace===Fu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fn?ms:a_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ms?fn:Ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class NC extends b_{}NC.prototype.isWebGL1Renderer=!0;class UC extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class IC extends Hn{constructor(e,t,s,o,l,u,c,d,h){super(e,t,s,o,l,u,c,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);const FC=`
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;

void main() {
    vUv = uv;
    float time = uTime * 5.;

    float waveFactor = uEnableWaves;

    vec3 transformed = position;

    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
    transformed.z += sin(time + position.x) * waveFactor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`,OC=`
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    vec2 pos = vUv;
    
    float move = sin(time + mouse) * 0.01;
    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
    float a = texture2D(uTexture, pos).a;
    gl_FragColor = vec4(r, g, b, a);
}
`;function Iv(n,e,t,s,o){return(n-e)/(t-e)*(o-s)+s}const Fv=typeof window<"u"?window.devicePixelRatio:1;class kC{renderer;domElement;pre;canvas;context;deg;invert;fontSize;fontFamily;charset;width=0;height=0;center={x:0,y:0};mouse={x:0,y:0};cols=0;rows=0;constructor(e,{fontSize:t,fontFamily:s,charset:o,invert:l}={}){this.renderer=e,this.domElement=document.createElement("div"),this.domElement.style.position="absolute",this.domElement.style.top="0",this.domElement.style.left="0",this.domElement.style.width="100%",this.domElement.style.height="100%",this.pre=document.createElement("pre"),this.domElement.appendChild(this.pre),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.domElement.appendChild(this.canvas),this.deg=0,this.invert=l??!0,this.fontSize=t??12,this.fontFamily=s??"'Courier New', monospace",this.charset=o??" .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",this.context&&(this.context.imageSmoothingEnabled=!1,this.context.imageSmoothingEnabled=!1),this.onMouseMove=this.onMouseMove.bind(this),document.addEventListener("mousemove",this.onMouseMove)}setSize(e,t){this.width=e,this.height=t,this.renderer.setSize(e,t),this.reset(),this.center={x:e/2,y:t/2},this.mouse={x:this.center.x,y:this.center.y}}reset(){if(this.context){this.context.font=`${this.fontSize}px ${this.fontFamily}`;const e=this.context.measureText("A").width;this.cols=Math.floor(this.width/(this.fontSize*(e/this.fontSize))),this.rows=Math.floor(this.height/this.fontSize),this.canvas.width=this.cols,this.canvas.height=this.rows,this.pre.style.fontFamily=this.fontFamily,this.pre.style.fontSize=`${this.fontSize}px`,this.pre.style.margin="0",this.pre.style.padding="0",this.pre.style.lineHeight="1em",this.pre.style.position="absolute",this.pre.style.left="50%",this.pre.style.top="50%",this.pre.style.transform="translate(-50%, -50%)",this.pre.style.zIndex="9",this.pre.style.backgroundAttachment="fixed",this.pre.style.mixBlendMode="difference"}}render(e,t){this.renderer.render(e,t);const s=this.canvas.width,o=this.canvas.height;this.context&&(this.context.clearRect(0,0,s,o),this.context&&s&&o&&this.context.drawImage(this.renderer.domElement,0,0,s,o),this.asciify(this.context,s,o),this.hue())}onMouseMove(e){this.mouse={x:e.clientX*Fv,y:e.clientY*Fv}}get dx(){return this.mouse.x-this.center.x}get dy(){return this.mouse.y-this.center.y}hue(){const e=Math.atan2(this.dy,this.dx)*180/Math.PI;this.deg+=(e-this.deg)*.075,this.domElement.style.filter=`hue-rotate(${this.deg.toFixed(1)}deg)`}asciify(e,t,s){if(t&&s){const o=e.getImageData(0,0,t,s).data;let l="";for(let u=0;u<s;u++){for(let c=0;c<t;c++){const d=c*4+u*4*t,[h,p,g,v]=[o[d],o[d+1],o[d+2],o[d+3]];if(v===0){l+=" ";continue}let S=(.3*h+.6*p+.1*g)/255,E=Math.floor((1-S)*(this.charset.length-1));this.invert&&(E=this.charset.length-E-1),l+=this.charset[E]}l+=`
`}this.pre.innerHTML=l}}dispose(){document.removeEventListener("mousemove",this.onMouseMove)}}class BC{canvas;context;txt;fontSize;fontFamily;color;font;constructor(e,{fontSize:t=200,fontFamily:s="Arial",color:o="#fdf9f3"}={}){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.txt=e,this.fontSize=t,this.fontFamily=s,this.color=o,this.font=`600 ${this.fontSize}px ${this.fontFamily}`}resize(){if(this.context){this.context.font=this.font;const e=this.context.measureText(this.txt),t=Math.ceil(e.width)+20,s=Math.ceil(e.actualBoundingBoxAscent+e.actualBoundingBoxDescent)+20;this.canvas.width=t,this.canvas.height=s}}render(){if(this.context){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.font=this.font;const t=10+this.context.measureText(this.txt).actualBoundingBoxAscent;this.context.fillText(this.txt,10,t)}}get width(){return this.canvas.width}get height(){return this.canvas.height}get texture(){return this.canvas}}class Ov{textString;asciiFontSize;textFontSize;textColor;planeBaseHeight;container;width;height;enableWaves;camera;scene;mouse;textCanvas;texture;geometry;material;mesh;renderer;filter;center;animationFrameId=0;constructor({text:e,asciiFontSize:t,textFontSize:s,textColor:o,planeBaseHeight:l,enableWaves:u},c,d,h){this.textString=e,this.asciiFontSize=t,this.textFontSize=s,this.textColor=o,this.planeBaseHeight=l,this.container=c,this.width=d,this.height=h,this.enableWaves=u,this.camera=new ai(45,this.width/this.height,1,1e3),this.camera.position.z=30,this.scene=new UC,this.mouse={x:0,y:0},this.onMouseMove=this.onMouseMove.bind(this),this.setMesh(),this.setRenderer()}setMesh(){this.textCanvas=new BC(this.textString,{fontSize:this.textFontSize,fontFamily:"IBM Plex Mono",color:this.textColor}),this.textCanvas.resize(),this.textCanvas.render(),this.texture=new IC(this.textCanvas.texture),this.texture.minFilter=Mn;const e=this.textCanvas.width/this.textCanvas.height,t=this.planeBaseHeight,s=t*e,o=t;this.geometry=new Bu(s,o,36,36),this.material=new Fr({vertexShader:FC,fragmentShader:OC,transparent:!0,uniforms:{uTime:{value:0},mouse:{value:1},uTexture:{value:this.texture},uEnableWaves:{value:this.enableWaves?1:0}}}),this.mesh=new Qi(this.geometry,this.material),this.scene.add(this.mesh)}setRenderer(){this.renderer=new b_({antialias:!1,alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,0),this.filter=new kC(this.renderer,{fontFamily:"IBM Plex Mono",fontSize:this.asciiFontSize,invert:!0}),this.container.appendChild(this.filter.domElement),this.setSize(this.width,this.height),this.container.addEventListener("mousemove",this.onMouseMove),this.container.addEventListener("touchmove",this.onMouseMove)}setSize(e,t){this.width=e,this.height=t,this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.filter.setSize(e,t),this.center={x:e/2,y:t/2}}load(){this.animate()}onMouseMove(e){const t=e.touches?e.touches[0]:e,s=this.container.getBoundingClientRect(),o=t.clientX-s.left,l=t.clientY-s.top;this.mouse={x:o,y:l}}animate(){const e=()=>{this.animationFrameId=requestAnimationFrame(e),this.render()};e()}render(){const e=new Date().getTime()*.001;this.textCanvas.render(),this.texture.needsUpdate=!0,this.mesh.material.uniforms.uTime.value=Math.sin(e),this.updateRotation(),this.filter.render(this.scene,this.camera)}updateRotation(){const e=Iv(this.mouse.y,0,this.height,.5,-.5),t=Iv(this.mouse.x,0,this.width,-.5,.5);this.mesh.rotation.x+=(e-this.mesh.rotation.x)*.05,this.mesh.rotation.y+=(t-this.mesh.rotation.y)*.05}clear(){this.scene.traverse(e=>{const t=e;t.isMesh&&([t.material].flat().forEach(s=>{s.dispose(),Object.keys(s).forEach(o=>{const l=s[o];l&&typeof l=="object"&&"dispose"in l&&typeof l.dispose=="function"&&l.dispose()})}),t.geometry.dispose())}),this.scene.clear()}dispose(){cancelAnimationFrame(this.animationFrameId),this.filter.dispose(),this.container.removeChild(this.filter.domElement),this.container.removeEventListener("mousemove",this.onMouseMove),this.container.removeEventListener("touchmove",this.onMouseMove),this.clear(),this.renderer.dispose()}}function zC({text:n="David!",asciiFontSize:e=8,textFontSize:t=200,textColor:s="#fdf9f3",planeBaseHeight:o=8,enableWaves:l=!0}){const u=Ae.useRef(null),c=Ae.useRef(null);return Ae.useEffect(()=>{if(!u.current)return;const{width:d,height:h}=u.current.getBoundingClientRect();if(d===0||h===0){const g=new IntersectionObserver(([v])=>{if(v.isIntersecting&&v.boundingClientRect.width>0&&v.boundingClientRect.height>0){const{width:S,height:E}=v.boundingClientRect;c.current=new Ov({text:n,asciiFontSize:e,textFontSize:t,textColor:s,planeBaseHeight:o,enableWaves:l},u.current,S,E),c.current.load(),g.disconnect()}},{threshold:.1});return g.observe(u.current),()=>{g.disconnect(),c.current&&c.current.dispose()}}c.current=new Ov({text:n,asciiFontSize:e,textFontSize:t,textColor:s,planeBaseHeight:o,enableWaves:l},u.current,d,h),c.current.load();const p=new ResizeObserver(g=>{if(!g[0]||!c.current)return;const{width:v,height:S}=g[0].contentRect;v>0&&S>0&&c.current.setSize(v,S)});return p.observe(u.current),()=>{p.disconnect(),c.current&&c.current.dispose()}},[n,e,t,s,o,l]),W.jsx("div",{ref:u,className:"ascii-text-container",style:{position:"absolute",width:"100%",height:"100%"},children:W.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap');

        body {
          margin: 0;
          padding: 0;
        }

        .ascii-text-container canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          image-rendering: optimizeSpeed;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
        }

        .ascii-text-container pre {
          margin: 0;
          user-select: none;
          padding: 0;
          line-height: 1em;
          text-align: left;
          position: absolute;
          left: 0;
          top: 0;
          background-image: radial-gradient(circle, #ff6188 0%, #fc9867 50%, #ffd866 100%);
          background-attachment: fixed;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          z-index: 9;
          mix-blend-mode: difference;
        }
      `})})}function P_(n){var e,t,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=P_(n[e]))&&(s&&(s+=" "),s+=t)}else for(t in n)n[t]&&(s&&(s+=" "),s+=t);return s}function kv(){for(var n,e,t=0,s="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=P_(n))&&(s&&(s+=" "),s+=e);return s}function VC({as:n="section",tone:e="dark",className:t,children:s}){const o=e==="dark"?"bg-white/5 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]":"bg-black/5 ring-black/10 shadow-[inset_0_1px_0_rgba(0,0,0,0.06)]";return W.jsxs(n,{className:kv("relative rounded-3xl backdrop-blur-md ring-1","p-8 md:p-10","motion-safe:transition-shadow hover:ring-white/20",o,t),children:[W.jsx("div",{className:kv("pointer-events-none absolute inset-0 rounded-3xl","shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]","[mask-image:radial-gradient(120%_60%_at_50%_-20%,black,transparent)]")}),W.jsx("div",{className:"relative",children:s})]})}const xu={SMOOTH_TAU:.25,MIN_COPIES:2,COPY_HEADROOM:2},HC=n=>typeof n=="number"?`${n}px`:n??void 0,Rr=(...n)=>n.filter(Boolean).join(" "),GC=(n,e,t)=>{Ae.useEffect(()=>{if(!window.ResizeObserver){const o=()=>n();return window.addEventListener("resize",o),n(),()=>window.removeEventListener("resize",o)}const s=e.map(o=>{if(!o.current)return null;const l=new ResizeObserver(n);return l.observe(o.current),l});return n(),()=>{s.forEach(o=>o?.disconnect())}},t)},WC=(n,e,t)=>{Ae.useEffect(()=>{const s=n.current?.querySelectorAll("img")??[];if(s.length===0){e();return}let o=s.length;const l=()=>{o-=1,o===0&&e()};return s.forEach(u=>{const c=u;c.complete?l():(c.addEventListener("load",l,{once:!0}),c.addEventListener("error",l,{once:!0}))}),()=>{s.forEach(u=>{u.removeEventListener("load",l),u.removeEventListener("error",l)})}},t)},jC=(n,e,t,s,o)=>{const l=Ae.useRef(null),u=Ae.useRef(null),c=Ae.useRef(0),d=Ae.useRef(0);Ae.useEffect(()=>{const h=n.current;if(!h)return;const p=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(t>0&&(c.current=(c.current%t+t)%t,h.style.transform=`translate3d(${-c.current}px, 0, 0)`),p)return h.style.transform="translate3d(0, 0, 0)",()=>{u.current=null};const g=v=>{u.current===null&&(u.current=v);const S=Math.max(0,v-u.current)/1e3;u.current=v;const E=o&&s?0:e,T=1-Math.exp(-S/xu.SMOOTH_TAU);if(d.current+=(E-d.current)*T,t>0){let y=c.current+d.current*S;y=(y%t+t)%t,c.current=y;const x=-c.current;h.style.transform=`translate3d(${x}px, 0, 0)`}l.current=requestAnimationFrame(g)};return l.current=requestAnimationFrame(g),()=>{l.current!==null&&(cancelAnimationFrame(l.current),l.current=null),u.current=null}},[e,t,s,o])},L_=tM.memo(({logos:n,speed:e=120,direction:t="left",width:s="100%",logoHeight:o=28,gap:l=32,pauseOnHover:u=!0,fadeOut:c=!1,fadeOutColor:d,scaleOnHover:h=!1,ariaLabel:p="Partner logos",className:g,style:v})=>{const S=Ae.useRef(null),E=Ae.useRef(null),T=Ae.useRef(null),[y,x]=Ae.useState(0),[b,w]=Ae.useState(xu.MIN_COPIES),[L,O]=Ae.useState(!1),F=Ae.useMemo(()=>{const X=Math.abs(e),te=t==="left"?1:-1,Q=e<0?-1:1;return X*te*Q},[e,t]),I=Ae.useCallback(()=>{const X=S.current?.clientWidth??0,te=T.current?.getBoundingClientRect?.()?.width??0;if(te>0){x(Math.ceil(te));const Q=Math.ceil(X/te)+xu.COPY_HEADROOM;w(Math.max(xu.MIN_COPIES,Q))}},[]);GC(I,[S,T],[n,l,o]),WC(T,I,[n,l,o]),jC(E,F,y,L,u);const re=Ae.useMemo(()=>({"--logoloop-gap":`${l}px`,"--logoloop-logoHeight":`${o}px`,...d&&{"--logoloop-fadeColor":d}}),[l,o,d]),C=Ae.useMemo(()=>Rr("relative overflow-x-hidden group","[--logoloop-gap:32px]","[--logoloop-logoHeight:28px]","[--logoloop-fadeColorAuto:#ffffff]","dark:[--logoloop-fadeColorAuto:#0b0b0b]",h&&"py-[calc(var(--logoloop-logoHeight)*0.1)]",g),[h,g]),D=Ae.useCallback(()=>{u&&O(!0)},[u]),ue=Ae.useCallback(()=>{u&&O(!1)},[u]),ce=Ae.useCallback((X,te)=>{const Q="node"in X,z=Q?W.jsx("span",{className:Rr("inline-flex items-center","motion-reduce:transition-none",h&&"transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"),"aria-hidden":!!X.href&&!X.ariaLabel,children:X.node}):W.jsx("img",{className:Rr("h-[var(--logoloop-logoHeight)] w-auto block object-contain","[-webkit-user-drag:none] pointer-events-none","[image-rendering:-webkit-optimize-contrast]","motion-reduce:transition-none",h&&"transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"),src:X.src,srcSet:X.srcSet,sizes:X.sizes,width:X.width,height:X.height,alt:X.alt??"",title:X.title,loading:"lazy",decoding:"async",draggable:!1}),K=Q?X.ariaLabel??X.title:X.alt??X.title,j=X.href?W.jsx("a",{className:Rr("inline-flex items-center no-underline rounded","transition-opacity duration-200 ease-linear","hover:opacity-80","focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"),href:X.href,"aria-label":K||"logo link",target:"_blank",rel:"noreferrer noopener",children:z}):z;return W.jsx("li",{className:Rr("flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]",h&&"overflow-visible group/item"),role:"listitem",children:j},te)},[h]),ve=Ae.useMemo(()=>Array.from({length:b},(X,te)=>W.jsx("ul",{className:"flex items-center",role:"list","aria-hidden":te>0,ref:te===0?T:void 0,children:n.map((Q,z)=>ce(Q,`${te}-${z}`))},`copy-${te}`)),[b,n,ce]),H=Ae.useMemo(()=>({width:HC(s)??"100%",...re,...v}),[s,re,v]);return W.jsxs("div",{ref:S,className:C,style:H,role:"region","aria-label":p,onMouseEnter:D,onMouseLeave:ue,children:[c&&W.jsxs(W.Fragment,{children:[W.jsx("div",{"aria-hidden":!0,className:Rr("pointer-events-none absolute inset-y-0 left-0 z-[1]","w-[clamp(24px,8%,120px)]","bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")}),W.jsx("div",{"aria-hidden":!0,className:Rr("pointer-events-none absolute inset-y-0 right-0 z-[1]","w-[clamp(24px,8%,120px)]","bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")})]}),W.jsx("div",{className:Rr("flex w-max will-change-transform select-none","motion-reduce:transform-none"),ref:E,children:ve})]})});L_.displayName="LogoLoop";const XC=[{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/powerbi-logo.png",alt:"Power BI",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Power BI"})]}),title:"Power BI",href:"https://powerbi.microsoft.com"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/figma-logo.svg",alt:"Figma",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Figma"})]}),title:"Figma",href:"https://www.figma.com"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/firebase-logo.png",alt:"Firebase",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Firebase"})]}),title:"Firebase",href:"https://firebase.google.com"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/jira-logo.svg",alt:"Jira",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Jira"})]}),title:"Jira",href:"https://www.atlassian.com/software/jira"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/git-logo.png",alt:"Git",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Git"})]}),title:"Git",href:"https://git-scm.com"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/aws-logo.png",alt:"AWS",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"AWS"})]}),title:"AWS",href:"https://aws.amazon.com"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/java-logo.png",alt:"Java",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Java"})]}),title:"Java",href:"https://www.java.com"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/python-logo.png",alt:"Python",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Python"})]}),title:"Python",href:"https://www.python.org"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/c-logo.svg",alt:"C",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"C"})]}),title:"C",href:"https://www.c.com"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/cpp-logo.png",alt:"C++",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"C++"})]}),title:"C++",href:"https://www.cplusplus.com"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/javascript-logo.png",alt:"JavaScript",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"JavaScript"})]}),title:"JavaScript",href:"https://www.javascript.com"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/typescript-logo.png",alt:"TypeScript",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"TypeScript"})]}),title:"TypeScript",href:"https://www.typescriptlang.org"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/bash-logo.png",alt:"Bash",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Bash"})]}),title:"Bash",href:"https://www.gnu.org/software/bash/"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/mysql-logo.webp",alt:"MySQL",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"MySQL"})]}),title:"MySQL",href:"https://www.mysql.com/"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/oraclesql-logog.svg",alt:"Oracle SQL",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Oracle SQL"})]}),title:"Oracle SQL",href:"https://www.oracle.com/database/"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/postgresql-logo.png",alt:"PostgreSQL",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"PostgreSQL"})]}),title:"PostgreSQL",href:"https://www.postgresql.org/"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/mongodb-logo.png",alt:"MongoDB",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"MongoDB"})]}),title:"MongoDB",href:"https://www.mongodb.com/"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/react-logo.png",alt:"React",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"React"})]}),title:"React",href:"https://reactjs.org/"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/tailwind-logo.png",alt:"Tailwind CSS",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Tailwind CSS"})]}),title:"Tailwind CSS",href:"https://tailwindcss.com"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/springboot-logo.png",alt:"Spring Boot",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Spring Boot"})]}),title:"Spring Boot",href:"https://spring.io/projects/spring-boot"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/flask-logo.png",alt:"Flask",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Flask"})]}),title:"Flask",href:"https://flask.palletsprojects.com/"},{node:W.jsxs("div",{className:"flex items-center gap-3 h-[30px]",children:[W.jsx("img",{src:"/resources/docker-logo.png",alt:"Docker",className:"h-[30px] w-auto select-none [-webkit-user-drag:none]",loading:"lazy",decoding:"async"}),W.jsx("span",{className:"text-white/90 text-xl font-medium",children:"Docker"})]}),title:"Docker",href:"https://www.docker.com/"}];function YC(){return W.jsx("section",{id:"about",className:"scroll-mt-28 py-24",children:W.jsx("div",{className:"max-w-6xl mx-auto px-6",children:W.jsxs(VC,{children:[W.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Hi there 👋"}),W.jsx("p",{className:"text-white/80 leading-relaxed text-lg mb-8",children:"I'm Maahir, a recent CS graduate from NJIT (Dec 2025) with 10 months of industry experience at Medtronic and Cambridge Associates. I build scalable software from backend automation pipelines to full-stack web apps, turning complex problems into reliable solutions. I focus on clean design, performance, and delivering results that make an impact."}),W.jsx("div",{className:"relative h-[90px] overflow-hidden",children:W.jsx(L_,{logos:XC,speed:70,direction:"left",logoHeight:48,gap:40,pauseOnHover:!0,scaleOnHover:!0,fadeOut:!0,fadeOutColor:"#0e0e0eff",ariaLabel:"Technology logos"})})]})})})}const D_=Ae.createContext({});function qC(n){const e=Ae.useRef(null);return e.current===null&&(e.current=n()),e.current}const ih=typeof window<"u",$C=ih?Ae.useLayoutEffect:Ae.useEffect,rh=Ae.createContext(null);function sh(n,e){n.indexOf(e)===-1&&n.push(e)}function oh(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const er=(n,e,t)=>t>e?e:t<n?n:t;let ah=()=>{};const tr={},N_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function U_(n){return typeof n=="object"&&n!==null}const I_=n=>/^0[^.\s]+$/u.test(n);function lh(n){let e;return()=>(e===void 0&&(e=n()),e)}const ci=n=>n,KC=(n,e)=>t=>e(n(t)),Ua=(...n)=>n.reduce(KC),Ea=(n,e,t)=>{const s=e-n;return s===0?1:(t-n)/s};class uh{constructor(){this.subscriptions=[]}add(e){return sh(this.subscriptions,e),()=>oh(this.subscriptions,e)}notify(e,t,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,s);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Li=n=>n*1e3,ui=n=>n/1e3;function F_(n,e){return e?n*(1e3/e):0}const O_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,ZC=1e-7,QC=12;function JC(n,e,t,s,o){let l,u,c=0;do u=e+(t-e)/2,l=O_(u,s,o)-n,l>0?t=u:e=u;while(Math.abs(l)>ZC&&++c<QC);return u}function Ia(n,e,t,s){if(n===e&&t===s)return ci;const o=l=>JC(l,0,1,n,t);return l=>l===0||l===1?l:O_(o(l),e,s)}const k_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,B_=n=>e=>1-n(1-e),z_=Ia(.33,1.53,.69,.99),ch=B_(z_),V_=k_(ch),H_=n=>(n*=2)<1?.5*ch(n):.5*(2-Math.pow(2,-10*(n-1))),fh=n=>1-Math.sin(Math.acos(n)),G_=B_(fh),W_=k_(fh),eR=Ia(.42,0,1,1),tR=Ia(0,0,.58,1),j_=Ia(.42,0,.58,1),nR=n=>Array.isArray(n)&&typeof n[0]!="number",X_=n=>Array.isArray(n)&&typeof n[0]=="number",iR={linear:ci,easeIn:eR,easeInOut:j_,easeOut:tR,circIn:fh,circInOut:W_,circOut:G_,backIn:ch,backInOut:V_,backOut:z_,anticipate:H_},rR=n=>typeof n=="string",Bv=n=>{if(X_(n)){ah(n.length===4);const[e,t,s,o]=n;return Ia(e,t,s,o)}else if(rR(n))return iR[n];return n},mu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function sR(n,e){let t=new Set,s=new Set,o=!1,l=!1;const u=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function d(p){u.has(p)&&(h.schedule(p),n()),p(c)}const h={schedule:(p,g=!1,v=!1)=>{const E=v&&o?t:s;return g&&u.add(p),E.has(p)||E.add(p),p},cancel:p=>{s.delete(p),u.delete(p)},process:p=>{if(c=p,o){l=!0;return}o=!0,[t,s]=[s,t],t.forEach(d),t.clear(),o=!1,l&&(l=!1,h.process(p))}};return h}const oR=40;function Y_(n,e){let t=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=mu.reduce((w,L)=>(w[L]=sR(l),w),{}),{setup:c,read:d,resolveKeyframes:h,preUpdate:p,update:g,preRender:v,render:S,postRender:E}=u,T=()=>{const w=tr.useManualTiming?o.timestamp:performance.now();t=!1,tr.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(w-o.timestamp,oR),1)),o.timestamp=w,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),p.process(o),g.process(o),v.process(o),S.process(o),E.process(o),o.isProcessing=!1,t&&e&&(s=!1,n(T))},y=()=>{t=!0,s=!0,o.isProcessing||n(T)};return{schedule:mu.reduce((w,L)=>{const O=u[L];return w[L]=(F,I=!1,re=!1)=>(t||y(),O.schedule(F,I,re)),w},{}),cancel:w=>{for(let L=0;L<mu.length;L++)u[mu[L]].cancel(w)},state:o,steps:u}}const{schedule:Ft,cancel:Or,state:cn,steps:sd}=Y_(typeof requestAnimationFrame<"u"?requestAnimationFrame:ci,!0);let yu;function aR(){yu=void 0}const zn={now:()=>(yu===void 0&&zn.set(cn.isProcessing||tr.useManualTiming?cn.timestamp:performance.now()),yu),set:n=>{yu=n,queueMicrotask(aR)}},q_=n=>e=>typeof e=="string"&&e.startsWith(n),dh=q_("--"),lR=q_("var(--"),hh=n=>lR(n)?uR.test(n.split("/*")[0].trim()):!1,uR=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,wo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ta={...wo,transform:n=>er(0,1,n)},gu={...wo,default:1},ga=n=>Math.round(n*1e5)/1e5,ph=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function cR(n){return n==null}const fR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,mh=(n,e)=>t=>!!(typeof t=="string"&&fR.test(t)&&t.startsWith(n)||e&&!cR(t)&&Object.prototype.hasOwnProperty.call(t,e)),$_=(n,e,t)=>s=>{if(typeof s!="string")return s;const[o,l,u,c]=s.match(ph);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},dR=n=>er(0,255,n),od={...wo,transform:n=>Math.round(dR(n))},fs={test:mh("rgb","red"),parse:$_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:s=1})=>"rgba("+od.transform(n)+", "+od.transform(e)+", "+od.transform(t)+", "+ga(Ta.transform(s))+")"};function hR(n){let e="",t="",s="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),s=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),s=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,s+=s,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const Pd={test:mh("#"),parse:hR,transform:fs.transform},Fa=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),br=Fa("deg"),Di=Fa("%"),Qe=Fa("px"),pR=Fa("vh"),mR=Fa("vw"),zv={...Di,parse:n=>Di.parse(n)/100,transform:n=>Di.transform(n*100)},lo={test:mh("hsl","hue"),parse:$_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:s=1})=>"hsla("+Math.round(n)+", "+Di.transform(ga(e))+", "+Di.transform(ga(t))+", "+ga(Ta.transform(s))+")"},Kt={test:n=>fs.test(n)||Pd.test(n)||lo.test(n),parse:n=>fs.test(n)?fs.parse(n):lo.test(n)?lo.parse(n):Pd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?fs.transform(n):lo.transform(n),getAnimatableNone:n=>{const e=Kt.parse(n);return e.alpha=0,Kt.transform(e)}},gR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function vR(n){return isNaN(n)&&typeof n=="string"&&(n.match(ph)?.length||0)+(n.match(gR)?.length||0)>0}const K_="number",Z_="color",_R="var",xR="var(",Vv="${}",yR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wa(n){const e=n.toString(),t=[],s={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(yR,d=>(Kt.test(d)?(s.color.push(l),o.push(Z_),t.push(Kt.parse(d))):d.startsWith(xR)?(s.var.push(l),o.push(_R),t.push(d)):(s.number.push(l),o.push(K_),t.push(parseFloat(d))),++l,Vv)).split(Vv);return{values:t,split:c,indexes:s,types:o}}function Q_(n){return wa(n).values}function J_(n){const{split:e,types:t}=wa(n),s=e.length;return o=>{let l="";for(let u=0;u<s;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===K_?l+=ga(o[u]):c===Z_?l+=Kt.transform(o[u]):l+=o[u]}return l}}const SR=n=>typeof n=="number"?0:Kt.test(n)?Kt.getAnimatableNone(n):n;function MR(n){const e=Q_(n);return J_(n)(e.map(SR))}const kr={test:vR,parse:Q_,createTransformer:J_,getAnimatableNone:MR};function ad(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function ER({hue:n,saturation:e,lightness:t,alpha:s}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=ad(d,c,n+1/3),l=ad(d,c,n),u=ad(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:s}}function Pu(n,e){return t=>t>0?e:n}const Bt=(n,e,t)=>n+(e-n)*t,ld=(n,e,t)=>{const s=n*n,o=t*(e*e-s)+s;return o<0?0:Math.sqrt(o)},TR=[Pd,fs,lo],wR=n=>TR.find(e=>e.test(n));function Hv(n){const e=wR(n);if(!e)return!1;let t=e.parse(n);return e===lo&&(t=ER(t)),t}const Gv=(n,e)=>{const t=Hv(n),s=Hv(e);if(!t||!s)return Pu(n,e);const o={...t};return l=>(o.red=ld(t.red,s.red,l),o.green=ld(t.green,s.green,l),o.blue=ld(t.blue,s.blue,l),o.alpha=Bt(t.alpha,s.alpha,l),fs.transform(o))},Ld=new Set(["none","hidden"]);function AR(n,e){return Ld.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function CR(n,e){return t=>Bt(n,e,t)}function gh(n){return typeof n=="number"?CR:typeof n=="string"?hh(n)?Pu:Kt.test(n)?Gv:PR:Array.isArray(n)?ex:typeof n=="object"?Kt.test(n)?Gv:RR:Pu}function ex(n,e){const t=[...n],s=t.length,o=n.map((l,u)=>gh(l)(l,e[u]));return l=>{for(let u=0;u<s;u++)t[u]=o[u](l);return t}}function RR(n,e){const t={...n,...e},s={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(s[o]=gh(n[o])(n[o],e[o]));return o=>{for(const l in s)t[l]=s[l](o);return t}}function bR(n,e){const t=[],s={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=n.indexes[l][s[l]],c=n.values[u]??0;t[o]=c,s[l]++}return t}const PR=(n,e)=>{const t=kr.createTransformer(e),s=wa(n),o=wa(e);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?Ld.has(n)&&!o.values.length||Ld.has(e)&&!s.values.length?AR(n,e):Ua(ex(bR(s,o),o.values),t):Pu(n,e)};function tx(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Bt(n,e,t):gh(n)(n,e)}const LR=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Ft.update(e,t),stop:()=>Or(e),now:()=>cn.isProcessing?cn.timestamp:zn.now()}},nx=(n,e,t=10)=>{let s="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)s+=Math.round(n(l/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Lu=2e4;function vh(n){let e=0;const t=50;let s=n.next(e);for(;!s.done&&e<Lu;)e+=t,s=n.next(e);return e>=Lu?1/0:e}function DR(n,e=100,t){const s=t({...n,keyframes:[0,e]}),o=Math.min(vh(s),Lu);return{type:"keyframes",ease:l=>s.next(o*l).value/e,duration:ui(o)}}const NR=5;function ix(n,e,t){const s=Math.max(e-NR,0);return F_(t-n(s),e-s)}const Gt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ud=.001;function UR({duration:n=Gt.duration,bounce:e=Gt.bounce,velocity:t=Gt.velocity,mass:s=Gt.mass}){let o,l,u=1-e;u=er(Gt.minDamping,Gt.maxDamping,u),n=er(Gt.minDuration,Gt.maxDuration,ui(n)),u<1?(o=h=>{const p=h*u,g=p*n,v=p-t,S=Dd(h,u),E=Math.exp(-g);return ud-v/S*E},l=h=>{const g=h*u*n,v=g*t+t,S=Math.pow(u,2)*Math.pow(h,2)*n,E=Math.exp(-g),T=Dd(Math.pow(h,2),u);return(-o(h)+ud>0?-1:1)*((v-S)*E)/T}):(o=h=>{const p=Math.exp(-h*n),g=(h-t)*n+1;return-ud+p*g},l=h=>{const p=Math.exp(-h*n),g=(t-h)*(n*n);return p*g});const c=5/n,d=FR(o,l,c);if(n=Li(n),isNaN(d))return{stiffness:Gt.stiffness,damping:Gt.damping,duration:n};{const h=Math.pow(d,2)*s;return{stiffness:h,damping:u*2*Math.sqrt(s*h),duration:n}}}const IR=12;function FR(n,e,t){let s=t;for(let o=1;o<IR;o++)s=s-n(s)/e(s);return s}function Dd(n,e){return n*Math.sqrt(1-e*e)}const OR=["duration","bounce"],kR=["stiffness","damping","mass"];function Wv(n,e){return e.some(t=>n[t]!==void 0)}function BR(n){let e={velocity:Gt.velocity,stiffness:Gt.stiffness,damping:Gt.damping,mass:Gt.mass,isResolvedFromDuration:!1,...n};if(!Wv(n,kR)&&Wv(n,OR))if(n.visualDuration){const t=n.visualDuration,s=2*Math.PI/(t*1.2),o=s*s,l=2*er(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Gt.mass,stiffness:o,damping:l}}else{const t=UR(n);e={...e,...t,mass:Gt.mass},e.isResolvedFromDuration=!0}return e}function Du(n=Gt.visualDuration,e=Gt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:s,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:p,duration:g,velocity:v,isResolvedFromDuration:S}=BR({...t,velocity:-ui(t.velocity||0)}),E=v||0,T=h/(2*Math.sqrt(d*p)),y=u-l,x=ui(Math.sqrt(d/p)),b=Math.abs(y)<5;s||(s=b?Gt.restSpeed.granular:Gt.restSpeed.default),o||(o=b?Gt.restDelta.granular:Gt.restDelta.default);let w;if(T<1){const O=Dd(x,T);w=F=>{const I=Math.exp(-T*x*F);return u-I*((E+T*x*y)/O*Math.sin(O*F)+y*Math.cos(O*F))}}else if(T===1)w=O=>u-Math.exp(-x*O)*(y+(E+x*y)*O);else{const O=x*Math.sqrt(T*T-1);w=F=>{const I=Math.exp(-T*x*F),re=Math.min(O*F,300);return u-I*((E+T*x*y)*Math.sinh(re)+O*y*Math.cosh(re))/O}}const L={calculatedDuration:S&&g||null,next:O=>{const F=w(O);if(S)c.done=O>=g;else{let I=O===0?E:0;T<1&&(I=O===0?Li(E):ix(w,O,F));const re=Math.abs(I)<=s,C=Math.abs(u-F)<=o;c.done=re&&C}return c.value=c.done?u:F,c},toString:()=>{const O=Math.min(vh(L),Lu),F=nx(I=>L.next(O*I).value,O,30);return O+"ms "+F},toTransition:()=>{}};return L}Du.applyToOptions=n=>{const e=DR(n,100,Du);return n.ease=e.ease,n.duration=Li(e.duration),n.type="keyframes",n};function Nd({keyframes:n,velocity:e=0,power:t=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:p}){const g=n[0],v={done:!1,value:g},S=re=>c!==void 0&&re<c||d!==void 0&&re>d,E=re=>c===void 0?d:d===void 0||Math.abs(c-re)<Math.abs(d-re)?c:d;let T=t*e;const y=g+T,x=u===void 0?y:u(y);x!==y&&(T=x-g);const b=re=>-T*Math.exp(-re/s),w=re=>x+b(re),L=re=>{const C=b(re),D=w(re);v.done=Math.abs(C)<=h,v.value=v.done?x:D};let O,F;const I=re=>{S(v.value)&&(O=re,F=Du({keyframes:[v.value,E(v.value)],velocity:ix(w,re,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:p}))};return I(0),{calculatedDuration:null,next:re=>{let C=!1;return!F&&O===void 0&&(C=!0,L(re),I(re)),O!==void 0&&re>=O?F.next(re-O):(!C&&L(re),v)}}}function zR(n,e,t){const s=[],o=t||tr.mix||tx,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||ci:e;c=Ua(d,c)}s.push(c)}return s}function VR(n,e,{clamp:t=!0,ease:s,mixer:o}={}){const l=n.length;if(ah(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=zR(e,s,o),d=c.length,h=p=>{if(u&&p<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(p<n[g+1]);g++);const v=Ea(n[g],n[g+1],p);return c[g](v)};return t?p=>h(er(n[0],n[l-1],p)):h}function HR(n,e){const t=n[n.length-1];for(let s=1;s<=e;s++){const o=Ea(0,e,s);n.push(Bt(t,1,o))}}function GR(n){const e=[0];return HR(e,n.length-1),e}function WR(n,e){return n.map(t=>t*e)}function jR(n,e){return n.map(()=>e||j_).splice(0,n.length-1)}function va({duration:n=300,keyframes:e,times:t,ease:s="easeInOut"}){const o=nR(s)?s.map(Bv):Bv(s),l={done:!1,value:e[0]},u=WR(t&&t.length===e.length?t:GR(e),n),c=VR(u,e,{ease:Array.isArray(o)?o:jR(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const XR=n=>n!==null;function _h(n,{repeat:e,repeatType:t="loop"},s,o=1){const l=n.filter(XR),c=o<0||e&&t!=="loop"&&e%2===1?0:l.length-1;return!c||s===void 0?l[c]:s}const YR={decay:Nd,inertia:Nd,tween:va,keyframes:va,spring:Du};function rx(n){typeof n.type=="string"&&(n.type=YR[n.type])}class xh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const qR=n=>n/100;class yh extends xh{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==zn.now()&&this.tick(zn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;rx(e);const{type:t=va,repeat:s=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:c}=e;const d=t||va;d!==va&&typeof c[0]!="number"&&(this.mixKeyframes=Ua(qR,tx(c[0],c[1])),c=[0,100]);const h=d({...e,keyframes:c});l==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...c].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=vh(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:s,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:c,calculatedDuration:d}=this;if(this.startTime===null)return s.next(0);const{delay:h=0,keyframes:p,repeat:g,repeatType:v,repeatDelay:S,type:E,onUpdate:T,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const x=this.currentTime-h*(this.playbackSpeed>=0?1:-1),b=this.playbackSpeed>=0?x<0:x>o;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let w=this.currentTime,L=s;if(g){const re=Math.min(this.currentTime,o)/c;let C=Math.floor(re),D=re%1;!D&&re>=1&&(D=1),D===1&&C--,C=Math.min(C,g+1),!!(C%2)&&(v==="reverse"?(D=1-D,S&&(D-=S/c)):v==="mirror"&&(L=u)),w=er(0,1,D)*c}const O=b?{done:!1,value:p[0]}:L.next(w);l&&(O.value=l(O.value));let{done:F}=O;!b&&d!==null&&(F=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return I&&E!==Nd&&(O.value=_h(p,this.options,y,this.speed)),T&&T(O.value),I&&this.finish(),O}then(e,t){return this.finished.then(e,t)}get duration(){return ui(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+ui(e)}get time(){return ui(this.currentTime)}set time(e){e=Li(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(zn.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ui(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=LR,startTime:t}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=t??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(zn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function $R(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const ds=n=>n*180/Math.PI,Ud=n=>{const e=ds(Math.atan2(n[1],n[0]));return Id(e)},KR={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ud,rotateZ:Ud,skewX:n=>ds(Math.atan(n[1])),skewY:n=>ds(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Id=n=>(n=n%360,n<0&&(n+=360),n),jv=Ud,Xv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Yv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),ZR={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Xv,scaleY:Yv,scale:n=>(Xv(n)+Yv(n))/2,rotateX:n=>Id(ds(Math.atan2(n[6],n[5]))),rotateY:n=>Id(ds(Math.atan2(-n[2],n[0]))),rotateZ:jv,rotate:jv,skewX:n=>ds(Math.atan(n[4])),skewY:n=>ds(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Fd(n){return n.includes("scale")?1:0}function Od(n,e){if(!n||n==="none")return Fd(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(t)s=ZR,o=t;else{const c=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=KR,o=c}if(!o)return Fd(e);const l=s[e],u=o[1].split(",").map(JR);return typeof l=="function"?l(u):u[l]}const QR=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Od(t,e)};function JR(n){return parseFloat(n.trim())}const Ao=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Co=new Set(Ao),qv=n=>n===wo||n===Qe,eb=new Set(["x","y","z"]),tb=Ao.filter(n=>!eb.has(n));function nb(n){const e=[];return tb.forEach(t=>{const s=n.getValue(t);s!==void 0&&(e.push([t,s.get()]),s.set(t.startsWith("scale")?1:0))}),e}const vs={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Od(e,"x"),y:(n,{transform:e})=>Od(e,"y")};vs.translateX=vs.x;vs.translateY=vs.y;const _s=new Set;let kd=!1,Bd=!1,zd=!1;function sx(){if(Bd){const n=Array.from(_s).filter(s=>s.needsMeasurement),e=new Set(n.map(s=>s.element)),t=new Map;e.forEach(s=>{const o=nb(s);o.length&&(t.set(s,o),s.render())}),n.forEach(s=>s.measureInitialState()),e.forEach(s=>{s.render();const o=t.get(s);o&&o.forEach(([l,u])=>{s.getValue(l)?.set(u)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Bd=!1,kd=!1,_s.forEach(n=>n.complete(zd)),_s.clear()}function ox(){_s.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Bd=!0)})}function ib(){zd=!0,ox(),sx(),zd=!1}class Sh{constructor(e,t,s,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=s,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(_s.add(this),kd||(kd=!0,Ft.read(ox),Ft.resolveKeyframes(sx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:s,motionValue:o}=this;if(e[0]===null){const l=o?.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(s&&t){const c=s.readValue(t,u);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}$R(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),_s.delete(this)}cancel(){this.state==="scheduled"&&(_s.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const rb=n=>n.startsWith("--");function sb(n,e,t){rb(e)?n.style.setProperty(e,t):n.style[e]=t}const ob=lh(()=>window.ScrollTimeline!==void 0),ab={};function lb(n,e){const t=lh(n);return()=>ab[e]??t()}const ax=lb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),pa=([n,e,t,s])=>`cubic-bezier(${n}, ${e}, ${t}, ${s})`,$v={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:pa([0,.65,.55,1]),circOut:pa([.55,0,1,.45]),backIn:pa([.31,.01,.66,-.59]),backOut:pa([.33,1.53,.69,.99])};function lx(n,e){if(n)return typeof n=="function"?ax()?nx(n,e):"ease-out":X_(n)?pa(n):Array.isArray(n)?n.map(t=>lx(t,e)||$v.easeOut):$v[n]}function ub(n,e,t,{delay:s=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const g=lx(c,o);Array.isArray(g)&&(p.easing=g);const v={delay:s,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),n.animate(p,v)}function ux(n){return typeof n=="function"&&"applyToOptions"in n}function cb({type:n,...e}){return ux(n)&&ax()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class fb extends xh{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:s,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:c,onComplete:d}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,ah(typeof e.type!="string");const h=cb(e);this.animation=ub(t,s,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const p=_h(o,this.options,c,this.speed);this.updateMotionValue?this.updateMotionValue(p):sb(t,s,p),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return ui(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+ui(e)}get time(){return ui(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Li(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&ob()?(this.animation.timeline=e,ci):t(this)}}const cx={anticipate:H_,backInOut:V_,circInOut:W_};function db(n){return n in cx}function hb(n){typeof n.ease=="string"&&db(n.ease)&&(n.ease=cx[n.ease])}const Kv=10;class pb extends fb{constructor(e){hb(e),rx(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:s,onComplete:o,element:l,...u}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const c=new yh({...u,autoplay:!1}),d=Li(this.finishedTime??this.time);t.setWithVelocity(c.sample(d-Kv).value,c.sample(d).value,Kv),c.stop()}}const Zv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(kr.test(n)||n==="0")&&!n.startsWith("url("));function mb(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function gb(n,e,t,s){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=Zv(o,e),c=Zv(l,e);return!u||!c?!1:mb(n)||(t==="spring"||ux(t))&&s}function Vd(n){n.duration=0,n.type="keyframes"}const vb=new Set(["opacity","clipPath","filter","transform"]),_b=lh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function xb(n){const{motionValue:e,name:t,repeatDelay:s,repeatType:o,damping:l,type:u}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return _b()&&t&&vb.has(t)&&(t!=="transform"||!h)&&!d&&!s&&o!=="mirror"&&l!==0&&u!=="inertia"}const yb=40;class Sb extends xh{constructor({autoplay:e=!0,delay:t=0,type:s="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:c,name:d,motionValue:h,element:p,...g}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=zn.now();const v={autoplay:e,delay:t,type:s,repeat:o,repeatDelay:l,repeatType:u,name:d,motionValue:h,element:p,...g},S=p?.KeyframeResolver||Sh;this.keyframeResolver=new S(c,(E,T,y)=>this.onKeyframesResolved(E,T,v,!y),d,h,p),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,s,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:c,delay:d,isHandoff:h,onUpdate:p}=s;this.resolvedAt=zn.now(),gb(e,l,u,c)||((tr.instantAnimations||!d)&&p?.(_h(e,s,t)),e[0]=e[e.length-1],Vd(s),s.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>yb?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...s,keyframes:e},S=!h&&xb(v)?new pb({...v,element:v.motionValue.owner.current}):new yh(v);S.finished.then(()=>this.notifyFinished()).catch(ci),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ib()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Mb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Eb(n){const e=Mb.exec(n);if(!e)return[,];const[,t,s,o]=e;return[`--${t??s}`,o]}function fx(n,e,t=1){const[s,o]=Eb(n);if(!s)return;const l=window.getComputedStyle(e).getPropertyValue(s);if(l){const u=l.trim();return N_(u)?parseFloat(u):u}return hh(o)?fx(o,e,t+1):o}function Mh(n,e){return n?.[e]??n?.default??n}const dx=new Set(["width","height","top","left","right","bottom",...Ao]),Tb={test:n=>n==="auto",parse:n=>n},hx=n=>e=>e.test(n),px=[wo,Qe,Di,br,mR,pR,Tb],Qv=n=>px.find(hx(n));function wb(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||I_(n):!0}const Ab=new Set(["brightness","contrast","saturate","opacity"]);function Cb(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[s]=t.match(ph)||[];if(!s)return n;const o=t.replace(s,"");let l=Ab.has(e)?1:0;return s!==t&&(l*=100),e+"("+l+o+")"}const Rb=/\b([a-z-]*)\(.*?\)/gu,Hd={...kr,getAnimatableNone:n=>{const e=n.match(Rb);return e?e.map(Cb).join(" "):n}},Jv={...wo,transform:Math.round},bb={rotate:br,rotateX:br,rotateY:br,rotateZ:br,scale:gu,scaleX:gu,scaleY:gu,scaleZ:gu,skew:br,skewX:br,skewY:br,distance:Qe,translateX:Qe,translateY:Qe,translateZ:Qe,x:Qe,y:Qe,z:Qe,perspective:Qe,transformPerspective:Qe,opacity:Ta,originX:zv,originY:zv,originZ:Qe},Eh={borderWidth:Qe,borderTopWidth:Qe,borderRightWidth:Qe,borderBottomWidth:Qe,borderLeftWidth:Qe,borderRadius:Qe,radius:Qe,borderTopLeftRadius:Qe,borderTopRightRadius:Qe,borderBottomRightRadius:Qe,borderBottomLeftRadius:Qe,width:Qe,maxWidth:Qe,height:Qe,maxHeight:Qe,top:Qe,right:Qe,bottom:Qe,left:Qe,padding:Qe,paddingTop:Qe,paddingRight:Qe,paddingBottom:Qe,paddingLeft:Qe,margin:Qe,marginTop:Qe,marginRight:Qe,marginBottom:Qe,marginLeft:Qe,backgroundPositionX:Qe,backgroundPositionY:Qe,...bb,zIndex:Jv,fillOpacity:Ta,strokeOpacity:Ta,numOctaves:Jv},Pb={...Eh,color:Kt,backgroundColor:Kt,outlineColor:Kt,fill:Kt,stroke:Kt,borderColor:Kt,borderTopColor:Kt,borderRightColor:Kt,borderBottomColor:Kt,borderLeftColor:Kt,filter:Hd,WebkitFilter:Hd},mx=n=>Pb[n];function gx(n,e){let t=mx(n);return t!==Hd&&(t=kr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const Lb=new Set(["auto","none","0"]);function Db(n,e,t){let s=0,o;for(;s<n.length&&!o;){const l=n[s];typeof l=="string"&&!Lb.has(l)&&wa(l).values.length&&(o=n[s]),s++}if(o&&t)for(const l of e)n[l]=gx(t,o)}class Nb extends Sh{constructor(e,t,s,o,l){super(e,t,s,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:s}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),hh(h))){const p=fx(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!dx.has(s)||e.length!==2)return;const[o,l]=e,u=Qv(o),c=Qv(l);if(u!==c)if(qv(u)&&qv(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else vs[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,s=[];for(let o=0;o<e.length;o++)(e[o]===null||wb(e[o]))&&s.push(o);s.length&&Db(e,s,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:s}=this;if(!e||!e.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=vs[s](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(s,o).jump(o,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const l=s.length-1,u=s[l];s[l]=vs[t](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([c,d])=>{e.getValue(c).set(d)}),this.resolveNoneKeyframes()}}function Ub(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let s=document;const o=t?.[n]??s.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}const vx=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Ib(n){return U_(n)&&"offsetHeight"in n}const e0=30,Fb=n=>!isNaN(parseFloat(n));class Ob{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const o=zn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=zn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Fb(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new uh);const s=this.events[e].add(t);return e==="change"?()=>{s(),Ft.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,s){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-s}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=zn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>e0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,e0);return F_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function So(n,e){return new Ob(n,e)}const{schedule:Th}=Y_(queueMicrotask,!1),yi={x:!1,y:!1};function _x(){return yi.x||yi.y}function kb(n){return n==="x"||n==="y"?yi[n]?null:(yi[n]=!0,()=>{yi[n]=!1}):yi.x||yi.y?null:(yi.x=yi.y=!0,()=>{yi.x=yi.y=!1})}function xx(n,e){const t=Ub(n),s=new AbortController,o={passive:!0,...e,signal:s.signal};return[t,o,()=>s.abort()]}function t0(n){return!(n.pointerType==="touch"||_x())}function Bb(n,e,t={}){const[s,o,l]=xx(n,t),u=c=>{if(!t0(c))return;const{target:d}=c,h=e(d,c);if(typeof h!="function"||!d)return;const p=g=>{t0(g)&&(h(g),d.removeEventListener("pointerleave",p))};d.addEventListener("pointerleave",p,o)};return s.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const yx=(n,e)=>e?n===e?!0:yx(n,e.parentElement):!1,wh=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,zb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Vb(n){return zb.has(n.tagName)||n.tabIndex!==-1}const Su=new WeakSet;function n0(n){return e=>{e.key==="Enter"&&n(e)}}function cd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Hb=(n,e)=>{const t=n.currentTarget;if(!t)return;const s=n0(()=>{if(Su.has(t))return;cd(t,"down");const o=n0(()=>{cd(t,"up")}),l=()=>cd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",s,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",s),e)};function i0(n){return wh(n)&&!_x()}function Gb(n,e,t={}){const[s,o,l]=xx(n,t),u=c=>{const d=c.currentTarget;if(!i0(c))return;Su.add(d);const h=e(d,c),p=(S,E)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),Su.has(d)&&Su.delete(d),i0(S)&&typeof h=="function"&&h(S,{success:E})},g=S=>{p(S,d===window||d===document||t.useGlobalTarget||yx(d,S.target))},v=S=>{p(S,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return s.forEach(c=>{(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),Ib(c)&&(c.addEventListener("focus",h=>Hb(h,o)),!Vb(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),l}function Sx(n){return U_(n)&&"ownerSVGElement"in n}function Wb(n){return Sx(n)&&n.tagName==="svg"}const En=n=>!!(n&&n.getVelocity),jb=[...px,Kt,kr],Xb=n=>jb.find(hx(n)),Mx=Ae.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Yb(n=!0){const e=Ae.useContext(rh);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:s,register:o}=e,l=Ae.useId();Ae.useEffect(()=>{if(n)return o(l)},[n]);const u=Ae.useCallback(()=>n&&s&&s(l),[l,s,n]);return!t&&s?[!1,u]:[!0]}const Ex=Ae.createContext({strict:!1}),r0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Mo={};for(const n in r0)Mo[n]={isEnabled:e=>r0[n].some(t=>!!e[t])};function qb(n){for(const e in n)Mo[e]={...Mo[e],...n[e]}}const $b=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Nu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||$b.has(n)}let Tx=n=>!Nu(n);function Kb(n){typeof n=="function"&&(Tx=e=>e.startsWith("on")?!Nu(e):n(e))}try{Kb(require("@emotion/is-prop-valid").default)}catch{}function Zb(n,e,t){const s={};for(const o in n)o==="values"&&typeof n.values=="object"||(Tx(o)||t===!0&&Nu(o)||!e&&!Nu(o)||n.draggable&&o.startsWith("onDrag"))&&(s[o]=n[o]);return s}const Vu=Ae.createContext({});function Hu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Aa(n){return typeof n=="string"||Array.isArray(n)}const Ah=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ch=["initial",...Ah];function Gu(n){return Hu(n.animate)||Ch.some(e=>Aa(n[e]))}function wx(n){return!!(Gu(n)||n.variants)}function Qb(n,e){if(Gu(n)){const{initial:t,animate:s}=n;return{initial:t===!1||Aa(t)?t:void 0,animate:Aa(s)?s:void 0}}return n.inherit!==!1?e:{}}function Jb(n){const{initial:e,animate:t}=Qb(n,Ae.useContext(Vu));return Ae.useMemo(()=>({initial:e,animate:t}),[s0(e),s0(t)])}function s0(n){return Array.isArray(n)?n.join(" "):n}const Ca={};function eP(n){for(const e in n)Ca[e]=n[e],dh(e)&&(Ca[e].isCSSVariable=!0)}function Ax(n,{layout:e,layoutId:t}){return Co.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Ca[n]||n==="opacity")}const tP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},nP=Ao.length;function iP(n,e,t){let s="",o=!0;for(let l=0;l<nP;l++){const u=Ao[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=vx(c,Eh[u]);if(!d){o=!1;const p=tP[u]||u;s+=`${p}(${h}) `}t&&(e[u]=h)}}return s=s.trim(),t?s=t(e,o?"":s):o&&(s="none"),s}function Rh(n,e,t){const{style:s,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Co.has(d)){u=!0;continue}else if(dh(d)){o[d]=h;continue}else{const p=vx(h,Eh[d]);d.startsWith("origin")?(c=!0,l[d]=p):s[d]=p}}if(e.transform||(u||t?s.transform=iP(e,n.transform,t):s.transform&&(s.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:p=0}=l;s.transformOrigin=`${d} ${h} ${p}`}}const bh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Cx(n,e,t){for(const s in e)!En(e[s])&&!Ax(s,t)&&(n[s]=e[s])}function rP({transformTemplate:n},e){return Ae.useMemo(()=>{const t=bh();return Rh(t,e,n),Object.assign({},t.vars,t.style)},[e])}function sP(n,e){const t=n.style||{},s={};return Cx(s,t,n),Object.assign(s,rP(n,e)),s}function oP(n,e){const t={},s=sP(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=s,t}const aP={offset:"stroke-dashoffset",array:"stroke-dasharray"},lP={offset:"strokeDashoffset",array:"strokeDasharray"};function uP(n,e,t=1,s=0,o=!0){n.pathLength=1;const l=o?aP:lP;n[l.offset]=Qe.transform(-s);const u=Qe.transform(e),c=Qe.transform(t);n[l.array]=`${u} ${c}`}function Rx(n,{attrX:e,attrY:t,attrScale:s,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...c},d,h,p){if(Rh(n,c,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:v}=n;g.transform&&(v.transform=g.transform,delete g.transform),(v.transform||g.transformOrigin)&&(v.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),v.transform&&(v.transformBox=p?.transformBox??"fill-box",delete g.transformBox),e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),s!==void 0&&(g.scale=s),o!==void 0&&uP(g,o,l,u,!1)}const bx=()=>({...bh(),attrs:{}}),Px=n=>typeof n=="string"&&n.toLowerCase()==="svg";function cP(n,e,t,s){const o=Ae.useMemo(()=>{const l=bx();return Rx(l,e,Px(s),n.transformTemplate,n.style),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};Cx(l,n.style,n),o.style={...l,...o.style}}return o}const fP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ph(n){return typeof n!="string"||n.includes("-")?!1:!!(fP.indexOf(n)>-1||/[A-Z]/u.test(n))}function dP(n,e,t,{latestValues:s},o,l=!1){const c=(Ph(n)?cP:oP)(e,s,o,n),d=Zb(e,typeof n=="string",l),h=n!==Ae.Fragment?{...d,...c,ref:t}:{},{children:p}=e,g=Ae.useMemo(()=>En(p)?p.get():p,[p]);return Ae.createElement(n,{...h,children:g})}function o0(n){const e=[{},{}];return n?.values.forEach((t,s)=>{e[0][s]=t.get(),e[1][s]=t.getVelocity()}),e}function Lh(n,e,t,s){if(typeof e=="function"){const[o,l]=o0(s);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=o0(s);e=e(t!==void 0?t:n.custom,o,l)}return e}function Mu(n){return En(n)?n.get():n}function hP({scrapeMotionValuesFromProps:n,createRenderState:e},t,s,o){return{latestValues:pP(t,s,o,n),renderState:e()}}function pP(n,e,t,s){const o={},l=s(n,{});for(const v in l)o[v]=Mu(l[v]);let{initial:u,animate:c}=n;const d=Gu(n),h=wx(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let p=t?t.initial===!1:!1;p=p||u===!1;const g=p?c:u;if(g&&typeof g!="boolean"&&!Hu(g)){const v=Array.isArray(g)?g:[g];for(let S=0;S<v.length;S++){const E=Lh(n,v[S]);if(E){const{transitionEnd:T,transition:y,...x}=E;for(const b in x){let w=x[b];if(Array.isArray(w)){const L=p?w.length-1:0;w=w[L]}w!==null&&(o[b]=w)}for(const b in T)o[b]=T[b]}}}return o}const Lx=n=>(e,t)=>{const s=Ae.useContext(Vu),o=Ae.useContext(rh),l=()=>hP(n,e,s,o);return t?l():qC(l)};function Dh(n,e,t){const{style:s}=n,o={};for(const l in s)(En(s[l])||e.style&&En(e.style[l])||Ax(l,n)||t?.getValue(l)?.liveStyle!==void 0)&&(o[l]=s[l]);return o}const mP=Lx({scrapeMotionValuesFromProps:Dh,createRenderState:bh});function Dx(n,e,t){const s=Dh(n,e,t);for(const o in n)if(En(n[o])||En(e[o])){const l=Ao.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[l]=n[o]}return s}const gP=Lx({scrapeMotionValuesFromProps:Dx,createRenderState:bx}),vP=Symbol.for("motionComponentSymbol");function uo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function _P(n,e,t){return Ae.useCallback(s=>{s&&n.onMount&&n.onMount(s),e&&(s?e.mount(s):e.unmount()),t&&(typeof t=="function"?t(s):uo(t)&&(t.current=s))},[e])}const Nh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),xP="framerAppearId",Nx="data-"+Nh(xP),Ux=Ae.createContext({});function yP(n,e,t,s,o){const{visualElement:l}=Ae.useContext(Vu),u=Ae.useContext(Ex),c=Ae.useContext(rh),d=Ae.useContext(Mx).reducedMotion,h=Ae.useRef(null);s=s||u.renderer,!h.current&&s&&(h.current=s(n,{visualState:e,parent:l,props:t,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const p=h.current,g=Ae.useContext(Ux);p&&!p.projection&&o&&(p.type==="html"||p.type==="svg")&&SP(h.current,t,o,g);const v=Ae.useRef(!1);Ae.useInsertionEffect(()=>{p&&v.current&&p.update(t,c)});const S=t[Nx],E=Ae.useRef(!!S&&!window.MotionHandoffIsComplete?.(S)&&window.MotionHasOptimisedAnimation?.(S));return $C(()=>{p&&(v.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),p.scheduleRenderMicrotask(),E.current&&p.animationState&&p.animationState.animateChanges())}),Ae.useEffect(()=>{p&&(!E.current&&p.animationState&&p.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(S)}),E.current=!1),p.enteringChildren=void 0)}),p}function SP(n,e,t,s){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h,layoutCrossfade:p}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Ix(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&uo(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:s,crossfade:p,layoutScroll:d,layoutRoot:h})}function Ix(n){if(n)return n.options.allowProjection!==!1?n.projection:Ix(n.parent)}function fd(n,{forwardMotionProps:e=!1}={},t,s){t&&qb(t);const o=Ph(n)?gP:mP;function l(c,d){let h;const p={...Ae.useContext(Mx),...c,layoutId:MP(c)},{isStatic:g}=p,v=Jb(c),S=o(c,g);if(!g&&ih){EP();const E=TP(p);h=E.MeasureLayout,v.visualElement=yP(n,S,p,s,E.ProjectionNode)}return W.jsxs(Vu.Provider,{value:v,children:[h&&v.visualElement?W.jsx(h,{visualElement:v.visualElement,...p}):null,dP(n,c,_P(S,v.visualElement,d),S,g,e)]})}l.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const u=Ae.forwardRef(l);return u[vP]=n,u}function MP({layoutId:n}){const e=Ae.useContext(D_).id;return e&&n!==void 0?e+"-"+n:n}function EP(n,e){Ae.useContext(Ex).strict}function TP(n){const{drag:e,layout:t}=Mo;if(!e&&!t)return{};const s={...e,...t};return{MeasureLayout:e?.isEnabled(n)||t?.isEnabled(n)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function wP(n,e){if(typeof Proxy>"u")return fd;const t=new Map,s=(l,u)=>fd(l,u,n,e),o=(l,u)=>s(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?s:(t.has(u)||t.set(u,fd(u,void 0,n,e)),t.get(u))})}function Fx({top:n,left:e,right:t,bottom:s}){return{x:{min:e,max:t},y:{min:n,max:s}}}function AP({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function CP(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),s=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:s.y,right:s.x}}function dd(n){return n===void 0||n===1}function Gd({scale:n,scaleX:e,scaleY:t}){return!dd(n)||!dd(e)||!dd(t)}function ls(n){return Gd(n)||Ox(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ox(n){return a0(n.x)||a0(n.y)}function a0(n){return n&&n!=="0%"}function Uu(n,e,t){const s=n-t,o=e*s;return t+o}function l0(n,e,t,s,o){return o!==void 0&&(n=Uu(n,o,s)),Uu(n,t,s)+e}function Wd(n,e=0,t=1,s,o){n.min=l0(n.min,e,t,s,o),n.max=l0(n.max,e,t,s,o)}function kx(n,{x:e,y:t}){Wd(n.x,e.translate,e.scale,e.originPoint),Wd(n.y,t.translate,t.scale,t.originPoint)}const u0=.999999999999,c0=1.0000000000001;function RP(n,e,t,s=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(s&&l.options.layoutScroll&&l.scroll&&l!==l.root&&fo(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,kx(n,u)),s&&ls(l.latestValues)&&fo(n,l.latestValues))}e.x<c0&&e.x>u0&&(e.x=1),e.y<c0&&e.y>u0&&(e.y=1)}function co(n,e){n.min=n.min+e,n.max=n.max+e}function f0(n,e,t,s,o=.5){const l=Bt(n.min,n.max,o);Wd(n,e,t,l,s)}function fo(n,e){f0(n.x,e.x,e.scaleX,e.scale,e.originX),f0(n.y,e.y,e.scaleY,e.scale,e.originY)}function Bx(n,e){return Fx(CP(n.getBoundingClientRect(),e))}function bP(n,e,t){const s=Bx(n,t),{scroll:o}=e;return o&&(co(s.x,o.offset.x),co(s.y,o.offset.y)),s}const d0=()=>({translate:0,scale:1,origin:0,originPoint:0}),ho=()=>({x:d0(),y:d0()}),h0=()=>({min:0,max:0}),Xt=()=>({x:h0(),y:h0()}),jd={current:null},zx={current:!1};function PP(){if(zx.current=!0,!!ih)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>jd.current=n.matches;n.addEventListener("change",e),e()}else jd.current=!1}const LP=new WeakMap;function DP(n,e,t){for(const s in e){const o=e[s],l=t[s];if(En(o))n.addValue(s,o);else if(En(l))n.addValue(s,So(o,{owner:n}));else if(l!==o)if(n.hasValue(s)){const u=n.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(s);n.addValue(s,So(u!==void 0?u:o,{owner:n}))}}for(const s in t)e[s]===void 0&&n.removeValue(s);return e}const p0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class NP{scrapeMotionValuesFromProps(e,t,s){return{}}constructor({parent:e,props:t,presenceContext:s,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Sh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=zn.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Ft.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=s,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=Gu(t),this.isVariantNode=wx(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const v in g){const S=g[v];d[v]!==void 0&&En(S)&&S.set(d[v])}}mount(e){this.current=e,LP.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,s)=>this.bindToMotionValue(s,t)),zx.current||PP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:jd.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Or(this.notifyUpdate),Or(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const s=Co.has(e);s&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Ft.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Mo){const t=Mo[e];if(!t)continue;const{isEnabled:s,Feature:o}=t;if(!this.features[e]&&o&&s(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Xt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let s=0;s<p0.length;s++){const o=p0[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=DP(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const s=this.values.get(e);t!==s&&(s&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let s=this.values.get(e);return s===void 0&&t!==void 0&&(s=So(t===null?void 0:t,{owner:this}),this.addValue(e,s)),s}readValue(e,t){let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(N_(s)||I_(s))?s=parseFloat(s):!Xb(s)&&kr.test(t)&&(s=gx(e,t)),this.setBaseTarget(e,En(s)?s.get():s)),En(s)?s.get():s}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let s;if(typeof t=="string"||typeof t=="object"){const l=Lh(this.props,t,this.presenceContext?.custom);l&&(s=l[e])}if(t&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!En(o)?o:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new uh),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Th.render(this.render)}}class Vx extends NP{constructor(){super(...arguments),this.KeyframeResolver=Nb}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:s}){delete t[e],delete s[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;En(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Hx(n,{style:e,vars:t},s,o){const l=n.style;let u;for(u in e)l[u]=e[u];o?.applyProjectionStyles(l,s);for(u in t)l.setProperty(u,t[u])}function UP(n){return window.getComputedStyle(n)}class IP extends Vx{constructor(){super(...arguments),this.type="html",this.renderInstance=Hx}readValueFromInstance(e,t){if(Co.has(t))return this.projection?.isProjecting?Fd(t):QR(e,t);{const s=UP(e),o=(dh(t)?s.getPropertyValue(t):s[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Bx(e,t)}build(e,t,s){Rh(e,t,s.transformTemplate)}scrapeMotionValuesFromProps(e,t,s){return Dh(e,t,s)}}const Gx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function FP(n,e,t,s){Hx(n,e,void 0,s);for(const o in e.attrs)n.setAttribute(Gx.has(o)?o:Nh(o),e.attrs[o])}class OP extends Vx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Xt}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Co.has(t)){const s=mx(t);return s&&s.default||0}return t=Gx.has(t)?t:Nh(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,s){return Dx(e,t,s)}build(e,t,s){Rx(e,t,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(e,t,s,o){FP(e,t,s,o)}mount(e){this.isSVGTag=Px(e.tagName),super.mount(e)}}const kP=(n,e)=>Ph(n)?new OP(e):new IP(e,{allowProjection:n!==Ae.Fragment});function go(n,e,t){const s=n.getProps();return Lh(s,e,t!==void 0?t:s.custom,n)}const Xd=n=>Array.isArray(n);function BP(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,So(t))}function zP(n){return Xd(n)?n[n.length-1]||0:n}function VP(n,e){const t=go(n,e);let{transitionEnd:s={},transition:o={},...l}=t||{};l={...l,...s};for(const u in l){const c=zP(l[u]);BP(n,u,c)}}function HP(n){return!!(En(n)&&n.add)}function Yd(n,e){const t=n.getValue("willChange");if(HP(t))return t.add(e);if(!t&&tr.WillChange){const s=new tr.WillChange("auto");n.addValue("willChange",s),s.add(e)}}function Wx(n){return n.props[Nx]}const GP=n=>n!==null;function WP(n,{repeat:e,repeatType:t="loop"},s){const o=n.filter(GP),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return o[l]}const jP={type:"spring",stiffness:500,damping:25,restSpeed:10},XP=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),YP={type:"keyframes",duration:.8},qP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$P=(n,{keyframes:e})=>e.length>2?YP:Co.has(n)?n.startsWith("scale")?XP(e[1]):jP:qP;function KP({when:n,delay:e,delayChildren:t,staggerChildren:s,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const Uh=(n,e,t,s={},o,l)=>u=>{const c=Mh(s,n)||{},d=c.delay||s.delay||0;let{elapsed:h=0}=s;h=h-Li(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};KP(c)||Object.assign(p,$P(n,p)),p.duration&&(p.duration=Li(p.duration)),p.repeatDelay&&(p.repeatDelay=Li(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(Vd(p),p.delay===0&&(g=!0)),(tr.instantAnimations||tr.skipAnimations)&&(g=!0,Vd(p),p.delay=0),p.allowFlatten=!c.type&&!c.ease,g&&!l&&e.get()!==void 0){const v=WP(p.keyframes,c);if(v!==void 0){Ft.update(()=>{p.onUpdate(v),p.onComplete()});return}}return c.isSync?new yh(p):new Sb(p)};function ZP({protectedKeys:n,needsAnimating:e},t){const s=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,s}function jx(n,e,{delay:t=0,transitionOverride:s,type:o}={}){let{transition:l=n.getDefaultTransition(),transitionEnd:u,...c}=e;s&&(l=s);const d=[],h=o&&n.animationState&&n.animationState.getState()[o];for(const p in c){const g=n.getValue(p,n.latestValues[p]??null),v=c[p];if(v===void 0||h&&ZP(h,p))continue;const S={delay:t,...Mh(l||{},p)},E=g.get();if(E!==void 0&&!g.isAnimating&&!Array.isArray(v)&&v===E&&!S.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const x=Wx(n);if(x){const b=window.MotionHandoffAnimation(x,p,Ft);b!==null&&(S.startTime=b,T=!0)}}Yd(n,p),g.start(Uh(p,g,v,n.shouldReduceMotion&&dx.has(p)?{type:!1}:S,n,T));const y=g.animation;y&&d.push(y)}return u&&Promise.all(d).then(()=>{Ft.update(()=>{u&&VP(n,u)})}),d}function Xx(n,e,t,s=0,o=1){const l=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),u=n.size,c=(u-1)*s;return typeof t=="function"?t(l,u):o===1?l*s:c-l*s}function qd(n,e,t={}){const s=go(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=s||{};t.transitionOverride&&(o=t.transitionOverride);const l=s?()=>Promise.all(jx(n,s,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:p,staggerDirection:g}=o;return QP(n,e,d,h,p,g,t)}:()=>Promise.resolve(),{when:c}=o;if(c){const[d,h]=c==="beforeChildren"?[l,u]:[u,l];return d().then(()=>h())}else return Promise.all([l(),u(t.delay)])}function QP(n,e,t=0,s=0,o=0,l=1,u){const c=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),c.push(qd(d,e,{...u,delay:t+(typeof s=="function"?0:s)+Xx(n.variantChildren,d,s,o,l)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(c)}function JP(n,e,t={}){n.notify("AnimationStart",e);let s;if(Array.isArray(e)){const o=e.map(l=>qd(n,l,t));s=Promise.all(o)}else if(typeof e=="string")s=qd(n,e,t);else{const o=typeof e=="function"?go(n,e,t.custom):e;s=Promise.all(jx(n,o,t))}return s.then(()=>{n.notify("AnimationComplete",e)})}function Yx(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let s=0;s<t;s++)if(e[s]!==n[s])return!1;return!0}const eL=Ch.length;function qx(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?qx(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<eL;t++){const s=Ch[t],o=n.props[s];(Aa(o)||o===!1)&&(e[s]=o)}return e}const tL=[...Ah].reverse(),nL=Ah.length;function iL(n){return e=>Promise.all(e.map(({animation:t,options:s})=>JP(n,t,s)))}function rL(n){let e=iL(n),t=m0(),s=!0;const o=d=>(h,p)=>{const g=go(n,p,d==="exit"?n.presenceContext?.custom:void 0);if(g){const{transition:v,transitionEnd:S,...E}=g;h={...h,...E,...S}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,p=qx(n.parent)||{},g=[],v=new Set;let S={},E=1/0;for(let y=0;y<nL;y++){const x=tL[y],b=t[x],w=h[x]!==void 0?h[x]:p[x],L=Aa(w),O=x===d?b.isActive:null;O===!1&&(E=y);let F=w===p[x]&&w!==h[x]&&L;if(F&&s&&n.manuallyAnimateOnMount&&(F=!1),b.protectedKeys={...S},!b.isActive&&O===null||!w&&!b.prevProp||Hu(w)||typeof w=="boolean")continue;const I=sL(b.prevProp,w);let re=I||x===d&&b.isActive&&!F&&L||y>E&&L,C=!1;const D=Array.isArray(w)?w:[w];let ue=D.reduce(o(x),{});O===!1&&(ue={});const{prevResolvedValues:ce={}}=b,ve={...ce,...ue},H=Q=>{re=!0,v.has(Q)&&(C=!0,v.delete(Q)),b.needsAnimating[Q]=!0;const z=n.getValue(Q);z&&(z.liveStyle=!1)};for(const Q in ve){const z=ue[Q],K=ce[Q];if(S.hasOwnProperty(Q))continue;let j=!1;Xd(z)&&Xd(K)?j=!Yx(z,K):j=z!==K,j?z!=null?H(Q):v.add(Q):z!==void 0&&v.has(Q)?H(Q):b.protectedKeys[Q]=!0}b.prevProp=w,b.prevResolvedValues=ue,b.isActive&&(S={...S,...ue}),s&&n.blockInitialAnimation&&(re=!1);const X=F&&I;re&&(!X||C)&&g.push(...D.map(Q=>{const z={type:x};if(typeof Q=="string"&&s&&!X&&n.manuallyAnimateOnMount&&n.parent){const{parent:K}=n,j=go(K,Q);if(K.enteringChildren&&j){const{delayChildren:N}=j.transition||{};z.delay=Xx(K.enteringChildren,n,N)}}return{animation:Q,options:z}}))}if(v.size){const y={};if(typeof h.initial!="boolean"){const x=go(n,Array.isArray(h.initial)?h.initial[0]:h.initial);x&&x.transition&&(y.transition=x.transition)}v.forEach(x=>{const b=n.getBaseTarget(x),w=n.getValue(x);w&&(w.liveStyle=!0),y[x]=b??null}),g.push({animation:y})}let T=!!g.length;return s&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),s=!1,T?e(g):Promise.resolve()}function c(d,h){if(t[d].isActive===h)return Promise.resolve();n.variantChildren?.forEach(g=>g.animationState?.setActive(d,h)),t[d].isActive=h;const p=u(d);for(const g in t)t[g].protectedKeys={};return p}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=m0(),s=!0}}}function sL(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Yx(e,n):!1}function ss(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function m0(){return{animate:ss(!0),whileInView:ss(),whileHover:ss(),whileTap:ss(),whileDrag:ss(),whileFocus:ss(),exit:ss()}}class Br{constructor(e){this.isMounted=!1,this.node=e}update(){}}class oL extends Br{constructor(e){super(e),e.animationState||(e.animationState=rL(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Hu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let aL=0;class lL extends Br{constructor(){super(...arguments),this.id=aL++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const uL={animation:{Feature:oL},exit:{Feature:lL}};function Ra(n,e,t,s={passive:!0}){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t)}function Oa(n){return{point:{x:n.pageX,y:n.pageY}}}const cL=n=>e=>wh(e)&&n(e,Oa(e));function _a(n,e,t,s){return Ra(n,e,cL(t),s)}const $x=1e-4,fL=1-$x,dL=1+$x,Kx=.01,hL=0-Kx,pL=0+Kx;function bn(n){return n.max-n.min}function mL(n,e,t){return Math.abs(n-e)<=t}function g0(n,e,t,s=.5){n.origin=s,n.originPoint=Bt(e.min,e.max,n.origin),n.scale=bn(t)/bn(e),n.translate=Bt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=fL&&n.scale<=dL||isNaN(n.scale))&&(n.scale=1),(n.translate>=hL&&n.translate<=pL||isNaN(n.translate))&&(n.translate=0)}function xa(n,e,t,s){g0(n.x,e.x,t.x,s?s.originX:void 0),g0(n.y,e.y,t.y,s?s.originY:void 0)}function v0(n,e,t){n.min=t.min+e.min,n.max=n.min+bn(e)}function gL(n,e,t){v0(n.x,e.x,t.x),v0(n.y,e.y,t.y)}function _0(n,e,t){n.min=e.min-t.min,n.max=n.min+bn(e)}function ya(n,e,t){_0(n.x,e.x,t.x),_0(n.y,e.y,t.y)}function si(n){return[n("x"),n("y")]}const Zx=({current:n})=>n?n.ownerDocument.defaultView:null,x0=(n,e)=>Math.abs(n-e);function vL(n,e){const t=x0(n.x,e.x),s=x0(n.y,e.y);return Math.sqrt(t**2+s**2)}class Qx{constructor(e,t,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=pd(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,E=vL(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!E)return;const{point:T}=v,{timestamp:y}=cn;this.history.push({...T,timestamp:y});const{onStart:x,onMove:b}=this.handlers;S||(x&&x(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,v)},this.handlePointerMove=(v,S)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=hd(S,this.transformPagePoint),Ft.update(this.updatePoint,!0)},this.handlePointerUp=(v,S)=>{this.end();const{onEnd:E,onSessionEnd:T,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=pd(v.type==="pointercancel"?this.lastMoveEventInfo:hd(S,this.transformPagePoint),this.history);this.startEvent&&E&&E(v,x),T&&T(v,x)},!wh(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=o||window;const c=Oa(e),d=hd(c,this.transformPagePoint),{point:h}=d,{timestamp:p}=cn;this.history=[{...h,timestamp:p}];const{onSessionStart:g}=t;g&&g(e,pd(d,this.history)),this.removeListeners=Ua(_a(this.contextWindow,"pointermove",this.handlePointerMove),_a(this.contextWindow,"pointerup",this.handlePointerUp),_a(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Or(this.updatePoint)}}function hd(n,e){return e?{point:e(n.point)}:n}function y0(n,e){return{x:n.x-e.x,y:n.y-e.y}}function pd({point:n},e){return{point:n,delta:y0(n,Jx(e)),offset:y0(n,_L(e)),velocity:xL(e,.1)}}function _L(n){return n[0]}function Jx(n){return n[n.length-1]}function xL(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,s=null;const o=Jx(n);for(;t>=0&&(s=n[t],!(o.timestamp-s.timestamp>Li(e)));)t--;if(!s)return{x:0,y:0};const l=ui(o.timestamp-s.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-s.x)/l,y:(o.y-s.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function yL(n,{min:e,max:t},s){return e!==void 0&&n<e?n=s?Bt(e,n,s.min):Math.max(n,e):t!==void 0&&n>t&&(n=s?Bt(t,n,s.max):Math.min(n,t)),n}function S0(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function SL(n,{top:e,left:t,bottom:s,right:o}){return{x:S0(n.x,t,o),y:S0(n.y,e,s)}}function M0(n,e){let t=e.min-n.min,s=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,s]=[s,t]),{min:t,max:s}}function ML(n,e){return{x:M0(n.x,e.x),y:M0(n.y,e.y)}}function EL(n,e){let t=.5;const s=bn(n),o=bn(e);return o>s?t=Ea(e.min,e.max-s,n.min):s>o&&(t=Ea(n.min,n.max-o,e.min)),er(0,1,t)}function TL(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const $d=.35;function wL(n=$d){return n===!1?n=0:n===!0&&(n=$d),{x:E0(n,"left","right"),y:E0(n,"top","bottom")}}function E0(n,e,t){return{min:T0(n,e),max:T0(n,t)}}function T0(n,e){return typeof n=="number"?n:n[e]||0}const AL=new WeakMap;class CL{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Xt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Oa(g).point)},u=(g,v)=>{const{drag:S,dragPropagation:E,onDragStart:T}=this.getProps();if(S&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=kb(S),!this.openDragLock))return;this.latestPointerEvent=g,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),si(x=>{let b=this.getAxisMotionValue(x).get()||0;if(Di.test(b)){const{projection:w}=this.visualElement;if(w&&w.layout){const L=w.layout.layoutBox[x];L&&(b=bn(L)*(parseFloat(b)/100))}}this.originPoint[x]=b}),T&&Ft.postRender(()=>T(g,v)),Yd(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},c=(g,v)=>{this.latestPointerEvent=g,this.latestPanInfo=v;const{dragPropagation:S,dragDirectionLock:E,onDirectionLock:T,onDrag:y}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:x}=v;if(E&&this.currentDirection===null){this.currentDirection=RL(x),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",v.point,x),this.updateAxis("y",v.point,x),this.visualElement.render(),y&&y(g,v)},d=(g,v)=>{this.latestPointerEvent=g,this.latestPanInfo=v,this.stop(g,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>si(g=>this.getAnimationState(g)==="paused"&&this.getAxisMotionValue(g).animation?.play()),{dragSnapToOrigin:p}=this.getProps();this.panSession=new Qx(e,{onSessionStart:l,onStart:u,onMove:c,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:s,contextWindow:Zx(this.visualElement)})}stop(e,t){const s=e||this.latestPointerEvent,o=t||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:c}=this.getProps();c&&Ft.postRender(()=>c(s,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,s){const{drag:o}=this.getProps();if(!s||!vu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+s[e];this.constraints&&this.constraints[e]&&(u=yL(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;e&&uo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&s?this.constraints=SL(s.layoutBox,e):this.constraints=!1,this.elastic=wL(t),o!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&si(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=TL(s.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!uo(e))return!1;const s=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=bP(s,o.root,this.visualElement.getTransformPagePoint());let u=ML(o.layout.layoutBox,l);if(t){const c=t(AP(u));this.hasMutatedConstraints=!!c,c&&(u=Fx(c))}return u}startAnimation(e){const{drag:t,dragMomentum:s,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=si(p=>{if(!vu(p,t,this.currentDirection))return;let g=d&&d[p]||{};u&&(g={min:0,max:0});const v=o?200:1e6,S=o?40:1e7,E={type:"inertia",velocity:s?e[p]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(p,E)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const s=this.getAxisMotionValue(e);return Yd(this.visualElement,e),s.start(Uh(e,s,0,t,this.visualElement,!1))}stopAnimation(){si(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){si(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,s=this.visualElement.getProps(),o=s[t];return o||this.visualElement.getValue(e,(s.initial?s.initial[e]:void 0)||0)}snapToCursor(e){si(t=>{const{drag:s}=this.getProps();if(!vu(t,s,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-Bt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:s}=this.visualElement;if(!uo(t)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};si(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=EL({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),si(u=>{if(!vu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Bt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;AL.set(this.visualElement,this);const e=this.visualElement.current,t=_a(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),s=()=>{const{dragConstraints:d}=this.getProps();uo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",s);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ft.read(s);const u=Ra(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(si(p=>{const g=this.getAxisMotionValue(p);g&&(this.originPoint[p]+=d[p].translate,g.set(g.get()+d[p].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=$d,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:s,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function vu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function RL(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class bL extends Br{constructor(e){super(e),this.removeGroupControls=ci,this.removeListeners=ci,this.controls=new CL(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ci}unmount(){this.removeGroupControls(),this.removeListeners()}}const w0=n=>(e,t)=>{n&&Ft.postRender(()=>n(e,t))};class PL extends Br{constructor(){super(...arguments),this.removePointerDownListener=ci}onPointerDown(e){this.session=new Qx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:w0(e),onStart:w0(t),onMove:s,onEnd:(l,u)=>{delete this.session,o&&Ft.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=_a(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Eu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function A0(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ha={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Qe.test(n))n=parseFloat(n);else return n;const t=A0(n,e.target.x),s=A0(n,e.target.y);return`${t}% ${s}%`}},LL={correct:(n,{treeScale:e,projectionDelta:t})=>{const s=n,o=kr.parse(n);if(o.length>5)return s;const l=kr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Bt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};let md=!1;class DL extends Ae.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:s,layoutId:o}=this.props,{projection:l}=e;eP(NL),l&&(t.group&&t.group.add(l),s&&s.register&&o&&s.register(l),md&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Eu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:s,drag:o,isPresent:l}=this.props,{projection:u}=s;return u&&(u.isPresent=l,md=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Ft.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Th.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:s}=this.props,{projection:o}=e;md=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function ey(n){const[e,t]=Yb(),s=Ae.useContext(D_);return W.jsx(DL,{...n,layoutGroup:s,switchLayoutGroup:Ae.useContext(Ux),isPresent:e,safeToRemove:t})}const NL={borderRadius:{...ha,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ha,borderTopRightRadius:ha,borderBottomLeftRadius:ha,borderBottomRightRadius:ha,boxShadow:LL};function UL(n,e,t){const s=En(n)?n:So(n);return s.start(Uh("",s,e,t)),s.animation}const IL=(n,e)=>n.depth-e.depth;class FL{constructor(){this.children=[],this.isDirty=!1}add(e){sh(this.children,e),this.isDirty=!0}remove(e){oh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(IL),this.isDirty=!1,this.children.forEach(e)}}function OL(n,e){const t=zn.now(),s=({timestamp:o})=>{const l=o-t;l>=e&&(Or(s),n(l-e))};return Ft.setup(s,!0),()=>Or(s)}const ty=["TopLeft","TopRight","BottomLeft","BottomRight"],kL=ty.length,C0=n=>typeof n=="string"?parseFloat(n):n,R0=n=>typeof n=="number"||Qe.test(n);function BL(n,e,t,s,o,l){o?(n.opacity=Bt(0,t.opacity??1,zL(s)),n.opacityExit=Bt(e.opacity??1,0,VL(s))):l&&(n.opacity=Bt(e.opacity??1,t.opacity??1,s));for(let u=0;u<kL;u++){const c=`border${ty[u]}Radius`;let d=b0(e,c),h=b0(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||R0(d)===R0(h)?(n[c]=Math.max(Bt(C0(d),C0(h),s),0),(Di.test(h)||Di.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Bt(e.rotate||0,t.rotate||0,s))}function b0(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const zL=ny(0,.5,G_),VL=ny(.5,.95,ci);function ny(n,e,t){return s=>s<n?0:s>e?1:t(Ea(n,e,s))}function P0(n,e){n.min=e.min,n.max=e.max}function ri(n,e){P0(n.x,e.x),P0(n.y,e.y)}function L0(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function D0(n,e,t,s,o){return n-=e,n=Uu(n,1/t,s),o!==void 0&&(n=Uu(n,1/o,s)),n}function HL(n,e=0,t=1,s=.5,o,l=n,u=n){if(Di.test(e)&&(e=parseFloat(e),e=Bt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Bt(l.min,l.max,s);n===l&&(c-=e),n.min=D0(n.min,e,t,c,o),n.max=D0(n.max,e,t,c,o)}function N0(n,e,[t,s,o],l,u){HL(n,e[t],e[s],e[o],e.scale,l,u)}const GL=["x","scaleX","originX"],WL=["y","scaleY","originY"];function U0(n,e,t,s){N0(n.x,e,GL,t?t.x:void 0,s?s.x:void 0),N0(n.y,e,WL,t?t.y:void 0,s?s.y:void 0)}function I0(n){return n.translate===0&&n.scale===1}function iy(n){return I0(n.x)&&I0(n.y)}function F0(n,e){return n.min===e.min&&n.max===e.max}function jL(n,e){return F0(n.x,e.x)&&F0(n.y,e.y)}function O0(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function ry(n,e){return O0(n.x,e.x)&&O0(n.y,e.y)}function k0(n){return bn(n.x)/bn(n.y)}function B0(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class XL{constructor(){this.members=[]}add(e){sh(this.members,e),e.scheduleRender()}remove(e){if(oh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let s;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){s=l;break}}return s?(this.promote(s),!0):!1}promote(e,t){const s=this.lead;if(e!==s&&(this.prevLead=s,this.lead=e,e.show(),s)){s.instance&&s.scheduleRender(),e.scheduleRender(),e.resumeFrom=s,t&&(e.resumeFrom.preserveOpacity=!0),s.snapshot&&(e.snapshot=s.snapshot,e.snapshot.latestValues=s.animationValues||s.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:s}=e;t.onExitComplete&&t.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function YL(n,e,t){let s="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=t?.z||0;if((o||l||u)&&(s=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(s+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:g,rotateY:v,skewX:S,skewY:E}=t;h&&(s=`perspective(${h}px) ${s}`),p&&(s+=`rotate(${p}deg) `),g&&(s+=`rotateX(${g}deg) `),v&&(s+=`rotateY(${v}deg) `),S&&(s+=`skewX(${S}deg) `),E&&(s+=`skewY(${E}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(s+=`scale(${c}, ${d})`),s||"none"}const gd=["","X","Y","Z"],qL=1e3;let $L=0;function vd(n,e,t,s){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),s&&(s[n]=0))}function sy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Wx(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ft,!(o||l))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&sy(s)}function oy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},c=e?.()){this.id=$L++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(QL),this.nodes.forEach(n2),this.nodes.forEach(i2),this.nodes.forEach(JL)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new FL)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new uh),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Sx(u)&&!Wb(u),this.instance=u;const{layoutId:c,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||c)&&(this.isLayoutDirty=!0),n){let p,g=0;const v=()=>this.root.updateBlockedByResize=!1;Ft.read(()=>{g=window.innerWidth}),n(u,()=>{const S=window.innerWidth;S!==g&&(g=S,this.root.updateBlockedByResize=!0,p&&p(),p=OL(v,250),Eu.hasAnimatedSinceResize&&(Eu.hasAnimatedSinceResize=!1,this.nodes.forEach(H0)))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&h&&(c||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:v,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||h.getDefaultTransition()||l2,{onLayoutAnimationStart:T,onLayoutAnimationComplete:y}=h.getProps(),x=!this.targetLayout||!ry(this.targetLayout,S),b=!g&&v;if(this.options.layoutRoot||this.resumeFrom||b||g&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const w={...Mh(E,"layout"),onPlay:T,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w),this.setAnimationOrigin(p,b)}else g||H0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Or(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(r2),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(z0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(V0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(t2),this.nodes.forEach(KL),this.nodes.forEach(ZL)):this.nodes.forEach(V0),this.clearAllSnapshots();const c=zn.now();cn.delta=er(0,1e3/60,c-cn.timestamp),cn.timestamp=c,cn.isProcessing=!0,sd.update.process(cn),sd.preRender.process(cn),sd.render.process(cn),cn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Th.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(e2),this.sharedNodes.forEach(s2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ft.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ft.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!bn(this.snapshot.measuredBox.x)&&!bn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Xt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c&&this.instance){const d=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!iy(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;u&&this.instance&&(c||ls(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),u2(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return Xt();const c=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(c2))){const{scroll:h}=this.root;h&&(co(c.x,h.offset.x),co(c.y,h.offset.y))}return c}removeElementScroll(u){const c=Xt();if(ri(c,u),this.scroll?.wasRoot)return c;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:p,options:g}=h;h!==this.root&&p&&g.layoutScroll&&(p.wasRoot&&ri(c,u),co(c.x,p.offset.x),co(c.y,p.offset.y))}return c}applyTransform(u,c=!1){const d=Xt();ri(d,u);for(let h=0;h<this.path.length;h++){const p=this.path[h];!c&&p.options.layoutScroll&&p.scroll&&p!==p.root&&fo(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),ls(p.latestValues)&&fo(d,p.latestValues)}return ls(this.latestValues)&&fo(d,this.latestValues),d}removeTransform(u){const c=Xt();ri(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!ls(h.latestValues))continue;Gd(h.latestValues)&&h.updateSnapshot();const p=Xt(),g=h.measurePageBox();ri(p,g),U0(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return ls(this.latestValues)&&U0(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==cn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:g}=this.options;if(!(!this.layout||!(p||g))){if(this.resolvedRelativeTargetAt=cn.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xt(),this.relativeTargetOrigin=Xt(),ya(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),ri(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Xt(),this.targetWithTransforms=Xt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gL(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ri(this.target,this.layout.layoutBox),kx(this.target,this.targetDelta)):ri(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xt(),this.relativeTargetOrigin=Xt(),ya(this.relativeTargetOrigin,this.target,v.target),ri(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Gd(this.parent.latestValues)||Ox(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const u=this.getLead(),c=!!this.resumingFrom||this!==u;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===cn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;ri(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,v=this.treeScale.y;RP(this.layoutCorrected,this.treeScale,this.path,c),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Xt());const{target:S}=u;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(L0(this.prevProjectionDelta.x,this.projectionDelta.x),L0(this.prevProjectionDelta.y,this.projectionDelta.y)),xa(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==v||!B0(this.projectionDelta.x,this.prevProjectionDelta.x)||!B0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ho(),this.projectionDelta=ho(),this.projectionDeltaWithTransform=ho()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},g=ho();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=Xt(),S=d?d.source:void 0,E=this.layout?this.layout.source:void 0,T=S!==E,y=this.getStack(),x=!y||y.members.length<=1,b=!!(T&&!x&&this.options.crossfade===!0&&!this.path.some(a2));this.animationProgress=0;let w;this.mixTargetDelta=L=>{const O=L/1e3;G0(g.x,u.x,O),G0(g.y,u.y,O),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ya(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),o2(this.relativeTarget,this.relativeTargetOrigin,v,O),w&&jL(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=Xt()),ri(w,this.relativeTarget)),T&&(this.animationValues=p,BL(p,h,this.latestValues,O,b,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Or(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ft.update(()=>{Eu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=So(0)),this.currentAnimation=UL(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(qL),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:p}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&ay(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Xt();const g=bn(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=bn(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}ri(c,d),fo(c,p),xa(this.projectionDeltaWithTransform,this.layoutCorrected,c,p)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new XL),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&vd("z",u,h,this.animationValues);for(let p=0;p<gd.length;p++)vd(`rotate${gd[p]}`,u,h,this.animationValues),vd(`skew${gd[p]}`,u,h,this.animationValues);u.render();for(const p in h)u.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);u.scheduleRender()}applyProjectionStyles(u,c){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Mu(c?.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Mu(c?.pointerEvents)||""),this.hasProjected&&!ls(this.latestValues)&&(u.transform=d?d({},""):"none",this.hasProjected=!1);return}u.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let g=YL(this.projectionDeltaWithTransform,this.treeScale,p);d&&(g=d(p,g)),u.transform=g;const{x:v,y:S}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${S.origin*100}% 0`,h.animationValues?u.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const E in Ca){if(p[E]===void 0)continue;const{correct:T,applyTo:y,isCSSVariable:x}=Ca[E],b=g==="none"?p[E]:T(p[E],h);if(y){const w=y.length;for(let L=0;L<w;L++)u[y[L]]=b}else x?this.options.visualElement.renderState.vars[E]=b:u[E]=b}this.options.layoutId&&(u.pointerEvents=h===this?Mu(c?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(z0),this.root.sharedNodes.clear()}}}function KL(n){n.updateLayout()}function ZL(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:s}=n.layout,{animationType:o}=n.options,l=e.source!==n.layout.source;o==="size"?si(p=>{const g=l?e.measuredBox[p]:e.layoutBox[p],v=bn(g);g.min=t[p].min,g.max=g.min+v}):ay(o,e.layoutBox,t)&&si(p=>{const g=l?e.measuredBox[p]:e.layoutBox[p],v=bn(t[p]);g.max=g.min+v,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[p].max=n.relativeTarget[p].min+v)});const u=ho();xa(u,t,e.layoutBox);const c=ho();l?xa(c,n.applyTransform(s,!0),e.measuredBox):xa(c,t,e.layoutBox);const d=!iy(u);let h=!1;if(!n.resumeFrom){const p=n.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:g,layout:v}=p;if(g&&v){const S=Xt();ya(S,e.layoutBox,g.layoutBox);const E=Xt();ya(E,t,v.layoutBox),ry(S,E)||(h=!0),p.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=S,n.relativeParent=p)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function QL(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function JL(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function e2(n){n.clearSnapshot()}function z0(n){n.clearMeasurements()}function V0(n){n.isLayoutDirty=!1}function t2(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function H0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function n2(n){n.resolveTargetDelta()}function i2(n){n.calcProjection()}function r2(n){n.resetSkewAndRotation()}function s2(n){n.removeLeadSnapshot()}function G0(n,e,t){n.translate=Bt(e.translate,0,t),n.scale=Bt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function W0(n,e,t,s){n.min=Bt(e.min,t.min,s),n.max=Bt(e.max,t.max,s)}function o2(n,e,t,s){W0(n.x,e.x,t.x,s),W0(n.y,e.y,t.y,s)}function a2(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const l2={duration:.45,ease:[.4,0,.1,1]},j0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),X0=j0("applewebkit/")&&!j0("chrome/")?Math.round:ci;function Y0(n){n.min=X0(n.min),n.max=X0(n.max)}function u2(n){Y0(n.x),Y0(n.y)}function ay(n,e,t){return n==="position"||n==="preserve-aspect"&&!mL(k0(e),k0(t),.2)}function c2(n){return n!==n.root&&n.scroll?.wasRoot}const f2=oy({attachResizeListener:(n,e)=>Ra(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),_d={current:void 0},ly=oy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!_d.current){const n=new f2({});n.mount(window),n.setOptions({layoutScroll:!0}),_d.current=n}return _d.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),d2={pan:{Feature:PL},drag:{Feature:bL,ProjectionNode:ly,MeasureLayout:ey}};function q0(n,e,t){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=s[o];l&&Ft.postRender(()=>l(e,Oa(e)))}class h2 extends Br{mount(){const{current:e}=this.node;e&&(this.unmount=Bb(e,(t,s)=>(q0(this.node,s,"Start"),o=>q0(this.node,o,"End"))))}unmount(){}}class p2 extends Br{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ua(Ra(this.node.current,"focus",()=>this.onFocus()),Ra(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function $0(n,e,t){const{props:s}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=s[o];l&&Ft.postRender(()=>l(e,Oa(e)))}class m2 extends Br{mount(){const{current:e}=this.node;e&&(this.unmount=Gb(e,(t,s)=>($0(this.node,s,"Start"),(o,{success:l})=>$0(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Kd=new WeakMap,xd=new WeakMap,g2=n=>{const e=Kd.get(n.target);e&&e(n)},v2=n=>{n.forEach(g2)};function _2({root:n,...e}){const t=n||document;xd.has(t)||xd.set(t,{});const s=xd.get(t),o=JSON.stringify(e);return s[o]||(s[o]=new IntersectionObserver(v2,{root:n,...e})),s[o]}function x2(n,e,t){const s=_2(e);return Kd.set(n,t),s.observe(n),()=>{Kd.delete(n),s.unobserve(n)}}const y2={some:0,all:1};class S2 extends Br{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:s,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:y2[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),v=h?p:g;v&&v(d)};return x2(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(M2(e,t))&&this.startObserver()}unmount(){}}function M2({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const E2={inView:{Feature:S2},tap:{Feature:m2},focus:{Feature:p2},hover:{Feature:h2}},T2={layout:{ProjectionNode:ly,MeasureLayout:ey}},w2={...uL,...E2,...d2,...T2},uy=wP(w2,kP),A2=[{company:W.jsx("a",{href:"https://www.cambridgeassociates.com/",target:"_blank",rel:"noopener noreferrer",children:"Cambridge Associates"}),role:"Full Stack Software Engineer Intern & Co-op",location:"Remote / Boston, MA",period:"Jun 2024 – Dec 2024",highlights:["Built Spring Boot APIs and React features for a production portal serving 1,300+ global clients.","Shipped 10 production features and resolved 25+ issues using log analysis and root-cause debugging.","Improved frontend data flow and reliability, increasing engagement by ~20% across key workflows.","Supported AWS EC2/S3 migration efforts with focus on stability and release readiness.","Internship extended into a remote co-op role due to high-impact contributions and strong problem-solving skills."]},{company:W.jsx("a",{href:"https://www.medtronic.com/en-us/index.html",target:"_blank",rel:"noopener noreferrer",children:"Medtronic"}),role:"Backend Engineer Intern",location:"North Haven, CT",period:"May 2023 – Aug 2023",highlights:["Automated recurring database updates with Python + SQLAlchemy, cutting runtime from ~20 minutes to seconds.","Optimized batch processing and SQL workflows, generating ~$65K in annual cost savings.","Improved query performance by ~20% via SQL profiling and ORM-level tuning.","Reduced data inconsistencies by ~10% through validation and error-handling in regulated systems."]}],C2="rounded-2xl border border-neutral-700/70 bg-neutral-950/40 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.6)]",R2=()=>W.jsx("section",{className:"w-full bg-black text-neutral-100 px-4 py-24",children:W.jsx("div",{className:"max-w-6xl mx-auto px-6",children:W.jsxs("div",{className:`${C2} p-8 md:p-10`,children:[W.jsxs("div",{className:"flex items-start justify-between gap-6",children:[W.jsx("div",{children:W.jsx("h2",{className:"text-3xl md:text-4xl font-semibold tracking-tight",children:"My Experience"})}),W.jsxs("div",{className:"hidden md:flex items-center gap-2 text-neutral-300",children:[W.jsx(gM,{className:"h-5 w-5"}),W.jsx("span",{className:"text-sm",children:"Experience"})]})]}),W.jsxs("div",{className:"mt-10 relative",children:[W.jsx("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-neutral-800/80"}),W.jsx("div",{className:"space-y-10",children:A2.map((n,e)=>W.jsxs(uy.article,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.4,ease:"easeOut"},className:"relative pl-10",children:[W.jsx("div",{className:"absolute left-[9px] top-2 h-3 w-3 rounded-full bg-neutral-300 shadow-[0_0_0_4px_rgba(24,24,27,1)]"}),W.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between gap-2",children:[W.jsxs("div",{children:[W.jsx("h3",{className:"text-xl md:text-2xl font-semibold leading-tight",children:n.company}),W.jsxs("p",{className:"mt-1 text-sm md:text-base text-neutral-300",children:[n.role,n.location?W.jsxs("span",{className:"text-neutral-400",children:[" • ",n.location]}):null]})]}),W.jsx("div",{className:"text-sm text-neutral-400 md:text-right",children:n.period})]}),W.jsx("ul",{className:"mt-5 space-y-2 text-sm md:text-base text-neutral-300 leading-relaxed",children:n.highlights.map((t,s)=>W.jsx("li",{className:"ml-4 list-disc marker:text-neutral-500",children:t},s))})]},`${n.company}-${e}`))})]})]})})}),b2=[{name:"C++ Compiler",description:"Built a compiler pipeline in C++ that parses source code and generates intermediate representations using recursive descent parsing and AST construction.",tech:["C++","Parsing","Compiler Design"],github:"https://github.com/Mxxhxr/Parser_Project"},{name:"NJIT Schedule Generator",description:"Full-stack web application that generates optimized class schedules using real NJIT course data. Supports multi-day sections and semester-based schedule parsing.",tech:["React","Node.js","MySQL","Express"],github:"https://github.com/orgs/NJIT-Schedule-Suggestor/repositories"}],P2="rounded-2xl border border-neutral-700/70 bg-neutral-950/40 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.6)]",L2=()=>W.jsx("section",{className:"w-full bg-black text-neutral-100 px-4 py-24",children:W.jsx("div",{className:"max-w-6xl mx-auto px-6",children:W.jsxs("div",{className:`${P2} p-8 md:p-10`,children:[W.jsxs("div",{className:"flex items-start justify-between gap-6",children:[W.jsx("div",{children:W.jsx("h2",{className:"text-3xl md:text-4xl font-semibold tracking-tight",children:"My Projects"})}),W.jsxs("div",{className:"hidden md:flex items-center gap-2 text-neutral-300",children:[W.jsx(pg,{className:"h-5 w-5"}),W.jsx("span",{className:"text-sm",children:"Projects"})]})]}),W.jsx("div",{className:"mt-10 grid md:grid-cols-2 gap-8",children:b2.map(n=>W.jsxs(uy.article,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.4,ease:"easeOut"},className:"rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-600 transition",children:[W.jsxs("div",{className:"flex items-start justify-between",children:[W.jsx("h3",{className:"text-xl md:text-2xl font-semibold",children:n.name}),W.jsx("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition",children:W.jsx(pg,{size:18})})]}),W.jsx("p",{className:"mt-4 text-sm md:text-base text-neutral-300 leading-relaxed",children:n.description}),W.jsx("div",{className:"mt-5 flex flex-wrap gap-2 py-10",children:n.tech.map(e=>W.jsx("span",{className:"text-xs px-2 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700",children:e},e))})]},n.name))})]})})});class ka{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const D2=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},dn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:D2()},Ih=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},N2=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=Ih(n);dn.publicKey=t.publicKey,dn.blockHeadless=t.blockHeadless,dn.storageProvider=t.storageProvider,dn.blockList=t.blockList,dn.limitRate=t.limitRate,dn.origin=t.origin||e},cy=async(n,e,t={})=>{const s=await fetch(dn.origin+n,{method:"POST",headers:t,body:e}),o=await s.text(),l=new ka(s.status,o);if(s.ok)return l;throw l},fy=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},U2=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},dy=n=>n.webdriver||!n.languages||n.languages.length===0,hy=()=>new ka(451,"Unavailable For Headless Browser"),I2=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},F2=n=>!n.list?.length||!n.watchVariable,O2=(n,e)=>n instanceof FormData?n.get(e):n[e],py=(n,e)=>{if(F2(n))return!1;I2(n.list,n.watchVariable);const t=O2(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},my=()=>new ka(403,"Forbidden"),k2=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},B2=async(n,e,t)=>{const s=Number(await t.get(n)||0);return e-Date.now()+s},gy=async(n,e,t)=>{if(!e.throttle||!t)return!1;k2(e.throttle,e.id);const s=e.id||n;return await B2(s,e.throttle,t)>0?!0:(await t.set(s,Date.now().toString()),!1)},vy=()=>new ka(429,"Too Many Requests"),z2=async(n,e,t,s)=>{const o=Ih(s),l=o.publicKey||dn.publicKey,u=o.blockHeadless||dn.blockHeadless,c=o.storageProvider||dn.storageProvider,d={...dn.blockList,...o.blockList},h={...dn.limitRate,...o.limitRate};return u&&dy(navigator)?Promise.reject(hy()):(fy(l,n,e),U2(t),t&&py(d,t)?Promise.reject(my()):await gy(location.pathname,h,c)?Promise.reject(vy()):cy("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:l,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},V2=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},H2=n=>typeof n=="string"?document.querySelector(n):n,G2=async(n,e,t,s)=>{const o=Ih(s),l=o.publicKey||dn.publicKey,u=o.blockHeadless||dn.blockHeadless,c=dn.storageProvider||o.storageProvider,d={...dn.blockList,...o.blockList},h={...dn.limitRate,...o.limitRate};if(u&&dy(navigator))return Promise.reject(hy());const p=H2(t);fy(l,n,e),V2(p);const g=new FormData(p);return py(d,g)?Promise.reject(my()):await gy(location.pathname,h,c)?Promise.reject(vy()):(g.append("lib_version","4.4.1"),g.append("service_id",n),g.append("template_id",e),g.append("user_id",l),cy("/api/v1.0/email/send-form",g))},W2={init:N2,send:z2,sendForm:G2,EmailJSResponseStatus:ka},j2=()=>{const[n,e]=Ae.useState(""),[t,s]=Ae.useState(""),[o,l]=Ae.useState(""),[u,c]=Ae.useState(!1),d=()=>{if(!n||!t||!o){alert("Please fill out all fields!");return}c(!0);const h={from_name:n,from_email:t,message:o};W2.send("service_n45ri8e","template_m1c7aj1",h,"70rVQ9E1jewZ1-zZf").then(p=>{alert("Message sent successfully!"),e(""),s(""),l(""),c(!1)},p=>{console.error("Email send error:",p),alert("Failed to send message. Try again later."),c(!1)})};return W.jsx("section",{className:"w-full bg-black text-white px-4 py-24 flex justify-center",children:W.jsxs("div",{className:"w-full max-w-xl rounded-2xl border border-neutral-700 bg-neutral-950/40 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]",children:[W.jsx("h2",{className:"text-3xl md:text-4xl font-semibold text-center",children:"Contact Me"}),W.jsx("p",{className:"text-neutral-400 text-center mt-3 mb-8",children:"Have an opportunity or just want to connect? Send me a message."}),W.jsx("input",{type:"text",placeholder:"Your Name",value:n,onChange:h=>e(h.target.value),className:"w-full mb-4 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-neutral-500"}),W.jsx("input",{type:"email",placeholder:"Your Email",value:t,onChange:h=>s(h.target.value),className:"w-full mb-4 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-neutral-500"}),W.jsx("textarea",{placeholder:"Your Message",rows:5,value:o,onChange:h=>l(h.target.value),className:"w-full mb-6 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-neutral-500 resize-none"}),W.jsx("button",{onClick:d,disabled:u,className:`w-full py-3 rounded-xl bg-white text-black hover:bg-neutral-200 transition font-medium ${u?"opacity-50 cursor-not-allowed":""}`,children:u?"Sending...":"Send Message"})]})})};function X2(){return W.jsxs("div",{className:"bg-black text-white",children:[W.jsx(uM,{className:"mt-2"}),W.jsx(TM,{}),W.jsx("div",{style:{height:"var(--nav-h)"}}),W.jsxs("main",{className:"mx-auto px-6",children:[W.jsx("section",{id:"home",className:"h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center",children:W.jsx(zC,{text:"Hey!",enableWaves:!0,asciiFontSize:11,textFontSize:65})}),W.jsx("section",{id:"about",className:"h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center",children:W.jsx(YC,{})}),W.jsx("section",{id:"experience",className:"h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center",children:W.jsx(R2,{})}),W.jsx("section",{id:"projects",className:"scroll-mt-[var(--nav-h)] flex items-center justify-center",children:W.jsx(L2,{})}),W.jsx("section",{id:"contact",className:"h-[calc(100vh-var(--nav-h))] scroll-mt-[var(--nav-h)] flex items-center justify-center",children:W.jsx(j2,{})})]})]})}aM.createRoot(document.getElementById("root")).render(W.jsx(Ae.StrictMode,{children:W.jsx(X2,{})}));
