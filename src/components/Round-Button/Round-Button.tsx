import React from 'react';

import styled from 'styled-components';

import { black, white } from 'styles/colors';
import { secondaryFont } from 'styles/fonts';

const RoundedButton = styled.button`
  font-family: ${secondaryFont};
  font-size: 30px;
  font-weight: 400;
  display: block;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 20px;
  right: 72px;

  color: ${white};
  background-color: ${black};
  border-radius: 50%;
  border: ${black};
  box-shadow: 1px 4px 8px 0 ${black};
  
  :hover {
    cursor: pointer;
  }
  
  :focus {
    outline: none;
    box-shadow: none;
  }
`;

const RoundButton = ({onClick = () => {}}) => {
  return(
    <RoundedButton onClick={onClick}> + </RoundedButton>
  )
}

export default RoundButton;

