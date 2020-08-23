export default {
  namespaced: true,
  state: () => ({
    profile: {},
  }),
  mutations: {
    clear(state) {
      state.profile = {};
    },
    completeUpdate(state, profile) {
      state.profile = profile;
    },
  },
};
