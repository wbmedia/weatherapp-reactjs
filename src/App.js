import React, { Component } from 'react';
import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtender'
import './App.css';
import Navigation from './UI/layout/topNavBar'
import Footer from './UI/layout/footer'

const cities = [
  'Tijuana,mx',
  'Mexicali,mx',
  'Tecate,mx',
  'Rosarito,mx',
  'Ensenada,mx',
]
class App extends Component {

  constructor() {
    super();
    this.state = {city: null }
  }

  handleSelectedLocation = city => {
    this.setState({city})
  }
  render() {
    const { city } = this.state;
    return (
      <div>
        <Navigation />
      <div className="container mt-5 mb-5">
       <div className="row">
         <div className="col-md-8">
            <div className="card background-flourecent-red">
              <div className="card-body text-center scroll">
              <h1>Weather App | Baja California</h1>
                <LocationList  cities={cities}
                onSelectedLocation={this.handleSelectedLocation}></LocationList>  
              </div> 
            </div>
        </div>  

        <div className="col-md-4 text-center">
          {
            !city ?
            <h3>No City Selected</h3>:
             <ForecastExtended city={city}/>
          }
        </div>  
       </div>
      </div>
       <Footer />
      </div>
    );
  }
}
export default App;