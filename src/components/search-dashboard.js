import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import { Button } from 'react-bootstrap';
import CitiesActions from '../actions/cities.js';

import cityList from '../../resources/city.list.us.json';

import 'react-virtualized/styles.css';
import 'react-select/dist/react-select.css';
import 'react-virtualized-select/styles.css';
import '../../css/search-dashboard.less';

class SearchDashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = { selectedCity: null };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.openCity = this.openCity.bind(this);
  }

  onSearchChange(value) {
    this.setState({ selectedCity: value });
  }

  openCity(e) {
    if (this.state.selectedCity) {
      this.props.selectView(this.state.selectedCity.label);
      CitiesActions.openCity(this.state.selectedCity);
    }
  }

  render() {
    const cityOptions = cityList.map((city) => { return { label: city.name, value: city._id }});

    return (<div className="search-dashboard">
      <h1>Welcome to the weather forecast dashboard</h1>
      <p>Simply select or search for a city to get a 5 day weather forecast. When you are done, click the Go button.</p>
      <div className="select-form">
        <VirtualizedSelect onChange={this.onSearchChange} options={cityOptions} value={this.state.selectedCity}></VirtualizedSelect>
        <Button className="select-button" bsStyle="primary" onClick={this.openCity}>Go</Button>
      </div>
    </div>);
  }
}

export default SearchDashboard;
