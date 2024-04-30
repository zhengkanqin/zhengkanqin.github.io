<template>
	<wd-popup v-model="IfShowCode" custom-style="border-radius:20rpx;padding:20rpx;display:flex;justify-content: center; align-items: center;flex-direction: column;margin:10rpx;margin-bottom:0" @close="handleClose">
		<uv-qrcode auto=true size="380rpx" :options="options1" ref="uvqrcode2" :value="'/pages/UserShow/UserShow?id='+id"></uv-qrcode>
		<view style="font-size: 30rpx;margin:10rpx">请在城屿App内扫码打开</view>
		</wd-popup>
<view class = "content-background">	
	<view class = "left-around">
		<view class = "横向布局">
			<wd-icon @click="Back" class = "TitileFont" name="thin-arrow-left" size="28px" color="#ffffff" />
			<view class = "ICON-TitileFont 白色">Cards</view>
		</view>
		<view class = "横向布局">
			<image class = "头像" :src ='img' mode="aspectFill"></image>
			<view class = "头名区">
				<view class = "用户名">{{name}}</view>
				<view class = "签名">{{sign}}</view>
			</view>
		</view>
		<view class = "用户操作区">
			<view class = "横向布局">
				<view class = "Guanzhu">粉丝数：{{Fans}}</view>
				<view class = "Guanzhu">关注数：{{Idols}}</view>
			</view>
			<!-- <wd-checkbox class="关注" :modelValue="GuanZhu" shape="button"  @click="DoGuanZhu">关注</wd-checkbox> -->
			<view class = "按钮区">
				<image v-if="IfMyself" style="height:40rpx;width:40rpx;margin-right:15rpx" src="../../static/buttomSrc/erweima.png" @click="GoShowCode"></image>
				<view v-if="!IfMyself" class="关注按钮" :style='ChangeGuanZhu' @click="DoGuanZhu">{{GuanZhu}}</view>
				<view class = "联系按钮" @click="GoMyMap">个人地图</view>
			</view>
		</view>
	</view>
	<view class = "中间信息区">
		<view class = "横向布局 水平对齐 间距">
			<wd-icon name="user-circle" size="35px" color="#606060"></wd-icon>
			<view class = "中间标题">information</view>
		</view>
		
		<wd-row class="wdClass 上下间距 额外上间距">
			<wd-col class="灰色字" :span="12">ID：</wd-col>
			<wd-col class="灰色字 右侧布局" :span="12">{{id}}</wd-col>
		</wd-row>
		<wd-row class="wdClass 上下间距 额外上间距">
			<wd-col class="灰色字" :span="12">性别：</wd-col>
			<wd-col class="灰色字 右侧布局" :span="12">{{sex}}</wd-col>
		</wd-row>
		<wd-row class="wdClass 上下间距 额外上间距">
			<wd-col class="灰色字" :span="12">所在城市：</wd-col>
			<wd-col class="灰色字 右侧布局" :span="12">{{city}}</wd-col>
		</wd-row>
		<wd-row class="wdClass 上下间距 额外上间距">
			<wd-col class="灰色字" :span="12">电话：</wd-col>
			<wd-col class="灰色字 右侧布局" :span="12">{{phone}}</wd-col>
		</wd-row>
		<wd-row class="wdClass 上下间距 额外上间距">
			<wd-col class="灰色字" :span="12">邮箱：</wd-col>
			<wd-col class="灰色字 右侧布局" :span="12">{{email}}</wd-col>
		</wd-row>
		
	</view>
	<view class = "right-around">
			
		<view class = "右侧布局">
			<view class = "底部标题">Activities</view>
		</view>
		<view class="右侧布局" style="width: 100%;margin-bottom: 30rpx;">
			<view class="收藏夹名" :style="ButtonType4" @click="ChangeTypeClass(4)">发布</view>
			<view class="收藏夹名" :style="ButtonType3" @click="ChangeTypeClass(3)">发起</view>
			<view class="收藏夹名" :style="ButtonType2" @click="ChangeTypeClass(2)">参与</view>
			<view class="收藏夹名" :style="ButtonType1" @click="ChangeTypeClass(1)">收藏</view>
		</view>
		
		<scroll-view scroll-y=true style="height: 1100rpx;">
		
		<view v-show="IfShowType1">
			<view class="列表布局">
				<view class="列表背景">
					
					<view class="列表元素 横向布局" v-for="item in Type1">
						<image v-if="IfHaveImg(convertStringToNumberArray(item.images))" class="列表图片" :src="'http://116.62.176.59:8080/xqlgq/files/' + convertStringToNumberArray(item.images)[0]"  mode="aspectFill"></image>
						<view class="列表文字布局" style="justify-content: space-evenly;" @click="GoEvent(item.gid)">
							<view style="margin-left:15rpx;margin-bottom:10rpx;color:#ffffff;font-size:34rpx;word-break: break-all;">{{item.title}}</view>
							<view style="color: #ffffff;font-size:26rpx;margin-left:24rpx">{{item.timestamp[0]}}-{{item.timestamp[1]}}-{{item.timestamp[2]}} {{item.timestamp[3]}}:{{item.timestamp[4]}}:{{item.timestamp[5]}}</view>
						</view>
					</view>
					
				</view> 
			</view>
		</view>
		
		<view v-show="IfShowType2">
			<view class="列表布局">
				<view class="列表背景">
					
					<view class="列表元素 横向布局" v-for="item in Type2">
						<image v-if="IfHaveImg(convertStringToNumberArray(item.images))" class="列表图片" :src="'http://116.62.176.59:8080/xqlgq/files/' + convertStringToNumberArray(item.images)[0]"  mode="aspectFill"></image>
						<view class="列表文字布局" style="justify-content: space-evenly;"  @click="GoEvent(item.gid)">
							<view style="margin-left:15rpx;margin-bottom:10rpx;color:#ffffff;font-size:34rpx;word-break: break-all;">{{item.title}}</view>
							<view style="color: #ffffff;font-size:26rpx;margin-left:24rpx">{{item.timestamp[0]}}-{{item.timestamp[1]}}-{{item.timestamp[2]}} {{item.timestamp[3]}}:{{item.timestamp[4]}}:{{item.timestamp[5]}}</view>
						</view>
					</view>
					
			</view>
			</view>
		</view>
		
		<view v-show="IfShowType3">
			<view class="列表布局">
				<view class="列表背景">
					
					<view class="列表元素 横向布局" v-for="item in Type3">
						<image v-if="IfHaveImg(convertStringToNumberArray(item.images))" class="列表图片" :src="'http://116.62.176.59:8080/xqlgq/files/' + convertStringToNumberArray(item.images)[0]"  mode="aspectFill"></image>
						<view class="列表文字布局" style="justify-content: space-evenly;"  @click="GoEvent(item.gid)">
							<view style="margin-left:15rpx;margin-bottom:10rpx;color:#ffffff;font-size:34rpx;word-break: break-all;">{{item.title}}</view>
							<view style="color: #ffffff;font-size:26rpx;margin-left:24rpx">{{item.timestamp[0]}}-{{item.timestamp[1]}}-{{item.timestamp[2]}} {{item.timestamp[3]}}:{{item.timestamp[4]}}:{{item.timestamp[5]}}</view>
						</view>
					</view>
					
			</view>
			</view>
		</view>
		
		<view v-show="IfShowType4">
			<view class="列表布局">
				<view class="列表背景">
					
					<view class="列表元素 横向布局" v-for="item in Type4">
						<image v-if="IfHaveImg(convertStringToNumberArray(item.images))" class="列表图片" :src="'http://116.62.176.59:8080/xqlgq/files/' + convertStringToNumberArray(item.images)[0]"  mode="aspectFill"></image>
						<view class="列表文字布局" style="justify-content: space-evenly;"  @click="GoEvent(item.gid)">
							<view style="margin-left:15rpx;margin-bottom:10rpx;color:#ffffff;font-size:34rpx;word-break: break-all;">{{item.title}}</view>
							<view style="color: #ffffff;font-size:26rpx;margin-left:24rpx">{{item.timestamp[0]}}-{{item.timestamp[1]}}-{{item.timestamp[2]}} {{item.timestamp[3]}}:{{item.timestamp[4]}}:{{item.timestamp[5]}}</view>
						</view>
					</view>
					
			</view>
			</view>
		</view>
		</scroll-view>
		
		
		
	</view>
