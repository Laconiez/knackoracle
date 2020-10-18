import React, { useRef } from 'react';

import { Input } from 'components/Inputs/Input.styles';
import { Button } from 'components/Buttons/Buttons';
import { nanoid } from 'nanoid';
import { Person } from '../../entities/Person';
import { Actions, Label, Section } from './Create-Person.styles';

type CreatePersonProps = {
  onCancel: () => void;
  onConfirm: (person: Person) => void;
}

const CreatePerson = ({
  onCancel = () => {},
  onConfirm = () => {}
}: CreatePersonProps) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const cvInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);

  return (
    <>
      <Section>
        <Label> First & Last Name </Label>
        <Input ref={nameInput} placeholder="Name" />

        <Label> City </Label>
        <Input ref={cityInput} placeholder="City" />

        <Label> CV </Label>
        <Input ref={cvInput} placeholder="CV link" />
      </Section>
      <Actions>
        <Button onClick={onCancel} theme="default">Close</Button>
        <Button theme="primary" onClick={() => {
          const name = nameInput?.current?.value ?? '';
          const cv = cvInput?.current?.value ?? '';
          const city = cityInput?.current?.value ?? '';

          return name && cv ? onConfirm({ id: nanoid(), name, cv, city }) : onCancel();
        }}>Create</Button>
      </Actions>
    </>
  );
};

export default CreatePerson;
