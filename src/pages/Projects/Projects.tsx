import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';

import projectStore from 'stores/Projects.store';

import Layout from 'components/Layouts/CommonLayout';
import { RowBetween } from '../Persons/Persons.styles';
import { H1 } from 'components/Headings/Headings';
import Search from 'components/Search';
import Grid from 'components/Grid';
import Modal from 'components/Modal';
import RoundButton from 'components/Round-Button';
import { useModal } from 'components/Modal/Modal.state';
import CreateProject from './Create-Project';

const Projects = () => {
  const { list, loadList, addProject, search } = projectStore;

  const { isShown, toggle } = useModal();

  const nameInput = useRef<HTMLInputElement>(null);
  const descInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadList();
  }, [loadList])

  return (
    <Layout>
      <RowBetween>
        <H1>Projects</H1>
        <Search placeholder="Search" onEnter={search} onSearchClick={search} />
      </RowBetween>
      <Grid titles={['Name', 'Description']} data={list} fields={['name', 'description']} indexField="id" onRowClick={() => {}}/>
      <Modal isShown={isShown} hide={toggle} headerText="New Project">
        <CreateProject onCancel={toggle} onConfirm={(project) => {
          addProject(project);
          toggle();
        }}/>
      </Modal>
      <RoundButton onClick={toggle} />
    </Layout>
  );
};

export default observer(Projects);
