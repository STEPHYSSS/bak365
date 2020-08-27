<template>
	<!-- 仿奈雪自取点单页面 -->
	<view>
		<uni-nav-bar :status-bar="true" @clickLeft="clickLeft" title="奈雪" :shadow="false" :fixed="true" left-icon="back"></uni-nav-bar>
		<view class="container">
			<view class="main">
				<view class="nav">
					<view class="header">
						<view class="nav_left">
							<text v-if="addressName">{{addressName}} </text>
							<text v-else>{{currentStoreInfo.Address}}</text>
							<view class="navFlex">
								<image src='@/static/images/order/location.png' style="width: 30rpx; height: 30rpx;" class="mr-10"></image>
								<!-- <span>距离您 989 米</span> -->
							</view>
						</view>
						<view class="nav_right">
							<view class="dinein" :class="{active: $store.state.orderType == 'takein'}" @click="toziqu">
								<text>自取</text>
							</view>
							<view class="takeout" :class="{active: $store.state.orderType == 'takeout'}" @click="toAddress">
								<text>外卖</text>
							</view>
						</view>
					</view>
					<view class="coupon">
						<text class="title">"霸气mini卡"超级购券活动，赶紧去购买</text>
						<view class="iconfont iconarrow-right"></view>
					</view>
				</view>
				<!-- 商品 滚动部分 -->
				<view class="content">
					<scroll-view class="menus" :scroll-into-view="menuScrollIntoView" scroll-with-animation scroll-y>
						<view class="wrapper">
							<view class="menu" :id="`menu-${item.SID}`" :class="{'current': item.SID === currentCateId}" v-for="(item, index) in goods"
							 :key="index" @tap="handleMenuTap(item.SID,index)">
								<text>{{ item.Name }}</text>
								<view class="dot" v-show="menuCartNum(item.SID)">{{ menuCartNum(item.SID) }}</view>
							</view>
						</view>
					</scroll-view>
					<!-- 右边商品展示部分 -->
					<scroll-view class="goods" scroll-with-animation scroll-y :scroll-top="cateScrollTop" @scroll="handleGoodsScroll">
						<view class="wrapper">
							<swiper class="ads" id="ads" autoplay="true" circular="true" indicatorDots="true" indicator-active-color="#ffaa00">
								<swiper-item v-for="(item, index) in goodsLunbo" :key="index">
									<view class="swiper-item">
										<image :src="item.Img" mode="aspectFill" />
									</view>
								</swiper-item>
							</swiper>
							<!-- 轮播图结束 -->
							<view class="list">
								<!-- category begin -->
								<view class="category" :id="`cate-${currentType.id}`">
									<view class="title">
										<text>{{ currentType.Name }}</text>
									</view>
									<view class="items">
										<!-- 商品 begin -->
										<view class="good" v-for="(good, key) in goods_list" :key="key">
											<image :src="good.Img" class="image" @tap="addCart(good)"></image>
											<view class="right">
												<text class="name">{{ good.Name }}</text>
												<text class="tips">{{ good.Describe }}</text>
												<view class="price_and_action">
													<text class="price">￥{{ good.SalePrice }}</text>
													<view class="btn-group" v-if="good.SpecType == '2'">
														<button class="btn property_btn" style="background-color: #ADB838;color: #fff;" hover-class="none" size="mini"
														 @tap="addCart(good)">
															选规格
														</button>
														<view class="dot" v-show="goodCartNum(good.SID)">{{ goodCartNum(good.SID) }}</view>
													</view>
													<!-- 常规加商品 -->
													<view class="btn-group" v-else>
														<button type="default" v-show="goodCartNum(good.SID)" plain class="btn reduce_btn" size="mini"
														 hover-class="none" @tap="handleReduceFromCart(good)">
															-
														</button>
														<view class="number" v-show="goodCartNum(good.SID)">{{ goodCartNum(good.SID) }}</view>
														<button type="primary" class="btn add_btn" style="background-color: #ADB838;" size="min" hover-class="none"
														 @tap="handleAddToCart(good, 1)">+
														</button>
													</view>
												</view>
											</view>
										</view>
										<!-- 商品 end -->
									</view>
								</view>
								<!-- category end -->
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- 购物车栏 begin -->
				<view class="cart-box" v-if="cart.length > 0">
					<view class="mark">
						<image src="/static/images/menu/cart.png" class="cart-img" @tap="openCartPopup"></image>
						<view class="tag">{{ getCartGoodsNumber }}</view>
					</view>
					<view class="flexBtn">
						<view class="price">￥{{getCartGoodsPrice}}</view>
						<button type="primary" class="pay-btn" @tap="toPay" :disabled="disabledPay">
							{{ disabledPay ? `差${spread}元起送` : '去结算' }}
						</button>
					</view>
				</view>
				<!-- 购物车栏 end -->
			</view>
			<!-- 商品详情模态框 begin -->
			<modal :show="goodDetailModalVisible" class="good-detail-modal" color="#5A5B5C" width="90%" custom padding="0rpx"
			 radius="12rpx">
				<view class="cover">
					<image :src="good.Img" class="image"></image>
					<view class="btn-group2">
						<image src="/static/images/menu/share-good.png"></image>
						<image src="/static/images/menu/close.png" @tap="closeGoodDetailModal"></image>
					</view>
				</view>

				<scroll-view class="detail" scroll-y>
					<view class="wrapper">
						<view class="basic">
							<view class="name">{{ goodsInfo.Name }}</view>
							<view class="tips">{{ goodsInfo.Tip }}</view>
						</view>
						<view class="properties">
							<view>规格</view>
							<view :class="{'isActive': currentIndex === index, 'skuTopChoiceItem': true }" v-for="(item,index) in normsList"
							 :key="item.SID" @click="skuTopChoice(index, item)">
								<view class="guige">
									{{item.Name}}
								</view>
							</view>
							<view>口味：{{kouwei}}</view>
							<!-- <view class="value" v-for="(item,index) in flavorList" :key="index" :class="{'isActive': currentIndex2 === index, 'skuTopChoiceItem': true }"
							@click="skuTopChoicekw(index)">
								<view >
									{{item}}
								</view>
							</view> -->
							<!-- <view class="property" v-for="(item, index) in good.property" :key="index">
								<view class="title">
									<text class="name">{{ item.name }}</text>
									<view class="desc" v-if="item.desc">({{ item.desc }})</view>
								</view>
								<view class="values">
									<view class="value" v-for="(value, key) in item.values" :key="key" :class="{'default': value.is_default}" 
								@tap="changePropertyDefault(index, key)">
										{{ value.value }}
									</view>
								</view>
							</view> -->
						</view>
					</view>
				</scroll-view>
				<view class="action">
					<view class="left">
						<view class="price">￥{{ goodsInfo.SalePrice }}</view>
						<view class="props">
							<!-- 展示选择的规格和口味 -->
							{{ this.normsList && this.normsList.length && `${this.normsList[this.currentIndex].Name} ${this.normsList[this.currentIndex].TastName}` }}
							<view class="skuTopInfoLimit" v-if="goodsInfo.MaxBuyCnt&&goodsInfo.MaxBuyCnt>0">(每人限购{{goodsInfo.MaxBuyCnt}}件)</view>
						</view>
					</view>
					<view class="btn-group">
						<button type="default" plain class="btn" size="mini" hover-class="none" @tap="handlePropertyReduce">
							<view>-</view>
						</button>
						<view class="number">{{ good.number }}</view>
						
						<button type="primary" class="btn" size="min" hover-class="none" @tap="handlePropertyAdd">
							<view>+</view>
						</button>
					</view>
				</view>
				<view class="add-to-cart-btn" @tap="AddToCartInModal(goodsInfo)">
					<view>加入购物车</view>
				</view>
			</modal>
			<!-- 结束 -->
			<popup-layer direction="top" :show-pop="cartPopupVisible" class="cart-popup">
				<template slot="content">
					<view class="top">
						<text @tap="handleCartClear">清空</text>
					</view>
					<scroll-view class="cart-list" scroll-y>
						<view class="wrapper">
							<view class="item" v-for="(item, index) in cart" :key="index">
								<view class="left">
									<view class="name">{{ item.Name }}</view>
									<view class="props">{{ item.props_text }}</view>
								</view>
								<view class="center">
									<text>￥{{ item.SalePrice }}</text>
								</view>
								<view class="right">
									<button type="default" plain size="mini" class="btn" hover-class="none" @tap="handleCartItemReduce(index)">
										-
									</button>
									<view class="number">{{ item.BuyCnt }}</view>
									<button type="primary" class="btn" size="min" hover-class="none" @tap="handleCartItemAdd(index)">
										+
									</button>
								</view>
							</view>
							<!-- <view class="item" v-if="orderType == 'takeout' && store.packing_fee">
								<view class="left">
									<view class="name">包装费</view>
								</view>
								<view class="center">
									<text>￥{{ parseFloat(store.packing_fee) }}</text>
								</view>
								<view class="right invisible">
									<button type="default" plain size="mini" class="btn" hover-class="none">
										<view class="iconfont iconsami-select"></view>
									</button>
									<view class="number">1</view>
									<button type="primary" class="btn" style="background-color: #ADB838" size="min" hover-class="none">
										<view class="iconfont iconadd-select"></view>
									</button>
								</view>
							</view> -->
						</view>
					</scroll-view>
				</template>
			</popup-layer>
		</view>
	</view>
