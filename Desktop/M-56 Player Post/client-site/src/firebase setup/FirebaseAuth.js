// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAefMX3_nuOdMEI8bI9xWY_xYWVyxhJuFg",
  authDomain: "player-projects-fb3af.firebaseapp.com",
  projectId: "player-projects-fb3af",
  storageBucket: "player-projects-fb3af.firebasestorage.app",
  messagingSenderId: "951426672059",
  appId: "1:951426672059:web:d0cf9e8a97370f43d2909e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);