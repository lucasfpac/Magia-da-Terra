createApp(App).mount('#app')
import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import router from './router'; // Adjust the path according to your project structure


// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_xd4k5DMHCdwA5kB9dXwQQ0DVGzsA-As",
    authDomain: "magia-da-terra.firebaseapp.com",
    projectId: "magia-da-terra",
    storageBucket: "magia-da-terra.appspot.com",
    messagingSenderId: "485442868221",
    appId: "1:485442868221:web:4608e93c05ce2e22643f94",
    measurementId: "G-1JR14NMM50"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// These lines correctly initialize Firebase services
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore

// The following line should be removed as it's incorrect and redundant
// firebase.initializeApp(firebaseConfig);

// Mount your Vue application
createApp(App).use(router).mount('#app');
