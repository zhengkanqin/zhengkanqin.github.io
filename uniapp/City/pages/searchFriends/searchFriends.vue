<template>
	<view class = "content-background 全屏">	
		<view class = "横向布局">
			<wd-icon @click="Back" class = "TitileFont" name="thin-arrow-left" size="30rpx" />
			<view class = "ICON-TitileFont">Find Friends</view>
		</view>
		<wd-search hide-cancel focus @search="search" v-model="searchContent"/>
		
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
							<wd-icon class ="右侧图标" name="page-last" size="30px" color="#9e9e9e"></wd-icon>
						</view>
					</wd-col>
				</wd-row>	
			</view>
		</view>

	</view>
</template> 

<script setup>
import {ref} from 'vue'
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
let token = userData.token
let searchContent = ref("")
let friendList = ref([])
const Back = ()=>{uni.navigateBack()}
const search = ()=>{
	uni.showLoading({
		title: '搜索中...'
	})
	//加载
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/user/search',
		method:'POST',
		header:{
			'token':token
		},
		data:{
			query:searchContent.value,
			pageNum:1,
			pageSize:20
		},
		success: (res) => {
			uni.hideLoading();
			console.log(res.data)
			if(res.data.code == "0")
			{
				friendList.value = res.data.data.list
			}
			else
			{
				uni.showToast({
					title: res.data.msg,
					icon: 'none',
					duration: 2000
				}) 
			}
		},
		fail: (err) => {
			uni.hideLoading();
			uni.showToast({
				title: err,
				icon: 'none',
				duration: 2000
			}) 
		}
	})
}
const GoUserShow = (id)=>{
	uni.navigateTo({
		url:'/pages/UserShow/UserShow?id=' + id,
		animationType:'fade-in'
	})
}
</script>

<style>
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

</style>
