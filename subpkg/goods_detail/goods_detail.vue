<template>
	<view>
		<SwiperPrivew :list="detailInfo.pics" v-if="detailInfo.pics &&　detailInfo.pics.length > 0"></SwiperPrivew>
		<!-- 商品信息详情区域 -->
	</view>
</template>

<script>
	import SwiperPrivew from '@/components/goods/SwiperPrivew.vue'
	export default {
		data() {
			return {
				detailInfo: {}
			};
		},
		components: {
			SwiperPrivew
		},
		methods:  {
			async getGoodsDetail(goods_id) {
				let res = await uni.api.getGoodsDetail({goods_id: goods_id})
				if (res.meta.status == 200) {
					this.detailInfo = res.message
					console.log('获取商品详情页数据',res.message)
				} else return uni.$showMsg('商品详情数据正在加载中')
			}
		},
		onLoad(options) {
			this.getGoodsDetail(options.goods_id)
		}
	}
</script>

<style lang="scss">

</style>
