/* eslint no-shadow: "off", no-param-reassign: "off" */

const state = {
  someDate: null,
};

const getters = {};

const mutations = {
  setSomeDate(state, date) {
    state.someDate = date;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
