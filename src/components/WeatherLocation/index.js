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
       const {onWeatherLocationClick} = this.props;
       const { city, data} = this.state;
       return(
           <div className="row">
            <div className="col-md-12 box mt-5 mb-5" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>   
                {data ? 
                    <WheaterData data={data}></WheaterData> : 
                    <CircularProgress />
                }
            </div>
           </div>
       )
   }

}
WheatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWatherLocationClick: PropTypes.func,
}



export default WheatherLocation;