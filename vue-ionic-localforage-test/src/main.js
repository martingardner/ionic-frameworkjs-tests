import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Ionic from "@ionic/vue";
import VueLocalForage from "vue-localforage";
import "@ionic/core/css/ionic.bundle.css";

Vue.use(Ionic); // Ionic add
Vue.use(VueLocalForage);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
