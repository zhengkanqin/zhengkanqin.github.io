<template>
	<view class="content-background index-background">			
		<index-searcher class = "TopMargin"></index-searcher>
		<!-- <index-map class = "indexMapBox"></index-map> -->
	</view>
</template>

<script setup>
	
</script>

<style lang = "scss">
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-bottom: 50rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.index-background{
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.MapBox{
		width: 100%;
		height: 100%;
		position:absolute;
	}

.test{
	background-color: #8f8f94;
	width: 100px;
	height: 100px;
	position: absolute;
}
.indexMapBox{
	position: absolute;
	width: 50%;
	height: 50%;
}
.TopMargin{
	margin-top: 100rpx;
	position: fixed;
	z-index: 100;
}
</style>