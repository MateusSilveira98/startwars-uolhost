import Vue from 'vue';
import App from '@/App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import '@/filters/index';
import '@/App.scss';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
