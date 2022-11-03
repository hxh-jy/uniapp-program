	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters('m_cart',['total'])
		},
		watch: {
			'total': ['setBadge']
		},
		methods: {
			setBadge() {
				uni.setTabBarBadge({
					index: 2,
					text: this.total + '' //text的值必须是字符串
				})
			}
		},
		onLoad() {
			this.setBadge()
		}
	}