import React from 'react';

import styled from 'styled-components';

import { black, white } from 'styles/colors';
import { secondaryFont } from 'styles/fonts';

export const Button = styled.button`
  font-family: ${secondaryFont};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;

  color: ${white};
  background-color: ${black};
  padding: 8px 74px;
  border-radius: 10px;
`;
