<template>
	<view class="container">
		<uni-nav-bar :fixed="true" left-icon="back" @clickLeft="clickLeft" title="我的地址" :status-bar="true" :shadow="false"></uni-nav-bar>
		<!-- GetAddressList获取地址  SetAddress添加地址 -->
		<view class="main">
			<view v-if="!areaList.length" class="no-address-tips">
				<view class="mb-30">暂无地址信息</view>
				<view>请点击底部按钮添加地址信息</view>
			</view>
			<template v-else>
				<uni-swipe-action>
					<uni-swipe-action-item class="address-wrapper" :options="swipeOption" @click="handleSwipeClick(item.id)" v-for="(item, index) in areaList" :key="index">
						<view class="address" @tap="chooseAddress(address)">
							<view class="left flex-fill overflow-hidden mr-20">
								<div class="areaName">{{item.Address}}&nbsp;{{item.House}}</div>
								{{item.Name}}
								<span v-if="item.Sex">{{item.Sex | setSex}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<span>{{item.Mobile?item.Mobile:item.Tel}}</span>
							</view>
							<image src="/static/images/edit.png" class="edit-icon" @tap.stop="edit(item.id)"></image>
						</view>
					</uni-swipe-action-item>
				</uni-swipe-action>
			</template>
		</view>
		<view class="btn-box">
			<button type="primary" size="default" @tap="add">新增地址</button>
		</view>
		<!-- 新增地址 uni-popup -->
		<uni-popup ref="addEditArea" v-model="addEditArea" position="bottom" class="confirm-area-popup">
			<a-receive-address v-if="addEditArea" @clickGo="clickGo" :radioModes="radioModes" :areaInfo="areaInfo" @saveArea="saveAreaSet"
			 :currentDeliveryType="currentDeliveryType"></a-receive-address>
		</uni-popup>
	</view>
</template>

<script>
	import {vipCard} from "@/api/http.js";
	import Mixins from "@/pages/shoppingMall/mixins.js";
	export default {
		mixins: [Mixins],
		data() {
			return {
				scene: 'menu',
				is_choose: false, //是否选择地址
				swipeOption: [
					{
						text: '删除',
						style: {
							backgroundColor: '#D12E32'
						}
					}
				],
				showAreaList: false,
				radioModes: 2,
				addEditArea: false,
				resultArea: "",
				areaList: [],	//用来接收地址列表-			
				areaInfo: {},// 编辑的地址
				currentDeliveryType: "",//当前的配送类型
			}
		},
		created() {
			// 获取授权地址
			this.getAddressList();
			
		},
		// 当是外卖配送的时候，点击地址的时候获取的是AddressList，
		// 到店自取的时候是shopInfoList,接口是settlepay这个接口
		methods: {
			// 获取地址列表
		    async getAddressList(){
				let {Data} = await vipCard({
						Action: "GetAddressList",
						Type: 1
					},
					"UMemberOpera"
				);
				this.areaList =  Data.AddressList;
			},
			add() {
				// uni.navigateTo({
				// 	url: '/pages/myAddress/add'
				// })
			},
			edit(id) {
				uni.navigateTo({
					url: '/pages/address/add?id=' + id
				})
			},
			handleSwipeClick(id) {
				uni.showModal({
					title: '提示',
					content: '确定要删除？',
					success: res => {
						if(res.confirm) {
								// const index = this.addresses.findIndex(item => item.id == id)
								// const addresses = JSON.parse(JSON.stringify(this.addresses))
								// addresses.splice(index, 1)
								// this.SET_ADDRESSES(addresses)
								// uni.showToast({title: '删除成功！', icon: 'success'})
						}
					}
				})
			},
			addresses(){},
			// 返回
			clickLeft(){
				if(this.$Route.query.flag == 'login'){
					this.$Router.push('/pages/shoppingMall/login')
				}else if(this.$Route.query.flag == 'towaimai'){
					this.$Router.push('/pages/shoppingMall/menu_naixue/menu/menu')
				}else{
					this.$Router.push('/pages/home')
				}
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		height: 100%;
	}
	
	.main {
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		padding-bottom: 100rpx;
		
		.address-wrapper {
			margin-bottom: 30rpx;
		}
		
		.address {
			width: 100%;
			padding: 40rpx 20rpx;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.areaName{
				font-weight: 700;
				font-size: 16px;
				margin-bottom:10px;
			}
			.left{
				span{
					display: inline-block;
					margin: 0 5px;
				}
			}
			.right {
				flex: 1;
				overflow: hidden;
				display: flex;
				flex-direction: column;
			}
			
			.edit-icon {
				width: 50rpx;
				height: 50rpx;
				flex-shrink: 0;
			}
		}
	}
	
	.btn-box {
		box-sizing: border-box;
		height: 50px;
		background-color: #FFFFFF;
		box-shadow: 0 0 10px rgba(145, 146, 147, 0.1);
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 5px 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		
		uni-button {
			height: 40px;
			width: 80%;
			border-radius: 50rem !important;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
			-webkit-box-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			background-color: #ADB838;
		}
	}
</style>
