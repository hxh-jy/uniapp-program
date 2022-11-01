import {http} from './http.js'
// wait uni.$http.get('/public/v1/home/swiperdata')
let api = {}
// 获取轮播图数据
api.getSwiperdata = function(config) {
	return http({url: '/public/v1/home/swiperdata',data: config})
}

// 获取分类导航的数据
api.getCatitems = function(config) {
	return http({url: '/public/v1/home/catitems',data: config})
}

// 获取首页列表数据
api.getFloorList = function(config) {
	return http({url: '/public/v1/home/floordata',data: config})
}
// 获取分类数据
api.getCategories = function(config) {
	return http({url: '/public/v1/categories',data: config})
}

// 获取搜索结果接口
api.getQsearch = function(config) {
	return http({url: '/public/v1/goods/qsearch',data: config})
}

export default api