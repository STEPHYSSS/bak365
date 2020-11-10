<template>
	<div class="footPrint">
		<uni-nav-bar :fixed="true" left-icon="back" @clickLeft="clickGo" title="我的足迹" :status-bar="true" :shadow="false"></uni-nav-bar>
		<div class="leaderBox" v-if="footPrintList.length>0" >
			<div v-for="(item,index) in footPrintList" :key="index">
				<p class="fansBox">
					<image :src="item.Img | imgFilter"></image>
					<span>{{item.Name}}</span>
				</p>
			</div>
		</div>
		<a-nodeData stringVal="暂无数据" v-else></a-nodeData>		
	</div>
</template>

<script>
	import {vipCard} from '@/api/http.js'
	export default {
		name: "FootPrint",
		data() {
			return {
				footPrintList:[],
				loading: true,
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
						Action: "GetFootPrint"
					}, "UMemberOpera");
					this.footPrintList =data.Data.FootPrintList;
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
		},
		filters: {
			imgFilter(val) {
				let localUrl = window.location.href;
				let localToken = localUrl.split("#")[0]
				return `http://dingtalk.bak365.cn/WeixinNew/Dist/../` + val
			}
		},
	}
</script>

<style scoped lang="less">
.footPrint{
	height: 100%;
}
.leaderBox{
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	background-color: #F1F1F1;
}
.fansBox{
	background:#fff;
	text-align: center;
	float: left;
	margin: 10px 5px 0 8px;
	image{
		width: 110px;
		height: 110px;
		
	}
	span{
		padding: 5px 0;
		display: block;
	}
}
</style>
