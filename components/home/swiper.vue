<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
		<swiper-item v-for="item in list" :key="item.goods_id">
			<navigator 
			class="swiper-item" 
			:url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id">
			  <image :src="item.image_src"></image>
			</navigator>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name:"Swiper",
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
		}
	}
</script>

<style lang="scss">
swiper {
	navigator {
		height: 330rpx;
		width: 100%;
		image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>