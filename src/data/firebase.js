import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY11SO5P4w6DPPPJ4SI4JWpQL91lFqGSQ",
  authDomain: "expo-db23.firebaseapp.com",
  projectId: "expo-db23",
  storageBucket: "expo-db23.appspot.com",
  messagingSenderId: "743756653714",
  appId: "1:743756653714:web:819a4ae29d32be2db1b24b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };
