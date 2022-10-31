<template>
	<view class="cate-list">
		<view 
			class="cate-item" 
			:class="index == activeIndex ? 'active' : ''" 
			@click="handleClick(index)"
			v-for="(item,index) in list" 
			:key="item.cat_id">
			{{item.cat_name}}
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				activeIndex: 0
			}
		},
		props: {
			list: {
				type: Array,
				default() { return []}
			}
		},
		methods: {
			handleClick(index) {
				this.activeIndex = index
				this.$emit('handleClick',index)
			}
		},
		mounted() {
		}
	}
</script>

<style lang="scss">
	.cate-list {
		.cate-item {
			line-height: 60px;
			background-color: #F7F7F7;
			text-align: center;
			font-size: 12px;
			&.active {
				background-color: #fff;
			}
		}
	}
</style>