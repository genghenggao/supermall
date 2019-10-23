<!--
 * @Description: henggao_learning
 * @version: v1.0.0
 * @Author: henggao
 * @Date: 2019-10-23 08:11:16
 * @LastEditors: henggao
 * @LastEditTime: 2019-10-23 08:39:19
 -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.nav-bar {
  display: flex;
  height: 44px;
  /**有内容才可以，要需要设置一下height */
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,0.1)
}

.left,
.right {
  width: 60px;
  /* background-color: red; */
}
.center {
  flex: 1;
  /* background-color: blue; */
}
</style>