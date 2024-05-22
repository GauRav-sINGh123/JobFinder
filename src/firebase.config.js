import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
 
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY ,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_PROJECT_ID ,
  storageBucket:import.meta.env.VITE_STORAGE_BUCKET ,
  messagingSenderId:import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId:import.meta.env.VITE_APP_ID
};

 
 const app = initializeApp(firebaseConfig);
 const db=getFirestore(app);

 export {db,app};