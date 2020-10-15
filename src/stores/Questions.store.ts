import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

import { Question } from 'entities/Question';

import { setLocalValue, getLocalValues } from 'utils/localStore';

class Questions {
  list: Question[] = [];

  constructor() {
    makeAutoObservable(this);

    const q = getLocalValues('QUESTIONS');

    this.list = (q as any) ?? [];
  }

  addQuestion = (question: Omit<Question, 'id'>) => {
    this.list = [...this.list, { id: nanoid(), ...question }];
    setLocalValue('QUESTIONS', this.list);
  };
}

export default new Questions();
