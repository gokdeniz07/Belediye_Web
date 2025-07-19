// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfsF4q3LN03qD8U6EbzCNJ_cRHJKlrVWI",
  authDomain: "belediye-web-f109f.firebaseapp.com",
  projectId: "belediye-web-f109f",
  storageBucket: "belediye-web-f109f.firebasestorage.app",
  messagingSenderId: "1042266085412",
  appId: "1:1042266085412:web:168a2609d8e581fbde20b1"
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Servisleri başlat
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
