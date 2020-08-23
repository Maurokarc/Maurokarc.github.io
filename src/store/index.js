import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showConact: false,
    lightBox: {
      show: false,
      img: ""
    }
  },
  mutations: {
    showConact(state, show) {
      state.showConact = show;
    },
    showLightBox(state, payload) {
      if (payload.show !== null && payload.show !== undefined) state.lightBox.show = payload.show;
      if (payload.img !== null && payload.img !== undefined) state.lightBox.img = payload.img;
    }
  },
  getters: {},
  actions: {},
  modules: {}
});
