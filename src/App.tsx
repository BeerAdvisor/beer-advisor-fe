import React, { Component, Suspense, lazy } from 'react';
// @ts-ignore
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// @ts-ignore TODO: configure TS correctly
import { install, ThemeProvider } from '@material-ui/styles';
import { MuiThemeProvider, createGenerateClassName, jssPreset } from  '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from './theme';
import { ApolloProvider } from 'react-apollo';
import client from './api';
import HomePage from './pages/HomePage';
import BeerResultPage from './pages/BeerResultPage';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point') as HTMLElement,
});

install();

// const HomePage =  lazy(() => (import('./pages/HomePage')));
// const BeerResultPage = lazy(() => (import('./pages/BeerResultPage')));

// TODO: Proper loader
const LoadingMessage = () => (
  <p>I'm loading...</p>
);

const Routes = () => (
  <Router>
    <Suspense fallback={<LoadingMessage />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beers" component={BeerResultPage} />
      </Switch>
    </Suspense>
  </Router>
);

const App = () => (
     <ApolloProvider client={client}>
       <StyledComponentsThemeProvider theme={theme}>
         <ThemeProvider theme={theme}>
           <MuiThemeProvider theme={theme}>
           <JssProvider jss={jss} generateClassName={generateClassName}>
             <Routes />
            </JssProvider>
           </MuiThemeProvider >
         </ThemeProvider>
       </StyledComponentsThemeProvider>
     </ApolloProvider>
);

export default App;
