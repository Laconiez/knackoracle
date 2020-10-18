import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

import { Collections, db, getCollectionEntries } from '../utils/firebase';
import { Company } from '../entities/Company';
import { Person } from '../entities/Person';

class Projects {
  list: Company[] = [];

  private readonly collectionRef = db.collection(Collections.Projects);

  constructor() {
    makeAutoObservable(this);
  }

  loadList = async () => {
    try {
      const data = await this.collectionRef.get();
      this.list = getCollectionEntries<Company>(data);
    } catch {
      processError();
    }
  }

  addProject = async (project: Company) => {
    try {
      await this.collectionRef
        .doc(nanoid())
        .set(project);

      this.list = [...this.list, project];
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

      this.list = getCollectionEntries<Company>(list);
    } catch (error) {
      processError();
    }
  }
}

function processError() {
  alert('Something went wrong, please try again');
}

export default new Projects();
