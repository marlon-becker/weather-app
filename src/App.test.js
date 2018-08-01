import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './containers/WeatherApp/WeatherApp';

import weatherReducer, {
  initialWeatherState
} from './reducers/weather.reducer';
import { FETCHED, FETCHING, FETCH_FAILED } from './constants';
import {
  CITY_WEATHER_FETCH_REQUESTED,
  CITY_WEATHER_FETCH_SUCCEEDED,
  CITY_WEATHER_FETCH_FAILED,
  SET_LAST_UPDATE_DATE
} from './actions';

import expect from 'expect';

const now = Date.now();
Date.now = jest.genMockFunction().mockReturnValue(now);

describe('weather reducer', () => {
  it('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual(initialWeatherState);
  });

  it('should handle fetch city weather data request', () => {
    expect(
      weatherReducer(undefined, {
        type: CITY_WEATHER_FETCH_REQUESTED,
        city: 'Barcelona'
      })
    ).toEqual({
      cities: ['Barcelona', 'San Francisco', 'London', 'Paris'],
      citiesWeatherInfo: {
        Barcelona: {
          data: {},
          date: Date.now(),
          status: FETCHING
        }
      },
      lastUpdate: ''
    });
  });

  it('should handle fetch failed city weather data', () => {
    expect(
      weatherReducer(undefined, {
        type: CITY_WEATHER_FETCH_FAILED,
        city: 'Barcelona'
      })
    ).toEqual({
      cities: ['Barcelona', 'San Francisco', 'London', 'Paris'],
      citiesWeatherInfo: {
        Barcelona: {
          data: {},
          date: Date.now(),
          status: FETCH_FAILED
        }
      },
      lastUpdate: ''
    });
  });

  it('should handle change of the last update date', () => {
    expect(
      weatherReducer(undefined, {
        type: SET_LAST_UPDATE_DATE
      })
    ).toEqual({
      ...initialWeatherState,
      lastUpdate: Date.now()
    });
  });
});
