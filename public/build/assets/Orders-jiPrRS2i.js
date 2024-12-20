import{o as n,e as d,b as s,F as u,r as x,t as o,f as r,a,w as p,u as m,i as f,D as c,c as _,Z as y}from"./app-D7epSZQy.js";import{_ as b}from"./PrimaryLayout-zA9gQekk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const O={class:"space-y-3"},g={class:"rounded-md bg-secondaryAlt p-2 space-y-2"},v={class:"flex items-center gap-2"},P={class:"grid text-center text-sm text-textPrimary h-20 w-36 place-content-center rounded-md border border-secondary p-1"},$={class:"w-full overflow-hidden p-1 text-sm text-secondary font-semibold"},k={class:"text-textPrimary font-normal"},w={class:"text-textPrimary font-normal"},B={class:"text-textPrimary font-normal"},N={__name:"LatestOrders",props:["latestOrders"],setup(l){return(i,t)=>(n(),d("div",O,[t[6]||(t[6]=s("p",{class:"font-semibold text-textPrimary"},"Orders",-1)),(n(!0),d(u,null,x(l.latestOrders,e=>(n(),d("div",g,[s("div",v,[s("div",P,[s("p",null,"#"+o(e.id),1),t[0]||(t[0]=s("p",null,"orderId",-1))]),s("div",$,[s("p",null,[t[1]||(t[1]=r("No books: ")),s("span",k,o(e.books.length),1)]),s("p",null,[t[2]||(t[2]=r("Total Cost:")),s("span",w,"₹"+o(e.amount),1)]),s("p",null,[t[3]||(t[3]=r("date: ")),s("span",B,o(e.date),1)]),t[4]||(t[4]=s("p",null,[r("order: "),s("span",{class:"text-green-700"},"confirmed")],-1))])]),a(m(f),{class:"w-full block bg-background p-2 text-center text-yellow-500",href:i.route("order",{order:e})},{default:p(()=>t[5]||(t[5]=[r("see more ")])),_:2},1032,["href"])]))),256))]))}},C={class:"space-y-3"},V={class:"rounded-md bg-secondaryAlt p-2 space-y-2"},h={class:"grid grid-cols-2 gap-1"},A={class:"p-1 text-sm overflow-hidden text-secondary font-semibold"},D={class:"text-textPrimary font-normal"},F={class:"text-textPrimary font-normal"},I={class:"text-textPrimary font-normal"},L=c({__name:"OldOrders",props:["oldOrders"],setup(l){return(i,t)=>(n(),d("div",C,[t[5]||(t[5]=s("p",{class:"font-semibold text-textPrimary"},"Previous Orders",-1)),(n(!0),d(u,null,x(l.oldOrders,e=>(n(),d("div",V,[s("div",h,[s("div",A,[s("p",null,[t[1]||(t[1]=r("orderId: ")),s("span",D,[t[0]||(t[0]=s("i",{class:"pi pi-box"},null,-1)),r(" "+o(e.id),1)])]),s("p",null,[t[2]||(t[2]=r("books: ")),s("span",F,o(e.books.length),1)]),s("p",null,[t[3]||(t[3]=r("date: ")),s("span",I,o(e.date),1)])]),a(m(f),{href:i.route("order",{order:e}),class:"border-l-4 text-yellow-500 border-secondary grid place-content-center p-1"},{default:p(()=>t[4]||(t[4]=[r("see")])),_:2},1032,["href"])])]))),256))]))}}),Z={__name:"Orders",props:["oldOrders","latestOrders"],setup(l){return(i,t)=>(n(),_(b,null,{default:p(()=>[a(m(y),{title:"orders"}),a(N,{"latest-orders":l.latestOrders},null,8,["latest-orders"]),a(L,{oldOrders:l.oldOrders},null,8,["oldOrders"])]),_:1}))}};export{Z as default};