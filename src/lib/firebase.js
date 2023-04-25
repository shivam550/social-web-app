import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyDq1kJR-yZ6UOw4V_q1GSJQges_wZhduoI",
  authDomain: "social-media-app-9b25f.firebaseapp.com",
  projectId: "social-media-app-9b25f",
  storageBucket: "social-media-app-9b25f.appspot.com",
  messagingSenderId: "272857248518",
  appId: "1:272857248518:web:6e8cc2ac5f06bd07aea487"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);