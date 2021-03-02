/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 21:23:41
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-02 15:28:19
 */
import {Map} from 'immutable'

 import {CHANGR_TOP_BANNERS,CHANGR_HOT_Reacommends,CHANGR_NEW_Albums,CHANGR_UP_Ranking,CHANGR_NEW_Ranking,CHANGR_ORIGIN_Ranking} from './constants'
//Imutable转换
 const defaultState = Map({
     topBanners:[],
     hotRecommends:[],
     newAlbums:[],

     upRanking:{},
     newRanking:{},
     originRanking:{}
 })

 function reducer(state=defaultState,action){
     switch(action.type){
         case CHANGR_TOP_BANNERS:
             return state.set('topBanners',action.topBanners)
         case CHANGR_HOT_Reacommends:
             return state.set('hotRecommends',action.hotRecommends)
         case CHANGR_NEW_Albums:
            return state.set('newAlbums',action.newAlbums)
         case CHANGR_UP_Ranking:
            return state.set('upRanking',action.upRanking)
         case CHANGR_NEW_Ranking:
             return state.set('newRanking',action.newRanking)
         case CHANGR_ORIGIN_Ranking:
             return state.set('originRanking',action.originRanking)
         default:
             return state;
     }
 }

 export  {reducer};