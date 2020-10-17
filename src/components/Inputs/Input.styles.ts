import styled from 'styled-components';

import { greyLight, greyDark, black } from 'styles/colors';
import { secondaryFont } from 'styles/fonts';

export const Input = styled.input`
  background-color: ${greyLight};
  color: ${black};
  font-family: ${secondaryFont};
  padding: 8px 24px;
  border-radius: 10px;
  border: none;

  &::placeholder {
    color: ${greyDark};
  }
`;
