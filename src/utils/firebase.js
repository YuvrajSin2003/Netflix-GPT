// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsLS_s5oRch-jRcnwIdOYkBvC1fiweQMI",
  authDomain: "netflixgpt-56b48.firebaseapp.com",
  projectId: "netflixgpt-56b48",
  storageBucket: "netflixgpt-56b48.firebasestorage.app",
  messagingSenderId: "404746418582",
  appId: "1:404746418582:web:b3e804d31a75f0784e45b7",
  measurementId: "G-344NBTPJBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();