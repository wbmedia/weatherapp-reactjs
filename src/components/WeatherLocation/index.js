import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import WheaterData from './WeatherData/index';
import Location from './Location';
import transformWeather from './../../services/trasnfromWeather'
import getUrlByCity from './../../services/getUrlWeatherByCity';
class WheatherLocation extends Component {

   constructor(props) {
       super(props);
       const { city } = props;
       this.state = {
           city,
           data: null
       }
      
   } 

   componentDidMount() {
        this.handleUpdateClick();
   }
   
   componentDidUpdate(prevProps, prevState) {

   }
   handleUpdateClick = () => {
          const api_weather = getUrlByCity(this.state.city)

        // const api_weather = 'http://api.openweathermap.org/data/2.5/weather?q=Tijuana,mx&appid=846a03df58ef0408069c70fd489be016';
         fetch(api_weather).then(response => {
             return response.json()
         }).then(data => {
             const newWeather = transformWeather(data)
             this.setState({
                 data:newWeather
             });
         })
            
   }
    
   render () {
       const { city, data} = this.state;
       return(
        <div>
            <Location city={city}></Location>   
            {data ? 
                <WheaterData data={data}></WheaterData> : 
                <CircularProgress />
            }
        </div>
       )
   }

}
WheatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WheatherLocation;