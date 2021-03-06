/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 21:06:47
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-05 18:05:53
 */
import {combineReducers} from 'redux-immutable';
import {reducer as recommendReducer} from '../pages/discover/children/recommend/store'
import {reducer as playerReducer} from '../pages/playbar/store'

//合并
const cReducer = combineReducers({
    recommend:recommendReducer,
    player:playerReducer
});

export default cReducer ;