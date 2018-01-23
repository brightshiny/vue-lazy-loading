import Vue from 'vue';
import Router from 'vue-router';
import reportsRoutes from '@/modules/reports/router';

Vue.use(Router);

const HelloWorld = () => import('@/components/HelloWorld');


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
