<template>
	<div class="confirm-order-style" :class="mainStyle">
		<uni-nav-bar :fixed="true" left-icon="back" @clickLeft="clickLeft" title="确认订单" :status-bar="true" :shadow="false"></uni-nav-bar>
		<a-nodeData stringVal="获取数据失败" v-if="!loading&&prodList.length===0"></a-nodeData>
		<div v-if="prodList.length>0">
			<!-- 商品信息 -->
			<div class="good_card_box">
				<div v-for="(item,index) in prodList" :key="index" style="margin-bottom:10px">
					<a-good-lineBox :itemData="item" :isOrder="true" :isIntegral="$Route.query.isIntegral?true:false"></a-good-lineBox>
				</div>
			</div>

			<adCell text="商品总价格" showArrow="false" showBottomLine="false">
				<span>¥{{ProdTotal}}</span>
			</adCell>

			<div class="total-style">
				<span>
					小计：
					<span class="total-style__color">
						<span v-if="allData.ScoreTotal">{{allData.ScoreTotal|spliceNum}}积分</span>
						<span v-if="totalCurrent>0 && radioModes === 1">¥{{ProdTotal |spliceNum}}</span>
						<span v-else>{{totalCurrent>0&&allData.ScoreTotal?'+':''}}¥{{totalCurrent |spliceNum}}</span>
					</span>
				</span>
			</div>

			<div class="radio-group-play">
				<div style="padding-bottom: 4px" v-if="$Route.query.isIntegral&&allData.CardInfo">当前卡积分：{{allData.CardInfo.Score}}</div>
				<view class="payStyle">支付方式</view>
				<radio-group @change="radioPayChange">
					<div v-if="(allData.SalePriceTotal&&$Route.query.isIntegral)||!$Route.query.isIntegral">
						<div v-if="allData.hasOwnProperty('CardInfo')" class="radio-group-item" @click="PayTypeClick('1')">
							<div>
								<img class="wechat" src="@/static/assets/img/moneyPay.png" slot="right-icon" />
								<span class="custom-title">卡支付（余额:{{CardInfo.Balance}}）</span>
							</div>
							<div style="flex:1;text-align: right;">
								<radio style="" slot="right-icon" value="1" :checked="radioPayType == '1'" v-if="Number(CardInfo.Balance)>totalCurrent" />
								<span class="summaryNum" style="color:#777" v-else>余额不足</span>
							</div>
						</div>
						<div @click="PayTypeClick('2')" class="radio-group-item" v-if="$Route.query.isIntegral?allData.CardInfo?true:false:true">
							<div>
								<img class="wechat" src="@/static/assets/img/weixinPay.png">
								<span class="custom-title">微信支付</span>
							</div>
							<radio style="flex:1;text-align: right;" slot="right-icon" value="2" :checked="radioPayType == '2'" />
						</div>
					</div>
				</radio-group>
			</div>

			<a-bottomSubmit :isOrder="true" :allMoney="totalCurrent" :isType="radioModes" :ziquSumMoney="ProdTotal" :scoreTatal="totalCurrentScore"
			 :cardInfo="allData.CardInfo" @submitMoney="submitMoney" :isIntegral="$Route.query.isIntegral"></a-bottomSubmit>
		</div>
	</div>
</template>

