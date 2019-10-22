/*
 * @Description: henggao_learning
 * @version: v1.0.0
 * @Author: henggao
 * @Date: 2019-10-22 18:17:06
 * @LastEditors: henggao
 * @LastEditTime: 2019-10-22 20:21:34
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
