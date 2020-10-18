import styled from 'styled-components/macro';

import { black, white } from 'styles/colors';
import { secondaryFont } from 'styles/fonts';

export const Container = styled.nav`
  background-color: ${black};
  width: 360px;
  display: flex;
  flex-direction: column;

  color: ${white};

  .header {
    color: ${white};
    margin: 48px 4px 48px 24px;
    padding-right: 16px;
  }

  .questionsList {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 0 48px;
    color: ${white};
    text-decoration-color: ${white};
    margin: 0 24px;
  }

  .question {
    font-family: ${secondaryFont};

    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
