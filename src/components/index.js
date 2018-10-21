import React from 'react';
import WheaterExtraInfo from '../WhaterExtraInfo'
import WheaterTemperature from '../WheaterTemperature'

import {
    CLOUD,
    CLOUDY,
    SNOW,
    SUN,
    RAIN,
    WINDY,
    FOGGY
  } from './../../../constants/weathers'

const WheaterData = () => (
    <div>
        <WheaterTemperature 
        temperature={20} 
        weatherState={RAIN} />
        
        <WheaterExtraInfo humidity={80} wind={"10 m/s"}></WheaterExtraInfo>
    </div>
)

export default WheaterData;