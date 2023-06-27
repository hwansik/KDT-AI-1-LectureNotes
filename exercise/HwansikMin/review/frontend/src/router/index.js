import Vue from 'vue'
import VueRouter from 'vue-router'
// @는 현재 src 폴더를 의미함.
import HomeView from '@/views/HomeView.vue'
import HtmlTest from '@/views/html/HtmlTest.vue'
import CssTest from '@/views/css/CssTest.vue'
import VueDataBindingPage from '@/views/basics/binding/VueDataBindingPage'
import VueClickEventPage from '@/views/basics/event/VueClickEventPage'
import VueInputEventPage from '@/views/basics/event/VueInputEventPage.vue'
/*
import 'vue파일명' from '@(src)/파일경로' 
위 형식으로 router설정을 해줘야한다.
App.vue에 <router-link to="/abcde">Abcde</router-link>
router/index.js에 import Abcde from '@/view/(파일경로)'를 쓰고
밑에 부분에 다음과 같이 path, name, component 요소를 넣어줘야한다.
const routes = [
  {
    path: '/abcde'
    name: 'Abcde'
    component: Abcde
  }
]
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
  },
  {
    path: '/cssTest',
    name: 'CssTest',
    component: CssTest
  },
  {
    path: '/vue-data-binding-page',
    name: '/VueDataBindingPage',
    component: VueDataBindingPage
  },
  {
    path: '/vue-click-event-page',
    name: '/VueClickEventPage',
    component: VueClickEventPage
  },
  {
    path: '/vue-input-event-page',
    name: '/VueInputEventPage',
    component: VueInputEventPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
