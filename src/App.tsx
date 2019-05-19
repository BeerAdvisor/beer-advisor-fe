import React, { Component, Suspense, lazy } from 'react';
// @ts-ignore
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { install, ThemeProvider as MuiContextThemeProvider  } from '@material-ui/styles';
import {
    MuiThemeProvider,
    createGenerateClassName,
    jssPreset,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';

import theme from './theme';
import client from './api';
import { ErrorBoundary, NavigationBar } from './containers';
import GlobalStyle from './theme/globalStyle';
import { WithFormPage } from './pages';
import { CombinedForms } from './forms';
import LoginPage from './pages/LoginPage';

const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    insertionPoint: document.getElementById(
        'jss-insertion-point'
    ) as HTMLElement,
});

install();

// const HomePage =  lazy(() => (import('./pages/HomePage')));
// const BeerResultPage = lazy(() => (import('./pages/BeerResultPage')));

const routes = [
    {
        path: '/',
        exact: true,
        main: (props: any) => <CombinedForms {...props} />,
    },
    {
        path: '/login',
        main: () => <LoginPage />,
    },
    {
        path: '/form',
        main: (props: any) => <WithFormPage {...props} />,
    },
];

const LoadingMessage = () => <p>I'm loading...</p>;

const Routes = () => (
    <Router>
        <Suspense fallback={<LoadingMessage />}>
            <NavigationBar />
            <ErrorBoundary>
                <Switch>
                    {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                    ))}
                </Switch>
            </ErrorBoundary>
        </Suspense>
    </Router>
);

const App = () => (
    <ApolloProvider client={client}>
        <StyledComponentsThemeProvider theme={theme}>
            <MuiThemeProvider theme={theme}>
                <MuiContextThemeProvider theme={theme}>
                <JssProvider jss={jss} generateClassName={generateClassName}>
                    <>
                        <GlobalStyle />
                        <Routes />
                    </>
                </JssProvider>
                </MuiContextThemeProvider>
            </MuiThemeProvider>
        </StyledComponentsThemeProvider>
    </ApolloProvider>
);

export default App;
