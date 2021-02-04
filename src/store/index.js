import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rootPage: '/',
  },
  getters: {
    rootPage(state) {
      return state.rootPage;
    },
  },
  mutations: {
    updateRootPage(state, payload) {
      state.rootPage = payload;
    },
  },
});
