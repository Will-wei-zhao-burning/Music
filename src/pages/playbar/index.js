/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-03 16:22:24
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-09 11:55:07
 */
import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import {getCurrentSong} from './store/actionCreator'

import { Slider } from 'antd';
import {PlayBarWrapper,Control,Info,Operation} from './style'

import {getSizeImage,  formatDate, getPlaySong } from '@/utils/format-utils'

export default memo(function PlayBar() {
    const dispatch = useDispatch();
    const [currentTime, setcurrentTime] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const [changeStatus, setchangeStatus] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const {currentSong} = useSelector(state=>({
        currentSong : state.get("player").get("currentSong")
    }),shallowEqual)
    
    //发送网络请求
    useEffect(() => {
        dispatch(getCurrentSong(411214279));
    }, [dispatch])
    useEffect(() => {
        audioRef.current.src= getPlaySong(currentSong.id);
    }, [currentSong.id])
    
    const audioRef = useRef();
    const imgurl = (currentSong.al&&currentSong.al.picUrl) || ''
    const totalTime = currentSong.dt || 0;
    const showCurrentTime = formatDate(currentTime,'mm:ss');
    const duration = formatDate(totalTime, "mm:ss")

    //handle function 
    //播放音乐
    const playMusic = () =>{
        setIsPlaying(!isPlaying);
        if(!isPlaying){
            audioRef.current.play();
        }
        else{
            audioRef.current.pause();
        }
    }
    //audio时间更新
    const timeUpdate = ()=>{
        console.log(audioRef.current.currentTime);
        if(!changeStatus){
            setcurrentTime(audioRef.current.currentTime*1000);
            setSliderValue(audioRef.current.currentTime*100000/totalTime)
        }
    }
    //拖动滚动条改变
    const sliderChange = useCallback((value) => {
        setchangeStatus(true);
        setcurrentTime(value*totalTime/100);
        setSliderValue(value);
    },[totalTime])
    //松开滚动条后改变
    const sliderAfterChange = useCallback((value) => {
        audioRef.current.currentTime = value/100000*totalTime;
        setchangeStatus(false);
        if(!isPlaying){
            playMusic();
        }
    },[totalTime,isPlaying,playMusic])

    return (
        <PlayBarWrapper>
           <div className="wrap-v2">
               <Control isPlaying={isPlaying}>
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
                           <Slider onChange={sliderChange}  onAfterChange={sliderAfterChange} step={0.2} value={sliderValue} defaultValue={30} ></Slider>
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
})
