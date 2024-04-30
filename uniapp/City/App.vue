<script>
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
	}

</script>

<script setup>
	import {ref} from 'vue'
	let userData = JSON.parse(uni.getStorageSync('UserInformation'))
	uni.onTabBarMidButtonTap(()=>{
        uni.navigateTo({
        	url:'/pages/PutEvent/PutEvent',
			animationType:'slide-in-bottom'
        })
        });

		
		
	
</script>


<style>
	
	/*每个页面公共css */
	/*每个页面公共css */
	.uni-row {
		flex-direction: row;
	}
	
	.uni-column {
		flex-direction: column;
	}
	.content-background{
		background:#F1F5F7;
	}
	.TitileFont{
		padding: 30rpx;
		padding-top: 80rpx;
		font-size: 60rpx;
		font-family: 'Courier New', Courier, monospace;
	}
	.ICON-TitileFont{
			padding: 30rpx;
			padding-left :0;
			padding-top: 80rpx;
			font-size: 60rpx;
			font-family: 'Courier New', Courier, monospace;
		}
	.Titile-ICON{
		padding-top: 80rpx;
	}
	.全屏{
		width: 100%;
		height: 100%;
	}
	.横向布局{
		display: flex;
		flex-direction: row;
		align-items: center;
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
	.右侧布局{
		display: flex;
		flex-direction: row-reverse;
	}
	.减少左间距{
		margin-left :15rpx
	}
</style>
