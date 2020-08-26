"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var store_1 = require("@/store");
vue_1["default"].use(vue_router_1["default"]);
var routes = [
    {
        path: '/signup',
        name: 'Signup',
        component: function () { return Promise.resolve().then(function () { return require('@/views/Signup/index.vue'); }); }
    },
    {
        path: '/signin',
        name: 'Signin',
        component: function () { return Promise.resolve().then(function () { return require('@/views/Signin/index.vue'); }); }
    },
    {
        path: '/verify-number',
        name: 'Verify-number',
        component: function () { return Promise.resolve().then(function () { return require('@/views/verify-number.vue'); }); }
    },
    {
        path: '/',
        name: 'Main-application',
        component: function () { return Promise.resolve().then(function () { return require('@/main-application.vue'); }); },
        redirect: 'Home',
        children: [
            {
                path: '/',
                name: 'Home',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Home.vue'); }); }
            },
            {
                path: '/profile-edit',
                name: 'Profile-edit',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Profile-edit/index.vue'); }); }
            },
            {
                path: '/profile-info',
                name: 'Profile-info',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Profile-info/index.vue'); }); }
            },
            {
                path: '/university-services',
                name: 'university-services',
                component: function () { return Promise.resolve().then(function () { return require('@/views/university-services.vue'); }); }
            },
            {
                path: '/university-services/teaching-materials',
                name: 'teaching-materials',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Teaching-materials/index.vue'); }); }
            },
            {
                path: '/teaching-schools',
                name: 'teaching-schools',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Teaching-schools/index.vue'); }); }
            },
            {
                path: '/teaching-schools/results',
                name: 'teaching-schools-results',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Teaching-schools/teaching-schools-results.vue'); }); }
            },
            {
                path: '/university-services/show-teachers',
                name: 'show-teachers',
                component: function () { return Promise.resolve().then(function () { return require('@/views/show-teachers/index.vue'); }); }
            },
            {
                path: '/university-services/show-univirsities-teachers',
                name: 'show-univirsities-teachers',
                component: function () { return Promise.resolve().then(function () { return require('@/views/show-teachers/show-univirsities-teachers.vue'); }); }
            },
            {
                path: '/university-services/show-teachers/results',
                name: 'show-teachers-results',
                component: function () { return Promise.resolve().then(function () { return require('@/views/show-teachers/show-teachers-results.vue'); }); }
            },
            {
                path: '/university-services/teaching-materials/complete-teacher-info',
                name: 'complete-teacher-info',
                component: function () { return Promise.resolve().then(function () { return require('@/views/complete-teacher-info/index.vue'); }); }
            },
            {
                path: '/student-notification',
                name: 'student-notification',
                component: function () { return Promise.resolve().then(function () { return require('@/views/student-notification/index.vue'); }); }
            },
        ]
    },
];
var router = new vue_router_1["default"]({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});
router.beforeEach(function (to, from, next) {
    if (to.name !== 'Signup'
        && to.name !== 'Signin' &&
        to.name !== 'Home' &&
        !store_1["default"].getters['Auth/isSignedIn']) {
        next({ name: 'Signin' });
    }
    else if ((to.name === 'Signup'
        || to.name === 'Signin') &&
        store_1["default"].getters['Auth/isSignedIn']) {
        next({ name: 'Home' });
    }
    else {
        next();
    }
});
exports["default"] = router;
