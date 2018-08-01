// import { all } from 'redux-saga/effects'
//
// import { weatherSagas } from './weather';
//
//
//
// export default function* sagas() {
//   yield all([
//     ...weather,
//   ]);
// }

import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCityData } from './services/weather.api';

// worker Saga: will be fired on CITY_FETCH_REQUESTED actions
function* fetchCityWeatherData(action) {
  try {
    const cityData = yield call(fetchCityData, action.city);
    yield put({
      type: 'CITY_WEATHER_FETCH_SUCCEEDED',
      city: action.city,
      data: cityData
    });
  } catch (e) {
    yield put({ type: 'CITY_WEATHER_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchCityWeatherData on each dispatched `CITY_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('CITY_WEATHER_FETCH_REQUESTED', fetchCityWeatherData);
}

export default mySaga;
