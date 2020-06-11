import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { va } from "./api/index.js";
import VueAxios from 'vue-axios'
Vue.use(VueAxios, va)
Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
