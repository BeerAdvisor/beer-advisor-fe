import React, { Component } from 'react';
import './App.css';
// @ts-ignore TODO: configure TS correctly
import { install } from '@material-ui/styles';
import { MuiThemeProvider }  from '@material-ui/core/styles';
import theme from './theme/theme';
import SearchContainer from './containers/SearchContainer';

install();

class App extends Component {
    render() {
    
        return (
            // <MuiThemeProvider theme={theme}>
              <SearchContainer />
            // </MuiThemeProvider>
        );
    }
}

export default App;
