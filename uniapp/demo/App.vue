<script>	import Vue from 'vue';
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					}
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
					let unitRatio = 750 / uni.getSystemInfoSync().windowWidth;
					Vue.prototype.StatusBarRpx = Vue.prototype.StatusBar * unitRatio;
					Vue.prototype.CustomBarRpx = Vue.prototype.CustomBar * unitRatio;
					Vue.prototype.unitRatio = unitRatio;
					Vue.mixin({
						data() {
							return {
								StatusBar: Vue.prototype.StatusBar, //状态栏高度(px)
								CustomBar: Vue.prototype.CustomBar, //整个标题栏高度(px)
								StatusBarRpx: Vue.prototype.StatusBarRpx, //状态栏高度(rpx)
								CustomBarRpx: Vue.prototype.CustomBarRpx //整个标题栏高度(rpx)
							};
						}
					});
				}
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
