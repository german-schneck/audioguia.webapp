import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  
  body {
    unicode-bidi: embed;
    background-color: black;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  
  ul, li, ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

export default GlobalStyle;
