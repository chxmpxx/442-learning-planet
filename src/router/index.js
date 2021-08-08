import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Maths from "../views/Math.vue";
import Sci from "../views/Sci.vue";
import Leaderboard from "../views/Leaderboard";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import ExchangeRewards from "../views/reward/ExchangeRewards.vue";
import Question from "../views/question/Question";
import MT1 from "../views/question/math/M1Table";
import XQuestionTable from "../views/question/XQuestionTable";
import History from "../views/History.vue";
import Wait from "../views/extra/WaitApprove";
import ExtraSelect from "../views/extra/Extra";
import Check from "../views/extra/Check";
import AddExtra from "../views/extra/AddQuestion";
import MT2 from "../views/question/math/M2Table";
import MT3 from "../views/question/math/M3Table";
import MT4 from "../views/question/math/M4Table";
import ST1 from "../views/question/sci/S1Table";
import ST2 from "../views/question/sci/S2Table";
import ST3 from "../views/question/sci/S3Table";
import ST4 from "../views/question/sci/S4Table";
import ST5 from "../views/question/sci/S5Table";
import ST6 from "../views/question/sci/S6Table";
import AddReward from "../views/reward/AddReward";
import RewardAdmin from "../views/reward/RewardAdmin";
import EditReward from "../views/reward/EditReward";
import Logout from '../views/auth/Logout'

Vue.use(VueRouter);

const routes = [
  {
    path: "/planet/scis/1",
    name: "ST1",
    component: ST1,
  },
  {
    path: "/planet/scis/2",
    name: "ST2",
    component: ST2,
  },
  {
    path: "/planet/scis/3",
    name: "ST3",
    component: ST3,
  },
  {
    path: "/planet/scis/4",
    name: "ST4",
    component: ST4,
  },
  {
    path: "/planet/scis/5",
    name: "ST5",
    component: ST5,
  },
  {
    path: "/planet/scis/6",
    name: "ST6",
    component: ST6,
  },
  {
    path: "/planet/maths/2",
    name: "MT2",
    component: MT2,
  },
  {
    path: "/planet/maths/3",
    name: "MT3",
    component: MT3,
  },
  {
    path: "/planet/maths/4",
    name: "MT4",
    component: MT4,
  },
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
    name: "MT1",
    component: MT1,
  },
  {
    path: "/planet/extras/1",
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
    path: "/add-reward",
    name: "AddReward",
    component: AddReward,
  },
  {
    path: "/reward-admin",
    name: "RewardAdmin",
    component: RewardAdmin,
  },
  {
    path: "/reward-admin/:index/edit/:id",
    name: "EditReward",
    component: EditReward,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
