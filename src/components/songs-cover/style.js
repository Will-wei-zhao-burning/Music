/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-28 15:02:10
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-28 15:42:30
 */
import styled from 'styled-components'

export const SongCoverWrapper = styled.div`
  width:182px;
  height:204px;
  padding-left:42px;
  display: inline-block;
  .top{
    width: 140px;
    height: 140px;
    position: relative;

    img{
        width:100%;
    height:100%   
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;

        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }

  p{
    margin: 8px 0 3px;
    font-size: 14px;
    width:100%;
    padding:0px;
  }
  .cover-source {
    color: #666;
  }
`