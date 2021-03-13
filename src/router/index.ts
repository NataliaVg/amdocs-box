import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import LogIn from '../views/LogIn.vue';
import Feedback from '../views/Feedback.vue';
import DashboardAdmin from '../views/DashboardAdmin.vue';
import DashboardPuntoC from '../views/DashboardPuntoC.vue';
import Try from '../views/Try.vue';
import Manage from '../views/Manage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
  },
  {
    path: '/dashboardAdmin',
    name: 'DashboardAdmin',
    component: DashboardAdmin,
  },
  {
    path: '/dashboardPuntoC',
    name: 'DashboardPuntoC',
    component: DashboardPuntoC,
  },
  {
    path: '/try',
    name: 'Try',
    component: Try,
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
