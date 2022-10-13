// import firebase from "firebase";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA71f7gIKJS7nV9zbaFR634zkBSUpK6Lko",
//   authDomain: "crud-react-desafio-tecnico.firebaseapp.com",
//   projectId: "crud-react-desafio-tecnico",
//   storageBucket: "crud-react-desafio-tecnico.appspot.com",
//   messagingSenderId: "776570103372",
//   appId: "1:776570103372:web:bd5277388ba82f3eaeb6e9"
// };

// Initialize Firebase
// let fireDb = initializeApp(firebaseConfig);
// let fireDb = initializeApp(firebaseConfig);
// const fireDb = initializeApp(firebaseConfig);

// export default fireDb.database().ref();
// export default fireDb;


import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA71f7gIKJS7nV9zbaFR634zkBSUpK6Lko",
    authDomain: "crud-react-desafio-tecnico.firebaseapp.com",
    databaseURL: "https://crud-react-desafio-tecnico-default-rtdb.firebaseio.com/",
    projectId: "crud-react-desafio-tecnico",
    storageBucket: "crud-react-desafio-tecnico.appspot.com",
    messagingSenderId: "776570103372",
    appId: "1:776570103372:web:bd5277388ba82f3eaeb6e9"
};
  // Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()
