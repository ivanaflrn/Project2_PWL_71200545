// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO80D9Z0aS5ynRduZNsZGKss79SOpuI4g",
  authDomain: "project2-webchat.firebaseapp.com",
  projectId: "project2-webchat",
  storageBucket: "project2-webchat.appspot.com",
  messagingSenderId: "319840691779",
  appId: "1:319840691779:web:005771bfdb5b04916d96f6",
  measurementId: "G-BHTQJMLPM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app