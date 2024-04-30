<template>
	<view>
	<view class="LoginBackgroundBox">{{UserLoginStatus}}</view>
	<view></view>
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	let userLoginStatus = ref("");
	onMounted(() => {
		
		let status = uni.getStorageSync('UserLoginStatus');//读取存储状态

		 userLoginStatus.value = status;
		if (userLoginStatus.value == "true") {
				uni.switchTab({
					url: '/pages/index/index'
				});
		}else {
			uni.setStorageSync('UserLoginStatus', 'false')
			uni.setStorageSync('UserInformation', JSON.stringify({
				"id": "000000000",
				"name": "未登录",
				"token": "",
				"phone": "",
				"email": "",
				"sex": "",
				"brithday": "",
				"locationx": "",
				"locationy": "",
				"friends": "",
				"userImg":"",
				"userBack":"",
				"city":"",
				"sign":""
			}))//初始化用户全部信息
			uni.navigateTo({
				url: '/pages/LoginAccount/LoginAccount'
			});
			//跳转到登录页并且写入False
		}

	});
</script>

<style>
	.LoginBackgroundBox {
		width: 100%;
		height: 100%;
		background-color: antiquewhite;
	}
</style>

