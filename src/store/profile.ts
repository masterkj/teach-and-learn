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
  getters: {
    isCompletedInfo(state: any) {
      if (state.profile.info_completed !== undefined) {
        return state.profile.is_completed_info;
      }
      return true;
    },
    isVerifiedNumber(state: any) {
      if (state.profile.number_verified !== undefined) {
        return state.profile.is_verified_number;
      }
      return true;
    },
  },
};
