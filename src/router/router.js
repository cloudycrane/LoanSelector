import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/HelloWorld')
    // hidden: true
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/List.vue')
    // hidden: true
  }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
