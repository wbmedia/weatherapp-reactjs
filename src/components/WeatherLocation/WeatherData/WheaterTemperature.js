import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

import {
    CLOUD,
    CLOUDY,
    SNOW,
    SUN,
    RAIN,
    WINDY,
    FOGGY,
  } from './../../../constants/weathers'

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'wind',
    [FOGGY]: 'day-fog'
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons name={icon} size="2x" />
    else
    return <WeatherIcons name={"day-sunny" } size="2x" />
}
const WhaterTemperature = ({temperature, weatherState}) => (
    <div className="">
        <p>
            <span>
                {
                    getWeatherIcon(weatherState)
                }
                {`${temperature} °C - `} {`${weatherState}`}
            </span>
        </p>
    </div>
);
WhaterTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WhaterTemperature;