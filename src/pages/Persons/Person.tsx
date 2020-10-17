import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import { Link, useParams } from 'react-router-dom';

import Layout from 'components/Layouts/CommonLayout';
import { H1 } from 'components/Headings/Headings';
import { Button } from 'components/Buttons/Buttons';

import personStore from 'stores/Persons.store';
import { Label, Section } from './Create-Person.styles';
import { Input } from 'components/Inputs/Input.styles';
import { Actions, Row } from './Person.styles';

const ArrowLeftIcon = () => {
  const SEARCH_BUTTON_EDGE = 45;
  const iconEdge = Math.ceil(SEARCH_BUTTON_EDGE * 0.60);

  return (
    <svg
      viewBox = "0 0 32 32"
      className = "icon icon-arrow-left"
      aria-hidden = "true"
      width={iconEdge}
      height={iconEdge}
    >
      <path d = "M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"
      />
  </svg >
  );
};

const Person = () => {
  const { getPerson, person } = personStore;
  const { idPerson } = useParams();

  const nameInput = useRef<HTMLInputElement>(null);
  const cvInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getPerson(idPerson);
  }, [getPerson, idPerson]);

  return (
    <>
      <Layout>
        <Row style={{'margin': '0 0 20px 0'}}>
          <Row>
            <Link to="/persons">
              <ArrowLeftIcon />
            </Link>
            <H1 style={{'paddingLeft': '30px'}}>{person?.name}</H1>
          </Row>
          <Button theme="accent">Start interview</Button>
        </Row>

        <Section>
          <Label> First & Last Name </Label>
          <Input style={{'width': '350px'}} ref={nameInput} defaultValue={person?.name} readOnly placeholder="Name" />

          <Label> City </Label>
          <Input style={{'width': '200px'}} ref={cityInput} defaultValue={person?.city} readOnly placeholder="City" />

          <Label> CV </Label>
          <Input style={{'width': '200px'}} ref={cvInput} defaultValue={person?.cv}  readOnly placeholder="CV link" />
        </Section>

        {/*<Actions>*/}
        {/*  <Button theme="primary" onClick={() => {*/}
        {/*    const name = nameInput?.current?.value ?? '';*/}
        {/*    const cv = cvInput?.current?.value ?? '';*/}
        {/*    const city = cityInput?.current?.value ?? '';*/}
        {/*  }}>Save Changes</Button>*/}
        {/*</Actions>*/}
      </Layout>
    </>
  );
};

export default observer(Person);
