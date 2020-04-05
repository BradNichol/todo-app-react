(this.webpackJsonptodo_app_frontend=this.webpackJsonptodo_app_frontend||[]).push([[0],{81:function(e,t,a){e.exports=a(95)},86:function(e,t,a){},87:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),l=(a(86),a(66)),i=a(33),m=(a(87),a(127)),u=a(129),s=a(130),d=a(124),p=a(131),f=a(63),E=a.n(f);var k=function(e){var t=Object(d.a)({root:{backgroundColor:"#2b71c2"},taskNotification:{marginLeft:"auto"}})();return c.a.createElement("header",{className:"container-fluid"},c.a.createElement("nav",null,c.a.createElement(m.a,{position:"fixed",className:t.root},c.a.createElement(u.a,null,"GET SH*T DONE",c.a.createElement(s.a,{className:t.taskNotification},c.a.createElement(p.a,{badgeContent:e.taskCount,color:"secondary"},c.a.createElement(E.a,null))))),c.a.createElement(u.a,null)))};a(92);var v=function(){return fetch("https://quotes.rest/qod?language=en").then((function(e){return e.json()})).then((function(e){var t=e.contents.quotes[0];document.getElementById("quote").innerText='"'.concat(t.quote,'"'),document.getElementById("author").innerText=" - ".concat(t.author)})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col mt-4"},c.a.createElement("div",{className:"quoteBox"},c.a.createElement("p",{id:"quote"}),c.a.createElement("p",{id:"author"}))))};a(93);var h=function(e){return c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"PeriodTitles"},e.title)))};a(94);var b=function(e){return c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card shadow-sm task"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",onClick:function(){e.markCompleteFunc(e.id)}})),c.a.createElement("div",{className:"col-10"},!1===e.completed?e.text:c.a.createElement("del",null,e.text)))))))},g=a(138),N=a(132),y=a(64),O=a.n(y),w=a(139),C=a(65),D=a(11),j=a(136),T=a(137),x=a(141),q=a(140),B=a(135),S=function(e){var t=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:"#ffffff",padding:e.spacing(2,4,3),width:"80%"},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),a=Object(n.useState)(!1),r=Object(i.a)(a,2),o=r[0],l=r[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),s=u[0],p=u[1],f=Object(n.useState)(),E=Object(i.a)(f,2),k=E[0],v=E[1],h=Object(n.useState)(""),b=Object(i.a)(h,2),y=b[0],S=b[1],A=t("");return c.a.createElement("div",null,c.a.createElement(N.a,{size:"large",color:"primary","aria-label":"add",className:A.fab,onClick:function(){return l(!0)}},c.a.createElement(O.a,null)),c.a.createElement(g.a,{open:o,className:A.modal,onClose:function(){return l(!1)}},c.a.createElement("div",{className:A.paper},c.a.createElement("form",null,c.a.createElement("h3",null,"Add A Task"),c.a.createElement(w.a,{id:"task",label:"Task",value:s,onChange:function(e){return p(e.target.value)}}),c.a.createElement(q.a,{id:"task-type"},"Task Type"),c.a.createElement(T.a,{labelId:"task-type",id:"task-type-select",value:y,onChange:function(e){return S(e.target.value)}},c.a.createElement(x.a,{value:"Work"},"Work"),c.a.createElement(x.a,{value:"Personal"},"Personal")),c.a.createElement(D.a,{utils:C.a},c.a.createElement(j.a,{value:k,label:"Due Date",onChange:function(e){return v(e)}})),c.a.createElement(B.a,{variant:"contained",color:"primary",onClick:function(){return e.addNewTaskFunc(s,y,k)}},"Add Task")))))};var A=function(){var e=Object(n.useState)([{id:1,task:"Organise a meeting",type:"work",dueDate:"2020-03-04",completed:!1},{id:2,task:"Quarantine",type:"work",dueDate:"2020-03-04",completed:!1},{id:3,task:"Buy milk",type:"personal",dueDate:"2020-03-04",completed:!1},{id:4,task:"go for a run",type:"personal",dueDate:"2020-03-05",completed:!1}]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=function(e){var t=a.map((function(t){return t.id===e&&(t.completed?t.completed=!1:t.completed=!0),t}));r(t)};return c.a.createElement("div",{className:"App"},c.a.createElement(k,{taskCount:function(){var e=0;return a.forEach((function(t){t.completed||"2020-03-04"!==t.dueDate||e++})),e}()}),c.a.createElement("main",{className:"container"},c.a.createElement(v,null),c.a.createElement(h,{title:"TODAY"}),a.map((function(e){if("2020-03-04"===e.dueDate)return c.a.createElement(b,{key:e.id,id:e.id,text:e.task,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:o})})),c.a.createElement(h,{title:"TOMORROW"}),a.map((function(e){if("2020-03-05"===e.dueDate)return c.a.createElement(b,{key:e.id,id:e.id,text:e.task,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:o})})),c.a.createElement(S,{addNewTaskFunc:function(e,t,n){var c={id:1e3*Math.random(),task:e,type:t,dueDate:n,completed:!1},o=[].concat(Object(l.a)(a),[c]);r(o)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.34d253fe.chunk.js.map