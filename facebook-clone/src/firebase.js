import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCp8oHvTY0PFf6kbyxAGryRQB4vGjufhCY",
    authDomain: "facebook-clone-5922b.firebaseapp.com",
    projectId: "facebook-clone-5922b",
    storageBucket: "facebook-clone-5922b.appspot.com",
    messagingSenderId: "422199763734",
    appId: "1:422199763734:web:6467f9468a9e599e3d6637",
    measurementId: "G-Q4X8418YFC"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db