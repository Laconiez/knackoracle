import React from 'react';

import Sidebar from 'components/Sidebar';

import { H1 } from 'components/Headings/Headings';
import { Container, Content, TopBar } from './CommonLayout.styles';

type CommonLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const CommonLayout = ({ title, children }: CommonLayoutProps) => {
  return (
    <Container>
      <Sidebar />
      <Content>
        {' '}
        <TopBar>
          <H1>{title}</H1>{' '}
        </TopBar>{' '}
        {children}
      </Content>
    </Container>
  );
};

export default CommonLayout;
