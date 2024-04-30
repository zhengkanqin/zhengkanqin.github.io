<template>
	<view class = "log">{{LoginStatus}}{{JSON.stringify(LoginInformation)}}{{Information}}</view>
	<view class = "contentBox">
		<input class="inputArea" v-model="Account" placeholder="Account" />
		<input class="inputArea" v-model="Password" placeholder="Password" />
		<view class="inputArea" @click="LoginIn">{{Account}}登录{{Password}}</view>
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
		uni.request({
			url: 'http://192.168.43.231:8080/xqlgq/user/login',
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
					uni.setStorageSync('LoginInformation',LoginInformation)
					uni.setStorageSync('UserLoginStatus',"true")
					uni.navigateTo({
						url:'/pages/Login/Login',
					})
				}
				else{
					console.log(res.data.msg)
				}
			
				
				
			},
			fail:  (err)=> {
				//失败事件
				console.log(请求错误,err)
				Information.value = err
				
			}
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
	background: #0a0a0a;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
.inputArea {
	width: 70%;
	height: 50px;
	background-color: #ffffff;
	margin-bottom: 10px;
	margin-top: 10px;
	padding:10px
}
</style>
