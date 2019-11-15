import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'



axios.defaults.baseURL = 'http://0.0.0.0:8000/mock/api';
axios.defaults.withCredentials = true;
axios.defaults.debug = true;
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')



