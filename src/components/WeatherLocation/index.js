import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import WheaterData from './WeatherData/index';
import Location from './Location';
import transformWeather from './../../services/trasnfromWeather'
import { api_weather } from '../../constants/api_url';

class WheatherLocation extends Component {

   constructor() {
       super();
       this.state = {
           city: "Tijuana",
           data: null
       }
      
   } 

   componentDidMount() {
        this.handleUpdateClick()
   }
   
   componentDidUpdate(prevProps, prevState) {

   }
   // depreced NOT USE
   componentWillMount() {
   }
   // depreced NOT USE
   componentWillUpdate(nextProps, nextState) {
   }
 
// TEST END POINT   
//    getEndpoint = () => {
//        fetch(url).then(res => {
//            return res.json()})
//            .then( data2 => {
//              const newData2 = data2;
//              console.log(newData2)
//            })
//             .catch(error => {
//             console.log(error);
//             });
//    }

   handleUpdateClick = () => {
         fetch(api_weather).then(response => { 
             
             return response.json() })
            .then(data => {
                
            const newWeather = transformWeather(data)
            
            this.setState({
                data: newWeather
            });
            })
            .catch(error => {
                alert("Cant get data from API weather" + error)
            });
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
export default WheatherLocation;