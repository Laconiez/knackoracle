import { action, makeAutoObservable } from 'mobx';

import { Person } from 'entities/Person';
import { db, getCollectionEntries } from '../utils/firebase';
import { nanoid } from 'nanoid';

class Persons {
  constructor() {
    makeAutoObservable(this);
  }
  list: Person[] = [];

  private readonly collectionRef = db.collection('persons');

  loadList = () => {
    this.collectionRef
      .get()
      .then((d) => {
        const entries = getCollectionEntries<Person>(d);
        this.setList(entries);
      })
      .catch(() => {
        processError();
    })
  }

  addPerson = (person: Person) => {
    this.collectionRef
      .doc(nanoid())
      .set(person)
      .then(() => {
        this.setList([...this.list, person]);
      })
      .catch(() => {
        processError();
      })
  };

  @action
  setList = (data: Person[]) => {
    this.list = data;
  }
}

function processError() {
 alert('Something went wrong, please try again');
}

export default new Persons();