<script>
	import {
		vipCard
	} from "@/api/http.js";
	// import receiveAddress from "@/components/receiveAddress";
	import {
		getTime,
		checkMobile,
		weChatPayment,
		setUrlDelCode
	} from "@/util/publicFunction";
	import wx from 'weixin-js-sdk'
	// import Mixins from "../mixins.js";
	import adCell from '@/node_modules/adcell/ADCell.vue';

	export default {
		name: "confirmOrder",
		// mixins: [Mixins],
		components: {
			// receiveAddress
			adCell
		},

		data() {
			return {
				mainStyle: getApp().globalData.mainStyle,
				mainColor: getApp().globalData.mainColor,
				loading: true,
				currentItem: [],
				UserRemarks: "",
				UserTime: "",
				UserDiscount: "",
				UserDiscountName: "请选择方案",
				// 当前选择的地址
				currentArea: {},
				radioModes: 2,
				prodList: [],
				showAreaList: false,
				addEditArea: false,
				selectTime: false,
				discountProgram: false,
				resultArea: "",
				areaList: [], //弹出窗地址渲染列表
				DeliveryAreaList: [],
				// 收货地址
				takeOver: [],
				// 运费
				freight: 0,
				// 总金额
				total: 0,
				totalCurrent: 0,
				location: {},
				activeKey: 0,
				sidebarList: [],
				rightTimeList: [],
				radioTime: "",
				radioPayType: "1",
				// 卡信息
				CardInfo: {},
				// 自取时候用户电话
				phone_user: "",
				name_user: "",
				orderId: "",
				// 购物车列表sid
				cardSids: [],
				ProdTotal: 0,
				// 优惠方案id
				radioDiscount: "",
				DiscountList: [],
				// 整天的时间段
				allTimeSlot: [],
				// 记录时间段
				RecordTime: {},
				// 编辑的地址
				areaInfo: {},
				//当前的配送类型
				currentDeliveryType: "",
				testData: {},
				allData: {},
				totalCurrentScore: 0,
				currentIndex: 0,
				// item:JSON.parse(sessionStorage.getItem('currentCard')),
				location:{
					longitude: 30.47988,
					latitude: 114.41739
				},
				takeDeliveryTpey:''
			};
		},
		async created() {
			if (
				!this.$store.state.currentCard ||
				this.$store.state.currentCard.length === 0
			) {
				this.$Router.back(2)
				this.$Router.back(100)
				// window.history.go(-1);
			}
			let item = this.$store.state.currentCard || [];
			console.log(item)
			// item.forEach(D => {
			// 	if (D.SID) {
			// 		this.cardSids.push(D.SID);
			// 	}
			// 	if (D.PartsNo instanceof Array) {
			// 		let arr = [];
			// 		let newArr = JSON.parse(JSON.stringify(D.PartsNo));
			// 		newArr.forEach(data => {
			// 			arr.push(data.ProdNo);
			// 		});
			// 		D.PartsNo = arr.join(",");
			// 	}
			// });

			// this.currentItem = JSON.stringify(item);
			this.currentItem = item;
			// console.log(this.currentItem,'currentItem')
			this.cardSids = this.cardSids ? this.cardSids.join(",") : "";

			if (this.$Route.query.isIntegral) {
				await this.getInfoIntegral();
			} else {
				await this.getInfo();
			}
		},
		methods: {
			// 从商品下单的信息
			async getInfo() {
				this.loading = true;
				uni.showLoading()
				try {
					let data = await vipCard(
					  {
						Action: "TicketBuy",
						ProdList:this.currentItem          
					  }, "UProdOpera")
					  console.log(data,'电子券信息列表')
				} catch (e) {
					console.log(e);
				}
			},
			async getInfoIntegral() {
				try {
					uni.showLoading()
					let {
						Data
					} = await vipCard({
							Action: "SettlePay",
							ProdList: this.currentItem
						},
						"UIntegralOpera"
					);
					this.prodList = Data.ProdList;
					this.allData = Data;
					this.CardInfo = Data.CardInfo;
					this.currentItem = JSON.parse(JSON.stringify(this.prodList));
					this.totalCurrent = parseFloat(Number(Data.SalePriceTotal).toFixed(2));
					if (Data.ScoreTotal) {
						this.totalCurrentScore =
							parseFloat(Number(Data.ScoreTotal).toFixed(2)) || 0;
					}
					this.loading = false;
					uni.hideLoading()
				} catch (e) {
					this.loading = false;
					uni.hideLoading()
				}
			},
			orderArea() {},
			async getWxConfig(){
				try {
					let {
						Data
					} = await vipCard({
						Action: "GetJSSDK",
						Url: window.location.href
					}, "UProdOpera");
					
					wx.config({
						debug: false,
						appId: Data.SDK.appId,
						timestamp: Data.SDK.timestamp,
						nonceStr: Data.SDK.noncestr,
						signature: Data.SDK.signature,
						jsApiList: ["getLocation","openAddress","scanQRCode"]
					});
					// console.log(wx.config)
					wx.ready(res => {
						let _this = this;
					    wx.getLocation({
					       type: 'gcj02',  // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					      success: function(res) {
							  // alert(JSON.stringify(res))
					        // _this.location.latitude = res.latitude;// 纬度，浮点数，范围为90 ~ -90
					        // _this.location.longitude = res.longitude;// 经度，浮点数，范围为180 ~ -180。
							_this.location = {
								longitude: res.longitude,
								latitude: res.latitude
							}
							_this.$store.commit("SET_CURRENT_LOCATION", _this.location);
							sessionStorage.setItem('location',JSON.stringify(_this.location))							
					      },
					      cancel: function(res) {
					       this.$toast.fail(res);
					      }
					    });
					  wx.error(function(res) {
					    this.$toast.fail(res);
					    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
					    console.log("调用微信接口获取当前位置失败", res);
					  });
					})
				} catch (e) {
					// console.log(e, "55555");
				}
			},
			getAddress() { //获取共享地址
				let _this = this;
				wx.openAddress({
					success: function(res) {
						console.log(JSON.stringify(res))
						_this.name_user = res.userName;
						_this.phone_user = res.telNumber;
					},
					cancel: function(res) {
						this.$toast.fail(res);
					}
				});
			},
			// 自取和外卖的切换按钮，暂时不用了
			changeMode(val) {
				// 1自取，2 外卖
				// console.log(val, '改变配送方式')
				this.radioModes = val;
				// this.$store.state.orderType === 'takein'
				this.areaList = val == 1 ? this.DeliveryAreaList : this.takeOver;
				this.currentArea = this.areaList[0];

				if (val === 1) {
					this.totalCurrent = this.total - this.freight;
					// this.currentArea = {};
				} else {
					this.totalCurrent = this.total;
					if (this.takeOver.filter(D => D.Defaults === '1').length > 0) {
						this.currentArea = this.takeOver.filter(D => D.Defaults === '1')[0]
					}
					this.resultArea = this.currentArea.SID;
				}
				this.totalCurrent = parseFloat(Number(this.totalCurrent).toFixed(2));
			},
			radioChange() {
				// 控制地址的展示
				this.showAreaList = true;
				this.$refs.showAreaList.open()
			},
			radioPayChange(val) {
				if (this.CardInfo && Number(this.CardInfo.Balance) < this.totalCurrent) {
					return;
				}
				this.radioPayType = val.detail.value
			},
			changeGroup(val) {
				this.resultArea = val.detail.value
			},
			// 切换并选择地址  最后提交的时候把这个地方的经纬度传给后台
			async changeArea(val,index){
				console.log(val,index,'选择地址这一块')
				this.showAreaList = true;
				this.$refs.showAreaList.open()
				let api;
				if (this.radioModes === 1) {
					api = "IsPickShop";
				} else {
					if (this.currentDeliveryType.indexOf("2") > -1) {
						//外卖
						api = "CalcFreight";
					} else if (this.currentDeliveryType.indexOf("3") > -1) {
						//物流
						api = "CalcLogistics";
					}
				}
				try{
					this.loading = true;
					uni.showLoading()
					let obj = {
						Action:api,
						Latitude: val.Latitude || "",
						Longitude: val.Longitude || "",
						ShopSID: this.radioModes === 1 ? val.SID : "",
						PayType: this.radioPayType,
						ProdList: JSON.stringify(this.currentItem)
					}
					console.log(obj,'obj')
					let { Data } = await vipCard(obj, "UProdOpera");
					// 把选择的地址赋值到页面上
					if (this.radioModes === 1) {
						this.currentArea = val;
						let currentStoreInfo = this.currentArea
						this.$store.commit("SET_CURRENT_STORE", currentStoreInfo)
					} else {
						this.currentArea = val;
						this.freight = Data.Freight;
						sessionStorage.setItem('takeOutAddress', JSON.stringify(this.currentArea));
					}
					this.showAreaList = false;
					this.$refs.showAreaList.close()
				}catch(e){
					console.log(e)
				}
				
			},
			clickEdit(val) {
				this.areaInfo = val;
				this.$refs.addEditArea.open()
				this.addEditArea = true;
			},
			clickGo() {
				this.$refs.addEditArea.close()
				this.addEditArea = false;
			},
			clickLeft() {
				if (this.$Route.query.flag) {
					this.$Router.push({
						path: '/pages/shoppingMall/menu_naixue/menu/menu',
						query: {
							flag: 'Deflocation'
						}
					})
				} else {
					this.$Router.push(this.$store.state.historyUrl)
				}

			},
			clickDataTime() {
				console.log('吊起时间')
				this.selectTime = true;
				this.$refs.selectTime.open()
			},
			clickUserDiscount() {
				this.discountProgram = true;
				this.$refs.discountProgram.open()
			},
			clickTime() {},
			async saveAreaSet() {
				this.$refs.addEditArea.close()
				this.addEditArea = false;
				this.loading = true;
				uni.showLoading()
				let listArea = await this.saveArea(false);
				this.areaList = listArea;
				this.takeOver = listArea;
				this.loading = false;
				uni.hideLoading()
			},
			async saveArea(bool) {
				try {
					let type;
					if (this.currentDeliveryType.indexOf("2") > -1) {
						type = 1;
					} else if (this.currentDeliveryType.indexOf("3") > -1) {
						type = 2;
					}
					let {
						Data
					} = await vipCard({
							Action: "GetAddressList",
							Type: type
						},
						"UMemberOpera"
					);
					if (bool) {
						uni.showLoading()
					}
					return Data.AddressList;
				} catch (e) {
					return [];
				}
			},
			PayTypeClick(item) {
				if (this.CardInfo && Number(this.CardInfo.Balance) < this.totalCurrent) {
					return;
				}
				this.radioPayType = item;
			},
			changeSider(index) {
				this.currentIndex = index
				this.activeKey = index
				if (this.RecordTime.index === index) {
					this.radioTime = this.RecordTime.radioTime;
				} else {
					this.radioTime = "";
				}
				if (index !== 0) {
					this.rightTimeList = this.allTimeSlot;
				} else {
					this.rightTimeList = this.todayTimeSlot;
				}
			},
			rightTimeClick(item) {
				this.RecordTime = {
					radioTime: item,
					index: this.activeKey
				};
				this.radioTime = item;
				this.selectTime = false;
				this.$refs.selectTime.close()
				this.UserTime = this.sidebarList[this.activeKey] + " " + this.radioTime;
			},
			radioTimeFun(val) {
				this.radioTime = val.detail.value
			},
			setDiscountClick(val) {
				this.radioDiscount = val.detail.value
			},
			async DiscountClick(item) {
				let PrefNo = item.PrefNo;
				if (item === "undefined") {
					PrefNo = "";
				}
				this.discountProgram = false;
				this.$refs.discountProgram.close()
				try {
					let obj = {
						Action: "SelectDisc",
						PrefNo: PrefNo,
						ProdList: this.currentItem,
						PayType: this.radioPayType,
						Latitude: this.currentArea.Latitude,
						Longitude: this.currentArea.Longitude
					};
					this.loading = true;
					uni.showLoading();
					let {
						Data
					} = await vipCard(obj, "UProdOpera");
					
					this.totalCurrent = parseFloat(Number(Data.Total ? Data.Total : Data.SumTotal).toFixed(2));
					this.loading = false;

					uni.hideLoading();
				} catch (e) {
					this.loading = false;
					uni.hideLoading();
				}
			},
			areaSet() {
				this.areaInfo = {};
				this.addEditArea = true;
				this.$refs.addEditArea.open()
			},
			async submitMoney() {
				
				if (this.radioDiscount === "undefined") {
					this.radioDiscount = "";
				}
				
				let obj = {
					Action: "TicketPay",
					ProdList: this.currentItem,
				};

				if (JSON.parse(this.currentItem)[0].hasOwnProperty("PromotionItemSID")) {
					// 活动
					obj.PromotionItemSID = JSON.parse(this.currentItem)[0].PromotionItemSID;
				}
				if (this.$Route.query.isIntegral) {
					let currentItems = JSON.parse(this.currentItem);
					obj = currentItems[0];
					obj.Action = "OrderPay";
					obj.PayType = this.radioPayType;
					obj.UserRemarks = this.UserRemarks;
					obj.DeliveryType = 1;
					//积分
					if (!this.CardInfo) {
						this.$toast.fail("未绑定微卡");
						return;
					}
				}
				let Opera = this.$Route.query.isIntegral ?
					"UIntOrderOpera" :
					"UOrderOpera";

				// console.log(JSON.stringify(obj), "objobj");
				// return;
				this.loading = true;
				uni.showLoading();
				try {
					let {
						Data
					} = await vipCard(obj, Opera);
					this.loading = false;
					uni.hideLoading();
					this.$store.commit("SET_CURRENT_CARD", []); //清掉购物车

					uni.removeStorageSync("alreadyPaid"); //清点之前标记的已经下单的字段
					if (this.radioPayType === "1") {
						//微卡支付
						this.$Router.push({
							path: "/pages/shoppingMall/order/confirmCard",
							query: {
								Balance: this.CardInfo.Balance,
								Score: this.CardInfo.Score,
								PayScore: Data.hasOwnProperty("PayScore") ? Data.PayScore : "",
								total: Data.SumTotal,
								PayNo: Data.PayNo,
								IsPass: Data.IsPass
							}
						});
					} else {
						// 微信支付
						this.testData = Data;
						try {
							weChatPayment(this, Data, false);
						} catch (e) {
							that.$toast.fail("微信调起失败");
							this.loading = false;
							uni.hideLoading();
						}
					}
				} catch (e) {
					// that.$toast.fail("微信调起失败");
					this.loading = false;
					uni.hideLoading();
				}
			},
			// 点击icon调用微信共享地址中的通讯录
		},
		filters: {
			setSex2(val) {
				if (val == 0) {
					return '先生'
				} else if (val == 1) {
					return '女士'
				}
			}
		},
	};

	function setChangeData(num, aceTime) {
		let arrData = []; //日期
		let toDay = "";
		num = Number(num);
		for (let i = 0; i < num; i++) {
			let dayM = 24 * 60 * 60 * 1000; //一天的时间戳

			let date =
				aceTime > 1 ?
				new Date().getTime() + aceTime * dayM :
				new Date().getTime();

			toDay = i * dayM + date;
			arrData.push(getTime(toDay, true));
		}
		return arrData;
	}

	function setChangeTime(ShopBase, aceTime, dayAdvance) {
		let dayM = 60 * 60; //秒值
		let a = 60 * Number(ShopBase.IntervalMinute); //求秒值
		let endTime = countDown(ShopBase.EndTime);

		let startTime = Number(countDown(ShopBase.StartTime));
		let arr = [];
		let arrToday = [];
		while (startTime <= endTime) {
			arr.push(changeCountDown(startTime));
			startTime += a;
		}
		if (dayAdvance == 0) {
			arr.forEach(DATA => {
				DATA = countDown(DATA);
				if (
					dayAdvance == 0 &&
					DATA > countDown(getTime(false, false, true)) + Number(aceTime) * dayM
				) {
					arrToday.push(changeCountDown(DATA));
				}
			});
		} else {
			arrToday = arr;
		}

		return {
			arr,
			arrToday
		};
	}

	function countDown(time) {
		//20:08:90转换为秒
		var s = 0;
		var hour = time.split(":")[0];
		var min = time.split(":")[1];
		var sec = time.split(":")[2];
		s = Number(hour * 3600) + Number(min * 60) + Number(sec);
		return s;
	}

	function changeCountDown(value) {
		//秒转换为 20:08:90
		var theTime = parseInt(value);
		var middle = 0;
		var hour = 0;
		var result = "";
		if (theTime > 60) {
			middle = parseInt(theTime / 60);
			theTime = parseInt(theTime % 60);
			if (middle > 60) {
				hour = parseInt(middle / 60);
				middle = parseInt(middle % 60);
			}
		}
		hour = hour < 10 ? "0" + hour : hour;
		middle = middle < 10 ? "0" + middle : middle;
		theTime = theTime < 10 ? "0" + theTime : theTime;
		result = hour + ":" + middle + ":" + theTime;
		return result;
	}
