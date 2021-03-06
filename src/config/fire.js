import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDzDDzSGvbFy-cR0_Q78-2vcWIbU9RQc4Y",
    authDomain: "techstore-e9f25.firebaseapp.com",
    projectId: "techstore-e9f25",
    storageBucket: "techstore-e9f25.appspot.com",
    messagingSenderId: "61632875724",
    appId: "1:61632875724:web:274833c60696095826c669",
    measurementId: "G-V93D401LS7"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;