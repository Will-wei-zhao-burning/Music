/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-05 17:22:52
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-25 20:52:47
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
export function getLyric(id){
  return request({
    url:'/lyric',
    params:{
      id
    }
  })
}