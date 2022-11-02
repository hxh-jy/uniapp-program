<template>
	<view class="goods-detail">
		<SwiperPrivew :list="detailInfo.pics" v-if="detailInfo.pics &&　detailInfo.pics.length > 0"></SwiperPrivew>
		<!-- 商品信息详情区域 -->
		<GoodsDetail :info="detailInfo"></GoodsDetail>
		<!-- 商品底部导航区域 -->
		
		<!-- fill 控制右侧按钮的样式 -->
		<!-- options 左侧按钮的配置项 -->
		<!-- buttonGroup 右侧按钮的配置项 -->
		<!-- click 左侧按钮的点击事件处理函数 -->
		<!-- buttonClick 右侧按钮的点击事件处理函数 -->
		<uni-goods-nav 
		:fill="true"
		:options="options" 
		:buttonGroup="buttonGroup"
		@click="handleClick"
		@buttonClick="buttonClick"
		></uni-goods-nav>
	</view>
</template>

<script>
	import SwiperPrivew from '@/components/goods/SwiperPrivew.vue'
	import GoodsDetail from '@/components/goods/GoodsDetail.vue'
	
	import {mapMutations,mapGetters} from 'vuex'
	export default {
		data() {
			return {
				detailInfo: {},
				//  定义商品导航栏数据
				options: [{
					icon: 'shop',
					text: '店铺'
				}, {
					icon: 'cart',
					text: '购物车'
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			};
		},
		computed: {
			...mapGetters('m_cart',['total'])
		},
		watch: {
			total: {
				immediate: true,
				handler(newVal) {
					const res = this.options.find(x => x.text === '购物车')
					if (res) {
						res.info = newVal
					}
				}
 			}
		},
		components: {
			SwiperPrivew,
			GoodsDetail
		},
		methods: {
			...mapMutations('m_cart',['addtoCart']),
			async getGoodsDetail(goods_id) {
				let res = await uni.api.getGoodsDetail({
					goods_id: goods_id
				})
				if (res.meta.status == 200) {
					this.detailInfo = res.message
				} else return uni.$showMsg('商品详情数据正在加载中')
			},
			handleClick(e) {
				if (e.content.text === '购物车') {
					uni.switchTab({
						url: '/pages/cart/cart'
					})
				}
				console.log('左侧被点击勒',e)
			},
			buttonClick(e) {
				if (e.content.text == '加入购物车') {
					// 组织一个商品的信息对象
					const goods = {
						goods_id: this.detailInfo.goods_id, // 商品的Id
						goods_name: this.detailInfo.goods_name, // 商品的名称
						goods_price: this.detailInfo.goods_price, // 商品的价格
						goods_count: 1, // 商品的数量
						goods_small_logo: this.detailInfo.goods_small_logo, // 商品的图片
						goods_state: true // 商品的勾选状态
					}
					this.addtoCart(goods)
				}
			}
		},
		onLoad(options) {
			this.getGoodsDetail(options.goods_id)
		}
	}
</script>

<style lang="scss">
	.goods-detail {
		uni-goods-nav {
			width: 100%;
			position: fixed;
			bottom: 0;
		}
	}
</style>
