import Swal from "sweetalert2";

export default {
  install(Vue) {
    Vue.prototype.$alertSuccess = function(msg) {
      return Swal.fire({
        title: msg,
        icon: "success",
        showCloseButton: false,
      });
    };
    Vue.prototype.$alertInfo = function(msg) {
      return Swal.fire({
        title: msg,
        icon: "info",
        showCloseButton: false,
      });
    };
    Vue.prototype.$alertConfirm = function(msg) {
      return Swal.fire({
        title: msg,
        icon: "question",
        confirmButtonText: "Yes",
        showCancelButton: true,
      });
    };
    Vue.prototype.$alertWarn = function(msg) {
      return Swal.fire({
        title: msg,
        icon: "warning",
        confirmButtonText: "Got it",
        showCloseButton: false,
      });
    };
    Vue.prototype.$alertError = function(msg) {
      return Swal.fire({
        title: msg,
        icon: "error",
        showCloseButton: false,
      });
    };
  },
};
