import{B as b,o,e as c,c as g,m as i,v as f,d as p,s as y,b as n,t as x,O as v,a as s,w as u,f as l,u as d,i as k,Z as _}from"./app-BbfR90Ma.js";import{s as h}from"./index-0_rvZ9UX.js";import{_ as r}from"./PrimaryLink-DM7h9162.js";import{_ as $}from"./ServiceDetails-BCSi9JQ7.js";import{_ as w}from"./PrimaryLayout-zBfw01Jz.js";var B=function(a){var t=a.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(t("tag.primary.background"),`;
    color: `).concat(t("tag.primary.color"),`;
    font-size: `).concat(t("tag.font.size"),`;
    font-weight: `).concat(t("tag.font.weight"),`;
    padding: `).concat(t("tag.padding"),`;
    border-radius: `).concat(t("tag.border.radius"),`;
    gap: `).concat(t("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(t("tag.icon.size"),`;
    width: `).concat(t("tag.icon.size"),`;
    height:`).concat(t("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(t("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(t("tag.success.background"),`;
    color: `).concat(t("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(t("tag.info.background"),`;
    color: `).concat(t("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(t("tag.warn.background"),`;
    color: `).concat(t("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(t("tag.danger.background"),`;
    color: `).concat(t("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(t("tag.secondary.background"),`;
    color: `).concat(t("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(t("tag.contrast.background"),`;
    color: `).concat(t("tag.contrast.color"),`;
}
`)},S={root:function(a){var t=a.props;return["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},z=b.extend({name:"tag",theme:B,classes:S}),N={name:"BaseTag",extends:h,props:{value:null,severity:null,rounded:Boolean,icon:String},style:z,provide:function(){return{$pcTag:this,$parentInstance:this}}},m={name:"Tag",extends:N,inheritAttrs:!1};function T(e,a,t,Z,q,F){return o(),c("span",i({class:e.cx("root")},e.ptmi("root")),[e.$slots.icon?(o(),g(f(e.$slots.icon),i({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(o(),c("span",i({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):p("",!0),e.value!=null||e.$slots.default?y(e.$slots,"default",{key:2},function(){return[n("span",i({class:e.cx("label")},e.ptm("label")),x(e.value),17)]}):p("",!0)],16)}m.render=T;const V={class:"space-y-3"},j={class:"grid grid-cols-1 gap-2 text-cente max-w-md mx-auto"},A={class:"p-2 rounded-md text-textPrimary bg-secondaryAlt space-y-4 capitalize"},P={class:"flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer"},C={class:""},D={__name:"AssignmentSpace",setup(e){return(a,t)=>(o(),c("div",V,[t[6]||(t[6]=v('<p class="text-end"><i class="pi pi-user"></i></p><div class="p-10"><p class="text-center text-xl"><span class="text-primary font-bold">bro</span>writers.com </p><p class="text-xs text-center text-secondary">since 2025</p></div><p class="text-center text-sm">Useful things for students</p><p class="text-center"><i class="pi pi-bolt text-primary"></i></p>',4)),n("div",j,[n("div",A,[s(d(k),{href:a.route("assignment")},{default:u(()=>t[0]||(t[0]=[n("div",{class:"flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer"},[n("i",{class:"pi pi-book text-primary"}),n("div",{class:""},[l("Assignment writing "),n("p",{class:"text-xs text-end font-semibold text-secondary"},"only ₹5/page")]),n("i",{class:"pi pi-angle-right text-secondary"})],-1)])),_:1},8,["href"]),n("div",P,[t[3]||(t[3]=n("i",{class:"pi pi-book text-primary"},null,-1)),n("div",C,[t[1]||(t[1]=l("Record writing ")),s(d(m),{severity:"secondary",class:"text-xs",style:{color:"#E2B714"},value:"New"}),t[2]||(t[2]=n("p",{class:"text-xs text-end font-semibold text-secondary"},"only ₹5/page",-1))]),t[4]||(t[4]=n("i",{class:"pi pi-angle-right text-secondary"},null,-1))]),t[5]||(t[5]=n("div",{class:"flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer"},[n("i",{class:"pi pi-book text-primary"}),n("div",null,[l("Observation writing "),n("p",{class:"text-xs text-end font-semibold text-secondary"},"only ₹5/page")]),n("i",{class:"pi pi-angle-right text-secondary"})],-1))])])]))}},O={class:"space-y-3"},E={class:"grid grid-cols-2 gap-2 text-center"},R={__name:"DashboardSpace",setup(e){return(a,t)=>(o(),c("div",O,[t[0]||(t[0]=n("p",{class:"font-semibold text-textPrimary"},"dashboard",-1)),n("div",E,[s(r,{href:a.route("orders"),lable:"myOrders"},null,8,["href"]),s(r,{lable:"profile"})])]))}},H={class:"space-y-3"},I={class:"grid grid-cols-2 gap-2 text-center"},U={__name:"RecordSpace",setup(e){return(a,t)=>(o(),c("div",H,[t[0]||(t[0]=n("p",{class:"font-semibold text-textPrimary"},"record-writing",-1)),n("div",I,[s(r),s(r,{class:"text-yellow-500",href:a.route("record"),lable:"only ₹6/page"},null,8,["href"]),s(r,{class:"col-span-2",lable:"check estimation"})])]))}},Q={__name:"Home",setup(e){return(a,t)=>(o(),g(w,null,{default:u(()=>[s(d(_),{title:"home"}),s(D),s(R),s(U),s($)]),_:1}))}};export{Q as default};
