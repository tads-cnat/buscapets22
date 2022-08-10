import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
    font-family: 'Comfortaa', cursive;
  }
`;

export default GlobalStyle;