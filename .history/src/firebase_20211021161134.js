import fri

const firebaseConfig = {
  apiKey: "AIzaSyB_F3pGYOY0GSvjCbpJU92LrMS45BsE9nA",
  authDomain: "starbucks-redux.firebaseapp.com",
  projectId: "starbucks-redux",
  storageBucket: "starbucks-redux.appspot.com",
  messagingSenderId: "1069467091933",
  appId: "1:1069467091933:web:c008cc493729fb57652c34"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
