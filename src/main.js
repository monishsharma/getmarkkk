
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
Vue.config.productionTip = false;
import * as VueGoogleMaps from "vue2-google-maps";

require("dotenv").config();

Vue.use(VueGoogleMaps, {
  load: { key: 'AIzaSyCO1hqnhKB7xokxBCpMylPHNjvrZw29QpQ'}
});


new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
