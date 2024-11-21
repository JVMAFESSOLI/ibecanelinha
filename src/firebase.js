import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9rrGNig1I7_guadwQOClaDY5739ZCK4M",
  authDomain: "ibecanelinha-5e917.firebaseapp.com",
  projectId: "ibecanelinha-5e917",
  storageBucket: "ibecanelinha-5e917.firebasestorage.app",
  messagingSenderId: "317686839118",
  appId: "1:317686839118:web:48d747126e3dc8267fd01f",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
