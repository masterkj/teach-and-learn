"use strict";
exports.__esModule = true;
exports["default"] = {
    namespaced: true,
    state: function () { return ({
        profile: {}
    }); },
    mutations: {
        clear: function (state) {
            state.profile = {};
        },
        completeUpdate: function (state, profile) {
            state.profile = profile;
        }
    }
};