</view>



</template>

<script setup>
import {ref} from 'vue'
import { onMounted } from 'vue'
import {onLoad} from '@dcloudio/uni-app'
import QRCodeStyleRound from './uqrcode.plugin.round.es.js';
const name = ref("")
const img = ref("")
const sign = ref("这个人很懒，什么都没有留下~")
const id = ref("")
const sex = ref("")
const city = ref ("")
const phone = ref("")
const email = ref("")
const GuanZhu = ref("未关注")
const Fans = ref("0")
const Idols = ref("0")
const ChangeGuanZhu = ref("color: #ffffff; background-color: #b2bbec;")
let usertoken = ""
let userSearchID = ""



let IfShowType1= ref(true)
let IfShowType2 = ref(false)
let IfShowType3 = ref(false)
let IfShowType4 = ref(false)
let ButtonType = ref("color:#1c1c1c;background-color:#FFFFFF;box-shadow:2rpx 2rpx 2rpx #838383;")
let ButtonType1 = ref("color:#1c1c1c;background-color:#FFFFFF;box-shadow:2rpx 2rpx 2rpx #838383;")
let ButtonType2 = ref("")
let ButtonType3 = ref("")
let ButtonType4 = ref("")
let Type1 = ref([])
let Type2 = ref([])
let Type3 = ref([])
let Type4 = ref([])

