// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyCXLz49bGJduNTI6Rufy1AawuzcUjnLqEQ',
  authDomain: 'journalapp-1e244.firebaseapp.com',
  projectId: 'journalapp-1e244',
  storageBucket: 'journalapp-1e244.appspot.com',
  messagingSenderId: '410123816897',
  appId: '1:410123816897:web:a3472485ccf46381342940',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)
