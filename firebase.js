import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAUP6qjjkEc0MZMqaBT2vbhRDWALc7YD64",
    authDomain: "sasstask-dev.firebaseapp.com",
    projectId: "sasstask-dev",
    storageBucket: "sasstask-dev.appspot.com",
    messagingSenderId: "428907098661",
    appId: "1:428907098661:web:82bfcb87383dce007d05cc"
  };

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_API_KEY,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;