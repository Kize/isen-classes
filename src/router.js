import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about/:slide/:step',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('./views/template/template.vue'),
    },

    // CLASS 1
    {
      path: '/hello-world/:slide/:step',
      name: 'hello-world',
      component: () => import('./views/class1/hello-world.vue'),
    },
    {
      path: '/markup/:slide/:step',
      name: 'markup',
      component: () => import('./views/class1/markup.vue'),
    },
    {
      path: '/pimp-my-page/:slide/:step',
      name: 'pimp-my-page',
      component: () => import('./views/class1/pimp-my-page.vue'),
    },
  ],
});
