/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-28 14:24:44
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-02 20:52:55
 */
import React, { memo,  useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRankingListAction } from '../../store/actionCreators'
import RcmHeader from 'components/theme-header'
import RankingItem from 'components/ranking-list'
import {RankingWrapper} from './style'

export default memo(function RecommendRanking() {
    const dispatch = useDispatch()

    const {upRanking,newRanking,originRanking} = useSelector(state=>(
        {
            upRanking:state.getIn(["recommend", "upRanking"]),
            newRanking:state.getIn(["recommend", "newRanking"]),
            originRanking:state.getIn(["recommend", "originRanking"]),
        }
    ),shallowEqual)

    useEffect(() => {
       dispatch(getRankingListAction(0));
       dispatch(getRankingListAction(2));
       dispatch(getRankingListAction(3));
    }, [dispatch])

    return (
        <div>
            <RcmHeader title="榜单" type></RcmHeader>
            <RankingWrapper className="tops">
            <RankingItem info={upRanking}></RankingItem>
            <RankingItem info={newRanking}></RankingItem>
            <RankingItem info={originRanking}></RankingItem>
            </RankingWrapper>
        </div>
    )
})
