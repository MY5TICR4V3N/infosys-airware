import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBAqGLHWy8g7j_Jw__R1I-hx0AhzsdO-u8",
  authDomain: "airware-693c3.firebaseapp.com",
  databaseURL: "https://airware-693c3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "airware-693c3",
  storageBucket: "airware-693c3.firebasestorage.app",
  messagingSenderId: "9356252962",
  appId: "1:9356252962:web:38f95febb345c7b5b3f77b",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
