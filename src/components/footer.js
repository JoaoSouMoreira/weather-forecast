import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import UserActions from '../actions/user.js'
import UserStore from '../stores/user.js';

import '../../css/footer.less';

class Footer extends React.Component {

  static getStores() {
    return [UserStore];
  }

  static getPropsFromStores() {
    return UserStore.getState();
  }

  constructor(props) {
    super(props);
  }

  onUnitChange(e) {
    e.stopPropagation();
    UserActions.setTemperatureUnit(e.currentTarget.value);
  }

  render() {

    return (<footer className="footer">
      <div className="btn-group">
        <input checked={this.props.temperatureUnit === 'C'} onChange={this.onUnitChange} value="C" type="radio" id="celsius" name="celsius" />
        <label class="btn" for="celsius">Celsius</label>
        <input checked={this.props.temperatureUnit === 'F'} onChange={this.onUnitChange} value="F" type="radio" id="fahrenheit" name="fahrenheit" />
        <label class="btn" for="fahrenheit">Fahrenheit</label>
        <input checked={this.props.temperatureUnit === 'K'} onChange={this.onUnitChange} value="K" type="radio" id="kelvin" name="kelvin" />
        <label class="btn" for="kelvin">Kelvin</label>
      </div>
    </footer>)
  }
}

export default connectToStores(Footer);
