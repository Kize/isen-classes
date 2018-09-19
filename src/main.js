import Vue from 'vue';

import Eagle from 'eagle.js';

import 'eagle.js/dist/eagle.css';
import 'animate.css';
import 'highlight.js/lib/index';
import 'highlight.js/styles/default.css';

import VueHighlightJS from 'vue-highlightjs';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

Vue.use(Eagle);
Vue.use(VueHighlightJS);
