<template>
	<view>
		<div v-show="showPopu" class="popSty"></div>
		<div class="activeBox" v-show="showPopu">
			<!-- <image src="../../static/img/ticketBoxS.png" style="width: 100%;height: 100%;"></image> -->
			<image src="@/static/img/close.png" class="close" @click="close"></image>
			<div class="ticketPart">
				<h3 style="color: #fff;">进店送券</h3>
				<div class="smallbox" v-for="(item,index) in ticketList" :key="index">
					<span>¥{{item.price}}</span>
					<div style="float: right;width: 61%;margin-top: 12px;">
						<p>{{item.Name}}</p>
						<p>{{item.disc}}</p>
						<p>{{item.time}}</p>
					</div>
				</div>
				<p class="receive">立即领取</p>
			</div>
		</div>
		<!-- <popup-layer type="center" :show-pop="cartPopupVisible">
			<template slot="content" type="center">
				进店送券活动弹窗
			</template>
		</popup-layer> -->
	</view>
</template>

<script>
	// import popupLayer from '@/components/popup-layer/popup-layer'
	export default {
		data() {
			return {
				showPopu:true,
				ticketList:[{
					ticketNo:'001',
					Name:'进店有礼',
					disc:'100元生日蛋糕券',
					time:'2020.11.12-2020-11.30',
					price:'100'					
				},{
					ticketNo:'001',
					Name:'进店有礼',
					disc:'100元生日蛋糕券',
					time:'2020.11.12-2020-11.30',
					price:'100'					
				}]
			};
		},
		components: {
			// popupLayer
		},
		methods:{
			close(){
				this.showPopu = false;
			}
		}
	}
</script>

<style lang="less">
	.popSty{
		background-color: #4C4C4C;
		z-index: 999;
		display: block;
		height: 100vh;
		width: 100vw;
		position: flex;
		position: fixed;
		top: 0;
		opacity: 0.5;
	}
	.activeBox{
		width: 100%;
		height: 415px;
		position: fixed;
		top: 14%;
		z-index: 1000;
		background-image: url(../../static/img/ticketBoxS.png);
		background-size: 100% 100%;
		.close{
			width: 35px;
			height: 35px;
			position: absolute;
			right: 13px;
			top: 60px;
		}
	}
	.ticketPart{
		position: absolute;
		top: 30%;
		left: 10%;
		width: 80%;
		.receive{
			width: 150px;
			height: 36px;
			letter-spacing: 4px;
			background-color: orange;
			color: rgb(255, 255, 255);
			margin: 10px auto;
			text-align: center;
			line-height: 36px;
			font-size: 16px;
			border-radius: 16px;
			box-shadow: 0px 0px 4px 1px #f1a979;
		}
	}
	h3{
		color: #ea7802;
		font-size: 18px;
		text-align: center;
		letter-spacing: 4px;
		margin-bottom: 18px;
	}
	.smallbox{
		background-image: url(../../static/img/smallticket.png);
		background-size: 100% 100%;
		width: 90%;
		height: 86px;
		margin: 0 auto;
		position: relative;
		span{
			position: absolute;
			top: 25%;
			left: 11%;
			font-size: 15px;
			font-weight: 600;
			color: red;
		}
	}
	/deep/.popup-layer{
		z-index: 999 !important;
	}
	/deep/.popup-content{
		z-index: 1000;
	}
	/deep/.popup-content{
		display: inline-block;
		width: 200px;
		height: 200px;
		background-color: skyblue;
	}

</style>
