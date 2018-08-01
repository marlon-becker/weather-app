import { FETCHED, FETCHING, FETCH_FAILED } from '../constants';
import {
  CITY_WEATHER_FETCH_REQUESTED,
  CITY_WEATHER_FETCH_SUCCEEDED,
  CITY_WEATHER_FETCH_FAILED,
  SET_LAST_UPDATE_DATE
} from '../actions';

export const initialWeatherState = {
  cities: ['Barcelona', 'San Francisco', 'London', 'Paris'],
  citiesWeatherInfo: {},
  lastUpdate: ''
};

function weatherReducer(state = initialWeatherState, action) {
  switch (action.type) {
    case CITY_WEATHER_FETCH_REQUESTED:
      state = { ...state };
      state.citiesWeatherInfo = { ...state.citiesWeatherInfo };
      state.citiesWeatherInfo[action.city] = {
        status: FETCHING,
        date: Date.now(),
        data: {}
      };
      return state;
    case CITY_WEATHER_FETCH_SUCCEEDED:
      state = { ...state };
      state.citiesWeatherInfo = { ...state.citiesWeatherInfo };
      state.citiesWeatherInfo[action.city] = {
        status: FETCHED,
        date: Date.now(),
        data: action.data
      };
      return state;
    case CITY_WEATHER_FETCH_FAILED:
      state = { ...state };
      state.citiesWeatherInfo = { ...state.citiesWeatherInfo };
      state.citiesWeatherInfo[action.city] = {
        status: FETCH_FAILED,
        date: Date.now(),
        data: {}
      };
      return state;
    case SET_LAST_UPDATE_DATE:
      return {
        ...state,
        lastUpdate: Date.now()
      };
    default:
      return state;
  }
}

export default weatherReducer;
