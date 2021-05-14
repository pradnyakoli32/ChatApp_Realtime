import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Chatroom from '../views/Chatroom.vue'
import {projectAuth} from '../firebase/config'

const requireAuth=(to, from, next)=>{
  let user=projectAuth.currentUser
  console.log('current user in auth guard:',user)
  if(!user){
    next({name : 'About'})
  }else{
    next()
  }

}
const routes = [
  {
    path : '/',
    name: 'About',
    component:About
  },
  {
    path :'/chatroom',
    name: 'Chatroom',
    component:Chatroom,
    beforeEnter :requireAuth
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