let IfMyself = ref(false)
let IfShowCode = ref(false)

let options1= ref({
	margin: 10,
	useDynamicSize: false,
	style: 'round',
	foregroundImageSrc:img,
	foregroundImagePadding:5,
	 positionAdjustBackgroundColor:"#dded4d",
	 positionProbeForegroundColor:"#4fc19b",
	 darkBlockColor:"#3f6dc1",
	 timingForegroundColor:"#4fc19b",
     positionAdjustForegroundColor:"#26adc1",

})




function stringToArray(str) {try {return JSON.parse(str);} catch (error) {return [];}}

const ChangeTypeClass=(id)=>{
	if(id == 1){
		ButtonType1.value = ButtonType.value
		ButtonType2.value = ""
		ButtonType3.value = ""
		ButtonType4.value = ""
		IfShowType1.value = true
		IfShowType2.value = false
		IfShowType3.value = false
		IfShowType4.value = false
	}else if(id == 2){
		ButtonType1.value = ""
		ButtonType2.value = ButtonType.value
		ButtonType3.value = ""
		ButtonType4.value = ""
		IfShowType1.value = false
		IfShowType2.value = true
		IfShowType3.value = false
		IfShowType4.value = false
	}else if(id == 3){
		ButtonType1.value = ""
		ButtonType2.value = ""
		ButtonType3.value = ButtonType.value
		ButtonType4.value = ""
		IfShowType1.value = false
		IfShowType2.value = false
		IfShowType3.value = true
		IfShowType4.value = false
	}else if(id == 4){
		ButtonType1.value = ""
		ButtonType2.value = ""
		ButtonType3.value = ""
		ButtonType4.value = ButtonType.value
		IfShowType1.value = false
		IfShowType2.value = false
		IfShowType3.value = false
		IfShowType4.value = true
	}
}

const Back = ()=>{uni.navigateBack()}


