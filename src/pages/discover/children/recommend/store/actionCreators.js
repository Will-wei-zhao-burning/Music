/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 21:24:05
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 14:25:29
 */

 import * as actionTypes from './constants';

 import {getTopBanners, getRecommends, getNewAlbums} from "service/recommend";

 const changeTopBannerAction = (res) =>{
     return {
         type:actionTypes.CHANGR_TOP_BANNERS,
         topBanners:res.banners
     }
 }
const changeNewAlbumsAction = (res) =>{
    return{
        type:actionTypes.CHANGR_NEW_Albums,
        newAlbums:res
    }
}

 export const changeHotRecommendsAction = (res) =>{
     return {
         type:actionTypes.CHANGR_HOT_Reacommends,
         hotRecommends:res
     }
 }

 export const getTopBannersAction = () =>{
     return dispatch =>{
         getTopBanners().then(res =>{
             dispatch(changeTopBannerAction(res))
         })
     }
 }
 
 export const getRecommendsAction = (num) =>{
     return dispatch =>{
        getRecommends().then( res=>{
            const data = res.result.slice(0,num)
            dispatch(changeHotRecommendsAction(data))
        })
     }
 }

 export const getNewAlbumsAction = (num) =>{
     return dispatch =>{
         getNewAlbums().then(res=>{
             const data = res.albums.slice(0,num)
             dispatch(changeNewAlbumsAction(data))
         })
     }
 }