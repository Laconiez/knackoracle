import { Skill } from './Skill';

export type Technology = {
  id: string;
  name: string;
  description: string;
  skills?: Skill[];
};
