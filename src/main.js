import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import FooterD from "@/components/default/FooterD";
import LeagueTable from "@/components/LeagueTable";
import LastResult from "@/components/LastResult";
import VuePageTransition from "vue-page-transition";

Vue.component("main-footer", FooterD);
Vue.component("last-result", LastResult);
Vue.component("league-table", LeagueTable);
Vue.use(VuePageTransition);

Vue.filter("snippet", val => {
  if (!val || typeof val != "string") return "";
  if (val.length > 60) {
    val = val.slice(0, 60);
    return val + "...";
  } else {
    return val;
  }
});

Vue.filter("trimDate", val => {
  if (!val || typeof val != "string") return "";
  if (val.length > 11) {
    val = val.slice(0, 10);
    return val;
  }
});

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
