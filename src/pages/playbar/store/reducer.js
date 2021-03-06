/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-05 17:17:36
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-06 15:32:39
 */
import {Map} from 'immutable'
import {CHANGE_CURRENT_SONG } from './constants'


 const defaultState = Map({
     currentSong:{}
 })

 function reducer(state=defaultState,action){
     switch(action.type){
        case CHANGE_CURRENT_SONG :
           return state.set('currentSong',action.currentSong);
        default:
          return state;
     }
 } 

 export {reducer};