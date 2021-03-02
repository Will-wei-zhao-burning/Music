/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-18 15:58:15
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-19 12:34:17
 */
import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { MusicHeaderLeft, MusicHeaderWrapper, MusicHeaderRight } from './style'


import { headerLinks } from '@/common/local-data.js'

export default memo(function MusicAppHeader() {

    const HeaderItems = (item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.link}>{item.title}
                    <i className="sprite_01 icon"></i></NavLink>
            )
        }
        else {
            return (
                <a href={item.link}>{item.title}</a>
            )
        }
    }

    return (
        <MusicHeaderWrapper>
            <div className="content wrap-v1">
                <MusicHeaderLeft>
                    <a href="#" className="logo sprite_01">网易云音乐</a>
                    <div className="select-list">
                        {headerLinks.map((item, index) => {
                            return (
                                <div className="select-item">
                                    {HeaderItems(item, index)}
                                </div>
                            )
                        })
                        }
                    </div>
                </MusicHeaderLeft>
                <MusicHeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}></Input>
                    <div className="center"  >创作者中心</div>
                    <div>登录</div>
                </MusicHeaderRight>
                {/* <NavLink to="/">发现音乐</NavLink>
             <NavLink to="/mine">我的音乐</NavLink>
             <NavLink to="/friend">朋友</NavLink>
             <NavLink to="/store">商城</NavLink> */}
            </div>
            <div className="divider"></div>
        </MusicHeaderWrapper>
    )
})