import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Classify from '@/pages/classify/index'
import Carts from '@/pages/carts/index'
import Mine from '@/pages/mine/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass: 'focus',
  routes: [
    {
      path: '/',
      redirect: {
      name: 'Index'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        isTabBar: true
      }
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify,
      meta: {
        isTabBar: true
      }
    },
    {
      path: '/carts',
      name: 'Carts',
      component: Carts,
      meta: {
        isTabBar: true
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        isTabBar: true
      }
    },
  ]
})
