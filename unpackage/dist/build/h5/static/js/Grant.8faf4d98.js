(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Grant"],{2444:function(t,e,r){"use strict";r.r(e);var n=r("8901"),i=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},8901:function(t,e,r){"use strict";r("99af"),r("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"Grant",data:function(){return{redirect_uri:"",appId:""}},onLoad:function(t){var e=JSON.parse(t.query);console.log(e.redirect_uri,"query.redirect_uri"),this.redirect_uri=e.redirect_uri,this.appId=e.appId},created:function(){this.redirect_uri=encodeURIComponent(this.redirect_uri),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(this.appId,"&response_type=code&scope=snsapi_userinfo&connect_redirect=1&redirect_uri=").concat(this.redirect_uri,"&state=1#wechat_redirect")},mounted:function(){},methods:{}};e.default=n},"977b":function(t,e,r){var n=r("f354");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("bec67234",n,!0,{sourceMap:!1,shadowMode:!1})},a37b:function(t,e,r){"use strict";var n=r("977b"),i=r.n(n);i.a},a72f:function(t,e,r){"use strict";r.r(e);var n=r("fa21"),i=r("2444");for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);r("a37b");var c,o=r("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"926d469a",null,!1,n["a"],c);e["default"]=u.exports},f354:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,".van-loading[data-v-926d469a]{text-align:center;line-height:100vh}",""]),t.exports=e},fa21:function(t,e,r){"use strict";var n,i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},a=[];r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}))}}]);