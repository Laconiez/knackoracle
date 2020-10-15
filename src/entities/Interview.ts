import { Grade } from './Grade';
import { Question } from './Question';

export type Answer = {
  question: Question;
  grade: Grade;
  comment: string;
};

export type Interview = {
  id: string;
  date: Date;
  person: string;
  answers: Answer[];
};
