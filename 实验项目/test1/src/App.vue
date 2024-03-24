<script>
    export default {
        // data 选项的值应该是一个函数返回的对象
        data: () => ({
            account: 'Abc',
            student: {
                name: 'Jack',
                age: 30
            }
        }),
        methods: {
            changeAccount() {
                // 取出数据源可通过 this（当前组件得实例对象） 关键字获取
                this.account += '='
            },
            changeStudentAge() {
                this.student.age ++
            }
        }
    }
</script>

<template>
  
    <h1>账号：{{ account }}</h1>
    <button @click="changeAccount">点我更改账号</button>

    <hr>

    <h1>学生：{{ student.age }}</h1>
    <button @click="changeStudentAge">点我更改学生年龄</button>

</template>