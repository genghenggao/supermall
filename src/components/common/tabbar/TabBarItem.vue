<!--
 * @Description: henggao_learning
 * @version: v1.0.0
 * @Author: henggao
 * @Date: 2019-10-18 15:52:25
 * @LastEditors: henggao
 * @LastEditTime: 2019-10-18 19:59:25
 -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 使用具名插槽，动态设置内容 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{active:isActive}">
      <div>
        <slot name="item-text"></slot>
      </div>
    </div>-->
    <!-- 动态绑定样式 -->
    <div :style="activeStyle">
      <div>
        <slot name="item-text"></slot>
      </div>
    </div>
    <!-- <img src="../../assets/img/tabbar/like_filled.svg" alt />
    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#d4237a"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      //  /home ->item1(/home) =true
      //  /home ->item1(/category) = false
      //  /home ->item1(/cart) = false
      //  /home ->item1(/profile) = false
      // indexOf =-1找到了true;  ！=-1没找到为false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      // console.log('itemClick');
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  /* 均等分 */
  flex: 1;
  /* 据中 */
  text-align: center;
  /* tab-bar高度设置 */
  height: 49px;
  /* 文字大小 */
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* svg图片上边距 */
  margin-top: 3px;
  /* 去掉图片与文字距离默认3个像素 */
  vertical-align: middle;
  /* 图片与文字之间设置2个像素 */
  margin-bottom: 2px;
}

/* .active {
  color: #d4237a;
} */
</style>