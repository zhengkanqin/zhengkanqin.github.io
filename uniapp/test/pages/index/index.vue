<template>
	
	<web-view src="../../hybrid/html/neo4j-d3-graph-master/user.html"></web-view>
	
	
	
	

	
</template>


<script setup>
import {ref,onMounted,getCurrentInstance} from 'vue'
	var wv; //计划创建的webview
	const {ctx} = getCurrentInstance() 
		setTimeout(() => {
			var currentWebview = ctx.$scope.$getAppWebview();
			 console.log(currentWebview.children()) ;
			 wv = currentWebview.children()[0]; 
			wv.setStyle({
				scalable:true
			})

			
			
			
			
			 }, 1000)




</script>


<style lang="scss">

</style>
