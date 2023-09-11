import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDffbYm-96Mk0JFOgoK_CwhKW69QCAuZis",
    authDomain: "stock-management-6454e-restore.firebaseapp.com",
    databaseURL: "https://stock-management-6454e-restore-default-rtdb.firebaseio.com",
    projectId: "stock-management-6454e-restore",
    storageBucket: "stock-management-6454e-restore.appspot.com",
    messagingSenderId: "883874168343",
    appId: "1:883874168343:web:41290246f21bb67f50a652",
    measurementId: "G-Q50JLP3252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);


