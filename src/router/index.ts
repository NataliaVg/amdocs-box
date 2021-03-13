import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import LogIn from '../views/LogIn.vue';
import Feedback from '../views/Feedback.vue';
import Inbox from '../views/Inbox.vue';
import CaseM from '../views/CaseM.vue';
import Roles from '../views/Roles.vue';
import Progress from '../views/Progress.vue';
import Closed from '../views/Closed.vue';
import Area from '../views/Area.vue';
import AddArea from '../views/AddArea.vue';

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
  {
    path: '/progress',
    name: 'Progress',
    component: Progress,
  },
  {
    path: '/closed',
    name: 'Closed',
    component: Closed,
  },
  {
    path: '/area',
    name: 'Area',
    component: Area,
  },
  {
    path: '/addarea',
    name: 'AddArea',
    component: AddArea,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
