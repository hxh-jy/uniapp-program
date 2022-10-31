let baseUrl = 'https://www.uinav.com/api'
export const http =  (options) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: baseUrl + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: res => {
				resolve(res.data)
			},
			fail: err => {
				reject(err)
			}
		})
	})
}