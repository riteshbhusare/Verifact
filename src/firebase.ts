import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDV_n3_V_0eXT_EsjoBJUkbVAGG5mpt1nY",
  authDomain: "verifact-73ee6.firebaseapp.com",
  projectId: "verifact-73ee6",
  storageBucket: "verifact-73ee6.firebasestorage.app",
  messagingSenderId: "70442087227",
  appId: "1:70442087227:web:93ed1a76b1876590407d1e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 