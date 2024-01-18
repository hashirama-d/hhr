// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL1h5U36mF1gJOVJdf2GbXM0PNbnzSrBg",
    authDomain: "hostel-help.firebaseapp.com",
    projectId: "hostel-help",
    storageBucket: "hostel-help.appspot.com",
    messagingSenderId: "327465404154",
    appId: "1:327465404154:web:349de3715a592f66edab43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
