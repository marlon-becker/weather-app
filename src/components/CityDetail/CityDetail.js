import { FETCHED, FETCHING, FETCH_FAILED } from '../../constants';
import { connect } from 'react-redux';
import moment from 'moment';
import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import { getWeatherIcon } from '../../services/helpers';

import './CityDetail.sass';

class CityDetail extends Component {
  renderStatus = cityData => {
    switch (cityData.status) {
      case FETCHED:
        const weatherIcon = getWeatherIcon(
          cityData.data.weather[0].description
        );
        return (
          <div className="CityListDetail__content--fetched">
            <div
              onClick={this.props.history.goBack}
              className="WeatherApp__back"
            >
              &lt; back
            </div>

            <div className="CityListDetail__title">{cityData.data.name}</div>
            <div className="CityListDetail__temperature">
              <i className={`wi ${weatherIcon}`} />{' '}
              {Math.round(cityData.data.main.temp)}º
            </div>

            <ul className="CityListDetail__data">
              <li>
                <p>Wind</p>
                <p className="CityListDetail__data__details">
                  <span>{cityData.data.wind.speed}km/h</span>
                </p>
              </li>
              <li>
                <p>Humidity</p>
                <p className="CityListDetail__data__details">
                  <span>{cityData.data.main.humidity}</span>
                </p>
              </li>
              <li>
                <p>Pressure</p>
                <p className="CityListDetail__data__details">
                  <span>{cityData.data.main.pressure}</span>
                </p>
              </li>
              <li>
                <p>Min Temp </p>
                <p className="CityListDetail__data__details">
                  <span>{cityData.data.main.temp_min}º</span>
                </p>
              </li>
              <li>
                <p>Max Temp</p>
                <p className="CityListDetail__data__details">
                  <span>{cityData.data.main.temp_max}º</span>
                </p>
              </li>
              <li>
                <p>Sunrise</p>
                <p className="CityListDetail__data__details">
                  <span>
                    {moment.unix(cityData.data.sys.sunrise).format('h:mm:ss a')}
                  </span>
                </p>
              </li>
              <li>
                <p>Sunset</p>
                <p className="CityListDetail__data__details">
                  <span>
                    {moment.unix(cityData.data.sys.sunset).format('h:mm:ss a')}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        );
      case FETCHING:
        return (
          <div className="CityListDetail__content--fetching">
            <Loader position="center-center" />
          </div>
        );
      case FETCH_FAILED:
        return (
          <div className="CityListDetail__content--fetch-failed">
            Error loading the data!
          </div>
        );
      default:
    }
  };

  render() {
    const cityData = this.props.citiesWeatherInfo[this.props.match.params.name];
    return <div className="CityDetail">{this.renderStatus(cityData)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    citiesWeatherInfo: state.weather.citiesWeatherInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetail);
