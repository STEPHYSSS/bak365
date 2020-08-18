<template>
	<div class="shoppingCart_style" :class="classHome">
		<!-- <uni-nav-bar :status-bar="true" :shadow="false">
			<div slot="left">
				<ms-dropdown-menu style="background:transparent">
					<ms-dropdown-item v-model="value1" :list="list"></ms-dropdown-item>
				</ms-dropdown-menu>
			</div>

			<uni-search-bar cancelButton="none" :disabledMy="true" style="width:100%" placeholder="请输入搜索关键词" :radius="50"></uni-search-bar>
			<div slot="right">
				<div class="headRight"></div>
			</div>
		</uni-nav-bar>
		<br /> -->
		<div v-if="!loadding">
			<!-- <button type="default" size="mini" @click="clickCoupon">优惠券</button> -->
			<button type="default" size="mini" @click="clickGoods">商品横向</button>
			<button type="default" size="mini" @click="integralMall">积分商城</button>
			<button type="default" size="mini" @click="seckill">秒杀</button>
			<br>
			<button @click="clickClear" size="mini">去除usermac</button>

			<div>
				<div v-for="(item,index) in listMode" :key="index">
					<!-- <shopinfoma v-if="item.viewComponets === 'shopinfoma'" :propsObj="item.props"></shopinfoma> -->
					<enterShops v-if="item.viewComponets === 'enterShops'" :propsObj="item.props"></enterShops>
					<searchBox v-if="item.viewComponets === 'searchBox'" :propsObj="item.props"></searchBox>
					<notice v-if="item.viewComponets === 'notice'" :propsObj="item.props"></notice>
					<guide v-if="item.viewComponets === 'guide'" :propsObj="item.props"></guide>
					<auxiliaryBlank v-if="item.viewComponets === 'auxiliaryBlank'" :propsObj="item.props"></auxiliaryBlank>
					<pictureAds v-if="item.viewComponets === 'pictureAds'" :propsObj="item.props"></pictureAds>
					<magicCube v-if="item.viewComponets === 'magicCube'" :propsObj="item.props"></magicCube>
					<imgNav v-if="item.viewComponets === 'imgNav'" :propsObj="item.props"></imgNav>
					<textBox v-if="item.viewComponets === 'textBox'" :propsObj="item.props"></textBox>
					<switchStores v-if="item.viewComponets === 'switchStores'" :propsObj="item.props"></switchStores>
					<richText v-if="item.viewComponets === 'richText'" :propsObj="item.props"></richText>
					<goods v-if="item.viewComponets === 'goods'" :propsObj="item.props"></goods>
					<goodsGroup v-if="item.viewComponets === 'goodGroup'" :propsObj="item.props"></goodsGroup>
					<titleBox v-if="item.viewComponets === 'titleBox'" :propsObj="item.props"></titleBox>
					<!-- <component :is="item.viewComponets" ref="setModeRef" :propsObj="item.props"></component> -->
				</div>

			</div>
		</div>
		<div v-if="loadding&&JSON.stringify(location)==='{}'">获取定位中</div>
	</div>
</template>

