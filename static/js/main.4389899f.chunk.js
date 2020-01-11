(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){e.exports=n(255)},254:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),l=n.n(o),c=n(22),s=n(117),i=n(104),u=n(105),d=n(118),m=n(106),p=n(119),f=n(258),E=n(30),y=a.a.createContext(),h=a.a.createContext(),b=function(e){var t=e.user;return a.a.createElement("td",null,t.name)},O=function(e){var t=e.todo;return a.a.createElement("tr",null,a.a.createElement("td",null,t.title),a.a.createElement(b,{user:t.user}),t.completed?a.a.createElement("td",{className:"positive"},a.a.createElement("i",{className:"icon checkmark"}),"Approved"):a.a.createElement("td",{className:"negative"},a.a.createElement("i",{className:"icon close"}),"In procces"),a.a.createElement("td",null,a.a.createElement(y.Consumer,null,function(e){return a.a.createElement(f.a,{icon:!0},a.a.createElement(E.a,{name:"user delete",onClick:function(){return e.deleteUser(t.id)}}))})))},v=function(){return a.a.createElement("table",{className:"ui red table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"TODO item"),a.a.createElement("th",null,"The name of the user"),a.a.createElement("th",null,"Completed"),a.a.createElement("th",null,"Delete"))),a.a.createElement("tbody",null,a.a.createElement(y.Consumer,null,function(e){return e.todos.map(function(e){return a.a.createElement(O,{todo:e,key:e.id})})})))},S=k("https://jsonplaceholder.typicode.com/todos"),j=k("https://jsonplaceholder.typicode.com/users");function k(e){return fetch(e).then(function(e){return e.json()})}var C=function(){return a.a.createElement(h.Consumer,null,function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{type:"button",onClick:function(){return e.switcher("byTitle")}},"By User!"),a.a.createElement(f.a,{type:"button",onClick:function(){return e.switcher("byUser")}},"By Title!"),a.a.createElement(f.a,{type:"button",onClick:function(){return e.switcher("byStatus")}},"By Status!"),a.a.createElement(f.a,{type:"button",onClick:function(){return e.refresher()}},"Refresh!"))})},D=(n(254),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).loadData=function(){n.setState({isLoading:!0,error:!1,initialized:!0}),Promise.all([S,j]).then(function(e){var t=Object(s.a)(e,2),r=t[0],a=t[1];n.setState({preparedTodos:r.map(function(e){return Object(c.a)({},e,{user:a.find(function(t){return e.userId===t.id})})})})}).catch(function(){n.setState({error:!0,isLoading:!1})}).finally(function(){n.setState({isLoading:!1,initialized:!0})})},n.switcher=function(e){var t=n.state.todosOnDisplay||n.state.preparedTodos;switch(e){case"byUser":n.setState(function(e){return Object(c.a)({},e,{currentSorter:"byUser",todosOnDisplay:t.sort(function(e,t){return e.user.name.localeCompare(t.user.name)})})});break;case"byTitle":n.setState(function(e){return Object(c.a)({},e,{currentSorter:"byTitle",todosOnDisplay:t.sort(function(e,t){return e.title.localeCompare(t.title)})})});break;case"byStatus":n.setState(function(e){return Object(c.a)({},e,{currentSorter:"byTitle",todosOnDisplay:t.sort(function(e,t){return e.completed-t.completed})})});break;default:n.setState(function(e){return Object(c.a)({},e,{todosOnDisplay:t})})}},n.refresher=function(){n.setState(function(e){return Object(c.a)({},e,{todosOnDisplay:e.preparedTodos})})},n.deleteUser=function(e){var t=n.state.todosOnDisplay||n.state.preparedTodos;n.setState(function(n){return Object(c.a)({},n,{todosOnDisplay:t.filter(function(t){return t.id!==e})})})},n.state={isLoading:!1,error:!1,initialized:!1,currentSorter:"byUser",preparedTodos:null,todosOnDisplay:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.error,r=e.preparedTodos,o=e.todosOnDisplay||r,l=this.deleteUser,c=this.switcher,s=this.refresher;return t?a.a.createElement("p",null,"loading..."):n?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Error occurred!!!"),a.a.createElement(f.a,{type:"button",onClick:this.loadData},"Try Again!")):r?a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Dynamic list of todos"),a.a.createElement(h.Provider,{value:{switcher:c,refresher:s}},a.a.createElement(C,null)),a.a.createElement(y.Provider,{value:{todos:o,deleteUser:l}},a.a.createElement(v,null))):a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"No users and todos yet!"),a.a.createElement(f.a,{type:"button",onClick:this.loadData,color:"green"},"Load"))}}]),t}(a.a.PureComponent));D.contextType=y;var T=D;l.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.4389899f.chunk.js.map