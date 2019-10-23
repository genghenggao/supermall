/*
 * @Description: henggao_learning
 * @version: v1.0.0
 * @Author: henggao
 * @Date: 2019-10-23 09:33:56
 * @LastEditors: henggao
 * @LastEditTime: 2019-10-23 20:32:17
 */
export function getHomeMultidata() {
    return request({
      url: '/home/multidata'
    })
  }
  
  export function getHomeGoods(type, page) {
    return request({
      url: '/home/data',
      params: {
        type,
        page
      }
    })
  }

// 函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
// 函数调用结束 ->弹出函数（释放函数所有的变量）
// function test() {
//     const names = ['why' ,'aaa']
// }