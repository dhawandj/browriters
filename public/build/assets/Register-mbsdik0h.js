import{L as p,o as c,c as w,w as n,a as o,u as e,Z as g,b as t,M as _,i as V,f as d,C as y}from"./app-DiLnyZOk.js";import{_ as v}from"./GuestLayout-DuOHPpin.js";import{_ as l}from"./InputError-D4Xwzis6.js";import{_ as m,a as i}from"./TextInput-m_4qE7mt.js";import{P as x}from"./PrimaryButton-DSa5QCQ_.js";import"./ApplicationLogo-DeHS9OnP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={class:"mt-4"},k={class:"mt-4"},q={class:"mt-4"},B={class:"mt-4 flex items-center justify-end"},j={__name:"Register",setup(C){const s=p({name:"",email:"",password:"",password_confirmation:""}),u=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(f,a)=>(c(),w(v,null,{default:n(()=>[o(e(g),{title:"Register"}),t("form",{onSubmit:_(u,["prevent"])},[t("div",null,[o(m,{for:"name",value:"Name"}),o(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(s).name,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),t("div",b,[o(m,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",k,[o(m,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",q,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",B,[o(e(V),{href:f.route("login"),class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"},{default:n(()=>a[4]||(a[4]=[d(" Already registered? ")])),_:1},8,["href"]),o(x,{class:y(["ms-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:n(()=>a[5]||(a[5]=[d(" Register ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};
