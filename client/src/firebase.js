// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e2735.firebaseapp.com",
  projectId: "mern-estate-e2735",
  storageBucket: "mern-estate-e2735.appspot.com",
  messagingSenderId: "935179243435",
  appId: "1:935179243435:web:23ac08714068e4d447ccee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);