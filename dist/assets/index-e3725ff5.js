import{j as e,r as a,a as P}from"./react-951c301a.js";import{c as $}from"./react-dom-9298c3d0.js";import{O as z,b as C,a as _,d as b,e as x,f as T}from"./react-router-e0ea48bb.js";import{u as v,a as M,P as I}from"./react-redux-43ddced7.js";import{L,B as H}from"./react-router-dom-2b5d05ea.js";import{G as S,M as V,H as Z,a as q}from"./react-icons-b6cb1c8a.js";import{r as N}from"./react-responsive-5aacdddd.js";import{t as G}from"./@headlessui-eb5c9d05.js";import"./hoist-non-react-statics-936d9ad8.js";import{c as A,a as K}from"./@reduxjs-cc175dc0.js";import{J as U}from"./date-fns-e6f8078e.js";import{F as X,a as Y}from"./formik-537a3ea5.js";import{b as k,c as y,d as W,e as Q}from"./yup-6b69d055.js";import{k as J}from"./react-toastify-1c8b6060.js";import"./classnames-d6e1bab7.js";import"./scheduler-765c72db.js";import"./@remix-run-22f4369b.js";import"./use-sync-external-store-7a2e4d44.js";import"./react-is-e8e5dbb3.js";import"./immer-d44d0d4e.js";import"./redux-75e49e16.js";import"./@babel-3ec8e017.js";import"./redux-thunk-ef899f4c.js";import"./react-fast-compare-539ed341.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./tiny-warning-c932d744.js";import"./property-expr-38205fa5.js";import"./tiny-case-d0726479.js";import"./toposort-bf96c239.js";import"./clsx-1229b3e0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const ee="modulepreload",te=function(s){return"/"+s},E={},p=function(t,n,l){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=te(i),i in E)return;E[i]=!0;const c=i.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!l)for(let m=r.length-1;m>=0;m--){const u=r[m];if(u.href===i&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${d}`))return;const o=document.createElement("link");if(o.rel=c?"stylesheet":ee,c||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),c)return new Promise((m,u)=>{o.addEventListener("load",m),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},se=()=>e.jsx("div",{className:"min-h-screen",children:e.jsx("main",{className:"max-w-[1050px] mx-auto px-4",children:e.jsx("div",{children:e.jsx(z,{})})})}),ie=({navLinks:s,pathname:t,showSidebar:n,setShowSidebar:l})=>(a.useEffect(()=>(n?document.body.style.overflow="hidden":(document.body.style.overflowX="hidden",document.body.style.overflowY="auto"),()=>{document.body.style.overflowX="hidden",document.body.style.overflowY="auto"}),[n]),e.jsx(e.Fragment,{children:e.jsxs("header",{className:"container xs:hidden py-3 flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("button",{className:"text-2xl",onClick:()=>{l(r=>!r)},children:e.jsx(S,{})})}),e.jsx("div",{children:e.jsx("button",{className:"bg-[#FDF4F4] p-2 rounded-md",children:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_6_721)",children:[e.jsx("path",{d:"M8.66694 15.7355C8.94691 15.7291 9.21558 15.6238 9.42543 15.4384C9.63528 15.2529 9.77278 14.9992 9.81361 14.7222H7.47583C7.51782 15.0068 7.66175 15.2664 7.88085 15.4528C8.09996 15.6392 8.37931 15.7397 8.66694 15.7355Z",fill:"#2B2B2B"}),e.jsx("path",{d:"M15.267 13.0023L15.1159 12.8689C14.6872 12.487 14.312 12.049 14.0004 11.5667C13.66 10.9012 13.456 10.1744 13.4004 9.42894V7.23338C13.3986 6.9667 13.3748 6.70061 13.3292 6.43783C12.5764 6.28309 11.9002 5.87295 11.415 5.27684C10.9299 4.68074 10.6656 3.93529 10.667 3.16672V2.88672C10.203 2.65836 9.70444 2.50819 9.19147 2.44227V1.88227C9.19147 1.72491 9.12896 1.574 9.01769 1.46272C8.90642 1.35145 8.7555 1.28894 8.59814 1.28894C8.44078 1.28894 8.28986 1.35145 8.17859 1.46272C8.06732 1.574 8.00481 1.72491 8.00481 1.88227V2.4645C6.85624 2.62652 5.80506 3.1986 5.04535 4.07513C4.28564 4.95166 3.86868 6.07345 3.87147 7.23338V9.42894C3.81581 10.1744 3.61182 10.9012 3.27147 11.5667C2.9652 12.0478 2.596 12.4857 2.17369 12.8689L2.02258 13.0023V14.2556H15.267V13.0023Z",fill:"#2B2B2B"}),e.jsx("path",{d:"M14.0003 5.3889C15.2276 5.3889 16.2225 4.39398 16.2225 3.16668C16.2225 1.93938 15.2276 0.944458 14.0003 0.944458C12.773 0.944458 11.7781 1.93938 11.7781 3.16668C11.7781 4.39398 12.773 5.3889 14.0003 5.3889Z",fill:"#9A0007"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_6_721",children:e.jsx("rect",{width:"16",height:"16",fill:"white",transform:"translate(0.666992 0.5)"})})})]})})})]})})),re=({user:s,navLinks:t,showSidebar:n,setShowSidebar:l,logout:r})=>{const{pathname:i}=C(),c=_(),d=N.useMediaQuery({query:"(max-width: 450px)"}),h=N.useMediaQuery({query:"(max-width: 768px)"}),o=()=>{localStorage.removeItem("access_token")};return a.useEffect(()=>{h||l(!1)},[h]),e.jsx("aside",{children:e.jsxs(G,{show:n,enter:"transition ease-in-out duration-300 transform",enterFrom:`${d?"-translate-x-full":"translate-x-full"}   opacity-0 `,enterTo:` ${d?"-translate-x-0":"translate-x-0"}   opacity-100`,leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0 opacity-100",leaveTo:` ${d?"-translate-x-full":"translate-x-full"}   opacity-0`,className:`fixed  top-0  bottom-0  max-w-md  w-full   text-white bg-[#B82C3A] ${d?"left-0":"right-0"} z-20   `,children:[e.jsxs("div",{className:"py-8 px-7",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h1",{className:"font-semibold",children:"NAGLIKER"}),e.jsx("button",{onClick:()=>{l(m=>!m)},children:e.jsx("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 17L17 1M1 1L17 17",stroke:"white",strokeWidth:1.88067,strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsxs("div",{className:"my-4 mt-7 flex justify-between items-center",children:[e.jsxs("div",{className:" flex items-center space-x-4 pb-1.5",children:[e.jsx("div",{className:"h-10 w-10  text-xl font-medium bg-white/[0.08] rounded-md flex items-center justify-center",children:s.fullName[0]}),e.jsx("h2",{className:"",children:s.fullName})]}),e.jsx("div",{children:e.jsx("svg",{width:"9",height:"14",viewBox:"0 0 9 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.9749 0.849952L8.1499 7.02495L1.9749 13.2L0.749902 11.975L5.6999 7.02495L0.749902 2.07495L1.9749 0.849952Z",fill:"white"})})})]}),e.jsx("div",{className:"h-[0.5px] w-full bg-white  my-5 "}),e.jsx("ul",{className:"",children:t.map(m=>{const{href:u,id:w,name:j,links:f}=m;return e.jsxs("li",{onClick:()=>{l(D=>!D),c(u)},className:` flex cursor-pointer justify-between items-center w-full py-3 overflow-hidden ${i===u||f!=null&&f.includes(i)||f!=null&&f.includes(`/${i.split("/")[1]}`)?"text-white font-bold":"text-white"}`,children:[e.jsx("h3",{children:j}),e.jsx("svg",{width:"9",height:"14",viewBox:"0 0 9 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.9749 0.849952L8.1499 7.02495L1.9749 13.2L0.749902 11.975L5.6999 7.02495L0.749902 2.07495L1.9749 0.849952Z",fill:"white"})})]},w)})})]}),e.jsx("div",{className:"px-8 fixed bottom-10",children:e.jsxs("button",{onClick:r,className:"flex items-center space-x-4 ",children:[e.jsx("span",{className:"h-9 w-9 bg-white rounded flex items-center justify-center",children:e.jsx(V,{className:"text-primary text-xl"})}),e.jsx("span",{onClick:o,children:"Logout"})]})})]})})},R=s=>{let t=a.useRef(null);const n=l=>{if(l.type==="mousedown"){if(t.current&&!t.current.contains(l.target))return s()}else if(l.type==="keydown"&&l.key==="Escape")return s()};return a.useEffect(()=>(document.addEventListener("mousedown",n,!1),document.addEventListener("keydown",n,!1),()=>{document.removeEventListener("mousedown",n,!1),document.removeEventListener("keydown",n,!1)}),[]),t},g=[{id:1,name:"Bookings",href:"/new-booking",links:["/new-booking"]},{id:2,name:"Patients",href:"/patients"},{id:3,name:"All Tests",href:"/all-tests"}],ne=()=>{const{pathname:s}=C();v();const t=_(),n={fullName:"Test Use"},[l,r]=a.useState(!1),[i,c]=a.useState(!1);a.useEffect(()=>(l?document.body.style.overflow="hidden":(document.body.style.overflowX="hidden",document.body.style.overflowY="auto"),()=>{document.body.style.overflowX="hidden",document.body.style.overflowY="auto"}),[l]);const d=R(()=>c(!1)),h=()=>{localStorage.removeItem("access_token"),localStorage.removeItem("access_token"),t("/")};return e.jsxs(e.Fragment,{children:[s==="/"&&e.jsx(ie,{navLinks:g,pathname:s,showSidebar:l,setShowSidebar:r}),e.jsx("header",{className:"bg-primary hidden xs:block   py-2 md:pt-5 md:py-0",children:e.jsxs("nav",{className:"container text-white font-semibold  flex justify-between items-center space-x-8 ",children:[e.jsxs("div",{className:"flex items-center space-x-16",children:[e.jsx("div",{children:e.jsx("h1",{className:" py-4",children:e.jsx(L,{to:"/",children:"NAGLIKER"})})}),e.jsx("ul",{className:" items-center hidden md:flex  lg:space-x-6 xl:space-x-8  ",children:g.map(o=>{const{href:m,id:u,name:w,links:j}=o;return e.jsx("li",{className:` relative rounded-t-2xl  px-7 py-4 overflow-hidden ${s===m||j!=null&&j.includes(s)||j!=null&&j.includes(`/${s.split("/")[1]}`)?"bg-white text-primary":"text-white"}`,children:e.jsx(L,{to:m,children:w})},u)})})]}),e.jsxs("div",{ref:d,className:"hidden md:block relative",children:[e.jsxs("button",{onClick:()=>{c(o=>!o)},className:" flex items-center space-x-4 pb-1.5",children:[e.jsx("h2",{className:"",children:n.fullName}),e.jsx("div",{className:"h-10 w-10  text-xl font-medium bg-white/[0.08] rounded-md flex items-center justify-center uppercase",children:n.fullName[0]})]}),i&&e.jsx("div",{className:"absolute right-0 shadow-xl bottom-[-50px] ",children:e.jsx("button",{onClick:h,className:"bg-primary rounded-lg text-white p-2.5 px-10",children:"Logout"})})]}),e.jsx("div",{className:"block md:hidden",children:e.jsx("button",{className:"text-2xl",onClick:()=>{r(o=>!o)},children:e.jsx(S,{})})})]})}),l&&e.jsx("div",{onClick:()=>{r(o=>!o)},className:"fixed w-screen h-screen bg-black/30 z-10 top-0",children:" "}),e.jsx(re,{user:n,navLinks:g,showSidebar:l,setShowSidebar:r,logout:h})]})},le={modalType:null,modalProps:{}},F=A({name:"modal",initialState:le,reducers:{showModal:(s,t)=>{s.modalType=t.payload.modalType,s.modalProps=t.payload.modalProps},hideModal:s=>{s.modalType=null,s.modalProps={}}}}),{showModal:ct,hideModal:B}=F.actions,oe=F.reducer,ae="BOOKING_SUCCESS_MODAL",ce="ADD_TEST_MODAL",de=({handleClose:s,testInfoValues:t,paymentInfo:n,patientValues:l})=>{var r,i;return e.jsxs("div",{className:"min-h-screen xs:min-h-fit py-[10vh] xs:h-auto p-5 xs:py-6 bg-white sm:w-[520px] rounded-xl ",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs("svg",{width:"101",height:"101",viewBox:"0 0 101 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{opacity:"0.78",cx:"50.5234",cy:"50.0952",r:"50",fill:"#76E658",fillOpacity:"0.28"}),e.jsx("circle",{opacity:"0.78",cx:"50.5234",cy:"50.0952",r:"45",fill:"#76E658",fillOpacity:"0.28"}),e.jsxs("g",{clipPath:"url(#clip0_883_8461)",children:[e.jsx("circle",{cx:"50.5234",cy:"50.0952",r:"37",fill:"white"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.5234 50.0952C13.5234 40.2822 17.4216 30.8711 24.3605 23.9323C31.2993 16.9934 40.7104 13.0952 50.5234 13.0952C60.3364 13.0952 69.7475 16.9934 76.6864 23.9323C83.6252 30.8711 87.5234 40.2822 87.5234 50.0952C87.5234 59.9082 83.6252 69.3193 76.6864 76.2582C69.7475 83.197 60.3364 87.0952 50.5234 87.0952C40.7104 87.0952 31.2993 83.197 24.3605 76.2582C17.4216 69.3193 13.5234 59.9082 13.5234 50.0952ZM48.412 65.9312L69.7141 39.3011L65.8661 36.2227L47.7016 58.9209L34.8354 48.2008L31.6781 51.9896L48.412 65.9361V65.9312Z",fill:"#60BB47"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_883_8461",children:e.jsx("rect",{width:"74",height:"74",fill:"white",transform:"translate(13.5234 13.0952)"})})})]})}),e.jsxs("div",{className:"py-4 ",children:[e.jsx("h1",{className:"text-2xl text-center font-medium",children:"Booking is Successful"}),e.jsx("p",{className:"text-[#999999] text-center text-sm my-2",children:"Lorem Ipsum has been the industry's standard dummy text."}),e.jsxs("div",{className:"border mt-2 rounded-md border-[#F8F8F8] p-3 font-medium",children:[e.jsxs("div",{className:"flex justify-between items-center text-sm mb-3.5",children:[e.jsx("h2",{children:"Booking Date"}),e.jsx("h1",{children:U(new Date(t==null?void 0:t.pickupTime),"do MMM yyyy, h:mm aa")})]}),(r=t==null?void 0:t.tests)==null?void 0:r.map((c,d)=>{const{id:h,name:o,price:m}=c;return e.jsxs("div",{className:"flex justify-between items-center text-sm mb-4",children:[e.jsxs("h2",{children:["Test ",d+1]}),e.jsx("h1",{children:o})]},h)}),e.jsxs("div",{className:"flex justify-between items-center text-sm mb-4",children:[e.jsx("h2",{children:"Mobile Number"}),e.jsx("h1",{children:l.mobileNumber})]}),e.jsxs("div",{className:"flex justify-between items-center text-sm mb-4",children:[e.jsx("h2",{children:"Total Amount paid"}),e.jsxs("h1",{className:"text-primary font-semibold",children:["INR."," ",(i=t==null?void 0:t.tests)==null?void 0:i.reduce((c,d)=>c=c+d.Rate,-100)]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h1",{className:"font-medium pb-3",children:"Payment Method"}),n.paymentMethod==="online"?e.jsx("div",{className:"border rounded-md border-[#F8F8F8]  p-3 font-medium",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-8 h-8 rounded bg-[#E7FFE0]"}),e.jsx("h2",{children:"Online"})]})}):e.jsx("div",{className:"border rounded-md border-[#F8F8F8] mt-4 p-3 font-medium",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-8 h-8 rounded bg-[#FDF4F4] flex items-center justify-center",children:e.jsxs("svg",{width:"19",height:"12",viewBox:"0 0 19 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M9.02344 8.38818C9.62017 8.38818 10.1925 8.15113 10.6144 7.72917C11.0364 7.30722 11.2734 6.73492 11.2734 6.13818C11.2734 5.54145 11.0364 4.96915 10.6144 4.54719C10.1925 4.12524 9.62017 3.88818 9.02344 3.88818C8.4267 3.88818 7.8544 4.12524 7.43245 4.54719C7.01049 4.96915 6.77344 5.54145 6.77344 6.13818C6.77344 6.73492 7.01049 7.30722 7.43245 7.72917C7.8544 8.15113 8.4267 8.38818 9.02344 8.38818Z",fill:"#9A0007"}),e.jsx("path",{d:"M0.0234375 1.63818C0.0234375 1.33982 0.141964 1.05367 0.352942 0.842688C0.563921 0.63171 0.850069 0.513184 1.14844 0.513184H16.8984C17.1968 0.513184 17.483 0.63171 17.6939 0.842688C17.9049 1.05367 18.0234 1.33982 18.0234 1.63818V10.6382C18.0234 10.9366 17.9049 11.2227 17.6939 11.4337C17.483 11.6447 17.1968 11.7632 16.8984 11.7632H1.14844C0.850069 11.7632 0.563921 11.6447 0.352942 11.4337C0.141964 11.2227 0.0234375 10.9366 0.0234375 10.6382V1.63818ZM3.39844 1.63818C3.39844 2.23492 3.16138 2.80722 2.73943 3.22917C2.31747 3.65113 1.74517 3.88818 1.14844 3.88818V8.38818C1.74517 8.38818 2.31747 8.62524 2.73943 9.04719C3.16138 9.46915 3.39844 10.0414 3.39844 10.6382H14.6484C14.6484 10.0414 14.8855 9.46915 15.3074 9.04719C15.7294 8.62524 16.3017 8.38818 16.8984 8.38818V3.88818C16.3017 3.88818 15.7294 3.65113 15.3074 3.22917C14.8855 2.80722 14.6484 2.23492 14.6484 1.63818H3.39844Z",fill:"#9A0007"})]})}),e.jsx("h2",{children:"Cash"})]})})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{onClick:s,className:"bg-[#B82C3A] text-white py-4 rounded-[10px]  font-semibold max-w-sm  w-full",children:"Back to Home"})})]})},me={tests:[]},O=A({name:"newBooking",initialState:me,reducers:{addTest:(s,t)=>{console.log("🚀 ~ file: newBooking.js:20 ~ action:",t);const{newTest:n}=t.payload;s.tests=[...s.tests,n]},removeTest:(s,t)=>{const{testId:n}=t.payload;s.tests=s.tests.filter(l=>l.id!==n)},clearTest:(s,t)=>{s.tests=[]}}}),{addTest:xe,removeTest:he,clearTest:dt}=O.actions,ue=O.reducer,pe=({handleClose:s,testsArray:t})=>{const n={reportCategory:"",tests:""},l=k({reportCategory:y().required("Report Category Name is required"),tests:W().of(k().shape({id:y(),name:y(),shortName:y(),price:Q()})).required("Tests List is required")}),[r,i]=a.useState(""),c=v(),{tests:d}=M(o=>o.newBooking),h=N.useMediaQuery({query:"(max-width: 450px)"});return a.useEffect(()=>{h||s()},[h]),e.jsxs("div",{className:"bg-white min-h-[100dvh] py-4 px-4",children:[" ",e.jsx("div",{className:"flex justify-between xs:hidden",children:e.jsxs("div",{className:"flex space-x-3",children:[e.jsx("button",{type:"button",onClick:s,children:e.jsx(Z,{className:"text-3xl"})}),e.jsx("h1",{className:"text-2xl font-medium  ",children:"Select Test"})]})}),e.jsx(X,{initialValues:n,validationSchema:l,children:e.jsxs(Y,{className:"my-5",children:[e.jsx("div",{className:"flex-1"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[#2B2B2B] text-xs my-5",children:"Select the test to perform"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{value:r,onChange:o=>{i(o.target.value)},type:"text",className:"bg-[#F1F1F1] w-full p-3 py-3.5 rounded-md",placeholder:"Search for test"}),e.jsx(q,{className:"absolute top-3 text-3xl text-[#93989B] right-4"})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h2",{className:"text-sm mb-4",children:"Select Test"}),t.filter(o=>o.name.toLowerCase().includes(r.toLowerCase())).map(o=>{const{id:m,name:u,price:w,shortName:j}=o;return e.jsxs("div",{onClick:()=>{d.findIndex(f=>f.id===o.id)!==-1?c(he({testId:o.id})):c(xe({newTest:o}))},as:"button",className:"border relative cursor-pointer rounded-md mb-5 flex items-center justify-between border-[#F8F8F8] p-3 py-2",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-sm",children:u}),e.jsxs("p",{className:"text-xs text-[#ABABAB] py-1",children:["₹",w]})]}),e.jsx("div",{children:d&&(d==null?void 0:d.findIndex(f=>f.id===o.id))!==-1&&e.jsx("div",{className:"absolute top-5 right-5",children:e.jsxs("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_883_7878)",children:e.jsx("path",{d:"M6.94873 11.9486L10.2406 15.055L16.8244 8.39844",stroke:"#27AE60",strokeWidth:"2.88241",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("rect",{x:"1.31374",y:"1.15359",width:"21.146",height:"21.146",rx:"3.84321",stroke:"#27AE60",strokeWidth:"0.854047"}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_883_7878",children:e.jsx("rect",{x:"0.886719",y:"0.726562",width:"22",height:"22",rx:"4.27023",fill:"white"})})})]})})})]},m)})]})]}),e.jsx("div",{className:"fixed bottom-5  max-w-[90vw]  w-full  left-[50%] translate-x-[-50%] ",children:e.jsx("button",{type:"button",onClick:s,className:"!py-4 w-full text-sm lg:text-base !px-8 bg-primary xs:max-w-[110px] rounded text-white font-semibold",children:"Proceed"})})]})})]})},fe=({modalType:s,modalProps:t})=>{const n=v(),l=_();R(()=>{t!=null&&t.onClose&&l(t==null?void 0:t.onClose),n(B())});const r=()=>{t!=null&&t.onClose&&l("/patients"),n(B())};let i=null;switch(s){case ae:{i=de;break}case ce:{i=pe;break}default:i=null}return a.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflowX="hidden",document.body.style.overflowY="auto"})),e.jsx("div",{className:"fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto  max-h-[100vh] bg-black backdrop bg-opacity-60",children:e.jsxs("div",{className:"absolute z-10  md:top-[20%]",children:[e.jsx("div",{className:"relative  z-10 modal w-screen sm:w-auto sm:min-w-[400px]",children:i!==null&&e.jsx(i,{...t,handleClose:r})}),e.jsx("div",{className:"empty-space sm:pb-5"})]})})},je=a.lazy(()=>p(()=>import("./index-2c5dfea8.js"),["assets/index-2c5dfea8.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js","assets/react-router-dom-2b5d05ea.js","assets/react-router-e0ea48bb.js","assets/@remix-run-22f4369b.js"])),we=a.lazy(()=>p(()=>import("./index-3321476b.js"),["assets/index-3321476b.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js","assets/react-router-dom-2b5d05ea.js","assets/react-router-e0ea48bb.js","assets/@remix-run-22f4369b.js","assets/formik-537a3ea5.js","assets/react-fast-compare-539ed341.js","assets/deepmerge-15f827de.js","assets/lodash-es-87d1a1d5.js","assets/tiny-warning-c932d744.js","assets/hoist-non-react-statics-936d9ad8.js","assets/react-is-e8e5dbb3.js","assets/yup-6b69d055.js","assets/property-expr-38205fa5.js","assets/tiny-case-d0726479.js","assets/toposort-bf96c239.js","assets/Input-67d8e65d.js","assets/react-icons-b6cb1c8a.js","assets/react-select-3262a79f.js","assets/@babel-3ec8e017.js","assets/@emotion-1bfd6dc4.js","assets/stylis-79144faa.js","assets/react-dom-9298c3d0.js","assets/scheduler-765c72db.js","assets/@floating-ui-29dab05b.js","assets/use-isomorphic-layout-effect-86152260.js","assets/memoize-one-297ddbcb.js","assets/yup-phone-lite-57a07919.js","assets/libphonenumber-js-b82ac823.js","assets/react-datepicker-d4a81df2.js","assets/date-fns-e6f8078e.js","assets/react-onclickoutside-aefbdc92.js","assets/react-popper-fee193f7.js","assets/@popperjs-f3391c26.js","assets/warning-2130348e.js","assets/react-datepicker-3394d820.css","assets/react-redux-43ddced7.js","assets/use-sync-external-store-7a2e4d44.js","assets/axios-4a70c6fc.js","assets/config-0471c59d.js","assets/@headlessui-eb5c9d05.js","assets/disable-browser-back-navigation-6f865eb4.js","assets/react-toastify-1c8b6060.js","assets/clsx-1229b3e0.js","assets/react-toastify-f2ebcc7d.css","assets/@reduxjs-cc175dc0.js","assets/immer-d44d0d4e.js","assets/redux-75e49e16.js","assets/redux-thunk-ef899f4c.js","assets/react-responsive-5aacdddd.js"])),ye=a.lazy(()=>p(()=>import("./patients-d7c6978e.js"),["assets/patients-d7c6978e.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js","assets/react-icons-b6cb1c8a.js","assets/react-responsive-5aacdddd.js","assets/react-router-dom-2b5d05ea.js","assets/react-router-e0ea48bb.js","assets/@remix-run-22f4369b.js","assets/axios-4a70c6fc.js","assets/jwt-decode-132402d4.js","assets/config-0471c59d.js","assets/date-fns-e6f8078e.js","assets/@babel-3ec8e017.js","assets/@headlessui-eb5c9d05.js","assets/react-dom-9298c3d0.js","assets/scheduler-765c72db.js"])),ve=a.lazy(()=>p(()=>import("./all-tests-e871fd62.js"),["assets/all-tests-e871fd62.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js","assets/axios-4a70c6fc.js","assets/react-icons-b6cb1c8a.js","assets/config-0471c59d.js","assets/react-router-e0ea48bb.js","assets/@remix-run-22f4369b.js"])),ge=a.lazy(()=>p(()=>import("./TestInfo-66a92d66.js"),["assets/TestInfo-66a92d66.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js","assets/axios-4a70c6fc.js","assets/config-0471c59d.js","assets/@material-ui-9c7adbb7.js","assets/react-is-e8e5dbb3.js","assets/hoist-non-react-statics-936d9ad8.js","assets/@babel-3ec8e017.js","assets/react-dom-9298c3d0.js","assets/scheduler-765c72db.js","assets/clsx-1229b3e0.js","assets/jss-b3d10522.js","assets/is-in-browser-9e40da8a.js","assets/jss-plugin-rule-value-function-56e616f9.js","assets/jss-plugin-global-119830ee.js","assets/jss-plugin-nested-00a22a81.js","assets/jss-plugin-camel-case-92f9f32c.js","assets/hyphenate-style-name-80972348.js","assets/jss-plugin-default-unit-2f183c29.js","assets/jss-plugin-vendor-prefixer-7761c2aa.js","assets/css-vendor-14361496.js","assets/jss-plugin-props-sort-0c9fca2f.js","assets/react-router-e0ea48bb.js","assets/@remix-run-22f4369b.js"])),be=()=>{v();const s=M(t=>t.modal);return e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),e.jsx("main",{className:"py-3.5 xs:py-5 lg:px-5 xl:px-6  container ",children:e.jsx(a.Suspense,{fallback:e.jsx("div",{className:"text-center",children:"Loading..."}),children:e.jsxs(b,{children:[e.jsx(x,{path:"/",element:e.jsx(je,{})}),e.jsx(x,{path:"/new-booking",element:e.jsx(we,{})}),e.jsx(x,{path:"/patients",element:e.jsx(ye,{})}),e.jsx(x,{path:"/all-tests",element:e.jsx(ve,{})}),e.jsx(x,{path:"/patient/:id",element:e.jsx(ge,{})})]})})}),s.modalType!==null&&e.jsx(fe,{...s})]})},Ne=({children:s,path:t})=>{let n=localStorage.getItem("access_token");const l=C();return n?s:e.jsx(T,{replace:!0,to:"/",state:{from:l}})},Ce=K({reducer:{modal:oe,newBooking:ue},devTools:!1}),_e=a.lazy(()=>p(()=>import("./login-a629d08c.js"),["assets/login-a629d08c.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js","assets/formik-537a3ea5.js","assets/react-fast-compare-539ed341.js","assets/deepmerge-15f827de.js","assets/lodash-es-87d1a1d5.js","assets/tiny-warning-c932d744.js","assets/hoist-non-react-statics-936d9ad8.js","assets/react-is-e8e5dbb3.js","assets/Input-67d8e65d.js","assets/react-icons-b6cb1c8a.js","assets/yup-6b69d055.js","assets/property-expr-38205fa5.js","assets/tiny-case-d0726479.js","assets/toposort-bf96c239.js","assets/react-router-dom-2b5d05ea.js","assets/react-router-e0ea48bb.js","assets/@remix-run-22f4369b.js","assets/axios-4a70c6fc.js","assets/config-0471c59d.js"])),Le=a.lazy(()=>p(()=>import("./Register-f889c6e7.js"),["assets/Register-f889c6e7.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js","assets/formik-537a3ea5.js","assets/react-fast-compare-539ed341.js","assets/deepmerge-15f827de.js","assets/lodash-es-87d1a1d5.js","assets/tiny-warning-c932d744.js","assets/hoist-non-react-statics-936d9ad8.js","assets/react-is-e8e5dbb3.js","assets/yup-6b69d055.js","assets/property-expr-38205fa5.js","assets/tiny-case-d0726479.js","assets/toposort-bf96c239.js","assets/Input-67d8e65d.js","assets/react-icons-b6cb1c8a.js","assets/react-router-dom-2b5d05ea.js","assets/react-router-e0ea48bb.js","assets/@remix-run-22f4369b.js","assets/axios-4a70c6fc.js","assets/verify-otp-c048266a.js","assets/react-redux-43ddced7.js","assets/react-dom-9298c3d0.js","assets/scheduler-765c72db.js","assets/use-sync-external-store-7a2e4d44.js","assets/react-toastify-1c8b6060.js","assets/clsx-1229b3e0.js","assets/react-toastify-f2ebcc7d.css","assets/config-0471c59d.js"])),ke=a.lazy(()=>p(()=>import("./forgot-password-dc96b68f.js"),["assets/forgot-password-dc96b68f.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js","assets/formik-537a3ea5.js","assets/react-fast-compare-539ed341.js","assets/deepmerge-15f827de.js","assets/lodash-es-87d1a1d5.js","assets/tiny-warning-c932d744.js","assets/hoist-non-react-statics-936d9ad8.js","assets/react-is-e8e5dbb3.js","assets/Input-67d8e65d.js","assets/react-icons-b6cb1c8a.js","assets/yup-6b69d055.js","assets/property-expr-38205fa5.js","assets/tiny-case-d0726479.js","assets/toposort-bf96c239.js"])),Ee=a.lazy(()=>p(()=>import("./reset-password-c7b55d9a.js"),["assets/reset-password-c7b55d9a.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js","assets/formik-537a3ea5.js","assets/react-fast-compare-539ed341.js","assets/deepmerge-15f827de.js","assets/lodash-es-87d1a1d5.js","assets/tiny-warning-c932d744.js","assets/hoist-non-react-statics-936d9ad8.js","assets/react-is-e8e5dbb3.js","assets/Input-67d8e65d.js","assets/react-icons-b6cb1c8a.js","assets/yup-6b69d055.js","assets/property-expr-38205fa5.js","assets/tiny-case-d0726479.js","assets/toposort-bf96c239.js"])),Be=a.lazy(()=>p(()=>import("./verify-otp-c048266a.js"),["assets/verify-otp-c048266a.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js","assets/formik-537a3ea5.js","assets/react-fast-compare-539ed341.js","assets/deepmerge-15f827de.js","assets/lodash-es-87d1a1d5.js","assets/tiny-warning-c932d744.js","assets/hoist-non-react-statics-936d9ad8.js","assets/react-is-e8e5dbb3.js","assets/Input-67d8e65d.js","assets/react-icons-b6cb1c8a.js","assets/yup-6b69d055.js","assets/property-expr-38205fa5.js","assets/tiny-case-d0726479.js","assets/toposort-bf96c239.js","assets/react-redux-43ddced7.js","assets/react-dom-9298c3d0.js","assets/scheduler-765c72db.js","assets/use-sync-external-store-7a2e4d44.js","assets/axios-4a70c6fc.js","assets/react-toastify-1c8b6060.js","assets/clsx-1229b3e0.js","assets/react-toastify-f2ebcc7d.css","assets/config-0471c59d.js","assets/react-router-e0ea48bb.js","assets/@remix-run-22f4369b.js"])),Te=a.lazy(()=>p(()=>import("./AllTest-fd6cf9fb.js"),["assets/AllTest-fd6cf9fb.js","assets/react-951c301a.js","assets/classnames-d6e1bab7.js"])),Me=()=>e.jsx(e.Fragment,{children:e.jsx(H,{children:e.jsx(a.Suspense,{fallback:e.jsx("div",{className:"text-center",children:"Loading..."}),children:e.jsxs(b,{children:[e.jsx(x,{exact:!0,path:"/",element:e.jsx(_e,{})}),e.jsx(x,{path:"/auth/register",element:e.jsx(Le,{})}),e.jsxs(x,{path:"auth",element:e.jsx(se,{}),children:[e.jsx(x,{path:"verify-otp",element:e.jsx(Be,{})}),e.jsx(x,{path:"forgot-password",element:e.jsx(ke,{})}),e.jsx(x,{path:"reset-password",element:e.jsx(Ee,{})}),e.jsx(x,{path:"*",element:e.jsx(T,{to:"/auth/login",replace:!0})})]}),e.jsx(x,{path:"/*",element:e.jsxs(Ne,{children:[e.jsx(be,{}),e.jsx(b,{children:e.jsx(x,{to:"/patient/:id",element:e.jsx(Te,{})})})]})})]})})})});$.createRoot(document.getElementById("root")).render(e.jsx(P.StrictMode,{children:e.jsxs(I,{store:Ce,children:[e.jsx(J,{position:"top-center"}),e.jsx(Me,{})]})}));export{ae as B,xe as a,dt as c,he as r,ct as s};