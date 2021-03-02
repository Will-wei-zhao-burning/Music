/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-28 13:41:10
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-28 14:16:32
 */
import styled from 'styled-components'

export const RcmHeaderWrapper = styled.div`
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;

    >a{
        float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    color:#333;
    }

    .left{
        float: left;
        margin: 7px 0 0 20px;
        font-size: 12px;
        color: #333;

        .line{
            margin: 0 10px;
            color: #ccc;
        }
    }

    .right{
        float: right;
        margin-top: 9px;

        i{
            background-position: 0 -240px;
            width: 12px;
           height: 12px;
           margin-left: 4px;
           display: inline-block;
        }
    }
`