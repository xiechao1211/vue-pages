<template>
  <div id="app">
    <p>首页</p>
    <a href="users.html">users</a>
    <link-demo></link-demo>
  </div>
</template>

<script>
  import LinkDemo from '../../components/LinkDemo.vue'

  export default {
    name: 'app',
    components: {
      LinkDemo
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>
