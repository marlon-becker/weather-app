import { UPDATE_INTERVAL } from '../../constants';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './Timer.sass';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerInterval: {},
      timeLeft: ''
    };
  }

  // Set interval for updating the timer
  componentDidMount() {
    if (this.props.lastUpdate) {
      const timerInterval = setInterval(() => {
        const currentTime = new Date().getTime() / 1000;
        const timeLeft = Math.floor(
          this.props.lastUpdate / 1000 + UPDATE_INTERVAL - currentTime
        );
        if (timeLeft === 0) {
          this.props.onTimerFinish();
        }
        this.setState({ timeLeft: timeLeft < 0 ? 0 : timeLeft });
      }, 1000);
      this.setState({ timerInterval });
    }
  }

  //Clear interval when component is unmounted
  componetDidUnmount() {
    clearInterval(this.state.timerInterval);
  }

  render() {
    return this.state.timeLeft ? (
      <div className="Timer">next weather update in {this.state.timeLeft}s</div>
    ) : (
      ''
    );
  }
}

const mapStateToProps = state => {
  return {
    lastUpdate: state.weather.lastUpdate
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
