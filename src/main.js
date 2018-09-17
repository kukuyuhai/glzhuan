// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import Vuex from 'vuex'
import App from './App'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import { DatetimePlugin, CloseDialogsPlugin, ConfigPlugin, BusPlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'
import wechatAuth from './plugins/wechatAuth'//微信登录插件
// import './utils/rem'//rem适配
import './filter'
const qs = require('qs') 

// 注释一下


FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(Vuex)

// let store = new Vuex.Store({})

sync(store, router)

// register moudle vux 
const shouldUseTransition = !/transition=none/.test(location.href)

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: shouldUseTransition ? 'forward' : ''
  },
  mutations: {
    updateDemoPosition(state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection(state, payload) {
      if (!shouldUseTransition) {
        return
      }
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition({ commit }, top) {
      commit({ type: 'updateDemoPosition', top: top })
    }
  }
})


// global VUX config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

// plugins
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)


if (process.env.platform === 'app') {
  Vue.use(AppPlugin, store)
}


// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', { direction: 'forward' })
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', { direction: '' })
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', { direction: 'forward' })
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    console.log("store.state.loginStatus:" + store.state.user.loginStatus)
    if (store.state.user.loginStatus == 0) {
      //微信未授权登录跳转到授权登录页面
      let url = window.location.href
      // //解决重复登录url添加重复的code与state问题
      let parseUrl = qs.parse(url.split('?')[1])
      let loginUrl
      if (parseUrl.code && parseUrl.state) {
        delete parseUrl.code
        delete parseUrl.state
        loginUrl = `${url.split('?')[0]}?${qs.stringify(parseUrl)}`
      } else {
        loginUrl = url
      }
      wechatAuth.redirect_uri = loginUrl
      store.dispatch('setLoginStatus', 1)
      window.location.href = wechatAuth.authUrl
    } else if (store.state.user.loginStatus == 1) {
      console.log("store.state.user.loginStatus == 1")
      if (window.location.href.indexOf('code') > -1) {
        let url = window.location.href.split("?")[1];
        let urlstr = url.split("#")[0]
        let fullPath = `${to.path}?${urlstr}`

        console.log(fullPath)
        try {
          wechatAuth.returnFromWechat(fullPath)
        } catch (err) {
          store.dispatch('setLoginStatus', 0)
          next()
        }


        // console.log(to.fullPath)
        // 
        //  ? url.split("#")[0] : "";

        // let fullPath = `${to.path}?${urlstr}`


        console.log("wechatAuth.codefullPath:" + wechatAuth.code);
        store.dispatch('loginWechatAuth', "wechatAuth.code").then((res) => {
          console.log(res)
          if (res.status == 1) {
            store.dispatch('setLoginStatus', 2)
            // window.location.href = `${window.location.href.split("?")[0]}#${to.path}`
          } else {
            store.dispatch('setLoginStatus', 0)
          }
          next()

        }).catch((err) => {
          console.log("err" + err)
          next()
        })
      }
    } else {
      next()
    }
  }
})

router.afterEach(function (to) {
  isPush = false
  store.commit('updateLoadingStatus', { isLoading: false })
  if (process.env.NODE_ENV === 'production') {

  }
})

console.log(process.env.VUE_APP_WECHAT_APPID);
Vue.use(wechatAuth, {
  appid: process.env.VUE_APP_WECHAT_APPID
})


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
