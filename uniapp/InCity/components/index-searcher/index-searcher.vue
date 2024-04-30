<template>
	<view class = "searchBox">
		<view class ="SearchContentBox">
			<view class ="searchTab">
				<view class = "searchTypeName">全部</view>
				<image src = "../../static/buttomSrc/BottomMore.png" class="bottomMore"></image>
			</view>
			<view class ="boundaryLine"></view>
			<view class = "SearchInputBox">附近音乐节...</view>
			<view class = "rightSet">
				<image src = "../../static/buttomSrc/RightSet.png" class = "rightSetImg" mode="scaleToFill"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
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
	box-shadow: 1px 0px 1px #d5d5d5,-1px 0px 1px #d5d5d5;
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
	padding-left: 10px;
	flex-shrink: 0;
}
.boundaryLine{
	 width: 3rpx;
	 height: 60%;
	 background-color: #ebebeb;
	 margin: 3px;
}
.SearchInputBox{
	width:270rpx;
	height: 80%;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	color: #8b8b8b;
	padding-left: 10rpx;

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
</style>