import{r as l,a as F}from"./react-951c301a.js";import"./react-dom-9298c3d0.js";var Xe=Object.defineProperty,Ye=(e,t,n)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t,n)=>(Ye(e,typeof t!="symbol"?t+"":t,n),n);let ze=class{constructor(){pe(this,"current",this.detect()),pe(this,"handoffState","pending"),pe(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},z=new ze,_=(e,t)=>{z.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function M(e){let t=l.useRef(e);return _(()=>{t.current=e},[e]),t}function Je(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ee(){let e=[],t={addEventListener(n,r,u,a){return n.addEventListener(r,u,a),t.add(()=>n.removeEventListener(r,u,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Je(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,u){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:u}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=ee();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let u of e.splice(r,1))u()}},dispose(){for(let n of e.splice(0))n()}};return t}function Me(){let[e]=l.useState(ee);return l.useEffect(()=>()=>e.dispose(),[e]),e}let T=function(e){let t=M(e);return F.useCallback((...n)=>t.current(...n),[t])};function Se(){let[e,t]=l.useState(z.isHandoffComplete);return e&&z.isHandoffComplete===!1&&t(!1),l.useEffect(()=>{e!==!0&&t(!0)},[e]),l.useEffect(()=>z.handoff(),[]),e}var Le;let Q=(Le=F.useId)!=null?Le:function(){let e=Se(),[t,n]=F.useState(e?()=>z.nextId():null);return _(()=>{t===null&&n(z.nextId())},[t]),t!=null?""+t:void 0};function C(e,t,...n){if(e in t){let u=t[e];return typeof u=="function"?u(...n):u}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(u=>`"${u}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}function we(e){return z.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ge=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var j=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(j||{}),ne=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ne||{}),Qe=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Qe||{});function oe(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ge)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Fe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Fe||{});function De(e,t=0){var n;return e===((n=we(e))==null?void 0:n.body)?!1:C(t,{[0](){return e.matches(ge)},[1](){let r=e;for(;r!==null;){if(r.matches(ge))return!0;r=r.parentElement}return!1}})}var Ze=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ze||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let et=["textarea","input"].join(",");function tt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,et))!=null?n:!1}function nt(e,t=n=>n){return e.slice().sort((n,r)=>{let u=t(n),a=t(r);if(u===null||a===null)return 0;let o=u.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Y(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?nt(e):e:oe(e);u.length>0&&o.length>1&&(o=o.filter(E=>!u.includes(E))),r=r??a.activeElement;let c=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},f=0,p=o.length,v;do{if(f>=p||f+p<=0)return 0;let E=i+f;if(t&16)E=(E+p)%p;else{if(E<0)return 3;if(E>=p)return 1}v=o[E],v==null||v.focus(d),f+=c}while(v!==a.activeElement);return t&6&&tt(v)&&v.select(),2}function ve(e,t,n){let r=M(t);l.useEffect(()=>{function u(a){r.current(a)}return document.addEventListener(e,u,n),()=>document.removeEventListener(e,u,n)},[e,n])}function rt(e,t,n=!0){let r=l.useRef(!1);l.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function u(o,c){if(!r.current||o.defaultPrevented)return;let i=function f(p){return typeof p=="function"?f(p()):Array.isArray(p)||p instanceof Set?p:[p]}(e),d=c(o);if(d!==null&&d.getRootNode().contains(d)){for(let f of i){if(f===null)continue;let p=f instanceof HTMLElement?f:f.current;if(p!=null&&p.contains(d)||o.composed&&o.composedPath().includes(p))return}return!De(d,Fe.Loose)&&d.tabIndex!==-1&&o.preventDefault(),t(o,d)}}let a=l.useRef(null);ve("mousedown",o=>{var c,i;r.current&&(a.current=((i=(c=o.composedPath)==null?void 0:c.call(o))==null?void 0:i[0])||o.target)},!0),ve("click",o=>{a.current&&(u(o,()=>a.current),a.current=null)},!0),ve("blur",o=>u(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Re(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ot(e,t){let[n,r]=l.useState(()=>Re(e));return _(()=>{r(Re(e))},[e.type,e.as]),_(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let je=Symbol();function lt(e,t=!0){return Object.assign(e,{[je]:t})}function V(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=T(r=>{for(let u of t.current)u!=null&&(typeof u=="function"?u(r):u.current=r)});return e.every(r=>r==null||(r==null?void 0:r[je]))?void 0:n}function Ee(...e){return e.filter(Boolean).join(" ")}var Z=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Z||{}),B=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(B||{});function W({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:a=!0,name:o}){let c=Be(t,e);if(a)return te(c,n,r,o);let i=u??0;if(i&2){let{static:d=!1,...f}=c;if(d)return te(f,n,r,o)}if(i&1){let{unmount:d=!0,...f}=c;return C(d?0:1,{[0](){return null},[1](){return te({...f,hidden:!0,style:{display:"none"}},n,r,o)}})}return te(c,n,r,o)}function te(e,t={},n,r){let{as:u=n,children:a,refName:o="ref",...c}=me(e,["unmount","static"]),i=e.ref!==void 0?{[o]:e.ref}:{},d=typeof a=="function"?a(t):a;"className"in c&&c.className&&typeof c.className=="function"&&(c.className=c.className(t));let f={};if(t){let p=!1,v=[];for(let[E,s]of Object.entries(t))typeof s=="boolean"&&(p=!0),s===!0&&v.push(E);p&&(f["data-headlessui-state"]=v.join(" "))}if(u===l.Fragment&&Object.keys(ke(c)).length>0){if(!l.isValidElement(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map(s=>`  - ${s}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(s=>`  - ${s}`).join(`
`)].join(`
`));let p=d.props,v=typeof(p==null?void 0:p.className)=="function"?(...s)=>Ee(p==null?void 0:p.className(...s),c.className):Ee(p==null?void 0:p.className,c.className),E=v?{className:v}:{};return l.cloneElement(d,Object.assign({},Be(d.props,ke(me(c,["ref"]))),f,i,ut(d.ref,i.ref),E))}return l.createElement(u,Object.assign({},me(c,["ref"]),u!==l.Fragment&&i,u!==l.Fragment&&f),d)}function ut(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function Be(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let u in r)u.startsWith("on")&&typeof r[u]=="function"?(n[u]!=null||(n[u]=[]),n[u].push(r[u])):t[u]=r[u];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](u,...a){let o=n[r];for(let c of o){if((u instanceof Event||(u==null?void 0:u.nativeEvent)instanceof Event)&&u.defaultPrevented)return;c(u,...a)}}});return t}function G(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ke(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function me(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function He(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&at(n)?!1:r}function at(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let it="div";var re=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(re||{});function st(e,t){let{features:n=1,...r}=e,u={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return W({ourProps:u,theirProps:r,slot:{},defaultTag:it,name:"Hidden"})}let ye=G(st),Te=l.createContext(null);Te.displayName="OpenClosedContext";var N=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(N||{});function le(){return l.useContext(Te)}function Ge({value:e,children:t}){return F.createElement(Te.Provider,{value:e},t)}var q=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(q||{});function ct(e,t,n){let r=M(t);l.useEffect(()=>{function u(a){r.current(a)}return window.addEventListener(e,u,n),()=>window.removeEventListener(e,u,n)},[e,n])}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Ue(){let e=l.useRef(0);return ct("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function $e(){let e=l.useRef(!1);return _(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function xe(...e){return l.useMemo(()=>we(...e),[...e])}function dt(e,t,n,r){let u=M(n);l.useEffect(()=>{e=e??window;function a(o){u.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}var ft=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ft||{}),pt=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(pt||{});let vt={[0]:e=>({...e,popoverState:C(e.popoverState,{[0]:1,[1]:0})}),[1](e){return e.popoverState===1?e:{...e,popoverState:1}},[2](e,t){return e.button===t.button?e:{...e,button:t.button}},[3](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[4](e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},[5](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},Oe=l.createContext(null);Oe.displayName="PopoverContext";function ue(e){let t=l.useContext(Oe);if(t===null){let n=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ue),n}return t}let Ce=l.createContext(null);Ce.displayName="PopoverAPIContext";function Ne(e){let t=l.useContext(Ce);if(t===null){let n=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ne),n}return t}let Ie=l.createContext(null);Ie.displayName="PopoverGroupContext";function Ke(){return l.useContext(Ie)}let ae=l.createContext(null);ae.displayName="PopoverPanelContext";function mt(){return l.useContext(ae)}function ht(e,t){return C(t.type,vt,e,t)}let bt="div";function gt(e,t){var n;let r=l.useRef(null),u=V(t,lt(m=>{r.current=m})),a=l.useRef([]),o=l.useReducer(ht,{popoverState:1,buttons:a,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:l.createRef(),afterPanelSentinel:l.createRef()}),[{popoverState:c,button:i,buttonId:d,panel:f,panelId:p,beforePanelSentinel:v,afterPanelSentinel:E},s]=o,h=xe((n=r.current)!=null?n:i),g=l.useMemo(()=>{if(!i||!f)return!1;for(let D of document.querySelectorAll("body > *"))if(Number(D==null?void 0:D.contains(i))^Number(D==null?void 0:D.contains(f)))return!0;let m=oe(),y=m.indexOf(i),k=(y+m.length-1)%m.length,L=(y+1)%m.length,J=m[k],de=m[L];return!f.contains(J)&&!f.contains(de)},[i,f]),S=M(d),$=M(p),A=l.useMemo(()=>({buttonId:S,panelId:$,close:()=>s({type:1})}),[S,$,s]),x=Ke(),R=x==null?void 0:x.registerPopover,U=T(()=>{var m;return(m=x==null?void 0:x.isFocusWithinPopoverGroup())!=null?m:(h==null?void 0:h.activeElement)&&((i==null?void 0:i.contains(h.activeElement))||(f==null?void 0:f.contains(h.activeElement)))});l.useEffect(()=>R==null?void 0:R(A),[R,A]),dt(h==null?void 0:h.defaultView,"focus",m=>{var y,k,L,J;c===0&&(U()||i&&f&&m.target!==window&&((k=(y=v.current)==null?void 0:y.contains)!=null&&k.call(y,m.target)||(J=(L=E.current)==null?void 0:L.contains)!=null&&J.call(L,m.target)||s({type:1})))},!0),rt([i,f],(m,y)=>{s({type:1}),De(y,Fe.Loose)||(m.preventDefault(),i==null||i.focus())},c===0);let P=T(m=>{s({type:1});let y=(()=>m?m instanceof HTMLElement?m:"current"in m&&m.current instanceof HTMLElement?m.current:i:i)();y==null||y.focus()}),O=l.useMemo(()=>({close:P,isPortalled:g}),[P,g]),w=l.useMemo(()=>({open:c===0,close:P}),[c,P]),I=e,b={ref:u};return F.createElement(ae.Provider,{value:null},F.createElement(Oe.Provider,{value:o},F.createElement(Ce.Provider,{value:O},F.createElement(Ge,{value:C(c,{[0]:N.Open,[1]:N.Closed})},W({ourProps:b,theirProps:I,slot:w,defaultTag:bt,name:"Popover"})))))}let Et="button";function yt(e,t){let n=Q(),{id:r=`headlessui-popover-button-${n}`,...u}=e,[a,o]=ue("Popover.Button"),{isPortalled:c}=Ne("Popover.Button"),i=l.useRef(null),d=`headlessui-focus-sentinel-${Q()}`,f=Ke(),p=f==null?void 0:f.closeOthers,v=mt()!==null;l.useEffect(()=>{if(!v)return o({type:3,buttonId:r}),()=>{o({type:3,buttonId:null})}},[v,r,o]);let[E]=l.useState(()=>Symbol()),s=V(i,t,v?null:b=>{if(b)a.buttons.current.push(E);else{let m=a.buttons.current.indexOf(E);m!==-1&&a.buttons.current.splice(m,1)}a.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),b&&o({type:2,button:b})}),h=V(i,t),g=xe(i),S=T(b=>{var m,y,k;if(v){if(a.popoverState===1)return;switch(b.key){case q.Space:case q.Enter:b.preventDefault(),(y=(m=b.target).click)==null||y.call(m),o({type:1}),(k=a.button)==null||k.focus();break}}else switch(b.key){case q.Space:case q.Enter:b.preventDefault(),b.stopPropagation(),a.popoverState===1&&(p==null||p(a.buttonId)),o({type:0});break;case q.Escape:if(a.popoverState!==0)return p==null?void 0:p(a.buttonId);if(!i.current||g!=null&&g.activeElement&&!i.current.contains(g.activeElement))return;b.preventDefault(),b.stopPropagation(),o({type:1});break}}),$=T(b=>{v||b.key===q.Space&&b.preventDefault()}),A=T(b=>{var m,y;He(b.currentTarget)||e.disabled||(v?(o({type:1}),(m=a.button)==null||m.focus()):(b.preventDefault(),b.stopPropagation(),a.popoverState===1&&(p==null||p(a.buttonId)),o({type:0}),(y=a.button)==null||y.focus()))}),x=T(b=>{b.preventDefault(),b.stopPropagation()}),R=a.popoverState===0,U=l.useMemo(()=>({open:R}),[R]),P=ot(e,i),O=v?{ref:h,type:P,onKeyDown:S,onClick:A}:{ref:s,id:a.buttonId,type:P,"aria-expanded":e.disabled?void 0:a.popoverState===0,"aria-controls":a.panel?a.panelId:void 0,onKeyDown:S,onKeyUp:$,onClick:A,onMouseDown:x},w=Ue(),I=T(()=>{let b=a.panel;if(!b)return;function m(){C(w.current,{[H.Forwards]:()=>Y(b,j.First),[H.Backwards]:()=>Y(b,j.Last)})===ne.Error&&Y(oe().filter(y=>y.dataset.headlessuiFocusGuard!=="true"),C(w.current,{[H.Forwards]:j.Next,[H.Backwards]:j.Previous}),{relativeTo:a.button})}m()});return F.createElement(F.Fragment,null,W({ourProps:O,theirProps:u,slot:U,defaultTag:Et,name:"Popover.Button"}),R&&!v&&c&&F.createElement(ye,{id:d,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:I}))}let Pt="div",St=Z.RenderStrategy|Z.Static;function wt(e,t){let n=Q(),{id:r=`headlessui-popover-overlay-${n}`,...u}=e,[{popoverState:a},o]=ue("Popover.Overlay"),c=V(t),i=le(),d=(()=>i!==null?(i&N.Open)===N.Open:a===0)(),f=T(v=>{if(He(v.currentTarget))return v.preventDefault();o({type:1})}),p=l.useMemo(()=>({open:a===0}),[a]);return W({ourProps:{ref:c,id:r,"aria-hidden":!0,onClick:f},theirProps:u,slot:p,defaultTag:Pt,features:St,visible:d,name:"Popover.Overlay"})}let Ft="div",Tt=Z.RenderStrategy|Z.Static;function $t(e,t){let n=Q(),{id:r=`headlessui-popover-panel-${n}`,focus:u=!1,...a}=e,[o,c]=ue("Popover.Panel"),{close:i,isPortalled:d}=Ne("Popover.Panel"),f=`headlessui-focus-sentinel-before-${Q()}`,p=`headlessui-focus-sentinel-after-${Q()}`,v=l.useRef(null),E=V(v,t,P=>{c({type:4,panel:P})}),s=xe(v);_(()=>(c({type:5,panelId:r}),()=>{c({type:5,panelId:null})}),[r,c]);let h=le(),g=(()=>h!==null?(h&N.Open)===N.Open:o.popoverState===0)(),S=T(P=>{var O;switch(P.key){case q.Escape:if(o.popoverState!==0||!v.current||s!=null&&s.activeElement&&!v.current.contains(s.activeElement))return;P.preventDefault(),P.stopPropagation(),c({type:1}),(O=o.button)==null||O.focus();break}});l.useEffect(()=>{var P;e.static||o.popoverState===1&&((P=e.unmount)==null||P)&&c({type:4,panel:null})},[o.popoverState,e.unmount,e.static,c]),l.useEffect(()=>{if(!u||o.popoverState!==0||!v.current)return;let P=s==null?void 0:s.activeElement;v.current.contains(P)||Y(v.current,j.First)},[u,v,o.popoverState]);let $=l.useMemo(()=>({open:o.popoverState===0,close:i}),[o,i]),A={ref:E,id:r,onKeyDown:S,onBlur:u&&o.popoverState===0?P=>{var O,w,I,b,m;let y=P.relatedTarget;y&&v.current&&((O=v.current)!=null&&O.contains(y)||(c({type:1}),((I=(w=o.beforePanelSentinel.current)==null?void 0:w.contains)!=null&&I.call(w,y)||(m=(b=o.afterPanelSentinel.current)==null?void 0:b.contains)!=null&&m.call(b,y))&&y.focus({preventScroll:!0})))}:void 0,tabIndex:-1},x=Ue(),R=T(()=>{let P=v.current;if(!P)return;function O(){C(x.current,{[H.Forwards]:()=>{var w;Y(P,j.First)===ne.Error&&((w=o.afterPanelSentinel.current)==null||w.focus())},[H.Backwards]:()=>{var w;(w=o.button)==null||w.focus({preventScroll:!0})}})}O()}),U=T(()=>{let P=v.current;if(!P)return;function O(){C(x.current,{[H.Forwards]:()=>{var w;if(!o.button)return;let I=oe(),b=I.indexOf(o.button),m=I.slice(0,b+1),y=[...I.slice(b+1),...m];for(let k of y.slice())if(k.dataset.headlessuiFocusGuard==="true"||(w=o.panel)!=null&&w.contains(k)){let L=y.indexOf(k);L!==-1&&y.splice(L,1)}Y(y,j.First,{sorted:!1})},[H.Backwards]:()=>{var w;Y(P,j.Previous)===ne.Error&&((w=o.button)==null||w.focus())}})}O()});return F.createElement(ae.Provider,{value:r},g&&d&&F.createElement(ye,{id:f,ref:o.beforePanelSentinel,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:R}),W({ourProps:A,theirProps:a,slot:$,defaultTag:Ft,features:Tt,visible:g,name:"Popover.Panel"}),g&&d&&F.createElement(ye,{id:p,ref:o.afterPanelSentinel,features:re.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:U}))}let xt="div";function Ot(e,t){let n=l.useRef(null),r=V(n,t),[u,a]=l.useState([]),o=T(s=>{a(h=>{let g=h.indexOf(s);if(g!==-1){let S=h.slice();return S.splice(g,1),S}return h})}),c=T(s=>(a(h=>[...h,s]),()=>o(s))),i=T(()=>{var s;let h=we(n);if(!h)return!1;let g=h.activeElement;return(s=n.current)!=null&&s.contains(g)?!0:u.some(S=>{var $,A;return(($=h.getElementById(S.buttonId.current))==null?void 0:$.contains(g))||((A=h.getElementById(S.panelId.current))==null?void 0:A.contains(g))})}),d=T(s=>{for(let h of u)h.buttonId.current!==s&&h.close()}),f=l.useMemo(()=>({registerPopover:c,unregisterPopover:o,isFocusWithinPopoverGroup:i,closeOthers:d}),[c,o,i,d]),p=l.useMemo(()=>({}),[]),v=e,E={ref:r};return F.createElement(Ie.Provider,{value:f},W({ourProps:E,theirProps:v,slot:p,defaultTag:xt,name:"Popover.Group"}))}let Ct=G(gt),Nt=G(yt),It=G(wt),Lt=G($t),Rt=G(Ot),Zt=Object.assign(Ct,{Button:Nt,Overlay:It,Panel:Lt,Group:Rt});function kt(e=0){let[t,n]=l.useState(e),r=$e(),u=l.useCallback(i=>{r.current&&n(d=>d|i)},[t,r]),a=l.useCallback(i=>!!(t&i),[t]),o=l.useCallback(i=>{r.current&&n(d=>d&~i)},[n,r]),c=l.useCallback(i=>{r.current&&n(d=>d^i)},[n]);return{flags:t,addFlag:u,hasFlag:a,removeFlag:o,toggleFlag:c}}function At(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function he(e,...t){e&&t.length>0&&e.classList.add(...t)}function be(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Mt(e,t){let n=ee();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:u}=getComputedStyle(e),[a,o]=[r,u].map(i=>{let[d=0]=i.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):parseFloat(f)*1e3).sort((f,p)=>p-f);return d}),c=a+o;if(c!==0){n.group(d=>{d.setTimeout(()=>{t(),d.dispose()},c),d.addEventListener(e,"transitionrun",f=>{f.target===f.currentTarget&&d.dispose()})});let i=n.addEventListener(e,"transitionend",d=>{d.target===d.currentTarget&&(t(),i())})}else t();return n.add(()=>t()),n.dispose}function Dt(e,t,n,r){let u=n?"enter":"leave",a=ee(),o=r!==void 0?At(r):()=>{};u==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let c=C(u,{enter:()=>t.enter,leave:()=>t.leave}),i=C(u,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),d=C(u,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return be(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),he(e,...c,...d),a.nextFrame(()=>{be(e,...d),he(e,...i),Mt(e,()=>(be(e,...c),he(e,...t.entered),o()))}),a.dispose}function jt({container:e,direction:t,classes:n,onStart:r,onStop:u}){let a=$e(),o=Me(),c=M(t);_(()=>{let i=ee();o.add(i.dispose);let d=e.current;if(d&&c.current!=="idle"&&a.current)return i.dispose(),r.current(c.current),i.add(Dt(d,n.current,c.current==="enter",()=>{i.dispose(),u.current(c.current)})),i.dispose},[t])}function X(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let ie=l.createContext(null);ie.displayName="TransitionContext";var Bt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Bt||{});function Ht(){let e=l.useContext(ie);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Gt(){let e=l.useContext(se);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let se=l.createContext(null);se.displayName="NestingContext";function ce(e){return"children"in e?ce(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function qe(e,t){let n=M(e),r=l.useRef([]),u=$e(),a=Me(),o=T((E,s=B.Hidden)=>{let h=r.current.findIndex(({el:g})=>g===E);h!==-1&&(C(s,{[B.Unmount](){r.current.splice(h,1)},[B.Hidden](){r.current[h].state="hidden"}}),a.microTask(()=>{var g;!ce(r)&&u.current&&((g=n.current)==null||g.call(n))}))}),c=T(E=>{let s=r.current.find(({el:h})=>h===E);return s?s.state!=="visible"&&(s.state="visible"):r.current.push({el:E,state:"visible"}),()=>o(E,B.Unmount)}),i=l.useRef([]),d=l.useRef(Promise.resolve()),f=l.useRef({enter:[],leave:[],idle:[]}),p=T((E,s,h)=>{i.current.splice(0),t&&(t.chains.current[s]=t.chains.current[s].filter(([g])=>g!==E)),t==null||t.chains.current[s].push([E,new Promise(g=>{i.current.push(g)})]),t==null||t.chains.current[s].push([E,new Promise(g=>{Promise.all(f.current[s].map(([S,$])=>$)).then(()=>g())})]),s==="enter"?d.current=d.current.then(()=>t==null?void 0:t.wait.current).then(()=>h(s)):h(s)}),v=T((E,s,h)=>{Promise.all(f.current[s].splice(0).map(([g,S])=>S)).then(()=>{var g;(g=i.current.shift())==null||g()}).then(()=>h(s))});return l.useMemo(()=>({children:r,register:c,unregister:o,onStart:p,onStop:v,wait:d,chains:f}),[c,o,r,p,v,f,d])}function Ut(){}let Kt=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Ae(e){var t;let n={};for(let r of Kt)n[r]=(t=e[r])!=null?t:Ut;return n}function qt(e){let t=l.useRef(Ae(e));return l.useEffect(()=>{t.current=Ae(e)},[e]),t}let _t="div",_e=Z.RenderStrategy;function Vt(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:u,afterLeave:a,enter:o,enterFrom:c,enterTo:i,entered:d,leave:f,leaveFrom:p,leaveTo:v,...E}=e,s=l.useRef(null),h=V(s,t),g=E.unmount?B.Unmount:B.Hidden,{show:S,appear:$,initial:A}=Ht(),[x,R]=l.useState(S?"visible":"hidden"),U=Gt(),{register:P,unregister:O}=U,w=l.useRef(null);l.useEffect(()=>P(s),[P,s]),l.useEffect(()=>{if(g===B.Hidden&&s.current){if(S&&x!=="visible"){R("visible");return}return C(x,{hidden:()=>O(s),visible:()=>P(s)})}},[x,s,P,O,S,g]);let I=M({enter:X(o),enterFrom:X(c),enterTo:X(i),entered:X(d),leave:X(f),leaveFrom:X(p),leaveTo:X(v)}),b=qt({beforeEnter:n,afterEnter:r,beforeLeave:u,afterLeave:a}),m=Se();l.useEffect(()=>{if(m&&x==="visible"&&s.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[s,x,m]);let y=A&&!$,k=(()=>!m||y||w.current===S?"idle":S?"enter":"leave")(),L=kt(0),J=T(K=>C(K,{enter:()=>{L.addFlag(N.Opening),b.current.beforeEnter()},leave:()=>{L.addFlag(N.Closing),b.current.beforeLeave()},idle:()=>{}})),de=T(K=>C(K,{enter:()=>{L.removeFlag(N.Opening),b.current.afterEnter()},leave:()=>{L.removeFlag(N.Closing),b.current.afterLeave()},idle:()=>{}})),D=qe(()=>{R("hidden"),O(s)},U);jt({container:s,classes:I,direction:k,onStart:M(K=>{D.onStart(s,K,J)}),onStop:M(K=>{D.onStop(s,K,de),K==="leave"&&!ce(D)&&(R("hidden"),O(s))})}),l.useEffect(()=>{y&&(g===B.Hidden?w.current=null:w.current=S)},[S,y,x]);let fe=E,We={ref:h};return $&&S&&(fe={...fe,className:Ee(E.className,...I.current.enter,...I.current.enterFrom)}),F.createElement(se.Provider,{value:D},F.createElement(Ge,{value:C(x,{visible:N.Open,hidden:N.Closed})|L.flags},W({ourProps:We,theirProps:fe,defaultTag:_t,features:_e,visible:x==="visible",name:"Transition.Child"})))}function Wt(e,t){let{show:n,appear:r=!1,unmount:u,...a}=e,o=l.useRef(null),c=V(o,t);Se();let i=le();if(n===void 0&&i!==null&&(n=(i&N.Open)===N.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,f]=l.useState(n?"visible":"hidden"),p=qe(()=>{f("hidden")}),[v,E]=l.useState(!0),s=l.useRef([n]);_(()=>{v!==!1&&s.current[s.current.length-1]!==n&&(s.current.push(n),E(!1))},[s,n]);let h=l.useMemo(()=>({show:n,appear:r,initial:v}),[n,r,v]);l.useEffect(()=>{if(n)f("visible");else if(!ce(p))f("hidden");else{let S=o.current;if(!S)return;let $=S.getBoundingClientRect();$.x===0&&$.y===0&&$.width===0&&$.height===0&&f("hidden")}},[n,p]);let g={unmount:u};return F.createElement(se.Provider,{value:p},F.createElement(ie.Provider,{value:h},W({ourProps:{...g,as:l.Fragment,children:F.createElement(Ve,{ref:c,...g,...a})},theirProps:{},defaultTag:l.Fragment,features:_e,visible:d==="visible",name:"Transition"})))}function Xt(e,t){let n=l.useContext(ie)!==null,r=le()!==null;return F.createElement(F.Fragment,null,!n&&r?F.createElement(Pe,{ref:t,...e}):F.createElement(Ve,{ref:t,...e}))}let Pe=G(Wt),Ve=G(Vt),Yt=G(Xt),en=Object.assign(Pe,{Child:Yt,Root:Pe});export{Zt as L,en as t};
