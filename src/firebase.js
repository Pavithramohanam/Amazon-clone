import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvk4KnGnNFegCulndwB-YujIB1ygFH6Js",
  authDomain: "clone-b02b9.firebaseapp.com",
  projectId: "clone-b02b9",
  storageBucket: "clone-b02b9.appspot.com",
  messagingSenderId: "602974704948",
  appId: "1:602974704948:web:afebceac194bc7a9ebc161",
  measurementId: "G-QH9GSKW4ZL"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth= firebase.auth();

export { db, auth};
