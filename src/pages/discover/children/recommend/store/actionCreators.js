/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 21:24:05
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-02 15:31:25
 */

 import * as actionTypes from './constants';

 import {getTopBanners, getRecommends, getNewAlbums, getRankingList} from "service/recommend";

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

const changeUpRankingAction = (res) =>{
    return {
        type:actionTypes.CHANGR_UP_Ranking,
        upRanking:res
    }
}

const changeNewRankingAction = (res) =>{
    return {
        type:actionTypes.CHANGR_NEW_Ranking,
        newRanking:res
    }
}

const changeOriginRankingAction = (res) =>{
    return {
        type:actionTypes.CHANGR_ORIGIN_Ranking,
        originRanking:res
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

 export const getRankingListAction = (num) =>{
     return dispatch =>{
         getRankingList(num).then(
             res=>{
                switch (num) {
                    case 0 : 
                      dispatch(changeUpRankingAction(res.playlist))
                      break;
                    case 2 : 
                      dispatch(changeNewRankingAction(res.playlist))
                      break;
                    case 3 : 
                      dispatch(changeOriginRankingAction(res.playlist))
                      break;
                }
             }
         )
     }
 }