import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import { firebaseConfigX } from './firebaseConfig';

const firebaseConfig = firebaseConfigX || {};
const collectionNames = {
  recipes: "myrecipes",
  users: "myusers"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, collectionNames, timestamp }