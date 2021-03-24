import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBb95rCOQP_-RsUQruHcACvAs8Ho2z2Ak",
  authDomain: "sasstask-9407a.firebaseapp.com",
  databaseURL: 'https://sasstask-9407a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: "sasstask-9407a",
  storageBucket: "sasstask-9407a.appspot.com",
  messagingSenderId: "989826532405",
  appId: "1:989826532405:web:a1ae0165290ce8052b1d7c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };