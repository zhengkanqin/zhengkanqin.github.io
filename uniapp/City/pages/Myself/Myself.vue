<template>
		<wd-notify>
			<view style="display: flex;flex-direction: column;">
			<view style="height: 80rpx;width: 100%;"></view>
			<view style="font-size: 26rpx;margin-bottom: 10rpx;letter-spacing: 1rpx;font-weight: bold;">您有新的消息</view>
			</view>
		</wd-notify>
	<view class="content-background index-background ">
		<view class = "主页背景">
			<view class = "顶部背景区">
				<image class="顶部背景" :src="backImg" mode="aspectFill"></image>
				<view class = "顶部控件盒" @longpress="Preview(userBack,'['+userBack+']')">
					<wd-icon class = "顶部控件" name="scan" color="#ffffff" size = "50rpx" @click="scan" />
					<wd-icon class = "顶部控件" name="edit" color="#ffffff" size = "50rpx" @click="GoChangeBackImg"/>	
				</view>
			</view>
			
		<view class = "空白区"></view>
		<!-- 分割线 ----------------------------------------------------- -->
		<view class = "信息区">
			<view class ="签名区背景"><text class ="小字体">id:{{userId}}</text></view>
			<view class = "签名区背景"><text> {{username}}</text></view>
			<wd-row class="wdClass" @click="GoUserShow(userId)">
				<wd-col class="左侧字" :span="12">我的收藏</wd-col>
				<wd-col class="右侧布局" :span="12">
					<wd-icon name="arrow-right" color="#707070" />
				</wd-col>
			</wd-row>
			<wd-row class="wdClass" @click="GoChangeInformation">
				<wd-col class="左侧字" :span="12">个人信息</wd-col>
				<wd-col class="右侧布局" :span="12">
					<wd-icon name="arrow-right" color="#707070" />
				</wd-col>
			</wd-row>
			<wd-row class="wdClass" @click="GoChangeCity">
				<wd-col class="左侧字" :span="12">我的城市</wd-col>
				<wd-col class="右侧布局" :span="12">
					<wd-icon name="arrow-right" color="#707070" />
				</wd-col>
			</wd-row>
			<wd-row class="wdClass" @click="GoManyInformation">
				<wd-col class="左侧字 横向布局" :span="12">
					消息通知
					<view v-show="IfShowNotice" style="border-radius: 50%;background-color: #e74c4c;width: 10rpx;height: 10rpx;margin-left: 5rpx;"></view>
					</wd-col>
				<wd-col class="右侧布局" :span="12">
					<wd-icon name="arrow-right" color="#707070" />
				</wd-col>
			</wd-row>
			<wd-row class="wdClass" @click="GoPrivacy">
				<wd-col class="左侧字" :span="12">隐私设置</wd-col>
				<wd-col class="右侧布局" :span="12">
					<wd-icon name="arrow-right" color="#707070" />
				</wd-col>
			</wd-row>
			<wd-button type="error" block class = "退出登录" size="large" @click="DeleteUserInformation">退出登录</wd-button>
		</view>
		<!-- 分割线 ----------------------------------------------------- -->
		<view class = "头像横区">
			<view class = "头像区">
				<image :src='userImage' class="头像" mode="aspectFill" @longpress="GoChangeUserImg"></image>
			</view>
		</view>
		</view>
	</view>
</template>

<script setup>
	import { useNotify } from '@/uni_modules/wot-design-uni'
	const { showNotify, closeNotify } = useNotify()
	import {onPullDownRefresh} from '@dcloudio/uni-app'
	import {ref} from 'vue'
	import { onMounted } from 'vue'
	let username = ref("")
	let userId = ref("")
	let userImage = ref("")
	let token = ref("")
	let backImg =ref("")
	let userBack =ref("")
	let IfShowNotice = ref(false)
	let UserNotice = ref("")
	onMounted(()=>{
	let userData = JSON.parse(uni.getStorageSync('UserInformation'))
	UserNotice.value = uni.getStorageSync('UserNotice')
	if(UserNotice.value != 0)
	{
		IfShowNotice.value = true
	}
	console.log(userData)
	username.value = userData.name
	userId.value = userData.id
	userBack.value = userData.userBack
	userImage.value = "http://116.62.176.59:8080/xqlgq/files/" + userData.userImg
	backImg.value = "http://116.62.176.59:8080/xqlgq/files/" + userData.userBack
	token.value = userData.token
	});
	
     onPullDownRefresh(()=>{
		 UserNotice.value = uni.getStorageSync('UserNotice')
		 console.log(UserNotice.value)
		 if(UserNotice.value != "" && UserNotice.value != "0"){IfShowNotice.value = true } else {
			 IfShowNotice.value = false
			 uni.removeTabBarBadge({ //隐藏数字标
			 	index: 3 //tabbar下标
			 })
			 }
		 let userData = JSON.parse(uni.getStorageSync('UserInformation'))
		 console.log(userData)
		 //重新获取网络请求
		 uni.request({
		 	url:'http://116.62.176.59:8080/xqlgq/user/info/' + userId.value,
		 	method:'GET',
		 	header:{
		 		'token': token.value
		 	},
		 	success: (res) => {
		 		console.log(res.data.data)
				let rt = res.data.data
				if(res.data.code =="0")
				{
					userData.name = rt.username
					userData.phone = rt.phoneNumber
					userData.email = rt.email
					userData.sex = rt.userSex
					userData.locationx = rt.locationX
					userData.locationy = rt.locationY
					userData.userImg = rt.userImage
					userData.userBack = rt.backImg
					userData.city = rt.city
					let STRING_USERDATA = JSON.stringify(userData)
					console.log(STRING_USERDATA)
					uni.setStorageSync('UserInformation',STRING_USERDATA)
					//到此为止已经更新了本地存储，但是还要更新一下信息。
					username.value = userData.name
					userImage.value = "http://116.62.176.59:8080/xqlgq/files/" + userData.userImg
					backImg.value = "http://116.62.176.59:8080/xqlgq/files/" + userData.userBack
				}
		 	},
		 	fail: (err) => {
		 		console.log(err)
		 	}
		 })
		 //
		 uni.stopPullDownRefresh()
	 })
	
