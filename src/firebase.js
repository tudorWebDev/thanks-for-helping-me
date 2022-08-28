// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_Mmzh_X9UT45oeKDpnYZvHASuYDsEYjw',
  authDomain:'netflix-inspired-app.firebaseapp.com',
  projectId: 'netflix-inspired-app',
  storageBucket: 'netflix-inspired-app.appspot.com',
  messagingSenderId: '46174874916',
  appId: '1:46174874916:web:597a257372115deeec17b1'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



