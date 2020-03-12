import Vue from 'vue'
import App from './App.vue'

import VueSInput from "./lib/index.js";
Vue.use(VueSInput)

new Vue({
  el: '#app',
  render: h => h(App)
})
