import Vue from "vue";
import Router from "vue-router";
import Gmap from "@/views/home/Gmap";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/map",
      name: "Gmap",
      component: Gmap
    }
  ]
});

// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
