import { vipCard } from '@/api/http.js';
export default {
	data() {
		return {
			location: {}
		}
	},
	methods:{
		// 进入首页就获取微信地址
		async getWxConfig(){
			try {
				let {
					Data
				} = await vipCard({
					Action: "GetJSSDK",
					Url: window.location.href
				}, "UProdOpera");
				
				wx.config({
					debug: true,
					appId: Data.SDK.appId,
					timestamp: Data.SDK.timestamp,
					nonceStr: Data.SDK.noncestr,
					signature: Data.SDK.signature,
					jsApiList: ["getLocation","openAddress"]
				});
				console.log(wx.config)
				wx.ready(res => {
					let _this = this;
				    wx.getLocation({
				       type: 'wgs84',  // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				      success: function(res) {
						  alert(JSON.stringify(res))
						_this.location = {
							longitude: res.longitude,
							latitude: res.latitude
						}
						_this.$store.commit("SET_CURRENT_LOCATION", _this.location);
						sessionStorage.setItem('location',JSON.stringify(_this.location))							
				      },
				      cancel: function(res) {
				       alert("cancel", res);
				      }
				    });
				  wx.error(function(res) {
				    let toast2  = this.$toast.fail('获取当前位置失败');
				    alert("调用微信接口获取当前位置失败", res);
				  });
				})
			} catch (e) {
				
			}
		},
	}
}