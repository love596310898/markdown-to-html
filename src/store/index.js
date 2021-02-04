import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [persistedState()],
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
