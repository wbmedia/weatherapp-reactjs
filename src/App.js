import React, { Component } from 'react';
import LocationList from './components/LocationList'
import './App.css';

const cities = [
  'Tijuana,mx',
  'Mexicali,mx',
  'Tecate,mx',
  'Rosarito,mx',
  'Ensenada,mx',
]
class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>Weather App | Baja California</h1>
         <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
