import firebaseConfig from "./firebaseConfig";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)

const firestore = getStore
