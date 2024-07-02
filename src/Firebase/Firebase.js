// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUfoChnLTK4NPY931Q460Z1XhXyK7IF_w",
  authDomain: "fir-login-b1df3.firebaseapp.com",
  projectId: "fir-login-b1df3",
  storageBucket: "fir-login-b1df3.appspot.com",
  messagingSenderId: "1097017017924",
  appId: "1:1097017017924:web:db519f9d1874dc20461e11",
  measurementId: "G-FBHK0KW93H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);