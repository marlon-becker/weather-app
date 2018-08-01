import { connect } from 'react-redux';
import React, { Component } from 'react';
import CityListItem from '../CityListItem/CityListItem';

import './CityList.sass';

class CityList extends Component {
  render() {
    return (
      <ul className="CityList">
        {this.props.cities.map(city => (
          <CityListItem
            key={city}
            cityData={this.props.citiesWeatherInfo[city]}
            history={this.props.history}
          />
        ))}
      </ul>
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList);
