import React, { Component } from 'react';
import './App.css';
// @ts-ignore TODO: configure TS correctly
import { install, ThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from './theme';
import SearchContainer from './containers/SearchContainer';

install();

class App extends Component {
    render() {
    
        return (
        <StyledComponentsThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <SearchContainer />
            </ThemeProvider>
        </StyledComponentsThemeProvider>
        );
    }
}

export default App;
