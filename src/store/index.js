import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'


const store = new Vuex.Store({
    modules: {
        user
    },
    plugins: debug ? [createLogger()] : []
})

export default store;