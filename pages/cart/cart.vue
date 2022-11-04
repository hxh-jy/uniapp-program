<template>
	<view class="cart-container">
		<my-address></my-address>
		<view class="cart-title">
			<uni-icons type="shop-filled" size="18"></uni-icons>
			<text class="cart-title-text">购物车</text>
		</view>
		
		<ProductList :showNumberbox="true" :showRadio="true" v-if="cart && cart.length > 0" :list="cart"></ProductList>
	</view>
</template>

<script>
	import badgeMix from '@/mixins/tabbar-badge.js'
	import ProductList from '@/components/goods/ProductList.vue'
	import {mapState} from 'vuex'
	export default {
		mixins: [badgeMix],
		computed: {
			...mapState('m_cart',['cart'])
		},
		components: {
			ProductList
		}
	}
</script>

<style lang="scss">
  .cart-container {
    padding-bottom: 50px;
	background-color: #fff;
	.cart-title {
	  height: 40px;
	  display: flex;
	  align-items: center;
	  padding-left: 5px;
	  border-bottom: 1px solid #EFEFEF;
	
	  .cart-title-text {
	    font-size: 14px;
	    margin-left: 10px;
	  }
	}
  }
</style>
