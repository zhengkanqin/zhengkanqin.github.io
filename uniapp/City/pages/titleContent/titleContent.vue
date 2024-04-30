<template>
	<wd-notify>
		<view style="display: flex;flex-direction: column;">
		<view style="height: 80rpx;width: 100%;"></view>
		<view style="font-size: 26rpx;margin-bottom: 10rpx;letter-spacing: 1rpx;font-weight: bold;">您有新的消息</view>
		</view>
	</wd-notify>
	<wd-popup v-model="ifshowCode" custom-style="border-radius:20rpx;padding:20rpx;display:flex;justify-content: center; align-items: center;flex-direction: column;margin:10rpx;margin-bottom:0" @close="handleClose">
		<uv-qrcode auto=true size="380rpx" :options="options1" ref="uvqrcode2" :value="'/pages/titleContent/titleContent?id='+TitleId"></uv-qrcode>
		<view style="font-size: 30rpx;margin:10rpx">请在城屿App内扫码打开</view>
		</wd-popup>
	<scroll-view v-if="true" class = "content-background 文章背景 相对布局" scroll-y=true >	
		<view class="手机高"></view>
	

		<wd-row style="margin:40rpx;margin-top: 20rpx;margin-bottom: 0rpx;">
			<wd-col class="横向布局" :span="12">
				<wd-icon name="thin-arrow-left" size="36rpx" color="#515151" @click="Back"></wd-icon>
			</wd-col>
		<wd-col :span="12">
			<!-- 下面的view放参与者的头像 -->
			<view class="右侧布局" >
			<image class="参与者头像" :src='TitleWriterImg' @click="GoUserShow(TitleWriterID)"></image>
			</view>
		</wd-col>
		</wd-row>
		
	
		<!-- 第一层：头部区结束 -->
		
	
		<view class="横向布局 文章标题布局">
			<view class = "文章标题">{{TitleName}}</view>
		</view>
		<view class="横向布局 小信息布局">
			<view style="margin-right:10rpx;color:#939393;">{{TitleTime}}</view>
			<view style="margin-right:10rpx;color:#939393;"></view>
			<view style="margin-right:10rpx;color:#939393;">
				<wd-icon name="view" size="20rpx"></wd-icon> {{TitleView}}</view>
				<view style="margin-right:10rpx;color:#939393;"></view>
				<view style="margin-right:10rpx;color:#939393;">{{TitleWriter}}</view>
		</view>
		<view class="分割线"></view>
		
		
		<!-- 第二层：标题区结束 -->
		
		
		<view class="内容背景">
			 
			<view v-if='ifShowText' class ="内容文本">{{TextContent}}</view>
			
			<view v-if='ifShowImg'>
				<view class="内容图片列表" v-for="(item, index) in ImageList">
				  <image class="内容图片" mode="widthFix" :src="'http://116.62.176.59:8080/xqlgq/files/' + item" @click="Preview(item,ImageList)"></image>
				</view>
			</view>
			
			<view v-if='ifShowTime' class = "倒计时布局">
				<view class="倒计时背景">
					<view class="倒计时文本">倒计时：</view>
					<wd-count-down :time="time"><template #default="{ current }"><view class="横向布局"><span class="custom-count-down">{{ current.days }}</span><span class="custom-count-down-colon">天</span><span class="custom-count-down">{{ current.hours }}</span><span class="custom-count-down-colon">:</span><span class="custom-count-down">{{ current.minutes }}</span><span class="custom-count-down-colon">:</span><span class="custom-count-down">{{ current.seconds }}</span></view></template></wd-count-down>
				</view>
			</view>
			
			<view v-if='ifShowAttend' class = "参加者布局">
				<view class="参加者背景">
					<view class = "参加活动人数">活动人员({{attendNow}}/{{AttendLimit}})</view>
					<view class="参加者列表布局">
					<view v-for="Attender in AttendList">
						<image class="参加者头像" :src="'http://116.62.176.59:8080/xqlgq/files/' + Attender.userImage" @click="GoUserShow(Attender.id)"></image>
					</view></view>
					<wd-button block size="large" style="margin: 50rpx;" @click="DoAttend">{{AttendText}}</wd-button>
				</view>
			</view>
			
			<view class="横向布局" style="margin:40rpx;margin-left:50rpx;color: #5e5e5e;font-size: 34rpx;"><wd-icon style="margin-right: 10rpx;" name="format-horizontal-align-bottom" size="28px"></wd-icon>评论区</view>
			
			
			<view v-for="Commit in CommitContent">
			<view class="评论区列表背景">
				<view class="评论区列表">
					
					
					<view class="评论区头像姓名布局 横向布局">
						<image @click="GoUserShow(Commit.publisher.id)" class="评论区头像背景" :src="'http://116.62.176.59:8080/xqlgq/files/' + Commit.publisher.userImage"></image>
						<view class="评论区姓名">
						<view>{{Commit.publisher.username}}</view>
						<view class="横向布局">
							<view class="小文本 用户ID">id:{{Commit.publisher.id}}</view>
							<view class="小文本">{{Commit.publisher.city}}</view>
							<view class="小文本">{{Commit.commentTime[0]}}-{{Commit.commentTime[1]}}-{{Commit.commentTime[2]}} {{Commit.commentTime[3]}}-{{Commit.commentTime[4]}}-{{Commit.commentTime[5]}}</view>
						</view>
						</view>
					</view>
					
					<view class="评论区内容布局">
						<view class="评论区内容">
							<text class="评论区文字">{{Commit.content}}</text>
						</view>
					</view>
					
					<view class="横向布局 评论图片列表布局">
						<view v-for="(CImg ,index) in stringToArray(Commit.images)">
							<image class="评论区域图片" :src="'http://116.62.176.59:8080/xqlgq/files/' + CImg" mode="aspectFill" @click="Preview(CImg,Commit.images)"></image>
						</view>
					</view> 

					
					<view class="评论区操作内容 横向布局">
						<image class="评论区图标" :src="IfCommitLike(Commit.likeAlready)" @click="DoCommitLike(Commit.commentId)"></image>
						<view class="评论区点赞数量">{{Commit.like}}</view>
						<image class="评论区图标" src="../../static/buttomSrc/Recommit.png" @click="UpReplayBox(Commit.commentId)"></image>
					</view>
					
				
				<view class="评论区回复背景">
					<view v-for="Reply in Commit.commentList" style="padding: 5rpx;">
					<view class="回复内容" style="width: 540rpx;height: auto;word-break: break-all;float:left;"> <span @click="GoUserShow(Reply.publisher.id)" style="color: #7e9d9d; font-size:26rpx ">{{Reply.publisher.username}}</span>:{{Reply.content}}</view>
				    </view>
				</view>
				
					
				</view>
			</view>
			</view>
			  
			
			
		<view style="height: 250rpx;width: 100%;text-align: center;color:#939393;font-size:25rpx;display: flex;justify-content: center;align-items: center;">找不到更多内容~快来发表你的看法吧！</view>
		</view>
	
	
		<!-- 第三层：内容区结束 -->
	
		


	</scroll-view>
	<view class="相对布局 右下角布局">
		<view class="点赞布局" @click="DoCollection">
			<image class="点赞图片" :src='TitleCollectionImg'></image>
			<text>{{TitleCollection}}</text>
		</view>
		<view class="点赞布局" @click="DoLike">
			<image class="点赞图片" :src='TitleLikeImg'></image>
			<text>{{TitleLike}}</text>
		</view>
		    <image class="评论图片" style="margin-right:10rpx;" src="../../static/buttomSrc/eventCode.png" @click="GoEventCodeShow"></image>
			<image class="评论图片" src="../../static/buttomSrc/comment.png" @click="DoCommit"></image>
	</view>
	
	
	
	<wd-popup v-model="showBottom" custom-style="padding: 30px 40px;border-radius: 25rpx 25rpx 0 0;" @close="handleClose" position="bottom">
		<view class="全屏">
			<view style="margin-bottom: 20rpx;">发表评论：</view>
			<wd-upload class = "upload" limit=9 multiple  :file-list="file" action="http://116.62.176.59:8080/xqlgq/files/upload" @change="handleChange1"></wd-upload>
			<wd-textarea v-model="MyCommitContent" placeholder="请友善发言喔~"  size="large" style="height: 200rpx;" placeholderStyle="font-size:30rpx;margin-top:30rpx background-color:#c3c3c3"/>
			<wd-button block size="large" @click="upload">发表</wd-button>
		</view>
	</wd-popup>
	
	<wd-popup v-model="showReplay" custom-style="padding: 30px 40px;border-radius: 25rpx 25rpx 0 0;" @close="handleClose" position="bottom">
		<view class="全屏">
			<view style="margin-bottom: 20rpx;">回复第{{MyReplayID}}条评论：</view>
			<wd-textarea v-model="MyReplayComment" placeholder="请友善发言喔~"  size="large" style="height: 200rpx;" placeholderStyle="font-size:30rpx;margin-top:30rpx background-color:#c3c3c3"/>
			<wd-button block size="large" @click="DoReplay">发表</wd-button>
		</view>
	</wd-popup>
	
	
	
