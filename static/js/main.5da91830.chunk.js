(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(6),c=a.n(r),o=(a(17),a(3)),m=a(7),s=(a(19),a(4));function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/about"},"About"))),e.searchbar?l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")):"")))}i.defaultprop={title:"MY APP"};var u=function(){return l.a.createElement("div",{className:"container my-3"},l.a.createElement("h2",null,"Todos List"))},d=function(e){return l.a.createElement("div",{className:"container my-4"},0===e.todos.length?"No todos to display":e.todos.map(function(t){return l.a.createElement("div",{key:t.sno},l.a.createElement("h4",{className:"my-3"},t.title),l.a.createElement("p",{className:"my-3"},t.desc),l.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(){e.ondelete(t)}},"Delete"),l.a.createElement("hr",null))}))},b={position:"relative",width:"100%",top:"36vh",border:"3px solid red"},E=function(){return l.a.createElement("footer",{className:"bg-dark text-light py-2",style:b},l.a.createElement("p",{className:"text-center"},"Copyright \xa9 by Parm sohi"))},p=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(""),s=Object(o.a)(m,2),i=s[0],u=s[1];return l.a.createElement("div",{className:"container my-3"},l.a.createElement("h2",null,"Add todo"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),r&&i?(e.addtodo(r,i),c(""),u("")):alert("Title or desc can't be blank")}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"title",className:"form-label"},"Todo title"),l.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)},className:"form-control",id:"title"})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"title",className:"form-label"},"Description"),l.a.createElement("input",{type:"text",value:i,onChange:function(e){return u(e.target.value)},className:"form-control",id:"Desc"})),l.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success"},"ADD")))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{className:"my-3"},"This todo web aplication is created by parmsohi"),l.a.createElement("h3",{className:"my-3"},"Contact"),l.a.createElement("p",null,"E-mail: parmsohi1@gmail.com"))},v=a(0);var f=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(n.useState)(e),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)(function(){localStorage.setItem("todos",JSON.stringify(r))},[r]),l.a.createElement(s.a,null,l.a.createElement(i,{title:"My Todos List",searchbar:!1}),l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/about",element:l.a.createElement(g,null)}),l.a.createElement(v.a,{path:"/",element:l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{addtodo:function(e,t){var a={sno:0===r.length?1:r[r.length-1].sno+1,title:e,desc:t};return c([].concat(Object(m.a)(r),[a])),console.log("Add todo run",a)}}),l.a.createElement(u,null),l.a.createElement(d,{todos:r,ondelete:function(e){console.log("Delete Executed",e),c(r.filter(function(t){return t!==e}))}}))})),l.a.createElement(E,null))},h=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,22)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null))),h()},8:function(e,t,a){e.exports=a(21)}},[[8,3,2]]]);
//# sourceMappingURL=main.5da91830.chunk.js.map