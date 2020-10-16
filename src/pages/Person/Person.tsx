import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';

import personStore from 'stores/Persons.store';

import Layout from 'components/Layouts/CommonLayout';

const Person = () => {
  const { addPerson, list } = personStore;

  const nameInput = useRef<HTMLInputElement>(null);
  const cvInput = useRef<HTMLInputElement>(null);

  return (
    <Layout title={'Person'}>
      <ul>
        {list.map((item) => (
          <li>
            {item.name} {item.cv}
          </li>
        ))}
      </ul>
      <section>
        <label>
          Name
          <input ref={nameInput} />
        </label>

        <label>
          CV
          <input ref={cvInput} />
        </label>
      </section>
      <button
        onClick={() => {
          const name = nameInput?.current?.value ?? '';
          const cv = cvInput?.current?.value ?? '';

          addPerson({ id: nanoid(), name, cv });
        }}
      >
        Add person
      </button>
    </Layout>
  );
};

export default observer(Person);
