/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-19 20:40:23
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-19 20:50:37
 */
const devBaseURL = 'http://123.207.32.32:9001';
const proBaseURL = 'http://123.207.32.32:9001'

export const BASE_URL = process.env.NODE_ENV === 'development'?devBaseURL:proBaseURL

export const TIMEOUT = 5000;