import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtCNAMYQhK8iRLLXJlmtSPKZtQxT1KGc0",
  authDomain: "vue-talkin.firebaseapp.com",
  projectId: "vue-talkin",
  storageBucket: "vue-talkin.appspot.com",
  messagingSenderId: "531573959970",
  appId: "1:531573959970:web:4e72c840dfc3396607897b"
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
