<template>
	<view>
		<!-- 商品信息区域 -->
		<view class="goods-info-box">
			<view class="price" v-if="info.goods_price">￥{{info.goods_price}}</view>
			<view class="goods-info-body" v-if="info.goods_name">
				<view class="goods-name">{{info.goods_name}}</view>
				<view class="favi">
					<uni-icons type="star" size="18" color="gray"></uni-icons>
					<text>收藏</text>
				</view>
			</view>
			<view class="yf">快递：免运费---{{cart.length}}</view>
		</view>
		<!-- 商品详情信息 -->
		<rich-text v-if="info.goods_introduce" :nodes="info.goods_introduce"></rich-text>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		props: {
			info: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		
		computed: {
			...mapState('m_cart',['cart'])
		},
		methods: {
			formateIntro(intro) {
				return intro.replace(/<img/g,'<img style="display: block;"').repalce(/webp/g,'jpg')
			},
		}
	}
</script>

<style lang="scss">
	// 商品信息区域的样式
	.goods-info-box {
		padding: 10px;
		padding-right: 0;

		.price {
			color: #c00000;
			font-size: 18px;
			margin: 10px 0;
		}

		.goods-info-body {
			display: flex;
			justify-content: space-between;

			.goods-name {
				font-size: 13px;
				padding-right: 10px;
			}

			// 收藏区域
			.favi {
				width: 120px;
				font-size: 12px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-left: 1px solid #efefef;
				color: gray;
			}
		}

		// 运费
		.yf {
			margin: 10px 0;
			font-size: 12px;
			color: gray;
		}
	}
</style>
