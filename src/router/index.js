import { createRouter, createWebHistory } from 'vue-router';
import EditNote from '../views/EditNote.vue';
import ListeView from '../views/ListeView.vue';
import HomeView from '@/views/HomeView.vue';
import DeleteNote from '../views/DeleteNote.vue';
import Ajout from '../views/Ajout.vue';
import App from '@/App.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  // },
  {
    path: '/ajout',
    name: 'ajout',
    component: Ajout,
  },
  {
    path: '/delete',
    name: 'delete',
    component: DeleteNote,
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditNote,
  },
  {
    path: '/liste',
    name: 'liste',
    component: ListeView,
  },
  // Ajoutez d'autres routes ici
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
