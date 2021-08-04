import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Math from "../views/Math.vue";
import Sci from "../views/Sci.vue";
import Leaderboard from "../views/Leaderboard";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Logout from "../views/auth/Logout.vue";
import ExchangeRewards from "../views/ExchangeRewards.vue";
import History from "../views/History.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },

  {
    path: "/math",
    name: "Math",
    component: Math,
  },
  {
    path: "/sci",
    name: "Sci",
    component: Sci,
  },
  {
    path: "/rewards",
    name: "ExchangeRewards",
    component: ExchangeRewards,
  },
  {
    path: "/board",
    name: "Leaderboard",
    component: Leaderboard,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
