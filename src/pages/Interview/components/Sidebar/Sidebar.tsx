import React from 'react';

import { Container } from './Sidebar.styles';

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  return <Container>{children}</Container>;
};

export default Sidebar;
