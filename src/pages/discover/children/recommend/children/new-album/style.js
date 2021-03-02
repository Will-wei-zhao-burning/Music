/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-28 13:35:53
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-01 15:32:32
 */
import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  position: relative;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
  .album-roller{
    height: 184px;
    padding-left: 16px;
    background: #f5f5f5;
    border: 1px solid #fff;
    >a{
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
    }
    .controller-left{
        background-position: -260px -75px;
        left: 4px;
    }
    .controller-right{
        background-position: -300px -75px;
        right:4px;
    }
    .ant-carousel{
        width: 645px;
        height: 180px;
        .album-coverlist{
            margin: 28px 0 0 0;
            display:flex;
            align-items:center;
            justify-content:space-between;
        }
    }
  }
`