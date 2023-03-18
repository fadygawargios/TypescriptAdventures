// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjgC4o4ZwT7C0cpBp_sZY-8KCvIfTuk1A",
  authDomain: "typescriptadventures.firebaseapp.com",
  projectId: "typescriptadventures",
  storageBucket: "typescriptadventures.appspot.com",
  messagingSenderId: "280796491671",
  appId: "1:280796491671:web:cfaceb2141b6eb92209ed2",
  measurementId: "G-LJVSPH8BXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);