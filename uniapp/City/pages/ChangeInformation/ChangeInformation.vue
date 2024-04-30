<template>
	<view class = "content-background 全屏">	
		<view class = "横向布局">
			<wd-icon @click="Back" class = "TitileFont" name="thin-arrow-left" size="30rpx" />
			<view class = "ICON-TitileFont">Myself</view>
		</view>
		<view class ="标题">用户名：</view>
		<wd-input class="inputClass" v-model="UserName" clearable placeholder="请输入邮箱"/>
		<view class ="标题">签名：</view>
		<wd-input class="inputClass" v-model="UserSign" clearable placeholder="请输入邮箱"/>
		<view class ="标题">邮箱：</view>
		<wd-input class="inputClass" v-model="UserEmail" clearable placeholder="请输入邮箱"/>
		<view class ="标题">手机号：</view>
		<wd-input class="inputClass" v-model="UserPhone" clearable placeholder="请输入邮箱"/>
		<wd-button block class="button" type="success" size="large" @click="Update">更新</wd-button>
	</view>
</template> 

<script setup>
import {ref} from 'vue'
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
console.log(userData)
let token = userData.token 
const Back = ()=>{uni.navigateBack()}
let UserName = ref(userData.name)
let UserSign = ref(userData.sign)
let UserEmail = ref(userData.email)
let UserPhone = ref(userData.phone)
let PrimaryName = userData.name

const Update = ()=>{
	if(PrimaryName == UserName.value)
	{
		PrimaryName = null
	}
	else{
		PrimaryName = UserName.value
	}
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/user/register',
		method:'POST',
		header:{
			'token':token
		},
		data:{
			'username': PrimaryName,
			'email': UserEmail.value,
			'sign': UserSign.value,
			'phoneNumber': UserPhone.value
		},
		success(res) {
			console.log(res.data)
			if(res.data.code == "0")
			{
				
				userData.name = UserName.value
				userData.sign = UserSign.value
				userData.email = UserEmail.value
				userData.phone = UserPhone.value
				let STRING_MSS = JSON.stringify(userData)
				console.log(STRING_MSS)
				uni.setStorageSync('UserInformation',STRING_MSS)
				uni.showToast({
					title: "更新成功",
					icon: 'none',
					duration: 2000
				}) 
			}
			else{
				uni.showToast({
					title: res.data.msg,
					icon: 'none',
					duration: 2000
				}) 
			}
			
		},
		fail: (err) => {
			uni.showToast({
				title: err,
				icon: 'none',
				duration: 2000
			}) 
		}
	})
}






</script>

<style>

.inputClass{
	margin:20rpx;
	padding:20rpx;
}
.标题{
	margin-left: 35rpx;
	color: #404040;
}
.button{
	margin: 20rpx;
	margin-top: 40rpx;
}
</style>
