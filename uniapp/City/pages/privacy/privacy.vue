<template>
	<view class = "content-background 全屏">	
		<view class = "横向布局">
			<wd-icon @click="Back" class = "TitileFont" name="thin-arrow-left" size="30rpx" />
			<view class = "ICON-TitileFont">Privacy</view>
		</view>
			
			<wd-row class="wdClass 上下间距 额外上间距"><wd-col class="灰色字" :span="12">是否公开邮箱：</wd-col><wd-col class="灰色字 右侧布局" :span="12">
			<wd-switch v-model="PrivacyEmail" active-color="#6ce68f" inactive-color="#fd633c" /></wd-col></wd-row>
			
			<wd-row class="wdClass 上下间距"><wd-col class="灰色字" :span="12">是否公开手机号：</wd-col><wd-col class="灰色字 右侧布局" :span="12">
			<wd-switch v-model="PrivacyPhone" active-color="#6ce68f" inactive-color="#fd633c" /></wd-col></wd-row>
			
			<wd-row class="wdClass 上下间距"><wd-col class="灰色字" :span="12">是否公开性别：</wd-col><wd-col class="灰色字 右侧布局" :span="12">
			<wd-switch v-model="PrivacySex" active-color="#6ce68f" inactive-color="#fd633c" /></wd-col></wd-row>
			
			<wd-row class="wdClass 上下间距"><wd-col class="灰色字" :span="12">是否公开生日：</wd-col><wd-col class="灰色字 右侧布局" :span="12">
			<wd-switch v-model="PrivacyBrithday" active-color="#6ce68f" inactive-color="#fd633c" /></wd-col></wd-row>
			
			<wd-row class="wdClass 上下间距"><wd-col class="灰色字" :span="12">是否公开自己发布的事件：</wd-col><wd-col class="灰色字 右侧布局" :span="12">
			<wd-switch v-model="PrivacyEvent" active-color="#6ce68f" inactive-color="#fd633c" /></wd-col></wd-row>
			
			<wd-row class="wdClass 上下间距"><wd-col class="灰色字" :span="12">是否公开收藏夹：</wd-col><wd-col class="灰色字 右侧布局" :span="12">
			<wd-switch v-model="PrivacyCollect" active-color="#6ce68f" inactive-color="#fd633c" /></wd-col></wd-row>
			
			<wd-row class="wdClass 上下间距"><wd-col class="灰色字" :span="12">是否公开自己参加的活动：</wd-col><wd-col class="灰色字 右侧布局" :span="12">
			<wd-switch v-model="PrivacyAttend" active-color="#6ce68f" inactive-color="#fd633c" /></wd-col></wd-row>
			
			<wd-row class="wdClass 上下间距"><wd-col class="灰色字" :span="12">是否公开自己发起的活动：</wd-col><wd-col class="灰色字 右侧布局" :span="12">
			<wd-switch v-model="PrivacyPut" active-color="#6ce68f" inactive-color="#fd633c" /></wd-col></wd-row>
			
			<wd-button class="间距" block type="success" size="large" @click="Change">确定</wd-button>
	</view>
</template>

<script setup>
import {ref} from 'vue'
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
let id = userData.id 
let token = userData.token//读取用户的id 和token
let PrivacyEmail = ref()  
let PrivacyPhone = ref()
let PrivacySex = ref()
let PrivacyBrithday = ref()
let PrivacyEvent = ref()
let PrivacyCollect = ref()
let PrivacyAttend =ref()
let PrivacyPut =ref()

uni.request({
    url: 'http://116.62.176.59:8080/xqlgq/user/privacy/get', //仅为示例，并非真实接口地址。
    header: {
        'token': token 
    },
    success: (res) => {
		console.log(res.data)
        PrivacyEmail.value = res.data.data.email
		PrivacyPhone.value = res.data.data.phoneNumber
		PrivacySex.value = res.data.data.userSex
		PrivacyBrithday.value = res.data.data.birthday
		PrivacyEvent.value = res.data.data.event
		PrivacyCollect.value = res.data.data.collectEventList
		PrivacyAttend.value = res.data.data.participatedEventList
		PrivacyPut.value = res.data.data.organizedEventList
    }
});

const Change = ()=>{
	console.log(PrivacyEmail.value)
	console.log(PrivacyPhone.value)
	console.log(PrivacySex.value)
	console.log(PrivacyBrithday.value)
	console.log(PrivacyEvent.value)
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/user/privacy/update',
		method:'POST',
		header: {
		    'token': token 
		},
		data:{
			"id": id,
			"email": PrivacyEmail.value,
			"phoneNumber": PrivacyPhone.value,
			"userSex": PrivacySex.value,
			"birthday": PrivacyBrithday.value,
			"event": PrivacyEvent.value,
			"collectEventList":PrivacyCollect.value,
			"participatedEventList":PrivacyAttend.value,
			"organizedEventList":PrivacyPut.value
		},
		success: (res) =>{
			console.log(res.data)
		},
		fail:  (err)=> {
			console.log(err)
		}
	})
}
//返回函数
const Back = ()=>{uni.navigateBack()}
</script>

<style>
.隐私背景{
	width: 100%;
	height: 100%;
}
.上下间距{
	margin-bottom: 15rpx;
}
.额外上间距{
	margin-top: 20rpx;
}
.间距{
	margin:50rpx;
	margin-top:80rpx;
}
</style>
