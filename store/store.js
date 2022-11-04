import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moduleCart from './cart.js'
import modeuleUser from './user.js'
let store = new Vuex.Store({
	modules: {
		m_cart: moduleCart,
		m_user: modeuleUser
	}
})
export default store