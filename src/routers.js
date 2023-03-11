import HomeS from "./components/HomeS.vue";
import signUp from "./components/signUp.vue";
import loginPage from "./components/loginPage.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomeS",
    component: HomeS,
    path: "/",
  },
  {
    name: "signUp",
    component: signUp,
    path: "/sign-Up",
  },
  {
    name: "loginPage",
    component: loginPage,
    path: "/login-Page",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
