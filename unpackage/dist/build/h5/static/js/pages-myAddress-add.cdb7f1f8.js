(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myAddress-add"],{"008b":function(e,t,n){"use strict";var i=n("ee27");n("4160"),n("a9e3"),n("ac1f"),n("5319"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("f3f3")),o={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(e){e?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var e=(0,a.default)({},this.styles,{"transition-duration":this.duration/1e3+"s"}),t="";for(var n in e){var i=this.toLine(n);t+=i+":"+e[n]+";"}return t}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var e=this;for(var t in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===t?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[t]," ");this.$nextTick((function(){setTimeout((function(){e._animation(!0)}),50)}))},close:function(e){clearTimeout(this.timer),this._animation(!1)},_animation:function(e){var t=this,n=this.getTranfrom(e);for(var i in this.transform="",n)"opacity"===i?this.ani.in="fade-".concat(e?"out":"in"):this.transform+="".concat(n[i]," ");this.timer=setTimeout((function(){e||(t.isShow=!1),t.$emit("change",{detail:t.isShow})}),this.duration)},getTranfrom:function(e){var t={transform:""};return this.modeClass.forEach((function(n){switch(n){case"fade":t.opacity=e?1:0;break;case"slide-top":t.transform+="translateY(".concat(e?"0":"-100%",") ");break;case"slide-right":t.transform+="translateX(".concat(e?"0":"100%",") ");break;case"slide-bottom":t.transform+="translateY(".concat(e?"0":"100%",") ");break;case"slide-left":t.transform+="translateX(".concat(e?"0":"-100%",") ");break;case"zoom-in":t.transform+="scale(".concat(e?1:.8,") ");break;case"zoom-out":t.transform+="scale(".concat(e?1:1.2,") ");break}})),t},_modeClassArr:function(e){var t=this.modeClass;if("string"!==typeof t){var n="";return t.forEach((function(t){n+=t+"-"+e+","})),n.substr(0,n.length-1)}return t+"-"+e},toLine:function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}}};t.default=o},"008e":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-transition[data-v-23f6d7f4]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-23f6d7f4]{opacity:0}.fade-active[data-v-23f6d7f4]{opacity:1}.slide-top-in[data-v-23f6d7f4]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-23f6d7f4]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-23f6d7f4]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-23f6d7f4]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-23f6d7f4]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-23f6d7f4]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-23f6d7f4]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-23f6d7f4]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-23f6d7f4]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-23f6d7f4]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-23f6d7f4]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),e.exports=t},"06fc":function(e,t,n){"use strict";var i=n("b8f1"),a=n.n(i);a.a},"075e":function(e,t,n){n("c975"),n("ac1f"),n("466d"),n("5319"),n("1276");var i=n("5757");!function(t,n){e.exports=n(t)}(window,(function(e,t){if(!e.jWeixin){var n,a,o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},r=function(){var e={};for(var t in o)e[o[t]]=t;return e}(),s=e.document,c=s.title,d=navigator.userAgent.toLowerCase(),f=navigator.platform.toLowerCase(),l=!(!f.match("mac")&&!f.match("win")),u=-1!=d.indexOf("wxdebugger"),p=-1!=d.indexOf("micromessenger"),m=-1!=d.indexOf("android"),h=-1!=d.indexOf("iphone")||-1!=d.indexOf("ipad"),g=(a=d.match(/micromessenger\/(\d+\.\d+\.\d+)/)||d.match(/micromessenger\/(\d+\.\d+)/))?a[1]:"",v={initStartTime:O(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},y={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:h?1:m?2:-1,clientVersion:g,url:encodeURIComponent(location.href)},w={},b={_completes:[]},k={state:0,data:{}};V((function(){v.initEndTime=O()}));var x=!1,S=[],_=(n={config:function(t){$("config",w=t);var n=!1!==w.check;V((function(){if(n)I(o.config,{verifyJsApiList:B(w.jsApiList),verifyOpenTagList:B(w.openTagList)},function(){b._complete=function(e){v.preVerifyEndTime=O(),k.state=1,k.data=e},b.success=function(e){y.isPreVerifyOk=0},b.fail=function(e){b._fail?b._fail(e):k.state=-1};var e=b._completes;return e.push((function(){!function(){if(!(l||u||w.debug||g<"6.0.2"||y.systemType<0)){var e=new Image;y.appId=w.appId,y.initTime=v.initEndTime-v.initStartTime,y.preVerifyTime=v.preVerifyEndTime-v.preVerifyStartTime,_.getNetworkType({isInnerInvoke:!0,success:function(t){y.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+y.version+"&o="+y.isPreVerifyOk+"&s="+y.systemType+"&c="+y.clientVersion+"&a="+y.appId+"&n="+y.networkType+"&i="+y.initTime+"&p="+y.preVerifyTime+"&u="+y.url;e.src=n}})}}()})),b.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();b._completes=[]},b}()),v.preVerifyStartTime=O();else{k.state=1;for(var e=b._completes,t=0,i=e.length;t<i;++t)e[t]();b._completes=[]}})),_.invoke||(_.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,M(n),i)},_.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=k.state?e():(b._completes.push(e),!p&&w.debug&&e())},error:function(e){g<"6.0.2"||(-1==k.state?e(k.data):b._fail=e)},checkJsApi:function(e){I("checkJsApi",{jsApiList:B(e.jsApiList)},(e._complete=function(e){if(m){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var i=r[n];i&&(t[i]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){C(o.onMenuShareTimeline,{complete:function(){I("shareTimeline",{title:e.title||c,desc:e.title||c,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){C(o.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?I("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):I("sendAppMessage",{title:e.title||c,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){C(o.onMenuShareQQ,{complete:function(){I("shareQQ",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){C(o.onMenuShareWeibo,{complete:function(){I("shareWeiboApp",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){C(o.onMenuShareQZone,{complete:function(){I("shareQZone",{title:e.title||c,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){I("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){I("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){I("startRecord",{},e)},stopRecord:function(e){I("stopRecord",{},e)},onVoiceRecordEnd:function(e){C("onVoiceRecordEnd",e)},playVoice:function(e){I("playVoice",{localId:e.localId},e)},pauseVoice:function(e){I("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){I("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){C("onVoicePlayEnd",e)},uploadVoice:function(e){I("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){I("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){I("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){I("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(m){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){I(o.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){I("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){I("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===x?(x=!0,I("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(x=!1,0<S.length){var t=S.shift();wx.getLocalImgData(t)}},e))):S.push(e)},getNetworkType:function(e){I("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),a=t.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){I("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},i(n,"getLocation",(function(e){I(o.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),i(n,"hideOptionMenu",(function(e){I("hideOptionMenu",{},e)})),i(n,"showOptionMenu",(function(e){I("showOptionMenu",{},e)})),i(n,"closeWindow",(function(e){I("closeWindow",{},e=e||{})})),i(n,"hideMenuItems",(function(e){I("hideMenuItems",{menuList:e.menuList},e)})),i(n,"showMenuItems",(function(e){I("showMenuItems",{menuList:e.menuList},e)})),i(n,"hideAllNonBaseMenuItem",(function(e){I("hideAllNonBaseMenuItem",{},e)})),i(n,"showAllNonBaseMenuItem",(function(e){I("showAllNonBaseMenuItem",{},e)})),i(n,"scanQRCode",(function(e){I("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(h){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))})),i(n,"openAddress",(function(e){I(o.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),i(n,"openProductSpecificView",(function(e){I(o.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),i(n,"addCard",(function(e){for(var t=e.cardList,n=[],i=0,a=t.length;i<a;++i){var r=t[i],s={card_id:r.cardId,card_ext:r.cardExt};n.push(s)}I(o.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var a=t[n];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))})),i(n,"chooseCard",(function(e){I("chooseCard",{app_id:w.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),i(n,"openCard",(function(e){for(var t=e.cardList,n=[],i=0,a=t.length;i<a;++i){var r=t[i],s={card_id:r.cardId,code:r.code};n.push(s)}I(o.openCard,{card_list:n},e)})),i(n,"consumeAndShareCard",(function(e){I(o.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),i(n,"chooseWXPay",(function(e){I(o.chooseWXPay,P(e),e)})),i(n,"openEnterpriseRedPacket",(function(e){I(o.openEnterpriseRedPacket,P(e),e)})),i(n,"startSearchBeacons",(function(e){I(o.startSearchBeacons,{ticket:e.ticket},e)})),i(n,"stopSearchBeacons",(function(e){I(o.stopSearchBeacons,{},e)})),i(n,"onSearchBeacons",(function(e){C(o.onSearchBeacons,e)})),i(n,"openEnterpriseChat",(function(e){I("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),i(n,"launchMiniProgram",(function(e){I("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)})),i(n,"openBusinessView",(function(e){I("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(m){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))})),i(n,"miniProgram",{navigateBack:function(e){e=e||{},V((function(){I("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){V((function(){I("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){V((function(){I("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){V((function(){I("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){V((function(){I("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){V((function(){I("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){V((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),n),A=1,T={};return s.addEventListener("error",(function(e){if(!m){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=A++,t["wx-id"]=a),T[a])return;T[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}))}}}),!0),s.addEventListener("load",(function(e){if(!m){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(T[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=_),_}function I(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,M(n),(function(e){L(t,e,i)})):$(t,i)}function C(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){i&&i.trigger&&i.trigger(e),L(t,e,n)})):$(t,i||n)}function M(e){return(e=e||{}).appId=w.appId,e.verifyAppId=w.appId,e.verifySignType="sha1",e.verifyTimestamp=w.timestamp+"",e.verifyNonceStr=w.nonceStr,e.verifySignature=w.signature,e}function P(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function L(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n=e,i=r[n];i&&(n=i);var a="ok";if(t){var o=t.indexOf(":");"confirm"==(a=t.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==n&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return n+":"+a}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",w.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function B(e){if(e){for(var t=0,n=e.length;t<n;++t){var i=e[t],a=o[i];a&&(e[t]=a)}return e}}function $(e,t){if(!(!w.debug||t&&t.isInnerInvoke)){var n=r[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function O(){return(new Date).getTime()}function V(t){p&&(e.WeixinJSBridge?t():s.addEventListener&&s.addEventListener("WeixinJSBridgeReady",t,!1))}}))},"0e58":function(e,t,n){"use strict";var i=n("ee27");n("c975"),n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("c964")),o=n("d89f"),r=i(n("296c")),s=i(n("1a06")),c=n("b72a"),d=i(n("075e")),f={name:"index",components:{adCell:s.default},data:function(){return{areaInfo:{},currentDeliveryType:"",specificArea:!1,logisticsArea:!1,isAdd:!1,form:{Sex:0,Name:"",Mobile:"",Address:"",House:""},location:{},areaList:r.default,disabledLoad:!1,specificAreaHead:!1,cityPickerValueDefault:[0,0,1],edotAddress:this.$Route.query.areaInfo}},created:function(){if(this.getWxConfig(),this.DeliveryType=this.currentDeliveryType.indexOf("2")>-1?2:3,this.$Route.query.areaInfo&&(this.areaInfo=this.edotAddress),"{}"!==JSON.stringify(this.areaInfo)){this.form=JSON.parse(JSON.stringify(this.areaInfo)),this.form.Defaults="1"===this.form.Defaults;var e=this.form.Sex.replace(/\s*/g,"");this.form.Sex="先生"===e?"0":"1",this.location={latitude:this.areaInfo.Latitude,longitude:this.areaInfo.Longitude}}else this.location=this.$store.state.currentLocation;console.log(this.location);var t=this;window.addEventListener("message",(function(e){var n=e.data;n&&"locationPicker"==n.module&&(t.$refs.specificArea&&t.$refs.specificArea.close(),t.$nextTick((function(){t.specificArea=!1,t.specificAreaHead=!1,t.$set(t.form,"Address",n.poiname),t.$set(t.form,"Latitude",n.latlng.lat),t.$set(t.form,"Longitude",n.latlng.lng)})))}),!1)},methods:{getWxConfig:function(){return(0,a.default)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.vipCard)({Action:"GetJSSDK",Url:window.location.href},"UProdOpera");case 3:t=e.sent,n=t.Data,console.log(n),d.default.config({debug:!0,appId:n.SDK.appId,timestamp:n.SDK.timestamp,nonceStr:n.SDK.noncestr,signature:n.SDK.signature,jsApiList:["getLocation","openAddress"]}),console.log(d.default.config),d.default.ready((function(e){d.default.getLocation({type:"wgs84",success:function(e){console.log(e,"gggg");e.latitude,e.longitude,e.speed,e.accuracy},cancel:function(e){alert("cancel",e)}}),d.default.openAddress({success:function(e){alert(JSON.stringify(e))},cancel:function(e){alert(e)}}),d.default.error((function(e){this.$toast.fail("获取当前位置失败");alert("调用微信接口获取当前位置失败",e)}))})),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})))()},getWxAddress:function(){console.log("1111");d.default.openAddress({success:function(e){}})},clickGo:function(){this.specificAreaHead?(this.specificArea=!1,this.specificAreaHead=!1,this.$refs.specificArea.close()):this.$Router.push({path:"/pages/myAddress/myAddress",query:{flag:"towaimai"}})},switchChange:function(e){this.form.Defaults=e.detail.value},tenxButton:function(){this.specificArea=!0,this.$refs.specificArea.open(),this.specificAreaHead=!0},confirmArea:function(e){this.logisticsArea=!1,this.$refs.logisticsArea.close(),this.form.Address=e.label,this.form.Type=2,this.form.Province=e.labelArr[0],this.form.City=e.labelArr[1],this.form.District=e.labelArr[2]},saveArea:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.form.Address){t.next=3;break}return e.$toast("选择地址"),t.abrupt("return");case 3:if(e.form.House){t.next=6;break}return e.$toast("填写门牌号"),t.abrupt("return");case 6:if(e.form.Name){t.next=9;break}return e.$toast("填写联系人"),t.abrupt("return");case 9:if(e.form.Mobile){t.next=14;break}return e.$toast("填写手机号"),t.abrupt("return");case 14:if((0,c.checkMobile)(e.form.Mobile)){t.next=17;break}return e.$toast("手机号格式错误"),t.abrupt("return");case 17:return e.disabledLoad=!0,e.form.Type=e.form.Type?e.form.Type:1,t.prev=19,n={Action:"SetAddress"},Object.assign(n,e.form),n.Defaults=!0===n.Defaults?1:0,t.next=25,(0,o.vipCard)(n,"UMemberOpera");case 25:i=t.sent,i.Data,e.$toast("新增成功"),e.$Router.push({path:"/pages/myAddress/myAddress",query:{flag:"towaimai"}}),e.disabledLoad=!1,t.next=35;break;case 32:t.prev=32,t.t0=t["catch"](19),e.disabledLoad=!1;case 35:case"end":return t.stop()}}),t,null,[[19,32]])})))()},bindAddress:function(e){var t=this;t.$refs.specificArea&&t.$refs.specificArea.close(),t.$nextTick((function(){t.specificArea=!1,t.specificAreaHead=!1,t.$set(t.form,"Address",e.address),t.$set(t.form,"Latitude",e.location.lat),t.$set(t.form,"Longitude",e.location.lng)}))}}};t.default=f},"1e9e":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-popup[data-v-6caffb52]{position:fixed;\ntop:var(--window-top);\n\n\nbottom:0;left:0;right:0;\nz-index:99\n}.uni-popup__mask[data-v-6caffb52]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-6caffb52]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-6caffb52]{opacity:1}.uni-bottom-mask[data-v-6caffb52]{opacity:1}.uni-center-mask[data-v-6caffb52]{opacity:1}.uni-popup__wrapper[data-v-6caffb52]{\ndisplay:block;\nposition:absolute}.top[data-v-6caffb52]{top:0;left:0;right:0;-webkit-transform:translateY(-500px);transform:translateY(-500px)}.bottom[data-v-6caffb52]{bottom:0;left:0;right:0;-webkit-transform:translateY(500px);transform:translateY(500px)}.center[data-v-6caffb52]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\nbottom:0;left:0;right:0;top:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-6caffb52]{\ndisplay:block;\nposition:relative}.content-ani[data-v-6caffb52]{\n\t\t/* transition: transform 0.3s;\n */-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-6caffb52]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-6caffb52]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-6caffb52]{-webkit-transform:scale(1);transform:scale(1);opacity:1}",""]),e.exports=t},"1f16":function(e,t,n){"use strict";n.r(t);var i=n("6808"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},2310:function(e,t,n){"use strict";n.r(t);var i=n("ec03"),a=n("1f16");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("643f");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"6caffb52",null,!1,i["a"],r);t["default"]=c.exports},"2f6a":function(e,t,n){"use strict";var i={uniNavBar:n("e372").default,uniPopup:n("2310").default,simpleAddress:n("2d72").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uni-nav-bar",{attrs:{fixed:!0,"left-icon":"back",title:e.specificAreaHead?"选择收货地址":"收货地址","status-bar":!0,shadow:!1},on:{clickLeft:function(t){arguments[0]=t=e.$handleEvent(t),e.clickGo.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"main"},[n("div",{staticClass:"setADcell"},[n("adCell",{attrs:{text:"收货人",showArrow:"false"}},[n("div",{staticClass:"widthBox",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getWxAddress.apply(void 0,arguments)}}},[n("v-uni-input",{attrs:{type:"text",placeholder:"请填写收货人的姓名"},model:{value:e.form.Name,callback:function(t){e.$set(e.form,"Name",t)},expression:"form.Name"}}),n("v-uni-text",{staticClass:"iconfont icon-tongxunlu",staticStyle:{position:"absolute",right:"30px",top:"15px"}})],1)]),n("adCell",{attrs:{text:"性别",showArrow:"false"}},[n("div",{staticClass:"widthBox"},[n("v-uni-view",{staticClass:"radio-group"},[n("v-uni-view",{staticClass:"radio",class:{checked:!e.form.Sex},staticStyle:{"margin-right":"10rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.form.Sex=0}}},[e._v("先生")]),n("v-uni-view",{staticClass:"radio",class:{checked:e.form.Sex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.form.Sex=1}}},[e._v("女士")])],1)],1)]),n("adCell",{attrs:{text:"手机号",showArrow:"false"}},[n("div",{staticClass:"widthBox"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请填写收货人手机号码"},model:{value:e.form.Mobile,callback:function(t){e.$set(e.form,"Mobile",t)},expression:"form.Mobile"}})],1)]),n("adCell",{attrs:{text:"收货地址",showArrow:"false"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tenxButton.apply(void 0,arguments)}}},[n("div",{staticClass:"widthBox"},[n("span",[e._v(e._s(e.form.Address?e.form.Address:"点击选择"))])])]),n("adCell",{attrs:{text:"门牌号",showArrow:"false"}},[n("div",{staticClass:"widthBox"},[n("v-uni-input",{attrs:{type:"text",placeholder:"详细地址，例：15号楼5层301室"},model:{value:e.form.House,callback:function(t){e.$set(e.form,"House",t)},expression:"form.House"}})],1)]),n("adCell",{attrs:{text:"设置为默认地址",showArrow:"false"}},[n("div",{staticClass:"widthBox",staticStyle:{width:"40%"}},[n("v-uni-switch",{staticStyle:{position:"absolute",top:"7px",left:"33%",transform:"scale(0.8)"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.switchChange.apply(void 0,arguments)}}})],1)])],1),n("div",{staticStyle:{"margin-top":"50px",padding:"0 20px"}},[n("v-uni-button",{staticStyle:{"background-color":"#ADB838",color:"#fff"},attrs:{type:"main",size:"large",disabled:e.disabledLoad},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveArea.apply(void 0,arguments)}}},[e._v("保存")])],1)]),n("uni-popup",{ref:"specificArea",staticClass:"confirm-area-popup",staticStyle:{"margin-top":"50px"}},[n("iframe",{staticStyle:{"margin-top":"50px"},attrs:{id:"mapPage",width:"100%",height:"100%",frameborder:"0",src:"https://apis.map.qq.com/tools/locpicker?search=1&type=1&policy=1&coord="+e.location.latitude+","+e.location.longitude+"&key=IB5BZ-HF53W-5KLRH-R3VUL-35KO7-Y2BUT&referer=365商城管理"}})]),n("simple-address",{ref:"logisticsArea",attrs:{pickerValueDefault:e.cityPickerValueDefault,cancelColor:"#999",themeColor:"#007AFF"},on:{onConfirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmArea.apply(void 0,arguments)}}})],1)},o=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"33e7":function(e,t,n){var i=n("1e9e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("99e8cfba",i,!0,{sourceMap:!1,shadowMode:!1})},"34d6":function(e,t,n){"use strict";n.r(t);var i=n("0e58"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},4479:function(e,t,n){"use strict";n.r(t);var i=n("c0d2"),a=n("950c");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("a5fa");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"23f6d7f4",null,!1,i["a"],r);t["default"]=c.exports},"643f":function(e,t,n){"use strict";var i=n("33e7"),a=n.n(i);a.a},6808:function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("4479")),o={name:"UniPopup",components:{uniTransition:a.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(e){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(e){e.stopPropagation()},open:function(){var e=this;this.showPopup=!0,this.$nextTick((function(){clearTimeout(e.timer),e.timer=setTimeout((function(){e.showTrans=!0}),50)})),this.$emit("change",{show:!0})},close:function(e){var t=this;this.showTrans=!1,this.$nextTick((function(){clearTimeout(t.timer),t.timer=setTimeout((function(){t.$emit("change",{show:!1}),t.showPopup=!1}),300)}))},onTap:function(){this.maskClick&&this.close()}}};t.default=o},"950c":function(e,t,n){"use strict";n.r(t);var i=n("008b"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},a5fa:function(e,t,n){"use strict";var i=n("c7e1"),a=n.n(i);a.a},b8f1:function(e,t,n){var i=n("c069");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("1651f7d2",i,!0,{sourceMap:!1,shadowMode:!1})},c069:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"[data-v-3535fa44] .uni-popup__wrapper-box{width:100%;height:100%}.widthBox[data-v-3535fa44]{width:68%}.widthBox uni-input[data-v-3535fa44]{font-size:12px}.widthBox .radio-group[data-v-3535fa44]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.widthBox .radio-group .radio[data-v-3535fa44]{padding:%?10?% %?30?%;border-radius:%?6?%;border:1px solid #ccc;margin-right:6px}.widthBox .radio-group .radio.checked[data-v-3535fa44]{background-color:#adb838;color:#fff;border:1px solid #adb838}",""]),e.exports=t},c0d2:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShow?n("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[e.ani.in],style:"transform:"+e.transform+";"+e.stylesObject,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}},[e._t("default")],2):e._e()},o=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},c7e1:function(e,t,n){var i=n("008e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("304fb6e2",i,!0,{sourceMap:!1,shadowMode:!1})},ec03:function(e,t,n){"use strict";var i={uniTransition:n("4479").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showPopup?n("v-uni-view",{staticClass:"uni-popup",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[n("uni-transition",{attrs:{"mode-class":["fade"],styles:e.maskClass,duration:e.duration,show:e.showTrans},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onTap.apply(void 0,arguments)}}}),n("uni-transition",{attrs:{"mode-class":e.ani,styles:e.transClass,duration:e.duration,show:e.showTrans},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[e._t("default")],2)],1)],1):e._e()},o=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},fe48:function(e,t,n){"use strict";n.r(t);var i=n("2f6a"),a=n("34d6");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("06fc");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3535fa44",null,!1,i["a"],r);t["default"]=c.exports}}]);