// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCDtkhWetlxbgI1V-9YHviFq_dKFCxRUk",
  authDomain: "simple-firebase-auth-12964.firebaseapp.com",
  projectId: "simple-firebase-auth-12964",
  storageBucket: "simple-firebase-auth-12964.firebasestorage.app",
  messagingSenderId: "843412192962",
  appId: "1:843412192962:web:a69b030f31ae567278055b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);