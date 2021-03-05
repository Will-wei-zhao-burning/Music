/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-03 16:22:30
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-05 11:42:32
 */
import styled from 'styled-components'

export const PlayBarWrapper = styled.div`
  height:53px;
  background-color: #3d3d3f;
  position:fixed;
  left:0;
  bottom:0;
  right:0;
  color:#fff;
  >div{
      display:flex;
      align-items: center;
      justify-content:space-between
  }
  /* &:hover{
      display:none;
      
  } */
`
export const Control = styled.div`
   display:inline-block;
   width: 137px;
   padding: 6px 0 0 0;
   button{
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
   }
   .prev{
    background-position: 0 -130px;
   }

   .play{
    width: 36px;
    height: 36px;
    margin-top: 0;
    background-position: 0 -204px;
   }

   .next{
    background-position: -80px -130px;
   }
`

export const Info = styled.div`
   display:flex;
   align-items: center;
   justify-content:space-between;
   flex:1;

   .song-pic{
       width:34px;
       height:34px;
       margin:6px 15px 0 0;
   }
   .song-detail{
       width:605px;
       color: #a1a1a1;

       .title{
        margin-left:7px;
        height: 28px;
        line-height:28px;
         .song-name{
             margin-right:10px;
         }
       }
       .slider{
        display: flex;
      align-items: center;
      .ant-slider {
        width: 493px;
        margin-right: 10px;
        margin-top:0px;
        margin-bottom:0px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png").default}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png").default}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -250px;
          }
        }
        .timer {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
        
       }
   }
`

export const Operation = styled.div`
   display:inline-block;
   position:relative;

   button{
    width: 25px;
    height: 25px;
    margin: 11px 2px 0 0;
   }
   .operation{
       width:60px;
       display:inline-block;
       .add{
        background-position: -88px -163px;
       }
       .forward{
        background-position: -114px -163px;
       }
   }
   .setting{
       display:inline-block;
       width: 128px;
       padding-left:13px;
       background-position: -147px -238px;

       .voice{
        background-position: -2px -248px;

       }
       .cycle{
        background-position: -3px -344px;
       }
       .list{
        width: 59px;
    height: 25px;
    background-position: -42px -68px;
    line-height: 27px;
       }
   }
`

