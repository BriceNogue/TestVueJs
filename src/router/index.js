import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import('../views/LoginView.vue')
    },
    {
      path: "/sign_in",
      name: "sign_in",
      component: () => import('../views/SignInView.vue')
    }
  ],
});

export default router;
