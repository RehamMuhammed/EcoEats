// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzw2PJUN3xxoHPd1QfOjCtcTpLAsk_8lM",
  authDomain: "ecoeats-47a9c.firebaseapp.com",
  projectId: "ecoeats-47a9c",
  storageBucket: "ecoeats-47a9c.appspot.com",
  messagingSenderId: "324750096654",
  appId: "1:324750096654:web:bb6972b3d0a68166f87f5f",
  measurementId: "G-XGEE4LBDR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;