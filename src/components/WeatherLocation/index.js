import React from 'react';
import WheaterData from './WeatherData/index'
import Location from './Location'

const WheatherLocation = () => (
    <div>
        <Location city={"Tijuana"}></Location>   
        <WheaterData></WheaterData> 
    </div>

)

export default WheatherLocation;