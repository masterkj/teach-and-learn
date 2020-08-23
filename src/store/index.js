import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './auth'
import Profile from './profile'

import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'teach-and-learn',
  storage: window.localStorage
})
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Profile
  },
  plugins: [vuexPersist.plugin]

});
