import React from 'react'
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types'

const LocationList = ({cities}) => {
    return (
        <div>
            <WeatherLocation city="Tijuana,mx"></WeatherLocation>
            <WeatherLocation city="Tecate,mx"></WeatherLocation>
            <WeatherLocation city="Rosarito,mx"></WeatherLocation>
            <WeatherLocation city="Mexicali,mx"></WeatherLocation>
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;