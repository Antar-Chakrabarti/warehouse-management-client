import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA3ae6dhfanhO4NVgL2Hly1WDF7bR0rHdk",
    authDomain: "assignment-11-c4e51.firebaseapp.com",
    projectId: "assignment-11-c4e51",
    storageBucket: "assignment-11-c4e51.appspot.com",
    messagingSenderId: "395734742891",
    appId: "1:395734742891:web:7a7b9e599c86fdfdf83e2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;