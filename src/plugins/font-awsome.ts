import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)