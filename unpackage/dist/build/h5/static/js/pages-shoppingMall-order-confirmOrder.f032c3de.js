(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shoppingMall-order-confirmOrder"],{"1fb8":function(e,t,r){"use strict";var a={uniNavBar:r("cefd").default,aNodeData:r("df27").default,aGoodLineBox:r("9ec2").default,aBottomSubmit:r("6761").default,uniPopup:r("6900").default,uniIcons:r("6bf4").default,aReceiveAddress:r("01ff").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"confirm-order-style",class:e.mainStyle},[a("uni-nav-bar",{attrs:{fixed:!0,"left-icon":"back",title:"确认订单","status-bar":!0,shadow:!1},on:{clickLeft:function(t){arguments[0]=t=e.$handleEvent(t),e.clickLeft.apply(void 0,arguments)}}}),e.loading||0!==e.prodList.length?e._e():a("a-nodeData",{attrs:{stringVal:"获取数据失败"}}),e.prodList.length>0?a("div",[e.$Route.query.isIntegral?e._e():a("div",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.radioChange.apply(void 0,arguments)}}},[a("div",{staticClass:"order-area"},[a("div",{staticClass:"order-area-icon"},[a("v-uni-image",{attrs:{src:"/static/assets/img/weizhi.png",alt:!0}})],1),e.currentArea&&"{}"!==JSON.stringify(e.currentArea)?a("div",{staticStyle:{flex:"1"}},[a("div",[a("span",[e._v(e._s(e.currentArea.Name)+e._s(e._f("setSex2")(e.currentArea.Sex)))]),a("span",{staticClass:"order-area-phone"},[e._v(e._s(e.currentArea.Mobile?e.currentArea.Mobile:e.currentArea.Tel))])]),a("div",{staticClass:"order-area-location"},[e._v(e._s(e.currentArea.Address)+" "+e._s(e.currentArea.House))])]):a("div",{staticStyle:{flex:"1",margin:"auto","font-size":"14px",color:"#909090"}},[e._v("选择"+e._s(2===e.radioModes?"收货":"取货")+"地址")])])]),e.$Route.query.isIntegral?a("adCell",{attrs:{text:"门店自取",showArrow:"false"}}):e._e(),1===e.radioModes?a("div",{staticClass:"setADcell"},[a("adCell",{attrs:{text:"姓名",showArrow:"false"}},[a("v-uni-input",{attrs:{type:"text",placeholder:"请输入收件名字"},model:{value:e.name_user,callback:function(t){e.name_user=t},expression:"name_user"}}),a("v-uni-text",{staticClass:"iconfont icon-tongxunlu",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getAddress.apply(void 0,arguments)}}})],1),a("adCell",{attrs:{text:"手机号码",showArrow:"false"}},[a("v-uni-input",{attrs:{type:"text",placeholder:"请输入手机号码"},model:{value:e.phone_user,callback:function(t){e.phone_user=t},expression:"phone_user"}})],1)],1):e._e(),!e.prodList[0].DeliveryType||e.prodList[0].DeliveryType.indexOf("3")>-1&&2===e.radioModes?e._e():a("adCell",{attrs:{text:1===e.radioModes?"选择自取时间":"选择收货时间",showArrow:"false"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickDataTime.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"customView"},[e._v(e._s(e.UserTime))])],1),e.TicketList.length>0?a("adCell",{attrs:{text:e.UserTicketName},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickUserTicketName.apply(void 0,arguments)}}}):e._e(),e.DiscountList.length>0?a("adCell",{attrs:{text:e.UserDiscountName},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickUserDiscount.apply(void 0,arguments)}}}):e._e(),a("div",{staticClass:"setADcell"},[a("adCell",{attrs:{text:"备注留言",showArrow:"false",showBottomLine:"false"}},[a("v-uni-input",{attrs:{type:"text",placeholder:"请输入留言"},model:{value:e.UserRemarks,callback:function(t){e.UserRemarks=t},expression:"UserRemarks"}})],1)],1),a("div",{staticClass:"good_card_box"},e._l(e.prodList,(function(t,r){return a("div",{key:r,staticStyle:{"margin-bottom":"10px"}},[a("a-good-lineBox",{attrs:{itemData:t,isOrder:!0,isIntegral:!!e.$Route.query.isIntegral}})],1)})),0),a("adCell",{attrs:{text:"商品总价格",showArrow:"false",showBottomLine:"false"}},[a("span",[e._v("¥"+e._s(e.ProdTotal))])]),2===e.radioModes?a("adCell",{attrs:{text:"运费",showArrow:"false",showBottomLine:"false"}},[a("span",[e._v(e._s("0"==e.freight?"免运费":"¥"+e.freight))])]):e._e(),a("adCell",{attrs:{showArrow:"false",showBottomLine:"false"}},[e._v("方案已优惠："),a("span",{staticClass:"total-style__color"},[e._v("¥"+e._s(e.DiscPrice))])]),a("adCell",{attrs:{showArrow:"false",showBottomLine:"false"}},[e._v("电子券优惠："),a("span",{staticClass:"total-style__color"},[e._v("¥"+e._s(e.TicketPrice))])]),a("div",{staticClass:"total-style"},[a("span",[e._v("小计："),a("span",{staticClass:"total-style__color"},[a("span",[e._v("￥"+e._s(e.total))])])])]),a("div",{staticClass:"radio-group-play"},[e.$Route.query.isIntegral&&e.allData.CardInfo?a("div",{staticStyle:{"padding-bottom":"4px"}},[e._v("当前卡积分："+e._s(e.allData.CardInfo.Score))]):e._e(),a("v-uni-view",{staticClass:"payStyle"},[e._v("支付方式")]),a("v-uni-radio-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioPayChange.apply(void 0,arguments)}}},[e.allData.SalePriceTotal&&e.$Route.query.isIntegral||!e.$Route.query.isIntegral?a("div",[e.allData.hasOwnProperty("CardInfo")?a("div",{staticClass:"radio-group-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.PayTypeClick("1")}}},[a("div",[a("img",{staticClass:"wechat",attrs:{slot:"right-icon",src:r("9998")},slot:"right-icon"}),a("span",{staticClass:"custom-title"},[e._v("卡支付（余额:"+e._s(e.CardInfo.Balance)+"）")])]),a("div",{staticStyle:{flex:"1","text-align":"right"}},[Number(e.CardInfo.Balance)>e.totalCurrent?a("v-uni-radio",{attrs:{slot:"right-icon",value:"1",checked:"1"==e.radioPayType},slot:"right-icon"}):a("span",{staticClass:"summaryNum",staticStyle:{color:"#777"}},[e._v("余额不足")])],1)]):e._e(),e.$Route.query.isIntegral&&!e.allData.CardInfo?e._e():a("div",{staticClass:"radio-group-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.PayTypeClick("2")}}},[a("div",[a("img",{staticClass:"wechat",attrs:{src:r("7931")}}),a("span",{staticClass:"custom-title"},[e._v("微信支付")])]),a("v-uni-radio",{staticStyle:{flex:"1","text-align":"right"},attrs:{slot:"right-icon",value:"2",checked:"2"==e.radioPayType},slot:"right-icon"})],1)]):e._e()])],1),a("a-bottomSubmit",{attrs:{isOrder:!0,allMoney:e.totalCurrent,isType:e.radioModes,ziquSumMoney:e.total,scoreTatal:e.totalCurrentScore,cardInfo:e.allData.CardInfo,isIntegral:e.$Route.query.isIntegral},on:{submitMoney:function(t){arguments[0]=t=e.$handleEvent(t),e.submitMoney.apply(void 0,arguments)}}})],1):e._e(),a("div",{staticClass:"changeAreaStyle"},[a("uni-popup",{ref:"showAreaList",attrs:{type:"bottom"},model:{value:e.showAreaList,callback:function(t){e.showAreaList=t},expression:"showAreaList"}},[a("div",{staticClass:"confirm-order-popup"},[a("div",{staticClass:"top"},[a("span",{staticClass:"cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$refs.showAreaList.close()}}},[e._v("取消")]),a("span",[e._v("选择地址")])]),a("v-uni-radio-group",{ref:"checkboxAreaRef",staticClass:"bottom-area",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeGroup.apply(void 0,arguments)}}},e._l(e.areaList,(function(t,r){return a("div",{key:r,staticClass:"bottom-area__box",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.changeArea(t,r)}}},[a("v-uni-radio",{staticClass:"checkbox-my",attrs:{value:t.SID,checked:e.showAreaList==t.SID}}),a("div",{staticClass:"bottom-area__info"},[a("div",[e._v(e._s(t.Address)+" "+e._s(t.House))]),a("div",{staticClass:"bottom-area__phone"},[e._v(e._s(t.Name)),t.Sex?a("span",[e._v(e._s(e._f("setSex2")(t.Sex)))]):e._e(),e._v(""),a("span",[e._v(e._s(t.Mobile?t.Mobile:t.Tel))])])]),2===e.radioModes?a("span",{staticClass:"icon iconfont icon-bianji bottom-area__icon",on:{click:function(r){r.stopPropagation(),arguments[0]=r=e.$handleEvent(r),e.clickEdit(t)}}}):e._e()],1)})),0),2===e.radioModes?a("div",{staticClass:"bottom-area__add",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.areaSet.apply(void 0,arguments)}}},[a("uni-icons",{staticClass:"colorStyle",staticStyle:{"vertical-align":"middle","font-size":"18px","margin-right":"6px"},attrs:{type:"plus"}}),a("span",{staticStyle:{"vertical-align":"middle"}},[e._v("新增收货地址")])],1):e._e()],1)])],1),a("uni-popup",{ref:"addEditArea",staticClass:"confirm-area-popup",attrs:{position:"bottom"},model:{value:e.addEditArea,callback:function(t){e.addEditArea=t},expression:"addEditArea"}},[e.addEditArea?a("a-receive-address",{attrs:{radioModes:e.radioModes,areaInfo:e.areaInfo,currentDeliveryType:e.currentDeliveryType},on:{clickGo:function(t){arguments[0]=t=e.$handleEvent(t),e.clickGo.apply(void 0,arguments)},saveArea:function(t){arguments[0]=t=e.$handleEvent(t),e.saveAreaSet.apply(void 0,arguments)}}}):e._e()],1),a("uni-popup",{ref:"selectTime",staticStyle:{"max-height":"50%"},attrs:{type:"bottom"},model:{value:e.selectTime,callback:function(t){e.selectTime=t},expression:"selectTime"}},[a("div",{staticClass:"confirm-selectTime-popup"},[a("div",{staticClass:"leftNavsidebar"},[a("v-uni-view",{class:["homepageLeftFixed"],staticStyle:{width:"130px"}},e._l(e.sidebarList,(function(t,r){return a("v-uni-view",{key:r,class:["homepageLeft",r===e.currentIndex?"activeCanteen":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeSider(r)}}},[e._v(e._s(t))])})),1)],1)]),e.rightTimeList.length>0?a("div",{staticClass:"rightTime"},[a("v-uni-radio-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioTimeFun.apply(void 0,arguments)}}},e._l(e.rightTimeList,(function(t,r){return a("div",{key:r,attrs:{border:!1}},[a("ad-cell",{attrs:{text:t,showArrow:"false",showBottomLine:"false"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.rightTimeClick(t)}}},[a("v-uni-radio",{attrs:{value:t,checked:e.radioTime==t}})],1)],1)})),0)],1):e._e()]),a("uni-popup",{ref:"discountProgram",attrs:{type:"bottom"}},[a("v-uni-radio-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.setDiscountClick.apply(void 0,arguments)}}},[a("ad-cell",{attrs:{text:"暂不使用",showArrow:"false"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.DiscountClick("undefined")}}},[a("v-uni-radio",{staticStyle:{display:"inline-block","vertical-align":"middle","margin-left":"20px"},attrs:{value:"undefined",checked:"undefined"===e.radioDiscount}})],1),e._l(e.DiscountList,(function(t,r){return a("div",{key:r},[a("adCell",{attrs:{text:t.PrefName,showArrow:"false",showBottomLine:"false"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.DiscountClick(t,1)}}},[a("v-uni-radio",{attrs:{value:t.PrefNo,checked:t.PrefNo===e.radioDiscount}})],1)],1)}))],2)],1),a("uni-popup",{ref:"ticketProgram",attrs:{type:"bottom"}},[a("v-uni-radio-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.setTicketClick.apply(void 0,arguments)}}},[a("ad-cell",{attrs:{text:"暂不使用",showArrow:"false"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ticketClick("undefined")}}},[a("v-uni-radio",{staticStyle:{display:"inline-block","vertical-align":"middle","margin-left":"20px"},attrs:{value:"undefined",checked:"undefined"===e.radioDiscount}})],1),e._l(e.TicketList,(function(t,r){return a("div",{key:r},[a("adCell",{attrs:{text:t.TicketName,showArrow:"false",showBottomLine:"false"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.ticketClick(t,1)}}},[a("v-uni-radio",{attrs:{value:t.TicketNo,checked:t.TicketNo===e.radioTicket}})],1)],1)}))],2)],1)],1)},o=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return a}))},2804:function(e,t,r){"use strict";r.r(t);var a=r("4ef5"),i=r.n(a);for(var o in a)"default"!==o&&function(e){r.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"4d3f":function(e,t,r){"use strict";var a=r("c4c1"),i=r.n(a);i.a},"4ef5":function(e,t,r){"use strict";var a=r("ee27");r("4de4"),r("4160"),r("c975"),r("a15b"),r("a9e3"),r("b680"),r("d3b7"),r("acd8"),r("e25e"),r("ac1f"),r("3ca3"),r("1276"),r("159b"),r("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("96cf");var i=a(r("c964")),o=a(r("fc11")),n=r("e4e4"),s=r("4ddd"),c=a(r("9d14")),d=a(r("b30c")),l={name:"confirmOrder",components:{adCell:d.default},data:function(){var e;return e={mainStyle:getApp().globalData.mainStyle,mainColor:getApp().globalData.mainColor,loading:!0,currentItem:[],UserRemarks:"",UserTime:"",UserDiscount:"",UserDiscountName:"请选择方案",UserTicketName:"请选择电子券",currentArea:{},radioModes:2,prodList:[],showAreaList:!1,addEditArea:!1,selectTime:!1,discountProgram:!1,ticketProgram:!1,resultArea:"",areaList:[],DeliveryAreaList:[],takeOver:[],freight:0,total:0,totalCurrent:0,location:{},activeKey:0,sidebarList:[],rightTimeList:[],radioTime:"",radioPayType:"1",CardInfo:{},phone_user:"",name_user:"",orderId:"",cardSids:[],ProdTotal:0,radioDiscount:"",DiscountList:[],allTimeSlot:[],RecordTime:{},areaInfo:{},currentDeliveryType:"",testData:{},allData:{},totalCurrentScore:0,currentIndex:0},(0,o.default)(e,"location",{}),(0,o.default)(e,"takeDeliveryTpey",""),(0,o.default)(e,"DiscPrice",""),(0,o.default)(e,"PrefNo",""),(0,o.default)(e,"TicketPrice",""),(0,o.default)(e,"TicketNo",""),(0,o.default)(e,"TicketList",[]),(0,o.default)(e,"radioTicket",""),e},created:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.state.currentCard&&0!==e.$store.state.currentCard.length||(e.$Router.back(2),e.$Router.back(100)),t.next=3,e.getWxConfig();case 3:if(r=e.$store.state.currentCard||[],r.forEach((function(t){if(t.SID&&e.cardSids.push(t.SID),t.PartsNo instanceof Array){var r=[],a=JSON.parse(JSON.stringify(t.PartsNo));a.forEach((function(e){r.push(e.ProdNo)})),t.PartsNo=r.join(",")}})),e.currentItem=JSON.stringify(r),e.cardSids=e.cardSids?e.cardSids.join(","):"",!e.$Route.query.isIntegral){t.next=12;break}return t.next=10,e.getInfoIntegral();case 10:t.next=14;break;case 12:return t.next=14,e.getInfo();case 14:case"end":return t.stop()}}),t)})))()},mounted:function(){if("takein"===this.$store.state.orderType){this.radioModes=1,this.takeDeliveryTpey="1";var e=JSON.parse(localStorage.getItem("currentStoreInfo"));this.currentArea=e.data}else this.takeDeliveryTpey="2",this.currentArea=JSON.parse(sessionStorage.getItem("takeOutAddress"))},methods:{getInfo:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var r,a,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!0,uni.showLoading(),t.prev=2,e.location.longitude){t.next=6;break}throw uni.showToast({title:"地址获取失败",icon:"none"}),"地址获取失败";case 6:r=JSON.parse(e.currentItem),e.currentDeliveryType=r[0].DeliveryType,a="",i="","takein"===e.$store.state.orderType&&(a=e.$store.state.currentLocation.longitude?e.$store.state.currentLocation.longitude:"",i=e.$store.state.currentLocation.latitude?e.$store.state.currentLocation.latitude:""),o=JSON.parse(localStorage.getItem("currentStoreInfo")),c={Action:"SettlePay",ProdList:e.currentItem,Longitude:"takein"===e.$store.state.orderType?a:e.currentArea.Longitude,Latitude:"takein"===e.$store.state.orderType?i:e.currentArea.Latitude,DeliveryType:e.takeDeliveryTpey,ShopSID:o.data.SID,PayType:e.radioPayType},r[0].hasOwnProperty("PromotionItemSID")&&(c.PromotionItemSID=r[0].PromotionItemSID),Promise.all([e.saveArea(!0),(0,n.vipCard)(c,"UProdOpera")]).then((function(t){0==t[1].Success&&uni.showToast({title:t[1].message,icon:"none"}),e.takeOver=t[0];var r=t[1].Data;e.allData=r,e.prodList=r.ProdList,e.currentItem=JSON.parse(JSON.stringify(e.prodList)),e.currentDeliveryType=r.ProdList[0].DeliveryType,1===e.radioModes?e.areaList=r.ShopInfoList:e.areaList=r.AddressList,e.currentItem.forEach((function(e){console.log(e,"222222"),e.PartsList&&(e.PartsList=JSON.stringify(e.PartsList),"string"!==typeof e.PartsNo&&(e.PartsNo.forEach((function(t,r){e.arr=[],e.arr.push(t.ProdNo)})),e.PartsNo=e.arr?e.arr.join(","):"",delete e.arr))}));var a=0;e.prodList.length>0&&e.prodList.forEach((function(e,t){e.DeliveryType&&""!==e.DeliveryType&&(e.DeliveryType=e.DeliveryType.split(",")),e.FinHour>a&&(a=e.FinHour)})),e.freight=r.Freight,e.DiscPrice=r.DiscPrice,e.TicketList=r.TicketList||[],e.TicketPrice=r.TicketPrice,e.DiscountList=r.DiscList||[],e.TicketList.length>0&&(e.radioTicket=e.TicketList[0].TicketNo,e.UserTicketName=e.TicketList[0].TicketName),e.DiscountList.length>0&&(e.radioDiscount=e.DiscountList[0].PrefNo,e.UserDiscountName=e.DiscountList[0].PrefName),e.total=r.SumTotal,e.ProdTotal=r.ProdTotal,e.totalCurrent=parseFloat(Number(r.SumTotal).toFixed(2)),e.CardInfo=r.hasOwnProperty("CardInfo")?r.CardInfo:{},"{}"!==JSON.stringify(e.CardInfo)?Number(r.CardInfo.Balance)<Number(r.SumTotal)&&(e.radioPayType="2"):e.radioPayType="2",e.DeliveryAreaList=r.ShopInfoList;var i=Number(r.ShopBase.ScopeDay),o=0,n=0;if(Number(a)/24>=1)o=Number(a)/24,n=0;else{var c=p(r.ShopBase.EndTime),d=p((0,s.getTime)(!1,!1,!0)),l=60*Number(a)*60;(l+d).toFixed(2)>c?(n=Number(a),o+=1):(n=Number(a),o=0)}e.sidebarList=u(i,o);var m=f(r.ShopBase,n,o),h=m.arr,g=m.arrToday;e.allTimeSlot=h,e.todayTimeSlot=g,e.rightTimeList=g,e.radioTime=g[0],e.RecordTime={radioTime:g[0],index:0},e.UserTime=e.sidebarList[e.activeKey]+" "+e.radioTime,e.loading=!1,uni.hideLoading()})).catch((function(t){e.loading=!1,uni.hideLoading()})),t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](2),e.loading=!1,uni.hideLoading();case 21:case"end":return t.stop()}}),t,null,[[2,17]])})))()},getInfoIntegral:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,uni.showLoading(),t.next=4,(0,n.vipCard)({Action:"SettlePay",ProdList:e.currentItem},"UIntegralOpera");case 4:r=t.sent,a=r.Data,e.prodList=a.ProdList,e.allData=a,e.CardInfo=a.CardInfo,e.currentItem=JSON.parse(JSON.stringify(e.prodList)),e.totalCurrent=parseFloat(Number(a.SalePriceTotal).toFixed(2)),a.ScoreTotal&&(e.totalCurrentScore=parseFloat(Number(a.ScoreTotal).toFixed(2))||0),e.loading=!1,uni.hideLoading(),t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](0),e.loading=!1,uni.hideLoading();case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()},orderArea:function(){},getWxConfig:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,n.vipCard)({Action:"GetJSSDK",Url:window.location.href},"UProdOpera");case 3:r=t.sent,a=r.Data,c.default.config({debug:!1,appId:a.SDK.appId,timestamp:a.SDK.timestamp,nonceStr:a.SDK.noncestr,signature:a.SDK.signature,jsApiList:["getLocation","openAddress","scanQRCode"]}),c.default.ready((function(t){var r=e;c.default.getLocation({type:"gcj02",success:function(e){r.location={longitude:e.longitude,latitude:e.latitude},r.$store.commit("SET_CURRENT_LOCATION",r.location),sessionStorage.setItem("location",JSON.stringify(r.location))},cancel:function(e){this.$toast.fail(e)}}),c.default.error((function(e){this.$toast.fail(e),console.log("调用微信接口获取当前位置失败",e)}))})),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()},getAddress:function(){var e=this;c.default.openAddress({success:function(t){console.log(JSON.stringify(t)),e.name_user=t.userName,e.phone_user=t.telNumber},cancel:function(e){this.$toast.fail(e)}})},changeMode:function(e){this.radioModes=e,this.areaList=1==e?this.DeliveryAreaList:this.takeOver,this.currentArea=this.areaList[0],1===e?this.totalCurrent=this.total-this.freight:(this.totalCurrent=this.total,this.takeOver.filter((function(e){return"1"===e.Defaults})).length>0&&(this.currentArea=this.takeOver.filter((function(e){return"1"===e.Defaults}))[0]),this.resultArea=this.currentArea.SID),this.totalCurrent=parseFloat(Number(this.totalCurrent).toFixed(2))},radioChange:function(){this.showAreaList=!0,this.$refs.showAreaList.open()},radioPayChange:function(e){this.CardInfo&&Number(this.CardInfo.Balance)<this.totalCurrent||(this.radioPayType=e.detail.value)},changeGroup:function(e){this.resultArea=e.detail.value},changeArea:function(e,t){var r=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a,i,o,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.showAreaList=!0,r.$refs.showAreaList.open(),JSON.parse(localStorage.getItem("currentStoreInfo")),1===r.radioModes?a="IsPickShop":r.currentDeliveryType.indexOf("2")>-1?a="CalcFreight":r.currentDeliveryType.indexOf("3")>-1&&(a="CalcLogistics"),t.prev=4,r.loading=!0,uni.showLoading(),i={Action:a,Latitude:e.Latitude||"",Longitude:e.Longitude||"",ShopSID:1===r.radioModes?e.SID:"",DiscPrice:r.DiscPrice,ProdTotal:r.ProdTotal,TicketPrice:r.TicketPrice,ProdList:JSON.stringify(r.currentItem)},t.next=10,(0,n.vipCard)(i,"UProdOpera");case 10:o=t.sent,s=o.Data,1===r.radioModes?(r.currentArea=e,c=r.currentArea,r.$store.commit("SET_CURRENT_STORE",c)):(r.currentArea=e,r.freight=s.Freight,sessionStorage.setItem("takeOutAddress",JSON.stringify(r.currentArea))),r.showAreaList=!1,r.$refs.showAreaList.close(),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](4),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[4,17]])})))()},clickEdit:function(e){this.areaInfo=e,this.$refs.addEditArea.open(),this.addEditArea=!0},clickGo:function(){this.$refs.addEditArea.close(),this.addEditArea=!1},clickLeft:function(){this.$Route.query.flag?this.$Router.push({path:"/pages/shoppingMall/menu_naixue/menu/menu",query:{flag:"Deflocation"}}):this.$Router.push(this.$store.state.historyUrl)},clickDataTime:function(){this.selectTime=!0,this.$refs.selectTime.open()},clickUserDiscount:function(){this.discountProgram=!0,this.$refs.discountProgram.open()},clickUserTicketName:function(){this.ticketProgram=!0,this.$refs.ticketProgram.open()},clickTime:function(){},saveAreaSet:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$refs.addEditArea.close(),e.addEditArea=!1,e.loading=!0,uni.showLoading(),t.next=6,e.saveArea(!1);case 6:r=t.sent,e.areaList=r,e.takeOver=r,e.loading=!1,uni.hideLoading();case 11:case"end":return t.stop()}}),t)})))()},saveArea:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function r(){var a,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.currentDeliveryType.indexOf("2")>-1?a=1:t.currentDeliveryType.indexOf("3")>-1&&(a=2),r.next=4,(0,n.vipCard)({Action:"GetAddressList",Type:a},"UMemberOpera");case 4:return i=r.sent,o=i.Data,e&&uni.showLoading(),r.abrupt("return",o.AddressList);case 10:return r.prev=10,r.t0=r["catch"](0),r.abrupt("return",[]);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},PayTypeClick:function(e){this.CardInfo&&Number(this.CardInfo.Balance)<this.totalCurrent||(this.radioPayType=e,this.Discount(e,2))},changeSider:function(e){this.currentIndex=e,this.activeKey=e,this.RecordTime.index===e?this.radioTime=this.RecordTime.radioTime:this.radioTime="",this.rightTimeList=0!==e?this.allTimeSlot:this.todayTimeSlot},rightTimeClick:function(e){this.RecordTime={radioTime:e,index:this.activeKey},this.radioTime=e,this.selectTime=!1,this.$refs.selectTime.close(),this.UserTime=this.sidebarList[this.activeKey]+" "+this.radioTime},radioTimeFun:function(e){this.radioTime=e.detail.value},setDiscountClick:function(e){this.radioDiscount=e.detail.value},DiscountClick:function(e,t){this.PrefNo=e.PrefNo;e.PrefNo;"undefined"===e?("",this.UserDiscountName="优惠方案"):this.UserDiscountName=e.PrefName,this.discountProgram=!1,this.Discount(e,1),this.$refs.discountProgram.close()},Discount:function(e,t){var r=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var i,o,s,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=1===t?"SelectDisc":2===t?"SelectPay":3===t?"SelectTicket":"",a.prev=1,o={Action:"SelectDisc",SelectType:i,ProdList:JSON.stringify(r.currentItem),PrefNo:1===t?e.PrefNo:"",PayType:2===t?e:1,Freight:r.freight,ProdTotal:r.ProdTotal,TicketPrice:3!=t?r.TicketPrice:"",DiscPrice:3===t?r.DiscPrice:"",TicketNo:1!=t?r.radioTicket:""},a.next=5,(0,n.vipCard)(o,"UProdOpera");case 5:s=a.sent,c=s.Data,2===t&&(r.DiscountList=c.DiscList||[],r.DiscountList.length>0&&(r.radioDiscount=r.DiscountList[0].PrefNo,r.UserDiscountName=r.DiscountList[0].PrefName)),r.freight=c.Freight,r.DiscPrice=c.DiscPrice,r.TicketPrice=c.TicketPrice,r.total=c.SumTotal,r.ProdTotal=c.ProdTotal,r.totalCurrent=parseFloat(Number(c.SumTotal).toFixed(2)),"{}"!==JSON.stringify(r.CardInfo)?Number(c.CardInfo.Balance)<Number(c.SumTotal)&&(r.radioPayType="2"):r.radioPayType="2",a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](1),console.log(a.t0);case 20:case"end":return a.stop()}}),a,null,[[1,17]])})))()},setTicketClick:function(e){this.radioTicket=e.detail.value},ticketClick:function(e,t){this.TicketNo=e.TicketNo,this.radioTicket=e.TicketNo;e.TicketNo;this.TicketPrice=e.TicketPrice,"undefined"===e?("",this.UserTicketName="可用电子券"):this.UserTicketName=e.TicketName,this.ticketProgram=!1,this.Discount(e,3),this.$refs.ticketProgram.close()},areaSet:function(){this.areaInfo={},this.addEditArea=!0,this.$refs.addEditArea.open()},submitMoney:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var r,a,i,o,c,d,l,u,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("{}"!==JSON.stringify(e.currentArea)||e.$Route.query.isIntegral){t.next=3;break}return e.$toast("请选择地址"),t.abrupt("return");case 3:if(1!==e.radioModes){t.next=15;break}if(e.phone_user&&""!==e.phone_user){t.next=9;break}return e.$toast("请填写手机号码"),t.abrupt("return");case 9:if((0,s.checkMobile)(e.phone_user)){t.next=12;break}return e.$toast("手机号格式错误"),t.abrupt("return");case 12:if(e.name_user&&""!==e.name_user){t.next=15;break}return e.$toast("请填写收件名字"),t.abrupt("return");case 15:if("undefined"===e.radioDiscount&&(e.radioDiscount=""),"undefined"===e.radioTicket&&(e.radioTicket=""),r=e.radioModes,2===e.radioModes?e.currentDeliveryType.indexOf("2")>-1?r=2:e.currentDeliveryType.indexOf("3")>-1&&(r=3):r=1,"string"!==typeof e.currentItem&&(e.currentItem=JSON.stringify(e.currentItem),console.log(e.currentItem,"888888")),a="",i="","takein"===e.$store.state.orderType&&(a=e.$store.state.currentLocation.longitude?e.$store.state.currentLocation.longitude:"",i=e.$store.state.currentLocation.latitude?e.$store.state.currentLocation.latitude:""),o=e.$store.state.currentStoreInfo||{},c={Action:"OrderPay",DeliveryType:r,UserName:2===e.radioModes?e.currentArea.Name:e.name_user,Mobile:1===e.radioModes?e.phone_user:e.currentArea.Mobile,Address:2===e.radioModes?e.currentArea.Address+"  "+e.currentArea.House:"",ProdList:e.currentItem,Longitude:"takein"===e.$store.state.orderType?a:e.currentArea.Longitude,Latitude:"takein"===e.$store.state.orderType?i:e.currentArea.Latitude,Province:e.currentArea.Province||"",AddressSID:2===e.radioModes?e.resultArea.SID:"",ShopSID:1===e.radioModes?o.SID:"",UserRemarks:e.UserRemarks,PayType:e.radioPayType,PickDate:e.sidebarList[e.RecordTime.index],PickTime:e.RecordTime.radioTime,CartSID:e.cardSids,PrefNo:e.radioDiscount,TicketNo:e.radioTicket},JSON.parse(e.currentItem)[0].hasOwnProperty("PromotionItemSID")&&(c.PromotionItemSID=JSON.parse(e.currentItem)[0].PromotionItemSID),!e.$Route.query.isIntegral){t.next=36;break}if(d=JSON.parse(e.currentItem),c=d[0],c.Action="OrderPay",c.PayType=e.radioPayType,c.UserRemarks=e.UserRemarks,c.DeliveryType=1,e.CardInfo){t.next=36;break}return e.$toast.fail("未绑定微卡"),t.abrupt("return");case 36:return l=e.$Route.query.isIntegral?"UIntOrderOpera":"UOrderOpera",e.loading=!0,uni.showLoading(),t.prev=39,t.next=42,(0,n.vipCard)(c,l);case 42:if(u=t.sent,f=u.Data,e.loading=!1,uni.hideLoading(),e.$store.commit("SET_CURRENT_CARD",[]),uni.removeStorageSync("alreadyPaid"),"1"===e.radioPayType)e.$Router.push({path:"/pages/shoppingMall/order/confirmCard",query:{Balance:e.CardInfo.Balance,Score:e.CardInfo.Score,PayScore:f.hasOwnProperty("PayScore")?f.PayScore:"",total:f.SumTotal,PayNo:f.PayNo,IsPass:f.IsPass,OrderType:f.OrderType}});else{e.testData=f;try{(0,s.weChatPayment)(e,f,!1)}catch(p){that.$toast.fail("微信调起失败"),e.loading=!1,uni.hideLoading()}}t.next=55;break;case 51:t.prev=51,t.t0=t["catch"](39),e.loading=!1,uni.hideLoading();case 55:case"end":return t.stop()}}),t,null,[[39,51]])})))()}},filters:{setSex2:function(e){return 0==e?"先生":1==e?"女士":void 0}}};function u(e,t){var r=[],a="";e=Number(e);for(var i=0;i<e;i++){var o=864e5,n=t>1?(new Date).getTime()+t*o:(new Date).getTime();a=i*o+n,r.push((0,s.getTime)(a,!0))}return r}function f(e,t,r){var a=3600,i=60*Number(e.IntervalMinute),o=p(e.EndTime),n=Number(p(e.StartTime)),c=[],d=[];while(n<=o)c.push(m(n)),n+=i;return 0==r?c.forEach((function(e){e=p(e),0==r&&e>p((0,s.getTime)(!1,!1,!0))+Number(t)*a&&d.push(m(e))})):d=c,{arr:c,arrToday:d}}function p(e){var t=0,r=e.split(":")[0],a=e.split(":")[1],i=e.split(":")[2];return t=Number(3600*r)+Number(60*a)+Number(i),t}function m(e){var t=parseInt(e),r=0,a=0,i="";return t>60&&(r=parseInt(t/60),t=parseInt(t%60),r>60&&(a=parseInt(r/60),r=parseInt(r%60))),a=a<10?"0"+a:a,r=r<10?"0"+r:r,t=t<10?"0"+t:t,i=a+":"+r+":"+t,i}t.default=l},7931:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEOElEQVRYR7VXXWgcVRg95+5uUtIHo5ZUlEiFqrX+NcnsS1uT2Uhrq0l3EqmiD0ECAfFFKaFobRT6IBWJ4g8KxVoMGrHQ7G7Sim3TZjaN1Lq7DVoJiNhSfJCSoNRCSRr3frKzWd3s32zbzbze851z7vdz7x2izM8cW7VMLt+2lVDPAriPwO0AVkIwC+KiCC4Q+E0UYnPVV4+d3jL1ZznUdAMFIsb9InyVkO0Al7vhnXVBUohhQr89ZiXOlIopamBDpOHOKu39EERnWaIFQAIRCg7M++Z6J9rO/VWIp6CB5ojR4NH8FkTdjYrnxF2i6K6THYljuXx5BgJh40kBDxFYViHxNI2IFsUuOxj7Mpt3kYHHhpsaPVp9V3HxBcVUSQBstq34aMbEfwY2DDfd7dNMEFxR0Z3nkAlk1Lbim/IMmCH/KInHl0pcRCZEYU80GD+eVwJzqLGNyjOyFOICsYWyJxpMjGX4W0cevQtKeU8+NXnRKYEZNs4SbKikgVSqoXSfve3s99m8LWF/uwK+AOTQmBXvphlat4r0XaiUuABHwX9228HJeDan02NJvkvy6YWpuDY776ulGTJeIfleIQMichzkwwTucDMokCOa6BsPxicXYQXKjPh3Angzd7o0kp0MhI0IwG2FBLTol5RHjYuWMMHVuRhnrATDmtI3biXO5a43h/31SmSQ5MbCG0Q/zbB/ksC6IoDDdkesfes3q6tn52o/BtntnClp4aEkk2+csianCsUGwkYXBB+AvKVY9kRwgmbYmC46+6nTyysr7fbEjNOskQYDWm3RikfyUr2g4vQUfPtBtLqVDYIfUxmYJ+AtBtaUndFg/J0yyFQg4t8NyC6A1a74NGCKgZB/BnTu9iKf/DJmxdeUImweanxAKc9gsVIWZYaMMhAy4iCbSglozfXRzh9O52LWHlxbVeer2QXy9VJZLLG5gZSB/ZnmKu4Un9pWrCd73QwZJsB9JO4tM915sFR52RIynlPkYCkSAa54l+v60U2Jy+uHHqmrUtUfEdh+o8KZOJH5e1InYS3hvQSyqqQJQYwUG8Lu0j1Trq10b2Xugk8IvlhuaCVwIui1O2L9jgHn/SeeXwHWVILclUPk/N/1siZhJFJHQPozw/5eAu7z7speGpA6RYV4IvMuWPQkC4T8X4N45iY1SoYL8JptxfZmQIsMOHNdVXOUoLkUJkTwud0ReyGbO+9V7Fw81279DMDzlTQhgvdtK7YDhC5pwOmHkaYVTKrpihgQJDXRE7ViBwrxFfwxMYeaNlKpUzdnQOYADsx7Ze9EW/x8Ma6CBloi/h4l2Pd/kAxo0KZIK8HNxf6Y0u9+nhHIQS9nB08Ef77ktomCBgIhox/kDhGZFuDlaEf8q2yi1LnhhedBCB6iUEHpGQIzSVE/jVux391EXXsgdUEJ8ccVj7yVaE9cvR7C68X+C4OnocTpRcG6AAAAAElFTkSuQmCC"},9998:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEh0lEQVRYR71XbYhUZRR+nnv3w4/dvbOWLhSCYlvuzmyEGkT0I6gQdWdGqRXpS/tRUQRlEWikpRXZBxVBBRFoX4JY4MxmUqyY9KtIivbOrrGahRXUWnvv7mrrjHOfuDPuMrs7H3e0ev8Mc895nvPcc8573vsSVS6nd/Uig2rPEpdSaAHkiRw0hVOe2Bfq2He8GkoGcR7tjbWcIzdAWgtySXmMvgW4p0ba1dCR/L0Sf1kBOtk103XSjwraTHJ2JbJCu4BRA3qhafbwy1z4xVgpbEkBw3bnDVmZu0nMrybwVF8JJ2tqvLsa27oPF+OZJkCCMZyKPSFwGwDjYoJPYIUsqaebwsnnSKiQc5oAx44+Dxib/pXA00i8HaFI9+aSAtze2CqRn/w3wfOsBhBriiS6x2NMZODMD52Xn82YRwk0TKsjvI2Q+V3+ufw0Xl9G5EGJz/p2QutA3D+1Oevr022zWg/8kvc5vxw7/iGA24sRSzrc3JG80bc5/auXIqtvSgmoMXF1Q1uiV79FZ7l/GidAzCviuzsUSdwxIcC1o9cKxtflUl+YuiE7niQQneYv7Al1JNb5z4fs+DYCW0txkrjOCie+ymXAseMfAbi1fO11zArXLyb3Zof711zpZb3+SbtEyKLWaw0t7j4xcmzNvOxY9meAM8pwfhyKJG6j7K46R2mHxMxKzUfhYasj8Xr+DWO7CK4vwLwTiiTu9f+7dnyngA3l+CSdCbG+mW4qukIyPq0UPN9/GrJmZBaw9cCw37TptOnXuBZCpgaa74/ekVQ0nJXxfZAZQnor6dqxJwU+E0hAvrNfsyLJjfk3jb0q8BFCr1iR5GPny3kIQK5hKy1CW+ikYm9CfKCS84RdyNBQuxVOHnNTy+fIm9FPY6zNCn/2l9sXXykP+wNzUW9xyI7tIxgPDPIrASWaI8nVuTc+Gl3oN57UZbqps/0AW4Ny+Tx0emOfg7ylEsia483mZd1nKvmN2yX45U2DrCmJEXo41Bt7n+SdlYgpdXowThf6hSK1X/rbUnZXg6PMskkc9EjgIOD/FF+SPvB74EWIj1cSUMxuzTwd4qIe1+nrXALPPFI1B/USXTv+oIA3qgYDuFgBBB6i30Q4Z/xYSYC/Zz3P/Lu6ErCn3DyQyYW5+gzZ8RSB9nIiLNQ1MrJ3tJLQyU0Yz4Awi2EE9DVHEuGcANeObRG4PSj5uN/FlIDEU1Y4sT0nIH908ieQc6sRccECpEHrEi3wt/XEFnHt+N0C3v0/BBBYb0US7/mxJu3Rkud8CVUXkgFJ+5s7kp3jlJME+APFxVn/YnFFsEzIP3gGIC4FsTQA5riFumsKm3nalBrpWxXJZs0ekC0BCIO7CH+Y5rmbGtv324WgomNyZGDF3OxY3W4QNwePUM5Th4xarW26qvvUVK8ycxp0++L3wcMOEKELEiI4MLDJak+8PfVCUrQHig6MgRVNTrp2O4R7CDYFESJoGMTOUF1mq//1VA4T6HacmxV2V90I0ss9YB2kxfKv50CLRA/AKUKD/nQzib2NY78e4LIjmSBi/wHqLfeFNhYZOgAAAABJRU5ErkJggg=="},"9cf1":function(e,t,r){var a=r("24fb");t=a(!1),t.push([e.i,".indexTop[data-v-369a88ce]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:10px 0 5px 0;background:#fff}.changeMode[data-v-369a88ce]{width:140px;height:50px;display:-webkit-box;display:-webkit-flex;display:flex;background:#eee;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:10px;font-size:14px;position:relative;overflow:hidden}.changeModeImg[data-v-369a88ce]{width:25px!important;height:25px!important}.changeModeLeft[data-v-369a88ce]{margin-right:15px}.changeModeRight[data-v-369a88ce]{margin-left:15px}.changeTopIcon[data-v-369a88ce]{right:-2px;position:absolute;bottom:-4px;font-size:28px}.setADcell[data-v-369a88ce]{margin:5px 0}.confirm-order-style[data-v-369a88ce]{margin-bottom:80px\n  /*margin-left: 10px !important;*/}.confirm-order-style .uni-popup[data-v-369a88ce]{z-index:999}.confirm-order-style .setADcell[data-v-369a88ce] .detailView1{-webkit-box-flex:0;-webkit-flex:none;flex:none}.confirm-order-style .setADcell[data-v-369a88ce] .headView{-webkit-box-flex:0;-webkit-flex:none;flex:none;width:90px}.confirm-order-style .radio-group-play[data-v-369a88ce]{background-color:#fff;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:5px %?24?%;margin-top:5px}.confirm-order-style .radio-group-play .payStyle[data-v-369a88ce]{background:#fff;font-size:14px;color:#5a5b5c;padding:13px 0}.confirm-order-style .radio-group-play .radio-group-item[data-v-369a88ce]{padding:6px 0;display:-webkit-box;display:-webkit-flex;display:flex}.confirm-order-style .radio-group-play .custom-title[data-v-369a88ce]{vertical-align:middle}.confirm-order-style .total-style[data-v-369a88ce]{background:#fff;text-align:right;line-height:40px;font-size:16px;padding-right:10px;border-bottom:%?1?% solid #ebedf0}.confirm-order-style .total-style__color[data-v-369a88ce]{color:red}.confirm-order-style .order-area[data-v-369a88ce]{background:#fff;padding:14px 6px;display:-webkit-box;display:-webkit-flex;display:flex}.confirm-order-style .order-area-icon[data-v-369a88ce]{margin:auto}.confirm-order-style .order-area-icon img[data-v-369a88ce],\n.confirm-order-style .order-area-icon uni-image[data-v-369a88ce]{margin:0 10px;width:40px;height:40px}.confirm-order-style .order-area-phone[data-v-369a88ce]{font-size:14px;color:#909090;margin-left:8px}.confirm-order-style .order-area-location[data-v-369a88ce]{font-size:12px;margin-top:3px}.confirm-order-style .good_card_box[data-v-369a88ce]{background:#fff;margin:5px 0 5px;padding:10px}.confirm-order-style .good_card_box .boxShadow[data-v-369a88ce]{box-shadow:none}.confirm-order-style .good_card_box .rightBox[data-v-369a88ce]{margin:0 10px}.confirm-order-style .confirm-order-popup[data-v-369a88ce]{background-color:#fff;max-height:50%}.confirm-order-style .confirm-order-popup .top[data-v-369a88ce]{padding:10px 20px 10px;text-align:center;border-bottom:1px solid #eee;position:relative}.confirm-order-style .confirm-order-popup .cancel[data-v-369a88ce]{font-size:12px;position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#777}.confirm-order-style .bottom-area[data-v-369a88ce]{max-height:60vh;overflow:scroll}.confirm-order-style .bottom-area__box[data-v-369a88ce]{display:-webkit-box;display:-webkit-flex;display:flex;padding:8px 12px;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.confirm-order-style .bottom-area__info[data-v-369a88ce]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px}.confirm-order-style .bottom-area__icon[data-v-369a88ce]{width:30px;text-align:center;margin:auto}.confirm-order-style .bottom-area__phone[data-v-369a88ce]{color:#969799;font-size:12px;margin-top:5px}.confirm-order-style .bottom-area__add[data-v-369a88ce]{text-align:center;padding:10px;border-top:1px solid #eee}.confirm-order-style .bottom-area .checkbox-my[data-v-369a88ce]{margin-right:10px}.confirm-order-style .confirm-area-popup[data-v-369a88ce]{height:100%}.confirm-order-style .confirm-area-popup[data-v-369a88ce] .uni-popup__wrapper-box{height:100%;background:#fff}.confirm-order-style .confirm-selectTime-popup .leftNavsidebar[data-v-369a88ce]{width:130px;display:fixed;position:fixed;top:0;overflow-y:scroll;background:#f8f8f8;height:100vh}.confirm-order-style .confirm-selectTime-popup .leftNavsidebar .activeCanteen[data-v-369a88ce]{background:#fff}.confirm-order-style .confirm-selectTime-popup .leftNavsidebar .homepageLeft[data-v-369a88ce]{line-height:60px;padding-left:6px}.confirm-order-style .rightTime[data-v-369a88ce]{height:50vh;padding:8px;box-sizing:border-box;margin-left:130px;background:#fff;overflow-y:scroll}.confirm-order-style .wechat[data-v-369a88ce]{width:18px;height:18px;margin-right:8px;display:inline-block;font-size:18px;vertical-align:middle}.confirm-order-style .wechat uni-image[data-v-369a88ce]{width:100%;height:100%}",""]),e.exports=t},c4c1:function(e,t,r){var a=r("9cf1");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=r("4f06").default;i("7f6d4350",a,!0,{sourceMap:!1,shadowMode:!1})},fe9e:function(e,t,r){"use strict";r.r(t);var a=r("1fb8"),i=r("2804");for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);r("4d3f");var n,s=r("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"369a88ce",null,!1,a["a"],n);t["default"]=c.exports}}]);