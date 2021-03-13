import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import LogIn from '../views/LogIn.vue';
import Feedback from '../views/Feedback.vue';
import DashboardAdmin from '../views/DashboardAdmin.vue';
import DashboardPuntoC from '../views/DashboardPuntoC.vue';
import Try from '../views/Try.vue';
import Manage from '../views/Manage.vue';
import Inbox from '../views/Inbox.vue';
import CaseM from '../views/CaseM.vue';
import Roles from '../views/Roles.vue';

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
    path: '/dashboardpuntoc',
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
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox,
  },
  {
    path: '/casem',
    name: 'CaseM',
    component: CaseM,
  },
  {
    path: '/roles',
    name: 'Roles',
    component: Roles,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
