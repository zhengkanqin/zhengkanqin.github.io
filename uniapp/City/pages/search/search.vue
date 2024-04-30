<template>
	<scroll-view scroll-y=true class="content-background 全屏">
		<view class = "横向布局">
			<wd-icon @click="Back" class = "TitileFont" name="thin-arrow-left" size="28rpx" />
			<view class = "ICON-TitileFont" style="font-size: 40rpx;">搜索</view>
		</view>
		<view class="分割线文本">搜索内容：</view>
		<view class="搜索框背景">
			<view class="搜索框背景板">
				<input class="搜索框" v-model="search" placeholder="标题/作者/tag/内容" confirm-type="search"  @confirm="Search(search)"  placeholder-style="letter-spacing:2rpx"/>
			</view>
		</view>
		<view class="分割线文本">搜索分区选择：</view>
		<view style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 20rpx;">
		<view style="width: 90%;display:flex;flex-direction: row;flex-wrap: wrap;">
			<view class="分区选择" :style="IfType1" @click = "changeType1">普通</view>
			<view class="分区选择" :style="IfType2" @click = "changeType2">求助</view>
			<view class="分区选择" :style="IfType3" @click = "changeType3">学术</view>
			<view class="分区选择" :style="IfType4" @click = "changeType4">运动</view>
			<view class="分区选择" :style="IfType5" @click = "changeType5">游戏</view>
			<view class="分区选择" :style="IfType6" @click = "changeType6">公益</view>
			<view class="分区选择" :style="IfType7" @click = "changeType7">美食</view>
		</view>
		</view>
		
		
		<view class="分割线文本">搜索附近范围 (KM)：</view>
		<wd-slider style="margin:50rpx;margin-top: 20rpx;margin-bottom: 20rpx;" v-model="searchplace" :min="1" :max="20" active-color="#3fb77b"/>
		<view class="分割线文本">最近搜索：</view>
		<view style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 20rpx;">
		<view style="width: 90%;display:flex;flex-direction: row;flex-wrap: wrap;">
				<view v-for="(log,index) in Logs">
					<view class="分区选择 横向布局" style="color: #ffffff;background-color: #8faba8;" @click="Search(log)">
					{{log}}
					<wd-icon name="close-bold" size="22px" @click="DeleteLog(log)"></wd-icon>
					</view>
			</view>
		 </view>
	</view>
	
	</scroll-view>
</template> 

<script setup>
	import {ref} from 'vue'
	let searchplace = ref(5)
	let userData = JSON.parse(uni.getStorageSync('UserInformation'))
	let TypeArr = ref(["普通","求助","游戏","运动","公益","美食","学术"])
	let IfType1 = ref("color: #ffffff;background-color: #81aba8;")
	let IfType2 = ref("color: #ffffff;background-color: #81aba8;")
	let IfType3 = ref("color: #ffffff;background-color: #81aba8;")
	let IfType4 = ref("color: #ffffff;background-color: #81aba8;")
	let IfType5 = ref("color: #ffffff;background-color: #81aba8;")
	let IfType6 = ref("color: #ffffff;background-color: #81aba8;")
	let IfType7 = ref("color: #ffffff;background-color: #81aba8;")
	let Logs =ref(JSON.parse( uni.getStorageSync('UserSearch')))
	let search = ref("")
	let list = ref([])
	
	
	
	
	
	
	
	
