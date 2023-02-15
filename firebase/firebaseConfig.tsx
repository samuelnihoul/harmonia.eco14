// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "NEXT_APP_F",
  authDomain: "hypnotic-trees-328016.firebaseapp.com",
  projectId: "hypnotic-trees-328016",
  storageBucket: "hypnotic-trees-328016.appspot.com",
  messagingSenderId: "761017450319",
  appId: "1:761017450319:web:8d4cc1f42e977d0b8c0f3a",
  measurementId: "G-RFBEGZHSQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//initialize the analytics
const analytics = getAnalytics(app)

export default app
