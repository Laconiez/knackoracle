import styled from 'styled-components/macro';
import { black, white, greyMid, greyLight } from 'styles/colors';
import { secondaryFont } from 'styles/fonts';
export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

  width: 100vw;
  height: 100vh;

  .main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 72px 20px;
    width: 100%;
  }

  .subheader {
    width: 100%;
    border-bottom: solid 1px ${greyMid};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 72px 20px;
  }

  .title {
    font-family: ${secondaryFont};
    font-size: 16px;
    color: ${black};
    padding: 0;
    margin: 0;
  }

  .text {
    font-family: ${secondaryFont};
    font-size: 16px;
    font-weight: 400;
    color: ${black};
    padding: 0;
    margin: 0 40px 0 4px;
  }

  .content {
    margin: 8px 24px;
    position: relative;
    height: 100%;
  }

  .questionContent {
    font-family: ${secondaryFont};
    font-size: 16px;
    padding: 32px 58px;
    border: solid 2px ${black};
    border-radius: 10px;
  }

  .answer {
    font-family: ${secondaryFont};
    font-size: 16px;
    padding: 32px 58px;
    border: solid 2px ${black};
    border-radius: 10px;
    background-color: ${greyLight};
    margin-left: 72px;
    margin-top: 8px;
  }

  .actions {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-top: solid 1px ${black};
  }
`;
