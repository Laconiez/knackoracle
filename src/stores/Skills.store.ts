import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

import { Technology } from 'entities/Technology';
import { Skill } from 'entities/Skill';

import { setLocalValue, getLocalValues } from 'utils/localStore';

class Skills {
  list: Technology[] = [];
  selectedTechId?: string = undefined;

  constructor() {
    makeAutoObservable(this);

    const t = getLocalValues('SKILLS');

    this.list = (t as any) ?? [{ id: nanoid(), name: 'HTML', description: 'markup' }];
  }

  addTechnology = (technology: Omit<Technology, 'id'>) => {
    this.list = [...this.list, { id: nanoid(), ...technology }];
    setLocalValue('SKILLS', this.list);
  };

  selectTechnology = (id: string) => {
    this.selectedTechId = id;
  };

  addSkill = (techId: string, skill: Omit<Skill, 'id'>) => {
    const tech = this.list.find((t) => t.id === techId);
    if (!tech) return;
    if (!tech?.skills) {
      tech.skills = [];
    }
    tech.skills.push({ id: nanoid(), ...skill });

    setLocalValue('SKILLS', this.list);
  };
}

export default new Skills();
