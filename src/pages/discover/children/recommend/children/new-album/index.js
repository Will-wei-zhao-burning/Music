/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-28 13:35:48
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-02 09:23:38
 */
import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd';
import RcmHeader from 'components/theme-header'
import NewAlbumCover from 'components/album-cover'
import { NewAlbumWrapper } from './style'
import { getNewAlbumsAction } from '../../store/actionCreators'

export default memo(function NewAlbum() {
    const dispatch = useDispatch();
    const carouselRef = useRef()

    //生命周期发送网络请求
    useEffect(() => {
        dispatch(getNewAlbumsAction(10))

    }, [dispatch])

    //获取数据
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.getIn(['recommend', 'newAlbums'])
    }), shallowEqual)

    const newAlbum1 = newAlbums.slice(0, 5);
    const newAlbum2 = newAlbums.slice(5, 10);
    //函数组件内的函数定义
    const rightClick=()=>{
        carouselRef.current.next()
    }
    return (
        <div>
            <RcmHeader title="新碟上架" type ></RcmHeader>
            <NewAlbumWrapper>
                <div className='album-roller'>
                    <a onClick={e=>{leftClick()}} className="controller-left sprite_02"></a>
                    <Carousel ref={carouselRef} dots={false}>
                        <div className="album-coverlist">
                            {/* <NewAlbum size={100} width={118} bgp="-570px" ></NewAlbum> */}
                            {
                            newAlbum1.map(item=>{
                              return <NewAlbumCover key={item.id} size={100} width={118} bgp="-570px" info={item}></NewAlbumCover>
                            })
                          }
                        </div>
                        <div className="album-coverlist">
                        {
                            newAlbum2.map(item=>{
                              return <NewAlbumCover key={item.id} size={100} width={118} bgp="-570px" info={item}></NewAlbumCover>
                            })
                          }
                        </div>
                    </Carousel>
                    <a onClick={rightClick} className="controller-right sprite_02"></a>
                </div>
            </NewAlbumWrapper>
        </div>
    )
    
    function leftClick(){
        carouselRef.current.prev()
    }
    
})
