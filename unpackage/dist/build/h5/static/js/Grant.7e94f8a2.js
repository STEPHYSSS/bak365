(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Grant"],{"0932":function(e,t,r){var n=r("275e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("7dad6b06",n,!0,{sourceMap:!1,shadowMode:!1})},"275e":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,".van-loading[data-v-be84d028]{text-align:center;line-height:100vh}",""]),e.exports=t},4086:function(e,t,r){"use strict";var n=r("ee27");r("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("96cf");var i=n(r("c964")),o=r("0182"),c=(n(r("df5b")),n(r("758e"))),a={name:"Grant",data:function(){return{redirect_uri:"",appId:"",UserMACPhone:c.default.get("UserMACPhone")}},onLoad:function(e){var t=JSON.parse(e.query);this.redirect_uri=t.redirect_uri,this.appId=t.appId},created:function(){"localhost"==window.location.hostname?window.location.href=this.redirect_uri+"&code=11111":this.UserMACPhone?uni.navigateTo({url:"/pages/homePage/homePage"}):this.appId?(this.redirect_uri=encodeURIComponent(this.redirect_uri),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(this.appId,"&response_type=code&scope=snsapi_userinfo&connect_redirect=1&redirect_uri=").concat(this.redirect_uri,"&state=1#wechat_redirect")):this.AppIdoAuth()},mounted:function(){},methods:{AppIdoAuth:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.vipCard)({},"GetPlatform");case 3:r=t.sent,n=r.Data,e.redirect_uri=encodeURIComponent(e.redirect_uri),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(n.AppID,"&response_type=code&scope=snsapi_userinfo&connect_redirect=1&redirect_uri=").concat(e.redirect_uri,"&state=1#wechat_redirect"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}};t.default=a},"567b":function(e,t,r){"use strict";r.r(t);var n=r("4086"),i=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"5ca5":function(e,t,r){"use strict";r.r(t);var n=r("f184"),i=r("567b");for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);r("914c");var c,a=r("f0c5"),u=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"be84d028",null,!1,n["a"],c);t["default"]=u.exports},"914c":function(e,t,r){"use strict";var n=r("0932"),i=r.n(n);i.a},f184:function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},o=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}))}}]);