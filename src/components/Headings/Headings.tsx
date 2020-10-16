import React from 'react';

import styled from 'styled-components';

import { mainFont, secondaryFont } from 'styles/fonts';
import { black } from 'styles/colors';

export const H1 = styled.h1`
  font-family: ${mainFont};
  font-weight: 700;
  font-style: normal;
  font-size: 40px;
  line-height: 53px;
  color: ${black};
  padding: 0;
  margin: 0;
`;

export const H2 = styled.h2`
  font-family: ${mainFont};
  font-weight: 700;
  font-style: normal;
  font-size: 32px;
  line-height: 42px;
  color: ${black};
  padding: 0;
  margin: 0;
`;

export const H3 = styled.h2`
  font-family: ${mainFont};
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
  color: ${black};
  padding: 0;
  margin: 0;
`;

export const H4 = styled.h2`
  font-family: ${mainFont};
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: 26px;
  color: ${black};
  padding: 0;
  margin: 0;
`;

export const Text = styled.p`
  font-family: ${secondaryFont};
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${black};
  padding: 0;
  margin: 0;
`;
