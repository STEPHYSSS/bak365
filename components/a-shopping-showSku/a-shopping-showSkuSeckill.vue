<template>
	<div :class="[mainStyle,'a-shopping-showSku']">
		<uni-popup class="van-popupSku" ref="popupSku" v-model="isShow" type="bottom" @change="closePopup">
			<div style="background-color: #fff;">
				<uni-icons type="closeempty" size="24" class="crossIcon" @click="crossIcon"></uni-icons>
				<div>
					<div class="skuTop">
						<div style="display: flex;">
							<div class="skuTopImg" @click="viewImg(goodsInfo.Img)">
								<a-up-img :key="goodsInfo.Img" :url="goodsInfo.Img |setImgPrex"></a-up-img>
							</div>
							<div class="skuTopInfo">
								<div class="skuTopInfoMoney">
									¥
									<span class="skuTopInfoMoneyNum">{{sumPrice}}</span>
								</div>
								<div>
									<span class="skuTopInfoSurplus" v-if="goodsInfo.StockType!=0&&goodsInfo.StoreQty>0&&skuDataInfo.TotalSurplusQty>0">剩余 {{skuDataInfo.TotalSurplusQty}} 件</span>
									<span class="skuTopInfoLimit" v-if="goodsInfo.MaxBuyCnt&&goodsInfo.MaxBuyCnt>0">(每人限购{{goodsInfo.MaxBuyCnt}}件)</span>
									<div class="skuTopInfoSurplus">
										已选 {{goodsInfo.Name}}{{currentNorms.Name}}
										<text style="margin-left: 5px;" v-for="(item,index) in checkStatic" :key="index + 'a'">
											<text v-if="index > 0"></text>{{item.Value.Name}}
											<text v-if="item.Value.Price && item.Value.Price !=0">￥{{item.Value.Price}}</text>
										</text>
									</div>
								</div>

								<div class="skuTopInfoSurplus" v-if="skuDataInfo.IsBuy === '0'">
									购买时间：
									<span style="color:#ee0a24;font-size:14px">{{goodsInfo.BuyTime |setBuyTime}}</span>
								</div>
							</div>
						</div>
					</div>
					<div class="skuBottom">
						<div class="skuTopChoice" v-if="normsList.length>0 || PartsList.length!==0 || attributeList.length >0">
							<div v-if="normsList.length>0">
								<span class="skuTopChoiceTitle">规格</span>
								<div :class="{'isActive': currentIndex === index, 'skuTopChoiceItem': true }" v-for="(item,index) in normsList"
								 :key="item.SID" @click="skuTopChoice(index)">{{item.Name}}</div>
							</div>
							<div v-if="PartsList.length!==0">
								<span class="skuTopChoiceTitle">配件(单独售价)</span>
								<div class="partsStyle" v-for="(item,index) in PartsList" :key="item.SID">
									<!-- @click="skuTopChoiceParts(index)" -->
									<div :class="{'isActive': item.isActive, 'skuTopChoiceItem': true }">售价¥{{item.SalePrice}} &nbsp;{{item.Name}}</div>
									<uni-number-box class="skuStepperStyle partsStepper" :value="item.Stepper" :min="0" :max="Number(item.StoreQty)"
									 @overlimit="overlimitParts(item.Stepper,index)" @change="skuTopChoiceParts($event,index)" />
								</div>
							</div>

							<!-- 商品属性 -->
							<div v-if="attributeList.length >0 ">
								<view class="property" v-for="(item, index) in attributeList" :key="index">
									<view class="skuTopChoiceTitle">
										<text class="name">{{ item.Name }}</text>
									</view>
									<view style="display: inline-block;" v-for="(value, index2) in item.Value" :key="value.Name"
									 @click="clickStatic(item, value,index2)">
										<view class="skuTopChoiceItem"  :class="isActiveName(value.Name)">
											{{value.Name}}
											<text v-if="value.Price !='0'">￥{{value.Price}}</text>
										</view>
									</view>
								</view>
							</div>
						</div>
						<div class="skuStepper">
							<uni-number-box class="skuStepperStyle" :value="valueStepper" @change="stepperMain" :min="1" :max="setStepperMax()"
							 @overlimit="overlimit" />
						</div>
					</div>
				</div>
				<!-- 底部占位 -->
				<div class="goods-action">
					<uni-view class="isProdType">
						<uni-view class="uni-tab__seat" @click="onClickButton">立即抢购</uni-view>				
					</uni-view>
				</div>
				<!-- <navSeckill class="goods-action" :options="options" :buttonGroup="buttonGroup" @buttonClick="onClickButton">
				</navSeckill> -->
			</div>
		</uni-popup>

		<div class="imgPopup">
			<uni-popup ref="imgPopup">
				<a-up-img :url="images"></a-up-img>
			</uni-popup>
		</div>
	</div>
