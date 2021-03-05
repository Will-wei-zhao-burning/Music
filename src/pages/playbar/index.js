/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-03 16:22:24
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-05 11:40:37
 */
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { Slider } from 'antd';
import {PlayBarWrapper,Control,Info,Operation} from './style'

export default memo(function PlayBar() {
    return (
        <PlayBarWrapper>
           <div className="wrap-v2">
               <Control>
                   <button onClick={e=>{prev()}} className="sprite_player prev "></button>
                   <button className="sprite_player play"></button>
                   <button className="sprite_player next"></button>
               </Control>
               <Info>
                   <div className="song-pic">
                       <NavLink to="/discover">
                           <img src="https://p2.music.126.net/0fL8vcI942Wocdt4M1dp4A==/109951165547470592.jpg?param=34y34"></img>
                       </NavLink>
                   </div>
                   <div className="song-detail">
                       <div className="title">
                           <span className="song-name">雪花</span>
                           <span className="singer-name">
                               <a>叙述</a>
                           </span>
                       </div>
                       <div className="slider">
                           <Slider defaultValue={30} ></Slider>
                           <div className="timer">
                               <span className="now-time">02:11</span>
                               <span className="divider">/</span>
                               <span>04:30</span>
                           </div>
                       </div>
                   </div>
               </Info>
               <Operation>
                   <div className="operation">
                       <button className="sprite_player add"></button>
                       <button className="sprite_player forward"></button>
                   </div>
                   <div className="sprite_player setting">
                       <button className="sprite_player voice"></button>
                       <button className="sprite_player cycle"></button>
                       <button className="sprite_player list"></button>
                   </div>
               </Operation>
           </div>
        </PlayBarWrapper>
    )
    
    function prev(){
        console.log("播放上一首歌曲；")
    }
})
