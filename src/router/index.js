import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue'),
  }, {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "Events" */ '../views/Events/Events.vue'),
    meta: {
      title: "活动"
    }
  }, {
    path: '/events/:path',
    name: 'Event',
    component: () => import(/* webpackChunkName: "All-News" */ '../views/News/News.vue'),
    meta: {
      title: "活动"
    }
  }, {
    path: '/videos',
    name: 'All-Videos',
    component: () => import(/* webpackChunkName: "Videos" */ '../views/Videos/All-Videos.vue'),
    meta: {
      title: "最新视频"
    }
  }, {
    path: '/videos/talks&performances',
    name: 'talks&performances',
    component: () => import(/* webpackChunkName: "Videos" */ '../views/Videos/Talks.vue'),
    meta: {
      title: "演讲与表演视频"
    }
  }, {
    path: '/videos/videos',
    name: 'videos',
    component: () => import(/* webpackChunkName: "Videos" */ '../views/Videos/Videos.vue'),
    meta: {
      title: "短片，活动视频"
    }
  }, {
    path: '/videos/:path',
    name: 'Video',
    component: () => import(/* webpackChunkName: "Videos" */ '../views/Videos/VideoDefault.vue'),
    meta: {
      title: "视频"
    }
  }, {
    path: '/speakers',
    name: 'All-Speakers',
    component: () => import(/* webpackChunkName: "Speakers" */ '../views/Speakers/All-Speakers.vue'),
    meta: {
      title: "讲者"
    }
  }, {
    path: '/contributor/:path',
    name: 'contributor',
    component: () => import(/* webpackChunkName: "Speakers" */ '../views/Contributors/ContributorSpeaker.vue'),
    meta: {
      title: "讲者"
    }
  }, {
    path: '/news',
    name: 'All-News',
    component: () => import(/* webpackChunkName: "All-News" */ '../views/News/All-News.vue'),
    meta: {
      title: "最新新闻"
    }
  }, {
    path: '/news/:path',
    name: 'News',
    component: () => import(/* webpackChunkName: "All-News" */ '../views/News/News.vue'),
    meta: {
      title: "新闻"
    }
  }, {
    path: '/parters',
    name: 'Partners',
    component: () => import(/* webpackChunkName: "Partners" */ '../views/Partners/Partners.vue'),
    meta: {
      title: ""
    }
  }, {
    path: '/community',
    name: 'Community',
    component: () => import(/* webpackChunkName: "community" */ '../views/Community/Community.vue'),
    meta: {
      title: ""
    }
  }, {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/AboutUs.vue'),
    meta: {
      title: "关于我们"
    }
  }, {
    path: '/about/contactus',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/ContactUs.vue'),
    meta: {
      title: "关于我们"
    }
  }, {
    path: '/about/frequently-asked-questions',
    name: 'FrequentlyAskedQuestions',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/FrequentlyAskedQuestions.vue'),
    meta: {
      title: "常见答疑"
    }
  }, {
    path: '/EditMD',
    name: 'EditMarkdown',
    component: () => import(/* webpackChunkName: "tool" */ '../views/EditFile/EditMarkdown.vue'),
    meta: {
      title: "编辑器"
    }
  }, {
    path: '/newsletter/unsubscription',
    name: 'unsubscription',
    component: () => import(/* webpackChunkName: "tool" */ '../views/Unsubscription/Unsubscription.vue'),
    meta: {
      title: "取消订阅邮件服务"
    }
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: () => import(/* webpackChunkName: "tool" */ '../views/Subscription/Subscription.vue'),
    meta: {
      title: "订阅信息管理"
    }
  }, {
    path: "/data_demand",
    name: "data_demand",
    component: () => import(/* webpackChunkName: "tool" */ '../views/data_demand/data_demand.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
