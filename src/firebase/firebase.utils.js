import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAotGHOkhK7wsk5yWmw1emsD5s0R93kKog",
    authDomain: "crwn-db-e5b1e.firebaseapp.com",
    projectId: "crwn-db-e5b1e",
    storageBucket: "crwn-db-e5b1e.appspot.com",
    messagingSenderId: "133578611861",
    appId: "1:133578611861:web:d994b78b2dbd20cb08cf9c",
    measurementId: "G-9L7DCP0SZP"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;