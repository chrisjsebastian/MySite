// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);

// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', async () => {
    console.log("Firebase telemetry initialized...");

    const counterElement = document.getElementById('visit-counter');
    if (counterElement) {
        const docRef = doc(db, 'stats', 'page-visits');
        try {
            // Increment the counter by 1. Merge true ensures the document is created if it doesn't exist yet.
            await setDoc(docRef, { count: increment(1) }, { merge: true });
            
            // Fetch the newly updated value and display it
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                counterElement.textContent = docSnap.data().count;
            }
        } catch (error) {
            console.error("Error updating visit counter:", error);
            counterElement.textContent = "Error";
        }
    }

    // Fetch and display a random quote from ZenQuotes API
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-author');
    
    if (quoteTextElement && quoteAuthorElement) {
        try {
            // We use a free CORS proxy since ZenQuotes restricts direct frontend requests on their free tier
            const response = await fetch('https://corsproxy.io/?https://zenquotes.io/api/random');
            const data = await response.json();
            
            if (data && data.length > 0) {
                quoteTextElement.textContent = data[0].q;
                quoteAuthorElement.textContent = data[0].a;
            }
        } catch (error) {
            console.error("Error fetching ZenQuotes:", error);
            quoteTextElement.textContent = "The only true wisdom is in knowing you know nothing.";
            quoteAuthorElement.textContent = "Socrates";
        }
    }
});