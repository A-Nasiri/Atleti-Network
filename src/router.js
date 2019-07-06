import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/Home";
import Gmap from "@/views/user/Gmap";
import SignUp from "@/views/auth/SignUp";
import Register from "@/views/auth/Register";
import SetProfile from "@/views/auth/SetProfile";

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
    },
    {
      path: "/signup",
      component: SignUp,
      children: [
        { path: "", name: "Register", component: Register },
        { path: "set-profile", name: "SetProfile", component: SetProfile }
      ]
    }
  ]
});

// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
