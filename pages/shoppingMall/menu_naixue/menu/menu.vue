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
								<!-- <view class="dot" v-show="menuCartNum(item.id)">{{ menuCartNum(item.id) }}</view> -->
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
															<button class="btn property_btn" hover-class="none"
															 size="mini" @tap="showGoodDetailModal(item, good)">
																选规格
															</button>
															<view class="dot" v-show="goodCartNum(good.id)">{{ goodCartNum(good.id) }}</view>
														</view>
														<view class="btn-group" v-else>
															<button type="default" v-show="goodCartNum(good.id)" plain class="btn reduce_btn"
															 size="mini" hover-class="none" @tap="handleReduceFromCart(item, good)">
																<view class="iconfont iconsami-select"></view>
															</button>
															<!-- 用来展示数量的 -->
															<view class="number" v-show="goodCartNum(good.id)">{{ goodCartNum(good.id) }}</view>
															<button type="primary" class="btn add_btn" size="min" hover-class="none" 
																@tap="handleAddToCart(item, good, 1)">
																<view class="iconfont iconadd-select"></view>
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
						<image src="/static/images/menu/cart.png" class="cart-img" ></image>
						<view class="tag">{{ getCartGoodsNumber }}</view>
					</view>
					<view class="flexBtn">
						<view class="price">￥55</view>
						<button type="primary" class="pay-btn" :disabled="disabledPay">
							{{ disabledPay ? `差${spread}元起送` : '去结算' }}
						</button>
					</view>
				</view>
				<!-- 购物车栏 end -->
			</view>
			<!-- 商品详情模态框 begin -->
			<modal :show="goodDetailModalVisible" class="good-detail-modal" color="#5A5B5C" 
					width="90%" custom padding="0rpx" radius="12rpx">
				<view class="cover">
					<image v-if="good.images" :src="good.images" class="image"></image>
					<view class="btn-group">
						<!-- <image src="/static/images/menu/share-good.png"></image> -->
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
									<view class="value" v-for="(value, key) in item.values" :key="key" >
										{{ value.value }}
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="add-to-cart-btn">
					<view>加入购物车</view>
				</view>
			</modal>
			<!-- 商品详情模态框 end -->
		</view>
	</view>
</template>

<script>
	import goods from '../../../../api/goods.js'
	import modal from '@/components/modal/modal'
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
				cartPopupVisible: false,
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
		},
		methods: {
			async init() { //页面初始化
				this.loading = true
				this.goods = goods
				this.loading = false
			},
			handleMenuTap(id) { //点击菜单项事件
				console.log(id)
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
			clickLeft() {

			},
			// 点击图片或者选择规格时弹窗
			showGoodDetailModal(item, good) {
				this.good = JSON.parse(JSON.stringify({...good, number: 1}))
				this.category = JSON.parse(JSON.stringify(item))
				this.goodDetailModalVisible = true
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
			menuCartNum() {
				return (id) => this.cart.reduce((acc, cur) => {
					if (cur.cate_id === id) {
						return acc += cur.number
					}
					return acc
				}, 0)
			},
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
		}
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
					// color: $text-color-assist;
					position: relative;

					&:nth-last-child(1) {
						margin-bottom: 130rpx;
					}

					&.current {
						background-color: #ffffff;
						// color: $text-color-base;
					}

					.dot {
						position: absolute;
						width: 34rpx;
						height: 34rpx;
						line-height: 34rpx;
						font-size: 22rpx;
						// background-color: $color-primary;
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
											border: 1px solid #0077DD;
											color: #00B389;
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
		position: absolute;
		bottom: 25px;
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
</style>
