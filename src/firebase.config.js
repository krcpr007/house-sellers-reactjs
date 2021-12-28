// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuWxxrVbPplqh666U3WGKuEtCuy_sC6D4",
  authDomain: "house-sellers-app.firebaseapp.com",
  projectId: "house-sellers-app",
  storageBucket: "house-sellers-app.appspot.com",
  messagingSenderId: "5759281334",
  appId: "1:5759281334:web:29a97ad15fae2bcba8de17"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 