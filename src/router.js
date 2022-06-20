import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: './pages/coaches/CoachesList.vue' },
    {
      path: '/coaches/:id',
      component: './pages/coaches/CoachDetails.vue',
      children: [
        { path: 'contact', component: './pages/requests/ContactCoach.vue' },
      ],
    },
    { path: '/register', component: './pages/coaches/CoachRegistration.vue' },
    { path: '/requests', component: './pages/requests/RequestsReceived.vue' },
    { path: '/:notFound(.*)', component: './pages/NotFound.vue' },
  ],
});

export default router;
