import { ref } from "vue"
import { projectAuth } from '../firebase/config'
const error = ref(null)
const signup = async( email, password, displayName) =>{
    error.value = null
    try{
        const res= await projectAuth.createUserWithEmailAndPassword(email, password)
        if(!res){
            throw new Error('could not completed')
        }
        console.log(res.user)
        await res.user.updateProfile({displayName})
        error.value=null
        return res
    }
    catch(err){
        console.log(err.message)
        error.value=err.message
    }
}
const userSignup=()=>{
    return {error, signup}
}
export default userSignup