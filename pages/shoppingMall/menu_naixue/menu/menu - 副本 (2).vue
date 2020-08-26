	<template>
	<!-- 仿奈雪自取点单页面 -->
	<view>
		<uni-nav-bar :status-bar="true" @clickLeft="clickLeft" title="奈雪" :shadow="false" :fixed="true" left-icon="back"></uni-nav-bar>
		<view class="container">
			<view class="main">
				<view class="nav">
					<view class="header">
						<view class="nav_left">
							<text>{{addressName}} </text>
							<view class="navFlex">
								<image src='@/static/images/order/location.png' style="width: 30rpx; height: 30rpx;" class="mr-10"></image>
								<span>距离您 989 米</span>
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
										<image :src="item.image" mode="aspectFill" />
									</view>
								</swiper-item>
							</swiper>
							<!-- 轮播图结束 -->
							<view class="list">
								<!-- category begin -->
								<view class="category">
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
													<view class="btn-group" v-if="good.TastName">
														<button class="btn property_btn" style="background-color: #ADB838;color: #fff;" hover-class="none" size="mini"
														 @tap="addCart(good)">
															选规格
														</button>
														<!-- <button class="btn property_btn" style="background-color: #ADB838;color: #fff;" hover-class="none" size="mini"
														 @tap="showGoodDetailModal(item, good)">
															选规格
														</button> -->
														<view class="dot" v-show="goodCartNum(good.SID)">{{ goodCartNum(good.SID) }}</view>
													</view>
													<view class="btn-group" v-else>
														<button type="default" v-show="goodCartNum(good.SID)" plain class="btn reduce_btn" size="mini"
														 hover-class="none" @tap="handleReduceFromCart( good)">
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
					<image  :src="good.Img" class="image"></image>
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
							<view v-if="flavorList.length!==0">口味</view>
							<view class="value" v-for="(item,index) in flavorList" :key="index" style="width: 50px;text-align: center;background-color: #ADB838;color: #ffffff;border-radius: 4px;padding: 8px 15px;font-size: 13px;margin:12px 0;">
								<view >
									{{item}}
								</view>
							</view>
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
						<view class="props" >
							<!-- 展示选择的规格和口味 -->
							{{ getGoodSelectedProps(goodsInfo.flavorList) }}
						</view>
					</view>
					<view class="btn-group">
						<button type="default" plain class="btn" size="mini" hover-class="none" @tap="handlePropertyReduce">
							-
						</button>
						<view class="number">{{ good.number }}</view>
						<button type="primary" class="btn" size="min" hover-class="none" @tap="handlePropertyAdd">
							+
						</button>
					</view>
				</view>
				<view class="add-to-cart-btn" @tap="handleAddToCartInModal">
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
									<view class="number">{{ item.number }}</view>
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
	import {
		vipCard
	} from '@/api/http.js';
	export default {
		data() {
			return {
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
				goodsLunbo: [{
						image: 'https://img-shop.qmimg.cn/s23107/2020/04/27/4ebdb582a5185358c4.jpg?imageView2/2/w/600/h/600'
					},
					{
						image: 'https://images.qmai.cn/s23107/2020/05/08/c25de6ef72d2890630.png?imageView2/2/w/600/h/600'
					},
					{
						image: 'https://img-shop.qmimg.cn/s23107/2020/04/10/add546c1b1561f880d.jpg?imageView2/2/w/600/h/600'
					},
					{
						image: 'https://images.qmai.cn/s23107/2020/04/30/b3af19e0de8ed42f61.jpg?imageView2/2/w/600/h/600'
					},
					{
						image: 'https://img-shop.qmimg.cn/s23107/2020/04/17/8aeb78516d63864420.jpg?imageView2/2/w/600/h/600'
					}
				],
				currentArea: {}, //当前选择的地址
				skuDataInfo: {},//商品弹窗
				goodsInfo:{},
				addressName:this.$Route.query.addressName,//地址名称
				currentTast: [],//口味数组
				flavorList:[],//口味list
				
			}
		},
		async onLoad() {
			await this.getCouponList();
			await this.getList();
			this.currentType = this.goods[0];
		},
		components: {
			goods,
			modal,
		},
		computed: {
			goodCartNum() { //计算单个饮品添加到购物车的数量
				return (SID) => this.cart.reduce((acc, cur) => {
					if (cur.SID === SID) {
						return acc += cur.number
					}
					return acc
				}, 0)
			},
			getCartGoodsNumber() { //计算购物车总数
				return this.cart.length;
			},
			getCartGoodsPrice() { //计算购物车总价
				console.log(this.cart);
				return this.cart.reduce((acc, cur) => +cur.SalePrice + acc, 0)
			},
			disabledPay() { //是否达到起送价
				return this.orderType == 'takeout' && (this.getCartGoodsPrice < this.store.min_price) ? true : false
			},
			spread() { //差多少元起送
				if (this.orderType != 'takeout') return
				return parseFloat((this.store.min_price - this.getCartGoodsPrice).toFixed(2))
			},

			menuCartNum() {
				return (SID) => this.cart.reduce((acc, cur) => {
					if (cur.ProdSID === SID) {
						return acc += cur.number
					}
					return acc
				}, 0)
			},
		},
		methods: {
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
					let view = uni.createSelectorQuery().select(`#cate-${item.SID}`)
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
			toziqu(){
				this.$store.commit("SET_ORDER_TYPE", 'takein');
			},
			toAddress(){
				this.$store.commit("SET_ORDER_TYPE", 'takeout');
				this.$Router.push({path:'/pages/myAddress/myAddress',query:{flag:'towaimai'}})
			},
			// 点击规格、图片需要调用的商品详情接口
			async addCart(item) {
				console.log(item)
				try {
					let obj = {
						Action: "GetProdInfo"
					};
					Object.assign(obj, item);
			
					let {
						Data
					} = await vipCard(obj, "UProdOpera");
					this.goodDetailModalVisible = true
					this.skuDataInfo = Data;
					this.goodsInfo = Data.ProdInfo;
					this.flavorList=this.goodsInfo.TastName.split(',')
				} catch (e) {
					console.log(e);
				}
			},
			// 当有多个口味的时候，进行选择
			skuTopChoiceFlavor(i) {
				console.log(i)
				this.$set(this.flavorList[i], "isActive", !this.flavorList[i].isActive);
			
				if (this.flavorList[i].isActive) {
					this.currentTast.push(this.flavorList[i]);
				} else {
					this.currentTast.forEach((D, j) => {
						if (!D.isActive) {
							this.currentTast.splice(j, 1);
						}
					});
				}
				// this.currentTast = sortArr("flavor", this.currentTast);
			},
			// 
			// changePropertyDefault(index, key) { //改变默认属性值
			// 	this.good.property[index].values.forEach(value => this.$set(value, 'is_default', 0))
			// 	this.good.property[index].values[key].is_default = 1
			// 	this.good.number = 1
			// },
			// 点击图片或者选择规格时弹窗
			showGoodDetailModal(item, good) {
				this.good = JSON.parse(JSON.stringify({ ...good,
					number: 1
				}))
				this.category = JSON.parse(JSON.stringify(item))
				console.log(this.category,'hah')
				this.goodDetailModalVisible = true
			},
			// 模态框的加入购物车按钮 和商品图片
			async handleAddToCartInModal() {
				// let PartsArr = [];
				// let PartsNoArr = [];
				// if (this.currentParts.length > 0) {
				// 	this.currentParts.forEach(D => {
				// 		PartsArr.push({
				// 			ProdNo: D.ProdNo,
				// 			BuyCnt: D.Stepper
				// 		});
				// 		PartsNoArr.push(D.ProdNo);
				// 	});
				// 	PartsNoArr = PartsNoArr.join(",");
				// } else {
				// 	PartsArr = "";
				// 	PartsNoArr = "";
				// }
				// let currentTastArr = [];
				// if (this.currentTast.length > 0) {
				// 	// 口味
				// 	this.currentTast.forEach(D => {
				// 		currentTastArr.push(D.Name);
				// 	});
				// 	currentTastArr = currentTastArr.join(",");
				// } else {
				// 	currentTastArr = "";
				// }
				try {
					let obj = {
						ProdList: [],
						Action: "SetShopCart"
					};
					let paramsArr = []; //第一个为商品，后面的都是配件
				
					paramsArr[0] = {
						ProdNo: '',//商品库存
						ProdType: 0,
						SpecType: this.skuDataInfo.ProdInfo.SpecType,
						TastName: this.flavorList,
						BuyCnt: this.acc,
						PartsList:'',
						PartsNo: '',
						ProdSID: this.skuDataInfo.ProdInfo.SID,
						DeliveryType: this.skuDataInfo.ProdInfo.DeliveryType,
						SpecSID: this.skuDataInfo.ProdInfo.SpecType,
				
						PromotionSID:""
					};
					obj.ProdList = JSON.stringify(paramsArr);
					// console.log(obj);
					// return;
					
						if (currentItem.length > 0) {
							this.$store.commit("SET_CURRENT_CARD", currentItem);
							this.$Router.push("/pages/shoppingMall/order/confirmOrder");
						}
				} catch (e) {
					console.log(e);
				}
				// const product = Object.assign({}, this.good, {
				// 	props_text: this.getGoodSelectedProps(this.good),
				// 	props: this.getGoodSelectedProps(this.good, 'id')
				// })
				// this.cart.push(this.ProdInfo);
				
				// this.handleAddToCart(this.ProdInfo, this.good.number)
				this.closeGoodDetailModal()
			},
			handleAddToCart(good, num) { //添加到购物车
				const index = this.cart.findIndex(item => {
					if (good.TastName) {
						return (item.SID === good.SID) && (item.Describe === good.Describe)
					} else {
						return item.SID === good.SID
					}
				})
				if (index > -1) {
					this.cart[index].number += num
				} else {
					this.cart.push({
						SID: good.SID,
						ProdSID: this.currentType.SID,
						Name: good.Name,
						SalePrice: good.SalePrice,
						number: num,
						Img: good.Img,
						TastName: good.TastName,
						Describe: good.Describe,
						DeliveryType:'2,1',
						ProdNo:good.ProdNo
						
					})
				}
			},
			getGoodSelectedProps(good, type = 'text') { //计算当前饮品所选属性
				// if (good) {
				// 	let props = []
				// 	good.property.forEach(({
				// 		values
				// 	}) => {
				// 		values.forEach(value => {
				// 			if (value.is_default) {
				// 				props.push(type === 'text' ? value.value : value.id)
				// 			}
				// 		})
				// 	})
				// 	return type === 'text' ? props.join('，') : props
				// }
				// return ''
			},
			closeGoodDetailModal() { //关闭饮品详情模态框
				this.goodDetailModalVisible = false
				this.category = {}
				this.good = {}
			},
			handleReduceFromCart(item, good) {
				const index = this.cart.findIndex(item => item.id === good.id)
				this.cart[index].number -= 1
				if (this.cart[index].number <= 0) {
					this.cart.splice(index, 1)
				}
			},
			handlePropertyAdd() {
				this.good.number += 1
			},
			handlePropertyReduce() {
				if (this.good.number === 1) return
				this.good.number -= 1
			},
			openCartPopup() { //打开/关闭购物车列表popup
				this.cartPopupVisible = !this.cartPopupVisible
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
				this.cart[index].number += 1
			},
			handleCartItemReduce(index) { //购物车里面的加减
				if (this.cart[index].number === 1) {
					this.cart.splice(index, 1)
				} else {
					this.cart[index].number -= 1
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
				// uni.setStorageSync('cart', JSON.parse(JSON.stringify(this.cart)))
				// let currentItem = JSON.parse(JSON.stringify(this.cart));
				// console.log(currentItem);
				this.$store.commit("SET_CURRENT_CARD", currentItem);
				// this.$Router.push("/pages/shoppingMall/order/confirmOrder");
				uni.hideLoading()
			}
		}
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

<style lang="scss">
	@import '@/pages/shoppingMall/menu_naixue/menu/menu.scss';
</style>
