import{j as s}from"./react-951c301a.js";import{F as o,a as d}from"./formik-537a3ea5.js";import{I as e,S as l}from"./Input-67d8e65d.js";import{b as i,c as t,g as n}from"./yup-6b69d055.js";import"./classnames-d6e1bab7.js";import"./react-fast-compare-539ed341.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./tiny-warning-c932d744.js";import"./hoist-non-react-statics-936d9ad8.js";import"./react-is-e8e5dbb3.js";import"./react-icons-b6cb1c8a.js";import"./property-expr-38205fa5.js";import"./tiny-case-d0726479.js";import"./toposort-bf96c239.js";const S=()=>{const m={password:"",confirmPassword:""},a=i({password:t().required("Password is required"),confirmPassword:t().oneOf([n("password"),null],"Passwords must match")});return s.jsxs("div",{className:"py-20 md:h-screen flex max-w-xl md:max-w-none mx-auto flex-col md:flex-row justify-center md:items-center md:justify-between relative ",children:[s.jsxs("p",{className:"absolute hidden md:block bottom-[20px] mb-2 text-sm left-[50%] translate-x-[-50%]",children:[" ","Powered by ",s.jsx("span",{className:"font-medium",children:" Xyz Pvt. Ltd."})]}),s.jsxs("div",{className:"md:flex-1 flex mb-10 md:mb-0 flex-col items-center md:block ",children:[s.jsx("span",{className:"inline-block md:hidden bg-[#B82C3A]/[0.23] h-[45px] w-[45px] rounded"})," ",s.jsxs("h2",{className:"text-lg md:text-4xl",children:["Welcome to"," ",s.jsx("span",{className:"hidden md:inline-block bg-[#B82C3A]/[0.23] h-[80px] w-[90px]",children:" "})," ",s.jsx("span",{className:" text-lg md:text-5xl xl:text-6xl inline md:block font-medium text-primary",children:"PathoPlus"})]})]}),s.jsxs("div",{className:"md:flex-1",children:[s.jsx("h1",{className:"text-2xl md:text-[40px] font-semibold",children:"Reset Password"}),s.jsx("p",{className:"text-sm md:text-base mt-3.5",children:"You can enter the new password here"}),s.jsx(o,{initialValues:m,validationSchema:a,onSubmit:r=>{console.log(r)},children:s.jsxs(d,{className:"auth-form   max-w-2xl mt-4",children:[s.jsx(e,{placeholder:"Enter New Password",name:"password",id:"password",type:"password"}),s.jsx(e,{placeholder:"Confirm Password",name:"confirmPassword",id:"confirmPassword",type:"password"}),s.jsx(l,{text:"Submit",className:"bg-primary"})]})})]})]})};export{S as default};