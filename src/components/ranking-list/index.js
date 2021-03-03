/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-02 16:13:24
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-02 20:26:18
 */
import React, { memo } from 'react'

import { RankingListWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function RankingList(props) {

    const { info } = props;
    const { coverImgUrl, name = '', tracks = [] } = info

    return (
        <RankingListWrapper>
            <dt>
                <div className="rcm-header-cover">
                    <img src={getSizeImage(coverImgUrl)}></img>
                    <a className="image_cover">ranking</a>
                </div>
                <div className="rcm-header-title">
                    <a href='./'>
                        <h3 >{name}</h3>
                    </a>
                    <div className="btn">
                        <a herf='./' className="play sprite_02">播放</a>
                        <a href='./' className="favourite  sprite_02">收藏</a>
                    </div>
                </div>
            </dt>
            <dd>
                <ol>
                    {
                        tracks.slice(0, 10).map((item, index) => {
                            return (
                                <li>
                                    <span>{index+1}</span>
                                    <a href='./'>{item.name}</a>
                                    <div className='operation'>
                                        <a className='sprite_02 play'></a>
                                        <a className='sprite_icon2 add'></a>
                                        <a className='sprite_02 favour'></a>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
            </dd>
            <div className='footer'>
                <a href='./'>查看全部 &gt;</a>
            </div>
        </RankingListWrapper>
    )
})
