import Vue from "vue";
//import VueRouter from "vue-router";
import { IonicVueRouter } from "@ionic/vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

//Vue.use(VueRouter);
Vue.use(IonicVueRouter); //added line

export default new IonicVueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});

/*
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
*/
