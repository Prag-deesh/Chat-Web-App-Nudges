// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmhz47WcIulJY1v4gr_sQm9XYqG-4rB-s",
  authDomain: "nudges0.firebaseapp.com",
  projectId: "nudges0",
  storageBucket: "nudges0.appspot.com",
  messagingSenderId: "848076361078",
  appId: "1:848076361078:web:eb4491626de9dfdd697e57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
