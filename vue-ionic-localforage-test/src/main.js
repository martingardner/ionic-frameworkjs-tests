import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Ionic from "@ionic/vue"; // Ionic add
import "@ionic/core/css/ionic.bundle.css"; // Ionic add
Vue.use(Ionic); // Ionic add

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
