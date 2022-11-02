export default {
	namespaced: true,
	state: {
		cart: JSON.parse(uni.getStorageSync('cart') || '[]')
	},
	mutations: {
		// 将商品加入购物车
		addtoCart(state,goods) {
			// 判断购物车中是否有该商品，没有则添加进来
			let findRes = state.cart.find( x => x.goods_id === goods.goods_id)
			
			if (!findRes) {
					state.cart.push(goods)
			} else {
				findRes.goods_count ++
			}
			this.commit('m_cart/saveToStorage')
		},
		// 持久化保存购物车的商品
		saveToStorage(state) {
			uni.setStorageSync('cart',JSON.stringify(state.cart))
		}
	},
	getters: {
		// 获取加入购物车的商品总数量
		total(state) {
			let count = 0
			state.cart.forEach(item => count += item.goods_count)
			return count
		}
	},
	
}