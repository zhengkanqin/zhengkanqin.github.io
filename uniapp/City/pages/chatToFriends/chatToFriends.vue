<template>
	
	<wd-notify>
		<view style="display: flex;flex-direction: column;">
		<view style="height: 80rpx;width: 100%;"></view>
		<view style="font-size: 26rpx;margin-bottom: 10rpx;letter-spacing: 1rpx;font-weight: bold;">您有新的消息</view>
		</view>
	</wd-notify>
	
	<view class="content-background index-background">
		<view class = "个人信息布局">
			<wd-row>
				<wd-col span="16">
					<wd-icon class = "右上角图标" name="bulletpoint" size="40px" color="#787878"></wd-icon>
					<view class ="用户名">{{username}}</view>
				</wd-col>
				<wd-col span="8" class = "右间距">
					<image class="用户头像" :src ='userimage' mode="aspectFill"></image>
				</wd-col>
			</wd-row>
		</view>
		<wd-row class = "工具栏布局">
			<wd-col :span='12' class = "工具卡片布局">
				<view class="工具卡片 鲜绿 " @click="GoSearchFriends">
					<view class = "工具图片布局">
						<image src="../../static/buttomSrc/SearchFriend.png" class = "工具小图片"></image>
						<image src="../../static/buttomSrc/SearchFriend.png" class = "工具大图片"></image>
					</view>
					<view class = "工具文字布局"><text class = "工具文字">查找朋友</text></view>
				</view>
			</wd-col>
			<wd-col :span='12' class= "工具卡片布局">
				<view class="工具卡片 浅紫 " @click="GoMyUserShow"> 
					<view class = "工具图片布局">
						<image src="../../static/buttomSrc/MyCard.png" class = "工具小图片"></image>
						<image src="../../static/buttomSrc/MyCard.png" class = "工具大图片"></image>
					</view>
					<view class = "工具文字布局"><text class = "工具文字">我的名片</text></view>
				</view>
			</wd-col>
		</wd-row>
		
		<view class = "分割栏布局">我的关注</view>
		<view  class = "列表大背景">
		<view v-for="friend in friendList">
			<wd-row class = "列表背景" @click="GoUserShow(friend.id)">
				<wd-col span="20">
					<view class = "横向布局">
						<image :src="'http://116.62.176.59:8080/xqlgq/files/' + friend.userImage" mode="aspectFill" class = "好友头像"></image>
						<view class = "朋友id"> id : {{friend.id}}</view>
						<view class = "朋友姓名">{{friend.username}}</view>
					</view>
				</wd-col>
				<wd-col span="4">
					<view class = "右侧布局 进入图标布局">
						<wd-icon class ="右侧图标" name="page-last" size="28rpx" color="#c1c1c1"></wd-icon>
					</view>
				</wd-col>
			</wd-row>	
		</view>
	</view>
	<view class = "下间距"></view>
	</view>
</template>

<script setup>
	import { useNotify } from '@/uni_modules/wot-design-uni'
	const { showNotify, closeNotify } = useNotify()
import {ref} from 'vue'
import {onPullDownRefresh} from '@dcloudio/uni-app'
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
let friendList = ref("")
let username = ref("")
username.value = userData.name
let userimage = ref("../../static/buttomSrc/zkq.jpg")
userimage.value = "http://116.62.176.59:8080/xqlgq/files/" + userData.userImg

uni.request({
	url:'http://116.62.176.59:8080/xqlgq/user/follow/idol',
	header:{
		'token':userData.token
	},
	success: (res) => {
		friendList.value = res.data.data
		console.log(friendList.value)
	},
	fail: (err) => {
		console.log(err) 
	}
})

onPullDownRefresh(() =>{
	console.log("1")
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/user/follow/idol',
		header:{
			'token':userData.token
		},
		success: (res) => {
			friendList.value = res.data.data
			console.log(friendList.value)
		},
		fail: (err) => {
			console.log(err) 
		}
	})
	uni.stopPullDownRefresh()
})




const GoUserShow = (id)=>{
	uni.navigateTo({
		url:'/pages/UserShow/UserShow?id=' + id,
		animationType:'fade-in'
	})
}
const GoMyUserShow = ()=>{
	uni.navigateTo({
		url:'/pages/UserShow/UserShow?id=' + userData.id,
		animationType:'fade-in'
	})
}
const GoSearchFriends =()=>{
	uni.navigateTo({
		url:'/pages/searchFriends/searchFriends',
		animationType:'slide-in-top'
	})
}
</script>

<style>

.index-background{
		width: 100%;
		height: 100%;
	}
.好友头像{
	width: 70rpx;
	height:70rpx;
	border-radius: 50%;
	margin: 10rpx;
}
.列表背景{
	margin-bottom: 30rpx;
	margin:20rpx;
	border-radius: 10rpx;
	background-color: #F1F5F7;
	border: 4rpx solid #f6f6f6;
}
.进入图标布局{
	width: 100%;
	height: 90rpx;
	display: flex;
	justify-content: end;
	align-items: center;
}
.朋友姓名{
	font-size: 28rpx;
	color: #5a5a5a;
	margin:20rpx;
	font-family: 'Courier New', Courier, monospace;
	font-family: 'rj';
}
.右侧图标{
	margin:20rpx;
}
.朋友id{
	color:white;
	background-color: #559295;
	border-radius: 10rpx;
	margin-left: 15rpx;
	font-size: 20rpx;
	padding: 4rpx;
	padding-left:8rpx;
	padding-right: 8rpx;
}
.个人信息布局{
	width: 100%;
	height: 300rpx;
}
.分割栏布局{
	width: 100%;
	height: 80rpx;
	display: flex;
	justify-content: start;
	align-items: center;
	padding-left: 40rpx;
	font-size: 35rpx;
	margin-top: 20rpx;
	color: #5a5a5a;
}
.右上角图标{
	margin: 20rpx;
	margin-top:120rpx;
	margin-left: 40rpx;
}
.用户头像{
	margin-left:35rpx;
	margin-top:100rpx;
	width: 150rpx;
	height: 150rpx;
	border-radius: 50%;
	border: 8rpx solid #ffffff;
	box-shadow: 3rpx 3rpx 3rpx #b2b2b2;
	background-color: #d3d3d3;
}
.用户名{
	margin: 20rpx;
	margin-left: 40rpx;
	font-size: 52rpx;
	color: #393939;
	letter-spacing:3.5rpx;
	font-family: rj;
}
.工具卡片布局{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10rpx;
}
.工具卡片{
	width: 90%;
	height: 200rpx;
	background-color: #559295;
	border-radius: 20rpx;
	box-shadow: 8rpx 8rpx 8rpx #e3e3e3;
}
.鲜绿{
	background-color: #51bbab;
	margin-left: 20rpx;
}
.浅紫{
	background-color: #9686d3;
	margin-right: 20rpx;
}
.工具图片布局{
	display: flex;
	flex-direction: row;
	position: absolute;
}
.工具小图片{
	width: 70rpx;
	height: 70rpx;
	margin:20rpx;
}
.工具大图片{
	width: 150rpx;
	height: 150rpx;
	opacity: 0.2;
	margin-left: 40rpx;
}
.工具文字布局{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column-reverse;
}
.工具文字{
	padding: 25rpx;
	color: #ffffff;
	font-weight: bold;
	opacity: 0.7;
}
.列表大背景{
	background-color: #ffffff;
	padding: 10rpx;
	margin:20rpx;
	border-radius: 30rpx;
	box-shadow: 3rpx 3rpx 3rpx #c9c9c9;
}
.下间距{
	width: 100%;
	height: 80rpx;
}
</style>
