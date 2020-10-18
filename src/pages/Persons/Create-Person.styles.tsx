import styled from 'styled-components';
import { secondaryFont } from 'styles/fonts';
import { black } from 'styles/colors';

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  
  >*:last-child {
   margin-left: 20px; 
  }  
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  
  >* {
    margin-bottom: 20px
  }
`

export const Label = styled.label`
  color: ${black};
  font-family: ${secondaryFont};
  font-weight: 700;
`
