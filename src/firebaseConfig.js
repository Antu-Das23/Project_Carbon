import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrr5utlc_aOUmrkof9NbmKNoCskIJCNVA",
  authDomain: "my-react-app-79bfd.firebaseapp.com",
  projectId: "my-react-app-79bfd",
  storageBucket: "my-react-app-79bfd.firebasestorage.app",
  messagingSenderId: "427613936509",
  appId: "1:427613936509:web:343017a1c1d6da02370a14",
  measurementId: "G-8D8BCFJH10"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);   // ✅ this line is REQUIRED

export { auth };
