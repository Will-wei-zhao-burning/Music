/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-27 13:30:12
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 11:42:52
 */
import React, { memo, useEffect,useRef, useCallback,useState} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style"
import { getTopBannersAction } from '../../store/actionCreators';

export default memo(function TopBanners() {
    const [ currentIndex , setIndex] = useState(0)
    const { topBanners } = useSelector(state => ({
        topBanners: state.get('recommend').get('topBanners')
    }), shallowEqual);
    const dispatch = useDispatch();
    //组件和redux的关联：获取数据 派发action
    useEffect(() => {
        dispatch(getTopBannersAction());
    }, [dispatch])
    const bannerRef = useRef(null)
    //useCallback包装函数提高性能
    const beforeChange = useCallback(
        (from ,to ) => {
            setIndex(to)
        },
        [],
    )
   
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+'?imageView&blur=40x20')
    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel ref={bannerRef} autoplay effect="fade" beforeChange={beforeChange}>
                        {topBanners.map((item)=>{
                            return (
                                <div className="banner-item" key={item.scm}>
                                    <img src={item.imageUrl} alt={item.typeTitle}></img>
                                </div>
                            )
                        })}
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl >
                    <button className="btn left" onClick={e=>{bannerRef.current.prev()}}></button>
                    <button className="btn right" onClick={e=>{bannerRef.current.next()}}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
