'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_WECHAT_APPID:'"wxe949c6d0eedfdaf9"',
  VUE_APP_API_URL:'""'
})