const Search = (item)=>{
	if(item != "" && !Logs.value.includes(item) )
	{
		if(Logs.value.length<15)
		{
			Logs.value.unshift(item)
			uni.setStorageSync('UserSearch',JSON.stringify(Logs.value))
		}
		else
		{
			Logs.value.pop()
			Logs.value.unshift(item)
			uni.setStorageSync('UserSearch',JSON.stringify(Logs.value))
		}
	}

	uni.request({
	url:'http://116.62.176.59:8080/xqlgq/event/search',
	method:'POST',
	header:{
		'token':userData.token
		},
		data:{
			'type':JSON.stringify(TypeArr.value),
			'locationX':userData.locationX,
			'locationY':userData.locationY,
			'range':searchplace.value,
			'query':item
			},
		success: (res) => {
				if(res.data.code == 0){
					list.value = res.data.data.list
					uni.setStorageSync('SearchList',JSON.stringify(list.value))
					console.log(list.value)
					uni.switchTab({url:'/pages/myFriends/myFriends',
						success: () => {
							uni.$emit('update',{
								type:TypeArr.value,
								content:item,
								},)}})
					}
					else
					{
						tip(res.data.msg)
					}
			},
			fail: (err) => {
				tip(err.errMsg)
			}
		})
	

	
}
const Back=()=>{uni.navigateBack()}	
const DeleteLog=(item)=>{let index = Logs.value.indexOf(item);if (index !== -1) {Logs.value.splice(index, 1);}}
const changeType1=()=>{if(IfType1.value == ""){IfType1.value = "color: #ffffff;background-color: #81aba8;";TypeArr.value.push("普通");}else{IfType1.value = "";deleteTypeByName("普通");}}
const changeType2=()=>{if(IfType2.value == ""){IfType2.value = "color: #ffffff;background-color: #81aba8;";TypeArr.value.push("求助");}else{IfType2.value = "";deleteTypeByName("求助");}}
const changeType3=()=>{if(IfType3.value == ""){IfType3.value = "color: #ffffff;background-color: #81aba8;";TypeArr.value.push("学术");}else{IfType3.value = "";deleteTypeByName("学术");}}
const changeType4=()=>{if(IfType4.value == ""){IfType4.value = "color: #ffffff;background-color: #81aba8;";TypeArr.value.push("运动");}else{IfType4.value = "";deleteTypeByName("运动");}}
const changeType5=()=>{if(IfType5.value == ""){IfType5.value = "color: #ffffff;background-color: #81aba8;";TypeArr.value.push("游戏");}else{IfType5.value = "";deleteTypeByName("游戏");}}
const changeType6=()=>{if(IfType6.value == ""){IfType6.value = "color: #ffffff;background-color: #81aba8;";TypeArr.value.push("公益");}else{IfType6.value = "";deleteTypeByName("公益");}}
const changeType7=()=>{if(IfType7.value == ""){IfType7.value = "color: #ffffff;background-color: #81aba8;";TypeArr.value.push("美食");}else{IfType7.value = "";deleteTypeByName("美食");}}
const deleteTypeByName = (name) => {const index = TypeArr.value.findIndex(type => type === name);if (index !== -1) {TypeArr.value.splice(index, 1);}};	
const tip =(words)=>{uni.showToast({title: words,icon: 'none',duration: 2000})}	
</script>

<style>
.test{
	width: 100%;
	height: 400rpx;
	background-color: antiquewhite;
}
.test1{
	background-color: aliceblue;
	width:100rpx;
	height: 100rpx;
}
.搜索框背景{
	width: 100%;
	height: 140rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.搜索框背景板{
	width: 90%;
	height: 100rpx;
	background-color: #ffffff;
	border-radius: 40rpx;
	box-shadow: 3rpx 3rpx 3rpx #909090,-1rpx -1rpx 1rpx #dfdfdf;
	display: flex;
	justify-content: center;
	align-items: center;
}
.搜索框{
	 width: 90%;
	 height: 80%;
}
.分割线文本{
	margin-left: 50rpx;
	font-size: 24rpx;
	margin-top: 20rpx;
	color: #5a5a5a;
	font-weight: 500;
	letter-spacing: 2rpx;
}
.分区选择区域{
	width: 100%;
	display: flex;
	justify-content: start;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 50rpx;
	padding-top: 20rpx;
	padding-bottom: 20rpx;
}
.分区选择{
	padding: 5rpx;
	font-size: 24rpx;
	padding-left: 14rpx;
	padding-right: 14rpx;
	font-weight: bold;
	border-radius: 10rpx;
	margin-right: 20rpx;
	margin-bottom: 20rpx;
	color: #dedede;
	background-color: #a2abaa;
}
</style>