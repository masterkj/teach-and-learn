import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Signup/index.vue'),
  },
  {
    path: '/signin',
    name: 'Sign-in',
    component: () => import('@/views/Signin/index.vue'),
  },
  {
    path: '/verify-number',
    name: 'Verify-number',
    component: () => import('@/views/verify-number.vue'),
  },
  {
    path: '/',
    name: 'Main-application',
    component: () => import('@/main-application.vue'),
    redirect: 'Home',
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/profile-edit',
        name: 'Profile-edit',
        component: () => import('@/views/Profile-edit/index.vue'),
      },
      {
        path: '/profile-info',
        name: 'Profile-info',
        component: () => import('@/views/Profile-info/index.vue'),
      },
      {
        path: '/university-services',
        name: 'university-services',
        component: () => import('@/views/university-services.vue'),
      },
      {
        path: '/university-services/teaching-materials',
        name: 'teaching-materials',
        component: () => import('@/views/Teaching-materials/index.vue'),
      },
      {
        path: '/teaching-schools',
        name: 'teaching-schools',
        component: () => import('@/views/Teaching-schools/index.vue'),
      },
      {
        path: '/university-services/show-teachers',
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
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
