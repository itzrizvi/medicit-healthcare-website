// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

// Initialize Function for Initialize APP
const initializeAuthApp = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthApp;