import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import CitiesStore from 'stores/cities.js';
import UserStore from 'stores/user.js';
import WeatherWidget from 'components/weather-widget.js';
import { convertTemperature } from 'utils/weather.js';

import 'loader.less';
import 'forecast-dashboard.less';

class ForecastDashboard extends React.Component {

  static getStores() {
    return [CitiesStore, UserStore];
  }

  static getPropsFromStores() {
    return { cities: CitiesStore.getState(), user: UserStore.getState() };
  }

  constructor(props) {
    super(props);

    this.state = { openCity: null };

    this.getCityFromStore = this.getCityFromStore.bind(this);
  }

  componentWillMount() {
    if (this.props.cities.openCities && this.props.cities.openCities.length > 0) {
      this.getCityFromStore(this.props.cities.openCities, this.props.view);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.cities.isLoading !== nextProps.cities.isLoading || this.props.view !== nextProps.view) {
      this.getCityFromStore(nextProps.cities.openCities, nextProps.view);
    }
  }

  getCityFromStore(cities, view) {
    const openCity = cities.find((city) => city.city.name === view);

    if (openCity) {
      this.setState({ openCity: openCity });
    }
  }

  render() {
    if (this.props.isLoading) {
      return <div className="spinner"></div>
    }
    else if (this.state.openCity) {
      const widgets = [];

      for (let i = 1; i < 6; i++) {
        widgets.push(<WeatherWidget temperatureUnit={this.props.user.temperatureUnit} key={this.state.openCity.list[i].dt} weather={this.state.openCity.list[i]}></WeatherWidget>);
      }

      return (<div className="forecast-dashboard">
        <h3>{this.state.openCity.city.name}, {this.state.openCity.city.country}</h3>
        <span>{new Date(this.state.openCity.list[0].dt*1000).toISOString().slice(0, 10)}</span><br/>
        <span>{this.state.openCity.list[0].weather[0].main}</span><br/>
        <img src={`http://openweathermap.org/img/w/${this.state.openCity.list[0].weather[0].icon}.png`} title={this.state.openCity.list[0].weather[0].description}/><br/>
        <span>Temperature (min - max): {convertTemperature(this.props.user.temperatureUnit, this.state.openCity.list[0].temp.min)} -
        {convertTemperature(this.props.user.temperatureUnit, this.state.openCity.list[0].temp.max)}</span>
        {widgets}
      </div>);
    }

    return null;
  }
}

export default connectToStores(ForecastDashboard);
