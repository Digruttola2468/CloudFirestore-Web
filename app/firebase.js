import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'

// Add Firebase products that you want to use
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyBqwF6sYurPl44yLKYLZ-UzZQVpjV9neAo",
    authDomain: "cloud-firebase-e494c.firebaseapp.com",
    projectId: "cloud-firebase-e494c",
    storageBucket: "cloud-firebase-e494c.appspot.com",
    messagingSenderId: "1077247467052",
    appId: "1:1077247467052:web:ae8d2de7faeee7dc9a7b89",
    measurementId: "G-2CTBGBFPLK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);