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
    path: '/events/:path',
    name: 'Event',
    component: () => import(/* webpackChunkName: "All-News" */ '../views/News/News.vue')
  }, {
    path: '/videos',
    name: 'All-Videos',
    component: () => import(/* webpackChunkName: "Videos" */ '../views/Videos/All-Videos.vue')
  }, {
    path: '/videos/talks&performances',
    name: 'talks&performances',
    component: () => import(/* webpackChunkName: "Videos" */ '../views/Videos/Talks.vue')
  }, {
    path: '/videos/videos',
    name: 'videos',
    component: () => import(/* webpackChunkName: "Videos" */ '../views/Videos/Videos.vue')
  }, {
    path: '/videos/:path',
    name: 'Video',
    component: () => import(/* webpackChunkName: "Videos" */ '../views/Videos/VideoDefault.vue')
  }, {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "Speakers" */ '../views/Speakers/Speakers.vue')
  }, {
    path: '/news',
    name: 'All-News',
    component: () => import(/* webpackChunkName: "All-News" */ '../views/News/All-News.vue')
  }, {
    path: '/news/:path',
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
    name: 'AboutId',
    component: () => import(/* webpackChunkName: "All-News" */ '../views/News/News.vue'),
  }, {
    path: '/EditMD',
    name: 'EditMarkdown',
    component: () => import(/* webpackChunkName: "tool" */ '../views/EditFile/EditMarkdown.vue'),
  }, {
    path: '/newsletter/unsubscription',
    name: 'unsubscription',
    component: () => import(/* webpackChunkName: "tool" */ '../views/Unsubscription/Unsubscription.vue'),
  }, { // temp 
    path: '/data_demand',
    name: 'data_demand',
    component: () => import(/* webpackChunkName: "temp" */ '../views/temp/Data_Demand.vue'),
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
