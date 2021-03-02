/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 17:24:16
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 13:39:07
 */
import React, { memo} from 'react'

import {RecommendWrapper, Content, RecommendLeft, RecommendRight} from './style'
import TopBanners from './children/top-banner'
import HotRecommend from './children/hot-recommend'
import HotAnchor from './children/hot-anchor'
import NewAlbum from './children/new-album'
import RecommendRanking from './children/recommend-ranking'

function HYrecommend(props) {
    
        

    return (
        <RecommendWrapper>
            <TopBanners></TopBanners>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <HotRecommend></HotRecommend>
                    <HotAnchor></HotAnchor>
                    <NewAlbum></NewAlbum>
                    <RecommendRanking></RecommendRanking>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

export default memo(HYrecommend)

/* 
function HYrecommend(props) {
    const {getBanners, topBanners} = props
    //生命周期
    useEffect(()=>{
        getBanners()
    },[getBanners])

    return (
        <div>
            recommend:{topBanners[0].length}
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        topBanners:state.recommend.topBanners
    }
}
    


const mapDispatchToProps = dispatch=>({
    getBanners:()=>{
        dispatch(getTopBannersAction())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(memo(HYrecommend)); */
