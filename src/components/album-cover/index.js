/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-01 15:04:48
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 16:36:45
 */
import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils';

import {AlbumCoverWrapper} from './style'

export default memo(function AlbumCover(props) {
    const {info, size = 130, width = 153, bgp = "-845px"} = props;
    
    return (
        <AlbumCoverWrapper>
            <div className="cover-top">
                <img src={info.picUrl}></img>
                <a className="cover image_cover">{info.name}</a>
            </div>
            <p>
                <a  className="cover-middle">{info.name}</a>
            </p>
            <p >
                <a className="cover-bottom">{info.artist.name}</a>
            </p>
        </AlbumCoverWrapper>
    )
})
