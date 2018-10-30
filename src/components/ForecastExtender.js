import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index'

import {extends_url_weather, api_key} from './../constants/api_url'
import trasnformForecast from './../services/transformForecast'

// const days = [
//     'Lunes',
//     'Martes',
//     'Mircoles',
//     'Jueves',
//     'Viernes',
// ]

// const data = {
//     temperature: 10,
//     weatherState: 'normal',
//     humidity: 10,
//     wind: 'normal'

// }

class ForecastExtended extends Component {
    
    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        const url_forecast_extended = `${extends_url_weather}?q=${this.props.city}&appid=${api_key}`
         fetch(url_forecast_extended)
        .then(data => data.json())
        .then(
            weather_data => {
                const forecastData = trasnformForecast(weather_data);
                this.setState({ forecastData });
            }
        )
        .catch()
    }

    renderCastItemDays(forecastData) {
         return forecastData.map(forecast => (
            <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
            </ForecastItem>));
    }

    renderProgers(){
        return <h3>Loaded Forecast Extended ...</h3>
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state
        return ( 
        <div className="card background-flourecent-red">
            <div className="card-body">
                <div>Forecast Extended for {city}</div>
                {forecastData ? this.renderCastItemDays(forecastData) :
                this.renderProgers()
            }
            </div>
        </div>)
    }
}
ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;