// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Firebase services
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzcNr5xenVtRInPmBYcYS98y9HCfKyW4Q",
  authDomain: "fir-react-app-real.firebaseapp.com",
  projectId: "fir-react-app-real",
  storageBucket: "fir-react-app-real.firebasestorage.app",
  messagingSenderId: "693912779269",
  appId: "1:693912779269:web:38381bf8efc5b8f8403a6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export so other files can use them
export { db, auth, provider };