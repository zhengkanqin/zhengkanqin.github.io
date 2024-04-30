<template>
	<view class="content-background index-background">
		<!-- <index-searcher class = "TopMargin"></index-searcher> -->
		
		
		
		<view class="TopMargin">
			<cover-view class = "searchBox">
				<cover-view class ="SearchContentBox">
					<cover-view class ="searchTab">
						<cover-view class = "searchTypeName" @click="clickSearch">{{TypeArr[0]}}</cover-view>
						<cover-image src = "../../static/buttomSrc/BottomMore.png" class="bottomMore"></cover-image>
					</cover-view>
					<cover-view class ="boundaryLine"></cover-view>
					<cover-view class = "SearchInputBox" @click="clickSearch">{{ searchContent.length > 6 ? searchContent.substring(0, 6) + '...' : searchContent }}</cover-view>
					<cover-view class = "rightSet">
						<cover-image src = "../../static/buttomSrc/RightSet.png" class = "rightSetImg" mode="scaleToFill"></cover-image>
					</cover-view>
				</cover-view>
			</cover-view>
		</view>
		
		<cover-view class="BottomMargin">
			<cover-view class="toolback">
				<cover-image class="toolbackimg" src="../../static/buttomSrc/refresh.png" @click="GetInformation"></cover-image>
			</cover-view>
		</cover-view>
		
		<web-view src="../../hybrid/html/index/index(test).html"></web-view>
		
		
		
	</view>
</template>

<script setup>
	import {ref,onMounted,getCurrentInstance} from 'vue'
	let userData = JSON.parse(uni.getStorageSync('UserInformation'))
	var wv; //计划创建的webview
	let TypeArr = ref(["推荐"])
	let searchContent = ref("附近音乐节")
	
	
	const {ctx} = getCurrentInstance()
	const webjs = (js)=>{
		   	setTimeout(() => {
		   		var currentWebview = ctx.$scope.$getAppWebview();
		   		 wv = currentWebview.children()[0];
		   		 wv.evalJS("dataMap.property =" +js)    
					//wv.evalJS("clearmap()")    
				 //wv.evalJS("dataSimpleMap.property =" +js)      
		   		 }, 2000)}
				 
				 
	const clearmap = ()=>{
		   	setTimeout(() => {
		   		var currentWebview = ctx.$scope.$getAppWebview();
		   		 wv = currentWebview.children()[0];
				 wv.reload()   
		   		 }, 0)}
				 
				 
	onMounted(()=>{
		let a1 = uni.getStorageSync('dataNormal').list.slice(0, 15)
		let a2 = uni.getStorageSync('dataHelp').list.slice(0, 8)
		let a3 = uni.getStorageSync('dataStudy').list.slice(0, 4)
		let a4 = uni.getStorageSync('dataSport').list.slice(0, 4)
		let a5 = uni.getStorageSync('dataVolunteer').list.slice(0, 4)
		let a6 = uni.getStorageSync('dataFood').list.slice(0, 4)
		let a7 = uni.getStorageSync('dataGame').list.slice(0, 4)
		let compex = [...a1, ...a2, ...a3, ...a4, ...a5, ...a6, ...a7];
		MHD_Cluster(compex)
		console.log(compex)
		let compexs = JSON.stringify(compex)
		webjs(compexs)
	})



const MHD = (rowData)=>{
	let count = 0
	let MHD_X = []
	let MHD_Y = []
	rowData.forEach((item)=>{
		MHD_X.push(item.locationX)
		MHD_Y.push(item.locationY)
	})
	for(let i=0;i<MHD_X.length-1;i++)
	{
		for(let j=i+1;j<MHD_X.length;j++)
		{
				if( Math.abs(( MHD_X[i] + MHD_Y[i] - MHD_X[j] - MHD_Y[j] )) < 0.0001 )
				{
					count ++
					console.log(count)
					MHD_X[i] -= 0.0001
					MHD_Y[i] -= 0.0001
					MHD_X[j] += 0.0001 
					MHD_Y[j] += 0.0001
				}
		}
	} 
	console.log("---------------------------------------------------------------------")
	rowData.forEach((item,index)=>{
		item.locationX = MHD_X[index]
		item.locationY = MHD_Y[index]
	})
	
	if(count == 0)
	{
		return rowData
	}
	else{
		MHD(rowData)
	}
}



