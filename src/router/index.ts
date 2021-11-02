import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home-page" */ '@/views/Home/Home.vue'),
  },
  {
    path: '/product/:slug',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product-page" */ '@/views/Product/Product.vue'),
  },
  {
    path: '/style-guide',
    name: 'StyleGuide',
    component: () => import(/* webpackChunkName: "style-guide-page" */ '@/views/StyleGuide/StyleGuide.vue'),
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import(/* webpackChunkName: "forms-page" */ '@/views/Forms/Forms.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
