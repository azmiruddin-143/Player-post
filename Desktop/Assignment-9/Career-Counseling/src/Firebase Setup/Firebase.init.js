// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTEdzIJIg11mM4f_GME9nor5ZruFTrQS8",
  authDomain: "assignmet-9-a4cd8.firebaseapp.com",
  projectId: "assignmet-9-a4cd8",
  storageBucket: "assignmet-9-a4cd8.firebasestorage.app",
  messagingSenderId: "354946646081",
  appId: "1:354946646081:web:a8dc952f44ec4281d1c6c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)