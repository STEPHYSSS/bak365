<template>
	<div>
	</div>
</template>
<script src="https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js"></script>
<script>  var vConsole = new VConsole();  console.log('Hello world');</script>
<script>
	export default {
		name: "Grant",
		data() {
			return {
				redirect_uri: "",
				appId: ''
			};
		},
		onLoad(option) {
			debugger
			console.log(this.$route.query.redirect_uri,'===')
			let query = JSON.parse(option.query)
			console.log(query,'-----')
			this.redirect_uri = query.redirect_uri
			this.appId = query.appId
		},
		created() {
			if (process.env.NODE_ENV === "development") {
				// console.log(process.env.NODE_ENV === "development")
				let my_code = "0233c5jf2cfGEF0XS9jf2XZXif23c5jk";
				if (this.redirect_uri.indexOf("?") > 0) {
					this.strUrl = this.redirect_uri + "&code=" + my_code;
				} else {
					this.strUrl = this.redirect_uri + "?code=" + my_code;
				}
				window.location.href = this.strUrl
			} else {
				this.redirect_uri = encodeURIComponent(this.redirect_uri);
				let ab=	`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&response_type=code&scope=snsapi_userinfo&connect_redirect=1&redirect_uri=${this.redirect_uri}&state=1#wechat_redirect`;
				console.log(ab,'授权js')
				window.location.href =`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&response_type=code&scope=snsapi_userinfo&connect_redirect=1&redirect_uri=${this.redirect_uri}&state=1#wechat_redirect`;
			}
		},
		mounted() {},
		methods: {}
	};
</script>

<style scoped>
	.van-loading {
		text-align: center;
		line-height: 100vh;
	}
</style>
