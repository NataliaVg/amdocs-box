import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import LogIn from '../views/LogIn.vue';
import Feedback from '../views/Feedback.vue';
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
