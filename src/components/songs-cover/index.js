/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-28 15:02:06
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-28 15:46:11
 */
import React, { memo } from 'react'

import { SongCoverWrapper } from './style'

export default memo(function SongCover(props) {
    const {info} = props;

    return (
        <SongCoverWrapper>
            <div className="top">
                <img src={info.picUrl}></img>
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {info.playCount}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <p >
                <a href="/"><p className="text-nowrap">{info.name}</p></a>
            </p>
            <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
        </SongCoverWrapper>
    )
})
