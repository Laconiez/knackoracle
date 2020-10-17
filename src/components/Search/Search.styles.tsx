import styled from 'styled-components';

import { greyLight, greyDark, black } from 'styles/colors';
import { secondaryFont } from 'styles/fonts';

const borderRadius = '5px';


export const Container = styled.div`
  display: flex;
  margin: 20px 0;
`

export const Input = styled.input`
  background-color: ${greyLight};
  color: ${black};
  font-family: ${secondaryFont};
  padding: 8px 24px;
  border-radius: ${borderRadius} 0 0 ${borderRadius};
  border: none;
  width: 300px; 

  &::placeholder {
    color: ${greyDark};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${greyLight};
  color: ${black};
  font-family: ${secondaryFont};
  padding: 6px 24px;
  border-radius: 0 ${borderRadius} ${borderRadius} 0;
  border: none;
`
