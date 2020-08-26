import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    isSignedIn: true,
    accessToken: "sss",
  }),
  mutations: {
    updateAccessToken(state: any, accessToken: any) {
      state.accessToken = "Bearer " + accessToken;
    },
    updateSignInStatus(state: any, signedInStatus: any) {
      state.isSignedIn = signedInStatus;
    },
  },
  actions: {
    signIn(ctx: any, accessToken: any) {
      ctx.commit("updateAccessToken", accessToken);
      ctx.commit("updateSignInStatus", true);
    },
    signOut(ctx: any) {
      ctx.commit("updateAccessToken", "");
      ctx.commit("updateSignInStatus", false);
      router.push('/signin')
    },
  },
  getters: {
    accessToken(state: any) {
      return state.accessToken;
    },
    isSignedIn(state: any) {
      return state.isSignedIn
    }
  },
};
