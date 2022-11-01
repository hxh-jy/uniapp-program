<template>
	<view>
		<ProductList v-if="goodsList && goodsList.length > 0" :list="goodsList"></ProductList>
	</view>
</template>

<script>
	import ProductList from '@/components/goods/ProductList.vue'
	export default {
		data() {
			return {
				goodsList: [],
				total: 0, // 总共有的商品列表数
				params: {},
				isloading: false  // 是否正在加载数据中
			}
		},
		components: {
			ProductList
		},
		methods: {
			async getGoodslist(cb) {
				this.isloading = true
				let res = await uni.api.getGoodslist(this.params)
				
				// 当数据成功请求回来时需要停止下拉刷新事件
				cb && cb()
				uni.hideLoading()
				
				if (res.meta.status == 200) {
					this.isloading = false
					this.goodsList = [...this.goodsList,...res.message.goods]
					this.total = res.message.total
				} else return uni.$showMsg('商品列表数据正在加载中')
			}
		},
		onLoad(options) {
			this.params =  {
					query: options.query ?`${options.query}` : '',   // 查询关键词,
					cid:  options.cid ? `${options.cid}` :　'', // 商品的分类id
					pagemum: 1, //页码值
					pagesize: 10 // 每页显示的数据条数
				}
			this.getGoodslist()
		},
		// 处理上拉触底 重新加载数据
		onReachBottom() {
			// 判断是否有下一页数据
			if (this.params.pagemum * this.params.pagesize >= this.total) {
				return uni.$showMsg('数据加载完毕')
			}
			// 判断是否正在请求其他数据 如果是则不发起额外的请求
			if (this.isloading) return 
			this.params.pagemum += 1
			uni.showLoading({
				title:'数据加载中'
			})
			this.getGoodslist()
		},
		// 处理下拉刷新
		onPullDownRefresh() {
			//  重置关键数据
			this.params.pagemum = 1
			this.goodsList = []
			this.total = 0
			this.isloading = false
			uni.showLoading({
				title:'数据加载中'
			})
			
			// 重新请求数据
			this.getGoodslist(() => uni.stopPullDownRefresh())
		}
	}
</script>

<style>

</style>
