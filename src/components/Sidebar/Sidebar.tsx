import React from 'react';

import { Container, Links, SideLink } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <Container>
      <Links>
        <SideLink to="/persons" activeClassName="active">
          Persons
        </SideLink>
        <SideLink to="/projects" activeClassName="active">
          Projects
        </SideLink>
        <SideLink to="/skills" activeClassName="active">
          Skills
        </SideLink>
        <SideLink to="/questions" activeClassName="active">
          Questions
        </SideLink>
      </Links>
    </Container>
  );
};

export default Sidebar;
