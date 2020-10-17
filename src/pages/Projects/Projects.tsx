import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import projectStore from 'stores/Projects.store';

import Layout from 'components/Layouts/CommonLayout';

const Projects = () => {
  const { list, loadList, addProject } = projectStore;

  const nameInput = useRef<HTMLInputElement>(null);
  const descInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadList();
  }, [])

  return (
    <Layout title={'Projects'}>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name} {item.description}
          </li>
        ))}
      </ul>
      <section>
        <label>
          Name
          <input ref={nameInput} />
        </label>

        <label>
          Description
          <input ref={descInput} />
        </label>
      </section>
      <button
        onClick={() => {
          const name = nameInput?.current?.value ?? '';
          const description = descInput?.current?.value ?? '';

          addProject({ id: nanoid(), name, description });
        }}
      >
        Add project
      </button>
    </Layout>
  );
};

export default observer(Projects);
