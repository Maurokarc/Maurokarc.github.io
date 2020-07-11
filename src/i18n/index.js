import Vue from "vue";
import VueI18n from "vue-i18n";
import cn from "./lang/cn";
import tw from "./lang/tw";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "tw",
  fallbackLocale: "tw",
  messages: {
    cn,
    tw,
  },
});

export default i18n;
