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
import MQuiz1 from "../views/quiz/MQuiz1.vue";
import MQuiz2 from "../views/quiz/MQuiz2.vue";
import MQuiz3 from "../views/quiz/MQuiz3.vue";
import MQuiz4 from "../views/quiz/MQuiz4.vue";
import SQuiz1 from "../views/quiz/SQuiz1.vue";
import SQuiz2 from "../views/quiz/SQuiz2.vue";
import SQuiz3 from "../views/quiz/SQuiz3.vue";
import SQuiz4 from "../views/quiz/SQuiz4.vue";
import SQuiz5 from "../views/quiz/SQuiz5.vue";
import SQuiz6 from "../views/quiz/SQuiz6.vue";

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


  {
    path: "/math/01",
    name: "MQuiz1",
    component: MQuiz1,
  },
  {
    path: "/math/02",
    name: "MQuiz2",
    component: MQuiz2,
  },
  {
    path: "/math/03",
    name: "MQuiz3",
    component: MQuiz3,
  },
  {
    path: "/math/04",
    name: "MQuiz4",
    component: MQuiz4,
  },
  {
    path: "/sci/01",
    name: "SQuiz1",
    component: SQuiz1,
  },
  {
    path: "/sci/02",
    name: "SQuiz2",
    component: SQuiz2,
  },
  {
    path: "/sci/03",
    name: "SQuiz3",
    component: SQuiz3,
  },
  {
    path: "/sci/04",
    name: "SQuiz4",
    component: SQuiz4,
  },
  {
    path: "/sci/05",
    name: "SQuiz5",
    component: SQuiz5,
  },
  {
    path: "/sci/06",
    name: "SQuiz6",
    component: SQuiz6,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
