<template>
	<view class="nave-list">
		<view class="nav-item" v-for="item in list" :key="item.name">
			<navigator v-if="item.navigator_url" url="/pages/cate/cate" :open-type="item.open_type">
				<image :src="item.image_src" mode=""></image>
			</navigator>
			<image v-else :src="item.image_src" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default() { return []}
			}
		}
	}
</script>

<style lang="scss">
	.nave-list {
		display: flex;
		justify-content: space-between;
		margin: 12rpx;
		.nav-item {
			navigator{
				width: 128rpx;
				height: 140rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			image {
				width: 128rpx;
				height: 140rpx;
			}
		}
	}
</style>