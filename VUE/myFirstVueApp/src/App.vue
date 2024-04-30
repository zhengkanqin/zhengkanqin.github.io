<template>
  <div class="box1">
    <h1>123</h1>
    <person></person>
  </div>
</template>

<script lang="ts">
import person from './components/person-vue.vue'
export default {
  name: 'App',
  // 注册组件
  components: {
    person
  }
}
</script>

<style>
.box1 {
  width: 200px;
  height: 200px;
  background-color: aqua;
}
</style>
