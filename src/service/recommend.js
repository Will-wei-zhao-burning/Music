/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-20 17:53:37
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 14:06:15
 */
import request from './request'

export function getTopBanners() {
    return request({
        url: '/banner'
    })
}

export function getRecommends(limit) {
    return request({
        url: '/personalized',
        params: {
            limit: limit
        }
    })
}

export function getNewAlbums(limit) {
    return request({
        url: "/top/album",
        params: {
            limit
        }
    })
}