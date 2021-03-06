import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default {
  install(Vue) {
    library.add(faGlobeAmericas, faFacebook, faGithub, faLinkedin);
    Vue.component("font-awesome-icon", FontAwesomeIcon);
  }
};
