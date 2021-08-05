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
import History from "../views/History.vue";
import Wait from '../views/extra/WaitApprove'
import ExtraSelect from '../views/extra/Extra'
import Check from '../views/extra/Check'
import AddExtra from '../views/extra/AddQuestion'


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
    path: "/planet/:path",
    name: "Maths",
    component: Maths,
  },
  {
    path: "/planet/:path",
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
    path: '/planet/:path/:type',
    name: 'QuestionTable',
    component: QuestionTable
  },
  {
    path: '/planet/:path/:type/:id',
    name: 'Question',
    component: Question
  },
  { path: "/history",
    name: "History",
    component: History,
  },
  {
    path: '/wait',
    name: 'Wait',
    component: Wait
  },
  {
    path: '/planet/:path',
    name: 'ExtraSelect',
    component: ExtraSelect
  },
  {
    path: '/wait/:id/check',
    name: 'Check',
    component: Check
  },
  {
    path: '/planet/:path/add',
    name: 'AddExtra',
    component: AddExtra
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
