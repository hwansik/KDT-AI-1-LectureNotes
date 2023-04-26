import Vue from "vue";
import VueRouter from "vue-router";
// @는 현재 src 폴더를 의미함
import HomeView from "@/views/HomeView.vue";
import HtmlTest from "@/views/html/HtmlTest.vue";
import CssTest from "@/views/css/CssTest.vue";
import VueDataBindingPage from "@/views/basics/binding/VueDataBindingPage.vue";
import VueClickEventPage from "@/views/basics/event/VueClickEventPage.vue";
import VueInputEventPage from "@/views/basics/event/VueInputEventPage.vue";
// 네이밍 이슈 존재 (왜 v-model에 대한 것을 두 번 표현 했는가)
import DuplexWithModelPage from "@/views/basics/vModel/DuplexWithModelPage.vue";
import VueCheckboxPage from "@/views/basics/vModel/VueCheckboxPage.vue";
import VueMultiCheckboxPage from "@/views/basics/vModel/VueMultiCheckboxPage.vue";

import ComponentTestPage from "@/views/basics/componentTest/ComponentTestPage.vue";

import DataSendTestPage from "@/views/basics/axios/DataSendTestPage.vue";

import DataResponseFromSpringPage from "@/views/basics/axios/DataResponseFromSpringPage.vue";

import VueLifeCycleTestPage from "@/views/basics/lifeCycle/VueLifeCycleTestPage.vue";

//
import VueHomeworkPage from "@/views/basics/homework/VueHomeworkPage.vue";
import VueHomeworkPage2_1 from "@/components/homework/problem2/VueHomeworkPage2_1.vue";
import VueHomeworkPage2_2 from "@/components/homework/problem2/VueHomeworkPage2_2.vue";
import VueHomeworkPage3 from "@/components/homework/problem3/VueHomeworkPage3GetMapping.vue";
import VueHomeworkPage3Copy from "@/components/homework/problem3/VueHomeworkPage3PostMapping.vue";
import VueHomeworkPage4 from "@/components/homework/problem4/VueHomeworkPage4.vue";
import VueHomeworkPage5 from "@/components/homework/problem5/VueHomeworkPage5.vue";
import VueBasicProbs from "@/views/basics/homework/VueBasicProbs.vue";

import BoardListPage from "@/views/board/BoardListPage.vue";
import BoardRegisterPage from "@/views/board/BoardRegisterPage.vue";
import BoardReadPage from "@/views/board/BoardReadPage.vue";
import BoardModifyPage from "@/views/board/BoardModifyPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/htmlTest",
    name: "HtmlTest",
    component: HtmlTest,
  },
  {
    path: "/cssTest",
    name: "CssTest",
    component: CssTest,
  },
  {
    path: "/vue-data-binding-page",
    name: "VueDataBindingPage",
    component: VueDataBindingPage,
  },
  {
    path: "/vue-click-event-page",
    name: "VueClickEventPage",
    component: VueClickEventPage,
  },
  {
    path: "/vue-input-event-page",
    name: "VueInputEventPage",
    component: VueInputEventPage,
  },
  {
    path: "/duplex-model-test-page",
    name: "DuplexWithModelPage",
    component: DuplexWithModelPage,
  },
  {
    path: "/checkbox-test-page",
    name: "VueCheckboxPage",
    component: VueCheckboxPage,
  },
  {
    path: "/multi-checkbox-test-page",
    name: "VueMultiCheckboxPage",
    component: VueMultiCheckboxPage,
  },
  {
    path: "/global-component-test-page",
    name: "ComponentTestPage",
    component: ComponentTestPage,
  },
  {
    path: "/axios-test-page",
    name: "DataSendTestPage",
    component: DataSendTestPage,
  },
  {
    path: "/random-dice-from-spring",
    name: "DataResponseFromSpringPage",
    component: DataResponseFromSpringPage,
  },
  {
    path: "/vue-lifecycle-test",
    name: "VueLifeCycleTestPage",
    component: VueLifeCycleTestPage,
  },
  //
  {
    path: "/vue-homework-page",
    name: "VueHomeworkPage",
    component: VueHomeworkPage,
  },
  {
    path: "/vue-homework-page2_1",
    name: "VueHomeworkPage2_1",
    component: VueHomeworkPage2_1,
  },
  {
    path: "/vue-homework-page2_2",
    name: "VueHomeworkPage2_2",
    component: VueHomeworkPage2_2,
  },
  {
    path: "/vue-homework-page3",
    name: "VueHomeworkPage3",
    component: VueHomeworkPage3,
  },
  {
    path: "/vue-homework-page3-Copy",
    name: "VueHomeworkPage3Copy",
    component: VueHomeworkPage3Copy,
  },
  {
    path: "/vue-homework-page4",
    name: "VueHomeworkPage4",
    component: VueHomeworkPage4,
  },
  {
    path: "/vue-homework-page5",
    name: "VueHomeworkPage5",
    component: VueHomeworkPage5,
  },
  {
    path: "/vue-basic-probs",
    name: "VueBasicProbs",
    component: VueBasicProbs,
  },
  {
    path: "/board-list-page",
    name: "BoardListPage",
    component: BoardListPage,
  },
  {
    path: "/board-register-page",
    name: "BoardRegisterPage",
    component: BoardRegisterPage,
  },
  {
    path: "/board-read-page/:boardId",
    name: "BoardReadPage",
    components: {
      default: BoardReadPage,
    },
    props: {
      default: true,
    },
    // 다중 컴포넌트가 되면 component->components
    // props:{default:true}가 되어야 데이터가 전달됨
  },
  {
    path: "/board-modify-page/:boardId",
    name: "BoardModifyPage",
    components: {
      default: BoardModifyPage,
    },
    props: {
      default: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
