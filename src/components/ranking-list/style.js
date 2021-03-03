/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-02 16:13:29
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-02 20:56:45
 */
import styled from 'styled-components'

export const RankingListWrapper = styled.dl`
  width:230px;
  float:left;
 dt{
    height:120px;
    padding:20px 0 0 19px;
    .rcm-header-cover{
        float:left;
        width:80px;
        height:80px;
        position:relative;
        img{
            display: block;
            width: 100%;
            height: 100%;
            
        }
    }
    .rcm-header-title{
        float:left;
        width:116px;
        margin:6px 0 0 10px;

        h3{
            font-size: 14px;
            width: 100%;
            font-weight: bold;
        }
        .btn{
            margin-top:10px;

            a{
                float:left;
                width:22px;
                height:22px;
                margin-right:10px;
                text-indent:-9999px;
            }
            .play{
                background-position: -267px -205px;
            }
            .favourite{
                background-position: -300px -205px;
            }
        }
    }
 } 

 dd{
     ol{
        height: 319px;
    margin-left: 50px;
    line-height: 32px;
    li{
        height:32px;
        span{
            float:left;
            width:35px;
            height:32px;
            margin-left:-35px;
            text-align:center;
            font-size: 16px;
        }
        >a{
            float:left;
            height:32px;
            width: 120px;
            overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
        }
        .operation{
            display:none;
            float:right;
            width:82px;
            margin-top:7px;
            >a{
                width: 17px;
                height: 17px;
                float:left;
                
            }
            .play{
                background-position: -267px -268px;
                margin-right:10px;
            }
            .add{
                margin-top:2px;
                margin-right:6px;
                background-position: 0 -700px;
            }
            .favour{
                background-position: -297px -268px;
                margin-right:10px;
            }
        }

        &:hover{
            >a{
                width:80px;
            }
            .operation{
                display:inline-block;
            }
        }
       }
     }
 }
 .footer {
    height: 32px;
    clear: both;
    margin-right: 32px;
    line-height:32px;
    text-align:right;
    a {
      color: #000;
    }
  }
`