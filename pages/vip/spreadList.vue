<template>
	<div class="spreadList">
		<uni-nav-bar :fixed="true" left-icon="back" @clickLeft="clickGo" title="我的分享" :status-bar="true" :shadow="false"></uni-nav-bar>
		<div class="leaderBox" >
			<!-- 推广图片， 推广链接 商品名称 -->
			<div class="good_card_box" style="margin-bottom:10px">
				<div v-for="(item,index) in spreadArr" :key="index">
					<image :src="item.SpreadImg" style="width: 35px;height: 35px;border: 1px solid red;"></image>
					<p>{{item.Name}}</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {vipCard} from '@/api/http.js'
	import adCell from '@/node_modules/adcell/ADCell2.vue';
	export default {
		name: "spreadList",
		components: {
			adCell
		},
		data() {
			return {
				loading: true,
				spreadArr:[]
			}
		},
		async onLoad(option) {
			await this.getList();
		},
		
		methods: {
			// 列表信息
			async getList() {
				this.loading = true;
				try {
					let data = await vipCard({
						Action: "GetSpreadList"
					}, "UMemberOpera");
					this.spreadArr =data.Data.SpreadList;
					this.loading = false;
				} catch (e) {
					this.loading = false;
				}
			},
			// 返回
			clickGo() {
				this.$Router.pushTab({
					path: "/pages/home"
				});
			}
		}
	}
</script>
haod
<style scoped lang="less">
	.applyLeader{
		.leaderBox{
			height: 45px;
			img{
				width: 45px;
				height: 45px;
				border-radius: 5px;
				float: right;
			}
			span{
				display: inline-block;
				position: absolute;
				left: 13px;
				top: 22px;
				color: rgb(94, 94, 94);
			}
			#allPay{
				width: 270px;
				padding: 7px 0 7px 5px;
				margin-left: 5px;
				display: inline-block;
				border: 1px solid #f7f7f7;
			}
			button{
				    background: #fff;
				    margin-top: 30px;
			}
		}
	}
</style>
