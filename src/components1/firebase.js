
import firebase,{ initializeApp } from "firebase/compat/app";
import 'firebase/compat/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD9aSwLgt22OonWyNHpYgynYeqvkXrLbNE",
    authDomain: "uber-driver-otp-auth.firebaseapp.com",
    projectId: "uber-driver-otp-auth",
    storageBucket: "uber-driver-otp-auth.appspot.com",
    messagingSenderId: "780819275867",
    appId: "1:780819275867:web:9b4929203d42e2ec3f9f7e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;