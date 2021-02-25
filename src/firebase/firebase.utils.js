import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDV1sWoADOf2zEkxCj4mRg5y-zFgbpmXIs',
  authDomain: 'crown-db-f6d29.firebaseapp.com',
  projectId: 'crown-db-f6d29',
  storageBucket: 'crown-db-f6d29.appspot.com',
  messagingSenderId: '805144668882',
  appId: '1:805144668882:web:d58f896b98de8e29505b0b',
  measurementId: 'G-1E341JTZR6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
