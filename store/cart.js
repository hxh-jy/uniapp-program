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
		},
		// 更新商品的选中状态
		updateGoodsState(state,goods) {
			const findRes = state.cart.find(item => item.goods_id == goods.goods_id)
			if (findRes) {
				findRes.goods_state = goods.goods_state
				this.commit('m_cart/saveToStorage')
			}
		},
		// 更新商品的数量
		updateGoodsCount(state,goods) {
			const findRes = state.cart.find(item => item.goods_id == goods.goods_id)
			if (findRes) {
				findRes.goods_count = goods.goods_count
				this.commit('m_cart/saveToStorage')
			}
		},
		// 删除商品
		deleteGoods(state,goods) {
			state.cart = state.cart.filter(item => item.goods_id == goods.goods_id)
			this.commit('m_cart/saveToStorage')
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