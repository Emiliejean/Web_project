/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //accueil
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong/Index'
import EditSong from '@/components/EditSong'
import Restaurant from '@/components/Restaurant'
import Agenda from '@/components/Agenda'
import AdminSongsPanel from '@/components/Songs/AdminSongsPanel'
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
    path: '/songs',
    name: 'songs',
    component: Songs
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
  path: '/songs/create',
    name: 'songs-create',
    component: CreateSong
  },
  {
    path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
        name: 'song-edit',
        component: EditSong
      },
      {
        path: '*',
        redirect: 'root'
      },
      {
        path: '/admin/songs',
        name: 'admin-songs',
        component: AdminSongsPanel
      }
  ]
})
/* eslint-disable */