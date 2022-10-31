<template>
	<view>
		<view class="right-list" v-for="(item,index) in list">
			<view class="right-title">/{{item.cat_name}}/</view>
			<view class="item-child">
				<view 
				v-for="child in item.children" 
				:key="child.cat_id" 
				class="item-name">
				<navigator :url="'../../subpkg/goods_list/goods_list?cid=' + child.cat_id">
					<text>
						{{child.cat_name}}
					</text>
				</navigator>
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
				default() {
					return []
				}
			}
		},
		mounted() {
		}
	}
</script>

<style lang="scss">
	.right-list {
		padding: 8px;
		background-color: #fff;
		.right-title {
			margin-bottom: 28px;
			font-size: 14px;
			text-align: center;
			font-weight: 600;
		}
		.item-child {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.item-name {
				font-size: 12px;
				padding: 0 20px;
				line-height: 60px;
			}
		}
	}
</style>