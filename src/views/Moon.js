import React, { Component } from 'react';
import SunCalc from 'suncalc';
import style from '../index.css';

class Moon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: {
        latitude: 48.805903699999995,
        longitude: 2.6182052
      }
    };
  }

  onGeolocationFailed(error) {
    var errors = {
      1: 'Permission denied',
      2: 'Position unavailable',
      3: 'Request timeout'
    };
    this.setState({ geolocationFailedMessage: errors[error.code] });
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({ position: position.coords });
      }, this.onGeolocationFailed);
    } else {
      this.setState({ geolocationFailedMessage: 'Geolocation is not supported, please change your browser' });
    }
  }

  render() {
    const { angle, phase } = SunCalc.getMoonIllumination(this.props.date,
      this.state.position.latitude, this.state.position.longitude);
    const isWaxing = angle < 0;
    return <div className={ style.moon }>
      { phase }
      <span>{ isWaxing ? 'waxing' : 'waning' }</span>
    </div>;
  }

}

Moon.propTypes = {
  date: React.PropTypes.object
};

export default Moon;
