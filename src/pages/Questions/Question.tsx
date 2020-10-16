import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';

import questionsStore from 'stores/Questions.store';
import skillsStore from 'stores/Skills.store';
import { Technology } from 'entities/Technology';
import { Skill } from 'entities/Skill';

const Question = () => {
  const { addQuestion } = questionsStore;
  const { list: techList } = skillsStore;

  const history = useHistory();

  const [selectedTechId, setSelectedTechId] = useState<string | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);

  const contentTextarea = useRef<HTMLTextAreaElement>(null);
  const answerTextarea = useRef<HTMLTextAreaElement>(null);
  const techSelect = useRef<HTMLSelectElement>(null);
  const skillSelect = useRef<HTMLSelectElement>(null);
  const gradeInput = useRef<HTMLInputElement>(null);

  return (
    <div>
      Question
      <div>
        <label>
          Content
          <textarea ref={contentTextarea} />
        </label>

        <label>
          Answer
          <textarea ref={answerTextarea} />
        </label>

        <label>
          Tech
          <select
            ref={techSelect}
            onChange={(e) => {
              const value = e.target.value;
              setSelectedTechId(value);
              const s = techList.find((t) => t.id === value);
              if (s) {
                setSkills(s.skills ?? []);
              }
            }}
          >
            <option>--Select Technology--</option>
            {techList.map((t: Technology) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Skill
          <select ref={skillSelect}>
            {skills.map((s: Skill) => (
              <option key={s.id} value={s.id}>
                {s.caption}
              </option>
            ))}
          </select>
        </label>

        <label>
          Grade
          <input ref={gradeInput} />
        </label>

        <button
          onClick={(e) => {
            addQuestion({
              content: contentTextarea.current?.value ?? '',
              answer: answerTextarea.current?.value ?? '',
              skillId: skillSelect.current?.value ?? '',
              techId: techSelect.current?.value ?? '',
              grade: gradeInput.current?.value ? +gradeInput.current.value : 0,
            });

            history.push('/questions');
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default observer(Question);
