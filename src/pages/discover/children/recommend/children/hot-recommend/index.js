/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-27 15:55:37
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 12:18:14
 */
import React, { memo,useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import RcmHeader from 'components/theme-header'
import HYSongsCover from '@/components/songs-cover';
import {RecimmendList} from './style'
import {getRecommendsAction} from '../../store/actionCreators'

export default memo(function HotRecommend() {

    const subTitles=['华语','流行','摇滚','民谣','电子']
    const dispatch = useDispatch();
    //state
    //redux hook
    const {hotRecommends} = useSelector(state => ({
        hotRecommends:state.getIn(['recommend','hotRecommends'])
    }),shallowEqual)

    //other hooks
    useEffect(() => {
        dispatch(getRecommendsAction(8))
    }, [dispatch])

    return (
        <div>
            <RcmHeader title="热门推荐" subTitles={subTitles} type></RcmHeader>
            <RecimmendList>
                {
                    hotRecommends.map(item=>{
                        return <HYSongsCover key={item.id} info={item}></HYSongsCover>
                    })
                }
            </RecimmendList>
        </div>
    )
})
