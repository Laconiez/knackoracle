import { makeAutoObservable } from 'mobx';

import { Person } from 'entities/Person';
import { db, Collections, getCollectionEntries } from '../utils/firebase';
import { nanoid } from 'nanoid';

class Persons {
  list: Person[] = [];
  person: Person | null = null;

  private readonly collectionRef = db.collection(Collections.Persons);

  constructor() {
    makeAutoObservable(this);
  }

  loadList = async () => {
    try {
      const data = await this.collectionRef.get();
      this.list = getCollectionEntries<Person>(data);
    } catch {
      processError();
    }
  }

  getPerson = async (personId: string) => {
    try {
      const data = await this.collectionRef
        .where('id', '==', personId)
        .get()

      this.person = getCollectionEntries<Person>(data)[0];
    } catch(error) {
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
