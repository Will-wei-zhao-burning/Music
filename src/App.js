/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-18 12:22:25
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-03 16:25:47
 */
/* 引用第三方库文件 */
import React, { memo } from 'react'
import { renderRoutes } from "react-router-config"
import { HashRouter } from 'react-router-dom'
import { Provider} from 'react-redux'

/* 引入路由集中配置 */
import routes from "./router"
/* 导入store */
import store from './store'

/* 引入子组件 */
import MusicAppHeader from "components/app-header"
import MusicAppFooter from "components/app-footer"
import PlayBar from "pages/playbar"



export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
            <MusicAppHeader></MusicAppHeader>
            {renderRoutes(routes)}
            <MusicAppFooter></MusicAppFooter>
            <PlayBar></PlayBar>
         </HashRouter>
        </Provider>
        
    )
})
