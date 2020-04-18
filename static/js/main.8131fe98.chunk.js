(this.webpackJsonptodo_app_frontend=this.webpackJsonptodo_app_frontend||[]).push([[0],{109:function(e,t,a){e.exports=a(123)},114:function(e,t,a){},115:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),c=a.n(r),l=(a(114),a(44)),i=a(94),s=a(36),u=(a(115),a(169)),d=a(171),m=a(124),p=a(166),f=a(172),k=a(88),b=a.n(k),E=a(86),g=a.n(E);var v=function(e){var t=Object(p.a)((function(e){return{root:{display:"flex",backgroundColor:"#2b71c2"},toolbar:Object(l.a)({},e.breakpoints.up("lg"),{width:"50%",margin:"auto"}),taskNotification:{marginLeft:"auto"}}}))();return o.a.createElement("header",null,o.a.createElement("nav",null,o.a.createElement(u.a,{position:"fixed",className:t.root},o.a.createElement(d.a,{className:t.toolbar},o.a.createElement("img",{src:g.a,width:"150"}),o.a.createElement(m.a,{className:t.taskNotification},o.a.createElement(f.a,{badgeContent:e.taskCount,color:"secondary"},o.a.createElement(b.a,null))))),o.a.createElement(d.a,null)))},h=(a(120),a(187)),y=a(173),w=a(174),j=a(89),O=a.n(j);var C=function(){fetch("https://quotes.rest/qod?language=en").then((function(e){return e.json()})).then((function(e){var t=e.contents.quotes[0];document.getElementById("quote").innerText='"'.concat(t.quote,'"'),document.getElementById("author").innerText=" - ".concat(t.author)}));var e=Object(p.a)((function(){return{expansionPanel:{backgroundColor:"#2071C2",boxShadow:"none"},expansionPanelSummary:{borderBottom:"1px solid #224982"}}}))();return o.a.createElement(h.a,{className:e.expansionPanel},o.a.createElement(y.a,{className:e.expansionPanelSummary,expandIcon:o.a.createElement(O.a,null)},"Quote of the day"),o.a.createElement(w.a,null,o.a.createElement("div",{className:"quoteBox"},o.a.createElement("p",{id:"quote"}),o.a.createElement("p",{id:"author"}))))};a(121);var N=function(e){return o.a.createElement("div",{className:"row mt-4"},o.a.createElement("div",{className:"col"},o.a.createElement("h1",{className:"PeriodTitles"},e.title)))},x=(a(122),a(175)),T=a(176),D=a(186),S=a(90),F=a.n(S);var A=function(e){var t=Object(p.a)({root:{display:"flex",backgroundColor:"#224982",marginTop:5},content:{margin:"auto",color:"white"},typeTab:{width:10,backgroundColor:{personal:"green",work:"yellow"}[e.type]}})();return o.a.createElement("div",null,o.a.createElement(x.a,{className:t.root},o.a.createElement("div",{className:t.typeTab},"\xa0"),o.a.createElement(D.a,{color:"default",onClick:function(){e.markCompleteFunc(e.id)}}),o.a.createElement(T.a,{className:t.content},!1===e.completed?e.text:o.a.createElement("del",null,e.text)),o.a.createElement(m.a,{onClick:function(){e.deleteTaskFunc(e.id)}},o.a.createElement(F.a,null))))},B=a(127),W=a(177),P=a(91),q=a.n(P),I=a(188),M=a(92),U=a(17),R=a(184),_=a(185),L=a(192),J=a(191),Q=a(182),z=a(178),G=function(e){var t=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:Object(l.a)({backgroundColor:"#ffffff",padding:e.spacing(2,4,3),width:"auto"},e.breakpoints.up("lg"),{width:"50%"}),fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},modalForm:{padding:10},modalButton:{marginTop:40}}})),a=Object(n.useState)(!1),r=Object(s.a)(a,2),c=r[0],i=r[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),m=d[0],f=d[1],k=Object(n.useState)(new Date),b=Object(s.a)(k,2),E=b[0],g=b[1],v=Object(n.useState)(""),h=Object(s.a)(v,2),y=h[0],w=h[1],j=t("");return o.a.createElement("div",null,o.a.createElement(W.a,{size:"large",color:"primary","aria-label":"add",className:j.fab,onClick:function(){return i(!0)}},o.a.createElement(q.a,null)),o.a.createElement(B.a,{open:c,className:j.modal,onClose:function(){return i(!1)}},o.a.createElement("div",{className:j.paper},o.a.createElement("h3",null,"Add A Task"),o.a.createElement("form",null,o.a.createElement(z.a,{className:j.modalForm},o.a.createElement(I.a,{id:"task",label:"Task",value:m,onChange:function(e){return f(e.target.value)}}),o.a.createElement(J.a,{id:"task-type"},"Task Type"),o.a.createElement(_.a,{labelId:"task-type",id:"task-type-select",value:y,onChange:function(e){return w(e.target.value)}},o.a.createElement(L.a,{value:"work"},"Work"),o.a.createElement(L.a,{value:"personal"},"Personal")),o.a.createElement(U.a,{utils:M.a},o.a.createElement(R.a,{value:E,label:"Due Date",onChange:function(e){return g(e)}})),o.a.createElement(Q.a,{className:j.modalButton,variant:"contained",color:"primary",onClick:function(){e.addNewTaskFunc(m,y,E),f(""),w(),g(new Date),i(!1)}},"Add Task"))))))},H=a(93),Y=a(189),$=a(183);var K=function(){var e=Object(n.useState)([{id:1,task:"Organise a meeting",type:"work",dueDate:"2020-03-04",completed:!1},{id:2,task:"Quarantine",type:"work",dueDate:"2020-03-04",completed:!1},{id:3,task:"Buy milk",type:"personal",dueDate:"2020-03-04",completed:!1},{id:4,task:"go for a run",type:"personal",dueDate:"2020-03-05",completed:!1}]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),u=Object(s.a)(c,2),d=u[0],m=u[1],f=Object(n.useState)(""),k=Object(s.a)(f,2),b=k[0],E=k[1],g=function(e){var t=a.map((function(t){return t.id===e&&(t.completed?t.completed=!1:(E("Task completed"),m(!0),t.completed=!0)),t}));r(t)},h=function(e){var t=a.filter((function(t){return t.id!==e}));E("Task deleted"),m(!0),r(t)},y=Object(H.a)(new Date,"dd/MM/yyyy"),w=Object(p.a)((function(e){return{snackbar:Object(l.a)({color:"green"},e.breakpoints.down("xs"),{bottom:90}),content:{display:"flex",justifyContent:"center",backgroundColor:"black"}}}))();return o.a.createElement("div",{className:"App"},o.a.createElement(v,{taskCount:function(){var e=0;return a.forEach((function(t){t.completed||t.dueDate!==y||e++})),e}()}),o.a.createElement("main",{className:"container"},o.a.createElement(C,null),o.a.createElement(N,{title:"TODAY"}),a.map((function(e){if(e.dueDate===y)return o.a.createElement(A,{key:e.id,id:e.id,text:e.task,type:e.type,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:g,deleteTaskFunc:h})})),o.a.createElement(N,{title:"FUTURE"}),a.map((function(e){if(e.dueDate>y)return o.a.createElement(A,{key:e.id,id:e.id,text:e.task,type:e.type,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:g,deleteTaskFunc:h})})),o.a.createElement(G,{addNewTaskFunc:function(e,t,n){var o={id:1e3*Math.random(),task:e,type:t,dueDate:Object(H.a)(n,"dd/MM/yyyy"),completed:!1},c=[].concat(Object(i.a)(a),[o]);E("".concat(o.type," task created")),m(!0),r(c)}}),o.a.createElement(Y.a,{className:w.snackbar,open:d,autoHideDuration:2e3,onClose:function(){return m(!1)}},o.a.createElement($.a,{className:w.content,message:b}))))},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(K,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo-app-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todo-app-react","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}()},86:function(e,t,a){e.exports=a.p+"static/media/GSD-03.96554b51.png"}},[[109,1,2]]]);
//# sourceMappingURL=main.8131fe98.chunk.js.map