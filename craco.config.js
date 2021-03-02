/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-02-18 15:34:44
 * @LastEditors: BurNing
 * @LastEditTime: 2021-02-25 15:25:37
 */
const path = require("path");

const resolve = dir => path.resolve(__dirname,dir);

module.exports = {
    webpack :{
        alias:{
            "@":resolve("src"),
            "components":resolve("src/components"),
            "service":resolve("src/service"),
            "pages":resolve("src/pages")
        }
    }
}