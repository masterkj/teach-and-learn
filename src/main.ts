import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins'

import './style/index.sass';
import vuetify from './plugins/vuetify';
// let baseUrl = 'http://travel.test/storage/'
let baseUrl = '/storage/'

Vue.prototype.$baseUrl = baseUrl
Vue.config.productionTip = false;
Vue.prototype.$fullUrl = (url: string) =>  {
  return baseUrl + url
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
