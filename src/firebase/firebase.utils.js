import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAotGHOkhK7wsk5yWmw1emsD5s0R93kKog",
    authDomain: "crwn-db-e5b1e.firebaseapp.com",
    databaseURL: "https://crwn-db-e5b1e-default-rtdb.firebaseio.com",
    projectId: "crwn-db-e5b1e",
    storageBucket: "crwn-db-e5b1e.appspot.com",
    messagingSenderId: "133578611861",
    appId: "1:133578611861:web:d994b78b2dbd20cb08cf9c",
    measurementId: "G-9L7DCP0SZP"
}

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt, 
        ...additionalData
      })
    }
    catch(error) {
      console.log('Error created while creating user', error.message);
    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;