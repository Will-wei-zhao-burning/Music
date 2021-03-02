/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-28 14:24:44
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-02 15:26:35
 */
import React, { memo,  useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRankingListAction } from '../../store/actionCreators'
import RcmHeader from 'components/theme-header'

export default memo(function RecommendRanking() {
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getRankingListAction(0));
       dispatch(getRankingListAction(2));
       dispatch(getRankingListAction(3));
    }, [dispatch])

    return (
        <div>
            <RcmHeader title="榜单" type></RcmHeader>
        </div>
    )
})