</template>

<script>
	import {
		vipCard
	} from "@/api/http.js";
    import navSeckill from '@/components/uni-goods-nav/uni-goods-navSeckill.vue'
	export default {
		name: "showSku",
		props: {
			show: Boolean,
			seckill: {
				type: String,
				default () {
					return "";
				}
			},
			isBrowse: {
				type: String,
				default () {
					return "";
				}
			},
			skuDataInfo: Object,
		},
		data() {
			return {
				mainStyle: getApp().globalData.mainStyle,
				mainColor: getApp().globalData.mainColor,
				isShow: false,
				showImg: false,
				currentIndex: 0,
				valueStepper: 1,
				objProdInfo: {},
				// normsList: [],
				// flavorList: [],
				// partsList: [],
				// currentNorms: {},
				// currentTast: [],
				// currentParts: [],
				images: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2174909441,2495215020&fm=26&gp=0.jpg",
				//是否让立即购买
				disabledPay: false,
				options: [],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ffa200',
						color: '#fff',
						borderRadius: '25px 0 0 25px'
					},
					{
						text: '立即购买',
						backgroundColor: getApp().globalData.mainColor,
						color: '#fff',
						borderRadius: '0 25px 25px 0'
					}
				],
				normsList: [],
				PartsList: [],
				attributeList: [],
				goodsInfo: {},
				currentNorms: {}, //用来默认存放规格选中的第一个数据
				checkStatic: {}, //属性选中
				currentParts: [],
				currentTastArr:[],
			};
		},
		components: {
			navSeckill
		},
		created() {
			if (this.seckill) {
				this.buttonGroup = [{
					text: '立即购买',
					backgroundColor: '#fe5252',
					color: '#fff',
					borderRadius: '25px'
				}]
			}
		},
		computed: {
			isActiveName() {
				return function(name) {
					for (let i of this.checkStatic) {
						if (name === i.Value.Name) {
							return 'isActive'
						}
					}
					return ''
				}
			},
			sumPrice () {
				if(this.goodsInfo.SpecType==='1'){
					this.resultPrice = 0
					let num = Number(this.goodsInfo.SalePrice)
					if (this.goodsInfo.MemberPrice || this.goodsInfo.MemberPrice == 0) {
						num = Number(this.goodsInfo.MemberPrice)
					}
					if(this.skuDataInfo.AttributeList&&this.checkStatic.length>0){
						this.checkStatic.forEach(item => {
							if (item.Value.Name) {
								this.resultPrice += isNaN(Number(item.Value.Price)) ? 0 : Number(item.Value.Price)
							}
						});
					}
					this.resultPrice=(this.resultPrice + num)*this.valueStepper
					this.resultPrice = parseFloat(this.resultPrice.toFixed(2))
					return this.resultPrice
				}else{
					this.SpecResultPrice = 0;
					let num = Number(this.currentNorms.SalePrice)
					if (this.currentNorms.MemberPrice || this.currentNorms.MemberPrice == 0) {
						num = Number(this.currentNorms.MemberPrice)
					}
					if(this.skuDataInfo.AttributeList&&this.checkStatic.length>0){
						this.checkStatic.forEach(item => {
							if (item.Value.Name) {
								this.SpecResultPrice += isNaN(Number(item.Value.Price)) ? 0 : Number(item.Value.Price)
							}
						});
					}
					this.SpecResultPrice=(this.SpecResultPrice + num)*this.valueStepper
					this.SpecResultPrice = parseFloat(this.SpecResultPrice.toFixed(2))
					return this.SpecResultPrice
				}
			},
		},
		methods: {
			async onClickButton(bool) {
				console.log(bool)
				if (this.isBrowse) {
					return;
				}
				if (this.goodsInfo.StockType!='0' && Number(this.goodsInfo.StoreQty)  < Number(this.valueStepper)) {
					this.$toast("商品库存不足！");
					return;
				}
				let boolParts = this.currentParts.every(D => {
					return Number(D.StoreQty) > 0;
				});
				if (!boolParts) {
					this.$toast("配件库存不足！");
					return;
				}
				let PartsArr = [];
				let PartsNoArr = [];
				if (this.currentParts.length > 0) {
					this.currentParts.forEach(D => {
						PartsArr.push({
							SID: D.SID,
							BuyCnt: D.Stepper
						});
						PartsNoArr.push(D.SID);
					});
					PartsNoArr = PartsNoArr.join(",");
				} else {
					PartsArr = "";
					PartsNoArr = "";
				}
				try {
					let obj = {
						ProdList: [],
						Action: "SetShopCart"
					};
					let paramsArr = []; //第一个为商品，后面的都是配件
					let ProdNo = ''
					paramsArr[0] = {
						ProdNo:this.goodsInfo.SpecType =='2' || this.goodsInfo.SpecType =='3' ? this.currentNorms.ProdNo : this.goodsInfo.ProdNo,
						SpecType:this.goodsInfo.SpecType,
						BuyCnt: this.valueStepper,
						ProdSID: this.goodsInfo.SID,
						SpecSID:this.goodsInfo.SpecType =='2' || this.goodsInfo.SpecType =='3' ? this.goodsInfo.SpecSID : "",
						ProdType: this.goodsInfo.ProdType,//0是商品，1是电子券
						PartsNo:PartsNoArr,//配件编号
						PartsList:PartsArr ? JSON.stringify(PartsArr) : "",//配件数组
						ParamInfo:this.currentTastArr, //商品口味
						PromotionItemSID: this.goodsInfo.PromotionItemSID
					};
					obj.ProdList = JSON.stringify(paramsArr);
					let currentItemSeckill = obj.ProdList;
					// if (bool.index === 0 && !this.seckill) {
					// 	// 加入购物车
					// 	let data = await vipCard(obj, "UMemberOpera");
					// 	if (data.Message) {
					// 		this.$toast.success("成功加入购物车");
					// 		this.isShow = false;
					// 		this.$refs.popupSku.close()
					// 	}
					// } else {
						// 立即购买
						let currentItem = [paramsArr[0]];
						if(this.goodsInfo.ProdType==='1'){
								if (currentItemSeckill.length > 0) {
									this.$store.commit("SET_CURRENT_CARD", currentItemSeckill);
									this.$Router.push("/pages/shoppingMall/order/confirmOrderTic");
								}
							}else{
								if (currentItem.length > 0) {
									this.$store.commit("SET_CURRENT_CARD", currentItem);
									this.$Router.push("/pages/shoppingMall/order/confirmOrder");
								}
							}
					// }
				} catch (e) {
					this.$toast.error(e);
				}
				
			},
			closePopup(bool) {
				if (!bool.show) {
					this.valueStepper = 1;
					this.$emit("hideShow", this.isShow);
				}
			},
			crossIcon() {
				this.$refs.popupSku.close()
			},
			skuTopChoice(i) {//选择规格
				if (this.currentIndex === i) {
					return;
				}
				this.currentIndex = i;
				this.currentNorms = this.normsList[i];
			},
			clickStatic(item, value, key) { //选择属性
				for (let i of this.checkStatic) {
					if (item.Name === i.Name) {
						if (i.Value.Name === value.Name) {
							i.Value = {}
						} else {
							i.Value = value;
						}
					}
				}
				if (this.checkStatic.length > 0) {
					this.currentTastArr = "";
					let sumPrice = 0 // 合计金额
					this.checkStatic.forEach(item => {
						sumPrice = Number(item.Value.Price)
						if (item.Value.Name) {
							this.currentTastArr  += item.Value.Name + (sumPrice===0?'': `￥${sumPrice}`)+",";
							// arr += item.Value.Name + `￥${sumPrice}`;
						}
					});
					this.currentTastArr = this.currentTastArr.substring(0, this.currentTastArr.length - 1)
					//this.currentTastArr = sumPrice===0?this.currentTastArr: this.currentTastArr + `￥${sumPrice}`
				}
			},
			skuTopChoiceParts(e, i) {//选择配件
				if (e.inputValue > 0) {
					this.$set(this.PartsList[i], "isActive", true);
				} else {
					this.$set(this.PartsList[i], "isActive", false);
				}
				let arr = this.PartsList
				let choose = []
				arr.forEach(D => {
					arr[i].Stepper = e.inputValue;
				});
				
				let newarr = arr.filter(D => {
					return Number(D.Stepper) !== 0;
				});
				
				this.currentParts = sortArr("parts", newarr);
			},
			stepperMain(val) {
				this.valueStepper = val.inputValue
			},
			overlimitParts(e) {},
			setStepperMax() { //加号
				if (Number(this.goodsInfo.MaxBuyCnt) <Number(this.goodsInfo.StoreQty) &&Number(this.goodsInfo.MaxBuyCnt)) {
					return Number(this.goodsInfo.MaxBuyCnt);
				} else {
					return Number(this.goodsInfo.StoreQty);
				}
			},
			overlimit(e) { //减号
				if (e === "minus") {
					this.$toast("至少选择一件");
				}
				if (e === "plus") {
					let str = "";
					if(Number(this.goodsInfo.MaxBuyCnt)<=Number(this.valueStepper)){
						str = "每人限购" + this.goodsInfo.MaxBuyCnt + "件";
					}else if(this.goodsInfo.StockType!=0 &&Number(this.goodsInfo.StoreQty)<Number(this.valueStepper)){
						str = "商品库存不足";
					}else if(Number(this.skuDataInfo.TotalSurplusQty)==0||Number(this.skuDataInfo.TotalSurplusQty)<Number(this.valueStepper)){
						str = "活动库存不足";
					}
					this.$toast(str);
				}
			},
			viewImg(img) {
				this.$refs.imgPopup.open()
				this.showImg = true;
				this.images = this.$VUE_APP_PREFIX + img;
			}
		},
		watch: {
			show(val) {
				this.isShow = val;
				if (val) {
					this.$refs.popupSku.open()
					let skuDataInfo = this.skuDataInfo;
					this.goodsInfo = skuDataInfo.ProdInfo; //商品详情
					this.normsList = []; //规格
					this.PartsList = []; //配件
					this.attributeList = []; //属性
					if (skuDataInfo.PartsList) {
						this.PartsList = skuDataInfo.PartsList || [];
					}
					if (skuDataInfo.AttributeList) {
						this.attributeList = skuDataInfo.AttributeList || [];
						this.checkStatic = this.attributeList.map(item => {
							return {
								Name: item.Name,
								Value: {
									Name: "",
									Price: ""
								}
							}
						})
					}
					this.disabledPay = this.skuDataInfo.IsBuy === "0" ? true : false; //是否可以立即购买
					this.PartsList = skuDataInfo.PartsList || [];
					this.PartsList.forEach(D => {
						this.$set(D, "Stepper", 0);
					});

					this.currentIndex = 0;
				} else {
					this.$refs.popupSku.close()
					this.normsList = [];
					this.PartsList = [];
					this.attributeList = [];
					this.partsList.forEach(D => {
						this.$set(D, "isActive", false);
					});
				}
			}
		}
	};

	function setTast(arr, _this) {
		// 把口味设置成['d','2'] => [{Name:'d'}]
		if (!arr[0]) {
			return [];
		}
		arr.forEach((D, i) => {
			arr[i] = {
				Name: D
			};
			_this.$set(arr[i], "Name", D);
		});

		return arr;
	}

	function sortArr(type, Arr) {
		function compare(type) {
			let property = null;
			if (type === "parts") {
				//配件
				property = "ProdNo";
				return function(a, b) {
					let value1 = a[property];
					let value2 = b[property];
					return value1 - value2;
				};
			} else {
				property = "Name";
				return function(a, b) {
					return a[property].localeCompare(b[property], "zh-CN");
				};
			}
		}

		// 目前是以 id属性排序 ProdNo
		Arr = Arr.sort(compare(type));
		// console.log(Arr, "Arr");
		return Arr;
	}
