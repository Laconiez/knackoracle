import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

type QuerySnapshot<T> = firebase.firestore.QuerySnapshot<T>;
type DocumentData = firebase.firestore.DocumentData;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const getCollectionEntries = <T>(data: QuerySnapshot<DocumentData>): T[] => {
  const d: T[] = [];
  data.forEach((doc) => d.push(doc.data() as T));
  return d;
}

export default firebase;
