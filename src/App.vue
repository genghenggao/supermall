<!--
 * @Description: henggao_learning
 * @version: v1.0.0
 * @Author: henggao
 * @Date: 2019-10-22 18:17:06
 * @LastEditors: henggao
 * @LastEditTime: 2019-10-23 08:53:48
 -->
<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
// import MainTabBar from './components/content/mainTabbar/MainTabBar'
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
/* @import "./assets/css/base.css"; */
@import "assets/css/base.css";
</style>
