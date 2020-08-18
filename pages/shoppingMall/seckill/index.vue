<template>
	<div class="seckill">
		<div v-if="!loading">
			<uni-nav-bar :fixed="true" left-icon="back" @clickLeft="clickLeft" title="秒杀活动" :status-bar="true" :shadow="false"></uni-nav-bar>
			<div style="padding: 8px;">
				<div v-for="(item,index) in list" :key="index" class="seckill-goodsBox">
					<a-good-box :itemData="item" :imgHeight="imgHeight" @goodBox="goodBox" :seckill="true"></a-good-box>
				</div>
			</div>
			<a-nodeData v-if="(list.length===0)"></a-nodeData>
		</div>
	</div>
</template>

<script>
	import {
		vipCard
	} from "@/api/http.js";
	export default {
		name: "",
		components: {},
		data() {
			return {
				list: [],
				loading: true
			};
		},
		mounted() {
			this.$store.commit("SET_HISTORY_URL", {path:'/pages/shoppingMall/seckill/index'})
			this.imgHeight = (uni.getSystemInfoSync().windowWidth - 22) / 2 + "px";
			this.getlist();
			
		},
		methods: {
			async getlist() {
				uni.showLoading()
				try {
					let res = await Promise.all([
						vipCard({
							Action: "GetPromotionList",
							Type: 1
						}, "UPromotionOpera")
					]);
					this.list = res[0].Data.ProdList;
					this.loading = false;
				} catch (e) {}
			},
			goodBox(val) {
				this.$Router.push({
					path: "/pages/shoppingMall/list/infoGood",
					query: {
						SID: val.SID,
						seckill: "true"
					}
				});
			},
			clickLeft() {
				this.$Router.push({
					path: "/pages/shoppingMall/index"
				});
			}
		}
	};
</script>

<style lang="less" scoped>
	.seckill {
		.seckill-goodsBox {
			display: inline-block;
		}

		.seckill-goodsBox:nth-child(2n + 1) {
			margin-right: 6px;
		}
	}
</style>
