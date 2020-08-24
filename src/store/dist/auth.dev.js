"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _router = _interopRequireDefault(require("@/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  state: function state() {
    return {
      isSignedIn: true,
      accessToken: "sss"
    };
  },
  mutations: {
    updateAccessToken: function updateAccessToken(state, accessToken) {
      state.accessToken = "Bearer " + accessToken;
    },
    updateSignInStatus: function updateSignInStatus(state, signedInStatus) {
      state.isSignedIn = signedInStatus;
    }
  },
  actions: {
    signIn: function signIn(ctx, accessToken) {
      ctx.commit("updateAccessToken", accessToken);
      ctx.commit("updateSignInStatus", true);
    },
    signOut: function signOut(ctx) {
      ctx.commit("updateAccessToken", "");
      ctx.commit("updateSignInStatus", false);

      _router["default"].push('/signin');
    }
  },
  getters: {
    accessToken: function accessToken(state) {
      return state.accessToken;
    },
    isSignedIn: function isSignedIn(state) {
      return state.isSignedIn;
    }
  }
};
exports["default"] = _default;