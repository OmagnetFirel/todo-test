// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZopBLciKTxwrFajc8s5UMH6DnzQ39vrA",
    authDomain: "todo-list-cf877.firebaseapp.com",
    databaseURL: "https://todo-list-cf877-default-rtdb.firebaseio.com",
    projectId: "todo-list-cf877",
    storageBucket: "todo-list-cf877.appspot.com",
    messagingSenderId: "459032149287",
    appId: "1:459032149287:web:28bbd4131118cefb25bd02",
    measurementId: "G-H22JMZXRB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);