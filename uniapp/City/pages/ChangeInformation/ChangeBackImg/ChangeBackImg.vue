<template>
	<view class = "content-background 全屏">	
		<view class = "横向布局">
			<wd-icon @click="Back" class = "TitileFont" name="thin-arrow-left" size="30rpx" />
			<view class = "ICON-TitileFont">My Background</view>
		</view>
		<view class="小文本">上传新的背景图片：</view>
		<view class = "居中对齐">
		<wd-upload class = "upload" limit=1 :file-list="file" action="http://116.62.176.59:8080/xqlgq/files/upload" @change="handleChange1"></wd-upload>
		</view>
		
	</view>
</template> 

<script setup>
import {ref} from 'vue'
let userImg = ref("")
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
let token = userData.token






const handleChange1 = (fileList)=> {
  userImg.value = JSON.parse(fileList.fileList[0].response).data
  uni.request({
  	url:'http://116.62.176.59:8080/xqlgq/user/register',
	method:'POST',
	header:{
		'token':token
	},
	data:{
		'backImg': userImg.value
	},
	success(res) {
		console.log(res.data)
		if(res.data.code == "0")
		{
			uni.showToast({
				title: "上传成功",
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




const Back = ()=>{uni.navigateBack()}
</script>

<style>
.upload{
	margin: 20rpx;
}
.小文本{
	margin:30rpx;
	margin-bottom: 45rpx;
	width: 100%;
}
.居中对齐{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.button{
	margin: 80rpx;
	margin-top: 30rpx;
}
</style>
