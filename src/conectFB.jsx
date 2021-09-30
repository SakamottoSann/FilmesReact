
import { firebase } from "firebase/app";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAhLppM75ceFc3ChW3cTGGbZv-6DVpZ8Tg",
    authDomain: "react-project-will.firebaseapp.com",
    projectId: "react-project-will",
    storageBucket: "react-project-will.appspot.com",
    messagingSenderId: "161681866866",
    appId: "1:161681866866:web:469539b9ea86c15ea242eb",
    measurementId: "G-GBZJYXSPZ6"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();