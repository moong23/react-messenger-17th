import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    user-select: none;
    cursor: url(/Normal.cur) 0 0, normal;
  }
  
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Apple SD Gothic Neo','Spoqa Han Sans Neo', 'sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 500;
    overflow: hidden;
  }
  #root {
    width: 100%;
    height: 100%;
    
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    font: inherit;
    font-size: 14px;
    font-weight: 500;
  }
  ::-webkit-scrollbar {
  width: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
  background-color: #5e5e5e;
  border-radius: 4px;
  }
`;

export default GlobalStyle;
