/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 21:06:47
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-26 17:04:08
 */
import {combineReducers} from 'redux-immutable';
import {reducer as recommendReducer} from '../pages/discover/children/recommend/store'

//合并
const cReducer = combineReducers({
    recommend:recommendReducer
});

export default cReducer ;