import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import reportsRoutes from '@/modules/reports/router';

Vue.use(Router);

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld,
  },
];

const routes = baseRoutes.concat(reportsRoutes);

export default new Router({
  routes,
});
