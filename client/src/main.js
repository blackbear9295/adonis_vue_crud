import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import App from './App.vue';
import Panel from './components/Panel.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify'; // path to vuetify export

Vue.config.productionTip = false;

sync(store, router);

Vue.component('Panel', Panel);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
