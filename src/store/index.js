import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const IsResumeOpen = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    IsResumeOpen,
    phone: IsResumeOpen ? "(+886) 988-288-335" : "",
    mail: IsResumeOpen ? "Maurokarc@gmail.com" : "",
    freelance: IsResumeOpen ? "Available" : "Not Available",
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {},
});
