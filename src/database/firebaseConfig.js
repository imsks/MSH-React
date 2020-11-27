import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDalBa702nuKNPoymmDbjSNAi2eAbZS010",
  authDomain: "flashcardvocab-e1ef0.firebaseapp.com",
  databaseURL: "https://flashcardvocab-e1ef0.firebaseio.com",
  projectId: "flashcardvocab-e1ef0",
  storageBucket: "flashcardvocab-e1ef0.appspot.com",
  messagingSenderId: "893196395818",
  appId: "1:893196395818:web:ac645b2b9ea41d60e16a53",
};

firebase.initializeApp(firebaseConfig);

export const reduxFirebase = {
  enableLogging: false,
};
// Initialize Firebase

export default { firebaseConfig, reduxFirebase };
