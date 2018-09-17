'use strict'
const target = process.env.npm_lifecycle_event
let obj

switch (target) {
  //测试版本
  case 'test':
    obj = {
      NODE_ENV: '"production"',
      VUE_APP_WECHAT_APPID: '"wxe949c6d0eedfdaf9"',//测试微信appid
      API_URL: '"https://www.test.com"',//测试接口地址
    }
    break
  //正式版本
  case 'build':
    obj = {
      NODE_ENV: '"production"',
      VUE_APP_WECHAT_APPID: '"wxe949c6d0eedfdaf9"',//正式微信appid
      API_URL: '"https://www.test.com"',//正式接口地址
    }
}

module.exports = obj