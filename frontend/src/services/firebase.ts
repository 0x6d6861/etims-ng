// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getRemoteConfig } from "firebase/remote-config";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB15_JTVCQp7Jw9TXCiHc6sckZzpOSLDdM",
  authDomain: "etims-5a970.firebaseapp.com",
  projectId: "etims-5a970",
  storageBucket: "etims-5a970.appspot.com",
  messagingSenderId: "178724433636",
  appId: "1:178724433636:web:197f0b6c14af07d72fc6f1",
  measurementId: "G-N0ZSRLQMRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const remoteConfig = getRemoteConfig(app);


export { auth, analytics, storage, remoteConfig };
export default app;