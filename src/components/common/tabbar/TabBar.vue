<!--
 * @Description: henggao_learning
 * @version: v1.0.0
 * @Author: henggao
 * @Date: 2019-10-18 15:10:48
 * @LastEditors: henggao
 * @LastEditTime: 2019-10-18 15:50:30
 -->
<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
#tab-bar {
  /* 水平分布 */
  display: flex;
  /* 背景色 */
  background-color: #f6f6f6;
  /* 置于底部 */
  position: fixed;
  /* left、right设置占据屏幕宽度 */
  left: 0;
  right: 0;
  bottom: 0;
  /* 设置阴影 x平移量,y平移量,模糊程度，透明度，*/
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}

</style>