</template> 

<script setup>
	import { useNotify } from '@/uni_modules/wot-design-uni'
	const { showNotify, closeNotify } = useNotify()
import {ref} from 'vue'
import {onLoad} from '@dcloudio/uni-app'
import QRCodeStyleRound from './uqrcode.plugin.round.es.js';
let ifShowImg = ref(true)
let ifShowText = ref(true)
let ifShowTime = ref(false)
let ifShowAttend = ref(false)
let showBottom = ref(false)
let showReplay = ref(false)
let ifshowCode =ref(false)


let file =ref([])

let TitleId = ref("")
let TitleName = ref("")//文章名字
let TitleTime = ref("")//文章发布时间
let TitleWriter = ref("")//文章作者名字
let TitleWriterID = ref("")//文章作者id
let TitleWriterImg = ref("")//文章作者头像
let TitleLocationX = ref("")//文章经度
let TitleLocationY = ref("")//文章纬度

let TitleLike = ref(0)//点赞数量
let TitleLikeImg = ref("../../static/buttomSrc/BeforeLike.png")//点赞图片
let TitleCollection = ref(0)//收藏数量
let TitleCollectionImg = ref("../../static/buttomSrc/BeforeCollection.png")//收藏图片
let AttendText = ref("参加/申请")
let AttendLimit = ref("")
let attendNow =ref("")
let TitleView = ref(0)

