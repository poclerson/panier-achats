// Une variable/fonction importée par défaut n'a pas besoin des {}
import firebaseConfig from './config';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Initialiser Firebase
initializeApp(firebaseConfig);

// Initialiser Firestore
export const bdFirestore = getFirestore();