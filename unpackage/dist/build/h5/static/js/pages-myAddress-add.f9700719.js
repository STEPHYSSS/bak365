(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myAddress-add"],{"0744":function(e,t,a){"use strict";var i=a("cee8"),r=a.n(i);r.a},"197a":function(e,t,a){"use strict";var i=a("ee27");a("c975"),a("ac1f"),a("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var r=i(a("c964")),s=a("0182"),o=i(a("eaeb")),n=i(a("5ccd")),c=a("0b79"),l=i(a("3a68")),d={name:"index",components:{adCell:n.default},data:function(){return{mainStyle:getApp().globalData.mainStyle,areaInfo:{},currentDeliveryType:"",specificArea:!1,logisticsArea:!1,isAdd:!1,form:{Sex:0,Name:"",Mobile:"",Address:"",House:""},location:{},areaList:o.default,disabledLoad:!1,specificAreaHead:!1,cityPickerValueDefault:[0,0,1],edotAddress:this.$Route.query.areaInfo,publicName:"",publicMobile:""}},created:function(){if(this.getWxConfig(),this.DeliveryType=this.currentDeliveryType.indexOf("2")>-1?2:3,this.$Route.query.areaInfo&&(this.areaInfo=this.edotAddress),"{}"!==JSON.stringify(this.areaInfo)){this.form=JSON.parse(JSON.stringify(this.areaInfo)),this.form.Defaults="1"===this.form.Defaults;var e=this.form.Sex.replace(/\s*/g,"");this.form.Sex="先生"===e?"0":"1",this.location={latitude:this.areaInfo.Latitude,longitude:this.areaInfo.Longitude}}else this.location=this.$store.state.currentLocation;var t=this;window.addEventListener("message",(function(e){var a=e.data;a&&"locationPicker"==a.module&&(t.$refs.specificArea&&t.$refs.specificArea.close(),t.$nextTick((function(){t.specificArea=!1,t.specificAreaHead=!1,t.$set(t.form,"Address",a.poiname),t.$set(t.form,"Latitude",a.latlng.lat),t.$set(t.form,"Longitude",a.latlng.lng)})))}),!1)},methods:{getWxConfig:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.vipCard)({Action:"GetJSSDK",Url:window.location.href},"UProdOpera");case 3:a=t.sent,i=a.Data,l.default.config({debug:!1,appId:i.SDK.appId,timestamp:i.SDK.timestamp,nonceStr:i.SDK.noncestr,signature:i.SDK.signature,jsApiList:["getLocation","openAddress","scanQRCode"]}),l.default.ready((function(t){var a=e;l.default.getLocation({type:"gcj02",success:function(e){a.location.latitude=e.latitude,a.location.longitude=e.longitude,this.$store.commit("SET_CURRENT_LOCATION",this.location)},cancel:function(e){this.$toast.fail(e)}}),l.default.error((function(e){this.$toast.fail(e),console.log("调用微信接口获取当前位置失败",e)}))})),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},getWxAddress:function(){var e=this;l.default.openAddress({success:function(t){e.form.Name=t.userName,e.form.Mobile=t.telNumber},cancel:function(e){this.$toast.fail(e)}})},clickGo:function(){this.specificAreaHead?(this.specificArea=!1,this.specificAreaHead=!1,this.$refs.specificArea.close()):this.$Router.push({path:"/pages/myAddress/myAddress",query:{flag:"towaimai"}})},switchChange:function(e){this.form.Defaults=e.detail.value},tenxButton:function(){this.specificArea=!0,this.$refs.specificArea.open(),this.specificAreaHead=!0},confirmArea:function(e){this.logisticsArea=!1,this.$refs.logisticsArea.close(),this.form.Address=e.label,this.form.Type=2,this.form.Province=e.labelArr[0],this.form.City=e.labelArr[1],this.form.District=e.labelArr[2]},saveArea:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.form.Address){t.next=3;break}return e.$toast("选择地址"),t.abrupt("return");case 3:if(e.form.House){t.next=6;break}return e.$toast("填写门牌号"),t.abrupt("return");case 6:if(e.form.Name){t.next=9;break}return e.$toast("填写联系人"),t.abrupt("return");case 9:if(e.form.Mobile){t.next=14;break}return e.$toast("填写手机号"),t.abrupt("return");case 14:if((0,c.checkMobile)(e.form.Mobile)){t.next=17;break}return e.$toast("手机号格式错误"),t.abrupt("return");case 17:return e.disabledLoad=!0,e.form.Type=e.form.Type?e.form.Type:1,t.prev=19,a={Action:"SetAddress"},Object.assign(a,e.form),a.Defaults=!0===a.Defaults?1:0,t.next=25,(0,s.vipCard)(a,"UMemberOpera");case 25:i=t.sent,i.Data,e.$toast("新增成功"),e.$Router.push({path:"/pages/myAddress/myAddress",query:{flag:"towaimai"}}),e.disabledLoad=!1,t.next=35;break;case 32:t.prev=32,t.t0=t["catch"](19),e.disabledLoad=!1;case 35:case"end":return t.stop()}}),t,null,[[19,32]])})))()},bindAddress:function(e){var t=this;t.$refs.specificArea&&t.$refs.specificArea.close(),t.$nextTick((function(){t.specificArea=!1,t.specificAreaHead=!1,t.$set(t.form,"Address",e.address),t.$set(t.form,"Latitude",e.location.lat),t.$set(t.form,"Longitude",e.location.lng)}))}}};t.default=d},"37bd":function(e,t,a){"use strict";a.r(t);var i=a("782e"),r=a("6e74");for(var s in r)"default"!==s&&function(e){a.d(t,e,(function(){return r[e]}))}(s);a("0744");var o,n=a("f0c5"),c=Object(n["a"])(r["default"],i["b"],i["c"],!1,null,"519b43ce",null,!1,i["a"],o);t["default"]=c.exports},"6e74":function(e,t,a){"use strict";a.r(t);var i=a("197a"),r=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=r.a},"782e":function(e,t,a){"use strict";var i={uniNavBar:a("b8ee").default,uniPopup:a("ea5b").default,simpleAddress:a("e3f0").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("uni-nav-bar",{attrs:{fixed:!0,"left-icon":"back",title:e.specificAreaHead?"选择收货地址":"收货地址","status-bar":!0,shadow:!1},on:{clickLeft:function(t){arguments[0]=t=e.$handleEvent(t),e.clickGo.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"main",class:e.mainStyle},[a("div",{staticClass:"setADcell"},[a("adCell",{attrs:{text:"收货人",showArrow:"false"}},[a("div",{staticClass:"widthBox"},[a("v-uni-input",{attrs:{type:"text",placeholder:"请填写收货人的姓名"},model:{value:e.form.Name,callback:function(t){e.$set(e.form,"Name",t)},expression:"form.Name"}}),a("v-uni-text",{staticClass:"iconfont icon-tongxunlu",staticStyle:{position:"absolute",right:"30px",top:"15px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getWxAddress.apply(void 0,arguments)}}})],1)]),a("adCell",{attrs:{text:"性别",showArrow:"false"}},[a("div",{staticClass:"widthBox"},[a("v-uni-view",{staticClass:"radio-group"},[a("v-uni-view",{staticClass:"radio",class:{checked:!e.form.Sex},staticStyle:{"margin-right":"10rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.form.Sex=0}}},[e._v("先生")]),a("v-uni-view",{staticClass:"radio",class:{checked:e.form.Sex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.form.Sex=1}}},[e._v("女士")])],1)],1)]),a("adCell",{attrs:{text:"手机号",showArrow:"false"}},[a("div",{staticClass:"widthBox"},[a("v-uni-input",{attrs:{type:"text",placeholder:"请填写收货人手机号码"},model:{value:e.form.Mobile,callback:function(t){e.$set(e.form,"Mobile",t)},expression:"form.Mobile"}})],1)]),a("adCell",{attrs:{text:"收货地址",showArrow:"false"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tenxButton.apply(void 0,arguments)}}},[a("div",{staticClass:"widthBox"},[a("span",[e._v(e._s(e.form.Address?e.form.Address:"点击选择"))])])]),a("adCell",{attrs:{text:"门牌号",showArrow:"false"}},[a("div",{staticClass:"widthBox"},[a("v-uni-input",{attrs:{type:"text",placeholder:"详细地址，例：15号楼5层301室"},model:{value:e.form.House,callback:function(t){e.$set(e.form,"House",t)},expression:"form.House"}})],1)]),a("adCell",{attrs:{text:"设置为默认地址",showArrow:"false"}},[a("div",{staticClass:"widthBox",staticStyle:{width:"40%"}},[a("v-uni-switch",{staticStyle:{position:"absolute",top:"7px",left:"33%",transform:"scale(0.8)"},attrs:{checked:!0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.switchChange.apply(void 0,arguments)}},model:{value:e.form.Defaults,callback:function(t){e.$set(e.form,"Defaults",t)},expression:"form.Defaults"}})],1)])],1),a("div",{staticStyle:{"margin-top":"50px",padding:"0 20px"}},[a("v-uni-button",{staticStyle:{"background-color":"#ADB838",color:"#fff"},attrs:{type:"main",size:"large",disabled:e.disabledLoad},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveArea.apply(void 0,arguments)}}},[e._v("保存")])],1)]),a("uni-popup",{ref:"specificArea",staticClass:"confirm-area-popup",staticStyle:{"margin-top":"50px"}},[a("iframe",{staticStyle:{"margin-top":"50px"},attrs:{id:"mapPage",width:"100%",height:"100%",frameborder:"0",src:"https://apis.map.qq.com/tools/locpicker?search=1&type=1&policy=1&coord="+e.location.latitude+","+e.location.longitude+"&key=IB5BZ-HF53W-5KLRH-R3VUL-35KO7-Y2BUT&referer=365商城管理"}})]),a("simple-address",{ref:"logisticsArea",attrs:{pickerValueDefault:e.cityPickerValueDefault,themeColor:"#007AFF"},on:{onConfirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmArea.apply(void 0,arguments)}}})],1)},s=[];a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}))},cee8:function(e,t,a){var i=a("daf0");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("23b1f7f3",i,!0,{sourceMap:!1,shadowMode:!1})},daf0:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"[data-v-519b43ce] .uni-popup__wrapper-box{width:100%;height:100%}\n/* 覆盖样式修改颜色 */[data-v-519b43ce] uni-switch .uni-switch-input.uni-switch-input-checked{background-color:#adb838!important;border-color:#adb838!important}.widthBox[data-v-519b43ce]{width:68%}.widthBox uni-input[data-v-519b43ce]{font-size:12px}.widthBox .radio-group[data-v-519b43ce]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.widthBox .radio-group .radio[data-v-519b43ce]{padding:%?10?% %?30?%;border-radius:%?6?%;border:1px solid #ccc;margin-right:6px}.widthBox .radio-group .radio.checked[data-v-519b43ce]{background-color:#adb838;color:#fff;border:1px solid #adb838}",""]),e.exports=t}}]);