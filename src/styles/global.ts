import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #f0f0f5;
    color: #3a3a3a;
    -webkit-font-smoothin: antialiased;
    text-rendering: optimizeLegibility;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
