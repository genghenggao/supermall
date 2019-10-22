<!--
 * @Description: henggao_learning
 * @version: v1.0.0
 * @Author: henggao
 * @Date: 2019-10-18 20:12:52
 * @LastEditors: henggao
 * @LastEditTime: 2019-10-22 21:04:05
 -->
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <!-- <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt /> -->
      <!-- <img slot="item-icon" src="~/assets/img/tabbar/home.svg" alt /> -->
      <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="../../../assets/img/tabbar/categories.svg" alt />
      <img slot="item-icon-active" src="../../../assets/img/tabbar//categories_active.svg" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt />
      <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// 1.导入组建
// import TabBar from "./tabbar/TabBar";
// import TabBar from "components/common/tabbar/TabBar";
import TabBar from "../../common/tabbar/TabBar";
// import TabBarItem from "components/common/tabbar/TabBarItem";
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    // 2.注册组件
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>