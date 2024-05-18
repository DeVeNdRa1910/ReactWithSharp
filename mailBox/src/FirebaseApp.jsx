import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_sKqRUa-Qwep46SxlDKLARM8pKKTN4Mw",
  authDomain: "mailbox-28d41.firebaseapp.com",
  projectId: "mailbox-28d41",
  storageBucket: "mailbox-28d41.appspot.com",
  messagingSenderId: "479471018126",
  appId: "1:479471018126:web:e10ad75ed3f5b0ad4c69df",
  databaseURL: "https://mailbox-28d41-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp);

export default firebaseApp