import React from 'react';
import PropTypes  from 'prop-types'
import WheaterData from './../WeatherLocation/WeatherData/'

const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <div>
        <h3>{weekDay} Hora: {hour} hs</h3>
            <WheaterData data={data} />
        </div>
    </div>
)

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default ForecastItem;