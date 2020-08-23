import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import store from "./store";
import vuetify from "./plugins/vuetify";
import alertPlugin from "./plugins/swalAlert";
import validatePlugin from "./plugins/validate";
import fasPlugin from "./plugins/fontawesome";
import LoadScript from "vue-plugin-load-script";
import Lightbox from "vue-easy-lightbox";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(LoadScript);
Vue.use(Lightbox);

/* Plugins */
Vue.use(alertPlugin);
Vue.use(validatePlugin);
Vue.use(fasPlugin);

new Vue({
  i18n,
  store,
  vuetify,
  render: h => h(App),
  created: AOS.init({
    duration: 1200,
    once: true
  })
}).$mount("#app");
