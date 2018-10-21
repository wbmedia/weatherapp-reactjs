import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WhaterExtrasInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfo">
        <p>
           <span>Humidity: {`${humidity} % -`} Wind: {`${wind}`} </span> 
        </p>
    </div>
)

WhaterExtrasInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WhaterExtrasInfo;