// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD_xd4k5DMHCdwA5kB9dXwQQ0DVGzsA-As",
  authDomain: "magia-da-terra.firebaseapp.com",
  projectId: "magia-da-terra",
  storageBucket: "magia-da-terra.appspot.com",
  messagingSenderId: "485442868221",
  appId: "1:485442868221:web:4608e93c05ce2e22643f94",
  measurementId: "G-1JR14NMM50"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance
const auth = getAuth(app);

// Define the logIn function using Firebase Auth
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    throw error;
  }
};


// Function to register a new user
export const registerUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created successfully with email: ", userCredential.user.email);
    // You can perform additional actions here, such as updating the user profile or redirecting to a login page
  } catch (error) {
    console.error("Error creating user:", error.message);
    // Handle errors here, such as displaying a message to the user
    throw error;
  }
};
