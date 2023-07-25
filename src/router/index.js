import Vue from "vue";
import VueRouter from "vue-router";

import eshopRouter from "./eshop.js";
import houseRouter from "./house.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    ...eshopRouter,
    ...houseRouter,
  ],
});

export default router;
