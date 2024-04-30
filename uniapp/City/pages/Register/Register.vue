<template>
	<phone-status></phone-status>
	<view class = "content-background 全屏">	
	<view class = "RegisterTitle">Register</view>
	<wd-row class="wdClass">
		<wd-col class="灰色字" :span="12">上传头像：</wd-col>
		<wd-col class="灰色字 右侧布局" :span="12">
			<wd-upload class = "upload" limit=1 :file-list="file" action="http://116.62.176.59:8080/xqlgq/files/upload" @change="handleChange1"></wd-upload>
		</wd-col>
	</wd-row> 
	<wd-input class="inputClass" v-model="Account" :maxlength="10" show-word-limit placeholder="请输入用户名(必填)"/>
	<wd-input class="inputClass" v-model="Password" show-password placeholder="请输入密码(必填)" />
	<wd-input class="inputClass" v-model="SecondPassword" show-password placeholder="请再次输入密码"/>
	<wd-row class="wdClass">
		<wd-col class="灰色字" :span="12">当前经纬度：</wd-col>
		<wd-col class="灰色字 右侧布局" :span="12">{{locationX}}, {{locationY}}</wd-col>
	</wd-row> 
	<wd-row class="wdClass">
		<wd-col class="灰色字" :span="12">当前城市：</wd-col>
		<wd-col class="灰色字 右侧布局" :span="12">{{cityName}}</wd-col>
	</wd-row>
	<wd-datetime-picker class="时间框" v-model="brithdayData" type="date" label="出生日期:" @confirm="handleConfirm" minDate="1950"/>
	<wd-picker class = "时间框" :columns="columns" label="性别" v-model="sex" @confirm="handleConfirm" />
	<wd-input class="inputClass" v-model="email" clearable placeholder="请输入邮箱"/>
	<wd-input class="inputClass" v-model="phone" clearable placeholder="请输入手机号"/>
	<wd-button class="注册按钮" type="success" block @click="DoRegister">注册</wd-button>
	<wd-row class="wdClass">
		<wd-col class="底部文字按钮" :span="12" @click="BackToLogin">返回登录</wd-col>
		<wd-col class="底部文字按钮 右侧布局" :span="12">客服反馈</wd-col>
	</wd-row>
	<view class="底部盒子"></view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	let Account = ref("")//账号
	let Password = ref("")//密码
	let SecondPassword = ref("")//再次输入密码
	let locationX = ref("")//纬度
	let locationY = ref("")//经度
	let brithdayData = ref("")//生日
	let email = ref("")//邮箱
	let sex = ref('男')//性别
	let phone = ref("")//手机号
	const columns = ref(['男', '女'])
	let placeXY = ref("")
	let cityName = ref("未知")
	let userImg = ref("")//头像时间戳
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


//以下是注册事件
const DoRegister = ()=>{
	if(userImg.value=="")
	{
		userImg.value == null
	}
	if(Account.value===""||Password.value===""||SecondPassword.value==="")
	{
		uni.showToast({
			title: '必要信息不全',
			icon: 'none',
			duration: 2000
		})  
	}
	else if(Password.value != SecondPassword.value)
	{
		uni.showToast({
			title: '两次密码不一致',
			icon: 'none',
			duration: 2000
		})  
	}
	else 
	{
		uni.showLoading({
			title: '注册中...'
		});
		//此处开始请求注册
		    uni.request({
		        url: 'http://116.62.176.59:8080/xqlgq/user/register',
		        method: 'POST',
		        timeout: 6000,
		        data: {
		            username: Account.value,//账号
		            password: Password.value,//密码
		            locationX:locationX.value,//经度
					locationY:locationY.value,//纬度
					timestamp:brithdayData.value,//生日
					email:email.value,//邮箱
					userSex:sex.value,//性别
					phoneNumber:phone.value,//手机号
					userImage:userImg.value ,//头像时间戳
					city:cityName.value
		        },
		        success:  (res)=> {
					uni.hideLoading();
					if(res.data.code =="0")
					{
						//注册成功
						console.log(res.data.data)
						uni.navigateBack()
					}
					else
					{
						//注册失败
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 2000
						}) 
					}
		        },
		        fail:  (err)=> {
					uni.hideLoading();
					uni.showToast({
						title: err.errMsg,
						icon: 'none',
						duration: 2000
					})
		        }
		    })
	}
}

const BackToLogin = ()=>{
	uni.navigateBack()
}
//--------------------以下是头像上传事件
const handleChange1 = (fileList)=> {
  userImg.value = JSON.parse(fileList.fileList[0].response).data
}

</script>

<style>
.全屏{
	width:100%;
	height: 100%;
}
.RegisterTitle{
	padding: 30rpx;
	padding-top: 80rpx;
	font-size: 60rpx;
	font-family: 'Courier New', Courier, monospace;
}
.inputClass{
	padding: 10rpx;
	padding-left: 20rpx;
	padding-right: 20rpx;
	margin-left: 20rpx;
	margin-right: 20rpx;
	margin-bottom: 10rpx;
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
</style>
