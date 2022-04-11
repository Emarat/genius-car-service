// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4NraoLbyeGKkr30k_IFl1I0j3b5w8wsA",
    authDomain: "genius-car-services-6a068.firebaseapp.com",
    projectId: "genius-car-services-6a068",
    storageBucket: "genius-car-services-6a068.appspot.com",
    messagingSenderId: "921585772169",
    appId: "1:921585772169:web:ce33a0ef62fa875e290858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;