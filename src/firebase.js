// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtA1jIJz2YbR0LqAOQN09I94PPMhkFOt0",
  authDomain: "practice-auth-89c3b.firebaseapp.com",
  projectId: "practice-auth-89c3b",
  storageBucket: "practice-auth-89c3b.appspot.com",
  messagingSenderId: "110198722415",
  appId: "1:110198722415:web:27ff1e192f4bec7933629a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
