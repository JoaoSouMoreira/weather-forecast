import alt from 'alt';
import UserActions from 'actions/user.js';

class UserStore {
  constructor() {
    this.state = { temperatureUnit: 'C' };

    this.bindListeners({
      setTemperatureUnit: UserActions.setTemperatureUnit
    });
  }

  setTemperatureUnit(unit) {
    this.setState({ temperatureUnit: unit });
  }
}

export default alt.createStore(UserStore, 'UserStore');
