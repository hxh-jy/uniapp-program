<template>
	<view class="search-container">
		<view class="search-box">
			<uni-search-bar @input="handleInp" placeholder="请输入搜索内容" radius="18"  cancelButton="none"></uni-search-bar>
		</view>
		<view class="search-list" v-if="searchList && searchList.length > 0">
			<!-- 渲染搜索列表 -->
			<scroll-view scroll-y :style="{height: wh + 'px'}">
				<view @click="gotoDetail(item.goods_id)" class="search-item" v-for="item in searchList" :key="item.goods_id">
					{{item.goods_name}}
				</view>
			</scroll-view>
		</view>
		
		<view class="search-history" v-else>
			<view class="history-top clearfix">
				<text>搜索历史</text>
				<uni-icons @click="handleDel" type="trash-filled"></uni-icons>
			</view>
			<view class="tags">
				<uni-tag @click="gotoGoodslist(item)" v-for="item in historys" :key="item" :text="item"></uni-tag>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wh: '',
				timer: null,
				searchVal: '',
				searchList: [],
				historys: []
			}
		},
		methods: {
			gotoDetail(id) {
				uni.navigateTo({
					url: '/subpkg/goods_detail/goods_detail?goods_id=' + id
				})
			},
			gotoGoodslist(kw) {
				uni.navigateTo({
					url: '/subpkg/goods_list/goods_list?query=' + kw
				})
			},
			handleInp(e) {
				// 实现搜索防抖
				if (this.timer) clearTimeout(this.timer);
				this.searchVal = e
				this.timer = setTimeout(() => {
					// 获取搜索结果
					this.getQsearch(this.searchVal)
					// 获取搜索历史
				},500)
			},
			handleDel() {
				// 清空缓存
				this.historys = []
				uni.setStorageSync('historys','[]')
			},
			async getQsearch(searchVla) {
				// 搜索结果的列表
				if (!searchVla) {
					this.searchList = []
				} else {
					let res = await uni.api.getQsearch({query: searchVla})
					if (res && res.meta.status == 200) {
						this.searchList = res.message
						this.historys.unshift(searchVla)
						uni.setStorageSync('historys',JSON.stringify(this.historys))
					}
				}
			}
		},
		onLoad() {
			let systemInfo = uni.getSystemInfoSync()
			this.wh = systemInfo.windowHeight - 50
			this.historys = JSON.parse(uni.getStorageSync('historys') || '[]')
			console.log('获取历史数据',this.historys)
		}
	}
</script>

<style lang="scss">
	.search-container {
		.search-box {
			height: 50px;
			background-color: #C00000;
			uni-search-bar {
				height: 36px;
				line-height: 36px;
				width: 88%;
				margin: 0 auto;
				background-color: #fff;
				text-align: center;
				font-size: 13px;
				border-radius: 32px;
			}
		}
		.search-item {
			padding: 0 12px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			height: 38px;
			line-height: 38px;
			font-size: 12px;
			border-bottom: 1px solid #eee;
		}
		.search-history {
			.history-top {
				padding: 12px;
				font-size: 12px;
				border-bottom: 1px solid #ccc;
				uni-icons {
					float: right;
				}
			}
			.tags {
				display: flex;
				flex-wrap: wrap;
				width: 100%;
				padding: 0 12px;
				uni-tag {
					display: inline-block;
					margin-top: 8px;
					margin-right: 8px;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
		}
	}

</style>