</script>

<style lang="less">
	.imgPopup {
		.uni-popup {
			background-color: rgba(0, 0, 0, 0.8);
		}
	}

	.a-shopping-showSku {
		.uni-popup {
			z-index: 999;
		}

		/deep/.uni-tab__cart-sub-left {
			padding: 0;
		}
	}
	.isProdType{
		background-color: #fe5252;
		color: rgb(255, 255, 255);
		border-radius: 25px;
		width: 89%;
		text-align: center;
		height: 40px;
		margin: 0 auto;
		line-height: 40px;
		font-size: 16px;
		letter-spacing: 2px;
	}
	.van-popupSku {
		font-size: 14px;

		.goods-action {
			background: #fff;
			padding: 10px 15px;
		}

		.crossIcon {
			position: absolute;
			font-size: 20px;
			right: 10px;
			top: 10px;
		}

		.skuTop {
			display: flex;
			padding: 20px;
			border: 1px solid #ebedf0;
		}

		.skuTopImg {
			width: 100px;
			height: 100px;

			.van-image,
			img,
			image {
				width: 100%;
				height: 100%;
			}
		}

		.skuTopInfo {
			margin-left: 20px;

			.skuTopInfoMoney {
				color: #ee0a24;
				font-weight: 500;
				font-size: 22px;
				vertical-align: middle;
				word-wrap: break-word;
			}

			.skuTopInfoSurplus {
				margin-top: 8px;
				color: #969799;
				font-size: 12px;
				line-height: 16px;
			}

			.skuTopInfoLimit {
				display: inline-block;
				color: #ee0a24;
				font-size: 12px;
			}
		}

		.skuTopChoice {
			padding: 20px;
			border-bottom: 1px solid #ebedf0;
			// max-height: 50%;

			.skuTopChoiceTitle {
				padding-bottom: 12px;
				display: block;
			}

			.skuTopChoiceItem {
				display: inline-block;
				/*min-width: 40px;*/
				margin: 0 12px 12px 0;
				overflow: hidden;
				color: #323233;
				font-size: 13px;
				line-height: 16px;
				vertical-align: middle;
				border-radius: 4px;
				padding: 8px;
				background: #f7f8fa;
			}

			.partsStyle {
				display: flex;
				
				.partsStepper {
					flex: 1;
					justify-content: flex-end;
				}

				.skuTopChoiceItem {
					display: inline-block;
					margin: 0 12px 12px 0;
					overflow: hidden;
					color: #323233;
					font-size: 13px;
					line-height: 16px;
					vertical-align: middle;
					border-radius: 4px;
					padding: 8px;
					background: #f7f8fa;
				}
			}
		}

		.skuStepper {
			padding: 15px 20px;
			/*border-bottom: 1px solid #ebedf0;*/
			height: 28px;
			clear: both;

			.skuStepperStyle {
				float: right;
			}
		}

		.skuMessage {
			// margin-bottom: 60px;
		}

		.skuBottom {
			overflow: scroll;
			max-height: 50vh;
		}
	}
</style>
