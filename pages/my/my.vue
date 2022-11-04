<template>
	<view>
		<!-- 用户未登录时显示登录组件 -->
		<my-login v-if="!token"></my-login>
		
		<!-- 用户登录了时显示用户信息组件 -->
		<my-userinfo v-else></my-userinfo>
	</view>
</template>

<script>
	import badgeMix from '@/mixins/tabbar-badge.js'
	import {mapState} from 'vuex'
	
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			...mapState('m_user',['token'])
		},
		mixins: [badgeMix]
	}
</script>

<style lang="scss">

</style>
