import React, { Component } from 'react';
import './App.css'; 
import SearchField from './components/SearchField';
import StepSlider from './components/StepSlider';
// @ts-ignore TODO: configure TS correctly
import { install } from '@material-ui/styles';

install();

class App extends Component {
  render() {
    return (
      <div>
        <SearchField />
        <StepSlider />
      </div>
    );
  }
}

export default App;
