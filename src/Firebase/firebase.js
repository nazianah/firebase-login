import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTbnFT499onBueWNtkuy_SF2lOXZ1HTOI",
  authDomain: "register-cd2cc.firebaseapp.com",
  projectId: "register-cd2cc",
  storageBucket: "register-cd2cc.appspot.com",
  messagingSenderId: "430953567589",
  appId: "1:430953567589:web:e39034cce3af92046afd8c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
