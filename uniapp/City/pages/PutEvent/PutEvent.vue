<template>
	<view class = "content-background 全屏">	
		<view class = "横向布局">
			<wd-icon @click="Back" class = "TitileFont" name="thin-arrow-left" size="30rpx" />
			<view class = "ICON-TitileFont">Upload Action</view>
		</view>
			<scroll-view style="height:100%;width:100%;padding-bottom: 100rpx;" scroll-y=true>
				
			<wd-input class="标题输入框" type="text" :maxlength="25" show-word-limit v-model="MyEventTitle" placeholder="请输入标题" @change="handleChange" />
			<wd-textarea v-model="MyEventTextContent" auto-height :maxlength="1500" show-word-limit clearable placeholder="请填写内容" style="margin: 20rpx;min-height: 200rpx;padding: 10rpx;" />
			
			<wd-upload class = "upload" limit=9 multiple  :file-list="file" action="http://116.62.176.59:8080/xqlgq/files/upload" @change="handleChange1"></wd-upload>
			
			<wd-collapse v-model="collapse">
			  <wd-collapse-item class="标签" title="组队活动" name="item1">
				  <wd-row>
						<wd-col class="灰色字" :span="12">开启组队：</wd-col>
						<wd-col class="灰色字 右侧布局" :span="12">
							<wd-switch v-model="MyEventIfTeam" active-color="#6ce68f" inactive-color="#fd633c" />
						</wd-col>
				  </wd-row>
				  <wd-row>
						<wd-col class="灰色字" :span="12">活动人数：</wd-col>
						<wd-col class="灰色字 右侧布局" :span="12">
							<wd-input-number max="60" v-model="MyEventTeamMax" @change="handleChange" input-width="70px" />
						</wd-col>
				  </wd-row>
				  
				  
				  
			  </wd-collapse-item>
			  <wd-collapse-item  class="标签" title="限定时间" name="item2">
				  <wd-datetime-picker minDate="2024" class="时间框" v-model="MyEventDDL" type="datetime" label="截止日期:" @confirm="handleConfirm" />
				  
				  
				  
			  </wd-collapse-item>
			  <wd-collapse-item class="标签" title="分类/TAG" name="item3">
			  				  
			  	<wd-picker class = "时间框"  :columns="columns" label="分类" v-model="MyEventType" @confirm="handleConfirm" />
				<view style="flex-wrap: wrap;padding: 20rpx;" class="横向布局">
					<wd-icon name="view" size="20rpx"></wd-icon>
					<view @click="ShowTagSay">TAG：</view>

					<view v-for="(tag,index) in MyEventTag">
						<view @longpress="removeElementAtIndex(MyEventTag,index)" style="margin-right: 15rpx;padding: 10rpx;background-color: #7eb1b2; border-radius: 10rpx;color: aliceblue;font-size: 20rpx;">{{tag}}</view>
					</view>
					<view>
						<input class="inputTag" v-model="tagtext" style="width:100rpx; height:48rpx;background-color: #7eb1b2; border-radius: 10rpx;color: aliceblue; opacity: 0.7;text-align: center;font-weight: bold;" placeholder-style="color:#ffffff ;font-size:28rpx" placeholder="+" @confirm="TagCnfirm" />                                                                           
					</view>
			  	</view>		  
			  				  
			  </wd-collapse-item>
			  <wd-collapse-item class="标签" title="位置信息" name="item4">
			  	<wd-row class="">
			  		<wd-col class="灰色字" :span="12">当前经纬度：</wd-col>
			  		<wd-col class="灰色字 右侧布局" :span="12">{{locationX}}, {{locationY}}</wd-col>
			  	</wd-row> 		  
			  	<wd-row class="">
			  		<wd-col class="灰色字" :span="12">当前地区：</wd-col>
			  		<wd-col class="灰色字 右侧布局" :span="12">{{cityName}}</wd-col>
			  	</wd-row>		   		  
			  </wd-collapse-item>
			</wd-collapse>
			<wd-button block size=large class="发布按钮" @click="upload" type="success">发布</wd-button>
				
			</scroll-view>
	</view>
</template>

<script setup>
import {ref} from 'vue'
let collapse = ref(['item3'])
let file =ref([])
let fileList = ref([])
let MyEventImgList = ref([])//图片列表
let MyEventTextContent = ref("")//内容列表
let MyEventTitle = ref("")
let MyEventIfTeam = ref(false)
let MyEventTeamMax = ref(null)
let MyEventDDL = ref(null)
let MyEventPay = ref(null)
let MyEventType = ref("普通")
let MyEventTag = ref([])
let userData = JSON.parse(uni.getStorageSync('UserInformation'))
let locationX =ref("")
let locationY =ref("")
let cityName = ref("未知")
let placeXY =ref(",")
let tagtext = ref("")
const columns = ref(['普通', '求助','公益','学术','美食','运动','游戏'])
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
				console.log(res.data)
				cityName.value = res.data.regeocode.addressComponent.city+res.data.regeocode.addressComponent.district+res.data.regeocode.addressComponent.streetNumber.street
		    },
		    fail:  (err)=> {
				tip("请开启定位！")
				uni.navigateBack()
		    }
		})
		//此处结束
	}
});





function removeElementAtIndex(arr, index) {
  // 返回一个新数组，其中删除了指定索引的元素
 arr.splice(index, 1);
}


	
const tip =(words)=>{uni.showToast({title: words,icon: 'none',duration: 2000})}	
const handleChange1 = (fileList)=> {MyEventImgList.value = fileList ;console.log(MyEventImgList.value)}
const Back = ()=>{uni.navigateBack()}
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

const upload=()=>{
	let IMGLIST,TEAMMAX
	if(JSON.stringify(MyEventImgList.value)!="[]")
	{
	IMGLIST = MyEventImgList.value = JSON.stringify(extractDataFields(MyEventImgList.value)).replace(/"/g, '')
	}
	else{
	IMGLIST = []
	}
	if(MyEventIfTeam.value){
		TEAMMAX = MyEventTeamMax.value
	}else{
		TEAMMAX = null
	}
	uni.request({
		url:"http://116.62.176.59:8080/xqlgq/event/add",
		method:"POST",
		header:{
			'token':userData.token
		},
		data:{
			'locationX':locationX.value,
			'locationY':locationY.value,
			'title':MyEventTitle.value,
			'content':MyEventTextContent.value,
			'type':MyEventType.value,
			'images':JSON.stringify(IMGLIST),
			'payment':MyEventPay.value,
			'deadline':MyEventDDL.value,
			'participantLimit':TEAMMAX,
			'tag':JSON.stringify(MyEventTag.value).replace(/"/g, '')
		},
		success: (res) => {
			if(res.data.code == 0)
			{
				tip("发布成功")
				uni.navigateBack()
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



const TagCnfirm = (value)=>{
	console.log(value.detail.value)
	MyEventTag.value.push(value.detail.value)
	tagtext.value = ""
}






</script>

<style>
.黑背景{background-color: black;}
.相对布局{position: absolute;}
.标题输入框{
	padding: 10rpx;
	margin:20rpx;
}
.upload{
	margin:20rpx
}
.发布按钮{
	margin:30rpx;
	margin-top: 60rpx;
	margin-bottom: 100rpx; 
}
.标签{
	padding: 20rpx;
	padd-left:0;
	font-size: 35rpx;
}

</style>
