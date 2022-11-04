<template>
	<view>
		<!-- 选择收货地址的盒子 -->
		<view class="address-choose-box" @click="chooseAddress" v-if="JSON.stringify(address) === '{}'">
			<button type="primary" size="mini" class="btnChooseAddress">请选择收货地址+</button>
		</view>
		<!-- 渲染收货信息的盒子 -->
		<view @click="chooseAddress" class="address-info-box" v-else>
			<view class="row1">
				<view class="row1-left">
					<view class="username">收货人：<text>{{address.userName}}</text></view>
				</view>
				<view class="row1-right">
					<view class="phone">电话：<text>{{address.telNumber}}</text></view>
					<uni-icons type="arrowright" size="16"></uni-icons>
				</view>
			</view>
			<view class="row2">
				<view class="row2-left">收货地址：</view>
				<view class="row2-right">{{addstr}}</view>
			</view>
		</view>
		<!-- 底部的边框线 -->
		<image src="/static/cart_border@2x.png" class="address-border"></image>
	</view>
</template>

<script>
	import {mapMutations,mapState,mapGetters} from 'vuex'
	export default {
		data() {
			return {
			}
		},
		computed: {
		// 收货详细地址的计算属性
			...mapState('m_user',['address']),
			...mapGetters('m_user',['addstr'])
		},
		methods: {
			...mapMutations('m_user',['updateAddress']),
			async chooseAddress() {
				const [err,succ] = await uni.chooseAddress().catch(err => err)
				if (!err && succ.errMsg === 'chooseAddress:ok') {
					this.updateAddress(succ)
				}
				
				// 用户授权 && err.Msg === 'chooseAddress:fail auth deny'
				if (err) {
					this.reAuth()
				}
			},
			async reAuth() {
				let [err,confirmRes] = await uni.showModal({
					content: '检测到您没办法打开地址权限，是否去设置打开',
					confirmText: '确认',
					cancelText: '取消'
				})
				
				if (err) return
				// 用户点击了取消授权的按钮，则提示 您取消了地址授权
				if (confirmRes.cancel) return uni.$showMsg('您取消了地址授权！')
				// 用户点击了确认按钮  则调用uni.openSetting 方法进入授权页面让用户进行重新授权
				if (confirmRes.confirm) {
					let setting = uni.openSetting({
						success(settingRes) {
							console.log('settingRes:',settingRes)
							if (settingRes.authSetting['scope.address']) return uni.$showMsg('授权成功，请选择地址')
							if (!settingRes.authSetting['scope.address']) return uni.$showMsg('您取消了地址授权！')
						}
					})
				}
			}
		},
		mounted() {
		}
	}
</script>

<style lang="scss">
	// 底部边框线的样式
	.address-border {
		display: block;
		width: 100%;
		height: 5px;
	}

	// 选择收货地址的盒子
	.address-choose-box {
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	// 渲染收货信息的盒子
	.address-info-box {
		font-size: 12px;
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 5px;
	
	// 第一行
		.row1 {
			display: flex;
			justify-content: space-between;

			.row1-right {
				display: flex;
				align-items: center;

				.phone {
					margin-right: 5px;
				}
			}
		}

		// 第二行
		.row2 {
			display: flex;
			align-items: center;
			margin-top: 10px;

			.row2-left {
				white-space: nowrap;
			}
		}
	}
</style>
