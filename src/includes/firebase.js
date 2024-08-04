import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
