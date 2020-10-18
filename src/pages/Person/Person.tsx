import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import { nanoid } from 'nanoid';
import axios from 'axios';

import { Route } from 'react-router-dom';

import personStore from 'stores/Persons.store';

import Layout from 'components/Layouts/CommonLayout';
import { Input } from 'components/Inputs/Input.styles';
import Grid from 'components/Grid';
import Search from 'components/Search';

const Person = () => {
  const { addPerson, list, loadList, search } = personStore;

  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);

  const nameInput = useRef<HTMLInputElement>(null);
  const cvInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);

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
    <>
      <Layout title={'People'}>
        <Search placeholder="Search" onEnter={search} onSearchClick={search} />
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

          <label>
            City
            <Input ref={cityInput} placeholder="City" />
          </label>

          <img src={imgUrl as string} alt="avatar" />
          <button onClick={addAvatar}> add avatar</button>
        </section>
        <button
          onClick={() => {
            const name = nameInput?.current?.value ?? '';
            const cv = cvInput?.current?.value ?? '';
            const city = cityInput?.current?.value ?? '';

            addPerson({ id: nanoid(), name, cv, city });
          }}
        >
          Add person
        </button>
      </Layout>
      <Route path="/persons/:personId" render={() => <div>PPPPPP</div>} />
    </>
  );
};

export default observer(Person);
