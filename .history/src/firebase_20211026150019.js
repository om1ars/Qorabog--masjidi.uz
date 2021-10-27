import firebaseConfig from "./firebaseConfig";

import {initializeApp} from 'firebase/app'
import {auth} from 'firebase/auth'
import {getFirestore}

const firebaseApp = initializeApp(firebaseConfig)