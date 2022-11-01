<template>
	<view>
		<MySearch  @tap="gotoSearch"/>
		<view class="scroll-view-container">
			<!-- 左侧滚动区 -->
			<scroll-view scroll-y :style="{height: wh + 'px'}" class="scroll-left">
				<LeftCate @handleClick="handleClick" :list="categoriesList" />
			</scroll-view>
			<scroll-view scroll-y :style="{height: wh + 'px'}" class="scroll-right">
				<RightCate :list="categoriesList[index].children"></RightCate>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import MySearch from '../../components/public/MySearch.vue'
	import LeftCate from '@/components/cate/LeftCate.vue'
	import RightCate from '@/components/cate/RightCate.vue'
	export default {
		components: {
			MySearch,
			LeftCate,
			RightCate
		},
		data() {
			return {
				wh: 0, // 窗口的可用高度
				categoriesList : [],
				index: 0
			};
		},
		methods: {
			gotoSearch() {
				uni.navigateTo({
					url: '/subpkg/search/search'
				})
			},
			async getCategories() {
				let res = await uni.api.getCategories()
				if (res.meta.status == 200) {
					this.categoriesList = res.message
				}  else {
					return uni.$showMsg('分类数据加载失败')
				}
			},
			handleClick(index) {
				this.index = index
			}
		},
		onLoad() {
			this.getCategories()
			const sysInfo = uni.getSystemInfoSync() // 获取当前系统的信息
			this.wh = sysInfo.windowHeight - 50
		}
	}
</script>

<style lang="scss">
.scroll-view-container {
	display: flex;
	justify-content: space-between;
	.scroll-left {
		width: 30%;
	}
	.scroll-right {
		flex: 1;
	}
}
</style>
