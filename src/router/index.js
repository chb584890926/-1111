import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layouts from '../components/layouts/layouts'
import kada from '../components/layouts/kada'
import problem from '../components/layouts/problem'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layouts',
      component: layouts
    },
    {
      path: '/poation',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/kada',
      name: 'kada',
      component: kada
    },
    {
      path: '/problem/:id',
      name: 'problem',
      component: problem
    }
  ]
})
