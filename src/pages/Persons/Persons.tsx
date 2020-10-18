import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';

import personStore from 'stores/Persons.store';

import Layout from 'components/Layouts/CommonLayout';
import Grid from 'components/Grid';
import Search from 'components/Search';
import Modal from 'components/Modal';
import RoundButton from 'components/Round-Button';
import { useModal } from 'components/Modal/Modal.state';
import { H1 } from 'components/Headings/Headings';
import CreatePerson  from './Create-Person';
import { RowBetween } from './Persons.styles';

const Persons = () => {
  const { addPerson, list, loadList, search } = personStore;
  const { isShown, toggle } = useModal();
  const history = useHistory();

  useEffect(() => {
    loadList();
  }, [loadList]);


  const navigateTo = (id: string) => {
    history.push(`persons/${id}`);
  }

  return (
    <>
      <Layout>
        <RowBetween>
          <H1>People</H1>
          <Search placeholder="Search" onEnter={search} onSearchClick={search} />
        </RowBetween>
        <Grid titles={['Name', 'CV']} data={list} fields={['name', 'cv']} indexField="id" onRowClick={navigateTo}/>
        <Modal isShown={isShown} hide={toggle} headerText="New Candidate">
          <CreatePerson onCancel={toggle} onConfirm={(person) => {
            addPerson(person);
            toggle();
          }}/>
        </Modal>
        <RoundButton onClick={toggle} />
      </Layout>
    </>
  );
};

export default observer(Persons);
