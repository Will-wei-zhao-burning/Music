/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-03 16:22:24
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-06 17:15:20
 */
import React, { memo, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import {getCurrentSong} from './store/actionCreator'

import { Slider } from 'antd';
import {PlayBarWrapper,Control,Info,Operation} from './style'

import {getSizeImage,  formatDate, getPlaySong } from '@/utils/format-utils'

export default memo(function PlayBar() {
    const dispatch = useDispatch();
    const [currentTime, setcurrentTime] = useState(0)
    const { currentSong } = useSelector(state=>({
        currentSong : state.get("player").get("currentSong")
    }),shallowEqual)
    
    //发送网络请求
    useEffect(() => {
        dispatch(getCurrentSong(411214279));
    }, [dispatch])
    
    const audioRef = useRef();
    const imgurl = (currentSong.al&&currentSong.al.picUrl) || ''
    const totalTime = currentSong.dt || 0;
    const showCurrentTime = formatDate(currentTime,'mm:ss');
    const duration = formatDate(totalTime, "mm:ss")
    const sliderValue = (currentTime/totalTime) * 100;

    return (
        <PlayBarWrapper>
           <div className="wrap-v2">
               <Control>
                   <button onClick={e=>{prev()}} className="sprite_player prev "></button>
                   <button className="sprite_player play" onClick={e=>playMusic()}></button>
                   <button className="sprite_player next"></button>
               </Control>
               <Info>
                   <div className="song-pic">
                       <NavLink to="/discover">
                           <img src={getSizeImage(imgurl,35)}></img>
                       </NavLink>
                   </div>
                   <div className="song-detail">
                       <div className="title">
                           <span className="song-name">{currentSong.name}</span>
                           <span className="singer-name">
                               <a>{currentSong.ar && currentSong.ar[0].name || ""}</a>
                           </span>
                       </div>
                       <div className="slider">
                           <Slider onChange={e=>{sliderChange()}}  onAfterChange={e=>{sliderAfterChange()}} step={0.2} value={sliderValue} defaultValue={30} ></Slider>
                           <div className="timer">
                               <span className="now-time">{showCurrentTime}</span>
                               <span className="divider">/</span>
                               <span>{duration}</span>
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
           <audio ref={audioRef} onTimeUpdate={timeUpdate}/>
        </PlayBarWrapper>
    )
    
    function prev(){
        console.log("播放上一首歌曲；")
    }

    function playMusic(){
        audioRef.current.src= getPlaySong(currentSong.id);
        audioRef.current.play()
    }
    function timeUpdate(){
        console.log(audioRef.current.currentTime);
        setcurrentTime(audioRef.current.currentTime*1000)
    }
    function sliderChange(){

    }
    function sliderAfterChange(){

    }
})
