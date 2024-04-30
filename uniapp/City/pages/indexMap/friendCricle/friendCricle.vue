<template>
<web-view src="../../../hybrid/html/index/index(test).html" height="1000rpx" @load="loadmarker"> </web-view>
<cover-view class="TopMargin">
	<cover-image src="../../static/buttomSrc/return.png" class="return" @click="Back"></cover-image>
	<cover-view class="标题文本">朋友圈</cover-view>
</cover-view>
</template>

<script setup>
	import {ref,onMounted,getCurrentInstance} from 'vue'
	let userData = JSON.parse(uni.getStorageSync('UserInformation'))
	let Friend = ref("")
	uni.request({url:'http://116.62.176.59:8080/xqlgq/user/follow/event',method:'GET',header:{'token':userData.token},
		success: (res) => 
		{
			if(res.data.code == 0){
			console.log(res.data.data)
			uni.setStorageSync('dataFriend',res.data.data)
			}
			},
			fail: (err) => {
				console.log(err)
			} 
			})
	
	var wv; //计划创建的webview
	let abc = JSON.stringify(uni.getStorageSync('dataFriend'))
	console.log(abc)
	const {ctx} = getCurrentInstance() 
	const webjs = (js)=>{
		setTimeout(() => {
			var currentWebview = ctx.$scope.$getAppWebview();
			 console.log(currentWebview.children()) ;
			 wv = currentWebview.children()[0]; 
			 wv.evalJS("dataMap.property =" +js)    
			
			 ;}, 2000)}
	const Back = ()=>{uni.navigateBack()}
    onMounted(()=>{
		webjs(abc)
	})

</script>

<style>
.TopMargin {position: fixed;z-index: 100;background-color: #F1F5F7;height: 180rpx;width: 100%;box-shadow: 0 3rpx 3rpx #dde1e2;display: flex;align-items: flex-end;}
.标题文本{padding-bottom: 5rpx;font-size: 34rpx;margin:20rpx;color: #282829;letter-spacing: 3rpx;margin-left:0;}
.return{width: 45rpx;height: 45rpx;margin:20rpx;margin-right: 0;}
</style>
