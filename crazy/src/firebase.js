
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCpc36njvkGuC6g4rTCBtKKcmqJF1kaVcc",                   // copy from Firebase
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "12345678",
  appId: "1:12345678:web:abcdefg"
};

const app = initializeApp(firebaseConfig);

export default app;
