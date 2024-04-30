<template>
	<view class="phone-status content-background" :style="{ height: PHONE_STATUS_HEIGHT.value + 'px' }"></view>

</template>

<script setup>
import {ref} from 'vue'
let PHONE_INFORMATION = uni.getSystemInfoSync()
let PHONE_STATUS_HEIGHT = ref(PHONE_INFORMATION.statusBarHeight)
</script>

<style lang="scss">
.phone-status{
	width:100%;
}
</style>