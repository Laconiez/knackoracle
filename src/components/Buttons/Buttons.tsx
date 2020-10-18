import React from 'react';

import styled from 'styled-components';

import { accent, black, distillery, white } from 'styles/colors';
import { secondaryFont } from 'styles/fonts';

type Theme = 'primary' | 'default' | 'accent' | 'outline-primary' | 'outline-default' | 'link';

type ThemeOptions = {
  color: string;
  background: string;
  border: string;
  padding: string;
}

const themes: Record<Theme, ThemeOptions> = {
  primary: {
    color: white,
    background: black,
    border: 'none',
    padding: '8px 74px',
  },
  default: {
    color: black,
    background: white,
    border: `1px solid ${black}`,
    padding: '8px 74px',
  },
  accent: {
    color: white,
    background: distillery,
    border: 'none',
    padding: '8px 74px',
  },
  'outline-primary': {
    color: accent,
    background: 'transparent',
    border: 'none',
    padding: '8px',
  },
  'outline-default': {
    color: black,
    background: 'transparent',
    border: 'none',
    padding: '8px',
  },
  link: {
    color: distillery,
    background: 'transparent',
    border: 'none',
    padding: '8px',
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
  padding: ${({ theme }: ButtonsProps) => themes[theme].padding};;
  border-radius: 10px;
  text-transform: uppercase;
  
  :hover {
    cursor: pointer;
  }
  
  :disabled {
    opacity: 0.4;
  }
`;
