import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import './styles/index.sass';
import mySaga from './sagas';
import reducers from './reducers';
import WeatherApp from './containers/WeatherApp/WeatherApp';
import registerServiceWorker from './registerServiceWorker';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store using reduces and sagaMiddleware
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
