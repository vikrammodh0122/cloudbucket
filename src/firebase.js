import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDpvCa3kQR9H7Be8KKp8rCLLnGoiW4_Xv4",
  authDomain: "college-77331.firebaseapp.com",
  projectId: "college-77331",
  storageBucket: "college-77331.appspot.com",
  messagingSenderId: "503869470607",
  appId: "1:503869470607:web:3bd8dd763b8b2f6df6bdfa"
  // HERE YOU HAVE TO PUT YOUR CONFIG VARIABLES WHICH FIREBASE WILL GIVE YOU
  // GO TO FIREBASE, CREATE A PROJECT THEN ADD A WEB APP
  // THEN GO TO PROJECT SETTINGS AND SCROLL TO THE BOTTOM
  //THEN YOU WILL SEE 3 SDK, CLICK ON CONFIG
  // THEN COPY FROM THE "apikey" TO "mesurementId"
  // AND THEN PASTE IT HERE.
  // THEN YOU ARE READY TO GO!
});

const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const storage = app.storage();
export const auth = app.auth();
export default app;
