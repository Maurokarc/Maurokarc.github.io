import Vue from "vue";
import VueI18n from "vue-i18n";
import cn from "./lang/cn";
import tw from "./lang/tw";
import en from "./lang/en";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "tw",
  fallbackLocale: "tw",
  messages: {
    cn,
    tw,
    en
  }
});

export default i18n;
