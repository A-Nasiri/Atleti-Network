import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCmMV790AuhPZZKPFSDpbHRBrZQNzzbJ3c",
  authDomain: "atleti-network.firebaseapp.com",
  databaseURL: "https://atleti-network.firebaseio.com",
  projectId: "atleti-network",
  storageBucket: "",
  messagingSenderId: "612049518295",
  appId: "1:612049518295:web:f2d149e9316e5967"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
