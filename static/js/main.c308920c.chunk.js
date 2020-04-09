(this.webpackJsonptodo_app_frontend=this.webpackJsonptodo_app_frontend||[]).push([[0],{108:function(e,t,a){e.exports=a(122)},113:function(e,t,a){},114:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(13),r=a.n(c),l=(a(113),a(44)),i=a(93),u=a(36),m=(a(114),a(168)),s=a(170),d=a(123),p=a(165),f=a(171),E=a(87),k=a.n(E);var b=function(e){var t=Object(p.a)((function(e){return{root:{display:"flex",backgroundColor:"#2b71c2"},toolbar:Object(l.a)({},e.breakpoints.up("lg"),{width:"50%",margin:"auto"}),taskNotification:{marginLeft:"auto"}}}))();return o.a.createElement("header",{className:"container-fluid"},o.a.createElement("nav",null,o.a.createElement(m.a,{position:"fixed",className:t.root},o.a.createElement(s.a,{className:t.toolbar},"GET SH*T DONE",o.a.createElement(d.a,{className:t.taskNotification},o.a.createElement(f.a,{badgeContent:e.taskCount,color:"secondary"},o.a.createElement(k.a,null))))),o.a.createElement(s.a,null)))},y=(a(119),a(186)),g=a(172),v=a(173),h=a(88),j=a.n(h);var O=function(){fetch("https://quotes.rest/qod?language=en").then((function(e){return e.json()})).then((function(e){var t=e.contents.quotes[0];document.getElementById("quote").innerText='"'.concat(t.quote,'"'),document.getElementById("author").innerText=" - ".concat(t.author)}));var e=Object(p.a)((function(){return{expansionPanel:{backgroundColor:"#2071C2",boxShadow:"none"},expansionPanelSummary:{borderBottom:"1px solid #224982"}}}))();return o.a.createElement(y.a,{className:e.expansionPanel},o.a.createElement(g.a,{className:e.expansionPanelSummary,expandIcon:o.a.createElement(j.a,null)},"Quote of the day"),o.a.createElement(v.a,null,o.a.createElement("div",{className:"quoteBox"},o.a.createElement("p",{id:"quote"}),o.a.createElement("p",{id:"author"}))))};a(120);var N=function(e){return o.a.createElement("div",{className:"row mt-4"},o.a.createElement("div",{className:"col"},o.a.createElement("h1",{className:"PeriodTitles"},e.title)))},w=(a(121),a(174)),C=a(175),T=a(185),x=a(89),D=a.n(x);var F=function(e){var t=Object(p.a)({root:{display:"flex",backgroundColor:"#224982",marginTop:5},content:{margin:"auto",color:"white"},typeTab:{width:10,backgroundColor:{personal:"green",work:"yellow"}[e.type]}})();return o.a.createElement("div",null,o.a.createElement(w.a,{className:t.root},o.a.createElement("div",{className:t.typeTab},"\xa0"),o.a.createElement(T.a,{color:"default",onClick:function(){e.markCompleteFunc(e.id)}}),o.a.createElement(C.a,{className:t.content},!1===e.completed?e.text:o.a.createElement("del",null,e.text)),o.a.createElement(d.a,{onClick:function(){e.deleteTaskFunc(e.id)}},o.a.createElement(D.a,null))))},S=a(126),B=a(176),q=a(90),I=a.n(q),P=a(187),A=a(91),M=a(17),_=a(183),W=a(184),H=a(191),J=a(190),Q=a(181),U=a(177),z=function(e){var t=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:Object(l.a)({backgroundColor:"#ffffff",padding:e.spacing(2,4,3),width:"auto"},e.breakpoints.up("lg"),{width:"50%"}),fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},modalForm:{padding:10},modalButton:{marginTop:40}}})),a=Object(n.useState)(!1),c=Object(u.a)(a,2),r=c[0],i=c[1],m=Object(n.useState)(""),s=Object(u.a)(m,2),d=s[0],f=s[1],E=Object(n.useState)(new Date),k=Object(u.a)(E,2),b=k[0],y=k[1],g=Object(n.useState)(""),v=Object(u.a)(g,2),h=v[0],j=v[1],O=t("");return o.a.createElement("div",null,o.a.createElement(B.a,{size:"large",color:"primary","aria-label":"add",className:O.fab,onClick:function(){return i(!0)}},o.a.createElement(I.a,null)),o.a.createElement(S.a,{open:r,className:O.modal,onClose:function(){return i(!1)}},o.a.createElement("div",{className:O.paper},o.a.createElement("h3",null,"Add A Task"),o.a.createElement("form",null,o.a.createElement(U.a,{className:O.modalForm},o.a.createElement(P.a,{id:"task",label:"Task",value:d,onChange:function(e){return f(e.target.value)}}),o.a.createElement(J.a,{id:"task-type"},"Task Type"),o.a.createElement(W.a,{labelId:"task-type",id:"task-type-select",value:h,onChange:function(e){return j(e.target.value)}},o.a.createElement(H.a,{value:"work"},"Work"),o.a.createElement(H.a,{value:"personal"},"Personal")),o.a.createElement(M.a,{utils:A.a},o.a.createElement(_.a,{value:b,label:"Due Date",onChange:function(e){return y(e)}})),o.a.createElement(Q.a,{className:O.modalButton,variant:"contained",color:"primary",onClick:function(){e.addNewTaskFunc(d,h,b),f(""),j(),y(new Date),i(!1)}},"Add Task"))))))},G=a(92),L=a(188),R=a(182);var Y=function(){var e=Object(n.useState)([{id:1,task:"Organise a meeting",type:"work",dueDate:"2020-03-04",completed:!1},{id:2,task:"Quarantine",type:"work",dueDate:"2020-03-04",completed:!1},{id:3,task:"Buy milk",type:"personal",dueDate:"2020-03-04",completed:!1},{id:4,task:"go for a run",type:"personal",dueDate:"2020-03-05",completed:!1}]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),m=Object(u.a)(r,2),s=m[0],d=m[1],f=Object(n.useState)(""),E=Object(u.a)(f,2),k=E[0],y=E[1],g=function(e){var t=a.map((function(t){return t.id===e&&(t.completed?t.completed=!1:(y("Task completed"),d(!0),t.completed=!0)),t}));c(t)},v=function(e){var t=a.filter((function(t){return t.id!==e}));y("Task deleted"),d(!0),c(t)},h=Object(G.a)(new Date,"dd/MM/yyyy"),j=Object(p.a)((function(e){return{snackbar:Object(l.a)({color:"green"},e.breakpoints.down("xs"),{bottom:90}),content:{display:"flex",justifyContent:"center",backgroundColor:"black"}}}))();return o.a.createElement("div",{className:"App"},o.a.createElement(b,{taskCount:function(){var e=0;return a.forEach((function(t){t.completed||t.dueDate!==h||e++})),e}()}),o.a.createElement("main",{className:"container"},o.a.createElement(O,null),o.a.createElement(N,{title:"TODAY"}),a.map((function(e){if(e.dueDate===h)return o.a.createElement(F,{key:e.id,id:e.id,text:e.task,type:e.type,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:g,deleteTaskFunc:v})})),o.a.createElement(N,{title:"FUTURE"}),a.map((function(e){if(e.dueDate>h)return o.a.createElement(F,{key:e.id,id:e.id,text:e.task,type:e.type,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:g,deleteTaskFunc:v})})),o.a.createElement(z,{addNewTaskFunc:function(e,t,n){var o={id:1e3*Math.random(),task:e,type:t,dueDate:Object(G.a)(n,"dd/MM/yyyy"),completed:!1},r=[].concat(Object(i.a)(a),[o]);y("".concat(o.type," task created")),d(!0),c(r)}}),o.a.createElement(L.a,{className:j.snackbar,open:s,autoHideDuration:2e3,onClose:function(){return d(!1)}},o.a.createElement(R.a,{className:j.content,message:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,2]]]);
//# sourceMappingURL=main.c308920c.chunk.js.map