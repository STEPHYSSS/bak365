<template>
	<view class="container">
		<view class="banner">
			<!-- <image src="https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg" mode="" class="bg"></image> -->
			<swiper class="swiper-box"
			    autoplay="true" 
			    circular="true" 
			    indicatorDots="true" 
			    indicator-active-color="#ffaa00" 
			>  
			    <swiper-item v-for="(item, index) in homeSlide" :key="index">  
			        <view class="swiper-item">  
			            <image :src="item.img" class="bg" mode="aspectFill" />  
			        </view>  
			    </swiper-item>  
			</swiper>
			<view class="intro">
				<view class="greet">您好</view>
				<view class="note">一杯奶茶，一口软欧包，在奈雪遇见两种美好</view>
			</view>
		</view>
		<view class="content">
			<view class="entrance">
				<view class="item" @tap="takein">
					<image src="../../static/images/index/zq.png" class="icon"></image>
					<view class="title">自取</view>
				</view>
				<view class="item" @tap="takeout">
					<image src="../../static/images/index/wm.png" class="icon"></image>
					<view class="title">外卖</view>
				</view>
			</view>
			<view class="info">
				<view class="integral_section" @tap="integrals">
					<view class="top">
						<text class="title" style="color: #5A5B5C;font-size: 14px;margin-right: 5px;">我的积分</text>
						<text class="value">411</text>
					</view>
					<view class="bottom" style="color: #919293;">
						进入积分商城兑换奈雪券及周边好礼
					</view>
				</view>
				<view class="qrcode_section" @tap="memberCode">
					<image src="/static/images/index/qrcode.png"></image>
					<text>会员码</text>
				</view>
			</view>
			<!--  -->
			<view class="centerBox">
				<view class="left">
					<view>
						<!-- 点击这个地方可以跳转到商城页面 待做 -->
						<view>
							<image src="../../static/images/index/csc.png" class="mark-img"></image>
							<view style="margin-left: 6px;display: inline-block;">奈雪的茶商城</view>
						</view>
						<view style="margin-left: 40rpx;margin-top: 2px; font-size: 20rpx;">优质茶礼盒，网红零食</view>
					</view>
					<view style="height: 80px;">
						<image src="../../static/images/index/yzclh.png" class="yzclh-img" mode="heightFix"></image>
					</view>
				</view>
				<!-- 右边 -->
				<view class="right">
					<view class="rightTop">
						<image src="../../static/images/index/mcsb.png"></image>
						<view style="display: inline-block;position: absolute;top: -2px;">买茶送包</view>
					</view>
					<view class="rightBottom">
						<image src="../../static/images/index/hyjb.png"></image>
						<view style="display: inline-block;position: absolute;top: -2px;">会员劵包</view>
					</view>
				</view>
			</view>
			<view class="member-news">
				<view class="header">
					<view class="title">会员新鲜事</view>
					<view class="iconfont iconRightbutton"></view>
				</view>
				<view class="list">
					<view class="item">
						<image src="https://img-shop.qmimg.cn/s23107/2020/04/27/0039bf41c9ebd50a2c.jpg"></image>
						<view class="title">"梅"你不行 | 霸气杨梅清爽回归</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters
	} from 'vuex'

	export default {
		data() {
			return {
				homeSlide: [{
						title: '第一张',
						img: 'https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg'
					},
					{
						title: '第二张',
						img: 'https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg'
					},
					{
						title: '第三张',
						img: 'https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg'
					}
				], // 定义值接收轮播图数据
			}
		},
		computed: {
			
		},
		methods: {
			takein(){
				// this.$Router.push("/pages/shoppingMall/list/goodsList");
				// 自取页面
				this.$Router.push("/pages/shoppingMall/menu_naixue/menu/menu");
			},
			takeout(){},
			integrals(){},
			memberCode(){},
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	page {
		height: auto;
		min-height: 100%;
	}

	/* #endif */
	.container {
		/deep/.uni-swiper-dots-horizontal {
			bottom: 45px;
		}
	}
	.banner {
		position: relative;
		width: 100%;
		height: 600rpx;

		uni-swiper {
			height: 600rpx;
		}
		// swiper-item 里面的图片高度
		.swiper-item image {
			width: 100%;
			height: 600rpx;
		}

		.bg {
			width: 100%;
			height: 600rpx;
		}

		.intro {
			position: absolute;
			top: calc(50rpx + var(--status-bar-height));
			left: 40rpx;
			color: #FFFFFF;
			display: flex;
			flex-direction: column;

			.greet {
				// font-size: $font-size-lg;
				margin-bottom: 10rpx;
			}

			.note {
				// font-size: $font-size-sm;
			}
		}
	}

	.content {
		padding: 0 30rpx;
	}

	.entrance {
		position: relative;
		margin-top: -80rpx;
		margin-bottom: 30rpx;
		border-radius: 10rpx;
		background-color: #ffffff;
		// box-shadow: $box-shadow;
		padding: 30rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;

		.item {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;

			&:nth-child(1):after {
				content: '';
				position: absolute;
				width: 1rpx;
				background-color: #ddd;
				right: 0;
				height: 100%;
				transform: scaleX(0.5) scaleY(0.8);
			}

			.icon {
				width: 84rpx;
				height: 84rpx;
				margin: 20rpx;
			}

			.title {
				font-size: 30rpx;
				// color: $text-color-base;
				font-weight: 600;
			}
		}
	}

	.info {
		position: relative;
		margin-bottom: 30rpx;
		border-radius: 10rpx;
		background-color: #ffffff;
		// box-shadow: $box-shadow;
		padding: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.integral_section {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.top {
				display: flex;
				align-items: center;

				.title {
					// color: $text-color-base;
					// font-size: $font-size-base;
					margin-right: 10rpx;
				}

				.value {
					font-size: 44rpx;
					font-weight: bold;
				}
			}

			.bottom {
				// font-size: $font-size-sm;
				// color: $text-color-assist;
				display: flex;
				align-items: center;
			}
		}

		.qrcode_section {
			// color: $color-primary;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			// font-size: $font-size-sm;

			image {
				width: 40rpx;
				height: 40rpx;
				margin-bottom: 10rpx;
			}
		}
	}
	
	.centerBox{
		position: relative;
		margin-bottom: 30rpx;
		border-radius: 10rpx;
		background-color: #ffffff;
		// box-shadow: $box-shadow;
		padding: 10px;
		display: flex;
		// align-items: center;
		// justify-content: center;
		.left{
			background-color: #F2F2E6;
			flex: 1.2;
			padding: 10px;
			margin-right: 10px;
			.mark-img{
				width: 15px;
				height: 15px;
			}
			.yzclh-img{
				width: 107px;
				height: 61px;
				float: right;
				margin-top: 20px;
			}
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			.rightTop{
				position: relative;
				background-color: #FDF3F2;
				margin-bottom: 10px;
				line-height: 62px;
				image{
					width: 15px;
					height: 15px;
					margin: 0 5px;
				}
				
			}
			.rightBottom{
				position: relative;
				background-color: #FCF6D4;
				line-height: 62px;
				image{
					width: 15px;
					height: 15px;
					margin: 0 5px;
				}
				
			}
		}
	}

	.member-news {
		width: 100%;
		margin-bottom: 30rpx;

		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx 0;

			.title {
				// font-size: $font-size-lg;
				font-weight: bold;
			}

			.iconfont {
				font-size: 52rpx;
				// color: $text-color-assist;
			}
		}

		.list {
			width: 100%;
			display: flex;
			flex-direction: column;

			.item {
				width: 100%;
				height: 240rpx;
				position: relative;

				image {
					width: 100%;
					height: 100%;
					border-radius: 8rpx;
				}

				.title {
					position: relative;
					font-size: 32rpx;
					font-weight: 500;
					width: 100%;
					top: -70rpx;
					left: 16rpx;
					color: #ffffff;
				}
			}
		}
	}
</style>
