<template>
	<view class="goods-container">
		<uni-swipe-action>
			<view  v-for="item in list" :key="item.goods_id">
				<uni-swipe-action-item @click="handleDel($event,item)"  :right-options="options">
					<view class="goods-list">
						<radio @click="radioChange(item)" v-if="showRadio" :checked="item.goods_state" color="#c00"></radio>
						<image @click="gotoDetail(item)" style="width: 100px;height: 100px;" :src="item.goods_small_logo || defaultImg" mode=""></image>
						<view class="goods-right">
							<view @click="gotoDetail(item)" class="goods-name">
								{{item.goods_name}}
							</view>
							<view class="goods-price">
								￥{{toFixed(item.goods_price)}}
								<!-- 以下事件中想要传入额外的参数，第一个参数必须为$event代表事件源，第二个参数传自定义事件 -->
								<uni-number-box v-if="showNumberbox" :min="1" :value="item.goods_count" @change="handleNumberchange($event,item)"></uni-number-box>
							</view>
						</view>
					</view>
				</uni-swipe-action-item>
			</view>
		</uni-swipe-action>
	</view>
</template>
<script>
	import {mapMutations} from 'vuex'
	export default {
		props: {
			list: {
				type: Array,
				default() {return []}
			},
			showRadio: {
				type: Boolean,
				default: false
			},
			showNumberbox: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				defaultImg: `https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b
							4/pics/movie/celebrity-default-medium.png`,
				options: [
					{
						text: '删除',
						style: {
							backgroundColor: '#c00'
						}
					}
				]
			}
		},
		methods: {
			...mapMutations('m_cart',['updateGoodsState','updateGoodsCount','deleteGoods']),
			radioChange(item) {
				let goods ={}
				goods.goods_id = item.goods_id
				goods.goods_state = !item.goods_state
				this.updateGoodsState(goods)
			},
			handleNumberchange(val,item) {
				let goods ={}
				goods.goods_id = item.goods_id
				goods.goods_count = val
				this.updateGoodsCount(goods)
			},
			handleDel(e,item) {
				this.deleteGoods(item)
			},
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
		.goods-list {
			display: flex;
			justify-content: space-between;
			margin-top: 12px;
			border-bottom: 1px solid #eee;
			padding-bottom: 12px;
			radio {
				align-self: center;
			}
			.goods-right {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 8px;
				font-size: 12px;
				.goods-price {
					display: flex;
					justify-content: space-between;
					font-size: 14px;
					color: #c00;
					uni-number-box {
						width: 75px;
					}
				}
			}
		}
	}
</style>