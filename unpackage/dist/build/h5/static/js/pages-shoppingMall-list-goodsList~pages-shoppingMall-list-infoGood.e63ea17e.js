(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shoppingMall-list-goodsList~pages-shoppingMall-list-infoGood"],{1114:function(t,e,i){"use strict";var o={uniPopup:i("ea5b").default,uniIcons:i("8252").default,aUpImg:i("a0e4").default,uniNumberBox:i("28ef").default,uniGoodsNav:i("5e52").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:[t.mainStyle,"a-shopping-showSku"]},[i("uni-popup",{ref:"popupSku",staticClass:"van-popupSku",attrs:{type:"bottom"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.closePopup.apply(void 0,arguments)}},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[i("div",{staticStyle:{"background-color":"#fff",height:"70vh"}},[i("uni-icons",{staticClass:"crossIcon",attrs:{type:"closeempty",size:"24"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.crossIcon.apply(void 0,arguments)}}}),i("div",[i("div",{staticClass:"skuTop"},["1"===t.goodsInfo.SpecType?i("div",{staticStyle:{display:"flex"}},[i("div",{staticClass:"skuTopImg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.viewImg(t.goodsInfo.Img)}}},[i("a-up-img",{key:t.goodsInfo.Img,attrs:{url:t._f("setImgPrex")(t.goodsInfo.Img)}})],1),i("div",{staticClass:"skuTopInfo"},[i("div",{staticClass:"skuTopInfoMoney"},[t._v("¥"),t.goodsInfo.MemberPrice?i("span",[t._v(t._s(t.sumPrice))]):i("span",{staticClass:"skuTopInfoMoneyNum"},[t._v(t._s(t.sumPrice))])]),i("div",[t.goodsInfo.StoreQty>0?i("span",{staticClass:"skuTopInfoSurplus"},[t._v("剩余 "+t._s(t.goodsInfo.StoreQty)+" 件")]):t._e(),t.goodsInfo.MaxBuyCnt&&t.goodsInfo.MaxBuyCnt>0?i("span",{staticClass:"skuTopInfoLimit"},[t._v("(每人限购"+t._s(t.goodsInfo.MaxBuyCnt)+"件)")]):t._e(),i("div",{staticClass:"skuTopInfoSurplus"},[t._v("已选 "+t._s(t.goodsInfo.Name)),t._l(t.checkStatic,(function(e,o){return i("v-uni-text",{key:o+"a",staticStyle:{"margin-left":"5px"}},[o>0?i("v-uni-text"):t._e(),t._v(t._s(e.Value.Name)),e.Value.Price&&0!=e.Value.Price?i("v-uni-text",[t._v("￥"+t._s(e.Value.Price))]):t._e()],1)}))],2)]),"0"===t.skuDataInfo.IsBuy?i("div",{staticClass:"skuTopInfoSurplus"},[t._v("购买时间："),i("span",{staticStyle:{color:"#ee0a24","font-size":"14px"}},[t._v(t._s(t._f("setBuyTime")(t.goodsInfo.BuyTime)))])]):t._e()])]):i("div",{staticStyle:{display:"flex"}},[i("div",{staticClass:"skuTopImg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.viewImg(t.currentNorms.Img)}}},[i("a-up-img",{key:t.currentNorms.Img,attrs:{url:t._f("setImgPrex")(t.currentNorms.Img)}})],1),i("div",{staticClass:"skuTopInfo"},[i("div",{staticClass:"skuTopInfoMoney"},[t._v("¥"),t.currentNorms.MemberPrice?i("span",[t._v(t._s(t.sumPrice))]):i("span",{staticClass:"skuTopInfoMoneyNum"},[t._v(t._s(t.sumPrice))])]),i("div",[t.goodsInfo.StoreQty>0?i("span",{staticClass:"skuTopInfoSurplus"},[t._v("剩余 "+t._s(t.currentNorms.StoreQty)+" 件")]):t._e(),t.goodsInfo.MaxBuyCnt&&t.goodsInfo.MaxBuyCnt>0?i("span",{staticClass:"skuTopInfoLimit"},[t._v("(每人限购"+t._s(t.goodsInfo.MaxBuyCnt)+"件)")]):t._e(),i("div",{staticClass:"skuTopInfoSurplus"},[t._v("已选 "+t._s(t.goodsInfo.Name)+t._s(t.currentNorms.Name)),t._l(t.checkStatic,(function(e,o){return i("v-uni-text",{key:o+"a",staticStyle:{"margin-left":"5px"}},[o>0?i("v-uni-text"):t._e(),t._v(t._s(e.Value.Name)),e.Value.Price&&0!=e.Value.Price?i("v-uni-text",[t._v("￥"+t._s(e.Value.Price))]):t._e()],1)}))],2)]),"0"===t.skuDataInfo.IsBuy?i("div",{staticClass:"skuTopInfoSurplus"},[t._v("购买时间："),i("span",{staticStyle:{color:"#ee0a24","font-size":"14px"}},[t._v(t._s(t._f("setBuyTime")(t.goodsInfo.BuyTime)))])]):t._e()])])]),i("div",{staticClass:"skuBottom"},[i("v-uni-scroll-view",{staticClass:"menus",attrs:{"scroll-into-view":t.menuScrollIntoView,"scroll-with-animation":!0,"scroll-y":!0}},[i("v-uni-view",{},[t.normsList.length>0||0!==t.PartsList.length||t.attributeList.length>0?i("div",{staticClass:"skuTopChoice"},[t.normsList.length>0?i("div",[i("span",{staticClass:"skuTopChoiceTitle"},[t._v("规格")]),t._l(t.normsList,(function(e,o){return i("div",{key:e.SID,class:{isActive:t.currentIndex===o,skuTopChoiceItem:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.skuTopChoice(o)}}},[t._v(t._s(e.Name))])}))],2):t._e(),t.attributeList.length>0?i("div",t._l(t.attributeList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"property"},[i("v-uni-view",{staticClass:"skuTopChoiceTitle"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(e.Name))])],1),t._l(e.Value,(function(o,n){return i("v-uni-view",{key:o.Name,staticStyle:{display:"inline-block"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickStatic(e,o,n)}}},[i("v-uni-view",{staticClass:"skuTopChoiceItem",class:t.isActiveName(o.Name)},[t._v(t._s(o.Name)),"0"!=o.Price?i("v-uni-text",{staticStyle:{color:"red"}},[t._v("￥"+t._s(o.Price))]):t._e()],1)],1)}))],2)})),1):t._e(),0!==t.PartsList.length?i("div",[i("span",{staticClass:"skuTopChoiceTitle"},[t._v("配件(单独售价)")]),t._l(t.PartsList,(function(e,o){return i("div",{key:e.SID,staticClass:"partsStyle"},[i("div",{class:{isActive:e.isActive,skuTopChoiceItem:!0}},[t._v(t._s(e.Name)),i("span",{staticStyle:{color:"red","padding-left":"5px"}},[t._v("¥"+t._s(e.SalePrice))])]),i("uni-number-box",{staticClass:"skuStepperStyle partsStepper",attrs:{value:e.Stepper,min:0,max:Number(e.StoreQty)},on:{overlimit:function(i){arguments[0]=i=t.$handleEvent(i),t.overlimitParts(e.Stepper,o)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.skuTopChoiceParts(e,o)}}})],1)}))],2):t._e()]):t._e(),i("div",{staticClass:"skuStepper"},[i("uni-number-box",{staticClass:"skuStepperStyle",attrs:{value:t.valueStepper,min:1,max:t.setStepperMax()},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.stepperMain.apply(void 0,arguments)},overlimit:function(e){arguments[0]=e=t.$handleEvent(e),t.overlimit.apply(void 0,arguments)}}})],1)])],1)],1)]),i("uni-goods-nav",{staticClass:"goods-action",attrs:{options:t.options,buttonGroup:t.buttonGroup,IsGoodBuyTime:t.IsGoodBuyTime},on:{buttonClick:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickButton.apply(void 0,arguments)}}})],1)]),i("div",{staticClass:"imgPopup"},[i("uni-popup",{ref:"imgPopup"},[i("a-up-img",{attrs:{url:t.images}})],1)],1)],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}))},"262e":function(t,e,i){var o=i("2e90");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("2683cbf0",o,!0,{sourceMap:!1,shadowMode:!1})},"28ef":function(t,e,i){"use strict";i.r(e);var o=i("735ea"),n=i("8a96");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("d8fe");var s,r=i("f0c5"),u=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"4892c93e",null,!1,o["a"],s);e["default"]=u.exports},"2e90":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".flex[data-v-e1ae46ec]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-goods-nav[data-v-e1ae46ec]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.xiajia[data-v-e1ae46ec]{position:absolute;bottom:50px;background:#929394;line-height:34px;width:100%;text-align:center;color:#fff;letter-spacing:1px}.uni-tab__cart-box[data-v-e1ae46ec]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:40px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-e1ae46ec]{padding:0 5px}.uni-tab__cart-sub-right[data-v-e1ae46ec]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-right:10px}.disabled-style[data-v-e1ae46ec]{position:absolute;width:100%;height:100%\n\t\t/* background-color: rgba(255, 255, 255, .4); */}.uni-tab__right[data-v-e1ae46ec]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden;border:1px solid #000}.uni-tab__cart-button-left[data-v-e1ae46ec]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n\n\t\t/* flex: 1;\n */position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:0 10px}.uni-tab__icon[data-v-e1ae46ec]{width:18px;height:18px}.image[data-v-e1ae46ec]{width:18px;height:18px}.uni-tab__text[data-v-e1ae46ec]{margin-top:3px;font-size:%?24?%;color:#646566}.uni-tab__cart-button-right[data-v-e1ae46ec]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.uni-tab__cart-button-right2[data-v-e1ae46ec]{background-color:#ffc868;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.uni-tab__cart-button-right-text[data-v-e1ae46ec]{font-size:%?28?%;color:#fff}.uni-tab__cart-button-right[data-v-e1ae46ec]:active{opacity:.7}.uni-tab__dot-box[data-v-e1ae46ec]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\nposition:absolute;right:-2px;top:2px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center\n\t\t/* width: 0;\n */\n\t\t/* height: 0;\n */}.uni-tab__dot[data-v-e1ae46ec]{\n\t\t/* width: 30rpx;\n */\n\t\t/* height: 30rpx;\n */padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-e1ae46ec]{padding:0 4px;\n\t\t/* width: auto;\n */border-radius:15px}.uni-tab__color-y[data-v-e1ae46ec]{background-color:#ffa200}.uni-tab__color-r[data-v-e1ae46ec]{background-color:red}",""]),t.exports=e},"2ec7":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".imgPopup .uni-popup[data-v-1ffbddbd]{background-color:rgba(0,0,0,.8)}.a-shopping-showSku .uni-popup[data-v-1ffbddbd]{z-index:999}.a-shopping-showSku[data-v-1ffbddbd] .uni-tab__cart-sub-left{padding:0}.van-popupSku[data-v-1ffbddbd]{font-size:14px;height:475px}.van-popupSku .goods-action[data-v-1ffbddbd]{background:#fff;padding:10px 15px}.van-popupSku .crossIcon[data-v-1ffbddbd]{position:absolute;font-size:20px;right:10px;top:10px}.van-popupSku .skuTop[data-v-1ffbddbd]{display:-webkit-box;display:-webkit-flex;display:flex;padding:20px;border:1px solid #ebedf0}.van-popupSku .skuTopImg[data-v-1ffbddbd]{width:100px;height:100px}.van-popupSku .skuTopImg .van-image[data-v-1ffbddbd],\n.van-popupSku .skuTopImg img[data-v-1ffbddbd],\n.van-popupSku .skuTopImg uni-image[data-v-1ffbddbd]{width:100%;height:100%}.van-popupSku .skuTopInfo[data-v-1ffbddbd]{margin-left:20px}.van-popupSku .skuTopInfo .skuTopInfoMoney[data-v-1ffbddbd]{color:#ee0a24;font-weight:500;font-size:22px;vertical-align:middle;word-wrap:break-word}.van-popupSku .skuTopInfo .skuTopInfoSurplus[data-v-1ffbddbd]{margin-top:8px;color:#969799;font-size:12px;line-height:16px}.van-popupSku .skuTopInfo .skuTopInfoLimit[data-v-1ffbddbd]{display:inline-block;color:#ee0a24;font-size:12px}.van-popupSku .skuTopChoice[data-v-1ffbddbd]{padding:20px;border-bottom:1px solid #ebedf0}.van-popupSku .skuTopChoice .skuTopChoiceTitle[data-v-1ffbddbd]{padding-bottom:12px;display:block}.van-popupSku .skuTopChoice .skuTopChoiceItem[data-v-1ffbddbd]{display:inline-block;\n  /*min-width: 40px;*/margin:0 12px 12px 0;overflow:hidden;color:#323233;font-size:13px;line-height:16px;vertical-align:middle;border-radius:4px;padding:8px;background:#f7f8fa}.van-popupSku .skuTopChoice .partsStyle[data-v-1ffbddbd]{display:-webkit-box;display:-webkit-flex;display:flex}.van-popupSku .skuTopChoice .partsStyle .partsStepper[data-v-1ffbddbd]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.van-popupSku .skuTopChoice .partsStyle .skuTopChoiceItem[data-v-1ffbddbd]{display:inline-block;margin:0 12px 12px 0;overflow:hidden;color:#323233;font-size:13px;line-height:16px;vertical-align:middle;border-radius:4px;padding:8px;background:#f7f8fa}.van-popupSku .skuStepper[data-v-1ffbddbd]{padding:15px 20px;\n  /*border-bottom: 1px solid #ebedf0;*/height:28px;clear:both}.van-popupSku .skuStepper .skuStepperStyle[data-v-1ffbddbd]{float:right}.van-popupSku .skuBottom[data-v-1ffbddbd]{overflow:hidden;height:37vh}.van-popupSku .skuBottom .menus[data-v-1ffbddbd]{height:100%;overflow:hidden}",""]),t.exports=e},"3b8d":function(t,e,i){"use strict";i.r(e);var o=i("1114"),n=i("6953");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("da3d");var s,r=i("f0c5"),u=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"1ffbddbd",null,!1,o["a"],s);e["default"]=u.exports},"4ea2":function(t,e,i){var o=i("2ec7");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("bb95ae32",o,!0,{sourceMap:!1,shadowMode:!1})},"5a7b":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,"\n.uni-numbox[data-v-4892c93e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:26px;line-height:26px;width:80px;z-index:1}.uni-numbox__value[data-v-4892c93e]{background-color:#fff;width:40px;\n\t\t/* height: 35px; */text-align:center;font-size:%?24?%;border-width:%?1?%;border-style:solid;border-color:#e5e5e5;border-left-width:0;border-right-width:0}.uni-numbox__minus[data-v-4892c93e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:35px;\n\t\t/* height: 35px; */\n\t\t/* line-height: $box-line-height;\n */\n\t\t/* text-align: center;\n */font-size:20px;color:#333;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#e5e5e5;border-top-left-radius:%?6?%;border-bottom-left-radius:%?6?%;border-right-width:0}.uni-numbox__plus[data-v-4892c93e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:35px;\n\t\t/* height: 35px; */border-width:%?1?%;border-style:solid;border-color:#e5e5e5;border-top-right-radius:%?6?%;border-bottom-right-radius:%?6?%;background-color:#f8f8f8;border-left-width:0}.uni-numbox--text[data-v-4892c93e]{font-size:%?40?%;color:#333}.uni-numbox--disabled[data-v-4892c93e]{color:silver}",""]),t.exports=e},"5e52":function(t,e,i){"use strict";i.r(e);var o=i("e169"),n=i("ab67");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("a6918");var s,r=i("f0c5"),u=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"e1ae46ec",null,!1,o["a"],s);e["default"]=u.exports},6953:function(t,e,i){"use strict";i.r(e);var o=i("b034"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"735ea":function(t,e,i){"use strict";var o,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-numbox"},[i("v-uni-view",{staticClass:"uni-numbox__minus",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t._calcValue("minus")}}},[i("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue<=t.min||t.disabled}},[t._v("-")])],1),i("v-uni-view",{staticClass:"uni-numbox__value",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[t._v(t._s(t.inputValue))]),i("v-uni-view",{staticClass:"uni-numbox__plus",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t._calcValue("plus")}}},[i("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue>=t.max||t.disabled}},[t._v("+")])],1)],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}))},"77ff":function(t,e,i){"use strict";var o=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("8252")),a={name:"UniGoodsNav",components:{uniIcons:n.default},props:{options:{type:Array,default:function(){return[{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff",borderRadius:0},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff",borderRadius:0}]}},IsGoodBuyTime:{type:Boolean,default:!0},skuDataInfo:{type:Object,default:function(){return{}}},fill:{type:Boolean,default:!1},goods:{type:Object}},mounted:function(){},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=a},"8a96":function(t,e,i){"use strict";i.r(e);var o=i("c323"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"94bd":function(t,e,i){var o=i("5a7b");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("59913ec2",o,!0,{sourceMap:!1,shadowMode:!1})},a623:function(t,e,i){"use strict";var o=i("23e7"),n=i("b727").every,a=i("a640"),s=i("ae40"),r=a("every"),u=s("every");o({target:"Array",proto:!0,forced:!r||!u},{every:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},a6918:function(t,e,i){"use strict";var o=i("262e"),n=i.n(o);n.a},ab67:function(t,e,i){"use strict";i.r(e);var o=i("77ff"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},b034:function(t,e,i){"use strict";var o=i("ee27");i("a623"),i("4de4"),i("4160"),i("a15b"),i("d81d"),i("4e82"),i("a9e3"),i("b680"),i("acd8"),i("ac1f"),i("1276"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=o(i("c964")),a=o(i("54f8")),s=i("0182"),r={name:"showSku",props:{show:Boolean,seckill:{type:String,default:function(){return""}},isBrowse:{type:String,default:function(){return""}},skuDataInfo:Object},data:function(){return{mainStyle:getApp().globalData.mainStyle,mainColor:getApp().globalData.mainColor,isShow:!1,showImg:!1,menuScrollIntoView:"",currentIndex:0,valueStepper:1,objProdInfo:{},maxPrice:"",minPrice:"",maxMemberPrice:"",minMemberPrice:"",resultPrice:0,images:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2174909441,2495215020&fm=26&gp=0.jpg",disabledPay:!1,options:[],IsGoodBuyTime:!1,buttonGroup:[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff",borderRadius:"25px 0 0 25px"},{text:"立即购买",backgroundColor:getApp().globalData.mainColor,color:"#fff",borderRadius:"0 25px 25px 0"}],normsList:[],PartsList:[],attributeList:[],goodsInfo:{},currentNorms:{},checkStatic:{},currentParts:[],currentTastArr:[],SpecResultPrice:0}},created:function(){this.seckill&&(this.buttonGroup=[{text:"立即购买",backgroundColor:getApp().globalData.mainColor,color:"#fff",borderRadius:"25px"}]),console.log(this.skuDataInfo)},computed:{isActiveName:function(){return function(t){var e,i=(0,a.default)(this.checkStatic);try{for(i.s();!(e=i.n()).done;){var o=e.value;if(t===o.Value.Name)return"isActive"}}catch(n){i.e(n)}finally{i.f()}return""}},sumPrice:function(){var t=this;if("1"===this.goodsInfo.SpecType){this.resultPrice=0;var e=Number(this.goodsInfo.SalePrice);return(this.goodsInfo.MemberPrice||0==this.goodsInfo.MemberPrice)&&(e=Number(this.goodsInfo.MemberPrice)),this.skuDataInfo.AttributeList&&this.checkStatic.length>0&&this.checkStatic.forEach((function(e){e.Value.Name&&(t.resultPrice+=isNaN(Number(e.Value.Price))?0:Number(e.Value.Price))})),this.resultPrice=(this.resultPrice+e)*this.valueStepper,this.resultPrice=parseFloat(this.resultPrice.toFixed(2)),this.resultPrice}this.SpecResultPrice=0;var i=Number(this.currentNorms.SalePrice);return(this.currentNorms.MemberPrice||0==this.currentNorms.MemberPrice)&&(i=Number(this.currentNorms.MemberPrice)),this.skuDataInfo.AttributeList&&this.checkStatic.length>0&&this.checkStatic.forEach((function(e){e.Value.Name&&(t.SpecResultPrice+=isNaN(Number(e.Value.Price))?0:Number(e.Value.Price))})),this.SpecResultPrice=(this.SpecResultPrice+i)*this.valueStepper,this.SpecResultPrice=parseFloat(this.SpecResultPrice.toFixed(2)),this.SpecResultPrice},specPrice:function(){var t=this;this.SpecResultPrice=0;var e=Number(this.currentNorms.SalePrice);return(this.currentNorms.MemberPrice||0==this.currentNorms.MemberPrice)&&(e=Number(this.currentNorms.MemberPrice)),this.checkStatic.forEach((function(e){e.Value.Name&&(t.SpecResultPrice+=isNaN(Number(e.Value.Price))?0:Number(e.Value.Price))})),this.SpecResultPrice=(this.SpecResultPrice+e)*this.valueStepper,this.SpecResultPrice=parseFloat(this.SpecResultPrice.toFixed(2)),this.SpecResultPrice}},methods:{isDuringDate:function(t,e){var i=new Date,o=i.getFullYear(),n=i.getMonth()+1,a=i.getDate();n<10&&(n="0"+n),a<10&&(a="0"+a);var s=o+"-"+n+"-"+a,r=i.getHours();r=r<10?"0"+r:r;var u=i.getMinutes(),c=i.getSeconds();u=u<10?"0"+u:u,c=c<10?"0"+c:c;var l=o+"-"+n+"-"+a+" "+r+":"+u+":"+c,d=s+" "+t,p=s+" "+e;return l>=d&&l<=p},onClickButton:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var o,n,a,r,u,c,l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!e.isBrowse){i.next=2;break}return i.abrupt("return");case 2:if(!("0"!=e.goodsInfo.StockType&&Number(e.goodsInfo.StoreQty)<Number(e.valueStepper))){i.next=5;break}return e.$toast("商品库存不足！"),i.abrupt("return");case 5:if(o=e.currentParts.every((function(t){return Number(t.StoreQty)>0})),o){i.next=9;break}return e.$toast("配件库存不足！"),i.abrupt("return");case 9:if(n=[],a=[],e.currentParts.length>0?(e.currentParts.forEach((function(t){n.push({SID:t.SID,BuyCnt:t.Stepper}),a.push(t.SID)})),a=a.join(",")):(n="",a=""),i.prev=12,r={ProdList:[],Action:"SetShopCart"},u=[],"",u[0]={ProdNo:"2"==e.goodsInfo.SpecType||"3"==e.goodsInfo.SpecType?e.currentNorms.ProdNo:e.goodsInfo.ProdNo,SpecType:e.goodsInfo.SpecType,BuyCnt:e.valueStepper,ProdSID:e.goodsInfo.SID,SpecSID:"2"==e.goodsInfo.SpecType||"3"==e.goodsInfo.SpecType?e.currentNorms.SID:"",ProdType:0,PartsNo:a,PartsList:n?JSON.stringify(n):"",ParamInfo:e.currentTastArr},r.ProdList=JSON.stringify(u),0!==t.index||e.seckill){i.next=25;break}return i.next=21,(0,s.vipCard)(r,"UMemberOpera");case 21:c=i.sent,c.Message&&(e.$toast.success("成功加入购物车"),e.isShow=!1,e.$refs.popupSku.close()),i.next=28;break;case 25:e.seckill&&(u[0].PromotionItemSID=e.currentNorms.SID),l=[u[0]],l.length>0&&(e.$store.commit("SET_CURRENT_CARD",l),e.$Router.push("/pages/shoppingMall/order/confirmOrder"));case 28:i.next=33;break;case 30:i.prev=30,i.t0=i["catch"](12),e.$toast.error(i.t0);case 33:case"end":return i.stop()}}),i,null,[[12,30]])})))()},closePopup:function(t){t.show||(this.valueStepper=1,this.$emit("hideShow",this.isShow))},crossIcon:function(){this.$refs.popupSku.close()},skuTopChoice:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.currentNorms=this.normsList[t])},clickStatic:function(t,e,i){var o,n=this,s=(0,a.default)(this.checkStatic);try{for(s.s();!(o=s.n()).done;){var r=o.value;t.Name===r.Name&&(r.Value.Name===e.Name?r.Value={}:r.Value=e)}}catch(c){s.e(c)}finally{s.f()}if(this.checkStatic.length>0){this.currentTastArr="";var u=0;this.checkStatic.forEach((function(t){u=Number(t.Value.Price),t.Value.Name&&(n.currentTastArr+=t.Value.Name+(0===u?"":"￥".concat(u))+",")})),this.currentTastArr=this.currentTastArr.substring(0,this.currentTastArr.length-1)}},skuTopChoiceParts:function(t,e){t.inputValue>0?this.$set(this.PartsList[e],"isActive",!0):this.$set(this.PartsList[e],"isActive",!1);var i=this.PartsList;i.forEach((function(o){i[e].Stepper=t.inputValue}));var o=i.filter((function(t){return 0!==Number(t.Stepper)}));this.currentParts=u("parts",o)},stepperMain:function(t){this.valueStepper=t.inputValue},overlimitParts:function(t){},setStepperMax:function(){return"0"===this.goodsInfo.StockType?Number(this.goodsInfo.MaxBuyCnt="99"):Number(this.goodsInfo.MaxBuyCnt)<Number(this.goodsInfo.StoreQty)&&Number(this.goodsInfo.MaxBuyCnt)?Number(this.goodsInfo.MaxBuyCnt):Number(this.goodsInfo.StoreQty)},overlimit:function(t){if("minus"===t&&this.$toast("至少选择一件"),"plus"===t){var e="";e=Number(this.goodsInfo.MaxBuyCnt)<Number(this.goodsInfo.StoreQty)&&Number(this.goodsInfo.MaxBuyCnt)?"每人限购"+this.goodsInfo.MaxBuyCnt+"件":"该商品库存不足",this.$toast(e)}},viewImg:function(t){this.$refs.imgPopup.open(),this.showImg=!0,this.images=this.$VUE_APP_PREFIX+t}},watch:{show:function(t){var e=this;if(this.isShow=t,t){this.$refs.popupSku.open();var i=this.skuDataInfo;if(this.goodsInfo=i.ProdInfo,this.normsList=[],this.PartsList=[],this.attributeList=[],i.SpecList&&(this.normsList=i.SpecList||[],this.currentNorms=this.normsList[0],this.maxPrice=Math.max.apply(Math,this.skuDataInfo.SpecList.map((function(t){return Number(t.SalePrice)}))),this.minPrice=Math.min.apply(Math,this.skuDataInfo.SpecList.map((function(t){return Number(t.SalePrice)}))),this.maxMemberPrice=Math.max.apply(Math,this.skuDataInfo.SpecList.map((function(t){return Number(t.MemberPrice)}))),this.minMemberPrice=Math.min.apply(Math,this.skuDataInfo.SpecList.map((function(t){return Number(t.MemberPrice)})))),i.PartsList&&(this.PartsList=i.PartsList||[]),i.AttributeList&&(this.attributeList=i.AttributeList||[],this.checkStatic=this.attributeList.map((function(t){return{Name:t.Name,Value:{Name:"",Price:""}}}))),void 0!=this.goodsInfo.BuyTime){var o=this.goodsInfo.BuyTime.split(",");this.IsGoodBuyTime=this.isDuringDate(o[0],o[1])}else this.IsGoodBuyTime=!0;this.disabledPay="0"===this.skuDataInfo.IsBuy,this.PartsList=i.PartsList||[],this.PartsList.forEach((function(t){e.$set(t,"Stepper",0)})),this.currentIndex=0}else this.$refs.popupSku.close(),this.normsList=[],this.PartsList=[],this.attributeList=[],this.partsList.forEach((function(t){e.$set(t,"isActive",!1)}))}}};function u(t,e){function i(t){var e=null;return"parts"===t?(e="ProdNo",function(t,i){var o=t[e],n=i[e];return o-n}):(e="Name",function(t,i){return t[e].localeCompare(i[e],"zh-CN")})}return e=e.sort(i(t)),e}e.default=r},c323:function(t,e,i){"use strict";i("a9e3"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniNumberBox",props:{value:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},inputValue:function(t,e){}},created:function(){this.inputValue=+this.value},methods:{_calcValue:function(t){if(!this.disabled){"minus"===t&&this.inputValue<=this.min&&this.$emit("overlimit",t),"plus"===t&&this.inputValue>=this.max&&this.$emit("overlimit",t);var e=this._getDecimalScale(),i=this.inputValue*e,o=this.step*e;if("minus"===t){if(i-=o,i<this.min*e)return;i>this.max*e&&(i=this.max*e)}else if("plus"===t){if(i+=o,i>this.max*e)return;i<this.min*e&&(i=this.min*e)}this.inputValue=String(i/e),this.$emit("change",{inputValue:this.inputValue,type:t})}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,(this.step+"").split(".")[1].length)),t},_onBlur:function(t){var e=t.detail.value;e&&(e=+e,e>this.max?e=this.max:e<this.min&&(e=this.min),this.inputValue=e)}}};e.default=o},d8fe:function(t,e,i){"use strict";var o=i("94bd"),n=i.n(o);n.a},da3d:function(t,e,i){"use strict";var o=i("4ea2"),n=i.n(o);n.a},e169:function(t,e,i){"use strict";var o={uniIcons:i("8252").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-goods-nav"},["0"!=t.skuDataInfo.StockType&&t.skuDataInfo.StoreQty<="0"?i("p",{staticClass:"xiajia"},[t._v("商品已经售罄啦~要不要瞧瞧别的~")]):t._e(),"0"===t.skuDataInfo.State?i("p",{staticClass:"xiajia"},[t._v("此商品已下架~要不要瞧瞧别的~")]):t._e(),i("v-uni-view",{staticClass:"uni-tab__seat"}),i("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,o){return i("v-uni-view",{key:o,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(o,e)}}},[i("v-uni-view",{staticClass:"uni-tab__icon"},[i("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),i("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),i("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?i("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),"0"===t.skuDataInfo.State||"0"!=t.skuDataInfo.StockType&&t.skuDataInfo.StoreQty<="0"||0==t.IsGoodBuyTime?i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,o){return i("v-uni-view",{key:o,staticClass:"flex uni-tab__cart-button-right2",staticStyle:{opacity:".3"},style:{backgroundColor:e.backgroundColor,color:e.color,"border-radius":e.borderRadius}},[i("v-uni-text",{staticClass:"uni-tab__cart-button-right-text"},[t._v(t._s(e.text))])],1)})),1):i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,o){return i("v-uni-view",{key:o,staticClass:"flex uni-tab__cart-button-right",style:{backgroundColor:e.backgroundColor,color:e.color,"border-radius":e.borderRadius},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buttonClick(o,e)}}},[i("v-uni-text",{staticClass:"uni-tab__cart-button-right-text"},[t._v(t._s(e.text))]),e.disabled?i("v-uni-view",{staticClass:"disabled-style"}):t._e()],1)})),1)],1)],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}))}}]);