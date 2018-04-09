import { combineReducers } from 'redux';
import WeatherReducer from './reducerWeather';

// Combine all reducers
const rootReducer = combineReducers({
  weather:  WeatherReducer
});

export default rootReducer;
