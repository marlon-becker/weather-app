import { FETCHED, FETCHING, FETCH_FAILED } from '../../constants';

import React, { Component } from 'react';

import './CityListItem.sass';
import Loader from '../Loader/Loader';
import { getWeatherIcon } from '../../services/helpers';

class CityListItem extends Component {
  goToCityDetail = () => {
    this.props.history.push(`/city/${this.props.cityData.data.name}`);
  };
  renderStatus = cityData => {
    switch (cityData.status) {
      case FETCHED:
        const weatherIcon = getWeatherIcon(
          cityData.data.weather[0].description
        );
        return (
          <div
            onClick={this.goToCityDetail}
            className="CityListItem__content--fetched"
          >
            <i className={`wi ${weatherIcon}`} />
            <div className="CityListItem__temperature">
              {Math.round(cityData.data.main.temp)}º
            </div>
            <div className="CityListItem__data">{cityData.data.name}</div>
          </div>
        );
      case FETCHING:
        return (
          <div className="CityListItem__content--fetching">
            <Loader />
          </div>
        );
      case FETCH_FAILED:
        return (
          <div className="CityListItem__content--fetch-failed">
            Error loading the data!
          </div>
        );
      default:
    }
  };

  render() {
    return (
      <div className="CityListItem">
        {this.renderStatus(this.props.cityData)}
      </div>
    );
  }
}

export default CityListItem;
