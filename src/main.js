import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueNumber from "vue-number-animation";
import * as VueGoogleMaps from "vue2-google-maps";
import Lightbox from 'vue-easy-lightbox'

Vue.use(Lightbox)
Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places" // necessary for places input
  }
});

Vue.use(VueNumber);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";

Vue.use(VueGlide);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
import { VBHover } from "bootstrap-vue";
// Note: Vue automatically prefixes the directive name with 'v-'
Vue.directive("b-hover", VBHover);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
