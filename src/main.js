import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/helpers/filers/filers"
import axios from "axios"
Vue.config.productionTip = false

//配置axios
// 本地
// axios.defaults.baseURL = 'http://localhost:3000/api/'
// 
axios.defaults.baseURL = 'http://www.tedxshenzhen.cn/api/'
Vue.prototype.$axios = axios

import VueLazyLoad from "vue-lazyload"
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
