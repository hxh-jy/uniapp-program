<template>
	<view class="cart-container" v-if="cart && cart.length > 0">
		<my-address></my-address>
		<view class="cart-title">
			<uni-icons type="shop-filled" size="18"></uni-icons>
			<text class="cart-title-text">购物车</text>
		</view>
		
		<ProductList :showNumberbox="true" :showRadio="true" v-if="cart && cart.length > 0" :list="cart"></ProductList>
		<my-settle></my-settle>
	</view>
	<view class="empty-cart" v-else>
		<image src="/static/cart_empty@2x.png" class="empty-img"></image>
		<text class="tip-text">空空如也~</text>
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
  .empty-cart {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  padding-top: 150px;
	  .empty-img {
		  width: 90px;
		  height: 90px;
		}
	  .tip-text {
		  font-size: 12px;
		  color: gray;
		  margin-top: 15px;
		}
  }
</style>