const DeleteUserInformation = ()=>{
	uni.showModal({
			title: '提示',content: '确认要退出登录吗？',cancelText: "取消",confirmText: "退出",
			confirmColor:'red',cancelColor:'#000000',
			success: function(res) {
			if (res.confirm) {
				// 执行确认后的操作
				uni.setStorageSync('UserInformation',"")
				uni.setStorageSync('UserLoginStatus',"false")
				plus.runtime.quit()
			} 
			else {
				// 执行取消后的操作
				
			}
		}
	})
}

const GoPrivacy = ()=>{uni.navigateTo({url:'/pages/privacy/privacy'})}
const GoChangeInformation = ()=>{uni.navigateTo({url:'/pages/ChangeInformation/ChangeInformation'})}
const GoChangeCity = ()=>{uni.navigateTo({url:'/pages/ChangeInformation/ChangeCity/ChangeCity'})}
const GoChangeUserImg = ()=>{uni.navigateTo({url:'/pages/ChangeInformation/ChangeUserImg'})}
const GoChangeBackImg = ()=>{uni.navigateTo({url:'/pages/ChangeInformation/ChangeBackImg/ChangeBackImg'})}
const GoUserShow = (id)=>{uni.navigateTo({url:'/pages/UserShow/UserShow?id=' + id,animationType:'fade-in'})}
const GoManyInformation =()=>{uni.navigateTo({url:'/pages/Notice/Notice'})}
const Preview=(current,list)=>{if(!(list instanceof Array)){list = stringToArray(list)}current = "http://116.62.176.59:8080/xqlgq/files/" +current;list = list.map(item => `http://116.62.176.59:8080/xqlgq/files/${item}`);uni.previewImage({'current':current,'urls':list,fail: (err) => {tip(err)}})}
function stringToArray(str) {try {return JSON.parse(str);} catch (error) {return [];}}
const scan=()=>{uni.scanCode({success: (res) => {uni.navigateTo({url:res.result})}})}




</script>

<style>
.index-background{
	width: 100%;
	height: 100%;
}

.主页背景{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.头像横区{
	width: 100%;
	height: 150rpx;
	position: absolute;
	top:190rpx;
	display: flex;
	justify-content: center;
	align-items: center
}
.头像区{
	width: 160rpx;
	height: 150rpx;
	display: flex;
	justify-content: center;
	align-items: center
}
.头像{
	width: 170rpx;
	height: 150rpx;
	box-shadow: 0 0 10rpx #707070;
	border-radius: 45%;
	border: 4px solid #F1F5F7;
	background-color: #e7e7e7;
}
.空白区{
	width: 100%;
	height: 275rpx;
}
.信息区{
	width: 100%;
	height:85vh ;
	background-color: #F1F5F7;
	border-radius: 85rpx 85rpx 0 0;
	box-shadow: 0 -4rpx 10rpx #a7a7a7;
	position: absolute;
	padding-top: 85rpx;
}
.顶部背景区{
	width: 100%;
	height: 400rpx;
	position: absolute;
}
.顶部背景{
	width: 100%;
	height: 400rpx;
	position: absolute;
}
.签名区背景{
	width: 100vw;
	text-align: center;
	font-size: 35rpx;
	margin-bottom: 20rpx;
	margin-top: 10rpx;
	font-family: 'Courier New', Courier, monospace;
}
.小字体{
	font-size: 25rpx;
	color: #fdfdfd;
	background-color: #898b8c;
	
	border-radius: 5rpx;
	padding: 5rpx;
}
.右侧布局{
	display: flex;
	flex-direction: row-reverse;
	padding:20rpx;
}
.左侧字{
	padding:20rpx;
	padding-left:10rpx
}
.wdClass{
	background:#F1F5F7;
	margin-bottom: 5rpx;
	box-shadow: 0 1rpx 1rpx #d4dce0;
}
.退出登录{
	margin: 50rpx;
	padding: 20px;
	margin-top: 200rpx;
}
.左侧字{
	color: #575757;
	font-size: 25rpx;
}
.顶部控件盒{
	width: 100%;
	height: 240rpx;

	position: absolute;
	display: flex;
	justify-content: end;
	align-items: center;
	flex-direction: row-reverse;
}
.顶部控件{
	margin-right: 30rpx;
}
</style>

