<template>
  <form @submit.prevent="handlSubmit">
      <textarea
          placeholder="type a message and enter to send..."
          v-model="message"
>
      </textarea>
      <div class="error">{{error}}</div>
  </form>
</template>

<script>
import {ref} from 'vue'
import getuser from '../composables/getuser'
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useCollection'
export default {
    setup() {
        const { user }= getuser()
        const {addDoc,error}=useCollection('message')
        const message=ref('')
        const handleSubmit=async()=>{
            const chat ={
                name : user.value.displayName,
                message:message.value,
                createdAt: timestamp()
            }
            await addDoc(chat)
            if(!error.value){
                message.value=''
            }
            message.value=''
        }
        return{ 
            handleSubmit,
            message,error}
    }

}
</script>

<style>
form {
    margin :10px;
}
textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>