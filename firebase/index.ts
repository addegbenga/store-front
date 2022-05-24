// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'fir-e2549.firebaseapp.com',
  databaseURL: 'https://fir-e2549-default-rtdb.firebaseio.com',
  projectId: 'fir-e2549',
  storageBucket: 'fir-e2549.appspot.com',
  messagingSenderId: '708753692074',
  appId: '1:708753692074:web:cb3bece970907dab3087d3',
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
