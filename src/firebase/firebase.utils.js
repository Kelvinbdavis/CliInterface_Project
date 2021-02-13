import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAN7kYxY5_kfPFJt6vI6HwJ3ntAR1_mtUE",
    authDomain: "crowndb-266c5.firebaseapp.com",
    projectId: "crowndb-266c5",
    storageBucket: "crowndb-266c5.appspot.com",
    messagingSenderId: "149461397556",
    appId: "1:149461397556:web:4b6398ccbf52279c8b9a61",
    measurementId: "G-F575SMBM75"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => <auth class="signInWithPopu"></auth>(provider)

export default firebase;
