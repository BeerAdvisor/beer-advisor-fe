import React, { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {
    StylesProvider,
    ThemeProvider as MuiContextThemeProvider,
} from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';

import theme from './theme';
import client from './api';
import { ErrorBoundary, NavigationBar } from './containers';
import GlobalStyle from './theme/globalStyle';
import { WithFormPage } from './pages';
import { CombinedForms } from './forms';
import LoginPage from './pages/LoginPage';

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
        main: (props: any) => <LoginPage {...props} />,
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
                    <StylesProvider injectFirst>
                        <>
                            <GlobalStyle />
                            <Routes />
                        </>
                    </StylesProvider>
                </MuiContextThemeProvider>
            </MuiThemeProvider>
        </StyledComponentsThemeProvider>
    </ApolloProvider>
);

export default App;
