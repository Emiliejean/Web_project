/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //accueil
import Register from '@/components/Register'
import Login from '@/components/Login'
import Rooms from '@/components/Rooms/Index'
import CreateRoom from '@/components/CreateRoom'
import CreateAgenda from '@/components/CreateAgenda'
import ViewRoom from '@/components/ViewRoom/Index'
import ViewAgenda from '@/components/ViewAgenda/Index'
import EditRoom from '@/components/EditRoom'
import EditAgenda from '@/components/EditAgenda'
import Restaurant from '@/components/Restaurant'
import Agendas from '@/components/Agendas/Index'
import AdminRoomsPanel from '@/components/Rooms/AdminRoomsPanel'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
{
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: Rooms
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: Restaurant
  },
  {
    path: '/agendas',
    name: 'agendas',
    component: Agendas
  },
  {
  path: '/rooms/create',
    name: 'rooms-create',
    component: CreateRoom
  },
  {
    path: '/agendas/create',
      name: 'agendas-create',
      component: CreateAgenda
    },
  {
    path: '/rooms/:roomId',
      name: 'room',
      component: ViewRoom
    },
    {
      path: '/agendas/:agendaId',
        name: 'agenda',
        component: ViewAgenda
      },
    {
      path: '/rooms/:roomId/edit',
        name: 'room-edit',
        component: EditRoom
      },
      {
        path: '/agendas/:agendaId/edit',
          name: 'agenda-edit',
          component: EditAgenda
        },
      {
        path: '*',
        redirect: 'root'
      },
      {
        path: '/admin/rooms',
        name: 'admin-rooms',
        component: AdminRoomsPanel
      }
  ]
})
/* eslint-disable */