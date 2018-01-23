/* eslint no-shadow: "off", no-param-reassign: "off" */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  omContext: null,
};

const getters = {};

const mutations = {
  setOmContext(ls, omc) {
    ls.omContext = omc;
  },
};

const actions = {};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
