/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //accueil
import Register from '@/components/Register'
import Login from '@/components/Login'
import Rooms from '@/components/Rooms/Index'
import CreateRoom from '@/components/CreateRoom'
import ViewRoom from '@/components/ViewRoom/Index'
import EditRoom from '@/components/EditRoom'
import Restaurant from '@/components/Restaurant'
import Agenda from '@/components/Agenda'
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
    path: '/agenda',
    name: 'agenda',
    component: Agenda
  },
  {
  path: '/rooms/create',
    name: 'rooms-create',
    component: CreateRoom
  },
  {
    path: '/rooms/:roomId',
      name: 'room',
      component: ViewRoom
    },
    {
      path: '/rooms/:roomId/edit',
        name: 'room-edit',
        component: EditRoom
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