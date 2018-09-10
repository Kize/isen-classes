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
      path: '/about',
      redirect: '/about/1/1',
    },
    {
      path: '/about/:slide/:step',
      name: 'about',
      component: () => import('./views/about/About.vue'),
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('./views/template/template.vue'),
    },

    // CLASS 1
    {
      path: '/hello-world',
      redirect: '/hello-world/1/1',
    },
    {
      path: '/hello-world/:slide/:step',
      name: 'hello-world',
      component: () => import('./views/class1/hello-world.vue'),
    },
    {
      path: '/markup',
      redirect: '/markup/1/1',
    },
    {
      path: '/markup/:slide/:step',
      name: 'markup',
      component: () => import('./views/class1/markup.vue'),
    },
    {
      path: '/pimp-my-page',
      redirect: '/pimp-my-page/1/1',
    },
    {
      path: '/pimp-my-page/:slide/:step',
      name: 'pimp-my-page',
      component: () => import('./views/class1/pimp-my-page.vue'),
    },
    {
      path: '/tp1-tv-show',
      name: 'TP1 - TV show',
      component: () => import('./views/class1/tp-tv-show.vue'),
    },
  ],
});
