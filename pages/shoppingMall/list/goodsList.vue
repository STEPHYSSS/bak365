<template>
	<div class="backgroundFF">
		<!--        横-->
		<div v-if="!loading">
			<uni-nav-bar :status-bar="true" @clickLeft="clickLeft" :shadow="false" :fixed="true" left-icon="back">
				<uni-search-bar cancelButton="none" :disabledMy="true" style="width:100%" placeholder="请输入搜索关键词" :radius="50"></uni-search-bar>
				<div slot="right">
					<div class="headRight"></div>
				</div>
			</uni-nav-bar>
			<div class="leftNavsidebar" v-if="sidebarList.length>0">
				<view :class="['homepageLeftFixed']">
					<view v-for="(item,index) in sidebarList" :key="index" :class="['homepageLeft',index===currentIndex?'activeCanteen':'']"
					 @click="sidebarChange(index)">
						{{item.Name}}
					</view>
				</view>
			</div>
			<div class="goodBox1" v-if="list.length>0">
				<div class="goodBox-row" gutter="5">
					<div class="goodBox-col" v-for="(item,index) in list" :key="index">
						<a-good-box :itemData="item" :imgHeight="imgHeight" @goodBox="goodBox" @addCart="addCart(item)"></a-good-box>
					</div>
				</div>
			</div>
			<a-nodeData v-if="(sidebarList.length===0||list.length===0)"></a-nodeData>
		</div>
		<a-shopping-showSku :show="show" @hideShow="hideShow" :skuDataInfo="skuDataInfo"></a-shopping-showSku>
	</div>
</template>

<script>
	import {
		vipCard
	} from "@/api/http.js";
	import {
		goodListPublic
	} from "./public";

	export default {
		components: {
			// SkuShow,
			// nodeData
		},
		mixins: [goodListPublic],
		data() {
			return {
				activeKey: "",
				show: false,
				skuDataInfo: {},
				currentIndex: 0,
				imgHeight: '',
				imgHeightLine: '',
				loading:true
			};
		},
		async created() {
			this.imgHeight = (uni.getSystemInfoSync().windowWidth- 22 - 85) / 2 + "px";
			await this.getCouponList();
			await this.getList();
			
			this.$store.commit("SET_HISTORY_URL", {path:'/pages/shoppingMall/list/goodsList'})
		},
		mounted() {},
		methods: {
			async getCouponList() {
				try {
					let {
						Data
					} = await vipCard({
						Action: "GetCateList"
					}, "UProdOpera");
					this.sidebarList = Data.ProdCateList;
				} catch (e) {
					console.log(e);
				}
			},
			async getList(val) {
				try {
					let params = val ? val : this.sidebarList[0].SID;
					let {
						Data
					} = await vipCard({
							Action: "GetProdInfoList",
							CateSID: params
						},
						"UProdOpera"
					);

					this.list = Data.Prod_InfoList;
					this.list.forEach(D => {
						D.ImgList = D.ImgList ? D.ImgList.split(",") : [];
					});
					this.loading = false;
				} catch (e) {
					console.log(e);
					this.loading = false;
				}
			},
			sidebarChange(index) {
				this.currentIndex = index
				this.getList(this.sidebarList[index].SID);
			},
			goodBox(val) {
				this.$Router.push({
					path: "/pages/shoppingMall/list/infoGood",
					query:{SID:val.SID,isGoodList:true}
				});
			},
			clickLeft(){
				this.$Router.pushTab({
					path: "/pages/shoppingMall/login"
				});
			},
			async addCart(item) {
				try {
					let obj = {
						Action: "GetProdInfo"
					};
					Object.assign(obj, item);

					let {
						Data
					} = await vipCard(obj, "UProdOpera");
					this.show = true;
					this.skuDataInfo = Data;
					// console.log(this.skuDataInfo,'this.skuDataInfo')
				} catch (e) {
					console.log(e);
				}
			},
			hideShow() {
				this.show = false;
			},
			vanOnSearch() {}
		},
		filters: {}
	};
</script>

<style lang="less">
	.backgroundFF {
		background: #ffffff;
		height: 100vh;

		/deep/.uni-navbar__header-btns-left {
			width: 60rpx;
		}

		/deep/.uni-navbar__header-right {
			// #ifdef H5
			width: 0px !important;
			padding: 0;
			// #endif
		}

		.van-search__action {
			&:hover {
				background: none;
			}
		}

		.leftNavsidebar {
			position: fixed;
			overflow-y: scroll;
			background: #f8f8f8;
			height: 100vh;
			left: 0;
			width: 85px;

			.homepageLeftFixed {
				font-size: 11pt;
				margin-bottom: 96px;
				color: #707070;
				font-weight: 500;
				background: #f9f9f9;
				padding-bottom: 15px;
			}

			.homepageLeft {
				color: #000;
				text-align: center;
				line-height: 1.4;
				position: relative;
				font-size: 28rpx;
				padding: 20px 12px 20px 8px;
			}

			.homepageLeft-info {
				position: absolute;
				top: 5px;
				right: 10px;
				width: 10px;
				height: 10px;
				font-size: 12px;
				font-weight: 500;
				line-height: 14px;
				color: #fff;
				text-align: center;
				white-space: nowrap;
				border: 1px solid #fff;
				border-radius: 16px;
				transform: translateX(50%);
				box-sizing: border-box;
				transform-origin: 100%;
			}

			.activeCanteen {
				background: #FFFFFF !important;
			}

			// .van-sidebar {
			// 	bottom: 0;
			// 	padding: 0 0 54px;
			// }

			// .van-hairline--top-bottom::after {
			// 	border-width: 0;
			// }
		}

		.van-sidebar-item--select::after {
			border-right: none;
		}

		.goodBox1 {
			padding: 8px;
			box-sizing: border-box;
			margin-left: 85px;
			background: #fff;

			.goodBox-row {
				display: flex;
				flex-wrap:wrap;

				:nth-child(2n).goodBox-col {
					margin-left: 6px;
				}
			}
		}
	}
</style>
