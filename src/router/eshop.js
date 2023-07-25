import HomeView from "@/views/eshop/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignInView from "@/views/SignInView.vue";

import LayoutDefault from "@/layouts/LayoutDefault.vue";

export default [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { layout: LayoutDefault },
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
    },
];
