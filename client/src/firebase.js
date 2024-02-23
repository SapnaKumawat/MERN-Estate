// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-61701.firebaseapp.com",
  projectId: "mern-estate-61701",
  storageBucket: "mern-estate-61701.appspot.com",
  messagingSenderId: "50890655775",
  appId: "1:50890655775:web:2d1ce803835512cbf3ad2a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);