let TextContent = ref("")//文章内容
let ImageList = ref([])//图片列表
let time = ref(6000)//文章截止时间
let AttendList = ref([])//参与者列表

let MyCommitContent = ref("")//我自己发表的评论内容
let MyReplayID =ref("")
let MyReplayComment = ref("")
let MyCommitImgList = ref(null)//每次评论要删除图片
let CommitContent = ref([])//评论区JSON 

let fileList = ref([])
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
let token = userData.token
const UpReplayBox=(id)=>{
	showReplay.value = true
	MyReplayID.value = id
}


let options1= ref({
	margin: 10,
	useDynamicSize: false,
	style: 'round',
	foregroundImageSrc:TitleWriterImg,
	foregroundImagePadding:5,
	 positionAdjustBackgroundColor:"#dded4d",
	 positionProbeForegroundColor:"#4fc19b",
	 darkBlockColor:"#3f6dc1",
	 timingForegroundColor:"#4fc19b",
     positionAdjustForegroundColor:"#26adc1",
})




const ChangeLike =()=>{if(TitleLikeImg.value == "../../static/buttomSrc/BeforeLike.png"){TitleLikeImg.value = "../../static/buttomSrc/Like.png"}else{TitleLikeImg.value = "../../static/buttomSrc/BeforeLike.png"}}
const ChangeCollection =()=>{if(TitleCollectionImg.value =="../../static/buttomSrc/BeforeCollection.png"){TitleCollectionImg.value ="../../static/buttomSrc/Collection.png"}else{TitleCollectionImg.value ="../../static/buttomSrc/BeforeCollection.png"}}
const ChangeAttend =()=>{if(AttendText.value=="参加/申请"){AttendText.value="已参加"}else{AttendText.value="参加/申请"}}
const DoLike = ()=>{uni.request({url:"http://116.62.176.59:8080/xqlgq/event/like/" + TitleId.value,method:'GET',header:{'token':token},success: (res) => {if(res.data.code ==0){ChangeLike();GetInformation();}else{tip(res.data.msg)}},fail: (err) => {tip(err.errMsg)}})}
const DoCollection = ()=>{uni.request({url:"http://116.62.176.59:8080/xqlgq/event/collect/" + TitleId.value,method:'GET',header:{'token':token},success: (res) => {if(res.data.code ==0){ChangeCollection();GetInformation();}else{tip(res.data.msg)}},fail: (err) => {tip(err.errMsg)}})}
const DoAttend = ()=>{uni.request({url:"http://116.62.176.59:8080/xqlgq/event/participant/" + TitleId.value,method:'GET',header:{'token':token},success: (res) => {if(res.data.code ==0){ChangeAttend();GetInformation();}else{tip(res.data.msg)}},fail: (err) => {tip(err.errMsg)}})}
const DoCommit=()=>{showBottom.value=true}
const IfCommitLike=(bool)=>{if(bool){return "../../static/buttomSrc/CommitLike.png"}else{return "../../static/buttomSrc/BeforeCommitLike.png"}}
const Back = ()=>{uni.navigateBack()}
const tip =(words)=>{uni.showToast({title: words,icon: 'none',duration: 2000})}
function stringToArray(str) {try {return JSON.parse(str);} catch (error) {return [];}}
const GoUserShow = (id)=>{uni.navigateTo({url:'/pages/UserShow/UserShow?id=' + id,animationType:'fade-in'})}
onLoad ((param) =>{TitleId.value = param.id ;GetInformation();console.log(param.id)});
const handleChange1 = (fileList)=> {MyCommitImgList.value = fileList}
const GetInformation=()=>{
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/event/info/' + TitleId.value,
		method:'GET',
		header:{
			'token':token
		},
		success: (res) => {
			if(res.data.code=="0"){
				console.log(res.data)
				let data = res.data.data
				if(data.deadline!=null){ifShowTime.value=true}
				if(data.participantLimit!=null){ifShowAttend.value=true}
				TitleName.value = data.title
				TitleTime.value = data.timestamp[0] + "-" + data.timestamp[1] + "-" + data.timestamp[2] + "  " + data.timestamp[3] + ":" + data.timestamp[4] + ":" + data.timestamp[5]
				TitleWriter.value = data.publisher.username
				TitleWriterID.value = data.publisher.id
				TitleWriterImg.value = "http://116.62.176.59:8080/xqlgq/files/" + data.publisher.userImage
				TitleLike.value = data.like
				TitleCollection.value = data.collect
				console.log(TitleCollection.value)
				if(data.likeAlready){TitleLikeImg.value = "../../static/buttomSrc/Like.png"}
				if(data.collectAlready){TitleCollectionImg.value = "../../static/buttomSrc/Collection.png"}
				if(data.participantAlready){AttendText.value = "已参加"}
				TextContent.value = data.content
				ImageList.value = stringToArray(data.images)
				time.value = data.cutDown
				AttendList.value = data.participantList
				AttendLimit.value = data.participantLimit
				attendNow.value = data.participant
				CommitContent.value = data.commentList//需要修改
				TitleView.value = data.view
				
				console.log(CommitContent.value)
			}else{tip(res.data.msg)}
		}, 
		fail: (err) => {
			tip(err.errMsg)
		}
	})
}

