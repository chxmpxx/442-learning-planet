import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Maths from "../views/Math.vue";
import Sci from "../views/Sci.vue";
import Leaderboard from "../views/Leaderboard";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Logout from "../views/auth/Logout.vue";
import ExchangeRewards from "../views/ExchangeRewards.vue";
import Question from '../views/question/Question'
import QuestionTable from "../views/question/QuestionTable"

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
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/:path",
    name: "Maths",
    component: Maths,
  },
  {
    path: "/:path",
    name: "Sci",
    component: Sci,
  },
  {
    path: "/exchange_rewards",
    name: "ExchangeRewards",
    component: ExchangeRewards,
  },
  {
    path: "/board",
    name: "Leaderboard",
    component: Leaderboard,
  },
  {
    path: '/:path/:type',
    name: 'QuestionTable',
    component: QuestionTable
  },
  {
    path: '/:path/:type/:id',
    name: 'Question',
    component: Question
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
