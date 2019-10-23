/*
 * @Description: henggao_learning
 * @version: v1.0.0
 * @Author: henggao
 * @Date: 2019-10-23 09:30:29
 * @LastEditors: henggao
 * @LastEditTime: 2019-10-23 20:26:25
 */
import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)  //Promise
}