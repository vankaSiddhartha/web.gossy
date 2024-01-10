// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtE8vHgDEiLtH0uZ_6GAJahT5-W4STzkE",
  authDomain: "gossy-fbbcf.firebaseapp.com",
  databaseURL: "https://gossy-fbbcf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gossy-fbbcf",
  storageBucket: "gossy-fbbcf.appspot.com",
  messagingSenderId: "981903549611",
  appId: "1:981903549611:web:fc50141b7bb5f25257c3ee",
  measurementId: "G-72H9E3CXE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);