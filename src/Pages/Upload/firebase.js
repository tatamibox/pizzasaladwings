import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAGkqlluTneER-vUaVebfya9HZGcXjpXf4",
    authDomain: "pizzasaladwings.firebaseapp.com",
    projectId: "pizzasaladwings",
    storageBucket: "pizzasaladwings.appspot.com",
    messagingSenderId: "480487299255",
    appId: "1:480487299255:web:d1557839e5c0127db21532",
    measurementId: "G-EHWG6XHBQR"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
