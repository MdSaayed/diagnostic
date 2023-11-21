// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAaKlmpR7Yen6hhPpeyMVIjJKJ8adsC47U",
  authDomain: "bistro-dca2d.firebaseapp.com",
  projectId: "bistro-dca2d",
  storageBucket: "bistro-dca2d.appspot.com",
  messagingSenderId: "262171738170",
  appId: "1:262171738170:web:5a358422fe7634cc84f503"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;