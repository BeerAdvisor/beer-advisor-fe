import React, { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// @ts-ignore TODO: configure TS correctly
import { install, ThemeProvider } from '@material-ui/styles';
import { MuiThemeProvider } from  '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from './theme';
import { ApolloProvider } from 'react-apollo';
import client from './api';

install();

const HomePage =  lazy(() => (import('./pages/HomePage')));
const BeerResultPage = lazy(() => (import('./pages/BeerResultPage')));

// TODO: Proper loader
const LoadingMessage = () => (
  <p>I'm loading...</p>
);

const Routes = () => (
  <Router>
    <Suspense fallback={<LoadingMessage />}>
      <Switch>
        <Route exact path="/" render={(props: any) => <HomePage {...props} />} />
        <Route path="/beers" render={(props: any) => <BeerResultPage {...props} />} />
      </Switch>
    </Suspense>
  </Router>
);

class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <StyledComponentsThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <Routes />
          </MuiThemeProvider >
        </ThemeProvider>
      </StyledComponentsThemeProvider>
    </ApolloProvider>
    );
  }
}

export default App;
