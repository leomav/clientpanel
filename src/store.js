import { createStore, combineReducers /*compose*/ } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import {
  // getFirebase,
  firebaseReducer,
  // ReactReduxFirebaseProvider,
} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
// Reducers
// @TODO

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBOdQ1-Ug86Wc-L4BGTRulHRnfDaR1b_5A",
  authDomain: "reactclientpanel-ca505.firebaseapp.com",
  databaseURL: "https://reactclientpanel-ca505.firebaseio.com",
  projectId: "reactclientpanel-ca505",
  storageBucket: "reactclientpanel-ca505.appspot.com",
  messagingSenderId: "680262798970",
  appId: "1:680262798970:web:302a68226cb2687921f5c3",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // <- needed if we use Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize firestore
firebase.firestore();

// Reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

// Create initial state
const initialState = {};

// Create store
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // compose(
  //   reactReduxFirebase(firebase),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default store;
