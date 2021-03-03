/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-03 16:22:24
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-03 16:57:20
 */
import React, { memo } from 'react'

import {PlayBarWrapper,Control,Info,Operation} from './style'

export default memo(function PlayBar() {
    return (
        <PlayBarWrapper>
           <div className="wrap-v2">
               <Control>
                   <button className="prev"></button>
                   <button className="play"></button>
                   <button className="next"></button>
               </Control>
               <Info></Info>
               <Operation></Operation>
           </div>
        </PlayBarWrapper>
    )
})
