<template>
	<view class="home">
		<view class="home-h">
			<video object-fit="cover" :src="videoUrl2" poster="https://img0.baidu.com/it/u=1678650643,2593729507&fm=253&fmt=auto&app=138&f=JPEG?w=906&h=500"></video>
			<view class="home-title-info">
				<view class="home-title-tips">
					<text>免费</text>
					<text>6万+ 人最近报名</text>
				</view>
				<view class="home-title">CAD2020速成班【零基础入门到精通】</view>
			</view>
		</view>
		<view class="home-desc">
			<view class="home-title">课程目录</view>
			<view class="home-title2">课程名称 : 全栈开发实战视频课程</view>
			<image
				src="https://img1.baidu.com/it/u=2412284462,1528860568&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1685552400&t=00023e9d720d0d598b47044bc7078124"
				mode="widthFix"
				style="margin-top: 20rpx;width: 100%;"
			></image>
			<view class="home-text">
				课程简介：本视频教程由资深全栈工程师团队录制，旨在通过实战项目案例，从零开始让学习者掌握全栈开发技能，包括前端、后端、数据库等方面的知识。课程内容涵盖了
				HTML、CSS、JavaScript、Vue.js、Node.js、Express、MongoDB 等最新流行的前后端技术，并针对实际应用场景进行详细讲解，让学习者真正理解技术的本质和应用。 课程特点：
				实战为主，通过逐步构建完整的项目和模块，让学习者在实际操作中熟练掌握技能和方法。 涵盖全栈开发基础知识和高级应用场景，以及备受关注的 Node.js 和 Vue.js 技术。
				由行业资深工程师团队亲自录制，内容全面且深入浅出，生动易懂，可让初学者或有一定经验的开发人员都能轻松上手。
				在初级到高级的各个阶段，都配有多个具体难点及技巧的案例视频，让学习者快速掌握开发技能及实战经验。 配备大量代码示例和模板，可以加快学习者自主学习和完成实践任务。
				目标学习人群：本教程适合对全栈开发感兴趣的学习者，尤其是希望通过实际项目学习完整技术链路的新手和有基础进阶的开发工程师。需要具备一定的编程基础知识，包括
				HTML、CSS、JavaScript 等，或具备其他编程语言相关经验，如 Python、Java等。
				<image
					style="width: 100%;margin: 10rpx 0;"
					src="https://img2.baidu.com/it/u=1711732258,3382239816&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1685552400&t=1814a851132581dc5773480345b497ba"
					mode="widthFix"
				></image>
				学习收获： 学习者将掌握最新前后端开发技能，熟练掌握 HTML、CSS、JavaScript 前端语言、Vue.js 前端框架、Node.js 后端语言以及 MongoDB 数据库等技能。
				了解全栈开发中的综合性条漏和思路，并将学会在真实场景中进行全栈开发，为你的下一次项目积累实战技能。 能够牢固掌握更多前端为服务器准备编写请求与远程响应的知识。
				让学习者在多样化的实际场景和应用中，把技能转化为实际收益。 学习者将拥有更广阔的职业发展空间，包括全栈工程师、前端开发工程师、后端开发工程师等多个角色。
				总之，本视频教程是一条涵盖广泛且实用性极高的路径，让学习者不再被单纯粗暴地困住于技术点上，并能真正适应未来更多元需求的研发环境中。
			</view>
		</view>
	</view>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			videoUrl2: 'https://zhiyuanhuyu.oss-cn-nanjing.aliyuncs.com/uploads/files/b2/dca4476575c9910ce75ffc8c345f16.mp4'
		};
	},
	onLoad() {
		this.initShowDrawer(1);
		/**
		 * 顶部导航
		 *
		 * */
		uni.$on('openShare', res => {
			if (res.type == 1) {
				//分享
				this.initShowDrawer(2);
			}
		});
		/**
		 * popup弹窗
		 *
		 * */
		uni.$on('funDrawer', res => {
			if (res.type == 1) {
				//关闭弹窗
				this.initShowDrawer(1);
			}
		});
	},
	methods: {
		initShowDrawer(type) {
			if (type == 1) {
				//关闭
				uni.getSubNVueById('drawer').hide();
			} else if (type == 2) {
				//打开弹窗
				uni.getSubNVueById('drawer').show();
			}
		}
	}
};
</script>
<style lang="scss">
page {
	background-color: #f1f1f1;
}
.home {
	width: 100%;
	font-size: 24rpx;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	.home-title2 {
		width: 100%;
		font-size: 28rpx;
		font-weight: 600;
		margin-top: 20rpx;
	}
	.home-text {
		width: 100%;
		margin-top: 20rpx;
		font-size: 24rpx;
		line-height: 40rpx;
		color: #666;
	}
	.home-desc {
		width: 100%;
		background-color: #fff;
		border-radius: 20rpx 20rpx 0 0;
		margin-top: 20rpx;
		padding: 24rpx;
		box-sizing: border-box;
		.home-title {
			width: 100%;
			font-size: 30rpx;
			font-weight: 600;
		}
	}
	.home-h {
		width: 100%;
		background-color: #fff;
		border-radius: 0 0 20rpx 20rpx;
		video {
			width: 100%;
			height: 400rpx;
		}
		.home-title-info {
			width: 100%;
			padding: 24rpx;
			box-sizing: border-box;
			.home-title-tips {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				text:first-child {
					color: #ff5500;
					font-size: 28rpx;
				}
				text:last-child {
					color: #999;
					font-size: 22rpx;
				}
			}
			.home-title {
				width: 100%;
				margin-top: 10rpx;
				font-size: 30rpx;
				font-weight: 600;
			}
		}
	}
}
</style>
