(function(t){function e(e){for(var o,i,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"36526dcd"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var o=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");o["default"].use(r["a"]);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("vue-page-transition",[n("router-view")],1)],1),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:["fas","clock"]}})],1),n("router-link",{attrs:{to:"/list"}},[n("font-awesome-icon",{attrs:{icon:["fas","list-ul"]}})],1),n("router-link",{attrs:{to:"/settings"}},[n("font-awesome-icon",{attrs:{icon:["fas","bell"]}})],1)],1)],1)},i=[],s=n("2877"),u={},c=Object(s["a"])(u,a,i,!1,null,null,null),l=c.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var d=n("8c4f"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"home"}},[o("div",{staticClass:"row d-flex"},[o("div",{staticClass:"col"},[o("h1",[t._v(t._s(t.currentText))]),o("radial-progress-bar",{staticClass:"m-auto",attrs:{diameter:300,"completed-steps":t.timeleft,"total-steps":t.totalSteps,startColor:t.startColor,stopColor:t.stopColor}},[o("h2",[t._v(t._s(t.timetext))])]),o("div",{staticClass:"col mr-5"},[1!=t.status?o("b-btn",{attrs:{variant:"transparent"},on:{click:t.start}},[o("img",{attrs:{src:n("5830")}})]):t._e(),1==t.status?o("b-btn",{attrs:{variant:"transparent"},on:{click:t.pause}},[o("img",{attrs:{src:n("ec7e")}})]):t._e(),t.current.length>0||t.todos.length>0?o("b-btn",{attrs:{variant:"transparent"},on:{click:function(e){return t.finish(!0)}}},[o("img",{attrs:{src:n("b2f3")}})]):t._e()],1)],1)])])},m=[],h=(n("99af"),n("4795"),{data:function(){return{status:0,timer:0,totalSteps:5,startColor:"#42adff",stopColor:"#4ce6b8"}},computed:{currentText:function(){return this.current.length>0?this.current:this.todos.length>0?"點擊開始":"沒有事項"},timetext:function(){var t=Math.floor(this.timeleft/60),e=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(e)},alarm:function(){return this.$store.getters.alarm},timeleft:function(){return this.$store.getters.timeleft},current:function(){return this.$store.getters.current},todos:function(){return this.$store.getters.todos}},methods:{start:function(){var t=this;2===this.status?(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<0&&t.finish(!1)}),1e3)):this.todos.length>0&&(this.$store.commit("start"),this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<0&&t.finish(!1)}),1e3))},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src="./alarms/"+this.alarm,e.play()}this.todos.length>0?this.start():alert("結束")},pause:function(){clearInterval(this.timer),this.status=2}}}),g=h,v=Object(s["a"])(g,p,m,!1,null,null,null),b=v.exports;o["default"].use(d["a"]);var w=[{path:"/",name:"Home",component:b,meta:{title:"番茄鐘",transition:"fade"}},{path:"/list",name:"List",component:function(){return n.e("about").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 | 清單",transition:"fade"}},{path:"/settings",name:"Settings",component:function(){return n.e("about").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定",transition:"fade"}},{path:"*",name:"NotFound",component:function(){return n.e("about").then(n.bind(null,"9703"))},meta:{title:"番茄鐘 | 404",transition:"fade"}}],k=new d["a"]({routes:w});k.afterEach((function(t,e){document.title=t.meta.title}));var y=k,j=(n("a434"),n("b0c0"),n("e25e"),n("2f62")),x=n("0e44");o["default"].use(j["a"]);var _=parseInt("1500"),O=parseInt("300"),C=new j["a"].Store({state:{todos:[],timeleft:parseInt("1500"),alarm:"alarm1.mp3",current:"",isBreak:!1},getters:{alarm:function(t){return t.alarm},todos:function(t){return t.todos},timeleft:function(t){return t.timeleft},current:function(t){return t.current},isBreak:function(t){return t.isBreak}},mutations:{selectAlarm:function(t,e){t.alarm=e},addTodo:function(t,e){t.todos.push({name:e,edit:!1,model:e})},dragTodo:function(t,e){t.todos=e},delTodo:function(t,e){t.todos.splice(e,1)},editTodo:function(t,e){t.todos[e].edit=!t.todos[e].edit},cancelTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].model=t.todos[e].name},saveTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].name=t.todos[e].model},start:function(t){t.isBreak?t.current="休息一下":t.isBreak||(t.current=t.todos[0].name,t.todos.splice(0,1))},countdown:function(t){t.timeleft--},finish:function(t){t.todos.length>0&&(t.isBreak=!t.isBreak),t.cuurent="",t.timeleft=t.isBreak?O:_}},actions:{},modules:{},plugins:[Object(x["a"])()]}),T=n("ecee"),$=n("ad3d"),B=n("310e"),P=n.n(B),S=(n("ecb2"),n("df2d"),n("531a")),A=n.n(S),E=n("c074"),I=n("3304"),M=n("0284"),N=n.n(M),F=n("5886"),L=(n("4413"),n("f0eb"));o["default"].use(F["a"]),o["default"].use(N.a,{id:"UA-168243644-1"}),o["default"].use(L["default"]),T["c"].add(E["b"],E["f"],E["j"],E["k"],E["h"],E["g"],E["e"],E["i"],E["c"],E["d"],E["a"]),o["default"].component("font-awesome-icon",$["a"]),o["default"].component("draggable",P.a),o["default"].component("RadialProgressBar",A.a),o["default"].use(I["a"]),o["default"].config.productionTip=!1,new o["default"]({router:y,store:C,render:function(t){return t(l)}}).$mount("#app")},5830:function(t,e,n){t.exports=n.p+"img/play.ac8a61ce.svg"},b2f3:function(t,e,n){t.exports=n.p+"img/next.c57b9345.svg"},df2d:function(t,e,n){},ec7e:function(t,e,n){t.exports=n.p+"img/pause.90b210fb.svg"}});
//# sourceMappingURL=app.5caf6201.js.map