import{L as c,o as f,c as w,w as n,a as o,u as e,Z as _,b as t,M as V,C as g,f as b}from"./app-BbfR90Ma.js";import{_ as k}from"./GuestLayout-Ave-MQdA.js";import{_ as l}from"./InputError-BPVZoWzt.js";import{_ as i,a as m}from"./TextInput-B6xDilsO.js";import{P as v}from"./PrimaryButton-D4XJvKfE.js";import"./ApplicationLogo-Cmob1813.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"mt-4"},P={class:"mt-4"},q={class:"mt-4 flex items-center justify-end"},M={__name:"ResetPassword",props:{email:{type:String,required:!0},token:{type:String,required:!0}},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(x,a)=>(f(),w(k,null,{default:n(()=>[o(e(_),{title:"Reset Password"}),t("form",{onSubmit:V(u,["prevent"])},[t("div",null,[o(i,{for:"email",value:"Email"}),o(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",y,[o(i,{for:"password",value:"Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",P,[o(i,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",q,[o(v,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>a[3]||(a[3]=[b(" Reset Password ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{M as default};