</template>

<script>
	import goods from '../../../../api/goods.js'
	import modal from '@/components/modal/modal'
	import popupLayer from '@/components/popup-layer/popup-layer'
	import Mixins from "../../mixins.js"
	import {
		vipCard
	} from '@/api/http.js';
	export default {
		mixins: [Mixins],
		data() {
			return {
				curDes: '', // 多规格  已选信息
				kouwei: '',
				currentType: {},
				goods: [],
				menuScrollIntoView: '',
				cateScrollTop: 0,
				currentCateId: "4898881376767269607", //默认分类
				sizeCalcState: false,
				goodDetailModalVisible: false, //是否饮品详情模态框
				good: {}, //当前饮品
				category: {}, //当前饮品所在分类
				cart: [], //购物车
				cartPopupVisible: false, //已选择商品弹窗
				goods_list: [], //商品列表
				goodsLunbo: [],
				currentArea: {}, //当前选择的地址
				skuDataInfo: {}, //商品弹窗
				goodsInfo: {},
				addressName: this.$Route.query.addressName, //地址名称
				currentTast: [], //口味数组
				flavorList: [], //口味list
				normsList: [], //规格数组
				currentIndex: 0,
				currentIndex2: 0,
				currentStoreInfo:{},//商品地址

			}
		},
		async onLoad() {
			await this.getCouponList();
			await this.getList();
			this.getLunBoImg();
			this.getWxConfig() // 获取授权地址
			await this.getShopList()
			this.currentType = this.goods[0];
		},
		components: {
			goods,
			modal,
		},
		computed: {
			goodCartNum() { //计算单个饮品添加到购物车的数量
				return (SID) => this.cart.reduce((acc, cur) => {
					console.log(SID,'0')
					if (cur.SID === SID) {	
						console.log(cur.SID,'2')
						return acc += cur.BuyCnt
					}
					return acc
				}, 0)
			},
			getCartGoodsNumber() { //计算购物车总数
				// return this.cart.length;
				return this.cart.reduce((acc, cur) => acc + cur.BuyCnt, 0)
			},
			getCartGoodsPrice() { //计算购物车总价
				// return this.cart.reduce((acc, cur) => +cur.SalePrice + acc, 0)
				return this.cart.reduce((acc, cur) => acc + cur.BuyCnt * cur.SalePrice, 0)
			},
			disabledPay() { //是否达到起送价
				return this.orderType == 'takeout' && (this.getCartGoodsPrice < this.store.min_price) ? true : false
			},
			spread() { //差多少元起送
				if (this.orderType != 'takeout') return
				return parseFloat((this.store.min_price - this.getCartGoodsPrice).toFixed(2))
			},
			// 左侧类别小角标数量
			menuCartNum() {
				return (SID) => this.cart.reduce((acc, cur) => {
					if (cur.ProdSID === SID) {
						return acc += cur.BuyCnt
					}
					return acc
				}, 0)
			},
		},
		methods: {
			// 轮播图
			async getLunBoImg(){
				try {
					let {
						Data
					} = await vipCard({
						Action: "GetImgList",
						Type:'4'
					}, "UShopOpera");
					this.goodsLunbo = Data.BannerList;
				} catch (e) {
					console.log(e);
				}
			},
			// 获取地址
			async getShopList() {
				let {
					Data
				} = await vipCard({
						Action: "GetShopList",
						DefLongitude: this.location.longitude,
						DefLongitude: this.location.latitude
					},
					"UShopOpera"
				);
				this.currentStoreInfo = {
					Name: Data.ShopList[0].Name,
					Address: Data.ShopList[0].Address,
					SID: Data.ShopList[0].SID
				}
				// console.log(currentStoreInfo);
				this.$store.commit("SET_CURRENT_STORE",this.currentStoreInfo)
			},
			// 商品类别
			async getCouponList() {
				try {
					let {
						Data
					} = await vipCard({
						Action: "GetCateList"
					}, "UProdOpera");
					this.goods = Data.ProdCateList;
				} catch (e) {
					console.log(e);
				}
			},
			// 商品
			async getList(val) {
				try {
					let params = val ? val : this.goods[0].SID;
					let {
						Data
					} = await vipCard({
							Action: "GetProdInfoList",
							CateSID: params
						},
						"UProdOpera"
					);

					this.goods_list = Data.Prod_InfoList;
					this.loading = false;
				} catch (e) {
					this.loading = false;
				}
			},

			handleMenuTap(id, index) { //点击菜单项事件
				this.currentType = this.goods[index];
				if (!this.sizeCalcState) {
					this.calcSize()
				}
				this.currentCateId = id;
				this.$nextTick(() => this.cateScrollTop = this.goods.find(item => item.SID == id).top);
				// 
				this.getList(id);
			},

			handleGoodsScroll({
				detail
			}) { //商品列表滚动事件
				if (!this.sizeCalcState) {
					this.calcSize()
				}
				const {
					scrollTop
				} = detail
				let tabs = this.goods.filter(item => item.top <= scrollTop).reverse()
				if (tabs.length > 0) {
					this.currentCateId = tabs[0].id
				}
			},
			// 计算滚动
			calcSize() {
				let h = 10

				let view = uni.createSelectorQuery().select('#ads')
				view.fields({
					size: true
				}, data => {
					h += Math.floor(data.height)
				}).exec()

				this.goods.forEach(item => {
					let view = uni.createSelectorQuery().select(`#menu-${item.SID}`)
					view.fields({
						size: true
					}, data => {
						item.top = h
						h += data.height
						item.bottom = h
					}).exec()
				})
				this.sizeCalcState = true
			},
			clickLeft() { // 头部返回
				this.$Router.push('/pages/shoppingMall/login')
			},
			// 点击自取和外卖时状态改变
			toziqu() {
				this.$store.commit("SET_ORDER_TYPE", 'takein');
			},
			toAddress() {
				this.$store.commit("SET_ORDER_TYPE", 'takeout');
				this.$Router.push({
					path: '/pages/myAddress/myAddress',
					query: {
						flag: 'towaimai'
					}
				})
			},
			// 点击规格、图片需要调用的商品详情接口
			// 多规格商品要传specSID
			async addCart(item) {
				// try {
				// 	let obj = {
				// 		Action: "GetProdInfo"
				// 	};
				// 	Object.assign(obj, item);

				// 	let {
				// 		Data
				// 	} = await vipCard(obj, "UProdOpera");

				// 	this.skuDataInfo = Data;
				// 	this.goodsInfo = Data.ProdInfo;
				// 	this.normsList = Data.SpecList;
				// 	this.normsList.forEach(val => {
				// 		this.$set(val, 'type', 2);
				// 	});
				// 	if (this.goodsInfo.SpecType === '2') {
				// 		this.kouwei = this.normsList[0].TastName;
				// 	}
				// 	this.good = JSON.parse(JSON.stringify({ ...this.goodsInfo,
				// 		number: 1
				// 	}))
				// 	this.category = JSON.parse(JSON.stringify(item))
				// 	this.goodDetailModalVisible = true
				// } catch (e) {
				// 	console.log(e);
				// }
				this.publicGoodsInfo(item);
				this.goodDetailModalVisible = true
			},
			// 选择规格
			skuTopChoice(i, item) {
				console.log(i)
				if (this.currentIndex === i) {
					return;
				}
				this.currentIndex = i;
				this.kouwei = item.TastName;
			},
			//切换口味
			skuTopChoicekw(i){
				if (this.currentIndex2 === i) {
					return;
				}
				this.currentIndex2 = i;
			},
			// 普通商品---添加 
			async handleAddToCart(good, num) { //添加到购物车
				const Buy = {
					BuyCnt: num
				}
				this.publicGoodsInfo(good,Buy);
				const index = this.cart.findIndex(item => {
					if (good.TastName) {
						return (item.SID === good.SID) && (item.Describe === good.Describe)
					} else {
						return item.SID === good.SID
					}
				})
				if (index > -1) {
					this.cart[index].BuyCnt += num
				} else {
					const obj = {
						ProdNo: good.ProdNo,
						SpecType: this.goodsInfo.SpecType,
						TastName: good.TastName,
						BuyCnt: num,
						PartsList: '',
						ProdSID: good[good.type === 2 ? 'ProdSID' : 'SID'],
						Name: good.Name,
						SalePrice: good.SalePrice,
						Img: good.Img,
						Describe: good.Describe,
						DeliveryType: '2,1',
						ProdType: 0,
						DeliveryType:  this.goodsInfo.DeliveryType,
						PromotionSID: "",
					};
					if (good.type === 2) {
						this.$set(obj, 'SpecSID', good.SID);
					}
					this.cart.push(obj);
				}
			},
			// 普通商品--减
			handleReduceFromCart(good) {
				const index = this.cart.findIndex(item => item.SID === good.SID)
				this.cart[index].BuyCnt -= 1
				if (this.cart[index].BuyCnt <= 0) {
					this.cart.splice(index, 1)
				}
			},
			// 点击加号和图片和规格调用的商品信息
			async publicGoodsInfo(good,Buy){
				try {
					let obj = {
						Action: "GetProdInfo"
					};
					Object.assign(obj, good, Buy);
				
					let {
						Data
					} = await vipCard(obj, "UProdOpera");
					this.skuDataInfo = Data;
					this.goodsInfo = Data.ProdInfo;
					this.normsList = Data.SpecList;					
					this.normsList.forEach(val => {
						this.$set(val, 'type', 2);
					});
					if (this.goodsInfo.SpecType === '2') {
						this.kouwei = this.normsList[0].TastName;
					}
					this.good = JSON.parse(JSON.stringify({ ...this.goodsInfo,
						number: 1
					}))
					this.category = JSON.parse(JSON.stringify(item))
				} catch (e) {
					console.log(e);
				}
			},
			// 点击图片或者选择规格时弹窗里的加入购物车按钮
			async AddToCartInModal(good) {
				// 点击的时候会把商品信息带入，数量buycut，价格
				this.handleAddToCart(this.normsList[this.currentIndex], this.good.number)
				this.closeGoodDetailModal()
			},
			// changePropertyDefault(index, key) { //改变默认属性值
	
			// },

			closeGoodDetailModal() { //关闭饮品详情模态框
				this.goodDetailModalVisible = false
				this.category = {}
				this.good = {}
			},
			// 模态框里的加减
			handlePropertyAdd() {
				this.good.number += 1
				if(this.good.number > this.goodsInfo.MaxBuyCnt){
					this.good.number = this.goodsInfo.MaxBuyCnt
				}
			},
			handlePropertyReduce() {
				if (this.good.number === 1) return
				this.good.number -= 1
			},
			openCartPopup() { //打开/关闭购物车列表popup
				this.cartPopupVisible = !this.cartPopupVisible
				console.log(this.cart)
			},
			handleCartClear() { //清空购物车
				uni.showModal({
					title: '提示',
					content: '确定清空购物车么',
					success: ({
						confirm
					}) => {
						if (confirm) {
							this.cartPopupVisible = false
							this.cart = []
						}
					}
				})
			},
			handleCartItemAdd(index) {
				this.cart[index].BuyCnt += 1;				
			},

			handleCartItemReduce(index) { //购物车里面的加减
				if (this.cart[index].BuyCnt === 1) {
					this.cart.splice(index, 1)
				} else {
					this.cart[index].BuyCnt -= 1
				}
				if (!this.cart.length) {
					this.cartPopupVisible = false
				}
			},
			toPay() { //去结算
				// if(!this.isLogin){
				// 	uni.navigateTo({url: '/pages/login/login'})
				// 	return
				// }				
				uni.showLoading({
					title: '加载中'
				})
				uni.setStorageSync('cart', JSON.parse(JSON.stringify(this.cart)))
				try {
					let obj = {
						ProdList: [],
						Action: "SetShopCart"
					};
					// 	let paramsArr = []; //第一个为商品，后面的都是配件

					// 	paramsArr[0] = {
					// 		ProdNo: '',//商品库存
					// 		ProdType: 0,
					// 		SpecType: this.skuDataInfo.ProdInfo.SpecType,
					// 		TastName: this.flavorList,
					// 		BuyCnt: this.acc,
					// 		PartsList:'',
					// 		PartsNo: '',
					// 		ProdSID: this.skuDataInfo.ProdInfo.SID,
					// 		DeliveryType: this.skuDataInfo.ProdInfo.DeliveryType,
					// 		SpecSID: this.skuDataInfo.ProdInfo.SpecType,

					// 		PromotionSID:""
					// 	};
					// obj.ProdList = JSON.stringify(paramsArr);
					obj.ProdList = JSON.parse(JSON.stringify(this.cart));
					// console.log(obj);
					// return;
					// let currentItem = [paramsArr[0]];
					let currentItem = this.cart;
					if (currentItem.length > 0) {
						this.$store.commit("SET_CURRENT_CARD", currentItem);
						this.$Router.push({
							path: '/pages/shoppingMall/order/confirmOrder',
							query:{flag:'tpay'}
						})
					}
				} catch (e) {
					console.log(e);
				}

				// uni.setStorageSync('cart', JSON.parse(JSON.stringify(this.cart)))
				// let currentItem = JSON.parse(JSON.stringify(this.cart));
				// console.log(currentItem);
				// this.$store.commit("SET_CURRENT_CARD", currentItem);
				// this.$Router.push("/pages/shoppingMall/order/confirmOrder");
				uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss">
	@import '@/pages/shoppingMall/menu_naixue/menu/menu.scss';

	.isActive {
		width: 50px;
		text-align: center;
		background-color: #ADB838;
		color: #ffffff;
		border-radius: 4px;
		padding: 8px 15px;
		font-size: 13px;
		margin: 12px 0;
	}
</style>
