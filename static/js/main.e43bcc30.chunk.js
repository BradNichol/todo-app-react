(this.webpackJsonptodo_app_frontend=this.webpackJsonptodo_app_frontend||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(12),r=a.n(c),l=(a(104),a(83)),i=a(39),u=(a(105),a(148)),m=a(150),d=a(151),s=a(145),p=a(152),f=a(78),E=a.n(f);var k=function(e){var t=Object(s.a)({root:{backgroundColor:"#2b71c2"},taskNotification:{marginLeft:"auto"}})();return o.a.createElement("header",{className:"container-fluid"},o.a.createElement("nav",null,o.a.createElement(u.a,{position:"fixed",className:t.root},o.a.createElement(m.a,null,"GET SH*T DONE",o.a.createElement(d.a,{className:t.taskNotification},o.a.createElement(p.a,{badgeContent:e.taskCount,color:"secondary"},o.a.createElement(E.a,null))))),o.a.createElement(m.a,null)))};a(110);var v=function(){return fetch("https://quotes.rest/qod?language=en").then((function(e){return e.json()})).then((function(e){var t=e.contents.quotes[0];document.getElementById("quote").innerText='"'.concat(t.quote,'"'),document.getElementById("author").innerText=" - ".concat(t.author)})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col mt-4"},o.a.createElement("div",{className:"quoteBox"},o.a.createElement("p",{id:"quote"}),o.a.createElement("p",{id:"author"}))))};a(111);var b=function(e){return o.a.createElement("div",{className:"row mt-4"},o.a.createElement("div",{className:"col"},o.a.createElement("h1",{className:"PeriodTitles"},e.title)))},g=(a(112),a(153)),h=a(154);var y=function(e){var t=Object(s.a)({root:{display:"flex",minWidth:"auto",backgroundColor:"#224982",marginTop:5},content:{margin:"auto"}})();return o.a.createElement("div",null,o.a.createElement(g.a,{className:t.root,boxShadow:3},o.a.createElement(h.a,{className:t.content},o.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",onClick:function(){e.markCompleteFunc(e.id)}}),!1===e.completed?e.text:o.a.createElement("del",null,e.text))))},N=a(79),w=a(162),O=a(155),j=a(80),D=a.n(j),C=a(163),T=a(81),x=a(14),B=a(160),F=a(161),q=a(165),S=a(164),A=a(159),I=a(156),M=function(e){var t=Object(s.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:Object(N.a)({backgroundColor:"#ffffff",padding:e.spacing(2,4,3),width:"auto"},e.breakpoints.up("lg"),{width:"50%"}),fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},modalForm:{padding:10},modalButton:{marginTop:40}}})),a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],l=c[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)(new Date),E=Object(i.a)(f,2),k=E[0],v=E[1],b=Object(n.useState)(""),g=Object(i.a)(b,2),h=g[0],y=g[1],j=t("");return o.a.createElement("div",null,o.a.createElement(O.a,{size:"large",color:"primary","aria-label":"add",className:j.fab,onClick:function(){return l(!0)}},o.a.createElement(D.a,null)),o.a.createElement(w.a,{open:r,className:j.modal,onClose:function(){return l(!1)}},o.a.createElement("div",{className:j.paper},o.a.createElement("h3",null,"Add A Task"),o.a.createElement("form",null,o.a.createElement(I.a,{className:j.modalForm},o.a.createElement(C.a,{id:"task",label:"Task",value:d,onChange:function(e){return p(e.target.value)}}),o.a.createElement(S.a,{id:"task-type"},"Task Type"),o.a.createElement(F.a,{labelId:"task-type",id:"task-type-select",value:h,onChange:function(e){return y(e.target.value)}},o.a.createElement(q.a,{value:"Work"},"Work"),o.a.createElement(q.a,{value:"Personal"},"Personal")),o.a.createElement(x.a,{utils:T.a},o.a.createElement(B.a,{value:k,label:"Due Date",onChange:function(e){return v(e)}})),o.a.createElement(A.a,{className:j.modalButton,variant:"contained",color:"primary",onClick:function(){e.addNewTaskFunc(d,h,k),p(""),y(),v(new Date),l(!1)}},"Add Task"))))))},W=a(82);var _=function(){var e=Object(n.useState)([{id:1,task:"Organise a meeting",type:"work",dueDate:"2020-03-04",completed:!1},{id:2,task:"Quarantine",type:"work",dueDate:"2020-03-04",completed:!1},{id:3,task:"Buy milk",type:"personal",dueDate:"2020-03-04",completed:!1},{id:4,task:"go for a run",type:"personal",dueDate:"2020-03-05",completed:!1}]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=function(e){var t=a.map((function(t){return t.id===e&&(t.completed?t.completed=!1:t.completed=!0),t}));c(t)},u=Object(W.a)(new Date,"dd/MM/yyyy");return o.a.createElement("div",{className:"App"},o.a.createElement(k,{taskCount:function(){var e=0;return a.forEach((function(t){t.completed||t.dueDate!==u||e++})),e}()}),o.a.createElement("main",{className:"container"},o.a.createElement(v,null),o.a.createElement(b,{title:"TODAY"}),a.map((function(e){if(e.dueDate===u)return o.a.createElement(y,{key:e.id,id:e.id,text:e.task,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:r})})),o.a.createElement(b,{title:"FUTURE"}),a.map((function(e){if(e.dueDate>u)return o.a.createElement(y,{key:e.id,id:e.id,text:e.task,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:r})})),o.a.createElement(M,{addNewTaskFunc:function(e,t,n){var o={id:1e3*Math.random(),task:e,type:t,dueDate:Object(W.a)(n,"dd/MM/yyyy"),completed:!1},r=[].concat(Object(l.a)(a),[o]);c(r)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a(113)}},[[99,1,2]]]);
//# sourceMappingURL=main.e43bcc30.chunk.js.map