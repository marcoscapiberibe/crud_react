import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA71f7gIKJS7nV9zbaFR634zkBSUpK6Lko",
  authDomain: "crud-react-desafio-tecnico.firebaseapp.com",
  projectId: "crud-react-desafio-tecnico",
  storageBucket: "crud-react-desafio-tecnico.appspot.com",
  messagingSenderId: "776570103372",
  appId: "1:776570103372:web:bd5277388ba82f3eaeb6e9"
};

// Initialize Firebase
let firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb.database().ref();
