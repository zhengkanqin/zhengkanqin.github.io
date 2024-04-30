<template>

		<wd-notify>
			<view style="display: flex;flex-direction: column;">
			<view style="height: 80rpx;width: 100%;"></view>
			<view style="font-size: 26rpx;margin-bottom: 10rpx;letter-spacing: 1rpx;font-weight: bold;">您有新的消息</view>
			</view>
		</wd-notify>
	<scroll-view class="content-background" scroll-y=true>
	<view class="content-background 全屏">
	<view style="height: 85rpx;"></view>
	
		<wd-row class="wdClass 首页头布局">
			<wd-col class="灰色字 横向布局" :span="16">
				<view class="首页文字标题样式" @click="changeToMap" >
					朋友
					<view style="width: 40rpx;height: 16rpx;border-radius: 7rpx;opacity: 0.7;" :style="Green1"></view>
				</view>
				<view class="首页文字标题样式" @click="changeToRelationship">
					图谱
					<view style="width: 40rpx;height: 16rpx;border-radius: 7rpx;" :style="Green2"></view>
				</view>
			</wd-col>
			<wd-col class="灰色字 右侧布局" :span="8">
				<wd-icon name="scan" size="35rpx" color="#5d6264" style="padding-left: 20rpx;" @click="scan"></wd-icon>
				<wd-icon name="search" size="35rpx" color="#5d6264" @click="GoSearch"></wd-icon>
			</wd-col>
		</wd-row>
		
		
		
		<!-- 第一页 -->
	<view v-show="IfShowMap"> 
		<view class="主控件布局">
				<view class="主控件盒子">
					<view class="波纹1"></view>
					<view class="波纹2"></view>
					<view class="波纹3"></view>
					<view class="控件盒子">
						<view class="基座纯白背景"></view>
						<image class="控件背景" src="../../static/buttomSrc/earth2.png" @click="GoIndexMap"></image>
						<view class="进入地图文字" @click="GoIndexMap">friends</view>
					</view>
				</view>
			</view>
	</view>
	
	
	<view v-show="!IfShowMap">
		<view class="主地图布局">
	        <view class="主地图盒子">
	            <view class="圈圈"></view>
	            <view class="圈圈"></view>
	            <view class="圈圈"></view>
	            <view class="地图盒子">
	                <image class="地图背景" src="../../static/buttomSrc/guanxitupu.png" @click="Gorelationship"></image>
	            </view>
	        </view>
	    </view>
	</view>
	
	
	
		<view class="横向布局 分割线布局">
			专栏
		</view>
		
		<scroll-view scroll-x=true class="横向滚动">
			<view class="横向布局">
				
				

				<view><view class="专题盒子布局" @click="GoStudy">
					<image src="../../static/buttomSrc/xueshubaogao.png" style="width: 130rpx;height: 130rpx;"></image>
					<view style="margin-top: 30rpx;font-size: 35rpx;color: #5a5a5a;font-weight: 600;letter-spacing: 3rpx;">学术报告</view>
				</view></view>
				
				<view><view class="专题盒子布局" @click="GoSport">
					<image src="../../static/buttomSrc/yundong.png" style="width: 130rpx;height: 130rpx;"></image>
					<view style="margin-top: 30rpx;font-size: 35rpx;color: #5a5a5a;font-weight: 600;letter-spacing: 3rpx;">运动约人</view>
				</view></view>
				
				
				<view><view class="专题盒子布局" @click="GoVolunteer">
					<image src="../../static/buttomSrc/gongyi.png" style="width: 130rpx;height:130rpx;"></image>
					<view style="margin-top: 30rpx;font-size: 35rpx;color: #5a5a5a;font-weight: 600;letter-spacing: 3rpx;">公益活动</view>
				</view></view>
				
				<view><view class="专题盒子布局" @click="GoFood">
					<image src="../../static/buttomSrc/meishi2.png" style="width: 130rpx;height: 130rpx;"></image>
					<view style="margin-top: 30rpx;font-size: 35rpx;color: #5a5a5a;font-weight: 600;letter-spacing: 3rpx;">美食分享</view>
				</view></view>
				
				<view><view class="专题盒子布局" @click="GoGame">
					<image src="../../static/buttomSrc/youxi.png" style="width: 130rpx;height: 130rpx;"></image>
					<view style="margin-top: 30rpx;font-size: 35rpx;color: #5a5a5a;font-weight: 600;letter-spacing: 3rpx;">游戏组队</view>
				</view></view>
		
			</view>
		</scroll-view>
		
		
		<view style="background-color: #ffffff;margin: 15rpx;border-radius:20rpx;padding-bottom: 30rpx;padding-top: 10rpx;margin-top: 30rpx">
		<view class="分割线布局" style="margin-top: 20rpx;margin-bottom: 20rpx;">
			<wd-row>
				<wd-col :span="12">热门榜</wd-col>
				<wd-col class="右侧布局" :span="12"><wd-icon name="arrow-right" size="30rpx" style="margin-right:30rpx;margin-top: 7rpx;"></wd-icon></wd-col>
			</wd-row>
		</view>
		
		<view class="热门板块">
			
			<view v-for="topic in HotTopic">
			<view class="热门布局" @click="GoEvent(topic.gid)">
					<wd-row class="wdClass" style="padding-left: 10rpx;">
						<wd-col class="灰色字 横向布局" :span="16" style="font-size: 28rpx;padding-bottom: 0px;">
							{{ topic.title.length > 13 ? topic.title.substring(0, 13) + '...' : topic.title }}
					</wd-col>
					<wd-col class="灰色字 右侧布局" :span="8">
						<image src="../../static/buttomSrc/hot.png" style="height: 30rpx;width: 30rpx;"></image>
						<view style="font-family: 'Courier New', Courier, monospace;font-size: 30rpx;margin-right: 20rpx;">{{topic.recommendation}}</view>
					</wd-col>
				</wd-row>
			</view>
			</view>
		
			
			

		</view>
	</view>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<view style="background-color: #ffffff;margin: 15rpx;border-radius:20rpx;padding-bottom: 30rpx;padding-top: 10rpx;margin-top: 30rpx">
		<view class="分割线布局" style="margin-top: 20rpx;margin-bottom: 20rpx;">
			<wd-row>
				<wd-col :span="12">我的附近</wd-col>
				<wd-col class="右侧布局" :span="12"><wd-icon name="arrow-right" size="30rpx" style="margin-right:30rpx;margin-top: 7rpx;"></wd-icon></wd-col>
			</wd-row>
		</view>
		
		<view class="热门板块">
			
			<view v-for="topic in AreaTopic">
			<view class="热门布局" @click="GoEvent(topic.gid)">
					<wd-row class="wdClass" style="padding-left: 10rpx;">
						<wd-col class="灰色字 横向布局" :span="16" style="font-size: 28rpx;padding-bottom: 0px;">
							{{ topic.title.length > 13 ? topic.title.substring(0, 13) + '...' : topic.title }}
					</wd-col>
					<wd-col class="灰色字 右侧布局" :span="8">
						<image src="../../static/buttomSrc/see.png" style="height: 30rpx;width: 30rpx;"></image>
						<view style="font-family: 'Courier New', Courier, monospace;font-size: 30rpx;margin-right: 20rpx;">{{topic.view}}</view>
					</wd-col>
				</wd-row>
			</view>
			</view>
		
			
			
	
		</view>
	</view>
		
		<!-- 第一页结束	 -->
		

	
		
		
	<view style="height: 100rpx;"></view>
    </view>
	
	
	
	
	

	
	
	</scroll-view>
