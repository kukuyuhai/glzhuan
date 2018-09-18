
import * as types from '../mutationTypes'
// import { loginByCode } from '../../api/wechatAuth'
import { loadLoginStatus, loadToken, loadUserInfo } from '../../utils/cache'

import {
    saveToken,
    saveLoginStatus,
    saveUserInfo,
    removeToken,
    removeUserInfo,
} from '../../utils/cache'



const state = {
    loginStatus: loadLoginStatus(),//登录状态
    token: loadToken(),//token
    userInfo: loadUserInfo(),//用户登录信息
}

const actions = {
    //登录相关
    loginWechatAuth: ({ commit, state }, query) => {
        console.log("actions:query" + query)
        return new Promise((resolve, reject) => {
            resolve({ status: 1, code: query })
        })
    },
    //设置状态
    setLoginStatus: ({ commit, state }, query) => {
        if (query == 0 || query == 1) {
            //上线打开注释，本地调试注释掉
            removeToken()
            removeUserInfo()
        }
        commit(types.SET_LOGIN_STATUS, saveLoginStatus(query))
    },

    //保存用户个人信息
    setUserInfo: ({ commit, state }, query) => {
        commit(types.SET_USERINFO, saveUserInfo(query))
    }
}


const mutations = {
    [types.SET_USERINFO](state, userInfo) {
        state.userInfo = userInfo
    },
    [types.SET_LOGIN_STATUS](state, loginStatus) {
        state.loginStatus = loginStatus
    },
    [types.SET_TOKEN](state, token) {
        state.token = token
    },
}


const getters = {
    userInfo: state => state.userInfo,
    loginStatus: state => state.loginStatus,
    token: state => state.token
}

export default {
    state,
    mutations,
    getters,
    actions
}