<template>
	<phone-status></phone-status>
	<view class = "contentBox content-background">
		<view class = "RegisterTitle">Login</view>
		<wd-input class="inputClass" v-model="Account" :maxlength="10" show-word-limit placeholder="请输入用户名(必填)"/>
		<wd-input class="inputClass" v-model="Password" show-password placeholder="请输入密码(必填)" />
		<wd-button class="注册按钮" type="success" size="large" @click="LoginIn">登录</wd-button>
		<view class="返回注册" @click="Register">注册账号</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	let LoginStatus = ref("")
	let LoginInformation = ref("")
	let Account = ref("")
	let Password = ref("")
	let Information = ref("")
	LoginStatus = uni.getStorageSync('UserLoginStatus');
	LoginInformation = JSON.parse(uni.getStorageSync('UserInformation'));//这里一定要把string转成JSON，后面也要把JSON转成string
	//下面是登录事件
	const LoginIn = ()=>{
		uni.showLoading({
			title: '登录中...'
		})
		uni.request({
			url: 'http://116.62.176.59:8080/xqlgq/user/login',
			method: 'POST',
			timeout: 6000,
			data: {
				username: Account.value,
				password: Password.value
			},
			success:  (res)=> {
				//成功事件
				if(res.data.code == "0")
				{
					//登录成功
					Information.value = res.data.data
					//开始存储JSOn数据
					LoginInformation.id = Information.value.id
					LoginInformation.name = Information.value.username
					LoginInformation.token = Information.value.token
					LoginInformation.phone = Information.value.phoneNumber
					LoginInformation.email = Information.value.email
					LoginInformation.image = Information.value.userImage
					LoginInformation.sex = Information.value.userSex
					LoginInformation.brithday = Information.value.brithday
					LoginInformation.locationx = Information.value.locationX
					LoginInformation.locationy = Information.value.locationY
					LoginInformation.userImg = Information.value.userImage
					LoginInformation.userBack = Information.value.backImg
					LoginInformation.city = Information.value.city
					LoginInformation.sign = Information.value.sign
					let load = JSON.stringify(LoginInformation)
					uni.hideLoading();
					uni.setStorageSync('UserSearch',"[]")
					uni.setStorageSync('UserInformation',load)
					uni.setStorageSync('UserLoginStatus',"true")
					uni.setStorageSync('UserNotice',"")
					uni.navigateTo({
						url:'/pages/Login/Login',
					})
				}
				else{
					uni.hideLoading();
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000
					}) 
				}
			
				
				
			},
			fail:  (err)=> {
				//失败事件
				uni.hideLoading();
				console.log(err)
				uni.showToast({
					title: err.errMsg,
					icon: 'none',
					duration: 2000
				}) 
				Information.value = err
				
			}
		})
	}
	//下面是跳转到注册事件
	const Register= ()=>{
		uni.navigateTo({
			url:'/pages/Register/Register'
		})
	}
	//以下是游客登录，后面删了
	const Index= ()=>{
		uni.switchTab({
			url:'/pages/index/index'
		})
	}
</script>

<style lang = "scss">
.log{
	background: #909090;
	color:white;
	
}
.contentBox{
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column;
}
.inputArea {
	width: 70%;
	height: 50px;
	background-color: #ffffff;
	margin-bottom: 10px;
	margin-top: 10px;
	padding:10px
}
.全屏{
	width:100%;
	height: 100%;
}
.RegisterTitle{
	font-size: 100rpx;
	margin-top: 200rpx;
	margin-bottom: 100rpx;
	font-family: 'Courier New', Courier, monospace;
	width: 100%;
	text-align: center;
}
.inputClass{
	padding: 20rpx;
	padding-left: 20rpx;
	padding-right: 20rpx;
	margin-left: 20rpx;
	margin-right: 20rpx;
	margin-bottom: 20rpx;
}
.wdClass{
	padding-right: 20rpx;
	padding-left: 30rpx;
	margin-right: 10rpx;
}
.灰色字{
	color: #5b5b5b;
	font-size: 23rpx;
	padding-top: 10px;
	padding-bottom: 10px;
	font-family: 'Courier New', Courier, monospace;
}
.底部文字按钮{
	color: #5b5b5b;
	font-size: 23rpx;
	padding-bottom: 10px;
}
.右侧布局{
	display: flex;
	flex-direction: row-reverse;
}
.时间框{
	margin:20rpx;
}
.注册按钮{
	margin: 30rpx;

}
.底部盒子{
	background-color: aqua;
	width: 100%;
}
.返回注册{
	text-align: center;
	color: #13ab73;
	font-size: 20rpx;

}
</style>