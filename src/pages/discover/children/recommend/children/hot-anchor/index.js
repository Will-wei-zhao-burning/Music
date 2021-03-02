/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-28 13:35:14
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 13:43:52
 */
import React, { Fragment, memo,useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import HYSongsCover from '@/components/songs-cover';
import RcmHeader from 'components/theme-header'
import {HotAnchorWrapper} from './style'
import {getRecommendsAction} from '../../store/actionCreators'

export default memo(function HotAnchor() {
    
    const {hotRecommends} = useSelector(state => ({
        hotRecommends:state.getIn(['recommend','hotRecommends']).slice(2,6)
    }),shallowEqual)
    

    return (
        <div>
             <RcmHeader title="个性化推荐" ></RcmHeader>
             <HotAnchorWrapper>
                 {
                     hotRecommends.map(item=>{
                         return <HYSongsCover key={item.id} info={item}></HYSongsCover>
                     })
                 }
             </HotAnchorWrapper>
        </div>
    )
})
