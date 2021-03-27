import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue')
  }, {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "Events" */ '../views/Events/Events.vue')
  }, {
    path: '/videos',
    name: 'Videos',
    component: () => import(/* webpackChunkName: "Videos" */ '../views/Videos/Videos.vue')
  }, {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "Speakers" */ '../views/Speakers/Speakers.vue')
  }, {
    path: '/all-news',
    name: 'All-News',
    component: () => import(/* webpackChunkName: "All-News" */ '../views/News/All-News.vue')
  }, {
    path: '/news/:name',
    name: 'News',
    component: () => import(/* webpackChunkName: "All-News" */ '../views/News/News.vue')
  }, {
    path: '/parters',
    name: 'Partners',
    component: () => import(/* webpackChunkName: "Partners" */ '../views/Partners/Partners.vue')
  }, {
    path: '/community',
    name: 'Community',
    component: () => import(/* webpackChunkName: "community" */ '../views/Community/Community.vue')
  }, {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue'),
  }, {
    path: '/about/:id',
    name: 'About',
    component: () => import(/* webpackChunkName: "All-News" */ '../views/News/News.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
