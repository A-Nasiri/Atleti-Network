import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import FooterD from "@/components/default/FooterD";
import VuePageTransition from "vue-page-transition";

Vue.component("main-footer", FooterD);
Vue.use(VuePageTransition);
Vue.config.productionTip = false;

let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
