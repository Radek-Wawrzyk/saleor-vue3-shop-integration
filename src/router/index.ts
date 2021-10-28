import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home-page" */ '@/views/Home/Home.vue'),
  },
  {
    path: '/style-guide',
    name: 'StyleGuide',
    component: () => import(/* webpackChunkName: "style-guide-page" */ '@/views/StyleGuide/StyleGuide.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
