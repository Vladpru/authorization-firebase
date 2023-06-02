import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDnBaqC0FgPRLQsqwTfKmVo8pn07XjLrqw",
  authDomain: "auth1-59b9b.firebaseapp.com",
  projectId: "auth1-59b9b",
  storageBucket: "auth1-59b9b.appspot.com",
  messagingSenderId: "141434283839",
  appId: "1:141434283839:web:cedd44fbaad01fc7ead58a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)