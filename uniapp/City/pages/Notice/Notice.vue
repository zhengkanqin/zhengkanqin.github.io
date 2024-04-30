<template>
	<view class = "content-background 全屏">	
		<view class = "横向布局">
			<wd-icon @click="Back" class = "TitileFont" name="thin-arrow-left" size="30rpx" />
			<view class = "ICON-TitileFont">Notice({{num}})</view>
			<view style="margin-top: 50rpx;right:30rpx;padding: 7rpx;padding-left: 15rpx;padding-right: 15rpx;background-color: #f86969;border-radius: 10rpx;color: #ffffff;font-size: 28rpx;" @click="DeleteAll">删除全部</view>
		</view>
		
		<view class="列表布局">
			<view v-for="(item,index) in list" style="width: 100%;display: flex;justify-content: center;align-items: center;">
				
				
				
			<view class="列表背景">
				<image class="删除按钮" src="../../static/buttomSrc/delete.png" @click="Delete(item.id,item.click,index)"></image>
				<view class="信息布局" @click="DoNotice(item.id,item.click,index)">
					<view style="font-size: 30rpx;color: #404040;letter-spacing: 1rpx;word-break: break-all;float:left;margin-bottom: 10rpx;"><span style="font-weight: 500;margin-right: 4rpx;font-size: 35rpx;color: #647e77;">{{item.title.split(" ")[0]}}</span>{{item.title.split(" ")[1]}}</view>
					<view style="background-color: #c9d7d7;border-radius: 10rpx;padding: 5rpx;font-size: 28rpx;color: #404040;padding-left: 15rpx;" v-if='IfShowContent(item.content,item.title.split(" ")[2])'>"{{item.content}}{{item.title.split(" ")[2]}}"</view>
					<view style="font-family: 'Courier New', Courier, monospace;font-size: 24rpx;margin-top: 10rpx;">{{item.time[0]}}-{{item.time[1]}}-{{item.time[2]}}  {{item.time[3]}}:{{item.time[4]}}:{{item.time[5]}}</view>
				</view>
			</view>
			
			
			
		</view>
		<wd-status-tip v-if="! IfHaveNotice" image="content" tip="暂无内容" :image-size="{ height: 200,width: 300}" style="margin-top: 200rpx;" />
			</view>
			
			
			
			
			
			
		
	</view>
</template>

<script setup>
import{ref} from 'vue'
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
let num = ref(uni.getStorageSync('UserNotice'))
let list =ref([])
let IfHaveNotice = ref(true) 
uni.request({
	url:"http://116.62.176.59:8080/xqlgq/notice/list",
	method:'GET',
	header:{
		token:userData.token
	},
	success: (res) => {
		if(res.data.code == 0)
		{
			console.log(res.data.data)
			list.value = res.data.data
			if(list.value.length >= 1)
			{
				IfHaveNotice.value = true
			}
			else
			{
				IfHaveNotice.value = false
			}
		}else{
			tip(res.data.msg)
			IfHaveNotice.value = false
		}
	},
	fail: (err) => {
		tip(err.errMsg)
		IfHaveNotice.value = false
	}
})


const DoNotice=(id,Url,index)=>{
	uni.request({
		url:"http://116.62.176.59:8080/xqlgq/notice/" + id,
		method:"DELETE",
		header:{
			token:userData.token
		},
		success: (res) => {
			if(res.data.code == 0)
			{
				if(num.value != 1){
					num--
					uni.setTabBarBadge({ //显示数字
						index: 3, //tabbar下标
						text:num.value
					})
					}else{
						num.value=""
						IfHaveNotice.value = false
						}
						
				uni.setStorageSync('UserNotice',num.value)
				list.value.splice(index,1)
				uni.navigateTo({
					url:Url
				})
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

const Delete=(id,Url,index)=>{
	uni.request({
		url:"http://116.62.176.59:8080/xqlgq/notice/" + id,
		method:"DELETE",
		header:{
			token:userData.token
		},
		success: (res) => {
			if(res.data.code == 0)
			{
				if(num.value != 1){
					num--
					uni.setTabBarBadge({ //显示数字
						index: 3, //tabbar下标
						text:num.value
					})
					}else{
						num.value=""
						IfHaveNotice.value = false
						}
						
				uni.setStorageSync('UserNotice',num.value)
				list.value.splice(index,1)
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

const DeleteAll=()=>{
	uni.request({
		url:"http://116.62.176.59:8080/xqlgq/notice/0",
		method:"DELETE",
		header:{
			token:userData.token
		},
		success: (res) => {
			if(res.data.code == 0)
			{
				num.value="0"
				uni.setStorageSync('UserNotice',"")
				list.value = []
				IfHaveNotice.value = false
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


const Back = ()=>{uni.navigateBack()}
const IfShowContent=(a,b)=>{
	if(a==="" && b===undefined)
	{
		return false
	}
	else
	{
		return true
	}
}
const GoEvent = (id)=>{uni.navigateTo({url:'/pages/titleContent/titleContent?id='+id})}
const GoUserShow = (id)=>{uni.navigateTo({url:'/pages/UserShow/UserShow?id=' + id,animationType:'fade-in'})}
const tip =(words)=>{uni.showToast({title: words,icon: 'none',duration: 2000})}

uni.onSocketMessage(function (res) {
	console.log("////////////////////////////////////////////")
	num = ref(uni.getStorageSync('UserNotice'))
	uni.request({
		url:"http://116.62.176.59:8080/xqlgq/notice/list",
		method:'GET',
		header:{
			token:userData.token
		},
		success: (res) => {
			if(res.data.code == 0)
			{
				console.log(res.data.data)
				list.value = res.data.data
				if(list.value.length >= 1)
				{
					IfHaveNotice.value = true
				}
				else
				{
					IfHaveNotice.value = false
				}
			}else{
				tip(res.data.msg)
			}
		},
		fail: (err) => {
			tip(err.errMsg)
		}
	})
	})


</script>

<style>
.列表布局{
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

}
.列表背景{
	background-color: #e7efef;
	width: 97%;
	box-shadow: 2rpx 2rpx 2rpx #dddddd;
	margin-bottom: 20rpx;
	position: relative;

}
.删除按钮{
	position: absolute;
	right: 0;
	top:0;
	width: 50rpx;
	height: 50rpx;
	margin:20rpx;
	margin-top: 30rpx;
}
.信息布局{
	margin: 20rpx;
	margin-top: 30rpx;
	margin-bottom: 30rpx;
	width: 550rpx;
	display: flex;
	flex-direction: column;
}
</style>
