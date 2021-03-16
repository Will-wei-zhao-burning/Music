/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-09 13:33:47
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-09 17:04:02
 */
import React, { memo } from 'react'

import {PlayInfoWrapper} from './style'

export default memo(function PlayInfo() {
    return (
        <PlayInfoWrapper className="wrap-v2">
            <div className="wrapper-left">111</div>
            <div className="wrapper-right">222</div>
        </PlayInfoWrapper>
    )
})

