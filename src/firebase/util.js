
import firebase from 'firebase/app'
import  'firebase/auth'
import  'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC69GTkRXXtoRWL34MqzQyWHlIGegRzI1g",
    authDomain: "products-4aa0e.firebaseapp.com",
    databaseURL: "https://products-4aa0e.firebaseio.com",
    projectId: "products-4aa0e",
    storageBucket: "products-4aa0e.appspot.com",
    messagingSenderId: "59604608635",
    appId: "1:59604608635:web:b3328451b52039cba7a4de",
    measurementId: "G-LZLQ7258MX"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const fireStore = firebase.firestore()


  

  export default firebase