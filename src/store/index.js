/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 21:03:16
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-19 21:16:23
 */
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;