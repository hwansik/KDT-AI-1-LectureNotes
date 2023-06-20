import Vue from 'vue'
import VueRouter from 'vue-router'
// @는 현재 src 폴더를 의미함.
import HomeView from '@/views/HomeView.vue'
import HtmlTest from '@/views/html/HtmlTest.vue'

/*
import 'vue파일명' from '@(src)/파일경로' 
위 형식으로 router설정을 해줘야한다.
*/

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/htmlTest',
    name: 'HtmlTest',
    component: HtmlTest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
