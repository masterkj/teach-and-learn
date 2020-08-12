import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Signup/index.vue'),
  },
  {
    path: '/profile-info',
    name: 'Profile-info',
    component: () => import('@/views/Profile-info/index.vue'),
  },
  {
    path: '/signin',
    name: 'Sign-in',
    component: () => import('@/views/Signin/index.vue'),
  },
  {
    path: '/teaching-materials',
    name: 'teaching-materials',
    component: () => import('@/views/Teaching-materials/index.vue'),
  },
  {
    path: '/show-teachers',
    name: 'show-teachers',
    component: () => import('@/views/show-teachers/index.vue'),
  },
  {
    path: '/complete-teacher-info',
    name: 'complete-teacher-info',
    component: () => import('@/views/complete-teacher-info/index.vue'),
  },
  {
    path: '/student-notification',
    name: 'student-notification',
    component: () => import('@/views/student-notification/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
