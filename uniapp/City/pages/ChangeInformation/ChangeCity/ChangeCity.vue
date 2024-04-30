<template>
	<view class = "content-background 全屏">	
		<view class = "横向布局">
			<wd-icon @click="Back" class = "TitileFont" name="thin-arrow-left" size="30rpx" />
			<view class = "ICON-TitileFont">My City</view>
		</view>
		<wd-row class="wdClass">
			<wd-col class="灰色字" :span="12">当前经纬度：</wd-col>
			<wd-col class="灰色字 右侧布局" :span="12">{{locationX}}, {{locationY}}</wd-col>
		</wd-row> 
		<wd-row class="wdClass">
			<wd-col class="灰色字" :span="12">当前城市：</wd-col>
			<wd-col class="灰色字 右侧布局" :span="12">{{cityName}}</wd-col>
		</wd-row>
		<wd-button block class="button" type="success" size="large" @click="Update">更新</wd-button>
	</view>
</template> 

<script setup>
import {ref} from 'vue'
const Back = ()=>{uni.navigateBack()}
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
let token = userData.token 
let locationX = ref("")
let locationY = ref("")
let  placeXY = ""
let cityName = ref("未知")



uni.getLocation({
	type: 'wgs84',
	geocode:true,
	isHighAccuracy:true, 
	success: function (res) {
		locationX.value = res.longitude
		locationY.value = res.latitude
		//此处开始转化为城市名
		placeXY = locationX.value + ',' + locationY.value
		console.log(placeXY)
		uni.request({
		    url: 'https://restapi.amap.com/v3/geocode/regeo',
		    method: 'GET',
		    data: {
			   location: placeXY,
			   key: 'ae7bbfcb1e77bf8aba15fedc250a005c',
		    },
		    success:  (res)=> {
				cityName.value = res.data.regeocode.addressComponent.city
		    },
		    fail:  (err)=> {
				cityName.value = "获取位置失败"
		    }
		})
		//此处结束
	}
});



const Update = ()=>{
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/user/register',
		method:'POST',
		header:{
			'token':token
		},
		data:{ 
			'city': cityName.value,
			'locationX': locationX.value,
			'locationY': locationY.value,
		},
		success(res) {
			console.log(res.data)
			if(res.data.code == "0")
			{
				userData.city = cityName.value
				userData.locationX = locationX.value
				userData.locationY = locationY.value
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
.button{
	margin: 20rpx;
	margin-top: 40rpx;
}
</style>
