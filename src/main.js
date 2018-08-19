import Vue from 'vue';

import Eagle from 'eagle.js';
// import eagle.js default styles
import 'eagle.js/dist/eagle.css';
// import animate.css for slide transition
import 'animate.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

Vue.use(Eagle);
