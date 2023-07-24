import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignInView from "@/views/SignInView.vue";

import LayoutDefault from '@/layouts/LayoutDefault.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta:{ layout: LayoutDefault }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/sign_in",
      name: "sign_in",
      component: SignInView,
    }
  ],
});

export default router;
