<template>
	<view class="container">
		<uni-nav-bar :fixed="true" left-icon="back" @clickLeft="clickLeft" title="我的地址" :status-bar="true" :shadow="false"></uni-nav-bar>
		<!-- GetAddressList获取地址  SetAddress添加地址 -->
		<!-- 外卖地址信息 -->
		<view v-show="false">
			<view class="main">
				<view v-if="!areaList.length" class="no-address-tips">
					<view class="noAddressinfo">暂无地址信息</view>
					<view>请点击底部按钮添加地址信息</view>
				</view>
				<template v-else>
					<uni-swipe-action>
						<uni-swipe-action-item class="address-wrapper" :options="swipeOption" @click="handleSwipeClick(item.SID)" v-for="(item, index) in areaList" :key="index">
							<view class="address" @tap="chooseAddress(item)">
								<view class="left flex-fill overflow-hidden mr-20">
									<div class="areaName">{{item.Address}}&nbsp;{{item.House}}</div>
									{{item.Name}}
									<span v-if="item.Sex">{{item.Sex | setSex}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
									<span>{{item.Mobile?item.Mobile:item.Tel}}</span>
								</view>
								<image src="/static/images/edit.png" class="edit-icon" @tap.stop="edit(item)"></image>
							</view>
						</uni-swipe-action-item>
					</uni-swipe-action>
				</template>
			</view>
			<view class="btn-box">
				<button type="primary" size="default" @tap="add">新增地址</button>
			</view>
		</view>
		<view class="shopAddress">
			<view class="search" style="width: 50%;">
				<uni-search-bar cancelButton="none" :disabledMy="true" style="width:100%" placeholder="请输入搜索关键词" :radius="50"></uni-search-bar>
			</view>
			<view class="addressList">
				<view v-for="(item,index) in ShopAddress" :key="index" class="ShopAddress">
					<view style="display: flex;">
						<view class="left">
							<span>武汉K11 Select店</span>
							<span>距离您{{item.Length}}</span>
							<span>{{item.Address}}</span>
						</view>
						<view class="right">
							<view>
								去下单
							</view>
							<view class="" @click="call(item.Tel)">
								拨打电话
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 门店地址信息 -->
		
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
				title:'门店详情',
				ShopAddress:{},//商家地址
				Name:'',//门店搜索
			}
		},
		created() {
			// 获取授权地址
			this.getAddressList();
			this.getShopList();
			
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
			// 
			chooseAddress(item){				
				this.$Router.push({path:'/pages/shoppingMall/menu_naixue/menu/menu',query:{addressName:item.Address}})
			},
			add() {
				uni.navigateTo({
					url: '/pages/myAddress/add'
				})
			},
			edit(val) {
				// uni.navigateTo({
				// 	url: '/pages/address/add?id=' + id
				// })
				this.$Router.push({path:'/pages/myAddress/add',query:{
					areaInfo:val
				}})
				// this.areaInfo = val;
				
				// this.$refs.addEditArea.open()
				// this.addEditArea = true;
			},
			handleSwipeClick(id) {								
				uni.showModal({
					title: '提示',
					content: '确定要删除？',
					success: res => {
						if(res.confirm) {
							let {Data} = vipCard({
									Action: "RemoveAddress",
									SID: id
								},
								"UMemberOpera"
							);
							uni.showToast({title: '删除成功！', icon: 'success'})
							this.getAddressList()
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
			// 门店地址开始
			// 获取地址
			async getShopList() {
				let {
					Data
				} = await vipCard({
						Action: "GetShopList",
						DefLongitude: this.location.longitude,
						DefLatitude: this.location.latitude,
						Name:this.Name
					},
					"UShopOpera"
				);
				this.ShopAddress = Data.ShopList;
				this.$store.commit("SET_CURRENT_STORE",this.ShopAddress)
			},
			// 拨打电话
			call(Tel){
			 	uni.makePhoneCall({
			 	// 手机号
			    phoneNumber: 'Tel', 
			
				// 成功回调
				success: (res) => {
					console.log('调用成功!')	
				},
			
				// 失败回调
				fail: (res) => {
					console.log('调用失败!')
				}
				
			  });
			}
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
		.no-address-tips{
			display: inline-block;
			font-size: 16px;
			position: absolute;
			top: 33%;
			left: 21%;
			text-align: center;
			color: #b5b4b4;
			.noAddressinfo{
				margin-bottom: 10px;
			}
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
	.ShopAddress{
		background-color: #fff;
		margin-bottom: 10px;
		padding: 20px 10px;
		margin: 10px 10px;
		.left span{
			display: block;
		}
	}
</style>
