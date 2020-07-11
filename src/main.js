import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import store from "./store";
import vuetify from "./plugins/vuetify";
import alertPlugin from "./plugins/swalAlert";
import validatePlugin from "./plugins/validate";
import Lightbox from "vue-easy-lightbox";
Vue.use(Lightbox);

//Vue.config.productionTip = false

/* Plugins */
Vue.use(alertPlugin);
Vue.use(validatePlugin);

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
