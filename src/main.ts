import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import './plugins'

import './style/index.sass';
let baseUrl = 'http://travel.test/'
Vue.prototype.$baseUrl = baseUrl
Vue.config.productionTip = false;
Vue.prototype.$fullUrl = (url: string) =>  {
  return baseUrl + url
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
