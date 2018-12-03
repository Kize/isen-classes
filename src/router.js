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
      name: 'tp1-tv-show',
      component: () => import('./views/class1/tp-tv-show.vue'),
    },

    // CLASS 2
    {
      path: '/the-hitchhikers-guide-to-the-javascript',
      redirect: '/the-hitchhikers-guide-to-the-javascript/1/1',
    },
    {
      path: '/the-hitchhikers-guide-to-the-javascript/:slide/:step',
      name: 'the-hitchhikers-guide-to-the-javascript',
      component: () => import('./views/class2/hitchhikers-guide.vue'),
    },
    {
      path: '/dom-events',
      redirect: '/dom-events/1/1',
    },
    {
      path: '/dom-events/:slide/:step',
      name: 'dom-events',
      component: () => import('./views/class2/dom-events.vue'),
    },
    {
      path: '/tp2-beta-series',
      name: 'tp2-beta-series',
      component: () => import('./views/class2/tp-beta-series.vue'),
    },

    // CLASS 3
    {
      path: '/object-and-class/:slide/:step',
      name: 'object-and-class',
      component: () => import('./views/class3/object-and-class.vue'),
    },
    {
      path: '/object-and-class',
      redirect: '/object-and-class/1/1',
    },
    {
      path: '/inception/:slide/:step',
      name: 'inception',
      component: () => import('./views/class3/inception.vue'),
    },
    {
      path: '/inception',
      redirect: '/inception/1/1',
    },
    {
      path: '/tp3-draw-some-shapes',
      name: 'tp3',
      component: () => import('./views/class3/tp-3-draw-some-shapes.vue'),
    },

    // CLASS 4
    {
      path: '/async/:slide/:step',
      name: 'async',
      component: () => import('./views/class4/async.vue'),
    },
    {
      path: '/async',
      redirect: '/async/1/1',
    },
    {
      path: '/tp4-myokom',
      name: 'tp4',
      component: () => import('./views/class4/tp-4-myokom.vue'),
    },

    // CLASS 5
    {
      path: '/node.js/:slide/:step',
      name: 'node.js',
      component: () => import('./views/class5/node.js.vue'),
    },
    {
      path: '/node.js',
      redirect: '/node.js/1/1',
    },
    {
      path: '/tp5-gif-it',
      name: 'tp5',
      component: () => import('./views/class5/tp-5-gif-it.vue'),
    },

    // CLASS 6
    {
      path: '/tests-tests-tests/:slide/:step',
      name: 'tests-tests-tests',
      component: () => import('./views/class6/tests-tests-tests.vue'),
    },
    {
      path: '/tests-tests-tests',
      redirect: '/tests-tests-tests/1/1',
    },
    {
      path: '/tp6',
      name: 'tp6',
      component: () => import('./views/class6/tp-6.vue'),
    },
  ],
});
