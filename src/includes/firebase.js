import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlOP5T0F8TzldnVk1Lk4X3op0wtRD9LRk",
  authDomain: "vue-musicapp-193fc.firebaseapp.com",
  projectId: "vue-musicapp-193fc",
  storageBucket: "vue-musicapp-193fc.appspot.com",
  messagingSenderId: "227327938532",
  appId: "1:227327938532:web:1241c9b22429f1f311c1f1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };
