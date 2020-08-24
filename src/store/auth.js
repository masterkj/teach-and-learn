import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    isSignedIn: true,
    accessToken: "sss",
  }),
  mutations: {
    updateAccessToken(state, accessToken) {
      state.accessToken = "Bearer " + accessToken;
    },
    updateSignInStatus(state, signedInStatus) {
      state.isSignedIn = signedInStatus;
    },
  },
  actions: {
    signIn(ctx, accessToken) {
      ctx.commit("updateAccessToken", accessToken);
      ctx.commit("updateSignInStatus", true);
    },
    signOut(ctx) {
      ctx.commit("updateAccessToken", "");
      ctx.commit("updateSignInStatus", false);
      router.push('/signin')
    },
  },
  getters: {
    accessToken(state) {
      return state.accessToken;
    },
    isSignedIn(state) {
      return state.isSignedIn
    }
  },
};