</script>

<style lang="less">
	@import "../../../assets/css/radioModes";

	.setADcell {
		margin: 5px 0;
	}

	.confirm-order-style {
		margin-bottom: 80px;

		.uni-popup {
			z-index: 999
		}

		.setADcell {
			/deep/.detailView1 {
				flex: none;
			}

			/deep/.headView {
				flex: none;
				width: 90px;
			}
		}

		.radio-group-play {
			background-color: #fff;
			align-items: center;
			padding: 5px 24rpx;
			margin-top: 5px;

			.payStyle {
				background: rgb(255, 255, 255);
				font-size: 14px;
				color: rgb(90, 91, 92);
				padding: 13px 0px;
			}

			.radio-group-item {
				padding: 6px 0;
				display: flex;
			}

			.custom-title {
				vertical-align: middle;
			}
		}

		.total-style {
			background: #fff;
			text-align: right;
			line-height: 40px;
			font-size: 16px;
			padding-right: 10px;
			border-bottom: 1rpx solid #ebedf0;

			&__color {
				color: red;
			}
		}

		.order-area {
			background: #ffffff;
			padding: 14px 6px;
			display: flex;
		}

		.order-area-icon {
			margin: auto;

			img,
			image {
				margin: 0 10px;
				width: 40px;
				height: 40px;
			}
		}

		.order-area-phone {
			font-size: 14px;
			color: #909090;
			margin-left: 8px;
		}

		.order-area-location {
			font-size: 12px;
			margin-top: 3px;
		}

		.good_card_box {
			background: #ffffff;
			margin: 5px 0 5px;
			padding: 10px;

			.boxShadow {
				box-shadow: none;
			}

			.rightBox {
				margin: 0 10px;
			}
		}

		// .goodsBox-parts {
		/*margin-left: 10px !important;*/
		// }

		.confirm-order-popup {
			background-color: #fff;
			max-height: 50%;

			.top {
				padding: 10px 20px 10px;
				text-align: center;
				border-bottom: 1px solid #eee;
				position: relative;
			}

			.cancel {
				font-size: 12px;
				position: absolute;
				left: 20px;
				top: 50%;
				transform: translateY(-50%);
				color: #777;
			}
		}

		.bottom-area {
			max-height: 60vh;
			overflow: scroll;

			&__box {
				display: flex;
				padding: 8px 12px;
				align-items: center;
			}

			&__info {
				flex: 1;
				font-size: 14px;
			}

			&__icon {
				width: 30px;
				text-align: center;
				margin: auto;
			}

			&__phone {
				color: #969799;
				font-size: 12px;
				margin-top: 5px;
			}

			&__add {
				text-align: center;
				padding: 10px;
				border-top: 1px solid #eee;
			}

			.checkbox-my {
				margin-right: 10px;
			}
		}

		.confirm-area-popup {
			height: 100%;

			/deep/.uni-popup__wrapper-box {
				height: 100%;
				background: #fff;
			}
		}

		.confirm-selectTime-popup {
			height: 50vh;

			.leftNavsidebar {
				width: 130px;
				display: fixed;
				position: fixed;
				top: 0;
				overflow-y: scroll;
				background: #f8f8f8;
				height: 100vh;
			}

			.leftNavsidebar {
				.activeCanteen {
					background: #fff;
				}

				.homepageLeft {
					line-height: 60px;
					padding-left: 6px;
				}
			}
		}



		.rightTime {
			height: 50vh;
			padding: 8px;
			box-sizing: border-box;
			margin-left: 130px;
			background: #fff;
			overflow-y: scroll;
		}

		.wechat {
			width: 18px;
			height: 18px;
			margin-right: 8px;
			display: inline-block;
			font-size: 18px;
			vertical-align: middle;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