onLoad ((e) =>{
	let userData = JSON.parse(uni.getStorageSync('UserInformation'))
	let searchID = e.id//获取查询的id目标
	userSearchID = e.id
	let token = userData.token//获取自己的token
	usertoken = userData.token
	//发起网络请求
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/user/info/' + searchID,
		method:'GET',
		header:{
			'token': token
		},
		success: (res) => {
			console.log(res.data.data)
			let resdata = res.data.data
			name.value = resdata.username
			img.value = "http://116.62.176.59:8080/xqlgq/files/" + resdata.userImage
			sign.value = resdata.sign || "未公开"
			id.value = resdata.id 
			sex.value = resdata.userSex || "未公开"
			city.value = resdata.city || "未公开"
			phone.value = resdata.phoneNumber || "未公开"
			email.value = resdata.email || "未公开"
			Fans.value = resdata.fan || "0"
			Idols.value = resdata.idol || "0"
			 Type1.value = resdata.collectEventList
			 Type2.value = resdata.participatedEventList
			 Type3.value = resdata.organizedEventList
			 Type4.value = resdata.eventList
			 console.log(Type4.value)
			 uni.setStorageSync('dataMyMap',JSON.stringify(Type4.value))
			if(resdata.relationship == "Myself"){
				IfMyself.value = true
			}
			if(resdata.relationship == null || resdata.relationship == "Fan")
			{
				GuanZhu.value = "未关注"
				ChangeGuanZhu.value = "color: #ffffff; background-color: #b2bbec;"
			}else
			{
				GuanZhu.value = "已关注"
				ChangeGuanZhu.value = "color: #5e5e5e; background-color: #ffffff;"
			}
		},
		fail: (err) => {
			console.log(err)
		}
	})
	console.log(resdata.userImage)

	
	
})
const DoGuanZhu = ()=>{
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/user/follow/' + userSearchID,
		header:{'token':usertoken},
		success: (res) => {
			if(res.data.code =="0")
			{
				if(GuanZhu.value == "已关注")
				{
					GuanZhu.value = "未关注"
					ChangeGuanZhu.value = "color: #ffffff; background-color: #b2bbec;"
				}
				else{
					GuanZhu.value = "已关注"
					ChangeGuanZhu.value = "color: #5e5e5e; background-color: #ffffff;"
				}
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
			console.log(err)
		}
	})
}
function convertStringToNumberArray(str) {
  return JSON.parse( str.replace(/(\w+)/g, '"$1"'));
}


const IfHaveImg = (image) =>{
	if(image != "")
	{
		return true
	}
	else{
		return false
	}
}
const GoEvent = (id)=>{
	uni.navigateTo({
		url:'/pages/titleContent/titleContent?id='+id
	})
}

const GoShowCode=()=>{
	console.log(img.value)
	IfShowCode.value = true
}
const SaveCode = ()=>{
	this.$refs.userCode.save({
	  success: () => {
	    uni.showToast({
	      icon: 'success',
	      title: '保存成功'
	    });
	  }
	});
}

const GoMyMap = ()=>
{
	uni.navigateTo({
		url:"/pages/indexMap/myMap/myMap"
	})
}

</script>

