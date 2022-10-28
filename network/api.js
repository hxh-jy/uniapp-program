import {http} from './http.js'
// wait uni.$http.get('/public/v1/home/swiperdata')
let api = {}
api.getSwiperdata = function(config) {
	return http({url: '/public/v1/home/swiperdata',data: config})
}
export default api