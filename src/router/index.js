import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta:{
        title:'给力赚'
      },
      component: () => import('../components/Index.vue')
    },
    {
      path: '/user',
      name: 'UserCenter',
      meta:{
        title:'我的'
      },
      component: () => import('../components/UserCenter.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      meta:{
        title:'通讯信息'
      },
      component: () => import('../components/Contact.vue')
    },
    {
      path: '/withdraw',
      name: 'WithDraw',
      meta:{
        title:'提现                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      '
      },
      component: () => import('../components/WithDraw.vue')
    },
    {
      path: '/reward/details',
      name: 'RewardDetails',
      meta:{
        title:'奖金明细'
      },
      component: () => import('../components/RewardDetails.vue')
    },
    {
      path: '/PerfectInformation',
      name: 'PerfectInformation',
      meta:{
        title:'个人资料'
      },
      component: () => import('../components/PerfectInformation.vue')
    }, {
      path: '/friends',
      name: 'Friends',
      meta:{
        title:'邀请好友'
      },
      component: () => import('../components/Friends.vue')
    },
    {
      path: '/my/trado',
      name: "trado",
      meta:{
        title:'我的提现'
      },
      component: () => import('../components/Trado.vue'),
    }, 
    {
      path: '/my/trado/details',
      name: "tradoDeails",
      meta:{
        title:'提现详情'
      },
      component: () => import('../components/TradoDetails.vue')
    },
     {
      path: '/my/help',
      name: 'Help',
      meta:{
        title:'帮助中心'
      },
      component: () => import('../components/Help.vue')
    },
    {
      path: '/feedback/:id',
      name: 'Feedback',
      meta:{
        title:'问题反馈'
      },
      component: () => import('../components/Feedback.vue')
    }
  ]
})
