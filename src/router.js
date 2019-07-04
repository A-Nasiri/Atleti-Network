import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/Home";
import Gmap from "@/views/user/Gmap";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/map",
      name: "Gmap",
      component: Gmap
    }
  ]
});

// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
