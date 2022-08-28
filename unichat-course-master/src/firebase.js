import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCWbcc9z2sBd5EdZCMCFBtshv1WuA6-xRM",
    authDomain: "chat-11c61.firebaseapp.com",
    projectId: "chat-11c61",
    storageBucket: "chat-11c61.appspot.com",
    messagingSenderId: "195428731108",
    appId: "1:195428731108:web:3b3c30a5dab578160c44f1",
    measurementId: "G-7BWBPF41Q0"
  }).auth();


 
 