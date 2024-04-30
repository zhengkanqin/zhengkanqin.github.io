<template>
<web-view  src="../../hybrid/html/neo4j-d3-graph-master/user.html" height="1000rpx" @load="loadmarker"> </web-view>
<cover-view class="TopMargin">
	<cover-image src="../../static/buttomSrc/return.png" class="return" @click="Back"></cover-image>
	<cover-view class="标题文本">我的关系图谱</cover-view>
</cover-view>
</template>

<script setup>

	const Back = ()=>{uni.navigateBack()}
import {ref,onMounted,getCurrentInstance} from 'vue'
	var wv; //计划创建的webview
	const {ctx} = getCurrentInstance() 
		setTimeout(() => {
			var currentWebview = ctx.$scope.$getAppWebview();
			 console.log(currentWebview.children()) ;
			 wv = currentWebview.children()[0]; 
			wv.setStyle({
				scalable:true
			})

			
			
			
			
			 }, 1000)

</script>

<style>
.TopMargin {position: fixed;z-index: 100;background-color: #F1F5F7;height: 180rpx;width: 100%;box-shadow: 0 3rpx 3rpx #dde1e2;display: flex;align-items: flex-end;}
.标题文本{padding-bottom: 5rpx;font-size: 34rpx;margin:20rpx;color: #282829;letter-spacing: 3rpx;margin-left:0;}
.return{width: 45rpx;height: 45rpx;margin:20rpx;margin-right: 0;}
</style>
