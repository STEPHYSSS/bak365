// let token = ''
export default {
	isMock: true,
	BusinNoMy: uni.getStorageSync('BusinNo'),
	codeMy: 'code' + uni.getStorageSync('BusinNo'),
	url: process.env.NODE_ENV === "development" ? "http://192.168.0.103:8001/" : "../",
	// process.env.NODE_ENV === "development" ? '/' : '../'
	VUE_APP_PREFIX: '../',
	homeRoute: '/bind',
	BASE_URL_OnLine: 'http://dingtalk.bak365.cn/WeixinNew/Dist/'
	// BASE_URL: 'http://192.168.0.101:8001'
}