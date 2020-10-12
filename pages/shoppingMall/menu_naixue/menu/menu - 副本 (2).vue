<template>
	<!-- 仿奈雪自取点单页面 -->
	<view>
		<!-- <image :src="item.Img | imgFilter" mode="aspectFill" /> -->
		<uni-nav-bar :status-bar="true" @clickLeft="clickLeft" title="点餐" :shadow="false" :fixed="true" left-icon="back"></uni-nav-bar>
		<view class="container">
			<view class="main">
				<view class="nav">
					<view class="header">
						<view class="nav_left" v-if="$store.state.orderType == 'takein'">
							<view class="store-name" @click="toShopAddress">
								<text>{{ currentStoreInfo.Name }}<text class="iconfont icon-jiantou" v-show="currentStoreInfo.Address"></text></text>								
							</view>
							<view class="store-location">
								<image src='/static/images/order/location.png'></image>
								<text style="color: #919293;">距离您 {{ currentStoreInfo.Length }}</text>
							</view>
						</view>
						<view class="nav_left overflow-hidden" v-else>
							<view class="nav_leftAdd">
								<image src='/static/images/order/location.png' style="width: 30rpx; height: 30rpx;"></image>
								<view class="addresName" @click="toAddress">
									{{ addressName.Address }}{{addressName.House}}
								</view>
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
						<!-- 左边栏 -->
						<view class="wrapper">							
							<view class="menu" :id="`menu-${item.SID}`" :class="{'current': item.SID === currentCateId}" v-for="(item, index) in goods" 
							:key="index" @tap="handleMenuTap(item.SID)">
								<text>{{ item.Name }}</text>
								<view class="dot" v-show="menuCartNum(item.id)">{{ menuCartNum(item.SID) }}</view>
							</view>
						</view>
					</scroll-view>
					<!-- goods list begin -->
					<scroll-view class="goods" scroll-with-animation scroll-y :scroll-top="cateScrollTop" @scroll="handleGoodsScroll">
						<!-- 右边商品栏 -->
						<view class="wrapper">
							<swiper class="ads" id="ads" autoplay="true" circular="true" indicatorDots="true" indicator-active-color="#ffaa00">
								<swiper-item v-for="(item, index) in goodsLunbo" :key="index">
									<view class="swiper-item">
										<image :src="item.Img | imgFilter" mode="aspectFill" />
									</view>
								</swiper-item>
							</swiper>
							<view class="list">
								<!-- category begin -->
								<view class="category" v-for="(item, index) in goods" :key="index" :id="`cate-${item.SID}`">
									<view class="title">
										<text>{{ item.Name }}</text>
									</view>
									<view class="items">
										<!-- 商品 begin -->
										<view class="good" v-for="(good, key) in item.children" :key="key">
											<image :src="good.Img | imgFilter" class="image"  @tap="addCart(good)"></image>
											<view class="right" v-if="good.ProdType == '0'">
												<text class="name">{{ good.Name }}</text>
												<text class="tips">{{ good.Describe }}</text>
												<view class="price_and_action">
													<text class="price">￥{{ good.SalePrice }}</text>
													<view class="btn-group" v-if="good.SpecType == '2'">
														<button class="btn property_btn" style="background-color: #ADB838;color: #fff;" hover-class="none" size="mini"
														 @tap="addCart(good)">
															选规格
														</button>														
														<view class="dot" v-show="good.cartNum">{{ good.cartNum }}</view>
													</view>
													<!-- 常规加商品 -->
													<view class="btn-group" v-else>
														<div @tap="handleReduceFromCart(good)" v-show="good.cartNum">
															<view class="iconfont icon-jianhao" style="font-size: 25px;"></view>
														</div>
														<view class="number" v-show="good.cartNum">{{ good.cartNum }}</view>													
														<div @tap="handleAddToCart(item, good, 1)">
															<view class="iconfont icon-add-fill" style="font-size: 22px;color: #ADB838;"></view>
														</div>
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
					<!-- goods list end -->
				</view>
				<!-- 商品 滚动部分结束 -->
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
					<image :src="good.Img|imgFilter" class="image"></image>
					<view class="btn-group2">
						<!-- <image src="/static/images/menu/share-good.png"></image> -->
						<view class="iconfont icon-fenxiang1" id="share" @click="share"></view>
						<image src="/static/images/menu/close.png" @tap="closeGoodDetailModal"></image>
					</view>
				</view>
			
				<scroll-view class="detail" scroll-y>
					<view class="wrapper">
						<view class="basic">
							<view class="name">{{ good.Name }}</view>
							<view class="tips">{{good.Tip }}</view>
						</view>
						<view class="properties" v-if="good.SpecType==='2'">
							<view class="titleSty">规格</view>
							<view class="specBox">
								<!-- <view class="static" :class="{'isActive': currentIndex === index }" v-for="(item,index) in normsList"
								 :key="item.SID" @click="skuTopChoice(index, item)">
									<view class="guige">
										{{item.Name}}
									</view>
								</view> -->
								<!-- property 代表规格口味数组 -->
							</view>
							<!-- <view class="favo" v-if="kouwei">
								<view class="titleSty">口味</view>
								<view class="teast" v-for="(item, index) in kouwei" :key="index">
									<view :class="currentIndex2 === index ? 'testBoxCheck' : 'testBox'" @click="skuTopChoicekw(index, item)">{{item}}</view>									
								</view>
							</view> -->
							<!--  -->
							<view class="skuTopInfoLimit" v-if="good.MaxBuyCnt&&good.MaxBuyCnt>0">(每人限购{{good.MaxBuyCnt}}件)
							</view>							
						</view>
						<!-- <view class="properties" v-else-if="kouwei2">
							<view class="favo">
								<view class="titleSty">口味</view>
								<view class="teast" >
									<view class="testBoxCheck">{{kouwei2}}</view>									
								</view>
							</view>
						</view> -->
					</view>
				</scroll-view>
				<view class="action">
					<view class="left">
						<view class="price">￥{{ good.SalePrice }}</view>
						<view class="props" v-if="good.SpecType==='1'">
						</view>
					</view>
					<view class="btn-group">
						<div @tap="handlePropertyReduce">
							<view class="iconfont icon-jianhao" style="font-size: 25px;"></view>
						</div>
						<view class="number">{{ good.number }}</view>
						<div @tap="handlePropertyAdd">
							<view class="iconfont icon-add-fill" style="font-size: 22px;color: #ADB838;"></view>
						</div>
					</view>
				</view>
				<view class="add-to-cart-btn" @tap="AddToCartInModal(good)">
					<view>加入购物车</view>
				</view>
			</modal>
			<!-- 结束 -->
			<!-- 清空购物车弹窗 -->
			<popup-layer direction="top" :show-pop="cartPopupVisible" class="cart-popup" style="z-index: 99;">
				<template slot="content">
					<view class="top">
						<text @tap="handleCartClear">清空</text>
					</view>
					<scroll-view class="cart-list" scroll-y>
						<view class="wrapper">
							<view class="item" v-for="(item, index) in cart" :key="index">
								<view class="left">
									<view class="name">{{ item.Name }}</view>
								</view>
								<view class="center">
									<text>￥{{ item.SalePrice }}</text>
								</view>
								<view class="right">
									<div @tap="handleCartItemReduce(index,item)">
										<view class="iconfont icon-jianhao" style="font-size: 25px;"></view>
									</div>
									
									<view class="number">{{ item.BuyCnt }}</view>
									<div  @tap="handleCartItemAdd(index,item)">
										<view class="iconfont icon-add-fill" style="font-size: 22px;color: #ADB838;"></view>
									</div>
								</view>
							</view>
						</view>
					</scroll-view>
					<div style="height: 30px;"></div>
				</template>
			</popup-layer>
			</view>
	</view>
