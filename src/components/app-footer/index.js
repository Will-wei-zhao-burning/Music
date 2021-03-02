/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-18 15:58:10
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-19 15:59:16
 */
//第三方库
import React, { Fragment, memo } from 'react'

//常量数据
import { footerLinks, footerLinksBtm, footerImages} from "@/common/local-data";

//styled-component组件
import { MusicFooterWrapper, MusicFooterLeft, MusicFooterRight} from './style'

export default memo(function MusicAppFooter() {

  const FooterLinks =(item,index )=>{
    if(index<2){
      return (
        <div className={item.className}>
            <span>{item.leftTitle}</span>
            <span>{item.rightTilte}
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkTitle}</a>
            </span>
        </div>
      )
    }
    else{
      return(
        <div className={item.className}>
          <a href={item.link}>{item.leftTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.linkTitle}</a>
        </div>
      )
    }
  }
  
  return (
    <MusicFooterWrapper className="wrap-v2">
      <MusicFooterLeft className="footer-left">
        <div className="link">
          {footerLinks.map((item, index) => {
            return (<Fragment key={item.title}>
              <a href={item.link}>{item.title}</a>
              <span className="line">|</span>
            </Fragment>
            )
          })}
        </div>
        {footerLinksBtm.map((item,index)=>{
          return FooterLinks(item,index)
        })}
      </MusicFooterLeft>
      <MusicFooterRight className="footer-right">
        {footerImages.map((item,index)=>{
          return (
            <li className="item" key={item.link}>
              <a className="link" href={item.link} target="_blank" rel="noopener noreferrer">123</a>
              <span className="title">{null}</span>
            </li>
          )
        })}
      </MusicFooterRight>
    </MusicFooterWrapper>
  )
})
