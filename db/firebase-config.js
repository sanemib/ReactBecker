import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDG0TjXEVE-qmW-PGCe2trkvWO2EsICFK0",
  authDomain: "react-coder-be029.firebaseapp.com",
  projectId: "react-coder-be029",
  storageBucket: "react-coder-be029.appspot.com",
  messagingSenderId: "846202710537",
  appId: "1:846202710537:web:af8aae5b970f74aed126d8"
};


const app = initializeApp(firebaseConfig);

const db= getFirestore(app);
export default db;