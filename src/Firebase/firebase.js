import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUfoChnLTK4NPY931Q460Z1XhXyK7IF_w",
  authDomain: "fir-login-b1df3.firebaseapp.com",
  projectId: "fir-login-b1df3",
  storageBucket: "fir-login-b1df3.appspot.com",
  messagingSenderId: "1097017017924",
  appId: "1:1097017017924:web:db519f9d1874dc20461e11",
  measurementId: "G-FBHK0KW93H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
