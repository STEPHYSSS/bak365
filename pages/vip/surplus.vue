<template>
	<div :class="classHome">
		<uni-nav-bar :fixed="true" left-icon="back" @clickLeft="clickLeft" title="交易记录" :status-bar="true" :shadow="false"></uni-nav-bar>
		<div class="surplusTop backgroundColor" v-if="!loading">
			<!-- <div class="surplusD">余额(元)</div>
			<div class="surplusTopM">
				{{Balance}}
			</div>
			<div class="surplusD">积分</div>
			<div class="surplusTopM">
				{{Score}}
			</div> -->
			<div class="surplusD">卡号：{{MyCard.CardNo}}</div>
			<div class="surplusD">余额：{{MyCard.Balance}}元</div>
			<div class="surplusD">积分：{{MyCard.Score}}</div>
		</div>
		<div class="surplusBottom" v-if="!loading">
			<!-- <van-cell-group> -->
			<div v-if="DataList.length>0">
				<div v-for="(item,index) in DataList" :key="index" class="van-cell">
					<div class="van-cell__title">
						<div class="titleHear">
							<span>交费明细</span>
							<div style="float: right" v-if="item.ShopName">{{item.ShopName}}</div>
						</div>
						<div v-if="item.CardPay>0">
							<span>消费金额</span>
							<div class="custom-time" style="float: right">-{{item.CardPay}}</div>
						</div>
						<div v-if="item.IncomeAmt">
							<span class="custom-label">充值金额</span>
							<div class="custom-time" style="float: right">+{{item.IncomeAmt}}</div>
						</div>
						<div v-if="item.DonateAmt>0">
							<span class="custom-label">赠送金额</span>
							<div class="custom-time" style="float: right">+{{item.DonateAmt}}</div>
						</div>
						<div v-if="item.DonateScore>0">
							<span class="custom-label">赠送积分</span>
							<div class="custom-time" style="float: right">+{{item.DonateScore}}</div>
						</div>
						<div v-if="item.ScorePay>0">
							<span class="custom-label">积分支付</span>
							<div class="custom-time" style="float: right">-{{item.ScorePay}}</div>
						</div>
						<div class="custom-label">时间：{{item.OptTime}}</div>
						<div class="custom-label" v-if="item.ExchSID">订单号：{{item.ExchSID}}</div>
					</div>
				</div>
			</div>
			<div class="noneData" v-if="DataList.length===0">暂无交易</div>
			<!-- </van-cell-group> -->
		</div>
	</div>
</template>

<script>
	import {
		vipCard
	} from '@/api/http.js';
	import adCell from '@/node_modules/adcell/ADCell.vue';
	export default {
		name: "surplus",
		components: {
			adCell
		},
		data() {
			return {
				classHome: getApp().globalData.mainStyle,
				loading: true,
				Balance: 0,
				Score: 0,
				DataList: [],
				cardNo: '',
				MyCard:{}
			};
		},
		async onLoad(option) {
			await this.getList();
		},
		computed: {
			// currentRouter() {
			// 	// true=>余额  false=> 积分
			// 	return this.$route.path === '/home/surplus'
			// }
		},
		methods: {
			async getList() {
				this.loading = true;
				try {
					let data = await vipCard({
						Action: "CardTransLog"
					}, "UCardTransOpera");
					if(data.Data.MyCard){
						this.MyCard = data.Data.MyCard
					}
					this.DataList = data.Data.OrderList || [];
					this.Balance = data.Data.Balance || 0;
					this.Score = data.Data.Score || 0;
					this.loading = false;
				} catch (e) {
					this.loading = false;
				}
			},
			clickLeft(){
				this.$Router.pushTab({
					path: "/pages/home"
				});
			}
		},
		filters: {}
	};
</script>

<style scoped lang="less">
	@import "~@/assets/css/weiFull";

	.surplusBottom {
		margin: 10px;

		.van-cell-group {
			background-color: transparent;
		}

		.titleHear {
			padding-bottom: 16px;
			position: relative;

			&:after {
				position: absolute;
				box-sizing: border-box;
				content: " ";
				pointer-events: none;
				right: -15px;
				left: 0;
				bottom: 6px;
				border-bottom: 1px solid #ebedf0;
				transform: scaleY(0.5);
			}
		}

		.custom-time {
			margin-top: 3px;
			color: #969799;
			font-size: 14px;
			line-height: 18px;
		}

		.custom-label {
			margin-top: 3px;
			color: #969799;
			font-size: 12px;
			line-height: 18px;
		}

		.noneData {
			text-align: center;
			position: relative;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			margin: 40px 0;
			padding-bottom: 20px;
		}
	}

	.van-cell {
		margin-bottom: 10px;
		position: relative;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 16px;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}

	.van-cell__title {
		flex: 1;
	}
</style>
