import Vue from "vue";
import Router from "vue-router";
import routes from "./route";

var router = new Router({
  mode: "history",
  routes,
  linkActiveClass: "", //active
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

// fix Uncaught (in promise)
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

// Navigation hook
router.beforeEach(async (to, from, next) => {
  next();
});

// add global-level functionality to Vue
Vue.use(Router);

export default router;
