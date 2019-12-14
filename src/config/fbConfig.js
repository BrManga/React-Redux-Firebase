import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBk3d-t0cknc5i3PhNIZana0tL5rqm7kQ",
    authDomain: "react-redux-firebase-92c05.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-92c05.firebaseio.com",
    projectId: "react-redux-firebase-92c05",
    storageBucket: "react-redux-firebase-92c05.appspot.com",
    messagingSenderId: "396490300589",
    appId: "1:396490300589:web:60d4745356d6c1582e7a24",
    measurementId: "G-Y3NKHXTMXC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})
  export default firebase;