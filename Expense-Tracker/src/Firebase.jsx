import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBiFSlQOVZ4zjzT21EwIvgAZHHtVFE0Wb4",
    authDomain: "expense-tracker-4a93b.firebaseapp.com",
    projectId: "expense-tracker-4a93b",
    storageBucket: "expense-tracker-4a93b.appspot.com",
    messagingSenderId: "80056175319",
    appId: "1:80056175319:web:0163742b8cb3b9f0a97e92",
    databaseURL: "https://expense-tracker-4a93b-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp