import React, { Component } from 'react';
import './App.css';
import SearchField from './components/SearchField';
import StepSlider from './components/StepSlider';
// @ts-ignore TODO: configure TS correctly
import { install } from '@material-ui/styles';
import Select from './components/Select';

install();

class App extends Component {
    render() {
        return (
            <div>
                <SearchField />
                <StepSlider />
                <Select/>
            </div>
        );
    }
}

export default App;
