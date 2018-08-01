import { connect } from 'react-redux';
import React, { Component } from 'react';

import Timer from '../../components/Timer/Timer';
import { fetchCityWeatherData, setLastUpdateDate } from '../../actions';
import CityList from '../../components/CityList/CityList';
import CityDetail from '../../components/CityDetail/CityDetail';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './WeatherApp.sass';
import '../../styles/weather/css/weather-icons.sass';

// Route configuration
const routes = [
  {
    path: '/city/:name',
    component: CityDetail
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.loadSelectedCitiesWeatherData();
  }

  loadSelectedCitiesWeatherData = () => {
    this.props.cities.forEach(city => this.props.fetchCityWeatherData(city));
    this.props.setLastUpdateDate();
  };

  render() {
    return (
      <Router>
        <div className="WeatherApp">
          <header className="WeatherApp__header">
            <h1 className="WeatherApp__title">
              <i className="wi wi-sunrise" /> Your weather today
            </h1>
            <Timer onTimerFinish={this.loadSelectedCitiesWeatherData} />
          </header>
          <main className="WeatherApp__main">
            <Switch>
              <Route exact path="/" component={CityList} />
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </main>
          <footer className="WeatherApp__footer">
            Weather app by{' '}
            <a href="https://github.com/marlonbs">Marlon Becker</a> for Ulabox
            test
          </footer>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.weather.cities,
    citiesWeatherInfo: state.weather.citiesWeatherInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLastUpdateDate: () => dispatch(setLastUpdateDate()),
    fetchCityWeatherData: city => dispatch(fetchCityWeatherData(city))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherApp);
