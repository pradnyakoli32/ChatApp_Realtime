<template>
<nav v-if="user">
    <div>
        <p>Hey there... {{user.displayName}} </p>
        <p class="email">currently logged in as...{{user.email}}</p>
    </div>
    <button @click="handleClick">log out</button>
    </nav>
</template>
<script>
import userlogout from '../composables/userlogout'
import getuser from '../composables/getuser'
export default {
    setup(){
        const {logout, error}= userlogout()
        const {user}=getuser()
        const handleClick= async ()=>{
            await logout()
            if(!error.value){
                console.log('user logged out')
            }
        }
        return { handleClick, user}
    }
}
</script>
<style scoped>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display : flex;
    justify-content: space-between;
    align-items: center;
}
nav p{
    margin: 2px auto;
    font-size :16px;
    color:#444;
}
nav p.email{
    font-size:14px;
    color:#999;
}
</style>