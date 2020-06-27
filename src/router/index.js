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
  },
  {
    path: '/Editor',
    name: 'Editor',
    component: () => import('../views/editor.vue')
  },
  {
    path: '/Query',
    name: 'Query',
    component: () => import('../views/query.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
