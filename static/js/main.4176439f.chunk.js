(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,n){e.exports=n(17)},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(2),s=n.n(o),i=(n(14),n(3)),c=n(4),l=n(6),m=n(5),u=n(7),g=(n(15),function(e){return r.a.createElement("div",{className:"Person"},r.a.createElement("p",{onClick:e.click},"I'm a person ",e.name," and I'm ",e.age," years old"),r.a.createElement("p",null,e.children),r.a.createElement("input",{type:"text",onChange:e.change,value:e.name}))}),h=(n(16),function(e){function a(){var e,n;Object(i.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={persons:[{name:"superpoya",age:26},{name:"KrBaio",age:28},{name:"Nebur",age:29},{name:"Putita",age:29}],otherState:"alguna mierda"},n.switchNameHandler=function(e){console.log("was clicked"),n.setState({persons:[{name:e,age:32},{name:"KrBaio3",age:32},{name:"Nebur",age:29},{name:"Putita",age:29}]})},n.nameChangedHandler=function(e){n.setState({persons:[{name:e.target.value,age:32},{name:"KrBaio3",age:32},{name:"Nebur",age:29},{name:"Putita",age:29}]})},n}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Hi! I 'm a React App"),r.a.createElement("p",null,"This is really working"),r.a.createElement("button",{style:{backgroundColor:"cadetblue",font:"inherit",border:"1px solid black",padding:"8px",borderRadius:"15px",cursor:"pointer"},onClick:function(){return e.switchNameHandler("megapoya")}},"Switch Name"),r.a.createElement(g,{name:this.state.persons[0].name,age:this.state.persons[0].age,click:this.switchNameHandler.bind(this,"ultra nabo"),change:this.nameChangedHandler},"My hobby is running"),r.a.createElement(g,{name:this.state.persons[1].name,age:this.state.persons[1].age}),r.a.createElement(g,{name:this.state.persons[2].name,age:this.state.persons[2].age}),r.a.createElement(g,{name:this.state.persons[3].name,age:this.state.persons[3].age}))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.4176439f.chunk.js.map