import { createGlobalStyle } from '../styled-components';

import { EXTRA_LARGE_BP_UP, LARGE_BP_UP } from './breakpoints';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
    ${LARGE_BP_UP} {
      font-size: 16px;
    }
    ${EXTRA_LARGE_BP_UP} {
      font-size: 18px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.palette.backgroundLight};
    min-height: 100vh;
  }
`;

export default GlobalStyle;
