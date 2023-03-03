// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0gCtERBk1RAtjMtRXKqnvgLEu9iPLpwg",
  authDomain: "parts-manufacturer-1afc8.firebaseapp.com",
  projectId: "parts-manufacturer-1afc8",
  storageBucket: "parts-manufacturer-1afc8.appspot.com",
  messagingSenderId: "932134162729",
  appId: "1:932134162729:web:19158b40dfac012fc26738"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
