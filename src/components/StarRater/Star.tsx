import React from 'react';
import styled from 'styled-components';

import { distillery, black, greyLight } from 'styles/colors';

type StarProps = {
  checked: boolean;
};

const SVG = styled.svg<StarProps>`
  cursor: pointer;
  path {
    fill: ${(props) => (props.checked ? distillery : 'transparent')};
    stroke: ${(props) => (props.checked ? distillery : black)};

    &:hover {
      fill: ${(props) => (props.checked ? distillery : greyLight)};
    }
  }
`;

const Star = ({ checked }: StarProps) => {
  return (
    <SVG checked={checked} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.8951 7.26069L23.3691 14.3042C23.6602 14.8945 24.2231 15.3037 24.8744 15.3986L32.6434 16.5308L27.0219 22.0102C26.5505 22.4697 26.3354 23.1317 26.4467 23.7805L27.7738 31.5184L20.8247 27.8703C20.2426 27.5647 19.5475 27.5647 18.9654 27.8703L12.0163 31.5184L13.3435 23.7805C13.4548 23.1317 13.2396 22.4697 12.7682 22.0102L7.14668 16.5308L14.9158 15.3986C15.567 15.3037 16.1299 14.8945 16.421 14.3042L19.8951 7.26069Z"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </SVG>
  );
};

export default Star;
