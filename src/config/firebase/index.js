import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD5fvMz2bSMr_BYc_cleqyuGLmVOHC1ncA",
    authDomain: "simple-notes-firebase-a6442.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-a6442.firebaseio.com",
    projectId: "simple-notes-firebase-a6442",
    storageBucket: "simple-notes-firebase-a6442.appspot.com",
    messagingSenderId: "385700781277",
    appId: "1:385700781277:web:c88220542dcffbc7b4cf34",
    measurementId: "G-1MCMXDJKGH"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

export default fire;