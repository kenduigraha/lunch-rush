import dotenv from 'dotenv';
dotenv.config({ silent: true });
import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_firebase_apiKey,
    authDomain: process.env.REACT_APP_firebase_authDomain,
    databaseURL: process.env.REACT_APP_firebase_databaseURL,
    projectId: process.env.REACT_APP_firebase_projectId,
    storageBucket: process.env.REACT_APP_firebase_storageBucket,
    messagingSenderId: process.env.REACT_APP_firebase_messagingSenderId,
};


firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
