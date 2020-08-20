<template>
	<!-- 仿奈雪自取点单页面 -->
	<view>
		<uni-nav-bar :status-bar="true" @clickLeft="clickLeft" title="奈雪" :shadow="false" :fixed="true" left-icon="back"></uni-nav-bar>
		<view class="container">
			<view class="main">
				<view class="nav">
					<view class="header">
						<view class="nav_left">
							<text>卓悦中心one avenue 店 </text>
							<view class="navFlex">
								<image src='@/static/images/order/location.png' style="width: 30rpx; height: 30rpx;" class="mr-10"></image>
								<span>距离您 989 米</span>
							</view>
						</view>
						<view class="nav_right">
							<view class="dinein">
								<text>自取</text>
							</view>
							<view class="takeout">
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
							<view class="menu" :id="`menu-${item.id}`" :class="{'current': item.id === currentCateId}" v-for="(item, index) in goods"
							 :key="index" @tap="handleMenuTap(item.id)">
								<text>{{ item.name }}</text>
								<view class="dot" v-show="menuCartNum(item.id)">{{ menuCartNum(item.id) }}</view>
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
								<view class="category" v-for="(item, index) in goods" :key="index" :id="`cate-${item.id}`">
									<view class="title">
										<text>{{ item.name }}</text>
										<image :src="item.icon" class="icon"></image>
									</view>
									<view class="items">
										<!-- 商品 begin -->
										<view class="good" v-for="(good, key) in item.goods_list" :key="key">
												<image :src="good.images" class="image" @tap="showGoodDetailModal(item, good)"></image>
												<view class="right">
													<text class="name">{{ good.name }}</text>
													<text class="tips">{{ good.content }}</text>
													<view class="price_and_action">
														<text class="price">￥{{ good.price }}</text>
														<view class="btn-group" v-if="good.use_property">
															<button class="btn property_btn" style="background-color: #ADB838;color: #fff;" hover-class="none"
															 size="mini" @tap="showGoodDetailModal(item, good)">
																选规格
															</button>
															<view class="dot" v-show="goodCartNum(good.id)">{{ goodCartNum(good.id) }}</view>
														</view>
														<view class="btn-group" v-else>
															<button type="default" v-show="goodCartNum(good.id)" plain class="btn reduce_btn"
															 size="mini" hover-class="none" @tap="handleReduceFromCart(item, good)">
																<!-- <view class="iconfont icon-icon-test"></view> -->
																-
															</button>
															<!-- 用来展示数量的 -->
															<view class="number" v-show="goodCartNum(good.id)">{{ goodCartNum(good.id) }}</view>
															<button type="primary" class="btn add_btn" style="background-color: #ADB838;" size="min" hover-class="none" 
																@tap="handleAddToCart(item, good, 1)">+
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
			<modal :show="goodDetailModalVisible" class="good-detail-modal" color="#5A5B5C" 
					width="90%"  custom padding="0rpx" radius="12rpx">
				<view class="cover">
					<image v-if="good.images" :src="good.images" class="image"></image>
					<view class="btn-group2">
						<image src="/static/images/menu/share-good.png"></image>
						<image src="/static/images/menu/close.png" @tap="closeGoodDetailModal"></image>
					</view>
				</view>
				
				<scroll-view class="detail" scroll-y>
					<view class="wrapper">
						<view class="basic">
							<view class="name">{{ good.name }}</view>
							<view class="tips">{{ good.content }}</view>
						</view>
						<view class="properties" v-if="good.use_property">
							<view class="property" v-for="(item, index) in good.property" :key="index">
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
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="action">
					<view class="left">
						<view class="price">￥{{ good.price }}</view>
						<view class="props" v-if="getGoodSelectedProps(good)">
							{{ getGoodSelectedProps(good) }}
						</view>
					</view>
					<view class="btn-group">
						<button type="default" plain class="btn" size="mini" hover-class="none" 
							@tap="handlePropertyReduce">
							-
						</button>
						<view class="number">{{ good.number }}</view>
						<button type="primary" class="btn" size="min" hover-class="none" 
							@tap="handlePropertyAdd">
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
									<view class="name">{{ item.name }}</view>
									<view class="props">{{ item.props_text }}</view>
								</view>
								<view class="center">
									<text>￥{{ item.price }}</text>
								</view>
								<view class="right">
									<button type="default" plain size="mini" class="btn" hover-class="none"
										@tap="handleCartItemReduce(index)">
										-
										<!-- <view class="iconfont iconsami-select"></view> -->
									</button>
									<view class="number">{{ item.number }}</view>
									<button type="primary" class="btn" size="min" hover-class="none"
										@tap="handleCartItemAdd(index)">
										<!-- <view class="iconfont iconadd-select"></view> -->
										+
									</button>
								</view>
							</view>
							<view class="item" v-if="orderType == 'takeout' && store.packing_fee">
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
							</view>
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
	export default {
		data() {
			return {
				orderType: 'takein',
				goods: [],
				menuScrollIntoView: '',
				cateScrollTop: 0,
				currentCateId: 6905, //默认分类
				sizeCalcState: false,
				goodDetailModalVisible: false, //是否饮品详情模态框
				good: {}, //当前饮品
				category: {}, //当前饮品所在分类
				cart: [], //购物车
				cartPopupVisible: false,//已选择商品弹窗
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
				currentArea: {},//当前选择的地址
			}
		},
		async onLoad() {
			await this.init()
		},
		components: {
			goods,
			modal,
		},
		computed:{
			goodCartNum() {	//计算单个饮品添加到购物车的数量
				return (id) => this.cart.reduce((acc, cur) => {
						if(cur.id === id) {
							return acc += cur.number
						}
						return acc
					}, 0)
					console.log(this.cart)
			},
			getCartGoodsNumber() { //计算购物车总数
				return this.cart.reduce((acc, cur) => acc + cur.number, 0)
			},
			getCartGoodsPrice() {	//计算购物车总价
				return this.cart.reduce((acc, cur) => acc + cur.number * cur.price, 0)
			},
			disabledPay() { //是否达到起送价
				return this.orderType == 'takeout' && (this.getCartGoodsPrice < this.store.min_price) ? true : false
			},
			spread() { //差多少元起送
				if(this.orderType != 'takeout') return
				return parseFloat((this.store.min_price - this.getCartGoodsPrice).toFixed(2))
			},
			
			menuCartNum() {
				return (id) => this.cart.reduce((acc, cur) => {
					if (cur.cate_id === id) {
						return acc += cur.number
					}
					return acc
				}, 0)
			},
		},
		methods: {
			async init() { //页面初始化
				this.loading = true
				this.goods = goods
				this.loading = false
				
					if(!this.location.longitude){
						uni.showToast({
						    title: '地址获取失败',
						    duration: 2000
						});
						throw "地址获取失败";
					}
			},
			handleMenuTap(id) { //点击菜单项事件
				// console.log(id)
				if(!this.sizeCalcState) {
					this.calcSize()
				}

				this.currentCateId = id
				this.$nextTick(() => this.cateScrollTop = this.goods.find(item => item.id == id).top)
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
					let view = uni.createSelectorQuery().select(`#cate-${item.id}`)
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
			clickLeft() {// 头部返回
				this.$Router.push('/pages/shoppingMall/login')
			},
			changePropertyDefault(index, key) { //改变默认属性值
				this.good.property[index].values.forEach(value => this.$set(value, 'is_default', 0))
				this.good.property[index].values[key].is_default = 1
				this.good.number = 1
			},
			// 点击图片或者选择规格时弹窗
			showGoodDetailModal(item, good) {
				this.good = JSON.parse(JSON.stringify({...good, number: 1}))
				this.category = JSON.parse(JSON.stringify(item))
				this.goodDetailModalVisible = true
			},
			handleAddToCartInModal(){
				const product = Object.assign({}, this.good, {props_text: this.getGoodSelectedProps(this.good), props: this.getGoodSelectedProps(this.good, 'id')})
				this.handleAddToCart(this.category, product, this.good.number)
				this.closeGoodDetailModal()
			},
			handleAddToCart(cate, good, num) {	//添加到购物车
				const index = this.cart.findIndex(item => {
					if(good.use_property) {
						return (item.id === good.id) && (item.props_text === good.props_text)
					} else {
						return item.id === good.id
					}
				})
				if(index > -1) {
					this.cart[index].number += num
				} else {
					this.cart.push({
						id: good.id,
						cate_id: cate.id,
						name: good.name,
						price: good.price,
						number: num,
						image: good.images,
						use_property: good.use_property,
						props_text: good.props_text,
						props: good.props
					})
				}
			},
			getGoodSelectedProps(good, type = 'text') {	//计算当前饮品所选属性
				if(good.use_property) {
					let props = []
					good.property.forEach(({values}) => {
						values.forEach(value => {
							if(value.is_default) {
								props.push(type === 'text' ? value.value : value.id)
							}
						})
					})
					return type === 'text' ? props.join('，') : props
				}
				return ''
			},
			closeGoodDetailModal() { //关闭饮品详情模态框
				this.goodDetailModalVisible = false
				this.category = {}
				this.good = {}
			},
			handleReduceFromCart(item, good) {
				const index = this.cart.findIndex(item => item.id === good.id)
				this.cart[index].number -= 1
				if(this.cart[index].number <= 0) {
					this.cart.splice(index, 1)
				}
			},
			handlePropertyAdd() {
				this.good.number += 1
			},
			handlePropertyReduce() {
				if(this.good.number === 1) return
				this.good.number -= 1
			},
			openCartPopup() {	//打开/关闭购物车列表popup
				this.cartPopupVisible = !this.cartPopupVisible
			},
			handleCartClear() {	//清空购物车
				uni.showModal({
					title: '提示',
					content: '确定清空购物车么',
					success: ({confirm}) =>  {
						if(confirm) {
							this.cartPopupVisible = false
							this.cart = []
						}
					}
				})
			},
			handleCartItemAdd(index) {
				this.cart[index].number += 1
			},
			handleCartItemReduce(index) {//购物车里面的加减
				if(this.cart[index].number === 1) {
					this.cart.splice(index, 1)
				} else {
					this.cart[index].number -= 1
				}
				if(!this.cart.length) {
					this.cartPopupVisible = false
				}
			},
			toPay(){//去结算
				// if(!this.isLogin){
				// 	uni.navigateTo({url: '/pages/login/login'})
				// 	return
				// }
				uni.showLoading({title: '加载中'})
				uni.setStorageSync('cart', JSON.parse(JSON.stringify(this.cart)))
				
				uni.navigateTo({
					url: '/pages/shoppingMall/order/confirmOrder'
				})
				uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss">
	/* #ifdef H5 */
	page {
		min-height: 100%;
	}

	/* #endif */

	.container {
		overflow: hidden;
		position: relative;
	}

	.main {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	
	.good-detail-modal{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		.cover{
			text-align: center;
			.image{
				width: 130px;
				height: 130px;
			}
			.btn-group2{
				position: absolute;
				right: 10rpx;
				top: 30rpx;
				image{
					width: 35px;
					height: 35px;
				}
			}
			
		}
	}
	
	.detail {
		width: 100%;
		min-height: 1vh;
		max-height: calc(90vh - 320rpx - 80rpx - 120rpx);
	
		.wrapper {
			width: 100%;
			height: 100%;
			overflow: hidden;
			
			.basic {
				padding: 0 20rpx 30rpx;
				display: flex;
				flex-direction: column;
				.name {
					font-size: 14px;
					color: #000000;
					margin-bottom: 10rpx;
				}
				.tips {
					font-size: 14px;
					color: #000000;
				}
			}
			
			.properties {
				width: 100%;
				border-top: 2rpx solid #919293;
				padding: 10rpx 30rpx 0;
				display: flex;
				flex-direction: column;
				
				.property {
					width: 100%;
					display: flex;
					flex-direction: column;
					margin-bottom: 30rpx;
					padding-bottom: -16rpx;
					
					.title {
						width: 100%;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						margin-bottom: 20rpx;
						
						.name {
							font-size: 26rpx;
							color: #000000;
							margin-right: 20rpx;
						}
						
						.desc {
							flex: 1;
							font-size: 14px;
							color: #0077AA;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					
					.values {
						width: 100%;
						display: flex;
						flex-wrap: wrap;
						
						.value {
							border-radius: 8rpx;
							background-color: #F5F5F5;
							padding: 16rpx 30rpx;
							font-size: 26rpx;
							color: #919293;
							margin-right: 16rpx;
							margin-bottom: 16rpx;
							
							&.default {
								background-color:#ADB838;
								color: #FFFFFF;
							}
						}
					}
				}
			}
		}
	}
	.action {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #F5F5F5;
		height: 120rpx;
		padding: 0 26rpx;
	
		.left {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-right: 20rpx;
			overflow: hidden;
			
			.price {
				font-size: 14px;
				color: #000000;
			}
	
			.props {
				color: #919293;
				font-size: 24rpx;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		.btn-group {
			display: flex;
			align-items: center;
			justify-content: space-around;
	
			.number {
				font-size: 14px;
				width: 44rpx;
				height: 44rpx;
				line-height: 44rpx;
				text-align: center;
			}
	
			.btn {
				padding: 0;
				font-size: 14px;
				width: 44rpx;
				height: 44rpx;
				line-height: 44rpx;
				border-radius: 100%;
				border: 0;
				background-color: #ADB838;
			}
		}
	}
	
	.add-to-cart-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ADB838;
		color: #FFFFFF;
		font-size: 14px;
		height: 80rpx;
		border-radius: 0 0 12rpx 12rpx;
	}
	
	.header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;
		background-color: #ffffff;
		height: 140rpx;
		box-sizing: border-box;
		.dot {
			position: absolute;
			width: 34rpx;
			height: 34rpx;
			line-height: 34rpx;
			font-size: 22rpx;
			background-color: yellow;
			color: #ffffff;
			top: 16rpx;
			right: 10rpx;
			border-radius: 100%;
			text-align: center;
		}
		.nav_left {
			display: flex;
			flex-direction: column;
			font-size: 16px;

			.navFlex {
				display: flex;
				margin-top: 5px;

				span {
					font-size: 12px;
					color: #919293;
					padding-left: 5px;
				}
			}
		}

		.nav_right {
			display: flex;
			height: 30px;
			background-color: #F5F5F5;
			border-radius: 19px;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
			font-size: 12px;
			padding: 0 19px;
			color: #919293;

			.dinein {
				padding: 7px 19px;
				color: #ffffff;
				background-color: #ADB838;
				border-radius: 19px;
				margin-left: -19px;
			}

			.takeout {
				margin-left: 10px;
			}
		}
		
	}

	.coupon {
		flex: 1;
		width: 100%;
		background-color: #E8EACF;
		font-size: 14px;
		color: #ADB838;
		padding: 20rpx;
		display: flex;
		align-items: center;
		overflow: hidden;

		.title {
			flex: 1;
			margin-left: 10rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.iconfont {
			line-height: 100%;
		}
	}

	.content {
		flex: 1;
		overflow: hidden;
		width: 100%;
		height: 80vh;
		display: flex;

		.menus {
			width: 200rpx;
			height: 100%;
			overflow: hidden;
			.wrapper {
				width: 100%;
				height: 100%;

				.menu {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					padding: 30rpx 20rpx;
					font-size: 26rpx;
					color: #919293;
					position: relative;

					&:nth-last-child(1) {
						margin-bottom: 130rpx;
					}

					&.current {
						background-color: #ffffff;
						color: #919293;
					}

					.dot {
						position: absolute;
						width: 34rpx;
						height: 34rpx;
						line-height: 34rpx;
						font-size: 22rpx;
						background-color: #ADB838;
						color: #ffffff;
						top: 16rpx;
						right: 10rpx;
						border-radius: 100%;
						text-align: center;
					}
				}
			}
		}

		.goods {
			flex: 1;
			height: 100%;
			overflow: hidden;
			background-color: #ffffff;

			.wrapper {
				// width: 100%;
				height: 100%;
				padding: 20rpx;

				.ads {
					height: calc(300 / 550 * 510rpx);

					image {
						width: 255px;
						height: 139px;
						border-radius: 8px;
					}
				}

				.list {
					width: 100%;
					font-size: 14px;
					padding-bottom: 130rpx;

					.category {
						width: 100%;

						.title {
							padding: 30rpx 0;
							display: flex;
							align-items: center;
							color: black;

							.icon {
								width: 38rpx;
								height: 38rpx;
								margin-left: 10rpx;
							}
						}
					}

					.items {
						display: flex;
						flex-direction: column;
						padding-bottom: -30rpx;

						.good {
							display: flex;
							align-items: center;
							margin-bottom: 30rpx;

							.image {
								width: 160rpx;
								height: 160rpx;
								margin-right: 20rpx;
								border-radius: 8rpx;
							}

							.right {
								flex: 1;
								height: 160rpx;
								overflow: hidden;
								display: flex;
								flex-direction: column;
								align-items: flex-start;
								justify-content: space-between;
								padding-right: 14rpx;

								.name {
									font-size: 14px;
									margin-bottom: 10rpx;
								}

								.tips {
									width: 100%;
									height: 40rpx;
									line-height: 40rpx;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									font-size: 12px;
									color: #6C6C6C;
									margin-bottom: 10rpx;
								}

								.price_and_action {
									width: 100%;
									display: flex;
									justify-content: space-between;
									align-items: center;

									.price {
										font-size: 14px;
										font-weight: 600;
									}

									.btn-group {
										display: flex;
										justify-content: space-between;
										align-items: center;
										position: relative;

										.btn {
											padding: 0 20rpx;
											box-sizing: border-box;
											font-size: 14px;
											height: 44rpx;
											line-height: 44rpx;

											&.property_btn {
												border-radius: 24rpx;
											}

											&.add_btn,
											&.reduce_btn {
												padding: 0;
												width: 44rpx;
												border-radius: 44rpx;
											}
										}

										.dot {
											position: absolute;
											background-color: #ffffff;
											border: 1px solid #ADB838;
											color: #ADB838;
											font-size: 14px;
											width: 36rpx;
											height: 36rpx;
											line-height: 36rpx;
											text-align: center;
											border-radius: 100%;
											right: -12rpx;
											top: -10rpx;
										}

										.number {
											width: 44rpx;
											height: 44rpx;
											line-height: 44rpx;
											text-align: center;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		.modal-box {
			max-height: 90vh;
		}
	}
	
	.cart-box{
		z-index: 9999;
		position: absolute;
		bottom: 50px;
		left: 15px;
		right: 15px;
		height: 48px;
		border-radius: 24px;
		display: flex;
		background-color: #FFFFFF;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		.mark{
			flex: 1;
			padding-left: 23px;
			margin-right: 15px;
			position: relative;
			.cart-img{
				width: 48px;
				    height: 48px;
				    position: relative;
				    margin-top: -12px;
			}
			.tag{
				 background-color: #FAB714;
				     text-align: center;
				     font-size: 12px;
				     position: absolute;
				     left: 55px;
				     top: -14px;
				     border-radius: 100%;
				     padding: 2px;
				     width: 20px;
				     height: 20px;
				     opacity: .9;
			}
		}
		.flexBtn{
			display: flex;
			.price{
				    flex: 1;
					font-size: 18px;
				    color: #5A5B5C;
					width: 170px;
					line-height: 50px;
				}
				button{
					    height: 100%;
					    padding: 0 15px;
					    color: #FFFFFF;
					    border-radius: 0 25px 25px 0;
					    display: -webkit-box;
					    display: -webkit-flex;
					    display: flex;
					    -webkit-box-align: center;
					    -webkit-align-items: center;
					    align-items: center;
					    font-size: 14px;
						background-color: #ADB838;
					}
		}
	}
	
	.cart-popup {
		.top {
			background-color: #E8EACF;
			    color: #ADB838;
			    padding: 5px 15px;
			    font-size: 12px;
			    text-align: right;
		}
		.cart-list {
			background-color: #FFFFFF;
			width: 100%;
			overflow: hidden;
			min-height: 1vh;
			max-height: 60vh;
			
			.wrapper {
				height: 100%;
				display: flex;
				flex-direction: column;
				padding: 0 30rpx;
				margin-bottom: 156rpx;
				
				.item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0;
					position: relative;
					
					&::after {
						content: ' ';
						position: absolute;
						bottom: 0;
						left: 0;
						width: 100%;
						background-color: #919293;
						height: 2rpx;
						transform: scaleY(.6);
					}
					
					.left {
						flex: 1;
						display: flex;
						flex-direction: column;
						overflow: hidden;
						margin-right: 30rpx;
						
						.name {
							font-size: 14px;
							color: #5A5B5C;
						}
						.props {
							color: #919293;
							font-size: 24rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					
					.center {
						margin-right: 120rpx;
						font-size: 14px;
					}
					
					.right {
						display: flex;
						align-items: center;
						justify-content: space-between;
						
						.btn {
							width: 46rpx;
							height: 46rpx;
							border-radius: 100%;
							padding: 0;
							text-align: center;
							line-height: 40rpx;
							
						}
						.number {
							font-size: 14px;
							width: 46rpx;
							height: 46rpx;
							text-align: center;
							line-height: 46rpx;
						}
					}
				}
			}
		}
	}
</style>
