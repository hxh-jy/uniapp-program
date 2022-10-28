<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
		<swiper-item v-for="item in list" :key="item.goods_id">
			<image :src="item.image_src" mode=""></image>
		</swiper-item>
	</view>
</template>

<script>
	export default {
		name:"swiper",
		data() {
			return {
				
			};
		},
		props: {
			list: {
				type: Array,
				default() {return []}
			}
		},
		mounted() {
			console.log('测试传过来的数据',this.list)
		}
	}
</script>

<style lang="scss">
swiper {
	height: 330rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
</style>