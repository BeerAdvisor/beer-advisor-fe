import React, { Component } from 'react';
// @ts-ignore TODO: configure TS correctly
import { install, ThemeProvider } from '@material-ui/styles';
import { MuiThemeProvider } from  '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from './theme';
import SearchContainer from './containers/SearchContainer';
import { ApolloProvider } from 'react-apollo';
import client from './api';
import { HomePage } from './pages';

install();

class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <StyledComponentsThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider  theme={theme}>
            <HomePage />
          </MuiThemeProvider >
        </ThemeProvider>
      </StyledComponentsThemeProvider>
    </ApolloProvider>
    );
  }
}

export default App;
