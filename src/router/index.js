import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Maths from "../views/Math.vue";
import Sci from "../views/Sci.vue";
import Leaderboard from "../views/Leaderboard";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import ExchangeRewards from "../views/ExchangeRewards.vue";
import Question from "../views/question/Question";
import MQuestionTable from "../views/question/MQuestionTable";
import SQuestionTable from "../views/question/SQuestionTable";
import XQuestionTable from "../views/question/XQuestionTable";
import History from "../views/History.vue";
import Wait from "../views/extra/WaitApprove";
import ExtraSelect from "../views/extra/Extra";
import Check from "../views/extra/Check";
import AddExtra from "../views/extra/AddQuestion";
import AddReward from "../views/AddReward";
import RewardAdmin from "../views/RewardAdmin";

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
    path: "/planet/maths",
    name: "Maths",
    component: Maths,
  },
  {
    path: "/planet/scis",
    name: "Sci",
    component: Sci,
  },
  {
    path: "/rewards",
    name: "ExchangeRewards",
    component: ExchangeRewards,
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: Leaderboard,
  },
  {
    path: "/planet/maths/:type",
    name: "MQuestionTable",
    component: MQuestionTable,
  },
  {
    path: "/planet/scis/:type",
    name: "SQuestionTable",
    component: SQuestionTable,
  },
  {
    path: "/planet/extras/:type",
    name: "XQuestionTable",
    component: XQuestionTable,
  },
  {
    path: "/region/:path/:type/:id",
    name: "Question",
    component: Question,
  },
  { path: "/history", name: "History", component: History },

  {
    path: "/wait",
    name: "Wait",
    component: Wait,
  },
  {
    path: "/planet/:path",
    name: "ExtraSelect",
    component: ExtraSelect,
  },
  {
    path: "/wait/:id/check",
    name: "Check",
    component: Check,
  },
  {
    path: "/planet/:path/add",
    name: "AddExtra",
    component: AddExtra,
  },
  {
    path: "/addreward",
    name: "AddReward",
    component: AddReward,
  },
  {
    path: "/rewardadmin",
    name: "RewardAdmin",
    component: RewardAdmin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
