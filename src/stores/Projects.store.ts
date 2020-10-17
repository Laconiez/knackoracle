import { makeAutoObservable, runInAction } from 'mobx';
import { nanoid } from 'nanoid';

import { Collections, db, getCollectionEntries } from '../utils/firebase';
import { Company } from '../entities/Company';

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
}

function processError() {
  alert('Something went wrong, please try again');
}

export default new Projects();
