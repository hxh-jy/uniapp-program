<template>
	<view class="goods-container">
		<view @click="gotoDetail(item)" class="goods-list" v-for="item in list" :key="item.cat_id">
			<image style="width: 100px;height: 100px;" :src="item.goods_small_logo || defaultImg" mode=""></image>
			<view class="goods-right">
				<view class="goods-name">
					{{item.goods_name}}
				</view>
				<view class="goods-price">
					￥{{toFixed(item.goods_price)}}
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
		data() {
			return {
				defaultImg: `https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b
							4/pics/movie/celebrity-default-medium.png`
			}
		},
		methods: {
			toFixed(num) {
				return Number(num).toFixed(2)
			},
			gotoDetail(goods) {
				uni.navigateTo({
					url: '/subpkg/goods_detail/goods_detail?goods_id=' + goods.goods_id
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods-container {
		padding: 12px;
		background-color: #fff;
		.goods-list{
			display: flex;
			justify-content: space-between;
			margin-top: 12px;
			border-bottom: 1px solid #eee;
			padding-bottom: 12px;
			.goods-right {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 12px;
				font-size: 12px;
				.goods-price {
					font-size: 16px;
					color: #c00;
				}
			}
		}
	}
</style>