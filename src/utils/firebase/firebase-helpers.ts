import firebase from 'firebase';

type QuerySnapshot<T> = firebase.firestore.QuerySnapshot<T>;
type DocumentData = firebase.firestore.DocumentData;

export const getCollectionEntries = <T>(data: QuerySnapshot<DocumentData>): T[] => {
  const result: T[] = [];
  data.forEach((doc) => result.push(doc.data() as T));
  return result;
}
