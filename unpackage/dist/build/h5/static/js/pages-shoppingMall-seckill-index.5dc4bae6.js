(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shoppingMall-seckill-index"],{"030b":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{url:[String],width:{type:String,default:function(){return"80px"}},height:{type:String,default:function(){return"80px"}}},created:function(){},data:function(){return{dataIMg:this.url}},methods:{errorIMg:function(){this.dataIMg="/static/assets/img/defaultGood.png"},loadIMg:function(){}}};e.default=i},1304:function(t,e,a){"use strict";var i=a("e48c"),o=a.n(i);o.a},1433:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".goodBoxTwo[data-v-639514bf]{display:inline-block;margin-bottom:10px;border-radius:12px;background:#fff;overflow:hidden;\n  /*box-shadow: 1px 1px 1px #eee;*/box-shadow:1px 1px 3px #eee}.goodBoxTwo .progress-style[data-v-639514bf]{padding:0 8px}.goodBoxTwo .progress-style[data-v-639514bf] .uni-progress-bar,\n.goodBoxTwo .progress-style[data-v-639514bf] .uni-progress-inner-bar{border-radius:20px}.goodBoxTwo .addIconBtn[data-v-639514bf]{float:right}.goodBoxTwo .addIconBtn .van-button--mini[data-v-639514bf]{padding:0 5px}.goodBoxTwo .vanImage-style[data-v-639514bf]{position:relative}.goodBoxTwo .timer-style[data-v-639514bf]{position:absolute;height:%?62?%;line-height:%?62?%;width:100%;background:#fe5252;bottom:0;color:#fff;font-size:12px}.goodBoxTwo .timer-style .van-count-down[data-v-639514bf]{font-size:12px;color:#fff;line-height:30px}.goodBoxTwo .timer-style .timer-right[data-v-639514bf]{float:right;-webkit-transform:scale(.9);transform:scale(.9)}.goodBoxTwo .timer-style .timer-right[data-v-639514bf] .uni-countdown__number{width:15px}.goodBoxTwo .timer-style .timer-left[data-v-639514bf]{padding-left:5px}.goodBoxTwo .oneBoxTitle[data-v-639514bf]{color:#313131;font-size:14px;height:19px;overflow:hidden;margin:8px;word-wrap:break-word;overflow-wrap:break-word}.goodBoxTwo .oneBoxTitleSell[data-v-639514bf]{color:#969799;font-size:12px;word-wrap:break-word;overflow-wrap:break-word;overflow:hidden;margin:5px 0;margin-right:-8px;text-align:right;-webkit-transform:scale(.85);transform:scale(.85)}.goodBoxTwo .goodBoxInfo[data-v-639514bf]{margin-bottom:10px;background:#fff}.goodBoxTwo .oneBoxMoney[data-v-639514bf]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:5px 8px;color:#fe5252;font-size:14px}.goodBoxTwo .oneBoxMoney .addIcon[data-v-639514bf]{float:right;font-size:20px!important;cursor:pointer}",""]),t.exports=e},2781:function(t,e,a){"use strict";a.r(e);var i=a("c6fa"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"2ec1":function(t,e,a){"use strict";a.r(e);var i=a("7420"),o=a("3eb5");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);var r,s=a("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2d75904e",null,!1,i["a"],r);e["default"]=l.exports},"3eb5":function(t,e,a){"use strict";a.r(e);var i=a("030b"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"65c4":function(t,e,a){"use strict";var i={uniNavBar:a("cefd").default,aGoodBox:a("699c").default,aNodeData:a("df27").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seckill"},[t.loading?t._e():a("div",[a("uni-nav-bar",{attrs:{fixed:!0,"left-icon":"back",title:"秒杀活动","status-bar":!0,shadow:!1},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)}}}),a("div",{staticStyle:{padding:"8px"}},t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"seckill-goodsBox"},[a("a-good-box",{attrs:{itemData:e,imgHeight:t.imgHeight,seckill:!0},on:{goodBox:function(e){arguments[0]=e=t.$handleEvent(e),t.goodBox.apply(void 0,arguments)}}})],1)})),0),0===t.list.length?a("a-nodeData"):t._e()],1)])},n=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},"699c":function(t,e,a){"use strict";a.r(e);var i=a("87e8"),o=a("2781");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("7978");var r,s=a("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"639514bf",null,!1,i["a"],r);e["default"]=l.exports},7420:function(t,e,a){"use strict";var i,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{style:{width:t.width,height:t.height},attrs:{src:t.dataIMg}})])},n=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},7978:function(t,e,a){"use strict";var i=a("ca9d"),o=a.n(i);o.a},"7ef7":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Mixin=void 0;var i={props:{itemData:{type:Object,default:function(){return{}}},imgHeight:{type:String,default:"80px"},isShoppingCard:{type:Boolean,default:!1},isOrder:{type:Boolean,default:!1},isIntegral:{type:Boolean,default:!1},seckill:{type:Boolean,default:!1}},data:function(){return{list:[]}},methods:{goodBoxCoupon:function(t){this.$emit("goodBox",t)},addCart:function(){}}};e.Mixin=i},"833b":function(t,e,a){t.exports=a.p+"static/img/nodeData.e395053f.png"},"87e8":function(t,e,a){"use strict";var i={aUpImg:a("2ec1").default,uniCountdown:a("186a").default,uniIcons:a("6bf4").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["goodBoxTwo",t.mainStyle],style:{width:t.imgHeight},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.goodBoxCoupon(t.itemData)}}},[a("div",{staticClass:"vanImage-style"},[a("a-up-img",{key:t.itemData.Img,attrs:{url:t._f("setImgPrex")(t.itemData.Img),height:t.imgHeight,width:"100%"}}),t.seckill?a("div",{staticClass:"timer-style"},[a("span",{staticClass:"timer-left"},[t._v(t._s(t.startIS?"距结束":"距开始"))]),a("span",{staticClass:"timer-right"},[a("uni-countdown",{attrs:{color:"#FFFFFF","splitor-color":"#fff","background-color":"transparent",day:t.activeTimeMy.day,hour:t.activeTimeMy.hours,minute:t.activeTimeMy.minute,second:t.activeTimeMy.second},on:{timeup:function(e){arguments[0]=e=t.$handleEvent(e),t.finishTimer.apply(void 0,arguments)}}})],1)]):t._e()],1),a("div",{staticClass:"oneBoxTitle"},[t._v(t._s(t.seckill?t.itemData.PromName:t.itemData.Name))]),t.startIS?a("div",{staticClass:"progress-style"},[a("v-uni-progress",{attrs:{percent:t.setProgress(),activeColor:"#fe5252",active:!0,"stroke-width":"5"}})],1):t._e(),t.seckill&&t.startIS?a("div",{staticClass:"oneBoxTitleSell"},[t._v("已抢"+t._s(Number(t.itemData.StoreQty)-Number(t.itemData.SurplusQty))+"件")]):t._e(),t.seckill&&!t.startIS?a("div",{staticClass:"oneBoxTitleSell"},[t._v("总共"+t._s(t._f("setMoney")(t.itemData.StoreQty))+"件")]):t._e(),a("div",{staticClass:"oneBoxMoney"},[t.isIntegral?a("span",[t._v(t._s(t.itemData.Score)+"积分")]):t._e(),t.itemData.SalePrice>0&&t.isIntegral?a("span",[t._v("+")]):t._e(),t.itemData.SalePrice>0?a("div",{staticStyle:{display:"inline-block"}},[a("span",[t._v("¥")]),a("span",[t._v(t._s(t.itemData.SalePrice))]),t.itemData.OldPrice?a("div",{staticStyle:{"text-decoration":"line-through",color:"#969799","font-size":"8pt"}},[a("span",[t._v("¥")]),t._v(t._s(t.itemData.OldPrice))]):t._e()]):t._e(),a("span",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.addCart.apply(void 0,arguments)}}},[t.isIntegral||t.seckill?t._e():a("uni-icons",{staticClass:"addIcon",staticStyle:{color:"#fe5252"},attrs:{type:"plus"}})],1),t.seckill?a("div",{staticClass:"addIconBtn"},[a("v-uni-button",{attrs:{type:"main",size:"mini"}},[t._v(t._s(t.btnTitle))])],1):t._e()])])},n=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},"917c":function(t,e,a){"use strict";var i,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nodeData"},[i("div",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{width:"150px",height:"150px",margin:"auto"}},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:a("833b").replace(/^\./,""),alt:""}})],1),i("span",{staticClass:"stringVal"},[t._v(t._s(t.stringVal))])])])},n=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},a67a:function(t,e,a){var i=a("d7d1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("cc0709ce",i,!0,{sourceMap:!1,shadowMode:!1})},aa93:function(t,e,a){"use strict";a.r(e);var i=a("e3b6"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},acab:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".seckill .seckill-goodsBox[data-v-1742ec96]{display:inline-block}.seckill .seckill-goodsBox[data-v-1742ec96]:nth-child(2n + 1){margin-right:6px}",""]),t.exports=e},b79d:function(t,e,a){"use strict";a.r(e);var i=a("c81a"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},c6fa:function(t,e,a){"use strict";a("a9e3"),a("e25e"),a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("7ef7"),o={mixins:[i.Mixin],data:function(){return{mainColor:getApp().globalData.mainColor,mainStyle:getApp().globalData.mainStyle,stepperValue:"",timeCountDown:"",btnTitle:"马上抢",activeTimeMy:{},startIS:!1}},props:{},created:function(){this.itemData.StartDate&&this.seckill&&this.getTimeout()},methods:{addCart:function(){this.$emit("addCart")},finishTimer:function(){var t=this;setTimeout((function(){t.getTimeout()}),1e3)},getTimeout:function(t){var e=(new Date).getTime(),a=new Date(this.itemData.EndDate.replace(/-/g,"/")).getTime(),i=new Date(this.itemData.StartDate.replace(/-/g,"/")).getTime();this.startIS=!(i-e>=0)&&(a-e>0||"end");var o=this.startIS?a-e:i-e,n=o;this.activeTimeMy={day:parseInt(n/864e5),hours:parseInt(n%864e5/36e5),minute:parseInt(n%36e5/6e4),second:parseInt(n%6e4/1e3)},this.startIS?"end"===this.startIS?this.btnTitle="活动结束":this.btnTitle=" 立即抢购":this.btnTitle=" 活动未开始"},setProgress:function(){var t=100*(1-Number(this.itemData.SurplusQty)/Number(this.itemData.StoreQty));return t=Math.round(100*t)/100,t>=100?100:t}}};e.default=o},c81a:function(t,e,a){"use strict";var i=a("ee27");a("d3b7"),a("3ca3"),a("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var o=i(a("c964")),n=a("e4e4"),r={name:"",components:{},data:function(){return{list:[],loading:!0}},mounted:function(){this.$store.commit("SET_HISTORY_URL",{path:"/pages/shoppingMall/seckill/index"}),this.imgHeight=(uni.getSystemInfoSync().windowWidth-22)/2+"px",this.getlist()},methods:{getlist:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading(),e.prev=1,e.next=4,Promise.all([(0,n.vipCard)({Action:"GetPromotionList",Type:1},"UPromotionOpera")]);case 4:a=e.sent,t.list=a[0].Data.ProdList,t.loading=!1,e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()},goodBox:function(t){this.$Router.push({path:"/pages/shoppingMall/list/infoGood",query:{SID:t.SID,seckill:"true"}})},clickLeft:function(){this.$Router.push({path:"/pages/shoppingMall/index"})}}};e.default=r},ca9d:function(t,e,a){var i=a("1433");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("47c98030",i,!0,{sourceMap:!1,shadowMode:!1})},d7d1:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".nodeData-fa[data-v-0ff01966]{text-align:center}.nodeData[data-v-0ff01966]{text-align:center;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.stringVal[data-v-0ff01966]{display:inline-block;white-space:nowrap;font-size:15px;margin-top:10px;color:#777}",""]),t.exports=e},df27:function(t,e,a){"use strict";a.r(e);var i=a("917c"),o=a("aa93");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("eda8");var r,s=a("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"0ff01966",null,!1,i["a"],r);e["default"]=l.exports},e3b6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"index",props:{stringVal:{type:String,default:"暂无数据"}}};e.default=i},e48c:function(t,e,a){var i=a("acab");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("5e83c6b5",i,!0,{sourceMap:!1,shadowMode:!1})},eda8:function(t,e,a){"use strict";var i=a("a67a"),o=a.n(i);o.a},f28b:function(t,e,a){"use strict";a.r(e);var i=a("65c4"),o=a("b79d");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("1304");var r,s=a("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"1742ec96",null,!1,i["a"],r);e["default"]=l.exports}}]);