import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyAEDG2PZU2KBOGSB7WkhZ_JxgZb4Yh90G8",
    authDomain: "kidsuppdemo.firebaseapp.com",
    databaseURL: "https://kidsuppdemo.firebaseio.com",
    projectId: "kidsuppdemo",
    storageBucket: "kidsuppdemo.appspot.com",
    messagingSenderId: "173826682960",
    appId: "1:173826682960:web:775b6fa0059ba15f9a2155",
    measurementId: "G-8B7X5NQHFX"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
