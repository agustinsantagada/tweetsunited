// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCJk5jVHGplOFy4Ya__JXLr9pmUGU1cr_A",
  authDomain: "tweets-acamica.firebaseapp.com",
  databaseURL: "https://tweets-acamica-default-rtdb.firebaseio.com",
  projectId: "tweets-acamica",
  storageBucket: "tweets-acamica.appspot.com",
  messagingSenderId: "291721232159",
  appId: "1:291721232159:web:4fe5382304b7751258ba2a",
  measurementId: "G-P29LGSNGPS"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA1Um_gIj3tN3HgWnXfjnCZwA1iyyM24OY",
//   authDomain: "tweets-united.firebaseapp.com",
//   projectId: "tweets-united",
//   storageBucket: "tweets-united.appspot.com",
//   messagingSenderId: "906617616263",
//   appId: "1:906617616263:web:d0aca4119e70185ae48522",
//   measurementId: "G-JFX772155L"
// };

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
