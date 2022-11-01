<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
		<swiper-item v-for="(item,index) in list" :key="item.goods_id">
			<image :src="item.pics_big" @click="preview(index)"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default{
		props: {
			list: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			// 实现轮播图的预览效果
			preview(index) {
				uni.previewImage({
					current: index, // 当前显示图片的链接/索引值，传链接预览效果始终显示在该链接在urls中第一次出现的位置
					urls: this.list.map(item => item.pics_big), // 需要预览的链接列表
				})
			}
		}
	}
</script>

<style lang="scss">
	swiper {
		height: 750rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
</style>