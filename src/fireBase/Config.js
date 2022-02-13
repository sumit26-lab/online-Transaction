import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAbF_6EtTCiG8Od2gr1F4mRH879xKKTQKM",
    authDomain: "mymoney-7db4e.firebaseapp.com",
    projectId: "mymoney-7db4e",
    storageBucket: "mymoney-7db4e.appspot.com",
    messagingSenderId: "736311585337",
    appId: "1:736311585337:web:f065ea1a16efc38d1bfbe8"
  };
  //init fribase
  firebase.initializeApp (firebaseConfig);
  //init service
  const projectFirestore = firebase.firestore () 
  const ProjectAuth =firebase.auth() 
  //time And Date Property
  const timestap=firebase.firestore.Timestamp
  
  export {projectFirestore,ProjectAuth,timestap}