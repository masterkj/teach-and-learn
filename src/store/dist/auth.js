"use strict";
exports.__esModule = true;
var router_1 = require("@/router");
exports["default"] = {
    namespaced: true,
    state: function () { return ({
        isSignedIn: true,
        accessToken: "sss"
    }); },
    mutations: {
        updateAccessToken: function (state, accessToken) {
            state.accessToken = "Bearer " + accessToken;
        },
        updateSignInStatus: function (state, signedInStatus) {
            state.isSignedIn = signedInStatus;
        }
    },
    actions: {
        signIn: function (ctx, accessToken) {
            ctx.commit("updateAccessToken", accessToken);
            ctx.commit("updateSignInStatus", true);
        },
        signOut: function (ctx) {
            ctx.commit("updateAccessToken", "");
            ctx.commit("updateSignInStatus", false);
            router_1["default"].push('/signin');
        }
    },
    getters: {
        accessToken: function (state) {
            return state.accessToken;
        },
        isSignedIn: function (state) {
            return state.isSignedIn;
        }
    }
};
