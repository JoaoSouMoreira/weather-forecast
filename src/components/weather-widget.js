import React from 'react';

import { convertTemperature } from '../utils/weather.js';

class WeatherWidget extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="weather-widget">
      <span>{new Date(this.props.weather.dt*1000).toISOString().slice(0, 10)}</span>
      <img src={`http://openweathermap.org/img/w/${this.props.weather.weather[0].icon}.png`} title={this.props.weather.weather[0].description}/>
      <span>{convertTemperature(this.props.temperatureUnit, this.props.weather.temp.min)} - {convertTemperature(this.props.temperatureUnit, this.props.weather.temp.max)}</span>
    </div>);
  }
}

export default WeatherWidget;
