import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import connectToStores from 'alt-utils/lib/connectToStores';
import CitiesActions from 'actions/cities.js'
import CitiesStore from 'stores/cities.js';

import 'forecast-navbar.less';

class ForecastNavbar extends React.Component {

  static getStores() {
    return [CitiesStore];
  }

  static getPropsFromStores() {
    return CitiesStore.getState();
  }

  constructor(props) {
    super(props);

    this.closeCity = this.closeCity.bind(this);
  }

  closeCity(city) {
    this.props.selectView('home');
    CitiesActions.closeCity(city);
  }

  render() {
    const homeActiveClass = this.props.selectedNav === 'home' ? 'active' : null;

    return (<nav className="navbar navbar-inverse">
      <div className="navbar-header"><a href="#" className="navbar-brand">Weather Forecast</a></div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className={homeActiveClass}><a href="#" onClick={this.props.selectView.bind(null, 'home')}>Home</a></li>
          {this.props.openCities && this.props.openCities.length > 0 ? this.props.openCities.map((city) => {
            const activeClass = this.props.selectedNav === city.city.name ? 'active' : null;
            return (<li className={activeClass} key={city.city.id}>
                <a href="#" onClick={this.props.selectView.bind(null, city.city.name)}>{city.city.name}</a>
                <a href="#" onClick={this.closeCity.bind(null, city.city.name)}><Glyphicon glyph="remove" /></a>
              </li>);
          }) : null}
        </ul>
      </div>
    </nav>)
  }
}

export default connectToStores(ForecastNavbar);
