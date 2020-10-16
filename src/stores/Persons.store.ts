import { makeAutoObservable } from 'mobx';

import { Person } from 'entities/Person';
import { db, getCollectionEntries } from '../utils/firebase';
import { nanoid } from 'nanoid';

class Persons {
  constructor() {
    makeAutoObservable(this);
  }
  list: Person[] = [];

  private readonly collectionRef = db.collection('persons');

  loadList = async () => {
    try {
      const data = await this.collectionRef.get();
      this.list = getCollectionEntries<Person>(data);
    } catch {
      processError();
    }
  }

  addPerson = async (person: Person) => {
    try {
      await this.collectionRef
        .doc(nanoid())
        .set(person);

      this.list = [...this.list, person];
    } catch {
      processError();
    }
  };
}

function processError() {
 alert('Something went wrong, please try again');
}

export default new Persons();
