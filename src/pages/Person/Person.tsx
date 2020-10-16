import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';
import axios from 'axios';

import personStore from 'stores/Persons.store';

import Layout from 'components/Layouts/CommonLayout';

const Person = () => {
  const { addPerson, list, loadList } = personStore;

  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);

  const nameInput = useRef<HTMLInputElement>(null);
  const cvInput = useRef<HTMLInputElement>(null);

  const addAvatar = async () => {
    try {
      const response = await axios.get('https://uifaces.co/api?limit=1&from_age=18&to_age=40', {
        headers: {
          'X-API-KEY': process.env.REACT_APP_UIFACES,
          Accept: 'application/json',
          'Cache-Control': 'no-cache',
        },
      });
      setImgUrl(response?.data[0].photo);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadList();
  }, [])

  return (
    <Layout title={'Person'}>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
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

        <img src={imgUrl as string} alt="avatar" />
        <button onClick={addAvatar}> add avatar</button>
      </section>
      <button
        onClick={() => {
          const name = nameInput?.current?.value ?? '';
          const cv = cvInput?.current?.value ?? '';

          addPerson({ id: nanoid(), name, cv, avatar: imgUrl });
        }}
      >
        Add person
      </button>
    </Layout>
  );
};

export default observer(Person);
