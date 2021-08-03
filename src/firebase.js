import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHIVqN08ByLz_VH-muCJDmJd9jPQH4xwU",
  authDomain: "clone-f9270.firebaseapp.com",
  projectId: "clone-f9270",
  storageBucket: "clone-f9270.appspot.com",
  messagingSenderId: "252161496562",
  appId: "1:252161496562:web:ef7885f85f7d499f53876b",
  measurementId: "G-BMRNSY50F6"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth =firebase.auth();



export {db,auth};