/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-18 16:07:04
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-19 18:20:47
 */
import React from "react"

import MusicDiscover from "@/pages/discover";
import Album  from "@/pages/discover/children/album"
import Artist  from "@/pages/discover/children/artist"
import Djradio  from "@/pages/discover/children/djradio"
import Ranking  from "@/pages/discover/children/ranking"
import Recommend  from "@/pages/discover/children/recommend"
import Songs  from "@/pages/discover/children/songs"
import MusicFriend from "@/pages/friend";
import MusicMine from "@/pages/mine";
import MusicStore from "@/pages/store"
import { Redirect } from "react-router-dom";

const routes = [
    {
        path:"/",
        exact:true,
        render:()=>{
            return(
            <Redirect to="/discover"></Redirect>
        )}
    },
    {
        path:"/discover",
        component:MusicDiscover,
        routes:[
            {
                path:'/discover',
                exact:true,
                render:()=>{
                    return <Redirect to="/discover/recommend"></Redirect>
                }
            },
            {
                path:'/discover/recommend',
                component:Recommend
            },
            {
                path:'/discover/album',
                component:Album
            },
            {
                path:'/discover/artist',
                component:Artist
            },
            {
                path:'/discover/djradio',
                component:Djradio
            },
            {
                path:'/discover/ranking',
                component:Ranking
            },
            {
                path:'/discover/songs',
                component:Songs
            }
        ]
    },
    {
        path:"/friend",
        component:MusicFriend
    },
    {
        path:"/mine",
        component:MusicMine
    },
    {
        path:"/store",
        component:MusicStore
    }
];

export default routes
