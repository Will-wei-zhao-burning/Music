/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-01 15:04:53
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 16:49:33
 */
import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
    width: 118px;
    display:inline-block;
    height: 150px;
    margin-left: 11px;
    background-position: -260px 100px;
    .cover-top{
    width: 100px;
    height: 100px;
    margin-bottom: 7px;
    position: relative;
     >img{
         display:block;
         width: 100%;
         height: 100%;
     }
    .cover{
      width: 118px;
    height: 100px;
    background-position: 0 -570px;
    text-indent: -9999px;
    position: absolute;
    left: 0;
      top: 0;
     }
    }
    >p{
        width: 90%;
      line-height: 18px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow:hidden;
    }
    .cover-middle{
      color: #000;
    }

    .cover-bottom{
      color: #666;
    }
`