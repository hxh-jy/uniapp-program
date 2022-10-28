<template>
	<view class="floor-container">
		<view class="floor-list" v-for="(item,index) in list" :key="index">
			<image class="title-img" :src="item.floor_title.image_src" mode=""></image>
			<view class="floor-item" >
				<view class="img-left" >
					<navigator
					:url="item.product_list[0].url" 
					:open-type="item.product_list[0].open_type">
						<image
						:style="{width: item.product_list[0].image_width +'rpx'}" 
						:src="item.product_list[0].image_src" mode="widthFix"></image>
					</navigator>
				</view>
				<view class="img-right">
					<navigator 
					v-for="img in item.product_list.slice(1)" 
					:open-type="img.open_type"
					:key="img.name"
					:url="img.url">
						<image
							:style="{width: img.image_width +'rpx'}"
							:src="img.image_src" mode="widthFix" ></image>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
	.floor-container {
		display: flex;
		flex-direction: column;
		.floor-list {
			.title-img {
				width: 100%;
				height: 60rpx;
			}
			.floor-item {
				display: flex;
				justify-content: space-between;
				.img-left {
					margin-right: 6px;
				}
				.img-right {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					height: 100%;
					image {
						vertical-align: middle;
					}
				}
			}
		}
	}
</style>