<script>
	import {
		vipCard
	} from '@/api/http.js';
	import Mixins from "./mixins";
	import Cookie from '@/config/cookie-my/index.js';
	import msDropdownMenu from "@/components/ms-dropdown/dropdown-menu.vue"
	import msDropdownItem from "@/components/ms-dropdown/dropdown-item.vue"
	import {
		GetQueryString
	} from "@/util/publicFunction";
	export default {
		mixins: [Mixins],
		components: {
			msDropdownMenu,
			msDropdownItem,
			// voice
		},
		data() {
			return {
				classHome: getApp().globalData.mainStyle,
				valueSearch: "",
				value1: 0,
				list: [{
						text: '全部门店',
						value: 0
					},
					{
						text: 'item2',
						value: 1
					},
					{
						text: 'item3',
						value: 2
					}
				],
				listMode: [],
				filterDropdownValue: {},
				innerAudio: null,
				oldAudioObj: {},
				loadding: true
			};
		},
		async created() {
			this.getWxConfig() // 获取授权地址
			this.loadding = true
			uni.showLoading({
				title: '加载中'
			});

			await this.getShopList()
			await this.getAutoMode();
		},
		mounted() {},
		methods: {
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
				let currentStoreInfo = {
					Name: Data.ShopList[0].Name,
					Address: Data.ShopList[0].Address,
					SID: Data.ShopList[0].SID
				}
				// console.log(currentStoreInfo)
				this.$store.commit("SET_CURRENT_STORE",currentStoreInfo)
			},
			clickClear() {
				Cookie.remove("UserMACPhone");
			},
			clickCoupon() {
				this.$Router.push("/pages/shoppingMall/list/couponList");
			},
			clickGoods() {
				this.$Router.push("/pages/shoppingMall/list/goodsList");
			},
			clickGoods_two() {
				this.$Router.push("/shoppingMall/goodsList_two");
			},
			integralMall() {
				this.$Router.push("/pages/integralMall/index");
			},
			seckill() {
				this.$Router.push("/pages/shoppingMall/seckill/index");
			},
			setVoice() {},
			voicePlay(obj) {
				//音频
				let arrVoice = uni.getStorageSync('arrVoice');
				if (obj.indexMy !== this.oldAudioObj.indexMy) {
					this.innerAudio.src = obj.url
					this.innerAudio.loop = obj.loopPlay === 'True' ? true : false
				}
				this.oldAudioObj = obj
				if (this.innerAudio.paused) {
					//暂停中
					let startTime = arrVoice.filter(D => D.index === obj.indexMy)[0].startTime
					if (startTime) {
						this.innerAudio.startTime = startTime
					}
					this.innerAudio.play()
				} else {
					// 播放中
					if (obj.anewAudio == '2') {
						this.innerAudio.pause()
						// 	暂停
						arrVoice.forEach(D => {
							if (D.index === obj.indexMy) {
								D.startTime = this.innerAudio.duration
							}
						})
						uni.setStorageSync('arrVoice', arrVoice);
					} else if (obj.anewAudio == '1') {
						//结束
						this.innerAudio.stop()
					}
				}
			},
			async getAutoMode() {
				uni.showLoading({
					title: '加载中'
				});
				try {
					let {
						Data
					} = await vipCard({
							Action: "GetDecorate",
							Name: "测试2"
						},
						"UShopOpera"
					);
					let timeS = this.location.longitude ? 0 : 3000
					setTimeout(() => {
						uni.hideLoading()
						this.loadding = false
						this.listMode = Data.Decorate.HtmlInfo || [];
					}, timeS)
					// console.log(this.listMode,888888)

					// let arrVoice = []
					// uni.getStorageSync('arrVoice');
					// this.listMode.forEach((D, index) => {
					// 	//处理多个音乐播放器
					// 	D.props.indexMy = index
					// 	if (D.viewComponets === 'voice') {
					// 		arrVoice.push({
					// 			'index': index
					// 		})
					// 	}
					// })
					// let bool = this.listMode.some(D => D.viewComponets === 'voice')
					// if (bool) {
					// 	//播放器
					// 	this.innerAudio = uni.createInnerAudioContext()
					// }
					// uni.setStorageSync('arrVoice', arrVoice);
				} catch (e) {
					console.log(e);
				}
			}
		}
	};
</script>

<style scoped lang="less" scoped>
	.shoppingCart_style {
		// padding-bottom: 50px;

		/deep/.uni-navbar__header-btns-left {
			width: 160rpx;
		}

		/deep/.uni-navbar__header-right {
			// #ifdef H5
			width: 0px !important;
			padding: 0;
			// #endif
		}

		.van-popup--top {
			width: 145px !important;
		}

		.van-dropdown-menu {
			height: 54px;
		}
	}
</style>
