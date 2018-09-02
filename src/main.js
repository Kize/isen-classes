import Vue from 'vue';

import Eagle, { Options } from 'eagle.js';

import 'eagle.js/dist/eagle.css';
import 'animate.css';

// highlight.js style
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Options.hljs = hljs;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

Vue.use(Eagle);
