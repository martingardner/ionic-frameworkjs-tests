import Vue from "vue";
import App from "./App.vue";
//import "./registerServiceWorker";
import router from "./router";

import Ionic from "@ionic/vue"; // Ionic add
//import { defineCustomElements as ionic } from "@ionic/core/loader"; // added line
//import { defineCustomElements as svgmorphing } from "stencil-svgpaths-morphing/dist/loader";
import { addIcons } from "ionicons"; // added line
import { ICON_PATHS } from "ionicons/icons"; // added line

import "@ionic/core/css/ionic.bundle.css"; // Ionic add

Vue.use(Ionic); // Ionic add
//ionic(window); // added line
//svgmorphing(window);
addIcons(ICON_PATHS); // added line
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
