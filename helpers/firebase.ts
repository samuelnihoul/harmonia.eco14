import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig1 = {
  apiKey: "AIzaSyA3fgOQa9S3_BWLv0TKukclIIo-b8MaQjc",
  authDomain: "hypnotic-trees-328016.firebaseapp.com",
  projectId: "hypnotic-trees-328016",
  storageBucket: "hypnotic-trees-328016.appspot.com",
  messagingSenderId: "761017450319",
  appId: "1:761017450319:web:b643796d4cd995728c0f3a",
  measurementId: "G-DND0JX74XV"
};
const firebaseConfig2 = {
  apiKey: "AIzaSyA4FBWd20Y-c5nAneW5wtL4s40FVB0nYtY",
  authDomain: "harmonia-eko.firebaseapp.com",
  projectId: "harmonia-eko",
  storageBucket: "harmonia-eko.appspot.com",
  messagingSenderId: "685325906714",
  appId: "1:685325906714:web:1f12e0c7437224b9f672a3",
  measurementId: "G-LFJGQ9CTS0"
};

// Initialize Firebase
const KarbonBasarApp = initializeApp(firebaseConfig1);
// const harmonia_ekoApp = initializeApp(firebaseConfig2)
// getAnalytics(harmonia_ekoApp)
export default getFirestore(KarbonBasarApp)
