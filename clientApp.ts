import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbbb9avzJP9acOBrfWDYCn5c-vDdAt98Y",
  authDomain: "readme-generator-19236.firebaseapp.com",
  projectId: "readme-generator-19236",
  storageBucket: "readme-generator-19236.appspot.com",
  messagingSenderId: "938709680771",
  appId: "1:938709680771:web:a53eeda4fce93ea1b211b6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);

export { app, firestore };
