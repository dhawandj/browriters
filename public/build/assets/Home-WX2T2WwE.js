import{Q as W,R as $,B as N,m as l,S as q,U as Q,V as X,W as E,X as Y,k as O,Y as w,$ as D,q as G,o,e as c,b as r,x as J,c as g,C as ee,v as T,d as p,t as S,p as F,w as b,a as d,T as te,s as C,F as v,r as V,f as k,E as _,a0 as M,u as f,i as x,a1 as j,Z as ne}from"./app-D7epSZQy.js";import{u as ie,s as se,a as K,Z as A}from"./index-BVlApjVF.js";import{R as re}from"./index-CtoHBnqx.js";import{_ as oe}from"./PrimaryLayout-zA9gQekk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function L(t){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(t)}function ae(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function le(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,ue(s.key),s)}}function ce(t,e,n){return e&&le(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ue(t){var e=de(t,"string");return L(e)=="symbol"?e:e+""}function de(t,e){if(L(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(L(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var pe=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};ae(this,t),this.element=e,this.listener=n}return ce(t,[{key:"bindScrollListener",value:function(){this.scrollableParents=W(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function R(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return ie(t)}var me=$(),fe=function(e){var n=e.dt;return`
.p-menu {
    background: `.concat(n("menu.background"),`;
    color: `).concat(n("menu.color"),`;
    border: 1px solid `).concat(n("menu.border.color"),`;
    border-radius: `).concat(n("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(n("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(n("menu.transition.duration"),", color ").concat(n("menu.transition.duration"),`;
    border-radius: `).concat(n("menu.item.border.radius"),`;
    color: `).concat(n("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(n("menu.item.padding"),`;
    gap: `).concat(n("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(n("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(n("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(n("menu.submenu.label.background"),`;
    padding: `).concat(n("menu.submenu.label.padding"),`;
    color: `).concat(n("menu.submenu.label.color"),`;
    font-weight: `).concat(n("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-block-start: 1px solid `).concat(n("menu.separator.border.color"),`;
}
`)},be={root:function(e){var n=e.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var n=e.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},he=N.extend({name:"menu",theme:fe,classes:be}),ge={name:"BaseMenu",extends:K,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:he,provide:function(){return{$pcMenu:this,$parentInstance:this}}},U={name:"Menuitem",hostName:"Menu",extends:K,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,n){return e&&e.item?q(e.item[n]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:l({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:l({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:re}},ye=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],ve=["href","target"];function ke(t,e,n,s,a,i){var I=G("ripple");return i.visible()?(o(),c("li",l({key:0,id:n.id,class:[t.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[r("div",l({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(y){return i.onItemClick(y)}),onMousemove:e[1]||(e[1]=function(y){return i.onItemMouseMove(y)})},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(o(),g(T(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):p("",!0):J((o(),c("a",l({key:0,href:n.item.url,class:t.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(o(),g(T(n.templates.itemicon),{key:0,item:n.item,class:ee(t.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(o(),c("span",l({key:1,class:[t.cx("itemIcon"),n.item.icon]},i.getPTOptions("itemIcon")),null,16)):p("",!0),r("span",l({class:t.cx("itemLabel")},i.getPTOptions("itemLabel")),S(i.label()),17)],16,ve)),[[I]])],16)],16,ye)):p("",!0)}U.render=ke;function H(t){return Oe(t)||Ie(t)||Le(t)||xe()}function xe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(t,e){if(t){if(typeof t=="string")return z(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}function Ie(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Oe(t){if(Array.isArray(t))return z(t)}function z(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}var Z={name:"Menu",extends:ge,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||R()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||R(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&A.clear(this.container),this.container=null},methods:{itemClick:function(e){var n=e.item;this.disabled(n)||(n.command&&n.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(O(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)O(this.target),this.hide(),e.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(w(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var n=D(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=n&&D(n,'a[data-pc-section="itemlink"]');this.popup&&O(this.target),s?s.click():n&&n.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var n=w(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=H(n).findIndex(function(a){return a.id===e});return s>-1?s+1:0},findPrevOptionIndex:function(e){var n=w(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=H(n).findIndex(function(a){return a.id===e});return s>-1?s-1:0},changeFocusedOptionIndex:function(e){var n=w(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=e>=n.length?n.length-1:e<0?0:e;s>-1&&(this.focusedOptionIndex=n[s].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){Y(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&A.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&O(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&A.clear(e)},alignOverlay:function(){X(this.container,this.target);var e=E(this.target);e>E(this.container)&&(this.container.style.minWidth=E(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=e.container&&!e.container.contains(n.target),a=!(e.target&&(e.target===n.target||e.target.contains(n.target)));e.overlayVisible&&s&&a?e.hide():!e.popup&&s&&a&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new pe(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!Q()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){me.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:U,Portal:se}},we=["id"],Ce=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Se=["id"];function Pe(t,e,n,s,a,i){var I=F("PVMenuitem"),y=F("Portal");return o(),g(y,{appendTo:t.appendTo,disabled:!t.popup},{default:b(function(){return[d(te,l({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:b(function(){return[!t.popup||a.overlayVisible?(o(),c("div",l({key:0,ref:i.containerRef,id:a.id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},t.ptmi("root")),[t.$slots.start?(o(),c("div",l({key:0,class:t.cx("start")},t.ptm("start")),[C(t.$slots,"start")],16)):p("",!0),r("ul",l({ref:i.listRef,id:a.id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":a.focused?i.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(o(!0),c(v,null,V(t.model,function(u,m){return o(),c(v,{key:i.label(u)+m.toString()},[u.items&&i.visible(u)&&!u.separator?(o(),c(v,{key:0},[u.items?(o(),c("li",l({key:0,id:a.id+"_"+m,class:[t.cx("submenuLabel"),u.class],role:"none",ref_for:!0},t.ptm("submenuLabel")),[C(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:u},function(){return[k(S(i.label(u)),1)]})],16,Se)):p("",!0),(o(!0),c(v,null,V(u.items,function(h,P){return o(),c(v,{key:h.label+m+"_"+P},[i.visible(h)&&!h.separator?(o(),g(I,{key:0,id:a.id+"_"+m+"_"+P,item:h,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(h)&&h.separator?(o(),c("li",l({key:"separator"+m+P,class:[t.cx("separator"),u.class],style:h.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):p("",!0)],64)}),128))],64)):i.visible(u)&&u.separator?(o(),c("li",l({key:"separator"+m.toString(),class:[t.cx("separator"),u.class],style:u.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):(o(),g(I,{key:i.label(u)+m.toString(),id:a.id+"_"+m,item:u,index:m,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Ce),t.$slots.end?(o(),c("div",l({key:1,class:t.cx("end")},t.ptm("end")),[C(t.$slots,"end")],16)):p("",!0)],16,we)):p("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}Z.render=Pe;var Ee=function(e){var n=e.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(n("tag.primary.background"),`;
    color: `).concat(n("tag.primary.color"),`;
    font-size: `).concat(n("tag.font.size"),`;
    font-weight: `).concat(n("tag.font.weight"),`;
    padding: `).concat(n("tag.padding"),`;
    border-radius: `).concat(n("tag.border.radius"),`;
    gap: `).concat(n("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(n("tag.icon.size"),`;
    width: `).concat(n("tag.icon.size"),`;
    height:`).concat(n("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(n("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(n("tag.success.background"),`;
    color: `).concat(n("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(n("tag.info.background"),`;
    color: `).concat(n("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(n("tag.warn.background"),`;
    color: `).concat(n("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(n("tag.danger.background"),`;
    color: `).concat(n("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(n("tag.secondary.background"),`;
    color: `).concat(n("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(n("tag.contrast.background"),`;
    color: `).concat(n("tag.contrast.color"),`;
}
`)},Me={root:function(e){var n=e.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Ae=N.extend({name:"tag",theme:Ee,classes:Me}),Te={name:"BaseTag",extends:K,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Ae,provide:function(){return{$pcTag:this,$parentInstance:this}}},B={name:"Tag",extends:Te,inheritAttrs:!1};function ze(t,e,n,s,a,i){return o(),c("span",l({class:t.cx("root")},t.ptmi("root")),[t.$slots.icon?(o(),g(T(t.$slots.icon),l({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(o(),c("span",l({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):p("",!0),t.value!=null||t.$slots.default?C(t.$slots,"default",{key:2},function(){return[r("span",l({class:t.cx("label")},t.ptm("label")),S(t.value),17)]}):p("",!0)],16)}B.render=ze;const Ke={class:"card flex justify-end"},Be={__name:"Menu",setup(t){const e=_(),n=_([{label:"Options",items:[{label:"Profile",icon:"pi pi-user",command:()=>{M.get(route("profile.edit"))}},{label:"myOrders",icon:"pi pi-box",command:()=>{M.get(route("orders"))}},{label:"Logout",icon:"pi pi-sign-out",command:()=>{M.post(route("logout"))}}]}]),s=a=>{e.value.toggle(a)};return(a,i)=>(o(),c("div",Ke,[r("i",{onClick:s,class:"pi pi-cog cursor-pointer"}),d(f(Z),{class:"customMenu",ref_key:"menu",ref:e,id:"overlay_menu",model:n.value,popup:!0},null,8,["model"])]))}},De={class:"space-y-3"},Fe={class:"flex justify-between items-center"},Ve={class:"capitalize text-secondary"},_e={class:"grid grid-cols-1 gap-2 text-cente max-w-md mx-auto"},Re={class:"p-2 rounded-md text-textPrimary bg-secondaryAlt space-y-4"},He={class:"flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer"},Ne={class:""},je={__name:"AssignmentSpace",setup(t){return(e,n)=>{var s;return o(),c("div",De,[r("div",Fe,[d(f(x),{href:(s=e.$page.props.auth.user)!=null&&s.name?e.route("profile.edit"):e.route("login")},{default:b(()=>{var a;return[r("p",Ve,[n[0]||(n[0]=r("i",{class:"pi pi-user"},null,-1)),k(" "+S(((a=e.$page.props.auth.user)==null?void 0:a.name)??"login bro!! "),1)])]}),_:1},8,["href"]),d(Be)]),n[7]||(n[7]=j('<div class="p-10"><p class="text-center text-xl"><span class="text-primary font-bold">bro</span>writers.com </p><p class="text-xs text-center text-secondary">since 2025</p></div><p class="text-center text-xs">&quot;Don&#39;t stress over the writing. Let us handle it.&quot;</p><p class="text-center"><i class="pi pi-bolt text-primary"></i></p>',3)),r("div",_e,[r("div",Re,[d(f(x),{href:e.route("assignment")},{default:b(()=>n[1]||(n[1]=[r("div",{class:"flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer"},[r("i",{class:"pi pi-book text-primary"}),r("div",{class:""},[k("assignment writing "),r("p",{class:"text-xs text-end font-semibold text-secondary"},"only ₹5/page")]),r("i",{class:"pi pi-angle-right text-secondary"})],-1)])),_:1},8,["href"]),d(f(x),{href:e.route("record")},{default:b(()=>[r("div",He,[n[4]||(n[4]=r("i",{class:"pi pi-book text-primary"},null,-1)),r("div",Ne,[n[2]||(n[2]=k("record writing ")),d(f(B),{severity:"secondary",class:"text-xs",style:{color:"#E2B714"},value:"New"}),n[3]||(n[3]=r("p",{class:"text-xs text-end font-semibold text-secondary"},"only ₹5/page",-1))]),n[5]||(n[5]=r("i",{class:"pi pi-angle-right text-secondary"},null,-1))])]),_:1},8,["href"]),d(f(x),{href:e.route("observation")},{default:b(()=>n[6]||(n[6]=[r("div",{class:"flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer"},[r("i",{class:"pi pi-book text-primary"}),r("div",null,[k("observation writing "),r("p",{class:"text-xs text-end font-semibold text-secondary"},"only ₹5/page")]),r("i",{class:"pi pi-angle-right text-secondary"})],-1)])),_:1},8,["href"])])])])}}},Ue={class:"space-y-3"},Ze={class:"text-center"},We={__name:"RecordSpace",setup(t){return(e,n)=>(o(),c("div",Ue,[r("div",Ze,[d(f(x),{href:e.route("orders")},{default:b(()=>[d(f(B),{value:"show  my orders ",icon:"pi pi-box",severity:"secondary",class:"text-lg",style:{color:"#e2b714"}})]),_:1},8,["href"])]),n[0]||(n[0]=j('<div class="border-t p-3 border-secondaryAlt"><div class="text-secondary"><div><p class="text-xs"><strong>© browriters.com. 2025</strong><p class="text-xs">- support@browriters.com</p><p class="text-xs">- now in Banglore</p><p class="text-xs">- Privacy &amp; Terms</p><p class="text-xs">- FAQs</p><p class="text-xs">- partner</p></p></div><div class="space-x-4 text-end mt-2"><i class="pi pi-facebook cursor-pointer hover:text-textPrimary"></i><i class="pi pi-telegram"></i><i class="pi pi-instagram"></i><i class="pi pi-youtube"></i><i class="pi pi-twitter"></i></div></div></div>',1))]))}},Ge={__name:"Home",setup(t){return(e,n)=>(o(),g(oe,null,{default:b(()=>[d(f(ne),{title:"home"}),d(je),d(We)]),_:1}))}};export{Ge as default};
