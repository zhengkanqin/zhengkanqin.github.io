<template>
	<cover-view class = "searchBox">
		<cover-view class ="SearchContentBox">
			<cover-view class ="searchTab">
				<cover-view class = "searchTypeName" @click="clickSearch">全部</cover-view>
				<cover-image src = "../../static/buttomSrc/BottomMore.png" class="bottomMore"></cover-image>
			</cover-view>
			<cover-view class ="boundaryLine"></cover-view>
			<cover-view class = "SearchInputBox" @click="clickSearch">{{information}}</cover-view>
			<cover-view class = "rightSet">
				<cover-image src = "../../static/buttomSrc/RightSet.png" class = "rightSetImg" mode="scaleToFill"></cover-image>
			</cover-view>
		</cover-view>
	</cover-view>
	
	
	
</template>

<script setup>
	import {ref} from 'vue'
	let information = ref("附近音乐节")
	const clickSearch = () => {
		uni.navigateTo({
			url:'/pages/search/search'
		})
	}
</script>

<style lang="scss">
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
	font-size: 30rpx;
	color: #595959;
}
.inputBox{
	width: 0;
}
</style>