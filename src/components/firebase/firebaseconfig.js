// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCresNd3McRPURDSNGqLCsOy0g8-S4L4HU",
  authDomain: "dispatch-46b99.firebaseapp.com",
  projectId: "dispatch-46b99",
  storageBucket: "dispatch-46b99.firebasestorage.app",
  messagingSenderId: "521896003681",
  appId: "1:521896003681:web:92c4a408432a560b768220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);