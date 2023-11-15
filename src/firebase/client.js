import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

 const firebaseConfig = {

    apiKey: "AIzaSyBcpABXZTRwTklKM3FPwRRVGZJVIqJFQp4",
    authDomain: "amber-cb860.firebaseapp.com",
    projectId: "amber-cb860",
    storageBucket: "amber-cb860.appspot.com",
    messagingSenderId: "195151303442",
    appId: "1:195151303442:web:9ece31693e3630cf7f99cb"
  };


 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);