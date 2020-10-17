import styled from 'styled-components/macro';

import { secondaryFont } from 'styles/fonts';

import { black, greyMid, greyLight, distillery } from 'styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
  margin: 12px 0;
  border-bottom: solid 1px ${greyMid};
`;

export const HeaderCell = styled.h4`
  flex: 1;
  font-family: ${secondaryFont};
  font-size: 16px;
  line-height: 24px;
  padding: 0;
  margin: 0;
`;

export const Content = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Row = styled.li`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 16px;
  border-radius: 5px;
  border: solid 1px transparent;
  cursor: pointer;

  &:nth-child(2n) {
    background-color: ${greyLight};
  }

  &:hover {
    border: solid 1px ${distillery};
  }
`;

export const Cell = styled.div`
  flex: 1;
  font-family: ${secondaryFont};
  font-size: 16px;
`;
