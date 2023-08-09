import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCdPltKE4oba3UNh5iAkif7lJInICdU12o",
  authDomain: "blooddonation-4cffe.firebaseapp.com",
  databaseURL: "https://blooddonation-4cffe-default-rtdb.firebaseio.com",
  projectId: "blooddonation-4cffe",
  storageBucket: "blooddonation-4cffe.appspot.com",
  messagingSenderId: "252121680396",
  appId: "1:252121680396:web:d5ffb85568da0d6054bc29",
  measurementId: "G-N5C5KEJSRN",
};

const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  return { database, auth, app };
};

export default initializeFirebase;