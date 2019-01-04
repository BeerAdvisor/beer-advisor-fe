import React, { Component } from 'react';
// @ts-ignore TODO: configure TS correctly
import { install, ThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from './theme';
import SearchContainer from './containers/SearchContainer';
import { ApolloProvider } from 'react-apollo';
import client from './api';

install();

class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <StyledComponentsThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <SearchContainer />
        </ThemeProvider>
      </StyledComponentsThemeProvider>
    </ApolloProvider>
    );
  }
}

export default App;
