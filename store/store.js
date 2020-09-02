import Vue from 'vue'
import Vuex from 'vuex'
import {
	vipCard
} from '@/api/http.js';
import Cookies from '@/config/cookie-my/index.js';
import {
	GetQueryString,
	setUrlDelCode
} from '@/util/publicFunction'
import dataConfig from '@/config/index'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		orderType: 'takein', // 0外卖  1自取
		// 加入购物车商品信息
		currentCard: Cookies.get('currentCard') || [],
		// 当前定位的位置
		currentLocation: Cookies.get('currentLocation') || {},
		currentStoreInfo: Cookies.get('currentStoreInfo') || {},
		historyUrl: Cookies.get('historyUrl') || {}
	},
	mutations: {
		// :class = this.$store.state.status ? 'ziquClass' : 'waimaiClass'
		// this.$store.commit(0);
		['SET_ORDER_TYPE'](state, type) {
			state.orderType = type
		},
		['SET_CURRENT_LOCATION'](state, data) {
			state.currentLocation = data
			Cookies.set('currentLocation', data)
		},
		['SET_CURRENT_STORE'](state, data) {
			state.currentStoreInfo = data
			Cookies.set('currentStoreInfo', data)
			console.log(state.currentStoreInfo,'地址改变了')
		},
		['SET_CURRENT_CARD'](state, data) {
			state.currentCard = data
			Cookies.set('currentCard', data)
		},
		['SET_HISTORY_URL'](state, data) {
			// this.$store.state.historyUrl
			// this.$store.commit("SET_HISTORY_URL",{})
			state.historyUrl = data
			Cookies.set('historyUrl', data)
		}
	},
	actions: {
		// 获取appId 和 保存UserMAC     obj={BusinNo:newBusinNo,code:code} 登录的时候获取
		get_user({
			commit
		}, obj) {
			return new Promise(async (resolve, reject) => {
				try {
					let response = await vipCard(obj, 'UserSign')
					if (response.Data.hasOwnProperty('UserMAC')) {
						// let seconds = 7200000 //两小时 秒
						// let expires = new Date(new Date() * 1 + seconds * 1000)
						Cookies.set('UserMACPhone', response.Data.UserMAC)
					}
					if (response.Data.hasOwnProperty('UserBind')) {
						Cookies.set('isMember', response.Data.UserBind)
					}
					if (response.Data.hasOwnProperty('CardType')) {
						Cookies.set('CardType', response.Data.CardType)
					}

					//主题模板
					getApp().globalData.mainStyle = 'theme2'
					Cookies.set('mainStyle', 'theme2')

					resolve(response.Data.hasOwnProperty('AppId') ? response.Data.AppId : response.Data.hasOwnProperty('UserBind') ?
						response.Data.UserBind : '')
				} catch (e) {
					reject(e)
				}
			})
		}
	},
})

export default store
