/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-05 17:17:51
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-05 17:54:51
 */

import {getSongDetail} from "@/service/player.js";
import * as actionTypes from './constants'

const changeCurrentSongAction = (res) =>{
    return {
        type:actionTypes.CHANGE_CURRENT_SONG,
        currentSong:res.songs[0]
    }
}


export const getCurrentSong = (ids) => {
    return (disptach) => {
        getSongDetail(ids).then(res=>{
            disptach(changeCurrentSongAction(res))
        })
    }
}

