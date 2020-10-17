import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';
import axios from 'axios';

import personStore from 'stores/Persons.store';

import Layout from 'components/Layouts/CommonLayout';
import { Input } from 'components/Inputs/Input.styles';
import Grid from 'components/Grid';

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
  }, [loadList]);

  return (
    <Layout title={'Person'}>
      <Grid titles={['Name', 'CV']} data={list} fields={['name', 'cv']} indexField="id" />
      <section>
        <label>
          Name
          <Input ref={nameInput} placeholder="Name" />
        </label>

        <label>
          CV
          <Input ref={cvInput} placeholder="CV link" />
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
