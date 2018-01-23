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

console.log('>>> loaded');

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
