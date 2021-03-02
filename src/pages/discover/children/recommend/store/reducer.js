/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 21:23:41
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 14:28:45
 */
import {Map} from 'immutable'

 import {CHANGR_TOP_BANNERS,CHANGR_HOT_Reacommends,CHANGR_NEW_Albums} from './constants'
//Imutable转换
 const defaultState = Map({
     topBanners:[],
     hotRecommends:[],
     newAlbums:[]
 })

 function reducer(state=defaultState,action){
     switch(action.type){
         case CHANGR_TOP_BANNERS:
             return state.set('topBanners',action.topBanners)
         case CHANGR_HOT_Reacommends:
             return state.set('hotRecommends',action.hotRecommends)
         case CHANGR_NEW_Albums:
            return state.set('newAlbums',action.newAlbums)
         default:
             return state;
     }
 }

 export  {reducer};