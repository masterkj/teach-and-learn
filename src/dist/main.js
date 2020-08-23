"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var index_js_1 = require("./store/index.js");
require("./plugins");
require("./style/index.sass");
var baseUrl = 'http://travel.test/';
vue_1["default"].prototype.$baseUrl = baseUrl;
vue_1["default"].config.productionTip = false;
vue_1["default"].prototype.$fullUrl = function (url) {
    return baseUrl + url;
};
new vue_1["default"]({
    router: router_1["default"],
    store: index_js_1["default"],
    render: function (h) { return h(App_vue_1["default"]); }
}).$mount('#app');
