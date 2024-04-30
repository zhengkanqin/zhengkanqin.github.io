<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Person',
  data() {
    return {
      name: '张三',
      age: 18,
      gender: '男',
      hobby: ['篮球', '足球', '游泳']
    }
  },
  methods: {
    showHobby() {
      alert(this.hobby.join('、'))
    }
  }
}
</script>

<style>
.person {
  background-color: gray;
  padding: 20px;
  text-align: center;
}
</style>
