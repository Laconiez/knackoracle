import { nanoid } from 'nanoid';
import React, { useState } from 'react';

import { Container, Header, HeaderCell, Content, Row, Cell } from './Grid.styles';

type GridProps<T> = {
  titles: string[];
  data: T[];
  fields: string[];
  indexField: string;
  onRowClick: (id: string) => void;
}

const Grid = ({ titles = [], data = [], fields = [], indexField, onRowClick = () => {} }: GridProps<any>) => {
  const displayData = data.map((item, idx) => {
    const i: any = {};
    fields.forEach((f) => {
      i[f] = item[f];
    });
    i.id = item[indexField];

    return i;
  });

  return (
    <Container>
      <Header>
        {titles.map((t) => (
          <HeaderCell>{t}</HeaderCell>
        ))}
      </Header>
      <Content>
        {displayData.map((item) => {
          return (
            <Row key={item[indexField]} onClick={() => onRowClick(item.id)}>
              {fields.map((field) => {
                return <Cell key={`${item.id}-${nanoid()}`}>{item[field]}</Cell>;
              })}
            </Row>
          );
        })}
      </Content>
    </Container>
  );
};

export default Grid;
