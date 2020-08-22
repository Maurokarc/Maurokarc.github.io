import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showConact: false
  },
  mutations: {
    showConact(state, show) {
      state.showConact = show;
    }
  },
  getters: {},
  actions: {},
  modules: {}
});