</template>

<script setup>
import { useNotify } from '@/uni_modules/wot-design-uni'
const { showNotify, closeNotify } = useNotify()
import {ref,onMounted} from 'vue'
let IfShowMap = ref(true)
let Green1 = ref("background-color: #3da586;")
let Green2 = ref("")
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
let HotTopic = ref("")
let AreaTopic = ref("")
onMounted(()=>{
	
	uni.request({url:'http://116.62.176.59:8080/xqlgq/event/search',method:'POST',header:{'token':userData.token},
		data:{'type':'学术'},
		success: (res) => {if(res.data.code == 0){uni.setStorageSync('dataStudy',res.data.data)}}})
	
	uni.request({url:'http://116.62.176.59:8080/xqlgq/event/search',method:'POST',header:{'token':userData.token},
		data:{'type':'公益'},
		success: (res) => {if(res.data.code == 0){uni.setStorageSync('dataVolunteer',res.data.data)}}})
	
	uni.request({url:'http://116.62.176.59:8080/xqlgq/event/search',method:'POST',header:{'token':userData.token},
		data:{'type':'运动'},
		success: (res) => {if(res.data.code == 0){uni.setStorageSync('dataSport',res.data.data)}}})
	
	uni.request({url:'http://116.62.176.59:8080/xqlgq/event/search',method:'POST',header:{'token':userData.token},
		data:{'type':'游戏'},
		success: (res) => {if(res.data.code == 0){uni.setStorageSync('dataGame',res.data.data)}}})
		
	uni.request({url:'http://116.62.176.59:8080/xqlgq/event/search',method:'POST',header:{'token':userData.token},
		data:{'type':'美食'},
		success: (res) => {if(res.data.code == 0){uni.setStorageSync('dataFood',res.data.data)}}})
		
	uni.request({url:'http://116.62.176.59:8080/xqlgq/event/search',method:'POST',header:{'token':userData.token},
		data:{'type':'普通'},
		success: (res) => {if(res.data.code == 0){uni.setStorageSync('dataNormal',res.data.data)}}})
		
	uni.request({url:'http://116.62.176.59:8080/xqlgq/event/search',method:'POST',header:{'token':userData.token},
		data:{'type':'求助'},
		success: (res) => {if(res.data.code == 0){uni.setStorageSync('dataHelp',res.data.data)}}})
		
		
	uni.request({url:'http://116.62.176.59:8080/xqlgq/event/search',method:'POST',header:{'token':userData.token},data:{'recommendation':true,'pageSize':10,'pageNum':1},success:(res)=>{HotTopic.value = res.data.data.list}})
	
	uni.request({url:'http://116.62.176.59:8080/xqlgq/event/search',method:'POST',header:{'token':userData.token,},data:{'recommendation':true,'pageSize':10,'pageNum':1,'locationX':userData.locationX,'locationY':userData.locationY,'range':5},
		success:(res)=>{AreaTopic.value = res.data.data.list;console.log(AreaTopic.value)}})
	
	uni.request({url:'http://116.62.176.59:8080/xqlgq/user/follow/event',method:'GET',header:{'token':userData.token},
		success: (res) => 
		{
			if(res.data.code == 0){
			console.log(res.data.data)
			uni.setStorageSync('dataFriend',res.data.data)
			}
			},
			fail: (err) => {
				console.log(err)
			}
			})

uni.connectSocket({
 'url': 'ws://116.62.176.59:8080/websocket/' + userData.id,
  fail: (err) => {
  	console.log(err)
  },
  success(res) {
	console.log(res)
  }
});
uni.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！'); 
  console.log(JSON.stringify(res))
  if(JSON.stringify(res)=="{}")
  {
	  uni.setStorageSync('UserNotice',"")
  }
  else{
	   uni.setStorageSync('UserNotice',res.NewNotice)
  }
});
uni.onSocketMessage(function (res) {
  let notice = JSON.parse(res.data) 
  console.log(notice)
  if(notice.newNotice != 0)
  {
	  
	  plus.push.clear();

	  showNotify({ type: 'success', message: notice.name + "等人给您发了" + notice.newNotice + "条新消息~" })
	  uni.setTabBarBadge({ //显示数字  
	  	index: 3, //tabbar下标
	  	text:notice.newNotice 
	  })
	uni.setStorageSync('UserNotice',notice.newNotice )
	
//--------------------------------------------------------------------------------------------------
	let content = notice.name + "等人给您发了" + notice.newNotice + "条新消息~"
	let options = {
		"cover" : false,
		"when" : new Date(),
		'title' : "通知消息"
	};
	let body = {
		'id' : '123',
		'key': "1231313"
	}
	let payload = JSON.stringify(body);
	plus.push.createMessage(content, payload, options);
//----------------------------------------------------------------------------------------------------

const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
innerAudioContext.src = "../../static/notice.wav";   //铃声文件的路径
innerAudioContext.onPlay(() => {
	console.log('开始播放');
});
innerAudioContext.onError((res) => {
	console.log(res.errMsg);
	console.log(res.errCode);
});



//---------------------------------------------------------------------------------------------------
	
	
  }
});










