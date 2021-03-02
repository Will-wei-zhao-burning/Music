/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 12:06:16
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-27 14:17:02
 */

import styled from 'styled-components'

export const MusicFooterWrapper = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   height:172px;
   background-color:#f2f2f2;
   color:#666;
   border-top:1px solid #d3d3d3;

 `

export const MusicFooterLeft = styled.div`
  padding-top:15px;
  line-height:24px;
  width:50%;
  .link {
   color:#999;

    .line {
     margin:0 10px;
   }
 }

  .copy-right {
   span{
     margin-right:15px;
   }
 }

 .footer-contact{
   span{
     margin-right:15px;
   }
 }

`

export const MusicFooterRight = styled.div`
  
  display:flex;
  .item{
    margin-right:40px;
    display:flex;
    flex-direction: column;
    align-items: center;
    .link{
      display:block;
      width:50px;
      height:45px;
      background-image: url(${require("@/assets/img/sprite_footer_02.png").default}) ;
      background-size: 110px 450px;
      text-indent: -9999px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }
    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
      background-size: 180px 100px;

    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }

`