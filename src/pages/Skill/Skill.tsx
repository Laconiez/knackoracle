import React, { useRef } from 'react';
import { observer } from 'mobx-react';

import personStore from 'stores/Skills.store';

import Layout from 'components/Layouts/CommonLayout';
import Search from 'components/Search';
import { Button } from 'components/Buttons/Buttons';
import { RowBetween } from './Skill.styles';

const Skill = () => {
  const { list, addTechnology, selectTechnology, selectedTechId, addSkill } = personStore;

  const nameInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);

  const skillInput = useRef<HTMLInputElement>(null);

  const addTech = () => {
    addTechnology({ name: nameInput.current?.value ?? '', description: descriptionInput.current?.value ?? '' });
  };

  const selectTech = (id: string) => () => {
    selectTechnology(id);
  };

  const addSkillTech = () => {
    if (!selectedTechId) return;
    addSkill(selectedTechId, { caption: skillInput.current?.value ?? '' });
  };

  return (
    <Layout title="Skills">
      <RowBetween>
        <div>
          <h3>Technology</h3>
          <p>Select technology list to add new skill</p>
          <Search />

          <Button theme="outline-default">+ Add technology</Button>
        </div>

        <div>
          <h3>Skill</h3>
          <p>Add connected skills</p>
          <Search />

          <Button theme="outline-default" disabled>+ Add skill</Button>
        </div>
      </RowBetween>

      {/*<ul>*/}
      {/*  {list.map((item) => (*/}
      {/*    <li key={item.id} onClick={selectTech(item.id)}>*/}
      {/*      {item.id === selectedTechId ? '> ' : null}*/}
      {/*      {item.name} - {item.description}*/}
      {/*      <div>*/}
      {/*        <ul>*/}
      {/*          {item.skills?.map((s) => (*/}
      {/*            <li key={s.id}>{s.caption}</li>*/}
      {/*          ))}*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      {/*<section>*/}
      {/*  <label>*/}
      {/*    Name*/}
      {/*    <input ref={nameInput} />*/}
      {/*  </label>*/}
      {/*  <label>*/}
      {/*    Description*/}
      {/*    <input ref={descriptionInput} />*/}
      {/*  </label>*/}

      {/*  <button onClick={addTech}>Add tech</button>*/}
      {/*</section>*/}
      {/*<section>*/}
      {/*  Skill*/}
      {/*  <label>*/}
      {/*    Name*/}
      {/*    <input ref={skillInput} />*/}
      {/*  </label>*/}
      {/*  <button onClick={addSkillTech}>Add skill</button>*/}
      {/*</section>*/}
    </Layout>
  );
};

export default observer(Skill);
