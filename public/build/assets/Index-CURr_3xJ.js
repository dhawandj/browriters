import{_ as f}from"./PrimaryLayout-rNr8mZo4.js";import{o as r,c as i,w as d,a as s,u as o,Z as h,b as e,t as n,d as b,e as p,F as _,r as y,i as g,f as w}from"./app-CkaUcDzv.js";import{u as x}from"./helpers-SbEyOsvd.js";import{_ as l,a as k}from"./NoDataMessage-DrpDVkMV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const $={class:"space-y-3"},v={class:"grid grid-cols-2 gap-2 text-center"},B={class:"space-y-2"},N={class:""},V={class:"flex justify-between"},D={class:"flex justify-between text-sm text-secondary"},A={__name:"Index",props:["orders","count","currentStatus"],setup(t){const u=x();return(m,c)=>(r(),i(f,null,{default:d(()=>[s(o(h),{title:"admin"}),e("div",$,[c[0]||(c[0]=e("p",{class:"font-semibold text-textPrimary"},"admin-dashboard",-1)),e("div",v,[s(l,{href:"/admin/pickup",lable:`pickups: ${t.count.pickup}`},null,8,["lable"]),s(l,{href:"/admin/write",lable:`write: ${t.count.write}`},null,8,["lable"]),s(l,{href:"/admin/writing",lable:`writing: ${t.count.writing}`},null,8,["lable"]),s(l,{href:"/admin/delivery",lable:`delivery: ${t.count.delivery}`},null,8,["lable"])])]),e("div",B,[e("h1",N,n(t.currentStatus)+" List",1),t.orders.length?b("",!0):(r(),i(k,{key:0,msg:"no records"})),(r(!0),p(_,null,y(t.orders,a=>(r(),i(o(g),{class:"block list-none rounded-md bg-secondaryAlt p-3",href:m.route("admin.order.show",{order:a})},{default:d(()=>[e("p",V,[w(" user:"+n(a.user_id)+" ",1),e("span",null,"#"+n(a.id),1)]),e("p",D,[e("span",null,n(o(u)(a.created_at)),1),e("span",null,"Rs:"+n(a.amount),1)])]),_:2},1032,["href"]))),256))])]),_:1}))}};export{A as default};
