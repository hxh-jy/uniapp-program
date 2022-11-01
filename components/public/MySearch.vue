<template>
	<view class="my-search">
		<view class="search-box">
			<uni-icons size="17" type="search"></uni-icons>
			<text>搜索</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.my-search {
		height: 50px;
		background-color: #C00000;
		.search-box {
			height: 36px;
			line-height: 36px;
			width: 88%;
			margin: 0 auto;
			background-color: #fff;
			text-align: center;
			font-size: 13px;
			border-radius: 32px;
			uni-icons {
				vertical-align: middle;
			}
		}
	}
</style>