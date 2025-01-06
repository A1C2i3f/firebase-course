// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXYbmc1byoRJwaFBwxNmqbFR_smU2ToME",
  authDomain: "fir-course-ce1f0.firebaseapp.com",
  projectId: "fir-course-ce1f0",
  storageBucket: "fir-course-ce1f0.firebasestorage.app",
  messagingSenderId: "493715572289",
  appId: "1:493715572289:web:a48286d595579fcfd7a8c0",
  measurementId: "G-SRXCNPRGJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);