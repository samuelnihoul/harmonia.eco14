import React, { useEffect } from "react";
import '../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '../public/icofont/icofont.min.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    ////////////////////////////////////firebase//////////////////////////////////////////

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCSTD_7OhIdV0wT7uYPefCqe1VG5XWhet0",
      authDomain: "hypnotic-trees-328016.firebaseapp.com",
      projectId: "hypnotic-trees-328016",
      storageBucket: "hypnotic-trees-328016.appspot.com",
      messagingSenderId: "761017450319",
      appId: "1:761017450319:web:5664ca82592d283e8c0f3a",
      measurementId: "G-MW7B6FFSV8"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    ///////////////////////////////////end_firebase/////////////////////////////////////////////////
  }, [])
  return (<>
    <Component className="App" {...pageProps} /></>)
}