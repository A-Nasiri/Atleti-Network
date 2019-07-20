import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/Home";
import Gmap from "@/views/user/Gmap";
import SignUp from "@/views/auth/SignUp";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";
import SetProfile from "@/views/auth/SetProfile";
import UserProfile from '@/views/user/UserProfile'
import News from '@/views/News'
import firebase from "firebase/app";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/news",
      name: "News",
      component: News
    },
    {
      path: "/map",
      name: "Gmap",
      component: Gmap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      component: SignUp,
      children: [
        { path: "", name: "Register", component: Register },
        { path: "set-profile", name: "SetProfile", component: SetProfile }
      ]
    },
    {
      path: "/profile/:id",
      name: "UserProfile",
      component: UserProfile,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser

    if(user) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router

// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
