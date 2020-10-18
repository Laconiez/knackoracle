import React from 'react';

import Sidebar from 'components/Sidebar';

import { H2 } from 'components/Headings/Headings';
import { Container, Content, TopBar } from './InterviewLayout.styles';

type InterviewLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const InterviewLayout = ({ title, children }: InterviewLayoutProps) => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <TopBar>
          <H2>{title}</H2>{' '}
        </TopBar>{' '}
        {children}
      </Content>
    </Container>
  );
};

export default InterviewLayout;
