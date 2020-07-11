import i18n from "../i18n";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  configure,
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import customRules from '../validate';

export default {
  install(Vue) {
    Vue.component("ValidationObserver", ValidationObserver);
    Vue.component("ValidationProvider", ValidationProvider);

    Object.keys(rules).forEach((rule) => {
      extend(rule, rules[rule]);
    });
    
    Object.keys(customRules).forEach((rule) => {
      extend(rule, customRules[rule]);
    });

    configure({
      // this will be used to generate messages.
      defaultMessage: (field, values) => {
        return i18n.t(`validations.${values._rule_}`, values);
      },
    });
  },
};
