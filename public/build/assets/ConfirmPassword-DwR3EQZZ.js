import{L as l,o as n,c as d,w as t,a as r,u as a,Z as p,b as e,M as f,C as u,f as c}from"./app-a6x42XmD.js";import{_ as w}from"./GuestLayout-CVhZHTf3.js";import{_}from"./InputError-DxBXmnSb.js";import{_ as b,a as x}from"./TextInput-Kqx11VRo.js";import{P as g}from"./PrimaryButton-DhOmKeZ9.js";import"./ApplicationLogo-ClTN3rDv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"mt-4 flex justify-end"},M={__name:"ConfirmPassword",setup(C){const s=l({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(P,o)=>(n(),d(w,null,{default:t(()=>[r(a(p),{title:"Confirm Password"}),o[2]||(o[2]=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[r(b,{for:"password",value:"Password"}),r(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":o[0]||(o[0]=m=>a(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),r(_,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",y,[r(g,{class:u(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>o[1]||(o[1]=[c(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{M as default};