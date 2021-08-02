import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Math from '../views/Math.vue'
import Sci from '../views/Sci.vue'
import Leaderboard from '../views/Leaderboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/math',
    name: 'Math',
    component: Math
  },
  {
    path: '/sci',
    name: 'Sci',
    component: Sci
  },
  {
    path: 'board',
    name: 'Leaderboard',
    component: Leaderboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
