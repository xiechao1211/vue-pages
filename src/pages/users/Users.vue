<template>
  <div id="app">
    <p>用户页面</p>
    <a href="users.html">跳转用户页</a>
    <link-demo></link-demo>
    <div class="users">
      用户页面测试样式
    </div>
  </div>
</template>

<script>
  import LinkDemo from '../../components/LinkDemo.vue'

  export default {
  name: 'app',
  components:{
    LinkDemo
  }
}
</script>

<style lang="less" scoped="">
@import '~vux/src/styles/reset.less';
@import "users";

body {
  background-color: #fbf9fe;
}
</style>
