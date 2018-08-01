const API_KEY = '1dd204628a727f5f68ac7f428820c128';
const API_URL = 'https://api.openweathermap.org/data';
const API_VERSION = '2.5';
const UNITS = 'metric';

function fetchApiData(endpoint, query, callback) {
  return fetch(
    `${API_URL}/${API_VERSION}/${endpoint}?q=${query}&APPID=${API_KEY}&units=${UNITS}`
  ).then(res => res.json());
}

export const fetchCityData = async city => {
  return await fetchApiData('weather', city);
};
