import {
	vipCard
} from '@/api/http.js';
export default {
	data: function() {
		return {
			location: {}
		}
	},
	methods: {
		async getWxConfig() {
			// 获取当前地址
			try {
				let {
					Data
				} = await vipCard({
					Action: "GetJSSDK"
				}, "UProdOpera");
				wx.config({
					debug: false,
					appId: Data.SDK.appId,
					timestamp: Data.SDK.timestamp,
					nonceStr: Data.SDK.nonceStr,
					signature: Data.SDK.signature,
					jsApiList: ["getLocation","openAddress"]
				});
				console.log('获取微信的js',Data)
				wx.ready(res => {
				    wx.getLocation({
				       type: 'gcj02',  // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				      success: function(res) {
				        console.log('成功回调',res)
				      },
				      cancel: function(res) {
				        console.log("cancel", res);
				      }
				    });
				  wx.error(function(res) {
				    toast1.clear();
				    let toast2  = this.$toast.fail('获取当前位置失败');
				    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
				    console.log("调用微信接口获取当前位置失败", res);
				  });
				})
			} catch (e) {
				// console.log(e, "55555");
			}
		}
	}
}
