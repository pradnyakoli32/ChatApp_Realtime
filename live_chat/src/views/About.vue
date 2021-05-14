<template>
<div class ="welcome container">
  <div v-if="showlogin">
    <h1>Login </h1>
    <Login @login="enterChat" />
    <p>no account yet <span @click="showlogin=false">Signup</span>instead</p>
  </div>
  <div v-else><h1>Sign up></h1>
  <Signup @signup ="enterChat"/>
  <p>already account <span @click="showlogin=true">login</span> instead</p>
  </div>
  


</div>

  
</template>
<script>
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import {ref} from 'vue'
import {useRouter }from 'vue-router'
export default{
  components:{
    Signup,
    Login


  },
  setup(){
    const showlogin= ref(true);
    const router =useRouter()
    const enterChat =()=>{
      router.push({name:'Chatroom'})

    }
    return {showlogin, enterChat}
  }
}
</script>
<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width :300px;
  margin :20px auto;
}
.welcome label{
  display: block;
  margin: 20px 0 10px;
}
.welcome input{
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button{
  margin :20px auto;
}
</style>