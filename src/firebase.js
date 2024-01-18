import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8K4Ee5ocL3UW-NpkuEUlmHOXqvZQviqM",
    authDomain: "hacknroll-e9512.firebaseapp.com",
    projectId: "hacknroll-e9512",
    storageBucket: "hacknroll-e9512.appspot.com",
    messagingSenderId: "981408337618",
    appId: "1:981408337618:web:b7848583cef342f866270b",
    measurementId: "G-R1V7QX8514"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

export default database;