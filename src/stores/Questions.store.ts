import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

import { Question } from 'entities/Question';

import { Collections, db, getCollectionEntries } from '../utils/firebase';

class Questions {
  list: Question[] = [];

  private readonly collectionRef = db.collection(Collections.Questions);

  constructor() {
    makeAutoObservable(this);
  }

  loadList = async () => {
    try {
      const data = await this.collectionRef.get();
      this.list = getCollectionEntries<Question>(data);
    } catch {
      processError();
    }
  }

  addQuestion = async (question: Question) => {
    try {
      await this.collectionRef
        .doc(nanoid())
        .set(question);

      this.list = [...this.list, question];
    } catch {
      processError();
    }
  };
}

function processError() {
  alert('Something went wrong, please try again');
}

export default new Questions();
