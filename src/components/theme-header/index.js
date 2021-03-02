/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-28 13:41:06
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 12:17:05
 */
import React, { Fragment, memo } from 'react'

import { RcmHeaderWrapper } from './style'

export default memo(function RcmHeader(props) {

    const { title, subTitles = [], type } = props
    const typeA = <span className="right">
        <a href='/'>更多</a>
        <i className="icon sprite_02"></i>
    </span>


    return (
        <RcmHeaderWrapper className="sprite_02">
            <a href='/'>{title}</a>
            <div className="left">
                {subTitles.map((item, index) => {
                    return (
                        <Fragment>
                            <a href='/'>{item}</a>
                            <span className="line">|</span>
                        </Fragment>
                    )
                })}
            </div>
            {type?typeA:null}
        </RcmHeaderWrapper>
    )
})