const DoCommitLike = (CommitID)=>{
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/event/comment/like/'+CommitID,
		header:{
			'token':token
		},
		success: (res) => {
			if(res.data.code == 0 )
			{
				GetInformation()
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

function extractDataFields(jsonInput) {
  if (typeof jsonInput === 'object' && jsonInput !== null) {
    const dataFields = [];
    for (const item of jsonInput.fileList) {
      if (item.response) {
        try {
          const response = JSON.parse(item.response);
          if (response.code && response.data) {
            dataFields.push(response.data);
          }
        } catch (e) {
          console.error('解析response时发生错误:', e);
        }
      }
    }
    return dataFields;
  } else {
    throw new Error('输入的JSON对象无效');
  }
}

const upload = ()=>{
	let IMGLIST = null
	if(MyCommitImgList.value != null)
	{
    IMGLIST = MyCommitImgList.value = JSON.stringify(extractDataFields(MyCommitImgList.value)).replace(/"/g, '')
	}
	let TEXT = MyCommitContent.value
	MyCommitImgList.value = null
	MyCommitContent.value = ""
	file.value = []
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/event/comment/add',
		method:'POST',
		header:{
			'token':token
		},
		data:{
			'eventId':TitleId.value,
			'replyId':null,
			'content':TEXT,
			'images':IMGLIST
		},
		success: (res) => {
			if(res.data.code == 0)
			{
				GetInformation()
				showBottom.value = false
			}
			else{
				tip(res.data.msg)
			}
		},
		fail: (err) => {
			tip(err.errMsg)
		}
	})

} 

const DoReplay = ()=>{
	uni.request({
		url:'http://116.62.176.59:8080/xqlgq/event/comment/add',
		method:'POST',
		header:{
			'token':token
		},
		data:{
			'eventId':TitleId.value,
			'replyId':MyReplayID.value,
			'content':MyReplayComment.value,
			'images':null
		},
		success: (res) => {
			if(res.data.code == 0)
			{
				GetInformation()
				showReplay.value = false
			}
			else{
				tip(res.data.msg)
			}
		},
		fail: (err) => {
			tip(err.errMsg)
		}
	})
	MyReplayID.value = ""
	MyReplayComment.value = "" 
}

const Preview=(current,list)=>{
	if(!(list instanceof Array))
	{
		list = stringToArray(list)
	}
	current = "http://116.62.176.59:8080/xqlgq/files/" +current
	list = list.map(item => `http://116.62.176.59:8080/xqlgq/files/${item}`)
	uni.previewImage({
		'current':current,
		'urls':list,
		fail: (err) => {
			tip(err)
		}
	})
}


const GoEventCodeShow = ()=>{
	ifshowCode.value=true
}







</script> 













<style>
.相对布局{position: absolute;}
.右下角布局{bottom: 0;right: 0;margin: 30rpx;margin-bottom: 10rpx;display: flex;flex-direction: row-reverse;width: 100%;}
.文章背景{width: 100%;height: 100%;}
.黑背景{background-color: #707070;border: 3rpx solid #ffc05a;box-sizing: border-box;}
.手机高{height: 80rpx;width: 100%;}
.参与者头像{background-color: #F1F5F7;width: 80rpx;height:80rpx;border-radius: 50%;margin-right:10rpx;box-shadow: 2rpx 0rpx 2rpx #717171;}
.文章标题布局{width: 100%;margin-top: 20rpx;color: #575757;font-size: 45rpx;letter-spacing: 3rpx;font-weight: 600;padding:50rpx;padding-top:20rpx;padding-bottom:0;}
.文章标题{margin:80rpx;margin-top:0;margin-left:0;margin-bottom:5rpx;text-shadow:1rpx 1rpx 1rpx #b3b3b3;}
.小信息布局{margin-left:50rpx;font-size:24rpx;font-family: 'Courier New', Courier, monospace;}
.分割线{background-color: #c0c0c0; width: 70rpx; height: 12rpx; border-radius: 6rpx; margin:55rpx; margin-top: 10rpx;box-shadow: 0rpx 2rpx 2rpx #c3c3c3;}

.内容背景{width:100%;height:400rpx}
.内容文本{color: #707070;font-size: 30rpx;line-height: 50rpx;margin: 50rpx;margin-bottom:0;}
.内容图片列表{display: flex;flex-direction: column;justify-content: center;align-items: center;margin:50rpx;margin-bottom: 0;}
.内容图片{width: 100%;border-radius: 30rpx;background-color: #F1F5F7;margin-bottom: 30rpx;box-shadow: 5rpx 5rpx 5rpx #a9a9a9, -2rpx -2rpx 2rpx #dadada;}

.custom-count-down {display:inline-block;text-align:center;display:flex;justify-content:center;align-items: center;flex-direction:row;width:70rpx;height:70rpx;color: #fff;font-size:40rpx;background-color: #91a9a6;border-radius: 12px;box-shadow: 4rpx 4rpx 4rpx #c0c0c0;}
.custom-count-down-colon {display: inline-block;margin: 0 4px;color: #91a9a6;margin: 15rpx;font-size: 30rpx;font-weight: bold;}
.倒计时布局{width: 100%;display: flex;justify-content: center;align-items: center;}
.倒计时背景{width: 100%;margin: 50rpx;height: 150rpx;border-radius: 30rpx;box-shadow: 5rpx 5rpx 5rpx #a9a9a9, -4rpx -3rpx 4rpx #e6e6e6;display: flex;justify-content: center;align-items: center;margin-bottom: 0;}
.倒计时文本{margin-right: 0rpx;color: #707070;font-weight: bold;font-size: 40rpx;}
 
.参加者布局{width: 100%;display: flex;justify-content: center;align-items: center;margin-bottom: 20rpx;}
.参加者背景{width: 100%;margin: 50rpx;margin-top:20rpx;margin-bottom:0rpx;border-radius: 30rpx;box-shadow: 5rpx 5rpx 5rpx #a9a9a9, -4rpx -3rpx 4rpx #e6e6e6;display: flex;justify-content: center;align-items:center;flex-direction: column;}
.参加者列表布局{
	width: 100%;margin: 100rpx;margin-top: 50rpx;margin-bottom: 20rpx;
	display: flex;justify-content: center;flex-wrap: wrap; align-items: center;flex-direction: row;}
.参加按钮{margin:50rpx;background-color: #91a9a6;padidng:30rpx;padding-left: 40rpx;padding-right: 40rpx;}
.参加者头像{background-color: #F1F5F7;width: 90rpx;height: 90rpx;border-radius: 50%;margin:10rpx;box-shadow: 2rpx 0rpx 2rpx #717171;}
.参加活动人数{margin-top: 30rpx;color: #888888;font-size: 30rpx;}

.帮助布局{width: 100%;display: flex;justify-content: center;align-items: center;}
.帮助背景{width: 100%;margin: 50rpx;height: 150rpx;border-radius: 30rpx;box-shadow: 5rpx 5rpx 5rpx #a9a9a9, -4rpx -3rpx 4rpx #e6e6e6;display: flex;justify-content: center;align-items: center;margin-bottom: 0;}

.点赞布局{padding: 8rpx;padding-left: 5rpx;padding-right: 30rpx;background-color: #ffffff;display: flex;align-items: center;border-radius: 50rpx;font-size: 30rpx;color: #434343;box-shadow: 3rpx 3rpx 3rpx #cccccc;margin-bottom: 15rpx;font-weight: bold;font-family: 'Courier New', Courier, monospace;}
.点赞图片{height: 30rpx;width: 30rpx;background-color: #ffffff;margin-right: 20rpx;padding: 10rpx;border-radius: 50%;box-shadow: 3rpx 3rpx 3rpx #b6b6b6;}

.评论图片{height: 35rpx;width: 35rpx;background-color: #ffffff;padding: 15rpx;border-radius: 50%;box-shadow: 3rpx 3rpx 3rpx #b6b6b6;margin-right: 10rpx;}

.评论区列表背景{width: 100%;display: flex;flex-direction: column;align-items: center;}
.评论区列表{width: 100%;background-color: #f5f8f9;padding: 10rpx;border:  0.5rpx solid #c9c9c9;}
.评论区头像姓名布局{width: 100%;padding: 30rpx;}
.评论区头像背景{width: 70rpx;height: 70rpx;border-radius: 50%;background-color: #F1F5F7;}
.评论区姓名{margin-left: 30rpx;font-size: 26rpx;color: #707070;display: flex;flex-direction: column;}
.评论区内容布局{width: 100%;}
.评论区内容{margin: 130rpx;margin-top:0rpx;margin-bottom:10rpx;margin-right: 40rpx;}
.评论区文字{word-spacing: 1.5rpx;font-size: 28rpx;color: #575757;line-height: 43rpx;}
.评论区操作内容{width: 100%;height: 50rpx;padding-left: 130rpx;margin-bottom: 10rpx;margin-top:10rpx;}
.评论区图标{height: 35rpx;width: 35rpx;margin-right: 20rpx;}
.评论区点赞数量{font: 30rpx;margin-right: 30rpx;font-family: 'Courier New', Courier, monospace;margin-left: -15rpx;}
.小文本{
	font-size: 20rpx;
	margin:5rpx;
	margin-right: 10rpx;
	margin-left: 0;
}
.用户ID{
	padding: 2rpx;
	padding-left: 10rpx;
	padding-right: 10rpx;
	background-color: #91a9a6;
	border-radius: 10rpx;
	color: #F1F5F7;
}
.评论图片列表布局{
	width: 100%;
	background-color: #f5f8f9;
	padding-left: 130rpx;
	padding-right: 50rpx;
	display: flex;
	flex-wrap: wrap;
}
.评论区域图片{
	height: 186rpx;
	width: 186rpx;
	margin-right: 4rpx;
	margin-bottom: 4rpx;
	border-radius: 10rpx;
	background-color: #e8eced;
}


.评论区回复背景{
	width: 550rpx;
	background-color: #edf0f1;
	margin-right:50rpx;
	display: flex;
	flex-direction: column;
	border-radius: 10rpx;
	margin-left:130rpx;
}
.回复内容{
	color: #888888;
	font-size: 26rpx;
}
</style>