</template>

<script>
	import modal from '@/components/modal/modal'
	import popupLayer from '@/components/popup-layer/popup-layer'
	import wx from 'weixin-js-sdk'
	import { vipCard } from '@/api/http.js';
	export default {
		data() {
			return {
				currentStoreInfo:{},//用来接收门店信息
				currentCateId: 6905,//默认分类
				menuScrollIntoView: '',
				cateScrollTop: 0,
				goods:[],//商品列表
				cart: [], //购物车
				goodsLunbo:[],//轮播列表
				goodDetailModalVisible: false, //是否饮品详情模态框
				good: {}, //当前饮品 暂不需要
				category: {}, //当前饮品所在分类
				cartPopupVisible: false,
			}
		},
		components: {
			modal
		},
		computed:{
			goodCartNum() { //计算单个饮品添加到购物车的数量
				return (SID) => this.cart.reduce((acc, cur) => {
					if (cur.SID === SID) {
						return acc += cur.BuyCnt
					}
					return acc
				}, 0)
			},
			getCartGoodsNumber() { //计算购物车总数
				if(this.cart.length>0){uni.setStorageSync('cart', JSON.parse(JSON.stringify(this.cart)))}
				return this.cart.reduce((acc, cur) => acc + cur.BuyCnt, 0)
			},
			getCartGoodsPrice() { //计算购物车总价
				return parseFloat(this.cart.reduce((acc, cur) => acc + cur.BuyCnt * cur.SalePrice, 0).toFixed(2))
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
		created(){			
			this.getLunBoImg();//轮播列表
			if(this.$store.state.orderType === 'takein'){
				this.getShopList();//门店列表
			}
			this.getTreeGoods();
		},
		methods:{
			async getShopList() {// 获取门店
				let { Data } = await vipCard({
					Action: "GetShopList",
					Longitude: this.$store.state.currentLocation.longitude,//获取授权的经纬度
					Latitude: this.$store.state.currentLocation.latitude
				},"UShopOpera");
				this.currentStoreInfo = {
					Name: Data.ShopList[0].Name,	
					Address: Data.ShopList[0].Address,
					SID: Data.ShopList[0].SID,
					Length:Data.ShopList[0].Length,
					Longitude:Data.ShopList[0].Longitude,
					Latitude:Data.ShopList[0].Latitude
				}
				this.$store.commit("SET_CURRENT_STORE",this.currentStoreInfo);				
			},
			async getLunBoImg(){// 轮播图
				try {
					let { Data } = await vipCard({
						Action: "GetImgList",
						Type:'4'
					}, "UShopOpera");
					this.goodsLunbo = Data.BannerList;
				} catch (e) {
					console.log(e);
				}
			},
			async getTreeGoods(){//获取商品树列表
				try {
					let { Data } = await vipCard({
						Action: "GetTreeProdList",
						SID:this.currentStoreInfo.SID
					}, "UProdOpera");
					this.goods = Data.CateList;
				} catch (e) {
					console.log(e);
				}
			},
			handleMenuTap(id) {	//点击菜单项事件
				if(!this.sizeCalcState) {
					this.calcSize()
				}
				this.currentCateId = id
				this.$nextTick(() => this.cateScrollTop = this.goods.find(item => item.SID == id).top)
			},
			handleGoodsScroll({detail}) {	//商品列表滚动事件
				if(!this.sizeCalcState) {
					this.calcSize()
				}
				const {scrollTop} = detail
				let tabs = this.goods.filter(item=> item.top <= scrollTop).reverse()
				if(tabs.length > 0){
					this.currentCateId = tabs[0].id
				}
			},
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
			// 点击规格、图片需要调用的商品详情接口
			// 多规格商品要传specSID
			async addCart(item) {
				console.log(item)
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
				// 	if (this.goodsInfo.SpecType === '2') {
				// 		this.normsList = Data.SpecList;
				// 		this.normsList.forEach(val => {
				// 			this.$set(val, 'type', 2);
				// 		});
				// 		// this.kouwei = this.normsList[0].ParamInfo.split(',');		//暂时注释			
				// 	}else if(this.goodsInfo.SpecType === '1'){
				// 		this.kouwei2 = this.goodsInfo.ParamInfo;
				// 	}
				// 	this.good = JSON.parse(JSON.stringify({ ...this.goodsInfo,
				// 		number: 1
				// 	}))
				// 	this.category = JSON.parse(JSON.stringify(item))
				// 	this.goodDetailModalVisible = true
				// } catch (e) {
				// 	console.log(e);
				// }
			},
			// 普通商品--加
			handleAddToCart(cate, good, num) {	//添加到购物车
				console.log(cate,good,num)
				const index = this.cart.findIndex(item => {
					if(good.ParamInfo) {
						return (item.SID === good.SID) && (item.Describe === good.Describe)
					} else {
						return item.SID === good.SID
					}
				})
				if(index > -1) {
					this.cart[index].BuyCnt += num
				} else {
					this.cart.push({
						// id: good.id,
						// cate_id: cate.id,
						// name: good.name,
						// price: good.price,
						// number: num,
						// image: good.images,
						// use_property: good.use_property,
						// props_text: good.props_text,
						// props: good.props
						BuyCnt: num,
						ProdNo: good.ProdNo,
						PartsList: '',
						ProdSID: good[good.type === 2 ? 'ProdSID' : 'SID'],
						Name: good.Name,
						SalePrice: good.SalePrice,
						Img: good.Img,
						Describe: good.Describe,
						DeliveryType: '2,1',
						ProdType: 0,
						PromotionSID: "",
					})
				}
			},
			// 普通商品--减
			handleReduceFromCart(good) {
				console.log(good,'减号按钮')
				// const index = this.cart.findIndex(item => item.ProdSID === good.SID)
				// this.cart[index].BuyCnt -= 1
				// this.changeInfo();
				// this.changeMenuNum();
				// if (this.cart[index].BuyCnt <= 0) {
				// 	this.cart.splice(index, 1)					
				// }
			},
			
			// 点击图片或者选择规格时弹窗里的加入购物车按钮
			async AddToCartInModal(good) {
				console.log(good,'0000')
				// 点击的时候会把商品信息带入，数量buycut，价格
				// if(good.SpecType === '1'){
				// 	this.handleAddToCart(good, this.good.number, '单规格')
				// }else{
				// 	this.handleAddToCart(this.normsList[this.currentIndex], this.good.number, '多规格')
				// }
				// this.closeGoodDetailModal()
			},
			
			closeGoodDetailModal() { //关闭饮品详情模态框
				this.goodDetailModalVisible = false
				// this.category = {}
				// this.good = {}
			},
			// 模态框里的加减
			handlePropertyAdd() {
				// if(this.goodsInfo.MaxBuyCnt == '0'){
				// 	this.good.number += 1
				// }else if(this.goodsInfo.MaxBuyCnt != '0'){
				// 	this.good.number += 1
				// 	if (this.good.number > this.goodsInfo.MaxBuyCnt) {
				// 		this.good.number = this.goodsInfo.MaxBuyCnt
				// 	}
				// }				
			},
			handlePropertyReduce() {
				// if (this.good.number === 1) return
				// this.good.number -= 1
			},
			openCartPopup() { //打开/关闭购物车列表popup
				this.cartPopupVisible = !this.cartPopupVisible
			},
			
			handleCartItemAdd(index) {
				this.cart[index].number += 1
			},
			handleCartItemReduce(index) {
				if(this.cart[index].number === 1) {
					this.cart.splice(index, 1)
				} else {
					this.cart[index].number -= 1
				}
				if(!this.cart.length) {
					this.cartPopupVisible = false
				}
			},
		},
		filters:{
			imgFilter(val){
				let localUrl = window.location.href;
				let localToken =localUrl.split("#")[0]
				return `http://dingtalk.bak365.cn/WeixinNew/Dist/../` + val
			}
		}
	}
</script>

<style lang="scss">
	@import '@/pages/shoppingMall/menu_naixue/menu/menu.scss';
	.specBox{
		display: flex;
		.static{
			display: inline-block;
			border-radius: 4px;
			background-color: #F5F5F5;
			padding: 8px 15px;
			font-size: 13px;
			color: #919293;
			margin-right: 8px;
			margin-bottom: 8px;
			width: auto;
			text-align: center;
		}
		.isActive {
			background-color: #ADB838;
			color: #ffffff;
		}
	}
	.testBoxCheck{
		display: inline-block;
		width: auto;
		background-color: #ADB838;
		padding: 8px 15px;
		color: #fff;
		margin-bottom: 10px;
	}
	.testBox{
		display: inline-block;
		width: auto;
		background-color: #fff;
		padding: 8px 15px;
		color: gary;
		margin-bottom: 10px;
	}
	.skuTopInfoLimit{
		margin-bottom: 15px;
	}
	.teast{
		display: inline-block;
		margin-left: 5px;
	}
	.btn-group{
		.iconSty{
			width: 20px;
			height: 20px;
			border-radius: 50%;
			font-size: 20px;
			line-height: 19px;
			font-weight: 600;
			text-align: center;
			color: rgb(185, 183, 183);
			border: 1px solid rgb(185, 183, 183);
			background: #fff;
		}
		.iconStyAdd{
			display: inline-block;
			width: 22px;
			height: 22px;
			background: #ADB838;
			border-radius: 50%;
			font-size: 20px;
			line-height: 19px;
			text-align: center;
			color: #fff;
		}
	}
	.iconfont{
		font-size: 13px;
		padding-left: 5px;
		color: #868181;
	}
</style>
