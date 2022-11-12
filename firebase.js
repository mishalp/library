import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRekyrhi2m14Ls4TUEFDKDtKFYucJzm3c",
  authDomain: "library-ddefe.firebaseapp.com",
  projectId: "library-ddefe",
  storageBucket: "library-ddefe.appspot.com",
  messagingSenderId: "1095319723294",
  appId: "1:1095319723294:web:af77a1169a731c7ec67d0f",
  measurementId: "G-JYN7QTQ7FS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);