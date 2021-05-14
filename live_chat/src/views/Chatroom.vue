<template>
<div class= "container">
   <Navbar />
   <ChatWindow />
   <NewChatForm />
   
</div>
</template>
<script>
import ChatWindow from '../components/ChatWindow'
import NewChatForm from '../components/NewChatForm'
import Navbar from '../components/Navbar.vue'
import getuser from '../composables/getuser'
import {watch} from 'vue'
import {useRouter} from 'vue-router'
export default{
   components:{ Navbar,NewChatForm,ChatWindow },
   setup(){
      const {user} =getuser()
      const router = useRouter()
      watch(user,()=>{
         if(!user.value)
         {router.push({name:'About'})}
      })
   }


}
</script>