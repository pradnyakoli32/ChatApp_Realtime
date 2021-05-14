import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKtM5nQvuDRjCndr-THq5KJoZBYYdvDzI",
  authDomain: "chat-app-4930f.firebaseapp.com",
  projectId: "chat-app-4930f",
  storageBucket: "chat-app-4930f.appspot.com",
  messagingSenderId: "750370277422",
  appId: "1:750370277422:web:a282ebf6743b51333577bf",
  measurementId: "G-84C3F2C9NV"
}
 firebase.initializeApp(firebaseConfig)
 const projectAuth =firebase.auth()
 const projectfirestore = firebase.firestore()
const timestamp= firebase.firestore.FieldValue.serverTimestamp
export {projectAuth,

    projectfirestore, timestamp}