// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyUmkSYEzQZv1_Yjf6fAla73MGxL7xNxo",
    authDomain: "login-auth-950da.firebaseapp.com",
    projectId: "login-auth-950da",
    storageBucket: "login-auth-950da.appspot.com",
    messagingSenderId: "339775319918",
    appId: "1:339775319918:web:ee7c758a5eb8f1c66a5b7f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

setPersistence(auth, browserLocalPersistence)
    .then(() => {
        console.log('Persistence set to local storage');
    })
    .catch((error) => {
        console.error("Error setting persistence:", error);
    });
export { auth }
export const db = getFirestore(app)
export default app