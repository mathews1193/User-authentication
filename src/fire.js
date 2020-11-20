import firebase from 'firebase';
// Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBN2P1-SdkO-fN1SiIjcvIQWt-PHU2PHoY",
    authDomain: "todo-list-9d23c.firebaseapp.com",
    databaseURL: "https://todo-list-9d23c.firebaseio.com",
    projectId: "todo-list-9d23c",
    storageBucket: "todo-list-9d23c.appspot.com",
    messagingSenderId: "119563395835",
    appId: "1:119563395835:web:2ce2711bcc440ded12465e",
    measurementId: "G-W86HTRCPYT"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;