plus.push.addEventListener( "receive", function(msg){
	uni.navigateTo({
		url:"/pages/Notice/Notice"
	})
	
}, false);






})






















const Message=(num)=>{uni.setTabBarBadge({index:3,text:num})}
const removeMessage=(num)=>{uni.removeTabBarBadge({index:3})}
const tip =(words)=>{uni.showToast({title: words,icon: 'none',duration: 2000})}	
const changeToMap=()=>{Green1.value = "background-color: #3da586;";Green2.value = "";IfShowMap.value = true;}
const changeToRelationship=()=>{Green2.value= "background-color: #3da586;";Green1.value = "";IfShowMap.value = false;}
const GoIndexMap = ()=>{uni.navigateTo({url:"/pages/indexMap/friendCricle/friendCricle",animationType:'fade-in'})}
const GoStudy = ()=>{uni.navigateTo({url:'/pages/indexMap/Study',animationType:'fade-in'})}
const GoSport = ()=>{uni.navigateTo({url:'/pages/indexMap/Sport',animationType:'fade-in'})}
const GoVolunteer = ()=>{uni.navigateTo({url:'/pages/indexMap/Volunteer',animationType:'fade-in'})}
const GoFood = ()=>{uni.navigateTo({url:'/pages/indexMap/Food',animationType:'fade-in'})}
const GoGame = ()=>{uni.navigateTo({url:'/pages/indexMap/Game',animationType:'fade-in'})}
const scan=()=>{uni.scanCode({success: (res) => {console.log(res);uni.navigateTo({url:res.result})}})}
const GoEvent = (id)=>{uni.navigateTo({url:'/pages/titleContent/titleContent?id='+id})}  
const GoSearch = ()=>{uni.navigateTo({url:'/pages/search/search'})}