<style>
.left-around{
	width: 100%;
	min-height: 550rpx;
	box-shadow: 0 8rpx 8rpx #7e7e7e , 5rpx 0 5rpx #d6d6d6 , -1rpx 0 1rpx #b1b1b1;
	border-radius: 0rpx 0% 400rpx 0;
	padding: 10rpx;
	background-color: #525bd7;
	margin-right: 100rpx;

}
.right-around{
	width: 100%;
	min-height: 1100rpx;
	box-shadow: 0 -8rpx 8rpx #7e7e7e , -5rpx 0 5rpx #d6d6d6 , -1rpx 0 1rpx #b1b1b1;
	border-radius: 400rpx 0% 0% 0;
	padding: 10rpx;
	background-color: #525bd7;
	margin-bottom: 50rpx;
}
.中间信息区{
	width: 100%;
	margin-top:30rpx;
	margin-bottom: 80rpx;
}
.白色{
	color: aliceblue;
}
.头像{
	width: 200rpx;
	height: 200rpx;
	margin-left: 30rpx;
	border-radius: 50%;
	border: 6rpx solid #ffffff;
	box-shadow: 0rpx 0rpx 8rpx #606060;
	background-color: antiquewhite;
}
.头名区{
	width: 50%;
	height: 200rpx;
	padding:10rpx;
	padding-left: 30rpx;
	color: #ffffff;
	display: flex;
	flex-direction: column; 
	justify-content: center; 
	align-items: self-start; 
}
.用户操作区{
	width: 50%;
	padding-top: 30rpx;
	padding-left: 30rpx;
}
.用户名{
	font-size: 50rpx;
	font-weight: bold;
	margin-bottom: 10rpx;
}
.签名{
	font-size: 25rpx;
	color: #b2bbec;
}
.按钮区{
	font-size: 25rpx;
	color: #ffffff;
	padding: 5rpx;
	padding-left: 10rpx;
	padding-right: 10rpx;
	display: flex;
	flex-direction: row
}
.水平对齐{
	display: flex;
	align-items: center;
}
.中间标题{
	margin-left: 10rpx;
	font-size: 45rpx;
	color: #606060;
	font-family: 'Courier New', Courier, monospace;
}
.间距{
	margin:30rpx
}
.底部标题{
	margin:50rpx; 
	margin-top: 25rpx;
	margin: 10rpx;
	color: #ffffff;
	font-size: 50rpx;
	font-family: 'Courier New', Courier, monospace;
}
.Guanzhu{
	color: #ffffff;
	font-family: 'Courier New', Courier, monospace;
	font-size: 25rpx;
	margin-bottom: 25rpx;
	margin-right: 20rpx;
	margin-left: 10rpx;
}
.关注按钮{
	font-size: 20rpx;
	padding: 6rpx;
	padding-left: 15rpx;
	padding-right: 15rpx;
	margin-right:10rpx;
	border-radius: 10rpx;
	border: 3rpx solid #ffffff; 
	color: #ffffff;
	background-color: #b2bbec;
}
.联系按钮{
	font-size: 20rpx;
	padding: 6rpx;
	padding-left: 15rpx;
	padding-right: 15rpx;
	margin-right:10rpx;
	border-radius: 10rpx;
	border: 3rpx solid #ffffff;
	background-color: #525bd7;
}
.用户标识{
	font-size: 20rpx;
	padding: 6rpx;
	padding-left: 15rpx;
	padding-right: 15rpx;
	margin-right:10rpx;
	border-radius: 10rpx;
	border: 3rpx solid #ffffff;
	background-color: #525bd7;
}
.收藏夹名{
	margin-right: 20rpx;
	padding: 10rpx;
	padding-left: 20rpx;
	padding-right: 20rpx;
	background-color: #5b68f0;
	border-radius: 20rpx;
	color: #ffffff;
	font-size: 28rpx;
}
 .列表布局{
	 width: 100%;
	 display: flex;
	 flex-direction: row-reverse;
 }
 .列表背景{
	 width: 600rpx;
	 height: 300rpx;
	 margin-right:20rpx;
	 margin-top: 20rpx;
	 display: flex;
	 flex-direction: column;
 }
 .列表元素{
	 padding: 20rpx;
	 background-color: #5b68f0;
	 border-radius: 30rpx;
	 box-shadow: 4rpx 4rpx 4rpx #4848a1;
	 width: 600rpx;
	 margin-bottom: 20rpx;
 }
 .列表图片{
	 width: 200rpx;
	 height: 140rpx;
	 border-radius: 30rpx;
 }
 .列表文字布局{
	 height: 140rpx;
	 display: flex;
	 flex-direction: column;
	 margin-right: 20rpx;
 }
 
 
 
 
 </style>
