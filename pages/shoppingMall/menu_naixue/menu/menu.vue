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
										<!-- <image :src="item.icon" class="icon"></image> -->
									</view>
									<view class="items">
										<!-- 商品 begin -->
										<view class="good" v-for="(good, key) in item.children" :key="key">
											<image :src="good.Img | imgFilter" class="image" @tap="showGoodDetailModal(item, good)"></image>
											<view class="right">
												<text class="name">{{ good.Name }}</text>
												<text class="tips">{{ good.Describe }}</text>
												<view class="price_and_action">
													<text class="price">￥{{ good.SalePrice }}</text>
													<!-- <view class="btn-group" v-if="good.SpecType=='2'">
														<button class="btn property_btn" style="background-color: #ADB838;color: #fff;" hover-class="none" size="mini"
														 @tap="showGoodDetailModal(item, good)">
															选规格
														</button>
														<view class="dot" v-show="goodCartNum(good.id)">{{ goodCartNum(good.id) }}</view>
													</view>
													<view class="btn-group" v-else>
														<button type="default" v-show="goodCartNum(good.id)" plain class="btn reduce_btn"
														 size="mini" hover-class="none" @tap="handleReduceFromCart(item, good)">
															<view class="iconfont iconsami-select"></view>
														</button>
														<view class="number" v-show="goodCartNum(good.id)">{{ goodCartNum(good.id) }}</view>
														<button type="primary" class="btn add_btn" size="min" hover-class="none" 
															@tap="handleAddToCart(item, good, 1)">
															<view class="iconfont iconadd-select"></view>
														</button>
													</view> -->
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
			<!-- 商品详情模态框 begin --><!-- 结束 -->
			<!-- 清空购物车弹窗 --></view>
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
			}
		},
		components: {
			modal
		},
		computed:{
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
			}
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
