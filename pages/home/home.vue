<template>
	<view>
		<Swiper v-if="swiperList && swiperList.length > 0" :list="swiperList"></Swiper>
		<view class="home-body">
			<CatNav v-if="catList && catList.length > 0" :list="catList"></CatNav>
			<FloorList v-if="floorList && floorList.length > 0" :list="formatList(floorList)"></FloorList>
		</view>
	</view>
</template>

<script>
	import Swiper from '../../components/home/Swiper.vue'
	import CatNav from '../../components/home/CatNav.vue'
	import FloorList from '../../components/home/FloorList.vue'
	export default {
		data() {
			return {
				swiperList: [],
				catList: [],
				floorList: []
			};
		},
		components: {
			Swiper,
			CatNav,
			FloorList
		},
		methods:{
			formatList(list) {
				if (!list) return
				return  list.map(item => {
					return {
						floor_title: item.floor_title,
						product_list: item.product_list.map(prod => {
							return {
								...prod,
								url: '/subpkg/goods_list/goods_list?' + prod.navigator_url.split('?')[1]
							}
						})
					}
				})
			},
			async getSwiperList() {
				let {data: res} = await uni.api.getSwiperdata()
				if (res.meta && res.meta.status == 200) {
					this.swiperList = res.message
				} else return uni.$showMsg('轮播图数据加载失败')
			},
			async getCatitems() {
				let {data: res} = await uni.api.getCatitems() 
				if (res.meta.status == 200) {
					this.catList = res.message
				} else return uni.$showMsg('分类栏目数据加载失败')
			},
			async getFloorList() {
				let {data: res} = await uni.api.getFloorList()
				// console.log('测试楼层数据',res.message)
				if (res.meta.status == 200) {
					this.floorList = res.message
				} else return uni.$showMsg('楼层数据加载失败')
			}
		},
		onLoad() {
			this.getSwiperList()
			this.getCatitems()
			this.getFloorList()
		}
	}
</script>

<style lang="scss">
.home-body {
	padding: 16rpx;
}
</style>
