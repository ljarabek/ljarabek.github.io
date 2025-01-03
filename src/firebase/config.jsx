// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYTuJwU3lbppsc4xYUJuTMoWNUgxVXpU0",
  authDomain: "drazbarripoff.firebaseapp.com",
  projectId: "drazbarripoff",
  storageBucket: "drazbarripoff.firebasestorage.app",
  messagingSenderId: "372276741124",
  appId: "1:372276741124:web:590c4fd36762447cdd2151",
  measurementId: "G-WGQLS16XTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Auth - TEGA NI BLO NOTR MOGOČE ZBRIŠEŠ???
export const db = getFirestore(app);
export const auth = getAuth(app);
