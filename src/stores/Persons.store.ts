import { makeAutoObservable } from 'mobx';

import { Person } from 'entities/Person';
import { db, Collections, getCollectionEntries } from '../utils/firebase';
import { nanoid } from 'nanoid';

class Persons {
  list: Person[] = [];

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

  search = async (searchText: string = '') => {
    try {
      const list = await this.collectionRef
        .orderBy('name')
        .startAt( searchText)
        .endAt( searchText + '\uf8ff')
        .get();

      this.list = getCollectionEntries<Person>(list);
    } catch (error) {
      processError();
    }
  }

  orderBy = async (field: string, direction: 'desc' | 'asc' = 'asc') => {
    try {
      const list = await this.collectionRef
        .orderBy(field, direction)
        .get();

      this.list = getCollectionEntries<Person>(list);
    } catch (error) {
      processError();
    }
  }
}

function processError() {
 alert('Something went wrong, please try again');
}

export default new Persons();
