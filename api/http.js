import Cookies from '@/config/cookie-my/index.js';
import store from '../store/store.js'
import router from '../router/index.js'
import dataConfig from '@/config/index'
import Vue from 'vue' 

export const vipCard = (data, ViewKay, appNo) => {
	return new Promise((resolve, reject) => {
		uni.getProvider({
			service: 'oauth',
			success: async function(res) {
				let providerNew = res.provider[0]
				if (providerNew) {
					// 小程序
					return reject();
				} else {
					// h5
					let UserMACPhone = Cookies.get('UserMACPhone')
					let AppNo = Cookies.get('AppNo') ? Cookies.get('AppNo') : appNo
					let urlaspx = 'RenderMobile.aspx'
					let url = dataConfig.url + urlaspx + '?AppNo=' + AppNo + '&ViewKay=' + ViewKay + '&UserMAC=' +
						UserMACPhone

					// uni.showLoading({
					// 	title: '加载中'
					// });
					uni.request({
						url: url,
						data: data,
						method: 'POST',
						headers: {
							// 跨域请求 这个配置不能少
							"Content-Type": "application/x-www-form-urlencoded",
							'Accept': 'application/json',
							'Access-Control-Allow-Origin':'*',
							'dataType':'json'
						},
						success: function(response) {
							if (response.data.Message === '请登录') {
								// return
								NOMAC()
							}
							let success = response.data.Success
							let isTip = response.data.hasOwnProperty('Success')
							if (isTip) {
								if (success) {
									uni.hideLoading();
									return resolve(response.data)
								} else {
									// console.log(response.data.Message)
									uni.showToast({
										title: response.data.Message,
										icon: 'none'
									});
									uni.hideLoading();
									return reject(response.data.Message || '操作失败')
								}
							} else {
								uni.hideLoading();
								return resolve(response.data)
							}
						},
						fail: function(error) {
							console.log(error, 'error')
							let errors = ''
							if (error.toString().search('TypeError') || error.toString().search('500')) {
								errors = '获取请求失败'
							} else if (typeof(error) == 'string') {
								errors = error
							} else if (error.toString() === '请登录') {
								errors = ''
							} else {
								errors = '获取请求失败'
							}
							uni.showToast({
								title: errors,
								icon: 'none' 
							});
							uni.hideLoading();
							return reject(errors);
						},
						complete: function() {
							// uni.hideLoading();
						}
					})
				}
			}
		})

	})
}

function NOMAC() {
	uni.clearStorageSync();
	var url = document.location.toString();
	var arrUrl = url.split("?");
	var para = arrUrl[1];
	para = para.split("&"); //获取url的参数
	para.forEach((D, index) => { //删除原本url上的code
		if (D.indexOf('code') > -1) {
			para.splice(index, 1)
		}
	})

	para = para.join(',')
	let currentUrl = arrUrl[0] + '?' + para
	Cookies.set('currentUrl', currentUrl)

	// let headUrl = window.location.protocol + "//" + window.location.host + '/#/GrantMiddle?BusinNo=' + Cookies.get('BusinNo')
	let headUrl = (process.env.NODE_ENV === "development" ? 'http://localhost:8080/' : dataConfig.BASE_URL_OnLine) +
		'#/GrantMiddle?AppNo=' + Cookies.get('AppNo')
	store.dispatch('get_user', {
		AppNo: Cookies.get('AppNo'),
		Code:'wxb7a2e9fc043daf1c'
	}).then(appId => {
		if (appId) {
			router.push({
				path: '/Grant',
				query: {
					appId: appId,
					redirect_uri: headUrl
				}
			})
		} else {
			uni.showToast({
				title: '获取appId失败!',
				icon: 'none'
			});
		}
	})
}