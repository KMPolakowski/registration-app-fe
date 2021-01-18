import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import VueResource from 'vue-resource'

Vue.use(VueCookies);
Vue.use(VueResource);

Vue.config.productionTip = false;
Vue.$cookies.config('7d');

new Vue({
  render: h => h(App),
}).$mount('#app')
