import{r as u}from"./react-951c301a.js";import{r as j}from"./react-dom-9298c3d0.js";import{g as D}from"./classnames-d6e1bab7.js";import{c as B}from"./@popperjs-f3391c26.js";import{w as q}from"./warning-2130348e.js";var A=u.createContext(),F=u.createContext();function ee(t){var e=t.children,n=u.useState(null),r=n[0],o=n[1],a=u.useRef(!1);u.useEffect(function(){return function(){a.current=!0}},[]);var p=u.useCallback(function(d){a.current||o(d)},[]);return u.createElement(A.Provider,{value:r},u.createElement(F.Provider,{value:p},e))}var I=function(e){return Array.isArray(e)?e[0]:e},N=function(e){if(typeof e=="function"){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return e.apply(void 0,r)}},R=function(e,n){if(typeof e=="function")return N(e,n);e!=null&&(e.current=n)},x=function(e){return e.reduce(function(n,r){var o=r[0],a=r[1];return n[o]=a,n},{})},U=typeof window<"u"&&window.document&&window.document.createElement?u.useLayoutEffect:u.useEffect,z=typeof Element<"u",_=typeof Map=="function",H=typeof Set=="function",T=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function w(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!w(t[r],e[r]))return!1;return!0}var a;if(_&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!w(r.value[1],e.get(r.value[0])))return!1;return!0}if(H&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(T&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(z&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!w(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var V=function(e,n){try{return w(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const L=D(V);var Y=[],W=function(e,n,r){r===void 0&&(r={});var o=u.useRef(null),a={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||Y},p=u.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),d=p[0],E=p[1],m=u.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(l){var v=l.state,h=Object.keys(v.elements);j.flushSync(function(){E({styles:x(h.map(function(i){return[i,v.styles[i]||{}]})),attributes:x(h.map(function(i){return[i,v.attributes[i]]}))})})},requires:["computeStyles"]}},[]),y=u.useMemo(function(){var s={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[m,{name:"applyStyles",enabled:!1}])};return L(o.current,s)?o.current||s:(o.current=s,s)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,m]),f=u.useRef();return U(function(){f.current&&f.current.setOptions(y)},[y]),U(function(){if(!(e==null||n==null)){var s=r.createPopper||B,l=s(e,n,y);return f.current=l,function(){l.destroy(),f.current=null}}},[e,n,r.createPopper]),{state:f.current?f.current.state:null,styles:d.styles,attributes:d.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}},G=function(){},J=function(){return Promise.resolve(null)},K=[];function te(t){var e=t.placement,n=e===void 0?"bottom":e,r=t.strategy,o=r===void 0?"absolute":r,a=t.modifiers,p=a===void 0?K:a,d=t.referenceElement,E=t.onFirstUpdate,m=t.innerRef,y=t.children,f=u.useContext(A),s=u.useState(null),l=s[0],v=s[1],h=u.useState(null),i=h[0],P=h[1];u.useEffect(function(){R(m,l)},[m,l]);var $=u.useMemo(function(){return{placement:n,strategy:o,onFirstUpdate:E,modifiers:[].concat(p,[{name:"arrow",enabled:i!=null,options:{element:i}}])}},[n,o,E,p,i]),S=W(d||f,l,$),c=S.state,O=S.styles,g=S.forceUpdate,M=S.update,C=u.useMemo(function(){return{ref:v,style:O.popper,placement:c?c.placement:n,hasPopperEscaped:c&&c.modifiersData.hide?c.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:c&&c.modifiersData.hide?c.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:O.arrow,ref:P},forceUpdate:g||G,update:M||J}},[v,P,n,c,O,M,g]);return I(y)(C)}function re(t){var e=t.children,n=t.innerRef,r=u.useContext(F),o=u.useCallback(function(a){R(n,a),N(r,a)},[n,r]);return u.useEffect(function(){return function(){return R(n,null)}},[]),u.useEffect(function(){q(!!r,"`Reference` should not be used outside of a `Manager` component.")},[r]),I(e)({ref:o})}export{ee as M,te as P,re as R};