(this.webpackJsonptry5=this.webpackJsonptry5||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(5),l=a.n(c),o=(a(17),a(18),a(11)),i=a(6),r=a(2),d=a(9),m=a(10),u=a.n(m),v=r.d.model({text:r.d.string,done:r.d.optional(r.d.boolean,!1)}).actions((function(e){return{toggleTask:function(){e.done=!e.done},taskEdit:function(t){e.text=t}}})),k=r.d.model({tasks:r.d.array(v)}).actions((function(e){return{addTask:function(t){e.tasks.push({text:"".concat(t),done:!1})},doneTask:function(t){console.log("===================================="),console.log("".concat(t)),console.log("===================================="),e.tasks[t].toggleTask()},deleteTask:function(t){Object(r.b)(e.tasks[t])},editTask:function(t){e.tasks[t].taskEdit("I am editied")}}})).create({tasks:[]});Object(r.e)(k),k.tasks.push({text:"Grab coffee"}),k.tasks.push({text:"Grab tea"}),k.tasks.push({text:"Grab water"}),console.log("===================================="),console.log("===================================="),Object(d.a)("fire",k,{storage:u.a,jsonify:!1}).then((function(){return console.log(k)}));var E=k,h=Object(i.a)((function(e){return s.a.createElement("a",{className:"is-unselectable"},s.a.createElement("div",{className:"box my-3"},s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"level"},s.a.createElement("div",{className:"level-left"},s.a.createElement("div",{className:"level-item"},!0===e.done?s.a.createElement("a",{className:"media-content has-text-weight-semibold strike",onClick:function(){return E.doneTask(e.id)}},e.content):s.a.createElement("div",{className:"media-content has-text-weight-semibold",onClick:function(){return E.doneTask(e.id)}},e.content))),s.a.createElement("div",{className:"level-right"},s.a.createElement("div",{className:"level-item"},s.a.createElement("div",{className:"button is-success",onClick:function(){return E.editTask(e.id)}},"Edit")),s.a.createElement("div",{className:"level-item"},s.a.createElement("div",{className:"button is-danger",onClick:function(){return E.deleteTask(e.id)}},"Remove"))))))))})),f=Object(i.a)((function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"section"},s.a.createElement("div",{className:"container has-text-centered"},s.a.createElement("div",{className:"title"},"TaskList")),s.a.createElement("div",{className:"columns is-centered is-marginless my-6"},s.a.createElement("div",{className:"column is-4-desktop"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{class:"field has-addons has-addons-centered"},s.a.createElement("div",{class:"control"},s.a.createElement("input",{class:"input monty",type:"text",placeholder:"Add task",value:a,onChange:function(e){return c(e.target.value)}})),s.a.createElement("div",{class:"control"},s.a.createElement("a",{class:"button is-success has-text-weight-semibold",onClick:function(){null===a?alert("Please enter task first"):(E.addTask(a),c(null))}},"Add")),s.a.createElement("div",{class:"control"},s.a.createElement("a",{class:"button is-danger has-text-weight-semibold",onClick:function(){E.tasks.pop()}},"Remove")))))),s.a.createElement("div",{className:"columns is-centered is-marginless my-6"},s.a.createElement("div",{className:"column is-4-desktop"},E.tasks.map((function(e,t){return s.a.createElement(h,{key:t,id:t,content:e.text,done:e.done})}))))))}));var g=function(){return s.a.createElement("div",{className:"hero is-fullheight has-background-primary-light"},s.a.createElement(f,{store:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.e889ebc9.chunk.js.map