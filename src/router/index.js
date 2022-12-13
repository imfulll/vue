import Vue from "vue";
import Router from "vue-router";
// 라우터로 연결할 main_page, sub_page 컴포넌트 모듈 가져옴
import MainView from "../components/MainView.vue";
import AboutView from "../components/AboutView.vue"; //확장자명 .vue 지워도 됨
import LocationView from "../components/LocationView.vue"; //확장자명 .vue 지워도 됨

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // { path: "/vue/", component: main_page },
    // { path: "/vue/main", component: main_page },
    // { path: "/vue/sub", component: sub_page },
    { path: "/", component: MainView },
    { path: "/main", component: MainView },
    { path: "/about", component: AboutView },
    {
      path: "/information",
      name: "Information",
      component: () =>
        import(
          /* webpackChunkName: "databinding", webpackPrefetch:true */ "../components/InformationView.vue"
        ),
    },
    { path: "/location", component: LocationView },
  ],
});
