import { createGlobalStyle } from 'styled-components';

import 'styled-components';

interface GlobalStyleProps {
  bgColor?: string;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  /* Reset CSS */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
    font-size: 100%;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: #000;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }

  h1 {
    font-size: 2rem; /* Equivale a 32px */
  }

  p {
    font-size: 1rem; /* Equivale a 16px */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: "Roboto", sans-serif;

  }
`;

export default GlobalStyle;
