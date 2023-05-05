import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
const firebaseConfig = {
    apiKey: "AIzaSyBNZHLg_16UYhIACC2V1AwH71-cBs7ELic",
    authDomain: "netflix-clone-bd426.firebaseapp.com",
    projectId: "netflix-clone-bd426",
    storageBucket: "netflix-clone-bd426.appspot.com",
    messagingSenderId: "541523579302",
    appId: "1:541523579302:web:29c4a6f6c5fa3fa5767f67",
    measurementId: "G-B949DBQLZE"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;