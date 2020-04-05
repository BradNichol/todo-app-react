(this.webpackJsonptodo_app_frontend=this.webpackJsonptodo_app_frontend||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(12),r=a.n(o),l=(a(103),a(83)),i=a(39),m=(a(104),a(146)),u=a(148),s=a(149),d=a(143),p=a(150),E=a(78),f=a.n(E);var k=function(e){var t=Object(d.a)({root:{backgroundColor:"#2b71c2"},taskNotification:{marginLeft:"auto"}})();return c.a.createElement("header",{className:"container-fluid"},c.a.createElement("nav",null,c.a.createElement(m.a,{position:"fixed",className:t.root},c.a.createElement(u.a,null,"GET SH*T DONE",c.a.createElement(s.a,{className:t.taskNotification},c.a.createElement(p.a,{badgeContent:e.taskCount,color:"secondary"},c.a.createElement(f.a,null))))),c.a.createElement(u.a,null)))};a(109);var v=function(){return fetch("https://quotes.rest/qod?language=en").then((function(e){return e.json()})).then((function(e){var t=e.contents.quotes[0];document.getElementById("quote").innerText='"'.concat(t.quote,'"'),document.getElementById("author").innerText=" - ".concat(t.author)})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col mt-4"},c.a.createElement("div",{className:"quoteBox"},c.a.createElement("p",{id:"quote"}),c.a.createElement("p",{id:"author"}))))};a(110);var b=function(e){return c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"PeriodTitles"},e.title)))};a(111);var g=function(e){return c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card shadow-sm task"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",onClick:function(){e.markCompleteFunc(e.id)}})),c.a.createElement("div",{className:"col-10"},!1===e.completed?e.text:c.a.createElement("del",null,e.text)))))))},h=a(79),y=a(158),N=a(151),w=a(80),D=a.n(w),O=a(159),j=a(81),C=a(14),T=a(156),x=a(157),B=a(161),F=a(160),q=a(155),S=a(152),A=function(e){var t=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:Object(h.a)({backgroundColor:"#ffffff",padding:e.spacing(2,4,3),width:"auto"},e.breakpoints.up("lg"),{width:"50%"}),fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},modalForm:{padding:10},modalButton:{marginTop:40}}})),a=Object(n.useState)(!1),o=Object(i.a)(a,2),r=o[0],l=o[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),s=u[0],p=u[1],E=Object(n.useState)(new Date),f=Object(i.a)(E,2),k=f[0],v=f[1],b=Object(n.useState)(""),g=Object(i.a)(b,2),w=g[0],A=g[1],I=t("");return c.a.createElement("div",null,c.a.createElement(N.a,{size:"large",color:"primary","aria-label":"add",className:I.fab,onClick:function(){return l(!0)}},c.a.createElement(D.a,null)),c.a.createElement(y.a,{open:r,className:I.modal,onClose:function(){return l(!1)}},c.a.createElement("div",{className:I.paper},c.a.createElement("h3",null,"Add A Task"),c.a.createElement("form",null,c.a.createElement(S.a,{className:I.modalForm},c.a.createElement(O.a,{id:"task",label:"Task",value:s,onChange:function(e){return p(e.target.value)}}),c.a.createElement(F.a,{id:"task-type"},"Task Type"),c.a.createElement(x.a,{labelId:"task-type",id:"task-type-select",value:w,onChange:function(e){return A(e.target.value)}},c.a.createElement(B.a,{value:"Work"},"Work"),c.a.createElement(B.a,{value:"Personal"},"Personal")),c.a.createElement(C.a,{utils:j.a},c.a.createElement(T.a,{value:k,label:"Due Date",onChange:function(e){return v(e)}})),c.a.createElement(q.a,{className:I.modalButton,variant:"contained",color:"primary",onClick:function(){e.addNewTaskFunc(s,w,k),p(""),A(),v(new Date),l(!1)}},"Add Task"))))))},I=a(82);var M=function(){var e=Object(n.useState)([{id:1,task:"Organise a meeting",type:"work",dueDate:"2020-03-04",completed:!1},{id:2,task:"Quarantine",type:"work",dueDate:"2020-03-04",completed:!1},{id:3,task:"Buy milk",type:"personal",dueDate:"2020-03-04",completed:!1},{id:4,task:"go for a run",type:"personal",dueDate:"2020-03-05",completed:!1}]),t=Object(i.a)(e,2),a=t[0],o=t[1],r=function(e){var t=a.map((function(t){return t.id===e&&(t.completed?t.completed=!1:t.completed=!0),t}));o(t)},m=Object(I.a)(new Date,"dd/MM/yyyy");return c.a.createElement("div",{className:"App"},c.a.createElement(k,{taskCount:function(){var e=0;return a.forEach((function(t){t.completed||t.dueDate!==m||e++})),e}()}),c.a.createElement("main",{className:"container"},c.a.createElement(v,null),c.a.createElement(b,{title:"TODAY"}),a.map((function(e){if(e.dueDate===m)return c.a.createElement(g,{key:e.id,id:e.id,text:e.task,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:r})})),c.a.createElement(b,{title:"FUTURE"}),a.map((function(e){if(e.dueDate>m)return c.a.createElement(g,{key:e.id,id:e.id,text:e.task,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:r})})),c.a.createElement(A,{addNewTaskFunc:function(e,t,n){var c={id:1e3*Math.random(),task:e,type:t,dueDate:Object(I.a)(n,"dd/MM/yyyy"),completed:!1},r=[].concat(Object(l.a)(a),[c]);o(r)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,a){e.exports=a(112)}},[[98,1,2]]]);
//# sourceMappingURL=main.2ad92e39.chunk.js.map