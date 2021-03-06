/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-05 17:22:52
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-05 17:48:11
 */
import request from './request'

export function getSongDetail(ids){
  return request({
      url:'/song/detail',
      params:{
          ids
      }
  })
}