// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlToU44il7UDEMT5mtVn6Z2d21kIClCZM",
  authDomain: "mysite-1656b.firebaseapp.com",
  projectId: "mysite-1656b",
  storageBucket: "mysite-1656b.firebasestorage.app",
  messagingSenderId: "76852428151",
  appId: "1:76852428151:web:7ef2361acaaf2360d0b572",
  measurementId: "G-7Y41ERPZ0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    console.log("Firebase telemetry initialized...");
});