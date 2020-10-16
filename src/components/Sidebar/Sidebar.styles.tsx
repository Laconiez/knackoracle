import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { black, white } from 'styles/colors';
import { secondaryFont } from 'styles/fonts';

export const Container = styled.nav`
  width: 200px;
  background-color: ${black};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin: 100px 0 0;
`;

export const SideLink = styled(NavLink)`
  text-decoration: none;
  color: ${white};
  font-family: ${secondaryFont};
  font-weight: normal;
  font-size: 16px;
  margin: 10px 48px;
  cursor: pointer;

  &.active {
    font-weight: bold;
    position: relative;

    &:before {
      position: absolute;
      width: 24px;
      height: 4px;
      top: 10px;
      left: -50px;
      content: '';
      border-radius: 2px;
      background-color: ${white};
    }
  }
`;