const Gorelationship = ()=>{
	uni.navigateTo({
		url:"/pages/indexMap/relationship/relationship"
	})
}



</script>

<style lang="scss">

.主控件布局{
    height: 400rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50rpx;
}
.主控件盒子{
    height: 400rpx;
    width: 400rpx;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

}
.波纹1{
    height: 400rpx;
    width: 400rpx;
    position: absolute;
    opacity: 0.6;
    animation: animate 6.5s linear infinite;
	border-radius: 50%;
	background-color: #5be4db;
	animation: bigger1 5s ease infinite;
	opacity: 0.2;
}
@keyframes bigger1{
	0%{transform: scale(1);}
	100%{transform: scale(1.8);opacity: 0;}
}
.波纹2{
    height: 400rpx;
    width: 400rpx;
    position: absolute;
    opacity: 0.6;
    animation: animate 6.5s linear infinite;
	border-radius: 50%;
	background-color: #5be4db;
	animation: bigger2 5s ease infinite;
	opacity: 0.4;
}
@keyframes bigger2{
	10%{transform: scale(1);}
	100%{transform: scale(1.58);opacity: 0;}
}
.波纹3{
    height: 400rpx;
    width: 400rpx;
    position: absolute;
    opacity: 0.6;
    animation: animate 6.5s linear infinite;
	border-radius: 50%;
	background-color: #5be4db;
	animation: bigger3 5s ease infinite;
	opacity: 0.5;
}
@keyframes bigger3{
	10%{transform: scale(1) ;}
	100%{transform: scale(1.35);opacity: 0;}
}
.控件盒子{
    width: 360rpx;
    height: 360rpx;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
	flex-direction: column;
}
.控件背景{
    height: 260rpx;
    width: 260rpx;
	animation: updown 5s linear alternate infinite;
}
@keyframes updown
{
	0%{transform: translateY(0rpx);}
	33%{transform: translateY(10rpx);}
	100%{transform: translateY(-10rpx);}
}
.基座纯白背景{
	width: 400rpx;
	height: 400rpx;
	background-color: #ffffff;
	border-radius: 50%;
	box-shadow: 5rpx 5rpx 5rpx #5be4db, -5rpx -5rpx 5rpx #5be4db;
	position: absolute;
	animation: round1 5s linear alternate infinite;
}
@keyframes round1
{
	0%
	{
		transform: rotate(0deg);
	}
	100%
	{
		transform: rotate(360deg);
	}
}
.进入地图文字{
	position: absolute;
	font-weight: bold;
	color: #ffffff;
	font-size: 60rpx;
	animation: updown 5s ease alternate infinite;
	text-shadow: 5rpx 5rpx 5rpx #5be4db;
	padding-left: 10rpx;
}
.首页文字标题样式{
	color: #343434;
	font-weight: bold;
	font-size: 30rpx;
	margin-right: 30rpx;
	display: flex;
	flex-direction: column;
	margin-bottom: 4rpx;
}
.首页头布局{
	margin-bottom: 80rpx;
}
.分割线布局{
	margin-top: 60rpx;
	height: 60rpx;
	padding-left: 40rpx;
	color: #5a5a5a;
	font-size: 30rpx;
	font-weight: 600;
}
.横向滚动{
	width: 100%;
	padding-top: 10rpx;
}
.专题盒子布局{
	width: 280rpx;
	height: 350rpx;
	background-color: #ffffff;
	margin: 10rpx;
	border-radius: 20rpx;
	margin-top:0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.热门板块{
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-left:17.5rpx;
}
.热门布局{
	background-color: #F1F5F7;
	border-radius: 20rpx;
	width: 90%;
	padding: 18rpx;
	margin-bottom: 10rpx;
}
 

.主地图布局{
    height: 400rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50rpx;
}
.主地图盒子{
    height: 400rpx;
    width: 400rpx;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.圈圈{
    height: 400rpx;
    width: 400rpx;
    position: absolute;
    border: 5rpx solid #3fb8b8;
    opacity: 0.6;
    animation: animate 6.5s linear infinite;
}
.圈圈:nth-child(1)
{
    border-radius: 55% 45% 29% 71% / 59% 30% 70% 41% 
}
.圈圈:nth-child(2)
{
    animation-direction: reverse;
    border-radius: 41% 59% 40% 60% / 65% 66% 34% 35%;
}
.圈圈:nth-child(3)
{
    animation-duration: 4.5s;
    border-radius: 45% 55% 29% 71% / 67% 30% 70% 33% 
}
@keyframes animate
{
    0%
    {
        transform: rotate(0deg);
    }
    100%
    {
        transform: rotate(360deg);
    }
}
.地图盒子{
    width: 360rpx;
    height: 360rpx;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
	animation: updown 10s linear alternate infinite;
}
.地图背景{
    height: 260rpx;
    width: 260rpx;
	animation: updown 10s linear alternate infinite;
}
</style>