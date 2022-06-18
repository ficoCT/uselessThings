// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ8SqmNBX0ObnjlYzYPZwTcxaxLprIeiE",
    authDomain: "uselessthings-4fd2a.firebaseapp.com",
    projectId: "uselessthings-4fd2a",
    storageBucket: "uselessthings-4fd2a.appspot.com",
    messagingSenderId: "143560124294",
    appId: "1:143560124294:web:70a7a5c880f35f09886e07",
    measurementId: "G-SHQB3SHSV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);