
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMIAN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const firebaseApp=initializeApp(firebaseConfig);

export default firebaseApp;