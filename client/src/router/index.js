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
    path: '/price-list',
    name: 'PriceList',
    component: () => import(/* webpackChunkName: "price-list" */ '../views/PriceList.vue')
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: () => import(/* webpackChunkName: "exercises" */ '../views/Exercises.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/services/:name',
    name: 'SingleService',
    component: () => import(/* webpackChunkName: "services" */ '../views/SingleService.vue')
  },
  {
    path: '/coaches/:name',
    name: 'SingleCoach',
    component: () => import(/* webpackChunkName: "coaches" */ '../views/SingleCoach.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
