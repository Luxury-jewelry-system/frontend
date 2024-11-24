<template>
  <div id="app">
    <HeaderBar />
    <router-view></router-view>
  </div>
</template>


<script>
import HeaderBar from './components/HeaderBar.vue'; // 导入顶部栏组件
export default {
  name: 'App',
  components: {
    HeaderBar, // 注册组件
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* 避免子元素的 padding 和 border 影响整体布局 */
}</style>