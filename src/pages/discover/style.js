/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 17:13:41
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-27 14:19:41
 */

import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
      border-bottom:1px solid #d3d3d3;
  .top{
      height:30px;
      background-color:#C20C0C;
  }
`

export const TopMenu = styled.div`
  display:flex;
  padding-left:180px;
  position: relative;
        top:-3px;
  .item{
    a{
        display:inline-block;
        height:20px;
        line-height:20px;
        padding:0 13px;
        margin:7px 17px 0;
        color:#fff;
        
        &:hover,&.active{
        text-decoration:none;
        background-color: #9B0909;
        border-radius: 20px;
    }
    }
  }
  
`