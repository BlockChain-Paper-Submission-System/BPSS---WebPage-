import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Author',
    name: 'Author',
    component: () => import('../views/author.vue')
  },
  {
    path: '/Reviewer',
    name: 'Reviewer',
    component: () => import('../views/reviewer.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
