/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-18 16:18:50
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-19 17:53:17
 */
import React, { memo } from 'react';

import {discoverMenu} from '@/common/local-data.js'

import {DiscoverWrapper, TopMenu} from './style'
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default memo(function MusicDiscover(props) {
    
    const {route} = props

    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {discoverMenu.map(item=>{
                        return(
                            <div className="item" key={item.title}>
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </div>
                        )
                    })}
                </TopMenu>
            </div>
            {
            renderRoutes(route.routes)
            }
        </DiscoverWrapper>
    )
})
