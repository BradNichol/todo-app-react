(this.webpackJsonptodo_app_frontend=this.webpackJsonptodo_app_frontend||[]).push([[0],{34:function(e,t,a){e.exports=a(49)},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),l=a.n(o),r=(a(39),a(22)),i=(a(40),a(79)),m=a(74),s=a(75),d=a(71),u=a(76),p=a(28),f=a.n(p);var E=function(e){var t=Object(d.a)({root:{backgroundColor:"#2b71c2"},taskNotification:{marginLeft:"auto"}})();return c.a.createElement("header",{className:"container-fluid"},c.a.createElement("nav",null,c.a.createElement(i.a,{position:"fixed",className:t.root},c.a.createElement(m.a,null,"GET SH*T DONE",c.a.createElement(s.a,{className:t.taskNotification},c.a.createElement(u.a,{badgeContent:e.taskCount,color:"secondary"},c.a.createElement(f.a,null))))),c.a.createElement(m.a,null)))};a(46);var v=function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col mt-4"},c.a.createElement("div",{className:"quoteBox"},c.a.createElement("p",null,'"It does not matter how slowly you go as long as you do not stop."'))))};a(47);var k=function(e){return c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"PeriodTitles"},e.title)))};a(48);var N=function(e){return c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card shadow-sm task"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",onClick:function(){e.markCompleteFunc(e.id)}})),c.a.createElement("div",{className:"col-10"},!1===e.completed?e.text:c.a.createElement("del",null,e.text)))))))},g=a(78),h=a(77),b=a(29),w=a.n(b),y=function(){var e=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:"#ffffff",padding:e.spacing(2,4,3),width:"80%"},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),t=Object(n.useState)(!1),a=Object(r.a)(t,2),o=a[0],l=a[1],i=e();return c.a.createElement("div",null,c.a.createElement(h.a,{size:"large",color:"primary","aria-label":"add",className:i.fab,onClick:function(){l(!0)}},c.a.createElement(w.a,null)),c.a.createElement(g.a,{open:o,className:i.modal,onClose:function(){l(!1)}},c.a.createElement("div",{className:i.paper},"Test Modal")))};var D=function(){var e=Object(n.useState)([{id:1,task:"Organise a meeting",type:"work",dueDate:"2020-03-04",completed:!1},{id:2,task:"Quarantine",type:"work",dueDate:"2020-03-04",completed:!1},{id:3,task:"Buy milk",type:"personal",dueDate:"2020-03-04",completed:!1},{id:4,task:"go for a run",type:"personal",dueDate:"2020-03-05",completed:!1}]),t=Object(r.a)(e,2),a=t[0],o=t[1],l=function(e){var t=a.map((function(t){return t.id===e&&(t.completed?t.completed=!1:t.completed=!0),t}));o(t)};return c.a.createElement("div",{className:"App"},c.a.createElement(E,{taskCount:function(){var e=0;return a.forEach((function(t){t.completed||"2020-03-04"!==t.dueDate||e++})),e}()}),c.a.createElement("main",{className:"container"},c.a.createElement(v,null),c.a.createElement(k,{title:"TODAY"}),a.map((function(e){if("2020-03-04"===e.dueDate)return c.a.createElement(N,{key:e.id,id:e.id,text:e.task,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:l})})),c.a.createElement(k,{title:"TOMORROW"}),a.map((function(e){if("2020-03-05"===e.dueDate)return c.a.createElement(N,{key:e.id,id:e.id,text:e.task,completed:e.completed,dueDate:e.dueDate,markCompleteFunc:l})})),c.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.9f5a2a62.chunk.js.map