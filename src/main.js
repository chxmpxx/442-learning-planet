import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import vueAxios from "vue-axios";
import VueSwal from "vue-swal";

Vue.use(VueSwal);
Vue.use(vueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
