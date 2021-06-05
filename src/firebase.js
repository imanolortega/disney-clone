import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDH-Cf_fyJYSb-ZB9lX3-jbVSLOEb7QmAY",
  authDomain: "disney-clon-51eba.firebaseapp.com",
  databaseURL: "https://disney-clon-51eba-default-rtdb.firebaseio.com",
  projectId: "disney-clon-51eba",
  storageBucket: "disney-clon-51eba.appspot.com",
  messagingSenderId: "305649914983",
  appId: "1:305649914983:web:73e89b214d1ae7f7a330c2",
  measurementId: "G-5Q50V7VGDB",
};

/*
apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
*/

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
