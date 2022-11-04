export default {
	namespaced: true,
	state: {
		address: JSON.parse(uni.getStorageSync('address') || '{}'),
		token: '',
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}')
	},
	mutations: {
		updateAddress(state,address) {
			state.address = address
			this.commit('m_user/saveAddressToStorage')
		},
		saveAddressToStorage(state) {
			uni.setStorageSync('address',JSON.stringify(state.address))
		},
		updateUserInfo(state,userinfo) {
			state.userinfo = userinfo
			this.commit('m_user/saveUserinfoToStorage')
		},
		saveUserinfoToStorage(state) {
			uni.setStorageSync('userinfo',JSON.stringify(state.userinfo))
		}
	},
	getters: {
		addstr(state) {
			if (!state.address.provinceName) return ''
			// 拼接 省，市，区，详细地址 的字符串并返回给用户
			return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo
		}
	}
}