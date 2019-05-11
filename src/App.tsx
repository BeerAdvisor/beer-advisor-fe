import React, { Component, Suspense, lazy } from 'react';
// @ts-ignore
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { install } from '@material-ui/styles';
import {
    MuiThemeProvider,
    createGenerateClassName,
    jssPreset,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';

import theme from './theme';
import client from './api';
import BeerResultPage, {
    BeerResultContainer as AppContainer,
} from './pages/BeerResultPage';
import LoginPage from './pages/LoginPage';
import { ErrorBoundary, NavigationBar } from './containers';
import GlobalStyle from './theme/globalStyle';
import { BeerInfoPage } from './pages';
import { CombinedForms } from './forms';

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
        sidebar: (props: any) => <CombinedForms {...props} />,
        main: () => null,
    },
    {
        path: '/beers/:beerId',
        sidebar: (props: any) => <CombinedForms variant="small" {...props} />,
        main: (props: any) => <BeerResultPage {...props} />,
    },
    {
        path: '/beers',
        sidebar: (props: any) => <CombinedForms variant="small" {...props} />,
        main: (props: any) => <BeerResultPage {...props} />,
    },
    {
        path: '/login',
        sidebar: () => null,
        main: () => <LoginPage />,
    },
    {
        path: '/beer/:beerId',
        sidebar: (props: any) => <CombinedForms variant="small" {...props} />,
        main: (props: any) => <BeerInfoPage {...props} />,
    },
];

const LoadingMessage = () => <p>I'm loading...</p>;

const Routes = () => (
    <Router>
        <Suspense fallback={<LoadingMessage />}>
            <NavigationBar />
            <ErrorBoundary>
                <Switch>
                    <AppContainer>
                        {routes.map((route, index) => (
                            <React.Fragment>
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.sidebar}
                                />
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            </React.Fragment>
                        ))}
                    </AppContainer>
                </Switch>
            </ErrorBoundary>
        </Suspense>
    </Router>
);

const App = () => (
    <ApolloProvider client={client}>
        <StyledComponentsThemeProvider theme={theme}>
            <MuiThemeProvider theme={theme}>
                <JssProvider jss={jss} generateClassName={generateClassName}>
                    <>
                        <GlobalStyle />
                        <Routes />
                    </>
                </JssProvider>
            </MuiThemeProvider>
        </StyledComponentsThemeProvider>
    </ApolloProvider>
);

export default App;
