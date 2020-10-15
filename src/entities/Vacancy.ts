import { Skill } from './Skill';
import { Grade } from './Grade';
import { Technology } from './Technology';

export type TechRequirement = {
  technology: Technology;
  grade: Grade;
};

export type SkillRequirement = {
  skill: Skill;
  grade: Grade;
};

export type Vacancy = {
  id: string;
  companyId: string;
  title: string;
  description: string;
  active: boolean;

  techRequirements: TechRequirement[];
  skillRequirements: SkillRequirement[];
};
