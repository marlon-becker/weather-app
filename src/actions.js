export const CITY_WEATHER_FETCH_REQUESTED = 'CITY_WEATHER_FETCH_REQUESTED';
export const CITY_WEATHER_FETCH_FAILED = 'CITY_WEATHER_FETCH_FAILED';
export const CITY_WEATHER_FETCH_SUCCEEDED = 'CITY_WEATHER_FETCH_SUCCEEDED';
export const SET_LAST_UPDATE_DATE = 'SET_LAST_UPDATE_DATE';

export const fetchCityWeatherData = city => ({
  type: CITY_WEATHER_FETCH_REQUESTED,
  city
});

export const fetchCityWeatherDataFailed = city => ({
  type: CITY_WEATHER_FETCH_FAILED,
  city
});

export const fetchCityWeatherDataSucceded = city => ({
  type: CITY_WEATHER_FETCH_SUCCEEDED,
  city
});

export const setLastUpdateDate = city => ({
  type: SET_LAST_UPDATE_DATE,
  city
});
