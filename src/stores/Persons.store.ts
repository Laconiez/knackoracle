import { makeAutoObservable } from 'mobx';

import { Person } from 'entities/Person';

class Persons {
  constructor() {
    makeAutoObservable(this);
  }
  list: Person[] = [{ id: '234', name: 'Me test', cv: 'adsfsdfsdfsdfsdf' }];

  getList = () => this.list;

  addPerson = (person: Person) => {
    this.list = [...this.list, person];
  };
}

export default new Persons();
