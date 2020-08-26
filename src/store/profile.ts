export default {
  namespaced: true,
  state: () => ({
    profile: {},
  }),
  mutations: {
    clear(state: any) {
      state.profile = {};
    },
    completeUpdate(state: any, profile: any) {
      state.profile = profile;
    },
  },
};
