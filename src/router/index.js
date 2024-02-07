import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // Define your routes here
  {path: '/login', component: () => import('../views/LoginView.vue') },
  {path: '/register', component: () => import('../views/RegisterView.vue')},
  {path: "/", component: () => import('../views/WelcomeView.vue')},
  // other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
