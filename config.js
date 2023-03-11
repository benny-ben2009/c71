import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD-smHlgconHJjZKMyqA37sktQ5MElM8W0",
    authDomain: "c71project-f2258.firebaseapp.com",
    projectId: "c71project-f2258",
    storageBucket: "c71project-f2258.appspot.com",
    messagingSenderId: "678346693341",
    appId: "1:678346693341:web:8fabb9316f1580a9a75934"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
