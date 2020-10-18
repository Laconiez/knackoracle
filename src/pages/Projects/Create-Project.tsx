import React, { useRef } from 'react';

import { Input } from 'components/Inputs/Input.styles';
import { Button } from 'components/Buttons/Buttons';
import { nanoid } from 'nanoid';
import { Actions, Label, Section } from './Create-Project.styles';
import { Company } from '../../entities/Company';

type CreatePersonProps = {
  onCancel: () => void;
  onConfirm: (project: Company) => void;
}

const CreateProject = ({
  onCancel = () => {},
  onConfirm = () => {}
}: CreatePersonProps) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const descInput = useRef<HTMLInputElement>(null);

  return (
    <>
      <Section>
        <Label> Name </Label>
        <Input ref={nameInput} placeholder="Name" />

        <Label> Description </Label>
        <Input ref={descInput} placeholder="Description" />
      </Section>
      <Actions>
        <Button onClick={onCancel} theme="default">Close</Button>
        <Button theme="primary" onClick={() => {
          const name = nameInput?.current?.value ?? '';
          const description = descInput?.current?.value ?? '';

          return name && description ? onConfirm({ id: nanoid(), name, description }) : onCancel();
        }}>Create</Button>
      </Actions>
    </>
  );
};

export default CreateProject;
