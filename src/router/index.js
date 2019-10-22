/*
 * @Description: henggao_learning
 * @version: v1.0.0
 * @Author: henggao
 * @Date: 2019-10-22 20:17:01
 * @LastEditors: henggao
 * @LastEditTime: 2019-10-22 20:39:18
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入，懒加载
const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Profile = () => import('@/views/profile/Profile.vue')
const Cart = () => import('@/views/cart/Cart.vue')

// 1、安装插件
Vue.use(VueRouter)

// 2、创建路由对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
]

const router = new VueRouter({
    routes,
    // hash模式# ，使用history模式
    mode:'history'
})

// 3、导出router
export default router
