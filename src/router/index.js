import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../components/Index.vue')
    },
    {
      path: '/user',
      name: 'UserCenter',
      component: () => import('../components/UserCenter.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../components/Contact.vue')
    },
    {
      path: '/withdraw',
      name: 'WithDraw',
      component: () => import('../components/WithDraw.vue')
    },
    {
      path: '/reward/details',
      name: 'RewardDetails',
      component: () => import('../components/RewardDetails.vue')
    },
    {
      path: '/PerfectInformation',
      name: 'PerfectInformation',
      component: () => import('../components/PerfectInformation.vue')
    }, {
      path: '/friends',
      name: 'Friends',
      component: () => import('../components/Friends.vue')
    },
    {
      path: '/my/trado',
      name: "trado",
      component: () => import('../components/Trado.vue'),
    }, 
    {
      path: '/my/trado/details',
      name: "tradoDeails",
      component: () => import('../components/TradoDetails.vue')
    },
     {
      path: '/my/help',
      name: 'Help',
      component: () => import('../components/Help.vue')
    }
  ]
})
