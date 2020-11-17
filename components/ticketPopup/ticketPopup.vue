<template>
	<view>
		<popup-layer type="center" :show-pop="cartPopupVisible">
			<template slot="content" type="center">
				进店送券活动弹窗
			</template>
		</popup-layer>
	</view>
</template>

<script>
	import popupLayer from '@/components/popup-layer/popup-layer'
	export default {
		data() {
			return {
				cartPopupVisible: true,
			};
		},
		components: {
			popupLayer
		},
	}
</script>

<style lang="less">
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
