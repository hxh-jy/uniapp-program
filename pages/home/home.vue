<template>
	<view>
		<Swiper :list="swiperList"></Swiper>
	</view>
</template>

<script>
	import Swiper from '../../components/home/swiper.vue'
	export default {
		data() {
			return {
				swiperList: []
			};
		},
		components: {
			Swiper
		},
		methods:{
			async getSwiperList() {
				let {data: res} = await uni.$http.get('/public/v1/home/swiperdata')
				console.log('测试获取到的轮播图数据',res)
				if (res.meta && res.meta.status == 200) {
					this.swiperList = res.message
				} else {
					return uni.showToast({
						title:'数据请求失败！',
					})
				}
			}
		},
		onLoad() {
			this.getSwiperList()
		}
	}
</script>

<style lang="scss">

</style>
