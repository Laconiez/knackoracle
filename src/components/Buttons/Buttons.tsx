import React from 'react';

import styled from 'styled-components';

import { accent, black, distillery, white } from 'styles/colors';
import { secondaryFont } from 'styles/fonts';

type Theme = 'primary' | 'default' | 'accent' | 'medium-primary' | 'outline-primary' | 'outline-default' | 'link';

type ThemeOptions = {
  color: string;
  background: string;
  border: string;
}

const themes: Record<Theme, ThemeOptions> = {
  primary: {
    color: white,
    background: black,
    border: 'none',
  },
  default: {
    color: black,
    background: white,
    border: `1px solid ${black}`
  },
  accent: {
    color: white,
    background: distillery,
    border: 'none',
  },
  'medium-primary': {
    color: white,
    background: black,
    border: 'none',
  },
  'outline-primary': {
    color: accent,
    background: 'transparent',
    border: 'none',
  },
  'outline-default': {
    color: black,
    background: 'transparent',
    border: 'none',
  },
  link: {
    color: distillery,
    background: 'transparent',
    border: 'none',
  }
}

type ButtonsProps = {
  theme: Theme
}

export const Button = styled.button`
  font-family: ${secondaryFont};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;

  color: ${({ theme }: ButtonsProps) => (themes[theme]).color};
  background-color: ${({ theme }: ButtonsProps) => themes[theme].background};
  border: ${({ theme }: ButtonsProps) => themes[theme].border};
  padding: 8px 74px;
  border-radius: 10px;
  text-transform: uppercase;
  
  :hover {
    cursor: pointer;
  }
`;
