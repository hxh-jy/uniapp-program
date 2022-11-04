<template>
	<view class="my-settle-container">
		<!-- 全选区域 -->
		<label class="radio">
			<radio @click="handleRadioChange" color="#C00000" :checked="ischooseAll" /><text>全选</text>
		</label>
		<!-- 合计区域 -->
		<view class="amount-box">
			合计:<text class="amount">￥{{settlePrice}}</text>
		</view>
		<!-- 结算按钮 -->
		<view class="btn-settle" @click="handleSettle">结算({{settleCount}})</view>
	</view>
</template>

<script>
	import {mapState,mapGetters,mapMutations} from 'vuex'
	export default {
		name:"my-settle",
		data() {
			return {
			};
		},
		computed: {
			...mapGetters('m_cart',['settleCount','settlePrice','ischooseAll']),
			...mapGetters('m_user',['addstr']),
			...mapState('m_user',['token'])
		},
		methods: {
			...mapMutations('m_cart',['updateChooseAll']),
			handleRadioChange(e) {
				this.updateChooseAll(!this.ischooseAll)
			},
			handleSettle() {
				console.log('请选择要结算的商品')
				// 点击结算之前要先判断是否选择了商品
				if (this.settleCount == 0) return uni.$showMsg('请选择要结算的商品')
				// 判断是否选择了收货地址
				if (!this.addstr) return uni.$showMsg('请选择收货地址')
				// 判断用户是否登录了
				if (!this.token) return uni.$showMsg('请先登录！')
			}
		}
	}
</script>

<style lang="scss">
	.my-settle-container{
		position: fixed;
		bottom: 0;
		left: 0;		width: 100%;
		height: 50px;
		background-color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 5px;
		font-size: 14px;
		.radio {
			display: flex;
			align-items: center;
		}
		.amount {
			color: #c00000;
		}
		.btn-settle {
			height: 50px;
			min-width: 100px;
			background-color: #c00000;
			color: white;
			line-height: 50px;
			text-align: center;
			padding: 0 10px;
		}
	}
</style>