const MHD_Cluster = (rowData) => {
    let count = 0;
    let MHD_X = [];
    let MHD_Y = [];
    rowData.forEach((item) => {
        MHD_X.push(item.locationX);
        MHD_Y.push(item.locationY);
    });
    for (let i = 0; i < MHD_X.length - 1; i++) {
        for (let j = i + 1; j < MHD_X.length; j++) {
            if (Math.abs(MHD_X[i] + MHD_Y[i] - MHD_X[j] - MHD_Y[j]) < 0.0001) {
                count++;
                const angle = Math.random() * Math.PI * 2; // Generate random angle
                const offset = 0.00005 + Math.random() * 0.00001; // Generate random offset
                const offsetX = Math.cos(angle) * offset;
                const offsetY = Math.sin(angle) * offset;
                MHD_X[i] -= offsetX;
                MHD_Y[i] -= offsetY;
                MHD_X[j] += offsetX;
                MHD_Y[j] += offsetY;
            }
        }
    }
    console.log("---------------------------------------------------------------------");
    rowData.forEach((item, index) => {
        item.locationX = MHD_X[index];
        item.locationY = MHD_Y[index];
    });

    if (count == 0) {
        return rowData;
    } else {
        MHD_Cluster(rowData);
    }
};















uni.$on('update',function(data){
		TypeArr.value = data.type
		searchContent.value = data.content
		wv.evalJS("clearmap()") 
		let list =JSON.parse(uni.getStorageSync('SearchList'))
				clearmap()
		console.log(list)
		MHD_Cluster(list)
		let lists = JSON.stringify(list)
		webjs(lists)
	})

const search123=()=>{
	
}





 const GetInformation=()=>{
	 clearmap()
	 
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
	 	data:{'type':'娱乐组队'},
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
		
	        	let a1 = uni.getStorageSync('dataNormal').list.slice(0, 15)
				
		
				
				let a2 = uni.getStorageSync('dataHelp').list.slice(0, 5)
				let a3 = uni.getStorageSync('dataStudy').list.slice(0, 5)
				let a4 = uni.getStorageSync('dataSport').list.slice(0, 5)
				let a5 = uni.getStorageSync('dataVolunteer').list.slice(0, 5)
				let a6 = uni.getStorageSync('dataFood').list.slice(0, 5)
				let a7 = uni.getStorageSync('dataGame').list.slice(0, 5)
				let compex = [...a1, ...a2, ...a3, ...a4, ...a5, ...a6, ...a7];
				MHD_Cluster(compex)
				let compexs = JSON.stringify(compex)
				webjs(compexs)
 }
const clickSearch = () => {
		uni.navigateTo({
			url:'/pages/search/search'
		})
	}
	
	
	
	
	
	
	
	
	
	
	
	
</script>

<style lang="scss">

	.TopMargin {
		margin-top: 100rpx;
		position: fixed;
		z-index: 100;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.test1{
		background-color: #ff2fac;
		height: 200rpx;
		width: 200rpx;
	}
	
	
	
	
	.searchBox{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	
	}
	.SearchContentBox{
		width: 450rpx;
		height: 100%;
		background-color: #ffffff;
		border-radius: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
	
	
	}
	.searchTab{
		display: flex;
		flex-direction: row;
		height: 100%;
		width: 120rpx;
		align-items: center;
		padding-left: 20px;
		flex-shrink: 0;
	}
	.boundaryLine{
		 width: 3rpx;
		 height: 60%;
		 background-color: #ebebeb;
	}
	.SearchInputBox{
		width:270rpx;
		text-align: center;
		color: #8b8b8b;
		padding-left: 10rpx;
	
		min-height: 40rpx;
	}
	.rightSet{
		width: 50rpx;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.rightSetImg{
		width: 30rpx;
		height: 30rpx;
		margin-right: 8rpx;
	}
	.bottomMore{
		width: 30rpx;
		height: 30rpx;
		margin-right: 5rpx;
		margin-left: 8rpx;
	
	}
	.searchTypeName{
		font-size: 28rpx;
		color: #595959;
	}
	.inputBox{
		width: 0;
	}
	
	.BottomMargin{
		position: fixed;
		bottom: 40rpx;
		right: 30rpx;
		display: flex;
		flex-direction: column;
	}
	.toolback{
		width: 60rpx;
		height: 60rpx;
		border-radius: 30rpx;
		background-color: #ffffff;
		margin:10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.toolbackimg{
		width: 40rpx;
		height: 40rpx;
	}
</style>