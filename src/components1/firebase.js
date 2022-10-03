
import firebase from "firebase/app";
import 'firebase/auth';


  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPnGzjP__P_2SxmVYZN3I63kJ0yi7lgA8",
  authDomain: "uber-driver-clone-auth.firebaseapp.com",
  projectId: "uber-driver-clone-auth",
  storageBucket: "uber-driver-clone-auth.appspot.com",
  messagingSenderId: "957240572940",
  appId: "1:957240572940:web:84b6c090d84d005d72c229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 