// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAh5gA1z1Pj0zTxOMVquvuMMIaC38JQHak",
	authDomain: "linkedin-copy-72c53.firebaseapp.com",
	projectId: "linkedin-copy-72c53",
	storageBucket: "linkedin-copy-72c53.appspot.com",
	messagingSenderId: "547416280357",
	appId: "1:547416280357:web:25a7cf518cda5c09705ecc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
