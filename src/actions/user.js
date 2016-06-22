import alt from '../alt-singleton.js';

class UserActions {

  setTemperatureUnit(unit) {
    return unit;
  }
}

export default alt.createActions(UserActions);
