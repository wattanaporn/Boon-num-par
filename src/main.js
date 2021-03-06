
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vuelidate from "vuelidate";
import "./App.scss";
import "./responsesive.scss";
import VueHtmlToPaper from "vue-html-to-paper";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VuetifyMask from "vuetify-mask";
// import Cloudinary, { CldImage, CldTransformation } from "cloudinary-vue";

// Vue.use(Cloudinary, {
//   configuration: { cloudName: "demo" },
//   components: {
//     CldImage,
//     CldTransformation
//   }
// });


import { Icon,Modal,Upload } from 'ant-design-vue';
import 'ant-design-vue/lib/upload/style/css';
import 'ant-design-vue/lib/icon/style/css';
import 'ant-design-vue/lib/modal/style/css';

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "/css/print_quo.css"
  ]
};
Vue.use(VueSweetalert2);
Vue.use(VueHtmlToPaper, options);
Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VuetifyMask);

Vue.use(Upload);
Vue.use(Icon);
Vue.use(Modal);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
