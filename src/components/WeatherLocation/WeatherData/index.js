import React from 'react';
import PropTypes from 'prop-types'
import WheaterExtraInfo from './WhaterExtraInfo';
import WheaterTemperature from './WheaterTemperature';
import './styles.css';
 
const WheaterData = ({ data: { temperature, weatherState, humidity, wind } }) => {
   return (
        <div className="">
            <WheaterTemperature 
            temperature={temperature} 
            weatherState={weatherState} />
            
            <WheaterExtraInfo humidity={80} wind={"10 m/s"}></WheaterExtraInfo>
        </div>
   )
}

WheaterData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WheaterData;