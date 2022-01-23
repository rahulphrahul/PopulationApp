import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAr_mkH-t-bczAyP4dLuaAzWVv2aMb3Rfw",
  authDomain: "librarymanagementreactapp.firebaseapp.com",
  databaseURL: "https://librarymanagementreactapp-default-rtdb.firebaseio.com",
  projectId: "librarymanagementreactapp",
  storageBucket: "librarymanagementreactapp.appspot.com",
  messagingSenderId: "524007740549",
  appId: "1:524007740549:web:d799935ff8d3b3314ac5ec",
  measurementId: "G-EMFSY25918",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
