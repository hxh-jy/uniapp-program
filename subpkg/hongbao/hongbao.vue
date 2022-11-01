<template>
	<view id="redEnvelopeRain">
		<view class="box" ref="box">
			
		</view>
	</view>
</template>

<script>
export default {
	name: "redEnvelopeRain",
	data() {
		return {
			setInt: ""
		};
	},
	destroyed() {
		// 退出页面销毁
		// clearInterval(this.setInt);
	},
	mounted() {
		// this.$nextTick(() => {
		// 	// 第一个计时器控制红包生成速度
		// 	this.setInt = setInterval(() => {
		// 		let img = document.createElement("image");
		// 		// 随机数范围2-4，红包下落所需时间
		// 		let timeNum = this.random(2, 4);
		// 		img.style.transition = `all ${timeNum}s linear`;
		// 		img.className = "red";
		// 		// 随便一张图，我从百度拿的，可替换或者将img标签更换成自定义样式得div
		// 		img.src = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1349507038,1321784177&fm=26&gp=0.jpg";
		// 		this.$refs.box.appendChild(img);
		// 		img.style.top = -img.offsetHeight + "px";
		// 		img.style.left = this.random(0, this.$refs.box.offsetWidth - img.offsetWidth) + "px";
		// 		// 生成红包100毫秒后进行移动
		// 		setTimeout(() => {
		// 			img.style.top = this.$refs.box.offsetHeight + "px";
		// 			// 随机数范围2-4，红包下落完成后，若没有点击红包则销毁dom
		// 			let timeOut = setTimeout(() => {
		// 				this.$refs.box.removeChild(img);
		// 			}, timeNum * 1000);
		// 			// 点击红包操作
		// 			img.onclick = () => {
		// 				// 点击之后终止销毁dom操作，直接销毁
		// 				clearTimeout(timeOut);
		// 				this.$refs.box.removeChild(img);
		// 				console.log("中了个锤子");
		// 			};
		// 		}, 100);
		// 	}, 100);
		// });
	},
	methods: {
		// random(min,max) {
		// 	return Math.floor(min + Math.random() * (max + 1 - min));
		// }
	}
};
</script>

<style lang="scss">
#redEnvelopeRain {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
}
.box {
	width: 100%;
	height: 100%;
	background: orange;
	overflow: hidden;
}
.red {
	display: block;
	width: 50px;
	height: 80px;
	position: absolute;
}
</style>
