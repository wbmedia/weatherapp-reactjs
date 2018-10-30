import moment from 'moment'
import transformWeather from './trasnfromWeather'
const trasnformForecast = data => (
    data.list.filter(item => (
        moment.unix(item.dt).utc().hour() === 6 || 
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18 
    )).map( item => (
        {
            weekday: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
);
export default trasnformForecast;