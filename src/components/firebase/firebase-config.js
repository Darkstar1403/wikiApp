import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCAvy8B9kIoSOA4Nq2ZdtMI0Yab8oMKLuY',
  authDomain: 'wikiappdark.firebaseapp.com',
  projectId: 'wikiappdark',
  storageBucket: 'wikiappdark.appspot.com',
  messagingSenderId: '622363828740',
  appId: '1:622363828740:web:28cfeddc7e7efc7a704b51'
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    googleAuthProvider
}