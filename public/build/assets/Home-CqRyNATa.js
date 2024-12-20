import{Q as W,R as q,B as H,m as a,S as $,U as Q,V as X,W as P,X as Y,k as I,Y as O,$ as _,q as G,o as r,e as c,b as o,x as J,c as b,C as ee,v as A,d,t as C,p as B,w as k,a as p,T as te,s as w,F as y,r as D,f as v,E as F,a0 as E,u as h,a1 as N,i as j,Z as ne}from"./app-CkaUcDzv.js";import{u as ie,s as se,a as z,Z as M}from"./index-BinycS5s.js";import{R as oe}from"./index-BgEblh9u.js";import{_ as re}from"./PrimaryLayout-rNr8mZo4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(t)}function ae(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function le(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,ue(s.key),s)}}function ce(t,e,n){return e&&le(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ue(t){var e=de(t,"string");return x(e)=="symbol"?e:e+""}function de(t,e){if(x(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(x(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var pe=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};ae(this,t),this.element=e,this.listener=n}return ce(t,[{key:"bindScrollListener",value:function(){this.scrollableParents=W(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function V(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return ie(t)}var me=q(),fe=function(e){var n=e.dt;return`
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
`)},be={root:function(e){var n=e.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var n=e.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},he=H.extend({name:"menu",theme:fe,classes:be}),ge={name:"BaseMenu",extends:z,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:he,provide:function(){return{$pcMenu:this,$parentInstance:this}}},U={name:"Menuitem",hostName:"Menu",extends:z,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,n){return e&&e.item?$(e.item[n]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:a({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:a({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:a({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:oe}},ye=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],ve=["href","target"];function ke(t,e,n,s,l,i){var L=G("ripple");return i.visible()?(r(),c("li",a({key:0,id:n.id,class:[t.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[o("div",a({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(g){return i.onItemClick(g)}),onMousemove:e[1]||(e[1]=function(g){return i.onItemMouseMove(g)})},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(r(),b(A(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):d("",!0):J((r(),c("a",a({key:0,href:n.item.url,class:t.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(r(),b(A(n.templates.itemicon),{key:0,item:n.item,class:ee(t.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(r(),c("span",a({key:1,class:[t.cx("itemIcon"),n.item.icon]},i.getPTOptions("itemIcon")),null,16)):d("",!0),o("span",a({class:t.cx("itemLabel")},i.getPTOptions("itemLabel")),C(i.label()),17)],16,ve)),[[L]])],16)],16,ye)):d("",!0)}U.render=ke;function R(t){return Oe(t)||Ie(t)||Le(t)||xe()}function xe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(t,e){if(t){if(typeof t=="string")return T(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}function Ie(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Oe(t){if(Array.isArray(t))return T(t)}function T(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}var Z={name:"Menu",extends:ge,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||V()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||V(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&M.clear(this.container),this.container=null},methods:{itemClick:function(e){var n=e.item;this.disabled(n)||(n.command&&n.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(I(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)I(this.target),this.hide(),e.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(O(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var n=_(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=n&&_(n,'a[data-pc-section="itemlink"]');this.popup&&I(this.target),s?s.click():n&&n.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var n=O(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=R(n).findIndex(function(l){return l.id===e});return s>-1?s+1:0},findPrevOptionIndex:function(e){var n=O(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=R(n).findIndex(function(l){return l.id===e});return s>-1?s-1:0},changeFocusedOptionIndex:function(e){var n=O(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=e>=n.length?n.length-1:e<0?0:e;s>-1&&(this.focusedOptionIndex=n[s].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){Y(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&M.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&I(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&M.clear(e)},alignOverlay:function(){X(this.container,this.target);var e=P(this.target);e>P(this.container)&&(this.container.style.minWidth=P(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=e.container&&!e.container.contains(n.target),l=!(e.target&&(e.target===n.target||e.target.contains(n.target)));e.overlayVisible&&s&&l?e.hide():!e.popup&&s&&l&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new pe(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!Q()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){me.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:U,Portal:se}},we=["id"],Ce=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Se=["id"];function Pe(t,e,n,s,l,i){var L=B("PVMenuitem"),g=B("Portal");return r(),b(g,{appendTo:t.appendTo,disabled:!t.popup},{default:k(function(){return[p(te,a({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:k(function(){return[!t.popup||l.overlayVisible?(r(),c("div",a({key:0,ref:i.containerRef,id:l.id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},t.ptmi("root")),[t.$slots.start?(r(),c("div",a({key:0,class:t.cx("start")},t.ptm("start")),[w(t.$slots,"start")],16)):d("",!0),o("ul",a({ref:i.listRef,id:l.id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":l.focused?i.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(r(!0),c(y,null,D(t.model,function(u,m){return r(),c(y,{key:i.label(u)+m.toString()},[u.items&&i.visible(u)&&!u.separator?(r(),c(y,{key:0},[u.items?(r(),c("li",a({key:0,id:l.id+"_"+m,class:[t.cx("submenuLabel"),u.class],role:"none",ref_for:!0},t.ptm("submenuLabel")),[w(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:u},function(){return[v(C(i.label(u)),1)]})],16,Se)):d("",!0),(r(!0),c(y,null,D(u.items,function(f,S){return r(),c(y,{key:f.label+m+"_"+S},[i.visible(f)&&!f.separator?(r(),b(L,{key:0,id:l.id+"_"+m+"_"+S,item:f,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(f)&&f.separator?(r(),c("li",a({key:"separator"+m+S,class:[t.cx("separator"),u.class],style:f.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):d("",!0)],64)}),128))],64)):i.visible(u)&&u.separator?(r(),c("li",a({key:"separator"+m.toString(),class:[t.cx("separator"),u.class],style:u.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):(r(),b(L,{key:i.label(u)+m.toString(),id:l.id+"_"+m,item:u,index:m,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Ce),t.$slots.end?(r(),c("div",a({key:1,class:t.cx("end")},t.ptm("end")),[w(t.$slots,"end")],16)):d("",!0)],16,we)):d("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}Z.render=Pe;var Ee=function(e){var n=e.dt;return`
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
`)},Me={root:function(e){var n=e.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Ae=H.extend({name:"tag",theme:Ee,classes:Me}),Te={name:"BaseTag",extends:z,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Ae,provide:function(){return{$pcTag:this,$parentInstance:this}}},K={name:"Tag",extends:Te,inheritAttrs:!1};function ze(t,e,n,s,l,i){return r(),c("span",a({class:t.cx("root")},t.ptmi("root")),[t.$slots.icon?(r(),b(A(t.$slots.icon),a({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(r(),c("span",a({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):d("",!0),t.value!=null||t.$slots.default?w(t.$slots,"default",{key:2},function(){return[o("span",a({class:t.cx("label")},t.ptm("label")),C(t.value),17)]}):d("",!0)],16)}K.render=ze;const Ke={class:"card flex justify-end"},_e={__name:"Menu",setup(t){const e=F(),n=F([{label:"Options",items:[{label:"Profile",icon:"pi pi-user",command:()=>{E.get(route("profile.edit"))}},{label:"myOrders",icon:"pi pi-box",command:()=>{E.get(route("orders"))}},{label:"Logout",icon:"pi pi-sign-out",command:()=>{E.post(route("logout"))}}]}]),s=l=>{e.value.toggle(l)};return(l,i)=>(r(),c("div",Ke,[o("i",{onClick:s,class:"pi pi-cog cursor-pointer"}),p(h(Z),{class:"customMenu",ref_key:"menu",ref:e,id:"overlay_menu",model:n.value,popup:!0},null,8,["model"])]))}},Be={class:"space-y-3"},De={class:"flex justify-between items-center"},Fe={class:"capitalize text-secondary"},Ve={class:"grid grid-cols-1 gap-2 text-cente max-w-md mx-auto"},Re={class:"p-2 rounded-md text-textPrimary bg-secondaryAlt space-y-4"},He={class:"flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer"},Ne={class:""},je={__name:"AssignmentSpace",setup(t){return(e,n)=>{var s;return r(),c("div",Be,[o("div",De,[o("p",Fe,[n[0]||(n[0]=o("i",{class:"pi pi-user"},null,-1)),v(" "+C(((s=e.$page.props.auth.user)==null?void 0:s.name)??"login bro!! "),1)]),p(_e)]),n[7]||(n[7]=N('<div class="p-10"><p class="text-center text-xl"><span class="text-primary font-bold">bro</span>writers.com </p><p class="text-xs text-center text-secondary">since 2025</p></div><p class="text-center text-xs">&quot;Don&#39;t stress over the writing. Let us handle it.&quot;</p><p class="text-center"><i class="pi pi-bolt text-primary"></i></p>',3)),o("div",Ve,[o("div",Re,[p(h(j),{href:e.route("assignment")},{default:k(()=>n[1]||(n[1]=[o("div",{class:"flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer"},[o("i",{class:"pi pi-book text-primary"}),o("div",{class:""},[v("assignment writing "),o("p",{class:"text-xs text-end font-semibold text-secondary"},"only ₹5/page")]),o("i",{class:"pi pi-angle-right text-secondary"})],-1)])),_:1},8,["href"]),o("div",He,[n[4]||(n[4]=o("i",{class:"pi pi-book text-primary"},null,-1)),o("div",Ne,[n[2]||(n[2]=v("record writing ")),p(h(K),{severity:"secondary",class:"text-xs",style:{color:"#E2B714"},value:"New"}),n[3]||(n[3]=o("p",{class:"text-xs text-end font-semibold text-secondary"},"only ₹5/page",-1))]),n[5]||(n[5]=o("i",{class:"pi pi-angle-right text-secondary"},null,-1))]),n[6]||(n[6]=o("div",{class:"flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer"},[o("i",{class:"pi pi-book text-primary"}),o("div",null,[v("observation writing "),o("p",{class:"text-xs text-end font-semibold text-secondary"},"only ₹5/page")]),o("i",{class:"pi pi-angle-right text-secondary"})],-1))])])])}}},Ue={class:"space-y-3"},Ze={class:"text-center"},We={__name:"RecordSpace",setup(t){return(e,n)=>(r(),c("div",Ue,[o("div",Ze,[p(h(j),{href:e.route("orders")},{default:k(()=>[p(h(K),{value:"Show  My Orders ",icon:"pi pi-box",severity:"secondary",class:"text-lg",style:{color:"#e2b714"}})]),_:1},8,["href"])]),n[0]||(n[0]=N('<div class=""><div class="bg-secondaryAl flex justify-between gap-3 p-3 text-secondary"><div><p class="text-xs"><strong>browriters.com</strong><p class="text-xs">- now in Banglore</p><p class="text-xs">- support@browriters.com</p></p></div><div class="space-x-4"><i class="pi pi-facebook cursor-pointer hover:text-textPrimary"></i><i class="pi pi-telegram"></i><i class="pi pi-instagram"></i><i class="pi pi-youtube"></i><i class="pi pi-twitter"></i></div></div></div>',1))]))}},Ge={__name:"Home",setup(t){return(e,n)=>(r(),b(re,null,{default:k(()=>[p(h(ne),{title:"home"}),p(je),p(We)]),_:1}))}};export{Ge as default};
