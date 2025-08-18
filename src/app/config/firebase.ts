// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlmerPwqZGAfY3AEguxS17dK0BXelOGkg",
  authDomain: "site-cfpm.firebaseapp.com",
  projectId: "site-cfpm",
  storageBucket: "site-cfpm.firebasestorage.app",
  messagingSenderId: "111081982997",
  appId: "1:111081982997:web:52b3b1a0535a7b279fd21c",
  measurementId: "G-NM6XT4SSCS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const db = getFirestore(app);