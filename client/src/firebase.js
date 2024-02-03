// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prism-estate.firebaseapp.com",
  projectId: "prism-estate",
  storageBucket: "prism-estate.appspot.com",
  messagingSenderId: "526342219378",
  appId: "1:526342219378:web:5dca486bf19f0de9d804eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);