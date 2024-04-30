<template>
	
		<view class = "横向布局">
			<wd-icon @click="back" class = "TitileFont" name="thin-arrow-left" size="28rpx" />
			<view class = "ICON-TitileFont" style="font-size: 35rpx;color: #444444;">动态详情</view>
		</view>
		
		
		<scroll-view scroll-y=true class="content-background 全屏">
		

		<view class="列表背景">
		
		<view v-for="item in ManyEvents" style="width: 100%;">
			<view class="列表布局" @click="GoEvent(item.gid)" style="padding-bottom: 20rpx;">
				<view class="横向布局">
					<image class="头像" :src="'http://116.62.176.59:8080/xqlgq/files/' + item.publisher.userImage"></image>
					<view class="头名区布局">
						<view style="font-size: 28rpx;color: #444444;">{{item.publisher.username}}</view>
						<view style="font-size: 20rpx;margin-top: 3rpx;font-family: 'Courier New', Courier, monospace;">{{item.timestamp[0]}}-{{item.timestamp[1]}}-{{item.timestamp[2]}}  {{item.timestamp[3]}}:{{item.timestamp[4]}}:{{item.timestamp[5]}}</view>
					</view>
				</view>
				<view style="width: 600rpx;margin-left: 120rpx;word-wrap: break-word;font-weight: bold;color: #444444;">{{item.title}}</view>
				<view style="width: 600rpx;margin-left: 120rpx;word-wrap: break-word;color: #444444;font-size: 24rpx;margin-top: 10rpx;line-height: 38rpx;letter-spacing: 1rpx;">{{item.content.slice(0,50)}}...</view>
				<scroll-view style="width: 600rpx;margin-left: 110rpx;" v-if="item.images != []" scroll-x=true>
					<view style="display: flex;flex-direction: row;">
					<view v-for="(imagea,index) in JSON.parse(item.images)">
					<image mode="aspectFill" style="margin-top:20rpx;width: 180rpx;height: 180rpx;background-color: #f3f3f3;border-radius: 20rpx;margin-bottom: 20rpx;margin-right: 5rpx;" :src="'http://116.62.176.59:8080/xqlgq/files/' + imagea"></image>
					</view>
					</view>
				</scroll-view>
			</view> 
			</view>
	
			
			
		</view>
		
		
		
	
	</scroll-view>
</template> 

<script setup>
import {onLoad} from '@dcloudio/uni-app'
import {ref} from 'vue'
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
let ManyEvents = ref([])


onLoad((data)=>{
	let list = data.list.split(',')
	
	
	
	for(let i=0;i<list.length;i++)
	{
		
		uni.request({
			url:'http://116.62.176.59:8080/xqlgq/event/info/' + list[i],
			method:'GET',
			header:{
				'token':userData.token
			},
			success: (res) => { 
				if(res.data.code == 0)
				{
					console.log(res.data.data)
					ManyEvents.value.push(res.data.data)
				}
				else
				{
					tip(res.data.msg)
				}
			},
			fail: (err) => {
				tip(err.errMsg)
			}
		})
		
		
}
	

	
	
	
	
	
	
})







const GoEvent = (id)=>{
	uni.navigateTo({
		url:'/pages/titleContent/titleContent?id='+id
	})
}


const tip =(words)=>{uni.showToast({title: words,icon: 'none',duration: 2000})}	
const back =()=>{uni.navigateBack()}
</script>

<style>
.列表背景{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.列表布局{
	width: 98%;
	background-color: #f8fcfe;
	border-bottom: 1.5rpx solid #b6b6b6;
}
.头像{
	height: 70rpx;
	width: 70rpx;
	border-radius: 50%;
	background-color: aliceblue;
	margin: 20rpx;
}
.头名区布局{
	margin-left: 5rpx;
}
</style>
