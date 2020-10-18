import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 56px 72px 32px;
  flex: 1;
`;

export const TopBar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
