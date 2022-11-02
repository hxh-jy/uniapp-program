<template>
	<view class="home-container">
		<MySearch @tap="gotoSearch" class="home-search"></MySearch>
		<Swiper class="home-swiper" v-if="swiperList && swiperList.length > 0" :list="swiperList"></Swiper>
		<view class="home-body">
			<CatNav v-if="catList && catList.length > 0" :list="catList"></CatNav>
			<FloorList v-if="floorList && floorList.length > 0" :list="formatList(floorList)"></FloorList>
		</view>
	</view>
</template>

<script>
	import MySearch from '../../components/public/MySearch.vue'
	import Swiper from '../../components/home/Swiper.vue'
	import CatNav from '../../components/home/CatNav.vue'
	import FloorList from '../../components/home/FloorList.vue'
	
	import badgeMix from '@/mixins/tabbar-badge.js'
	export default {
		data() {
			return {
				swiperList: [],
				catList: [],
				floorList: []
			};
		},
		mixins: [badgeMix],
		components: {
			Swiper,
			CatNav,
			FloorList,
			MySearch 
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
				let res = await uni.api.getSwiperdata()
				if (res.meta && res.meta.status == 200) {
					this.swiperList = res.message
				} else return uni.$showMsg('轮播图数据加载失败')
			},
			async getCatitems() {
				let res= await uni.api.getCatitems() 
				if (res.meta.status == 200) {
					this.catList = res.message
				} else return uni.$showMsg('分类栏目数据加载失败')
			},
			async getFloorList() {
				let res = await uni.api.getFloorList()
				// console.log('测试楼层数据',res.message)
				if (res.meta.status == 200) {
					this.floorList = res.message
				} else return uni.$showMsg('楼层数据加载失败')
			},
			gotoSearch() {
				uni.navigateTo({
					url: '/subpkg/search/search'
				})
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
	.home-container {
		position: relative;
		.home-search {
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 999;
		}
		.home-swiper {
			margin-top: 50px;
		}
		.home-body {
			padding: 16rpx;
		}
	}
</style>
